import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { ProductModel } from 'src/app/models/products.model';
import { ProductsService } from './products.service';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent {
  products: ProductModel[] = [];

  form?: UntypedFormGroup;

  length = 0;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent?: PageEvent;
  

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  constructor(private productService: ProductsService, private loader: NgxSpinnerService, 
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    ){

  }

  ngOnInit(){
    this.initForm();
    this.length = this.products.length;
  }

  initForm(){
    this.loader.show();
    this.productService.getAllProducts().subscribe(
      {
        next: (values) => {
          this.products = values
        },
        error: (err) => {
          this.loader.hide();
        }
      }
    );

    this.loader.hide()

    this.form = this.fb.group({
      foodSearch: null,
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
        title: 'Tạo mới sản phẩm'
      }
    })
  }

  searchByProduct(){
  }

}
