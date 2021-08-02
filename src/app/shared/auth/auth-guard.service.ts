import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthenticated()) {
      return this.router.navigate(['/pages/login']);
    } else if (!this.authService.hasRoles(route.data.roles) ) {
      // role not authorised so redirect to home page
      this.router.navigate(['/pages/error']);
      return false;
    }
    return true
  }
}
