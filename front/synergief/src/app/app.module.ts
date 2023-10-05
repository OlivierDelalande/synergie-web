import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackCommService } from './backcomm/backcomm.service';
import { BackcommComponent } from './backcomm/backcomm.component';

@NgModule({
  declarations: [
    AppComponent,
    BackcommComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BackCommService],
  bootstrap: [AppComponent]
})
export class AppModule { }
