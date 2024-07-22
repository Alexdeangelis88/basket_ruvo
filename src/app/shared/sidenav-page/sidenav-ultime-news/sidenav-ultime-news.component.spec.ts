import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavUltimeNewsComponent } from './sidenav-ultime-news.component';

describe('SidenavUltimeNewsComponent', () => {
  let component: SidenavUltimeNewsComponent;
  let fixture: ComponentFixture<SidenavUltimeNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavUltimeNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavUltimeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
