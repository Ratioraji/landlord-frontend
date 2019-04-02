import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { User } from '../../../models';
import { UserService, AuthenticationService } from '../../../services';
import { Router } from '@angular/router';

declare let mLayout: any;
@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {
  constructor(
    private _router: Router,
    private _userService: UserService,
    private _authService: AuthenticationService,
  ) {}
  user: User;
  ngOnInit() {
    const currentUser: any = this._userService.getCurrentUser();
    this.user = currentUser;
  }
  ngAfterViewInit() {
    mLayout.initHeader();
  }
  logout() {
    Helpers.setLoading(true);
    this._authService.logout();
    this._router.navigate(['/login']);
  }
}
