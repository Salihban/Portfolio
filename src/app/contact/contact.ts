import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  contactForm = new FormGroup({
    name: new FormControl ('', {
      validators: [Validators.required, Validators.minLength(3)]
    }),
    email: new FormControl ('', {
      validators: [Validators.required, Validators.email]
    }),
    message: new FormControl ('', {
      validators: [Validators.required, Validators.minLength(10)]
    }),
    privacy: new FormControl(false, {
      validators: [Validators.requiredTrue]
    })
  })
}
