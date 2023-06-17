import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialoggComponent } from 'src/app/common/confirm-dialogg/confirm-dialogg.component';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.scss']
})
export class AddCategoryDialogComponent {
  form?: UntypedFormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<AddCategoryDialogComponent>,
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private service: CategoriesService
    ){
      
    }
    
    ngOnInit(){
      this.initForm();
    }
    
    initForm(){
      this.form = this.fb.group({
        categoryId: null,
        categoryName: null,
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
          let data = this.form?.getRawValue() as Category;
          this.service.addOrUpdateCategory(data).subscribe({
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

    onClose(){
      this.dialogRef.close();
    }
}
