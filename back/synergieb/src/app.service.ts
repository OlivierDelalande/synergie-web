import { Injectable } from '@nestjs/common';
import { Greetings } from './interfaces/greetings';

@Injectable()
export class AppService {
  getHello(): Greetings {
    return {
      greetings:'Hello World!'
    };
  }
}
