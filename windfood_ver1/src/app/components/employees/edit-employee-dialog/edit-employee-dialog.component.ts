import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialoggComponent } from 'src/app/common/confirm-dialogg/confirm-dialogg.component';
import { Person } from 'src/app/models/person.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee-dialog.component.html',
  styleUrls: ['./edit-employee-dialog.component.scss']
})
export class EditEmployeeDialogComponent {

  imageSrc?: string;

  employee?: Person;

  form?: UntypedFormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private service: EmployeesService
    ){
      
    }
    
    ngOnInit(){
      this.employee = this.defaults.employee;
      this.initForm();
    }

    get f(){
      return this.form?.controls;
    }
    
    initForm(){
      this.form = this.fb.group({
        personId: null,
        name: null,
        phoneNumber: null, 
        birthday: null,
        urlImg: null,
        role: null,
        username: null,
        password: null,
      });
        this.imageSrc = this.employee?.urlImg;
        let object = {
          personId: this.employee?.personId,
          name: this.employee?.name,
          phoneNumber: this.employee?.phoneNumber, 
          birthday: this.employee?.birthday,
          urlImg: '',
          role: this.employee?.role,
          username: this.employee?.username,
          password: this.employee?.password
        } as Person;
        this.form?.setValue(object);
    };

    onSubmit(){
      this.dialog.open(ConfirmDialoggComponent, {
        disableClose: false,
        width: '400px',
        data: {
         products: this.defaults.products,
         isDelete: false,
         onConfirm: () => {
          let data = this.form?.getRawValue() as Person;
          data.urlImg = this.imageSrc;
          this.service.addOrEditEmployees(data).subscribe({
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
