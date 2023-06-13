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
import { SuppliersService } from './suppliers.service';
import { AddSupplierDialogComponent } from './add-supplier-dialog/add-supplier-dialog.component';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent {
  suppliers: any;

  form?: UntypedFormGroup;

  allFood: number = 0;
  pagination: number = 1;

  constructor(
    private loader: NgxSpinnerService, 
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private router: Router,
    private service: SuppliersService,
    ){

  }

  ngOnInit(){
    this.initForm();
    this.getAllSuppliers();
  }

  initForm(){
    this.form = this.fb.group({
      // foodSearch: null,
      pageIndex: 1,
      pageSize: 6,
    })
  }
  
  get f(){
    return this.form?.controls;
  }
  addNewSupplier(){
    this.dialog.open(AddSupplierDialogComponent,{
      height: 'auto',
      data: {
        suppliers: this.suppliers,
        title: 'Thêm mới nhà cung cấp',
        reloadTable: () => this.getAllSuppliers(),
      }
    })
  }

  getAllSuppliers(){
    this.loader.show();
    this.service.getAllSuppliersPaging(this.form?.value).subscribe(
      it => {
        this.pagination = this.form?.get('pageIndex')?.value;
        this.suppliers = it?.data;
        this.allFood = it?.count;
      }
      )
    this.loader.hide();
  }

  renderPage(event: number) {
    this.form?.get('pageIndex')?.setValue(event);
    this.getAllSuppliers();
  }

  editProduct(product: ProductModel){
    // this.dialog.open(EditProductComponent,{
    //   height: 'auto',
    //   data: {
    //     product: product,
    //     title: 'Sửa thông tin sản phẩm',
    //     reloadTable: () => this.getAllSuppliers(),
    //   }
    // })
  }

  handleDelete(id: string){
    this.dialog.open(ConfirmDialoggComponent, {
      disableClose: false,
      width: '400px',
      height: 'auto',
      data: {
       title: 'Xoá sản phẩm',
       subtitle: 'Bạn có muốn xoá sản phẩm này không',
       buttonConfirm: 'Xoá',
       buttonCancel: 'Đóng',
       isDelete: true,
       onConfirm: () => {
        this.service.deleteSupplier(id).subscribe(
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
              this.getAllSuppliers();
            }
          }
        )
       }
      }
    })
  }

}
