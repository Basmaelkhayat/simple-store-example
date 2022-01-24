//app.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

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
  @ViewChild('table', { static: false }) table: MatTable<any>;

  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  displayedColumns: string[] = [
    'id',
    'title  ',
    'price  ',
    'category  ',
    'action',
  ];

  dataSource?: any = ELEMENT_DATA;

  ngOnInit(): void {
    this.dataSource = this.productService.getDataList();
  }
  toNavigate() {
    this.router.navigate(['prouduct-details'], { relativeTo: this.route });
  }
}
