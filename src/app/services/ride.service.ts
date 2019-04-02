import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class RideService {
  constructor(private http: HttpClient) {}
  getDriverRides(startDate = null, endDate = null, offset = 0, limit = 50) {
    if (startDate && endDate) {
      return this.http.get(
        `${
          environment.apiBaseURL
        }/rides/drivers/view?startDate=${startDate}&endDate=${endDate}&limit=${limit}&offset=${offset}`,
      );
    }
    if (startDate) {
      return this.http.get(
        `${
          environment.apiBaseURL
        }/rides/drivers/view?startDate=${startDate}&limit=${limit}&offset=${offset}`,
      );
    }
    return this.http.get(
      `${environment.apiBaseURL}/rides/drivers/view?limit=${limit}&offset=${offset}`,
    );
  }

  getDriverEarnings(driverId: string) {
    return this.http.get(`${environment.apiBaseURL}/rides/driver/${driverId}/earnings`);
  }
  getDriverCompletedRides(driverId: string, startDate: any, EndDate: any) {
    return this.http.get(`${environment.apiBaseURL}/rides/driver/${driverId}`);
  }
  ReconcileRide(RideId: string, amountReconciled: number) {
    return this.http.put(`${environment.apiBaseURL}/rides/update/${RideId}`, {
      reconciled: true,
      reconciledAmount: amountReconciled,
    });
  }
}
