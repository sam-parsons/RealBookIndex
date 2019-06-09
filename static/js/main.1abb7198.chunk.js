(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,n,t){e.exports=t(59)},41:function(e,n,t){},58:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(22),i=t.n(l),o=(t(41),t(23)),s=t(24),c=t(31),u=t(25),d=t(32),m=t(6),h=t(7);function f(){var e=Object(m.a)(['\n  font-family: "Permanent Marker", sans-serif;\n  font-size: 60px;\n  padding-bottom: 40px;\n\n  @media (max-width: 480px) {\n    font-size: 40px;\n  }\n']);return f=function(){return e},e}var p=h.a.div(f()),E=function(){return r.a.createElement(p,null,r.a.createElement("div",null,"RealBookIndex"))},b=t(29),v=t.n(b),g=t(16),x=t.n(g),y=t(12),S=t.n(y),k=t(28),w=t.n(k),j=t(11),A=t.n(j);function C(){var e=Object(m.a)(["\n  .hidden {\n    display: none;\n  }\n  .text {\n    padding-left: 13px;\n  }\n\n  @media (max-width: 480px) {\n    .form-control {\n      font-size: 20px;\n    }\n\n    .btn {\n      font-size: medium !important;\n    }\n\n    .mb-3 {\n      width: 90vw;\n    }\n  }\n"]);return C=function(){return e},e}var O=h.a.div(C()),N=function(e){return r.a.createElement(O,null,r.a.createElement("div",{className:"main"},r.a.createElement(w.a,{onSubmit:e.handleSubmit},r.a.createElement(x.a,{className:"mb-3",size:"lg"},r.a.createElement(S.a,{placeholder:"Enter song title","aria-label":"song title","aria-describedby":"basic-addon2",onChange:e.handleSearch,value:e.searchValue}),r.a.createElement(x.a.Append,null,r.a.createElement(A.a,{variant:"outline-secondary",type:"submit"},r.a.createElement(v.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:e.loading?"":"hidden"}),r.a.createElement("span",{className:"sr-only"},"Loading..."),r.a.createElement("span",{className:"text"},"Search")))))))};function z(){var e=Object(m.a)([""]);return z=function(){return e},e}var V=h.a.div(z()),L=function(e){return r.a.createElement(V,null,r.a.createElement(A.a,{variant:"secondary",onClick:e.handleClear},"Clear"))},M=t(30),P=t.n(M);function B(){var e=Object(m.a)(['\n  font-family: "Montserrat", sans-serif;\n  font-size: 20px;\n\n  @media (max-width: 480px) {\n    font-size: 14px;\n\n    .table {\n      width: 90vw;\n    }\n  }\n']);return B=function(){return e},e}var D=h.a.div(B()),J=function(e){return r.a.createElement(D,{className:e.resultsArr.length<1?"hidden":""},r.a.createElement(P.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Book"),r.a.createElement("th",null,"Page"))),r.a.createElement("tbody",null,e.resultsArr.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.book),r.a.createElement("td",null,e.page))}))),r.a.createElement(L,{handleClear:e.handleClear}))};function T(){var e=Object(m.a)(['\n  font-family: "Permanent Marker", sans-serif;\n  font-size: 50px;\n\n  .hidden {\n    display: none;\n  }\n']);return T=function(){return e},e}var I=h.a.div(T()),G=function(e){return r.a.createElement(I,null,r.a.createElement("div",{className:"main"},r.a.createElement(J,{resultsArr:e.resultsArr,handleClear:e.handleClear})))},R=(t(58),function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={searchValue:"",resultsArr:[],loading:!1,songList:[]},t.componentDidMount=function(){fetch("https://realbookindex-api.herokuapp.com/",{method:"GET",mode:"cors"}).then(function(e){return e.json()}).then(function(e){return t.setState({songList:e.data})})},t.handleSearch=function(e){t.setState({searchValue:e.target.value}),e.preventDefault()},t.handleSubmit=function(e){console.log(t.state.searchValue),t.toggleLoading(),fetch("https://realbookindex-api.herokuapp.com/",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t.state.searchValue})}).then(function(e){return e.json()}).then(function(e){return t.setState({resultsArr:e.data},function(){t.toggleLoading()})}),e.preventDefault()},t.handleClear=function(){t.setState({resultsArr:[],searchValue:""})},t.toggleLoading=function(){return t.setState({loading:!t.state.loading})},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(E,null),r.a.createElement(N,{handleSubmit:this.handleSubmit,handleSearch:this.handleSearch,searchValue:this.state.searchValue,loading:this.state.loading}),r.a.createElement(G,{resultsArr:this.state.resultsArr,handleClear:this.handleClear})))}}]),n}(r.a.Component));i.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.1abb7198.chunk.js.map