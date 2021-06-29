import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy, DoCheck, OnChanges, Input, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from '../_helpers/interfaces/userDetails';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  submited: boolean;
  usersData: Users;
  message: string = "This is child Message";
  updateFlag: boolean = false;
  updateId: number = 0;
  @Output() UserCreated = new EventEmitter();
  //@Input('user') user;
  @ViewChild('fname', { static: false, read: ElementRef }) firstname: ElementRef;
  constructor(private formBuilder: FormBuilder, private userService: UsersService, private changeDetector: ChangeDetectorRef) {
    this.submited = false;
  }

  ngOnInit() {
    //debugger;
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      address: ['', Validators.required]
    });
    //console.log("NgOnInit()");
  }
  get f() {
    return this.registerForm.controls;
  }
  handleSubmit() {
    this.submited = true;
    //console.log(this.registerForm.value);
    this.usersData = this.registerForm.value;

    this.message = "This is child Message Updated";

    //console.log(this.usersData);
    //this.PostData.emit(this.usersData)
    this.userService.createUser(this.usersData).subscribe({
      next: data => {
        alert("User created successfully!");
        this.UserCreated.emit();  // Emit this event to the parent
      },
      error: error => {
        console.log(error);
        if (error.status === 404) {
          alert("Please check API EndPoint");
        }
      }
    });
  }
  ngOnChanges() {
    //console.log("CHANGES")
  }
  ngDoCheck() {
    //console.log("DO CHECK")
  }
  ngAfterViewInit() {
    this.firstname.nativeElement.style.border = "3px dashed green";
  }

  onScroll() {
    console.log('On scroll in Signup Component');
  }

  updateFlagChange(flag: boolean) {
    this.updateFlag = flag;
    this.changeDetector.detectChanges();
  }

  updateUser() {
    if (this.updateId > 0) {
      this.usersData = this.registerForm.value;
      this.userService.editUser(this.updateId, this.usersData).subscribe({
        next: data => {
          alert("User updated successfully!");
          this.UserCreated.emit();  // Emit this event to the parent
        },
        error: error => {
          console.log(error);
          if (error.status === 404) {
            alert("Please check API EndPoint");
          }
        }
      });
    }
  }

}
