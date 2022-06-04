import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-productDetails',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  data: any = {};
  constructor() {}

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('row-info') || '{}');
  }
}
