import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UportService {

  private _uport: any;
  private _did: any;
  private _login: any;

  constructor(public router: Router) {
    const Connect = (window as any).uportconnect;
    this._uport = new Connect('EthereumDApp', {
      network: "ropsten"
    })

    this._uport.onResponse('disclosureReq').then(res => {
      const did = res.payload.did;
      const verified = res.payload.verified;
      this._did = did;
      this._login = verified;
      localStorage.setItem('uPortUser', this._did);
      this.router.navigate(['/dApp']);
    })
  }

  getConnection(){
    return this._uport;
  }

  requestLogin(){
    const reqObj = { requested: ['name'],
                  notifications: true };
    this._uport.requestDisclosure(reqObj);
  }

  logout(){
    this._uport.logout();
    this._did = undefined;
    this._login = undefined;
    localStorage.removeItem('uPortUser');
  }

  getDID(){
    return this._did;
  }

  getLogin(){
    return this._login;
  }

  isOnboard(){
    let user = localStorage.getItem('uPortUser');
    return user !== null;
  }
}
