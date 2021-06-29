import { Component, OnInit, ViewChild } from '@angular/core';
import { CarsComponent } from './cars/cars.component';

@Component({
  selector: 'app-automotive',
  templateUrl: './automotive.component.html',
  styleUrls: ['./automotive.component.css']
})
export class AutomotiveComponent implements OnInit {
  @ViewChild (CarsComponent, {static:false}) carComp :CarsComponent;
  

  constructor() { }

  ngOnInit() {
  }

  showCars(value:number) {
    this.carComp.loop = value;
  }
}
