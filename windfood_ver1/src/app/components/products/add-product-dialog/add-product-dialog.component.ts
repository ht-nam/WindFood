import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialoggComponent } from 'src/app/common/confirm-dialogg/confirm-dialogg.component';
import { ProductModel } from 'src/app/models/products.model';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent {

  
  imageSrc?: string;

  form?: UntypedFormGroup;

  id?: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<AddProductDialogComponent>,
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    ){
      
    }
    
    ngOnInit(){
      this.initForm();
      console.log(this.defaults.products);
    }
    
    initForm(){
      this.form = this.fb.group({
        id: this.id,
        nameProduct: null,
        price: null, 
        status: null,
        img: null,
      });
    }

    onSubmit(){
      console.log(this.form?.value);
      this.dialog.open(ConfirmDialoggComponent, {
        disableClose: false,
        width: '400px',
        data: {
         products: this.defaults.products,
         onConfirm: () => {
          this.defaults.products.push(this.form?.value as ProductModel);
          this.toastrService.success("Đã thêm thành công", "Thông báo", {
            positionClass: 'toast-bottom-right' 
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
