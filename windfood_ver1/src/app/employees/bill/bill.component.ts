import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from '../payment/payment.service';
import { Bill } from 'src/app/models/bill.model';
import { ConfirmDialoggComponent } from 'src/app/common/confirm-dialogg/confirm-dialogg.component';
import { LoginService } from 'src/app/components/auth/login/login.service';
import { BillEditDialogComponent } from './bill-edit-dialog/bill-edit-dialog.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent {
  bills: any;

  form?: UntypedFormGroup;

  allFood: number = 0;
  pagination: number = 1;

  user: any;

  constructor(private loader: NgxSpinnerService, 
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private router: Router,
    private service: PaymentService,
    private loginService: LoginService
    ){

  }

  ngOnInit(){
    this.initForm();
    this.getAllBills();
    this.loginService.getCurrentUser().subscribe(
      it => {
        this.user = it
      }
    )
  }

  initForm(){
    this.form = this.fb.group({
      // foodSearch: null,
      pageIndex: 1,
      pageSize: 6,
    })
  }
  
  get f(){
    return this.form?.controls;
  }

  getAllBills(){
    this.loader.show();
    this.service.getAllBillPaging(this.form?.value).subscribe(
      it => {
        this.pagination = this.form?.get('pageIndex')?.value;
        this.bills = it?.data;
        
        this.allFood = it?.count;
      }
      )
    this.loader.hide();
  }

  getCurrentRole(){
    return localStorage.getItem('role');
  }

  renderPage(event: number) {
    this.form?.get('pageIndex')?.setValue(event);
    this.getAllBills();
  }

  editProduct(bill: Bill){
    this.dialog.open(BillEditDialogComponent,{
      height: 'auto',
      width: '600px',
      data: {
        bill: bill,
        title: 'Sửa thông tin hoá đơn',
        reloadTable: () => this.getAllBills(),
      }
    })
  }

  handleDelete(id: string){
    this.dialog.open(ConfirmDialoggComponent, {
      disableClose: false,
      width: '400px',
      height: 'auto',
      data: {
       title: 'Xoá nhân viên',
       subtitle: 'Bạn có muốn xoá hoá đơn này không',
       buttonConfirm: 'Xoá',
       buttonCancel: 'Đóng',
       isDelete: true,
       onConfirm: () => {
        this.service.deleteBill(id).subscribe(
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
              this.getAllBills();
            }
          }
        )
       }
      }
    })
  }

}
