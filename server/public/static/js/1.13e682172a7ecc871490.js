webpackJsonp([1],{"+3FL":function(i,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("N8z9"),s("Zy1g"),s("U/de"),s("w9os"),s("w95O");var a=s("HkA2"),c=s("Ck0u"),I=s("hRx0"),l=s("/o5o"),o=s("mtWM"),e=s.n(o),r={data:function(){return{goodsList:[],priceFilter:[{startPrice:"0.00",endPrice:"100.00"},{startPrice:"100.00",endPrice:"500.00"},{startPrice:"500.00",endPrice:"1000.00"},{startPrice:"1000.00",endPrice:"2000.00"},{startPrice:"2000.00",endPrice:"3000.00"},{startPrice:"3000.00",endPrice:"6000.00"}],priceChecked:"all",filterby:!1,overlayFlag:!1,page:1,pageSize:8,sortFlag:!0,busy:!0,loading:!1,mdShow:!1,mdShowCart:!1}},filters:{currency:s("ywmu").a},mounted:function(){this.getGoodsList()},components:{NavHeader:a.a,NavFooter:c.a,NavBread:I.a,Modal:l.a},computed:{totalPrice:function(){var i=0;return this.cartList.forEach(function(t){"1"==t.checked&&(i+=parseFloat(t.salePrice)*parseInt(t.productNum))}),i}},methods:{getGoodsList:function(i){var t=this,s={page:this.page,pageSize:this.pageSize,sort:this.sortFlag?1:-1,priceLevel:this.priceChecked};this.loading=!0,e.a.get("/goods/list",{params:s}).then(function(s){t.loading=!1,"0"==s.data.status?i?(t.goodsList=t.goodsList.concat(s.data.result.list),0==s.data.result.count?t.busy=!0:t.busy=!1):(t.goodsList=s.data.result.list,t.busy=!1):t.goodsList=[]})},setPriceFilter:function(i){this.priceChecked=i,this.page=1,this.getGoodsList()},showFilterPop:function(){this.filterby=!0,this.overlayFlag=!0},closePop:function(){this.overlayFlag=!1,this.filterby=!1,this.mdShow=!1,this.mdShowCart=!1},sortGoods:function(){this.sortFlag=!this.sortFlag,this.page=1,this.getGoodsList()},defaultSort:function(){this.sortFlag=!0,this.page=1,this.getGoodsList()},loadMore:function(){var i=this;this.busy=!0,setTimeout(function(){i.page++,i.getGoodsList(!0)},100)},addCart:function(i){var t=this;e.a.post("/goods/addCart",{productId:i}).then(function(i){0==i.data.status?(t.mdShowCart=!0,t.$store.commit("updateCartCount",1)):t.mdShow=!0})},closeModal:function(){this.mdShow=!1,this.mdShowCart=!1}}},n={render:function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"goodsList"},[a("nav-header"),i._v(" "),a("nav-bread",[a("span",[i._v("商品列表")])]),i._v(" "),a("div",{staticClass:"accessory-result-page"},[a("div",{staticClass:"container"},[a("div",{staticClass:"filter-nav"},[a("span",{staticClass:"sortby"},[i._v("排序:")]),i._v(" "),a("a",{staticClass:"default cur",attrs:{href:"javascript:void(0)"},on:{click:function(t){i.defaultSort()}}},[i._v("默认")]),i._v(" "),a("a",{staticClass:"price",class:{"sort-up":i.sortFlag},attrs:{href:"javascript:void(0)"},on:{click:function(t){i.sortGoods()}}},[i._v("价格 "),a("svg",{staticClass:"icon icon-arrow-short"},[a("use",{attrs:{"xlink:href":"#icon-arrow-short"}})])]),i._v(" "),a("a",{staticClass:"filterby",attrs:{href:"javascript:void(0)"},on:{click:function(t){return t.stopPropagation(),i.showFilterPop(t)}}},[i._v("筛选")])]),i._v(" "),a("div",{staticClass:"accessory-result"},[a("div",{staticClass:"filter",class:{"filterby-show":i.filterby},attrs:{id:"filter"}},[a("dl",{staticClass:"filter-price"},[a("dt",[i._v("价格区间:")]),i._v(" "),a("dd",[a("a",{class:{cur:"all"==i.priceChecked},attrs:{href:"javascript:void(0)"},on:{click:function(t){i.setPriceFilter("all")}}},[i._v("选择价格")])]),i._v(" "),i._l(i.priceFilter,function(t,s){return a("dd",[a("a",{class:{cur:i.priceChecked==s},attrs:{href:"javascript:void(0)"},on:{click:function(t){i.setPriceFilter(s)}}},[i._v("￥ "+i._s(t.startPrice)+" - "+i._s(t.endPrice)+" 元")])])})],2)]),i._v(" "),a("div",{staticClass:"accessory-list-wrap"},[a("div",{staticClass:"accessory-list col-4"},[a("ul",i._l(i.goodsList,function(t){return a("li",[a("div",{staticClass:"pic"},[a("a",{attrs:{href:"#"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/static/img/"+t.productImage,expression:"'/static/img/'+items.productImage"}],key:"/static/img/"+t.productImage,attrs:{alt:""}})])]),i._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"name"},[i._v(i._s(t.productName))]),i._v(" "),a("div",{staticClass:"price"},[i._v(i._s(i._f("currency")(t.salePrice,"￥")))]),i._v(" "),a("div",{staticClass:"btn-area"},[a("a",{staticClass:"btn btn--m",attrs:{href:"javascript:;"},on:{click:function(s){i.addCart(t.productId)}}},[i._v("加入购物车")])])])])}))]),i._v(" "),a("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:i.loadMore,expression:"loadMore"}],staticClass:"view-more-normal",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"20"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:i.loading,expression:"loading"}],attrs:{src:s("RzfU")}})])])])])]),i._v(" "),a("modal",{attrs:{mdShow:i.mdShow},on:{close:i.closeModal}},[a("p",{attrs:{slot:"message"},slot:"message"},[i._v("\n          请先登录,否则无法加入到购物车中!\n        ")]),i._v(" "),a("div",{attrs:{slot:"btnGroup"},slot:"btnGroup"},[a("a",{staticClass:"btn btn--m",attrs:{href:"javascript:void(0);"},on:{click:function(t){i.mdShow=!1}}},[i._v("关闭")])])]),i._v(" "),a("modal",{attrs:{mdShow:i.mdShowCart},on:{close:i.closeModal}},[a("p",{attrs:{slot:"message"},slot:"message"},[a("svg",{staticClass:"icon-status-ok"},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#icon-status-ok"}})]),i._v(" "),a("span",[i._v("加入购物车成功!")])]),i._v(" "),a("div",{attrs:{slot:"btnGroup"},slot:"btnGroup"},[a("a",{staticClass:"btn btn--m",attrs:{href:"javascript:void(0);"},on:{click:function(t){i.mdShowCart=!1}}},[i._v("继续购物")]),i._v(" "),a("router-link",{staticClass:"btn btn--m btn--red",attrs:{href:"javascript:void(0);",to:"/cart"}},[i._v("查看购物车")])],1)]),i._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:i.overlayFlag,expression:"overlayFlag"}],staticClass:"md-overlay",on:{click:function(t){return t.stopPropagation(),i.closePop(t)}}}),i._v(" "),a("nav-footer")],1)},staticRenderFns:[]};var d=s("VU/8")(r,n,!1,function(i){s("NKkM")},null,null);t.default=d.exports},NKkM:function(i,t){},RzfU:function(i,t){i.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZGQ3NDc5Ij4NCiAgPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiByPSIwIj4NCiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIC8+DQogIDwvY2lyY2xlPg0KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+DQogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuMTI1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIC8+DQogIDwvY2lyY2xlPg0KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+DQogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuMjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4NCiAgPC9jaXJjbGU+DQogIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTM1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+DQogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuMzc1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIC8+DQogIDwvY2lyY2xlPg0KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPg0KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4NCiAgPC9jaXJjbGU+DQogIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMjI1IDE2IDE2KSIgY3g9IjE2IiBjeT0iMyIgcj0iMCI+DQogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNjI1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIC8+DQogIDwvY2lyY2xlPg0KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDI3MCAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPg0KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjc1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIC8+DQogIDwvY2lyY2xlPg0KICA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIGN4PSIxNiIgY3k9IjMiIHI9IjAiPg0KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjg3NXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAvPg0KICA8L2NpcmNsZT4NCiAgPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeD0iMTYiIGN5PSIzIiByPSIwIj4NCiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC41cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIC8+DQogIDwvY2lyY2xlPg0KPC9zdmc+DQo="},"U/de":function(i,t){},w95O:function(i,t){},w9os:function(i,t){}});
//# sourceMappingURL=1.13e682172a7ecc871490.js.map