"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[163],{952:function(n,e,t){t.d(e,{F2:function(){return s},D6:function(){return f},Je:function(){return l},Z4:function(){return d},w9:function(){return h}});var r=t(861),o=t(757),i=t.n(o),c="bffba07cef2d165abd193feceb46d279",a="https://api.themoviedb.org/3";function u(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(i().mark((function n(){var e,t,r,o=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",t=o.length>1&&void 0!==o[1]?o[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function s(){return u("".concat(a,"/trending/movie/day?api_key=").concat(c))}function f(n){return u("".concat(a,"/movie/").concat(n,"?api_key=").concat(c))}function l(n){return u("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(c))}function d(n){return u("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))}function h(n){return u("".concat(a,"/search/movie?query=").concat(n,"&api_key=").concat(c,"&include_adult=false"))}},64:function(n,e,t){function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}t.r(e),t.d(e,{default:function(){return k}});var c,a,u,p,s=t(885),f=t(168),l=t(751),d=l.ZP.form(c||(c=(0,f.Z)(["\n  display: flex;\n  margin-top: 20px;\n  margin-bottom: 32px;\n  /* margin-left: auto; */\n  margin-right: auto;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  -webkit-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);\n"]))),h=l.ZP.button(a||(a=(0,f.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),b=l.ZP.span(u||(u=(0,f.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),x=l.ZP.input(p||(p=(0,f.Z)(["\n  display: inline-block;\n  //   width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),g=t(791),m=t(184);function w(n){var e=n.onSubmit,t=(0,g.useState)(""),r=(0,s.Z)(t,2),o=r[0],i=r[1];return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(d,{onSubmit:function(n){n.preventDefault(),""!==o.trim()&&e(o)},children:[(0,m.jsx)(h,{type:"submit",children:(0,m.jsx)(b,{children:"Search"})}),(0,m.jsx)(x,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(n){i(n.currentTarget.value.toLowerCase())}})]})})}var y=t(501),v=t(871),j=t(952);function k(n){n.keyword;var e=(0,g.useState)(""),t=(0,s.Z)(e,2),r=t[0],o=t[1],c=(0,g.useState)([]),a=(0,s.Z)(c,2),u=(a[0],a[1]),p=(0,v.TH)(),f=(0,v.s0)(),l=(0,y.lr)(),d=(0,s.Z)(l,1)[0].get("query");(0,g.useEffect)((function(){""!==r&&j.w9(r).then((function(n){return n.results})).then(u)}),[r]),(0,g.useEffect)((function(){null!==d&&j.w9(d).then((function(n){return n.results})).then(u)}),[d]);return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(w,{onSubmit:function(n){o(n),f(i(i({},p),{},{search:"query=".concat(n)}))}})})}}}]);
//# sourceMappingURL=movies-view.392d768b.chunk.js.map