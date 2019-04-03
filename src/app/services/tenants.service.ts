import { Injectable } from '@angular/core';
import { HttpHeaders ,HttpClient } from '@angular/common/http';
import { AuthenticationService } from './index';
import { environment } from '../../environments/environment';

@Injectable()
export class TenantsService {

  constructor(private http:HttpClient,private authservice:AuthenticationService) { }
  
  httpOptions:any = {
    headers: new HttpHeaders({
      'Authorization': this.authservice.getToken()
    })
  };
  
  getTenants(){
    return this.http.get(
      `${
        environment.apiBaseURL
      }/admin/alltenants`,
      this.httpOptions
    );
  }

}
