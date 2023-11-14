import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-registration-form',
    templateUrl:'./registration-form.component.html',
    styleUrls:['registration-form.component.css'],
    
})

export class RegistrationFormComponent{
    value:any;
    locations:string[]=['Tamilnadu','AP'];
    colleges:{[key:string]:string[]}={
        'Tamilnadu':['tn1','tn2'],
        'AP':['ap1','ap2'],
    }
form:FormGroup;
constructor(private fb:FormBuilder, private http:HttpClient){
    this.form=this.fb.group({
        name:['', Validators.required],
        gender:['', Validators.required],
        dob:['', Validators.required],
        email:['', Validators.required],
        locations:['',Validators.required],
        colleges:['', Validators.required],
        location:new FormControl(''),
        college:new FormControl('')

    });



}
getColleges(){
    const selectedloc=this.form.get('location')?.value;
    return selectedloc ? this.colleges[selectedloc] || [] :[];
}
submitForm(){
    alert("Form submitted successfully!");
}
}