import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  imports: [TranslatePipe],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy {
  private http = inject(HttpClient);
  private translate = inject(TranslateService);

  get isGerman(): boolean {
    return this.translate.currentLang() === 'de';
  }
}
