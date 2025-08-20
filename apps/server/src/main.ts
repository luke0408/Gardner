import { ClassSerializerInterceptor } from "@nestjs/common";
import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./app.module";
import compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.use(compression());
  app.enableCors();

  await app.listen(3000, '0.0.0.0', () => {
    if (process.env.NODE_ENV === "production") {
      process.send?.("ready");
    }
  });
}

bootstrap();