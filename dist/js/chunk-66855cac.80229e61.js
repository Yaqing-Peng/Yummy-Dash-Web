(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66855cac"],{"0bc6":function(t,e,a){"use strict";a("8bdb")},2235:function(t,e,a){t.exports=a.p+"img/search_table_empty.e769fc3e.png"},"2e08":function(t,e,a){var r=a("9def"),s=a("9744"),n=a("be13");t.exports=function(t,e,a,i){var o=String(n(t)),c=o.length,l=void 0===a?" ":String(a),u=r(e);if(u<=c||""==l)return o;var d=u-c,v=s.call(l,Math.ceil(d/l.length));return v.length>d&&(v=v.slice(0,d)),i?v+o:o+v}},"2fdb":function(t,e,a){"use strict";var r=a("5ca1"),s=a("d2c8"),n="includes";r(r.P+r.F*a("5147")(n),"String",{includes:function(t){return!!~s(this,t,n).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"38b8":function(t,e,a){t.exports=a.p+"img/table_empty.885371bc.png"},"3b2b":function(t,e,a){var r=a("7726"),s=a("5dbc"),n=a("86cc").f,i=a("9093").f,o=a("aae3"),c=a("0bfb"),l=r.RegExp,u=l,d=l.prototype,v=/a/g,f=/a/g,p=new l(v)!==v;if(a("9e1e")&&(!p||a("79e5")((function(){return f[a("2b4c")("match")]=!1,l(v)!=v||l(f)==f||"/a/i"!=l(v,"i")})))){l=function(t,e){var a=this instanceof l,r=o(t),n=void 0===e;return!a&&r&&t.constructor===l&&n?t:s(p?new u(r&&!n?t.source:t,e):u((r=t instanceof l)?t.source:t,r&&n?c.call(t):e),a?this:d,l)};for(var b=function(t){t in l||n(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},m=i(u),h=0;m.length>h;)b(m[h++]);d.constructor=l,l.prototype=d,a("2aba")(r,"RegExp",l)}a("7a56")("RegExp")},"560a":function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"h",(function(){return c})),a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return u})),a.d(e,"f",(function(){return d})),a.d(e,"e",(function(){return v})),a.d(e,"g",(function(){return f})),a.d(e,"d",(function(){return p}));a("8e6e"),a("ac6a"),a("456d");var r=a("bd86"),s=a("b32d");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var o=function(t){return Object(s["a"])({url:"/order/conditionSearch",method:"get",params:t})},c=function(t){return Object(s["a"])({url:"/order/details/".concat(t.orderId),method:"get"})},l=function(t){return Object(s["a"])({url:"/order/delivery/".concat(t.id),method:"put"})},u=function(t){return Object(s["a"])({url:"/order/complete/".concat(t.id),method:"put"})},d=function(t){return Object(s["a"])({url:"/order/cancel",method:"put",data:i({},t)})},v=function(t){return Object(s["a"])({url:"/order/confirm",method:"put",data:i({},t)})},f=function(t){return Object(s["a"])({url:"/order/rejection",method:"put",data:i({},t)})},p=function(t){return Object(s["a"])({url:"/order/statistics",method:"get"})}},"56a6":function(t,e,a){},"5dbc":function(t,e,a){var r=a("d3f4"),s=a("8b97").set;t.exports=function(t,e,a){var n,i=e.constructor;return i!==a&&"function"==typeof i&&(n=i.prototype)!==a.prototype&&r(n)&&s&&s(t,n),t}},6762:function(t,e,a){"use strict";var r=a("5ca1"),s=a("c366")(!0);r(r.P,"Array",{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},"79f6":function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"e",(function(){return n})),a.d(e,"f",(function(){return i})),a.d(e,"b",(function(){return o})),a.d(e,"h",(function(){return c})),a.d(e,"i",(function(){return l})),a.d(e,"d",(function(){return u})),a.d(e,"g",(function(){return d})),a.d(e,"a",(function(){return v}));var r=a("b32d"),s=function(){return Object(r["a"])({url:"/workspace/overviewOrders",method:"get"})},n=function(){return Object(r["a"])({url:"/workspace/overviewDishes",method:"get"})},i=function(){return Object(r["a"])({url:"/workspace/overviewSetmeals",method:"get"})},o=function(){return Object(r["a"])({url:"/workspace/businessData",method:"get"})},c=function(t){return Object(r["a"])({url:"/report/turnoverStatistics",method:"get",params:t})},l=function(t){return Object(r["a"])({url:"/report/userStatistics",method:"get",params:t})},u=function(t){return Object(r["a"])({url:"/report/ordersStatistics",method:"get",params:t})},d=function(t){return Object(r["a"])({url:"/report/top10",method:"get",params:t})};function v(){return Object(r["a"])({url:"/report/export",method:"get",responseType:"blob"})}},"8b97":function(t,e,a){var r=a("d3f4"),s=a("cb7c"),n=function(t,e){if(s(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(s){e=!0}return function(t,a){return n(t,a),e?t.__proto__=a:r(t,a),t}}({},!1):void 0),check:n}},"8bdb":function(t,e,a){t.exports={menuBg:"#343744",menuText:"#bfcbd9",menuActiveText:"#ffc200"}},9406:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"dashboard-container home"},[e("Overview",{attrs:{overviewData:t.overviewData}}),e("Orderview",{attrs:{orderviewData:t.orderviewData}}),e("div",{staticClass:"homeMain"},[e("CuisineStatistics",{attrs:{dishesData:t.dishesData}}),e("SetMealStatistics",{attrs:{setMealData:t.setMealData}})],1),e("OrderList",{attrs:{"order-statics":t.orderStatics},on:{getOrderListBy3Status:t.getOrderListBy3Status}})],1)},s=[],n=(a("2397"),a("96cf"),a("3b8d")),i=a("d225"),o=a("b0b4"),c=a("308d"),l=a("6bb5"),u=a("4e2b"),d=a("bd86"),v=a("9ab4"),f=a("60a3"),p=a("79f6"),b=a("560a"),m=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("h2",{staticClass:"homeTitle"},[t._v("\n    Today's Data"),e("i",[t._v(t._s(t.days[1]))]),e("span",[e("router-link",{attrs:{to:"statistics"}},[t._v("More Details")])],1)]),e("div",{staticClass:"overviewBox"},[e("ul",[e("li",[e("p",{staticClass:"tit"},[t._v("Turnover")]),e("p",{staticClass:"num"},[t._v("¥ "+t._s(t.overviewData.turnover))])]),e("li",[e("p",{staticClass:"tit"},[t._v("Valid Orders")]),e("p",{staticClass:"num"},[t._v(t._s(t.overviewData.validOrderCount))])]),e("li",[e("p",{staticClass:"tit"},[t._v("Order Complete Rate")]),e("p",{staticClass:"num"},[t._v("\n          "+t._s((100*t.overviewData.orderCompletionRate).toFixed(0))+"%\n        ")])]),e("li",[e("p",{staticClass:"tit"},[t._v("Average Consumption")]),e("p",{staticClass:"num"},[t._v("¥ "+t._s(t.overviewData.unitPrice))])]),e("li",[e("p",{staticClass:"tit"},[t._v("New Customers")]),e("p",{staticClass:"num"},[t._v(t._s(t.overviewData.newUsers))])])])])])},h=[],O=a("d9cf");function g(t,e,a){return e=Object(l["a"])(e),Object(c["a"])(t,_()?Reflect.construct(e,a||[],Object(l["a"])(t).constructor):e.apply(t,a))}function _(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_=function(){return!!t})()}var y=function(t){function e(){var t;Object(i["a"])(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return t=g(this,e,[].concat(r)),Object(d["a"])(t,"overviewData",void 0),t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"days",get:function(){return Object(O["b"])()}}])}(f["c"]);Object(v["a"])([Object(f["b"])()],y.prototype,"overviewData",void 0),y=Object(v["a"])([Object(f["a"])({name:"Overview"})],y);var j=y,C=j,D=a("2877"),w=Object(D["a"])(C,m,h,!1,null,null,null),S=w.exports,k=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("h2",{staticClass:"homeTitle"},[t._v("\n    Order Management"),e("i",[t._v(t._s(t.days[1]))]),e("span",[e("router-link",{attrs:{to:"/order"}},[t._v("Order Details")])],1)]),e("div",{staticClass:"orderviewBox"},[e("ul",[e("li",[t._m(0),e("span",{staticClass:"num tip"},[e("router-link",{attrs:{to:"/order?status=2"}},[t._v(t._s(t.orderviewData.waitingOrders))])],1)]),e("li",[t._m(1),e("span",{staticClass:"num tip"},[e("router-link",{attrs:{to:"/order?status=3"}},[t._v(t._s(t.orderviewData.deliveredOrders))])],1)]),e("li",[t._m(2),e("span",{staticClass:"num"},[e("router-link",{attrs:{to:"/order?status=5"}},[t._v(t._s(t.orderviewData.completedOrders))])],1)]),e("li",[t._m(3),e("span",{staticClass:"num"},[e("router-link",{attrs:{to:"/order?status=6"}},[t._v(t._s(t.orderviewData.cancelledOrders))])],1)]),e("li",[t._m(4),e("span",{staticClass:"num"},[e("router-link",{attrs:{to:"/order"}},[t._v(t._s(t.orderviewData.allOrders))])],1)])])])])},x=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"status"},[e("i",{staticClass:"iconfont icon-waiting"}),t._v("To Confirm")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"status"},[e("i",{staticClass:"iconfont icon-staySway"}),t._v("To Deliver")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"status"},[e("i",{staticClass:"iconfont icon-complete"}),t._v("Completed")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"status"},[e("i",{staticClass:"iconfont icon-cancel"}),t._v("Canceled")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"status"},[e("i",{staticClass:"iconfont icon-all"}),t._v("Total Orders")])}];function R(t,e,a){return e=Object(l["a"])(e),Object(c["a"])(t,T()?Reflect.construct(e,a||[],Object(l["a"])(t).constructor):e.apply(t,a))}function T(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(T=function(){return!!t})()}var Y=function(t){function e(){var t;Object(i["a"])(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return t=R(this,e,[].concat(r)),Object(d["a"])(t,"orderviewData",void 0),t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"days",get:function(){return Object(O["b"])()}}])}(f["c"]);Object(v["a"])([Object(f["b"])()],Y.prototype,"orderviewData",void 0),Y=Object(v["a"])([Object(f["a"])({name:"Orderview"})],Y);var P=Y,B=P,F=Object(D["a"])(B,k,x,!1,null,null,null),L=F.exports,A=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("h2",{staticClass:"homeTitle"},[t._v("\n    Dish Overview"),e("span",[e("router-link",{attrs:{to:"dish"}},[t._v("Dish Management")])],1)]),e("div",{staticClass:"orderviewBox"},[e("ul",[e("li",[t._m(0),e("span",{staticClass:"num"},[t._v(t._s(t.dishesData.sold))])]),e("li",[t._m(1),e("span",{staticClass:"num"},[t._v(t._s(t.dishesData.discontinued))])]),e("li",{staticClass:"add"},[e("router-link",{attrs:{to:"/dish/add"}},[e("i"),e("p",[t._v("Add A Dish")])])],1)])])])},M=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"status"},[e("i",{staticClass:"iconfont icon-open"}),t._v("On Sale")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"status"},[e("i",{staticClass:"iconfont icon-stop"}),t._v("Off Sale")])}],V=(a("7f7f"),a("6762"),a("2fdb"),function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"container homecon"},[e("h2",{staticClass:"homeTitle homeTitleBtn"},[t._v("\n      Order Details\n      "),e("ul",{staticClass:"conTab"},t._l(t.tabList,(function(a,r){return e("li",{key:r,class:t.activeIndex===r?"active":"",on:{click:function(e){return t.handleClass(r)}}},[e("el-badge",{staticClass:"item",class:a.num>=10?"badgeW":"",attrs:{value:a.num>99?"99+":a.num,hidden:!([2,3].includes(a.value)&&a.num)}},[t._v(t._s(a.label))])],1)})),0)]),e("div",{},[t.orderData.length>0?e("div",[e("el-table",{staticClass:"tableBox",staticStyle:{width:"100%"},attrs:{data:t.orderData,stripe:""},on:{"row-click":t.handleTable}},[e("el-table-column",{attrs:{prop:"number",label:"Order NO."}}),e("el-table-column",{attrs:{label:"Order Items"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"ellipsisHidden"},[e("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:a.row.orderDishes}},[e("span",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(a.row.orderDishes))])])],1)]}}],null,!1,2845630214)}),e("el-table-column",{attrs:{label:"Address","class-name":2===t.dialogOrderStatus?"address":""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"ellipsisHidden"},[e("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:a.row.address}},[e("span",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(a.row.address))])])],1)]}}],null,!1,3554143750)}),e("el-table-column",{attrs:{prop:"estimatedDeliveryTime",label:"Estimated Delivery Time",sortable:"","class-name":"orderTime","min-width":"130"}}),e("el-table-column",{attrs:{prop:"amount",label:"Total Price"}}),e("el-table-column",{attrs:{label:"Remark"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"ellipsisHidden"},[e("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:a.row.remark}},[e("span",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(a.row.remark))])])],1)]}}],null,!1,3505279526)}),3===t.status?e("el-table-column",{attrs:{prop:"tablewareNumber",label:"Tableware Number","min-width":"80",align:"center"}}):t._e(),e("el-table-column",{attrs:{label:"Operations",align:"center","class-name":0===t.dialogOrderStatus?"operate":"otherOperate","min-width":[2,3].includes(t.dialogOrderStatus)?130:[0].includes(t.dialogOrderStatus)?140:"auto"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.row;return[e("div",{staticClass:"before"},[2===r.status?e("el-button",{staticClass:"blueBug",attrs:{type:"text"},on:{click:function(e){t.orderAccept(r,e),t.isTableOperateBtn=!0}}},[t._v("\n                  Confirm Order\n                ")]):t._e(),3===r.status?e("el-button",{staticClass:"blueBug",attrs:{type:"text"},on:{click:function(e){return t.cancelOrDeliveryOrComplete(3,r.id,e)}}},[t._v("\n                  Confirm Delivery\n                ")]):t._e()],1),e("div",{staticClass:"middle"},[2===r.status?e("el-button",{staticClass:"delBut",attrs:{type:"text"},on:{click:function(e){t.orderReject(r,e),t.isTableOperateBtn=!0}}},[t._v("\n                  Reject\n                ")]):t._e(),[1,3,4,5].includes(r.status)?e("el-button",{staticClass:"delBut",attrs:{type:"text"},on:{click:function(e){return t.cancelOrder(r,e)}}},[t._v("\n                  Cancel\n                ")]):t._e()],1),e("div",{staticClass:"after"},[e("el-button",{staticClass:"blueBug non",attrs:{type:"text"},on:{click:function(e){return t.goDetail(r.id,r.status,r,e)}}},[t._v("\n                  Check Details\n                ")])],1)]}}],null,!1,5950241)})],1)],1):e("Empty",{attrs:{"is-search":t.isSearch}}),t.counts>10?e("el-pagination",{staticClass:"pageList",attrs:{"page-sizes":[10,20,30,40],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.counts},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}):t._e()],1)]),e("el-dialog",{staticClass:"order-dialog",attrs:{title:"Order Details",visible:t.dialogVisible,width:"53%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("el-scrollbar",{staticStyle:{height:"100%"}},[e("div",{staticClass:"order-top"},[e("div",[e("div",{staticStyle:{display:"inline-block"}},[e("label",{staticStyle:{"font-size":"16px"}},[t._v("Order Number：")]),e("div",{staticClass:"order-num"},[t._v("\n              "+t._s(t.diaForm.number)+"\n            ")])]),e("div",{staticClass:"order-status",class:{status3:[3,4].includes(t.dialogOrderStatus)},staticStyle:{display:"inline-block"}},[t._v("\n            "+t._s(t.orderList.filter((function(e){return e.value===t.dialogOrderStatus}))[0].label)+"\n          ")])]),e("p",[e("label",[t._v("Order Time：")]),t._v(t._s(t.diaForm.orderTime))])]),e("div",{staticClass:"order-middle"},[e("div",{staticClass:"user-info"},[e("div",{staticClass:"user-info-box"},[e("div",{staticClass:"user-name"},[e("label",[t._v("User Name：")]),e("span",[t._v(t._s(t.diaForm.consignee))])]),e("div",{staticClass:"user-phone"},[e("label",[t._v("Phone: ")]),e("span",[t._v(t._s(t.diaForm.phone))])]),[2,3,4,5].includes(t.dialogOrderStatus)?e("div",{staticClass:"user-getTime"},[e("label",[t._v(t._s(5===t.dialogOrderStatus?"Delivered Time":"Estimated Delivery Time:"))]),e("span",[t._v(t._s(5===t.dialogOrderStatus?t.diaForm.deliveryTime:t.diaForm.estimatedDeliveryTime))])]):t._e(),e("div",{staticClass:"user-address"},[e("label",[t._v("Address: ")]),e("span",[t._v(t._s(t.diaForm.address))])])]),e("div",{staticClass:"user-remark",class:{orderCancel:6===t.dialogOrderStatus}},[e("div",[t._v(t._s(6===t.dialogOrderStatus?"取消原因":"备注"))]),e("span",[t._v(t._s(6===t.dialogOrderStatus?t.diaForm.cancelReason||t.diaForm.rejectionReason:t.diaForm.remark))])])]),e("div",{staticClass:"dish-info"},[e("div",{staticClass:"dish-label"},[t._v("菜品")]),e("div",{staticClass:"dish-list"},t._l(t.diaForm.orderDetailList,(function(a,r){return e("div",{key:r,staticClass:"dish-item"},[e("span",{staticClass:"dish-name"},[t._v(t._s(a.name))]),e("span",{staticClass:"dish-num"},[t._v("x"+t._s(a.number))]),e("span",{staticClass:"dish-price"},[t._v("￥"+t._s(a.amount?a.amount.toFixed(2):""))])])})),0),e("div",{staticClass:"dish-all-amount"},[e("label",[t._v("菜品小计")]),e("span",[t._v("￥"+t._s((t.diaForm.amount-6-t.diaForm.packAmount).toFixed(2)))])])])]),e("div",{staticClass:"order-bottom"},[e("div",{staticClass:"amount-info"},[e("div",{staticClass:"amount-label"},[t._v("费用")]),e("div",{staticClass:"amount-list"},[e("div",{staticClass:"dish-amount"},[e("span",{staticClass:"amount-name"},[t._v("菜品小计：")]),e("span",{staticClass:"amount-price"},[t._v("￥"+t._s(100*(t.diaForm.amount-6-t.diaForm.packAmount).toFixed(2)/100))])]),e("div",{staticClass:"send-amount"},[e("span",{staticClass:"amount-name"},[t._v("派送费：")]),e("span",{staticClass:"amount-price"},[t._v("￥"+t._s(6))])]),e("div",{staticClass:"package-amount"},[e("span",{staticClass:"amount-name"},[t._v("打包费：")]),e("span",{staticClass:"amount-price"},[t._v("￥"+t._s(t.diaForm.packAmount?100*t.diaForm.packAmount.toFixed(2)/100:""))])]),e("div",{staticClass:"all-amount"},[e("span",{staticClass:"amount-name"},[t._v("合计：")]),e("span",{staticClass:"amount-price"},[t._v("￥"+t._s(t.diaForm.amount?100*t.diaForm.amount.toFixed(2)/100:""))])]),e("div",{staticClass:"pay-type"},[e("span",{staticClass:"pay-name"},[t._v("支付渠道：")]),e("span",{staticClass:"pay-value"},[t._v(t._s(1===t.diaForm.payMethod?"微信支付":"支付宝支付"))])]),e("div",{staticClass:"pay-time"},[e("span",{staticClass:"pay-name"},[t._v("支付时间：")]),e("span",{staticClass:"pay-value"},[t._v(t._s(t.diaForm.checkoutTime))])])])])])]),6!==t.dialogOrderStatus?e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[2===t.dialogOrderStatus&&2===t.status?e("el-checkbox",{model:{value:t.isAutoNext,callback:function(e){t.isAutoNext=e},expression:"isAutoNext"}},[t._v("处理完自动跳转下一条")]):t._e(),2===t.dialogOrderStatus?e("el-button",{on:{click:function(e){t.orderReject(t.row,e),t.isTableOperateBtn=!1}}},[t._v("拒 单")]):t._e(),2===t.dialogOrderStatus?e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.orderAccept(t.row,e),t.isTableOperateBtn=!1}}},[t._v("接 单")]):t._e(),[1,3,4,5].includes(t.dialogOrderStatus)?e("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("返 回")]):t._e(),3===t.dialogOrderStatus?e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.cancelOrDeliveryOrComplete(3,t.row.id,e)}}},[t._v("派 送")]):t._e(),4===t.dialogOrderStatus?e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.cancelOrDeliveryOrComplete(4,t.row.id,e)}}},[t._v("完 成")]):t._e(),[1].includes(t.dialogOrderStatus)?e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.cancelOrder(t.row,e)}}},[t._v("取消订单")]):t._e()],1):t._e()],1),e("el-dialog",{staticClass:"cancelDialog",attrs:{title:t.cancelDialogTitle+"Reason",visible:t.cancelDialogVisible,width:"42%","before-close":function(){return t.cancelDialogVisible=!1,t.cancelReason=""}},on:{"update:visible":function(e){t.cancelDialogVisible=e}}},[e("el-form",{attrs:{"label-width":"90px"}},[e("el-form-item",{attrs:{label:t.cancelDialogTitle+"Reason:"}},[e("el-select",{attrs:{placeholder:"请选择"+t.cancelDialogTitle+"Reason"},model:{value:t.cancelReason,callback:function(e){t.cancelReason=e},expression:"cancelReason"}},t._l("Cancel"===t.cancelDialogTitle?t.cancelrReasonList:t.cancelOrderReasonList,(function(t,a){return e("el-option",{key:a,attrs:{label:t.label,value:t.label}})})),1)],1),"Other reasons "===t.cancelReason?e("el-form-item",{attrs:{label:"Reason:"}},[e("el-input",{attrs:{type:"textarea",placeholder:"Please fill your"+t.cancelDialogTitle+"reason(limited to 20 words)",maxlength:"20"},model:{value:t.remark,callback:function(e){t.remark="string"===typeof e?e.trim():e},expression:"remark"}})],1):t._e()],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.cancelDialogVisible=!1,t.cancelReason=""}}},[t._v("Cancel")]),e("el-button",{attrs:{type:"primary"},on:{click:t.confirmCancel}},[t._v("Confirm")])],1)],1)],1)}),E=[],I=a("fab1");function $(t,e,a){return e=Object(l["a"])(e),Object(c["a"])(t,z()?Reflect.construct(e,a||[],Object(l["a"])(t).constructor):e.apply(t,a))}function z(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(z=function(){return!!t})()}var N=function(t){function e(){var t;Object(i["a"])(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return t=$(this,e,[].concat(r)),Object(d["a"])(t,"orderStatics",void 0),Object(d["a"])(t,"orderId",""),Object(d["a"])(t,"dialogOrderStatus",0),Object(d["a"])(t,"activeIndex",0),Object(d["a"])(t,"dialogVisible",!1),Object(d["a"])(t,"cancelDialogVisible",!1),Object(d["a"])(t,"cancelDialogTitle",""),Object(d["a"])(t,"cancelReason",""),Object(d["a"])(t,"remark",""),Object(d["a"])(t,"diaForm",[]),Object(d["a"])(t,"row",{}),Object(d["a"])(t,"isAutoNext",!0),Object(d["a"])(t,"isSearch",!1),Object(d["a"])(t,"counts",0),Object(d["a"])(t,"page",1),Object(d["a"])(t,"pageSize",10),Object(d["a"])(t,"status",2),Object(d["a"])(t,"orderData",[]),Object(d["a"])(t,"isTableOperateBtn",!0),Object(d["a"])(t,"cancelOrderReasonList",[{value:1,label:"Sorry we are under excessive amount of orders"},{value:2,label:"Sorry, all items have been sold out"},{value:3,label:"Sorry, our restaurant is closed"},{value:0,label:"Other reasons"}]),Object(d["a"])(t,"cancelrReasonList",[{value:1,label:"Sorry we are under excessive amount of orders"},{value:2,label:"Sorry, all items have been sold out"},{value:3,label:"Sorry, we are under shorthand of delivery person"},{value:4,label:"Customer called to cancel order"},{value:0,label:"Other reasons"}]),Object(d["a"])(t,"orderList",[{label:"All Orders",value:0},{label:"Unpaid",value:1},{label:"Pending Confirm",value:2},{label:"Pending Deliver",value:3},{label:"On delivery",value:4},{label:"Completed",value:5},{label:"Canceled",value:6}]),t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"tabList",get:function(){return[{label:"Pending Confirm",value:2,num:this.orderStatics.toBeConfirmed},{label:"Pending Deliver",value:3,num:this.orderStatics.confirmed}]}},{key:"created",value:function(){this.getOrderListData(this.status)}},{key:"getOrderListData",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={page:this.page,pageSize:this.pageSize,status:e},t.next=3,Object(b["c"])(a);case 3:if(r=t.sent,this.orderData=r.data.data.records,this.counts=r.data.data.total,this.$emit("getOrderListBy3Status"),!(2===this.dialogOrderStatus&&2===this.status&&this.isAutoNext&&!this.isTableOperateBtn&&r.data.records.length>1)){t.next=12;break}s=r.data.records[0],this.goDetail(s.id,s.status,s,s),t.next=13;break;case 12:return t.abrupt("return",null);case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"orderAccept",value:function(t,e){var a=this;e.stopPropagation(),this.orderId=t.id,this.dialogOrderStatus=t.status,Object(b["e"])({id:this.orderId}).then((function(t){1===t.data.code?(a.$message.success("Operated Successfully"),a.orderId="",a.dialogVisible=!1,a.getOrderListData(a.status)):a.$message.error(t.data.msg)})).catch((function(t){a.$message.error("Request Error: "+t.message)}))}},{key:"cancelOrder",value:function(t,e){e.stopPropagation(),this.cancelDialogVisible=!0,this.orderId=t.id,this.dialogOrderStatus=t.status,this.cancelDialogTitle="Cancel",this.dialogVisible=!1,this.cancelReason=""}},{key:"orderReject",value:function(t,e){e.stopPropagation(),this.cancelDialogVisible=!0,this.orderId=t.id,this.dialogOrderStatus=t.status,this.cancelDialogTitle="拒绝",this.dialogVisible=!1,this.cancelReason=""}},{key:"confirmCancel",value:function(t){var e=this;return this.cancelReason&&("Other reasons"!==this.cancelReason||this.remark)?void("Cancel"===this.cancelDialogTitle?b["f"]:b["g"])(Object(d["a"])({id:this.orderId},"Cancel"===this.cancelDialogTitle?"cancelReason":"rejectionReason","Other reasons"===this.cancelReason?this.remark:this.cancelReason)).then((function(t){1===t.data.code?(e.$message.success("Operated Successfully"),e.cancelDialogVisible=!1,e.orderId="",e.getOrderListData(e.status)):e.$message.error(t.data.msg)})).catch((function(t){e.$message.error("Request Error:"+t.message)})):this.$message.error("Please choose the reason to ".concat(this.cancelDialogTitle))}},{key:"cancelOrDeliveryOrComplete",value:function(t,e,a){var r=this;a.stopPropagation();var s={status:t,id:e};(3===t?b["b"]:b["a"])(s).then((function(t){1===t.data.code?(r.$message.success("Operated Successfully"),r.orderId="",r.dialogVisible=!1,r.getOrderListData(r.status)):r.$message.error(t.data.msg)})).catch((function(t){r.$message.error("Request Error: "+t.message)}))}},{key:"goDetail",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,a,r,s){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s.stopPropagation(),this.diaForm=[],this.dialogVisible=!0,this.dialogOrderStatus=a,t.next=6,Object(b["h"])({orderId:e});case 6:n=t.sent,i=n.data,this.diaForm=i.data,this.row=r;case 10:case"end":return t.stop()}}),t,this)})));function e(e,a,r,s){return t.apply(this,arguments)}return e}()},{key:"handleClose",value:function(){this.dialogVisible=!1}},{key:"handleClass",value:function(t){this.activeIndex=t,0===t?(this.status=2,this.getOrderListData(2)):(this.status=3,this.getOrderListData(3))}},{key:"handleTable",value:function(t,e,a){a.stopPropagation(),this.goDetail(t.id,t.status,t,a)}},{key:"handleSizeChange",value:function(t){this.pageSize=t,this.getOrderListData(this.status)}},{key:"handleCurrentChange",value:function(t){this.page=t,this.getOrderListData(this.status)}}])}(f["c"]);Object(v["a"])([Object(f["b"])({default:""})],N.prototype,"orderStatics",void 0),N=Object(v["a"])([Object(f["a"])({name:"Orderview",components:{Empty:I["a"]}})],N);var q=N,H=q,U=(a("9cee"),a("0bc6"),Object(D["a"])(H,V,E,!1,null,"672eac34",null)),J=U.exports;function W(t,e,a){return e=Object(l["a"])(e),Object(c["a"])(t,G()?Reflect.construct(e,a||[],Object(l["a"])(t).constructor):e.apply(t,a))}function G(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(G=function(){return!!t})()}var K=function(t){function e(){var t;Object(i["a"])(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return t=W(this,e,[].concat(r)),Object(d["a"])(t,"dishesData",void 0),t}return Object(u["a"])(e,t),Object(o["a"])(e)}(f["c"]);Object(v["a"])([Object(f["b"])()],K.prototype,"dishesData",void 0),K=Object(v["a"])([Object(f["a"])({components:{orderList:J},name:"cuisineview"})],K);var Q=K,X=Q,Z=Object(D["a"])(X,A,M,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("h2",{staticClass:"homeTitle"},[t._v("\n    Setmeal Overview"),e("span",[e("router-link",{attrs:{to:"setmeal"}},[t._v("Setmeal Management")])],1)]),e("div",{staticClass:"orderviewBox"},[e("ul",[e("li",[t._m(0),e("span",{staticClass:"num"},[t._v(t._s(t.setMealData.sold))])]),e("li",[t._m(1),e("span",{staticClass:"num"},[t._v(t._s(t.setMealData.discontinued))])]),e("li",{staticClass:"add"},[e("router-link",{attrs:{to:"setmeal/add"}},[e("i"),e("p",[t._v("Add a Setmeal")])])],1)])])])},at=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"status"},[e("i",{staticClass:"iconfont icon-open"}),t._v("On Sale")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"status"},[e("i",{staticClass:"iconfont icon-stop"}),t._v("Off Sale")])}];function rt(t,e,a){return e=Object(l["a"])(e),Object(c["a"])(t,st()?Reflect.construct(e,a||[],Object(l["a"])(t).constructor):e.apply(t,a))}function st(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(st=function(){return!!t})()}var nt=function(t){function e(){var t;Object(i["a"])(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return t=rt(this,e,[].concat(r)),Object(d["a"])(t,"setMealData",void 0),t}return Object(u["a"])(e,t),Object(o["a"])(e)}(f["c"]);Object(v["a"])([Object(f["b"])()],nt.prototype,"setMealData",void 0),nt=Object(v["a"])([Object(f["a"])({name:"SetMeal"})],nt);var it=nt,ot=it,ct=Object(D["a"])(ot,et,at,!1,null,null,null),lt=ct.exports;function ut(t,e,a){return e=Object(l["a"])(e),Object(c["a"])(t,dt()?Reflect.construct(e,a||[],Object(l["a"])(t).constructor):e.apply(t,a))}function dt(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(dt=function(){return!!t})()}var vt=function(t){function e(){var t;Object(i["a"])(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return t=ut(this,e,[].concat(r)),Object(d["a"])(t,"todayData",{}),Object(d["a"])(t,"overviewData",{}),Object(d["a"])(t,"orderviewData",{}),Object(d["a"])(t,"flag",2),Object(d["a"])(t,"tateData",[]),Object(d["a"])(t,"dishesData",{}),Object(d["a"])(t,"setMealData",{}),Object(d["a"])(t,"orderListData",[]),Object(d["a"])(t,"counts",0),Object(d["a"])(t,"page",1),Object(d["a"])(t,"pageSize",10),Object(d["a"])(t,"status",2),Object(d["a"])(t,"orderStatics",{}),t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.init()}},{key:"init",value:function(){var t=this;this.$nextTick((function(){t.getBusinessData(),t.getOrderStatisticsData(),t.getOverStatisticsData(),t.getSetMealStatisticsData()}))}},{key:"getBusinessData",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["b"])();case 2:e=t.sent,this.overviewData=e.data.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getOrderStatisticsData",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["c"])();case 2:e=t.sent,this.orderviewData=e.data.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getOverStatisticsData",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["e"])();case 2:e=t.sent,this.dishesData=e.data.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getSetMealStatisticsData",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["f"])();case 2:e=t.sent,this.setMealData=e.data.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getOrderListBy3Status",value:function(){var t=this;Object(b["d"])({}).then((function(e){1===e.data.code?t.orderStatics=e.data.data:t.$message.error(e.data.msg)})).catch((function(e){t.$message.error("Request Error:"+e.message)}))}}])}(f["c"]);vt=Object(v["a"])([Object(f["a"])({name:"Dashboard",components:{Overview:S,Orderview:L,CuisineStatistics:tt,SetMealStatistics:lt,OrderList:J}})],vt);var ft=vt,pt=ft,bt=Object(D["a"])(pt,r,s,!1,null,null,null);e["default"]=bt.exports},9744:function(t,e,a){"use strict";var r=a("4588"),s=a("be13");t.exports=function(t){var e=String(s(this)),a="",n=r(t);if(n<0||n==1/0)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},"9cee":function(t,e,a){"use strict";a("a5a2")},a5a2:function(t,e,a){},d9cf:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n})),a.d(e,"d",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"f",(function(){return c})),a.d(e,"e",(function(){return l}));a("f576"),a("a481"),a("3b2b"),a("6b54");function r(t,e){var a,r=new Date(e),s={"Y+":r.getFullYear().toString(),"m+":(r.getMonth()+1).toString(),"d+":r.getDate().toString()};for(var n in s)a=new RegExp("("+n+")").exec(t),a&&(t=t.replace(a[1],1==a[1].length?s[n]:s[n].padStart(a[1].length,"0")));return t}var s=function(){var t=new Date((new Date).toLocaleDateString()).getTime(),e=t-864e5,a=e+864e5-1,s=r("YYYY-mm-dd",e),n=r("YYYY-mm-dd",a);return[s,n]},n=function(){var t=new Date((new Date).toLocaleDateString()).getTime(),e=t-864e5,a=r("YYYY.mm.dd",e),s=r("YYYY.mm.dd",t);return[a,s]},i=function(){var t=new Date((new Date).toLocaleDateString()).getTime(),e=t-6048e5,a=t-1,s=r("YYYY-mm-dd",e),n=r("YYYY-mm-dd",a);return[s,n]},o=function(){var t=new Date((new Date).toLocaleDateString()).getTime(),e=t-2592e6,a=t-1,s=r("YYYY-mm-dd",e),n=r("YYYY-mm-dd",a);return[s,n]},c=function(){var t=new Date((new Date).toLocaleDateString()).getTime(),e=(new Date).getDay(),a=t-24*(e-1)*60*60*1e3,s=t+24*(7-e)*60*60*1e3,n=r("YYYY-mm-dd",a),i=r("YYYY-mm-dd",s);return[n,i]},l=function(){var t=(new Date).getFullYear(),e=(new Date).getMonth(),a=new Date(t,e,1).getTime(),s=new Date(t,e+1,0).getTime()+864e5-1,n=r("YYYY-mm-dd",a),i=r("YYYY-mm-dd",s);return[n,i]}},f2e7:function(t,e,a){"use strict";a("56a6")},f576:function(t,e,a){"use strict";var r=a("5ca1"),s=a("2e08"),n=a("a25f"),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);r(r.P+r.F*i,"String",{padStart:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},fab1:function(t,e,a){"use strict";var r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"empty-box"},[e("div",{staticClass:"img-box"},[t.isSearch?e("img",{attrs:{src:a("2235")}}):e("img",{attrs:{src:a("38b8"),alt:""}}),e("p",[t._v(t._s(t.isSearch?"Sorry，木有找到您搜索的内容哦~":"这里空空如也~"))])])])},s=[],n=(a("2397"),a("b0b4")),i=a("d225"),o=a("308d"),c=a("6bb5"),l=a("4e2b"),u=a("bd86"),d=a("9ab4"),v=a("60a3");function f(t,e,a){return e=Object(c["a"])(e),Object(o["a"])(t,p()?Reflect.construct(e,a||[],Object(c["a"])(t).constructor):e.apply(t,a))}function p(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(p=function(){return!!t})()}var b=function(t){function e(){var t;Object(i["a"])(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return t=f(this,e,[].concat(r)),Object(u["a"])(t,"isSearch",void 0),t}return Object(l["a"])(e,t),Object(n["a"])(e)}(v["c"]);Object(d["a"])([Object(v["b"])({default:!1})],b.prototype,"isSearch",void 0),b=Object(d["a"])([Object(v["a"])({name:"Empty"})],b);var m=b,h=m,O=(a("f2e7"),a("2877")),g=Object(O["a"])(h,r,s,!1,null,"680f2fd6",null);e["a"]=g.exports}}]);
//# sourceMappingURL=chunk-66855cac.80229e61.js.map