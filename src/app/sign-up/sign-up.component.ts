import { Component, OnInit,Output,EventEmitter,ViewChild,ElementRef,ChangeDetectionStrategy,DoCheck,OnChanges, Input } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Users } from '../_helpers/interfaces/userDetails';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  submited:boolean;
  usersData: Users;
  message: string = "This is child Message";
  @Output() PostData = new EventEmitter<Users>();
  @Input('user') user;
  @ViewChild('fname',{static: false,read:ElementRef}) firstname: ElementRef;
  constructor(private formBuilder: FormBuilder ) {
    this.submited = false;
   }

  ngOnInit() {
    //debugger;
    this.registerForm = this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      useremail:['',[Validators.required,Validators.email]],
      country:['',Validators.required],
      address:['',Validators.required]
    });
    console.log("NgOnInit()");

  }
  get f(){
    return this.registerForm.controls;
  }
  handleSubmit(){
    this.submited = true;
    //console.log(this.registerForm.value);
    this.usersData = this.registerForm.value;

    this.message = "This is child Message Updated";

    //console.log(this.usersData);
    this.PostData.emit(this.usersData)
  }
  ngOnChanges(){
    console.log("CHANGES")
  }
  ngDoCheck(){
    console.log("DO CHECK")
  }
  ngAfterViewInit(){
    this.firstname.nativeElement.style.border = "3px dashed green";
  }

  onScroll(){
    console.log('On scroll in Signup Component');
  }

}
