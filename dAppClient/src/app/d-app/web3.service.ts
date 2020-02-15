import { SmartContract } from './smart-contract';
import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { promisify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  private web3: any;

  constructor() { }

  async init(){
    let _etheruem = (window as any).ethereum;
    if(_etheruem !== undefined){
      this.web3 = new Web3(_etheruem);
      await _etheruem.enable();
      return true;
    }
    return false;
  }

  getContract(data: SmartContract){
    return new this.web3.eth.Contract(data.abi, data.address);
  }

  
}
