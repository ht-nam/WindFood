import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent {

  
  imageSrc?: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<AddProductDialogComponent>,
    ){
      
    }
    
    ngOnInit(){
      console.log(this.defaults.products);
    }
    
    onFileChange(event: any) {
      const reader = new FileReader();
      
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
      
        reader.onload = () => {
     
          this.imageSrc = reader.result as string;
          // this.myForm.patchValue({
          //   fileSource: reader.result
          // });
     
        };
     
      }
    }
}
