import { Component } from '@angular/core';
import { Web3Service } from './d-app/services/web3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  private web3Serv: any;

  constructor(web3: Web3Service){
    this.web3Serv = web3;
  }

  login(){
    this.web3Serv.login();
  }
}
