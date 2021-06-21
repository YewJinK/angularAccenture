import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supply-chain',
  templateUrl: './supply-chain.component.html',
  styleUrls: ['./supply-chain.component.css']
})
export class SupplyChainComponent implements OnInit {
  title:string;
  constructor() {
    this.title = 'Supply Chain Management';
  }

  ngOnChanges(){
    console.log('ng Onchanges')
  }

  ngOnInit() {
    console.log('NgOninit');
  }
  ngDoCheck(){
    console.log('ngDoCheck()')
  }
  ngAfterContentInit(){
    console.log('NgAftercontentInit()');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked()')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit()')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked()')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy()')
  }

}
