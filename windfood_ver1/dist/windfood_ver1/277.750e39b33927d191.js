"use strict";(self.webpackChunkwindfood_ver1=self.webpackChunkwindfood_ver1||[]).push([[277],{2277:(U,g,s)=>{s.r(g),s.d(g,{ProductsRoutingModule:()=>F});var m=s(2480),C=s(7278),c=s(6286),e=s(2223);let S=(()=>{class n{constructor(t,i,r){this.defaults=t,this.dialogRef=i,this.dialog=r}ngOnInit(){}onConfirm(){this.defaults.onConfirm(),this.dialog.closeAll()}onClose(){this.dialogRef.close()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.WI),e.Y36(c.so),e.Y36(c.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-confirm-dialogg"]],decls:12,vars:0,consts:[[1,"container"],[1,"row"],[1,"text-center"],[1,"d-flex","align-items-center","justify-content-center"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"h2",2),e._uU(4,"Ch\xfa \xfd"),e.qZA(),e.TgZ(5,"p",2),e._uU(6,"B\u1ea1n c\xf3 mu\u1ed1n ti\u1ebfp t\u1ee5c kh\xf4ng?"),e.qZA(),e.TgZ(7,"div",3)(8,"button",4),e.NdJ("click",function(){return i.onConfirm()}),e._uU(9,"Ti\u1ebfp t\u1ee5c"),e.qZA(),e.TgZ(10,"button",5),e.NdJ("click",function(){return i.onClose()}),e._uU(11,"Hu\u1ef7 b\u1ecf"),e.qZA()()()()())}}),n})();var l=s(9401),f=s(2018),u=s(4755),h=s(1728);function x(n,o){if(1&n&&e._UZ(0,"img",22),2&n){const t=e.oxw();e.Q6J("src",t.imageSrc,e.LSH)}}let y=(()=>{class n{constructor(t,i,r,a,d){this.defaults=t,this.dialogRef=i,this.fb=r,this.dialog=a,this.toastrService=d,this.id=0}ngOnInit(){this.initForm(),console.log(this.defaults.products)}initForm(){this.form=this.fb.group({id:this.id,nameProduct:null,price:null,status:null,img:null})}onSubmit(){console.log(this.form?.value),this.dialog.open(S,{disableClose:!1,width:"400px",data:{products:this.defaults.products,onConfirm:()=>{this.defaults.products.push(this.form?.value),this.toastrService.success("\u0110\xe3 th\xeam th\xe0nh c\xf4ng","Th\xf4ng b\xe1o",{positionClass:"toast-bottom-right"})}}})}onClose(){this.dialogRef.close()}onFileChange(t){const i=new FileReader;if(t.target.files&&t.target.files.length){const[r]=t.target.files;i.readAsDataURL(r),i.onload=()=>{this.imageSrc=i.result}}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.WI),e.Y36(c.so),e.Y36(l.QS),e.Y36(c.uw),e.Y36(f._W))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-product-dialog"]],decls:37,vars:2,consts:[[1,"container"],[1,"mt-3"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","name",1,"col-sm-5","col-form-label"],[1,"col-sm-7","form-input"],["type","text","formControlName","nameProduct",1,"form-control"],["for","price",1,"col-sm-5","col-form-label"],["type","text","formControlName","price",1,"form-control"],["for","status",1,"col-sm-5","col-form-label"],["formControlName","status",1,"form-select"],["selected",""],["value","1"],["value","2"],["for","file",1,"col-sm-5","col-form-label"],["style","height: 70px; width:70px; background-size: cover;",3,"src",4,"ngIf"],["id","file","type","file","formControlName","img",1,"form-control",3,"change"],[1,"row","mt-5","mb-5"],[1,"col-sm-12","d-flex","justify-content-end"],["color","primary","mat-raised-button","","type","submit",2,"margin-right","10px"],["mat-raised-button","","type","button",3,"click"],[2,"height","70px","width","70px","background-size","cover",3,"src"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"T\u1ea1o m\u1edbi s\u1ea3n ph\u1ea9m"),e.qZA(),e.TgZ(3,"div",2)(4,"form",3),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(5,"div",4)(6,"label",5),e._uU(7,"T\xean s\u1ea3n ph\u1ea9m:"),e.qZA(),e.TgZ(8,"div",6),e._UZ(9,"input",7),e.qZA()(),e.TgZ(10,"div",4)(11,"label",8),e._uU(12,"Gi\xe1"),e.qZA(),e.TgZ(13,"div",6),e._UZ(14,"input",9),e.qZA()(),e.TgZ(15,"div",4)(16,"label",10),e._uU(17,"Tr\u1ea1ng th\xe1i"),e.qZA(),e.TgZ(18,"div",6)(19,"select",11),e._UZ(20,"option",12),e.TgZ(21,"option",13),e._uU(22,"C\xf2n"),e.qZA(),e.TgZ(23,"option",14),e._uU(24,"Kh\xf4ng c\xf2n"),e.qZA()()()(),e.TgZ(25,"div",4)(26,"label",15),e._uU(27,"File"),e.qZA(),e.TgZ(28,"div",6),e.YNc(29,x,1,1,"img",16),e.TgZ(30,"input",17),e.NdJ("change",function(a){return i.onFileChange(a)}),e.qZA()()(),e.TgZ(31,"div",18)(32,"div",19)(33,"button",20),e._uU(34,"Th\xeam"),e.qZA(),e.TgZ(35,"button",21),e.NdJ("click",function(){return i.onClose()}),e._uU(36,"\u0110\xf3ng"),e.qZA()()()()()()),2&t&&(e.xp6(4),e.Q6J("formGroup",i.form),e.xp6(25),e.Q6J("ngIf",i.imageSrc))},dependencies:[u.O5,l._Y,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.JL,l.sg,l.u,h.lW],styles:["h2[_ngcontent-%COMP%]{margin-left:30px}form[_ngcontent-%COMP%]{width:50vw}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:30px}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-top:30px}.form-input[_ngcontent-%COMP%]{width:400px}"]}),n})();var _=s(2340),b=s(3144);let N=(()=>{class n{constructor(t){this.httpClient=t,this.baseUrl=_.N.baseUrl+"api/foods"}getAllProductsPaging(t){return this.httpClient.post(this.baseUrl+"/paging",t,{responseType:"json"})}getAllProducts(){return this.httpClient.get(this.baseUrl)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(b.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var A=s(1135),P=s(9300);const v="primary";class p{constructor(o){Object.assign(this,o)}static create(o){return!o?.template&&!o?.type&&console.warn('[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component\n        and ensure css is added to angular.json file'),new p(o)}}let O=(()=>{class n{constructor(){this.spinnerObservable=new A.X(null)}getSpinner(t){return this.spinnerObservable.asObservable().pipe((0,P.h)(i=>i&&i.name===t))}show(t=v,i){return new Promise((r,a)=>{setTimeout(()=>{i&&Object.keys(i).length?(i.name=t,this.spinnerObservable.next(new p({...i,show:!0})),r(!0)):(this.spinnerObservable.next(new p({name:t,show:!0})),r(!0))},10)})}hide(t=v,i=10){return new Promise((r,a)=>{setTimeout(()=>{this.spinnerObservable.next(new p({name:t,show:!1})),r(!0)},i)})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();new e.OlP("NGX_SPINNER_CONFIG");var E=s(430);function D(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"tr",8)(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._UZ(11,"img",9),e.qZA(),e.TgZ(12,"td")(13,"button",10)(14,"mat-icon"),e._uU(15,"create"),e.qZA(),e._uU(16,"S\u1eeda"),e.qZA(),e.TgZ(17,"button",11)(18,"mat-icon"),e._uU(19,"delete"),e.qZA(),e._uU(20,"Xo\xe1"),e.qZA()()(),e.BQk()),2&n){const t=o.$implicit,i=o.index;e.xp6(1),e.s9C("id",i),e.xp6(2),e.Oqu(null==t?null:t.foodId),e.xp6(2),e.Oqu(null==t?null:t.foodName),e.xp6(2),e.Oqu(null==t?null:t.price),e.xp6(2),e.Oqu(0!==(null==t?null:t.quantity)?"C\xf2n":"Kh\xf4ng c\xf2n"),e.xp6(2),e.s9C("src",null==t?null:t.urlImg,e.LSH)}}const I=[{path:"",children:[{path:"",component:(()=>{class n{constructor(t,i,r,a){this.productService=t,this.loader=i,this.fb=r,this.dialog=a}ngOnInit(){this.initForm(),this.getAllProducts()}initForm(){this.form=this.fb.group({pageIndex:1,pageSize:10})}get f(){return this.form?.controls}addNewProduct(){this.dialog.open(y,{height:"auto",data:{products:this.products,title:"T\u1ea1o m\u1edbi s\u1ea3n ph\u1ea9m"}})}getAllProducts(){this.loader.show(),this.productService.getAllProductsPaging(this.form?.value).subscribe(t=>{this.products=t?.data}),this.loader.hide()}searchByProduct(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(N),e.Y36(O),e.Y36(l.QS),e.Y36(c.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-products"]],decls:26,vars:2,consts:[[1,"container","mt-5",3,"formGroup"],[1,"card"],[1,"row","m-2"],[1,"search-case"],["type","button","mat-raised-button","","color","primary",1,"col-md-2",3,"click"],[1,"col-md-12"],[1,"table-container"],[4,"ngFor","ngForOf"],[3,"id"],["alt","",2,"width","50px","height","50px","object-fit","cover","background-size","cover",3,"src"],["color","primary","mat-raised-button","",2,"margin-right","10px"],["color","warn","mat-raised-button",""]],template:function(t,i){1&t&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"h2"),e._uU(4,"S\u1ea2N PH\u1ea8M"),e.qZA(),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return i.addNewProduct()}),e._uU(7,"Th\xeam m\u1edbi"),e.qZA()()(),e.TgZ(8,"div",2)(9,"div",5)(10,"table",6)(11,"thead")(12,"tr")(13,"th"),e._uU(14," ID "),e.qZA(),e.TgZ(15,"th"),e._uU(16," T\xean s\u1ea3n ph\u1ea9m "),e.qZA(),e.TgZ(17,"th"),e._uU(18," Gi\xe1 "),e.qZA(),e.TgZ(19,"th"),e._uU(20," Tr\u1ea1ng th\xe1i "),e.qZA(),e.TgZ(21,"th"),e._uU(22," \u1ea2nh "),e.qZA(),e._UZ(23,"th"),e.qZA()(),e.TgZ(24,"tbody"),e.YNc(25,D,21,6,"ng-container",7),e.qZA()()()()()()),2&t&&(e.Q6J("formGroup",i.form),e.xp6(25),e.Q6J("ngForOf",i.products))},dependencies:[u.sg,l._Y,l.JL,l.sg,h.lW,E.Hw],styles:["button{margin-bottom:20px}.search-case{display:flex;align-items:center;justify-content:space-between}.search-case .form-field{display:flex;align-items:center}.search-case .form-field mat-form-field{width:400px;margin-right:10px}.table-container{width:100%;height:100%}.table-container th,.table-container td{padding:15px 3px;border:1px solid #DBDBDB;white-space:nowrap;text-align:center}.table-container th{background-color:#fff;color:#000}\n"],encapsulation:2}),n})()}]}];let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[l.sg],imports:[u.ez,m.Bz.forChild(I),C.d,b.JF,f.Rh,m.Bz]}),n})()}}]);