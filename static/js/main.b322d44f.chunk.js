(this.webpackJsonpmain_app_ui=this.webpackJsonpmain_app_ui||[]).push([[0],{355:function(e,t,n){},686:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),i=n.n(c),o=(n(355),n(54)),s=n(26),l=n(155),j=n(714),u=n(3),h=Object(j.a)((function(e){return{root:{fontFamily:'"Pacifico"',margin:e.spacing(3,0,2),textAlign:"center",fontSize:"40px",color:"deeppink",textShadow:"1px 1px darkmagenta"}}})),b=function(){var e=h();return Object(u.jsx)(l.a,{className:e.root,component:"h1",variant:"h5",children:"Flawless and beautiful header"})},d=n(18),m=n(68),O=n(716),p=Object(j.a)((function(e){return{root:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"}}})),f=function(e){var t=e.children,n=Object(m.a)(e,["children"]),a=p();return Object(u.jsx)(O.a,Object(d.a)(Object(d.a)({className:a.root,container:"main",maxWidth:"xs"},n),{},{children:t}))},x=Object(j.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(1)}}})),g=function(e){var t=e.children,n=Object(m.a)(e,["children"]),a=x();return Object(u.jsx)("form",Object(d.a)(Object(d.a)({className:a.root,noValidate:!0},n),{},{children:t}))},v=n(731),N=Object(a.forwardRef)((function(e,t){return Object(u.jsx)(v.a,Object(d.a)({variant:"outlined",margin:"normal",inputRef:t,fullWidth:!0},e))})),S=n(40),y=n(718),k=Object(j.a)((function(e){return{root:{margin:e.spacing(3,0,2)}}})),F=function(e){var t=e.children,n=Object(m.a)(e,["children"]),a=k();return Object(u.jsx)(y.a,Object(d.a)(Object(d.a)({className:a.root,type:"sumbit",fullWidth:!0,variant:"contained",color:"primary"},n),{},{children:t}))},T=n(80),P=n(153),w=n(24),C=Object(a.createContext)(),E=function(e){var t=e.children,n=Object(a.useState)({}),r=Object(w.a)(n,2),c=r[0],i=r[1];return Object(u.jsx)(C.Provider,{value:{data:c,setValues:function(e){i((function(t){return Object(d.a)(Object(d.a)({},t),e)}))}},children:t})},q=function(){return Object(a.useContext)(C)},V=T.a().shape({firstName:T.b().matches(/^([^0-9]*)$/,"First name should not contain numbers").required("First name is required"),lastName:T.b().matches(/^([^0-9]*)$/,"Last name should not contain numbers").required("Last name is required")}),B=function(){var e,t,n=Object(s.f)(),a=q(),r=a.data,c=a.setValues,i=Object(S.e)({defaultValues:{firstName:r.firstName,lastName:r.lastName},mode:"onBlur",resolver:Object(P.a)(V)}),o=i.register,j=i.handleSubmit,h=i.formState.errors;return Object(u.jsxs)(f,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Step one\ud83d\udd25"}),Object(u.jsxs)(g,{onSubmit:j((function(e){console.log(e),console.log(h.name),n.push("/step2"),c(e)})),children:[Object(u.jsx)(N,Object(d.a)(Object(d.a)({},o("firstName",{required:!0,maxLength:30})),{},{id:"firstName",type:"text",label:"First Name",error:!!h.firstName,helperText:null===h||void 0===h||null===(e=h.firstName)||void 0===e?void 0:e.message})),Object(u.jsx)(N,Object(d.a)(Object(d.a)({},o("lastName",{required:!0,maxLength:30})),{},{id:"lastName",type:"text",label:"Last Name",error:!!h.lastName,helperText:null===h||void 0===h||null===(t=h.lastName)||void 0===t?void 0:t.message})),Object(u.jsx)(F,{children:"Next step"})]})]})},D=n(732),L=T.a().shape({email:T.b().email("Email should have correct format").required("This is required")}),A=function(){var e,t=Object(s.f)(),n=q(),a=n.data,r=n.setValues,c=Object(S.e)({defaultValues:{email:a.email,hasPhone:a.hasPhone,phoneNumber:a.phoneNumber},mode:"onBlur",resolver:Object(P.a)(L)}),i=c.register,o=c.handleSubmit,j=c.formState.errors,h=(0,c.watch)("hasPhone",!1);return Object(u.jsxs)(f,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Step two\ud83d\udc17"}),Object(u.jsxs)(g,{onSubmit:o((function(e){console.log(e),console.log(h),t.push("/step3"),r(e)})),children:[Object(u.jsx)(N,Object(d.a)(Object(d.a)({},i("email",{required:!0})),{},{id:"email",type:"email",label:"Email",name:"email",error:!!j.email,helperText:null===j||void 0===j||null===(e=j.email)||void 0===e?void 0:e.message,required:!0})),Object(u.jsx)("input",Object(d.a)({type:"checkbox",color:"primary"},i("hasPhone"))),"Do you have a phone?",h&&Object(u.jsx)(N,Object(d.a)(Object(d.a)({name:"phoneNumber"},i("phoneNumber")),{},{id:"phoneNumber",type:"tel",label:"Phone number",onChange:function(e){e.target.value=function(e){var t=Object(D.a)(e);return t?t.formatInternational():e}(e.target.value)}})),Object(u.jsx)(F,{children:"Next"})]})]})},I=n(152),J=(n(149),n(719),n(720)),R=n(721),W=n(722),_=(n(140),Object(j.a)((function(e){return{root:{backgroundColor:"#eee",textAlign:"center",cursor:"pointer",color:"#333",padding:"10px",marginTop:"20px"},icon:{marginTop:"16px",color:"#888",fontSize:"42px"}}})),function(){var e=Object(s.f)(),t=q(),n=t.data,a=t.setValues,r=Object(S.e)({defaultValues:{files:n.files}}),c=(r.register,r.control,r.handleSubmit);return Object(u.jsxs)(f,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Step three\ud83e\udd14"}),Object(u.jsxs)(g,{onSubmit:c((function(t){console.log(t),e.push("/result"),a(t)})),children:[Object(u.jsx)(I.a,{onDrop:function(e){a(e)},children:function(e){var t=e.getRootProps,n=e.getInputProps;return Object(u.jsx)("section",{children:Object(u.jsxs)("div",Object(d.a)(Object(d.a)({},t()),{},{children:[Object(u.jsx)("input",Object(d.a)({name:"files"},n())),Object(u.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"})]}))})}}),Object(u.jsx)(F,{children:"Next"})]})]})}),z=n(25),G=n.n(z),$=n(44),H=n(723),M=n(724),U=n(726),X=n(717),Y=n(730),K=n(728),Q=n(727),Z=n(729),ee=n(725),te=n(332),ne=n.n(te),ae=(n(646),n(150)),re=n.n(ae),ce=(n(665),Object(j.a)((function(e){return{root:{marginBottom:"30px"},table:{marginBottom:"30px"}}})));function ie(e){if(!document.cookie)return null;var t=document.cookie.split(";").map((function(e){return e.trim()})).filter((function(t){return t.startsWith(e+"=")}));return 0===t.length?null:decodeURIComponent(t[0].split("=")[1])}var oe=function(){var e=Object(a.useState)(!1),t=Object(w.a)(e,2),n=(t[0],t[1],Object(a.useState)([])),r=Object(w.a)(n,2),c=r[0],i=r[1],s=q().data,j=Object.entries(s).filter((function(e){return"files"!==e[0]})),h=s.files,b=ce();Object(a.useEffect)((function(){re()({method:"GET",url:"http://127.0.0.1:8000/api/card/"}).then((function(e){i(e.data)}))}),[]);var d=function(){var e=Object($.a)(G.a.mark((function e(){var t,n,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new FormData,s.files&&s.files.forEach((function(e){t.append("files",e,e.name)})),j.forEach((function(e){"phoneNumber"===e[0]?t.append(e[0],e[1].replace(/\s/g,"")):t.append(e[0],e[1])})),n={},t.forEach((function(e,t){return n[t]=e})),JSON.stringify(n),a=ie("csrftoken"),console.log(a),{firstName:"Daddy",lastName:"shatilov",email:"meme@corp.ru",hasPhone:!0,phoneNumber:"+79123541268"},console.log("formData"),console.log(JSON.stringify(Object.fromEntries(t))),e.next=13,fetch("http://127.0.0.1:8000/api/card/",{method:"POST",body:JSON.stringify(Object.fromEntries(t)),headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRFToken":a}}).then((function(e){console.log(e.status),200==e.status&&ne.a.fire("Great job!","You've passed all data","success"),console.log(e.json())}));case 13:e.sent;case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(f,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Form data \ud83d\udc96"}),Object(u.jsx)("ul",{children:c&&c.map((function(e){return Object(u.jsxs)("li",{children:[e.firstName,"--",e.email]},e.id)}))}),Object(u.jsxs)(H.a,{children:[Object(u.jsx)(M.a,{className:b.root,component:"div",children:Object(u.jsxs)(ee.a,{className:b.table,children:[Object(u.jsx)(U.a,{children:Object(u.jsxs)(Q.a,{children:[Object(u.jsx)(K.a,{children:"Field"}),Object(u.jsx)(K.a,{align:"right",children:"Value"})]})}),Object(u.jsx)(Z.a,{children:j.map((function(e){var t;return Object(u.jsxs)(Q.a,{children:[Object(u.jsx)(K.a,{children:e[0]}),Object(u.jsx)(K.a,{align:"right",children:null===(t=e[1])||void 0===t?void 0:t.toString()})]},e[0])}))})]})}),h&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Files \ud83d\udc27"}),Object(u.jsx)(X.a,{children:h.map((function(e,t){return Object(u.jsxs)(Y.a,{children:[Object(u.jsx)(J.a,{children:Object(u.jsx)(R.a,{})}),Object(u.jsx)(W.a,{primary:e.name,secondary:e.size})]},t)}))})]})]}),Object(u.jsx)(F,{onClick:d,children:"Submit"}),Object(u.jsx)(o.b,{to:"/step1",children:"To the start"}),Object(u.jsx)(o.b,{to:"/",children:"Home"})]})},se=n(333),le=n.n(se)()((function(e){return{root:{marginBottom:"30px",textAlign:"center",width:"auto",minWidth:0},table:{marginBottom:"30px"},head:{backgroundColor:"orange",color:"white"}}})),je=function(){var e=Object(s.f)(),t=Object(a.useState)([]),n=Object(w.a)(t,2),r=n[0],c=n[1],i=le();Object(a.useEffect)((function(){re()({method:"GET",url:"http://127.0.0.1:8000/api/card/"}).then((function(e){var t;console.log("check response"),console.log(e),console.log(e.data),c(null!==(t=e.data)&&void 0!==t?t:[])}))}),[]);return Object(u.jsxs)(f,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"All user cards \ud83e\udd73\ud83c\udf83"}),Object(u.jsx)(H.a,{className:i.root,children:Object(u.jsx)(M.a,{className:i.root,component:"div",children:Object(u.jsxs)(ee.a,{className:i.table,children:[Object(u.jsx)(U.a,{children:Object(u.jsxs)(Q.a,{children:[Object(u.jsx)(K.a,{children:"Name"}),Object(u.jsx)(K.a,{align:"right",children:"Last Name"}),Object(u.jsx)(K.a,{children:"E-mail"}),Object(u.jsx)(K.a,{children:"Phone"})]})}),Object(u.jsx)(Z.a,{children:r.map((function(e){var t;return Object(u.jsxs)(Q.a,{children:[Object(u.jsx)(K.a,{children:e.firstName}),Object(u.jsx)(K.a,{children:e.lastName}),Object(u.jsx)(K.a,{children:Object(u.jsx)("a",{href:"mailto:".concat(e.email),children:e.email})}),Object(u.jsx)(K.a,{align:"right",children:Object(u.jsx)("a",{href:"tel:{p.phoneNumber?.toString()}",className:"Phonny",children:null===(t=e.phoneNumber)||void 0===t?void 0:t.toString()})})]},e.id)}))})]})})}),Object(u.jsx)(g,{onClick:function(){e.push("/step1")},children:Object(u.jsx)(F,{children:"Add user card"})})]})};var ue=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(o.a,{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/",component:je}),Object(u.jsx)(s.a,{path:"/step1",component:B}),Object(u.jsx)(s.a,{path:"/step2",component:A}),Object(u.jsx)(s.a,{path:"/step3",component:_}),Object(u.jsx)(s.a,{path:"/result",component:oe})]})})]})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,733)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(E,{children:Object(u.jsx)(ue,{})})}),document.getElementById("root")),he()}},[[686,1,2]]]);
//# sourceMappingURL=main.b322d44f.chunk.js.map