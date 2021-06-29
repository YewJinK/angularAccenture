import { Component, OnInit,Input } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Users } from '../_helpers/interfaces/userDetails';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-user-data-display',
  templateUrl: './user-data-display.component.html',
  styleUrls: ['./user-data-display.component.css']
})
export class UserDataDisplayComponent implements OnInit{
  @Input() signUp: SignUpComponent;
  UserList: Users[];
  
  constructor(private userService:UsersService) {
    console.log(this.UserList);
  }

  ngOnInit() {
    //console.log(this.UserList);
    //alert('ngOnInit');
    this.retrieveUsers();
  }
  ngAfterViewChecked(){
    //alert('ngAfterViewChecked');
    // if(this.UserList.length>0){
    //   console.log(this.UserList);
    // }
  }

  retrieveUsers() {
    this.userService.getUsers().subscribe({
      next:data=>{
        this.UserList = data;
      },
      error:error=>{
        console.log(error);
        if(error.status===404){
          alert("Please check API EndPoint");
        }
      }
    }); 
  }

  editUser(user: Users) {
    // Iterate over reactive form controls and automatically "patchValue" based on property name
    let c = this.signUp.registerForm.controls;
    Object.keys(c).forEach(name => {
      if (c[name]) {
        c[name].patchValue(user[name], {onlySelf: true});
      }
    });
    this.signUp.updateId = user.id;

    this.signUp.updateFlagChange(true);
    this.signUp.firstname.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next:data=>{
        this.retrieveUsers();
      },
      error:error=>{
        console.log(error);
        if(error.status===404){
          alert("Please check API EndPoint");
        }
      }
    });
    
  }
}
