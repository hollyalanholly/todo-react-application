(this["webpackJsonptodo-react-application"]=this["webpackJsonptodo-react-application"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(2),r=a.n(c),o=(a(9),a(3));a(10);var m=function(e){var t=(new Date).toDateString();return n.a.createElement("header",null,n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg col-lg-5 header-toggle"},n.a.createElement("div",{className:"row header-toggle__row"},n.a.createElement("div",{className:"btn-group btn-group-toggle","data-toggle":"buttons"},n.a.createElement("label",{className:"btn btn-secondary active"},n.a.createElement("input",{type:"radio",name:"options",id:"option1"})," All to'do's"),n.a.createElement("label",{className:"btn btn-secondary"},n.a.createElement("input",{type:"radio",name:"options",id:"option2",checked:!0}),"This wk to-do's")),n.a.createElement("br",null)),n.a.createElement("div",{className:"row-2"},n.a.createElement("h1",null," Holly's Mega To-do List"),n.a.createElement("br",null)),n.a.createElement("div",{className:"row-date"},n.a.createElement("h2",null,n.a.createElement("strong",null,t)),n.a.createElement("br",null))),n.a.createElement("div",{className:"col-lg col-lg-7"},n.a.createElement("form",{className:"new-todo-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("input",{type:"text",className:"form-control",placeholder:"To do..."}))),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-4"},n.a.createElement("input",{id:"due-date",type:"date",className:"form-control",placeholder:"Due Date"})),n.a.createElement("div",{className:"col-12 col-md-2"},n.a.createElement("select",{className:"custom-select mr-sm-2",id:"inlineFormCustomSelect"},n.a.createElement("option",{selected:!0},"Priority..."),n.a.createElement("option",{id:"high",value:"1"},"High"),n.a.createElement("option",{id:"medium",value:"2"},"Medium"),n.a.createElement("option",{id:"low",value:"3"},"Low"))),n.a.createElement("div",{className:"col-12 col-md-6"},n.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm btn-block"},"Add to-do"))),n.a.createElement("br",null))))))};a(11);var i=function(e){return n.a.createElement("div",{className:"task-item "},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-8"},n.a.createElement("div",{className:"task-item ".concat(e.priority)},n.a.createElement("p",null,e.text))),n.a.createElement("div",{className:"col-4 col-md-2"},n.a.createElement("div",{className:"task-item ".concat(e.priority)},n.a.createElement("p",null,e.dueDate))),n.a.createElement("div",{className:"col-2 col-md-1"},!1===e.completed&&n.a.createElement("button",{type:"button",className:"btn btn-secondary"},"done")),n.a.createElement("div",{className:"col-2 col-md-1"},n.a.createElement("button",{type:"button",className:"btn btn-secondary"},"delete"))))};a(12);a(13);a(14);var s=function(){return n.a.createElement("h3",null,"THIS WEEK's to-do's")};a(15);var d=function(e){return n.a.createElement("div",{className:"task-item all"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-8"},n.a.createElement("div",{className:"task-item ".concat(e.priority)},n.a.createElement("p",null,e.text))),n.a.createElement("div",{className:"col-4 col-md-2"},n.a.createElement("div",{className:"task-item ".concat(e.priority)},n.a.createElement("p",null,e.dueDate))),n.a.createElement("div",{className:"col-2 col-md-1"},n.a.createElement("button",{type:"button",className:"btn btn-secondary"},"done")),n.a.createElement("div",{className:"col-2 col-md-1"},n.a.createElement("button",{type:"button",className:"btn btn-secondary"},"delete"))))};a(16);var u=function(){return n.a.createElement("h3",null,"ALL FUTURE TODO's ")};a(17);var E=function(e){return n.a.createElement("div",{className:"task-item done-item"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-9 col-md-11"},n.a.createElement("div",{className:"done-item ".concat(e.priority)},n.a.createElement("p",{className:"Done_text"},e.text))),n.a.createElement("div",{className:"col-2 col-md-1"},n.a.createElement("button",{type:"button",className:"btn btn-secondary"},"undo"))))};a(18);var p=function(){return n.a.createElement("h3",null,"ALL DONE! You smashed it!")};a(19);var v=function(){return n.a.createElement("footer",{className:"text-center"},n.a.createElement("p",null,n.a.createElement("a",{href:"headerToggle/HeaderToggle.js"},"Nip back to the top of the page")))};var b=function(){var e=Object(l.useState)([{text:"Wash Alan",completed:!1,dueDate:"2020-05-17",priority:"high"},{text:"Find the cat",completed:!1,dueDate:"2020-05-17",priority:"medium"},{text:"Make a white Russian",completed:!0,dueDate:"2020-05-01",priority:"doneColor"},{text:"Feed children",completed:!0,dueDate:"2020-06-07",priority:"doneColor"},{text:"Shave little shorts into Jeffery the cat",completed:!1,dueDate:"2020-07-07",priority:"low"},{text:"Eat Cheese",completed:!0,dueDate:"2020-06-07",priority:"doneColor"},{text:"Remove and cut up the entire back garden hedge",completed:!0,dueDate:"2020-06-07",priority:"doneColor"},{text:"Get into bin",completed:!0,dueDate:"2020-06-07",priority:"doneColor"}]),t=Object(o.a)(e,2),a=t[0],c=(t[1],a.filter((function(e){return!e.completed&&e.dueDate<"2020-05-18"}))),r=a.filter((function(e){return!e.completed})),b=a.filter((function(e){return e.completed}));return n.a.createElement("div",{className:"Container"},n.a.createElement("div",{className:"App"},n.a.createElement(m,null),n.a.createElement("br",null),n.a.createElement(s,null),n.a.createElement("div",null,c.map((function(e){return n.a.createElement(i,{key:e.text,text:e.text,dueDate:e.dueDate,completed:e.completed,priority:e.priority})}))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(u,null),r.map((function(e){return n.a.createElement(d,{key:e.text,text:e.text,dueDate:e.dueDate,completed:e.completed,priority:e.priority})})),n.a.createElement("div",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(p,null),n.a.createElement("div",null,b.map((function(e){return n.a.createElement(E,{key:e.text,text:e.text,completed:e.completed,priority:e.priority})}))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.0bbfaf7a.chunk.js.map