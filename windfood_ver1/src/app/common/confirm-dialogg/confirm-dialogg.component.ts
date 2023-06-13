import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-confirm-dialogg',
  templateUrl: './confirm-dialogg.component.html',
  styleUrls: ['./confirm-dialogg.component.scss']
})
export class ConfirmDialoggComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ConfirmDialoggComponent>,
    private dialog: MatDialog,
  ){

  }

  ngOnInit(){

  }

  onConfirm(): void{
    this.defaults.onConfirm();
    this.dialog.closeAll();
  }

  onClose(): void{
    this.dialogRef.close();
  }
}
