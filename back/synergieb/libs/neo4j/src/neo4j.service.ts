import { Injectable } from '@nestjs/common';

import { Neo4jService } from 'nest-neo4j'

@Injectable()
export class Neo4jDbService {
    constructor(
        private readonly neo4jService: Neo4jService
    ) {}

    async getData() {
        const data = await this.neo4jService.read(`MATCH (n) RETURN n`);
        return data;
    }
}
