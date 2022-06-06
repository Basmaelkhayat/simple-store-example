//app.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { AddEditProduct } from 'src/app/product/addEditProduct/addEditProduct.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  displayedColumns: string[] = [
    'image',
    'id',
    'title  ',
    'price  ',
    'category  ',
    'action',
  ];
  datasource?: any = ELEMENT_DATA;
  isLoading?: any = true;
  pageSize?: any = 5;
  currentPage?: any = 0;
  totalSize?: any = 0;
  array: any;
  pageEvent: PageEvent | any;

  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.getAllData();
  }
  handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }
  getAllData() {
    this.productService.getDataList().subscribe(
      (data) => {
        this.isLoading = false;
        this.datasource = data;
        this.datasource.paginator = this.paginator;
        this.array = data;
        this.totalSize = this.array.length;
        this.iterator();
      },
      (error) => (this.isLoading = false)
    );
  }
  iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.datasource = part;
  }
  toNavigate(rowInfo: {}) {
    this.router.navigate(['prouduct-details'], { relativeTo: this.route });
    localStorage.setItem('row-info', JSON.stringify(rowInfo));
  }
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }
  openDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(AddEditProduct, {
      width: '500px',
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
    // console.log(this.datasource.length);
    // if we use const we will add ',newRow' after datasource object .
    // but if we use push ..
    // that mean datasource already have new data so we don't need to add it again.
    this.isLoading = true;
    this.datasource.push({
      id: this.d + 1,
      title: row_obj.title,
      price: row_obj.price,
      category: row_obj.category,
      description: row_obj.description,
      image: row_obj.image,
    });
    this.d++;
    this.datasource = [...this.datasource];
    this.productService
      .addNew(this.datasource)
      .subscribe((data) => (this.isLoading = false));
    // this.getAllData();
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
