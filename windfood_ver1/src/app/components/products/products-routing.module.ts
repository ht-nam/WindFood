import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { materialComponent } from 'src/utils/helpers/installation';
import { ProductsComponent } from './products.component';
import { FormGroupDirective } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: ProductsComponent }
        ]
    },
];

@NgModule({
    providers: [FormGroupDirective],
    declarations: [ProductsComponent],
    imports: [CommonModule,RouterModule.forChild(routes), materialComponent, HttpClientModule],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
