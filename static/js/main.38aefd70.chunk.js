(this.webpackJsonpmain_app_ui=this.webpackJsonpmain_app_ui||[]).push([[0],{359:function(e,t,n){},701:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),o=n.n(r),i=(n(359),n(55)),s=n(26),l=n(156),j=n(729),u=n(3),d=Object(j.a)((function(e){return{root:{fontFamily:'"Pacifico"',margin:e.spacing(3,0,2),textAlign:"center",fontSize:"40px",color:"deeppink",textShadow:"1px 1px darkmagenta"}}})),b=function(){var e=d();return Object(u.jsx)(l.a,{className:e.root,component:"h1",variant:"h5",children:"Flawless and beautiful header"})},h=n(18),m=n(68),O=n(731),p=Object(j.a)((function(e){return{root:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"}}})),x=function(e){var t=e.children,n=Object(m.a)(e,["children"]),a=p();return Object(u.jsx)(O.a,Object(h.a)(Object(h.a)({className:a.root,container:"main",maxWidth:"xs"},n),{},{children:t}))},f=Object(j.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(1)}}})),g=function(e){var t=e.children,n=Object(m.a)(e,["children"]),a=f();return Object(u.jsx)("form",Object(h.a)(Object(h.a)({className:a.root,noValidate:!0},n),{},{children:t}))},v=n(747),N=Object(a.forwardRef)((function(e,t){return Object(u.jsx)(v.a,Object(h.a)({variant:"outlined",margin:"normal",inputRef:t,fullWidth:!0},e))})),y=n(41),S=n(733),k=Object(j.a)((function(e){return{root:{margin:e.spacing(3,0,2)}}})),T=function(e){var t=e.children,n=Object(m.a)(e,["children"]),a=k();return Object(u.jsx)(S.a,Object(h.a)(Object(h.a)({className:a.root,type:"submit",fullWidth:!0,variant:"contained",color:"primary"},n),{},{children:t}))},F=n(81),E=n(155),P=n(24),w=Object(a.createContext)(),C=function(e){var t=e.children,n=Object(a.useState)({}),c=Object(P.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)(w.Provider,{value:{data:r,setValues:function(e){o((function(t){return Object(h.a)(Object(h.a)({},t),e)}))}},children:t})},D=function(){return Object(a.useContext)(w)},q=F.a().shape({firstName:F.b().matches(/^([^0-9]*)$/,"First name should not contain numbers").required("First name is required"),lastName:F.b().matches(/^([^0-9]*)$/,"Last name should not contain numbers").required("Last name is required")}),B=function(){var e,t,n=Object(s.f)(),a=D(),c=a.data,r=a.setValues,o=Object(y.e)({defaultValues:{firstName:c.firstName,lastName:c.lastName},mode:"onBlur",resolver:Object(E.a)(q)}),i=o.register,j=o.handleSubmit,d=o.formState.errors;return Object(u.jsxs)(x,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Step one\ud83d\udd25"}),Object(u.jsxs)(g,{onSubmit:j((function(e){console.log(e),console.log(d.name),n.push("/step2"),r(e)})),children:[Object(u.jsx)(N,Object(h.a)(Object(h.a)({},i("firstName",{required:!0,maxLength:30})),{},{id:"firstName",type:"text",autoFocus:!0,label:"First Name",error:!!d.firstName,helperText:null===d||void 0===d||null===(e=d.firstName)||void 0===e?void 0:e.message})),Object(u.jsx)(N,Object(h.a)(Object(h.a)({},i("lastName",{required:!0,maxLength:30})),{},{id:"lastName",type:"text",label:"Last Name",error:!!d.lastName,helperText:null===d||void 0===d||null===(t=d.lastName)||void 0===t?void 0:t.message})),Object(u.jsx)(T,{children:"Next step"})]})]})},L=n(748),V=F.a().shape({email:F.b().email("Email should have correct format").required("This is required")}),W=function(){var e,t=Object(s.f)(),n=D(),a=n.data,c=n.setValues,r=Object(y.e)({defaultValues:{email:a.email,hasPhone:a.hasPhone,phoneNumber:a.phoneNumber},mode:"onBlur",resolver:Object(E.a)(V)}),o=r.register,i=r.handleSubmit,j=r.formState.errors,d=(0,r.watch)("hasPhone",!1);return Object(u.jsxs)(x,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Step two\ud83d\udc17"}),Object(u.jsxs)(g,{onSubmit:i((function(e){console.log(e),console.log(d),t.push("/step3"),c(e)})),children:[Object(u.jsx)(N,Object(h.a)(Object(h.a)({},o("email",{required:!0})),{},{id:"email",type:"email",label:"Email",name:"email",error:!!j.email,helperText:null===j||void 0===j||null===(e=j.email)||void 0===e?void 0:e.message,required:!0})),Object(u.jsx)("input",Object(h.a)({type:"checkbox",color:"primary"},o("hasPhone"))),"Do you have a phone?",d&&Object(u.jsx)(N,Object(h.a)(Object(h.a)({name:"phoneNumber"},o("phoneNumber")),{},{id:"phoneNumber",type:"tel",label:"Phone number",onChange:function(e){e.target.value=function(e){var t=Object(L.a)(e);return t?t.formatInternational():e}(e.target.value)}})),Object(u.jsx)(T,{children:"Next"})]})]})},I=n(154),z=n(78),A=(n(734),n(735)),_=n(736),R=n(737),G=n(96),J=n.n(G),H=(Object(j.a)((function(e){return{root:{backgroundColor:"#eee",textAlign:"center",cursor:"pointer",color:"#333",padding:"10px",marginTop:"20px"},icon:{marginTop:"16px",color:"#888",fontSize:"42px"}}})),function(){var e=Object(s.f)(),t=D(),n=t.data,c=t.setValues,r=Object(y.e)({defaultValues:{files:n.files}}),o=(r.register,r.control,r.handleSubmit);Object(a.useEffect)((function(){console.log(n)}),[n]),Object(a.useEffect)((function(){console.log(n)}),[]);return Object(u.jsxs)(x,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Step three\ud83e\udd14"}),Object(u.jsxs)(g,{onSubmit:o((function(t){console.log(t),e.push("/result")})),children:[Object(u.jsx)(I.a,{onDrop:function(e){c({files:e})},accept:"image/jpeg, image/png",maxSize:5242880,children:function(e){var t=e.getRootProps,n=e.getInputProps;return Object(u.jsx)("section",{children:Object(u.jsxs)("div",Object(h.a)(Object(h.a)({},t()),{},{children:[Object(u.jsx)("input",Object(h.a)({name:"files"},n())),Object(u.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"}),Object(u.jsx)("em",{children:"(Only *.jpeg and *.png images will be accepted)"})]}))})}}),Object(u.jsx)(J.a,{children:Object(u.jsxs)(z.a,{children:[Object(u.jsx)("p",{children:"test check"}),n.files&&n.files.map((function(e,t){return Object(u.jsxs)(z.b,{children:[Object(u.jsx)("p",{children:"test check"}),Object(u.jsx)(A.a,{children:Object(u.jsx)(_.a,{})}),Object(u.jsx)(R.a,{primary:e.name,secondary:e.size})]},t)}))]})}),Object(u.jsx)(T,{children:"Next"})]})]})}),M=n(25),Y=n.n(M),$=n(44),K=n(738),U=n(739),X=n(741),Z=n(732),Q=n(745),ee=n(743),te=n(742),ne=n(744),ae=n(740),ce=n(336),re=n.n(ce),oe=(n(649),n(102)),ie=n.n(oe),se=(n(668),Object(j.a)((function(e){return{root:{marginBottom:"30px"},table:{marginBottom:"30px"}}})));function le(e){if(!document.cookie)return null;var t=document.cookie.split(";").map((function(e){return e.trim()})).filter((function(t){return t.startsWith(e+"=")}));return 0===t.length?null:decodeURIComponent(t[0].split("=")[1])}var je=function(){var e=Object(a.useState)(!1),t=Object(P.a)(e,2),n=(t[0],t[1],Object(a.useState)([])),c=Object(P.a)(n,2),r=c[0],o=c[1],s=D().data,j=Object.entries(s).filter((function(e){return"files"!==e[0]})),d=s.files,b=se();Object(a.useEffect)((function(){ie()({method:"GET",url:"http://127.0.0.1:8000/api/card/"}).then((function(e){o(e.data)}))}),[]);var h=function(){var e=Object($.a)(Y.a.mark((function e(){var t,n,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new FormData,console.log("data"),console.log(s.files),s.files&&s.files.forEach((function(e){t.append("images[]",e,e.name)})),console.log("formData"),console.log(t.entries()),console.log("entries"),console.log(j),j.forEach((function(e){var n;"phoneNumber"===e[0]&&e[1]?t.append(e[0],null===(n=e[1])||void 0===n?void 0:n.replace(/\s/g,"")):t.append(e[0],e[1])})),console.log("formData"),console.log(t.entries()),n={},t.forEach((function(e,t){return n[t]=e})),JSON.stringify(n),a=le("csrftoken"),console.log(a),{firstName:"Daddy",lastName:"shatilov",email:"meme@corp.ru",hasPhone:!0,phoneNumber:"+79123541268"},console.log("formData"),console.log(t),e.next=21,fetch("http://127.0.0.1:8000/api/card/",{method:"POST",body:t,headers:{"Content-Type":"multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW","X-CSRFToken":a}}).then((function(e){console.log(e.status),200==e.status&&re.a.fire("Great job!","You've passed all data","success"),console.log(e.json())}));case 21:e.sent;case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(x,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Form data \ud83d\udc96"}),Object(u.jsx)("ul",{children:r&&r.map((function(e){return Object(u.jsxs)("li",{children:[e.firstName,"--",e.email]},e.id)}))}),Object(u.jsxs)(K.a,{children:[Object(u.jsx)(U.a,{className:b.root,component:"div",children:Object(u.jsxs)(ae.a,{className:b.table,children:[Object(u.jsx)(X.a,{children:Object(u.jsxs)(te.a,{children:[Object(u.jsx)(ee.a,{children:"Field"}),Object(u.jsx)(ee.a,{align:"right",children:"Value"})]})}),Object(u.jsx)(ne.a,{children:j.map((function(e){var t;return Object(u.jsxs)(te.a,{children:[Object(u.jsx)(ee.a,{children:e[0]}),Object(u.jsx)(ee.a,{align:"right",children:null===(t=e[1])||void 0===t?void 0:t.toString()})]},e[0])}))})]})}),d&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Files \ud83d\udc27"}),Object(u.jsx)(Z.a,{children:d.map((function(e,t){return Object(u.jsxs)(Q.a,{children:[Object(u.jsx)(A.a,{children:Object(u.jsx)(_.a,{})}),Object(u.jsx)(R.a,{primary:e.name,secondary:e.size})]},t)}))})]})]}),Object(u.jsx)(T,{onClick:h,children:"Submit"}),Object(u.jsx)(i.b,{to:"/step1",children:"To the start"}),Object(u.jsx)(i.b,{to:"/",children:"Home"})]})},ue=n(338),de=n.n(ue),be=n(746),he=n(337),me=n.n(he),Oe=(n.p,de()((function(e){return{root:{marginBottom:"30px",textAlign:"center",width:"auto",minWidth:0},table:{marginBottom:"30px"},head:{backgroundColor:"orange",color:"white"},button:{color:"darkmagenta"}}}))),pe=function(){var e=Object(s.f)(),t=Object(a.useState)([]),n=Object(P.a)(t,2),c=n[0],r=n[1],o=Oe();Object(a.useEffect)((function(){ie()({method:"GET",url:"http://127.0.0.1:8000/api/card/"}).then((function(e){var t;console.log("check response"),console.log(e),console.log(e.data),r(null!==(t=e.data)&&void 0!==t?t:[])}))}),[]);return Object(u.jsxs)(x,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"All user cards \ud83e\udd73\ud83c\udf83"}),Object(u.jsx)(K.a,{className:o.root,children:Object(u.jsx)(U.a,{className:o.root,component:"div",children:Object(u.jsxs)(ae.a,{className:o.table,children:[Object(u.jsx)(X.a,{children:Object(u.jsxs)(te.a,{children:[Object(u.jsx)(ee.a,{children:"Name"}),Object(u.jsx)(ee.a,{align:"right",children:"Last Name"}),Object(u.jsx)(ee.a,{children:"E-mail"}),Object(u.jsx)(ee.a,{children:"Phone"}),Object(u.jsx)(ee.a,{children:"Preview"}),Object(u.jsx)(ee.a,{children:"Delete"})]})}),Object(u.jsx)(ne.a,{children:c.map((function(e){var t,n,a;return Object(u.jsxs)(te.a,{children:[Object(u.jsx)(ee.a,{children:e.firstName}),Object(u.jsx)(ee.a,{children:e.lastName}),Object(u.jsx)(ee.a,{children:Object(u.jsx)("a",{href:"mailto:".concat(e.email),children:e.email})}),Object(u.jsx)(ee.a,{align:"right",children:Object(u.jsx)("a",{href:"tel:{p.phoneNumber?.toString()}",className:"Phonny",children:null===(t=e.phoneNumber)||void 0===t?void 0:t.toString()})}),Object(u.jsx)(ee.a,{children:Object(u.jsx)(me.a,{id:"gallery",class:"fancybox1",thumbnail:null===e||void 0===e||null===(n=e.images)||void 0===n?void 0:n.thumb,image:null===e||void 0===e||null===(a=e.images)||void 0===a?void 0:a.image})}),Object(u.jsx)(ee.a,{children:Object(u.jsx)(S.a,{type:"submit",onClick:function(){return t=e.id,void ie()({method:"DELETE",url:"http://127.0.0.1:8000/api/card/".concat(t,"/")}).then((function(e){console.log(e),ie()({method:"GET",url:"http://127.0.0.1:8000/api/card/"}).then((function(e){var t;console.log("check response"),console.log(e),console.log(e.data),r(null!==(t=e.data)&&void 0!==t?t:[])}))}));var t},className:o.button,fullHeigth:!0,color:"secondary",startIcon:Object(u.jsx)(be.a,{className:"button__icon",fontSize:"small"})})})]},e.id)}))})]})})}),Object(u.jsx)(g,{onClick:function(){e.push("/step1")},children:Object(u.jsx)(T,{children:"Add user card"})})]})};n(700);var xe=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(i.a,{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/",component:pe}),Object(u.jsx)(s.a,{path:"/step1",component:B}),Object(u.jsx)(s.a,{path:"/step2",component:W}),Object(u.jsx)(s.a,{path:"/step3",component:H}),Object(u.jsx)(s.a,{path:"/result",component:je})]})})]})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,749)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(C,{children:Object(u.jsx)(xe,{})})}),document.getElementById("root")),fe()}},[[701,1,2]]]);
//# sourceMappingURL=main.38aefd70.chunk.js.map