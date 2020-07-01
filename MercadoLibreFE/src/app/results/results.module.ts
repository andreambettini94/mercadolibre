import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results/results.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ResultsComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    SharedModule,
  ]
})
export class ResultsModule { }
