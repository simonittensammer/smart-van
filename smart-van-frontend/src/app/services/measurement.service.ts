import { Injectable } from '@angular/core';
import {Measurement} from '../models/measurement';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  SERVER_URL = 'http://localhost:8080/';
  measurements: Array<Measurement> = [];

  constructor(
    private http: HttpClient
  ) { }

  getAllMeasurements(): Observable<Array<Measurement>> {
    return this.http.get<Array<Measurement>>(this.SERVER_URL + 'measurement');
  }
}
