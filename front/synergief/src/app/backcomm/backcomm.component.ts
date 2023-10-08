import { Component, OnInit } from '@angular/core';
import { BackCommService } from './backcomm.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-backcomm',
  templateUrl: './backcomm.component.html',
  styleUrls: ['./backcomm.component.scss']
})
export class BackcommComponent implements OnInit {
  obs: Subscription | undefined;

  greetings = ''
  constructor(private backcommService: BackCommService) {}

  getGreetings() {
  this.obs = this.backcommService
      .getGreetings()
      .subscribe(data => {
        this.greetings = data.greetings;
        console.log('data', data.greetings)
      })
  }

  ngOnInit(): void {
    this.getGreetings();
  }
  ngOnDestroy() {
    this.obs?.unsubscribe();
  }
}
