/*! For license information please see index.js.LICENSE.txt */
!function(A,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["react-library-with-webpack"]=e():A["react-library-with-webpack"]=e()}(self,(()=>(()=>{var A={923:(A,e,t)=>{"use strict";t.d(e,{Z:()=>c});var r=t(81),n=t.n(r),o=t(645),u=t.n(o)()(n());u.push([A.id,".img {\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n",""]);const c=u},921:(A,e,t)=>{"use strict";t.d(e,{Z:()=>c});var r=t(81),n=t.n(r),o=t(645),u=t.n(o)()(n());u.push([A.id,".simple-form-group {\r\n    margin-bottom: 1rem;\r\n}\r\n.simple-text-label {\r\n    display: block;\r\n    color: red;\r\n}\r\n.simple-text-input {\r\n    display: inline-block;\r\n    margin-bottom: 0.5rem;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    color: rgb(33, 37, 41);\r\n}\r\n",""]);const c=u},645:A=>{"use strict";A.exports=function(A){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=A(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(A,t,r,n,o){"string"==typeof A&&(A=[[null,A,void 0]]);var u={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(u[i]=!0)}for(var a=0;a<A.length;a++){var f=[].concat(A[a]);r&&u[f[0]]||(void 0!==o&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=o),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),n&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=n):f[4]="".concat(n)),e.push(f))}},e}},81:A=>{"use strict";A.exports=function(A){return A[1]}},418:A=>{"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function n(A){if(null==A)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(A)}A.exports=function(){try{if(!Object.assign)return!1;var A=new String("abc");if(A[5]="de","5"===Object.getOwnPropertyNames(A)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(A){return e[A]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(A){r[A]=A})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(A){return!1}}()?Object.assign:function(A,o){for(var u,c,i=n(A),a=1;a<arguments.length;a++){for(var f in u=Object(arguments[a]))t.call(u,f)&&(i[f]=u[f]);if(e){c=e(u);for(var l=0;l<c.length;l++)r.call(u,c[l])&&(i[c[l]]=u[c[l]])}}return i}},703:(A,e,t)=>{"use strict";var r=t(414);function n(){}function o(){}o.resetWarningCache=n,A.exports=function(){function A(A,e,t,n,o,u){if(u!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return A}A.isRequired=A;var t={array:A,bigint:A,bool:A,func:A,number:A,object:A,string:A,symbol:A,any:A,arrayOf:e,element:A,elementType:A,instanceOf:e,node:A,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:n};return t.PropTypes=t,t}},697:(A,e,t)=>{A.exports=t(703)()},414:A=>{"use strict";A.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},408:(A,e,t)=>{"use strict";var r=t(418),n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,u=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,f=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.memo"):60115,d=n?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function m(A){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+A,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+A+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(A,e,t){this.props=A,this.context=e,this.refs=g,this.updater=t||b}function P(){}function w(A,e,t){this.props=A,this.context=e,this.refs=g,this.updater=t||b}h.prototype.isReactComponent={},h.prototype.setState=function(A,e){if("object"!=typeof A&&"function"!=typeof A&&null!=A)throw Error(m(85));this.updater.enqueueSetState(this,A,e,"setState")},h.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")},P.prototype=h.prototype;var O=w.prototype=new P;O.constructor=w,r(O,h.prototype),O.isPureReactComponent=!0;var S={current:null},x=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function k(A,e,t){var r,n={},u=null,c=null;if(null!=e)for(r in void 0!==e.ref&&(c=e.ref),void 0!==e.key&&(u=""+e.key),e)x.call(e,r)&&!j.hasOwnProperty(r)&&(n[r]=e[r]);var i=arguments.length-2;if(1===i)n.children=t;else if(1<i){for(var a=Array(i),f=0;f<i;f++)a[f]=arguments[f+2];n.children=a}if(A&&A.defaultProps)for(r in i=A.defaultProps)void 0===n[r]&&(n[r]=i[r]);return{$$typeof:o,type:A,key:u,ref:c,props:n,_owner:S.current}}function C(A){return"object"==typeof A&&null!==A&&A.$$typeof===o}var E=/\/+/g,T=[];function I(A,e,t,r){if(T.length){var n=T.pop();return n.result=A,n.keyPrefix=e,n.func=t,n.context=r,n.count=0,n}return{result:A,keyPrefix:e,func:t,context:r,count:0}}function B(A){A.result=null,A.keyPrefix=null,A.func=null,A.context=null,A.count=0,10>T.length&&T.push(A)}function D(A,e,t,r){var n=typeof A;"undefined"!==n&&"boolean"!==n||(A=null);var c=!1;if(null===A)c=!0;else switch(n){case"string":case"number":c=!0;break;case"object":switch(A.$$typeof){case o:case u:c=!0}}if(c)return t(r,A,""===e?"."+z(A,0):e),1;if(c=0,e=""===e?".":e+":",Array.isArray(A))for(var i=0;i<A.length;i++){var a=e+z(n=A[i],i);c+=D(n,a,t,r)}else if("function"==typeof(a=null===A||"object"!=typeof A?null:"function"==typeof(a=v&&A[v]||A["@@iterator"])?a:null))for(A=a.call(A),i=0;!(n=A.next()).done;)c+=D(n=n.value,a=e+z(n,i++),t,r);else if("object"===n)throw t=""+A,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(A).join(", ")+"}":t,""));return c}function H(A,e,t){return null==A?0:D(A,"",e,t)}function z(A,e){return"object"==typeof A&&null!==A&&null!=A.key?function(A){var e={"=":"=0",":":"=2"};return"$"+(""+A).replace(/[=:]/g,(function(A){return e[A]}))}(A.key):e.toString(36)}function L(A,e){A.func.call(A.context,e,A.count++)}function R(A,e,t){var r=A.result,n=A.keyPrefix;A=A.func.call(A.context,e,A.count++),Array.isArray(A)?X(A,r,t,(function(A){return A})):null!=A&&(C(A)&&(A=function(A,e){return{$$typeof:o,type:A.type,key:e,ref:A.ref,props:A.props,_owner:A._owner}}(A,n+(!A.key||e&&e.key===A.key?"":(""+A.key).replace(E,"$&/")+"/")+t)),r.push(A))}function X(A,e,t,r,n){var o="";null!=t&&(o=(""+t).replace(E,"$&/")+"/"),H(A,R,e=I(e,o,r,n)),B(e)}var N={current:null};function M(){var A=N.current;if(null===A)throw Error(m(321));return A}var Y={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r};e.Children={map:function(A,e,t){if(null==A)return A;var r=[];return X(A,r,null,e,t),r},forEach:function(A,e,t){if(null==A)return A;H(A,L,e=I(null,null,e,t)),B(e)},count:function(A){return H(A,(function(){return null}),null)},toArray:function(A){var e=[];return X(A,e,null,(function(A){return A})),e},only:function(A){if(!C(A))throw Error(m(143));return A}},e.Component=h,e.Fragment=c,e.Profiler=a,e.PureComponent=w,e.StrictMode=i,e.Suspense=p,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,e.cloneElement=function(A,e,t){if(null==A)throw Error(m(267,A));var n=r({},A.props),u=A.key,c=A.ref,i=A._owner;if(null!=e){if(void 0!==e.ref&&(c=e.ref,i=S.current),void 0!==e.key&&(u=""+e.key),A.type&&A.type.defaultProps)var a=A.type.defaultProps;for(f in e)x.call(e,f)&&!j.hasOwnProperty(f)&&(n[f]=void 0===e[f]&&void 0!==a?a[f]:e[f])}var f=arguments.length-2;if(1===f)n.children=t;else if(1<f){a=Array(f);for(var l=0;l<f;l++)a[l]=arguments[l+2];n.children=a}return{$$typeof:o,type:A.type,key:u,ref:c,props:n,_owner:i}},e.createContext=function(A,e){return void 0===e&&(e=null),(A={$$typeof:l,_calculateChangedBits:e,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:A},A.Consumer=A},e.createElement=k,e.createFactory=function(A){var e=k.bind(null,A);return e.type=A,e},e.createRef=function(){return{current:null}},e.forwardRef=function(A){return{$$typeof:s,render:A}},e.isValidElement=C,e.lazy=function(A){return{$$typeof:d,_ctor:A,_status:-1,_result:null}},e.memo=function(A,e){return{$$typeof:y,type:A,compare:void 0===e?null:e}},e.useCallback=function(A,e){return M().useCallback(A,e)},e.useContext=function(A,e){return M().useContext(A,e)},e.useDebugValue=function(){},e.useEffect=function(A,e){return M().useEffect(A,e)},e.useImperativeHandle=function(A,e,t){return M().useImperativeHandle(A,e,t)},e.useLayoutEffect=function(A,e){return M().useLayoutEffect(A,e)},e.useMemo=function(A,e){return M().useMemo(A,e)},e.useReducer=function(A,e,t){return M().useReducer(A,e,t)},e.useRef=function(A){return M().useRef(A)},e.useState=function(A){return M().useState(A)},e.version="16.14.0"},294:(A,e,t)=>{"use strict";A.exports=t(408)},379:A=>{"use strict";var e=[];function t(A){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===A){t=r;break}return t}function r(A,r){for(var o={},u=[],c=0;c<A.length;c++){var i=A[c],a=r.base?i[0]+r.base:i[0],f=o[a]||0,l="".concat(a," ").concat(f);o[a]=f+1;var s=t(l),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==s)e[s].references++,e[s].updater(p);else{var y=n(p,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:y,references:1})}u.push(l)}return u}function n(A,e){var t=e.domAPI(e);return t.update(A),function(e){if(e){if(e.css===A.css&&e.media===A.media&&e.sourceMap===A.sourceMap&&e.supports===A.supports&&e.layer===A.layer)return;t.update(A=e)}else t.remove()}}A.exports=function(A,n){var o=r(A=A||[],n=n||{});return function(A){A=A||[];for(var u=0;u<o.length;u++){var c=t(o[u]);e[c].references--}for(var i=r(A,n),a=0;a<o.length;a++){var f=t(o[a]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}o=i}}},569:A=>{"use strict";var e={};A.exports=function(A,t){var r=function(A){if(void 0===e[A]){var t=document.querySelector(A);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(A){t=null}e[A]=t}return e[A]}(A);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:A=>{"use strict";A.exports=function(A){var e=document.createElement("style");return A.setAttributes(e,A.attributes),A.insert(e,A.options),e}},565:(A,e,t)=>{"use strict";A.exports=function(A){var e=t.nc;e&&A.setAttribute("nonce",e)}},795:A=>{"use strict";A.exports=function(A){var e=A.insertStyleElement(A);return{update:function(t){!function(A,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var n=void 0!==t.layer;n&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,n&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,A,e.options)}(e,A,t)},remove:function(){!function(A){if(null===A.parentNode)return!1;A.parentNode.removeChild(A)}(e)}}}},589:A=>{"use strict";A.exports=function(A,e){if(e.styleSheet)e.styleSheet.cssText=A;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(A))}}}},e={};function t(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={id:r,exports:{}};return A[r](o,o.exports,t),o.exports}t.n=A=>{var e=A&&A.__esModule?()=>A.default:()=>A;return t.d(e,{a:e}),e},t.d=(A,e)=>{for(var r in e)t.o(e,r)&&!t.o(A,r)&&Object.defineProperty(A,r,{enumerable:!0,get:e[r]})},t.o=(A,e)=>Object.prototype.hasOwnProperty.call(A,e),t.r=A=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},t.nc=void 0;var r={};return(()=>{"use strict";t.r(r),t.d(r,{Button:()=>j,TextInput:()=>E});var A=t(294),e=t(697),n=t.n(e),o=t(379),u=t.n(o),c=t(795),i=t.n(c),a=t(569),f=t.n(a),l=t(565),s=t.n(l),p=t(216),y=t.n(p),d=t(589),v=t.n(d),m=t(923),b={};function g(A){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},g(A)}function h(A,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(A,r.key,r)}}function P(A,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(A,e){return A.__proto__=e,A},P(A,e)}function w(A,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return O(A)}function O(A){if(void 0===A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}function S(A){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(A){return A.__proto__||Object.getPrototypeOf(A)},S(A)}b.styleTagTransform=v(),b.setAttributes=s(),b.insert=f().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=y(),u()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals;var x=function(e){!function(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),Object.defineProperty(A,"prototype",{writable:!1}),e&&P(A,e)}(c,e);var t,r,n,o,u=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(A){return!1}}(),function(){var A,e=S(n);if(o){var t=S(this).constructor;A=Reflect.construct(e,arguments,t)}else A=e.apply(this,arguments);return w(this,A)});function c(A){var e,t,r,n;return function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),n=function(A){e.props.onClick()},(r="handleOnClick")in(t=O(e=u.call(this,A)))?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,e}return t=c,(r=[{key:"render",value:function(){return A.createElement("div",null,A.createElement("button",{onclick:this.handleOnClick},A.createElement("img",{alt:"logo",className:"img",src:"data:image/png;base64,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"})))}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(A.Component);x.propTypes={onClick:n().func.isRequired};const j=x;var k=t(921),C={};C.styleTagTransform=v(),C.setAttributes=s(),C.insert=f().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=y(),u()(k.Z,C),k.Z&&k.Z.locals&&k.Z.locals;const E=function(e){var t=e.type,r=void 0===t?"text":t,n=e.label,o=e.value,u=e.onChange;return A.createElement("div",{className:"simple-form-group"},n&&A.createElement("label",{className:"simple-text-label"},n),A.createElement("input",{type:r,className:"simple-text-input",value:o,onChange:function(A){return u&&u(A.target.value)}}))}})(),r})()));