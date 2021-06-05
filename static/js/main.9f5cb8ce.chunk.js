(this.webpackJsonpmain_app_ui=this.webpackJsonpmain_app_ui||[]).push([[0],{359:function(e,t,n){},701:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(15),i=n.n(r),o=(n(359),n(55)),s=n(26),l=n(156),j=n(729),u=n(3),d=Object(j.a)((function(e){return{root:{fontFamily:'"Pacifico"',margin:e.spacing(3,0,2),textAlign:"center",fontSize:"40px",color:"deeppink",textShadow:"1px 1px darkmagenta"}}})),h=function(){var e=d();return Object(u.jsx)(l.a,{className:e.root,component:"h1",variant:"h5",children:"Flawless and beautiful header"})},b=n(18),m=n(68),O=n(731),p=Object(j.a)((function(e){return{root:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"}}})),x=function(e){var t=e.children,n=Object(m.a)(e,["children"]),c=p();return Object(u.jsx)(O.a,Object(b.a)(Object(b.a)({className:c.root,container:"main",maxWidth:"xs"},n),{},{children:t}))},f=Object(j.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(1)}}})),g=function(e){var t=e.children,n=Object(m.a)(e,["children"]),c=f();return Object(u.jsx)("form",Object(b.a)(Object(b.a)({className:c.root,noValidate:!0},n),{},{children:t}))},v=n(747),N=Object(c.forwardRef)((function(e,t){return Object(u.jsx)(v.a,Object(b.a)({variant:"outlined",margin:"normal",inputRef:t,fullWidth:!0},e))})),S=n(41),y=n(733),k=Object(j.a)((function(e){return{root:{margin:e.spacing(3,0,2)}}})),E=function(e){var t=e.children,n=Object(m.a)(e,["children"]),c=k();return Object(u.jsx)(y.a,Object(b.a)(Object(b.a)({className:c.root,type:"submit",fullWidth:!0,variant:"contained",color:"primary"},n),{},{children:t}))},F=n(81),T=n(155),P=n(24),w=Object(c.createContext)(),C=function(e){var t=e.children,n=Object(c.useState)({}),a=Object(P.a)(n,2),r=a[0],i=a[1];return Object(u.jsx)(w.Provider,{value:{data:r,setValues:function(e){i((function(t){return Object(b.a)(Object(b.a)({},t),e)}))}},children:t})},q=function(){return Object(c.useContext)(w)},D=F.a().shape({firstName:F.b().matches(/^([^0-9]*)$/,"First name should not contain numbers").required("First name is required"),lastName:F.b().matches(/^([^0-9]*)$/,"Last name should not contain numbers").required("Last name is required")}),L=function(){var e,t,n=Object(s.f)(),c=q(),a=c.data,r=c.setValues,i=Object(S.e)({defaultValues:{firstName:a.firstName,lastName:a.lastName},mode:"onBlur",resolver:Object(T.a)(D)}),o=i.register,j=i.handleSubmit,d=i.formState.errors;return Object(u.jsxs)(x,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Step one\ud83d\udd25"}),Object(u.jsxs)(g,{onSubmit:j((function(e){console.log(e),console.log(d.name),n.push("/step2"),r(e)})),children:[Object(u.jsx)(N,Object(b.a)(Object(b.a)({},o("firstName",{required:!0,maxLength:30})),{},{id:"firstName",type:"text",autoFocus:!0,label:"First Name",error:!!d.firstName,helperText:null===d||void 0===d||null===(e=d.firstName)||void 0===e?void 0:e.message})),Object(u.jsx)(N,Object(b.a)(Object(b.a)({},o("lastName",{required:!0,maxLength:30})),{},{id:"lastName",type:"text",label:"Last Name",error:!!d.lastName,helperText:null===d||void 0===d||null===(t=d.lastName)||void 0===t?void 0:t.message})),Object(u.jsx)(E,{children:"Next step"})]})]})},V=n(748),B=F.a().shape({email:F.b().email("Email should have correct format").required("This is required")}),I=function(){var e,t=Object(s.f)(),n=q(),c=n.data,a=n.setValues,r=Object(S.e)({defaultValues:{email:c.email,hasPhone:c.hasPhone,phoneNumber:c.phoneNumber},mode:"onBlur",resolver:Object(T.a)(B)}),i=r.register,o=r.handleSubmit,j=r.formState.errors,d=(0,r.watch)("hasPhone",!1);return Object(u.jsxs)(x,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Step two\ud83d\udc17"}),Object(u.jsxs)(g,{onSubmit:o((function(e){console.log(e),console.log(d),t.push("/step3"),a(e)})),children:[Object(u.jsx)(N,Object(b.a)(Object(b.a)({},i("email",{required:!0})),{},{id:"email",type:"email",label:"Email",name:"email",error:!!j.email,helperText:null===j||void 0===j||null===(e=j.email)||void 0===e?void 0:e.message,required:!0})),Object(u.jsx)("input",Object(b.a)({type:"checkbox",color:"primary"},i("hasPhone"))),"Do you have a phone?",d&&Object(u.jsx)(N,Object(b.a)(Object(b.a)({name:"phoneNumber"},i("phoneNumber")),{},{id:"phoneNumber",type:"tel",label:"Phone number",onChange:function(e){e.target.value=function(e){var t=Object(V.a)(e);return t?t.formatInternational():e}(e.target.value)}})),Object(u.jsx)(E,{children:"Next"})]})]})},z=n(154),A=n(78),R=(n(734),n(735)),W=n(736),G=n(737),_=n(96),J=n.n(_),H=(Object(j.a)((function(e){return{root:{backgroundColor:"#eee",textAlign:"center",cursor:"pointer",color:"#333",padding:"10px",marginTop:"20px"},icon:{marginTop:"16px",color:"#888",fontSize:"42px"}}})),function(){var e=Object(s.f)(),t=q(),n=t.data,a=t.setValues,r=Object(S.e)({defaultValues:{files:n.files}}),i=(r.register,r.control,r.handleSubmit);Object(c.useEffect)((function(){console.log(n)}),[n]),Object(c.useEffect)((function(){console.log(n)}),[]);return Object(u.jsxs)(x,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Step three\ud83e\udd14"}),Object(u.jsxs)(g,{onSubmit:i((function(t){console.log(t),e.push("/result")})),children:[Object(u.jsx)(z.a,{onDrop:function(e){a({files:e})},accept:"image/jpeg, image/png",maxSize:5242880,children:function(e){var t=e.getRootProps,n=e.getInputProps;return Object(u.jsx)("section",{children:Object(u.jsxs)("div",Object(b.a)(Object(b.a)({},t()),{},{children:[Object(u.jsx)("input",Object(b.a)({name:"files"},n())),Object(u.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"}),Object(u.jsx)("em",{children:"(Only *.jpeg and *.png images will be accepted)"})]}))})}}),Object(u.jsx)(J.a,{children:Object(u.jsxs)(A.a,{children:[Object(u.jsx)("p",{children:"test check"}),n.files&&n.files.map((function(e,t){return Object(u.jsxs)(A.b,{children:[Object(u.jsx)("p",{children:"test check"}),Object(u.jsx)(R.a,{children:Object(u.jsx)(W.a,{})}),Object(u.jsx)(G.a,{primary:e.name,secondary:e.size})]},t)}))]})}),Object(u.jsx)(E,{children:"Next"})]})]})}),$=n(25),M=n.n($),U=n(44),X=n(738),Y=n(739),K=n(741),Q=n(732),Z=n(745),ee=n(743),te=n(742),ne=n(744),ce=n(740),ae=n(336),re=n.n(ae),ie=(n(649),n(102)),oe=n.n(ie),se=(n(668),Object(j.a)((function(e){return{root:{marginBottom:"30px"},table:{marginBottom:"30px"}}})));function le(e){if(!document.cookie)return null;var t=document.cookie.split(";").map((function(e){return e.trim()})).filter((function(t){return t.startsWith(e+"=")}));return 0===t.length?null:decodeURIComponent(t[0].split("=")[1])}var je=function(){var e=Object(c.useState)(!1),t=Object(P.a)(e,2),n=(t[0],t[1],Object(c.useState)([])),a=Object(P.a)(n,2),r=a[0],i=a[1],s=q().data,j=Object.entries(s).filter((function(e){return"files"!==e[0]})),d=s.files,h=se();Object(c.useEffect)((function(){oe()({method:"GET",url:"http://127.0.0.1:8000/api/card/"}).then((function(e){i(e.data)}))}),[]);var b=function(){var e=Object(U.a)(M.a.mark((function e(){var t,n,c;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new FormData,s.files&&s.files.forEach((function(e){t.append("files",e,e.name)})),j.forEach((function(e){var n;"phoneNumber"===e[0]&&e[1].length>0?t.append(e[0],null===(n=e[1])||void 0===n?void 0:n.replace(/\s/g,"")):t.append(e[0],e[1])})),n={},t.forEach((function(e,t){return n[t]=e})),JSON.stringify(n),c=le("csrftoken"),console.log(c),{firstName:"Daddy",lastName:"shatilov",email:"meme@corp.ru",hasPhone:!0,phoneNumber:"+79123541268"},console.log("formData"),console.log(t),e.next=13,fetch("http://127.0.0.1:8000/api/card/",{method:"POST",body:t,headers:{"X-CSRFToken":c}}).then((function(e){console.log(e.status),200==e.status&&re.a.fire("Great job!","You've passed all data","success"),console.log(e.json())}));case 13:e.sent;case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(x,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Form data \ud83d\udc96"}),Object(u.jsx)("ul",{children:r&&r.map((function(e){return Object(u.jsxs)("li",{children:[e.firstName,"--",e.email]},e.id)}))}),Object(u.jsxs)(X.a,{children:[Object(u.jsx)(Y.a,{className:h.root,component:"div",children:Object(u.jsxs)(ce.a,{className:h.table,children:[Object(u.jsx)(K.a,{children:Object(u.jsxs)(te.a,{children:[Object(u.jsx)(ee.a,{children:"Field"}),Object(u.jsx)(ee.a,{align:"right",children:"Value"})]})}),Object(u.jsx)(ne.a,{children:j.map((function(e){var t;return Object(u.jsxs)(te.a,{children:[Object(u.jsx)(ee.a,{children:e[0]}),Object(u.jsx)(ee.a,{align:"right",children:null===(t=e[1])||void 0===t?void 0:t.toString()})]},e[0])}))})]})}),d&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"Files \ud83d\udc27"}),Object(u.jsx)(Q.a,{children:d.map((function(e,t){return Object(u.jsxs)(Z.a,{children:[Object(u.jsx)(R.a,{children:Object(u.jsx)(W.a,{})}),Object(u.jsx)(G.a,{primary:e.name,secondary:e.size})]},t)}))})]})]}),Object(u.jsx)(E,{onClick:b,children:"Submit"}),Object(u.jsx)(o.b,{to:"/step1",children:"To the start"}),Object(u.jsx)(o.b,{to:"/",children:"Home"})]})},ue=n(338),de=n.n(ue),he=n(746),be=n(337),me=n.n(be),Oe=n.p+"static/media/thumb2.c714d403.png",pe=de()((function(e){return{root:{marginBottom:"30px",textAlign:"center",width:"auto",minWidth:0},table:{marginBottom:"30px"},head:{backgroundColor:"orange",color:"white"},button:{color:"darkmagenta"}}})),xe=function(){var e=Object(s.f)(),t=Object(c.useState)([]),n=Object(P.a)(t,2),a=n[0],r=n[1],i=pe();Object(c.useEffect)((function(){oe()({method:"GET",url:"http://127.0.0.1:8000/api/card/"}).then((function(e){var t;console.log("check response"),console.log(e),console.log(e.data),r(null!==(t=e.data)&&void 0!==t?t:[])}))}),[]);return Object(u.jsxs)(x,{children:[Object(u.jsx)(l.a,{component:"h2",variant:"h5",children:"All user cards \ud83e\udd73\ud83c\udf83"}),Object(u.jsx)(X.a,{className:i.root,children:Object(u.jsx)(Y.a,{className:i.root,component:"div",children:Object(u.jsxs)(ce.a,{className:i.table,children:[Object(u.jsx)(K.a,{children:Object(u.jsxs)(te.a,{children:[Object(u.jsx)(ee.a,{children:"Name"}),Object(u.jsx)(ee.a,{align:"right",children:"Last Name"}),Object(u.jsx)(ee.a,{children:"E-mail"}),Object(u.jsx)(ee.a,{children:"Phone"})]})}),Object(u.jsx)(ne.a,{children:a.map((function(e){var t;return Object(u.jsxs)(te.a,{children:[Object(u.jsx)(ee.a,{children:e.firstName}),Object(u.jsx)(ee.a,{children:e.lastName}),Object(u.jsx)(ee.a,{children:Object(u.jsx)("a",{href:"mailto:".concat(e.email),children:e.email})}),Object(u.jsx)(ee.a,{align:"right",children:Object(u.jsx)("a",{href:"tel:{p.phoneNumber?.toString()}",className:"Phonny",children:null===(t=e.phoneNumber)||void 0===t?void 0:t.toString()})}),Object(u.jsx)(ee.a,{children:Object(u.jsx)(me.a,{id:"gallery",class:"fancybox1",thumbnail:Oe,image:e.files})}),Object(u.jsx)(ee.a,{children:Object(u.jsx)(y.a,{type:"submit",onClick:function(){return t=e.id,void oe()({method:"DELETE",url:"http://127.0.0.1:8000/api/card/".concat(t,"/")}).then((function(e){console.log(e),oe()({method:"GET",url:"http://127.0.0.1:8000/api/card/"}).then((function(e){var t;console.log("check response"),console.log(e),console.log(e.data),r(null!==(t=e.data)&&void 0!==t?t:[])}))}));var t},className:i.button,fullHeigth:!0,color:"secondary",startIcon:Object(u.jsx)(he.a,{fontSize:"small"}),children:"delete"})})]},e.id)}))})]})})}),Object(u.jsx)(g,{onClick:function(){e.push("/step1")},children:Object(u.jsx)(E,{children:"Add user card"})})]})};n(700);var fe=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(o.a,{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/",component:xe}),Object(u.jsx)(s.a,{path:"/step1",component:L}),Object(u.jsx)(s.a,{path:"/step2",component:I}),Object(u.jsx)(s.a,{path:"/step3",component:H}),Object(u.jsx)(s.a,{path:"/result",component:je})]})})]})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,749)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(C,{children:Object(u.jsx)(fe,{})})}),document.getElementById("root")),ge()}},[[701,1,2]]]);
//# sourceMappingURL=main.9f5cb8ce.chunk.js.map