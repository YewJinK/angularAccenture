import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-strategy',
  templateUrl: './business-strategy.component.html',
  styleUrls: ['./business-strategy.component.css']
})
export class BusinessStrategyComponent implements OnInit {
  today: any;
  firstname: string;
  lastname: string;
  productPrice: number;
  discountPrice: number;
  userData:any;
  percentage: number;
  message: string;
  intro: string;
  arrayData: Array<string>;

  constructor() {
    this.firstname = 'Hello';
    this.lastname = 'WorlD';
    this.productPrice = 300000;
    this.discountPrice = 1234.5678;
    this.userData = {
      name: this.firstname + ' ' + this.lastname,
      productPrice: this.productPrice,
      discountPrice: this.discountPrice,
    }

    this.percentage = 7;
    this.message = 'Goodbye!';
    this.intro = 'This message will be combined with the separator and changed to uppercase.'

    this.arrayData = ["1st", "2nd", "3rd", "4th", "5th"];
   }

  ngOnInit() {
    this.today = Date.now();
    this.gstCalculation();
  }

  gstCalculation() {
    return this.productPrice + (this.productPrice * this.percentage / 100);
  }

}
