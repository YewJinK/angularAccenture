import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;
  pass:string;
  //model:any;
  constructor() {

  }

  ngOnInit() {
  }

  onSubmit(){
    event.preventDefault();
    console.log(this.user);
    console.log(this.pass);
    sessionStorage.setItem('Username',this.user);
    sessionStorage.setItem('Password',this.pass);

  }

}
