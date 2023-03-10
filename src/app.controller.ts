import { Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/blocks')
    async getBlock(
        @Query('number')
        number: string,
    ): Promise<void> {
        await this.appService.getBlock(parseInt(number));
    }

    @Get('transaction-receipts')
    getTransaction(): void {

    }

    @Get('start-blocks')
    async getStartBlock(): Promise<number> {
        return await this.appService.getStartBlock();
    }

    @Post('message')
    async send(){
        await this.appService.slack()
    }
}
