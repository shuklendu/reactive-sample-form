import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomDatePipe } from './custom-date.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, CustomDatePipe],
  bootstrap: [AppComponent],
  providers: [CustomDatePipe],
})
export class AppModule {}
