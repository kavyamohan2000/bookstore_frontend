import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';
import { FormBuilder,FormControl,FormGroup,Validator } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usertype:string=JSON.parse(localStorage.getItem('user')!).Type
  admin:boolean=this.usertype=='admin'?true:false;
  book:Book=new Book(56,2,'xyz','asxc',2000,700,'gwrr','s3r5c1','new','url');
  constructor(private bookService:BookService,private fb:FormBuilder){}


  bookIdform = new FormGroup({
    bookid: new FormControl()
});
  ngOnInit(): void {
  }
  
  OnClick(){
    this.bookService.AddNewBook(this.book).subscribe((response)=>{console.log(response)})
  }

  OnClickHandler(){
    console.log(this.bookIdform.value);
   this.bookService.RemoveBook(this.bookIdform.value.bookid).subscribe((response)=>{console.log(response)})
  }
}
