import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Greetings } from './interface/greetings';

@Injectable({ providedIn: "root" })
export class HelloService {
  constructor(private http: HttpClient) { }
  private helloUrl = 'http://localhost:3000';

  getGreetings() {
    return this.http
      .get<Greetings>(this.helloUrl)
  }
}
