(this.webpackJsonppart3=this.webpackJsonppart3||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),u=n(2),l=n.n(u),i=(n(37),n(4)),m=n(3),f=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return o.a.createElement("li",{className:"note"},e.content,o.a.createElement("button",{onClick:n},a))},s=function(){return l.a.get("/api/notes").then((function(t){return t.data}))},p=function(t){return l.a.post("/api/notes",t).then((function(t){return t.data}))},d=function(t,e){return l.a.put("".concat("/api/notes","/").concat(t),e).then((function(t){return t.data}))},b=function(t){var e=Object(a.useState)(t.notes),n=Object(m.a)(e,2),r=n[0],c=n[1],u=Object(a.useState)("a new note..."),l=Object(m.a)(u,2),b=l[0],E=l[1],g=Object(a.useState)(!0),v=Object(m.a)(g,2),h=v[0],O=v[1],j=Object(a.useState)(""),S=Object(m.a)(j,2),k=S[0],w=S[1],y=Object(a.useState)(""),I=Object(m.a)(y,2),N=(I[0],I[1]);Object(a.useEffect)((function(){console.log("effect"),s().then((function(t){console.log("promise fulfilled"),c(t)}))}),[]);var C=h?r:r.filter((function(t){return!0===t.important})),D=function(t){var e=t.message,n=t.type;return null===e?null:o.a.createElement("div",{className:n},e)};return o.a.createElement("div",null,o.a.createElement(D,{message:k}),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return O(!h)}},"show ",h?"important":"all")),o.a.createElement("ul",null,C.map((function(t){return o.a.createElement(f,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=r.find((function(e){return e.id===t})),n=Object(i.a)(Object(i.a)({},e),{},{important:!e.important});d(t,n).then((function(e){c(r.map((function(n){return n.id!==t?n:e})))})).catch((function(n){w("Note '".concat(e.content,"' was already removed from server")),N("error"),setTimeout((function(){w("")}),5e3),c(r.filter((function(e){return e.id!==t})))}))}(t.id)}})}))),o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log("button clicked",t.target);var e={content:b,date:(new Date).toISOString(),important:Math.random()<.5,id:r.length+1};p(e).then((function(t){c(r.concat(t)),E("")}))}},o.a.createElement("input",{value:b,onChange:function(t){console.log(t.target.value),E(t.target.value)}}),o.a.createElement("button",{type:"submit"},"save")))},E=function(){return o.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},o.a.createElement("br",null),o.a.createElement("em",null,"Note app, Andrei Ilie P\xeervan, software applier"))},g=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Notes"),o.a.createElement(b,{notes:[{id:1,content:"hello",important:!0},{id:2,content:"ghh",important:!1}]}),o.a.createElement(E,null))};c.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.67ee05fe.chunk.js.map