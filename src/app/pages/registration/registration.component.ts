import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/models/user.model';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private auth:AuthserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  userModel=new User();
  OnFormSubmit(){
    console.log(this.userModel);
    this.auth.register(this.userModel).subscribe((response)=>{

      console.log(response)

    })
   this.router.navigateByUrl("/login");
  }
  
}
