webpackJsonp([4],{"2kfM":function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,"\n.container[data-v-5a877803] {\n  min-height: 100vh;\n  background: #f4f4f4;\n  box-sizing: border-box;\n}\n.info-wrap[data-v-5a877803] {\n  margin: 12px 0;\n  background: #fff;\n  padding: 15px 24px 18px;\n}\n.info-wrap .title[data-v-5a877803] {\n  font-size: 16px;\n  color: #333;\n  font-weight: bold;\n}\n.info-wrap .sub-title[data-v-5a877803] {\n  font-size: 14px;\n  color: #018DEC;\n}\n.info-wrap .info[data-v-5a877803] {\n  margin-top: 10px;\n  padding: 6px 20px 6px 9px;\n  background: #F6F8FA;\n  font-size: 12px;\n  word-break: break-all;\n  line-height: 18px;\n  color: #111111;\n}\n.info-wrap .row[data-v-5a877803] {\n  padding: 3px 0;\n}\n.info-wrap .label[data-v-5a877803] {\n  color: #666;\n}\n.tabs-wrap[data-v-5a877803] {\n  padding: 6px 0 12px;\n  background: #fff;\n}\n.tabs-wrap .tabs[data-v-5a877803] {\n  width: 80%;\n}\n.tabs-wrap .tabs .vux-tab-item[data-v-5a877803] {\n  font-size: 16px;\n  background: none;\n}\n.status[data-v-5a877803] {\n  margin-left: 5px;\n  color: #D65F7B;\n}\n",""])},Biyi:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,"\n.max-w[data-v-7193cb3c] {\n  max-width: 5em;\n}\n.vote-item[data-v-7193cb3c] {\n  padding: 18px 18px 18px 10px;\n  line-height: 20px;\n  font-size: 16px;\n  color: #333;\n  line-height: 1;\n}\n.vote-item .font-bold[data-v-7193cb3c] {\n  font-weight: bold;\n}\n.vote-item .vote-item-num[data-v-7193cb3c] {\n  font-size: 10px;\n  color: #666666;\n  margin-top: 4px;\n}\n.vote-item .color-active[data-v-7193cb3c] {\n  color: #FFA200;\n}\n",""])},FAWe:function(t,a,e){var n=e("Biyi");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("615eff42",n,!0,{})},NZIG:function(t,a,e){var n=e("eaU0");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("7785c2fb",n,!0,{})},e5GM:function(t,a,e){"use strict";function n(t){e("FAWe")}function i(t){e("NZIG")}function s(t){e("vrLO")}Object.defineProperty(a,"__esModule",{value:!0});var o=e("Gu7T"),c=e.n(o),l=e("ABCa"),r=e("odqc"),d=e("Znkm"),v=e("vtEK"),p=e("4FCr"),f={props:{list:{default:null}}},u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"table-wrapper detail-table"},[e("ul",{staticClass:"table-body vux-1px"},t._l(t.list,function(a,n){return e("li",{key:"vote"+n,staticClass:"vux-1px-b row flex-between vote-item"},[e("div",{staticClass:"flex-item"},[e("div",{staticClass:"font-bold text-ellipsis"},[t._v(t._s(a.OptName))]),t._v(" "),e("div",{staticClass:"vote-item-num"},[t._v(t._s(a.OptVotes)+"票")])]),t._v(" "),e("div",{staticClass:"text-normal font-bold ml",class:{"color-active":0===n}},[t._v("NO."+t._s(n+1))])])}),0)])])},h=[],b={render:u,staticRenderFns:h},_=b,x=e("VU/8"),m=n,g=x(f,_,!1,m,"data-v-7193cb3c",null),w=g.exports,C=e("0sqe"),k=(C.a,{props:{list:{default:null}},components:{Popover:C.a}}),y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table-wrapper detail-table"},[t._m(0),t._v(" "),e("ul",{staticClass:"table-body vux-1px"},t._l(t.list,function(a,n){return e("li",{key:"back"+n,staticClass:"vux-1px-b row"},[e("div",{staticClass:"td theme-color text-c"},[e("popover",{attrs:{placement:"top"}},[e("div",{staticClass:"popover-content",attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.account))]),t._v(" "),e("div",{staticClass:"text-ellipsis"},[t._v(t._s(a.account))])])],1),t._v(" "),e("div",{staticClass:"td max-w text-c"},[t._v(t._s(a.amount))]),t._v(" "),e("div",{staticClass:"td max-w text-c"},[t._v(t._s(a.createTime))])])}),0)])},F=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table-header vux-1px"},[e("div",{staticClass:"th text-c"},[t._v("钱包地址")]),t._v(" "),e("div",{staticClass:"th max-w text-c"},[t._v("投票数")]),t._v(" "),e("div",{staticClass:"th max-w text-c"},[t._v("时间")])])}],A={render:y,staticRenderFns:F},I=A,L=e("VU/8"),D=i,j=L(k,I,!1,D,"data-v-36e7c7e0",null),M=j.exports,E=e("5euc"),O=e("VuIw"),N=e("gyMJ"),z=(l.a,r.a,d.a,v.a,E.a,p.a,{data:function(){return{id:this.$route.params.id,stickyTop:O.a.get()?0:46,info:"",code:"",tabActive:"result",list:[],page:1,noData:!0,loading:!1,resultList:[]}},computed:{Radio:function(){return this.info.Questions[0].Radio},status:function(){var t="";switch(this.info.Status){case"0":t="未开始";break;case"1":t="进行中";break;case"2":t="已结束";break;case"3":t="项目创建中";break;default:t=""}return t}},created:function(){this.getInfo()},methods:{changeItem:function(t){this.tabActive=t,"record"!==t||this.list.length||this.getList(),"code"!==t||this.code||this.getCode()},getInfo:function(){var t=this;this.loading||(this.loading=!0,Object(N.q)({voteId:this.id}).then(function(a){t.info=a.data,t.resultList=a.data.Questions[0].Result}).finally(function(){t.loading=!1}))},getList:function(){var t=this;this.loading||(this.loading=!0,Object(N.n)({voteId:this.id,page:this.page,number:20}).then(function(a){t.setList(a)}).finally(function(){t.loading=!1}))},setList:function(t){var a=t.data;if(this.page<=1)this.list=a;else{var e;(e=this.list).push.apply(e,c()(a))}this.noData=a.length<20,this.loading=!1},loadMore:function(){this.noData=!0,this.page+=1,this.getList()},getCode:function(){var t=this;Object(N.p)({voteId:this.id}).then(function(a){t.code=a.data})}},components:{XHeader:l.a,Tab:r.a,TabItem:d.a,resultList:w,recordList:M,Sticky:v.a,AppCode:E.a,LoadMore:p.a}}),R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("x-header",{staticClass:"vux-1px-b",attrs:{"left-options":{backText:""},"right-options":{showMore:!1}}},[t._v("浏览器")]),t._v(" "),t.info?e("div",{staticClass:"info-wrap"},[e("h2",{staticClass:"title"},[t._v(t._s(t.info.VoteName))]),t._v(" "),e("div",{staticClass:"sub-title"},[t._v(t._s("1"===t.Radio?"[单选]":"[多选]"))]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"row"},[e("span",{staticClass:"label"},[t._v("创建者：")]),t._v("\n        "+t._s(t.info.CreateAccount)+"\n      ")]),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"label"},[t._v("创建时间：")]),t._v("\n        "+t._s(t.$dateFormat(t.info.CreateDate))+"\n      ")]),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"label"},[t._v("有效时间：")]),t._v("\n        "+t._s(t.info.BeginDate)+" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.info.EndDate,expression:"info.EndDate"}]},[t._v("至")]),t._v(" "+t._s(t.info.EndDate||"")+" "),e("span",{staticClass:"status"},[t._v(t._s(t.status))])])])]):t._e(),t._v(" "),e("sticky",{attrs:{offset:t.stickyTop}},[e("div",{staticClass:"tabs-wrap"},[e("tab",{staticClass:"tabs",attrs:{"line-width":2,"custom-bar-width":"4.5em","default-color":"#666"}},[e("tab-item",{attrs:{selected:""},on:{"on-item-click":function(a){return t.changeItem("result")}}},[t._v("结果")]),t._v(" "),e("tab-item",{on:{"on-item-click":function(a){return t.changeItem("record")}}},[t._v("记录")]),t._v(" "),e("tab-item",{on:{"on-item-click":function(a){return t.changeItem("code")}}},[t._v("代码")])],1)],1)]),t._v(" "),e("div",{staticClass:"vux-sticky-fill",staticStyle:{height:"52px"}}),t._v(" "),"result"===t.tabActive?e("result-list",{attrs:{list:t.resultList}}):t._e(),t._v(" "),e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":"noData","infinite-scroll-distance":"20"}},["record"===t.tabActive?e("record-list",{attrs:{list:t.list}}):t._e()],1),t._v(" "),"code"===t.tabActive?e("app-code",{attrs:{info:t.code}}):t._e(),t._v(" "),e("load-more",{directives:[{name:"show",rawName:"v-show",value:"code"!==t.tabActive,expression:"tabActive !== 'code'"}],attrs:{tip:t.loading?"":t.noData?"暂无更多数据":"上拉加载更多","show-loading":t.loading}})],1)},T=[],V={render:R,staticRenderFns:T},Z=V,$=e("VU/8"),B=s,U=$(z,Z,!1,B,"data-v-5a877803",null);a.default=U.exports},eaU0:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,"\n.max-w[data-v-36e7c7e0] {\n  max-width: 5em;\n}\n",""])},vrLO:function(t,a,e){var n=e("2kfM");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("86a5be84",n,!0,{})}});