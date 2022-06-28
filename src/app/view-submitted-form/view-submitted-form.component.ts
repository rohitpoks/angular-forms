import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-view-submitted-form',
  templateUrl: './view-submitted-form.component.html',
  styleUrls: ['./view-submitted-form.component.css'],
})
export class ViewSubmittedFormComponent implements OnInit {
  form : FormData;
  submitted : boolean;
  constructor() {
    this.form = new FormData();
    this.submitted = false;
  }

  ngOnInit(): void {}

  public viewLatestForm(form: any) {
    this.form.name = form['userName'];
    this.form.password = form['password'];
    this.form.email = form['email'];
    this.form.city = form['address']['city'];
    this.form.state = form['address']['state'];
    this.form.zip = form['address']['postalCode'];
    this.form.subscribe = form['subscribe']
    this.form.diet = form['diet'];
    this.submitted = true;
  }

  reset() {
    this.submitted = false;
  }
}

class FormData {
  name: string;
  password: string;
  email: string;
  city: string;
  state: string;
  zip: number;
  subscribe: boolean;
  diet: string;
  constructor() {
    this.name = '';
    this.password = '';
    this.email = '';
    this.city = '';
    this.state = '';
    this.zip =  0;
    this.subscribe = false;
    this.diet = '';
  }
}
