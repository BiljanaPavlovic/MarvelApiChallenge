(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),i=c(4),s=c.n(i),o=(c(11),c(5)),j=c(2);function l(){return fetch("".concat("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=485f93e50e06dc2ca9a511f4658d925c&hash=5adf938555664e1f9c48a993eacbbecc")).then((function(e){return e.json()}))}function u(e){var t=e.name,c=e.description,a=e.image;e.save;return Object(n.jsxs)("div",{className:"one-character",children:[Object(n.jsx)("h3",{children:t}),Object(n.jsx)("img",{src:a,alt:"character"}),Object(n.jsx)("p",{children:c}),Object(n.jsx)("button",{onClick:function(){return function(e,t,c){var n={name:e,image:t,description:c},a=JSON.parse(localStorage.getItem("characters"));a.find((function(e){return e.name===n.name}))||a.push(n),localStorage.setItem("characters",JSON.stringify(a)),window.location.reload()}(t,a,c)},children:"save"})]})}function b(){var e,t=Object(a.useState)([]),c=Object(j.a)(t,2),r=c[0],i=c[1],s=Object(a.useState)(""),b=Object(j.a)(s,2),d=b[0],h=b[1],f=Object(a.useState)([]),O=Object(j.a)(f,2),m=O[0],g=O[1],p=localStorage.getItem("characters");return p?e=JSON.parse(p):(e=[],localStorage.setItem("characters",JSON.stringify(e))),Object(a.useEffect)((function(){l().then((function(e){console.log(e),i(e.data.results)}))}),[]),Object(a.useEffect)((function(){g(r.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())})))}),[d,r]),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"container",children:e.map((function(e){return Object(n.jsx)(u,{name:e.name,description:e.description,image:e.image},e.id)}))}),Object(n.jsx)("input",{type:"text",placeholder:"\ud83d\udd0d Search",className:"input-search",onChange:function(e){return h(e.target.value)}}),Object(n.jsx)("div",{className:"container",children:m.map((function(e,t){return Object(n.jsx)(u,Object(o.a)({name:e.name,description:e.description,image:e.thumbnail.path+"/portrait_medium.jpg"},e),t)}))})]})}function d(){return Object(n.jsx)("div",{children:Object(n.jsx)(b,{})})}function h(e){e.attributionText;var t=Object(a.useState)([]),c=Object(j.a)(t,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){l().then((function(e){i(e.attributionText)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"Biljana Pavlovic"}),Object(n.jsx)("p",{children:r})]})}function f(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:"/MarvelApiChallenge/marvel.jpg",alt:"naslovna fotografija",className:"marvel-img"}),Object(n.jsx)("h1",{children:"Marvel API Challenge"}),Object(n.jsx)("button",{onClick:function(){localStorage.clear(),window.location.reload()},children:"clear bookmarks"})]})}var O=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(f,{}),Object(n.jsx)(d,{}),Object(n.jsx)(h,{})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),m()}},[[12,1,2]]]);
//# sourceMappingURL=main.cc553969.chunk.js.map