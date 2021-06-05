(this.webpackJsonpmain_app_ui=this.webpackJsonpmain_app_ui||[]).push([[0],{355:function(e,t,n){},686:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),o=n.n(r),i=(n(355),n(54)),s=n(26),l=n(154),j=n(714),u=n(3),b=Object(j.a)((function(e){return{root:{fontFamily:'"Pacifico"',margin:e.spacing(3,0,2),textAlign:"center",fontSize:"40px",color:"deeppink",textShadow:"1px 1px darkmagenta"}}})),h=function(){var e=b();return Object(u.jsx)(l.a,{className:e.root,component:"h1",variant:"h5",children:"Flawless and beautiful header"})},d=n(19),m=n(68),O=n(716),p=Object(j.a)((function(e){return{root:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"}}})),f=function(e){var t=e.children,n=Object(m.a)(e,["children"]),a=p();return Object(u.jsx)(O.a,Object(d.a)(Object(d.a)({className:a.root,container:"main",maxWidth:"xs"},n),{},{children:t}))},x=Object(j.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(1)}}})),g=function(e){var t=e.children,n=Object(m.a)(e,["children"]),a=x();return Object(u.jsx)("form",Object(d.a)(Object(d.a)({className:a.root,noValidate:!0},n),{},{children:t}))},v=n(731),N=Object(a.forwardRef)((function(e,t){return Object(u.jsx)(v.a,Object(d.a)({variant:"outlined",margin:"normal",inputRef:t,fullWidth:!0},e))})),S=n(41),y=n(718),k=Object(j.a)((function(e){return{root:{margin:e.spacing(3,0,2)}}})),F=function(e){var t=e.children,n=Object(m.a)(e,["children"]),a=k();return Object(u.jsx)(y.a,Object(d.a)(Object(d.a)({className:a.root,type:"sumbit",fullWidth:!0,variant:"contained",color:"primary"},n),{},{children:t}))},T=n(80),w=n(152),C=n(25),P=Object(a.createContext)(),E=function(e){var t=e.children,n=Object(a.useState)({}),c=Object(C.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)(P.Provider,{value:{data:r,setValues:function(e){o((function(t){return Object(d.a)(Object(d.a)({},t),e)}))}},children:t})},B=function(){return Object(a.useContext)(P)},q=T.a().shape({firstName:T.b().matches(/^([^0-9]*)$/,"First name should not contain numbers").required("First name is required"),lastName:T.b().matches(/^([^0-9]*)$/,"Last name should not contain numbers").required("Last name is required")}),D=function(){var e,t,n=Object(s.f)(),a=B(),c=a.data,r=a.setValues,o=Object(S.e)({defaultValues:{firstName:c.firstName,lastName:c.lastName},mode:"onBlur",resolver:Object(w.a)(q)}),i=o.register,j=o.handleSubmit,b=o.formState.errors;return Object(u.jsxs)(f,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Step one\ud83d\udd25"}),Object(u.jsxs)(g,{onSubmit:j((function(e){console.log(e),console.log(b.name),n.push("/step2"),r(e)})),children:[Object(u.jsx)(N,Object(d.a)(Object(d.a)({},i("firstName",{required:!0,maxLength:30})),{},{id:"firstName",type:"text",label:"First Name",error:!!b.firstName,helperText:null===b||void 0===b||null===(e=b.firstName)||void 0===e?void 0:e.message})),Object(u.jsx)(N,Object(d.a)(Object(d.a)({},i("lastName",{required:!0,maxLength:30})),{},{id:"lastName",type:"text",label:"Last Name",error:!!b.lastName,helperText:null===b||void 0===b||null===(t=b.lastName)||void 0===t?void 0:t.message})),Object(u.jsx)(F,{children:"Next step"})]})]})},V=n(732),L=T.a().shape({email:T.b().email("Email should have correct format").required("This is required")}),A=function(){var e,t=Object(s.f)(),n=B(),a=n.data,c=n.setValues,r=Object(S.e)({defaultValues:{email:a.email,hasPhone:a.hasPhone,phoneNumber:a.phoneNumber},mode:"onBlur",resolver:Object(w.a)(L)}),o=r.register,i=r.handleSubmit,j=r.formState.errors,b=(0,r.watch)("hasPhone",!1);return Object(u.jsxs)(f,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Step two\ud83d\udc17"}),Object(u.jsxs)(g,{onSubmit:i((function(e){console.log(e),console.log(b),t.push("/step3"),c(e)})),children:[Object(u.jsx)(N,Object(d.a)(Object(d.a)({},o("email",{required:!0})),{},{id:"email",type:"email",label:"Email",name:"email",error:!!j.email,helperText:null===j||void 0===j||null===(e=j.email)||void 0===e?void 0:e.message,required:!0})),Object(u.jsx)("input",Object(d.a)({type:"checkbox",color:"primary"},o("hasPhone"))),"Do you have a phone?",b&&Object(u.jsx)(N,Object(d.a)(Object(d.a)({name:"phoneNumber"},o("phoneNumber")),{},{id:"phoneNumber",type:"tel",label:"Phone number",onChange:function(e){e.target.value=function(e){var t=Object(V.a)(e);return t?t.formatInternational():e}(e.target.value)}})),Object(u.jsx)(F,{children:"Next"})]})]})},I=n(23),J=n.n(I),R=n(38),W=n(333),z=n(149),_=n(719),G=n(720),$=n(721),H=n(722),M=n(140),U=n.n(M),X=Object(j.a)((function(e){return{root:{backgroundColor:"#eee",textAlign:"center",cursor:"pointer",color:"#333",padding:"10px",marginTop:"20px"},icon:{marginTop:"16px",color:"#888",fontSize:"42px"}}})),Y=function(e){var t=e.control,n=e.name,c=X(),r=Object(a.useState)([]),o=Object(C.a)(r,2),i=o[0];o[1],Object(a.useEffect)((function(){console.log(i)}),[i]);return Object(u.jsx)(S.a,{control:t,name:n,defaultValue:[],render:function(e){e.onChange,e.onDrop;var t=e.onBlur,a=e.value;Object(m.a)(e,["onChange","onDrop","onBlur","value"]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(W.a,{onDrop:function(){var e=Object(R.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),a=t,console.log(a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){var a=e.getRootProps,r=e.getInputProps;return Object(u.jsxs)("div",Object(d.a)(Object(d.a)({className:c.root,variant:"outlined"},a()),{},{children:[Object(u.jsx)(_.a,{className:c.icon}),Object(u.jsx)("input",Object(d.a)(Object(d.a)({id:"field"},r()),{},{name:n,onBlur:t})),Object(u.jsx)("p",{children:"Drop files here, or click to select files"})]}))}}),Object(u.jsx)(U.a,{children:Object(u.jsxs)(z.a,{children:[Object(u.jsx)("p",{children:"test check"}),a&&a.map((function(e,t){return Object(u.jsxs)(z.b,{children:[Object(u.jsx)("p",{children:"test check"}),Object(u.jsx)(G.a,{children:Object(u.jsx)($.a,{})}),Object(u.jsx)(H.a,{primary:e.name,secondary:e.size})]},t)}))]})})]})}})},K=function(){var e=Object(s.f)(),t=B(),n=t.data,a=t.setValues,c=Object(S.e)({defaultValues:{files:n.files}}),r=c.control,o=c.handleSubmit;return Object(u.jsxs)(f,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Step three\ud83e\udd14"}),Object(u.jsxs)(g,{onSubmit:o((function(t){console.log(t),e.push("/result"),a(t)})),children:[Object(u.jsx)(Y,{name:"files",control:r}),Object(u.jsx)(F,{children:"Next"})]})]})},Q=n(723),Z=n(724),ee=n(726),te=n(717),ne=n(730),ae=n(728),ce=n(727),re=n(729),oe=n(725),ie=n(331),se=n.n(ie),le=(n(646),n(150)),je=n.n(le),ue=(n(665),Object(j.a)((function(e){return{root:{marginBottom:"30px"},table:{marginBottom:"30px"}}})));function be(e){if(!document.cookie)return null;var t=document.cookie.split(";").map((function(e){return e.trim()})).filter((function(t){return t.startsWith(e+"=")}));return 0===t.length?null:decodeURIComponent(t[0].split("=")[1])}var he=function(){var e=Object(a.useState)(!1),t=Object(C.a)(e,2),n=(t[0],t[1],Object(a.useState)([])),c=Object(C.a)(n,2),r=c[0],o=c[1],s=B().data,j=Object.entries(s).filter((function(e){return"files"!==e[0]})),b=s.files,h=ue();Object(a.useEffect)((function(){je()({method:"GET",url:"http://127.0.0.1:8000/api/card/"}).then((function(e){o(e.data)}))}),[]);var d=function(){var e=Object(R.a)(J.a.mark((function e(){var t,n,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new FormData,s.files&&s.files.forEach((function(e){t.append("files",e,e.name)})),j.forEach((function(e){"phoneNumber"===e[0]?t.append(e[0],e[1].replace(/\s/g,"")):t.append(e[0],e[1])})),n={},t.forEach((function(e,t){return n[t]=e})),JSON.stringify(n),a=be("csrftoken"),console.log(a),{firstName:"Daddy",lastName:"shatilov",email:"meme@corp.ru",hasPhone:!0,phoneNumber:"+79123541268"},console.log("formData"),console.log(JSON.stringify(Object.fromEntries(t))),e.next=13,fetch("http://127.0.0.1:8000/api/card/",{method:"POST",body:JSON.stringify(Object.fromEntries(t)),headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRFToken":a}}).then((function(e){console.log(e.status),200==e.status&&se.a.fire("Great job!","You've passed all data","success"),console.log(e.json())}));case 13:e.sent;case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(f,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Form data \ud83d\udc96"}),Object(u.jsx)("ul",{children:r&&r.map((function(e){return Object(u.jsxs)("li",{children:[e.firstName,"--",e.email]},e.id)}))}),Object(u.jsxs)(Q.a,{children:[Object(u.jsx)(Z.a,{className:h.root,component:"div",children:Object(u.jsxs)(oe.a,{className:h.table,children:[Object(u.jsx)(ee.a,{children:Object(u.jsxs)(ce.a,{children:[Object(u.jsx)(ae.a,{children:"Field"}),Object(u.jsx)(ae.a,{align:"right",children:"Value"})]})}),Object(u.jsx)(re.a,{children:j.map((function(e){var t;return Object(u.jsxs)(ce.a,{children:[Object(u.jsx)(ae.a,{children:e[0]}),Object(u.jsx)(ae.a,{align:"right",children:null===(t=e[1])||void 0===t?void 0:t.toString()})]},e[0])}))})]})}),b&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Files \ud83d\udc27"}),Object(u.jsx)(te.a,{children:b.map((function(e,t){return Object(u.jsxs)(ne.a,{children:[Object(u.jsx)(G.a,{children:Object(u.jsx)($.a,{})}),Object(u.jsx)(H.a,{primary:e.name,secondary:e.size})]},t)}))})]})]}),Object(u.jsx)(F,{onClick:d,children:"Submit"}),Object(u.jsx)(i.b,{to:"/step1",children:"To the start"}),Object(u.jsx)(i.b,{to:"/",children:"Home"})]})},de=n(332),me=n.n(de)()((function(e){return{root:{marginBottom:"30px",textAlign:"center",width:"auto",minWidth:0},table:{marginBottom:"30px"},head:{backgroundColor:"orange",color:"white"}}})),Oe=function(){var e=Object(s.f)(),t=Object(a.useState)([]),n=Object(C.a)(t,2),c=n[0],r=n[1],o=me();Object(a.useEffect)((function(){je()({method:"GET",url:"http://127.0.0.1:8000/api/card/"}).then((function(e){var t;console.log("check response"),console.log(e),console.log(e.data),r(null!==(t=e.data)&&void 0!==t?t:[])}))}),[]);return Object(u.jsxs)(f,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"All user cards \ud83e\udd73\ud83c\udf83"}),Object(u.jsx)(Q.a,{className:o.root,children:Object(u.jsx)(Z.a,{className:o.root,component:"div",children:Object(u.jsxs)(oe.a,{className:o.table,children:[Object(u.jsx)(ee.a,{children:Object(u.jsxs)(ce.a,{children:[Object(u.jsx)(ae.a,{children:"Name"}),Object(u.jsx)(ae.a,{align:"right",children:"Last Name"}),Object(u.jsx)(ae.a,{children:"E-mail"}),Object(u.jsx)(ae.a,{children:"Phone"})]})}),Object(u.jsx)(re.a,{children:c.map((function(e){var t;return Object(u.jsxs)(ce.a,{children:[Object(u.jsx)(ae.a,{children:e.firstName}),Object(u.jsx)(ae.a,{children:e.lastName}),Object(u.jsx)(ae.a,{children:Object(u.jsx)("a",{href:"mailto:".concat(e.email),children:e.email})}),Object(u.jsx)(ae.a,{align:"right",children:Object(u.jsx)("a",{href:"tel:{p.phoneNumber?.toString()}",className:"Phonny",children:null===(t=e.phoneNumber)||void 0===t?void 0:t.toString()})})]},e.id)}))})]})})}),Object(u.jsx)(g,{onClick:function(){e.push("/step1")},children:Object(u.jsx)(F,{children:"Add user card"})})]})};var pe=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(i.a,{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/",component:Oe}),Object(u.jsx)(s.a,{path:"/step1",component:D}),Object(u.jsx)(s.a,{path:"/step2",component:A}),Object(u.jsx)(s.a,{path:"/step3",component:K}),Object(u.jsx)(s.a,{path:"/result",component:he})]})})]})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,733)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(E,{children:Object(u.jsx)(pe,{})})}),document.getElementById("root")),fe()}},[[686,1,2]]]);
//# sourceMappingURL=main.51152a93.chunk.js.map