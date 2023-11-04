import { Module } from '@nestjs/common';
import { Neo4jDbService } from './neo4j.service';

@Module({
  providers: [Neo4jDbService],
  exports: [Neo4jDbService],
})
export class Neo4jModule {}
