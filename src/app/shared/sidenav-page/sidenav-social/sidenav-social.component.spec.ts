import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavSocialComponent } from './sidenav-social.component';

describe('SidenavSocialComponent', () => {
  let component: SidenavSocialComponent;
  let fixture: ComponentFixture<SidenavSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
