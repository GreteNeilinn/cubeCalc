(function(e){function t(t){for(var o,a,r=t[0],u=t[1],l=t[2],d=0,b=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);s&&s(t);while(b.length)b.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},c={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/cubeCalc/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var s=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"17c9":function(e,t,n){},"333a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(e,t){var n=Object(o["x"])("router-view");return Object(o["r"])(),Object(o["c"])(n)}n("b888");var i=n("6b0d"),a=n.n(i);const r={},u=a()(r,[["render",c]]);var l=u,s=n("6c02"),d=Object(o["f"])('<div class="landing-page"><div class="svg-contaier"><div class="custom-shape-divider-top-1648241238"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path></svg></div></div><div class="title-wrapper"><h1 id="main" class="main">CUBEC.</h1><h2>Innovational hexahedron calculator</h2></div></div>',1);function b(e,t,n,c,i,a){var r=Object(o["x"])("GeometryPage");return Object(o["r"])(),Object(o["d"])("div",null,[d,Object(o["h"])(r)])}var f=function(e){return Object(o["u"])("data-v-1ef247b3"),e=e(),Object(o["s"])(),e},p={class:"container-md"},v={class:"row align-items-center"},h={class:"col-sm fade-in cube"},m=f((function(){return Object(o["e"])("h2",{class:"geo-title"},"CUBE",-1)})),O=f((function(){return Object(o["e"])("div",{class:"col-sm fade-in",id:"cube"},[Object(o["e"])("canvas",{id:"webgl",class:"webgl"})],-1)}));function j(e,t,n,c,i,a){return Object(o["r"])(),Object(o["d"])("div",p,[Object(o["e"])("div",v,[Object(o["e"])("div",h,[m,(Object(o["r"])(),Object(o["c"])(Object(o["y"])(i.activeTab),{onClicked:a.onClickChild},null,8,["onClicked"]))]),O])])}n("d3b7"),n("159b");var g={id:"chooseCalc"},w={class:"calc-selection"};function y(e,t,n,c,i,a){return Object(o["r"])(),Object(o["d"])("div",g,[Object(o["e"])("div",w,[Object(o["e"])("button",{id:"firstBtn",class:"btn btn-primary btn-lg btn-block",onClick:t[0]||(t[0]=function(){return a.toArea&&a.toArea.apply(a,arguments)})}," Calculate area "),Object(o["e"])("button",{id:"secondBtn",class:"btn btn-primary btn-lg btn-block",onClick:t[1]||(t[1]=function(){return a.toVolume&&a.toVolume.apply(a,arguments)})}," Calculate volume ")])])}var C=n("5a89");window.addEventListener("load",(function(){var e=document.querySelector("canvas.webgl"),t=new C["j"];t.background=new C["c"](1645342);var n=new C["k"],o=n.load("@/static/textures/normalMap.png"),c=new C["a"](10,10,10),i=new C["i"](16777215,3);i.position.x=-7.86,i.position.y=-3,i.position.z=4;var a=new C["g"];a.metalness=.7,a.roughness=.2,a.normalMap=o,a.color=new C["c"](16212534);var r=new C["f"](c,a),u=!1,l=new C["a"](10,10,10);l=new C["m"](l);var s=new C["d"]({color:16212534,linewidth:1,scale:2,dashSize:2,gapSize:1}),d=new C["e"](l,s);d.computeLineDistances(),t.add(r);var b=new C["i"](16777215,.1);b.position.x=2,b.position.y=3,b.position.z=4,t.add(i);var f={width:window.innerWidth/2,height:window.innerHeight/2};window.addEventListener("resize",(function(){f.width=window.innerWidth,f.height=window.innerHeight,f.width<500?O.fov=100:O.fov=75,O.aspect=f.width/f.height,O.updateProjectionMatrix(),j.setSize(f.width/2,f.height/2),j.setPixelRatio(Math.min(window.devicePixelRatio,2))})),document.getElementById("webgl").addEventListener("mousemove",m);var p=0,v=0,h=window.innerWidth/2;function m(e){p=e.clientX-h}document.getElementById("firstBtn").addEventListener("click",(function(){u=!0,t.remove(r),t.add(d),t.add(b)}));var O=new C["h"](75,f.width/f.height,.1,1e3);O.position.x=0,O.position.y=0,O.position.z=15,t.add(O);var j=new C["l"]({antialias:!0,canvas:e});j.setSize(f.width,f.height),j.setPixelRatio(Math.min(window.devicePixelRatio,2));var g=new C["b"],w=function e(){v=.004*p;var n=g.getElapsedTime();1==u?(d.rotation.y=.8*n,d.rotation.y+=.5*(v-d.rotation.y)):(r.rotation.y=.8*n,r.rotation.y+=.5*(v-r.rotation.y)),j.render(t,O),window.requestAnimationFrame(e)};w()}));var x={name:"ChooseCalc",methods:{toArea:function(){this.$emit("clicked","Area")},toVolume:function(){this.$emit("clicked","Volume")}}};n("b810");const A=a()(x,[["render",y],["__scopeId","data-v-606aea4f"]]);var k=A,S=function(e){return Object(o["u"])("data-v-97e79c9a"),e=e(),Object(o["s"])(),e},T={id:"area"},E=S((function(){return Object(o["e"])("p",{class:"description"},[Object(o["g"])(" Surface area of cube is the sum of areas of all the faces of cube, that covers it. The area of one face of the cube = (side"),Object(o["e"])("sup",null,"2"),Object(o["g"])("). Therefore total Surface Area of a Cube = (6 × side"),Object(o["e"])("sup",null,"2"),Object(o["g"])(") square units. The formula is written as S = 6a"),Object(o["e"])("sup",null,"2")],-1)})),P=S((function(){return Object(o["e"])("h3",null,"Calculate area",-1)})),M=S((function(){return Object(o["e"])("label",{for:"sideA"},"Side length a:",-1)})),_=S((function(){return Object(o["e"])("br",null,null,-1)})),I=S((function(){return Object(o["e"])("input",{type:"text",id:"sideA",name:"sideA"},null,-1)})),B=S((function(){return Object(o["e"])("br",null,null,-1)})),L=S((function(){return Object(o["e"])("button",{id:"submit",type:"submit"},"Calculate",-1)})),V=[M,_,I,B,L],z=S((function(){return Object(o["e"])("p",null,[Object(o["g"])("Solution: "),Object(o["e"])("span",{id:"outputArea"})],-1)}));function H(e,t,n,c,i,a){return Object(o["r"])(),Object(o["d"])("div",T,[Object(o["e"])("p",{id:"back",onClick:t[0]||(t[0]=function(){return a.goToChoose&&a.goToChoose.apply(a,arguments)})},"<- back"),E,Object(o["e"])("div",null,[P,Object(o["e"])("form",{class:"form",onSubmit:t[1]||(t[1]=function(){return a.calculateArea&&a.calculateArea.apply(a,arguments)})},V,32),z])])}var R={name:"Area",methods:{calculateArea:function(e){var t=document.getElementById("sideA").value,n=t*t*6;document.getElementById("outputArea").innerHTML=n,e.preventDefault()},goToChoose:function(){this.$emit("clicked","ChooseCalc")}}};n("b609");const q=a()(R,[["render",H],["__scopeId","data-v-97e79c9a"]]);var $=q,D=function(e){return Object(o["u"])("data-v-319054cc"),e=e(),Object(o["s"])(),e},W={id:"volume"},G=D((function(){return Object(o["e"])("p",{class:"description"},[Object(o["g"])(" The volume of a cube can be found by multiplying the edge length three times. The formula to calculate the volume of a cube is given as, Volume of a cube = a"),Object(o["e"])("sup",null,"3"),Object(o["g"])(", where 'a' is the length of the side of the cube. ")],-1)})),J=D((function(){return Object(o["e"])("h3",null,"Calculate volume",-1)})),U=D((function(){return Object(o["e"])("label",{for:"sideA"},"Side length a:",-1)})),F=D((function(){return Object(o["e"])("br",null,null,-1)})),X=D((function(){return Object(o["e"])("input",{type:"text",id:"sideA",name:"sideA"},null,-1)})),K=D((function(){return Object(o["e"])("br",null,null,-1)})),N=D((function(){return Object(o["e"])("button",{id:"submit",type:"submit"},"Calculate",-1)})),Q=[U,F,X,K,N],Y=D((function(){return Object(o["e"])("p",null,[Object(o["g"])("Solution: "),Object(o["e"])("span",{id:"outputArea"})],-1)}));function Z(e,t,n,c,i,a){return Object(o["r"])(),Object(o["d"])("div",W,[Object(o["e"])("p",{id:"back",onClick:t[0]||(t[0]=function(){return a.goToChoose&&a.goToChoose.apply(a,arguments)})},"<- back"),G,Object(o["e"])("div",null,[J,Object(o["e"])("form",{class:"form",onSubmit:t[1]||(t[1]=function(){return a.calculateVolume&&a.calculateVolume.apply(a,arguments)})},Q,32),Y])])}var ee={name:"Volume",methods:{calculateVolume:function(e){var t=document.getElementById("sideA").value,n=Math.pow(t,3);document.getElementById("outputArea").innerHTML=n,e.preventDefault()},goToChoose:function(){this.$emit("clicked","ChooseCalc")}}};n("c4b6");const te=a()(ee,[["render",Z],["__scopeId","data-v-319054cc"]]);var ne=te,oe={name:"geometryPage",components:{ChooseCalc:k,Area:$,Volume:ne},methods:{onClickChild:function(e){this.activeTab=e}},data:function(){return{activeTab:"ChooseCalc"}},setup:function(){Object(o["p"])((function(){var e=document.querySelectorAll(".fade-in"),t={threshold:1,rootMargin:"0px 0px -50px 0px"},n=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("appear"),t.unobserve(e.target))}))}),t);e.forEach((function(e){n.observe(e)}))}))}};n("bbd0");const ce=a()(oe,[["render",j],["__scopeId","data-v-1ef247b3"]]);var ie=ce,ae={name:"Home",components:{GeometryPage:ie}};n("b70a");const re=a()(ae,[["render",b]]);var ue=re,le=[{path:"/",name:"Home",component:ue}],se=Object(s["a"])({history:Object(s["b"])("/cubeCalc/"),routes:le}),de=se,be=n("5502"),fe=Object(be["a"])({state:{},mutations:{},actions:{},modules:{}});n("ab8b"),n("7b17");Object(o["b"])(l).use(fe).use(de).mount("#app")},6397:function(e,t,n){},8758:function(e,t,n){},a11e:function(e,t,n){},a838:function(e,t,n){},b609:function(e,t,n){"use strict";n("a11e")},b70a:function(e,t,n){"use strict";n("333a")},b810:function(e,t,n){"use strict";n("17c9")},b888:function(e,t,n){"use strict";n("a838")},bbd0:function(e,t,n){"use strict";n("6397")},c4b6:function(e,t,n){"use strict";n("8758")}});
//# sourceMappingURL=app.73146e2d.js.map