
import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { startWith, take, map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { FormArray, FormControlDirective } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NguCarouselConfig } from '@ngu/carousel';
import {
  AnimationTriggerMetadata,
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Observable, interval } from 'rxjs';
@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 

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
  
clients:any=[
  {name:"client1",imgSrc:"../assets/img/clients/client-2.png"},
 {name:"client2",imgSrc:"../assets/img/clients/client-3.png"},
 {name:"client3",imgSrc:"../assets/img/clients/client-4.png"},
 {name:"client4",imgSrc:"../assets/img/clients/client-5.png"},
 {name:"client5",imgSrc:"../assets/img/clients/client-6.png"},
 {name:"client6",imgSrc:"../assets/img/clients/client-7.png"},
 {name:"client7",imgSrc:"../assets/img/clients/client-8.png"},
 {name:"client8",imgSrc:"../assets/img/clients/client-1.png"},
 {name:"client9",imgSrc:"../assets/img/clients/client-2.png"},
 {name:"client10",imgSrc:"../assets/img/clients/client-3.png"},
 {name:"client11",imgSrc:"../assets/img/clients/client-4.png"},
 {name:"client12",imgSrc:"../assets/img/clients/client-5.png"},
 {name:"client13",imgSrc:"../assets/img/clients/client-6.png"},
 {name:"client14",imgSrc:"../assets/img/clients/client-7.png"},
 {name:"client15",imgSrc:"../assets/img/clients/client-8.png"}
]
products:any=[
 {name:"Product1",imgSrc:"../assets/img/products/1.jpg"},
 {name:"Product2",imgSrc:"../assets/img/products/2.jpg"},
 {name:"Product3",imgSrc:"../assets/img/products/3.jpg"},
 {name:"Product4",imgSrc:"../assets/img/products/4.png"},
 {name:"Product5",imgSrc:"../assets/img/products/5.png"},
 {name:"Product6",imgSrc:"../assets/img/products/6.png"},
 {name:"Product7",imgSrc:"../assets/img/products/7.png"},
 {name:"Product8",imgSrc:"../assets/img/products/8.png"},
 {name:"Product9",imgSrc:"../assets/img/products/9.png"},
 {name:"Product10",imgSrc:"../assets/img/products/10.png"},
 {name:"Product11",imgSrc:"../assets/img/products/11.png"},
 {name:"Product12",imgSrc:"../assets/img/products/12.jpg"},
 {name:"Product13",imgSrc:"../assets/img/products/13.jpg"},
 {name:"Product14",imgSrc:"../assets/img/products/14.png"},
 {name:"Product15",imgSrc:"../assets/img/products/15.jpg"}
]

  //create form for send mails
  profileForm = this.fb.group({
    name: [''],
    email: [''],
    subject: [''],
    message: [''],
  });
//end form

  constructor(private translate: TranslateService,private fb: FormBuilder,private cdr: ChangeDetectorRef) {
    translate.setDefaultLang('en');

  }
ngOnInit(){
  document.getElementById("arabicbutton").style.display = "block";
  document.getElementById("englishbuttin").style.display = "none";
}

  switchLanguage(language: string) {
    var body = document.body;

    if (language == 'ar') {
      body.classList.add("rtl");
      document.getElementById("arabicbutton").style.display = "none";
      document.getElementById("englishbuttin").style.display = "block";
    }
    else{
      body.classList.remove("rtl");
      document.getElementById("arabicbutton").style.display = "block";
      document.getElementById("englishbuttin").style.display = "none";

    }
    this.translate.use(language);
  }
   send() {
    console.log(this.profileForm.value);
     console.log(document.getElementById('subject'))
      var link = 'mailto:karemhosny111@gmail.com?subject=  '
             +this.profileForm.value.subject+'with email   '+this.profileForm.value.email
             +'&body='+this.profileForm.value.message;
    window.location.href = link;
    // var link = 'mailto:karemhosny111@gmail.com?subject=  '
    //          +document.getElementById('subject'). value+'with email   '+document.getElementById('email').value
    //          +'&body='+document.getElementById('message').value;
    // window.location.href = link;
  }
}
