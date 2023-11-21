import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { UserdetailsService } from '../userdetails.service';


@Component({
    selector: 'app-registration-form',
    templateUrl:'./registration-form.component.html',
    styleUrls:['registration-form.component.css'],
    
})

export class RegistrationFormComponent{
    value:any;
    r:string[]=[]
    selectedRole:string=''
    locations:string[]=['Tamilnadu','AP'];
    colleges:{[key:string]:string[]}={
        'Tamilnadu':['tn1','tn2'],
        'AP':['ap1','ap2'],
    }
   
form:FormGroup;


constructor(private fb:FormBuilder, private http:HttpClient,private userdetails:UserdetailsService){
    this.form=this.fb.group({
        // userid:['',Validators.required],
        lastname:['',Validators.required],
        username:['', Validators.required],
        gender:['', Validators.required],
        dob:['', Validators.required],
        email: ['', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        // locations:['',Validators.required],
        // colleges:['', Validators.required],
        collegeloc:new FormControl(''),
        collegename:new FormControl(''),
        roles:[this.r]
    })


}


getColleges(){
    const selectedloc=this.form.get('collegeloc')?.value;
    return selectedloc ? this.colleges[selectedloc] || [] :[];
}
get formControls() {
    return this.form.controls;
  }
  get emailControl() {
    return this.form.get('email');
  }
submitForm() {
    const formDetails=JSON.parse(JSON.stringify(this.form.value))
    
       if(this.form.valid)
        {
            this.userdetails.storeuserData(formDetails).subscribe((res)=>{
                console.log(res)
            })
            console.log(formDetails)
        }
        }
      
      updateSelectedRole(role: string): void {
        this.selectedRole = role;
        console.log('Selected Role:', this.selectedRole);
        this.r.push(role);
        console.log(this.r);
      } 
    
}