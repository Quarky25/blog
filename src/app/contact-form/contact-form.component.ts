import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
submitted = false;
contactForm: FormGroup;

constructor(private fb: FormBuilder) {
  this.contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    eMail: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],

  })
}

get name() {
  return this.contactForm.get('name');
}

get eMail() {
  return this.contactForm.get('eMail');
}

get message() {
  return this.contactForm.get('message');
}
// Handle form submit
  onSubmit() {
    if(this.contactForm.valid) {
    console.log("Form Submitted", this.contactForm.value);
  this.contactForm.reset();
    
  }else {
    this.contactForm.markAllAsTouched(); //highlight errors
  }
}
}
