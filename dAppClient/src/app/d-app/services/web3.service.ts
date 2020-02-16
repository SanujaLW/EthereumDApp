import { SmartContract } from './../types/smart-contract';
import { Injectable } from '@angular/core';
import Web3 from 'web3';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  private web3: any;

  constructor() { 
    this.init().then((result)=>{
      if(result === false){
        console.log("No wallet detected");
      }
    });
  }

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
    if(this.web3 !== undefined){
      return new this.web3.eth.Contract(data.abi, data.address);
    }
  }

  getAddresses(){
    if(this.web3 !== undefined){
      return this.web3.eth.getAccounts();
    }
  }

  
}
