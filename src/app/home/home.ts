import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { AboutMe } from '../about-me/about-me';
import { Skills } from '../skills/skills';
import { Portfolio } from '../portfolio/portfolio';
import { Referenz } from '../referenz/referenz';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe, Skills, Portfolio, Referenz, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
