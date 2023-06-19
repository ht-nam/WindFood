import { Component, Inject } from '@angular/core';
import { FormArray, FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Bill } from 'src/app/models/bill.model';
import { PaymentService } from '../../payment/payment.service';
import { ConfirmDialoggComponent } from 'src/app/common/confirm-dialogg/confirm-dialogg.component';

@Component({
  selector: 'app-bill-edit-dialog',
  templateUrl: './bill-edit-dialog.component.html',
  styleUrls: ['./bill-edit-dialog.component.scss']
})
export class BillEditDialogComponent {

  imageSrc?: string;

  bill?: any;

  form?: UntypedFormGroup;

  foodTotal?: UntypedFormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<BillEditDialogComponent>,
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private service: PaymentService
    ){
      
    }
    
    ngOnInit(){
      this.bill = this.defaults.bill;
      this.initForm();
    }

    initForm(){
      this.foodTotal = this.fb.group({
        totalPrice: this.bill?.totalPrice,
        name: this.bill?.creator?.name,
        paymentMethod: this.bill?.paymentMethod,
      })

      this.form = this.fb.group({
        foodCards: this.fb.array([])
      });

      this.bill?.foodBills?.forEach(element => {        
        let foodQuantityForm = this.fb.group({
          price: new FormControl(element?.food?.price),
          quantity: new FormControl(element?.quantity)
        })
        // console.log(foodQuantityForm);
        this.f.push(foodQuantityForm);
      });
      this.foodTotal.get('totalPrice')?.disable();
      this.foodTotal.get('name')?.disable();
      this.foodTotal.get('paymentMethod')?.disable();
      
      // let object = {
      //   totalPrice: this.bill?.totalPrice,
      //   name: this.bill?.creator?.name,
      //   paymentMethod: this.bill?.paymentMethod,
      // } as Bill;
      // this.form?.setValue(object);
    };

    get f(){
      return this.form?.controls['foodCards'] as FormArray;
    }

    decreaseQuantity(index){
      let quantity = this.f.at(index).get('quantity')?.value
      quantity--;
      this.f.at(index).get('quantity')?.setValue(quantity);
      let total = 0;
      this.f.controls.forEach(element => {
        total += (element.get('quantity')?.value * element.get('price')?.value)
      });
    }

    increaseQuantity(index){
      let quantity = this.f.at(index).get('quantity')?.value
      quantity++;
      this.f.at(index).get('quantity')?.setValue(quantity);
      let total = 0;
      this.f.controls.forEach(element => {
        total += (element.get('quantity')?.value * element.get('price')?.value)
      });

      this.foodTotal?.get('totalPrice')?.setValue(total)
    }

    onSubmit(){
      this.dialog.open(ConfirmDialoggComponent, {
        disableClose: false,
        width: '400px',
        data: {
         isDelete: false,
         onConfirm: () => {
          let data = this.bill;          
          data['totalPrice'] = this.foodTotal?.get('totalPrice')?.value;
          for (let index = 0; index < data.foodBills.length; index++) {
            data.foodBills[index].quantity = this.f.at(index).get('quantity')?.value;
          }
          this.service.addOrEditBill(data).subscribe({
            next: (response) => {
              if(response){
                this.toastrService.success("Đã sửa thành công", "Thông báo", {
                  positionClass: 'toast-bottom-right' 
                })
                this.defaults.reloadTable();
              }              
            },
            error: (err) => {
              this.toastrService.warning("Sửa thất bại", "Thông báo", {
                positionClass: 'toast-bottom-right' 
              })
            }
          })
         }
        }
      })
    }

    onClose(){
      this.dialogRef.close();
    }

    onFileChange(event: any) {
      const reader = new FileReader();
      
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
      
        reader.onload = () => {
          this.imageSrc = reader.result as string;
        };
     
      }
    }
}
