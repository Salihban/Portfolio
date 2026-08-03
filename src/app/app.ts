import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';
import { Portfolio } from './portfolio/portfolio';
import { Referenz } from './referenz/referenz';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, AboutMe, Skills, Portfolio, Referenz, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
