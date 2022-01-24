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
        path: 'map',
        loadChildren: () => import(`./map/map.module`).then((m) => m.MapModule),
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
