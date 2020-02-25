import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NumberGetSetService } from '../services/contracts/number-get-set.service';

@Component({
  selector: 'app-number-get-set',
  templateUrl: './number-get-set.component.html',
  styleUrls: ['./number-get-set.component.scss']
})
export class NumberGetSetComponent implements OnInit {

  public value: any;
  public admin;
  public approved;
  @ViewChild('usersModal') usersModal : ElementRef; 

  constructor(public numberGetSetService: NumberGetSetService) { 
    this.numberGetSetService.isAdmin().then((value)=>{
      this.admin = value;
    });

    this.numberGetSetService.isApproved().then(value => {
      this.approved = value;
    });

    this.numberGetSetService.isPending().then(data => {
      if(data === false){
        this.numberGetSetService.isApproved().then(dataInner => {
          if(dataInner === false){
            this.numberGetSetService.logUser().then(()=>{
              console.log("Added pending user");
            });
          }
        });
      }
    });
  }

  ngOnInit(): void {
  }

  getValue(){
    this.numberGetSetService.getValue().then((data)=>{
      this.value = data;
    });
  }

  async setValue(){
    if(this.approved === undefined){
      this.approved = await this.numberGetSetService.isApproved();
    }
    if(this.approved === true){
      let newValue = prompt("Enter new value");
      this.numberGetSetService.setValue(newValue).then(tnx =>{
        if(tnx.error){
          alert("Transacton unsuccessful. \nCause: " + tnx.error);
        }
        else{
          alert("Transacton successful. \nHash: " + tnx.transactionHash);
        }
      });
    }
    else{
      alert("You are not authorized to perform this action. Please contact admin");
    }
  }

  async checkAdmin(){
    if(this.admin === undefined){
      this.admin = await this.numberGetSetService.isAdmin();
    }
  }
}
