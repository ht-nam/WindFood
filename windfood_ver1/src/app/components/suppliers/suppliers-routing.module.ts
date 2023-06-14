import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { materialComponent } from 'src/utils/helpers/installation';
import { FormGroupDirective } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { SuppliersComponent } from './suppliers.component';
import { AddSupplierDialogComponent } from './add-supplier-dialog/add-supplier-dialog.component';
const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: SuppliersComponent },
        ]
    },
];

@NgModule({
    providers: [FormGroupDirective],
    declarations: [SuppliersComponent, AddSupplierDialogComponent],
    imports: [CommonModule,RouterModule.forChild(routes), materialComponent, HttpClientModule, ToastrModule, NgxPaginationModule],
    exports: [RouterModule]
})
export class SuppliersRoutingModule { }
