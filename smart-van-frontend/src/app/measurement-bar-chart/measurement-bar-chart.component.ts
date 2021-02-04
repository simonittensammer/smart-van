import {Component, OnInit} from '@angular/core';
import {MeasurementService} from '../services/measurement.service';
import {DatePipe} from '@angular/common';
import {Label} from 'ng2-charts';
import {ChartDataSets, ChartType} from 'chart.js';

@Component({
  selector: 'app-measurement-bar-chart',
  templateUrl: './measurement-bar-chart.component.html',
  styleUrls: ['./measurement-bar-chart.component.scss']
})
export class MeasurementBarChartComponent implements OnInit {

  constructor(
    public measurementService: MeasurementService
  ) {
  }

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartLabels: string[] = [];
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;
  public lineChartData: ChartDataSets[] = [];

  pipe = new DatePipe('en-US');

  ngOnInit(): void {
    this.measurementService.getAllMeasurements().subscribe(value => {
      this.measurementService.measurements = value;

      const tempList = this.measurementService.measurements.map(el => {
        return el.temp;
      });

      this.lineChartLabels = this.measurementService.measurements.map(el => {
        return this.pipe.transform(el.timeStamp, 'shortTime') + '';
      });

      this.lineChartData = [
        {data: tempList, label: 'Temperature (C°)'}
      ];
    });
  }

}
