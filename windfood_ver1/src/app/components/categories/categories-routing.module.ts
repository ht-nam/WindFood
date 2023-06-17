import { FormGroupDirective } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { materialComponent } from 'src/utils/helpers/installation';
import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { AddCategoryDialogComponent } from './add-category-dialog/add-category-dialog.component';
const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: CategoriesComponent },
            // { path: 'edit/:id', component: EditEmployeeDialogComponent }
        ]
    },
];

@NgModule({
    providers: [FormGroupDirective],
    declarations: [CategoriesComponent, AddCategoryDialogComponent],
    imports: [CommonModule,RouterModule.forChild(routes), materialComponent, HttpClientModule, ToastrModule, NgxPaginationModule],
    exports: [RouterModule]
})
export class CategoriesRoutingModule{}