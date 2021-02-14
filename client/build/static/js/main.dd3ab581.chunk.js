(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(30),r=a.n(o),c=a(8),i=a(33),s=a(19),u=a(20),m=a(25),d=a(21),h=a(26),p=(a(90),function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e),"\u2717")}),f=function(e){var t=e.children;return l.a.createElement("div",{style:{height:"100%",clear:"both"},className:"jumbotron"},t)},E=a(15),v=a.n(E),g={getBooks:function(){return v.a.get("/api/books")},getBook:function(e){return v.a.get("/api/books/"+e)},deleteBook:function(e){return v.a.delete("/api/books/"+e)},saveBook:function(e){return v.a.post("/api/books",e)},getLoads:function(){return v.a.get("/api/loads")},getLoad:function(e){return v.a.get("/api/loads/"+e)},deleteLoad:function(e){return v.a.delete("/api/loads/"+e)},saveLoad:function(e){var t=new FormData;t.append("file",e.file),t.append("supplier",e.supplier),t.append("receivedDate",e.receivedDate),t.append("comments",e.comments);return v.a.post("/api/loads",t,{headers:{"Content-Type":"multipart/form-data"}})}},b=function(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)},k=function(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)},y=function(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)},j=(a(111),function(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}),D=function(e){return l.a.createElement("li",{className:"list-group-item"},e.children)},C=function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))},w=function(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)},O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],title:"",author:""},a.loadBooks=function(){g.getBooks().then(function(e){return a.setState({books:e.data,title:"",author:""})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){g.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(i.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.title&&a.state.author&&g.saveBook({title:a.state.title,author:a.state.author}).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(k,{fluid:!0},l.a.createElement(y,null,l.a.createElement(b,{size:"md-6"},l.a.createElement(f,null,l.a.createElement("h1",null,"What Books Should I Read?")),l.a.createElement("form",null,l.a.createElement(C,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),l.a.createElement(C,{value:this.state.author,onChange:this.handleInputChange,name:"author",placeholder:"Author (required)"}),l.a.createElement(w,{disabled:!(this.state.author&&this.state.title),onClick:this.handleFormSubmit},"Submit Book"))),l.a.createElement(b,{size:"md-6 sm-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"Books On My List")),this.state.books.length?l.a.createElement(j,null,this.state.books.map(function(t){return l.a.createElement(D,{key:t._id},l.a.createElement(c.b,{to:"/books/"+t._id},l.a.createElement("strong",null,t.title," by ",t.author)),l.a.createElement(p,{onClick:function(){return e.deleteBook(t._id)}}))})):l.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component),B=a(70),L=a.n(B),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={loads:[],supplier:"",receivedDate:new Date,file:null,comments:"",load:null},a.getLoad=function(e){g.getLoad(e).then(function(e){a.setState({load:e.data})}).catch(function(e){return console.log(e)})},a.loadLoads=function(){g.getLoads().then(function(e){a.setState({loads:e.data,supplier:"",receivedDate:new Date,files:null,comments:""})}).catch(function(e){return console.log(e)})},a.deleteLoad=function(e){g.deleteLoad(e).then(function(e){return a.loadLoads()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){if(e.target.files&&e.target.files.length>0){var t=e.target,n=t.name,l=t.files;a.setState(Object(i.a)({},n,l[0]))}else{var o=e.target,r=o.name,c=o.value;a.setState(Object(i.a)({},r,c))}},a.handleFormSubmit=function(e){if(e.preventDefault(),a.state.supplier&&a.state.comments){var t={supplier:a.state.supplier,receivedDate:a.state.receivedDate,file:a.state.file,comments:a.state.comments};g.saveLoad(t).then(function(e){return a.loadLoads()}).catch(function(e){return console.log(e)})}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadLoads()}},{key:"render",value:function(){var e=this;return l.a.createElement(k,{fluid:!0},l.a.createElement(y,null,l.a.createElement(b,{size:"md-6"},l.a.createElement(f,null,this.state.loads.length?l.a.createElement(j,null,this.state.loads.map(function(t){return l.a.createElement(D,{key:t._id},l.a.createElement("button",{onClick:function(){e.getLoad(t._id)}},l.a.createElement("strong",null,new Date(t.receivedDate).toLocaleDateString()," - ",t.supplier)))})):l.a.createElement("h3",null,"No Results to Display")),l.a.createElement("form",null,l.a.createElement(C,{value:this.state.supplier,onChange:this.handleInputChange,name:"supplier",placeholder:"Supplier (required)"}),l.a.createElement(C,{value:this.state.comments,onChange:this.handleInputChange,name:"comments",placeholder:"Comments (required)"}),l.a.createElement(L.a,{selected:this.state.receivedDate,onChange:this.onChangeReceivedDate}),l.a.createElement(C,{onChange:this.handleInputChange,name:"file",type:"file"}),l.a.createElement(w,{disabled:!(this.state.supplier&&this.state.comments),onClick:this.handleFormSubmit},"Submit Load"))),l.a.createElement(b,{size:"md-6 sm-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"Load"),null!=this.state.load?l.a.createElement("ul",null,l.a.createElement("li",null,new Date(this.state.load.receivedDate).toLocaleDateString()),l.a.createElement("li",null,this.state.load.comments),l.a.createElement("li",null,this.state.load.supplier)):null))))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={book:{}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement(k,{fluid:!0},l.a.createElement(y,null,l.a.createElement(b,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),l.a.createElement(y,null,l.a.createElement(b,{size:"md-2"},l.a.createElement(c.b,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(n.Component),I=function(){return l.a.createElement(k,{fluid:!0},l.a.createElement(y,null,l.a.createElement(b,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},z=function(){return l.a.createElement("nav",{className:"navbar navbar-inverse navbar-top"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("a",{href:"/",className:"navbar-brand"},"Loads"))))},F=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(z,null),l.a.createElement(c.d,null,l.a.createElement(c.c,{exact:!0,path:"/",component:N}),l.a.createElement(c.c,{exact:!0,path:"/books",component:O}),l.a.createElement(c.c,{exact:!0,path:"/loads",component:N}),l.a.createElement(c.c,{exact:!0,path:"/books/:id",component:S}),l.a.createElement(c.c,{component:I}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,a){e.exports=a(182)},90:function(e,t,a){}},[[80,2,1]]]);
//# sourceMappingURL=main.dd3ab581.chunk.js.map