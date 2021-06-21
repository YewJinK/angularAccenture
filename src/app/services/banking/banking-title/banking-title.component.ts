import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { interval  } from 'rxjs';
import { BankingDetails } from '../../../interfaces/banking';
@Component({
  selector: 'app-banking-title',
  templateUrl: './banking-title.component.html',
  styleUrls: ['./banking-title.component.css']
})
export class BankingTitleComponent implements OnInit {
  @Input('title') titleText;
  @Output() updateInfo = new EventEmitter<BankingDetails>();
  bankingDetails: BankingDetails;
  constructor() {
    interval(2000)
    .subscribe(data =>{
      this.bankingDetails = {
        updateBy:'murali',
        updatedOn: '17/06/2021'
      };
      this.updateInfo.emit(this.bankingDetails);
    })
  }

  ngOnInit() {
    console.log(this.titleText);
  }

}
