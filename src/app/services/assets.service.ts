import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { AuthenticationService  } from "../services/authentication.service";

@Injectable()
export class AssetsService {
  
  constructor(private http: HttpClient,private authservice: AuthenticationService) { }
  
  httpOptions:any = {
    headers: new HttpHeaders({
      'Authorization': this.authservice.getToken()
    })
  };
  
  getAssets(){
    return this.http.get(
      `${
        environment.apiBaseURL
      }/admin/allassets`,
      this.httpOptions
    );
  }
  
}
