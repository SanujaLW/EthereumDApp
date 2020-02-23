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
    })

    this.numberGetSetService.getApproved().then(data => {
      this.approved = data;
    });
  }

  ngOnInit(): void {
  }

  async load(){
    this.pending = await this.numberGetSetService.getPending();
    console.log(this.pending);
  }

}
