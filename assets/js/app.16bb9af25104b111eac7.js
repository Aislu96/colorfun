!function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(l&&l(e);p.length;)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={0:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([161,2]),n()}({122:function(t,e,n){var r=n(123),o=document.querySelector(".grid-container__cartoons"),i=document.querySelector(".button__cartoons"),a=0;function s(){var t=window.innerWidth<=700?16:24;a+t>r.length&&(t=r.length-a);for(var e=a;e<a+t;e++){var n=document.createElement("div");n.classList.add("grid-container__group","grid-container__cartoons");var s=document.createElement("img");s.src=r[e].src,s.alt=r[e].text;var c=document.createElement("p");if(c.classList.add("p19"),c.textContent=r[e].text,!o)return;n.appendChild(s),n.appendChild(c),o.appendChild(n)}(a+=t)>=r.length&&i&&(i.style.display="none")}s(),i&&i.addEventListener("click",s),window.addEventListener("resize",(function(){a=0,o&&(o.innerHTML=""),s()}))},123:function(t,e){t.exports=[{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"}]},124:function(t,e){},155:function(t,e,n){var r=n(108),o=n(156);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},156:function(t,e,n){},157:function(t,e,n){var r=n(108),o=n(158);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},158:function(t,e,n){},161:function(t,e,n){"use strict";n.r(e);n(60),n(34),n(49),n(117),n(36);for(var r=document.querySelectorAll(".button__arrow"),o=document.querySelectorAll(".grid-container__group-articles"),i=document.querySelector(".search-form__container"),a=document.querySelector(".search-button"),s=document.querySelector(".search-button__sound"),c=document.querySelector(".button-menu__burger"),u=document.querySelector(".button-menu__cross"),l=document.querySelector(".header__nav"),d=document.querySelector(".overlay"),p=function(t){r[t].addEventListener("mouseover",(function(){o[t].classList.add("hovered")})),r[t].addEventListener("mouseout",(function(){o[t].classList.remove("hovered")}))},h=0;h<r.length;h++)p(h);var f=document.querySelector(".up-arrow");f.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),f.addEventListener("touched",(function(){window.scrollTo({top:0,behavior:"smooth"})})),i&&(i.addEventListener("mouseover",(function(){a.classList.add("hovered"),s.classList.add("hovered")})),i.addEventListener("mouseout",(function(){a.classList.remove("hovered"),s.classList.remove("hovered")})));var v=document.querySelectorAll(".header__group"),g=document.querySelectorAll(".arrow"),m=Array.from(v);m.shift(),m.pop();var y=document.querySelectorAll(".header__row");m.forEach((function(t,e){window.innerWidth<=700?t.addEventListener("click",(function(){y[e].classList.toggle("hovered"),g[e].classList.toggle("arrow__img-two")})):(t.addEventListener("mouseover",(function(){y[e].classList.add("hovered")})),t.addEventListener("mouseout",(function(){y[e].classList.remove("hovered")})))})),c&&(c.addEventListener("click",(function(t){t.preventDefault(),l.style.display="flex",d.style.display="block",d.style.zIndex="101"})),u.addEventListener("click",(function(t){t.preventDefault(),l.style.display="none",d.style.display="none",d.style.zIndex="100"})));var w=document.getElementById("myInput"),b=document.querySelector(".popup"),x=document.querySelector(".popup__block");w&&w.addEventListener("input",(function(){""!==w.value.trim()?(b.classList.add("popup__active"),d.style.display="block",x.style.display="flex"):(b.classList.remove("popup__active"),d.style.display="none",x.style.display="none")}));for(var L=document.querySelectorAll(".coloring-pages__text"),E=document.querySelectorAll(".coloring-pages__row"),_=function(t){L[t].addEventListener("mouseover",(function(){E[t].classList.add("hovered")})),L[t].addEventListener("mouseout",(function(){E[t].classList.remove("hovered")}))},S=0;S<L.length;S++)_(S);var k=document.querySelector(".popup__cross"),A=document.querySelector(".popup__not-found");k&&k.addEventListener("click",(function(){A.classList.remove("popup__not-found_opened")})),A&&A.addEventListener("click",(function(){A.classList.remove("popup__not-found_opened")}));for(var C=document.querySelectorAll(".film-info__icon-group"),O=document.querySelectorAll(".film-info__window"),j=function(t){C[t].addEventListener("mouseover",(function(){O[t].classList.add("hovered")})),C[t].addEventListener("mouseout",(function(){O[t].classList.remove("hovered")}))},q=0;q<C.length;q++)j(q);document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".toggle-list").forEach((function(t){t.addEventListener("click",(function(){t.nextElementSibling.classList.toggle("show")})),t.addEventListener("mouseover",(function(){t.style.color="#5C25C5"})),t.addEventListener("mouseout",(function(){t.style.color=""}))}))}));for(var P=document.querySelectorAll(".questions"),T=document.querySelectorAll(".questions svg"),N=document.querySelectorAll(".film-info__container_two p"),I=function(t){P[t].addEventListener("click",(function(){N[t].classList.toggle("questions__text"),T[t].classList.toggle("questions__svg")}))},F=0;F<P.length;F++)I(F);n(122),n(124);var G=n(38),M=n(15);document.addEventListener("DOMContentLoaded",(function(){window.innerWidth<=800&&new G.a(".swiper-info",{modules:[M.a,M.b],loop:!0,slidesPerView:"auto",spaceBetween:30,pagination:{el:".pagination",clickable:!0,renderBullet:function(t,e){return t<4?'<span class="'+e+'"></span>':""}}})})),document.addEventListener("DOMContentLoaded",(function(){var t=new G.a(".gallery-thumbs",{modules:[M.a,M.b],spaceBetween:3,slidesPerView:"auto",loop:!0,loopedSlides:3,watchSlidesVisibility:!0,watchSlidesProgress:!0}),e=new G.a(".gallery-top",{modules:[M.a,M.b,M.c],spaceBetween:3,loop:!0,loopedSlides:3,thumbs:{swiper:t}});document.querySelectorAll(".save").forEach((function(t){t.addEventListener("click",(function(){var t=e.slides[e.activeIndex].querySelector("img"),n=document.createElement("a");n.href=t.src,n.download="image.jpg",document.body.appendChild(n),n.click(),document.body.removeChild(n)}))})),document.querySelectorAll(".print").forEach((function(t){t.addEventListener("click",(function(){var t=e.slides[e.activeIndex].querySelector("img"),n=window.open();n.document.write('<img src="'.concat(t.src,'" style="max-width: 100%;">')),n.document.close(),n.focus(),n.print(),n.close()}))}))}));n(85),n(87),n(88),n(89),n(90),n(91),n(56),n(92),n(95),n(96),n(97),n(98),n(99),n(100),n(57),n(105),n(106),n(107);function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function z(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */z=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),s=new O(r||[]);return o(a,"_invoke",{value:S(t,n,s)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",h="executing",f="completed",v={};function g(){}function m(){}function y(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(j([])));x&&x!==n&&r.call(x,a)&&(w=x);var L=y.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(o,i,a,s){var c=d(t[o],t,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==D(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function S(e,n,r){var o=p;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===f){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var c=k(s,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var u=d(e,n,r);if("normal"===u.type){if(o=r.done?f:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=f,r.method="throw",r.arg=u.arg)}}}function k(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=d(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function j(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(D(e)+" is not iterable")}return m.prototype=y,o(L,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(_.prototype),u(_.prototype,s,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new _(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),u(L,c,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:j(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function B(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}var R=/^((([0-9A-Za-z]{1}[\x2D\.0-9A-z]+[0-9A-Za-z]{1})|([0-9\u0410-\u044F]{1}[\x2D\.0-9\\\u0410-\u044F]+[0-9\u0410-\u044F]{1}))@([\x2DA-Za-z]+\.){1,2}[\x2DA-Za-z]{2,})$/,U=/^[A-Za-zА-Яа-яЁё -]+$/;document.body.addEventListener("input",(function(t){t.target.classList.contains("input-words")&&(t.target.value=t.target.value.replace(/[^a-zа-яё\s]/gi,""))})),document.getElementById("form-reg").addEventListener("submit",function(){var t,e=(t=z().mark((function t(e){var n,r,o,i,a,s,c,u;return z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),n=new FormData(e.target),r=n.get("name"),o=n.get("email"),i=n.get("phone"),a=R.test(o),s=U.test(r),o.includes(".")&&17===i.length&&s&&a?(c="https://maschbot.site/cgi-bin3/binorix.php?fullname="+encodeURIComponent(r)+"&email="+encodeURIComponent(o)+"&phone="+encodeURIComponent(i)+"&campaign=test",(u=new XMLHttpRequest).open("GET",c,!0),u.send(),Toastify({title:"Success",text:"Successfully registered. Soon we will call you!",theme:"dark",duration:5e3,destination:"https://calendly.com/unixtradinghub/30min",newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!0,className:"custom-toast",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()):(o.includes(".")&&a||Toastify({title:"Invalid Email",text:"Please enter a valid email address.",theme:"dark",duration:5e3,newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!0,className:"custom-toast",style:{background:"linear-gradient(to right, #c36868, #c36868)"}}).showToast(),s||Toastify({title:"Invalid Name",text:"Please enter a valid email address.",theme:"dark",duration:5e3,newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!0,className:"custom-toast",style:{background:"linear-gradient(to right, #c36868, #c36868)"}}).showToast(),17!==i.length&&new Toast({title:"Invalid Phone Number",text:"Please enter a valid phone number.",theme:"dark",autoClose:5e3,className:"custom-toast",hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}));case 8:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){B(i,r,o,a,s,"next",t)}function s(t){B(i,r,o,a,s,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}());n(143),n(144),n(145),n(147),n(149),n(151),n(152),n(153);function W(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */W=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),s=new O(r||[]);return o(a,"_invoke",{value:S(t,n,s)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",h="executing",f="completed",v={};function g(){}function m(){}function y(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(j([])));x&&x!==n&&r.call(x,a)&&(w=x);var L=y.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(o,i,a,s){var c=d(t[o],t,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==H(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function S(e,n,r){var o=p;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===f){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var c=k(s,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var u=d(e,n,r);if("normal"===u.type){if(o=r.done?f:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=f,r.method="throw",r.arg=u.arg)}}}function k(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=d(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function j(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(H(e)+" is not iterable")}return m.prototype=y,o(L,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(_.prototype),u(_.prototype,s,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new _(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),u(L,c,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:j(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function Z(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function Y(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){Z(i,r,o,a,s,"next",t)}function s(t){Z(i,r,o,a,s,"throw",t)}a(void 0)}))}}function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function J(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,s=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(t,e)||function(t,e){if(t){if("string"==typeof t)return V(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function $(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function X(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,K(r.key),r)}}function K(t){var e=function(t,e){if("object"!=H(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==H(e)?e:e+""}var Q=function(){return t=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;$(this,t),this.element=e,this.option={dataList:[],dataListShow:["flag","name"],phoneCountry:null!==n.phoneCountry?n.phoneCountry:"RU"},n.dataList&&(this.option.dataList=n.dataList),this.createInput()},(e=[{key:"createInput",value:function(){var t=this;this.phoneContainer=document.createElement("div"),this.phoneContainer.classList.add("phone_input"),this.inputElement=document.createElement("input"),this.inputElement.setAttribute("type","phone"),this.inputElement.setAttribute("required","required"),this.inputSetting(this.inputElement);var e=this.element.getAttribute("name");this.inputElement.setAttribute("name",e);var n=J(this.createSelectBox(),6),r=n[0],o=n[1],i=n[2],a=n[3],s=n[4],c=n[5];this.phoneContainer.appendChild(r),this.phoneContainer.appendChild(this.inputElement),this.element.replaceWith(this.phoneContainer),this.addListItems(o),this.searchInput(o);var u=!1;o.querySelectorAll("li").forEach((function(e){e.addEventListener("click",(function(){var n=e.getAttribute("data-value");i.textContent=n,t.inputSetting(t.inputElement,n)}))})),window.addEventListener("click",(function(t){r.contains(t.target)||s.contains(t.target)?a.contains(t.target)&&((u=!u)?(s.style.display="block",c.style.scale="-1"):(s.style.display="none",c.style.scale=null)):u&&(s.style.display="none",c.style.scale=null,u=!u)}))}},{key:"inputSetting",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.option.dataList.find((function(t){return t.code===(null===n?e.option.phoneCountry:n)})),o=r?r.phoneCode:"";t.value="".concat(o," (___) ___-____"),t.addEventListener("input",(function(e){var n=e.target.value;console.log();var r=o.replace(/\D/g,""),i=n.replace(/\D/g,""),a=o+" ("+i.slice(r.length,3+r.length)+"_".repeat(Math.max(0,4-i.length))+") "+i.slice(4,7)+"_".repeat(i.length>2+r.length?Math.max(0,6+r.length-i.length):3)+"-"+i.slice(7)+"_".repeat(i.length>6+r.length?Math.max(0,10+r.length-i.length):4),s=2+r.length;if(i.length<=3+r.length||(i.length<=6+r.length?s+=1+r.length:i.length<10+r.length?s+=2+r.length:a=o+" ("+i.slice(r.length,3+r.length)+") "+i.slice(3+r.length,6+r.length)+"-"+i.slice(6+r.length,10+r.length)),e.target.value=a,i.length<10+r.length){if(t.createTextRange){var c=t.createTextRange();c.move("character",0),c.select()}else t.setSelectionRange&&t.setSelectionRange(i.length+s,i.length+s);t.focus()}}))}},{key:"createSelectBox",value:function(){var t=document.createElement("div");t.classList.add("select_box");var e=document.createElement("div");e.classList.add("select_box-value");var n=document.createElement("span");n.classList.add("select_box-value-span"),n.textContent=this.option.phoneCountry;var r=document.createElement("div");r.classList.add("select_box-value-arrow");var o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width","1em"),o.setAttribute("height","1em"),o.setAttribute("viewBox","0 0 24 24"),o.setAttribute("fill","none");var i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("fill-rule","evenodd"),i.setAttribute("clip-rule","evenodd"),i.setAttribute("d","M6.46967 8.96967C6.76256 8.67678 7.23744 8.67678 7.53033 8.96967L12 13.4393L16.4697 8.96967C16.7626 8.67678 17.2374 8.67678 17.5303 8.96967C17.8232 9.26256 17.8232 9.73744 17.5303 10.0303L12.5303 15.0303C12.3897 15.171 12.1989 15.25 12 15.25C11.8011 15.25 11.6103 15.171 11.4697 15.0303L6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967Z"),i.setAttribute("fill","#000"),o.appendChild(i),r.appendChild(o),e.append(n),e.append(r);var a=document.createElement("div");a.classList.add("select_box-options");var s=document.createElement("input");s.setAttribute("type","text"),s.classList.add("search-box","search-box-search-list"),s.setAttribute("placeholder","Search");var c=document.createElement("ul");return c.classList.add("select_box-options-values"),a.appendChild(s),a.appendChild(c),t.appendChild(e),t.appendChild(a),[t,c,n,e,a,o]}},{key:"searchInput",value:function(t){var e=this.phoneContainer.querySelector(".search-box-search-list"),n=t.getElementsByTagName("li");e.addEventListener("input",(function(){for(var t=e.value.toLowerCase(),r=0;r<n.length;r++)n[r].textContent.toLowerCase().includes(t)?n[r].style.display="":n[r].style.display="none",n[r].getAttribute("data-value").toLowerCase().includes(t)&&(n[r].style.display="")}))}},{key:"addListItems",value:function(t){var e=this.option.dataList;for(var n in e)if(e.hasOwnProperty(n)){var r=e[n],o=document.createElement("li");o.setAttribute("data-value",r.code),o.textContent=r.name,t.append(o);var i=document.createElement("img");i.setAttribute("src",r.flag),i.setAttribute("width","25px"),i.setAttribute("height","25px"),o.prepend(i)}}}])&&X(t.prototype,e),n&&X(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,n}();function tt(){return et.apply(this,arguments)}function et(){return(et=Y(W().mark((function t(){var e,n;return W().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://restcountries.com/v3.1/all");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function nt(){return(nt=Y(W().mark((function t(){var e,n;return W().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,tt();case 2:return e=t.sent,n=e.reduce((function(t,e){return t[e.cca2]={name:e.name?e.name.common:null,code:e.cca2,flag:e.flags?e.flags.png:null,phoneCode:e.idd.root},t}),{}),t.abrupt("return",Object.values(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function rt(){return(rt=Y(W().mark((function t(){var e,n,r;return W().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.ipbase.com/v2/info?apikey=JyBnvcgMNfv0eCw7ze2pmsY5Ns8p2R5Ed2ihzsa4");case 3:if((e=t.sent).ok){t.next=6;break}throw new Error("Network response was not ok");case 6:return t.next=8,e.json();case 8:return n=t.sent,r=n.data.location.country.alpha2,t.abrupt("return",r);case 13:return t.prev=13,t.t0=t.catch(0),console.error("There was a problem with the fetch operation:",t.t0),t.abrupt("return",null);case 17:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}(function(){return rt.apply(this,arguments)})().then((function(t){null!==t?function(){return nt.apply(this,arguments)}().then((function(e){document.querySelectorAll("#phone").forEach((function(n){new Q(n,{dataList:e,phoneCountry:t})}))})).catch((function(t){return console.error("Произошла ошибка:",t)})):document.querySelectorAll("#phone").forEach((function(t){new Q(t,{dataList:countriesArray,phoneCountry:"RU"})}))})).catch((function(){document.querySelectorAll("#phone").forEach((function(t){new Q(t,{dataList:countriesArray,phoneCountry:"RU"})}))}));n(155),n(157)}});