import { Component, OnInit } from '@angular/core';
import {BookService} from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  catid:any;
  userid=localStorage.getItem('userid');
  books:any[]=[];
  constructor(private bookService:BookService,private activatedRoute:ActivatedRoute) {
    this.catid=this.activatedRoute.snapshot.paramMap.get('catid');
    this.bookService.getBookByCategory(this.catid).subscribe((response:any)=>{
      console.log(response);
       this.books=response;
    })
   }

  ngOnInit(): void {
  }
  OnClickHandler(bookid:any){
    this.bookService.AddToCart(this.userid,bookid).subscribe((response:any)=>{
      console.log(response);
    })
  }
  OnClick(bid:any){
    this.bookService.AddToWishList(this.userid,bid).subscribe((response:any)=>{
      console.log(response);
  })
  }
}
