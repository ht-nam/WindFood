"use strict";(self.webpackChunkwindfood_ver1=self.webpackChunkwindfood_ver1||[]).push([[133],{9133:(Y,_,s)=>{s.r(_),s.d(_,{ProductsRoutingModule:()=>I});var g=s(2480),A=s(2399),x=s(8909),Z=s(7820),u=s(6286),t=s(2223),c=s(9401),p=s(2018),h=s(2246),d=s(4755),C=s(1728),T=s(8097);function P(n,l){if(1&n&&t._UZ(0,"img",25),2&n){const o=t.oxw();t.Q6J("src",o.imageSrc,t.LSH)}}const b=function(){return{standalone:!0}};function E(n,l){if(1&n){const o=t.EpF();t.ynx(0),t.TgZ(1,"tr",26)(2,"td")(3,"input",27),t.NdJ("ngModelChange",function(i){t.CHM(o);const r=t.oxw();return t.KtG(r.selection=i)})("change",function(){const r=t.CHM(o).$implicit,a=t.oxw();return t.KtG(a.onSelect(r))}),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA()(),t.BQk()}if(2&n){const o=l.$implicit,e=l.index,i=t.oxw();t.xp6(1),t.s9C("id",e),t.xp6(2),t.Q6J("value",o)("ngModel",i.selection)("ngModelOptions",t.DdM(6,b)),t.xp6(2),t.Oqu(null==o?null:o.providerId),t.xp6(2),t.Oqu(null==o?null:o.providerName)}}function y(n,l){if(1&n){const o=t.EpF();t.ynx(0),t.TgZ(1,"tr",26)(2,"td")(3,"input",27),t.NdJ("ngModelChange",function(i){t.CHM(o);const r=t.oxw();return t.KtG(r.selectionCategory=i)})("change",function(){const r=t.CHM(o).$implicit,a=t.oxw();return t.KtG(a.onSelectCategory(r))}),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA()(),t.BQk()}if(2&n){const o=l.$implicit,e=l.index,i=t.oxw();t.xp6(1),t.s9C("id",e),t.xp6(2),t.Q6J("value",o)("ngModel",i.selectionCategory)("ngModelOptions",t.DdM(6,b)),t.xp6(2),t.Oqu(null==o?null:o.categoryId),t.xp6(2),t.Oqu(null==o?null:o.categoryName)}}let v=(()=>{class n{constructor(o,e,i,r,a,f){this.defaults=o,this.dialogRef=e,this.fb=i,this.dialog=r,this.toastrService=a,this.service=f,this.selection={},this.selectionCategory={}}ngOnInit(){this.product=this.defaults.product,this.suppliers=this.defaults.suppliers,this.categories=this.defaults.categories,this.selection=this.suppliers.find(o=>o.providerId===this.defaults.product?.provider?.providerId),this.selectionCategory=this.categories.find(o=>o.categoryId===this.product?.category?.categoryId),this.initForm()}get f(){return this.form?.controls}onSelect(o){this.selection=o}onSelectCategory(o){this.selectionCategory=o,console.log(this.selectionCategory)}initForm(){this.form=this.fb.group({foodId:null,foodName:null,price:null,quantity:null,urlImg:null,description:null,createDate:null,importPrice:null,provider:null,category:null}),this.imageSrc=this.product?.urlImg;let o={foodId:this.product?.foodId,foodName:this.product?.foodName,price:this.product?.price,quantity:this.product?.quantity,urlImg:"",description:this.product?.description,createDate:this.product?.createDate,importPrice:this.product?.importPrice,provider:this.selection,category:this.selectionCategory};this.form?.setValue(o),console.log(this.form)}onSubmit(){this.dialog.open(Z.y,{disableClose:!1,width:"400px",data:{products:this.defaults.products,isDelete:!1,onConfirm:()=>{let o=this.form?.getRawValue();o.urlImg=this.imageSrc,o.provider=this.selection,o.category=this.selectionCategory,this.service.addOrEditFood(o).subscribe({next:e=>{e&&(this.toastrService.success("\u0110\xe3 s\u1eeda th\xe0nh c\xf4ng","Th\xf4ng b\xe1o",{positionClass:"toast-bottom-right"}),this.defaults.reloadTable())},error:e=>{this.toastrService.warning("S\u1eeda th\u1ea5t b\u1ea1i","Th\xf4ng b\xe1o",{positionClass:"toast-bottom-right"})}})}}})}onClose(){this.dialogRef.close()}onFileChange(o){const e=new FileReader;if(o.target.files&&o.target.files.length){const[i]=o.target.files;e.readAsDataURL(i),e.onload=()=>{this.imageSrc=e.result}}}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(u.WI),t.Y36(u.so),t.Y36(c.QS),t.Y36(u.uw),t.Y36(p._W),t.Y36(h.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-product"]],decls:71,vars:4,consts:[[1,"container"],[1,"mt-3"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","name",1,"col-sm-5","col-form-label"],[1,"col-sm-7","form-input"],["type","text","formControlName","foodName",1,"form-control"],["for","price",1,"col-sm-5","col-form-label"],["type","text","formControlName","importPrice",1,"form-control"],["type","text","formControlName","price",1,"form-control"],["for","quantity",1,"col-sm-5","col-form-label"],["type","number","matInput","","name","value","formControlName","quantity",1,"form-control"],["type","text","formControlName","description",1,"form-control"],["for","file",1,"col-sm-5","col-form-label"],["style","height: 70px; width:70px; background-size: cover;",3,"src",4,"ngIf"],["id","file","type","file","formControlName","urlImg",1,"form-control",3,"change"],["for","name",1,"col-sm-12","col-form-label"],[1,"table-container","col-md-12","col-lg-12","mt-3"],[2,"width","50px"],[4,"ngFor","ngForOf"],[1,"row","mt-5","mb-5"],[1,"col-sm-12","d-flex","justify-content-end"],["color","primary","mat-raised-button","","type","submit",2,"margin-right","10px"],["mat-raised-button","","type","button",3,"click"],[2,"height","70px","width","70px","background-size","cover",3,"src"],[3,"id"],["type","radio","checked","",3,"value","ngModel","ngModelOptions","ngModelChange","change"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"S\u1eeda th\xf4ng tin s\u1ea3n ph\u1ea9m"),t.qZA(),t.TgZ(3,"mat-dialog-content",2)(4,"form",3),t.NdJ("ngSubmit",function(){return e.onSubmit()}),t.TgZ(5,"div",4)(6,"label",5),t._uU(7,"T\xean s\u1ea3n ph\u1ea9m:"),t.qZA(),t.TgZ(8,"div",6),t._UZ(9,"input",7),t.qZA()(),t.TgZ(10,"div",4)(11,"label",8),t._uU(12,"Gi\xe1 nh\u1eadp"),t.qZA(),t.TgZ(13,"div",6),t._UZ(14,"input",9),t.qZA()(),t.TgZ(15,"div",4)(16,"label",8),t._uU(17,"Gi\xe1 b\xe1n"),t.qZA(),t.TgZ(18,"div",6),t._UZ(19,"input",10),t.qZA()(),t.TgZ(20,"div",4)(21,"label",11),t._uU(22,"Nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng"),t.qZA(),t.TgZ(23,"div",6),t._UZ(24,"input",12),t.qZA()(),t.TgZ(25,"div",4)(26,"label",5),t._uU(27,"M\xf4 t\u1ea3:"),t.qZA(),t.TgZ(28,"div",6),t._UZ(29,"input",13),t.qZA()(),t.TgZ(30,"div",4)(31,"label",14),t._uU(32,"File"),t.qZA(),t.TgZ(33,"div",6),t.YNc(34,P,1,1,"img",15),t.TgZ(35,"input",16),t.NdJ("change",function(r){return e.onFileChange(r)}),t.qZA()()(),t.TgZ(36,"div",4)(37,"label",17),t._uU(38,"Nh\xe0 cung c\u1ea5p:"),t.qZA()(),t.TgZ(39,"div",4)(40,"div",18)(41,"table")(42,"thead")(43,"tr"),t._UZ(44,"th",19),t.TgZ(45,"th"),t._uU(46," ID "),t.qZA(),t.TgZ(47,"th"),t._uU(48," T\xean nh\xe0 cung c\u1ea5p "),t.qZA()()(),t.TgZ(49,"tbody"),t.YNc(50,E,8,7,"ng-container",20),t.qZA()()()(),t.TgZ(51,"div",4)(52,"label",17),t._uU(53,"Ph\xe2n lo\u1ea1i:"),t.qZA(),t.TgZ(54,"div",18)(55,"table")(56,"thead")(57,"tr"),t._UZ(58,"th",19),t.TgZ(59,"th"),t._uU(60," ID "),t.qZA(),t.TgZ(61,"th"),t._uU(62," T\xean Ph\xe2n lo\u1ea1i "),t.qZA()()(),t.TgZ(63,"tbody"),t.YNc(64,y,8,7,"ng-container",20),t.qZA()()()(),t.TgZ(65,"div",21)(66,"div",22)(67,"button",23),t._uU(68,"S\u1eeda"),t.qZA(),t.TgZ(69,"button",24),t.NdJ("click",function(){return e.onClose()}),t._uU(70,"\u0110\xf3ng"),t.qZA()()()()()()),2&o&&(t.xp6(4),t.Q6J("formGroup",e.form),t.xp6(30),t.Q6J("ngIf",e.imageSrc),t.xp6(16),t.Q6J("ngForOf",e.suppliers),t.xp6(14),t.Q6J("ngForOf",e.categories))},dependencies:[d.sg,d.O5,c._Y,c.Fj,c.wV,c._,c.JJ,c.JL,c.On,c.sg,c.u,C.lW,u.xY,T.Nt],styles:["h2[_ngcontent-%COMP%]{margin-left:30px}form[_ngcontent-%COMP%]{width:50vw}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:30px}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-top:30px}.form-input[_ngcontent-%COMP%]{width:400px}.table-container[_ngcontent-%COMP%]{width:100%;height:300px;overflow:auto}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:15px 3px;border:1px solid #DBDBDB;white-space:nowrap;text-align:center}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#fff;color:#000}"]}),n})();var M=s(346),U=s(5389),q=s(430),m=s(4333);function O(n,l){if(1&n){const o=t.EpF();t.ynx(0),t.TgZ(1,"tr",10)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._UZ(11,"img",11),t.qZA(),t.TgZ(12,"td")(13,"button",12),t.NdJ("click",function(){const r=t.CHM(o).$implicit,a=t.oxw();return t.KtG(a.editProduct(r))}),t.TgZ(14,"mat-icon"),t._uU(15,"create"),t.qZA(),t._uU(16,"S\u1eeda"),t.qZA(),t.TgZ(17,"button",13),t.NdJ("click",function(){const r=t.CHM(o).$implicit,a=t.oxw();return t.KtG(a.handleDelete(null==r?null:r.foodId))}),t.TgZ(18,"mat-icon"),t._uU(19,"delete"),t.qZA(),t._uU(20,"Xo\xe1"),t.qZA()()(),t.BQk()}if(2&n){const o=l.$implicit,e=l.index;t.xp6(1),t.s9C("id",e),t.xp6(2),t.Oqu(null==o?null:o.foodId),t.xp6(2),t.Oqu(null==o?null:o.foodName),t.xp6(2),t.Oqu(null==o?null:o.price),t.xp6(2),t.Oqu(null==o?null:o.quantity),t.xp6(2),t.s9C("src",null==o?null:o.urlImg,t.LSH)}}const S=function(n,l){return{itemsPerPage:6,currentPage:n,totalItems:l}};let w=(()=>{class n{constructor(o,e,i,r,a,f,D,J){this.productService=o,this.loader=e,this.fb=i,this.dialog=r,this.toastrService=a,this.router=f,this.supplierService=D,this.service=J,this.allFood=0,this.pagination=1}ngOnInit(){this.initForm(),this.getAllSuppliers(),this.getAllProducts(),this.getAllCategories()}initForm(){this.form=this.fb.group({pageIndex:1,pageSize:6})}get f(){return this.form?.controls}addNewProduct(){this.dialog.open(x.Z,{height:"auto",data:{products:this.products,suppliers:this.suppliers,title:"T\u1ea1o m\u1edbi s\u1ea3n ph\u1ea9m",reloadTable:()=>this.getAllProducts()}})}getAllProducts(){this.loader.show(),this.productService.getAllProductsPaging(this.form?.value).subscribe(o=>{console.log("tvv",o),this.pagination=this.form?.get("pageIndex")?.value,this.products=o?.data,this.allFood=o?.count}),this.loader.hide()}renderPage(o){this.form?.get("pageIndex")?.setValue(o),this.getAllProducts()}editProduct(o){this.dialog.open(v,{height:"auto",data:{product:o,categories:this.categories,suppliers:this.suppliers,title:"S\u1eeda th\xf4ng tin s\u1ea3n ph\u1ea9m",reloadTable:()=>this.getAllProducts()}})}getAllCategories(){this.service.getAllCategories().subscribe(o=>{this.categories=o,console.log(this.categories)})}getAllSuppliers(){this.supplierService.getAllSuppliers().subscribe(o=>{this.suppliers=o})}handleDelete(o){this.dialog.open(Z.y,{disableClose:!1,width:"400px",height:"auto",data:{title:"Xo\xe1 s\u1ea3n ph\u1ea9m",subtitle:"B\u1ea1n c\xf3 mu\u1ed1n xo\xe1 s\u1ea3n ph\u1ea9m n\xe0y kh\xf4ng",buttonConfirm:"Xo\xe1",buttonCancel:"\u0110\xf3ng",isDelete:!0,onConfirm:()=>{this.productService.deleteFood(o).subscribe({next:e=>{},error:e=>{this.toastrService.warning("Xo\xe1 th\u1ea5t b\u1ea1i","Th\xf4ng b\xe1o",{positionClass:"toast-bottom-right"}),console.log(e)},complete:()=>{this.toastrService.success("Xo\xe1 th\xe0nh c\xf4ng","Th\xf4ng b\xe1o",{positionClass:"toast-bottom-right"}),this.getAllProducts()}})}}})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(h.s),t.Y36(M.t2),t.Y36(c.QS),t.Y36(u.uw),t.Y36(p._W),t.Y36(g.F0),t.Y36(U.R),t.Y36(h.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-products"]],decls:29,vars:8,consts:[[1,"container","mt-5",3,"formGroup"],[1,"card"],[1,"row","m-2"],[1,"search-case"],["type","button","mat-raised-button","","color","accent",1,"col-md-2",3,"click"],[1,"col-md-12"],[1,"table-container"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],[3,"pageChange"],[3,"id"],["alt","",2,"width","50px","height","50px","object-fit","cover","background-size","cover",3,"src"],["color","primary","mat-raised-button","",2,"margin-right","10px",3,"click"],["color","warn","mat-raised-button","",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"S\u1ea2N PH\u1ea8M"),t.qZA(),t.TgZ(5,"div",3)(6,"button",4),t.NdJ("click",function(){return e.addNewProduct()}),t._uU(7,"Th\xeam m\u1edbi"),t.qZA()()(),t.TgZ(8,"div",2)(9,"div",5)(10,"table",6)(11,"thead")(12,"tr")(13,"th"),t._uU(14," ID "),t.qZA(),t.TgZ(15,"th"),t._uU(16," T\xean s\u1ea3n ph\u1ea9m "),t.qZA(),t.TgZ(17,"th"),t._uU(18," Gi\xe1 "),t.qZA(),t.TgZ(19,"th"),t._uU(20," S\u1ed1 l\u01b0\u1ee3ng "),t.qZA(),t.TgZ(21,"th"),t._uU(22," \u1ea2nh "),t.qZA(),t._UZ(23,"th"),t.qZA()(),t.TgZ(24,"tbody"),t.YNc(25,O,21,6,"ng-container",7),t.ALo(26,"paginate"),t.qZA()()()(),t.TgZ(27,"div",8)(28,"pagination-controls",9),t.NdJ("pageChange",function(r){return e.renderPage(r)}),t.qZA()()()()),2&o&&(t.Q6J("formGroup",e.form),t.xp6(25),t.Q6J("ngForOf",t.xi3(26,2,e.products,t.WLB(5,S,e.pagination,e.allFood))))},dependencies:[d.sg,c._Y,c.JL,c.sg,C.lW,q.Hw,m.LS,m._s],styles:["button{margin-bottom:20px}.search-case{display:flex;align-items:center;justify-content:space-between}.search-case .form-field{display:flex;align-items:center}.search-case .form-field mat-form-field{width:400px;margin-right:10px}.table-container{width:100%;height:100%}.table-container th,.table-container td{padding:15px 3px;border:1px solid #DBDBDB;white-space:nowrap;text-align:center}.table-container th{background-color:#fff;color:#000}\n"],encapsulation:2}),n})();var F=s(3144);const N=[{path:"",children:[{path:"",component:w},{path:"edit/:id",component:v}]}];let I=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[c.sg],imports:[d.ez,g.Bz.forChild(N),A.d,F.JF,p.Rh,m.JX,g.Bz]}),n})()}}]);