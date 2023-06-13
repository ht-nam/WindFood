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
  products: any;

  form?: UntypedFormGroup;

  constructor(private productService: ProductsService, private loader: NgxSpinnerService, 
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    ){

  }

  ngOnInit(){
    this.initForm();
    this.getAllProducts();
  }

  initForm(){
    this.form = this.fb.group({
      // foodSearch: null,
      pageIndex: 1,
      pageSize: 10,
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

  getAllProducts(){
    this.loader.show();
    this.productService.getAllProductsPaging(this.form?.value).subscribe(
      it => {
        this.products = it?.data;
      }
      )
    this.loader.hide();
  }

  searchByProduct(){
  }

}
