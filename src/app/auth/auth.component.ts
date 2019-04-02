import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptLoaderService } from '../services/script-loader.service';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { AlertComponent } from '../directives/alert.component';
import { environment } from '../../environments/environment';
import { Helpers } from '../helpers';

declare let $: any;
declare let mUtil: any;
declare const gapi: any;

@Component({
  selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
  templateUrl: './auth.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AuthComponent implements OnInit {
  model: any = {};
  loading = false;
  email : string ;
  password : string ;

  @ViewChild('alertSignin', { read: ViewContainerRef })
  alertSignin: ViewContainerRef;
  @ViewChild('alertForgotPass', { read: ViewContainerRef })
  alertForgotPass: ViewContainerRef;

  constructor(
    private _router: Router,
    private _script: ScriptLoaderService,
    private _route: ActivatedRoute,
    private _authService: AuthenticationService,
    private _alertService: AlertService,
    private cfr: ComponentFactoryResolver,
  ) {}

  ngAfterViewInit() {
  }

  loginUser(){
    console.log(this.email,this.password);
    this._authService.login(this.email,this.password).subscribe(
      (response : any )=>{
        const data = response ; 
        console.log(data);
        if(data.token && data.status === 1){
          this._authService.setCurrentUser(this.email, data.token);
          this._router.navigate(['/'])
        }
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  
  ngOnInit() {
    // get return url from route parameters or default to '/'
    // this.returnUrl = '/';
    // this._router.navigate([this.returnUrl]);
    
    this._script
      .loadScripts(
        'body',
        ['assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js'],
        true,
      )
      .then(() => {
        Helpers.setLoading(false);
      });
  }

  showAlert(target) {
    this[target].clear();
    let factory = this.cfr.resolveComponentFactory(AlertComponent);
    let ref = this[target].createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
}
