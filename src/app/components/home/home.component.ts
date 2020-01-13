import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { startWith, take, map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NguCarouselConfig } from '@ngu/carousel';
import {Router} from '@angular/router';
import { AnimationTriggerMetadata,  animate,  state,  style,  transition,  trigger} from '@angular/animations';
import { Observable, interval } from 'rxjs';
import { ApiService } from '../../services/api.service'
import { environment } from './../../../environments/environment.prod';
@Component({
  selector: 'tr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;
  apiurl=environment.apiurl;
sliders:any=[
  {id:"1",imageSrc:"../../../assets/img/slider/f1de7eef-d6a1-486a-840d-e4b7c77b3e6b.png",sliderHeader:"title1",sliderText:"text1"},
  {id:"2",imageSrc:"../../../assets/img/slider/fe3f58f9-6312-4ceb-b3a7-0dd3baa8b2ac.jpg",sliderHeader:"title2",sliderText:"text2"},
  {id:"3",imageSrc:"../../../assets/img/slider/tecnologia-en.png",sliderHeader:"title3",sliderText:"text3"},
  {id:"4",imageSrc:"../../../assets/img/slider/352bda6f-e9f3-4907-9985-46a1b617d18b.jpg",sliderHeader:"title4",sliderText:"text4"},
  {id:"5",imageSrc:"../../../assets/img/slider/banner-calce-perfeito.png",sliderHeader:"title5",sliderText:"text5"},
];
branches:any=[
  { address:{title:'Piccadlly Holly',details:'Piccadlly Holly Address'},phone:'22657201',         mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434.7987217240207!2d48.02877995501674!3d29.32957073533545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c59907baaab%3A0xa6dcddfc11481d6b!2srelax%20shoes%20co.!5e0!3m2!1sen!2seg!4v1578136782353!5m2!1sen!2seg"},
  { address:{title:'Piccadlly Alsalymia',details:'Piccadlly Alsalymia details'},phone:'22657201', mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434.7987217240207!2d48.02877995501674!3d29.32957073533545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c59907baaab%3A0xa6dcddfc11481d6b!2srelax%20shoes%20co.!5e0!3m2!1sen!2seg!4v1578136782353!5m2!1sen!2seg"},
  { address:{title:'Piccadlly Alsalymia',details:'Piccadlly Alsalymia details'},phone:'22657201', mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434.7987217240207!2d48.02877995501674!3d29.32957073533545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c59907baaab%3A0xa6dcddfc11481d6b!2srelax%20shoes%20co.!5e0!3m2!1sen!2seg!4v1578136782353!5m2!1sen!2seg"},
  { address:{title:'Piccadlly Alsalymia',details:'Piccadlly Alsalymia details'},phone:'22657201', mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434.7987217240207!2d48.02877995501674!3d29.32957073533545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c59907baaab%3A0xa6dcddfc11481d6b!2srelax%20shoes%20co.!5e0!3m2!1sen!2seg!4v1578136782353!5m2!1sen!2seg"},
  { address:{title:'Piccadlly Alsalymia',details:'Piccadlly Alsalymia details'},phone:'22657201', mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434.7987217240207!2d48.02877995501674!3d29.32957073533545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c59907baaab%3A0xa6dcddfc11481d6b!2srelax%20shoes%20co.!5e0!3m2!1sen!2seg!4v1578136782353!5m2!1sen!2seg"},
  { address:{title:'Piccadlly Alsalymia',details:'Piccadlly Alsalymia details'},phone:'22657201', mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434.7987217240207!2d48.02877995501674!3d29.32957073533545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c59907baaab%3A0xa6dcddfc11481d6b!2srelax%20shoes%20co.!5e0!3m2!1sen!2seg!4v1578136782353!5m2!1sen!2seg"}
 
]
  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 4, all: 0 },
    speed: 500,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 1500 },
    animation: 'lazy'
  };
  
  tempData: any[];
  
// clients:any=[
//   {name:"client1",imgSrc:"../assets/img/clients/client-2.png"},
//  {name:"client2",imgSrc:"../assets/img/clients/client-3.png"},
//  {name:"client3",imgSrc:"../assets/img/clients/client-4.png"},
//  {name:"client4",imgSrc:"../assets/img/clients/client-5.png"},
//  {name:"client5",imgSrc:"../assets/img/clients/client-6.png"},
//  {name:"client6",imgSrc:"../assets/img/clients/client-7.png"},
//  {name:"client7",imgSrc:"../assets/img/clients/client-8.png"},
//  {name:"client8",imgSrc:"../assets/img/clients/client-1.png"},
//  {name:"client9",imgSrc:"../assets/img/clients/client-2.png"},
//  {name:"client10",imgSrc:"../assets/img/clients/client-3.png"},
//  {name:"client11",imgSrc:"../assets/img/clients/client-4.png"},
//  {name:"client12",imgSrc:"../assets/img/clients/client-5.png"},
//  {name:"client13",imgSrc:"../assets/img/clients/client-6.png"},
//  {name:"client14",imgSrc:"../assets/img/clients/client-7.png"},
//  {name:"client15",imgSrc:"../assets/img/clients/client-8.png"}
// ]
allProducts:any=[]
products:any=[]
allClients:any=[];
clients:any=[];
  //create form for send mails
  profileForm = this.fb.group({
    name: [''],
    email: [''],
    subject: [''],
    message: [''],
  });
//end form

  constructor(private fb: FormBuilder,private cdr: ChangeDetectorRef,public apiService: ApiService,private router: Router) { }

  ngOnInit() {
    this.apiService.getAllProducts().subscribe((data)=>{
      console.log(data);
      this.products = data['products'];
      this.allProducts=this.products;
    });
    this.apiService.getAllClients().subscribe((data)=>{
      console.log(data);
      this.clients = data['clients'];
      this.allClients=this.clients;
    });
  }
  send() {
    console.log(this.profileForm.value);
     console.log(document.getElementById('subject'))
      var link = 'mailto:karemhosny111@gmail.com?subject=  '
             +this.profileForm.value.subject+'with email   '+this.profileForm.value.email
             +'&body='+this.profileForm.value.message;
    window.location.href = link;

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
