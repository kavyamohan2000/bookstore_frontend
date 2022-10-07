import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-bookbyisbn',
  templateUrl: './bookbyisbn.component.html',
  styleUrls: ['./bookbyisbn.component.css']
})
export class BookbyisbnComponent implements OnInit {

  isbn:any;

  book:any;
  constructor(private activatedRoute:ActivatedRoute,private bookService:BookService) 
  {
    
    this.isbn=this.activatedRoute.snapshot.paramMap.get('isbn'); 
    console.log(this.isbn);
    this.bookService.getBookByISBN(this.isbn).subscribe((response)=>{
        this.book=response;
    })
  }

  ngOnInit(): void {
  }

}
