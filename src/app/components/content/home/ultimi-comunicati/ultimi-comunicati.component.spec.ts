import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimiComunicatiComponent } from './ultimi-comunicati.component';

describe('UltimiComunicatiComponent', () => {
  let component: UltimiComunicatiComponent;
  let fixture: ComponentFixture<UltimiComunicatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimiComunicatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimiComunicatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
