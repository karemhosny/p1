import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'tr-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  user:any;
  allProducts:any=[]
  products:any=[]
  constructor(public apiService: ApiService,private router: Router) { }
  apiurl=environment.apiurl;

  ngOnInit() {
    this.apiService.getAllProducts().subscribe((data)=>{
      console.log(data);
      this.products = data['products'];
      this.allProducts=this.products;
    });
  }
  filterProducts(productType){
    console.log( this.allProducts);
    if (productType=="all") {
      this.products =this.allProducts
    }else{
      this.products =  this.allProducts.filter(data => data.productType == productType);
    }
  }
  goToDetails(productObject){
    localStorage.removeItem('productobject');
    localStorage.setItem('productobject', JSON.stringify(productObject));
    this.router.navigateByUrl('/details');
  }

}
