import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tr-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css']
})
export class NewArrivalComponent implements OnInit {
  user:any;
  allProducts:any=[]
  products:any=[]
   constructor(public apiService: ApiService,private router: Router) { }
   apiurl=environment.apiurl;

     ngOnInit() {
       this.apiService.getNewArrivalProducts().subscribe((data)=>{
         console.log(data);
         this.products = data['products'];
         this.allProducts=this.products ;
       });
     }

     goToDetails(productObject){
      localStorage.removeItem('productobject');
      localStorage.setItem('productobject', JSON.stringify(productObject));
      this.router.navigateByUrl('/details');
    }
     filterProducts(productType){
      console.log( this.allProducts);
      if (productType=="all") {
        this.products =this.allProducts
      }else{
        this.products =  this.allProducts.filter(data => data.productType == productType);
      }
    }

}
