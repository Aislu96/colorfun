!function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);p.length;)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([152,2]),n()}({109:function(e,t,n){var r=n(110),o=document.querySelector(".grid-container__cartoons"),s=document.querySelector(".button__cartoons"),a=0;function i(){var e=window.innerWidth<=700?16:24;a+e>r.length&&(e=r.length-a);for(var t=a;t<a+e;t++){var n=document.createElement("div");n.classList.add("grid-container__group","grid-container__cartoons");var i=document.createElement("img");i.src=r[t].src,i.alt=r[t].text;var c=document.createElement("p");if(c.classList.add("p19"),c.textContent=r[t].text,!o)return;n.appendChild(i),n.appendChild(c),o.appendChild(n)}(a+=e)>=r.length&&s&&(s.style.display="none")}i(),s&&s.addEventListener("click",i),window.addEventListener("resize",(function(){a=0,o&&(o.innerHTML=""),i()}))},110:function(e,t){e.exports=[{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/avocado.png",text:"Милое авокадо"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"},{src:"assets/img/gull.png",text:"Морская птица Альбатрос летит"}]},111:function(e,t){},146:function(e,t,n){var r=n(91),o=n(147);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var s={insert:"head",singleton:!1};r(o,s);e.exports=o.locals||{}},147:function(e,t,n){},148:function(e,t,n){var r=n(91),o=n(149);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var s={insert:"head",singleton:!1};r(o,s);e.exports=o.locals||{}},149:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);n(92),n(97),n(103),n(47);for(var r=document.querySelectorAll(".button__arrow"),o=document.querySelectorAll(".grid-container__group-articles"),s=document.querySelector(".search-form__container"),a=document.querySelector(".search-button"),i=document.querySelector(".search-button__sound"),c=document.querySelector(".button-menu__burger"),l=document.querySelector(".button-menu__cross"),u=document.querySelector(".header__nav"),d=document.querySelector(".overlay"),p=function(e){r[e].addEventListener("mouseover",(function(){o[e].classList.add("hovered")})),r[e].addEventListener("mouseout",(function(){o[e].classList.remove("hovered")}))},g=0;g<r.length;g++)p(g);var m=document.querySelector(".up-arrow");m.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),m.addEventListener("touched",(function(){window.scrollTo({top:0,behavior:"smooth"})})),s&&(s.addEventListener("mouseover",(function(){a.classList.add("hovered"),i.classList.add("hovered")})),s.addEventListener("mouseout",(function(){a.classList.remove("hovered"),i.classList.remove("hovered")})));var h=document.querySelectorAll(".header__group"),v=document.querySelectorAll(".arrow"),f=Array.from(h);f.shift(),f.pop();var y=document.querySelectorAll(".header__row");f.forEach((function(e,t){window.innerWidth<=700?e.addEventListener("click",(function(){y[t].classList.toggle("hovered"),v[t].classList.toggle("arrow__img-two")})):(e.addEventListener("mouseover",(function(){y[t].classList.add("hovered")})),e.addEventListener("mouseout",(function(){y[t].classList.remove("hovered")})))})),c&&(c.addEventListener("click",(function(e){e.preventDefault(),u.style.display="flex",d.style.display="block",d.style.zIndex="101"})),l.addEventListener("click",(function(e){e.preventDefault(),u.style.display="none",d.style.display="none",d.style.zIndex="100"})));var b=document.getElementById("myInput"),w=document.querySelector(".popup"),x=document.querySelector(".popup__block");b&&b.addEventListener("input",(function(){""!==b.value.trim()?(w.classList.add("popup__active"),d.style.display="block",x.style.display="flex"):(w.classList.remove("popup__active"),d.style.display="none",x.style.display="none")}));for(var L=document.querySelectorAll(".coloring-pages__text"),_=document.querySelectorAll(".coloring-pages__row"),E=function(e){L[e].addEventListener("mouseover",(function(){_[e].classList.add("hovered")})),L[e].addEventListener("mouseout",(function(){_[e].classList.remove("hovered")}))},S=0;S<L.length;S++)E(S);var C=document.querySelector(".popup__cross"),A=document.querySelector(".popup__not-found");C&&C.addEventListener("click",(function(){A.classList.remove("popup__not-found_opened")})),A&&A.addEventListener("click",(function(){A.classList.remove("popup__not-found_opened")}));for(var k=document.querySelectorAll(".film-info__icon-group"),q=document.querySelectorAll(".film-info__window"),O=function(e){k[e].addEventListener("mouseover",(function(){q[e].classList.add("hovered")})),k[e].addEventListener("mouseout",(function(){q[e].classList.remove("hovered")}))},P=0;P<k.length;P++)O(P);document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".toggle-list").forEach((function(e){e.addEventListener("click",(function(){e.nextElementSibling.classList.toggle("show")})),e.addEventListener("mouseover",(function(){e.style.color="#5C25C5"})),e.addEventListener("mouseout",(function(){e.style.color=""}))}))}));for(var I=document.querySelectorAll(".questions"),j=document.querySelectorAll(".questions svg"),R=document.querySelectorAll(".film-info__container_two p"),T=function(e){I[e].addEventListener("click",(function(){R[e].classList.toggle("questions__text"),j[e].classList.toggle("questions__svg")}))},M=0;M<I.length;M++)T(M);n(109),n(111);var D=n(35),N=n(14);document.addEventListener("DOMContentLoaded",(function(){window.innerWidth<=800&&new D.a(".swiper-info",{modules:[N.a,N.b],loop:!0,slidesPerView:"auto",spaceBetween:30,pagination:{el:".pagination",clickable:!0,renderBullet:function(e,t){return e<4?'<span class="'+t+'"></span>':""}}})})),document.addEventListener("DOMContentLoaded",(function(){var e=new D.a(".gallery-thumbs",{modules:[N.a,N.b],spaceBetween:3,slidesPerView:"auto",loop:!0,loopedSlides:3,watchSlidesVisibility:!0,watchSlidesProgress:!0}),t=new D.a(".gallery-top",{modules:[N.a,N.b,N.c],spaceBetween:3,loop:!0,loopedSlides:3,thumbs:{swiper:e}});document.querySelectorAll(".save").forEach((function(e){e.addEventListener("click",(function(){var e=t.slides[t.activeIndex].querySelector("img"),n=document.createElement("a");n.href=e.src,n.download="image.jpg",document.body.appendChild(n),n.click(),document.body.removeChild(n)}))})),document.querySelectorAll(".print").forEach((function(e){e.addEventListener("click",(function(){var e=t.slides[t.activeIndex].querySelector("img"),n=window.open();n.document.write('<img src="'.concat(e.src,'" style="max-width: 100%;">')),n.document.close(),n.focus(),n.print(),n.close()}))}))}));n(75),n(77),n(78),n(50),n(86),n(87),n(88);function z(e,t,n,r,o,s,a){try{var i=e[s](a),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}var B=/^((([0-9A-Za-z]{1}[\x2D\.0-9A-z]+[0-9A-Za-z]{1})|([0-9\u0410-\u044F]{1}[\x2D\.0-9\\\u0410-\u044F]+[0-9\u0410-\u044F]{1}))@([\x2DA-Za-z]+\.){1,2}[\x2DA-Za-z]{2,})$/,F=/^[A-Za-zА-Яа-яЁё -]+$/;document.body.addEventListener("input",(function(e){e.target.classList.contains("input-words")&&(e.target.value=e.target.value.replace(/[^a-zа-яё\s]/gi,""))})),document.getElementById("form-reg").addEventListener("submit",function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,r,o,s,a,i,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=new FormData(t.target),r=n.get("name"),o=n.get("email"),s=n.get("phone"),a=B.test(o),i=F.test(r),o.includes(".")&&17===s.length&&i&&a?(c="https://maschbot.site/cgi-bin3/binorix.php?fullname="+encodeURIComponent(r)+"&email="+encodeURIComponent(o)+"&phone="+encodeURIComponent(s)+"&campaign=test",(l=new XMLHttpRequest).open("GET",c,!0),l.send(),Toastify({title:"Success",text:"Successfully registered. Soon we will call you!",theme:"dark",duration:5e3,destination:"https://calendly.com/unixtradinghub/30min",newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!0,className:"custom-toast",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()):(o.includes(".")&&a||Toastify({title:"Invalid Email",text:"Please enter a valid email address.",theme:"dark",duration:5e3,newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!0,className:"custom-toast",style:{background:"linear-gradient(to right, #c36868, #c36868)"}}).showToast(),i||Toastify({title:"Invalid Name",text:"Please enter a valid email address.",theme:"dark",duration:5e3,newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!0,className:"custom-toast",style:{background:"linear-gradient(to right, #c36868, #c36868)"}}).showToast(),17!==s.length&&new Toast({title:"Invalid Phone Number",text:"Please enter a valid phone number.",theme:"dark",autoClose:5e3,className:"custom-toast",hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}));case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function a(e){z(s,r,o,a,i,"next",e)}function i(e){z(s,r,o,a,i,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}());n(129),n(131),n(132),n(133),n(134),n(136),n(138),n(139),n(141),n(143),n(144);function U(e,t,n,r,o,s,a){try{var i=e[s](a),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}function W(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function a(e){U(s,r,o,a,i,"next",e)}function i(e){U(s,r,o,a,i,"throw",e)}a(void 0)}))}}function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,s,a,i=[],c=!0,l=!1;try{if(s=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=s.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,G(r.key),r)}}function G(e){var t=function(e,t){if("object"!=Z(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=Z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==Z(t)?t:t+""}var X=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;V(this,e),this.element=t,this.option={dataList:[],dataListShow:["flag","name"],phoneCountry:null!==n.phoneCountry?n.phoneCountry:"RU"},n.dataList&&(this.option.dataList=n.dataList),this.createInput()}var t,n,r;return t=e,(n=[{key:"createInput",value:function(){var e=this;this.phoneContainer=document.createElement("div"),this.phoneContainer.classList.add("phone_input"),this.inputElement=document.createElement("input"),this.inputElement.setAttribute("type","phone"),this.inputElement.setAttribute("required","required"),this.inputSetting(this.inputElement);var t=this.element.getAttribute("name");this.inputElement.setAttribute("name",t);var n=H(this.createSelectBox(),6),r=n[0],o=n[1],s=n[2],a=n[3],i=n[4],c=n[5];this.phoneContainer.appendChild(r),this.phoneContainer.appendChild(this.inputElement),this.element.replaceWith(this.phoneContainer),this.addListItems(o),this.searchInput(o);var l=!1;o.querySelectorAll("li").forEach((function(t){t.addEventListener("click",(function(){var n=t.getAttribute("data-value");s.textContent=n,e.inputSetting(e.inputElement,n)}))})),window.addEventListener("click",(function(e){r.contains(e.target)||i.contains(e.target)?a.contains(e.target)&&((l=!l)?(i.style.display="block",c.style.scale="-1"):(i.style.display="none",c.style.scale=null)):l&&(i.style.display="none",c.style.scale=null,l=!l)}))}},{key:"inputSetting",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.option.dataList.find((function(e){return e.code===(null===n?t.option.phoneCountry:n)})),o=r?r.phoneCode:"";e.value="".concat(o," (___) ___-____"),e.addEventListener("input",(function(t){var n=t.target.value;console.log();var r=o.replace(/\D/g,""),s=n.replace(/\D/g,""),a=o+" ("+s.slice(r.length,3+r.length)+"_".repeat(Math.max(0,4-s.length))+") "+s.slice(4,7)+"_".repeat(s.length>2+r.length?Math.max(0,6+r.length-s.length):3)+"-"+s.slice(7)+"_".repeat(s.length>6+r.length?Math.max(0,10+r.length-s.length):4),i=2+r.length;if(s.length<=3+r.length||(s.length<=6+r.length?i+=1+r.length:s.length<10+r.length?i+=2+r.length:a=o+" ("+s.slice(r.length,3+r.length)+") "+s.slice(3+r.length,6+r.length)+"-"+s.slice(6+r.length,10+r.length)),t.target.value=a,s.length<10+r.length){if(e.createTextRange){var c=e.createTextRange();c.move("character",0),c.select()}else e.setSelectionRange&&e.setSelectionRange(s.length+i,s.length+i);e.focus()}}))}},{key:"createSelectBox",value:function(){var e=document.createElement("div");e.classList.add("select_box");var t=document.createElement("div");t.classList.add("select_box-value");var n=document.createElement("span");n.classList.add("select_box-value-span"),n.textContent=this.option.phoneCountry;var r=document.createElement("div");r.classList.add("select_box-value-arrow");var o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width","1em"),o.setAttribute("height","1em"),o.setAttribute("viewBox","0 0 24 24"),o.setAttribute("fill","none");var s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("fill-rule","evenodd"),s.setAttribute("clip-rule","evenodd"),s.setAttribute("d","M6.46967 8.96967C6.76256 8.67678 7.23744 8.67678 7.53033 8.96967L12 13.4393L16.4697 8.96967C16.7626 8.67678 17.2374 8.67678 17.5303 8.96967C17.8232 9.26256 17.8232 9.73744 17.5303 10.0303L12.5303 15.0303C12.3897 15.171 12.1989 15.25 12 15.25C11.8011 15.25 11.6103 15.171 11.4697 15.0303L6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967Z"),s.setAttribute("fill","#000"),o.appendChild(s),r.appendChild(o),t.append(n),t.append(r);var a=document.createElement("div");a.classList.add("select_box-options");var i=document.createElement("input");i.setAttribute("type","text"),i.classList.add("search-box","search-box-search-list"),i.setAttribute("placeholder","Search");var c=document.createElement("ul");return c.classList.add("select_box-options-values"),a.appendChild(i),a.appendChild(c),e.appendChild(t),e.appendChild(a),[e,c,n,t,a,o]}},{key:"searchInput",value:function(e){var t=this.phoneContainer.querySelector(".search-box-search-list"),n=e.getElementsByTagName("li");t.addEventListener("input",(function(){for(var e=t.value.toLowerCase(),r=0;r<n.length;r++)n[r].textContent.toLowerCase().includes(e)?n[r].style.display="":n[r].style.display="none",n[r].getAttribute("data-value").toLowerCase().includes(e)&&(n[r].style.display="")}))}},{key:"addListItems",value:function(e){var t=this.option.dataList;for(var n in t)if(t.hasOwnProperty(n)){var r=t[n],o=document.createElement("li");o.setAttribute("data-value",r.code),o.textContent=r.name,e.append(o);var s=document.createElement("img");s.setAttribute("src",r.flag),s.setAttribute("width","25px"),s.setAttribute("height","25px"),o.prepend(s)}}}])&&$(t.prototype,n),r&&$(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Y(){return K.apply(this,arguments)}function K(){return(K=W(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/all");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){return(Q=W(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:return t=e.sent,n=t.reduce((function(e,t){return e[t.cca2]={name:t.name?t.name.common:null,code:t.cca2,flag:t.flags?t.flags.png:null,phoneCode:t.idd.root},e}),{}),e.abrupt("return",Object.values(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(){return(ee=W(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.ipbase.com/v2/info?apikey=JyBnvcgMNfv0eCw7ze2pmsY5Ns8p2R5Ed2ihzsa4");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Network response was not ok");case 6:return e.next=8,t.json();case 8:return n=e.sent,r=n.data.location.country.alpha2,e.abrupt("return",r);case 13:return e.prev=13,e.t0=e.catch(0),console.error("There was a problem with the fetch operation:",e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}(function(){return ee.apply(this,arguments)})().then((function(e){null!==e?function(){return Q.apply(this,arguments)}().then((function(t){document.querySelectorAll("#phone").forEach((function(n){new X(n,{dataList:t,phoneCountry:e})}))})).catch((function(e){return console.error("Произошла ошибка:",e)})):document.querySelectorAll("#phone").forEach((function(e){new X(e,{dataList:countriesArray,phoneCountry:"RU"})}))})).catch((function(){document.querySelectorAll("#phone").forEach((function(e){new X(e,{dataList:countriesArray,phoneCountry:"RU"})}))}));n(146),n(148)}});