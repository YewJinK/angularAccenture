import { Component, OnInit } from '@angular/core';
import { BankingDetails } from '../../interfaces/banking';
@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {
  parentTitle:string;
  parentDescObj: any = {};
  bankingInfoByChild: BankingDetails;
  constructor() {
    this.parentTitle = 'Supply chain transformation on the cloud'
   }

  ngOnInit() {
    this.parentDescObj = {
      heading:'What’s the true value of the cloud?123',
      details: 'Throughout the pandemic, all eyes have been on the supply chain. Supply chain leaders have been challenged to figure out how to quickly, cost-effectively, and responsibly meet ever-changing demand while ensuring their supply chains are as flexible as possible. If COVID-19 has taught us one thing, it’s that we can’t simply optimize for what the new normal is. There is no new normal. If a supply chain is to survive, it has to be resilient forever, so it can continuously evolve to respond effectively to whatever’s thrown at it.'
    }
    console.log(this.bankingInfoByChild);
  }

  bankingDetailsHandler(event: BankingDetails){
    this.bankingInfoByChild = event;
  }

}
