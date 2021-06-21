import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  message: string;

  private registered: Array<{name: string, email: string, phone: string, message: string}> = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    // console.log(this.name);
    // console.log(this.email);
    // console.log(this.phone);
    // console.log(this.message);

    if (this.name && this.email && this.phone && this.message) {
      this.addRecord(this.getStorage(), this.name, this.email, this.phone, this.message)
    }
  }

  getStorage(): any {
    let guestStorage = JSON.parse(localStorage.getItem('guests'));

    if (guestStorage != null) {
      return guestStorage;
    }
    else {
      return this.registered;
    }
  }

  addRecord(storage: any, name: string, email: string, phone: string, message: string) {
    let index = 0;

    if (storage[0] != null)
    {
      index = storage.length;
    }

    storage[index] = 
      { name: this.name, email: this.email, phone: this.phone, message: this.message };

    localStorage.setItem('guests', JSON.stringify(storage));
    //console.log(storage);
  }

  onDisplay() {
    window.alert('hello');
  }
}
