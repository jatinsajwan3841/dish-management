(this.webpackJsonpevolv=this.webpackJsonpevolv||[]).push([[0],{111:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),c=a.n(i),s=(a(111),a(24)),l=a(73),o=a(166),d=a(169),j=a(171),b=a(41),u=a(172),h=a(85),p=a.n(h),m=a(87),O=a.n(m),x=a(198),g=a(94),f=a(193),v=a(194),y=function(e){return{type:"login",payload:e}},w=a(17),P=a(13),T=a(2),C=Object(o.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function k(e){var t=C(),a=r.a.useState(null),n=Object(s.a)(a,2),i=n[0],c=n[1],o=Boolean(i),h=Object(w.b)(),m=Object(w.c)((function(e){return e.logstate})),y=function(){c(null)};return Object(T.jsx)(T.Fragment,{children:null!==m?Object(T.jsx)("div",{className:t.root,children:Object(T.jsx)(d.a,{position:"static",color:"secondary",children:Object(T.jsxs)(j.a,{children:[Object(T.jsx)(u.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(T.jsx)(p.a,{})}),Object(T.jsxs)(b.a,{variant:"h6",className:t.title,children:["Hello ",m.name]}),m.isAdmin?null:Object(T.jsx)(v.a,{id:"combo-box-demo",options:e.dishlist,getOptionLabel:function(e){return e.dname?e.dname:""},style:{width:300,backgroundColor:"rgba(0,0,0,0.2)"},renderInput:function(t){return Object(T.jsx)(f.a,Object(l.a)(Object(l.a)({},t),{},{label:"search dish",variant:"outlined",onChange:e.hc,onBlur:e.hc}))}}),Object(T.jsxs)("div",{children:[Object(T.jsx)(u.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit",children:Object(T.jsx)(O.a,{})}),Object(T.jsxs)(g.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:y,children:[Object(T.jsx)(x.a,{onClick:y,children:"Profile"}),Object(T.jsx)(x.a,{onClick:function(){return h({type:"logout"})},children:"Logout"})]})]})]})})}):Object(T.jsx)(P.Redirect,{to:"/"})})}var S=a(175),N=a(174),F=a(176),A=a(177),q=a(178),E=a(179),_=a(180),D=a(88),I=a.n(D),z=a(89),W=a.n(z);function R(e){var t=Object(w.b)();return Object(T.jsx)(N.a,{component:S.a,style:{marginTop:15},children:Object(T.jsxs)(F.a,{size:"small",stickyHeader:!0,children:[Object(T.jsx)(A.a,{children:Object(T.jsxs)(q.a,{children:[Object(T.jsx)(E.a,{align:"center",children:Object(T.jsx)("b",{children:"Dish Name"})}),Object(T.jsx)(E.a,{align:"center",children:Object(T.jsx)("b",{children:"Carbohydrates(g)"})}),Object(T.jsx)(E.a,{align:"center",children:Object(T.jsx)("b",{children:"Protiens(g)"})}),Object(T.jsx)(E.a,{align:"center",children:Object(T.jsx)("b",{children:"Fats(g)"})}),Object(T.jsx)(E.a,{align:"center",children:Object(T.jsx)("b",{children:"Calories"})}),Object(T.jsx)(E.a,{align:"center",children:Object(T.jsx)("b",{children:"edit/delete"})})]})}),Object(T.jsx)(_.a,{children:e.dishlist.map((function(a){return Object(T.jsxs)(q.a,{children:[Object(T.jsx)(E.a,{component:"th",scope:"row",align:"center",children:a.dname}),Object(T.jsx)(E.a,{align:"center",children:a.dcarb}),Object(T.jsx)(E.a,{align:"center",children:a.dprot}),Object(T.jsx)(E.a,{align:"center",children:a.dfat}),Object(T.jsx)(E.a,{align:"center",children:a.dcal}),Object(T.jsxs)(E.a,{align:"center",children:[Object(T.jsx)(u.a,{color:"primary",size:"small",onClick:function(){return e.tempvals(a.id)},children:Object(T.jsx)(I.a,{})}),Object(T.jsx)(u.a,{color:"secondary",size:"small",onClick:function(){return t({type:"deletedish",payload:a.id})},children:Object(T.jsx)(W.a,{})})]})]},a.id)}))})]})})}var L=a(181),B=a(186),V=a(66),X=a.n(V),U=a(196),G=a(182),H=a(183),J=a(184),K=a(185),M=Object(o.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function Y(){var e=r.a.useState(2),t=Object(s.a)(e,2),a=t[0],n=t[1],i=r.a.useState(""),c=Object(s.a)(i,2),l=c[0],o=c[1],d=r.a.useState(!1),j=Object(s.a)(d,2),b=j[0],u=j[1],h=r.a.useState(!1),p=Object(s.a)(h,2),m=p[0],O=p[1],x=Object(w.b)(),g=M(),v=Object(w.c)((function(e){return e.dishlist})),y=function(){u(!1),O(!1)};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(k,{}),Object(T.jsxs)(S.a,{children:[Object(T.jsx)(L.a,{color:"primary","aria-label":"add",className:g.fab,onClick:function(){u(!0)},children:Object(T.jsx)(X.a,{})}),Object(T.jsx)(U.a,{open:b,onClose:y,"aria-labelledby":"form-dialog-title",children:Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(!1);var t=e.target,r={id:a,dname:t.name.value,dcarb:t.carb.value,dprot:t.prot.value,dfat:t.fat.value,dcal:4*t.carb.value+4*t.prot.value+9*t.fat.value};x({type:"adddish",payload:r}),n(a+1)},children:[Object(T.jsx)(G.a,{id:"form-dialog-title",children:"Add dish"}),Object(T.jsxs)(H.a,{children:[Object(T.jsx)(J.a,{children:"Please enter the details below:"}),Object(T.jsx)(f.a,{required:!0,fullWidth:!0,name:"name",label:"Dish Name",helperText:"Please enter dish name"}),Object(T.jsx)(f.a,{type:"number",required:!0,name:"carb",label:"carbohydrates",inputProps:{min:"0"},helperText:"Please enter carbohydrates"}),Object(T.jsx)(f.a,{type:"number",required:!0,fullWidth:!0,name:"prot",label:"Protiens",inputProps:{min:"0"},helperText:"Please enter protiens"}),Object(T.jsx)(f.a,{type:"number",required:!0,name:"fat",label:"Fats",inputProps:{min:"0"},helperText:"Please enter fats"})]}),Object(T.jsxs)(K.a,{children:[Object(T.jsx)(B.a,{onClick:y,color:"primary",children:"Cancel"}),Object(T.jsx)(B.a,{variant:"contained",color:"secondary",startIcon:Object(T.jsx)(X.a,{}),type:"submit",children:"Add"})]})]})}),0!==v.length?Object(T.jsx)(R,{dishlist:v,tempvals:function(e){O(!0);var t=v.findIndex((function(t){return t.id==e}));o(v[t])}}):Object(T.jsx)("p",{children:"No dish added, please add from the floating action button at right end."}),""!==l?Object(T.jsx)(U.a,{open:m,onClose:y,"aria-labelledby":"form-dialog-title",children:Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(!1);var t=e.target,a={id:parseInt(t.id.value),dname:t.name.value,dcarb:t.carb.value,dprot:t.prot.value,dfat:t.fat.value,dcal:4*t.carb.value+4*t.prot.value+9*t.fat.value};o(""),x({type:"editdish",payload:a})},children:[Object(T.jsx)(G.a,{id:"form-dialog-title",children:"Edit details"}),Object(T.jsxs)(H.a,{children:[Object(T.jsx)(J.a,{children:"Please edit the details below:"}),Object(T.jsx)("input",{type:"number",hidden:!0,readOnly:!0,name:"id",value:l.id}),Object(T.jsx)(f.a,{required:!0,name:"name",label:"Dish Name",helperText:"Please enter dish name",defaultValue:l.dname}),Object(T.jsx)(f.a,{type:"number",required:!0,name:"carb",label:"carbohydrates",inputProps:{min:"0"},helperText:"Please enter carbohydrates",defaultValue:l.dcarb}),Object(T.jsx)(f.a,{type:"number",required:!0,name:"prot",label:"Protiens",inputProps:{min:"0"},helperText:"Please enter protiens",defaultValue:l.dprot}),Object(T.jsx)(f.a,{type:"number",required:!0,name:"fat",label:"Fats",inputProps:{min:"0"},helperText:"Please enter fats",defaultValue:l.dfat})]}),Object(T.jsxs)(K.a,{children:[Object(T.jsx)(B.a,{onClick:y,color:"primary",children:"Cancel"}),Object(T.jsx)(B.a,{variant:"contained",color:"secondary",startIcon:Object(T.jsx)(X.a,{}),type:"submit",children:"Edit"})]})]})}):null]})]})}var Q=a(187),Z=a(188),$=a(189),ee=a(190),te=a(191),ae=a(199),ne=a(65),re=a(90),ie=a.n(re),ce=a(91),se=a.n(ce),le=Object(o.a)((function(e){return{root:{maxWidth:350,marginLeft:e.spacing(2),marginTop:e.spacing(2)},media:{height:0,paddingTop:"56.25%"},avatar:{backgroundColor:ne.a[500]},cardactions:{marginTop:e.spacing(-2),marginBottom:e.spacing(-1)}}}));function oe(e){var t=le();return Object(T.jsxs)(Q.a,{className:t.root,children:[Object(T.jsx)(Z.a,{avatar:Object(T.jsx)(ae.a,{"aria-label":"recipe",className:t.avatar,children:e.dish.dname[0]}),title:e.dish.dname}),Object(T.jsx)($.a,{className:t.media,image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",title:e.dish.dname}),Object(T.jsxs)(ee.a,{children:[Object(T.jsxs)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:[e.dish.dname," is an impressive perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."]}),Object(T.jsxs)(b.a,{variant:"subtitle1",color:"primary",component:"p",children:["Having ",e.dish.dcarb," carbohydrates(g), ",e.dish.dprot," protiens(g), ",e.dish.dfat," fats(g) and ",e.dish.dcal," calories."]})]}),Object(T.jsxs)(te.a,{className:t.cardactions,disableSpacing:!0,children:[Object(T.jsx)(u.a,{"aria-label":"add to favorites",children:Object(T.jsx)(ie.a,{})}),Object(T.jsx)(u.a,{"aria-label":"share",children:Object(T.jsx)(se.a,{})})]})]})}function de(){var e=r.a.useState([]),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(w.c)((function(e){return e.dishlist}));return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(k,{dishlist:i,hc:function(e){var t;t=i.filter((function(t){return t.dname==e.target.value})),n(""!==t?t:[])}}),Object(T.jsx)(S.a,{style:{display:"flex",flexWrap:"wrap"},children:0==a.length?i.map((function(e){return Object(T.jsx)(oe,{dish:e})})):a.map((function(e){return Object(T.jsx)(oe,{dish:e})}))})]})}var je=a(192),be=a(197),ue=a(92),he=a.n(ue);function pe(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],i=r.a.useState(""),c=Object(s.a)(i,2),l=c[0],o=c[1],d=Object(w.b)();return Object(T.jsxs)(S.a,{maxWidth:"sm",children:[Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a?"admin"==e.target.name.value&&"admin"==e.target.pass.value?(d(y({name:"admin",isAdmin:a})),o("/admin")):o("/404"):(d(y({name:e.target.name.value,isAdmin:a})),o("/user"))},style:{marginTop:100},children:[Object(T.jsx)(f.a,{required:!0,fullWidth:!0,name:"name",label:"Name",helperText:"Please enter your Name"}),Object(T.jsx)(f.a,{type:"password",required:!0,fullWidth:!0,name:"pass",label:"Password",helperText:"Please enter your password"}),Object(T.jsx)(je.a,{control:Object(T.jsx)(be.a,{checked:a,onChange:function(){return n(!a)},name:"Admin"}),label:"Admin ?"}),Object(T.jsx)(B.a,{type:"submit",variant:"contained",color:"secondary",startIcon:Object(T.jsx)(he.a,{}),children:"Login"})]}),Object(T.jsx)("p",{style:{marginTop:40},children:'**For admin login use username as "admin" and password as "admin" both without quotes, and toggle that switch to Admin ? '}),Object(T.jsx)("p",{children:"**For normal users enter any username, password and let that toggle to initial state"}),Object(T.jsx)("p",{children:"**For 404 page enter any username, password and toggle the switch to Admin ? "}),Object(T.jsx)("p",{children:"**For now, the search in user page works either if one types the dish name himself or if using the Autocomplete leaves the search field after selecting the option by clicking anywhere."}),""!==l?Object(T.jsx)(P.Redirect,{to:l}):null]})}var me=a(64),Oe=a(95),xe=[{id:0,dname:"Torturi",dcarb:9,dprot:28,dfat:0,dcal:148},{id:1,dname:"Wolturi",dcarb:3,dprot:4,dfat:2,dcal:46}],ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"adddish":return[].concat(Object(Oe.a)(e),[t.payload]);case"editdish":var a=e.findIndex((function(e){return e.id==t.payload.id}));return e[a]=t.payload,e;case"deletedish":return e.filter((function(e){return e.id!==t.payload}));default:return e}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login":return e=t.payload;case"logout":return null;default:return e}},ve=Object(me.a)({dishlist:ge,logstate:fe}),ye=Object(me.b)(ve,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),we=a(51);var Pe=function(){return Object(T.jsx)(w.a,{store:ye,children:Object(T.jsx)(we.a,{children:Object(T.jsxs)(P.Switch,{children:[Object(T.jsx)(P.Route,{path:"/",exact:!0,component:pe}),Object(T.jsx)(P.Route,{path:"/admin",exact:!0,component:Y}),Object(T.jsx)(P.Route,{path:"/user",exact:!0,component:de}),Object(T.jsxs)(P.Route,{children:[Object(T.jsx)("button",{children:Object(T.jsx)(we.b,{to:"/",children:"Go back to homepage"})}),Object(T.jsx)("img",{src:"https://cdn.mos.cms.futurecdn.net/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg",style:{maxWidth:"100%",height:"auto"}})]})]})})})},Te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,201)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))},Ce=a(93),ke=a.n(Ce);c.a.render(Object(T.jsx)(ke.a,{children:Object(T.jsx)(Pe,{})}),document.getElementById("root")),Te()}},[[121,1,2]]]);
//# sourceMappingURL=main.5ccc16d5.chunk.js.map