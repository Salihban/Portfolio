import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
skillsIcons = [
  {
    name: 'HTML',
    image:'/assets/icons/HTML.svg'
  },
  {
    name: 'CSS',
    image:'/assets/icons/CSS.svg'
  },
  {
    name: 'JavaScript',
    image:'/assets/icons/Javascript.svg'
  },
  {
    name: 'TypeScript',
    image:'/assets/icons/Typescript.svg'
  },
  {
    name: 'Angular',
    image:'/assets/icons/Angular.svg'
  },
  {
    name: 'Git',
    image:'/assets/icons/Git.svg'
  },
  {
    name: 'Rest-Api',
    image:'/assets/icons/Rest-API.svg'
  }
];
}