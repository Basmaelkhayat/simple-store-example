import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxStarRatingModule } from 'ngx-star-rating';

import { ProductDetailsRoutingModule } from './productDetails-routing.module';
import { ProductService } from 'src/app/services/product.service';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [],
  imports: [CommonModule, ProductDetailsRoutingModule, NgxStarRatingModule],

  providers: [ProductService],
})
export class ProductDetailsModule {}
