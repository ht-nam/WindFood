"use strict";(self.webpackChunkwindfood_ver1=self.webpackChunkwindfood_ver1||[]).push([[448],{448:(ue,T,l)=>{l.r(T),l.d(T,{ProductsRoutingModule:()=>ce});var A=l(2480),L=l(229),h=l(6286),e=l(2223),d=l(4755),C=l(1728);const I=function(i,a){return{"text-center":i,"text-start":a}},M=function(i,a){return{"button-content d-flex align-items-center justify-content-center":i,"d-flex align-items-center justify-content-end":a}};let w=(()=>{class i{constructor(t,n,o){this.defaults=t,this.dialogRef=n,this.dialog=o,this.title="Ch\xfa \xfd",this.subtitle="B\u1ea1n c\xf3 mu\u1ed1n ti\u1ebfp t\u1ee5c kh\xf4ng?",this.buttonConfirm="Ti\u1ebfp t\u1ee5c",this.buttonCancel="Hu\u1ef7 b\u1ecf",this.isDelete=!1}ngOnInit(){this.defaults?.title&&this.defaults?.subtitle&&(this.title=this.defaults?.title,this.subtitle=this.defaults?.subtitle),this.defaults?.buttonConfirm&&this.defaults?.buttonCancel&&(this.buttonConfirm=this.defaults?.buttonConfirm,this.buttonCancel=this.defaults?.buttonCancel),this.defaults?.isDelete&&(this.isDelete=this.defaults.isDelete)}onConfirm(){this.defaults.onConfirm(),this.dialog.closeAll()}onClose(){this.dialogRef.close()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.WI),e.Y36(h.so),e.Y36(h.uw))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-confirm-dialogg"]],decls:12,vars:16,consts:[[1,"container"],[1,"row"],[3,"ngClass"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",2,"color","#000",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"h2",2),e._uU(4),e.qZA(),e.TgZ(5,"p",2),e._uU(6),e.qZA(),e.TgZ(7,"div",2)(8,"button",3),e.NdJ("click",function(){return n.onConfirm()}),e._uU(9),e.qZA(),e.TgZ(10,"button",4),e.NdJ("click",function(){return n.onClose()}),e._uU(11),e.qZA()()()()()),2&t&&(e.xp6(3),e.Q6J("ngClass",e.WLB(7,I,!n.isDelete,n.isDelete)),e.xp6(1),e.Oqu(n.title),e.xp6(1),e.Q6J("ngClass",e.WLB(10,I,!n.isDelete,n.isDelete)),e.xp6(1),e.Oqu(n.subtitle),e.xp6(1),e.Q6J("ngClass",e.WLB(13,M,!n.isDelete,n.isDelete)),e.xp6(2),e.Oqu(n.buttonConfirm),e.xp6(2),e.Oqu(n.buttonCancel))},dependencies:[d.mk,C.lW],styles:["button[_ngcontent-%COMP%]{padding:5px 30px;border-radius:6px;margin-right:10px;color:#fff}.button-content[_ngcontent-%COMP%]{display:flex}"]}),i})();var c=l(9401),v=l(2018),O=l(2340),N=l(3144);let Z=(()=>{class i{constructor(t){this.httpClient=t,this.baseUrl=O.N.baseUrl+"api/foods"}getAllProductsPaging(t){return this.httpClient.post(this.baseUrl+"/paging",t,{responseType:"json"})}getAllProducts(){return this.httpClient.get(this.baseUrl)}addNewFood(t){return this.httpClient.post(this.baseUrl,t,{responseType:"json"})}deleteFood(t){return this.httpClient.delete(this.baseUrl+`/${t}`)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(N.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function F(i,a){if(1&i&&e._UZ(0,"img",22),2&i){const t=e.oxw();e.Q6J("src",t.imageSrc,e.LSH)}}let E=(()=>{class i{constructor(t,n,o,s,r,p){this.defaults=t,this.dialogRef=n,this.fb=o,this.dialog=s,this.toastrService=r,this.service=p}ngOnInit(){this.initForm(),console.log(this.defaults.products)}initForm(){this.form=this.fb.group({foodId:null,foodName:null,price:null,quantity:null,urlImg:null,description:null,createDate:null})}onSubmit(){this.dialog.open(w,{disableClose:!1,width:"400px",data:{products:this.defaults.products,isDelete:!1,onConfirm:()=>{let t=this.form?.getRawValue();t.urlImg=this.imageSrc,this.service.addNewFood(t).subscribe({next:n=>{n&&(this.toastrService.success("\u0110\xe3 th\xeam th\xe0nh c\xf4ng","Th\xf4ng b\xe1o",{positionClass:"toast-bottom-right"}),this.defaults.reloadTable())},error:n=>{this.toastrService.warning("Th\xeam th\u1ea5t b\u1ea1i","Th\xf4ng b\xe1o",{positionClass:"toast-bottom-right"})}})}}})}onClose(){this.dialogRef.close()}onFileChange(t){const n=new FileReader;if(t.target.files&&t.target.files.length){const[o]=t.target.files;n.readAsDataURL(o),n.onload=()=>{this.imageSrc=n.result}}}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.WI),e.Y36(h.so),e.Y36(c.QS),e.Y36(h.uw),e.Y36(v._W),e.Y36(Z))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-product-dialog"]],decls:37,vars:2,consts:[[1,"container"],[1,"mt-3"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","name",1,"col-sm-5","col-form-label"],[1,"col-sm-7","form-input"],["type","text","formControlName","foodName",1,"form-control"],["for","price",1,"col-sm-5","col-form-label"],["type","text","formControlName","price",1,"form-control"],["for","status",1,"col-sm-5","col-form-label"],["formControlName","quantity",1,"form-select"],["selected",""],["value","1"],["value","2"],["for","file",1,"col-sm-5","col-form-label"],["style","height: 70px; width:70px; background-size: cover;",3,"src",4,"ngIf"],["id","file","type","file","formControlName","urlImg",1,"form-control",3,"change"],[1,"row","mt-5","mb-5"],[1,"col-sm-12","d-flex","justify-content-end"],["color","primary","mat-raised-button","","type","submit",2,"margin-right","10px"],["mat-raised-button","","type","button",3,"click"],[2,"height","70px","width","70px","background-size","cover",3,"src"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"T\u1ea1o m\u1edbi s\u1ea3n ph\u1ea9m"),e.qZA(),e.TgZ(3,"div",2)(4,"form",3),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(5,"div",4)(6,"label",5),e._uU(7,"T\xean s\u1ea3n ph\u1ea9m:"),e.qZA(),e.TgZ(8,"div",6),e._UZ(9,"input",7),e.qZA()(),e.TgZ(10,"div",4)(11,"label",8),e._uU(12,"Gi\xe1"),e.qZA(),e.TgZ(13,"div",6),e._UZ(14,"input",9),e.qZA()(),e.TgZ(15,"div",4)(16,"label",10),e._uU(17,"Tr\u1ea1ng th\xe1i"),e.qZA(),e.TgZ(18,"div",6)(19,"select",11),e._UZ(20,"option",12),e.TgZ(21,"option",13),e._uU(22,"C\xf2n"),e.qZA(),e.TgZ(23,"option",14),e._uU(24,"Kh\xf4ng c\xf2n"),e.qZA()()()(),e.TgZ(25,"div",4)(26,"label",15),e._uU(27,"File"),e.qZA(),e.TgZ(28,"div",6),e.YNc(29,F,1,1,"img",16),e.TgZ(30,"input",17),e.NdJ("change",function(s){return n.onFileChange(s)}),e.qZA()()(),e.TgZ(31,"div",18)(32,"div",19)(33,"button",20),e._uU(34,"Th\xeam"),e.qZA(),e.TgZ(35,"button",21),e.NdJ("click",function(){return n.onClose()}),e._uU(36,"\u0110\xf3ng"),e.qZA()()()()()()),2&t&&(e.xp6(4),e.Q6J("formGroup",n.form),e.xp6(25),e.Q6J("ngIf",n.imageSrc))},dependencies:[d.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.sg,c.u,C.lW],styles:["h2[_ngcontent-%COMP%]{margin-left:30px}form[_ngcontent-%COMP%]{width:50vw}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:30px}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-top:30px}.form-input[_ngcontent-%COMP%]{width:400px}"]}),i})();var U=l(1135),q=l(9300);const k="primary";class b{constructor(a){Object.assign(this,a)}static create(a){return!a?.template&&!a?.type&&console.warn('[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component\n        and ensure css is added to angular.json file'),new b(a)}}let J=(()=>{class i{constructor(){this.spinnerObservable=new U.X(null)}getSpinner(t){return this.spinnerObservable.asObservable().pipe((0,q.h)(n=>n&&n.name===t))}show(t=k,n){return new Promise((o,s)=>{setTimeout(()=>{n&&Object.keys(n).length?(n.name=t,this.spinnerObservable.next(new b({...n,show:!0})),o(!0)):(this.spinnerObservable.next(new b({name:t,show:!0})),o(!0))},10)})}hide(t=k,n=10){return new Promise((o,s)=>{setTimeout(()=>{this.spinnerObservable.next(new b({name:t,show:!1})),o(!0)},n)})}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();new e.OlP("NGX_SPINNER_CONFIG");var j=l(430);function Y(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const o=e.MAs(1);return e.KtG(o.previous())})("click",function(){e.CHM(t),e.oxw(3);const o=e.MAs(1);return e.KtG(o.previous())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function H(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function Q(i,a){if(1&i&&(e.TgZ(0,"li",9),e.YNc(1,Y,4,2,"a",10),e.YNc(2,H,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<t.getCurrent()),e.xp6(1),e.Q6J("ngIf",t.isFirstPage())}}function G(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t);const o=e.oxw().$implicit;e.oxw(2);const s=e.MAs(1);return e.KtG(s.setCurrent(o.value))})("click",function(){e.CHM(t);const o=e.oxw().$implicit;e.oxw(2);const s=e.MAs(1);return e.KtG(s.setCurrent(o.value))}),e.TgZ(1,"span",13),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(2),e.hij("",n.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(5,2,t.label,""))}}function X(i,a){if(1&i&&(e.ynx(0),e.TgZ(1,"span",16)(2,"span",13),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.BQk()),2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(3),e.hij("",n.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(6,2,t.label,""))}}function W(i,a){if(1&i&&(e.TgZ(0,"li"),e.YNc(1,G,6,5,"a",10),e.YNc(2,X,7,5,"ng-container",15),e.qZA()),2&i){const t=a.$implicit;e.oxw(2);const n=e.MAs(1);e.ekj("current",n.getCurrent()===t.value)("ellipsis","..."===t.label),e.xp6(1),e.Q6J("ngIf",n.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",n.getCurrent()===t.value)}}function V(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const o=e.MAs(1);return e.KtG(o.next())})("click",function(){e.CHM(t),e.oxw(3);const o=e.MAs(1);return e.KtG(o.next())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function $(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function K(i,a){if(1&i&&(e.TgZ(0,"li",17),e.YNc(1,V,4,2,"a",10),e.YNc(2,$,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage()),e.xp6(1),e.Q6J("ngIf",t.isLastPage())}}function ee(i,a){if(1&i&&(e.TgZ(0,"ul",4),e.YNc(1,Q,3,4,"li",5),e.TgZ(2,"li",6),e._uU(3),e.qZA(),e.YNc(4,W,3,6,"li",7),e.YNc(5,K,3,4,"li",8),e.qZA()),2&i){const t=e.oxw(),n=e.MAs(1);e.ekj("responsive",t.responsive),e.xp6(1),e.Q6J("ngIf",t.directionLinks),e.xp6(2),e.AsE(" ",n.getCurrent()," / ",n.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",n.pages)("ngForTrackBy",t.trackByIndex),e.xp6(1),e.Q6J("ngIf",t.directionLinks)}}class P{constructor(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(a){return null==a.id&&(a.id=this.DEFAULT_ID),this.instances[a.id]?this.updateInstance(a):(this.instances[a.id]=a,!0)}updateInstance(a){let t=!1;for(let n in this.instances[a.id])a[n]!==this.instances[a.id][n]&&(this.instances[a.id][n]=a[n],t=!0);return t}getCurrentPage(a){return this.instances[a]?this.instances[a].currentPage:1}setCurrentPage(a,t){if(this.instances[a]){let n=this.instances[a];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[a].currentPage=t,this.change.emit(a))}}setTotalItems(a,t){this.instances[a]&&0<=t&&(this.instances[a].totalItems=t,this.change.emit(a))}setItemsPerPage(a,t){this.instances[a]&&(this.instances[a].itemsPerPage=t,this.change.emit(a))}getInstance(a=this.DEFAULT_ID){return this.instances[a]?this.clone(this.instances[a]):{}}clone(a){var t={};for(var n in a)a.hasOwnProperty(n)&&(t[n]=a[n]);return t}}const te=Number.MAX_SAFE_INTEGER;let ne=(()=>{class i{constructor(t){this.service=t,this.state={}}transform(t,n){if(!(t instanceof Array)){let m=n.id||this.service.defaultId();return this.state[m]?this.state[m].slice:t}let p,g,o=n.totalItems&&n.totalItems!==t.length,s=this.createInstance(t,n),r=s.id,u=s.itemsPerPage,_=this.service.register(s);if(!o&&t instanceof Array){if(u=+u||te,p=(s.currentPage-1)*u,g=p+u,this.stateIsIdentical(r,t,p,g))return this.state[r].slice;{let x=t.slice(p,g);return this.saveState(r,t,x,p,g),this.service.change.emit(r),x}}return _&&this.service.change.emit(r),this.saveState(r,t,t,p,g),t}createInstance(t,n){return this.checkConfig(n),{id:null!=n.id?n.id:this.service.defaultId(),itemsPerPage:+n.itemsPerPage||0,currentPage:+n.currentPage||1,totalItems:+n.totalItems||t.length}}checkConfig(t){const o=["itemsPerPage","currentPage"].filter(s=>!(s in t));if(0<o.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${o.join(", ")}`)}saveState(t,n,o,s,r){this.state[t]={collection:n,size:n.length,slice:o,start:s,end:r}}stateIsIdentical(t,n,o,s){let r=this.state[t];return!(!r||r.size!==n.length||r.start!==o||r.end!==s)&&r.slice.every((g,u)=>g===n[o+u])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(P,16))},i.\u0275pipe=e.Yjl({name:"paginate",type:i,pure:!1}),i})(),ie=(()=>{class i{constructor(t,n){this.service=t,this.changeDetectorRef=n,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(o=>{this.id===o&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(t){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(t){this.pageChange.emit(t)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let t=this.service.getInstance(this.id);const n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(n),this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}outOfBoundCorrection(t){const n=Math.ceil(t.totalItems/t.itemsPerPage);return n<t.currentPage&&0<n?n:t.currentPage<1?1:t.currentPage}createPageArray(t,n,o,s){s=+s;let r=[];const p=Math.max(Math.ceil(o/n),1),g=Math.ceil(s/2),u=t<=g,_=p-g<t,m=!u&&!_;let x=s<p,f=1;for(;f<=p&&f<=s;){let S,D=this.calculatePageNumber(f,t,s,p);S=x&&(2===f&&(m||_)||f===s-1&&(m||u))?"...":D,r.push({label:S,value:D}),f++}return r}calculatePageNumber(t,n,o,s){let r=Math.ceil(o/2);return t===o?s:1===t?t:o<s?s-r<n?s-o+t:r<n?n-r+t:t:t}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(P),e.Y36(e.sBO))},i.\u0275dir=e.lG2({type:i,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),i})();function y(i){return!!i&&"false"!==i}let ae=(()=>{class i{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(t){this._directionLinks=y(t)}get autoHide(){return this._autoHide}set autoHide(t){this._autoHide=y(t)}get responsive(){return this._responsive}set responsive(t){this._responsive=y(t)}trackByIndex(t){return t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(t,n){if(1&t&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(s){return n.pageChange.emit(s)})("pageBoundsCorrection",function(s){return n.pageBoundsCorrection.emit(s)}),e.TgZ(2,"nav",2),e.YNc(3,ee,6,8,"ul",3),e.qZA()()),2&t){const o=e.MAs(1);e.Q6J("id",n.id)("maxSize",n.maxSize),e.xp6(2),e.uIk("aria-label",n.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",!(n.autoHide&&o.pages.length<=1))}},dependencies:[ie,d.O5,d.sg,d.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),i})(),oe=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[P],imports:[[d.ez]]}),i})();function se(i,a){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"tr",10)(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._UZ(11,"img",11),e.qZA(),e.TgZ(12,"td")(13,"button",12)(14,"mat-icon"),e._uU(15,"create"),e.qZA(),e._uU(16,"S\u1eeda"),e.qZA(),e.TgZ(17,"button",13),e.NdJ("click",function(){const s=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.handleDelete(null==s?null:s.foodId))}),e.TgZ(18,"mat-icon"),e._uU(19,"delete"),e.qZA(),e._uU(20,"Xo\xe1"),e.qZA()()(),e.BQk()}if(2&i){const t=a.$implicit,n=a.index;e.xp6(1),e.s9C("id",n),e.xp6(2),e.Oqu(null==t?null:t.foodId),e.xp6(2),e.Oqu(null==t?null:t.foodName),e.xp6(2),e.Oqu(null==t?null:t.price),e.xp6(2),e.Oqu(0!==(null==t?null:t.quantity)?"C\xf2n":"Kh\xf4ng c\xf2n"),e.xp6(2),e.s9C("src",null==t?null:t.urlImg,e.LSH)}}const re=function(i,a){return{itemsPerPage:6,currentPage:i,totalItems:a}},le=[{path:"",children:[{path:"",component:(()=>{class i{constructor(t,n,o,s,r){this.productService=t,this.loader=n,this.fb=o,this.dialog=s,this.toastrService=r,this.allFood=0,this.pagination=1}ngOnInit(){this.initForm(),this.getAllProducts()}initForm(){this.form=this.fb.group({pageIndex:1,pageSize:6})}get f(){return this.form?.controls}addNewProduct(){this.dialog.open(E,{height:"auto",data:{products:this.products,title:"T\u1ea1o m\u1edbi s\u1ea3n ph\u1ea9m",reloadTable:()=>this.getAllProducts()}})}getAllProducts(){this.loader.show(),this.productService.getAllProductsPaging(this.form?.value).subscribe(t=>{this.pagination=this.form?.get("pageIndex")?.value,this.products=t?.data,this.allFood=t?.count}),this.loader.hide()}renderPage(t){this.form?.get("pageIndex")?.setValue(t),this.getAllProducts()}handleDelete(t){this.dialog.open(w,{disableClose:!1,width:"400px",height:"auto",data:{title:"Xo\xe1 s\u1ea3n ph\u1ea9m",subtitle:"B\u1ea1n c\xf3 mu\u1ed1n xo\xe1 s\u1ea3n ph\u1ea9m n\xe0y kh\xf4ng",buttonConfirm:"Xo\xe1",buttonCancel:"\u0110\xf3ng",isDelete:!0,onConfirm:()=>{this.productService.deleteFood(t).subscribe({next:n=>{},error:n=>{this.toastrService.warning("Xo\xe1 th\u1ea5t b\u1ea1i","Th\xf4ng b\xe1o",{positionClass:"toast-bottom-right"}),console.log(n)},complete:()=>{this.toastrService.success("Xo\xe1 th\xe0nh c\xf4ng","Th\xf4ng b\xe1o",{positionClass:"toast-bottom-right"}),this.getAllProducts()}})}}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(Z),e.Y36(J),e.Y36(c.QS),e.Y36(h.uw),e.Y36(v._W))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-products"]],decls:29,vars:8,consts:[[1,"container","mt-5",3,"formGroup"],[1,"card"],[1,"row","m-2"],[1,"search-case"],["type","button","mat-raised-button","","color","accent",1,"col-md-2",3,"click"],[1,"col-md-12"],[1,"table-container"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],[3,"pageChange"],[3,"id"],["alt","",2,"width","50px","height","50px","object-fit","cover","background-size","cover",3,"src"],["color","primary","mat-raised-button","",2,"margin-right","10px"],["color","warn","mat-raised-button","",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"h2"),e._uU(4,"S\u1ea2N PH\u1ea8M"),e.qZA(),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return n.addNewProduct()}),e._uU(7,"Th\xeam m\u1edbi"),e.qZA()()(),e.TgZ(8,"div",2)(9,"div",5)(10,"table",6)(11,"thead")(12,"tr")(13,"th"),e._uU(14," ID "),e.qZA(),e.TgZ(15,"th"),e._uU(16," T\xean s\u1ea3n ph\u1ea9m "),e.qZA(),e.TgZ(17,"th"),e._uU(18," Gi\xe1 "),e.qZA(),e.TgZ(19,"th"),e._uU(20," Tr\u1ea1ng th\xe1i "),e.qZA(),e.TgZ(21,"th"),e._uU(22," \u1ea2nh "),e.qZA(),e._UZ(23,"th"),e.qZA()(),e.TgZ(24,"tbody"),e.YNc(25,se,21,6,"ng-container",7),e.ALo(26,"paginate"),e.qZA()()()(),e.TgZ(27,"div",8)(28,"pagination-controls",9),e.NdJ("pageChange",function(s){return n.renderPage(s)}),e.qZA()()()()),2&t&&(e.Q6J("formGroup",n.form),e.xp6(25),e.Q6J("ngForOf",e.xi3(26,2,n.products,e.WLB(5,re,n.pagination,n.allFood))))},dependencies:[d.sg,c._Y,c.JL,c.sg,C.lW,j.Hw,ae,ne],styles:["button{margin-bottom:20px}.search-case{display:flex;align-items:center;justify-content:space-between}.search-case .form-field{display:flex;align-items:center}.search-case .form-field mat-form-field{width:400px;margin-right:10px}.table-container{width:100%;height:100%}.table-container th,.table-container td{padding:15px 3px;border:1px solid #DBDBDB;white-space:nowrap;text-align:center}.table-container th{background-color:#fff;color:#000}\n"],encapsulation:2}),i})()}]}];let ce=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[c.sg],imports:[d.ez,A.Bz.forChild(le),L.d,N.JF,v.Rh,oe,A.Bz]}),i})()}}]);