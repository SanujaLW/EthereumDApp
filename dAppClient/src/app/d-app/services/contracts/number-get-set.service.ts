import { Injectable } from '@angular/core';
import { Web3Service } from '../web3.service';

@Injectable({
  providedIn: 'root'
})
export class NumberGetSetService {

  private address;
  private abi;
  private name;
  private contract;
  private account;

  constructor(public web3: Web3Service) { 
    this.address = '0xaa42ad8fa2518E7cC9436df3cD61EB5e83b6360f';
    this.name = 'NumberGetSet';
    this.abi = [
      {
        "inputs": [
          {
            "internalType": "address[]",
            "name": "addresses",
            "type": "address[]"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "log",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newAdmin",
            "type": "address"
          }
        ],
        "name": "setAdmin",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "newValue",
            "type": "uint256"
          }
        ],
        "name": "setValue",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getLogged",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getValue",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          }
        ],
        "name": "isAdmin",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          }
        ],
        "name": "isApproved",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          }
        ],
        "name": "isPending",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ];
    this.contract = web3.getContract({name: this.name,address: this.address,abi: this.abi});
    this.setAccount().then((result)=>{
      if(!result){
        console.log("No account detected");
      }
    });
  }

  async setAccount(){
    let accounts = await this.web3.getAddresses();
    if(accounts === undefined){
      return false;
    }
    else{
      this.account = accounts[0];
      return true;
    }
  }

  getValue(){
    if(this.contract !== undefined){
      return this.contract.methods.getValue().call({from: this.account});
    }
  }

  async setValue(newValue){
    let canPerform = await this.checkSetup();
    if(newValue && canPerform){
      return this.contract.methods.setValue(newValue).send({from: this.account});
    }
  }

  async isAdmin(){
    let canPerform = await this.checkSetup();
    if(canPerform){
      let admin = await this.contract.methods.isAdmin(this.account).call({from: this.account});
      return admin;
    }
  }

  async isApproved(){
    let canPerform = await this.checkSetup();
    if(canPerform){
      return this.contract.methods.isApproved(this.account).call({from: this.account});
    }
  }

  async isPending(){
    let canPerform = await this.checkSetup();
    if(canPerform){
      return this.contract.methods.isPending(this.account).call({from: this.account});
    }
  }

  async getPending(){
    let canPerform = await this.checkSetup();
    if(canPerform){
      return this.contract.methods.getLogged().call({from: this.account});
    }
  }

  async getApproved(){
    let canPerform = await this.checkSetup();
    if(canPerform){
      return this.contract.methods.getApproved().call({from: this.account});
    }
  }

  async logUser(){
    let canPerform = await this.checkSetup();
    if(canPerform){
      return this.contract.methods.log().send({from: this.account});
    }
  }

  async approveUsers(users){
    let canPerform = await this.checkSetup();
    if(canPerform){
      return this.contract.methods.approve(users).send({from: this.account});
    }
  }

  private async checkSetup(){
    if(this.account === undefined){
      let result = await this.setAccount();
      if(!result){
        console.log("No account detected");
        return false;
      }
    }else if(this.contract === undefined){
      console.log("Invalid contract configuration");
      return false;
    }
    return true;
  }
}
