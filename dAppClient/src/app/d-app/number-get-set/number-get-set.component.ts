import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-get-set',
  templateUrl: './number-get-set.component.html',
  styleUrls: ['./number-get-set.component.scss']
})
export class NumberGetSetComponent implements OnInit {

  public value: any;

  constructor() { }

  ngOnInit(): void {
  }

}
