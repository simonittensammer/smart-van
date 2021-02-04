import { Component, OnInit } from '@angular/core';
import {MeasurementService} from '../services/measurement.service';

@Component({
  selector: 'app-measurement-overview',
  templateUrl: './measurement-overview.component.html',
  styleUrls: ['./measurement-overview.component.scss']
})
export class MeasurementOverviewComponent implements OnInit {

  constructor(
    public measurementService: MeasurementService
  ) { }

  ngOnInit(): void {
    this.measurementService.getAllMeasurements().subscribe(value => {
      this.measurementService.measurements = value;
    });
  }

}
