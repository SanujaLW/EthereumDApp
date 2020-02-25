import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Web3Service } from '../services/web3.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public web3: Web3Service, public router: Router) {}
  canActivate(): boolean {
    if (!this.web3.uport.isOnboard()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  
}
