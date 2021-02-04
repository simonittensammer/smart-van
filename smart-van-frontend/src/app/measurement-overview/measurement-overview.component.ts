import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MeasurementService} from '../services/measurement.service';
import {MatTableDataSource} from '@angular/material/table';
import {Measurement} from '../models/measurement';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-measurement-overview',
  templateUrl: './measurement-overview.component.html',
  styleUrls: ['./measurement-overview.component.scss']
})
export class MeasurementOverviewComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'temp', 'timeStamp', 'sensorId'];
  dataSource: MatTableDataSource<Measurement> = new MatTableDataSource<Measurement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public measurementService: MeasurementService
  ) { }

  ngOnInit(): void {
    this.measurementService.getAllMeasurements().subscribe(value => {
      this.measurementService.measurements = value;
      this.dataSource.data = value;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit(): void {
  }

}
