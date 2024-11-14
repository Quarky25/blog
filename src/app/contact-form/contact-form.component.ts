import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
submitted: boolean = false;
contactForm!: FormGroup;

constructor(private fb: FormBuilder) {
  this.createForm();
  
}

createForm() {
  this.contactForm = this.fb.group({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    eMail: new FormControl<string> ('', [Validators.required, Validators.email]),
    message: new FormControl<string> ('', [Validators.required, Validators.minLength(10)]),
    subject: new FormControl<string>('', [Validators.required, Validators.minLength(3)])
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
  onSubmit(): void {
    if(this.contactForm.valid) {
      alert('Form Submitted')
    console.log("Form Submitted", this.contactForm.value);
    this.contactForm.reset();
  this.contactForm.valueChanges.subscribe(value => {
    console.log('New Value:', value);
    
  })
    
  }else {
    console.log('Form submit failed');
    this.contactForm.markAllAsTouched();
    
  }
  console.log(this.contactForm.valid);
  
}
}
