import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  uid=localStorage.getItem('userid');
  books:any[]=[];
  constructor(private bookService:BookService) { 
    this.bookService.getUsersWishList(this.uid).subscribe((response)=>{
      this.books=response;
    })
  }

  ngOnInit(): void {
  }
  OnClickHandler(bookid:any){
    this.bookService.AddToCart(this.uid,bookid).subscribe((response:any)=>{
      console.log(response);
    })
  }
}
