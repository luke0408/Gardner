import { Module } from "@nestjs/common";

import { HealthModule } from "./controllers/health/HealthModule";

@Module({
  imports: [HealthModule],
})
export class MyModule {}
