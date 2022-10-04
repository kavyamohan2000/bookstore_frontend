import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 public categories:any[]=[];
  constructor(private bookService:BookService,private router:Router) {
    this.bookService.getcategory().subscribe((data:any)=>
    {this.categories=data})
   }



  ngOnInit(): void {
  }
  
  OnClick(catid:any){
    console.log(catid);
    this.router.navigate(['books',catid]);
  }
}
