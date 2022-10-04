import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  userid=localStorage.getItem('userid');
  books:any[]=[];
  totalprice:any;
  constructor(private bookService:BookService) {
    this.bookService.ViewOrder(parseInt(this.userid!)+1).subscribe((response)=>{
      this.books=response;
    })
   this.bookService.TotalPrice(parseInt(this.userid!)+1).subscribe((response)=>
   {this.totalprice=response;})
   }

  ngOnInit(): void {
  }

}
