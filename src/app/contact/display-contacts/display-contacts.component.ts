import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-contacts',
  templateUrl: './display-contacts.component.html',
  styleUrls: ['./display-contacts.component.css']
})
export class DisplayContactsComponent implements OnInit {
  private registered: any;

  constructor() { }

  ngOnInit() {
    this.registered = JSON.parse(localStorage.getItem('guests'));
    //console.log('Display:', this.registered);
  }

  clearContacts() {
    localStorage.removeItem('guests')
    this.ngOnInit();
  }

}
