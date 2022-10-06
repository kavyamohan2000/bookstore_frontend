import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService :AuthserviceService){}
  canActivate():boolean{
   if(this.authService.checkAdmin()){
    return true;
   }
   else{return false;}
  }
    
  }
  

