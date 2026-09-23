import { Component, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-referenz',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './referenz.html',
  styleUrl: './referenz.scss'
})
export class Referenz {
  translate = inject(TranslateService);

  currentReference = signal(0);

  referenzImages = [
    "assets/images/Ref-pic.png",
    "assets/images/Ref-pic2.png",
    "assets/images/Ref-pic3.png"
  ];

  previousReference(): void {
    if (this.currentReference() === 0) {
      this.currentReference.set(this.referenzImages.length - 1);
      return;
    }
    this.currentReference.update(value => value - 1);
  }

  nextReference(): void {
    if (this.currentReference() === this.referenzImages.length - 1) {
      this.currentReference.set(0);
      return;
    }
    this.currentReference.update(value => value + 1);
  }

  setCurrentReference(index: number): void {
    this.currentReference.set(index);
  }

  getReferenceLabel(index: number): string {
    return` Reference ${index + 1}`;
  }
}