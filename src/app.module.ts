import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockChainSupport } from './support/block-chain-support';
import { SlackSupport } from './support/slack-support';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService, BlockChainSupport, SlackSupport],
})
export class AppModule {}
