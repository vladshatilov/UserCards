(this.webpackJsonpmain_app_ui=this.webpackJsonpmain_app_ui||[]).push([[0],{321:function(e,t,n){},634:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),i=(n(321),n(69)),s=n(25),l=n(137),j=n(674),u=n(8),b=Object(j.a)((function(e){return{root:{fontFamily:'"Pacifico"',margin:e.spacing(3,0,2),textAlign:"center",fontSize:"40px",color:"deeppink",textShadow:"1px 1px darkmagenta"}}})),d=function(){var e=b();return Object(u.jsx)(l.a,{className:e.root,component:"h1",variant:"h5",children:"Flawless register form"})},h=n(18),m=n(61),O=n(678),p=Object(j.a)((function(e){return{root:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"}}})),x=function(e){var t=e.children,n=Object(m.a)(e,["children"]),a=p();return Object(u.jsx)(O.a,Object(h.a)(Object(h.a)({className:a.root,container:"main",maxWidth:"xs"},n),{},{children:t}))},f=Object(j.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(1)}}})),g=function(e){var t=e.children,n=Object(m.a)(e,["children"]),a=f();return Object(u.jsx)("form",Object(h.a)(Object(h.a)({className:a.root,noValidate:!0},n),{},{children:t}))},v=n(693),N=Object(a.forwardRef)((function(e,t){return Object(u.jsx)(v.a,Object(h.a)({variant:"outlined",margin:"normal",inputRef:t,fullWidth:!0},e))})),y=n(39),S=n(680),F=Object(j.a)((function(e){return{root:{margin:e.spacing(3,0,2)}}})),k=function(e){var t=e.children,n=Object(m.a)(e,["children"]),a=F();return Object(u.jsx)(S.a,Object(h.a)(Object(h.a)({className:a.root,type:"sumbit",fullWidth:!0,variant:"contained",color:"primary"},n),{},{children:t}))},T=n(73),P=n(135),C=n(29),w=Object(a.createContext)(),q=function(e){var t=e.children,n=Object(a.useState)({}),r=Object(C.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)(w.Provider,{value:{data:c,setValues:function(e){o((function(t){return Object(h.a)(Object(h.a)({},t),e)}))}},children:t})},D=function(){return Object(a.useContext)(w)},V=T.a().shape({firstName:T.b().matches(/^([^0-9]*)$/,"First name should not contain numbers").required("First name is required"),lastName:T.b().matches(/^([^0-9]*)$/,"Last name should not contain numbers").required("Last name is required")}),B=function(){var e,t,n=Object(s.f)(),a=D(),r=a.data,c=a.setValues,o=Object(y.e)({defaultValues:{firstName:r.firstName,lastName:r.lastName},mode:"onBlur",resolver:Object(P.a)(V)}),i=o.register,j=o.handleSubmit,b=o.formState.errors;return Object(u.jsxs)(x,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Step one\ud83d\udd25"}),Object(u.jsxs)(g,{onSubmit:j((function(e){console.log(e),console.log(b.name),n.push("/step2"),c(e)})),children:[Object(u.jsx)(N,Object(h.a)(Object(h.a)({},i("firstName",{required:!0,maxLength:30})),{},{id:"firstName",type:"text",label:"First Name",error:!!b.firstName,helperText:null===b||void 0===b||null===(e=b.firstName)||void 0===e?void 0:e.message})),Object(u.jsx)(N,Object(h.a)(Object(h.a)({},i("lastName",{required:!0,maxLength:30})),{},{id:"lastName",type:"text",label:"Last Name",error:!!b.lastName,helperText:null===b||void 0===b||null===(t=b.lastName)||void 0===t?void 0:t.message})),Object(u.jsx)(k,{children:"Next step"})]})]})},L=n(694),I=T.a().shape({email:T.b().email("Email should have correct format").required("This is required")}),J=function(){var e,t=Object(s.f)(),n=D(),a=n.data,r=n.setValues,c=Object(y.e)({defaultValues:{email:a.email,testPhone:a.testPhone,phoneNumber:a.phoneNumber},mode:"onBlur",resolver:Object(P.a)(I)}),o=c.register,i=c.handleSubmit,j=c.formState.errors,b=c.watch,d=b("hasPhone",!1),m=b("testPhone");return Object(u.jsxs)(x,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Step two\ud83d\udc17"}),Object(u.jsxs)(g,{onSubmit:i((function(e){console.log(e),console.log(d),t.push("/step3"),r(e)})),children:[Object(u.jsx)(N,Object(h.a)(Object(h.a)({},o("email",{required:!0})),{},{id:"email",type:"email",label:"Email",name:"email",error:!!j.email,helperText:null===j||void 0===j||null===(e=j.email)||void 0===e?void 0:e.message,required:!0})),Object(u.jsx)("input",Object(h.a)({type:"checkbox",color:"primary"},o("testPhone"))),"Do you have a phone?",m&&Object(u.jsx)(N,Object(h.a)(Object(h.a)({name:"phoneNumber"},o("phoneNumber")),{},{id:"phoneNumber",type:"tel",label:"Phone number",onChange:function(e){e.target.value=function(e){var t=Object(L.a)(e);return t?t.formatInternational():e}(e.target.value)}})),Object(u.jsx)(k,{children:"Next"})]})]})},E=n(307),R=n(133),_=n(681),z=n(682),W=n(683),A=n(684),G=n(125),$=n.n(G),M=Object(j.a)((function(e){return{root:{backgroundColor:"#eee",textAlign:"center",cursor:"pointer",color:"#333",padding:"10px",marginTop:"20px"},icon:{marginTop:"16px",color:"#888",fontSize:"42px"}}})),U=function(e){var t=e.control,n=e.name,a=M();return Object(u.jsx)(y.a,{control:t,name:n,defaultValue:[],render:function(e){var t=e.onChange,r=(e.onDrop,e.onBlur),c=e.value;Object(m.a)(e,["onChange","onDrop","onBlur","value"]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(E.a,{onDrop:t,children:function(e){var t=e.getRootProps,c=e.getInputProps;return Object(u.jsxs)("div",Object(h.a)(Object(h.a)({className:a.root,variant:"outlined"},t()),{},{children:[Object(u.jsx)(_.a,{className:a.icon}),Object(u.jsx)("input",Object(h.a)(Object(h.a)({id:"field"},c()),{},{name:n,onBlur:r})),Object(u.jsx)("p",{children:"Drop files here, or click to select files"})]}))}}),Object(u.jsx)($.a,{children:Object(u.jsxs)(R.a,{children:[Object(u.jsx)("p",{children:"test check"}),c&&c.map((function(e,t){return Object(u.jsxs)(R.b,{children:[Object(u.jsx)("p",{children:"test check"}),Object(u.jsx)(z.a,{children:Object(u.jsx)(W.a,{})}),Object(u.jsx)(A.a,{primary:e.name,secondary:e.size})]},t)}))]})})]})}})},X=function(){var e=Object(s.f)(),t=D(),n=t.data,a=t.setValues,r=Object(y.e)({defaultValues:{files:n.files}}),c=r.control,o=r.handleSubmit;return Object(u.jsxs)(x,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Step three\ud83e\udd14"}),Object(u.jsxs)(g,{onSubmit:o((function(t){console.log(t),e.push("/result"),a(t)})),children:[Object(u.jsx)(U,{name:"files",control:c}),Object(u.jsx)(k,{children:"Next"})]})]})},Y=n(24),H=n.n(Y),K=n(42),Q=n(685),Z=n(686),ee=n(688),te=n(679),ne=n(692),ae=n(690),re=n(689),ce=n(691),oe=n(687),ie=n(305),se=n.n(ie),le=(n(614),n(306)),je=n.n(le),ue=(n(633),Object(j.a)((function(e){return{root:{marginBottom:"30px"},table:{marginBottom:"30px"}}})));function be(e){if(!document.cookie)return null;var t=document.cookie.split(";").map((function(e){return e.trim()})).filter((function(t){return t.startsWith(e+"=")}));return 0===t.length?null:decodeURIComponent(t[0].split("=")[1])}var de=function(){var e=Object(a.useState)(!1),t=Object(C.a)(e,2),n=(t[0],t[1]),r=D().data,c=Object.entries(r).filter((function(e){return"files"!==e[0]})),o=r.files,s=ue();Object(a.useEffect)((function(){je()({method:"GET",url:"http://127.0.0.1:8000/api/card"}).then((function(e){console.log("response",e.data),console.log("response",e.cookies)}))}));var j=function(){var e=Object(K.a)(H.a.mark((function e(){var t,a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new FormData,se.a.fire("Great job!","You've passed all data!","success"),n(!0),a=be("csrftoken"),console.log(a),r={firstName:"Daddy",lastName:"shatilov",email:"meme@corp.ru",hasPhone:!0,phoneNumber:"+79123541268"},console.log("JSON"),console.log(JSON.stringify(c)),console.log("try_post"),console.log(JSON.stringify(r)),console.log("formData"),console.log(t),e.next=14,fetch("http://127.0.0.1:8000/api/card/",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRFToken":a}}).then((function(e){console.log(e.status),console.log(e.json())}));case 14:e.sent;case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(x,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Form data \ud83d\udc96"}),Object(u.jsxs)(Q.a,{children:[Object(u.jsx)(Z.a,{className:s.root,component:"div",children:Object(u.jsxs)(oe.a,{className:s.table,children:[Object(u.jsx)(ee.a,{children:Object(u.jsxs)(re.a,{children:[Object(u.jsx)(ae.a,{children:"Field"}),Object(u.jsx)(ae.a,{align:"right",children:"Value"})]})}),Object(u.jsx)(ce.a,{children:c.map((function(e){var t;return Object(u.jsxs)(re.a,{children:[Object(u.jsx)(ae.a,{children:e[0]}),Object(u.jsx)(ae.a,{align:"right",children:null===(t=e[1])||void 0===t?void 0:t.toString()})]},e[0])}))})]})}),o&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Files \ud83d\udc27"}),Object(u.jsx)(te.a,{children:o.map((function(e,t){return Object(u.jsxs)(ne.a,{children:[Object(u.jsx)(z.a,{children:Object(u.jsx)(W.a,{})}),Object(u.jsx)(A.a,{primary:e.name,secondary:e.size})]},t)}))})]})]}),Object(u.jsx)("input",{type:"submit",onClick:j}),Object(u.jsx)(i.b,{to:"/",children:"To the start"})]})};var he=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{}),Object(u.jsx)(i.a,{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/",component:B}),Object(u.jsx)(s.a,{path:"/step2",component:J}),Object(u.jsx)(s.a,{path:"/step3",component:X}),Object(u.jsx)(s.a,{path:"/result",component:de})]})})]})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,695)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(q,{children:Object(u.jsx)(he,{})})}),document.getElementById("root")),me()}},[[634,1,2]]]);
//# sourceMappingURL=main.5b11bba1.chunk.js.map