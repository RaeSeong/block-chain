import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
import { SlackSupport } from 'src/support/slack-support';
  
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        
        const status =
        exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;

        const res: any = exception.getResponse();

        const slackSupport = new SlackSupport()
        slackSupport.sendNotificationToSlack(res.message)
        response.status(status).json({
            success: false,
            message: res.message,
        });
    }
}