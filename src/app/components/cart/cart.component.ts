import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { BookService } from 'src/app/services/book.service';
import { Order } from 'src/app/models/order.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 
  userid=localStorage.getItem('userid');
  
  ordermodel=new Order(parseInt(this.userid!)+1,parseInt(this.userid!));
  

  books:any[]=[];
  constructor(private bookService:BookService) {
    this.bookService.getUsersCart(this.userid).subscribe((response)=>{
       this.books=response;
    })
   }

  ngOnInit(): void {
  }

  OnClickHandler(){
    this.bookService.MakeOrder(this.ordermodel).subscribe((response)=>{
      console.log(response);
    for(var book of this.books){
      this.bookService.AddBooks(parseInt((this.userid!))+1,book.BookId).subscribe((response)=>{
        console.log(response);
      })
    }
    }
    )
  }

}
