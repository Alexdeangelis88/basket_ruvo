import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosterGiovaniliComponent } from './roster-giovanili.component';

describe('RosterGiovaniliComponent', () => {
  let component: RosterGiovaniliComponent;
  let fixture: ComponentFixture<RosterGiovaniliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RosterGiovaniliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RosterGiovaniliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
