import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormBuilder} from '@angular/forms';

interface formInt {
  firstName: string;
  lastName: string;
  email : string;
  password : string;
  confirmPassword:string;
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form ;
  hide:boolean = true;
  constructor(private fb : FormBuilder) { 
    this.form = fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirmPassword : ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.form.valid)
    console.log("submit data",this.form.value);
  }
  isValid(ControlName: string)
   {
   
  }
}
