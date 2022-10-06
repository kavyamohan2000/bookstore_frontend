import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  usertype:string=JSON.parse(localStorage.getItem('user')!).Type
  admin:boolean=this.usertype=='admin'?true:false;
  constructor() { }

  ngOnInit(): void {
  }

}
