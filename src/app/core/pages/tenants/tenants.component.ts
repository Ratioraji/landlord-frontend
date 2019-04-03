import { Component, OnInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { TenantsService } from '../../../services/tenants.service';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {

  tenants = [];
  rows = [];
  errorMessage:any ;

  constructor( private tenantsService:TenantsService) { }

  ngOnInit() {
    this.getTenants();
  }
  getTenants(){
    Helpers.setLoading(true);
    this.tenantsService.getTenants().subscribe(
      (response : any)=>{
        console.log(response);
        this.tenants = response.tenants ; 
        this.tenants.map((asset, index) => {
          const row = {
            ...asset,
            index: index + 1
          };
          this.rows = [...this.rows, row];
        });
      },
      (error)=>{
        console.log(error);
        this.errorMessage = error.message ;
      }
    );
    Helpers.setLoading(false);
  }
}
