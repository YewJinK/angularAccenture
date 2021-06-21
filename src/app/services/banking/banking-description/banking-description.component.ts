import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-banking-description',
  templateUrl: './banking-description.component.html',
  styleUrls: ['./banking-description.component.css']
})
export class BankingDescriptionComponent implements OnInit {
  @Input('description') childDescObj;
  constructor() { }

  ngOnInit() {
    console.log(this.childDescObj)
  }

}
