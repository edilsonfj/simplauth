import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class ErrorMiddleware implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      (exception.getResponse() as any).message ||
      exception.message ||
      'Unexpected error occurred';

    response.status(status).json({
      statusCode: status,
      errorCode: `ERR-${status}`,
      message: message,
      timestamp: new Date().toISOString(),
    });
  }
}
