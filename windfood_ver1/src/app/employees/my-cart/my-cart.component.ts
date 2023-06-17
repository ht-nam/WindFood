import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

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

  ngOnInit(){
        
    let retrievedString = localStorage.getItem("products");

    // Convert the string back into an array object
    let retrievedObject = JSON.parse(retrievedString!);

    this.items = retrievedObject;
    
    // Log the retrieved array object
    this.cartLength = retrievedObject.length;
  }

  constructor(private fb: UntypedFormBuilder){

  }

  setTotalMoney(money: number){
    this.totalMoney = money;
  }

  summary(){
    this.items.forEach(element => {
      this.totalMoney = this.totalMoney + (element.value * element.products?.price);
    });
    return this.totalMoney;
  }

  initForm(){
    this.form = this.fb.group({

    });
  }


}
