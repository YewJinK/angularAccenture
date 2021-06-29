import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/_services/shared-service.service';

@Component({
  selector: 'app-supply-chain-models',
  templateUrl: './supply-chain-models.component.html',
  styleUrls: ['./supply-chain-models.component.css']
})
export class SupplyChainModelsComponent implements OnInit {

  details: any;

  constructor(private shared: SharedServiceService) { }

  ngOnInit() {
    this.shared.currentObject.subscribe(d => this.details = d);
  }

}
