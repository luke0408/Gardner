import { ClassSerializerInterceptor } from "@nestjs/common";
import { NestFactory, Reflector } from "@nestjs/core";
import compression from 'compression';

import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";
import { SwaggerSetting } from "./config/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(compression());
  app.enableCors();

  SwaggerSetting(app);

  await app.listen(3000, '0.0.0.0', () => {
    if (process.env.NODE_ENV === "production") {
      process.send?.("ready");
    }
  });
}

bootstrap();