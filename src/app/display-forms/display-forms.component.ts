import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { ViewSubmittedFormComponent } from '../view-submitted-form/view-submitted-form.component';
// import { checkPostalCode } from './custom_validations/postal-code-validator';
@Component({
  selector: 'app-display-forms',
  templateUrl: './display-forms.component.html',
  styleUrls: ['./display-forms.component.css'],
})
export class DisplayFormsComponent implements OnInit {
  constructor(private fb: FormBuilder) {
  } // first step: define form builder
  // second step: define form group and form controls, takes in an object w different form controls as field
  // third step: link form group to [formGroup], nest form groups using formGroupName="" and link form controls using formControlName="" in the template
  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8), ]],
    email: ['', Validators.email],
    address: this.fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', [this.checkPostalCode]], // create custom validator here
    }),
    subscribe: [false],
    diet: ['veg'],
  }, {validator: [this.checkPassword, this.checkEmail]});
  // since we need to pass the entire form group for cross field validation, we specify the validator function as a separate json object

  get userName() {
    return this.registrationForm.get('userName');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get city() {
    return this.registrationForm.get('address')?.get('city');
  }

  get state() {
    return this.registrationForm.get('address')?.get('state');
  }

  get postalCode() {
    return this.registrationForm.get('address')?.get('postalCode');
  }
  // contructor() {}
  ngOnInit(): void {}

  checkPostalCode(control: AbstractControl) { // takes in the form control 
  // returns  either of 2 values:
  /* when validation fails: object where key is of type string, object is of type any
  validation passes: returns null
  */

  const answer : string = control.value;
  // if (answer?.length == 5) return null;
  if (answer.length == 5 && !isNaN(Number(answer))) return null;
  return { "Length": answer };
 }

 checkPassword(control: AbstractControl) {
  // control parameter doesn't refer to an individual form control, refers to form group, encompassing the different fields

  // here, refers to the registration form form group
  // because validator functions can only accept one parameter
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  // if password isn't blank and  the two are equal then return null else return error
  if (password?.value == confirmPassword?.value) return null;
  return {"mismatch" : true};
 }


 checkEmail(control: AbstractControl) {
  const email = control.get('email');
  const subscribed = control.get('subscribe');
  if (!subscribed) return null;
  // if entered email and subscribed
  if ((!email || email.value ==='') && subscribed.value) return {"noEmail" : true};
  return null;
 }
}


// recommended steps to applying validation rules:
/*
1. apply validation rule to form control
2. provide visual feedback for validation
3. display the appropriate message for the validation

you add the rule next to the default value during declaration
*/

