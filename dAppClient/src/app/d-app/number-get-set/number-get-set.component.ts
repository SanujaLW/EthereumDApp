import { Web3Service } from './../services/web3.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-get-set',
  templateUrl: './number-get-set.component.html',
  styleUrls: ['./number-get-set.component.scss']
})
export class NumberGetSetComponent implements OnInit {

  public value: any;
  private contract: any;
  private account: string;

  constructor(web3: Web3Service) { 
    let abi = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
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
            "internalType": "uint256",
            "name": "newValue",
            "type": "uint256"
          }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ];
    let address = '0xBEafd79cf8DbB2317b00cF2a39c99f5535c65089';
    let name = 'NumberGetSet';
    this.contract = web3.getContract({name,address,abi});
    web3.getAddresses().then(data=>{
      if(data !== undefined){
        this.account = data[0];
      }
    });
  }

  ngOnInit(): void {
  }

  getValue(){
    if(this.contract !== undefined){
      this.contract.methods.getValue().call().then((data)=>{
        this.value = data;
      });
    }
  }

  setValue(){
    if(this.account !== undefined && this.contract !== undefined){
      let newValue = prompt("Enter new value");
      if(newValue){
        this.contract.methods.setValue(newValue).send({from: this.account});
      }
    }
  }

}
