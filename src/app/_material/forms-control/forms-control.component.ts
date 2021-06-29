import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms-control',
  templateUrl: './forms-control.component.html',
  styleUrls: ['./forms-control.component.css']
})

export class FormsControlComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor() { }

  ngOnInit() {
  }
}
