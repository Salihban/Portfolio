import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-legal',
  imports: [TranslatePipe],
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
})
export class Legal {}
