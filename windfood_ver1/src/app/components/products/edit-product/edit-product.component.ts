import { Component, Inject } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialoggComponent } from 'src/app/common/confirm-dialogg/confirm-dialogg.component';
import { ProductModel } from 'src/app/models/products.model';
import { ProductsService } from '../products.service';
import { Provider } from 'src/app/models/provider.model';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {

  imageSrc?: string;

  product?: ProductModel;

  form?: UntypedFormGroup;

  suppliers?: any;

  selection = {}

  products: any;

  categories: any;

  selectionCategory = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<EditProductComponent>,
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private service: ProductsService
    ){
      
    }
    
    ngOnInit(){
      this.product = this.defaults.product;
      this.suppliers = this.defaults.suppliers;
      this.categories = this.defaults.categories;
      this.selection = this.suppliers.find(obj => obj.providerId === this.defaults.product?.provider?.providerId);
      // if(this.product?.category?.categoryId){
      this.selectionCategory = this.categories.find(obj => (obj.categoryId === this.product?.category?.categoryId))
      // }
      this.initForm();
    }

    get f(){
      return this.form?.controls;
    }

    onSelect(row: Provider){
      this.selection = row
    }

    onSelectCategory(row: Category){
      this.selectionCategory = row
      console.log(this.selectionCategory);
    }
    
    initForm(){
      this.form = this.fb.group({
        foodId: null,
        foodName: null,
        price: null, 
        quantity: null,
        urlImg: null,
        description: null,
        createDate: null,
        importPrice: null,
        provider: null,
        category: null,
      });
        this.imageSrc = this.product?.urlImg;
        let object = {
          foodId: this.product?.foodId,
          foodName: this.product?.foodName,
          price: this.product?.price,
          quantity: this.product?.quantity,
          urlImg: '',
          description: this.product?.description,
          createDate: this.product?.createDate,
          importPrice: this.product?.importPrice,
          provider: this.selection,
          category: this.selectionCategory
        } as ProductModel;
        this.form?.setValue(object);
        console.log(this.form);
    };

    onSubmit(){
      this.dialog.open(ConfirmDialoggComponent, {
        disableClose: false,
        width: '400px',
        data: {
         products: this.defaults.products,
         isDelete: false,
         onConfirm: () => {
          let data = this.form?.getRawValue() as ProductModel;
          data.urlImg = this.imageSrc;
          data.provider = this.selection;
          data.category = this.selectionCategory
          this.service.addOrEditFood(data).subscribe({
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
