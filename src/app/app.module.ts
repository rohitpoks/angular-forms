import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayFormsComponent } from './display-forms/display-forms.component';
import { ViewSubmittedFormComponent } from './view-submitted-form/view-submitted-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayFormsComponent,
    ViewSubmittedFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
