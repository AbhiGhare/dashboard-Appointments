import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComComponent } from './dashboard-com.component';

describe('DashboardComComponent', () => {
  let component: DashboardComComponent;
  let fixture: ComponentFixture<DashboardComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
