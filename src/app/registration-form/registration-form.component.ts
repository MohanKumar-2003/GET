import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-registration-form',
    templateUrl:'./registration-form.component.html',
    styleUrls:['registration-form.component.css']
})

export class RegistrationFormComponent{
    registrationForm: FormGroup;
 

constructor(private fb:FormBuilder){
    this.registrationForm=this.fb.group({
        name:['', Validators.required],
        gender:['', Validators.required],
        dob:['', Validators.required],
        email:['', Validators.required],
        college:['', Validators.required],

    });
}

submitForm(){
    if(this.registrationForm.valid)
    {
        const formData=this.registrationForm.value;
        // this.http.post('http://localhost:8080/api/register',formData).subscribe(response=>{
        //   console.log("Form submitted successfully",response);
        // });
    }
}
}