"use strict";(self.webpackChunkwms=self.webpackChunkwms||[]).push([[353],{84353:(c,d,m)=>{m.r(d),m.d(d,{InvoiceModule:()=>s});var r=m(36895),o=m(55213),e=m(94650);const a=[{path:"invoice",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ng-component"]],decls:161,vars:0,consts:[[1,"card"],[1,"card-header"],["href","#","onclick","javascript:window.print();",1,"btn","btn-sm","btn-info","float-right"],[1,"fa","fa-print"],["href","#",1,"btn","btn-sm","btn-info","float-right"],[1,"fa","fa-save"],[1,"card-block"],[1,"row","mb-4"],[1,"col-sm-4"],[1,"mb-3"],[1,"table-responsive"],[1,"table","table-striped"],[1,"center"],[1,"right"],[1,"left"],[1,"row"],[1,"col-lg-4","col-sm-5"],[1,"well"],[1,"col-lg-4","offset-lg-4","col-sm-5","offset-sm-2"],[1,"table","table-clear"],["href","#",1,"btn","btn-success"],[1,"fa","fa-usd"]],template:function(n,x){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1),e.\u0275\u0275text(2," Invoice "),e.\u0275\u0275elementStart(3,"strong"),e.\u0275\u0275text(4,"#90-98792"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"a",2),e.\u0275\u0275element(6,"i",3),e.\u0275\u0275text(7," Print"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"a",4),e.\u0275\u0275element(9,"i",5),e.\u0275\u0275text(10," Save"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(11,"div",6)(12,"div",7)(13,"div",8)(14,"h6",9),e.\u0275\u0275text(15,"From:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"div")(17,"strong"),e.\u0275\u0275text(18,"BootstrapMaster.com"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(19,"div"),e.\u0275\u0275text(20,"Konopnickiej 42"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"div"),e.\u0275\u0275text(22,"43-190 Mikolow, Poland"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"div"),e.\u0275\u0275text(24,"Email: lukasz@bootstrapmaster.com"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"div"),e.\u0275\u0275text(26,"Phone: +48 123 456 789"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(27,"div",8)(28,"h6",9),e.\u0275\u0275text(29,"To:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"div")(31,"strong"),e.\u0275\u0275text(32,"BootstrapMaster.com"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(33,"div"),e.\u0275\u0275text(34,"Konopnickiej 42"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"div"),e.\u0275\u0275text(36,"43-190 Mikolow, Poland"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(37,"div"),e.\u0275\u0275text(38,"Email: lukasz@bootstrapmaster.com"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(39,"div"),e.\u0275\u0275text(40,"Phone: +48 123 456 789"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(41,"div",8)(42,"h6",9),e.\u0275\u0275text(43,"Details:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(44,"div"),e.\u0275\u0275text(45,"Invoice "),e.\u0275\u0275elementStart(46,"strong"),e.\u0275\u0275text(47,"#90-98792"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(48,"div"),e.\u0275\u0275text(49,"March 30, 2013"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(50,"div"),e.\u0275\u0275text(51,"VAT: PL9877281777"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(52,"div"),e.\u0275\u0275text(53,"Account Name: BootstrapMaster.com"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(54,"div")(55,"strong"),e.\u0275\u0275text(56,"SWIFT code: 99 8888 7777 6666 5555"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(57,"div",10)(58,"table",11)(59,"thead")(60,"tr")(61,"th",12),e.\u0275\u0275text(62,"#"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(63,"th"),e.\u0275\u0275text(64,"Item"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(65,"th"),e.\u0275\u0275text(66,"Description"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(67,"th",12),e.\u0275\u0275text(68,"Quantity"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(69,"th",13),e.\u0275\u0275text(70,"Unit Cost"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(71,"th",13),e.\u0275\u0275text(72,"Total"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(73,"tbody")(74,"tr")(75,"td",12),e.\u0275\u0275text(76,"1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(77,"td",14),e.\u0275\u0275text(78,"Origin License"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(79,"td",14),e.\u0275\u0275text(80,"Extended License"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(81,"td",12),e.\u0275\u0275text(82,"1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(83,"td",13),e.\u0275\u0275text(84,"$999,00"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(85,"td",13),e.\u0275\u0275text(86,"$999,00"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(87,"tr")(88,"td",12),e.\u0275\u0275text(89,"2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(90,"td",14),e.\u0275\u0275text(91,"Custom Services"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(92,"td",14),e.\u0275\u0275text(93,"Instalation and Customization (cost per hour)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(94,"td",12),e.\u0275\u0275text(95,"20"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(96,"td",13),e.\u0275\u0275text(97,"$150,00"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(98,"td",13),e.\u0275\u0275text(99,"$3.000,00"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(100,"tr")(101,"td",12),e.\u0275\u0275text(102,"3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(103,"td",14),e.\u0275\u0275text(104,"Hosting"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(105,"td",14),e.\u0275\u0275text(106,"1 year subcription"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(107,"td",12),e.\u0275\u0275text(108,"1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(109,"td",13),e.\u0275\u0275text(110,"$499,00"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(111,"td",13),e.\u0275\u0275text(112,"$499,00"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(113,"tr")(114,"td",12),e.\u0275\u0275text(115,"4"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(116,"td",14),e.\u0275\u0275text(117,"Platinum Support"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(118,"td",14),e.\u0275\u0275text(119,"1 year subcription 24/7"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(120,"td",12),e.\u0275\u0275text(121,"1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(122,"td",13),e.\u0275\u0275text(123,"$3.999,00"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(124,"td",13),e.\u0275\u0275text(125,"$3.999,00"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(126,"div",15)(127,"div",16)(128,"div",17),e.\u0275\u0275text(129," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(130,"div",18)(131,"table",19)(132,"tbody")(133,"tr")(134,"td",14)(135,"strong"),e.\u0275\u0275text(136,"Subtotal"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(137,"td",13),e.\u0275\u0275text(138,"$8.497,00"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(139,"tr")(140,"td",14)(141,"strong"),e.\u0275\u0275text(142,"Discount (20%)"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(143,"td",13),e.\u0275\u0275text(144,"$1,699,40"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(145,"tr")(146,"td",14)(147,"strong"),e.\u0275\u0275text(148,"VAT (10%)"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(149,"td",13),e.\u0275\u0275text(150,"$679,76"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(151,"tr")(152,"td",14)(153,"strong"),e.\u0275\u0275text(154,"Total"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(155,"td",13)(156,"strong"),e.\u0275\u0275text(157,"$7.477,36"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(158,"a",20),e.\u0275\u0275element(159,"i",21),e.\u0275\u0275text(160," Proceed to Payment"),e.\u0275\u0275elementEnd()()()()())},encapsulation:2}),t})(),data:{title:"Invoice"}}];let i=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[o.Bz.forChild(a),o.Bz]}),t})(),s=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[i,r.ez]}),t})()}}]);