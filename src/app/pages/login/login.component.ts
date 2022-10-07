import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/authservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginResponse="";
  loginClass="";

  constructor(private fb:FormBuilder,private auth:AuthserviceService,private router:Router) { }

  loginForm=this.fb.group({userid:[null,[Validators.required]],password:[null,[Validators.required,Validators.minLength(6)]]})

  get userid(){
    return this.loginForm.get('userid');
  }
  get password(){
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
  }

  OnSubmitHandler(){
    this.auth.getuser(this.loginForm.value.userid).subscribe((response)=>{console.log(response)
                                                                  if(response==null){
                                                                    this.loginResponse="Incorrect user name";
                                                                    this.loginClass="alert-danger";
                                                                  }
                                                                else if(response.Password==this.loginForm.value.password){
                                                                  this.loginResponse="Logged In successfully."
                                                                  this.loginClass="alert-success";
                                                                  localStorage.setItem('token',response);
                                                                localStorage.setItem('userid',JSON.stringify(response.UserId));
                                                                localStorage.setItem('user',JSON.stringify(response));
                                                                this.router.navigateByUrl('home');
                                                                }
                                                                else{
                                                                  this.loginResponse="Incorrect password";
                                                                    this.loginClass="alert-danger";

                                                                }
                                                                
            
                                                              },
                                                    (error)=>{console.log(error)});
  }





}
