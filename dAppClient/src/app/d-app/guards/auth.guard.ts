import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UportService } from '../services/uport.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public uport: UportService, public router: Router) {}
  canActivate(): boolean {
    if (!this.uport.isOnboard()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  
}
