"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{414:function(e,n,t){t.d(n,{Bt:function(){return v},Tg:function(){return u},d5:function(){return d},h_:function(){return f},mJ:function(){return l}});var r=t(861),i=t(757),c=t.n(i),a="https://api.themoviedb.org/3",o="d0d0c76743394dffaefbccf1872ae919";function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(a,"/trending/movie/week?api_key=").concat(o)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(a,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n,"&page=1&include_adult=true")).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(a,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US")).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US")).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},779:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(885),i=t(982),c=t(414),a=t(791),o=t(184);function u(e){var n=e.movieId,t=(0,a.useState)([]),u=(0,r.Z)(t,2),s=u[0],l=u[1];return(0,a.useEffect)((function(){(0,c.Bt)(n).then((function(e){return l((0,i.Z)(e.results))}))}),[n]),(0,o.jsx)("ul",{children:0===s.length?(0,o.jsx)("p",{children:"We don't have any reviews for this movie"}):s.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h3",{children:["Author: ",e.author]}),(0,o.jsx)("p",{children:e.content})]},e.id)}))})}var s="MovieCast_thumb__FtjSc";function l(e){var n=e.movieId,t=(0,a.useState)(null),u=(0,r.Z)(t,2),l=u[0],h=u[1];return(0,a.useEffect)((function(){(0,c.d5)(n).then((function(e){return h((0,i.Z)(e.cast))}))}),[n]),(0,o.jsx)("ul",{children:l&&l.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("div",{className:s,children:(0,o.jsx)("img",{src:e.profile_path?"https://www.themoviedb.org/t/p/w1280".concat(e.profile_path):"http://dummyimage.com/100",alt:""})}),(0,o.jsx)("p",{children:e.original_name}),(0,o.jsx)("p",{children:e.character})]},e.id)}))})}var h=t(871),f=t(501),p={thumb:"MovieDetailsView_thumb__ZuIX-",button:"MovieDetailsView_button__b8T39",info:"MovieDetailsView_info__E2hx+",description:"MovieDetailsView_description__W5LbK"};function d(){var e=(0,h.UO)().movieId,n=(0,a.useState)(null),t=(0,r.Z)(n,2),i=t[0],s=t[1],d=(0,h.s0)();return(0,a.useEffect)((function(){(0,c.h_)(e).then((function(e){return s(e)}))}),[e]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:p.card,children:[(0,o.jsx)("button",{className:p.button,type:"button",onClick:function(){return d(-1)},children:"<- Go beck"}),i&&(0,o.jsxs)("div",{className:p.info,children:[(0,o.jsx)("div",{className:p.thumb,children:(0,o.jsx)("img",{src:"https://www.themoviedb.org/t/p/w1280".concat(i.poster_path),alt:""})}),(0,o.jsxs)("div",{className:p.description,children:[(0,o.jsxs)("h2",{children:[i.original_title," (",i.release_date.slice(0,4),")"]}),(0,o.jsxs)("p",{children:["User score: ",i.vote_average]}),(0,o.jsx)("h3",{children:"Overview"}),(0,o.jsx)("p",{children:i.overview}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsx)("ul",{children:i.genres.map((function(e){return(0,o.jsx)("li",{children:e.name},e.id)}))})]})]})]}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(f.OL,{to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(f.OL,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]}),(0,o.jsxs)(h.Z5,{children:[(0,o.jsx)(h.AW,{path:"cast",element:(0,o.jsx)(l,{movieId:e})}),(0,o.jsx)(h.AW,{path:"reviews",element:(0,o.jsx)(u,{movieId:e})})]})]})}},982:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(907);var i=t(181);function c(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=779.cdb04b37.chunk.js.map