"use strict";(self.webpackChunkwindfood_ver1=self.webpackChunkwindfood_ver1||[]).push([[161],{7820:(T,C,r)=>{r.d(C,{y:()=>c});var f=r(6286),e=r(2223),s=r(4755),v=r(1728);const m=function(u,h){return{"text-center":u,"text-start":h}},p=function(u,h){return{"button-content d-flex align-items-center justify-content-center":u,"d-flex align-items-center justify-content-end":h}};let c=(()=>{class u{constructor(t,g,b){this.defaults=t,this.dialogRef=g,this.dialog=b,this.title="Ch\xfa \xfd",this.subtitle="B\u1ea1n c\xf3 mu\u1ed1n ti\u1ebfp t\u1ee5c kh\xf4ng?",this.buttonConfirm="Ti\u1ebfp t\u1ee5c",this.buttonCancel="Hu\u1ef7 b\u1ecf",this.isDelete=!1}ngOnInit(){this.defaults?.title&&this.defaults?.subtitle&&(this.title=this.defaults?.title,this.subtitle=this.defaults?.subtitle),this.defaults?.buttonConfirm&&this.defaults?.buttonCancel&&(this.buttonConfirm=this.defaults?.buttonConfirm,this.buttonCancel=this.defaults?.buttonCancel),this.defaults?.isDelete&&(this.isDelete=this.defaults.isDelete)}onConfirm(){this.defaults.onConfirm(),this.dialog.closeAll()}onClose(){this.dialogRef.close()}}return u.\u0275fac=function(t){return new(t||u)(e.Y36(f.WI),e.Y36(f.so),e.Y36(f.uw))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-confirm-dialogg"]],decls:12,vars:16,consts:[[1,"container"],[1,"row"],[3,"ngClass"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",2,"color","#000",3,"click"]],template:function(t,g){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"h2",2),e._uU(4),e.qZA(),e.TgZ(5,"p",2),e._uU(6),e.qZA(),e.TgZ(7,"div",2)(8,"button",3),e.NdJ("click",function(){return g.onConfirm()}),e._uU(9),e.qZA(),e.TgZ(10,"button",4),e.NdJ("click",function(){return g.onClose()}),e._uU(11),e.qZA()()()()()),2&t&&(e.xp6(3),e.Q6J("ngClass",e.WLB(7,m,!g.isDelete,g.isDelete)),e.xp6(1),e.Oqu(g.title),e.xp6(1),e.Q6J("ngClass",e.WLB(10,m,!g.isDelete,g.isDelete)),e.xp6(1),e.Oqu(g.subtitle),e.xp6(1),e.Q6J("ngClass",e.WLB(13,p,!g.isDelete,g.isDelete)),e.xp6(2),e.Oqu(g.buttonConfirm),e.xp6(2),e.Oqu(g.buttonCancel))},dependencies:[s.mk,v.lW],styles:[".row[_ngcontent-%COMP%]{padding:10px}button[_ngcontent-%COMP%]{padding:5px 30px;border-radius:6px;margin-right:10px;color:#fff}.button-content[_ngcontent-%COMP%]{display:flex;overflow:hidden}"]}),u})()},1161:(T,C,r)=>{r.r(C),r.d(C,{BillRoutingModule:()=>F});var f=r(2480),e=r(2399),s=r(9401),v=r(3144),m=r(4755),p=r(4333),c=r(2018),u=r(7820),h=r(6286),t=r(2223),g=r(1684),b=r(1728);function E(i,d){if(1&i){const n=t.EpF();t.TgZ(0,"div",2),t.ynx(1,19),t.TgZ(2,"label",20),t._uU(3),t.qZA(),t.TgZ(4,"div",21)(5,"button",22),t.NdJ("click",function(){const a=t.CHM(n).index,_=t.oxw();return t.KtG(_.decreaseQuantity(a))}),t._UZ(6,"i",23),t.qZA(),t._UZ(7,"input",24),t.TgZ(8,"button",22),t.NdJ("click",function(){const a=t.CHM(n).index,_=t.oxw();return t.KtG(_.increaseQuantity(a))}),t._UZ(9,"i",25),t.qZA()(),t.BQk(),t.qZA()}if(2&i){const n=d.$implicit,o=d.index;t.xp6(1),t.Q6J("formGroupName",o),t.xp6(2),t.Oqu(null==n||null==n.food?null:n.food.foodName)}}let y=(()=>{class i{constructor(n,o,l,a,_,Z){this.defaults=n,this.dialogRef=o,this.fb=l,this.dialog=a,this.toastrService=_,this.service=Z}ngOnInit(){this.bill=this.defaults.bill,this.initForm()}initForm(){this.foodTotal=this.fb.group({totalPrice:this.bill?.totalPrice,name:this.bill?.creator?.name,paymentMethod:this.bill?.paymentMethod}),this.form=this.fb.group({foodCards:this.fb.array([])}),this.bill?.foodBills?.forEach(n=>{let o=this.fb.group({price:new s.NI(n?.food?.price),quantity:new s.NI(n?.quantity)});this.f.push(o)}),this.foodTotal.get("totalPrice")?.disable(),this.foodTotal.get("name")?.disable(),this.foodTotal.get("paymentMethod")?.disable()}get f(){return this.form?.controls.foodCards}decreaseQuantity(n){let o=this.f.at(n).get("quantity")?.value;o--,this.f.at(n).get("quantity")?.setValue(o);let l=0;this.f.controls.forEach(a=>{l+=a.get("quantity")?.value*a.get("price")?.value})}increaseQuantity(n){let o=this.f.at(n).get("quantity")?.value;o++,this.f.at(n).get("quantity")?.setValue(o);let l=0;this.f.controls.forEach(a=>{l+=a.get("quantity")?.value*a.get("price")?.value}),this.foodTotal?.get("totalPrice")?.setValue(l)}onSubmit(){this.dialog.open(u.y,{disableClose:!1,width:"400px",data:{isDelete:!1,onConfirm:()=>{let n=this.bill;n.totalPrice=this.foodTotal?.get("totalPrice")?.value;for(let o=0;o<n.foodBills.length;o++)n.foodBills[o].quantity=this.f.at(o).get("quantity")?.value;this.service.addOrEditBill(n).subscribe({next:o=>{o&&(this.toastrService.success("\u0110\xe3 s\u1eeda th\xe0nh c\xf4ng","Th\xf4ng b\xe1o",{positionClass:"toast-bottom-right"}),this.defaults.reloadTable())},error:o=>{this.toastrService.warning("S\u1eeda th\u1ea5t b\u1ea1i","Th\xf4ng b\xe1o",{positionClass:"toast-bottom-right"})}})}}})}onClose(){this.dialogRef.close()}onFileChange(n){const o=new FileReader;if(n.target.files&&n.target.files.length){const[l]=n.target.files;o.readAsDataURL(l),o.onload=()=>{this.imageSrc=o.result}}}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(h.WI),t.Y36(h.so),t.Y36(s.QS),t.Y36(h.uw),t.Y36(c._W),t.Y36(g.t))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-bill-edit-dialog"]],decls:31,vars:3,consts:[[1,"container"],[1,"mt-3"],[1,"row"],[3,"formGroup"],[1,"form-group","row"],["for","name",1,"col-sm-5","col-form-label"],[1,"col-sm-7","form-input"],["type","text","formControlName","name",1,"form-control"],["for","price",1,"col-sm-5","col-form-label"],["type","text","formControlName","totalPrice",1,"form-control"],["type","text","formControlName","paymentMethod",1,"form-control"],[1,"row",3,"formGroup"],["formArrayName","foodCards"],["for","price",1,"col-sm-5","col-form-label","mt-4"],["class","row",4,"ngFor","ngForOf"],[1,"row","mt-5","mb-5"],[1,"col-sm-12","d-flex","justify-content-end"],["color","primary","mat-raised-button","","type","button",2,"margin-right","10px",3,"click"],["mat-raised-button","","type","button",3,"click"],[3,"formGroupName"],["for","foodName",1,"col-md-6","col-lg-6","col-form-label","mt-3"],[1,"col-md-6","col-lg-6","col-xl-2","d-flex","mt-3"],[1,"btn","btn-link","px-2",3,"click"],[1,"fas","fa-minus"],["id","form1","min","0","formControlName","quantity","type","number",1,"form-control","form-control-sm",2,"width","100px"],[1,"fas","fa-plus"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"S\u1eeda th\xf4ng tin ho\xe1 \u0111\u01a1n"),t.qZA(),t.TgZ(3,"mat-dialog-content",2)(4,"form",3)(5,"div",4)(6,"label",5),t._uU(7,"T\xean nh\xe2n vi\xean:"),t.qZA(),t.TgZ(8,"div",6),t._UZ(9,"input",7),t.qZA()(),t.TgZ(10,"div",4)(11,"label",8),t._uU(12,"T\u1ed5ng ti\u1ec1n:"),t.qZA(),t.TgZ(13,"div",6),t._UZ(14,"input",9),t.qZA()(),t.TgZ(15,"div",4)(16,"label",8),t._uU(17,"Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n:"),t.qZA(),t.TgZ(18,"div",6),t._UZ(19,"input",10),t.qZA()()(),t.TgZ(20,"form",11),t.ynx(21,12),t.TgZ(22,"label",13),t._uU(23,"S\u1ea3n ph\u1ea9m:"),t.qZA(),t.YNc(24,E,10,2,"div",14),t.BQk(),t.qZA(),t.TgZ(25,"div",15)(26,"div",16)(27,"button",17),t.NdJ("click",function(){return o.onSubmit()}),t._uU(28,"S\u1eeda"),t.qZA(),t.TgZ(29,"button",18),t.NdJ("click",function(){return o.onClose()}),t._uU(30,"\u0110\xf3ng"),t.qZA()()()()()),2&n&&(t.xp6(4),t.Q6J("formGroup",o.foodTotal),t.xp6(16),t.Q6J("formGroup",o.form),t.xp6(4),t.Q6J("ngForOf",null==o.bill?null:o.bill.foodBills))},dependencies:[m.sg,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.qQ,s.sg,s.u,s.x0,s.CE,b.lW,h.xY],styles:["h2[_ngcontent-%COMP%]{margin-left:30px}form[_ngcontent-%COMP%]{width:50vw}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:30px}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-top:30px}.form-input[_ngcontent-%COMP%]{width:400px}"]}),i})();var A=r(346),B=r(6464),P=r(430),x=r(6012);function O(i,d){if(1&i){const n=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){t.CHM(n);const l=t.oxw(2).$implicit,a=t.oxw();return t.KtG(a.handleDelete(null==l?null:l.foodId))}),t.TgZ(1,"mat-icon"),t._uU(2,"delete"),t.qZA(),t._uU(3,"Xo\xe1"),t.qZA()}}function D(i,d){if(1&i){const n=t.EpF();t.TgZ(0,"tr",10)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"button",11),t.NdJ("click",function(){t.CHM(n);const l=t.oxw().$implicit,a=t.oxw();return t.KtG(a.editProduct(l))}),t.TgZ(13,"mat-icon"),t._uU(14,"create"),t.qZA(),t._uU(15,"S\u1eeda"),t.qZA(),t.YNc(16,O,4,0,"button",12),t.qZA()()}if(2&i){const n=t.oxw(),o=n.index,l=n.$implicit,a=t.oxw();t.s9C("id",o),t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(null==l||null==l.foodBills?null:l.foodBills.length),t.xp6(2),t.Oqu(null==l?null:l.totalPrice),t.xp6(2),t.Oqu(null==l?null:l.paymentMethod),t.xp6(2),t.Oqu(null==l||null==l.creator?null:l.creator.name),t.xp6(6),t.Q6J("ngIf","NV"!==a.getCurrentRole())}}function M(i,d){if(1&i&&(t.ynx(0),t.YNc(1,D,17,7,"tr",9),t.BQk()),2&i){const n=d.$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngIf",(null==n||null==n.creator?null:n.creator.name)===(null==o.user?null:o.user.name))}}const U=function(i,d){return{itemsPerPage:6,currentPage:i,totalItems:d}},q=[{path:"",children:[{path:"",component:(()=>{class i{constructor(n,o,l,a,_,Z,w){this.loader=n,this.fb=o,this.dialog=l,this.toastrService=a,this.router=_,this.service=Z,this.loginService=w,this.allFood=0,this.pagination=1}ngOnInit(){this.initForm(),this.getAllBills(),this.loginService.getCurrentUser().subscribe(n=>{this.user=n})}initForm(){this.form=this.fb.group({pageIndex:1,pageSize:6})}get f(){return this.form?.controls}getAllBills(){this.loader.show(),this.service.getAllBillPaging(this.form?.value).subscribe(n=>{this.pagination=this.form?.get("pageIndex")?.value,this.bills=n?.data,console.log(this.bills),this.allFood=n?.count}),this.loader.hide()}getCurrentRole(){return localStorage.getItem("role")}renderPage(n){this.form?.get("pageIndex")?.setValue(n),this.getAllBills()}editProduct(n){console.log("tvv",n),this.dialog.open(y,{height:"auto",width:"600px",data:{bill:n,title:"S\u1eeda th\xf4ng tin ho\xe1 \u0111\u01a1n",reloadTable:()=>this.getAllBills()}})}handleDelete(n){this.dialog.open(u.y,{disableClose:!1,width:"400px",height:"auto",data:{title:"Xo\xe1 nh\xe2n vi\xean",subtitle:"B\u1ea1n c\xf3 mu\u1ed1n xo\xe1 ho\xe1 \u0111\u01a1n n\xe0y kh\xf4ng",buttonConfirm:"Xo\xe1",buttonCancel:"\u0110\xf3ng",isDelete:!0,onConfirm:()=>{this.service.deleteBill(n).subscribe({next:o=>{},error:o=>{this.toastrService.warning("Xo\xe1 th\u1ea5t b\u1ea1i","Th\xf4ng b\xe1o",{positionClass:"toast-bottom-right"}),console.log(o)},complete:()=>{this.toastrService.success("Xo\xe1 th\xe0nh c\xf4ng","Th\xf4ng b\xe1o",{positionClass:"toast-bottom-right"}),this.getAllBills()}})}}})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(A.t2),t.Y36(s.QS),t.Y36(h.uw),t.Y36(c._W),t.Y36(f.F0),t.Y36(g.t),t.Y36(B.r))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-bill"]],decls:27,vars:7,consts:[[1,"gradient-custom",2,"height","100%"],[1,""],[1,"containerr"],[1,"row","m-2"],[1,"col-md-12"],[1,"table-container"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],[3,"pageChange"],[3,"id",4,"ngIf"],[3,"id"],["color","primary","mat-raised-button","",2,"margin-right","10px",3,"click"],["color","warn","mat-raised-button","",3,"click",4,"ngIf"],["color","warn","mat-raised-button","",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-content")(3,"div",2)(4,"div",3)(5,"div",4)(6,"h1"),t._uU(7,"Ho\xe1 \u0111\u01a1n"),t.qZA(),t.TgZ(8,"table",5)(9,"thead")(10,"tr")(11,"th"),t._uU(12," # "),t.qZA(),t.TgZ(13,"th"),t._uU(14," S\u1ed1 l\u01b0\u1ee3ng "),t.qZA(),t.TgZ(15,"th"),t._uU(16," T\u1ed5ng ti\u1ec1n "),t.qZA(),t.TgZ(17,"th"),t._uU(18," Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n "),t.qZA(),t.TgZ(19,"th"),t._uU(20," T\xean nh\xe2n vi\xean "),t.qZA(),t._UZ(21,"th"),t.qZA()(),t.TgZ(22,"tbody"),t.YNc(23,M,2,1,"ng-container",6),t.ALo(24,"paginate"),t.qZA()()()(),t.TgZ(25,"div",7)(26,"pagination-controls",8),t.NdJ("pageChange",function(a){return o.renderPage(a)}),t.qZA()()()()()()),2&n&&(t.xp6(23),t.Q6J("ngForOf",t.xi3(24,1,o.bills,t.WLB(4,U,o.pagination,o.allFood))))},dependencies:[m.sg,m.O5,b.lW,P.Hw,x.a8,x.dn,p.LS,p._s],styles:['@import"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap";.gradient-custom[_ngcontent-%COMP%]{background:#6a11cb;background:linear-gradient(to right,#DE3163,rgb(37,117,252))}.table-container[_ngcontent-%COMP%]{width:100%;height:70vh}.table-container[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:15px 3px;border:1px solid #DBDBDB;white-space:nowrap;text-align:center}.table-container[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#fff;color:#fff}.table-container[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(odd){background-color:#de3163}.table-container[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(even){background-color:#2575fc}']}),i})()}]}];let F=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[s.sg],imports:[m.ez,f.Bz.forChild(q),e.d,v.JF,c.Rh,p.JX,f.Bz]}),i})()},1684:(T,C,r)=>{r.d(C,{t:()=>v});var f=r(2340),e=r(2223),s=r(3144);let v=(()=>{class m{constructor(c){this.httpClient=c,this.baseUrl=f.N.baseUrl+"api/bills"}getAllBillPaging(c){return this.httpClient.post(this.baseUrl+"/paging",c,{responseType:"json"})}getAllBills(){return this.httpClient.get(this.baseUrl)}addOrEditBill(c){return this.httpClient.post(this.baseUrl,c,{responseType:"json"})}deleteBill(c){return this.httpClient.delete(this.baseUrl+`/${c}`)}}return m.\u0275fac=function(c){return new(c||m)(e.LFG(s.eN))},m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);