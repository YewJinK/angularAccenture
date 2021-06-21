import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  angularversion:string;
  isgold:boolean;
  constructor() { }

  ngOnInit() {
    this.angularversion = 'angular4';
    this.isgold = true;
  }

}
