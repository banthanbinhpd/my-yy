(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb87abd6","chunk-79f99de0"],{3399:function(e,t,o){},"94ae":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"createPost-container"},[o("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:e.postForm,rules:e.rules}},[o("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar draft"}},[o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("\n        提交\n      ")])],1),e._v(" "),o("div",{staticClass:"createPost-main-container"},[o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"名称",prop:"name"}},[o("el-input",{attrs:{placeholder:"user Name",clearable:""},model:{value:e.postForm.name,callback:function(t){e.$set(e.postForm,"name",t)},expression:"postForm.name"}})],1)],1)],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[o("el-input",{attrs:{placeholder:"user nickName",clearable:""},model:{value:e.postForm.nickname,callback:function(t){e.$set(e.postForm,"nickname",t)},expression:"postForm.nickname"}})],1)],1)],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[o("el-input",{attrs:{placeholder:"user phone",clearable:""},model:{value:e.postForm.phone,callback:function(t){e.$set(e.postForm,"phone",t)},expression:"postForm.phone"}})],1)],1)],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"密码",prop:"password"}},[o("el-input",{attrs:{type:"password",clearable:""},model:{value:e.postForm.password,callback:function(t){e.$set(e.postForm,"password",t)},expression:"postForm.password"}})],1)],1)],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"确认密码",prop:"repassword"}},[o("el-input",{attrs:{type:"password",clearable:""},model:{value:e.postForm.repassword,callback:function(t){e.$set(e.postForm,"repassword",t)},expression:"postForm.repassword"}})],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"状态"}},[o("el-switch",{attrs:{"on-value":!0,"off-value":!1},model:{value:e.postForm.status,callback:function(t){e.$set(e.postForm,"status",t)},expression:"postForm.status"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"授权"}},[o("el-checkbox",{attrs:{indeterminate:e.postForm.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.postForm.checkAll,callback:function(t){e.$set(e.postForm,"checkAll",t)},expression:"postForm.checkAll"}},[e._v("全选")]),e._v(" "),o("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),o("el-checkbox-group",{on:{change:e.handlecheckedRolesChange},model:{value:e.postForm.checkedRoles,callback:function(t){e.$set(e.postForm,"checkedRoles",t)},expression:"postForm.checkedRoles"}},e._l(e.roleOptions,(function(t){return o("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1)],1)],1)],1)},a=[],r=o("b804"),n=o("c24f"),l=o("cc5e"),c={name:"",nickname:"",password:"",phone:"",id:void 0,status:!0,checkAll:!1,checkedRoles:[],isIndeterminate:!0},i={name:"UserDetail",components:{Sticky:r["a"]},props:{isEdit:{type:Boolean,default:!1}},data:function(){var e=this,t=function(t,o,s){""===o?(e.$message({message:t.field+"为必填项",type:"error"}),s(new Error(t.field+"为必填项"))):s()},o=function(t,o,s){""===o?s(new Error("请再次输入密码")):o!==e.postForm.password?s(new Error("两次输入密码不一致!")):s()};return{postForm:Object.assign({},c),loading:!1,userListOptions:[],roleOptions:[],rules:{name:[{validator:t}],nickname:[{validator:t}],password:[{validator:t}],repassword:[{validator:o}]},tempRoute:{}}},computed:{lang:function(){return this.$store.getters.language}},created:function(){this.fetchRoleData(),this.tempRoute=Object.assign({},this.$route)},methods:{fetchRoleData:function(){var e=this;Object(l["c"])().then((function(t){e.roleOptions=t.data})).catch((function(e){console.log(e)}))},handleCheckAllChange:function(e){this.postForm.checkedRoles=e?this.roleOptions:[],this.postForm.isIndeterminate=!1},handlecheckedRolesChange:function(e){this.checkedCount=e.length,this.postForm.checkAll=this.checkedCount===this.roleOptions.length,this.postForm.isIndeterminate=this.checkedCount>0&&this.checkedCount<this.roleOptions.length},submitForm:function(){var e=this;this.loading=!0,this.$refs.postForm.validate((function(t){if(!t)return e.loading=!1,!1;Object(n["a"])(e.postForm).then((function(){e.loading=!1,e.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:"添加成功",type:"success",duration:2e3})}))}))}}},u=i,p=(o("b84c"),o("2877")),d=Object(p["a"])(u,s,a,!1,null,"1adcd591",null);t["default"]=d.exports},b84c:function(e,t,o){"use strict";var s=o("3399"),a=o.n(s);a.a},cc5e:function(e,t,o){"use strict";o.d(t,"e",(function(){return r})),o.d(t,"d",(function(){return n})),o.d(t,"a",(function(){return l})),o.d(t,"f",(function(){return c})),o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return u}));var s=o("b775"),a=o("403a");function r(){return Object(s["a"])({url:"",method:"get",baseURL:a["a"]+"/routes"})}function n(){return Object(s["a"])({url:"",method:"get",baseURL:a["a"]+"/role/list"})}function l(e){return Object(s["a"])({url:"",method:"post",data:e,baseURL:a["a"]+"/role/add"})}function c(e,t){return Object(s["a"])({url:"",method:"post",data:t,baseURL:a["a"]+"/role/update"})}function i(e){return Object(s["a"])({url:"",method:"post",data:e,baseURL:a["a"]+"/role/delete"})}function u(){return Object(s["a"])({url:"",method:"get",baseURL:a["a"]+"/role/index"})}},dc34:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("user-detail",{attrs:{"is-edit":!1}})},a=[],r=o("94ae"),n={name:"CreateArticle",components:{UserDetail:r["default"]}},l=n,c=o("2877"),i=Object(c["a"])(l,s,a,!1,null,null,null);t["default"]=i.exports}}]);