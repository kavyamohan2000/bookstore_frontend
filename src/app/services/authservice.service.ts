import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from 'src/app/models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }
  private base_url="http://localhost:50437/api/";

  register(userModel:User):Observable<any>{return this.http.post<any>(`${this.base_url}register`,userModel)}

  login(data:any):Observable<any>{return this.http.get<any>(`${this.base_url}userlogin?id=${data.userid}&pwd=${data.password}`)}
  getuser(id:any):Observable<any>{return this.http.get<any>(`${this.base_url}user?id=${id}`)}

  checkToken():boolean{
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }

  checkAdmin():boolean{
    if((JSON.parse(localStorage.getItem('user')!).Type)=='admin'){
      return true;
    }
    else{
      return false;
    }
  }

}
