(self.webpackChunkwindfood_ver1=self.webpackChunkwindfood_ver1||[]).push([[887],{5887:(I,a,s)=>{"use strict";s.d(a,{p:()=>S});var o=s(9401),n=s(6286),t=s(2223),e=s(2018),r=s(1684),l=s(346),c=s(2480),u=s(4755),f=s(5890);function i(m,M){1&m&&(t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"qrcode",4),t.qZA()()),2&m&&(t.xp6(2),t.Q6J("qrdata","https://www.paypal.com/paypalme/chutatu1@gmail.com")("allowEmptyString",!0)("ariaLabel","QR Code image with the following content...")("cssClass","center")("colorDark","#000000ff")("colorLight","#ffffffff")("elementType","canvas")("errorCorrectionLevel","M")("imageHeight",75)("imageWidth",75)("margin",4)("scale",1)("title","A custom title attribute")("width",300))}function h(m,M){if(1&m){const p=t.EpF();t.TgZ(0,"section",5)(1,"div",6)(2,"div",7)(3,"div",8)(4,"div",9)(5,"div",10)(6,"h3"),t._uU(7,"Settings"),t.qZA(),t.TgZ(8,"h6"),t._uU(9,"Payment"),t.qZA()(),t.TgZ(10,"form",11)(11,"p",12),t._uU(12,"Saved cards:"),t.qZA(),t.TgZ(13,"div",13),t._UZ(14,"img",14),t.TgZ(15,"div",15)(16,"div",16),t._UZ(17,"input",17),t.TgZ(18,"label",18),t._uU(19,"Card Number"),t.qZA()()()(),t.TgZ(20,"div",13),t._UZ(21,"img",19),t.TgZ(22,"div",15)(23,"div",16),t._UZ(24,"input",20),t.TgZ(25,"label",21),t._uU(26,"Card Number"),t.qZA()()()(),t.TgZ(27,"p",22),t._uU(28,"Add new card:"),t.qZA(),t.TgZ(29,"div",23),t._UZ(30,"input",24),t.TgZ(31,"label",25),t._uU(32,"Cardholder's Name"),t.qZA()(),t.TgZ(33,"div",26)(34,"div",27)(35,"div",16),t._UZ(36,"input",28),t.TgZ(37,"label",29),t._uU(38,"Card Number"),t.qZA()()(),t.TgZ(39,"div",30)(40,"div",16),t._UZ(41,"input",31),t.TgZ(42,"label",32),t._uU(43,"Expire"),t.qZA()()()(),t.TgZ(44,"button",33),t.NdJ("click",function(){t.CHM(p);const N=t.oxw();return t.KtG(N.onPayment())}),t._uU(45,"Add card"),t.qZA()()()()()()()}}let g=(()=>{class m{constructor(p,E,N,U,T,v){this.defaults=p,this.dialogRef=E,this.toastrService=N,this.payment=U,this.loader=T,this.router=v,this.data=[]}ngOnInit(){this.data=this.defaults.cart,("qr"===this.data.paymentMethod||"Ti\u1ec1n M\u1eb7t"===this.data.paymentMethod)&&this.onPayment()}onPayment(){console.log("tvv",this.data),this.payment.addOrEditBill(this.data).subscribe(p=>{p&&("Th\u1ebb Ng\xe2n H\xe0ng"===this.data.paymentMethod?setTimeout(()=>{this.router.navigate(["employees/sales"]),this.toastrService.success("Thanh to\xe1n th\xe0nh c\xf4ng","Th\xf4ng b\xe1o"),this.dialogRef.close()},1e4):"qr"===this.data.paymentMethod?setTimeout(()=>{this.toastrService.success("Thanh to\xe1n th\xe0nh c\xf4ng","Th\xf4ng b\xe1o"),this.router.navigate(["employees/sales"]),this.dialogRef.close()},1e4):(this.toastrService.success("Thanh to\xe1n th\xe0nh c\xf4ng","Th\xf4ng b\xe1o"),this.router.navigate(["employees/sales"]),this.dialogRef.close()),localStorage.removeItem("products"))})}}return m.\u0275fac=function(p){return new(p||m)(t.Y36(n.WI),t.Y36(n.so),t.Y36(e._W),t.Y36(r.t),t.Y36(l.t2),t.Y36(c.F0))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-payment-dialog"]],decls:2,vars:2,consts:[["class","paypal-container",4,"ngIf"],["style","width: 100%;",4,"ngIf"],[1,"paypal-container"],[1,"qrcodeImage"],[3,"qrdata","allowEmptyString","ariaLabel","cssClass","colorDark","colorLight","elementType","errorCorrectionLevel","imageHeight","imageWidth","margin","scale","title","width"],[2,"width","100%"],[1,"row","d-flex","justify-content-center"],[1,"col-md-11","col-lg-11","col-xl-11"],[1,"card","rounded-3"],[1,"card-body","p-4"],[1,"text-center","mb-4"],["action",""],[1,"fw-bold","mb-4","pb-2"],[1,"d-flex","flex-row","align-items-center","mb-4","pb-1"],["src","https://img.icons8.com/color/48/000000/mastercard-logo.png",1,"img-fluid"],[1,"flex-fill","mx-3"],[1,"form-outline"],["type","text","id","formControlLgXc",1,"form-control","form-control-lg"],["for","formControlLgXc",1,"form-label"],["src","https://img.icons8.com/color/48/000000/visa.png",1,"img-fluid"],["type","text","id","formControlLgXs",1,"form-control","form-control-lg"],["for","formControlLgXs",1,"form-label"],[1,"fw-bold","mb-4"],[1,"form-outline","mb-4"],["type","text","id","formControlLgXsd",1,"form-control","form-control-lg"],["for","formControlLgXsd",1,"form-label"],[1,"row","mb-4"],[1,"col-7"],["type","text","id","formControlLgXM",1,"form-control","form-control-lg"],["for","formControlLgXM",1,"form-label"],[1,"col-5"],["type","password","id","formControlLgExpk","placeholder","MM/YYYY",1,"form-control","form-control-lg"],["for","formControlLgExpk",1,"form-label"],[1,"btn","btn-success","btn-lg","btn-block",3,"click"]],template:function(p,E){1&p&&(t.YNc(0,i,3,14,"div",0),t.YNc(1,h,46,0,"section",1)),2&p&&(t.Q6J("ngIf","qr"===E.data.paymentMethod),t.xp6(1),t.Q6J("ngIf","Th\u1ebb Ng\xe2n H\xe0ng"===E.data.paymentMethod))},dependencies:[u.O5,f.V,o._Y,o.JL,o.F]}),m})();var d=s(1728),y=s(4867);const C=["paymentRef"];let S=(()=>{class m{constructor(p,E,N,U,T){this.defaults=p,this.dialogRef=E,this.router=N,this.fb=U,this.dialog=T,this.amount=0,this.paypalUrl="https://www.paypal.com/paypalme/yourname",this.data=[]}ngOnInit(){this.data=this.defaults.cart,this.form=this.fb.group({paymentMethod:new o.NI("qr")})}onSubmit(){this.data.paymentMethod=this.form?.get("paymentMethod")?.value,this.dialogRef.close(),this.dialog.open(g,{height:"auto",width:"auto",data:{cart:this.data}})}}return m.\u0275fac=function(p){return new(p||m)(t.Y36(n.WI),t.Y36(n.so),t.Y36(c.F0),t.Y36(o.QS),t.Y36(n.uw))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-payment"]],viewQuery:function(p,E){if(1&p&&t.Gf(C,7),2&p){let N;t.iGM(N=t.CRH())&&(E.paymentRef=N.first)}},decls:16,vars:1,consts:[[1,"container","p-5"],[1,"center"],[1,"row","mt-3"],[3,"formGroup","ngSubmit"],["aria-label","Select an option","formControlName","paymentMethod",1,"d-flex","justify-center","align-items-center"],["value","Ti\u1ec1n M\u1eb7t"],["value","qr"],["value","Th\u1ebb Ng\xe2n H\xe0ng"],[2,"text-align","center","margin-top","20px"],["mat-raised-button","","color","accent","type","submit",2,"margin-left","auto","margin-right","auto"]],template:function(p,E){1&p&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"Ch\u1ecdn ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n"),t.qZA()(),t.TgZ(4,"div",2)(5,"form",3),t.NdJ("ngSubmit",function(){return E.onSubmit()}),t.TgZ(6,"mat-radio-group",4)(7,"mat-radio-button",5),t._uU(8,"Thanh to\xe1n b\u1eb1ng ti\u1ec1n m\u1eb7t"),t.qZA(),t.TgZ(9,"mat-radio-button",6),t._uU(10,"Thanh to\xe1n b\u1eb1ng m\xe3 QR"),t.qZA(),t.TgZ(11,"mat-radio-button",7),t._uU(12,"Thanh to\xe1n b\u1eb1ng th\u1ebb ng\xe2n h\xe0ng"),t.qZA()(),t.TgZ(13,"div",8)(14,"button",9),t._uU(15,"Thanh to\xe1n"),t.qZA()()()()()),2&p&&(t.xp6(5),t.Q6J("formGroup",E.form))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,d.lW,y.VQ,y.U0],styles:[".qrcodeImage[_ngcontent-%COMP%]{display:flex;flex:1}.center[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:center}mat-radio-button[_ngcontent-%COMP%]{margin-right:20px}"]}),m})()},1684:(I,a,s)=>{"use strict";s.d(a,{t:()=>e});var o=s(2340),n=s(2223),t=s(3144);let e=(()=>{class r{constructor(c){this.httpClient=c,this.baseUrl=o.N.baseUrl+"api/bills"}getAllBillPaging(c){return this.httpClient.post(this.baseUrl+"/paging",c,{responseType:"json"})}getAllBills(){return this.httpClient.get(this.baseUrl)}addOrEditBill(c){return this.httpClient.post(this.baseUrl,c,{responseType:"json"})}deleteBill(c){return this.httpClient.delete(this.baseUrl+`/${c}`)}}return r.\u0275fac=function(c){return new(c||r)(n.LFG(t.eN))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},949:(I,a,s)=>{const n=s(9602),t=s(3226),e=s(4360),r=s(3851);function l(c,u,f,i,h){const g=[].slice.call(arguments,1),d=g.length,y="function"==typeof g[d-1];if(!y&&!n())throw new Error("Callback required as last argument");if(!y){if(d<1)throw new Error("Too few arguments provided");return 1===d?(f=u,u=i=void 0):2===d&&!u.getContext&&(i=f,f=u,u=void 0),new Promise(function(C,S){try{const m=t.create(f,i);C(c(m,u,i))}catch(m){S(m)}})}if(d<2)throw new Error("Too few arguments provided");2===d?(h=f,f=u,u=i=void 0):3===d&&(u.getContext&&typeof h>"u"?(h=i,i=void 0):(h=i,i=f,f=u,u=void 0));try{const C=t.create(f,i);h(null,c(C,u,i))}catch(C){h(C)}}a.rT=l.bind(null,e.render),a.hz=l.bind(null,e.renderToDataURL),a.toString=l.bind(null,function(c,u,f){return r.render(c,f)})},9602:I=>{I.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},9222:(I,a,s)=>{const o=s(6696).getSymbolSize;a.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,r=o(t),l=145===r?26:2*Math.ceil((r-13)/(2*e-2)),c=[r-7];for(let u=1;u<e-1;u++)c[u]=c[u-1]-l;return c.push(6),c.reverse()},a.getPositions=function(t){const e=[],r=a.getRowColCoords(t),l=r.length;for(let c=0;c<l;c++)for(let u=0;u<l;u++)0===c&&0===u||0===c&&u===l-1||c===l-1&&0===u||e.push([r[c],r[u]]);return e}},5352:(I,a,s)=>{const o=s(7812),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(e){this.mode=o.ALPHANUMERIC,this.data=e}t.getBitsLength=function(r){return 11*Math.floor(r/2)+r%2*6},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let l;for(l=0;l+2<=this.data.length;l+=2){let c=45*n.indexOf(this.data[l]);c+=n.indexOf(this.data[l+1]),r.put(c,11)}this.data.length%2&&r.put(n.indexOf(this.data[l]),6)},I.exports=t},9039:I=>{function a(){this.buffer=[],this.length=0}a.prototype={get:function(s){const o=Math.floor(s/8);return 1==(this.buffer[o]>>>7-s%8&1)},put:function(s,o){for(let n=0;n<o;n++)this.putBit(1==(s>>>o-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(s){const o=Math.floor(this.length/8);this.buffer.length<=o&&this.buffer.push(0),s&&(this.buffer[o]|=128>>>this.length%8),this.length++}},I.exports=a},5834:I=>{function a(s){if(!s||s<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=s,this.data=new Uint8Array(s*s),this.reservedBit=new Uint8Array(s*s)}a.prototype.set=function(s,o,n,t){const e=s*this.size+o;this.data[e]=n,t&&(this.reservedBit[e]=!0)},a.prototype.get=function(s,o){return this.data[s*this.size+o]},a.prototype.xor=function(s,o,n){this.data[s*this.size+o]^=n},a.prototype.isReserved=function(s,o){return this.reservedBit[s*this.size+o]},I.exports=a},9079:(I,a,s)=>{const o=s(8419),n=s(7812);function t(e){this.mode=n.BYTE,"string"==typeof e&&(e=o(e)),this.data=new Uint8Array(e)}t.getBitsLength=function(r){return 8*r},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(e){for(let r=0,l=this.data.length;r<l;r++)e.put(this.data[r],8)},I.exports=t},4539:(I,a,s)=>{const o=s(7508),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];a.getBlocksCount=function(r,l){switch(l){case o.L:return n[4*(r-1)+0];case o.M:return n[4*(r-1)+1];case o.Q:return n[4*(r-1)+2];case o.H:return n[4*(r-1)+3];default:return}},a.getTotalCodewordsCount=function(r,l){switch(l){case o.L:return t[4*(r-1)+0];case o.M:return t[4*(r-1)+1];case o.Q:return t[4*(r-1)+2];case o.H:return t[4*(r-1)+3];default:return}}},7508:(I,a)=>{a.L={bit:1},a.M={bit:0},a.Q={bit:3},a.H={bit:2},a.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},a.from=function(n,t){if(a.isValid(n))return n;try{return function s(o){if("string"!=typeof o)throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return a.L;case"m":case"medium":return a.M;case"q":case"quartile":return a.Q;case"h":case"high":return a.H;default:throw new Error("Unknown EC Level: "+o)}}(n)}catch{return t}}},9832:(I,a,s)=>{const o=s(6696).getSymbolSize;a.getPositions=function(e){const r=o(e);return[[0,0],[r-7,0],[0,r-7]]}},6095:(I,a,s)=>{const o=s(6696),e=o.getBCHDigit(1335);a.getEncodedBits=function(l,c){const u=l.bit<<3|c;let f=u<<10;for(;o.getBCHDigit(f)-e>=0;)f^=1335<<o.getBCHDigit(f)-e;return 21522^(u<<10|f)}},6048:(I,a)=>{const s=new Uint8Array(512),o=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)s[e]=t,o[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)s[e]=s[e-255]})(),a.log=function(t){if(t<1)throw new Error("log("+t+")");return o[t]},a.exp=function(t){return s[t]},a.mul=function(t,e){return 0===t||0===e?0:s[o[t]+o[e]]}},6101:(I,a,s)=>{const o=s(7812),n=s(6696);function t(e){this.mode=o.KANJI,this.data=e}t.getBitsLength=function(r){return 13*r},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(e){let r;for(r=0;r<this.data.length;r++){let l=n.toSJIS(this.data[r]);if(l>=33088&&l<=40956)l-=33088;else{if(!(l>=57408&&l<=60351))throw new Error("Invalid SJIS character: "+this.data[r]+"\nMake sure your charset is UTF-8");l-=49472}l=192*(l>>>8&255)+(255&l),e.put(l,13)}},I.exports=t},8456:(I,a)=>{a.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function o(n,t,e){switch(n){case a.Patterns.PATTERN000:return(t+e)%2==0;case a.Patterns.PATTERN001:return t%2==0;case a.Patterns.PATTERN010:return e%3==0;case a.Patterns.PATTERN011:return(t+e)%3==0;case a.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(e/3))%2==0;case a.Patterns.PATTERN101:return t*e%2+t*e%3==0;case a.Patterns.PATTERN110:return(t*e%2+t*e%3)%2==0;case a.Patterns.PATTERN111:return(t*e%3+(t+e)%2)%2==0;default:throw new Error("bad maskPattern:"+n)}}a.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},a.from=function(t){return a.isValid(t)?parseInt(t,10):void 0},a.getPenaltyN1=function(t){const e=t.size;let r=0,l=0,c=0,u=null,f=null;for(let i=0;i<e;i++){l=c=0,u=f=null;for(let h=0;h<e;h++){let g=t.get(i,h);g===u?l++:(l>=5&&(r+=l-5+3),u=g,l=1),g=t.get(h,i),g===f?c++:(c>=5&&(r+=c-5+3),f=g,c=1)}l>=5&&(r+=l-5+3),c>=5&&(r+=c-5+3)}return r},a.getPenaltyN2=function(t){const e=t.size;let r=0;for(let l=0;l<e-1;l++)for(let c=0;c<e-1;c++){const u=t.get(l,c)+t.get(l,c+1)+t.get(l+1,c)+t.get(l+1,c+1);(4===u||0===u)&&r++}return 3*r},a.getPenaltyN3=function(t){const e=t.size;let r=0,l=0,c=0;for(let u=0;u<e;u++){l=c=0;for(let f=0;f<e;f++)l=l<<1&2047|t.get(u,f),f>=10&&(1488===l||93===l)&&r++,c=c<<1&2047|t.get(f,u),f>=10&&(1488===c||93===c)&&r++}return 40*r},a.getPenaltyN4=function(t){let e=0;const r=t.data.length;for(let c=0;c<r;c++)e+=t.data[c];return 10*Math.abs(Math.ceil(100*e/r/5)-10)},a.applyMask=function(t,e){const r=e.size;for(let l=0;l<r;l++)for(let c=0;c<r;c++)e.isReserved(c,l)||e.xor(c,l,o(t,c,l))},a.getBestMask=function(t,e){const r=Object.keys(a.Patterns).length;let l=0,c=1/0;for(let u=0;u<r;u++){e(u),a.applyMask(u,t);const f=a.getPenaltyN1(t)+a.getPenaltyN2(t)+a.getPenaltyN3(t)+a.getPenaltyN4(t);a.applyMask(u,t),f<c&&(c=f,l=u)}return l}},7812:(I,a,s)=>{const o=s(3502),n=s(9840);a.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},a.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},a.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},a.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},a.MIXED={bit:-1},a.getCharCountIndicator=function(r,l){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!o.isValid(l))throw new Error("Invalid version: "+l);return l>=1&&l<10?r.ccBits[0]:l<27?r.ccBits[1]:r.ccBits[2]},a.getBestModeForData=function(r){return n.testNumeric(r)?a.NUMERIC:n.testAlphanumeric(r)?a.ALPHANUMERIC:n.testKanji(r)?a.KANJI:a.BYTE},a.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},a.isValid=function(r){return r&&r.bit&&r.ccBits},a.from=function(r,l){if(a.isValid(r))return r;try{return function t(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return a.NUMERIC;case"alphanumeric":return a.ALPHANUMERIC;case"kanji":return a.KANJI;case"byte":return a.BYTE;default:throw new Error("Unknown mode: "+e)}}(r)}catch{return l}}},9753:(I,a,s)=>{const o=s(7812);function n(t){this.mode=o.NUMERIC,this.data=t.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let r,l,c;for(r=0;r+3<=this.data.length;r+=3)l=this.data.substr(r,3),c=parseInt(l,10),e.put(c,10);const u=this.data.length-r;u>0&&(l=this.data.substr(r),c=parseInt(l,10),e.put(c,3*u+1))},I.exports=n},1333:(I,a,s)=>{const o=s(6048);a.mul=function(t,e){const r=new Uint8Array(t.length+e.length-1);for(let l=0;l<t.length;l++)for(let c=0;c<e.length;c++)r[l+c]^=o.mul(t[l],e[c]);return r},a.mod=function(t,e){let r=new Uint8Array(t);for(;r.length-e.length>=0;){const l=r[0];for(let u=0;u<e.length;u++)r[u]^=o.mul(e[u],l);let c=0;for(;c<r.length&&0===r[c];)c++;r=r.slice(c)}return r},a.generateECPolynomial=function(t){let e=new Uint8Array([1]);for(let r=0;r<t;r++)e=a.mul(e,new Uint8Array([1,o.exp(r)]));return e}},3226:(I,a,s)=>{const o=s(6696),n=s(7508),t=s(9039),e=s(5834),r=s(9222),l=s(9832),c=s(8456),u=s(4539),f=s(7496),i=s(2199),h=s(6095),g=s(7812),d=s(6735);function M(T,v,B){const w=T.size,P=h.getEncodedBits(v,B);let A,b;for(A=0;A<15;A++)b=1==(P>>A&1),T.set(A<6?A:A<8?A+1:w-15+A,8,b,!0),T.set(8,A<8?w-A-1:A<9?15-A-1+1:15-A-1,b,!0);T.set(w-8,8,1,!0)}function U(T,v,B,w){let P;if(Array.isArray(T))P=d.fromArray(T);else{if("string"!=typeof T)throw new Error("Invalid data");{let F=v;if(!F){const H=d.rawSplit(T);F=i.getBestVersionForData(H,B)}P=d.fromString(T,F||40)}}const A=i.getBestVersionForData(P,B);if(!A)throw new Error("The amount of data is too big to be stored in a QR Code");if(v){if(v<A)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+A+".\n")}else v=A;const b=function E(T,v,B){const w=new t;B.forEach(function(L){w.put(L.mode.bit,4),w.put(L.getLength(),g.getCharCountIndicator(L.mode,T)),L.write(w)});const b=8*(o.getSymbolTotalCodewords(T)-u.getTotalCodewordsCount(T,v));for(w.getLengthInBits()+4<=b&&w.put(0,4);w.getLengthInBits()%8!=0;)w.putBit(0);const R=(b-w.getLengthInBits())/8;for(let L=0;L<R;L++)w.put(L%2?17:236,8);return function N(T,v,B){const w=o.getSymbolTotalCodewords(v),A=w-u.getTotalCodewordsCount(v,B),b=u.getBlocksCount(v,B),L=b-w%b,F=Math.floor(w/b),H=Math.floor(A/b),K=H+1,V=F-H,G=new f(V);let Y=0;const O=new Array(b),x=new Array(b);let k=0;const j=new Uint8Array(T.buffer);for(let Z=0;Z<b;Z++){const Q=Z<L?H:K;O[Z]=j.slice(Y,Y+Q),x[Z]=G.encode(O[Z]),Y+=Q,k=Math.max(k,Q)}const z=new Uint8Array(w);let _,D,J=0;for(_=0;_<k;_++)for(D=0;D<b;D++)_<O[D].length&&(z[J++]=O[D][_]);for(_=0;_<V;_++)for(D=0;D<b;D++)z[J++]=x[D][_];return z}(w,T,v)}(v,B,P),R=o.getSymbolSize(v),L=new e(R);return function y(T,v){const B=T.size,w=l.getPositions(v);for(let P=0;P<w.length;P++){const A=w[P][0],b=w[P][1];for(let R=-1;R<=7;R++)if(!(A+R<=-1||B<=A+R))for(let L=-1;L<=7;L++)b+L<=-1||B<=b+L||T.set(A+R,b+L,R>=0&&R<=6&&(0===L||6===L)||L>=0&&L<=6&&(0===R||6===R)||R>=2&&R<=4&&L>=2&&L<=4,!0)}}(L,v),function C(T){const v=T.size;for(let B=8;B<v-8;B++){const w=B%2==0;T.set(B,6,w,!0),T.set(6,B,w,!0)}}(L),function S(T,v){const B=r.getPositions(v);for(let w=0;w<B.length;w++){const P=B[w][0],A=B[w][1];for(let b=-2;b<=2;b++)for(let R=-2;R<=2;R++)T.set(P+b,A+R,-2===b||2===b||-2===R||2===R||0===b&&0===R,!0)}}(L,v),M(L,B,0),v>=7&&function m(T,v){const B=T.size,w=i.getEncodedBits(v);let P,A,b;for(let R=0;R<18;R++)P=Math.floor(R/3),A=R%3+B-8-3,b=1==(w>>R&1),T.set(P,A,b,!0),T.set(A,P,b,!0)}(L,v),function p(T,v){const B=T.size;let w=-1,P=B-1,A=7,b=0;for(let R=B-1;R>0;R-=2)for(6===R&&R--;;){for(let L=0;L<2;L++)if(!T.isReserved(P,R-L)){let F=!1;b<v.length&&(F=1==(v[b]>>>A&1)),T.set(P,R-L,F),A--,-1===A&&(b++,A=7)}if(P+=w,P<0||B<=P){P-=w,w=-w;break}}}(L,b),isNaN(w)&&(w=c.getBestMask(L,M.bind(null,L,B))),c.applyMask(w,L),M(L,B,w),{modules:L,version:v,errorCorrectionLevel:B,maskPattern:w,segments:P}}a.create=function(v,B){if(typeof v>"u"||""===v)throw new Error("No input text");let P,A,w=n.M;return typeof B<"u"&&(w=n.from(B.errorCorrectionLevel,n.M),P=i.from(B.version),A=c.from(B.maskPattern),B.toSJISFunc&&o.setToSJISFunction(B.toSJISFunc)),U(v,P,w,A)}},7496:(I,a,s)=>{const o=s(1333);function n(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=o.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(e.length+this.degree);r.set(e);const l=o.mod(r,this.genPoly),c=this.degree-l.length;if(c>0){const u=new Uint8Array(this.degree);return u.set(l,c),u}return l},I.exports=n},9840:(I,a)=>{const s="[0-9]+";let n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");const t="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+")(?:.|[\r\n]))+";a.KANJI=new RegExp(n,"g"),a.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),a.BYTE=new RegExp(t,"g"),a.NUMERIC=new RegExp(s,"g"),a.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const e=new RegExp("^"+n+"$"),r=new RegExp("^"+s+"$"),l=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");a.testKanji=function(u){return e.test(u)},a.testNumeric=function(u){return r.test(u)},a.testAlphanumeric=function(u){return l.test(u)}},6735:(I,a,s)=>{const o=s(7812),n=s(9753),t=s(5352),e=s(9079),r=s(6101),l=s(9840),c=s(6696),u=s(4901);function f(m){return unescape(encodeURIComponent(m)).length}function i(m,M,p){const E=[];let N;for(;null!==(N=m.exec(p));)E.push({data:N[0],index:N.index,mode:M,length:N[0].length});return E}function h(m){const M=i(l.NUMERIC,o.NUMERIC,m),p=i(l.ALPHANUMERIC,o.ALPHANUMERIC,m);let E,N;return c.isKanjiModeEnabled()?(E=i(l.BYTE,o.BYTE,m),N=i(l.KANJI,o.KANJI,m)):(E=i(l.BYTE_KANJI,o.BYTE,m),N=[]),M.concat(p,E,N).sort(function(T,v){return T.index-v.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function g(m,M){switch(M){case o.NUMERIC:return n.getBitsLength(m);case o.ALPHANUMERIC:return t.getBitsLength(m);case o.KANJI:return r.getBitsLength(m);case o.BYTE:return e.getBitsLength(m)}}function S(m,M){let p;const E=o.getBestModeForData(m);if(p=o.from(M,E),p!==o.BYTE&&p.bit<E.bit)throw new Error('"'+m+'" cannot be encoded with mode '+o.toString(p)+".\n Suggested mode is: "+o.toString(E));switch(p===o.KANJI&&!c.isKanjiModeEnabled()&&(p=o.BYTE),p){case o.NUMERIC:return new n(m);case o.ALPHANUMERIC:return new t(m);case o.KANJI:return new r(m);case o.BYTE:return new e(m)}}a.fromArray=function(M){return M.reduce(function(p,E){return"string"==typeof E?p.push(S(E,null)):E.data&&p.push(S(E.data,E.mode)),p},[])},a.fromString=function(M,p){const N=function y(m){const M=[];for(let p=0;p<m.length;p++){const E=m[p];switch(E.mode){case o.NUMERIC:M.push([E,{data:E.data,mode:o.ALPHANUMERIC,length:E.length},{data:E.data,mode:o.BYTE,length:E.length}]);break;case o.ALPHANUMERIC:M.push([E,{data:E.data,mode:o.BYTE,length:E.length}]);break;case o.KANJI:M.push([E,{data:E.data,mode:o.BYTE,length:f(E.data)}]);break;case o.BYTE:M.push([{data:E.data,mode:o.BYTE,length:f(E.data)}])}}return M}(h(M,c.isKanjiModeEnabled())),U=function C(m,M){const p={},E={start:{}};let N=["start"];for(let U=0;U<m.length;U++){const T=m[U],v=[];for(let B=0;B<T.length;B++){const w=T[B],P=""+U+B;v.push(P),p[P]={node:w,lastCount:0},E[P]={};for(let A=0;A<N.length;A++){const b=N[A];p[b]&&p[b].node.mode===w.mode?(E[b][P]=g(p[b].lastCount+w.length,w.mode)-g(p[b].lastCount,w.mode),p[b].lastCount+=w.length):(p[b]&&(p[b].lastCount=w.length),E[b][P]=g(w.length,w.mode)+4+o.getCharCountIndicator(w.mode,M))}}N=v}for(let U=0;U<N.length;U++)E[N[U]].end=0;return{map:E,table:p}}(N,p),T=u.find_path(U.map,"start","end"),v=[];for(let B=1;B<T.length-1;B++)v.push(U.table[T[B]].node);return a.fromArray(function d(m){return m.reduce(function(M,p){const E=M.length-1>=0?M[M.length-1]:null;return E&&E.mode===p.mode?(M[M.length-1].data+=p.data,M):(M.push(p),M)},[])}(v))},a.rawSplit=function(M){return a.fromArray(h(M,c.isKanjiModeEnabled()))}},6696:(I,a)=>{let s;const o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];a.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},a.getSymbolTotalCodewords=function(t){return o[t]},a.getBCHDigit=function(n){let t=0;for(;0!==n;)t++,n>>>=1;return t},a.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');s=t},a.isKanjiModeEnabled=function(){return typeof s<"u"},a.toSJIS=function(t){return s(t)}},3502:(I,a)=>{a.isValid=function(o){return!isNaN(o)&&o>=1&&o<=40}},2199:(I,a,s)=>{const o=s(6696),n=s(4539),t=s(7508),e=s(7812),r=s(3502),c=o.getBCHDigit(7973);function f(g,d){return e.getCharCountIndicator(g,d)+4}function i(g,d){let y=0;return g.forEach(function(C){const S=f(C.mode,d);y+=S+C.getBitsLength()}),y}a.from=function(d,y){return r.isValid(d)?parseInt(d,10):y},a.getCapacity=function(d,y,C){if(!r.isValid(d))throw new Error("Invalid QR Code version");typeof C>"u"&&(C=e.BYTE);const M=8*(o.getSymbolTotalCodewords(d)-n.getTotalCodewordsCount(d,y));if(C===e.MIXED)return M;const p=M-f(C,d);switch(C){case e.NUMERIC:return Math.floor(p/10*3);case e.ALPHANUMERIC:return Math.floor(p/11*2);case e.KANJI:return Math.floor(p/13);default:return Math.floor(p/8)}},a.getBestVersionForData=function(d,y){let C;const S=t.from(y,t.M);if(Array.isArray(d)){if(d.length>1)return function h(g,d){for(let y=1;y<=40;y++)if(i(g,y)<=a.getCapacity(y,d,e.MIXED))return y}(d,S);if(0===d.length)return 1;C=d[0]}else C=d;return function u(g,d,y){for(let C=1;C<=40;C++)if(d<=a.getCapacity(C,y,g))return C}(C.mode,C.getLength(),S)},a.getEncodedBits=function(d){if(!r.isValid(d)||d<7)throw new Error("Invalid QR Code version");let y=d<<12;for(;o.getBCHDigit(y)-c>=0;)y^=7973<<o.getBCHDigit(y)-c;return d<<12|y}},4360:(I,a,s)=>{const o=s(506);a.render=function(r,l,c){let u=c,f=l;typeof u>"u"&&(!l||!l.getContext)&&(u=l,l=void 0),l||(f=function t(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}()),u=o.getOptions(u);const i=o.getImageWidth(r.modules.size,u),h=f.getContext("2d"),g=h.createImageData(i,i);return o.qrToImageData(g.data,r,u),function n(e,r,l){e.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=l,r.width=l,r.style.height=l+"px",r.style.width=l+"px"}(h,f,i),h.putImageData(g,0,0),f},a.renderToDataURL=function(r,l,c){let u=c;return typeof u>"u"&&(!l||!l.getContext)&&(u=l,l=void 0),u||(u={}),a.render(r,l,u).toDataURL(u.type||"image/png",(u.rendererOpts||{}).quality)}},3851:(I,a,s)=>{const o=s(506);function n(r,l){const c=r.a/255,u=l+'="'+r.hex+'"';return c<1?u+" "+l+'-opacity="'+c.toFixed(2).slice(1)+'"':u}function t(r,l,c){let u=r+l;return typeof c<"u"&&(u+=" "+c),u}a.render=function(l,c,u){const f=o.getOptions(c),i=l.modules.size,h=l.modules.data,g=i+2*f.margin,d=f.color.light.a?"<path "+n(f.color.light,"fill")+' d="M0 0h'+g+"v"+g+'H0z"/>':"",y="<path "+n(f.color.dark,"stroke")+' d="'+function e(r,l,c){let u="",f=0,i=!1,h=0;for(let g=0;g<r.length;g++){const d=Math.floor(g%l),y=Math.floor(g/l);!d&&!i&&(i=!0),r[g]?(h++,g>0&&d>0&&r[g-1]||(u+=i?t("M",d+c,.5+y+c):t("m",f,0),f=0,i=!1),d+1<l&&r[g+1]||(u+=t("h",h),h=0)):f++}return u}(h,i,f.margin)+'"/>',m='<svg xmlns="http://www.w3.org/2000/svg" '+(f.width?'width="'+f.width+'" height="'+f.width+'" ':"")+'viewBox="0 0 '+g+" "+g+'" shape-rendering="crispEdges">'+d+y+"</svg>\n";return"function"==typeof u&&u(null,m),m}},506:(I,a)=>{function s(o){if("number"==typeof o&&(o=o.toString()),"string"!=typeof o)throw new Error("Color should be defined as hex string");let n=o.slice().replace("#","").split("");if(n.length<3||5===n.length||n.length>8)throw new Error("Invalid hex color: "+o);(3===n.length||4===n.length)&&(n=Array.prototype.concat.apply([],n.map(function(e){return[e,e]}))),6===n.length&&n.push("F","F");const t=parseInt(n.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:255&t,hex:"#"+n.slice(0,6).join("")}}a.getOptions=function(n){n||(n={}),n.color||(n.color={});const e=n.width&&n.width>=21?n.width:void 0;return{width:e,scale:e?4:n.scale||4,margin:typeof n.margin>"u"||null===n.margin||n.margin<0?4:n.margin,color:{dark:s(n.color.dark||"#000000ff"),light:s(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},a.getScale=function(n,t){return t.width&&t.width>=n+2*t.margin?t.width/(n+2*t.margin):t.scale},a.getImageWidth=function(n,t){const e=a.getScale(n,t);return Math.floor((n+2*t.margin)*e)},a.qrToImageData=function(n,t,e){const r=t.modules.size,l=t.modules.data,c=a.getScale(r,e),u=Math.floor((r+2*e.margin)*c),f=e.margin*c,i=[e.color.light,e.color.dark];for(let h=0;h<u;h++)for(let g=0;g<u;g++){let d=4*(h*u+g),y=e.color.light;h>=f&&g>=f&&h<u-f&&g<u-f&&(y=i[l[Math.floor((h-f)/c)*r+Math.floor((g-f)/c)]?1:0]),n[d++]=y.r,n[d++]=y.g,n[d++]=y.b,n[d]=y.a}}},4901:I=>{"use strict";var a={single_source_shortest_paths:function(s,o,n){var t={},e={};e[o]=0;var l,c,u,f,i,g,r=a.PriorityQueue.make();for(r.push(o,0);!r.empty();)for(u in f=(l=r.pop()).cost,i=s[c=l.value]||{})i.hasOwnProperty(u)&&(g=f+i[u],(typeof e[u]>"u"||e[u]>g)&&(e[u]=g,r.push(u,g),t[u]=c));if(typeof n<"u"&&typeof e[n]>"u"){var C=["Could not find a path from ",o," to ",n,"."].join("");throw new Error(C)}return t},extract_shortest_path_from_predecessor_list:function(s,o){for(var n=[],t=o;t;)n.push(t),t=s[t];return n.reverse(),n},find_path:function(s,o,n){var t=a.single_source_shortest_paths(s,o,n);return a.extract_shortest_path_from_predecessor_list(t,n)},PriorityQueue:{make:function(s){var t,o=a.PriorityQueue,n={};for(t in s=s||{},o)o.hasOwnProperty(t)&&(n[t]=o[t]);return n.queue=[],n.sorter=s.sorter||o.default_sorter,n},default_sorter:function(s,o){return s.cost-o.cost},push:function(s,o){this.queue.push({value:s,cost:o}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};I.exports=a},8419:I=>{"use strict";I.exports=function(s){for(var o=[],n=s.length,t=0;t<n;t++){var e=s.charCodeAt(t);if(e>=55296&&e<=56319&&n>t+1){var r=s.charCodeAt(t+1);r>=56320&&r<=57343&&(e=1024*(e-55296)+r-56320+65536,t+=1)}e<128?o.push(e):e<2048?(o.push(e>>6|192),o.push(63&e|128)):e<55296||e>=57344&&e<65536?(o.push(e>>12|224),o.push(e>>6&63|128),o.push(63&e|128)):e>=65536&&e<=1114111?(o.push(e>>18|240),o.push(e>>12&63|128),o.push(e>>6&63|128),o.push(63&e|128)):o.push(239,191,189)}return new Uint8Array(o).buffer}},5890:(I,a,s)=>{"use strict";s.d(a,{N:()=>c,V:()=>l});var o=s(5861),n=s(2223),t=s(949),e=s(6550);const r=["qrcElement"];let l=(()=>{class u{constructor(i,h){this.renderer=i,this.sanitizer=h,this.allowEmptyString=!1,this.colorDark="#000000ff",this.colorLight="#ffffffff",this.cssClass="qrcode",this.elementType="canvas",this.errorCorrectionLevel="M",this.margin=4,this.qrdata="",this.scale=4,this.width=10,this.qrCodeURL=new n.vpe,this.context=null}ngOnChanges(){var i=this;return(0,o.Z)(function*(){yield i.createQRCode()})()}isValidQrCodeText(i){return!1===this.allowEmptyString?!(typeof i>"u"||""===i||"null"===i||null===i):!(typeof i>"u")}toDataURL(i){return new Promise((h,g)=>{(0,t.hz)(this.qrdata,i,(d,y)=>{d?g(d):h(y)})})}toCanvas(i,h){return new Promise((g,d)=>{(0,t.rT)(i,this.qrdata,h,y=>{y?d(y):g("success")})})}toSVG(i){return new Promise((h,g)=>{(0,t.toString)(this.qrdata,i,(d,y)=>{d?g(d):h(y)})})}renderElement(i){for(const h of this.qrcElement.nativeElement.childNodes)this.renderer.removeChild(this.qrcElement.nativeElement,h);this.renderer.appendChild(this.qrcElement.nativeElement,i)}createQRCode(){var i=this;return(0,o.Z)(function*(){i.version&&i.version>40?(console.warn("[angularx-qrcode] max value for `version` is 40"),i.version=40):i.version&&i.version<1?(console.warn("[angularx-qrcode]`min value for `version` is 1"),i.version=1):void 0!==i.version&&isNaN(i.version)&&(console.warn("[angularx-qrcode] version should be a number, defaulting to auto."),i.version=void 0);try{if(!i.isValidQrCodeText(i.qrdata))throw new Error("[angularx-qrcode] Field `qrdata` is empty, set 'allowEmptyString=\"true\"' to overwrite this behaviour.");i.isValidQrCodeText(i.qrdata)&&""===i.qrdata&&(i.qrdata=" ");const h={color:{dark:i.colorDark,light:i.colorLight},errorCorrectionLevel:i.errorCorrectionLevel,margin:i.margin,scale:i.scale,version:i.version,width:i.width},g=i.imageSrc,d=i.imageHeight||40,y=i.imageWidth||40;switch(i.elementType){case"canvas":{const C=i.renderer.createElement("canvas");i.context=C.getContext("2d"),i.toCanvas(C,h).then(()=>{if(i.ariaLabel&&i.renderer.setAttribute(C,"aria-label",`${i.ariaLabel}`),i.title&&i.renderer.setAttribute(C,"title",`${i.title}`),g&&i.context){i.centerImage=new Image(y,d),g!==i.centerImage.src&&(i.centerImage.src=g),d!==i.centerImage.height&&(i.centerImage.height=d),y!==i.centerImage.width&&(i.centerImage.width=y);const S=i.centerImage;S&&(S.onload=()=>{i.context?.drawImage(S,C.width/2-y/2,C.height/2-d/2,y,d)})}i.renderElement(C),i.emitQRCodeURL(C)}).catch(S=>{console.error("[angularx-qrcode] canvas error:",S)});break}case"svg":{const C=i.renderer.createElement("div");i.toSVG(h).then(S=>{i.renderer.setProperty(C,"innerHTML",S);const m=C.firstChild;i.renderer.setAttribute(m,"height",`${i.width}`),i.renderer.setAttribute(m,"width",`${i.width}`),i.renderElement(m),i.emitQRCodeURL(m)}).catch(S=>{console.error("[angularx-qrcode] svg error:",S)});break}default:{const C=i.renderer.createElement("img");i.toDataURL(h).then(S=>{i.alt&&C.setAttribute("alt",i.alt),i.ariaLabel&&C.setAttribute("aria-label",i.ariaLabel),C.setAttribute("src",S),i.title&&C.setAttribute("title",i.title),i.renderElement(C),i.emitQRCodeURL(C)}).catch(S=>{console.error("[angularx-qrcode] img/url error:",S)})}}}catch(h){console.error("[angularx-qrcode] Error generating QR Code:",h.message)}})()}emitQRCodeURL(i){const h=i.constructor.name;if(h===SVGSVGElement.name){const y=new Blob([i.outerHTML],{type:"image/svg+xml"}),C=URL.createObjectURL(y),S=this.sanitizer.bypassSecurityTrustUrl(C);return void this.qrCodeURL.emit(S)}let g="";h===HTMLCanvasElement.name&&(g=i.toDataURL("image/png")),h===HTMLImageElement.name&&(g=i.src),fetch(g).then(d=>d.blob()).then(d=>URL.createObjectURL(d)).then(d=>this.sanitizer.bypassSecurityTrustUrl(d)).then(d=>{this.qrCodeURL.emit(d)}).catch(d=>{console.error("[angularx-qrcode] Error when fetching image/png URL: "+d)})}}return u.\u0275fac=function(i){return new(i||u)(n.Y36(n.Qsj),n.Y36(e.H7))},u.\u0275cmp=n.Xpm({type:u,selectors:[["qrcode"]],viewQuery:function(i,h){if(1&i&&n.Gf(r,7),2&i){let g;n.iGM(g=n.CRH())&&(h.qrcElement=g.first)}},inputs:{allowEmptyString:"allowEmptyString",colorDark:"colorDark",colorLight:"colorLight",cssClass:"cssClass",elementType:"elementType",errorCorrectionLevel:"errorCorrectionLevel",imageSrc:"imageSrc",imageHeight:"imageHeight",imageWidth:"imageWidth",margin:"margin",qrdata:"qrdata",scale:"scale",version:"version",width:"width",alt:"alt",ariaLabel:"ariaLabel",title:"title"},outputs:{qrCodeURL:"qrCodeURL"},features:[n.TTD],decls:2,vars:2,consts:[["qrcElement",""]],template:function(i,h){1&i&&n._UZ(0,"div",null,0),2&i&&n.Tol(h.cssClass)},encapsulation:2,changeDetection:0}),u})(),c=(()=>{class u{}return u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=n.oAB({type:u}),u.\u0275inj=n.cJS({}),u})()},5861:(I,a,s)=>{"use strict";function o(t,e,r,l,c,u,f){try{var i=t[u](f),h=i.value}catch(g){return void r(g)}i.done?e(h):Promise.resolve(h).then(l,c)}function n(t){return function(){var e=this,r=arguments;return new Promise(function(l,c){var u=t.apply(e,r);function f(h){o(u,l,c,f,i,"next",h)}function i(h){o(u,l,c,f,i,"throw",h)}f(void 0)})}}s.d(a,{Z:()=>n})}}]);