import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class rentsService {
  constructor(private http: HttpClient,private authservice: AuthenticationService) { }
  
  httpOptions:any = {
    headers: new HttpHeaders({
      'Authorization': this.authservice.getToken()
    })
  };
  
  getRents(){
    return this.http.get(
      `${
        environment.apiBaseURL
      }/admin/allrents`,
      this.httpOptions
    );
  }
 
}
