import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffGiovaniliComponent } from './staff-giovanili.component';

describe('StaffGiovaniliComponent', () => {
  let component: StaffGiovaniliComponent;
  let fixture: ComponentFixture<StaffGiovaniliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffGiovaniliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffGiovaniliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
