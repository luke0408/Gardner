import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { APP_GUARD } from "@nestjs/core";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { CacheModule } from "@nestjs/cache-manager";

@Module({
  imports: [
    ThrottlerModule.forRoot ({throttlers: [{ttl: 60, limit: 10}]}),
    CacheModule.register({ isGlobal: true })
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    
  }
}