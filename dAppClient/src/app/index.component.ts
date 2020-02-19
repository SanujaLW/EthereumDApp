import { Component } from '@angular/core';
import { Web3Service } from './d-app/services/web3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  constructor(public web3: Web3Service, public router: Router){
  }

  login(){
    this.web3.login();
  }

  ngAfterViewInit(){
    if(this.web3.uport.isOnboard()){
      this.router.navigate(['/dApp']);
    }
  }
}
