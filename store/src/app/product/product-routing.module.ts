import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(`./listing/listing.module`).then((m) => m.ListingModule),
      },
      {
        path: 'listing',
        loadChildren: () =>
          import(`./listing/listing.module`).then((m) => m.ListingModule),
      },
      {
        path: 'prouduct-details',
        loadChildren: () =>
          import(`./productDetails/productDetails.module`).then(
            (m) => m.ProductDetailsModule
          ),
      },
      {
        path: '**',
        loadChildren: () =>
          import(`./listing/listing.module`).then((m) => m.ListingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
