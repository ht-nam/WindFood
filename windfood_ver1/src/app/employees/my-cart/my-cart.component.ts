import { Component } from '@angular/core';
import { FormArray, FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PaymentComponent } from '../payment/payment.component';
import { LoginService } from 'src/app/components/auth/login/login.service';
import { Person } from 'src/app/models/person.model';

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

  user?: any;

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
          id: new FormControl(element.products.foodId),
          quantity: new FormControl(element.value),
          price: new FormControl(element.value * element.products.price),
        })
        this.f.push(this.foodQuantityForm);
      });
    }

    this.totalForm = this.fb.group({
      summary: new FormControl(this.totalMoney)
    });

    this.loginService.getCurrentUser().subscribe(
      it => {
        this.user = it
      }
    )
  }

  get f(){
    return this.paymentForm?.controls['foodCards'] as FormArray;
  }

  constructor(private fb: UntypedFormBuilder, private dialog: MatDialog, private loginService: LoginService){

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

  paymentFunction(){
    let object = [] as any;
    let data = {} as any;
    data['totalPrice'] = this.totalForm?.get('summary')?.value;
    data['creator'] = this.user?.person_id
    this.f.controls.forEach((element ) => {
      object.push({
        quantity: element.get('quantity')?.value,
        food: {
          foodId: element.get('id')?.value
        }
      })
    })
    data['foodBills'] = object
    // let value = this.items.map((val) => console.log(val.products.foodId))
    // console.log(value);
    this.dialog.open(PaymentComponent, {
      height: 'auto',
      data: {
        cart: data
      }
    })
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
