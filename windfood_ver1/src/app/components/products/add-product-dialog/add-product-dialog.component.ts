import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialoggComponent } from 'src/app/common/confirm-dialogg/confirm-dialogg.component';
import { ProductModel } from 'src/app/models/products.model';
import { ProductsService } from '../products.service';
import { SuppliersService } from '../../suppliers/suppliers.service';
import { NewSupplierDialogComponent } from '../new-supplier-dialog/new-supplier-dialog.component';
import { Provider } from 'src/app/models/provider.model';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent {


  imageSrc?: string;

  form?: UntypedFormGroup;

  suppliers:any

  isShowingTable: boolean = false;

  isShowingCategory: boolean = false;

  categories?: Category[];

  selection = {};

  selectionCategory = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<AddProductDialogComponent>,
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private service: ProductsService,
   ){
      
    }
    
    ngOnInit(){
      this.initForm();
      this.getAllCategories();
      this.suppliers = this.defaults.suppliers;
    }

    getAllCategories(){
      this.service.getAllCategories().subscribe(
        (it) => {
          this.categories = it
        }
      )
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
    }

    showTable(){
      this.isShowingTable = !this.isShowingTable;
    }

    showCategory(){
      this.isShowingCategory = !this.isShowingCategory;
    }

    onSelect(row: Provider){
      this.selection = row
      if(this.selection){
        this.isShowingTable = false;
      }
    }

    onSelectCategory(row: Category){
      this.selectionCategory = row
      if(this.selectionCategory){
        this.isShowingCategory = false;
      }
    }

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
          data.category = this.selectionCategory;
          console.log(data);
          this.service.addOrEditFood(data).subscribe({
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
