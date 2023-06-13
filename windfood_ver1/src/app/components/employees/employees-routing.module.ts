import { FormGroupDirective } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { EmployeesComponent } from './employees.component';
import { RouterModule, Routes } from '@angular/router';
import { materialComponent } from 'src/utils/helpers/installation';
import { NgModule } from '@angular/core';
import { AddEmployeeDialogComponent } from './add-employee-dialog/add-employee-dialog.component';
import { EditEmployeeDialogComponent } from './edit-employee-dialog/edit-employee-dialog.component';
const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: EmployeesComponent },
            { path: 'edit/:id', component: EditEmployeeDialogComponent }
        ]
    },
];

@NgModule({
    providers: [FormGroupDirective],
    declarations: [EmployeesComponent, AddEmployeeDialogComponent, EditEmployeeDialogComponent],
    imports: [CommonModule,RouterModule.forChild(routes), materialComponent, HttpClientModule, ToastrModule, NgxPaginationModule],
    exports: [RouterModule]
})
export class EmployeesRoutingModule{}