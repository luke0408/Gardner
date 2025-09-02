import { TypedParam, TypedRoute } from "@nestia/core";
import { Controller, UseInterceptors } from "@nestjs/common";

import { Try } from "../types";
import { LoggingInterceptor } from "../common/interceptors/logging.interceptor";
import { TimeoutInterceptor } from "../common/interceptors/timeout.interceptor";
import { EvaluationService } from "../providers/evaluation.service";
import { createResponseForm } from "../common/interceptors/transform.interceptor";

@UseInterceptors(LoggingInterceptor, TimeoutInterceptor)
@Controller("api/v1/evaluation")
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @TypedRoute.Get(":github-username/contributions")
  public async readGithubUserContributions(
    @TypedParam("github-username") githubUsername: string,
  ): Promise<Try<boolean>> {
    const evaluation = await this.evaluationService.readGithubUserContributions(githubUsername);
    return createResponseForm(evaluation);
  }
}
