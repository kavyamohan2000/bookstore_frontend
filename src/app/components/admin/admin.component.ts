import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';
import { FormBuilder,FormControl,FormGroup,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usertype:string=JSON.parse(localStorage.getItem('user')!).Type
  admin:boolean=this.usertype=='admin'?true:false;
  book:Book=new Book();
  constructor(private bookService:BookService,private fb:FormBuilder){}


  bookIdform = new FormGroup({
    bookid: new FormControl()
});
  newbook=this.fb.group({bookid:[null,[Validators.required]],
                         categoryid:[null,[Validators.required]],
                         title:[null,[Validators.required]],
                         isbn:[null,[Validators.required]],
                         year:[null,[Validators.required]],
                         price:[null,[Validators.required]],
                         description:[null,[Validators.required]],
                         position:[null,[Validators.required]],
                         status:[null,[Validators.required]],
                         image:[null,[Validators.required]]})

  activateuser=this.fb.group({userid:[null,[Validators.required]]});
  deactivateuser=this.fb.group({userid:[null,[Validators.required]]});
  ngOnInit(): void {
  }
  
  
 
  OnClickHandler(){
    console.log(this.bookIdform.value);
   this.bookService.RemoveBook(this.bookIdform.value.bookid).subscribe((response)=>{console.log(response)})
  }

  OnSubmit(){
    console.log(this.newbook.value)
    this.bookService.AddNewBook(this.newbook.value).subscribe((response)=>{
      
      console.log(response);
    })
  }
  OnClickActivate(){
    this.bookService.ActivateUser(this.activateuser.value.userid).subscribe((response)=>{
      console.log(this.activateuser.value.userid);
    })
  }
  OnClickDeactivate(){
    this.bookService.DeactivateUser(this.deactivateuser.value.userid).subscribe((response)=>{
      console.log(this.deactivateuser.value.userid);
    })
  }
}
