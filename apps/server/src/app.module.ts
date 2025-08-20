import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    
  }
}