(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/weixiuxinxi/add-or-update"],{"02eb":function(e,n,t){"use strict";var i=t("2860"),r=t.n(i);r.a},"1a47":function(e,n,t){"use strict";t.r(n);var i=t("b6fa"),r=t("f067");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("02eb");var u,o=t("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"25c2df6f",null,!1,i["a"],u);n["default"]=s.exports},2860:function(e,n,t){},8418:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,i,r,a,u){try{var o=e[a](u),s=o.value}catch(h){return void t(h)}o.done?n(s):Promise.resolve(s).then(i,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var u=e.apply(n,t);function o(e){a(u,i,r,o,s,"next",e)}function s(e){a(u,i,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b960"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{mingcheng:"",shiyanshimingcheng:"",shiyanshihao:"",shebeimingcheng:"",zhanghao:"",xingming:"",tupian:"",weixiuneirong:"",riqi:"",userid:""},zhanghaoOptions:[],zhanghaoIndex:0,user:{},ro:{mingcheng:!1,shiyanshimingcheng:!1,shiyanshihao:!1,shebeimingcheng:!1,zhanghao:!1,xingming:!1,tupian:!1,weixiuneirong:!1,riqi:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=u(i.default.mark((function n(t){var r,a,u,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:return a=n.sent,this.user=a.data,n.next=7,this.$api.option("weixiuyuan","zhanghao",{});case 7:if(a=n.sent,this.zhanghaoOptions=a.data,this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid),!t.id){n.next=17;break}return this.ruleForm.id=t.id,n.next=15,this.$api.info("weixiuxinxi",this.ruleForm.id);case 15:a=n.sent,this.ruleForm=a.data;case 17:if(!t.cross){n.next=64;break}u=e.getStorageSync("crossObj"),n.t0=i.default.keys(u);case 20:if((n.t1=n.t0()).done){n.next=64;break}if(o=n.t1.value,"mingcheng"!=o){n.next=26;break}return this.ruleForm.mingcheng=u[o],this.ro.mingcheng=!0,n.abrupt("continue",20);case 26:if("shiyanshimingcheng"!=o){n.next=30;break}return this.ruleForm.shiyanshimingcheng=u[o],this.ro.shiyanshimingcheng=!0,n.abrupt("continue",20);case 30:if("shiyanshihao"!=o){n.next=34;break}return this.ruleForm.shiyanshihao=u[o],this.ro.shiyanshihao=!0,n.abrupt("continue",20);case 34:if("shebeimingcheng"!=o){n.next=38;break}return this.ruleForm.shebeimingcheng=u[o],this.ro.shebeimingcheng=!0,n.abrupt("continue",20);case 38:if("zhanghao"!=o){n.next=42;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,n.abrupt("continue",20);case 42:if("xingming"!=o){n.next=46;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,n.abrupt("continue",20);case 46:if("tupian"!=o){n.next=50;break}return this.ruleForm.tupian=u[o],this.ro.tupian=!0,n.abrupt("continue",20);case 50:if("weixiuneirong"!=o){n.next=54;break}return this.ruleForm.weixiuneirong=u[o],this.ro.weixiuneirong=!0,n.abrupt("continue",20);case 54:if("riqi"!=o){n.next=58;break}return this.ruleForm.riqi=u[o],this.ro.riqi=!0,n.abrupt("continue",20);case 58:if("userid"!=o){n.next=62;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,n.abrupt("continue",20);case 62:n.next=20;break;case 64:this.styleChange();case 65:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},zhanghaoChange:function(){var e=u(i.default.mark((function e(n){var t;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.zhanghaoIndex=n.target.value,this.ruleForm.zhanghao=this.zhanghaoOptions[this.zhanghaoIndex],e.next=4,this.$api.follow("weixiuyuan","zhanghao",{columnValue:this.ruleForm.zhanghao});case 4:t=e.sent,t.data.xingming&&(this.ruleForm.xingming=t.data.xingming);case 6:case"end":return e.stop()}}),e,this)})));function n(n){return e.apply(this,arguments)}return n}(),riqiChange:function(e){this.ruleForm.riqi=e.target.value,this.$forceUpdate()},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.mingcheng){e.next=3;break}return this.$utils.msg("名称不能为空"),e.abrupt("return");case 3:if(this.ruleForm.userid){e.next=6;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("weixiuxinxi",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("weixiuxinxi",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},"979f":function(e,n,t){"use strict";(function(e){t("90f4"),t("921b");i(t("66fd"));var n=i(t("1a47"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},b6fa:function(e,n,t){"use strict";var i,r=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}))},f067:function(e,n,t){"use strict";t.r(n);var i=t("8418"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a}},[["979f","common/runtime","common/vendor"]]]);