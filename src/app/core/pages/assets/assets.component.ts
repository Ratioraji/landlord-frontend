import { Component, OnInit } from '@angular/core';
import { Helpers } from "../../../helpers";
import { AssetsService } from "../../../services/assets.service";

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {
  assets = [] ;
  rows = [] ;
  errorMessage :string ;

  constructor(private assetService:AssetsService) { }

  ngOnInit() {
    this.getAssets();
  }
  getAssets(){
    Helpers.setLoading(true);
    this.assetService.getAssets().subscribe(
      (response : any)=>{
        console.log(response);
        this.assets = response.assets ; 
        this.assets.map((asset, index) => {
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
