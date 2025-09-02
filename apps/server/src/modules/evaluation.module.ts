import { Module } from "@nestjs/common";

import { EvaluationController } from "../controllers/evaluation.controller";
import { EvaluationService } from "../providers/evaluation.service";

@Module({
  controllers: [EvaluationController],
  providers: [EvaluationService],
})
export class EvaluationModule {}
