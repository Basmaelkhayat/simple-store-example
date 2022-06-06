import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from '../services/product.service';
@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [CommonModule, ProductRoutingModule],
  exports: [ProductComponent],
  declarations: [ProductComponent],
  providers: [ProductService],
})
export class ProductModule {}
