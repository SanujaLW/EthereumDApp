import { SmartContract } from './../types/smart-contract';
import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { UportService } from './uport.service';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  private web3: any;

  constructor(public uport: UportService) { 
    this.init(this.uport.getConnection().getProvider()).then((result)=>{
      if(result === false){
        console.log("No wallet detected");
      }
    });
  }

  async init(provider){
    if(provider !== undefined){
      this.web3 = new Web3(provider);
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

  logout(){
    this.uport.logout();
  }

  login(){
    this.uport.requestLogin();
  }

  getCurrentUser(){
    return {
      did: this.uport.getDID(),
      other: this.uport.getLogin()
    }
  }

  
}
