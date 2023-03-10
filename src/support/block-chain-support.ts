import { Injectable } from '@nestjs/common';
import { Block, InfuraProvider, Log, TransactionReceipt } from 'ethers';

@Injectable()
export class BlockChainSupport {
    private async getProvider(): Promise<InfuraProvider> {
        const apiKey = process.env.API_KEY
        const provider = new InfuraProvider('homestead', apiKey);

        return provider;
    }

    async getStartBlockNumber(): Promise<number> {
        const provider = await this.getProvider();
        const startBlockNumber = await provider.getBlockNumber();

        return startBlockNumber;
    }

    async getBlock(blockNumber: number): Promise<Block> {
        const provider = await this.getProvider();
        const block = await provider.getBlock(blockNumber);

        console.log(block);
        return block;
    }

    async getTransactionReceipt(hash: string): Promise<TransactionReceipt> {
        const provider = await this.getProvider();
        const tx = await provider.getTransactionReceipt(hash);

        return tx;
    }

    async getLog(): Promise<void> {
        const provider = await this.getProvider();
        const log = await provider.getLogs({});
    }
}
