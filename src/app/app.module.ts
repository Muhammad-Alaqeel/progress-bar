import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProgressBarCircleLineComponent } from './Components/progress-bar-circle-line/progress-bar-circle-line.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarCircleLineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
