import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { materialComponent } from 'src/utils/helpers/installation';
import { FormGroupDirective } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './payment.component';
import { QRCodeModule } from 'angularx-qrcode';
const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: PaymentComponent },
        ]
    },
];

@NgModule({
    providers: [FormGroupDirective],
    declarations: [PaymentComponent],
    imports: [CommonModule,RouterModule.forChild(routes), QRCodeModule, materialComponent, HttpClientModule, ToastrModule, NgxPaginationModule],
    exports: [RouterModule]
})
export class PaymentRoutingModule { }
