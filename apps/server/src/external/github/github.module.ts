import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { GithubService } from './github.service';
import { GithubResolver } from './github.resolver';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [GithubService, GithubResolver],
  exports: [GithubService],
})
export class GithubModule {}
