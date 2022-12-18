"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[336],{866:function(e,n,t){t.d(n,{a:function(){return i}});var r=t(402),a=t(184),i=function(){return(0,a.jsx)(r.Yt,{visible:!0,height:"200",width:"200",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{marginTop:100,marginLeft:400},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})}},336:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r,a,i,s=t(861),c=t(885),o=t(757),u=t.n(o),l=t(128),p=t(168),f=t(731),d=t(444),h=(0,d.ZP)(f.rU)(r||(r=(0,p.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px;\n  color: black;\n  background-color: #a8a8a8;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 12px;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  border-radius: 10px;\n\n  :hover {\n    background-color: orangered;\n    color: #ffffff;\n  }\n"]))),v=t(184),g=function(e){var n=e.to,t=e.children;return(0,v.jsxs)(h,{to:n,children:[(0,v.jsx)(l.jTe,{size:"16"}),t]})},x=t(866),m=d.ZP.div(a||(a=(0,p.Z)(["\n  display: flex;\n  gap: 20px;\n  justify-content: centre;\n  align-items: centre;\n"]))),w=d.ZP.div(i||(i=(0,p.Z)(["\n  width: 100%;\n  width: 500px;\n"]))),j=t(739),b=function(e){var n=e.movie,t=(0,j.TH)(),r=n.title,a=n.overview,i=n.poster_path,s=n.vote_average,c=n.genres,o=n.release_date.slice(0,4),u=null!==i?"https://image.tmdb.org/t/p/w500/".concat(i):"https://www.bworldonline.com/wp-content/uploads/2022/04/cinema02_14-01.jpg",l=10*s.toFixed(0),p=c.length>0?c.map((function(e){return e.name})).join(", "):"No information";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(m,{children:[(0,v.jsx)(w,{children:(0,v.jsx)("img",{src:u,alt:r,width:"500",height:"700"})}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h2",{children:[r," (",o,")"]}),(0,v.jsxs)("p",{children:["User Score: ",(0,v.jsxs)("span",{children:[l,"%"]})," "]}),(0,v.jsx)("b",{children:"Overview:"}),(0,v.jsx)("p",{children:a}),(0,v.jsx)("b",{children:"Genres:"}),(0,v.jsx)("p",{children:p})]})]}),(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(f.rU,{to:"cast",state:{from:t},children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(f.rU,{to:"reviews",state:{from:t},children:"Reviews"})})]})]})},k=t(477),_=t(791),Z=t(390),y=function(){var e,n,t=(0,j.TH)(),r=(0,j.UO)().moviesId,a=(0,_.useState)(null),i=(0,c.Z)(a,2),o=i[0],l=i[1],p=(0,_.useState)(!1),f=(0,c.Z)(p,2),d=f[0],h=f[1],m=(0,_.useState)(!1),w=(0,c.Z)(m,2),y=w[0],S=w[1];(0,_.useEffect)((function(){var e=function(){var e=(0,s.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,Z.Pg(r);case 4:n=e.sent,l(n),h(!1),e.next=14;break;case 9:throw e.prev=9,e.t0=e.catch(0),S(!0),h(!1),new Error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]);var U=null!==(e=null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,v.jsxs)("main",{children:[y&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g,{to:U,children:"Back to movies"}),(0,v.jsx)(k.P,{message:"Please, try again"})]}),d&&(0,v.jsx)(x.a,{}),!d&&!y&&o&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g,{to:U,children:"Back to movies"}),(0,v.jsx)(b,{movie:o})]}),(0,v.jsx)(_.Suspense,{fallback:(0,v.jsx)(k.P,{message:"Loading subpage..."}),children:(0,v.jsx)(j.j3,{})})]})}},390:function(e,n,t){t.d(n,{JS:function(){return o},NO:function(){return f},Pg:function(){return u},fT:function(){return l},sR:function(){return p}});var r=t(861),a=t(757),i=t.n(a),s=t(388),c="e5b8bd1b82d4f5b68280cf1e2b92e5f6";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day?api_key=".concat(c));case 2:return n=e.sent,t=n.data.results,e.abrupt("return",t.map((function(e){return{title:e.title,id:e.id}})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a,o,u,l,p,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,r=t.data,a=r.title,o=r.overview,u=r.poster_path,l=r.vote_average,p=r.genres,f=r.release_date,e.abrupt("return",{title:a,overview:o,poster_path:u,vote_average:l,genres:p,release_date:f});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.cast.map((function(e){return{name:e.name,profile_path:e.profile_path,character:e.character}})));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results.map((function(e){return{author:e.author,content:e.content}})));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,r=t.data.results,console.log(r.map((function(e){return{title:e.title,id:e.id}}))),e.abrupt("return",r.map((function(e){return{title:e.title,id:e.id}})));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=336.a31ab7c5.chunk.js.map