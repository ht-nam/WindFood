import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { ProductModel } from 'src/app/models/products.model';
import { ProductsService } from './products.service';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialoggComponent } from 'src/app/common/confirm-dialogg/confirm-dialogg.component';
import { Router } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SuppliersService } from '../suppliers/suppliers.service';
import { Category } from 'src/app/models/category.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent {
  products: any;

  form?: UntypedFormGroup;

  suppliers: any;

  allFood: number = 0;
  pagination: number = 1;

  categories: any;


  constructor(private productService: ProductsService, private loader: NgxSpinnerService, 
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private router: Router,
    private supplierService: SuppliersService,
    private service: ProductsService
    ){

  }

  ngOnInit(){
    this.initForm();
    this.getAllSuppliers();
    this.getAllProducts();
    this.getAllCategories();
  }

  initForm(){
    this.form = this.fb.group({
      pageIndex: 1,
      pageSize: 6,
      search: null,
    })
  }
  
  get f(){
    return this.form?.controls;
  }
  addNewProduct(){
    this.dialog.open(AddProductDialogComponent,{
      height: 'auto',
      data: {
        products: this.products,
        suppliers: this.suppliers,
        title: 'Tạo mới sản phẩm',
        reloadTable: () => this.getAllProducts(),
      }
    })
  }

  searchChanges(event){
    this.products = this.products.filter(value => value?.name === event)
  }

  getAllProducts(){
    this.loader.show();
    this.productService.getAllProductsPaging(this.form?.value).subscribe(
      it => {
        if(it){

        }
        this.loader.hide();
        this.pagination = this.form?.get('pageIndex')?.value;
        this.products = it?.data;
        this.allFood = it?.count;
      }
      )
  }

  renderPage(event: number) {
    this.form?.get('pageIndex')?.setValue(event);
    this.getAllProducts();
  }

  editProduct(product: ProductModel){
    this.dialog.open(EditProductComponent,{
      height: 'auto',
      data: {
        product: product,
        categories: this.categories,
        suppliers: this.suppliers,
        title: 'Sửa thông tin sản phẩm',
        reloadTable: () => this.getAllProducts(),
      }
    })
  }

  getAllCategories(){
    this.service.getAllCategories().subscribe(
      (it) => {
        this.categories = it
      }
    )
  }

  getAllSuppliers(){
    this.supplierService.getAllSuppliers().subscribe(
      it => {
        this.suppliers = it;
      }
    )
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
        this.productService.deleteFood(id).subscribe(
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
              this.getAllProducts();
            }
          }
        )
       }
      }
    })
  }

}
