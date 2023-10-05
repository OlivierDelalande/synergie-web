import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Greetings } from './interface/greetings';

@Injectable({ providedIn: "root" })
export class BackCommService {
  constructor(private http: HttpClient) { }
  private backcommUrl = 'http://localhost:3000';
  private options = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
    })
  };

  getGreetings() {
    console.log('enter get greetings')
    return this.http
      .get<Greetings>(this.backcommUrl, this.options)
  }
}
