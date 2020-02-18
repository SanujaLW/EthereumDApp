import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UportService {

  private _uport: any;
  private _did: any;
  private _login: any;
  private router: Router;

  constructor(router: Router) {
    this.router = router;
    const Connect = (window as any).uportconnect;
    this._uport = new Connect('EthereumDApp', {
      network: "ropsten"
    })

    this._uport.onResponse('disclosureReq').then(res => {
      const did = res.payload.did
      const verified = res.payload.verified
      this._did = did;
      this._login = verified;
      this.router.navigate(['/dApp']);
    })
  }

  getConnection(){
    return this._uport;
  }

  requestLogin(){
    const reqObj = { requested: ['name', 'country'],
                  notifications: true }
    this._uport.requestDisclosure(reqObj);
  }

  getDID(){
    return this._did;
  }

  getLogin(){
    return this._login;
  }
}
