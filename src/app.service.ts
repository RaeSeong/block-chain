import { Injectable } from '@nestjs/common';
import { BlockChainSupport } from './support/block-chain-support';
import { SlackSupport } from './support/slack-support';

@Injectable()
export class AppService {
    constructor(
        private readonly blockChainSupport: BlockChainSupport,
        private readonly slackSupport: SlackSupport
    ) {}
    getHello(): string {
        return 'Hello World!';
    }

    async getBlock(blockNumber: number): Promise<void> {
        await this.blockChainSupport.getBlock(blockNumber);
    }

    async getStartBlock(): Promise<number> {
        return await this.blockChainSupport.getStartBlockNumber();
    }

    async slack(){
        this.slackSupport.sendNotificationToSlack("hello~")
    }
}
