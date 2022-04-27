"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[164],{4522:function(e,t,a){var n=a(4569),i=a.n(n),s="https://api.themoviedb.org/3",c="d0d0c76743394dffaefbccf1872ae919",r={fetchTrendingMovies:function(){return i().get("".concat(s,"/trending/movie/day?api_key=").concat(c)).then((function(e){return e.data.results}))},fetchSearchMovies:function(e){return i().get("".concat(s,"/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.data.results}))},fetchMovie:function(e){return i().get("".concat(s,"/movie/").concat(e,"?api_key=").concat(c,"&append_to_response=images&language=en-US")).then((function(e){return e.data}))},fetchCast:function(e){return i().get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(c,"&language=en-US")).then((function(e){return e.data}))},fetchReviews:function(e){return i().get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US")).then((function(e){return e.data}))}};t.Z=r},8164:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var n=a(8152),i=a(2791),s=a(1523),c=a(9271),r=a(6153),o="Loading_spinner__s5eU9",l=a(184),u=function(){return(0,l.jsx)("div",{className:o,children:(0,l.jsx)(r.Z,{type:"Circles",color:"#c75353",height:100,width:100})})},h="Cast_text__P2vgu",_="Cast_list__GlWio",m="Cast_list_item__Fn+lK",d="Cast_img_wrapp__ahMMh",f="Cast_author_img__k1xcl",v="Cast_titel_error__H8VA0",p=a(4522),x=a(5485);function g(e){var t=e.id,a=(0,i.useState)(null),s=(0,n.Z)(a,2),c=s[0],r=s[1],o=(0,i.useState)(!1),g=(0,n.Z)(o,2),j=g[0],w=g[1],N=(0,i.useState)(!1),M=(0,n.Z)(N,2),k=M[0],D=M[1];return(0,i.useEffect)((function(){w(!0),p.Z.fetchCast(t).then((function(e){return e.cast.map((function(e){return{name:e.name,character:e.character,img:e.profile_path}}))})).then((function(e){e.length>0?r(e):D(!0)})).catch((function(e){return console.log(e)})).finally(w(!1))}),[t]),(0,i.useLayoutEffect)((function(){window.scrollTo({top:400,behavior:"smooth"})}),[c,k]),(0,l.jsxs)(l.Fragment,{children:[j&&(0,l.jsx)(u,{}),!j&&c&&(0,l.jsx)("ul",{className:_,children:c.map((function(e){var t=e.name,a=e.character,n=e.img,i=n?"".concat("https://image.tmdb.org/t/p/w154").concat(n):x;return(0,l.jsxs)("li",{className:m,children:[(0,l.jsx)("div",{className:d,children:(0,l.jsx)("img",{className:f,src:i,alt:"actor"})}),(0,l.jsx)("p",{className:h,children:t}),(0,l.jsxs)("p",{className:h,children:["Character: ",a]})]},a+t)}))}),!j&&k&&(0,l.jsx)("h4",{className:v,children:"DATA NOT FOUND"})]})}var j="Reviews_list__okdpy",w="Reviews_text__EqLvx",N="Reviews_error__urRRw";function M(e){var t=e.id,a=(0,i.useState)(null),s=(0,n.Z)(a,2),c=s[0],r=s[1],o=(0,i.useState)(!1),h=(0,n.Z)(o,2),_=h[0],m=h[1],d=(0,i.useState)(!1),f=(0,n.Z)(d,2),v=f[0],x=f[1];return(0,i.useEffect)((function(){m(!0),p.Z.fetchReviews(t).then((function(e){return e.results.map((function(e){return{author:e.author,content:e.content,id:e.id}}))})).then((function(e){e.length>0?r(e):x(!0)})).catch((function(e){return console.log(e)})).finally(m(!1))}),[t]),(0,i.useLayoutEffect)((function(){window.scrollTo({top:400,behavior:"smooth"})}),[c,v]),(0,l.jsxs)(l.Fragment,{children:[!_&&c&&(0,l.jsx)("ul",{className:j,children:c.map((function(e){var t=e.author,a=e.content,n=e.id;return(0,l.jsxs)("li",{children:[(0,l.jsxs)("h3",{children:["Author: ",t]}),(0,l.jsx)("p",{className:w,children:a})]},n)}))}),_&&(0,l.jsx)(u,{}),!_&&v&&(0,l.jsx)("h2",{className:N,children:"We don't have any reviews for this movie"})]})}var k="MovieDetailsView_movie_page__9aY6X",D="MovieDetailsView_btn__5QQRf",y="MovieDetailsView_about_film__l-aDe",b="MovieDetailsView_poster_wrap__VgHy9",S="MovieDetailsView_poster__Y8-pX",V="MovieDetailsView_inform__XjiSR",C="MovieDetailsView_title__UY7Dk",Z="MovieDetailsView_inform_item__gtzGI",U="MovieDetailsView_inform_item_titel__3qV5a",R="MovieDetailsView_information__U54xZ",A="MovieDetailsView_information_titel__r8fsk",E="MovieDetailsView_information_item__oMYDS";function T(){var e=(0,i.useState)(null),t=(0,n.Z)(e,2),a=t[0],r=t[1],o=(0,c.TH)().state,u=(0,c.$B)(),h=u.params.movieID,_=u.path,m=u.url,d=(0,c.k6)();(0,i.useEffect)((function(){var e=Number(h);p.Z.fetchMovie(e).then(r)}),[h]);if(!a)return null;var f=a.id,v=a.genres,j=a.original_title,w=a.poster_path,N=a.overview,T=a.vote_average,F=a.release_date,G=v.map((function(e){return e.name})).join(" "),L="".concat("https://image.tmdb.org/t/p/w300").concat(w),W=w?L:x;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:k,children:[(0,l.jsx)("button",{className:D,type:"button",onClick:function(){o?d.push({pathname:o.from.pathname,search:o.from.search}):d.push("/")},children:"<- Go beck"}),(0,l.jsxs)("div",{className:y,children:[(0,l.jsx)("div",{className:b,children:(0,l.jsx)("img",{className:S,src:W,alt:"poster"})}),(0,l.jsxs)("div",{className:V,children:[(0,l.jsx)("h2",{className:C,children:"".concat(j,"  (").concat(Number.parseInt(F),")")}),(0,l.jsxs)("p",{className:Z,children:["User Score: ",10*T,"%"]}),(0,l.jsx)("h3",{className:U,children:"Overview"}),(0,l.jsx)("p",{className:Z,children:N}),(0,l.jsx)("h3",{className:U,children:"Genres"}),(0,l.jsx)("p",{className:Z,children:G})]})]})]}),(0,l.jsxs)("div",{className:R,children:[(0,l.jsx)("h3",{className:A,children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:E,children:(0,l.jsx)(s.rU,{to:{pathname:"".concat(m,"/cast"),state:o?{from:o.from}:null},children:"Cast"})}),(0,l.jsx)("li",{className:E,children:(0,l.jsx)(s.rU,{to:{pathname:"".concat(m,"/reviews"),state:o?{from:o.from}:null},children:"Reviews"})})]})]}),(0,l.jsxs)(c.rs,{children:[(0,l.jsx)(c.AW,{path:"".concat(_,"/cast"),children:(0,l.jsx)(g,{id:f})}),(0,l.jsx)(c.AW,{path:"".concat(_,"/reviews"),children:(0,l.jsx)(M,{id:f})})]})]})}},5485:function(e,t,a){e.exports=a.p+"static/media/unnamed.31d333fad5e1a8014549.png"}}]);
//# sourceMappingURL=164.41e099f1.chunk.js.map