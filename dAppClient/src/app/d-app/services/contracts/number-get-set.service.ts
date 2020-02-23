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
    this.address = '0xC69411EaA49dD9DB2bD59C2e40F6f29fb322CB82';
    this.name = 'NumberGetSet';
    this.abi = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
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
      }
    ];
    this.contract = web3.getContract({name: this.name,address: this.address,abi: this.abi});
    web3.getAddresses().then(data=>{
      if(data !== undefined){
        this.account = data[0];
      }
    });
  }

  getValue(){
    if(this.contract !== undefined){
      return this.contract.methods.getValue().call();
    }
  }

  setValue(newValue){
    if(this.account !== undefined && this.contract !== undefined){
      if(newValue){
        return this.contract.methods.setValue(newValue).send({from: this.account});
      }
    }
  }

  async isAdmin(){
    let admin = await this.contract.methods.isAdmin(this.account).call();
    return admin;
  }

  getPending(){
    return this.contract.methods.getLogged().call();
  }

  getApproved(){
    return this.contract.methods.getApproved().call();
  }
}
