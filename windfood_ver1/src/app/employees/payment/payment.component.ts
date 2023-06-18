import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  amount = 0;

  @ViewChild('paymentRef', {static: true}) paymentRef!: ElementRef;

  paypalUrl = 'https://www.paypal.com/paypalme/yourname';

  constructor(private router: Router){
    
  }

  ngOnInit(){
    // window.paypal.Buttons({
    //   // style: {
    //   //   layout: 'horizontal',
    //   //   color: 'blue',
    //   //   shape: 'rect',
    //   //   label: 'paypal'
    //   // }
    //   createOrder: (data: any, actions: any) => {
    //     return actions.order.create(
    //       {
    //         purchase_units: [
    //           {
    //             amount: {
    //               value: this.amount.toString(),
    //               currency_code: 'USD'
    //             }
    //           }
    //         ]
    //       },);
    //   },
    //   onApprove: (data: any, actions: any) => {
    //    return actions.order.capture().then((details) => {
    //     if(details.status === 'COMPLETED'){
    //       this.payment = 
    //     }
    //   })     
    //   },
    //   onError: (err: any) =>{
    //     console.log(err);
    //   }
    // },

    // ).render(this.paymentRef.nativeElement);
  }
}
