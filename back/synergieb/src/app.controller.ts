import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Greetings } from './interfaces/greetings';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Greetings {
    return this.appService.getHello();
  }
}
