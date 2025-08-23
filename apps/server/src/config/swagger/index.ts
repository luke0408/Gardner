import { readFileSync } from 'node:fs';
import path from 'node:path';

import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';

export const SwaggerSetting = (app: INestApplication) => {
  const swaagerConfig = readFileSync(path.join(__dirname, '../../swagger.json'), 'utf8');
  const swaggerDocument = JSON.parse(swaagerConfig);
  const configService = app.get(ConfigService);

  const env = configService.get<string>('NODE_ENV') ?? process.env.NODE_ENV ?? 'development';
  const host = configService.get<string>(`${env}_SERVER_HOST`) ?? process.env.SERVER_HOST;
  if (host) {
    if (Array.isArray(swaggerDocument.servers) && swaggerDocument.servers.length > 0) {
      swaggerDocument.servers[0].url = host;
    } else {
      swaggerDocument.servers = [{ url: host }];
    }
  }

  SwaggerModule.setup('api/nestia', app, swaggerDocument);
  SwaggerModule.setup('api', app, swaggerDocument);
};