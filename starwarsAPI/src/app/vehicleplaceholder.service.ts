import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { vehicleResponse } from './types/Vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleplaceholderService {
  BASE_URL1 = 'https://swapi.dev/api/vehicles/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getVehicles(): Observable<vehicleResponse> {
    return this.http.get<vehicleResponse>(this.BASE_URL1);
  }
}
