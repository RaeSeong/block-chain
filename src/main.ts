import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './util/swagger';
import { HttpExceptionFilter } from './exception/exception-filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalFilters(new HttpExceptionFilter())
    setupSwagger(app)
    await app.listen(3000);
}
bootstrap();

// function loop(){
//     let blockNumber = getStartBlock()
//     while(true){
//         const block = getBlock(blockNumber)
//         if(block){
//             saveBlock(block)
//             block.transactions.map(e => {
//                 const transactionReceipt = getTransactionReceipt(e)
//                 saveTransaction(transactionReceipt)
//                 transactionReceipt.logs.map(e => {
//                     const log = getLog(e)
//                     saveLog(log)
//                 })
//             })
//             blockNumber += 1
//         } else {
//             setTimeout(()=>{},15000)
//         }
//     }
// }
// loop()