import { Injectable } from "@nestjs/common";
import { Block, Log, TransactionReceipt } from "ethers";
import { Collection, MongoClient } from "mongodb";

@Injectable()
export class BlockChainDao {
    private static readonly MAIN_DB = 'block-chain';
    private static readonly BLOCK_COLLECTION = 'block';
    private static readonly TRASACTION_RECEIPT_COLLECTION = 'transaction-receipt';
    private static readonly LOG_COLLECTION = 'log';

    private async getConnection(collectionName: string): Promise<Collection> {
        const url = process.env.MONGO_URL;
        const mongoClient = new MongoClient(url);
        return mongoClient.db(BlockChainDao.MAIN_DB).collection(collectionName);
    }

    async saveBlock(block: Block): Promise<void> {
        const connection = await this.getConnection(BlockChainDao.BLOCK_COLLECTION);
        connection.insertOne(block);
    }

    async saveTransactionReceipt(transactionReceipt: TransactionReceipt): Promise<void> {
        const connection = await this.getConnection(BlockChainDao.TRASACTION_RECEIPT_COLLECTION);
        connection.insertOne(transactionReceipt);
    }

    async saveLog(log: Log): Promise<void> {
        const connection = await this.getConnection(BlockChainDao.LOG_COLLECTION);
        connection.insertOne(log);
    }
}