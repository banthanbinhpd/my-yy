(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aad604d2"],{"280e":function(e,t,n){},"89c2":function(e,t,n){"use strict";var o=n("280e"),a=n.n(o);a.a},a75e:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"createPost-container"},[n("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:e.postForm,rules:e.rules}},[n("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar draft"}},[n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("\n        提交\n      ")])],1),e._v(" "),n("div",{staticClass:"createPost-main-container"},[n("el-row",[n("el-col",{attrs:{span:10}},[n("el-form-item",{attrs:{label:"名称",prop:"name"}},[e._v("\n            "+e._s(e.postForm.name)+"\n          ")])],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:10}},[n("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[n("el-input",{attrs:{placeholder:"user nickName",clearable:""},model:{value:e.postForm.nickname,callback:function(t){e.$set(e.postForm,"nickname",t)},expression:"postForm.nickname"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:10}},[n("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[n("el-input",{attrs:{placeholder:"user phone",clearable:""},model:{value:e.postForm.phone,callback:function(t){e.$set(e.postForm,"phone",t)},expression:"postForm.phone"}})],1)],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"状态"}},[n("el-switch",{attrs:{"on-value":!0,"off-value":!1},model:{value:e.postForm.status,callback:function(t){e.$set(e.postForm,"status",t)},expression:"postForm.status"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"授权"}},[n("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" "),n("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),n("el-checkbox-group",{on:{change:e.handlecheckedRolesChange},model:{value:e.postForm.checkedRoles,callback:function(t){e.$set(e.postForm,"checkedRoles",t)},expression:"postForm.checkedRoles"}},e._l(e.roleOptions,(function(t){return n("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1)],1)],1)],1)},a=[],s=n("b804"),r=n("c24f"),c=n("cc5e"),i={name:"",nickname:"",phone:"",id:void 0,status:!1,checkedRoles:[]},l={name:"UserDetail",components:{Sticky:s["a"]},props:{isEdit:{type:Boolean,default:!1}},data:function(){var e=this,t=function(t,n,o){""===n?(e.$message({message:t.field+"为必传项",type:"error"}),o(new Error(t.field+"为必传项"))):o()};return{postForm:Object.assign({},i),loading:!1,userListOptions:[],isIndeterminate:!0,roleOptions:[],checkAll:!1,rules:{nickname:[{validator:t}]},tempRoute:{}}},computed:{contentShortLength:function(){return this.postForm.content_short.length},lang:function(){return this.$store.getters.language},displayTime:{get:function(){return+new Date(this.postForm.display_time)},set:function(e){this.postForm.display_time=new Date(e)}}},created:function(){if(this.fetchRoleData(),this.isEdit){var e=this.$route.params&&this.$route.params.id;this.fetchData(e)}this.tempRoute=Object.assign({},this.$route)},methods:{fetchRoleData:function(){var e=this;Object(c["c"])().then((function(t){e.roleOptions=t.data})).catch((function(e){console.log(e)}))},handleCheckAllChange:function(e){this.postForm.checkedRoles=e?this.roleOptions:[],this.isIndeterminate=!1},handlecheckedRolesChange:function(e){this.checkedCount=e.length?e.length:0,this.checkAll=this.checkedCount===this.roleOptions.length,this.isIndeterminate=this.checkedCount>0&&this.checkedCount<this.roleOptions.length},fetchData:function(e){var t=this;Object(r["e"])(e).then((function(e){t.postForm=e.data,t.postForm.status=1===e.data.status,null===e.data.CheckedRoles&&(t.postForm.checkedRoles=[])})).catch((function(e){console.log(e)}))},submitForm:function(){var e=this;this.loading=!0,this.$refs.postForm.validate((function(t){if(!t)return e.loading=!1,!1;Object(r["c"])(e.postForm).then((function(){e.loading=!1,e.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:"添加成功",type:"success",duration:2e3})}))}))}}},u=l,h=(n("89c2"),n("2877")),d=Object(h["a"])(u,o,a,!1,null,"57014bff",null);t["default"]=d.exports},cc5e:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u}));var o=n("b775"),a=n("403a");function s(){return Object(o["a"])({url:"",method:"get",baseURL:a["a"]+"/routes"})}function r(){return Object(o["a"])({url:"",method:"get",baseURL:a["a"]+"/role/list"})}function c(e){return Object(o["a"])({url:"",method:"post",data:e,baseURL:a["a"]+"/role/add"})}function i(e,t){return Object(o["a"])({url:"",method:"post",data:t,baseURL:a["a"]+"/role/update"})}function l(e){return Object(o["a"])({url:"",method:"post",data:e,baseURL:a["a"]+"/role/delete"})}function u(){return Object(o["a"])({url:"",method:"get",baseURL:a["a"]+"/role/index"})}}}]);