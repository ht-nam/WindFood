import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  amount = 0;

  @ViewChild('paymentRef', {static: true}) paymentRef!: ElementRef;

  paypalUrl = 'https://www.paypal.com/paypalme/yourname';

  form?: UntypedFormGroup;

  data = [] as any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<PaymentComponent>,
    private router: Router, private fb: UntypedFormBuilder, private dialog: MatDialog){
    
  }

  ngOnInit(){
    this.data = this.defaults.cart;
    
    this.form = this.fb.group({
      // totalPrice: this.totalPrice,
      paymentMethod: new FormControl('qr'),
    });
  }

  onSubmit(){
    this.data['paymentMethod'] = this.form?.get('paymentMethod')?.value;
    this.dialogRef.close();
    this.dialog.open(PaymentDialogComponent, {
      height: 'auto',
      width: 'auto',
      data: {
        cart: this.data
      }
    })
  }
}
