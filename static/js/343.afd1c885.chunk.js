"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[343],{343:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var r,i,s,a,c,l,o,d,h=t(861),x=t(439),u=t(757),p=t.n(u),f=t(342),v=t(689),j=t(168),m=t(444),g=t(87),Z=(0,m.ZP)(g.rU)(r||(r=(0,j.Z)(["\n  display: inline-block;\n  margin: 10px 0;\n  padding: 8px 16px;\n  text-decoration: none;\n  font-weight: 500;\n  color: #144470;\n  background-color: #c4c4c4;\n"]))),b=t(184),w=function(e){var n,t,r=e.defLink,i=null!==(n=null===(t=(0,v.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:r.from;return(0,b.jsx)("div",{children:(0,b.jsx)(Z,{to:i,children:" Go Back "})})},k=t(83),_=m.ZP.div(i||(i=(0,j.Z)(["\n  display: flex;\n  border-bottom: 1px solid #b3b3b3;\n"]))),P=m.ZP.h1(s||(s=(0,j.Z)(["\n  margin-left: 20px;\n  font-weight: 500;\n"]))),y=m.ZP.div(a||(a=(0,j.Z)(["\n  margin-right: 20px;\n"]))),C=m.ZP.div(c||(c=(0,j.Z)(["\n  //margin-left: 20px;\n  //font-weight: 500;\n"]))),L=m.ZP.div(l||(l=(0,j.Z)(["\n  border-bottom: 1px solid #b3b3b3;\n"]))),O=m.ZP.ul(o||(o=(0,j.Z)(["\n  display: flex;\n"]))),S=m.ZP.li(d||(d=(0,j.Z)(["\n  list-style-type: none;\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n"]))),F=function(e){var n=e.detailsMovie,t=k.b.tmdbImageSrv,r=k.b.noImage;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(_,{children:[(0,b.jsx)(y,{children:(0,b.jsx)("img",{src:n.poster_path?"".concat(t,"w300").concat(n.poster_path):r,alt:n.original_title,width:"300px"})}),(0,b.jsxs)(C,{children:[(0,b.jsx)(P,{children:" ".concat(n.original_title," (").concat(new Date(n.release_date).getFullYear(),")")}),(0,b.jsxs)("p",{children:["User score: ",Math.trunc(10*n.vote_average),"%"]}),(0,b.jsx)("h2",{children:"Overview"}),(0,b.jsx)("p",{children:n.overview}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{children:"Genres"}),(0,b.jsx)(O,{children:n.genres.map((function(e){return(0,b.jsx)(S,{children:e.name},e.id)}))})]})]})]}),(0,b.jsxs)(L,{children:[(0,b.jsx)("h2",{children:"Additional information"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsx)(g.OL,{to:"cast",replace:!0,children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(g.OL,{to:"reviews",replace:!0,children:"Reviews"})})]})]}),(0,b.jsx)(v.j3,{})]})},I=t(791),M=function(){var e=(0,v.UO)().movieId,n=(0,I.useState)(""),t=(0,x.Z)(n,2),r=t[0],i=t[1],s=(0,I.useState)(!1),a=(0,x.Z)(s,2),c=a[0],l=a[1],o=(0,I.useState)(""),d=(0,x.Z)(o,2),u=d[0],j=d[1],m=(0,v.TH)(),g=function(){var n=(0,h.Z)(p().mark((function n(){var t,r,s;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e),n.next=3,(0,f.C)(t);case 3:r=n.sent,s=r.data,i(s),l(!0);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,I.useEffect)((function(){g(),j(m.state)}),[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(w,{defLink:u}),c&&(0,b.jsx)(F,{detailsMovie:r,isReplied:c})]})}}}]);
//# sourceMappingURL=343.afd1c885.chunk.js.map