import { NumberGetSetService } from './../services/contracts/number-get-set.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public pending;
  public approved;

  constructor(public numberGetSetService: NumberGetSetService) {
    this.numberGetSetService.getPending().then(data => {
      this.pending = data;
    });

    this.approved = [];
  }

  ngOnInit(): void {
  }

  async load(){
    this.numberGetSetService.getPending().then(returned=>{
      console.log(returned);
    });
  }

  select(el, addr){
    if(!el.classList.contains('selected')){
      el.classList.add('selected');
      this.approved.push(addr);
    }
    else{
      el.classList.remove('selected');
      let index = this.approved.indexOf(addr);
      if(index > -1){
        this.approved.splice(index, 1);
      }
    }
  }

  approveSelected(){
    if(this.approved.length > 0){
      this.numberGetSetService.approveUsers(this.approved).then(tnx =>{
        if(tnx.error){
          alert("Transacton unsuccessful. \nCause: " + tnx.error);
        }
        else{
          alert("Transacton successful. \nHash: " + tnx.transactionHash);
          this.pending = this.pending.filter(it=>{
            !this.approved.includes(it);
          });
        }
      });
    }
  }

}
