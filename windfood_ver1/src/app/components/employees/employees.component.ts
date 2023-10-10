import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { ProductModel } from 'src/app/models/products.model';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialoggComponent } from 'src/app/common/confirm-dialogg/confirm-dialogg.component';
import { Router } from '@angular/router';
import { AddEmployeeDialogComponent } from './add-employee-dialog/add-employee-dialog.component';
import { EmployeesService } from './employees.service';
import { EditEmployeeDialogComponent } from './edit-employee-dialog/edit-employee-dialog.component';
import { Person } from 'src/app/models/person.model';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  employees: any;

  form?: UntypedFormGroup;

  allFood: number = 0;
  pagination: number = 1;

  constructor(private loader: NgxSpinnerService, 
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private router: Router,
    private service: EmployeesService
    ){

  }

  ngOnInit(){
    this.initForm();
    this.getAllEmployees();
  }

  initForm(){
    this.form = this.fb.group({
      pageIndex: 1,
      pageSize: 6,
      search: null,
    })
  }
  
  get f(){
    return this.form?.controls;
  }
  addNewEmployee(){
    this.dialog.open(AddEmployeeDialogComponent,{
      height: 'auto',
      data: {
        employees: this.employees,
        title: 'Thêm mới nhân viên',
        // reloadTable: () => ,
      }
    }).afterClosed().subscribe(() => {
      this.getAllEmployees()
    })
  }

  getAllEmployees(){
    this.loader.show();
    this.service.getAllEmployeesPaging(this.form?.value).subscribe(
      it => {
        this.pagination = this.form?.get('pageIndex')?.value;
        this.employees = it?.data;
        this.allFood = it?.count;
      }
      )
    this.loader.hide();
  }

  renderPage(event: number) {
    this.form?.get('pageIndex')?.setValue(event);
    this.getAllEmployees();
  }

  editProduct(employee: Person){
    this.dialog.open(EditEmployeeDialogComponent,{
      height: 'auto',
      data: {
        employee: employee,
        title: 'Sửa thông tin nhân viên',
        isEditing: true,
        // reloadTable: () => this.getAllEmployees(),
      }
    }).afterClosed().subscribe(() => this.getAllEmployees())
  }

  handleDelete(id: string){
    this.dialog.open(ConfirmDialoggComponent, {
      disableClose: false,
      width: '400px',
      height: 'auto',
      data: {
       title: 'Xoá nhân viên',
       subtitle: 'Bạn có muốn xoá nhân viên này không',
       buttonConfirm: 'Xoá',
       buttonCancel: 'Đóng',
       isDelete: true,
       onConfirm: () => {
        this.service.deleteEmployee(id).subscribe(
          {
            next: (response) => {

            },
            error: (err) => {
              this.toastrService.warning("Xoá thất bại", "Thông báo", {
                positionClass: 'toast-bottom-right' 
              })
              console.log(err);
            },
            complete: () => {
              this.toastrService.success("Xoá thành công", "Thông báo", {
                positionClass: 'toast-bottom-right' 
              })
            }
          }
        )
       }
      }
    }).afterClosed().subscribe(() => {
      this.getAllEmployees();
    })
  }

}
