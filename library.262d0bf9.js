!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("b7ONl",(function(n,r){e(n.exports,"fetchPopularMovies",(function(){return u})),e(n.exports,"fetchTodayPopularMovies",(function(){return d})),e(n.exports,"fetchMoviesByQuery",(function(){return p})),e(n.exports,"fetchTrailerById",(function(){return m})),e(n.exports,"fetchGenres",(function(){return h}));var o=a("bpxeT"),i=a("2TvXO"),c="https://api.themoviedb.org/3",s="db5c04dbd9637821020050cea594d5e0";function u(e){return l.apply(this,arguments)}function l(){return(l=t(o)(t(i).mark((function e(n){var r,o,a;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new URL("".concat(c,"/trending/movie/week"))).searchParams.append("api_key",s),r.searchParams.append("page",n),e.next=5,fetch(r);case 5:return o=e.sent,e.next=8,o.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return f.apply(this,arguments)}function f(){return(f=t(o)(t(i).mark((function e(){var n,r,o;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL("".concat(c,"/trending/movie/day"))).searchParams.append("api_key",s),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t){return g.apply(this,arguments)}function g(){return(g=t(o)(t(i).mark((function e(n,r){var o,a,u;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new URL("".concat(c,"/search/movie"))).searchParams.append("api_key",s),o.searchParams.append("query",n),o.searchParams.append("page",r),e.next=6,fetch(o);case 6:return a=e.sent,e.next=9,a.json();case 9:return u=e.sent,e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=t(o)(t(i).mark((function e(n){var r,o,a;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new URL("".concat(c,"/movie/").concat(n,"/videos"))).searchParams.append("api_key",s),e.next=4,fetch(r);case 4:return o=e.sent,e.next=7,o.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return y.apply(this,arguments)}function y(){return(y=t(o)(t(i).mark((function e(){var n,r,o;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL("".concat(c,"/genre/movie/list"))).searchParams.append("api_key",s),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return o=e.sent,e.abrupt("return",o.genres);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}})),a.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,s,"next",e)}function s(e){n(i,o,a,c,s,"throw",e)}c(void 0)}))}}})),a.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new P(r||[]);return a._invoke=function(e,t,n){var r=d;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===g){if("throw"===o)throw a;return S()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=l(e,t,n);if("normal"===s.type){if(r=n.done?g:f,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=g,n.method="throw",n.arg=s.arg)}}}(e,n,i),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",g="completed",m={};function v(){}function h(){}function y(){}var b={};s(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(M([])));x&&x!==n&&r.call(x,a)&&(b=x);var E=y.prototype=v.prototype=Object.create(b);function L(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(o,a,i,c){var s=l(e[o],e,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function M(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:S}}function S(){return{value:t,done:!0}}return h.prototype=y,s(E,"constructor",y),s(y,"constructor",h),h.displayName=s(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},L(T.prototype),s(T.prototype,i,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new T(u(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(E),s(E,c,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=M,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:M(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("ajRVz",(function(e,t){var n=document.querySelectorAll("#btn"),r=document.getElementById("1");n.forEach((function(e){e.addEventListener("click",(function(){r.currentTime=0,r.play()}))}))})),a.register("k0xlu",(function(e,t){window.onscroll=function(){var e,t,n;e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=e/t*100,document.getElementById("myBar").style.width=n+"%"};var n=1.2*$(window).outerHeight();$(window).scroll((function(){$(document).scrollTop()>n?$("#up-button").addClass("active"):$("#up-button").removeClass("active")})),document.querySelector(".up-button").addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))})),a.register("cDXQO",(function(e,t){var n=a("dyT35"),r=a("b7ONl"),o=a("jQDcF"),i="https://www.youtube.com/embed/",c=document.querySelector(".trailer-btn"),s=function(e){"Escape"===e.code&&u.close(),window.removeEventListener("keydown",s)};c.addEventListener("click",(function(){var e;e=o.filmId,(0,r.fetchTrailerById)(e).then((function(e){var t=e.results[0].key;l.src=i+t,u.show(),document.querySelector(".close-modal__trailer").addEventListener("click",s),window.addEventListener("keydown",s)})).catch((function(e){d.show(),console.log(e)}))}));var u=n.create('\n  <iframe class="iframe-container" width="900" height="600" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n<button class="close-modal__trailer">\n     </button>'),l=u.element().querySelector("iframe"),d=n.create('\n    <iframe class="iframe-container" src="'.concat(i,'6DhiiFGk4_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n      '))})),a.register("dyT35",(function(e,t){e.exports=function e(t,n,r){function o(i,c){if(!n[i]){if(!t[i]){var s=void 0;if(!c&&s)return s(i,!0);if(a)return a(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[i]={exports:{}};t[i][0].call(l.exports,(function(e){return o(t[i][1][e]||e)}),l,l.exports,e,t,n,r)}return n[i].exports}for(var a=void 0,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},a=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=a,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),a=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return a.appendChild(e)}));var i=o(a,"IMG"),c=o(a,"VIDEO"),s=o(a,"IFRAME");return!0===i&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),i=function(e){return!1!==t.onClose(c)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===a(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(c)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&i()}));var c={element:function(){return n},visible:function(){return a(n)},show:function(e){return!1!==t.onShow(c)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(c)}))},close:i};return c}},{}]},{},[1])(1)})),a.register("jQDcF",(function(t,n){var r;e(t.exports,"filmId",(function(){return r})),e(t.exports,"getInitialModalData",(function(){return i}));var o=document.createElement("span"),a=document.createElement("span"),i=function(){var e=JSON.parse(localStorage.getItem("modalCardData")),t=document.getElementById("film-img"),n=document.getElementById("film-title"),i=document.getElementById("votes"),c=document.getElementById("popul"),s=document.getElementById("origTitle"),u=document.getElementById("genre");document.querySelector(".trailer-btn").dataset.filmId=e.id,r=e.id,t.src="null"!==e.poster_path?t.style.backgroundImage="url('https://image.tmdb.org/t/p/w500".concat(e.poster_path,"')"):t.style.backgroundImage="url('".concat("https://i.ibb.co/r76r6Vt/oie-30214851-Ms-Wl-PTS0.png","')"),n.innerText=e.title?"".concat(e.title):"N/A",about.innerText=e.overview?"".concat(e.overview):"N/A",o.className="average",a.className="count",o.innerText=e.vote_average?"".concat((1*e.vote_average).toFixed(1)):"N/A",a.innerText=e.vote_count?"/ ".concat(e.vote_count):"N/A",i.append(o,a),c.innerText=e.popularity?"".concat((1*e.popularity).toFixed(1)):"N/A",s.innerText=e.original_title?"".concat(e.original_title):"N/A",u.innerText=e.genre_ids?"".concat(e.genre_ids):"N/A"}})),a.register("kvC6y",(function(e,t){var n=document.querySelector(".mask");window.addEventListener("load",(function(){n.classList.add("hide")}))})),a.register("dOllX",(function(n,r){e(n.exports,"updateLibRender",(function(){return p})),e(n.exports,"localPaginate",(function(){return g})),e(n.exports,"loadFromStorageWatched",(function(){return m})),e(n.exports,"onClickWatched",(function(){return v}));var o,i=a("bpxeT"),c=a("2TvXO"),s=a("ewciJ"),u=a("4LMMA"),l=a("jcFG7"),d=a("5mKta"),f=a("l6KVq"),p=(o=t(i)(t(c).mark((function e(n){var r,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r="",(0,l.resetCurrentPage)(),o=g(n,f.state.currentPage),void 0!==n&&0!==n.length){e.next=9;break}(0,l.clearPagination)(),r='<li class="watched-img"><p class="watched-warning">No movies have been added yet. Let\'s go pick something to your liking</p></li>',e.next=14;break;case 9:return e.next=11,(0,s.renderGallery)(o);case 11:r=e.sent,(0,l.clearPagination)(),(0,l.renderPaginationMarkup)();case 14:d.moviesEl.innerHTML="",d.moviesEl.insertAdjacentHTML("beforeend",r),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[0,18]])}))),function(e){return o.apply(this,arguments)}),g=function(e,t){if(e){var n=6*(t-1);return f.state.totalPages=Math.ceil(e.length/6),e.slice(n,n+6)}},m=function(){var e=(0,u.getFromStorage)(u.localStorageKeys.WATCHED);f.state.whatPaginated="local",f.state.whatchedOrQueue="WATCHED",p(e)},v=function(){var e=t(i)(t(c).mark((function e(n){var r,o,a;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:if(!n.target.classList.contains("active")){e.next=4;break}return e.abrupt("return");case 4:r=document.querySelector(".active"),o=n.target.dataset.value.toUpperCase(),f.state.whatchedOrQueue=o,a=(0,u.getFromStorage)(u.localStorageKeys[o]),p(a),r.classList.remove("active"),n.target.classList.add("active");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})),a.register("ewciJ",(function(n,r){e(n.exports,"renderGallery",(function(){return l}));var o=a("bpxeT"),i=a("2TvXO"),c=a("b7ONl"),s="https://i.ibb.co/r76r6Vt/oie-30214851-Ms-Wl-PTS0.png";function u(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var s=i.value;if("N/A"===e||0===e.length){n.push("Other");break}e.includes(s.id)&&n.push(s.name)}}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n.length>2&&n.splice(2,n.length-2,"Other"),n.join(", ")}function l(e){return d.apply(this,arguments)}function d(){return d=t(o)(t(i).mark((function e(n){var r;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.fetchGenres)();case 2:return r=e.sent,e.abrupt("return",n.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=e.id,o=e.poster_path,a=e.title,i=e.release_date,c=e.genre_ids,l=e.original_title,d=e.vote_average,p=e.popularity,g=e.vote_count,m=e.overview,v=o?"https://image.tmdb.org/t/p/w500".concat(o):s,h=i?i.split("-")[0]:"Unknown",y=c?u(c,r):"Unknown";return"\n      <li class='movie_list_item' data-id=\"".concat(t,'" >\n      <div href="" class=\'movie_list_link link\' id=').concat(t,'>\n      <div class="movie__cover--darkened"\n        data-id="').concat(t,'"\n        data-poster_path="').concat(o,'"\n        data-title="').concat(a,'"\n        data-genre_ids="').concat(y,'"\n        data-original_title="').concat(l,'"\n        data-vote_average="').concat(d,'"\n        data-popularity="').concat(p,'"\n        data-vote_count="').concat(g,'"\n        data-overview="').concat(m,'"\n        data-release_date="').concat(i,'"\n      ></div>\n        <img class="movie_list_image" src=').concat(v," alt='Poster ").concat(l,"' loading='lazy' />\n        <div class='movie-info'>\n            <p class='movie-title'>\n              <b>").concat(a.toUpperCase(),"</b>\n            </p>\n            <p class='movie-date'>\n              <span>").concat(y," | ").concat(h,'</span>\n            </p>\n            <div class="movie__average movie__average--').concat(f(d),'">').concat(Number(d).toFixed(1),"</div>\n        </div>\n        </div>\n      </li>\n      ")})).join(""));case 4:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(e){return e>=8?"green":e>6?"orange":"red"}})),a.register("4LMMA",(function(t,n){e(t.exports,"setToLocalStorage",(function(){return r})),e(t.exports,"getFromStorage",(function(){return o})),e(t.exports,"localStorageKeys",(function(){return a}));var r=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.log(e.messege)}},o=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log(e.messege)}},a={WATCHED:"watched",QUEUE:"queue"}})),a.register("jcFG7",(function(n,r){e(n.exports,"resetCurrentPage",(function(){return v})),e(n.exports,"clearPagination",(function(){return h})),e(n.exports,"renderPaginationMarkup",(function(){return w})),e(n.exports,"onBtnPageClick",(function(){return T}));var o=a("bpxeT"),i=a("2TvXO"),c=a("b7ONl"),s=a("ewciJ");a("k0xlu");var u,l=a("4LMMA"),d=a("4Nugj"),f=a("dOllX"),p=a("5mKta"),g=a("l6KVq"),m=d.refs.pagination,v=function(){g.state.currentPage=1},h=function(){m.innerHTML=""},y=(u=t(o)(t(i).mark((function e(n){var r,o,a,u;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n,e.next="main"===e.t0?4:"search"===e.t0?18:"local"===e.t0?32:43;break;case 4:return e.prev=4,e.next=7,(0,c.fetchPopularMovies)(g.state.currentPage);case 7:return o=e.sent.results,e.next=10,(0,s.renderGallery)(o);case 10:r=e.sent,p.moviesEl.insertAdjacentHTML("beforeend",r),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(4),console.error(e.t1.message);case 17:return e.abrupt("break",44);case 18:return e.prev=18,e.next=21,(0,c.fetchMoviesByQuery)(g.state.query,g.state.currentPage);case 21:return a=e.sent.results,e.next=24,(0,s.renderGallery)(a);case 24:r=e.sent,p.moviesEl.insertAdjacentHTML("beforeend",r),e.next=31;break;case 28:e.prev=28,e.t2=e.catch(18),console.error(e.t2.message);case 31:return e.abrupt("break",44);case 32:return e.prev=32,u="WATCHED"===g.state.whatchedOrQueue?(0,l.getFromStorage)(l.localStorageKeys.WATCHED)||[]:(0,l.getFromStorage)(l.localStorageKeys.QUEUE)||[],e.next=36,(0,s.renderGallery)((0,f.localPaginate)(u,g.state.currentPage));case 36:r=e.sent,e.next=42;break;case 39:e.prev=39,e.t3=e.catch(32),console.error(e.t3.message);case 42:return e.abrupt("break",44);case 43:throw new Error("Invalid 'where' parameter: ".concat(n));case 44:p.moviesEl.insertAdjacentHTML("beforeend",r);case 45:case"end":return e.stop()}}),e,null,[[4,14],[18,28],[32,39]])}))),function(e){return u.apply(this,arguments)}),b=function(e,t){var n=Math.ceil(e/5),r=Math.ceil(t/5),o=5*(r-1)+1,a=Math.min(o+5-1,e);return{pages:Array.from({length:a-o+1},(function(e,t){return o+t})),hasPrevGroup:r>1,hasNextGroup:r<n}},w=function(){m.insertAdjacentHTML("beforeend",function(){if(!(g.state.totalPages<=1)){var e=b(g.state.totalPages,g.state.currentPage),t=e.pages,n=e.hasPrevGroup,r=e.hasNextGroup,o='<button type="button" class="end-btn page-btn">'.concat(g.state.totalPages,"</button>"),a='<button type="button" class="prev-btn page-btn"><svg class="icon icon-arrow-left">\n    <use xlink:href="'.concat(g.state.sprite,'#icon-arrow-left"></use>\n  </svg></button>'),i='<button type="button" class="next-btn page-btn"><svg class="icon icon-arrow-right">\n    <use xlink:href="'.concat(g.state.sprite,'#icon-arrow-right"></use>\n  </svg></button>');return(n?a+'<button type="button" class="start-btn page-btn">1</button><button class="page-btn prev-dots">...</button>':"")+t.map((function(e){var t=e===g.state.currentPage?"active-page":"";return'<button type="button" class="page-btn '.concat(t,'\n        ">').concat(e,"</button>")})).join("")+(r?'<button class="page-btn next-dots">...</button>'+o+i:"")}}())},x=function(e){g.state.currentPage=e,h(),w()},E=function(){var e=b(g.state.totalPages,g.state.currentPage).pages[0],t=Math.max(e-1,1);x(t)},L=function(e){var t=document.querySelector(".active-page"),n=Number(e.target.textContent)||g.state.currentPage;n!==g.state.currentPage&&(x(n),t.classList.remove("active-page"),e.target.classList.add("active-page"))},T=function(){var e=t(o)(t(i).mark((function e(n){return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:if(Number(n.target.textContent)!==g.state.currentPage){e.next=4;break}return e.abrupt("return");case 4:n.target.classList.contains("next-btn")&&x(g.state.currentPage+1),n.target.classList.contains("prev-btn")&&x(g.state.currentPage-1),n.target.classList.contains("next-dots")&&(t=void 0,r=void 0,o=void 0,t=b(g.state.totalPages,g.state.currentPage).pages,r=t[t.length-1],o=Math.min(r+1,g.state.totalPages),g.state.currentPage=t[t.length-1]+1,x(o)),n.target.classList.contains("prev-dots")&&E(),L(n),window.scrollTo({top:0}),p.moviesEl.innerHTML="",y(g.state.whatPaginated);case 12:case"end":return e.stop()}var t,r,o}),e)})));return function(t){return e.apply(this,arguments)}}()})),a.register("4Nugj",(function(t,n){e(t.exports,"refs",(function(){return r}));var r={foterLink:document.querySelector(".footer__link"),form:document.querySelector(".header-search-form"),pagination:document.querySelector(".pagination"),slider:document.querySelector(".swiper-wrapper"),btnWrapper:document.querySelector("#buttonWrapper"),addToWatchedBtn:document.querySelector(".add-to-watched-btn"),addToQueueBtn:document.querySelector(".add-to-queue-btn"),moviesLib:document.querySelector(".movies-lib"),watchedQueueBtnBlock:document.querySelector(".buttons-block"),buttonWatched:document.querySelector(".button-watched"),buttonQueue:document.querySelector(".button-queue")}})),a.register("5mKta",(function(t,n){e(t.exports,"moviesEl",(function(){return s}));var r=a("b7ONl"),o=a("ewciJ"),i=a("jcFG7"),c=a("l6KVq"),s=document.querySelector(".movies");window.addEventListener("load",(function(){(0,i.resetCurrentPage)(),(0,r.fetchPopularMovies)(c.state.currentPage).then((function(e){if("local"!==c.state.whatPaginated){c.state.whatPaginated="main";var t=e.results,n=e.total_pages;return c.state.totalPages=n,(0,i.renderPaginationMarkup)(),(0,o.renderGallery)(t)}})).then((function(e){null==s||s.insertAdjacentHTML("beforeend",e)}))}))})),a.register("l6KVq",(function(t,n){e(t.exports,"state",(function(){return r}));var r={currentPage:1,totalPages:0,activeFilm:null,query:null,whatPaginated:null,whatchedOrQueue:null,sprite:new URL(a("8UD0o"))}})),a.register("8UD0o",(function(e,t){e.exports=a("aNJCr").getBundleURL("7nwxg")+a("iE7OH").resolve("ee16w")})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a.register("5YIrO",(function(e,t){var n={openModal:document.querySelector(".open-modal-team"),closeModal:document.querySelector(".close-modal-team"),teamBackdrop:document.querySelector(".backdrop-modal"),teamModal:document.getElementsByClassName("team__modal")};function r(e){n.teamModal[0].classList.remove("closeModalAnimationTeam"),n.teamBackdrop.classList.add("team__backdrop--hidden"),document.removeEventListener("keydown",o),document.body.style.overflow=""}function o(e){"Escape"===e.code&&(n.teamModal[0].classList.remove("openModalAnimationTeam"),n.teamModal[0].classList.add("closeModalAnimationTeam"),setTimeout((function(){r()}),400),r())}function a(e){e.target===n.teamBackdrop&&(n.teamModal[0].classList.remove("openModalAnimationTeam"),n.teamModal[0].classList.add("closeModalAnimationTeam"),setTimeout((function(){r()}),400))}n.openModal.addEventListener("click",(function(e){n.teamBackdrop.classList.remove("team__backdrop--hidden"),document.addEventListener("keydown",o),document.addEventListener("click",a),n.teamModal[0].classList.add("openModalAnimationTeam")})),n.closeModal.addEventListener("click",r)})),a.register("PqlDp",(function(e,n){var r=a("dDDEV");a("9Vzwk"),a("b7ONl");var o=a("jQDcF"),i=a("4LMMA"),c=a("4Nugj"),s=a("l6KVq"),u=document.getElementById("info-modal"),l=document.getElementById("modal"),d=function(){l.classList.remove("openModalAnimation"),l.classList.add("closeModalAnimation"),setTimeout((function(){u.classList.remove("open"),localStorage.removeItem("modalCardData")}),600)};window.addEventListener("keydown",(function(e){"Escape"===e.key&&d()}));var f=document.getElementById("close-modal");f.addEventListener("click",(function(e){e.target==f&&d()})),window.onclick=function(e){var t=document.getElementById("info-modal");e.target==t&&d()},window.onload=function(){var e=document.getElementsByClassName("movies")[0],n=document.getElementsByClassName("movies-lib")[0];null==e||e.addEventListener("click",(function(e){o(e)})),null==n||n.addEventListener("click",(function(e){o(e)}));var o=function(e){var n=t(r)({},e.target.dataset);if(Object.keys(n).length){s.state.activeFilm=n,localStorage.setItem("modalCardData",JSON.stringify(n)),p();var o=(0,i.getFromStorage)(i.localStorageKeys.WATCHED)||[],a=(0,i.getFromStorage)(i.localStorageKeys.QUEUE)||[];o.find((function(e){return e.id===s.state.activeFilm.id}))?c.refs.addToWatchedBtn.innerText="REMOVE FROM WATCHED":c.refs.addToWatchedBtn.innerText="ADD TO WATCHED",a.find((function(e){return e.id===s.state.activeFilm.id}))?c.refs.addToQueueBtn.innerText="REMOVE FROM QUEUE":c.refs.addToQueueBtn.innerText="ADD TO QUEUE"}}};var p=function(){document.getElementById("info-modal").classList.add("open"),l.classList.add("openModalAnimation"),o.getInitialModalData()}})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=a("hKHmD"))&&n.__esModule?n:{default:n}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("9Vzwk",(function(n,r){e(n.exports,"onBtnAddToLibrary",(function(){return f})),e(n.exports,"updateMarkupLibrary",(function(){return m}));var o=a("bpxeT"),i=a("2TvXO"),c=a("4LMMA"),s=a("jcFG7"),u=a("4Nugj"),l=a("dOllX"),d=a("l6KVq"),f=function(e){var t=(0,c.getFromStorage)(c.localStorageKeys.WATCHED)||[],n=(0,c.getFromStorage)(c.localStorageKeys.QUEUE)||[];"ADD TO WATCHED"===e.target.innerText?p(t,c.localStorageKeys.WATCHED,"WATCHED",e):"REMOVE FROM WATCHED"===e.target.innerText?g(t,c.localStorageKeys.WATCHED,"WATCHED",e):"ADD TO QUEUE"===e.target.innerText?p(n,c.localStorageKeys.QUEUE,"QUEUE",e):"REMOVE FROM QUEUE"===e.target.innerText&&g(n,c.localStorageKeys.QUEUE,"QUEUE",e)};function p(e,t,n,r){e.push(d.state.activeFilm),(0,c.setToLocalStorage)(t,e),r.target.innerText="REMOVE FROM ".concat(n)}function g(e,t,n,r){var o=e.filter((function(e){return e.id!==d.state.activeFilm.id}));(0,c.setToLocalStorage)(t,o),r.target.innerText="ADD TO ".concat(n)}function m(e){"ADD TO WATCHED"===e.target.innerText||"REMOVE FROM WATCHED"===e.target.innerText?v():("ADD TO QUEUE"===e.target.innerText||"REMOVE FROM QUEUE"===e.target.innerText)&&y()}function v(){return h.apply(this,arguments)}function h(){return(h=t(o)(t(i).mark((function e(){var n,r;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,s.resetCurrentPage)(),n=(0,c.getFromStorage)(c.localStorageKeys.WATCHED)||[],r=(0,l.localPaginate)(n,d.state.currentPage),(0,l.updateLibRender)(r),w(u.refs.buttonWatched,u.refs.buttonQueue);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return b.apply(this,arguments)}function b(){return(b=t(o)(t(i).mark((function e(){var n,r;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,s.resetCurrentPage)(),n=(0,c.getFromStorage)(c.localStorageKeys.QUEUE)||[],r=(0,l.localPaginate)(n,d.state.currentPage),(0,l.updateLibRender)(r),w(u.refs.buttonQueue,u.refs.buttonWatched);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){e.classList.add("active"),t.classList.remove("active")}})),a("iE7OH").register(JSON.parse('{"7nwxg":"library.262d0bf9.js","4dE9U":"index.74336633.css","ee16w":"sprite.a7e02cf8.svg"}'))}();
//# sourceMappingURL=library.262d0bf9.js.map