import { Component, OnInit } from '@angular/core';
import { BackCommService } from './backcomm.service';
import { Observable } from 'rxjs';
import { Greetings } from './interface/greetings';

@Component({
  selector: 'app-backcomm',
  templateUrl: './backcomm.component.html',
  styleUrls: ['./backcomm.component.scss']
})
export class BackcommComponent implements OnInit {
  greetings: any = ''
  constructor(private backcommService: BackCommService) {}

  getGreetings() {
    this.greetings = this.backcommService
      .getGreetings()
      .subscribe(data => console.log('data', data.greetings))
  }

  ngOnInit(): void {
    this.getGreetings();
  }
}
