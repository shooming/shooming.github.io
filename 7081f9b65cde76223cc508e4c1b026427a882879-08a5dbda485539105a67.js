/*! For license information please see 7081f9b65cde76223cc508e4c1b026427a882879-08a5dbda485539105a67.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[344],{9591:function(e,t,r){var n=r(8).default;function a(){"use strict";e.exports=a=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,o=r.hasOwnProperty,l="function"==typeof Symbol?Symbol:{},i=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",s=l.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(S){u=function(e,t,r){return e[t]=r}}function m(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),l=new I(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return C()}for(r.method=a,r.arg=o;;){var l=r.delegate;if(l){var i=k(l,r);if(i){if(i===h)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,l),o}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=m;var h={};function f(){}function p(){}function g(){}var y={};u(y,i,(function(){return this}));var v=Object.getPrototypeOf,E=v&&v(v(_([])));E&&E!==r&&o.call(E,i)&&(y=E);var w=g.prototype=f.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(a,l,i,c){var s=d(e[a],e,l);if("throw"!==s.type){var u=s.arg,m=u.value;return m&&"object"==n(m)&&o.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function k(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=d(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function _(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=g,u(w,"constructor",g),u(g,"constructor",p),p.displayName=u(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},b(x.prototype),u(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var l=new x(m(e,r,n,a),o);return t.isGeneratorFunction(r)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},b(w),u(w,s,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return l.type="throw",l.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],l=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var i=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(i&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var l=a?a.completion:{};return l.type=e,l.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},8:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7757:function(e,t,r){var n=r(9591)();e.exports=n;try{regeneratorRuntime=n}catch(a){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},2415:function(e,t,r){"use strict";r.d(t,{DH:function(){return k},aS:function(){return I},Ek:function(){return H},T3:function(){return n.T},Au:function(){return j},pQ:function(){return a.p}});var n=r(7126),a=r(1843),o=r(7294),l=r(9230),i=r(9390),c=r(4419),s=r(7690);function u(e){return o.createElement("svg",{version:"1.1",role:"img",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"430.123px",height:"430.123px",viewBox:"0 0 430.123 430.123"},o.createElement("g",null,o.createElement("path",{id:"Behance",d:"M388.432,119.12H280.659V92.35h107.782v26.77H388.432z M208.912,228.895 c6.954,10.771,10.429,23.849,10.429,39.203c0,15.878-3.918,30.122-11.889,42.704c-5.071,8.326-11.367,15.359-18.932,21.021 c-8.52,6.548-18.607,11.038-30.203,13.437c-11.633,2.403-24.224,3.617-37.787,3.617H0V81.247h129.25 c32.579,0.53,55.676,9.969,69.315,28.506c8.184,11.369,12.239,25.011,12.239,40.868c0,16.362-4.104,29.454-12.368,39.401 c-4.597,5.577-11.388,10.65-20.378,15.229C191.675,210.236,202.007,218.086,208.912,228.895z M61.722,186.76h56.632 c11.638,0,21.046-2.212,28.292-6.634c7.241-4.415,10.854-12.263,10.854-23.531c0-12.449-4.784-20.712-14.375-24.689 c-8.244-2.763-18.792-4.186-31.591-4.186H61.722V186.76z M162.953,264.275c0-13.902-5.682-23.513-17.023-28.67 c-6.342-2.931-15.29-4.429-26.763-4.536H61.722v71.322h56.556c11.619,0,20.612-1.521,27.102-4.694 C157.084,291.863,162.953,280.76,162.953,264.275z M428.419,220.736c1.302,8.756,1.891,21.46,1.652,38.065H290.493 c0.77,19.266,7.421,32.739,20.035,40.449c7.607,4.835,16.83,7.196,27.63,7.196c11.388,0,20.67-2.879,27.815-8.797 c3.893-3.137,7.327-7.565,10.296-13.152h51.16c-1.34,11.379-7.5,22.92-18.57,34.648c-17.151,18.641-41.205,27.988-72.097,27.988 c-25.52,0-48.011-7.883-67.533-23.592C249.772,307.777,240,282.211,240,246.746c0-33.257,8.773-58.712,26.378-76.43 c17.67-17.751,40.474-26.586,68.583-26.586c16.661,0,31.68,2.978,45.079,8.965c13.357,5.993,24.396,15.425,33.09,28.388 C420.998,192.499,426.058,205.699,428.419,220.736z M378.062,225.73c-0.938-13.322-5.386-23.405-13.395-30.296 c-7.943-6.91-17.866-10.379-29.706-10.379c-12.886,0-22.836,3.708-29.906,10.996c-7.118,7.273-11.547,17.161-13.362,29.68H378.062 L378.062,225.73z"})))}function m(e){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 194.818 194.818",x:"0px",y:"0px",role:"img",fill:e.color||"var(--primary-color)",width:"194.818px",height:"194.818px"},o.createElement("g",null,o.createElement("path",{d:"M185.8,2.2l-56.6,0c-4.8,0-9,3.6-9.3,8.4c-0.3,5.2,3.8,9.6,9,9.6h13.5c8.1,0,12.1,9.7,6.4,15.4L78,106.2 c-3.6,3.6-3.8,9.6-0.1,13.1c1.7,1.7,4,2.5,6.2,2.5c2.3,0,4.6-0.9,6.4-2.6l70.9-70.9c5.7-5.7,15.4-1.7,15.4,6.4v13.1 c0,4.8,3.6,9,8.4,9.3c5.2,0.3,9.6-3.8,9.6-9v-57C194.8,6.2,190.8,2.2,185.8,2.2z"}),o.createElement("path",{d:"M147.7,77.3c-4.5,0.6-7.7,4.7-7.7,9.2c0,14.6,0,59.7,0,79.1c0,5-4.1,9-9,9H27c-5,0-9-4.1-9-9V61.7c0-5,4.1-9,9-9l84.4,0 c4.8,0,9-3.6,9.3-8.4c0.3-5.2-3.8-9.6-9-9.6H9c-5,0-9,4.1-9,9v139.9c0,5,4.1,9,9,9H149c5,0,9-4.1,9-9V86.2 C158,80.8,153.2,76.5,147.7,77.3z"})))}function d(e){return o.createElement("svg",{version:"1.1",role:"img",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"262 -262 1024 1024"},o.createElement("path",{d:"M774-249.4c-282.9,0-512,229.1-512,512c0,226.6,146.6,417.9,350.1,485.8c25.6,4.5,35.2-10.9,35.2-24.3 c0-12.2-0.6-52.5-0.6-95.4c-128.6,23.7-161.9-31.4-172.2-60.2c-5.8-14.7-30.7-60.2-52.5-72.3c-17.9-9.6-43.5-33.3-0.6-33.9 c40.3-0.6,69.1,37.1,78.7,52.5c46.1,77.4,119.7,55.7,149.1,42.2c4.5-33.3,17.9-55.7,32.6-68.5c-113.9-12.8-233-57-233-252.8 c0-55.7,19.8-101.8,52.5-137.6c-5.1-12.8-23-65.3,5.1-135.7c0,0,42.9-13.4,140.8,52.5c41-11.5,84.5-17.3,128-17.3 c43.5,0,87,5.8,128,17.3c97.9-66.6,140.8-52.5,140.8-52.5c28.2,70.4,10.2,122.9,5.1,135.7c32.6,35.8,52.5,81.3,52.5,137.6 c0,196.5-119.7,240-233.6,252.8c18.6,16,34.6,46.7,34.6,94.7c0,68.5-0.6,123.5-0.6,140.8c0,13.4,9.6,29.4,35.2,24.3 c202.2-67.8,348.8-259.8,348.8-485.8C1286-20.2,1056.9-249.4,774-249.4z"}))}function h(e){return o.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:e.color||"var(--primary-color)",x:"0px",y:"0px",width:"430.117px",height:"430.117px",viewBox:"0 0 430.117 430.117"},o.createElement("g",null,o.createElement("path",{d:"M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"})))}function f(e){return o.createElement("svg",{version:"1.1",id:"Mail",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 433.664 433.664"},o.createElement("g",null,o.createElement("g",null,o.createElement("path",{d:"M229.376,271.616c-4.096,2.56-8.704,3.584-12.8,3.584s-8.704-1.024-12.8-3.584L0,147.2v165.376c0,35.328,28.672,64,64,64 h305.664c35.328,0,64-28.672,64-64V147.2L229.376,271.616z"}))),o.createElement("g",null,o.createElement("g",null,o.createElement("path",{d:"M369.664,57.088H64c-30.208,0-55.808,21.504-61.952,50.176l215.04,131.072l214.528-131.072 C425.472,78.592,399.872,57.088,369.664,57.088z"}))))}function p(e){return o.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:e.color||"var(--primary-color)",x:"0px",y:"0px",viewBox:"-237 239 24 24"},o.createElement("path",{d:"M-234.2,245.9c0-0.3-0.1-0.6-0.3-0.8l-2.2-2.7V242h7l5.4,11.8l4.7-11.8h6.6v0.4l-1.9,1.8c-0.2,0.1-0.2,0.3-0.2,0.5v13.5 c0,0.2,0,0.4,0.2,0.5l1.9,1.8v0.4h-9.4v-0.4l1.9-1.9c0.2-0.2,0.2-0.2,0.2-0.5v-10.9l-5.4,13.7h-0.7l-6.3-13.7v9.2 c-0.1,0.4,0.1,0.8,0.3,1.1l2.5,3.1v0.4h-7.1v-0.4l2.5-3.1c0.3-0.3,0.4-0.7,0.3-1.1C-234.2,256.5-234.2,245.9-234.2,245.9z"}))}function g(e){return o.createElement("svg",{version:"1.1",id:"Mail",fill:e.color||"var(--primary-color)",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 310 310"},o.createElement("g",{id:"XMLID_826_"},o.createElement("path",{id:"XMLID_827_",d:"M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73 c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783 c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598 C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467 c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977 c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889 c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597 c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961 c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895 c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367 c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998 C307.394,57.037,305.009,56.486,302.973,57.388z"})))}function y(e){switch(e.name.toLowerCase()){case"external":return o.createElement(m,{color:e.color});case"behance":return o.createElement(u,{color:e.color});case"github":return o.createElement(d,{color:e.color});case"linkedin":return o.createElement(h,{color:e.color});case"mail":return o.createElement(f,{color:e.color});case"medium":return o.createElement(p,{color:e.color});case"twitter":return o.createElement(g,{color:e.color});default:return null}}var v,E=r(906),w={behance:"Behance",github:"GitHub",medium:"Medium",linkedin:"LinkedIn",mail:"Mail",twitter:"Twitter"};function b(e){var t=(0,s.$)(),r=e.from.map((function(e){var r=e.toLowerCase();if(Object.values(v).includes(r))return{id:r,label:w[r],url:t.social[r]};throw new Error("Unknown social profile "+e+".")}));return o.createElement(E.i,null,r.map((function(t,r){return t.label&&t.url?o.createElement("a",{key:r,className:"style-module--Profile--yX-7v",href:t.url,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":t.label,style:e.showIcon?{padding:"0.5rem 1.25rem"}:void 0},e.showIcon?o.createElement(y,{name:t.id}):void 0," ",t.label):null})))}!function(e){e.Behance="behance",e.GitHub="github",e.Medium="medium",e.Mail="mail",e.LinkedIn="linkedin",e.Twitter="twitter"}(v||(v={}));var x=r(1597);function k(e){var t=(0,x.useStaticQuery)("3653240975").allHeroJson.sections[0];return o.createElement(i.f,{type:"fadeUp",delay:400},o.createElement(c.$,{anchor:e.sectionId,additionalClasses:["style-module--Hero--Evv0u"]},o.createElement("div",{className:"style-module--Intro--agHzQ"},t.intro&&o.createElement("span",{className:"style-module--ImagePrefix--bcT3l"},t.intro),t.image.src&&o.createElement(i.f,{className:"style-module--Image--jVafd",type:"waving-hand",duration:2500,iterationCount:3},o.createElement(l.G,{image:t.image.src.childImageSharp.gatsbyImageData,alt:t.image.alt||"Intro Image",loading:"eager"}))),o.createElement("h1",{className:"style-module--Title--Twdkw"},t.title),o.createElement("h2",{className:"style-module--Subtitle--qhIz8"},t.subtitle.prefix,o.createElement("u",null,t.subtitle.highlight),t.subtitle.suffix),o.createElement("p",null,t.description),o.createElement(i.f,{type:"fadeLeft",delay:600},t.socialProfiles&&o.createElement(b,{from:t.socialProfiles.from,showIcon:t.socialProfiles.showIcons}))))}r(7757),r(9327);var L;!function(e){e.Medium="medium",e.Blog="blog"}(L||(L={}));var N=r(9057);function I(e){var t,r=(0,x.useStaticQuery)("2442753764").allInterestsJson.sections[0],n=!1!==r.button.visible,a=null!==(t=r.button.initiallyShownInterests)&&void 0!==t?t:5,s=o.useState(n?a:r.interests.length),u=s[0],m=s[1];return o.createElement(i.f,{type:"fadeUp"},o.createElement(c.$,{anchor:e.sectionId,heading:e.heading},o.createElement("div",{className:"style-module--Interests--PTs7f"},r.interests.slice(0,u).map((function(e,t){return o.createElement(i.f,{key:t,className:"style-module--Interest--S-1PG",type:"scaleIn",delay:100*t},e.image.src&&o.createElement(l.G,{image:e.image.src.childImageSharp.gatsbyImageData,className:"style-module--Icon--S2+P5",alt:e.image.alt||"Interest "+e.label})," ",e.label)})),n&&u<r.interests.length&&o.createElement(i.f,{type:"scaleIn",delay:100*(u+1)},o.createElement(N.z,{type:N.L.BUTTON,onClickHandler:function(){m(r.interests.length)},label:"+ Load more"})))))}var _,C=r(969),S="style-module--ProjectImage--ju6ZI",T="style-module--ProjectImageWrapper--Zo9iV";function M(e){var t=(0,C.a)("(min-width: 992px)");return o.createElement(i.f,{type:"fadeUp",className:"style-module--Project--bSesc",style:{flexDirection:t&&e.index%2==0?"row-reverse":void 0}},o.createElement("div",{className:"style-module--Details--8i8Oa"},o.createElement("span",{className:"style-module--Category--8wNOB"},e.data.category),o.createElement("h4",{className:"style-module--Title--hQGtV"},e.data.title),o.createElement("p",null,e.data.description),o.createElement("div",{className:"style-module--Tags--15NuW"},e.data.tags&&0!==e.data.tags.length&&e.data.tags.map((function(e,t){return o.createElement("span",{key:t},o.createElement("u",null,e))}))),o.createElement("div",{className:"style-module--Links--dgKuy"},e.data.links&&0!==e.data.links.length&&e.data.links.map((function(e,t){return o.createElement("a",{key:t,href:e.url,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},o.createElement(y,{name:e.type,color:"var(--subtext-color)"}))})))),e.data.image.src&&e.data.image.linkTo&&o.createElement("a",{href:e.data.image.linkTo,target:"_blank",rel:"noopener noreferrer","aria-label":"External Link"},o.createElement(l.G,{className:T,imgClassName:S,image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||"Project "+e.data.title})),e.data.image.src&&!e.data.image.linkTo&&o.createElement(l.G,{className:T,imgClassName:S,image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||"Project "+e.data.title}))}!function(e){e.External="external",e.Github="github"}(_||(_={}));function j(e){var t=(0,x.useStaticQuery)("513457919").allProjectsJson.sections[0];return o.createElement(i.f,{type:"fadeIn"},o.createElement(c.$,{anchor:e.sectionId,heading:e.heading},o.createElement(E.i,{additionalClasses:["style-module--Projects--pBlNb"]},t.projects.map((function(e,t){return e.visible?o.createElement(M,{key:t,index:t,data:e}):null}))),void 0!==t.button&&!1!==t.button.visible&&o.createElement(i.f,{className:"style-module--MoreProjects--BjdQw",type:"fadeIn"},o.createElement(N.z,{type:N.L.LINK,externalLink:!0,url:t.button.url,label:t.button.label}))))}function H(e){var t=function(e,t){var r=e.allLegalSection.sections.filter((function(e){return e.frontmatter.sectionId===t}));if(0===r.length)throw new Error("Could not find section "+t+" by id.");if(r.length>1)throw new Error("Found section "+t+" multiple times. Make sure the id is unique.");return r[0]}((0,x.useStaticQuery)("597217301"),e.sectionId);return o.createElement(c.$,{anchor:e.sectionId,heading:e.heading},o.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))}},9327:function(e,t,r){"use strict";r.d(t,{T:function(){return i}});var n=r(7294),a=r(1597),o=r(9230);!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD {\n  line-height: 1;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  background: #eff1f6;\n}\n\n.styles_skeleton__tyzRD::before {\n  content: "";\n  position: absolute;\n  height: 100%;\n  width: 500px;\n  top: 0;\n  left: -500px;\n  background-image: linear-gradient(\n    90deg,\n    rgba(255, 255, 255, 0),\n    rgba(255, 255, 255, 0.6),\n    rgba(255, 255, 255, 0)\n  );\n  animation: styles_skeleton-progress__aezri 1.2s ease-in-out infinite;\n}\n\n@keyframes styles_skeleton-progress__aezri {\n  0% {\n    left: -500px;\n  }\n  100% {\n    left: 100%;\n  }\n}\n');var l=r(6115);function i(e){var t,r=(0,l.j1)().globalState.theme===l.Q2.Dark,i=e.data.link.indexOf("://")>0||0===e.data.link.indexOf("//"),c=n.createElement("article",{className:"style-module--Card--xmHd-",style:r?{border:"0.125rem solid var(--primary-color)"}:void 0},e.showBanner&&n.createElement("div",{className:"style-module--Banner--1AHea"},e.data.image&&e.data.image.src&&n.createElement(o.G,{className:"style-module--ImageWrapper--UDAGh",imgClassName:"style-module--Image--Q-EOT",image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||e.data.title})),n.createElement("div",{className:"style-module--DescriptionWrapper--X4Z6Q"},n.createElement("span",{className:"style-module--Category--7rkhy"},n.createElement("u",null,e.data.category)),n.createElement("h4",{className:"style-module--Title--3nDZX"},e.data.title),n.createElement("div",{className:"style-module--Details--W6Sx5"},["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(t=e.data.publishedAt).getMonth()]+" "+t.getDate()+", "+t.getFullYear(),e.data.readingTime&&n.createElement("span",{className:"style-module--ReadingTime--oDks7"},e.data.readingTime))));return i?n.createElement("a",{href:e.data.link,target:"_blank",rel:"nofollow noopener noreferrer",title:e.data.title},c):n.createElement(a.Link,{to:e.data.link,title:e.data.title},c)}},9057:function(e,t,r){"use strict";r.d(t,{z:function(){return i},L:function(){return n}});var n,a=r(7294),o=r(1597),l="style-module--Button--grH1j";function i(e){if(e.type===n.LINK){if(e.url)return e.externalLink?a.createElement("a",{id:e.id,className:l,href:e.url,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},e.label):a.createElement(o.Link,{id:e.id,to:e.url,className:l},e.label);throw new Error("Button should be a "+e.type+" but no URL is given!")}if(e.type===n.BUTTON||e.type===n.SUBMIT){if(!e.onClickHandler)throw new Error("Button should be a "+e.type+" but no onClickHandler is given!");return a.createElement("button",{id:e.id,className:l,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}!function(e){e.BUTTON="button",e.SUBMIT="submit",e.LINK="link"}(n||(n={}))},4419:function(e,t,r){"use strict";r.d(t,{$:function(){return o}});var n=r(7294),a="style-module--ContentWrapper --Nt3lH";function o(e){var t;return t=e.additionalClasses?e.additionalClasses.concat(a).join(" "):a,n.createElement("section",{id:e.anchor,className:"style-module--Section--HYcY6"},n.createElement("div",{className:t},e.heading&&n.createElement("h3",{className:"style-module--Heading--LAAvY"},e.heading),e.children))}},906:function(e,t,r){"use strict";r.d(t,{i:function(){return o}});var n=r(7294),a="style-module--SlideContainer--YL8oD";function o(e){var t;return t=e.additionalClasses?e.additionalClasses.concat(a).join(" "):a,n.createElement("div",{className:t,style:e.style},e.children)}}}]);
//# sourceMappingURL=7081f9b65cde76223cc508e4c1b026427a882879-08a5dbda485539105a67.js.map