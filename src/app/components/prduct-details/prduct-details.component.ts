import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tr-prduct-details',
  templateUrl: './prduct-details.component.html',
  styleUrls: ['./prduct-details.component.css']
})
export class PrductDetailsComponent implements OnInit {
   product:any={};
   user:any;

  constructor() { 

  }

  ngOnInit() {
    this.product = JSON.parse( localStorage.getItem("productobject"));
console.log(this.product);
  }


 
}
