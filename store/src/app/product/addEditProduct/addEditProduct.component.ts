//dialog-box.component.ts
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UsersData {
  title: string;
  price: string;
  category: string;
  id: number;
  description: string;
  image: string;
  rating: { rate: string; count: string };
}

@Component({
  selector: 'addEdit-product',
  templateUrl: './addEditProduct.component.html',
  styleUrls: ['./addEditProduct.component.css'],
})
export class AddEditProduct {
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<AddEditProduct>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
