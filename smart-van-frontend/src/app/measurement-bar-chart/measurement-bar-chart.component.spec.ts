import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementBarChartComponent } from './measurement-bar-chart.component';

describe('MeasurementBarChartComponent', () => {
  let component: MeasurementBarChartComponent;
  let fixture: ComponentFixture<MeasurementBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
