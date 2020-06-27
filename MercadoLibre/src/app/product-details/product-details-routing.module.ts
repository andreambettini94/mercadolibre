import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsModule } from './product-details.module';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  {
    path: '', component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailsRoutingModule { }
