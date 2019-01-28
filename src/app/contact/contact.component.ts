import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PersonalData, ContactRequest } from 'src/models/contact-request';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

// https://malcoded.com/posts/angular-fundamentals-reactive-forms

export class ContactComponent implements OnInit {

  countries = ['USA', 'Germany', 'Italy', 'France'];
  requestTypes = ['Claim', 'Feedback', 'Help Request'];
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl(),
        mobile: new FormControl(),
        country: new FormControl()
      }),
      requestType: new FormControl(),
      text: new FormControl()
    });
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      personalData: formBuilder.group(new PersonalData()),
      requestType: '',
      text: ''
    });
  }

  onSubmit() {
    const RESULT: ContactRequest = Object.assign({}, this.contactForm.value);
    RESULT.personalData = Object.assign({}, RESULT.personalData);

    console.log(RESULT);
  }
  revert() {
    // resets to a blank object
    this.contactForm.reset();

    // resets to the provided model
    this.contactForm.reset({
      personalData: new PersonalData(),
      requestType: '',
      text: ''
    });
  }
}
