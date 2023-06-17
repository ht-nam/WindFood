import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { ProductModel } from 'src/app/models/products.model';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialoggComponent } from 'src/app/common/confirm-dialogg/confirm-dialogg.component';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { CategoriesService } from './categories.service';
import { AddCategoryDialogComponent } from './add-category-dialog/add-category-dialog.component';
import { EditCategoryDialogComponent } from './edit-category-dialog/edit-category-dialog.component';
import { Category } from 'src/app/models/category.model';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories: any;

  form?: UntypedFormGroup;

  allCategories: number = 0;
  pagination: number = 1;

  constructor(private loader: NgxSpinnerService, 
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private router: Router,
    private service: CategoriesService
    ){

  }

  ngOnInit(){
    this.initForm();
    this.getAllCategories();
  }

  initForm(){
    this.form = this.fb.group({
      pageIndex: 1,
      pageSize: 6,
    })
  }
  
  get f(){
    return this.form?.controls;
  }
  addNewCategory(){
    this.dialog.open(AddCategoryDialogComponent,{
      height: 'auto',
      data: {
        categories: this.categories,
        title: 'Thêm mới phân loại',
        reloadTable: () => this.getAllCategories(),
      }
    })
  }

  getAllCategories(){
    this.loader.show();
    this.service.getAllCategoriesPaging(this.form?.value).subscribe(
      it => {
        this.pagination = this.form?.get('pageIndex')?.value;
        this.categories = it?.data;
        this.allCategories = it?.count;
      }
    )
    this.loader.hide();
  }

  renderPage(event: number) {
    this.form?.get('pageIndex')?.setValue(event);
    this.getAllCategories();
  }

  editCategory(category: Category){
    this.dialog.open(EditCategoryDialogComponent,{
      height: 'auto',
      data: {
        category: category,
        buttonConfirm: 'Sửa',
        buttonCancel: 'Đóng',
        title: 'Sửa thông tin phân loại',
        reloadTable: () => this.getAllCategories(),
      }
    })
  }

  handleDelete(id: string){
    this.dialog.open(ConfirmDialoggComponent, {
      disableClose: false,
      width: '400px',
      height: 'auto',
      data: {
       title: 'Xoá phân loại',
       subtitle: 'Bạn có muốn xoá phân loại này không',
       buttonConfirm: 'Xoá',
       buttonCancel: 'Đóng',
       isDelete: true,
       onConfirm: () => {
        this.service.deleteCategory(id).subscribe(
          {
            next: (response) => {
            },
            error: (err) => {
              this.toastrService.warning("Xoá thất bại", "Thông báo", {
                positionClass: 'toast-bottom-right' 
              })
              console.log(err);
            },
            complete: () => {
              this.toastrService.success("Xoá thành công", "Thông báo", {
                positionClass: 'toast-bottom-right' 
              })
            }
          }
        )
       },
       reloadTable: () => this.getAllCategories(),
      }
    })
  }

}
