import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { APP_FILTER, APP_GUARD } from "@nestjs/core";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { CacheModule } from "@nestjs/cache-manager";
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";
import { LoggerMiddleware } from "./common/middlewares/logger.middleware";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver } from "@nestjs/apollo";
import { GithubModule } from "./external/github/github.module";

@Module({
  imports: [
    ThrottlerModule.forRoot ({throttlers: [{ttl: 60, limit: 10}]}),
    CacheModule.register({ isGlobal: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    GithubModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}