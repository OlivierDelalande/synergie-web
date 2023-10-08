import { Component, OnDestroy, OnInit } from '@angular/core';
import { HelloService } from './hello.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit, OnDestroy {
  obs: Subscription | undefined;

  greetings = '';
  constructor(private helloService: HelloService) {}

  getGreetings() {
  this.obs = this.helloService
      .getGreetings()
      .subscribe(data => {
        this.greetings = data.greetings;
      })
  }

  ngOnInit(): void {
    this.getGreetings();
  }
  ngOnDestroy() {
    this.obs?.unsubscribe();
  }
}
