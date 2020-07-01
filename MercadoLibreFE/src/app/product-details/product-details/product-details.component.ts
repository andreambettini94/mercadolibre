import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute,
              private service: ServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.callProductDetailService(params.id);
    });
  }

  private callProductDetailService(id) {
    this.service.getProductDetail(id).subscribe(response => {
      this.product = response['item'];
    });
  }

}
