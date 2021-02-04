export class Measurement {

  id: number;
  temp: number;
  timeStamp: Date;
  sensorId: number;

  constructor(id: number, temp: number, timeStamp: Date, sensorId: number) {
    this.id = id;
    this.temp = temp;
    this.timeStamp = timeStamp;
    this.sensorId = sensorId;
  }
}
