import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CinComponent } from './cin/cin.component';
import { CoutComponent } from './cout/cout.component';
import { CinoutComponent } from './cinout/cinout.component';

@NgModule({
  declarations: [
    AppComponent,
    CinComponent,
    CoutComponent,
    CinoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
