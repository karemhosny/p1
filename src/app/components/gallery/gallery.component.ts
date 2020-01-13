import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tr-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
user:any;
apiurl=environment.apiurl;
allGalleryItems:any=[]
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllGallerys().subscribe((data)=>{
      console.log(data['gallerys']);
      this.allGalleryItems = data['gallerys'];
    });
  }

}
