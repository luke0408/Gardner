import { ConfigModule } from "@nestjs/config";
import { Test } from "@nestjs/testing";
import assert from "node:assert";
import { before, describe, it } from "node:test";

import { EvaluationController } from "../../controllers/evaluation.controller";
import { EvaluationModule } from "../../modules/evaluation.module";
import { EvaluationService } from "../../providers/evaluation.service";

describe("Evaluation Entity", () => {
  let controller: EvaluationController;
  let service: EvaluationService;

  before(async () => {
    const module = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true }), EvaluationModule],
      controllers: [],
      providers: [],
    }).compile();

    controller = module.get<EvaluationController>(EvaluationController);
    service = module.get<EvaluationService>(EvaluationService);
  });

  describe("0. 테스트 환경을 확인합니다.", () => {
    it("0-1. Service와 Controller가 정의되어야 합니다.", async () => {
      assert.notStrictEqual(controller, undefined);
      assert.notStrictEqual(service, undefined);
    });
  });
});
