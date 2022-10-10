import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { FormGroup,FormControl,FormBuilder,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  books:any[]=[];
  constructor(private bookService:BookService,private fb:FormBuilder,private router:Router) { }
  byName=this.fb.group({bookname:[null,[Validators.required]]});
  byISBN=this.fb.group({isbn:[null,[Validators.required]]});
  byAuthor=this.fb.group({author:[null,[Validators.required]]});
  byCategory=this.fb.group({catname:[null,[Validators.required]]});

  get bookname(){
    return this.byName.get('bookname');
  }
  ngOnInit(): void {
  }

  OnSubmitName(){
    console.log(this.byName.value.bookname);
    this.router.navigate(['bookbyname',this.byName.value.bookname]);
  }

  OnSubmitISBN(){
    console.log(this.byName.value.bookname);
    this.router.navigate(['bookbyisbn',this.byISBN.value.isbn]);
  }

  OnSubmitAuthor(){

  }

  OnSubmitCategory(){
    this.router.navigate(['bookbycategory',this.byCategory.value.catname]);
  }
}
