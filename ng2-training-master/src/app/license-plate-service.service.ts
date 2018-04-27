import { Injectable } from '@angular/core';
import { LicensePlate } from './license-plate';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LicensePlateServiceService {

  constructor(private httpClient: HttpClient) { }

  getPlatList(): Observable<LicensePlate[]> {
    return this.httpClient.get<LicensePlate[]>('http://localhost:8000/data');
  }
}
