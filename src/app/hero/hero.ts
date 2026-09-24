import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private http = inject(HttpClient);
  private translate = inject(TranslateService);

scrollToContact() {
  document.getElementById('Kontact')?.scrollIntoView({
    behavior: 'smooth'
  });
}

get isGerman(): boolean {
    return this.translate.currentLang() === 'de';
  }
}