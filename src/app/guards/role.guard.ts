import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private _router: Router, private _authService: AuthenticationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    const { expectedRoles } = route.data;
    const userRole = this._authService.getUseRole();
    if (userRole && expectedRoles.includes(userRole)) {
      return true;
    } else {
      this._router.navigate(['/login']);
    }
  }
}
