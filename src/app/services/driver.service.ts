import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class DriverService {
  constructor(private http: HttpClient) {}

  getDriver(driverId) {
    return this.http.get(`${environment.apiBaseURL}/drivers/${driverId}`);
  }
}
