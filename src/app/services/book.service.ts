import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  private base_url="http://localhost:50437/api/";
  constructor(private http:HttpClient) { }

  getcategory():Observable<any>{
    return this.http.get(`${this.base_url}category`);
  }
  getBookByCategory(catid:any):Observable<any>{
    return this.http.get(`${this.base_url}book?catid=${catid}`)
  }
  getBookByName(title:any):Observable<any>{
    return this.http.get(`${this.base_url}book?title=${title}`);
  }
  getUsersCart(userid:any):Observable<any>{
    return this.http.get(`${this.base_url}user?userid=${userid}`);
  }
  getUsersWishList(uid:any):Observable<any>{
    return this.http.get(`${this.base_url}user?uid=${uid}`);
  }
  AddToCart(userid:any,bookid:any):Observable<any>{
    return this.http.post(`${this.base_url}user?userid=${userid}&bookid=${bookid}`,userid,bookid);
  }
  AddToWishList(uid:any,bid:any):Observable<any>{
    return this.http.post(`${this.base_url}user?uid=${uid}&bid=${bid}`,uid,bid);
  }
  MakeOrder(order:any):Observable<any>{
    return this.http.post(`${this.base_url}order`,order);
  }
  AddBooks(oid:any,bid:any):Observable<any>{
    return this.http.post(`${this.base_url}order?oid=${bid}&bid=${oid}`,oid,bid);
  }
  ViewOrder(oid:any):Observable<any>{
    return this.http.get(`${this.base_url}order?orderid=${oid}`);
  }
  TotalPrice(oid:any):Observable<any>{
    return this.http.get(`${this.base_url}order?oid=${oid}`);
  }
  AddNewBook(book:any):Observable<any>{
    return this.http.post(`${this.base_url}book`,book);
  }
  RemoveBook(id:any):Observable<any>{
    return this.http.delete(`${this.base_url}book?id=${id}`);
  }
}
