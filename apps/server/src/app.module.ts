import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { CacheModule } from "@nestjs/cache-manager";

@Module({
  imports: [
    CacheModule.register({ isGlobal: true })
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    
  }
}