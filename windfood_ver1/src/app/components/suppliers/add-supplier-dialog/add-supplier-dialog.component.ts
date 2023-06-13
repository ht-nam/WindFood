import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialoggComponent } from 'src/app/common/confirm-dialogg/confirm-dialogg.component';
import { ProductModel } from 'src/app/models/products.model';
import { SuppliersService } from '../suppliers.service';
import { Provider } from 'src/app/models/provider.model';
import { AddProductDialogComponent } from '../../products/add-product-dialog/add-product-dialog.component';

@Component({
  selector: 'app-add-supplier-dialog',
  templateUrl: './add-supplier-dialog.component.html',
  styleUrls: ['./add-supplier-dialog.component.scss']
})
export class AddSupplierDialogComponent {
  form?: UntypedFormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<AddSupplierDialogComponent>,
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private service: SuppliersService
    ){
      
    }
    
    ngOnInit(){
      this.initForm();
      console.log(this.defaults.products);
    }
    
    initForm(){
      this.form = this.fb.group({
        providerId: null,
        providerName: null,
        foods: null,
      });
    }

    onSubmit(){
      this.dialog.open(ConfirmDialoggComponent, {
        disableClose: false,
        width: '400px',
        data: {
         products: this.defaults.products,
         isDelete: false,
         onConfirm: () => {
          let data = this.form?.getRawValue() as Provider;
          this.service.addOrEditSupplier(data).subscribe({
            next: (response) => {
              if(response){
                this.toastrService.success("Đã thêm thành công", "Thông báo", {
                  positionClass: 'toast-bottom-right' 
                })
                this.defaults.reloadTable();
              }              
            },
            error: (err) => {
              this.toastrService.warning("Thêm thất bại", "Thông báo", {
                positionClass: 'toast-bottom-right' 
              })
            }
          })
         }
        }
      })
    }

    addNewProduct(){
      this.dialog.open(AddProductDialogComponent,{
        height: 'auto',
        data: {
          title: 'Tạo mới sản phẩm của nhà cung cấp',
        }
      })
    }

    onClose(){
      this.dialogRef.close();
    }
}
