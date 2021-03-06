(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(24),r=a.n(o),c=a(20),i=a(44),s=a(65),u=a(66),m=a(73),d=a(67),h=a(74),f=(a(91),function(e){var t=e.children;return l.a.createElement("div",{style:{height:"100%",clear:"both"},className:"jumbotron"},t)}),p=a(69),E=a.n(p),v=a(27),g=a.n(v),b={getLoads:function(){return g.a.get("/api/loads")},getLoad:function(e){return g.a.get("/api/loads/"+e)},deleteLoad:function(e){return g.a.delete("/api/loads/"+e)},saveLoad:function(e){var t=new FormData;t.append("supplier",e.supplier),t.append("receivedDate",e.receivedDate),t.append("comments",e.comments);for(var a=Object.keys(e.filesCollection),n=0;n<a.length;n++){var l=a[n];t.append("filesCollection",e.filesCollection[l])}return g.a.post("/api/loads",t)}},w=function(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)},C=function(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)},D=function(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)},L=(a(112),function(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}),N=function(e){return l.a.createElement("li",{className:"list-group-item"},e.children)},y=function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))},F=function(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)},S=a(68),j=a.n(S),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={loads:[],supplier:"",receivedDate:new Date,filesCollection:null,comments:"",load:null,showForm:!1},a.fileInput=l.a.createRef(),a.getLoad=function(e){b.getLoad(e).then(function(e){a.setState({load:e.data}),console.log(e.data)}).catch(function(e){return console.log(e)})},a.loadLoads=function(){b.getLoads().then(function(e){a.setState({loads:e.data,supplier:"",receivedDate:new Date,filesCollection:null,comments:""})}).catch(function(e){return console.log(e)})},a.deleteLoad=function(e){b.deleteLoad(e).then(function(e){return a.loadLoads()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){if(e.target.files&&e.target.files.length>0){var t=e.target,n=t.name,l=t.files;a.setState(Object(i.a)({},n,l))}else{var o=e.target,r=o.name,c=o.value;a.setState(Object(i.a)({},r,c))}},a.handleFormSubmit=function(e){if(e.preventDefault(),a.state.supplier&&a.state.comments){var t={supplier:a.state.supplier,receivedDate:a.state.receivedDate,filesCollection:a.state.filesCollection,comments:a.state.comments};b.saveLoad(t).then(function(e){document.getElementById("file-input").value="",a.loadLoads()}).catch(function(e){return console.log(e)})}},a.setShow=function(){a.setState({showForm:!a.state.showForm})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadLoads()}},{key:"render",value:function(){var e=this;return l.a.createElement(C,{fluid:!0},l.a.createElement(D,null,l.a.createElement(w,{size:"md-6"},l.a.createElement(f,null,this.state.loads.length?l.a.createElement(L,null,this.state.loads.map(function(t){return l.a.createElement(N,{key:t._id},l.a.createElement("button",{onClick:function(){e.getLoad(t._id)}},l.a.createElement("strong",null,new Date(t.receivedDate).toLocaleDateString()," - ",t.supplier)))})):l.a.createElement("h3",null,"No Results to Display"))),l.a.createElement(w,{size:"md-6 sm-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"Load"),null!=this.state.load?l.a.createElement("ul",null,l.a.createElement("li",null,"Date Received: ",new Date(this.state.load.receivedDate).toLocaleDateString()),l.a.createElement("li",null,"Comments: ",this.state.load.comments),l.a.createElement("li",null,"Supplier: ",this.state.load.supplier),this.state.load.files.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,"Attached Files: "),l.a.createElement("ul",null,this.state.load.files.map(function(e,t){return l.a.createElement("li",null,l.a.createElement("a",{href:e.location,target:"_blank",rel:"noreferrer noopener"},e.fileName))})))):null,l.a.createElement("button",{onClick:function(){e.setShow()},value:"Form",className:j.a.showForm},"Show Form"),this.state.showForm&&l.a.createElement("form",null,l.a.createElement(y,{value:this.state.supplier,onChange:this.handleInputChange,name:"supplier",placeholder:"Supplier (required)"}),l.a.createElement(y,{value:this.state.comments,onChange:this.handleInputChange,name:"comments",placeholder:"Comments (required)"}),l.a.createElement(E.a,{selected:this.state.receivedDate,onChange:this.onChangeReceivedDate}),l.a.createElement(y,{onChange:this.handleInputChange,name:"filesCollection",type:"file",multiple:!0,id:"file-input"}),l.a.createElement(F,{disabled:!(this.state.supplier&&this.state.comments),onClick:this.handleFormSubmit},"Submit Load"))))))}}]),t}(n.Component),O=function(){return l.a.createElement(C,{fluid:!0},l.a.createElement(D,null,l.a.createElement(w,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},I=function(){return l.a.createElement("nav",{className:"navbar navbar-inverse navbar-top"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("a",{href:"/",className:"navbar-brand"},"Loads"))))},_=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(I,null),l.a.createElement(c.c,null,l.a.createElement(c.b,{exact:!0,path:"/",component:k}),l.a.createElement(c.b,{exact:!0,path:"/loads",component:k}),l.a.createElement(c.b,{component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){e.exports={showForm:"mystyle_showForm__2xBIO"}},81:function(e,t,a){e.exports=a(184)},91:function(e,t,a){}},[[81,2,1]]]);
//# sourceMappingURL=main.7bbe17ab.chunk.js.map