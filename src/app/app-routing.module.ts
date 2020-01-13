import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from '../app/components/gallery/gallery.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';
import { PrductDetailsComponent } from './components/prduct-details/prduct-details.component';
const routes: Routes = [
  {path:'gallery',component:GalleryComponent},
  {path:'newarrival',component:NewArrivalComponent},
  {path:'details',component:PrductDetailsComponent},
  {path:'products',component:ProductsComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
  //{ path: '/', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
