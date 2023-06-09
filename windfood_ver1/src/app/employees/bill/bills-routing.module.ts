import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { materialComponent } from 'src/utils/helpers/installation';
import { FormGroupDirective } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { BillComponent } from './bill.component';
import { BillEditDialogComponent } from './bill-edit-dialog/bill-edit-dialog.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: BillComponent },
            { path: 'edit/:id', component: BillEditDialogComponent },
        ]
    },
];

@NgModule({
    providers: [FormGroupDirective],
    declarations: [BillComponent, BillEditDialogComponent],
    imports: [CommonModule,RouterModule.forChild(routes), materialComponent, HttpClientModule, ToastrModule, NgxPaginationModule],
    exports: [RouterModule]
})
export class BillRoutingModule { }
