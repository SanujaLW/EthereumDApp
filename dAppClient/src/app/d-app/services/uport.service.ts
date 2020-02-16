import { Injectable } from '@angular/core';
import { Connect } from 'uport-connect';

@Injectable({
  providedIn: 'root'
})
export class UportService {

  private _uport: any;

  constructor() {
    this._uport = new Connect('dAppClient', { network: 'ropsten'});
   }
}
