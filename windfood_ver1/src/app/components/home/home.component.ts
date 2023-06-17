import { Component } from '@angular/core';
import { ProductModel } from 'src/app/models/products.model';
import { ProductsService } from '../products/products.service';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products?: any;

  form?: UntypedFormGroup;

  allFood: number = 0;
  pagination: number = 1;

  chips?: [];
  
  constructor(private service: ProductsService, 
    private fb: UntypedFormBuilder,
    private loader: NgxSpinnerService,
    ){

  }

  ngOnInit(){
    this.chips = [];
    this.initForm();
    this.getAllProducts();
  }


  initForm(){
    this.form = this.fb.group({
      pageIndex: 1,
      pageSize: 9,
    })
  }

  getAllProducts(){
    this.loader.show();
    this.service.getAllProductsPaging(this.form?.value).subscribe(
      it => {
        if(it){
          this.loader.hide();
        }
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

}
