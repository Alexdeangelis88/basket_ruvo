import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiglietteriaComponent } from './biglietteria.component';

describe('BiglietteriaComponent', () => {
  let component: BiglietteriaComponent;
  let fixture: ComponentFixture<BiglietteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiglietteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiglietteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
