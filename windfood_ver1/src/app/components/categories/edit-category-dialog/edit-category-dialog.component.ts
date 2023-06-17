import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialoggComponent } from 'src/app/common/confirm-dialogg/confirm-dialogg.component';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',
  styleUrls: ['./edit-category-dialog.component.scss']
})
export class EditCategoryDialogComponent {
  form?: UntypedFormGroup;
  category?: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<EditCategoryDialogComponent>,
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private service: CategoriesService
    ){
      
    }
    
    ngOnInit(){
      this.category = this.defaults.category;
      console.log(this.category);
      this.initForm();
    }
    
    initForm(){
      this.form = this.fb.group({
        categoryId: null,
        categoryName: null,
      });
      let object = {
        categoryId: this.category?.categoryId,
        categoryName: this.category?.categoryName
      } as Category
      this.form?.setValue(object);
    }

    onSubmit(){
      this.dialog.open(ConfirmDialoggComponent, {
        disableClose: false,
        width: '400px',
        data: {
         isDelete: false,
         onConfirm: () => {
          let data = this.form?.getRawValue() as Category;
          this.service.addOrUpdateCategory(data).subscribe({
            next: (response) => {
              if(response){
                this.toastrService.success("Sửa thành công", "Thông báo", {
                  positionClass: 'toast-bottom-right' 
                })
                this.defaults.reloadTable();
                this.onClose();
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
}
