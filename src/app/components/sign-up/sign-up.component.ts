import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private auth: AuthService, private fb: FormBuilder) {}
  
  // public signupForm: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // });

  signupForm = this.fb.group({
    username: ['', Validators.required], // Username is required
    email: ['', [Validators.required, Validators.email]], // Email is required and must be a valid email format
    password: ['', [Validators.required, Validators.minLength(8)]], // Password is required and must be at least 8 characters long
  });

  isFormValid(): boolean {
    return this.signupForm.valid
  }

  signinData(){
    // const data = {
    //   userName: 'test',
    //   email: 'test@gmail.com',
    //   password: '123'
    // }
    // this.auth.signUp(data).subscribe((data: any) =>{
    //   console.log(data);
    // })
    console.log(this.signupForm)
  }
}
