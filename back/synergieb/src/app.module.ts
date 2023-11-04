import { Neo4jModule } from 'nest-neo4j'

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Neo4jDbService } from '@app/neo4j';

// test must be changed with right credentials if this method where to be used
@Module({
  imports: [
    Neo4jModule.forRoot({
      scheme: 'neo4j+s',
      host: 'test.databases.neo4j.io',
      port: 7474,
      username: 'neo4j',
      password: 'test'
    })
  ],
  controllers: [AppController],
  providers: [AppService, Neo4jDbService],
})
export class AppModule {}
