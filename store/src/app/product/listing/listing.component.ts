//app.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { AddEditProduct } from 'src/app/product/addEditProduct/addEditProduct.component';
import { MatPaginator } from '@angular/material/paginator';

export interface ProuductData {
  title: string;
  price: string;
  category: string;
  id: number;
  description: string;
  image: string;
  rating: { rate: string; count: string };
}
export const ELEMENT_DATA: ProuductData[] = [];
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  displayedColumns: string[] = [
    'index',
    'image',
    'id',
    'title  ',
    'price  ',
    'category  ',
    'action',
  ];

  datasource?: any = ELEMENT_DATA;

  isLoading?: any = true;

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.productService.getDataList().subscribe(
      (data) => {
        this.isLoading = false;
        this.datasource = data;
      },
      (error) => (this.isLoading = false)
    );
  }
  toNavigate(rowInfo: {}) {
    this.router.navigate(['prouduct-details'], { relativeTo: this.route });
    localStorage.setItem('row-info', JSON.stringify(rowInfo));
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }

  openDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(AddEditProduct, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }
  d?: any = 20;

  addRowData(row_obj: any) {
    this.datasource.push({
      id: this.d + 1,
      title: row_obj.title,
      price: row_obj.price,
      category: row_obj.category,
      description: row_obj.description,
      image: row_obj.image,
    });
    this.d++;
    console.log(this.datasource);
    this.table.renderRows();
  }
  updateRowData(row_obj: any) {
    this.datasource = this.datasource.filter((value: any, key: any) => {
      if (value.id == row_obj.id) {
        value.title = row_obj.title;
        value.price = row_obj.price;
        value.category = row_obj.category;
        value.description = row_obj.description;
        value.image = row_obj.image;
      }
      return true;
    });
  }
  deleteRowData(row_obj: any) {
    this.datasource = this.datasource.filter((value: any, key: any) => {
      return value.id != row_obj.id;
    });
  }
}
