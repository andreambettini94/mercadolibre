import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'items', loadChildren: () =>
      import('./results/results.module').then(m => m.ResultsModule)
  },
  {
    path: 'items/:id', loadChildren: () =>
      import('./product-details/product-details.module').then(m => m.ProductDetailsModule)
  },
  {
    path: '*', redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
