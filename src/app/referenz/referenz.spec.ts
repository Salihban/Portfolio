import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Referenz } from './referenz';

describe('Referenz', () => {
  let component: Referenz;
  let fixture: ComponentFixture<Referenz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Referenz],
    }).compileComponents();

    fixture = TestBed.createComponent(Referenz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
