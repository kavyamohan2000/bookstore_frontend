import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  public categories:any[]=[];
  constructor(private bookService:BookService) { 
    this.bookService.getcategory().subscribe((response:any)=>{this.categories=response;})
  }

  ngOnInit(): void {
  }

}
