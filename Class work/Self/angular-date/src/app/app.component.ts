import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-date';

  constructor(private router:Router) {}

  ngOnInit(){
    this.getDate();
  }

  minDate:any = "2021-10-26";
  maxDate:any = "2021-12-31";

  getDate(){
    var date = new Date();
    var toDate = date.getDate();
    if(toDate < 10){
      toDate = 0 + toDate;
    }
    console.log(date)
    console.log(toDate);
  }
}
