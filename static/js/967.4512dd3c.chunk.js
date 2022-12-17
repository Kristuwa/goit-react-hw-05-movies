"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[967],{893:function(n,e,t){t.d(e,{r:function(){return d}});var r,a,i=t(739),o=t(168),u=t(444),c=t(731),s=u.ZP.li(r||(r=(0,o.Z)(["\n  margin-bottom: 10px;\n"]))),p=(0,u.ZP)(c.OL)(a||(a=(0,o.Z)(["\n  text-decoration: none;\n  display: inline-block;\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  color: #000000;\n\n  &:hover,\n  &:focus {\n    background-color: #6d7070;\n    color: #ffffff;\n  }\n"]))),l=t(184),f=function(n){var e=n.id,t=n.title,r=(0,i.TH)();return(0,l.jsx)(s,{children:(0,l.jsx)(p,{to:"/movies/".concat(e),state:{from:r},children:t})})},d=function(n){var e=n.gallery;return(0,l.jsx)("ul",{children:e.map((function(n){var e=n.id,t=n.title;return(0,l.jsx)(f,{id:e,title:t},e)}))})}},866:function(n,e,t){t.d(e,{a:function(){return i}});var r=t(402),a=t(184),i=function(){return(0,a.jsx)(r.Yt,{visible:!0,height:"200",width:"200",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{marginTop:100,marginLeft:400},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})}},967:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,i,o,u,c=t(861),s=t(885),p=t(757),l=t.n(p),f=t(168),d=t(444),x=t(128),h=d.ZP.div(r||(r=(0,f.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),g=d.ZP.form(a||(a=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),v=d.ZP.input(i||(i=(0,f.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),m=d.ZP.button(o||(o=(0,f.Z)(["\n  display: inline-block;\n  padding: 5px;\n  position: relative;\n  width: 25px;\n  height: 25px;\n"]))),b=(0,d.ZP)(x.G4C)(u||(u=(0,f.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 2px;\n  left: 2px;\n"]))),w=t(791),Z=t(184),y=function(n){var e=n.onSubmit,t=(0,w.useState)(""),r=(0,s.Z)(t,2),a=r[0],i=r[1];return(0,Z.jsx)(h,{children:(0,Z.jsxs)(g,{autoComplete:"of",onSubmit:function(n){n.preventDefault(),""!==a.trim()?(e(a.toLowerCase()),i("")):alert("Enter valid text")},children:[(0,Z.jsx)("label",{htmlFor:"searchWord"}),(0,Z.jsx)(v,{id:"searchWord",type:"text",onChange:function(n){var e=n.target.value;i(e)},autoFocus:!0,name:"searchWord",placeholder:"Search movie",value:a}),(0,Z.jsx)(m,{type:"submit",children:(0,Z.jsx)(b,{})})]})})},k=t(893),j=t(390),_=t(477),S=t(866),P=t(731),C=function(){var n,e=(0,P.lr)(),t=(0,s.Z)(e,2),r=t[0],a=t[1],i=(0,w.useState)([]),o=(0,s.Z)(i,2),u=o[0],p=o[1],f=(0,w.useState)(null),d=(0,s.Z)(f,2),x=d[0],h=d[1],g=(0,w.useState)(!1),v=(0,s.Z)(g,2),m=v[0],b=v[1],C=null!==(n=r.get("query"))&&void 0!==n?n:"";(0,w.useEffect)((function(){if(C){var n=function(){var n=(0,c.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(!0),n.next=4,j.NO(C);case 4:e=n.sent,p(e),b(!1),n.next=14;break;case 9:throw n.prev=9,n.t0=n.catch(0),h(!0),b(!1),new Error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}}),[r,C]);return(0,Z.jsxs)("main",{children:[(0,Z.jsx)(y,{onSubmit:function(n){a(""!==n?{query:n}:{}),p([])}}),m&&(0,Z.jsx)(S.a,{}),u.length>0&&(0,Z.jsx)(k.r,{gallery:u}),x&&(0,Z.jsx)(_.P,{message:"Please, enter another word"}),0===u.length&&(0,Z.jsx)(_.P,{message:"Please, enter key word"})]})}},390:function(n,e,t){t.d(e,{JS:function(){return c},NO:function(){return f},Pg:function(){return s},fT:function(){return p},sR:function(){return l}});var r=t(861),a=t(757),i=t.n(a),o=t(388),u="e5b8bd1b82d4f5b68280cf1e2b92e5f6";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,t=e.data.results,n.abrupt("return",t.map((function(n){return{title:n.title,id:n.id}})));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a,c,s,p,l,f;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,a=r.title,c=r.overview,s=r.poster_path,p=r.vote_average,l=r.genres,f=r.release_date,n.abrupt("return",{title:a,overview:c,poster_path:s,vote_average:p,genres:l,release_date:f});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast.map((function(n){return{name:n.name,profile_path:n.profile_path,character:n.character}})));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results.map((function(n){return{author:n.author,content:n.content}})));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r.map((function(n){return{title:n.title,id:n.id}})));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=967.4512dd3c.chunk.js.map