import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardticketsComponent } from './dashboardtickets.component';

describe('DashboardticketsComponent', () => {
  let component: DashboardticketsComponent;
  let fixture: ComponentFixture<DashboardticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardticketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
