import { Component } from '@angular/core';
import { FormArray, FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent {
  
  cartLength?: number = 0;
  
  form?: UntypedFormGroup;

  items: any;

  totalMoney: number = 0;

  paymentForm?: UntypedFormGroup;

  foodQuantityForm?: UntypedFormGroup;

  totalForm?: UntypedFormGroup;
  
  ngOnInit(){
    let retrievedString = localStorage.getItem("products");

    // Convert the string back into an array object
    let retrievedObject = JSON.parse(retrievedString!);

    this.items = retrievedObject;
    // Log the retrieved array object
    this.cartLength = retrievedObject?.length;
    this.paymentForm = this.fb.group({
      foodCards: this.fb.array([])
    })

    this.items?.forEach(element => {
      this.totalMoney = this.totalMoney + (element.value * element.products?.price);
    });

    if(this.items?.length > 0){
      this.items.forEach(element => {
        this.foodQuantityForm = this.fb.group({
          quantity: new FormControl(element.value),
          price: new FormControl(element.value * element.products.price),
        })
        this.f.push(this.foodQuantityForm);
      });
    }

    this.totalForm = this.fb.group({
      summary: new FormControl(this.totalMoney)
    });
  }

  get f(){
    return this.paymentForm?.controls['foodCards'] as FormArray;
  }

  constructor(private fb: UntypedFormBuilder){

  }


  
  increaseQuantity(index){
    // this.items.forEach(element => {
    //   this.foodQuantityForm!.get('price')?.setValue(this.foodQuantityForm!.get('quantity')?.value * element.products.price)
    //   console.log(this.foodQuantityForm!.get('price')?.value);
    // })
    // Get the current quantity of the food card at the given index
    let quantity = this.f.at(index).get('quantity')?.value
    // Decrement the quantity by one
    quantity++;

    this.f.at(index).get('price')?.setValue((quantity * this.items.at(index).products.price))
    // Set the new quantity to the food card

    this.f.controls.forEach((element ) => {
      this.totalMoney += element.get('price')?.value;
    }
    )
    this.totalForm!.get('summary')?.setValue(this.totalMoney);
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
    this.f.at(index).get('price')?.setValue((quantity * this.items.at(index).products.price))
    this.totalMoney += this.f.at(index).get('price')?.value;
    this.totalForm!.get('summary')?.setValue(this.totalMoney);
    if(quantity >= 0){
      this.f.at(index).get('quantity')?.setValue(quantity);
    }
  }

  deleteProductCart(index){

  }

  setTotalMoney(money: number){
    this.totalMoney = money;
  }

  initForm(){
    this.form = this.fb.group({
      totalPrice: null,
      paymentMethod: null,
    });
  }


}
