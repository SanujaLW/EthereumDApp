import { Web3Service } from './../services/web3.service';
import { Component, OnInit } from '@angular/core';
import { NumberGetSetService } from '../services/contracts/number-get-set.service';

@Component({
  selector: 'app-number-get-set',
  templateUrl: './number-get-set.component.html',
  styleUrls: ['./number-get-set.component.scss']
})
export class NumberGetSetComponent implements OnInit {

  public value: any;

  constructor(public numberGetSetService: NumberGetSetService) { 
  }

  ngOnInit(): void {
  }

  getValue(){
    this.numberGetSetService.getValue().then((data)=>{
      this.value = data;
    });
  }

  async setValue(){
    let allowed = await this.numberGetSetService.isAdmin();
    if(allowed !== undefined){
      if(allowed){
        let newValue = prompt("Enter new value");
        this.numberGetSetService.setValue(newValue).then(tnx =>{
          if(tnx.error){
            alert("Transacton unsuccessfull. \nCause: " + tnx.error);
          }
          else{
            alert("Transacton successfull. \nHash: " + tnx.transactionHash);
          }
        });
      }
      else{
        alert("You are not authorized to perform this action. Please contact admin");
      }
    }
    else{
      alert("Unable to check permission");
    }
  }

}
