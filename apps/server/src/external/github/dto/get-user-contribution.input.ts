import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetUserContributionInput {
  @Field()
  username: string;

  constructor(username: string) {
    this.username = username;
  }
}
