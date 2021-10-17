import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../product';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  
  product:Product =new Product();
  productTypes=['Laptop','Mobile','Watches'];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    console.log(form);
    alert("Template Driven form is Ready !");
  }

}
