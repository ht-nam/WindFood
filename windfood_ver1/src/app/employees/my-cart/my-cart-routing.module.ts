import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { materialComponent } from 'src/utils/helpers/installation';
import { FormGroupDirective } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { MyCartComponent } from './my-cart.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: MyCartComponent },
        ]
    },
];

@NgModule({
    providers: [FormGroupDirective],
    declarations: [MyCartComponent],
    imports: [CommonModule,RouterModule.forChild(routes), materialComponent, HttpClientModule, ToastrModule, NgxPaginationModule],
    exports: [RouterModule]
})
export class CartRoutingModule { }
