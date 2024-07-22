import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavSponsorComponent } from './sidenav-sponsor.component';

describe('SidenavSponsorComponent', () => {
  let component: SidenavSponsorComponent;
  let fixture: ComponentFixture<SidenavSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavSponsorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
