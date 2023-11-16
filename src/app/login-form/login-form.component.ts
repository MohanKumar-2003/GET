import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
  value:any;
  locations:string[]=['Tamilnadu','AP'];
  colleges:{[key:string]:string[]}={
      'Tamilnadu':['tn1','tn2'],
      'AP':['ap1','ap2'],
  }

formgp:FormGroup;
constructor(private fb:FormBuilder, private http:HttpClient){
  this.formgp=this.fb.group({
      username1:['', Validators.required],
      userid1:['',Validators.required],
      lastname1:['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      

  });

}
submitForm() {
  // Check if the form is valid before submitting
  if (this.formgp.valid) {
    // Your submission logic here
    console.log(this.formgp.value); // For example, logging the form value
  }
}
get formControls() {
  return this.formgp.controls;
}
}
