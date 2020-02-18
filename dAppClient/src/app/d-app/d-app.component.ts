import { Component, OnInit } from '@angular/core';
import { Web3Service } from './services/web3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-d-app',
  templateUrl: './d-app.component.html',
  styleUrls: ['./d-app.component.scss']
})
export class DAppComponent implements OnInit {

  private web3Serv: any;
  
  constructor(public web3:Web3Service, public router: Router) {
    this.web3Serv = web3;
    this.router = router;
   }

  ngOnInit(): void {
  }

  logout(){
    this.web3Serv.logout();
    this.router.navigate(['']);
  }

}
