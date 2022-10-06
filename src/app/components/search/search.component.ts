import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  books:any[]=[];
  constructor(private bookService:BookService,private fb:FormBuilder,private router:Router) { }
  byName=this.fb.group({name:[null]});
  title=this.byName.value.name;

  ngOnInit(): void {
  }

  OnSubmitName(){
    this.router.navigate(['bookname',this.title]);
  }
}
