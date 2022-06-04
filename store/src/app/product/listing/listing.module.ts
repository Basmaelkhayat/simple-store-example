// Listing.module.ts
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListingComponent } from './listing.component';
import { HttpClientModule } from '@angular/common/http';
import { ListingRoutingModule } from './listing-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AddEditProduct } from 'src/app/product/addEditProduct/addEditProduct.component';
import { ProductService } from 'src/app/services/product.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],

  declarations: [ListingComponent, AddEditProduct],
  imports: [
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    HttpClientModule,
    ListingRoutingModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    // NgbRatingModule,
  ],
  providers: [ProductService],
  bootstrap: [ListingComponent],
})
export class ListingModule {}
