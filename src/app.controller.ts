import { Body, Controller, Get, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloDto } from './hello.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Put()
  putHello(@Body() body: HelloDto): HelloDto {
    return body;
  }
}
