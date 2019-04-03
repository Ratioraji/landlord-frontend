import { Component, OnInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { rentsService } from '../../../services/rents.service';

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.css']
})
export class RentsComponent implements OnInit {

  rents = [] ;
  rows = [] ;
  errorMessage: any  ;

  constructor( private RentsService : rentsService ) { }

  ngOnInit() {
    this.getRents();
  }
  getRents(){
    Helpers.setLoading(true);
    this.RentsService.getRents().subscribe(
      (response : any)=>{
        console.log(response);
        this.rents = response.rents ; 
        this.rents.map((asset, index) => {
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
