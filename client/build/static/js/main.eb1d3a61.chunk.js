(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(30),r=a.n(o),c=a(7),i=a(33),s=a(19),u=a(20),m=a(25),h=a(21),d=a(26),f=(a(90),function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e),"\u2717")}),p=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both"},className:"jumbotron"},t)},E=a(15),b=a.n(E),v={getBooks:function(){return b.a.get("/api/books")},getBook:function(e){return b.a.get("/api/books/"+e)},deleteBook:function(e){return b.a.delete("/api/books/"+e)},saveBook:function(e){return b.a.post("/api/books",e)},getLoads:function(){return b.a.get("/api/loads")},getLoad:function(e){return b.a.get("/api/loads/"+e)},deleteLoad:function(e){return b.a.delete("/api/loads/"+e)},saveLoad:function(e){return b.a.post("/api/loads",e)}},g=function(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)},k=function(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)},j=function(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)},y=(a(111),function(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}),C=function(e){return l.a.createElement("li",{className:"list-group-item"},e.children)},O=function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))},B=function(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)},w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],title:"",author:""},a.loadBooks=function(){v.getBooks().then(function(e){return a.setState({books:e.data,title:"",author:""})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){v.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(i.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.title&&a.state.author&&v.saveBook({title:a.state.title,author:a.state.author}).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(k,{fluid:!0},l.a.createElement(j,null,l.a.createElement(g,{size:"md-6"},l.a.createElement(p,null,l.a.createElement("h1",null,"What Books Should I Read?")),l.a.createElement("form",null,l.a.createElement(O,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),l.a.createElement(O,{value:this.state.author,onChange:this.handleInputChange,name:"author",placeholder:"Author (required)"}),l.a.createElement(B,{disabled:!(this.state.author&&this.state.title),onClick:this.handleFormSubmit},"Submit Book"))),l.a.createElement(g,{size:"md-6 sm-12"},l.a.createElement(p,null,l.a.createElement("h1",null,"Books On My List")),this.state.books.length?l.a.createElement(y,null,this.state.books.map(function(t){return l.a.createElement(C,{key:t._id},l.a.createElement(c.b,{to:"/books/"+t._id},l.a.createElement("strong",null,t.title," by ",t.author)),l.a.createElement(f,{onClick:function(){return e.deleteBook(t._id)}}))})):l.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component),N=a(70),L=a.n(N),D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={loads:[],supplier:"",receivedDate:new Date,files:[],comments:""},a.loadLoads=function(){v.getLoads().then(function(e){return a.setState({loads:e.data,supplier:"",receivedDate:new Date,files:[],comments:""})}).catch(function(e){return console.log(e)})},a.deleteLoad=function(e){v.deleteLoad(e).then(function(e){return a.loadLoads()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){if(e.target.files&&e.target.files.length>0){var t=e.target,n=t.name,l=t.files;a.setState(Object(i.a)({},n,l))}else{var o=e.target,r=o.name,c=o.value;a.setState(Object(i.a)({},r,c))}},a.handleFormSubmit=function(e){if(e.preventDefault(),a.state.supplier&&a.state.comments){var t={supplier:a.state.supplier,receivedDate:a.state.receivedDate,files:a.state.files,comments:a.state.comments};v.saveLoad(t).then(function(e){return a.loadLoads()}).catch(function(e){return console.log(e)})}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadLoads()}},{key:"render",value:function(){return l.a.createElement(k,{fluid:!0},l.a.createElement(j,null,l.a.createElement(g,{size:"md-6"},l.a.createElement(p,null,l.a.createElement("h1",null,"Create Load")),l.a.createElement("form",null,l.a.createElement(O,{value:this.state.supplier,onChange:this.handleInputChange,name:"supplier",placeholder:"Supplier (required)"}),l.a.createElement(O,{value:this.state.comments,onChange:this.handleInputChange,name:"comments",placeholder:"Comments (required)"}),l.a.createElement(L.a,{selected:this.state.receivedDate,onChange:this.onChangeReceivedDate}),l.a.createElement(O,{onChange:this.handleInputChange,name:"files",type:"file",multiple:!0}),l.a.createElement(B,{disabled:!(this.state.supplier&&this.state.comments),onClick:this.handleFormSubmit},"Submit Load"))),l.a.createElement(g,{size:"md-6 sm-12"},l.a.createElement(p,null,l.a.createElement("h1",null,"Loads")),this.state.loads.length?l.a.createElement(y,null):l.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={book:{}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement(k,{fluid:!0},l.a.createElement(j,null,l.a.createElement(g,{size:"md-12"},l.a.createElement(p,null,l.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),l.a.createElement(j,null,l.a.createElement(g,{size:"md-2"},l.a.createElement(c.b,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(n.Component),I=function(){return l.a.createElement(k,{fluid:!0},l.a.createElement(j,null,l.a.createElement(g,{size:"md-12"},l.a.createElement(p,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},z=function(){return l.a.createElement("nav",{className:"navbar navbar-inverse navbar-top"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("a",{href:"/",className:"navbar-brand"},"Loads"))))},F=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(z,null),l.a.createElement(c.d,null,l.a.createElement(c.c,{exact:!0,path:"/",component:D}),l.a.createElement(c.c,{exact:!0,path:"/books",component:w}),l.a.createElement(c.c,{exact:!0,path:"/loads",component:D}),l.a.createElement(c.c,{exact:!0,path:"/books/:id",component:S}),l.a.createElement(c.c,{component:I}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,a){e.exports=a(182)},90:function(e,t,a){}},[[80,2,1]]]);
//# sourceMappingURL=main.eb1d3a61.chunk.js.map