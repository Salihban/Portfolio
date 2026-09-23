import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private http = inject(HttpClient);
  isSubmitted = false;

  

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
    privacy: new FormControl(false, Validators.requiredTrue)
  });

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formData = {
      access_key: '1387b5a4-f7e8-495d-a3b6-78c84eb61644', 
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

    this.http.post<any>('https://api.web3forms.com/submit', formData).subscribe({
      next: (response) => {
        console.log('Successfully sent!', response);

        if (!response.success) {
          alert(response.message || response.body?.message);
          return;
        }
        this.isSubmitted = true;
        this.contactForm.reset();

        setTimeout(() => this.isSubmitted = false, 3000);
      },
      error: (error) => {
        console.error('Error sending:', error);
      }
    });
  }
}