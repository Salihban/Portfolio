import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private http = inject(HttpClient);
  private translate = inject(TranslateService);

skillsIcons = [
  {
    name: 'HTML',
    image:'assets/icons/HTML.svg'
  },
  {
    name: 'CSS',
    image:'assets/icons/CSS.svg'
  },
  {
    name: 'JavaScript',
    image:'assets/icons/Javascript.svg'
  },
  {
    name: 'TypeScript',
    image:'assets/icons/Typescript.svg'
  },
  {
    name: 'Angular',
    image:'assets/icons/Angular.svg'
  },
  {
    name: 'Git',
    image:'assets/icons/Git.svg'
  },
  {
    name: 'Rest-Api',
    image:'assets/icons/Rest-API.svg'
  }
];

scrollToContact() {
  document.getElementById('Kontact')?.scrollIntoView({
    behavior: 'smooth'
  });
}

get isGerman(): boolean {
    return this.translate.currentLang() === 'de';
  }
}