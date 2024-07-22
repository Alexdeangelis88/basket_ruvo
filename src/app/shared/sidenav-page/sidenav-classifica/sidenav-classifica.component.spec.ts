import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavClassificaComponent } from './sidenav-classifica.component';

describe('SidenavClassificaComponent', () => {
  let component: SidenavClassificaComponent;
  let fixture: ComponentFixture<SidenavClassificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavClassificaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavClassificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
