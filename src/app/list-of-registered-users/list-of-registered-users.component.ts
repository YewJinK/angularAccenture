import { Component, OnInit,ViewChild,AfterViewInit,ElementRef} from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-list-of-registered-users',
  templateUrl: './list-of-registered-users.component.html',
  styleUrls: ['./list-of-registered-users.component.css']
})
export class ListOfRegisteredUsersComponent implements OnInit,AfterViewInit {
  allUser = [];
  usersFromChild=[];
  user = {
    name:"Alex"
  }
  @ViewChild(SignUpComponent,{static: true}) child;
  //@ViewChild('fname',{static: false,read:ElementRef}) firstname: ElementRef;
  //@ViewChild('nameInput',{static: false,read:ElementRef}) someInput: ElementRef;

  constructor() { }
  ngOnInit(){
    //console.log(this.child.usersData);
    //this.firstname.nativeElement.style.border = "3px dashed green";
  }

  getRegisteredUser(event){
    this.allUser.push(event);
    // console.log('List of registedred users');
    // console.log(this.allUser);
  }

  ngAfterViewInit(){
    this.usersFromChild = this.child.message;
    //this.someInput.nativeElement.value = "Jugal";
    //this.firstname.nativeElement.style.border = "3px dashed green";
  }
  ngAfterViewChecked(){
    this.usersFromChild = this.child.usersData;
    console.log(this.usersFromChild);
  }
  updateUser(){
    this.user.name = "Murali";
  }

}
