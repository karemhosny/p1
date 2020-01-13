import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NguCarouselModule } from '@ngu/carousel';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { SafePipePipe } from './pipes/safe-pipe.pipe';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';
import { PrductDetailsComponent } from './components/prduct-details/prduct-details.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,GalleryComponent, ProductsComponent, HomeComponent, SafePipePipe, NewArrivalComponent, PrductDetailsComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,NguCarouselModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
