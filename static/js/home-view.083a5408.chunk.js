"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[8],{174:function(n,t,e){e.d(t,{Z:function(){return h}});var o,r,c,i=e(168),a=e(751),u=e(501),s=a.ZP.ol(o||(o=(0,i.Z)(["\n  list-style-type: decimal;\n  list-style-position: inside;\n"]))),f=a.ZP.li(r||(r=(0,i.Z)(["\n  padding-bottom: 8px;\n  &::marker {\n    color: #2a363b;\n    font-size: 30px;\n    font-weight: 500;\n  }\n  &:hover {\n    color: #dc6300;\n  }\n"]))),d=(0,a.ZP)(u.rU)(c||(c=(0,i.Z)(["\n  color: #2a363b;\n  font-size: 30px;\n  font-weight: 500;\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    color: #dc6300;\n  }\n  /* &:visited {\n    color: #634688;\n  } */\n"]))),l=e(871),p=e(184);function h(n){var t=n.movies,e=(0,l.TH)();return console.log(e),(0,p.jsx)(s,{children:t.map((function(n){return(0,p.jsx)(f,{children:(0,p.jsx)(d,{to:"/movies/".concat(n.id),state:{from:e},children:n.original_title})},n.id)}))})}},920:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var o,r=e(885),c=e(952),i=e(168),a=e(751).ZP.h1(o||(o=(0,i.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #dc6300;\n"]))),u=e(174),s=e(791),f=e(184);function d(){var n=(0,s.useState)(null),t=(0,r.Z)(n,2),e=t[0],o=t[1];return(0,s.useEffect)((function(){c.F2().then((function(n){return n.results})).then(o)}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{children:"TOP 20 today"}),e&&(0,f.jsx)(u.Z,{movies:e})]})}},952:function(n,t,e){e.d(t,{F2:function(){return f},D6:function(){return d},Je:function(){return l},Z4:function(){return p},w9:function(){return h}});var o=e(861),r=e(757),c=e.n(r),i="bffba07cef2d165abd193feceb46d279",a="https://api.themoviedb.org/3";function u(){return s.apply(this,arguments)}function s(){return s=(0,o.Z)(c().mark((function n(){var t,e,o,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e=r.length>1&&void 0!==r[1]?r[1]:{},n.next=4,fetch(t,e);case 4:if(!(o=n.sent).ok){n.next=11;break}return n.next=8,o.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return u("".concat(a,"/trending/movie/day?api_key=").concat(i))}function d(n){return u("".concat(a,"/movie/").concat(n,"?api_key=").concat(i))}function l(n){return u("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(i))}function p(n){return u("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))}function h(n){return u("".concat(a,"/search/movie?query=").concat(n,"&api_key=").concat(i,"&include_adult=false"))}}}]);
//# sourceMappingURL=home-view.083a5408.chunk.js.map