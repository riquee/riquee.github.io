(this["webpackJsonpclone-slido"]=this["webpackJsonpclone-slido"]||[]).push([[0],{33:function(e,t,n){"use strict";n.r(t);var s=n(21),c=n.n(s),a=n(11),r=n(14),j=n(0),i=n(2),o=n(15),b=n(13),u=n(6),O=n(1),l={nameUser:"",question:"",likes:0},d=function(){var e=Object(j.useContext)(f),t=e.state,n=e.state.tasks,s=e.setState,c=Object(j.useState)(l),a=Object(r.a)(c,2),i=a[0],d=a[1],x=i.question,h=i.nameUser,p=function(e){var t=e.target,n=t.name,s=t.value;d(Object(u.a)(Object(u.a)({},i),{},Object(b.a)({},n,s)))};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"question",children:["Pergunta:",Object(O.jsx)("input",{type:"text",name:"question",value:x,onChange:p})]}),Object(O.jsxs)("label",{htmlFor:"nameUser",children:["Nome:",Object(O.jsx)("input",{type:"text",name:"nameUser",value:h,onChange:p})]}),Object(O.jsx)("button",{type:"button",onClick:function(){s(Object(u.a)(Object(u.a)({},t),{},{tasks:[].concat(Object(o.a)(n),[i])})),d(l)},children:"Enviar"})]})},x=function(e){var t=e.task,n=Object(j.useContext)(f),s=n.state,c=n.state,a=c.tasks,r=c.answered,i=n.setState,b=t.nameUser,l=t.question,d=t.likes;return Object(O.jsxs)("div",{className:"task",children:[Object(O.jsx)("h3",{children:b}),Object(O.jsx)("p",{children:l}),Object(O.jsx)("p",{onClick:function(){var e=a.map((function(e){return e.question===t.question?Object(u.a)(Object(u.a)({},e),{},{likes:e.likes+1}):e}));i(Object(u.a)(Object(u.a)({},s),{},{tasks:e}))},children:d}),Object(O.jsxs)("label",{name:"selectAnswer",children:["Marcar como respondida:",Object(O.jsx)("input",{type:"checkbox",onChange:function(){var e=a.filter((function(e){return e.question!==t.question}));i(Object(u.a)(Object(u.a)({},s),{},{answered:[].concat(Object(o.a)(r),[t]),tasks:e}))}})]})]})},h=function(){return Object(j.useContext)(f).state.tasks.sort((function(e,t){return t.likes-e.likes})).map((function(e,t){return Object(O.jsx)(x,{task:e},"".concat(e.nameUser," - ").concat(t))}))},p=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:"Fa\xe7a sua pergunta"}),Object(O.jsx)(d,{}),Object(O.jsx)(h,{})]})},m=function(){var e=Object(j.useContext)(f).state.answered.map((function(e,t){var n=e.question,s=e.nameUser;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:s}),Object(O.jsx)("p",{children:n})]},"".concat(s," - answer - ").concat(t))}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Perguntas respondidas"}),e]})},k=function(){return Object(O.jsxs)("nav",{children:[Object(O.jsx)(a.b,{to:"/",children:"Home"}),Object(O.jsx)(a.b,{to:"/respondidas",children:"Respostas"})]})},v={tasks:[],answered:[]},f=Object(j.createContext)();var q=function(){var e=Object(j.useState)(v),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(O.jsxs)(f.Provider,{value:{state:n,setState:s},children:[Object(O.jsx)("h1",{children:"Slido"}),Object(O.jsx)(k,{}),Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{path:"/respondidas",component:m}),Object(O.jsx)(i.a,{path:"/",component:p})]})]})};c.a.render(Object(O.jsx)(a.a,{children:Object(O.jsx)(q,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.a0335465.chunk.js.map