import { Component, ViewChild } from '@angular/core';
import { Form, FormArray, FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoriesService } from 'src/app/components/categories/categories.service';
import { ProductsService } from 'src/app/components/products/products.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  products?: any;

  form?: UntypedFormGroup;

  allFood: number = 0;
  pagination: number = 1;

  chips?: [];

  foodForm?: UntypedFormGroup;

  productArr = [] as any;

  categories = [] as any;

  productFilter = [] as any;

  foodQuantityForm?: UntypedFormGroup;
  
  productCategory = [] as any;

  @ViewChild('tabGroup') tabGroup?: MatTabGroup;

  constructor(private service: ProductsService, 
    private fb: UntypedFormBuilder,
    private loader: NgxSpinnerService,
    private cateService: CategoriesService,
    private productService: ProductsService
    ){

  }

  ngOnInit(){
    this.foodForm = this.fb.group({
      foodCards: this.fb.array([])
    });
    this.initForm();
    this.service.getAllProductsPaging(this.form?.value).subscribe(
      {
        next: (it) => {
          if(it){
            this.loader.hide();
          }
          this.pagination = this.form?.get('pageIndex')?.value;
          this.products = it?.data;
          this.allFood = it?.count;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          if(this.products?.length > 0){
            this.products.forEach(element => {
              this.foodQuantityForm = this.fb.group({
                quantity: new FormControl(0)
              }); 
              this.f.push(this.foodQuantityForm);
            });
          }
        }
      }
    )
    this.getListOfCategory();
    this.getByCategory();
  }

  onTabClick(event){
    this.productCategory = this.productFilter.filter(value => value?.category?.categoryName?.includes(event?.tab?.textLabel))
  }

  getListOfCategory(){
    this.cateService.getAllCategories().subscribe(
      it => {
        this.categories = it;
      }
    );
  }

  getByCategory(){
    this.productService.getByCategory().subscribe(
      it => {
        this.productFilter = it;
      }
    )
  }

  initForm(){
    this.form = this.fb.group({
      pageIndex: 1,
      pageSize: 9,
    })

    let retrievedString = localStorage.getItem("products");

    // Convert the string back into an array object
    let retrievedObject = JSON.parse(retrievedString!);

    // Log the retrieved array object
  }

  get f(){
    return this.foodForm?.controls['foodCards'] as FormArray;
  }

  increaseQuantity(index){
    // Get the current quantity of the food card at the given index
    let quantity = this.f.at(index).get('quantity')?.value
    // Decrement the quantity by one
    quantity++;
    // Set the new quantity to the food card
    if(quantity > 0){
      this.f.at(index).get('quantity')?.setValue(quantity);
    }
  }

  decreaseQuantity(index) {
    // Get the current quantity of the food card at the given index
    let quantity = this.f.at(index).get('quantity')?.value
    
    // Decrement the quantity by one
    quantity--;
    // Set the new quantity to the food card
    if(quantity >= 0){
      this.f.at(index).get('quantity')?.setValue(quantity);
    }
  }

  addToCard(index){
    if(this.f.at(index).get('quantity')?.value !== 0){
      // Retrieve the existing array from localStorage
      let arrayString = localStorage.getItem('products');
      // Parse the string into an array object
      let productArr = JSON.parse(arrayString!) || [];
      // Push the new item into the array object
      productArr.push({
        'value': this.f.at(index).get('quantity')?.value,
        'products': this.products.at(index)
      });
      // Convert the array object into a string
      arrayString = JSON.stringify(productArr);
      // Store the string in localStorage
      localStorage.setItem('products', arrayString);
    }
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
