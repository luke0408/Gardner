import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GithubResolver } from './github.resolver';
import { GithubService } from './github.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [GithubService, GithubResolver],
  exports: [GithubService],
})
export class GithubModule {}
