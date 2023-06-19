import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from '../payment.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent {
  
  data = [] as any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<PaymentDialogComponent>,
    private toastrService: ToastrService,
    private payment: PaymentService,
    private loader: NgxSpinnerService,
    private router: Router,
  ){

  }

  ngOnInit(){
    this.data = this.defaults.cart;

    if(this.data.paymentMethod === 'qr' || this.data.paymentMethod === 'Tiền Mặt'){
      this.onPayment();
    }
  }

  onPayment(){
    console.log('tvv', this.data);
    this.payment.addOrEditBill(this.data).subscribe(
      it => {
        if(it){
          if(this.data.paymentMethod === 'Thẻ Ngân Hàng'){
            setTimeout(() => {
              this.router.navigate(['employees/sales']);
              this.toastrService.success('Thanh toán thành công', 'Thông báo')
              this.dialogRef.close();
            }, 10000);
          }else if(this.data.paymentMethod === 'qr'){
            setTimeout(() => {
              this.toastrService.success('Thanh toán thành công', 'Thông báo')
              this.router.navigate(['employees/sales']);
              this.dialogRef.close();
            }, 10000);
          }else{
            this.toastrService.success('Thanh toán thành công', 'Thông báo')
            this.router.navigate(['employees/sales']);
            this.dialogRef.close();        
          }
          localStorage.removeItem('products')
        }
      }
    )
  }
}
