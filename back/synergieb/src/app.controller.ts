import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Greetings } from './interfaces/greetings';

import { Neo4jDbService } from '@app/neo4j';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly neo4jService: Neo4jDbService  
  ) {}

  @Get()
  getHello(): Greetings {
    return this.appService.getHello();
  }

  @Get('/data')
  getData() {
    return this.neo4jService.getData();
  }
}
