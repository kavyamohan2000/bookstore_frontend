import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-bookbycategory',
  templateUrl: './bookbycategory.component.html',
  styleUrls: ['./bookbycategory.component.css']
})
export class BookbycategoryComponent implements OnInit {
  catname:any;
  books:any[]=[];
  constructor(private bookService:BookService,private activatedRoute:ActivatedRoute) { 
    this.catname=this.activatedRoute.snapshot.paramMap.get('catname');
    this.bookService.GetBookByCategoryName(this.catname).subscribe((response)=>{
      this.books=response;
    })

  }

  ngOnInit(): void {
  }

}
