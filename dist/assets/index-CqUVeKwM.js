(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))m(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const y of u.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&m(y)}).observe(document,{childList:!0,subtree:!0});function p(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function m(a){if(a.ep)return;a.ep=!0;const u=p(a);fetch(a.href,u)}})();function Uc(T){return T&&T.__esModule&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T}var Xo={exports:{}},Qi={},Zo={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc;function Qp(){if(zc)return ve;zc=1;var T=Symbol.for("react.element"),_=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),y=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),q=Symbol.iterator;function L(l){return l===null||typeof l!="object"?null:(l=q&&l[q]||l["@@iterator"],typeof l=="function"?l:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ee=Object.assign,K={};function Y(l,c,f){this.props=l,this.context=c,this.refs=K,this.updater=f||Z}Y.prototype.isReactComponent={},Y.prototype.setState=function(l,c){if(typeof l!="object"&&typeof l!="function"&&l!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,l,c,"setState")},Y.prototype.forceUpdate=function(l){this.updater.enqueueForceUpdate(this,l,"forceUpdate")};function J(){}J.prototype=Y.prototype;function ue(l,c,f){this.props=l,this.context=c,this.refs=K,this.updater=f||Z}var ce=ue.prototype=new J;ce.constructor=ue,ee(ce,Y.prototype),ce.isPureReactComponent=!0;var me=Array.isArray,ge=Object.prototype.hasOwnProperty,le={current:null},ye={key:!0,ref:!0,__self:!0,__source:!0};function je(l,c,f){var w,$={},te=null,ae=null;if(c!=null)for(w in c.ref!==void 0&&(ae=c.ref),c.key!==void 0&&(te=""+c.key),c)ge.call(c,w)&&!ye.hasOwnProperty(w)&&($[w]=c[w]);var xe=arguments.length-2;if(xe===1)$.children=f;else if(1<xe){for(var Ce=Array(xe),We=0;We<xe;We++)Ce[We]=arguments[We+2];$.children=Ce}if(l&&l.defaultProps)for(w in xe=l.defaultProps,xe)$[w]===void 0&&($[w]=xe[w]);return{$$typeof:T,type:l,key:te,ref:ae,props:$,_owner:le.current}}function he(l,c){return{$$typeof:T,type:l.type,key:c,ref:l.ref,props:l.props,_owner:l._owner}}function we(l){return typeof l=="object"&&l!==null&&l.$$typeof===T}function V(l){var c={"=":"=0",":":"=2"};return"$"+l.replace(/[=:]/g,function(f){return c[f]})}var Q=/\/+/g;function N(l,c){return typeof l=="object"&&l!==null&&l.key!=null?V(""+l.key):c.toString(36)}function S(l,c,f,w,$){var te=typeof l;(te==="undefined"||te==="boolean")&&(l=null);var ae=!1;if(l===null)ae=!0;else switch(te){case"string":case"number":ae=!0;break;case"object":switch(l.$$typeof){case T:case _:ae=!0}}if(ae)return ae=l,$=$(ae),l=w===""?"."+N(ae,0):w,me($)?(f="",l!=null&&(f=l.replace(Q,"$&/")+"/"),S($,c,f,"",function(We){return We})):$!=null&&(we($)&&($=he($,f+(!$.key||ae&&ae.key===$.key?"":(""+$.key).replace(Q,"$&/")+"/")+l)),c.push($)),1;if(ae=0,w=w===""?".":w+":",me(l))for(var xe=0;xe<l.length;xe++){te=l[xe];var Ce=w+N(te,xe);ae+=S(te,c,f,Ce,$)}else if(Ce=L(l),typeof Ce=="function")for(l=Ce.call(l),xe=0;!(te=l.next()).done;)te=te.value,Ce=w+N(te,xe++),ae+=S(te,c,f,Ce,$);else if(te==="object")throw c=String(l),Error("Objects are not valid as a React child (found: "+(c==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":c)+"). If you meant to render a collection of children, use an array instead.");return ae}function A(l,c,f){if(l==null)return l;var w=[],$=0;return S(l,w,"","",function(te){return c.call(f,te,$++)}),w}function j(l){if(l._status===-1){var c=l._result;c=c(),c.then(function(f){(l._status===0||l._status===-1)&&(l._status=1,l._result=f)},function(f){(l._status===0||l._status===-1)&&(l._status=2,l._result=f)}),l._status===-1&&(l._status=0,l._result=c)}if(l._status===1)return l._result.default;throw l._result}var R={current:null},C={transition:null},B={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:C,ReactCurrentOwner:le};function h(){throw Error("act(...) is not supported in production builds of React.")}return ve.Children={map:A,forEach:function(l,c,f){A(l,function(){c.apply(this,arguments)},f)},count:function(l){var c=0;return A(l,function(){c++}),c},toArray:function(l){return A(l,function(c){return c})||[]},only:function(l){if(!we(l))throw Error("React.Children.only expected to receive a single React element child.");return l}},ve.Component=Y,ve.Fragment=p,ve.Profiler=a,ve.PureComponent=ue,ve.StrictMode=m,ve.Suspense=I,ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,ve.act=h,ve.cloneElement=function(l,c,f){if(l==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+l+".");var w=ee({},l.props),$=l.key,te=l.ref,ae=l._owner;if(c!=null){if(c.ref!==void 0&&(te=c.ref,ae=le.current),c.key!==void 0&&($=""+c.key),l.type&&l.type.defaultProps)var xe=l.type.defaultProps;for(Ce in c)ge.call(c,Ce)&&!ye.hasOwnProperty(Ce)&&(w[Ce]=c[Ce]===void 0&&xe!==void 0?xe[Ce]:c[Ce])}var Ce=arguments.length-2;if(Ce===1)w.children=f;else if(1<Ce){xe=Array(Ce);for(var We=0;We<Ce;We++)xe[We]=arguments[We+2];w.children=xe}return{$$typeof:T,type:l.type,key:$,ref:te,props:w,_owner:ae}},ve.createContext=function(l){return l={$$typeof:y,_currentValue:l,_currentValue2:l,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},l.Provider={$$typeof:u,_context:l},l.Consumer=l},ve.createElement=je,ve.createFactory=function(l){var c=je.bind(null,l);return c.type=l,c},ve.createRef=function(){return{current:null}},ve.forwardRef=function(l){return{$$typeof:M,render:l}},ve.isValidElement=we,ve.lazy=function(l){return{$$typeof:P,_payload:{_status:-1,_result:l},_init:j}},ve.memo=function(l,c){return{$$typeof:v,type:l,compare:c===void 0?null:c}},ve.startTransition=function(l){var c=C.transition;C.transition={};try{l()}finally{C.transition=c}},ve.unstable_act=h,ve.useCallback=function(l,c){return R.current.useCallback(l,c)},ve.useContext=function(l){return R.current.useContext(l)},ve.useDebugValue=function(){},ve.useDeferredValue=function(l){return R.current.useDeferredValue(l)},ve.useEffect=function(l,c){return R.current.useEffect(l,c)},ve.useId=function(){return R.current.useId()},ve.useImperativeHandle=function(l,c,f){return R.current.useImperativeHandle(l,c,f)},ve.useInsertionEffect=function(l,c){return R.current.useInsertionEffect(l,c)},ve.useLayoutEffect=function(l,c){return R.current.useLayoutEffect(l,c)},ve.useMemo=function(l,c){return R.current.useMemo(l,c)},ve.useReducer=function(l,c,f){return R.current.useReducer(l,c,f)},ve.useRef=function(l){return R.current.useRef(l)},ve.useState=function(l){return R.current.useState(l)},ve.useSyncExternalStore=function(l,c,f){return R.current.useSyncExternalStore(l,c,f)},ve.useTransition=function(){return R.current.useTransition()},ve.version="18.3.1",ve}var Ic;function ia(){return Ic||(Ic=1,Zo.exports=Qp()),Zo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc;function Kp(){if(Rc)return Qi;Rc=1;var T=ia(),_=Symbol.for("react.element"),p=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,a=T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function y(M,I,v){var P,q={},L=null,Z=null;v!==void 0&&(L=""+v),I.key!==void 0&&(L=""+I.key),I.ref!==void 0&&(Z=I.ref);for(P in I)m.call(I,P)&&!u.hasOwnProperty(P)&&(q[P]=I[P]);if(M&&M.defaultProps)for(P in I=M.defaultProps,I)q[P]===void 0&&(q[P]=I[P]);return{$$typeof:_,type:M,key:L,ref:Z,props:q,_owner:a.current}}return Qi.Fragment=p,Qi.jsx=y,Qi.jsxs=y,Qi}var $c;function Xp(){return $c||($c=1,Xo.exports=Kp()),Xo.exports}var t=Xp(),X=ia();const Zp=Uc(X);var ms={},ea={exports:{}},rt={},ta={exports:{}},na={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc;function eu(){return Lc||(Lc=1,(function(T){function _(C,B){var h=C.length;C.push(B);e:for(;0<h;){var l=h-1>>>1,c=C[l];if(0<a(c,B))C[l]=B,C[h]=c,h=l;else break e}}function p(C){return C.length===0?null:C[0]}function m(C){if(C.length===0)return null;var B=C[0],h=C.pop();if(h!==B){C[0]=h;e:for(var l=0,c=C.length,f=c>>>1;l<f;){var w=2*(l+1)-1,$=C[w],te=w+1,ae=C[te];if(0>a($,h))te<c&&0>a(ae,$)?(C[l]=ae,C[te]=h,l=te):(C[l]=$,C[w]=h,l=w);else if(te<c&&0>a(ae,h))C[l]=ae,C[te]=h,l=te;else break e}}return B}function a(C,B){var h=C.sortIndex-B.sortIndex;return h!==0?h:C.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;T.unstable_now=function(){return u.now()}}else{var y=Date,M=y.now();T.unstable_now=function(){return y.now()-M}}var I=[],v=[],P=1,q=null,L=3,Z=!1,ee=!1,K=!1,Y=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ce(C){for(var B=p(v);B!==null;){if(B.callback===null)m(v);else if(B.startTime<=C)m(v),B.sortIndex=B.expirationTime,_(I,B);else break;B=p(v)}}function me(C){if(K=!1,ce(C),!ee)if(p(I)!==null)ee=!0,j(ge);else{var B=p(v);B!==null&&R(me,B.startTime-C)}}function ge(C,B){ee=!1,K&&(K=!1,J(je),je=-1),Z=!0;var h=L;try{for(ce(B),q=p(I);q!==null&&(!(q.expirationTime>B)||C&&!V());){var l=q.callback;if(typeof l=="function"){q.callback=null,L=q.priorityLevel;var c=l(q.expirationTime<=B);B=T.unstable_now(),typeof c=="function"?q.callback=c:q===p(I)&&m(I),ce(B)}else m(I);q=p(I)}if(q!==null)var f=!0;else{var w=p(v);w!==null&&R(me,w.startTime-B),f=!1}return f}finally{q=null,L=h,Z=!1}}var le=!1,ye=null,je=-1,he=5,we=-1;function V(){return!(T.unstable_now()-we<he)}function Q(){if(ye!==null){var C=T.unstable_now();we=C;var B=!0;try{B=ye(!0,C)}finally{B?N():(le=!1,ye=null)}}else le=!1}var N;if(typeof ue=="function")N=function(){ue(Q)};else if(typeof MessageChannel<"u"){var S=new MessageChannel,A=S.port2;S.port1.onmessage=Q,N=function(){A.postMessage(null)}}else N=function(){Y(Q,0)};function j(C){ye=C,le||(le=!0,N())}function R(C,B){je=Y(function(){C(T.unstable_now())},B)}T.unstable_IdlePriority=5,T.unstable_ImmediatePriority=1,T.unstable_LowPriority=4,T.unstable_NormalPriority=3,T.unstable_Profiling=null,T.unstable_UserBlockingPriority=2,T.unstable_cancelCallback=function(C){C.callback=null},T.unstable_continueExecution=function(){ee||Z||(ee=!0,j(ge))},T.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<C?Math.floor(1e3/C):5},T.unstable_getCurrentPriorityLevel=function(){return L},T.unstable_getFirstCallbackNode=function(){return p(I)},T.unstable_next=function(C){switch(L){case 1:case 2:case 3:var B=3;break;default:B=L}var h=L;L=B;try{return C()}finally{L=h}},T.unstable_pauseExecution=function(){},T.unstable_requestPaint=function(){},T.unstable_runWithPriority=function(C,B){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var h=L;L=C;try{return B()}finally{L=h}},T.unstable_scheduleCallback=function(C,B,h){var l=T.unstable_now();switch(typeof h=="object"&&h!==null?(h=h.delay,h=typeof h=="number"&&0<h?l+h:l):h=l,C){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return c=h+c,C={id:P++,callback:B,priorityLevel:C,startTime:h,expirationTime:c,sortIndex:-1},h>l?(C.sortIndex=h,_(v,C),p(I)===null&&C===p(v)&&(K?(J(je),je=-1):K=!0,R(me,h-l))):(C.sortIndex=c,_(I,C),ee||Z||(ee=!0,j(ge))),C},T.unstable_shouldYield=V,T.unstable_wrapCallback=function(C){var B=L;return function(){var h=L;L=B;try{return C.apply(this,arguments)}finally{L=h}}}})(na)),na}var Mc;function tu(){return Mc||(Mc=1,ta.exports=eu()),ta.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc;function nu(){if(Bc)return rt;Bc=1;var T=ia(),_=tu();function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,a={};function u(e,n){y(e,n),y(e+"Capture",n)}function y(e,n){for(a[e]=n,e=0;e<n.length;e++)m.add(n[e])}var M=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),I=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},q={};function L(e){return I.call(q,e)?!0:I.call(P,e)?!1:v.test(e)?q[e]=!0:(P[e]=!0,!1)}function Z(e,n,i,r){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ee(e,n,i,r){if(n===null||typeof n>"u"||Z(e,n,i,r))return!0;if(r)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function K(e,n,i,r,s,o,d){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=d}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new K(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Y[n]=new K(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new K(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new K(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new K(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new K(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new K(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new K(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new K(e,5,!1,e.toLowerCase(),null,!1,!1)});var J=/[\-:]([a-z])/g;function ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(J,ue);Y[n]=new K(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(J,ue);Y[n]=new K(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(J,ue);Y[n]=new K(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new K(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new K(e,1,!1,e.toLowerCase(),null,!0,!0)});function ce(e,n,i,r){var s=Y.hasOwnProperty(n)?Y[n]:null;(s!==null?s.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ee(n,i,s,r)&&(i=null),r||s===null?L(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):s.mustUseProperty?e[s.propertyName]=i===null?s.type===3?!1:"":i:(n=s.attributeName,r=s.attributeNamespace,i===null?e.removeAttribute(n):(s=s.type,i=s===3||s===4&&i===!0?"":""+i,r?e.setAttributeNS(r,n,i):e.setAttribute(n,i))))}var me=T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ge=Symbol.for("react.element"),le=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),je=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),we=Symbol.for("react.provider"),V=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),R=Symbol.for("react.offscreen"),C=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=C&&e[C]||e["@@iterator"],typeof e=="function"?e:null)}var h=Object.assign,l;function c(e){if(l===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);l=n&&n[1]||""}return`
`+l+e}var f=!1;function w(e,n){if(!e||f)return"";f=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(z){var r=z}Reflect.construct(e,[],n)}else{try{n.call()}catch(z){r=z}e.call(n.prototype)}else{try{throw Error()}catch(z){r=z}e()}}catch(z){if(z&&r&&typeof z.stack=="string"){for(var s=z.stack.split(`
`),o=r.stack.split(`
`),d=s.length-1,g=o.length-1;1<=d&&0<=g&&s[d]!==o[g];)g--;for(;1<=d&&0<=g;d--,g--)if(s[d]!==o[g]){if(d!==1||g!==1)do if(d--,g--,0>g||s[d]!==o[g]){var x=`
`+s[d].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=d&&0<=g);break}}}finally{f=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?c(e):""}function $(e){switch(e.tag){case 5:return c(e.type);case 16:return c("Lazy");case 13:return c("Suspense");case 19:return c("SuspenseList");case 0:case 2:case 15:return e=w(e.type,!1),e;case 11:return e=w(e.type.render,!1),e;case 1:return e=w(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ye:return"Fragment";case le:return"Portal";case he:return"Profiler";case je:return"StrictMode";case N:return"Suspense";case S:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case V:return(e.displayName||"Context")+".Consumer";case we:return(e._context.displayName||"Context")+".Provider";case Q:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case A:return n=e.displayName||null,n!==null?n:te(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return te(e(n))}catch{}}return null}function ae(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(n);case 8:return n===je?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function xe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function We(e){var n=Ce(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,o=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(d){r=""+d,o.call(this,d)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return r},setValue:function(d){r=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function st(e){e._valueTracker||(e._valueTracker=We(e))}function Pn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),r="";return e&&(r=Ce(e)?e.checked?"true":"false":e.value),e=r,e!==i?(n.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hn(e,n){var i=n.checked;return h({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function vt(e,n){var i=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;i=xe(n.value!=null?n.value:i),e._wrapperState={initialChecked:r,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function zn(e,n){n=n.checked,n!=null&&ce(e,"checked",n,!1)}function oi(e,n){zn(e,n);var i=xe(n.value),r=n.type;if(i!=null)r==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ai(e,n.type,i):n.hasOwnProperty("defaultValue")&&ai(e,n.type,xe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ki(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function ai(e,n,i){(n!=="number"||Tn(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var fn=Array.isArray;function Et(e,n,i,r){if(e=e.options,n){n={};for(var s=0;s<i.length;s++)n["$"+i[s]]=!0;for(i=0;i<e.length;i++)s=n.hasOwnProperty("$"+e[i].value),e[i].selected!==s&&(e[i].selected=s),s&&r&&(e[i].defaultSelected=!0)}else{for(i=""+xe(i),n=null,s=0;s<e.length;s++){if(e[s].value===i){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function In(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(p(91));return h({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xi(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(p(92));if(fn(i)){if(1<i.length)throw Error(p(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:xe(i)}}function Zi(e,n){var i=xe(n.value),r=xe(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),r!=null&&(e.defaultValue=""+r)}function er(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function tr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ht(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?tr(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rn,li=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,r,s){MSApp.execUnsafeLocalFunction(function(){return e(n,i,r,s)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Rn=Rn||document.createElement("div"),Rn.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Rn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function pt(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hs=["Webkit","ms","Moz","O"];Object.keys(Xe).forEach(function(e){hs.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Xe[n]=Xe[e]})});function nr(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Xe.hasOwnProperty(e)&&Xe[e]?(""+n).trim():n+"px"}function ir(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var r=i.indexOf("--")===0,s=nr(i,n[i],r);i==="float"&&(i="cssFloat"),r?e.setProperty(i,s):e[i]=s}}var fs=h({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qt(e,n){if(n){if(fs[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(p(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(p(61))}if(n.style!=null&&typeof n.style!="object")throw Error(p(62))}}function Rt(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ci=null;function di(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pi=null,Yt=null,$t=null;function ui(e){if(e=$i(e)){if(typeof pi!="function")throw Error(p(280));var n=e.stateNode;n&&(n=Ar(n),pi(e.stateNode,e.type,n))}}function rr(e){Yt?$t?$t.push(e):$t=[e]:Yt=e}function sr(){if(Yt){var e=Yt,n=$t;if($t=Yt=null,ui(e),n)for(e=0;e<n.length;e++)ui(n[e])}}function mi(e,n){return e(n)}function or(){}var hi=!1;function fi(e,n,i){if(hi)return e(n,i);hi=!0;try{return mi(e,n,i)}finally{hi=!1,(Yt!==null||$t!==null)&&(or(),sr())}}function At(e,n){var i=e.stateNode;if(i===null)return null;var r=Ar(i);if(r===null)return null;i=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(p(231,n,typeof i));return i}var Jt=!1;if(M)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){Jt=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{Jt=!1}function gs(e,n,i,r,s,o,d,g,x){var z=Array.prototype.slice.call(arguments,3);try{n.apply(i,z)}catch(W){this.onError(W)}}var xn=!1,$n=null,Ln=!1,gi=null,b={onError:function(e){xn=!0,$n=e}};function F(e,n,i,r,s,o,d,g,x){xn=!1,$n=null,gs.apply(b,arguments)}function G(e,n,i,r,s,o,d,g,x){if(F.apply(this,arguments),xn){if(xn){var z=$n;xn=!1,$n=null}else throw Error(p(198));Ln||(Ln=!0,gi=z)}}function Ne(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function Ue(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Mn(e){if(Ne(e)!==e)throw Error(p(188))}function ar(e){var n=e.alternate;if(!n){if(n=Ne(e),n===null)throw Error(p(188));return n!==e?null:e}for(var i=e,r=n;;){var s=i.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){i=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===i)return Mn(s),e;if(o===r)return Mn(s),n;o=o.sibling}throw Error(p(188))}if(i.return!==r.return)i=s,r=o;else{for(var d=!1,g=s.child;g;){if(g===i){d=!0,i=s,r=o;break}if(g===r){d=!0,r=s,i=o;break}g=g.sibling}if(!d){for(g=o.child;g;){if(g===i){d=!0,i=o,r=s;break}if(g===r){d=!0,r=o,i=s;break}g=g.sibling}if(!d)throw Error(p(189))}}if(i.alternate!==r)throw Error(p(190))}if(i.tag!==3)throw Error(p(188));return i.stateNode.current===i?e:n}function ot(e){return e=ar(e),e!==null?yt(e):null}function yt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=yt(e);if(n!==null)return n;e=e.sibling}return null}var sa=_.unstable_scheduleCallback,oa=_.unstable_cancelCallback,ad=_.unstable_shouldYield,ld=_.unstable_requestPaint,Re=_.unstable_now,cd=_.unstable_getCurrentPriorityLevel,xs=_.unstable_ImmediatePriority,aa=_.unstable_UserBlockingPriority,lr=_.unstable_NormalPriority,dd=_.unstable_LowPriority,la=_.unstable_IdlePriority,cr=null,Dt=null;function pd(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(cr,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:hd,ud=Math.log,md=Math.LN2;function hd(e){return e>>>=0,e===0?32:31-(ud(e)/md|0)|0}var dr=64,pr=4194304;function xi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ur(e,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes,d=i&268435455;if(d!==0){var g=d&~s;g!==0?r=xi(g):(o&=d,o!==0&&(r=xi(o)))}else d=i&~s,d!==0?r=xi(d):o!==0&&(r=xi(o));if(r===0)return 0;if(n!==0&&n!==r&&(n&s)===0&&(s=r&-r,o=n&-n,s>=o||s===16&&(o&4194240)!==0))return n;if((r&4)!==0&&(r|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)i=31-jt(n),s=1<<i,r|=e[i],n&=~s;return r}function fd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gd(e,n){for(var i=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var d=31-jt(o),g=1<<d,x=s[d];x===-1?((g&i)===0||(g&r)!==0)&&(s[d]=fd(g,n)):x<=n&&(e.expiredLanes|=g),o&=~g}}function vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ca(){var e=dr;return dr<<=1,(dr&4194240)===0&&(dr=64),e}function ys(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function vi(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-jt(n),e[n]=i}function xd(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<i;){var s=31-jt(i),o=1<<s;n[s]=0,r[s]=-1,e[s]=-1,i&=~o}}function js(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var r=31-jt(i),s=1<<r;s&n|e[r]&n&&(e[r]|=n),i&=~s}}var Se=0;function da(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pa,bs,ua,ma,ha,ks=!1,mr=[],Gt=null,Vt=null,Qt=null,yi=new Map,ji=new Map,Kt=[],vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fa(e,n){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":yi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(n.pointerId)}}function bi(e,n,i,r,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:i,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},n!==null&&(n=$i(n),n!==null&&bs(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function yd(e,n,i,r,s){switch(n){case"focusin":return Gt=bi(Gt,e,n,i,r,s),!0;case"dragenter":return Vt=bi(Vt,e,n,i,r,s),!0;case"mouseover":return Qt=bi(Qt,e,n,i,r,s),!0;case"pointerover":var o=s.pointerId;return yi.set(o,bi(yi.get(o)||null,e,n,i,r,s)),!0;case"gotpointercapture":return o=s.pointerId,ji.set(o,bi(ji.get(o)||null,e,n,i,r,s)),!0}return!1}function ga(e){var n=vn(e.target);if(n!==null){var i=Ne(n);if(i!==null){if(n=i.tag,n===13){if(n=Ue(i),n!==null){e.blockedOn=n,ha(e.priority,function(){ua(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Ns(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var r=new i.constructor(i.type,i);ci=r,i.target.dispatchEvent(r),ci=null}else return n=$i(i),n!==null&&bs(n),e.blockedOn=i,!1;n.shift()}return!0}function xa(e,n,i){hr(e)&&i.delete(n)}function jd(){ks=!1,Gt!==null&&hr(Gt)&&(Gt=null),Vt!==null&&hr(Vt)&&(Vt=null),Qt!==null&&hr(Qt)&&(Qt=null),yi.forEach(xa),ji.forEach(xa)}function ki(e,n){e.blockedOn===n&&(e.blockedOn=null,ks||(ks=!0,_.unstable_scheduleCallback(_.unstable_NormalPriority,jd)))}function wi(e){function n(s){return ki(s,e)}if(0<mr.length){ki(mr[0],e);for(var i=1;i<mr.length;i++){var r=mr[i];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&ki(Gt,e),Vt!==null&&ki(Vt,e),Qt!==null&&ki(Qt,e),yi.forEach(n),ji.forEach(n),i=0;i<Kt.length;i++)r=Kt[i],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(i=Kt[0],i.blockedOn===null);)ga(i),i.blockedOn===null&&Kt.shift()}var Bn=me.ReactCurrentBatchConfig,fr=!0;function bd(e,n,i,r){var s=Se,o=Bn.transition;Bn.transition=null;try{Se=1,ws(e,n,i,r)}finally{Se=s,Bn.transition=o}}function kd(e,n,i,r){var s=Se,o=Bn.transition;Bn.transition=null;try{Se=4,ws(e,n,i,r)}finally{Se=s,Bn.transition=o}}function ws(e,n,i,r){if(fr){var s=Ns(e,n,i,r);if(s===null)Os(e,n,r,gr,i),fa(e,r);else if(yd(s,e,n,i,r))r.stopPropagation();else if(fa(e,r),n&4&&-1<vd.indexOf(e)){for(;s!==null;){var o=$i(s);if(o!==null&&pa(o),o=Ns(e,n,i,r),o===null&&Os(e,n,r,gr,i),o===s)break;s=o}s!==null&&r.stopPropagation()}else Os(e,n,r,null,i)}}var gr=null;function Ns(e,n,i,r){if(gr=null,e=di(r),e=vn(e),e!==null)if(n=Ne(e),n===null)e=null;else if(i=n.tag,i===13){if(e=Ue(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return gr=e,null}function va(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cd()){case xs:return 1;case aa:return 4;case lr:case dd:return 16;case la:return 536870912;default:return 16}default:return 16}}var Xt=null,Ss=null,xr=null;function ya(){if(xr)return xr;var e,n=Ss,i=n.length,r,s="value"in Xt?Xt.value:Xt.textContent,o=s.length;for(e=0;e<i&&n[e]===s[e];e++);var d=i-e;for(r=1;r<=d&&n[i-r]===s[o-r];r++);return xr=s.slice(e,1<r?1-r:void 0)}function vr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function yr(){return!0}function ja(){return!1}function at(e){function n(i,r,s,o,d){this._reactName=i,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(i=e[g],this[g]=i?i(o):o[g]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yr:ja,this.isPropagationStopped=ja,this}return h(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=yr)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=yr)},persist:function(){},isPersistent:yr}),n}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=at(Fn),Ni=h({},Fn,{view:0,detail:0}),wd=at(Ni),Es,As,Si,jr=h({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Si&&(Si&&e.type==="mousemove"?(Es=e.screenX-Si.screenX,As=e.screenY-Si.screenY):As=Es=0,Si=e),Es)},movementY:function(e){return"movementY"in e?e.movementY:As}}),ba=at(jr),Nd=h({},jr,{dataTransfer:0}),Sd=at(Nd),Cd=h({},Ni,{relatedTarget:0}),Ds=at(Cd),Ed=h({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ad=at(Ed),Dd=h({},Fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pd=at(Dd),Td=h({},Fn,{data:0}),ka=at(Td),zd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Id={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $d(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Rd[e])?!!n[e]:!1}function Ps(){return $d}var Ld=h({},Ni,{key:function(e){if(e.key){var n=zd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Id[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(e){return e.type==="keypress"?vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Md=at(Ld),Bd=h({},jr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wa=at(Bd),Fd=h({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),_d=at(Fd),Od=h({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wd=at(Od),Ud=h({},jr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hd=at(Ud),qd=[9,13,27,32],Ts=M&&"CompositionEvent"in window,Ci=null;M&&"documentMode"in document&&(Ci=document.documentMode);var Yd=M&&"TextEvent"in window&&!Ci,Na=M&&(!Ts||Ci&&8<Ci&&11>=Ci),Sa=" ",Ca=!1;function Ea(e,n){switch(e){case"keyup":return qd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Aa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function Jd(e,n){switch(e){case"compositionend":return Aa(n);case"keypress":return n.which!==32?null:(Ca=!0,Sa);case"textInput":return e=n.data,e===Sa&&Ca?null:e;default:return null}}function Gd(e,n){if(_n)return e==="compositionend"||!Ts&&Ea(e,n)?(e=ya(),xr=Ss=Xt=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Na&&n.locale!=="ko"?null:n.data;default:return null}}var Vd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Da(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Vd[e.type]:n==="textarea"}function Pa(e,n,i,r){rr(r),n=Sr(n,"onChange"),0<n.length&&(i=new Cs("onChange","change",null,i,r),e.push({event:i,listeners:n}))}var Ei=null,Ai=null;function Qd(e){Ga(e,0)}function br(e){var n=qn(e);if(Pn(n))return e}function Kd(e,n){if(e==="change")return n}var Ta=!1;if(M){var zs;if(M){var Is="oninput"in document;if(!Is){var za=document.createElement("div");za.setAttribute("oninput","return;"),Is=typeof za.oninput=="function"}zs=Is}else zs=!1;Ta=zs&&(!document.documentMode||9<document.documentMode)}function Ia(){Ei&&(Ei.detachEvent("onpropertychange",Ra),Ai=Ei=null)}function Ra(e){if(e.propertyName==="value"&&br(Ai)){var n=[];Pa(n,Ai,e,di(e)),fi(Qd,n)}}function Xd(e,n,i){e==="focusin"?(Ia(),Ei=n,Ai=i,Ei.attachEvent("onpropertychange",Ra)):e==="focusout"&&Ia()}function Zd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return br(Ai)}function ep(e,n){if(e==="click")return br(n)}function tp(e,n){if(e==="input"||e==="change")return br(n)}function np(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var bt=typeof Object.is=="function"?Object.is:np;function Di(e,n){if(bt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),r=Object.keys(n);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var s=i[r];if(!I.call(n,s)||!bt(e[s],n[s]))return!1}return!0}function $a(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function La(e,n){var i=$a(e);e=0;for(var r;i;){if(i.nodeType===3){if(r=e+i.textContent.length,e<=n&&r>=n)return{node:i,offset:n-e};e=r}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=$a(i)}}function Ma(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ma(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ba(){for(var e=window,n=Tn();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Tn(e.document)}return n}function Rs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ip(e){var n=Ba(),i=e.focusedElem,r=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&Ma(i.ownerDocument.documentElement,i)){if(r!==null&&Rs(i)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=i.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!e.extend&&o>r&&(s=r,r=o,o=s),s=La(i,o);var d=La(i,r);s&&d&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(d.node,d.offset)):(n.setEnd(d.node,d.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rp=M&&"documentMode"in document&&11>=document.documentMode,On=null,$s=null,Pi=null,Ls=!1;function Fa(e,n,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ls||On==null||On!==Tn(r)||(r=On,"selectionStart"in r&&Rs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pi&&Di(Pi,r)||(Pi=r,r=Sr($s,"onSelect"),0<r.length&&(n=new Cs("onSelect","select",null,n,i),e.push({event:n,listeners:r}),n.target=On)))}function kr(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Wn={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Ms={},_a={};M&&(_a=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function wr(e){if(Ms[e])return Ms[e];if(!Wn[e])return e;var n=Wn[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in _a)return Ms[e]=n[i];return e}var Oa=wr("animationend"),Wa=wr("animationiteration"),Ua=wr("animationstart"),Ha=wr("transitionend"),qa=new Map,Ya="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(e,n){qa.set(e,n),u(n,[e])}for(var Bs=0;Bs<Ya.length;Bs++){var Fs=Ya[Bs],sp=Fs.toLowerCase(),op=Fs[0].toUpperCase()+Fs.slice(1);Zt(sp,"on"+op)}Zt(Oa,"onAnimationEnd"),Zt(Wa,"onAnimationIteration"),Zt(Ua,"onAnimationStart"),Zt("dblclick","onDoubleClick"),Zt("focusin","onFocus"),Zt("focusout","onBlur"),Zt(Ha,"onTransitionEnd"),y("onMouseEnter",["mouseout","mouseover"]),y("onMouseLeave",["mouseout","mouseover"]),y("onPointerEnter",["pointerout","pointerover"]),y("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ap=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ti));function Ja(e,n,i){var r=e.type||"unknown-event";e.currentTarget=i,G(r,n,void 0,e),e.currentTarget=null}function Ga(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var r=e[i],s=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var d=r.length-1;0<=d;d--){var g=r[d],x=g.instance,z=g.currentTarget;if(g=g.listener,x!==o&&s.isPropagationStopped())break e;Ja(s,g,z),o=x}else for(d=0;d<r.length;d++){if(g=r[d],x=g.instance,z=g.currentTarget,g=g.listener,x!==o&&s.isPropagationStopped())break e;Ja(s,g,z),o=x}}}if(Ln)throw e=gi,Ln=!1,gi=null,e}function Ae(e,n){var i=n[Js];i===void 0&&(i=n[Js]=new Set);var r=e+"__bubble";i.has(r)||(Va(n,e,2,!1),i.add(r))}function _s(e,n,i){var r=0;n&&(r|=4),Va(i,e,r,n)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function zi(e){if(!e[Nr]){e[Nr]=!0,m.forEach(function(i){i!=="selectionchange"&&(ap.has(i)||_s(i,!1,e),_s(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Nr]||(n[Nr]=!0,_s("selectionchange",!1,n))}}function Va(e,n,i,r){switch(va(n)){case 1:var s=bd;break;case 4:s=kd;break;default:s=ws}i=s.bind(null,n,i,e),s=void 0,!Jt||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(n,i,{capture:!0,passive:s}):e.addEventListener(n,i,!0):s!==void 0?e.addEventListener(n,i,{passive:s}):e.addEventListener(n,i,!1)}function Os(e,n,i,r,s){var o=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var d=r.tag;if(d===3||d===4){var g=r.stateNode.containerInfo;if(g===s||g.nodeType===8&&g.parentNode===s)break;if(d===4)for(d=r.return;d!==null;){var x=d.tag;if((x===3||x===4)&&(x=d.stateNode.containerInfo,x===s||x.nodeType===8&&x.parentNode===s))return;d=d.return}for(;g!==null;){if(d=vn(g),d===null)return;if(x=d.tag,x===5||x===6){r=o=d;continue e}g=g.parentNode}}r=r.return}fi(function(){var z=o,W=di(i),U=[];e:{var O=qa.get(e);if(O!==void 0){var ne=Cs,re=e;switch(e){case"keypress":if(vr(i)===0)break e;case"keydown":case"keyup":ne=Md;break;case"focusin":re="focus",ne=Ds;break;case"focusout":re="blur",ne=Ds;break;case"beforeblur":case"afterblur":ne=Ds;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=ba;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=_d;break;case Oa:case Wa:case Ua:ne=Ad;break;case Ha:ne=Wd;break;case"scroll":ne=wd;break;case"wheel":ne=Hd;break;case"copy":case"cut":case"paste":ne=Pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=wa}var se=(n&4)!==0,$e=!se&&e==="scroll",E=se?O!==null?O+"Capture":null:O;se=[];for(var k=z,D;k!==null;){D=k;var H=D.stateNode;if(D.tag===5&&H!==null&&(D=H,E!==null&&(H=At(k,E),H!=null&&se.push(Ii(k,H,D)))),$e)break;k=k.return}0<se.length&&(O=new ne(O,re,null,i,W),U.push({event:O,listeners:se}))}}if((n&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",O&&i!==ci&&(re=i.relatedTarget||i.fromElement)&&(vn(re)||re[Lt]))break e;if((ne||O)&&(O=W.window===W?W:(O=W.ownerDocument)?O.defaultView||O.parentWindow:window,ne?(re=i.relatedTarget||i.toElement,ne=z,re=re?vn(re):null,re!==null&&($e=Ne(re),re!==$e||re.tag!==5&&re.tag!==6)&&(re=null)):(ne=null,re=z),ne!==re)){if(se=ba,H="onMouseLeave",E="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(se=wa,H="onPointerLeave",E="onPointerEnter",k="pointer"),$e=ne==null?O:qn(ne),D=re==null?O:qn(re),O=new se(H,k+"leave",ne,i,W),O.target=$e,O.relatedTarget=D,H=null,vn(W)===z&&(se=new se(E,k+"enter",re,i,W),se.target=D,se.relatedTarget=$e,H=se),$e=H,ne&&re)t:{for(se=ne,E=re,k=0,D=se;D;D=Un(D))k++;for(D=0,H=E;H;H=Un(H))D++;for(;0<k-D;)se=Un(se),k--;for(;0<D-k;)E=Un(E),D--;for(;k--;){if(se===E||E!==null&&se===E.alternate)break t;se=Un(se),E=Un(E)}se=null}else se=null;ne!==null&&Qa(U,O,ne,se,!1),re!==null&&$e!==null&&Qa(U,$e,re,se,!0)}}e:{if(O=z?qn(z):window,ne=O.nodeName&&O.nodeName.toLowerCase(),ne==="select"||ne==="input"&&O.type==="file")var oe=Kd;else if(Da(O))if(Ta)oe=tp;else{oe=Zd;var de=Xd}else(ne=O.nodeName)&&ne.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(oe=ep);if(oe&&(oe=oe(e,z))){Pa(U,oe,i,W);break e}de&&de(e,O,z),e==="focusout"&&(de=O._wrapperState)&&de.controlled&&O.type==="number"&&ai(O,"number",O.value)}switch(de=z?qn(z):window,e){case"focusin":(Da(de)||de.contentEditable==="true")&&(On=de,$s=z,Pi=null);break;case"focusout":Pi=$s=On=null;break;case"mousedown":Ls=!0;break;case"contextmenu":case"mouseup":case"dragend":Ls=!1,Fa(U,i,W);break;case"selectionchange":if(rp)break;case"keydown":case"keyup":Fa(U,i,W)}var pe;if(Ts)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else _n?Ea(e,i)&&(fe="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(fe="onCompositionStart");fe&&(Na&&i.locale!=="ko"&&(_n||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&_n&&(pe=ya()):(Xt=W,Ss="value"in Xt?Xt.value:Xt.textContent,_n=!0)),de=Sr(z,fe),0<de.length&&(fe=new ka(fe,e,null,i,W),U.push({event:fe,listeners:de}),pe?fe.data=pe:(pe=Aa(i),pe!==null&&(fe.data=pe)))),(pe=Yd?Jd(e,i):Gd(e,i))&&(z=Sr(z,"onBeforeInput"),0<z.length&&(W=new ka("onBeforeInput","beforeinput",null,i,W),U.push({event:W,listeners:z}),W.data=pe))}Ga(U,n)})}function Ii(e,n,i){return{instance:e,listener:n,currentTarget:i}}function Sr(e,n){for(var i=n+"Capture",r=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=At(e,i),o!=null&&r.unshift(Ii(e,o,s)),o=At(e,n),o!=null&&r.push(Ii(e,o,s))),e=e.return}return r}function Un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qa(e,n,i,r,s){for(var o=n._reactName,d=[];i!==null&&i!==r;){var g=i,x=g.alternate,z=g.stateNode;if(x!==null&&x===r)break;g.tag===5&&z!==null&&(g=z,s?(x=At(i,o),x!=null&&d.unshift(Ii(i,x,g))):s||(x=At(i,o),x!=null&&d.push(Ii(i,x,g)))),i=i.return}d.length!==0&&e.push({event:n,listeners:d})}var lp=/\r\n?/g,cp=/\u0000|\uFFFD/g;function Ka(e){return(typeof e=="string"?e:""+e).replace(lp,`
`).replace(cp,"")}function Cr(e,n,i){if(n=Ka(n),Ka(e)!==n&&i)throw Error(p(425))}function Er(){}var Ws=null,Us=null;function Hs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qs=typeof setTimeout=="function"?setTimeout:void 0,dp=typeof clearTimeout=="function"?clearTimeout:void 0,Xa=typeof Promise=="function"?Promise:void 0,pp=typeof queueMicrotask=="function"?queueMicrotask:typeof Xa<"u"?function(e){return Xa.resolve(null).then(e).catch(up)}:qs;function up(e){setTimeout(function(){throw e})}function Ys(e,n){var i=n,r=0;do{var s=i.nextSibling;if(e.removeChild(i),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(r===0){e.removeChild(s),wi(n);return}r--}else i!=="$"&&i!=="$?"&&i!=="$!"||r++;i=s}while(i);wi(n)}function en(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Za(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var Hn=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Hn,Ri="__reactProps$"+Hn,Lt="__reactContainer$"+Hn,Js="__reactEvents$"+Hn,mp="__reactListeners$"+Hn,hp="__reactHandles$"+Hn;function vn(e){var n=e[Pt];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Lt]||i[Pt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Za(e);e!==null;){if(i=e[Pt])return i;e=Za(e)}return n}e=i,i=e.parentNode}return null}function $i(e){return e=e[Pt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function Ar(e){return e[Ri]||null}var Gs=[],Yn=-1;function tn(e){return{current:e}}function De(e){0>Yn||(e.current=Gs[Yn],Gs[Yn]=null,Yn--)}function Ee(e,n){Yn++,Gs[Yn]=e.current,e.current=n}var nn={},Ye=tn(nn),Ze=tn(!1),yn=nn;function Jn(e,n){var i=e.type.contextTypes;if(!i)return nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in i)s[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function et(e){return e=e.childContextTypes,e!=null}function Dr(){De(Ze),De(Ye)}function el(e,n,i){if(Ye.current!==nn)throw Error(p(168));Ee(Ye,n),Ee(Ze,i)}function tl(e,n,i){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return i;r=r.getChildContext();for(var s in r)if(!(s in n))throw Error(p(108,ae(e)||"Unknown",s));return h({},i,r)}function Pr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,yn=Ye.current,Ee(Ye,e),Ee(Ze,Ze.current),!0}function nl(e,n,i){var r=e.stateNode;if(!r)throw Error(p(169));i?(e=tl(e,n,yn),r.__reactInternalMemoizedMergedChildContext=e,De(Ze),De(Ye),Ee(Ye,e)):De(Ze),Ee(Ze,i)}var Mt=null,Tr=!1,Vs=!1;function il(e){Mt===null?Mt=[e]:Mt.push(e)}function fp(e){Tr=!0,il(e)}function rn(){if(!Vs&&Mt!==null){Vs=!0;var e=0,n=Se;try{var i=Mt;for(Se=1;e<i.length;e++){var r=i[e];do r=r(!0);while(r!==null)}Mt=null,Tr=!1}catch(s){throw Mt!==null&&(Mt=Mt.slice(e+1)),sa(xs,rn),s}finally{Se=n,Vs=!1}}return null}var Gn=[],Vn=0,zr=null,Ir=0,ut=[],mt=0,jn=null,Bt=1,Ft="";function bn(e,n){Gn[Vn++]=Ir,Gn[Vn++]=zr,zr=e,Ir=n}function rl(e,n,i){ut[mt++]=Bt,ut[mt++]=Ft,ut[mt++]=jn,jn=e;var r=Bt;e=Ft;var s=32-jt(r)-1;r&=~(1<<s),i+=1;var o=32-jt(n)+s;if(30<o){var d=s-s%5;o=(r&(1<<d)-1).toString(32),r>>=d,s-=d,Bt=1<<32-jt(n)+s|i<<s|r,Ft=o+e}else Bt=1<<o|i<<s|r,Ft=e}function Qs(e){e.return!==null&&(bn(e,1),rl(e,1,0))}function Ks(e){for(;e===zr;)zr=Gn[--Vn],Gn[Vn]=null,Ir=Gn[--Vn],Gn[Vn]=null;for(;e===jn;)jn=ut[--mt],ut[mt]=null,Ft=ut[--mt],ut[mt]=null,Bt=ut[--mt],ut[mt]=null}var lt=null,ct=null,Pe=!1,kt=null;function sl(e,n){var i=xt(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function ol(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,lt=e,ct=en(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,lt=e,ct=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=jn!==null?{id:Bt,overflow:Ft}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=xt(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,lt=e,ct=null,!0):!1;default:return!1}}function Xs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zs(e){if(Pe){var n=ct;if(n){var i=n;if(!ol(e,n)){if(Xs(e))throw Error(p(418));n=en(i.nextSibling);var r=lt;n&&ol(e,n)?sl(r,i):(e.flags=e.flags&-4097|2,Pe=!1,lt=e)}}else{if(Xs(e))throw Error(p(418));e.flags=e.flags&-4097|2,Pe=!1,lt=e}}}function al(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lt=e}function Rr(e){if(e!==lt)return!1;if(!Pe)return al(e),Pe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Hs(e.type,e.memoizedProps)),n&&(n=ct)){if(Xs(e))throw ll(),Error(p(418));for(;n;)sl(e,n),n=en(n.nextSibling)}if(al(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){ct=en(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}ct=null}}else ct=lt?en(e.stateNode.nextSibling):null;return!0}function ll(){for(var e=ct;e;)e=en(e.nextSibling)}function Qn(){ct=lt=null,Pe=!1}function eo(e){kt===null?kt=[e]:kt.push(e)}var gp=me.ReactCurrentBatchConfig;function Li(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(p(309));var r=i.stateNode}if(!r)throw Error(p(147,e));var s=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(d){var g=s.refs;d===null?delete g[o]:g[o]=d},n._stringRef=o,n)}if(typeof e!="string")throw Error(p(284));if(!i._owner)throw Error(p(290,e))}return e}function $r(e,n){throw e=Object.prototype.toString.call(n),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function cl(e){var n=e._init;return n(e._payload)}function dl(e){function n(E,k){if(e){var D=E.deletions;D===null?(E.deletions=[k],E.flags|=16):D.push(k)}}function i(E,k){if(!e)return null;for(;k!==null;)n(E,k),k=k.sibling;return null}function r(E,k){for(E=new Map;k!==null;)k.key!==null?E.set(k.key,k):E.set(k.index,k),k=k.sibling;return E}function s(E,k){return E=un(E,k),E.index=0,E.sibling=null,E}function o(E,k,D){return E.index=D,e?(D=E.alternate,D!==null?(D=D.index,D<k?(E.flags|=2,k):D):(E.flags|=2,k)):(E.flags|=1048576,k)}function d(E){return e&&E.alternate===null&&(E.flags|=2),E}function g(E,k,D,H){return k===null||k.tag!==6?(k=Yo(D,E.mode,H),k.return=E,k):(k=s(k,D),k.return=E,k)}function x(E,k,D,H){var oe=D.type;return oe===ye?W(E,k,D.props.children,H,D.key):k!==null&&(k.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===j&&cl(oe)===k.type)?(H=s(k,D.props),H.ref=Li(E,k,D),H.return=E,H):(H=ss(D.type,D.key,D.props,null,E.mode,H),H.ref=Li(E,k,D),H.return=E,H)}function z(E,k,D,H){return k===null||k.tag!==4||k.stateNode.containerInfo!==D.containerInfo||k.stateNode.implementation!==D.implementation?(k=Jo(D,E.mode,H),k.return=E,k):(k=s(k,D.children||[]),k.return=E,k)}function W(E,k,D,H,oe){return k===null||k.tag!==7?(k=Dn(D,E.mode,H,oe),k.return=E,k):(k=s(k,D),k.return=E,k)}function U(E,k,D){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Yo(""+k,E.mode,D),k.return=E,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ge:return D=ss(k.type,k.key,k.props,null,E.mode,D),D.ref=Li(E,null,k),D.return=E,D;case le:return k=Jo(k,E.mode,D),k.return=E,k;case j:var H=k._init;return U(E,H(k._payload),D)}if(fn(k)||B(k))return k=Dn(k,E.mode,D,null),k.return=E,k;$r(E,k)}return null}function O(E,k,D,H){var oe=k!==null?k.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return oe!==null?null:g(E,k,""+D,H);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ge:return D.key===oe?x(E,k,D,H):null;case le:return D.key===oe?z(E,k,D,H):null;case j:return oe=D._init,O(E,k,oe(D._payload),H)}if(fn(D)||B(D))return oe!==null?null:W(E,k,D,H,null);$r(E,D)}return null}function ne(E,k,D,H,oe){if(typeof H=="string"&&H!==""||typeof H=="number")return E=E.get(D)||null,g(k,E,""+H,oe);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case ge:return E=E.get(H.key===null?D:H.key)||null,x(k,E,H,oe);case le:return E=E.get(H.key===null?D:H.key)||null,z(k,E,H,oe);case j:var de=H._init;return ne(E,k,D,de(H._payload),oe)}if(fn(H)||B(H))return E=E.get(D)||null,W(k,E,H,oe,null);$r(k,H)}return null}function re(E,k,D,H){for(var oe=null,de=null,pe=k,fe=k=0,Oe=null;pe!==null&&fe<D.length;fe++){pe.index>fe?(Oe=pe,pe=null):Oe=pe.sibling;var ke=O(E,pe,D[fe],H);if(ke===null){pe===null&&(pe=Oe);break}e&&pe&&ke.alternate===null&&n(E,pe),k=o(ke,k,fe),de===null?oe=ke:de.sibling=ke,de=ke,pe=Oe}if(fe===D.length)return i(E,pe),Pe&&bn(E,fe),oe;if(pe===null){for(;fe<D.length;fe++)pe=U(E,D[fe],H),pe!==null&&(k=o(pe,k,fe),de===null?oe=pe:de.sibling=pe,de=pe);return Pe&&bn(E,fe),oe}for(pe=r(E,pe);fe<D.length;fe++)Oe=ne(pe,E,fe,D[fe],H),Oe!==null&&(e&&Oe.alternate!==null&&pe.delete(Oe.key===null?fe:Oe.key),k=o(Oe,k,fe),de===null?oe=Oe:de.sibling=Oe,de=Oe);return e&&pe.forEach(function(mn){return n(E,mn)}),Pe&&bn(E,fe),oe}function se(E,k,D,H){var oe=B(D);if(typeof oe!="function")throw Error(p(150));if(D=oe.call(D),D==null)throw Error(p(151));for(var de=oe=null,pe=k,fe=k=0,Oe=null,ke=D.next();pe!==null&&!ke.done;fe++,ke=D.next()){pe.index>fe?(Oe=pe,pe=null):Oe=pe.sibling;var mn=O(E,pe,ke.value,H);if(mn===null){pe===null&&(pe=Oe);break}e&&pe&&mn.alternate===null&&n(E,pe),k=o(mn,k,fe),de===null?oe=mn:de.sibling=mn,de=mn,pe=Oe}if(ke.done)return i(E,pe),Pe&&bn(E,fe),oe;if(pe===null){for(;!ke.done;fe++,ke=D.next())ke=U(E,ke.value,H),ke!==null&&(k=o(ke,k,fe),de===null?oe=ke:de.sibling=ke,de=ke);return Pe&&bn(E,fe),oe}for(pe=r(E,pe);!ke.done;fe++,ke=D.next())ke=ne(pe,E,fe,ke.value,H),ke!==null&&(e&&ke.alternate!==null&&pe.delete(ke.key===null?fe:ke.key),k=o(ke,k,fe),de===null?oe=ke:de.sibling=ke,de=ke);return e&&pe.forEach(function(Vp){return n(E,Vp)}),Pe&&bn(E,fe),oe}function $e(E,k,D,H){if(typeof D=="object"&&D!==null&&D.type===ye&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case ge:e:{for(var oe=D.key,de=k;de!==null;){if(de.key===oe){if(oe=D.type,oe===ye){if(de.tag===7){i(E,de.sibling),k=s(de,D.props.children),k.return=E,E=k;break e}}else if(de.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===j&&cl(oe)===de.type){i(E,de.sibling),k=s(de,D.props),k.ref=Li(E,de,D),k.return=E,E=k;break e}i(E,de);break}else n(E,de);de=de.sibling}D.type===ye?(k=Dn(D.props.children,E.mode,H,D.key),k.return=E,E=k):(H=ss(D.type,D.key,D.props,null,E.mode,H),H.ref=Li(E,k,D),H.return=E,E=H)}return d(E);case le:e:{for(de=D.key;k!==null;){if(k.key===de)if(k.tag===4&&k.stateNode.containerInfo===D.containerInfo&&k.stateNode.implementation===D.implementation){i(E,k.sibling),k=s(k,D.children||[]),k.return=E,E=k;break e}else{i(E,k);break}else n(E,k);k=k.sibling}k=Jo(D,E.mode,H),k.return=E,E=k}return d(E);case j:return de=D._init,$e(E,k,de(D._payload),H)}if(fn(D))return re(E,k,D,H);if(B(D))return se(E,k,D,H);$r(E,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,k!==null&&k.tag===6?(i(E,k.sibling),k=s(k,D),k.return=E,E=k):(i(E,k),k=Yo(D,E.mode,H),k.return=E,E=k),d(E)):i(E,k)}return $e}var Kn=dl(!0),pl=dl(!1),Lr=tn(null),Mr=null,Xn=null,to=null;function no(){to=Xn=Mr=null}function io(e){var n=Lr.current;De(Lr),e._currentValue=n}function ro(e,n,i){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===i)break;e=e.return}}function Zn(e,n){Mr=e,to=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(tt=!0),e.firstContext=null)}function ht(e){var n=e._currentValue;if(to!==e)if(e={context:e,memoizedValue:n,next:null},Xn===null){if(Mr===null)throw Error(p(308));Xn=e,Mr.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return n}var kn=null;function so(e){kn===null?kn=[e]:kn.push(e)}function ul(e,n,i,r){var s=n.interleaved;return s===null?(i.next=i,so(n)):(i.next=s.next,s.next=i),n.interleaved=i,_t(e,r)}function _t(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var sn=!1;function oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ml(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function on(e,n,i){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(be&2)!==0){var s=r.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),r.pending=n,_t(e,i)}return s=r.interleaved,s===null?(n.next=n,so(r)):(n.next=s.next,s.next=n),r.interleaved=n,_t(e,i)}function Br(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,i|=r,n.lanes=i,js(e,i)}}function hl(e,n){var i=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var s=null,o=null;if(i=i.firstBaseUpdate,i!==null){do{var d={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};o===null?s=o=d:o=o.next=d,i=i.next}while(i!==null);o===null?s=o=n:o=o.next=n}else s=o=n;i={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function Fr(e,n,i,r){var s=e.updateQueue;sn=!1;var o=s.firstBaseUpdate,d=s.lastBaseUpdate,g=s.shared.pending;if(g!==null){s.shared.pending=null;var x=g,z=x.next;x.next=null,d===null?o=z:d.next=z,d=x;var W=e.alternate;W!==null&&(W=W.updateQueue,g=W.lastBaseUpdate,g!==d&&(g===null?W.firstBaseUpdate=z:g.next=z,W.lastBaseUpdate=x))}if(o!==null){var U=s.baseState;d=0,W=z=x=null,g=o;do{var O=g.lane,ne=g.eventTime;if((r&O)===O){W!==null&&(W=W.next={eventTime:ne,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var re=e,se=g;switch(O=n,ne=i,se.tag){case 1:if(re=se.payload,typeof re=="function"){U=re.call(ne,U,O);break e}U=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=se.payload,O=typeof re=="function"?re.call(ne,U,O):re,O==null)break e;U=h({},U,O);break e;case 2:sn=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,O=s.effects,O===null?s.effects=[g]:O.push(g))}else ne={eventTime:ne,lane:O,tag:g.tag,payload:g.payload,callback:g.callback,next:null},W===null?(z=W=ne,x=U):W=W.next=ne,d|=O;if(g=g.next,g===null){if(g=s.shared.pending,g===null)break;O=g,g=O.next,O.next=null,s.lastBaseUpdate=O,s.shared.pending=null}}while(!0);if(W===null&&(x=U),s.baseState=x,s.firstBaseUpdate=z,s.lastBaseUpdate=W,n=s.shared.interleaved,n!==null){s=n;do d|=s.lane,s=s.next;while(s!==n)}else o===null&&(s.shared.lanes=0);Sn|=d,e.lanes=d,e.memoizedState=U}}function fl(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],s=r.callback;if(s!==null){if(r.callback=null,r=i,typeof s!="function")throw Error(p(191,s));s.call(r)}}}var Mi={},Tt=tn(Mi),Bi=tn(Mi),Fi=tn(Mi);function wn(e){if(e===Mi)throw Error(p(174));return e}function ao(e,n){switch(Ee(Fi,n),Ee(Bi,e),Ee(Tt,Mi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ht(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ht(n,e)}De(Tt),Ee(Tt,n)}function ei(){De(Tt),De(Bi),De(Fi)}function gl(e){wn(Fi.current);var n=wn(Tt.current),i=Ht(n,e.type);n!==i&&(Ee(Bi,e),Ee(Tt,i))}function lo(e){Bi.current===e&&(De(Tt),De(Bi))}var Te=tn(0);function _r(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var co=[];function po(){for(var e=0;e<co.length;e++)co[e]._workInProgressVersionPrimary=null;co.length=0}var Or=me.ReactCurrentDispatcher,uo=me.ReactCurrentBatchConfig,Nn=0,ze=null,Me=null,Fe=null,Wr=!1,_i=!1,Oi=0,xp=0;function Je(){throw Error(p(321))}function mo(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!bt(e[i],n[i]))return!1;return!0}function ho(e,n,i,r,s,o){if(Nn=o,ze=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Or.current=e===null||e.memoizedState===null?bp:kp,e=i(r,s),_i){o=0;do{if(_i=!1,Oi=0,25<=o)throw Error(p(301));o+=1,Fe=Me=null,n.updateQueue=null,Or.current=wp,e=i(r,s)}while(_i)}if(Or.current=qr,n=Me!==null&&Me.next!==null,Nn=0,Fe=Me=ze=null,Wr=!1,n)throw Error(p(300));return e}function fo(){var e=Oi!==0;return Oi=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ze.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function ft(){if(Me===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var n=Fe===null?ze.memoizedState:Fe.next;if(n!==null)Fe=n,Me=e;else{if(e===null)throw Error(p(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Fe===null?ze.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Wi(e,n){return typeof n=="function"?n(e):n}function go(e){var n=ft(),i=n.queue;if(i===null)throw Error(p(311));i.lastRenderedReducer=e;var r=Me,s=r.baseQueue,o=i.pending;if(o!==null){if(s!==null){var d=s.next;s.next=o.next,o.next=d}r.baseQueue=s=o,i.pending=null}if(s!==null){o=s.next,r=r.baseState;var g=d=null,x=null,z=o;do{var W=z.lane;if((Nn&W)===W)x!==null&&(x=x.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),r=z.hasEagerState?z.eagerState:e(r,z.action);else{var U={lane:W,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};x===null?(g=x=U,d=r):x=x.next=U,ze.lanes|=W,Sn|=W}z=z.next}while(z!==null&&z!==o);x===null?d=r:x.next=g,bt(r,n.memoizedState)||(tt=!0),n.memoizedState=r,n.baseState=d,n.baseQueue=x,i.lastRenderedState=r}if(e=i.interleaved,e!==null){s=e;do o=s.lane,ze.lanes|=o,Sn|=o,s=s.next;while(s!==e)}else s===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function xo(e){var n=ft(),i=n.queue;if(i===null)throw Error(p(311));i.lastRenderedReducer=e;var r=i.dispatch,s=i.pending,o=n.memoizedState;if(s!==null){i.pending=null;var d=s=s.next;do o=e(o,d.action),d=d.next;while(d!==s);bt(o,n.memoizedState)||(tt=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),i.lastRenderedState=o}return[o,r]}function xl(){}function vl(e,n){var i=ze,r=ft(),s=n(),o=!bt(r.memoizedState,s);if(o&&(r.memoizedState=s,tt=!0),r=r.queue,vo(bl.bind(null,i,r,e),[e]),r.getSnapshot!==n||o||Fe!==null&&Fe.memoizedState.tag&1){if(i.flags|=2048,Ui(9,jl.bind(null,i,r,s,n),void 0,null),_e===null)throw Error(p(349));(Nn&30)!==0||yl(i,n,s)}return s}function yl(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=ze.updateQueue,n===null?(n={lastEffect:null,stores:null},ze.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function jl(e,n,i,r){n.value=i,n.getSnapshot=r,kl(n)&&wl(e)}function bl(e,n,i){return i(function(){kl(n)&&wl(e)})}function kl(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!bt(e,i)}catch{return!0}}function wl(e){var n=_t(e,1);n!==null&&Ct(n,e,1,-1)}function Nl(e){var n=zt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n.queue=e,e=e.dispatch=jp.bind(null,ze,e),[n.memoizedState,e]}function Ui(e,n,i,r){return e={tag:e,create:n,destroy:i,deps:r,next:null},n=ze.updateQueue,n===null?(n={lastEffect:null,stores:null},ze.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(r=i.next,i.next=e,e.next=r,n.lastEffect=e)),e}function Sl(){return ft().memoizedState}function Ur(e,n,i,r){var s=zt();ze.flags|=e,s.memoizedState=Ui(1|n,i,void 0,r===void 0?null:r)}function Hr(e,n,i,r){var s=ft();r=r===void 0?null:r;var o=void 0;if(Me!==null){var d=Me.memoizedState;if(o=d.destroy,r!==null&&mo(r,d.deps)){s.memoizedState=Ui(n,i,o,r);return}}ze.flags|=e,s.memoizedState=Ui(1|n,i,o,r)}function Cl(e,n){return Ur(8390656,8,e,n)}function vo(e,n){return Hr(2048,8,e,n)}function El(e,n){return Hr(4,2,e,n)}function Al(e,n){return Hr(4,4,e,n)}function Dl(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pl(e,n,i){return i=i!=null?i.concat([e]):null,Hr(4,4,Dl.bind(null,n,e),i)}function yo(){}function Tl(e,n){var i=ft();n=n===void 0?null:n;var r=i.memoizedState;return r!==null&&n!==null&&mo(n,r[1])?r[0]:(i.memoizedState=[e,n],e)}function zl(e,n){var i=ft();n=n===void 0?null:n;var r=i.memoizedState;return r!==null&&n!==null&&mo(n,r[1])?r[0]:(e=e(),i.memoizedState=[e,n],e)}function Il(e,n,i){return(Nn&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=i):(bt(i,n)||(i=ca(),ze.lanes|=i,Sn|=i,e.baseState=!0),n)}function vp(e,n){var i=Se;Se=i!==0&&4>i?i:4,e(!0);var r=uo.transition;uo.transition={};try{e(!1),n()}finally{Se=i,uo.transition=r}}function Rl(){return ft().memoizedState}function yp(e,n,i){var r=dn(e);if(i={lane:r,action:i,hasEagerState:!1,eagerState:null,next:null},$l(e))Ll(n,i);else if(i=ul(e,n,i,r),i!==null){var s=Ke();Ct(i,e,r,s),Ml(i,n,r)}}function jp(e,n,i){var r=dn(e),s={lane:r,action:i,hasEagerState:!1,eagerState:null,next:null};if($l(e))Ll(n,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var d=n.lastRenderedState,g=o(d,i);if(s.hasEagerState=!0,s.eagerState=g,bt(g,d)){var x=n.interleaved;x===null?(s.next=s,so(n)):(s.next=x.next,x.next=s),n.interleaved=s;return}}catch{}finally{}i=ul(e,n,s,r),i!==null&&(s=Ke(),Ct(i,e,r,s),Ml(i,n,r))}}function $l(e){var n=e.alternate;return e===ze||n!==null&&n===ze}function Ll(e,n){_i=Wr=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Ml(e,n,i){if((i&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,i|=r,n.lanes=i,js(e,i)}}var qr={readContext:ht,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},bp={readContext:ht,useCallback:function(e,n){return zt().memoizedState=[e,n===void 0?null:n],e},useContext:ht,useEffect:Cl,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,Ur(4194308,4,Dl.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Ur(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ur(4,2,e,n)},useMemo:function(e,n){var i=zt();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var r=zt();return n=i!==void 0?i(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=yp.bind(null,ze,e),[r.memoizedState,e]},useRef:function(e){var n=zt();return e={current:e},n.memoizedState=e},useState:Nl,useDebugValue:yo,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=Nl(!1),n=e[0];return e=vp.bind(null,e[1]),zt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var r=ze,s=zt();if(Pe){if(i===void 0)throw Error(p(407));i=i()}else{if(i=n(),_e===null)throw Error(p(349));(Nn&30)!==0||yl(r,n,i)}s.memoizedState=i;var o={value:i,getSnapshot:n};return s.queue=o,Cl(bl.bind(null,r,o,e),[e]),r.flags|=2048,Ui(9,jl.bind(null,r,o,i,n),void 0,null),i},useId:function(){var e=zt(),n=_e.identifierPrefix;if(Pe){var i=Ft,r=Bt;i=(r&~(1<<32-jt(r)-1)).toString(32)+i,n=":"+n+"R"+i,i=Oi++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=xp++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},kp={readContext:ht,useCallback:Tl,useContext:ht,useEffect:vo,useImperativeHandle:Pl,useInsertionEffect:El,useLayoutEffect:Al,useMemo:zl,useReducer:go,useRef:Sl,useState:function(){return go(Wi)},useDebugValue:yo,useDeferredValue:function(e){var n=ft();return Il(n,Me.memoizedState,e)},useTransition:function(){var e=go(Wi)[0],n=ft().memoizedState;return[e,n]},useMutableSource:xl,useSyncExternalStore:vl,useId:Rl,unstable_isNewReconciler:!1},wp={readContext:ht,useCallback:Tl,useContext:ht,useEffect:vo,useImperativeHandle:Pl,useInsertionEffect:El,useLayoutEffect:Al,useMemo:zl,useReducer:xo,useRef:Sl,useState:function(){return xo(Wi)},useDebugValue:yo,useDeferredValue:function(e){var n=ft();return Me===null?n.memoizedState=e:Il(n,Me.memoizedState,e)},useTransition:function(){var e=xo(Wi)[0],n=ft().memoizedState;return[e,n]},useMutableSource:xl,useSyncExternalStore:vl,useId:Rl,unstable_isNewReconciler:!1};function wt(e,n){if(e&&e.defaultProps){n=h({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function jo(e,n,i,r){n=e.memoizedState,i=i(r,n),i=i==null?n:h({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Yr={isMounted:function(e){return(e=e._reactInternals)?Ne(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var r=Ke(),s=dn(e),o=Ot(r,s);o.payload=n,i!=null&&(o.callback=i),n=on(e,o,s),n!==null&&(Ct(n,e,s,r),Br(n,e,s))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var r=Ke(),s=dn(e),o=Ot(r,s);o.tag=1,o.payload=n,i!=null&&(o.callback=i),n=on(e,o,s),n!==null&&(Ct(n,e,s,r),Br(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Ke(),r=dn(e),s=Ot(i,r);s.tag=2,n!=null&&(s.callback=n),n=on(e,s,r),n!==null&&(Ct(n,e,r,i),Br(n,e,r))}};function Bl(e,n,i,r,s,o,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,d):n.prototype&&n.prototype.isPureReactComponent?!Di(i,r)||!Di(s,o):!0}function Fl(e,n,i){var r=!1,s=nn,o=n.contextType;return typeof o=="object"&&o!==null?o=ht(o):(s=et(n)?yn:Ye.current,r=n.contextTypes,o=(r=r!=null)?Jn(e,s):nn),n=new n(i,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Yr,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),n}function _l(e,n,i,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,r),n.state!==e&&Yr.enqueueReplaceState(n,n.state,null)}function bo(e,n,i,r){var s=e.stateNode;s.props=i,s.state=e.memoizedState,s.refs={},oo(e);var o=n.contextType;typeof o=="object"&&o!==null?s.context=ht(o):(o=et(n)?yn:Ye.current,s.context=Jn(e,o)),s.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(jo(e,n,o,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&Yr.enqueueReplaceState(s,s.state,null),Fr(e,i,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function ti(e,n){try{var i="",r=n;do i+=$(r),r=r.return;while(r);var s=i}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:s,digest:null}}function ko(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function wo(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var Np=typeof WeakMap=="function"?WeakMap:Map;function Ol(e,n,i){i=Ot(-1,i),i.tag=3,i.payload={element:null};var r=n.value;return i.callback=function(){Zr||(Zr=!0,Bo=r),wo(e,n)},i}function Wl(e,n,i){i=Ot(-1,i),i.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=n.value;i.payload=function(){return r(s)},i.callback=function(){wo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(i.callback=function(){wo(e,n),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var d=n.stack;this.componentDidCatch(n.value,{componentStack:d!==null?d:""})}),i}function Ul(e,n,i){var r=e.pingCache;if(r===null){r=e.pingCache=new Np;var s=new Set;r.set(n,s)}else s=r.get(n),s===void 0&&(s=new Set,r.set(n,s));s.has(i)||(s.add(i),e=Bp.bind(null,e,n,i),n.then(e,e))}function Hl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ql(e,n,i,r,s){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Ot(-1,1),n.tag=2,on(i,n,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Sp=me.ReactCurrentOwner,tt=!1;function Qe(e,n,i,r){n.child=e===null?pl(n,null,i,r):Kn(n,e.child,i,r)}function Yl(e,n,i,r,s){i=i.render;var o=n.ref;return Zn(n,s),r=ho(e,n,i,r,o,s),i=fo(),e!==null&&!tt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Wt(e,n,s)):(Pe&&i&&Qs(n),n.flags|=1,Qe(e,n,r,s),n.child)}function Jl(e,n,i,r,s){if(e===null){var o=i.type;return typeof o=="function"&&!qo(o)&&o.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=o,Gl(e,n,o,r,s)):(e=ss(i.type,null,r,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,(e.lanes&s)===0){var d=o.memoizedProps;if(i=i.compare,i=i!==null?i:Di,i(d,r)&&e.ref===n.ref)return Wt(e,n,s)}return n.flags|=1,e=un(o,r),e.ref=n.ref,e.return=n,n.child=e}function Gl(e,n,i,r,s){if(e!==null){var o=e.memoizedProps;if(Di(o,r)&&e.ref===n.ref)if(tt=!1,n.pendingProps=r=o,(e.lanes&s)!==0)(e.flags&131072)!==0&&(tt=!0);else return n.lanes=e.lanes,Wt(e,n,s)}return No(e,n,i,r,s)}function Vl(e,n,i){var r=n.pendingProps,s=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(ii,dt),dt|=i;else{if((i&1073741824)===0)return e=o!==null?o.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ee(ii,dt),dt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:i,Ee(ii,dt),dt|=r}else o!==null?(r=o.baseLanes|i,n.memoizedState=null):r=i,Ee(ii,dt),dt|=r;return Qe(e,n,s,i),n.child}function Ql(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function No(e,n,i,r,s){var o=et(i)?yn:Ye.current;return o=Jn(n,o),Zn(n,s),i=ho(e,n,i,r,o,s),r=fo(),e!==null&&!tt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Wt(e,n,s)):(Pe&&r&&Qs(n),n.flags|=1,Qe(e,n,i,s),n.child)}function Kl(e,n,i,r,s){if(et(i)){var o=!0;Pr(n)}else o=!1;if(Zn(n,s),n.stateNode===null)Gr(e,n),Fl(n,i,r),bo(n,i,r,s),r=!0;else if(e===null){var d=n.stateNode,g=n.memoizedProps;d.props=g;var x=d.context,z=i.contextType;typeof z=="object"&&z!==null?z=ht(z):(z=et(i)?yn:Ye.current,z=Jn(n,z));var W=i.getDerivedStateFromProps,U=typeof W=="function"||typeof d.getSnapshotBeforeUpdate=="function";U||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==r||x!==z)&&_l(n,d,r,z),sn=!1;var O=n.memoizedState;d.state=O,Fr(n,r,d,s),x=n.memoizedState,g!==r||O!==x||Ze.current||sn?(typeof W=="function"&&(jo(n,i,W,r),x=n.memoizedState),(g=sn||Bl(n,i,g,r,O,x,z))?(U||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=x),d.props=r,d.state=x,d.context=z,r=g):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{d=n.stateNode,ml(e,n),g=n.memoizedProps,z=n.type===n.elementType?g:wt(n.type,g),d.props=z,U=n.pendingProps,O=d.context,x=i.contextType,typeof x=="object"&&x!==null?x=ht(x):(x=et(i)?yn:Ye.current,x=Jn(n,x));var ne=i.getDerivedStateFromProps;(W=typeof ne=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==U||O!==x)&&_l(n,d,r,x),sn=!1,O=n.memoizedState,d.state=O,Fr(n,r,d,s);var re=n.memoizedState;g!==U||O!==re||Ze.current||sn?(typeof ne=="function"&&(jo(n,i,ne,r),re=n.memoizedState),(z=sn||Bl(n,i,z,r,O,re,x)||!1)?(W||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,re,x),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,re,x)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=re),d.props=r,d.state=re,d.context=x,r=z):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),r=!1)}return So(e,n,i,r,o,s)}function So(e,n,i,r,s,o){Ql(e,n);var d=(n.flags&128)!==0;if(!r&&!d)return s&&nl(n,i,!1),Wt(e,n,o);r=n.stateNode,Sp.current=n;var g=d&&typeof i.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&d?(n.child=Kn(n,e.child,null,o),n.child=Kn(n,null,g,o)):Qe(e,n,g,o),n.memoizedState=r.state,s&&nl(n,i,!0),n.child}function Xl(e){var n=e.stateNode;n.pendingContext?el(e,n.pendingContext,n.pendingContext!==n.context):n.context&&el(e,n.context,!1),ao(e,n.containerInfo)}function Zl(e,n,i,r,s){return Qn(),eo(s),n.flags|=256,Qe(e,n,i,r),n.child}var Co={dehydrated:null,treeContext:null,retryLane:0};function Eo(e){return{baseLanes:e,cachePool:null,transitions:null}}function ec(e,n,i){var r=n.pendingProps,s=Te.current,o=!1,d=(n.flags&128)!==0,g;if((g=d)||(g=e!==null&&e.memoizedState===null?!1:(s&2)!==0),g?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ee(Te,s&1),e===null)return Zs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(d=r.children,e=r.fallback,o?(r=n.mode,o=n.child,d={mode:"hidden",children:d},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=d):o=os(d,r,0,null),e=Dn(e,r,i,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Eo(i),n.memoizedState=Co,e):Ao(n,d));if(s=e.memoizedState,s!==null&&(g=s.dehydrated,g!==null))return Cp(e,n,d,r,g,s,i);if(o){o=r.fallback,d=n.mode,s=e.child,g=s.sibling;var x={mode:"hidden",children:r.children};return(d&1)===0&&n.child!==s?(r=n.child,r.childLanes=0,r.pendingProps=x,n.deletions=null):(r=un(s,x),r.subtreeFlags=s.subtreeFlags&14680064),g!==null?o=un(g,o):(o=Dn(o,d,i,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,d=e.child.memoizedState,d=d===null?Eo(i):{baseLanes:d.baseLanes|i,cachePool:null,transitions:d.transitions},o.memoizedState=d,o.childLanes=e.childLanes&~i,n.memoizedState=Co,r}return o=e.child,e=o.sibling,r=un(o,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=i),r.return=n,r.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=r,n.memoizedState=null,r}function Ao(e,n){return n=os({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Jr(e,n,i,r){return r!==null&&eo(r),Kn(n,e.child,null,i),e=Ao(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Cp(e,n,i,r,s,o,d){if(i)return n.flags&256?(n.flags&=-257,r=ko(Error(p(422))),Jr(e,n,d,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,s=n.mode,r=os({mode:"visible",children:r.children},s,0,null),o=Dn(o,s,d,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,(n.mode&1)!==0&&Kn(n,e.child,null,d),n.child.memoizedState=Eo(d),n.memoizedState=Co,o);if((n.mode&1)===0)return Jr(e,n,d,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var g=r.dgst;return r=g,o=Error(p(419)),r=ko(o,r,void 0),Jr(e,n,d,r)}if(g=(d&e.childLanes)!==0,tt||g){if(r=_e,r!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(r.suspendedLanes|d))!==0?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,_t(e,s),Ct(r,e,s,-1))}return Ho(),r=ko(Error(p(421))),Jr(e,n,d,r)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=Fp.bind(null,e),s._reactRetry=n,null):(e=o.treeContext,ct=en(s.nextSibling),lt=n,Pe=!0,kt=null,e!==null&&(ut[mt++]=Bt,ut[mt++]=Ft,ut[mt++]=jn,Bt=e.id,Ft=e.overflow,jn=n),n=Ao(n,r.children),n.flags|=4096,n)}function tc(e,n,i){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ro(e.return,n,i)}function Do(e,n,i,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:s}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=i,o.tailMode=s)}function nc(e,n,i){var r=n.pendingProps,s=r.revealOrder,o=r.tail;if(Qe(e,n,r.children,i),r=Te.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tc(e,i,n);else if(e.tag===19)tc(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(Te,r),(n.mode&1)===0)n.memoizedState=null;else switch(s){case"forwards":for(i=n.child,s=null;i!==null;)e=i.alternate,e!==null&&_r(e)===null&&(s=i),i=i.sibling;i=s,i===null?(s=n.child,n.child=null):(s=i.sibling,i.sibling=null),Do(n,!1,s,i,o);break;case"backwards":for(i=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&_r(e)===null){n.child=s;break}e=s.sibling,s.sibling=i,i=s,s=e}Do(n,!0,i,null,o);break;case"together":Do(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gr(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Wt(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Sn|=n.lanes,(i&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(p(153));if(n.child!==null){for(e=n.child,i=un(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=un(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Ep(e,n,i){switch(n.tag){case 3:Xl(n),Qn();break;case 5:gl(n);break;case 1:et(n.type)&&Pr(n);break;case 4:ao(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,s=n.memoizedProps.value;Ee(Lr,r._currentValue),r._currentValue=s;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Te,Te.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?ec(e,n,i):(Ee(Te,Te.current&1),e=Wt(e,n,i),e!==null?e.sibling:null);Ee(Te,Te.current&1);break;case 19:if(r=(i&n.childLanes)!==0,(e.flags&128)!==0){if(r)return nc(e,n,i);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ee(Te,Te.current),r)break;return null;case 22:case 23:return n.lanes=0,Vl(e,n,i)}return Wt(e,n,i)}var ic,Po,rc,sc;ic=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Po=function(){},rc=function(e,n,i,r){var s=e.memoizedProps;if(s!==r){e=n.stateNode,wn(Tt.current);var o=null;switch(i){case"input":s=hn(e,s),r=hn(e,r),o=[];break;case"select":s=h({},s,{value:void 0}),r=h({},r,{value:void 0}),o=[];break;case"textarea":s=In(e,s),r=In(e,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Er)}qt(i,r);var d;i=null;for(z in s)if(!r.hasOwnProperty(z)&&s.hasOwnProperty(z)&&s[z]!=null)if(z==="style"){var g=s[z];for(d in g)g.hasOwnProperty(d)&&(i||(i={}),i[d]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(a.hasOwnProperty(z)?o||(o=[]):(o=o||[]).push(z,null));for(z in r){var x=r[z];if(g=s?.[z],r.hasOwnProperty(z)&&x!==g&&(x!=null||g!=null))if(z==="style")if(g){for(d in g)!g.hasOwnProperty(d)||x&&x.hasOwnProperty(d)||(i||(i={}),i[d]="");for(d in x)x.hasOwnProperty(d)&&g[d]!==x[d]&&(i||(i={}),i[d]=x[d])}else i||(o||(o=[]),o.push(z,i)),i=x;else z==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,g=g?g.__html:void 0,x!=null&&g!==x&&(o=o||[]).push(z,x)):z==="children"?typeof x!="string"&&typeof x!="number"||(o=o||[]).push(z,""+x):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(a.hasOwnProperty(z)?(x!=null&&z==="onScroll"&&Ae("scroll",e),o||g===x||(o=[])):(o=o||[]).push(z,x))}i&&(o=o||[]).push("style",i);var z=o;(n.updateQueue=z)&&(n.flags|=4)}},sc=function(e,n,i,r){i!==r&&(n.flags|=4)};function Hi(e,n){if(!Pe)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ge(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,r=0;if(n)for(var s=e.child;s!==null;)i|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)i|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=i,n}function Ap(e,n,i){var r=n.pendingProps;switch(Ks(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(n),null;case 1:return et(n.type)&&Dr(),Ge(n),null;case 3:return r=n.stateNode,ei(),De(Ze),De(Ye),po(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,kt!==null&&(Oo(kt),kt=null))),Po(e,n),Ge(n),null;case 5:lo(n);var s=wn(Fi.current);if(i=n.type,e!==null&&n.stateNode!=null)rc(e,n,i,r,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(p(166));return Ge(n),null}if(e=wn(Tt.current),Rr(n)){r=n.stateNode,i=n.type;var o=n.memoizedProps;switch(r[Pt]=n,r[Ri]=o,e=(n.mode&1)!==0,i){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(s=0;s<Ti.length;s++)Ae(Ti[s],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":vt(r,o),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ae("invalid",r);break;case"textarea":Xi(r,o),Ae("invalid",r)}qt(i,o),s=null;for(var d in o)if(o.hasOwnProperty(d)){var g=o[d];d==="children"?typeof g=="string"?r.textContent!==g&&(o.suppressHydrationWarning!==!0&&Cr(r.textContent,g,e),s=["children",g]):typeof g=="number"&&r.textContent!==""+g&&(o.suppressHydrationWarning!==!0&&Cr(r.textContent,g,e),s=["children",""+g]):a.hasOwnProperty(d)&&g!=null&&d==="onScroll"&&Ae("scroll",r)}switch(i){case"input":st(r),Ki(r,o,!0);break;case"textarea":st(r),er(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Er)}r=s,n.updateQueue=r,r!==null&&(n.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tr(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=d.createElement(i,{is:r.is}):(e=d.createElement(i),i==="select"&&(d=e,r.multiple?d.multiple=!0:r.size&&(d.size=r.size))):e=d.createElementNS(e,i),e[Pt]=n,e[Ri]=r,ic(e,n,!1,!1),n.stateNode=e;e:{switch(d=Rt(i,r),i){case"dialog":Ae("cancel",e),Ae("close",e),s=r;break;case"iframe":case"object":case"embed":Ae("load",e),s=r;break;case"video":case"audio":for(s=0;s<Ti.length;s++)Ae(Ti[s],e);s=r;break;case"source":Ae("error",e),s=r;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),s=r;break;case"details":Ae("toggle",e),s=r;break;case"input":vt(e,r),s=hn(e,r),Ae("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=h({},r,{value:void 0}),Ae("invalid",e);break;case"textarea":Xi(e,r),s=In(e,r),Ae("invalid",e);break;default:s=r}qt(i,s),g=s;for(o in g)if(g.hasOwnProperty(o)){var x=g[o];o==="style"?ir(e,x):o==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&li(e,x)):o==="children"?typeof x=="string"?(i!=="textarea"||x!=="")&&pt(e,x):typeof x=="number"&&pt(e,""+x):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(a.hasOwnProperty(o)?x!=null&&o==="onScroll"&&Ae("scroll",e):x!=null&&ce(e,o,x,d))}switch(i){case"input":st(e),Ki(e,r,!1);break;case"textarea":st(e),er(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xe(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Et(e,!!r.multiple,o,!1):r.defaultValue!=null&&Et(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Er)}switch(i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ge(n),null;case 6:if(e&&n.stateNode!=null)sc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(p(166));if(i=wn(Fi.current),wn(Tt.current),Rr(n)){if(r=n.stateNode,i=n.memoizedProps,r[Pt]=n,(o=r.nodeValue!==i)&&(e=lt,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,i,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(i.nodeType===9?i:i.ownerDocument).createTextNode(r),r[Pt]=n,n.stateNode=r}return Ge(n),null;case 13:if(De(Te),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&ct!==null&&(n.mode&1)!==0&&(n.flags&128)===0)ll(),Qn(),n.flags|=98560,o=!1;else if(o=Rr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(p(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(p(317));o[Pt]=n}else Qn(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ge(n),o=!1}else kt!==null&&(Oo(kt),kt=null),o=!0;if(!o)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Te.current&1)!==0?Be===0&&(Be=3):Ho())),n.updateQueue!==null&&(n.flags|=4),Ge(n),null);case 4:return ei(),Po(e,n),e===null&&zi(n.stateNode.containerInfo),Ge(n),null;case 10:return io(n.type._context),Ge(n),null;case 17:return et(n.type)&&Dr(),Ge(n),null;case 19:if(De(Te),o=n.memoizedState,o===null)return Ge(n),null;if(r=(n.flags&128)!==0,d=o.rendering,d===null)if(r)Hi(o,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=_r(e),d!==null){for(n.flags|=128,Hi(o,!1),r=d.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=i,i=n.child;i!==null;)o=i,e=r,o.flags&=14680066,d=o.alternate,d===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=d.childLanes,o.lanes=d.lanes,o.child=d.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=d.memoizedProps,o.memoizedState=d.memoizedState,o.updateQueue=d.updateQueue,o.type=d.type,e=d.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ee(Te,Te.current&1|2),n.child}e=e.sibling}o.tail!==null&&Re()>ri&&(n.flags|=128,r=!0,Hi(o,!1),n.lanes=4194304)}else{if(!r)if(e=_r(d),e!==null){if(n.flags|=128,r=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),Hi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Pe)return Ge(n),null}else 2*Re()-o.renderingStartTime>ri&&i!==1073741824&&(n.flags|=128,r=!0,Hi(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(i=o.last,i!==null?i.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Re(),n.sibling=null,i=Te.current,Ee(Te,r?i&1|2:i&1),n):(Ge(n),null);case 22:case 23:return Uo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(dt&1073741824)!==0&&(Ge(n),n.subtreeFlags&6&&(n.flags|=8192)):Ge(n),null;case 24:return null;case 25:return null}throw Error(p(156,n.tag))}function Dp(e,n){switch(Ks(n),n.tag){case 1:return et(n.type)&&Dr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ei(),De(Ze),De(Ye),po(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return lo(n),null;case 13:if(De(Te),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(p(340));Qn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return De(Te),null;case 4:return ei(),null;case 10:return io(n.type._context),null;case 22:case 23:return Uo(),null;case 24:return null;default:return null}}var Vr=!1,Ve=!1,Pp=typeof WeakSet=="function"?WeakSet:Set,ie=null;function ni(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(r){Ie(e,n,r)}else i.current=null}function To(e,n,i){try{i()}catch(r){Ie(e,n,r)}}var oc=!1;function Tp(e,n){if(Ws=fr,e=Ba(),Rs(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var r=i.getSelection&&i.getSelection();if(r&&r.rangeCount!==0){i=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{i.nodeType,o.nodeType}catch{i=null;break e}var d=0,g=-1,x=-1,z=0,W=0,U=e,O=null;t:for(;;){for(var ne;U!==i||s!==0&&U.nodeType!==3||(g=d+s),U!==o||r!==0&&U.nodeType!==3||(x=d+r),U.nodeType===3&&(d+=U.nodeValue.length),(ne=U.firstChild)!==null;)O=U,U=ne;for(;;){if(U===e)break t;if(O===i&&++z===s&&(g=d),O===o&&++W===r&&(x=d),(ne=U.nextSibling)!==null)break;U=O,O=U.parentNode}U=ne}i=g===-1||x===-1?null:{start:g,end:x}}else i=null}i=i||{start:0,end:0}}else i=null;for(Us={focusedElem:e,selectionRange:i},fr=!1,ie=n;ie!==null;)if(n=ie,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ie=e;else for(;ie!==null;){n=ie;try{var re=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var se=re.memoizedProps,$e=re.memoizedState,E=n.stateNode,k=E.getSnapshotBeforeUpdate(n.elementType===n.type?se:wt(n.type,se),$e);E.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var D=n.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(H){Ie(n,n.return,H)}if(e=n.sibling,e!==null){e.return=n.return,ie=e;break}ie=n.return}return re=oc,oc=!1,re}function qi(e,n,i){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&To(n,i,o)}s=s.next}while(s!==r)}}function Qr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var r=i.create;i.destroy=r()}i=i.next}while(i!==n)}}function zo(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function ac(e){var n=e.alternate;n!==null&&(e.alternate=null,ac(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Pt],delete n[Ri],delete n[Js],delete n[mp],delete n[hp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lc(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Io(e,n,i){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Er));else if(r!==4&&(e=e.child,e!==null))for(Io(e,n,i),e=e.sibling;e!==null;)Io(e,n,i),e=e.sibling}function Ro(e,n,i){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ro(e,n,i),e=e.sibling;e!==null;)Ro(e,n,i),e=e.sibling}var He=null,Nt=!1;function an(e,n,i){for(i=i.child;i!==null;)dc(e,n,i),i=i.sibling}function dc(e,n,i){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(cr,i)}catch{}switch(i.tag){case 5:Ve||ni(i,n);case 6:var r=He,s=Nt;He=null,an(e,n,i),He=r,Nt=s,He!==null&&(Nt?(e=He,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):He.removeChild(i.stateNode));break;case 18:He!==null&&(Nt?(e=He,i=i.stateNode,e.nodeType===8?Ys(e.parentNode,i):e.nodeType===1&&Ys(e,i),wi(e)):Ys(He,i.stateNode));break;case 4:r=He,s=Nt,He=i.stateNode.containerInfo,Nt=!0,an(e,n,i),He=r,Nt=s;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=i.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,d=o.destroy;o=o.tag,d!==void 0&&((o&2)!==0||(o&4)!==0)&&To(i,n,d),s=s.next}while(s!==r)}an(e,n,i);break;case 1:if(!Ve&&(ni(i,n),r=i.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=i.memoizedProps,r.state=i.memoizedState,r.componentWillUnmount()}catch(g){Ie(i,n,g)}an(e,n,i);break;case 21:an(e,n,i);break;case 22:i.mode&1?(Ve=(r=Ve)||i.memoizedState!==null,an(e,n,i),Ve=r):an(e,n,i);break;default:an(e,n,i)}}function pc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Pp),n.forEach(function(r){var s=_p.bind(null,e,r);i.has(r)||(i.add(r),r.then(s,s))})}}function St(e,n){var i=n.deletions;if(i!==null)for(var r=0;r<i.length;r++){var s=i[r];try{var o=e,d=n,g=d;e:for(;g!==null;){switch(g.tag){case 5:He=g.stateNode,Nt=!1;break e;case 3:He=g.stateNode.containerInfo,Nt=!0;break e;case 4:He=g.stateNode.containerInfo,Nt=!0;break e}g=g.return}if(He===null)throw Error(p(160));dc(o,d,s),He=null,Nt=!1;var x=s.alternate;x!==null&&(x.return=null),s.return=null}catch(z){Ie(s,n,z)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)uc(n,e),n=n.sibling}function uc(e,n){var i=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(n,e),It(e),r&4){try{qi(3,e,e.return),Qr(3,e)}catch(se){Ie(e,e.return,se)}try{qi(5,e,e.return)}catch(se){Ie(e,e.return,se)}}break;case 1:St(n,e),It(e),r&512&&i!==null&&ni(i,i.return);break;case 5:if(St(n,e),It(e),r&512&&i!==null&&ni(i,i.return),e.flags&32){var s=e.stateNode;try{pt(s,"")}catch(se){Ie(e,e.return,se)}}if(r&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,d=i!==null?i.memoizedProps:o,g=e.type,x=e.updateQueue;if(e.updateQueue=null,x!==null)try{g==="input"&&o.type==="radio"&&o.name!=null&&zn(s,o),Rt(g,d);var z=Rt(g,o);for(d=0;d<x.length;d+=2){var W=x[d],U=x[d+1];W==="style"?ir(s,U):W==="dangerouslySetInnerHTML"?li(s,U):W==="children"?pt(s,U):ce(s,W,U,z)}switch(g){case"input":oi(s,o);break;case"textarea":Zi(s,o);break;case"select":var O=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var ne=o.value;ne!=null?Et(s,!!o.multiple,ne,!1):O!==!!o.multiple&&(o.defaultValue!=null?Et(s,!!o.multiple,o.defaultValue,!0):Et(s,!!o.multiple,o.multiple?[]:"",!1))}s[Ri]=o}catch(se){Ie(e,e.return,se)}}break;case 6:if(St(n,e),It(e),r&4){if(e.stateNode===null)throw Error(p(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(se){Ie(e,e.return,se)}}break;case 3:if(St(n,e),It(e),r&4&&i!==null&&i.memoizedState.isDehydrated)try{wi(n.containerInfo)}catch(se){Ie(e,e.return,se)}break;case 4:St(n,e),It(e);break;case 13:St(n,e),It(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(Mo=Re())),r&4&&pc(e);break;case 22:if(W=i!==null&&i.memoizedState!==null,e.mode&1?(Ve=(z=Ve)||W,St(n,e),Ve=z):St(n,e),It(e),r&8192){if(z=e.memoizedState!==null,(e.stateNode.isHidden=z)&&!W&&(e.mode&1)!==0)for(ie=e,W=e.child;W!==null;){for(U=ie=W;ie!==null;){switch(O=ie,ne=O.child,O.tag){case 0:case 11:case 14:case 15:qi(4,O,O.return);break;case 1:ni(O,O.return);var re=O.stateNode;if(typeof re.componentWillUnmount=="function"){r=O,i=O.return;try{n=r,re.props=n.memoizedProps,re.state=n.memoizedState,re.componentWillUnmount()}catch(se){Ie(r,i,se)}}break;case 5:ni(O,O.return);break;case 22:if(O.memoizedState!==null){fc(U);continue}}ne!==null?(ne.return=O,ie=ne):fc(U)}W=W.sibling}e:for(W=null,U=e;;){if(U.tag===5){if(W===null){W=U;try{s=U.stateNode,z?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(g=U.stateNode,x=U.memoizedProps.style,d=x!=null&&x.hasOwnProperty("display")?x.display:null,g.style.display=nr("display",d))}catch(se){Ie(e,e.return,se)}}}else if(U.tag===6){if(W===null)try{U.stateNode.nodeValue=z?"":U.memoizedProps}catch(se){Ie(e,e.return,se)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;W===U&&(W=null),U=U.return}W===U&&(W=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:St(n,e),It(e),r&4&&pc(e);break;case 21:break;default:St(n,e),It(e)}}function It(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(lc(i)){var r=i;break e}i=i.return}throw Error(p(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(pt(s,""),r.flags&=-33);var o=cc(e);Ro(e,o,s);break;case 3:case 4:var d=r.stateNode.containerInfo,g=cc(e);Io(e,g,d);break;default:throw Error(p(161))}}catch(x){Ie(e,e.return,x)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zp(e,n,i){ie=e,mc(e)}function mc(e,n,i){for(var r=(e.mode&1)!==0;ie!==null;){var s=ie,o=s.child;if(s.tag===22&&r){var d=s.memoizedState!==null||Vr;if(!d){var g=s.alternate,x=g!==null&&g.memoizedState!==null||Ve;g=Vr;var z=Ve;if(Vr=d,(Ve=x)&&!z)for(ie=s;ie!==null;)d=ie,x=d.child,d.tag===22&&d.memoizedState!==null?gc(s):x!==null?(x.return=d,ie=x):gc(s);for(;o!==null;)ie=o,mc(o),o=o.sibling;ie=s,Vr=g,Ve=z}hc(e)}else(s.subtreeFlags&8772)!==0&&o!==null?(o.return=s,ie=o):hc(e)}}function hc(e){for(;ie!==null;){var n=ie;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ve||Qr(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ve)if(i===null)r.componentDidMount();else{var s=n.elementType===n.type?i.memoizedProps:wt(n.type,i.memoizedProps);r.componentDidUpdate(s,i.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&fl(n,o,r);break;case 3:var d=n.updateQueue;if(d!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}fl(n,d,i)}break;case 5:var g=n.stateNode;if(i===null&&n.flags&4){i=g;var x=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&i.focus();break;case"img":x.src&&(i.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var z=n.alternate;if(z!==null){var W=z.memoizedState;if(W!==null){var U=W.dehydrated;U!==null&&wi(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}Ve||n.flags&512&&zo(n)}catch(O){Ie(n,n.return,O)}}if(n===e){ie=null;break}if(i=n.sibling,i!==null){i.return=n.return,ie=i;break}ie=n.return}}function fc(e){for(;ie!==null;){var n=ie;if(n===e){ie=null;break}var i=n.sibling;if(i!==null){i.return=n.return,ie=i;break}ie=n.return}}function gc(e){for(;ie!==null;){var n=ie;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{Qr(4,n)}catch(x){Ie(n,i,x)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var s=n.return;try{r.componentDidMount()}catch(x){Ie(n,s,x)}}var o=n.return;try{zo(n)}catch(x){Ie(n,o,x)}break;case 5:var d=n.return;try{zo(n)}catch(x){Ie(n,d,x)}}}catch(x){Ie(n,n.return,x)}if(n===e){ie=null;break}var g=n.sibling;if(g!==null){g.return=n.return,ie=g;break}ie=n.return}}var Ip=Math.ceil,Kr=me.ReactCurrentDispatcher,$o=me.ReactCurrentOwner,gt=me.ReactCurrentBatchConfig,be=0,_e=null,Le=null,qe=0,dt=0,ii=tn(0),Be=0,Yi=null,Sn=0,Xr=0,Lo=0,Ji=null,nt=null,Mo=0,ri=1/0,Ut=null,Zr=!1,Bo=null,ln=null,es=!1,cn=null,ts=0,Gi=0,Fo=null,ns=-1,is=0;function Ke(){return(be&6)!==0?Re():ns!==-1?ns:ns=Re()}function dn(e){return(e.mode&1)===0?1:(be&2)!==0&&qe!==0?qe&-qe:gp.transition!==null?(is===0&&(is=ca()),is):(e=Se,e!==0||(e=window.event,e=e===void 0?16:va(e.type)),e)}function Ct(e,n,i,r){if(50<Gi)throw Gi=0,Fo=null,Error(p(185));vi(e,i,r),((be&2)===0||e!==_e)&&(e===_e&&((be&2)===0&&(Xr|=i),Be===4&&pn(e,qe)),it(e,r),i===1&&be===0&&(n.mode&1)===0&&(ri=Re()+500,Tr&&rn()))}function it(e,n){var i=e.callbackNode;gd(e,n);var r=ur(e,e===_e?qe:0);if(r===0)i!==null&&oa(i),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(i!=null&&oa(i),n===1)e.tag===0?fp(vc.bind(null,e)):il(vc.bind(null,e)),pp(function(){(be&6)===0&&rn()}),i=null;else{switch(da(r)){case 1:i=xs;break;case 4:i=aa;break;case 16:i=lr;break;case 536870912:i=la;break;default:i=lr}i=Cc(i,xc.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function xc(e,n){if(ns=-1,is=0,(be&6)!==0)throw Error(p(327));var i=e.callbackNode;if(si()&&e.callbackNode!==i)return null;var r=ur(e,e===_e?qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=rs(e,r);else{n=r;var s=be;be|=2;var o=jc();(_e!==e||qe!==n)&&(Ut=null,ri=Re()+500,En(e,n));do try{Lp();break}catch(g){yc(e,g)}while(!0);no(),Kr.current=o,be=s,Le!==null?n=0:(_e=null,qe=0,n=Be)}if(n!==0){if(n===2&&(s=vs(e),s!==0&&(r=s,n=_o(e,s))),n===1)throw i=Yi,En(e,0),pn(e,r),it(e,Re()),i;if(n===6)pn(e,r);else{if(s=e.current.alternate,(r&30)===0&&!Rp(s)&&(n=rs(e,r),n===2&&(o=vs(e),o!==0&&(r=o,n=_o(e,o))),n===1))throw i=Yi,En(e,0),pn(e,r),it(e,Re()),i;switch(e.finishedWork=s,e.finishedLanes=r,n){case 0:case 1:throw Error(p(345));case 2:An(e,nt,Ut);break;case 3:if(pn(e,r),(r&130023424)===r&&(n=Mo+500-Re(),10<n)){if(ur(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=qs(An.bind(null,e,nt,Ut),n);break}An(e,nt,Ut);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,s=-1;0<r;){var d=31-jt(r);o=1<<d,d=n[d],d>s&&(s=d),r&=~o}if(r=s,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ip(r/1960))-r,10<r){e.timeoutHandle=qs(An.bind(null,e,nt,Ut),r);break}An(e,nt,Ut);break;case 5:An(e,nt,Ut);break;default:throw Error(p(329))}}}return it(e,Re()),e.callbackNode===i?xc.bind(null,e):null}function _o(e,n){var i=Ji;return e.current.memoizedState.isDehydrated&&(En(e,n).flags|=256),e=rs(e,n),e!==2&&(n=nt,nt=i,n!==null&&Oo(n)),e}function Oo(e){nt===null?nt=e:nt.push.apply(nt,e)}function Rp(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var r=0;r<i.length;r++){var s=i[r],o=s.getSnapshot;s=s.value;try{if(!bt(o(),s))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pn(e,n){for(n&=~Lo,n&=~Xr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-jt(n),r=1<<i;e[i]=-1,n&=~r}}function vc(e){if((be&6)!==0)throw Error(p(327));si();var n=ur(e,0);if((n&1)===0)return it(e,Re()),null;var i=rs(e,n);if(e.tag!==0&&i===2){var r=vs(e);r!==0&&(n=r,i=_o(e,r))}if(i===1)throw i=Yi,En(e,0),pn(e,n),it(e,Re()),i;if(i===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,An(e,nt,Ut),it(e,Re()),null}function Wo(e,n){var i=be;be|=1;try{return e(n)}finally{be=i,be===0&&(ri=Re()+500,Tr&&rn())}}function Cn(e){cn!==null&&cn.tag===0&&(be&6)===0&&si();var n=be;be|=1;var i=gt.transition,r=Se;try{if(gt.transition=null,Se=1,e)return e()}finally{Se=r,gt.transition=i,be=n,(be&6)===0&&rn()}}function Uo(){dt=ii.current,De(ii)}function En(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,dp(i)),Le!==null)for(i=Le.return;i!==null;){var r=i;switch(Ks(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dr();break;case 3:ei(),De(Ze),De(Ye),po();break;case 5:lo(r);break;case 4:ei();break;case 13:De(Te);break;case 19:De(Te);break;case 10:io(r.type._context);break;case 22:case 23:Uo()}i=i.return}if(_e=e,Le=e=un(e.current,null),qe=dt=n,Be=0,Yi=null,Lo=Xr=Sn=0,nt=Ji=null,kn!==null){for(n=0;n<kn.length;n++)if(i=kn[n],r=i.interleaved,r!==null){i.interleaved=null;var s=r.next,o=i.pending;if(o!==null){var d=o.next;o.next=s,r.next=d}i.pending=r}kn=null}return e}function yc(e,n){do{var i=Le;try{if(no(),Or.current=qr,Wr){for(var r=ze.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Wr=!1}if(Nn=0,Fe=Me=ze=null,_i=!1,Oi=0,$o.current=null,i===null||i.return===null){Be=1,Yi=n,Le=null;break}e:{var o=e,d=i.return,g=i,x=n;if(n=qe,g.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var z=x,W=g,U=W.tag;if((W.mode&1)===0&&(U===0||U===11||U===15)){var O=W.alternate;O?(W.updateQueue=O.updateQueue,W.memoizedState=O.memoizedState,W.lanes=O.lanes):(W.updateQueue=null,W.memoizedState=null)}var ne=Hl(d);if(ne!==null){ne.flags&=-257,ql(ne,d,g,o,n),ne.mode&1&&Ul(o,z,n),n=ne,x=z;var re=n.updateQueue;if(re===null){var se=new Set;se.add(x),n.updateQueue=se}else re.add(x);break e}else{if((n&1)===0){Ul(o,z,n),Ho();break e}x=Error(p(426))}}else if(Pe&&g.mode&1){var $e=Hl(d);if($e!==null){($e.flags&65536)===0&&($e.flags|=256),ql($e,d,g,o,n),eo(ti(x,g));break e}}o=x=ti(x,g),Be!==4&&(Be=2),Ji===null?Ji=[o]:Ji.push(o),o=d;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var E=Ol(o,x,n);hl(o,E);break e;case 1:g=x;var k=o.type,D=o.stateNode;if((o.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(ln===null||!ln.has(D)))){o.flags|=65536,n&=-n,o.lanes|=n;var H=Wl(o,g,n);hl(o,H);break e}}o=o.return}while(o!==null)}kc(i)}catch(oe){n=oe,Le===i&&i!==null&&(Le=i=i.return);continue}break}while(!0)}function jc(){var e=Kr.current;return Kr.current=qr,e===null?qr:e}function Ho(){(Be===0||Be===3||Be===2)&&(Be=4),_e===null||(Sn&268435455)===0&&(Xr&268435455)===0||pn(_e,qe)}function rs(e,n){var i=be;be|=2;var r=jc();(_e!==e||qe!==n)&&(Ut=null,En(e,n));do try{$p();break}catch(s){yc(e,s)}while(!0);if(no(),be=i,Kr.current=r,Le!==null)throw Error(p(261));return _e=null,qe=0,Be}function $p(){for(;Le!==null;)bc(Le)}function Lp(){for(;Le!==null&&!ad();)bc(Le)}function bc(e){var n=Sc(e.alternate,e,dt);e.memoizedProps=e.pendingProps,n===null?kc(e):Le=n,$o.current=null}function kc(e){var n=e;do{var i=n.alternate;if(e=n.return,(n.flags&32768)===0){if(i=Ap(i,n,dt),i!==null){Le=i;return}}else{if(i=Dp(i,n),i!==null){i.flags&=32767,Le=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Le=null;return}}if(n=n.sibling,n!==null){Le=n;return}Le=n=e}while(n!==null);Be===0&&(Be=5)}function An(e,n,i){var r=Se,s=gt.transition;try{gt.transition=null,Se=1,Mp(e,n,i,r)}finally{gt.transition=s,Se=r}return null}function Mp(e,n,i,r){do si();while(cn!==null);if((be&6)!==0)throw Error(p(327));i=e.finishedWork;var s=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var o=i.lanes|i.childLanes;if(xd(e,o),e===_e&&(Le=_e=null,qe=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||es||(es=!0,Cc(lr,function(){return si(),null})),o=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||o){o=gt.transition,gt.transition=null;var d=Se;Se=1;var g=be;be|=4,$o.current=null,Tp(e,i),uc(i,e),ip(Us),fr=!!Ws,Us=Ws=null,e.current=i,zp(i),ld(),be=g,Se=d,gt.transition=o}else e.current=i;if(es&&(es=!1,cn=e,ts=s),o=e.pendingLanes,o===0&&(ln=null),pd(i.stateNode),it(e,Re()),n!==null)for(r=e.onRecoverableError,i=0;i<n.length;i++)s=n[i],r(s.value,{componentStack:s.stack,digest:s.digest});if(Zr)throw Zr=!1,e=Bo,Bo=null,e;return(ts&1)!==0&&e.tag!==0&&si(),o=e.pendingLanes,(o&1)!==0?e===Fo?Gi++:(Gi=0,Fo=e):Gi=0,rn(),null}function si(){if(cn!==null){var e=da(ts),n=gt.transition,i=Se;try{if(gt.transition=null,Se=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,ts=0,(be&6)!==0)throw Error(p(331));var s=be;for(be|=4,ie=e.current;ie!==null;){var o=ie,d=o.child;if((ie.flags&16)!==0){var g=o.deletions;if(g!==null){for(var x=0;x<g.length;x++){var z=g[x];for(ie=z;ie!==null;){var W=ie;switch(W.tag){case 0:case 11:case 15:qi(8,W,o)}var U=W.child;if(U!==null)U.return=W,ie=U;else for(;ie!==null;){W=ie;var O=W.sibling,ne=W.return;if(ac(W),W===z){ie=null;break}if(O!==null){O.return=ne,ie=O;break}ie=ne}}}var re=o.alternate;if(re!==null){var se=re.child;if(se!==null){re.child=null;do{var $e=se.sibling;se.sibling=null,se=$e}while(se!==null)}}ie=o}}if((o.subtreeFlags&2064)!==0&&d!==null)d.return=o,ie=d;else e:for(;ie!==null;){if(o=ie,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:qi(9,o,o.return)}var E=o.sibling;if(E!==null){E.return=o.return,ie=E;break e}ie=o.return}}var k=e.current;for(ie=k;ie!==null;){d=ie;var D=d.child;if((d.subtreeFlags&2064)!==0&&D!==null)D.return=d,ie=D;else e:for(d=k;ie!==null;){if(g=ie,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:Qr(9,g)}}catch(oe){Ie(g,g.return,oe)}if(g===d){ie=null;break e}var H=g.sibling;if(H!==null){H.return=g.return,ie=H;break e}ie=g.return}}if(be=s,rn(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(cr,e)}catch{}r=!0}return r}finally{Se=i,gt.transition=n}}return!1}function wc(e,n,i){n=ti(i,n),n=Ol(e,n,1),e=on(e,n,1),n=Ke(),e!==null&&(vi(e,1,n),it(e,n))}function Ie(e,n,i){if(e.tag===3)wc(e,e,i);else for(;n!==null;){if(n.tag===3){wc(n,e,i);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=ti(i,e),e=Wl(n,e,1),n=on(n,e,1),e=Ke(),n!==null&&(vi(n,1,e),it(n,e));break}}n=n.return}}function Bp(e,n,i){var r=e.pingCache;r!==null&&r.delete(n),n=Ke(),e.pingedLanes|=e.suspendedLanes&i,_e===e&&(qe&i)===i&&(Be===4||Be===3&&(qe&130023424)===qe&&500>Re()-Mo?En(e,0):Lo|=i),it(e,n)}function Nc(e,n){n===0&&((e.mode&1)===0?n=1:(n=pr,pr<<=1,(pr&130023424)===0&&(pr=4194304)));var i=Ke();e=_t(e,n),e!==null&&(vi(e,n,i),it(e,i))}function Fp(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Nc(e,i)}function _p(e,n){var i=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(i=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(p(314))}r!==null&&r.delete(n),Nc(e,i)}var Sc;Sc=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ze.current)tt=!0;else{if((e.lanes&i)===0&&(n.flags&128)===0)return tt=!1,Ep(e,n,i);tt=(e.flags&131072)!==0}else tt=!1,Pe&&(n.flags&1048576)!==0&&rl(n,Ir,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Gr(e,n),e=n.pendingProps;var s=Jn(n,Ye.current);Zn(n,i),s=ho(null,n,r,e,s,i);var o=fo();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,et(r)?(o=!0,Pr(n)):o=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,oo(n),s.updater=Yr,n.stateNode=s,s._reactInternals=n,bo(n,r,e,i),n=So(null,n,r,!0,o,i)):(n.tag=0,Pe&&o&&Qs(n),Qe(null,n,s,i),n=n.child),n;case 16:r=n.elementType;e:{switch(Gr(e,n),e=n.pendingProps,s=r._init,r=s(r._payload),n.type=r,s=n.tag=Wp(r),e=wt(r,e),s){case 0:n=No(null,n,r,e,i);break e;case 1:n=Kl(null,n,r,e,i);break e;case 11:n=Yl(null,n,r,e,i);break e;case 14:n=Jl(null,n,r,wt(r.type,e),i);break e}throw Error(p(306,r,""))}return n;case 0:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:wt(r,s),No(e,n,r,s,i);case 1:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:wt(r,s),Kl(e,n,r,s,i);case 3:e:{if(Xl(n),e===null)throw Error(p(387));r=n.pendingProps,o=n.memoizedState,s=o.element,ml(e,n),Fr(n,r,null,i);var d=n.memoizedState;if(r=d.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){s=ti(Error(p(423)),n),n=Zl(e,n,r,i,s);break e}else if(r!==s){s=ti(Error(p(424)),n),n=Zl(e,n,r,i,s);break e}else for(ct=en(n.stateNode.containerInfo.firstChild),lt=n,Pe=!0,kt=null,i=pl(n,null,r,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Qn(),r===s){n=Wt(e,n,i);break e}Qe(e,n,r,i)}n=n.child}return n;case 5:return gl(n),e===null&&Zs(n),r=n.type,s=n.pendingProps,o=e!==null?e.memoizedProps:null,d=s.children,Hs(r,s)?d=null:o!==null&&Hs(r,o)&&(n.flags|=32),Ql(e,n),Qe(e,n,d,i),n.child;case 6:return e===null&&Zs(n),null;case 13:return ec(e,n,i);case 4:return ao(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Kn(n,null,r,i):Qe(e,n,r,i),n.child;case 11:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:wt(r,s),Yl(e,n,r,s,i);case 7:return Qe(e,n,n.pendingProps,i),n.child;case 8:return Qe(e,n,n.pendingProps.children,i),n.child;case 12:return Qe(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(r=n.type._context,s=n.pendingProps,o=n.memoizedProps,d=s.value,Ee(Lr,r._currentValue),r._currentValue=d,o!==null)if(bt(o.value,d)){if(o.children===s.children&&!Ze.current){n=Wt(e,n,i);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var g=o.dependencies;if(g!==null){d=o.child;for(var x=g.firstContext;x!==null;){if(x.context===r){if(o.tag===1){x=Ot(-1,i&-i),x.tag=2;var z=o.updateQueue;if(z!==null){z=z.shared;var W=z.pending;W===null?x.next=x:(x.next=W.next,W.next=x),z.pending=x}}o.lanes|=i,x=o.alternate,x!==null&&(x.lanes|=i),ro(o.return,i,n),g.lanes|=i;break}x=x.next}}else if(o.tag===10)d=o.type===n.type?null:o.child;else if(o.tag===18){if(d=o.return,d===null)throw Error(p(341));d.lanes|=i,g=d.alternate,g!==null&&(g.lanes|=i),ro(d,i,n),d=o.sibling}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===n){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}Qe(e,n,s.children,i),n=n.child}return n;case 9:return s=n.type,r=n.pendingProps.children,Zn(n,i),s=ht(s),r=r(s),n.flags|=1,Qe(e,n,r,i),n.child;case 14:return r=n.type,s=wt(r,n.pendingProps),s=wt(r.type,s),Jl(e,n,r,s,i);case 15:return Gl(e,n,n.type,n.pendingProps,i);case 17:return r=n.type,s=n.pendingProps,s=n.elementType===r?s:wt(r,s),Gr(e,n),n.tag=1,et(r)?(e=!0,Pr(n)):e=!1,Zn(n,i),Fl(n,r,s),bo(n,r,s,i),So(null,n,r,!0,e,i);case 19:return nc(e,n,i);case 22:return Vl(e,n,i)}throw Error(p(156,n.tag))};function Cc(e,n){return sa(e,n)}function Op(e,n,i,r){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,n,i,r){return new Op(e,n,i,r)}function qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wp(e){if(typeof e=="function")return qo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Q)return 11;if(e===A)return 14}return 2}function un(e,n){var i=e.alternate;return i===null?(i=xt(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function ss(e,n,i,r,s,o){var d=2;if(r=e,typeof e=="function")qo(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case ye:return Dn(i.children,s,o,n);case je:d=8,s|=8;break;case he:return e=xt(12,i,n,s|2),e.elementType=he,e.lanes=o,e;case N:return e=xt(13,i,n,s),e.elementType=N,e.lanes=o,e;case S:return e=xt(19,i,n,s),e.elementType=S,e.lanes=o,e;case R:return os(i,s,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case we:d=10;break e;case V:d=9;break e;case Q:d=11;break e;case A:d=14;break e;case j:d=16,r=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return n=xt(d,i,n,s),n.elementType=e,n.type=r,n.lanes=o,n}function Dn(e,n,i,r){return e=xt(7,e,r,n),e.lanes=i,e}function os(e,n,i,r){return e=xt(22,e,r,n),e.elementType=R,e.lanes=i,e.stateNode={isHidden:!1},e}function Yo(e,n,i){return e=xt(6,e,null,n),e.lanes=i,e}function Jo(e,n,i){return n=xt(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Up(e,n,i,r,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ys(0),this.expirationTimes=ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Go(e,n,i,r,s,o,d,g,x){return e=new Up(e,n,i,g,x),n===1?(n=1,o===!0&&(n|=8)):n=0,o=xt(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},oo(o),e}function Hp(e,n,i){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:le,key:r==null?null:""+r,children:e,containerInfo:n,implementation:i}}function Ec(e){if(!e)return nn;e=e._reactInternals;e:{if(Ne(e)!==e||e.tag!==1)throw Error(p(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(et(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(p(171))}if(e.tag===1){var i=e.type;if(et(i))return tl(e,i,n)}return n}function Ac(e,n,i,r,s,o,d,g,x){return e=Go(i,r,!0,e,s,o,d,g,x),e.context=Ec(null),i=e.current,r=Ke(),s=dn(i),o=Ot(r,s),o.callback=n??null,on(i,o,s),e.current.lanes=s,vi(e,s,r),it(e,r),e}function as(e,n,i,r){var s=n.current,o=Ke(),d=dn(s);return i=Ec(i),n.context===null?n.context=i:n.pendingContext=i,n=Ot(o,d),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=on(s,n,d),e!==null&&(Ct(e,s,d,o),Br(e,s,d)),d}function ls(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function Vo(e,n){Dc(e,n),(e=e.alternate)&&Dc(e,n)}function qp(){return null}var Pc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qo(e){this._internalRoot=e}cs.prototype.render=Qo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(p(409));as(e,n,null,null)},cs.prototype.unmount=Qo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Cn(function(){as(null,e,null,null)}),n[Lt]=null}};function cs(e){this._internalRoot=e}cs.prototype.unstable_scheduleHydration=function(e){if(e){var n=ma();e={blockedOn:null,target:e,priority:n};for(var i=0;i<Kt.length&&n!==0&&n<Kt[i].priority;i++);Kt.splice(i,0,e),i===0&&ga(e)}};function Ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tc(){}function Yp(e,n,i,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var z=ls(d);o.call(z)}}var d=Ac(n,r,e,0,null,!1,!1,"",Tc);return e._reactRootContainer=d,e[Lt]=d.current,zi(e.nodeType===8?e.parentNode:e),Cn(),d}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var g=r;r=function(){var z=ls(x);g.call(z)}}var x=Go(e,0,!1,null,null,!1,!1,"",Tc);return e._reactRootContainer=x,e[Lt]=x.current,zi(e.nodeType===8?e.parentNode:e),Cn(function(){as(n,x,i,r)}),x}function ps(e,n,i,r,s){var o=i._reactRootContainer;if(o){var d=o;if(typeof s=="function"){var g=s;s=function(){var x=ls(d);g.call(x)}}as(n,d,e,s)}else d=Yp(i,n,e,s,r);return ls(d)}pa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=xi(n.pendingLanes);i!==0&&(js(n,i|1),it(n,Re()),(be&6)===0&&(ri=Re()+500,rn()))}break;case 13:Cn(function(){var r=_t(e,1);if(r!==null){var s=Ke();Ct(r,e,1,s)}}),Vo(e,1)}},bs=function(e){if(e.tag===13){var n=_t(e,134217728);if(n!==null){var i=Ke();Ct(n,e,134217728,i)}Vo(e,134217728)}},ua=function(e){if(e.tag===13){var n=dn(e),i=_t(e,n);if(i!==null){var r=Ke();Ct(i,e,n,r)}Vo(e,n)}},ma=function(){return Se},ha=function(e,n){var i=Se;try{return Se=e,n()}finally{Se=i}},pi=function(e,n,i){switch(n){case"input":if(oi(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var r=i[n];if(r!==e&&r.form===e.form){var s=Ar(r);if(!s)throw Error(p(90));Pn(r),oi(r,s)}}}break;case"textarea":Zi(e,i);break;case"select":n=i.value,n!=null&&Et(e,!!i.multiple,n,!1)}},mi=Wo,or=Cn;var Jp={usingClientEntryPoint:!1,Events:[$i,qn,Ar,rr,sr,Wo]},Vi={findFiberByHostInstance:vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gp={bundleType:Vi.bundleType,version:Vi.version,rendererPackageName:Vi.rendererPackageName,rendererConfig:Vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:me.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ot(e),e===null?null:e.stateNode},findFiberByHostInstance:Vi.findFiberByHostInstance||qp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!us.isDisabled&&us.supportsFiber)try{cr=us.inject(Gp),Dt=us}catch{}}return rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp,rt.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ko(n))throw Error(p(200));return Hp(e,n,null,i)},rt.createRoot=function(e,n){if(!Ko(e))throw Error(p(299));var i=!1,r="",s=Pc;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Go(e,1,!1,null,null,i,!1,r,s),e[Lt]=n.current,zi(e.nodeType===8?e.parentNode:e),new Qo(n)},rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=ot(n),e=e===null?null:e.stateNode,e},rt.flushSync=function(e){return Cn(e)},rt.hydrate=function(e,n,i){if(!ds(n))throw Error(p(200));return ps(null,e,n,!0,i)},rt.hydrateRoot=function(e,n,i){if(!Ko(e))throw Error(p(405));var r=i!=null&&i.hydratedSources||null,s=!1,o="",d=Pc;if(i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),n=Ac(n,null,e,1,i??null,s,!1,o,d),e[Lt]=n.current,zi(e),r)for(e=0;e<r.length;e++)i=r[e],s=i._getVersion,s=s(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,s]:n.mutableSourceEagerHydrationData.push(i,s);return new cs(n)},rt.render=function(e,n,i){if(!ds(n))throw Error(p(200));return ps(null,e,n,!1,i)},rt.unmountComponentAtNode=function(e){if(!ds(e))throw Error(p(40));return e._reactRootContainer?(Cn(function(){ps(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1},rt.unstable_batchedUpdates=Wo,rt.unstable_renderSubtreeIntoContainer=function(e,n,i,r){if(!ds(i))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return ps(e,n,i,!1,r)},rt.version="18.3.1-next-f1338f8080-20240426",rt}var Fc;function iu(){if(Fc)return ea.exports;Fc=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(_){console.error(_)}}return T(),ea.exports=nu(),ea.exports}var _c;function ru(){if(_c)return ms;_c=1;var T=iu();return ms.createRoot=T.createRoot,ms.hydrateRoot=T.hydrateRoot,ms}var su=ru();const ou=Uc(su),Hc=X.createContext(),Oc={english:{dashboard:"Dashboard",jobMatches:"Job Matches",applications:"Applications",toolkit:"Toolkit",jobController:"Job Controller",profile:"Profile",hello:"Hello",ready:"Ready to accelerate your career? Here's your personalized job search dashboard.",today:"Today",yourActivity:"Your Activity",jobsSearched:"Jobs Searched",applicationsSent:"Applications Sent",interviews:"Interviews",thisWeek:"this week",newMatches:"new matches",upcoming:"upcoming",recentActivities:"Recent Activities",viewAll:"View All",applied:"Applied",matched:"Matched",interview:"Interview",searched:"Searched",track:"Track",applyNow:"Apply Now",prepare:"Prepare",viewResults:"View Results",quickActions:"Quick Actions",updateProfile:"Update Profile",updateProfileDesc:"Keep your profile fresh and attract better opportunities",careerTools:"Career Tools",careerToolsDesc:"Resume builder, interview prep, and skill assessments",jobSearch:"Job Search",jobSearchDesc:"Find new opportunities and track your applications",myJobApplications:"My Job Applications",trackApplications:"Track all your job applications and their current status",totalApplications:"Total Applications",underReview:"Under Review",offers:"Offers",filterByStatus:"Filter by Status:",sortBy:"Sort by:",applicationDate:"Application Date",companyName:"Company Name",position:"Position",status:"Status",allApplications:"All Applications",interviewScheduled:"Interview Scheduled",offerReceived:"Offer Received",rejected:"Rejected",withdrawn:"Withdrawn",personalizedJobMatches:"Personalized Job Matches",jobMatchesDesc:"Discover opportunities tailored to your skills and preferences",apply:"Apply",save:"Save",viewDetails:"View Details",followUp:"Follow Up",withdraw:"Withdraw",acceptOffer:"Accept Offer",close:"Close",edit:"Edit",cancel:"Cancel",submit:"Submit"},hindi:{dashboard:"डैशबोर्ड",jobMatches:"जॉब मैच",applications:"आवेदन",toolkit:"टूलकिट",jobController:"जॉब कंट्रोलर",profile:"प्रोफाइल",hello:"नमस्ते",ready:"अपने करियर को तेज़ी से बढ़ाने के लिए तैयार हैं? यहाँ आपका व्यक्तिगत जॉब सर्च डैशबोर्ड है।",today:"आज",yourActivity:"आपकी गतिविधि",jobsSearched:"जॉब्स खोजे गए",applicationsSent:"आवेदन भेजे गए",interviews:"इंटरव्यू",thisWeek:"इस सप्ताह",newMatches:"नए मैच",upcoming:"आगामी",recentActivities:"हाल की गतिविधियाँ",viewAll:"सभी देखें",applied:"आवेदन किया",matched:"मैच किया",interview:"इंटरव्यू",searched:"खोजा",track:"ट्रैक करें",applyNow:"अभी आवेदन करें",prepare:"तैयारी करें",viewResults:"परिणाम देखें",quickActions:"त्वरित कार्य",updateProfile:"प्रोफाइल अपडेट करें",updateProfileDesc:"अपनी प्रोफाइल को ताज़ा रखें और बेहतर अवसर आकर्षित करें",careerTools:"करियर टूल्स",careerToolsDesc:"रिज्यूमे बिल्डर, इंटरव्यू की तैयारी, और स्किल असेसमेंट",jobSearch:"जॉब सर्च",jobSearchDesc:"नए अवसर खोजें और अपने आवेदनों को ट्रैक करें",myJobApplications:"मेरे जॉब आवेदन",trackApplications:"अपने सभी जॉब आवेदनों और उनकी वर्तमान स्थिति को ट्रैक करें",totalApplications:"कुल आवेदन",underReview:"समीक्षाधीन",offers:"ऑफर",filterByStatus:"स्थिति के अनुसार फ़िल्टर करें:",sortBy:"इसके अनुसार क्रमबद्ध करें:",applicationDate:"आवेदन तिथि",companyName:"कंपनी का नाम",position:"पद",status:"स्थिति",allApplications:"सभी आवेदन",interviewScheduled:"इंटरव्यू निर्धारित",offerReceived:"ऑफर प्राप्त",rejected:"अस्वीकृत",withdrawn:"वापस लिया गया",personalizedJobMatches:"व्यक्तिगत जॉब मैच",jobMatchesDesc:"आपके कौशल और प्राथमिकताओं के अनुरूप अवसर खोजें",apply:"आवेदन करें",save:"सेव करें",viewDetails:"विवरण देखें",followUp:"फॉलो अप",withdraw:"वापस लें",acceptOffer:"ऑफर स्वीकार करें",close:"बंद करें",edit:"संपादित करें",cancel:"रद्द करें",submit:"जमा करें"},gujarati:{dashboard:"ડેશબોર્ડ",jobMatches:"જોબ મેચ",applications:"અરજીઓ",toolkit:"ટૂલકિટ",jobController:"જોબ કંટ્રોલર",profile:"પ્રોફાઇલ",hello:"નમસ્તે",ready:"તમારી કારકિર્દીને ઝડપથી આગળ વધારવા માટે તૈયાર છો? અહીં તમારું વ્યક્તિગત જોબ સર્ચ ડેશબોર્ડ છે।",today:"આજે",yourActivity:"તમારી પ્રવૃત્તિ",jobsSearched:"જોબ્સ શોધ્યા",applicationsSent:"અરજીઓ મોકલેલ",interviews:"ઇન્ટરવ્યુ",thisWeek:"આ અઠવાડિયે",newMatches:"નવા મેચ",upcoming:"આગામી",recentActivities:"તાજેતરની પ્રવૃત્તિઓ",viewAll:"બધું જુઓ",applied:"અરજી કરી",matched:"મેચ થયો",interview:"ઇન્ટરવ્યુ",searched:"શોધ્યું",track:"ટ્રેક કરો",applyNow:"હવે અરજી કરો",prepare:"તૈયારી કરો",viewResults:"પરિણામો જુઓ",quickActions:"ઝડપી ક્રિયાઓ",updateProfile:"પ્રોફાઇલ અપડેટ કરો",updateProfileDesc:"તમારી પ્રોફાઇલને તાજી રાખો અને વધુ સારી તકો આકર્ષિત કરો",careerTools:"કારકિર્દી ટૂલ્સ",careerToolsDesc:"રિઝ્યુમે બિલ્ડર, ઇન્ટરવ્યુ તૈયારી, અને કુશળતા મૂલ્યાંકન",jobSearch:"જોબ સર્ચ",jobSearchDesc:"નવી તકો શોધો અને તમારી અરજીઓને ટ્રેક કરો",myJobApplications:"મારી જોબ અરજીઓ",trackApplications:"તમારી બધી જોબ અરજીઓ અને તેમની વર્તમાન સ્થિતિને ટ્રેક કરો",totalApplications:"કુલ અરજીઓ",underReview:"સમીક્ષા હેઠળ",offers:"ઓફર",filterByStatus:"સ્થિતિ અનુસાર ફિલ્ટર કરો:",sortBy:"આના અનુસાર ક્રમ કરો:",applicationDate:"અરજી તારીખ",companyName:"કંપનીનું નામ",position:"પદ",status:"સ્થિતિ",allApplications:"બધી અરજીઓ",interviewScheduled:"ઇન્ટરવ્યુ નિર્ધારિત",offerReceived:"ઓફર મળ્યો",rejected:"નકારાયું",withdrawn:"પાછી ખેંચી",personalizedJobMatches:"વ્યક્તિગત જોબ મેચ",jobMatchesDesc:"તમારી કુશળતા અને પસંદગીઓ અનુસાર તકો શોધો",apply:"અરજી કરો",save:"સેવ કરો",viewDetails:"વિગતો જુઓ",followUp:"ફોલો અપ",withdraw:"પાછી ખેંચો",acceptOffer:"ઓફર સ્વીકારો",close:"બંધ કરો",edit:"સંપાદિત કરો",cancel:"રદ કરો",submit:"સબમિટ કરો"}};function au({children:T}){const[_,p]=X.useState("english");X.useEffect(()=>{const a=localStorage.getItem("language")||"english";p(a);const u=y=>{p(y.detail)};return window.addEventListener("languageChange",u),()=>window.removeEventListener("languageChange",u)},[]);const m=a=>Oc[_]?.[a]||Oc.english[a]||a;return t.jsx(Hc.Provider,{value:{t:m,language:_,setLanguage:p},children:T})}function lu(){const T=X.useContext(Hc);if(!T)throw new Error("useTranslation must be used within a TranslationProvider");return T}function cu({activeCategory:T="all",setActiveCategory:_,onNavigateBack:p}){const[m,a]=X.useState("all"),u=T||m,y=[{id:"resume-builder",name:"Resume Builder",description:"Create ATS-friendly resumes with professional templates",icon:"📄",category:"Documents"}],M=v=>{if(console.log(`Navigating to ${v}`),v==="resume-builder"){const P=new CustomEvent("navigate",{detail:{page:"resume-templates"}});window.dispatchEvent(P)}else{if(v==="interview-prep"){const P=new CustomEvent("navigate",{detail:{page:"error-page",featureName:"Interview Preparation"}});window.dispatchEvent(P);return}alert(`Navigating to ${v} page`)}},I=u==="all"?y:y.filter(v=>v.category.toLowerCase()===u.toLowerCase());return t.jsx("div",{className:"toolkit",children:t.jsx("div",{className:"toolkit-content",children:t.jsx("div",{className:"toolkit-cards-container",children:t.jsx("div",{className:"tools-grid",children:I.map(v=>t.jsxs("button",{className:"tool-card",onClick:()=>M(v.id),children:[t.jsx("div",{className:"tool-card-icon",children:v.icon}),t.jsxs("div",{className:"tool-card-content",children:[t.jsx("h3",{children:v.name}),t.jsx("p",{children:v.description}),t.jsx("span",{className:"tool-category",children:v.category})]})]},v.id))})})})})}const ra=({job:T,onToggleLike:_,onApply:p,showMatchScore:m=!0,showHeart:a=!0,showSource:u=!0,variant:y="default"})=>{const M=v=>{const P=new Date(v),L=Math.abs(new Date-P),Z=Math.ceil(L/(1e3*60*60*24));return Z===1?"1 day ago":Z<7?`${Z} days ago`:Z<30?`${Math.ceil(Z/7)} weeks ago`:`${Math.ceil(Z/30)} months ago`},I=()=>{p?p(T):window.open(T.applyUrl||"#","_blank")};return t.jsxs("div",{className:"universal-job-card",style:{background:"#ffffff",border:"1px solid #d1d5db",borderRadius:"8px",padding:"1.25rem",transition:"all 0.2s ease",display:"flex",flexDirection:"column",height:"100%",position:"relative"},children:[t.jsxs("div",{className:"job-header",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.5rem"},children:[t.jsx("h3",{style:{margin:"0",fontSize:"1.1rem",fontWeight:"600",color:"#111827",lineHeight:"1.4"},children:T.title||T.position}),(a||m)&&t.jsxs("div",{style:{display:"flex",border:"1px solid #d1d5db",borderRadius:"8px",overflow:"hidden",marginLeft:"auto"},children:[a&&t.jsx("button",{className:`heart-btn ${T.isLiked?"liked":""}`,onClick:()=>_&&_(T.id),"aria-label":T.isLiked?"Remove from wishlist":"Add to wishlist",style:{background:"none",border:"none",fontSize:"1rem",cursor:"pointer",padding:"0.25rem 0.75rem",color:T.isLiked?"#ef4444":"#9ca3af",borderRight:m?"1px solid #d1d5db":"none",display:"flex",alignItems:"center",height:"32px"},children:"♥"}),m&&t.jsx("button",{className:"match-score-btn",style:{background:"none",border:"none",fontSize:"0.95rem",color:"#10b981",padding:"0.25rem 0.75rem",display:"flex",alignItems:"center",height:"32px",fontWeight:"500"},"aria-label":"Match score",children:T.matchScore?`${T.matchScore}% Match`:"Match Score"})]})]}),t.jsx("p",{style:{margin:"0 0 0.75rem 0",fontSize:"0.95rem",fontWeight:"500",color:"#4b5563"},children:T.company}),t.jsxs("div",{style:{marginBottom:"1rem",fontSize:"0.85rem",color:"#6b7280",display:"flex",flexDirection:"column",gap:"0.25rem"},children:[t.jsx("span",{children:T.location}),t.jsx("span",{children:M(T.postedDate||T.appliedDate)})]}),T.tags&&T.tags.length>0&&t.jsxs("div",{className:"job-tags",style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginBottom:"1rem"},children:[T.tags.slice(0,3).map((v,P)=>t.jsx("span",{style:{background:"#f3f4f6",color:"#374151",padding:"0.25rem 0.5rem",borderRadius:"50px",fontSize:"0.75rem",fontWeight:"500"},children:v},P)),T.tags.length>3&&t.jsxs("span",{style:{background:"#f3f4f6",color:"#6b7280",padding:"0.25rem 0.5rem",borderRadius:"50px",fontSize:"0.75rem"},children:["+",T.tags.length-3]})]}),y==="application"&&T.appliedDate&&t.jsxs("div",{style:{background:"#f9fafb",padding:"0.75rem",borderRadius:"6px",marginBottom:"1rem",border:"1px solid #e5e7eb"},children:[t.jsxs("div",{style:{fontSize:"0.85rem",color:"#6b7280"},children:[t.jsx("span",{style:{fontWeight:"500"},children:"Applied:"})," ",new Date(T.appliedDate).toLocaleDateString()," (",M(T.appliedDate),")"]}),T.salary&&t.jsxs("div",{style:{fontSize:"0.85rem",color:"#6b7280",marginTop:"0.25rem"},children:[t.jsx("span",{style:{fontWeight:"500"},children:"Salary:"})," ",T.salary]})]}),T.description&&t.jsx("div",{style:{marginBottom:"1.25rem",flex:1},children:t.jsx("p",{style:{margin:0,fontSize:"0.875rem",lineHeight:"1.5",color:"#6b7280",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"},children:T.description})}),t.jsx("div",{className:"job-actions",style:{display:"flex",marginBottom:"0.75rem"},children:t.jsx("button",{onClick:I,style:{background:y==="application"?"#10b981":"rgba(17, 24, 39, 0.1)",color:y==="application"?"#ffffff":"#111827",border:"1px solid #d1d5db",padding:"0.75rem 1rem",borderRadius:"6px",fontSize:"0.95rem",fontWeight:"500",cursor:"pointer",width:"100%",height:"44px"},children:y==="application"?"View Application":"Apply"})}),u&&t.jsx("div",{style:{borderTop:"1px solid #f3f4f6",paddingTop:"0.75rem",textAlign:"center"},children:t.jsxs("span",{style:{fontSize:"0.75rem",color:"#9ca3af",fontWeight:"500"},children:["via ",T.source||T.applicationMethod||"Company Website"]})})]})};function du({activeTab:T="search",setActiveTab:_,onNavigateBack:p}){const[m,a]=X.useState("search"),u=T||m,y=_||a,[M,I]=X.useState(null);X.useEffect(()=>{const Y=ue=>{ue.target.closest(".custom-dropdown")||document.querySelectorAll('[id^="dropdown-"]').forEach(ce=>{ce.style.display="none";const me=ce.previousElementSibling;me&&me.setAttribute("aria-expanded","false")})},J=ue=>{ue.key==="Escape"&&document.querySelectorAll('[id^="dropdown-"]').forEach(ce=>{ce.style.display="none";const me=ce.previousElementSibling;me&&(me.setAttribute("aria-expanded","false"),me.focus())})};return document.addEventListener("click",Y),document.addEventListener("keydown",J),()=>{document.removeEventListener("click",Y),document.removeEventListener("keydown",J)}},[]);const v=Y=>{document.querySelectorAll('[id^="dropdown-"]').forEach(ce=>{if(ce.id!==`dropdown-${Y}`){ce.style.display="none";const me=ce.previousElementSibling;me&&me.setAttribute("aria-expanded","false")}});const J=document.getElementById(`dropdown-${Y}`),ue=J?J.previousElementSibling:null;J&&ue&&(J.style.display==="block"?(J.style.display="none",ue.setAttribute("aria-expanded","false")):(J.style.display="block",J.style.opacity="1",J.style.visibility="visible",J.style.zIndex="9999",J.style.position="absolute",J.style.top="100%",J.style.left="0",J.style.right="0",ue.setAttribute("aria-expanded","true"),[J.closest(".filter-options-container"),J.closest(".search-controls"),J.closest(".job-search-section"),J.closest(".tab-content"),J.closest(".job-controller")].forEach(le=>{le&&(le.style.overflow="visible",le.style.zIndex="auto")}),J.querySelectorAll(".dropdown-item").forEach(le=>{le.style.display="block",le.style.visibility="visible"}),setTimeout(()=>{const le=J.querySelector(".dropdown-item");le&&le.focus()},100)))},[P,q]=X.useState([{id:1,company:"DevCompany",position:"Senior Frontend Developer",location:"New York, NY",type:"Full-time",postedDate:"2025-09-03",match:"95%",description:"Looking for an experienced React developer to join our growing team. Work with modern technologies and build scalable web applications.",source:"LinkedIn",isLiked:!0,tags:["Full-time","Remote","Start Immediate","3+ Years Experience","React","TypeScript"]},{id:2,company:"WebSolutions",position:"React Native Developer",location:"Los Angeles, CA",type:"Contract",postedDate:"2025-09-04",match:"88%",description:"Build cross-platform mobile applications using React Native. Experience with iOS and Android development preferred.",source:"Indeed",isLiked:!0,tags:["Contract","Part-time","Remote","Immediate Start","Mobile","React Native"]},{id:3,company:"TechStartup",position:"JavaScript Developer",location:"Remote",type:"Full-time",postedDate:"2025-09-02",match:"92%",description:"Join our innovative startup building cutting-edge web applications. Strong JavaScript and Node.js skills required.",source:"Glassdoor",isLiked:!0,tags:["Full-time","Remote","Trainership","Fresher Friendly","Node.js","Startup"]},{id:4,company:"InnovateCorp",position:"Frontend Intern",location:"San Francisco, CA",type:"Internship",postedDate:"2025-09-04",match:"85%",description:"Perfect opportunity for students and fresh graduates to gain hands-on experience in frontend development.",source:"AngelList",isLiked:!0,tags:["Internship","Fresher","Part-time","Learning Opportunity","HTML/CSS","JavaScript"]}]),L=Y=>{q(J=>J.map(ue=>ue.id===Y?{...ue,isLiked:!ue.isLiked}:ue).filter(ue=>ue.isLiked))},Z=()=>t.jsxs("div",{className:"saved-jobs-section",children:[t.jsx("div",{className:"section-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem",flexWrap:"wrap",gap:"1rem"},children:t.jsxs("h2",{style:{display:"flex",alignItems:"center",gap:"0.5rem",justifyContent:"center",textAlign:"center",fontSize:"1.65em",width:"100%"},children:[t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{verticalAlign:"middle"},children:t.jsx("path",{d:"M12 20.5C12 20.5 4 13.5 4 8.5C4 5.5 6.5 4 8.5 4C10 4 12 5.5 12 7C12 5.5 14 4 15.5 4C17.5 4 20 5.5 20 8.5C20 13.5 12 20.5 12 20.5Z",stroke:"#FF7F50",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})}),"Liked Jobs"]})}),t.jsx("div",{className:"saved-jobs-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1rem"},children:P.filter(Y=>Y.isLiked).map(Y=>t.jsx(ra,{job:Y,onToggleLike:L,showMatchScore:!0,showHeart:!0,showSource:!0,variant:"saved"},Y.id))})]}),ee=()=>t.jsxs("div",{className:"job-search-section",children:[t.jsx("div",{className:"section-header",children:t.jsxs("h2",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[t.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{verticalAlign:"middle"},children:[t.jsx("circle",{cx:"11",cy:"11",r:"8"}),t.jsx("path",{d:"m21 21-4.35-4.35"})]}),"Search Work"]})}),t.jsxs("div",{className:"search-controls",children:[t.jsxs("div",{className:"search-form",children:[t.jsxs("div",{className:"search-inputs-container",children:[t.jsx("input",{type:"text",placeholder:"Job title, keywords, or company",className:"search-input"}),t.jsx("input",{type:"text",placeholder:"Location",className:"location-input"})]}),t.jsxs("div",{className:"search-btns-group",children:[t.jsx("button",{className:"search-btn compound-main",children:t.jsx("div",{className:"btn-icon-container",children:t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"11",cy:"11",r:"8"}),t.jsx("path",{d:"m21 21-4.35-4.35"})]})})}),t.jsx("button",{className:"liked-btn compound-side",onClick:()=>y("saved"),children:t.jsx("div",{className:"btn-icon-container",children:t.jsx("span",{className:"heart-icon",children:"❤"})})})]})]}),t.jsxs("div",{className:"filter-options-container",children:[t.jsxs("div",{className:"custom-dropdown",children:[t.jsxs("div",{className:"dropdown-selected",onClick:()=>v("job-type"),onKeyDown:Y=>Y.key==="Enter"&&v("job-type"),tabIndex:"0",role:"button","aria-expanded":"false","aria-haspopup":"listbox","aria-label":"Select job type",children:["Job Type",t.jsx("div",{className:"dropdown-arrow"})]}),t.jsxs("div",{id:"dropdown-job-type",className:"dropdown-menu",role:"listbox","aria-label":"Job type options",children:[t.jsx("div",{className:"dropdown-item",role:"option",tabIndex:"0",onClick:()=>{document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent="Full-time",document.querySelector("#dropdown-job-type").style.display="none",document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded","false")},onKeyDown:Y=>{Y.key==="Enter"&&(document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent="Full-time",document.querySelector("#dropdown-job-type").style.display="none",document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded","false"))},children:"Full-time"}),t.jsx("div",{className:"dropdown-item",role:"option",tabIndex:"0",onClick:()=>{document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent="Part-time",document.querySelector("#dropdown-job-type").style.display="none",document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded","false")},onKeyDown:Y=>{Y.key==="Enter"&&(document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent="Part-time",document.querySelector("#dropdown-job-type").style.display="none",document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded","false"))},children:"Part-time"}),t.jsx("div",{className:"dropdown-item",role:"option",tabIndex:"0",onClick:()=>{document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent="Contract",document.querySelector("#dropdown-job-type").style.display="none",document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded","false")},onKeyDown:Y=>{Y.key==="Enter"&&(document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent="Contract",document.querySelector("#dropdown-job-type").style.display="none",document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded","false"))},children:"Contract"}),t.jsx("div",{className:"dropdown-item",role:"option",tabIndex:"0",onClick:()=>{document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent="Remote",document.querySelector("#dropdown-job-type").style.display="none",document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded","false")},onKeyDown:Y=>{Y.key==="Enter"&&(document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent="Remote",document.querySelector("#dropdown-job-type").style.display="none",document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded","false"))},children:"Remote"})]})]}),t.jsxs("div",{className:"custom-dropdown",children:[t.jsxs("div",{className:"dropdown-selected",onClick:()=>v("experience"),onKeyDown:Y=>Y.key==="Enter"&&v("experience"),tabIndex:"0",role:"button","aria-expanded":"false","aria-haspopup":"listbox","aria-label":"Select experience level",children:["Experience Level",t.jsx("div",{className:"dropdown-arrow"})]}),t.jsxs("div",{id:"dropdown-experience",className:"dropdown-menu",children:[t.jsx("div",{className:"dropdown-item",onClick:()=>{document.querySelector("#dropdown-experience").previousElementSibling.firstChild.textContent="Entry Level",document.querySelector("#dropdown-experience").style.display="none"},children:"Entry Level"}),t.jsx("div",{className:"dropdown-item",onClick:()=>{document.querySelector("#dropdown-experience").previousElementSibling.firstChild.textContent="Mid Level",document.querySelector("#dropdown-experience").style.display="none"},children:"Mid Level"}),t.jsx("div",{className:"dropdown-item",onClick:()=>{document.querySelector("#dropdown-experience").previousElementSibling.firstChild.textContent="Senior Level",document.querySelector("#dropdown-experience").style.display="none"},children:"Senior Level"}),t.jsx("div",{className:"dropdown-item",onClick:()=>{document.querySelector("#dropdown-experience").previousElementSibling.firstChild.textContent="Executive",document.querySelector("#dropdown-experience").style.display="none"},children:"Executive"})]})]}),t.jsxs("div",{className:"custom-dropdown",children:[t.jsxs("div",{className:"dropdown-selected",onClick:()=>v("salary"),onKeyDown:Y=>Y.key==="Enter"&&v("salary"),tabIndex:"0",role:"button","aria-expanded":"false","aria-haspopup":"listbox","aria-label":"Select salary range",children:["Salary Range",t.jsx("div",{className:"dropdown-arrow"})]}),t.jsxs("div",{id:"dropdown-salary",className:"dropdown-menu",children:[t.jsx("div",{className:"dropdown-item",onClick:()=>{document.querySelector("#dropdown-salary").previousElementSibling.firstChild.textContent="$40,000 - $60,000",document.querySelector("#dropdown-salary").style.display="none"},children:"$40,000 - $60,000"}),t.jsx("div",{className:"dropdown-item",onClick:()=>{document.querySelector("#dropdown-salary").previousElementSibling.firstChild.textContent="$60,000 - $80,000",document.querySelector("#dropdown-salary").style.display="none"},children:"$60,000 - $80,000"}),t.jsx("div",{className:"dropdown-item",onClick:()=>{document.querySelector("#dropdown-salary").previousElementSibling.firstChild.textContent="$80,000 - $100,000",document.querySelector("#dropdown-salary").style.display="none"},children:"$80,000 - $100,000"}),t.jsx("div",{className:"dropdown-item",onClick:()=>{document.querySelector("#dropdown-salary").previousElementSibling.firstChild.textContent="$100,000+",document.querySelector("#dropdown-salary").style.display="none"},children:"$100,000+"})]})]})]})]}),t.jsx("div",{className:"search-results",children:t.jsx("p",{children:"Use the search form above to find new job opportunities that match your profile."})})]}),K=()=>t.jsxs("div",{className:"analytics-section",children:[t.jsx("div",{className:"section-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2rem",flexWrap:"wrap",gap:"1rem"},children:t.jsx("h2",{children:"📊 Job Search Analytics"})}),t.jsxs("div",{className:"analytics-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:"1.5rem"},children:[t.jsxs("div",{className:"metric-card",style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"12px",padding:"1.5rem",textAlign:"center",transition:"all 0.3s ease"},children:[t.jsx("h3",{children:"Jobs Searched"}),t.jsx("div",{className:"metric-value",children:"128"}),t.jsx("p",{children:"Total job search queries made"})]}),t.jsxs("div",{className:"metric-card",style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"12px",padding:"1.5rem",textAlign:"center",transition:"all 0.3s ease"},children:[t.jsx("h3",{children:"Jobs Applied"}),t.jsx("div",{className:"metric-value",children:"46"}),t.jsx("p",{children:"Applications submitted from your account"})]}),t.jsxs("div",{className:"metric-card",style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"12px",padding:"1.5rem",textAlign:"center",transition:"all 0.3s ease"},children:[t.jsx("h3",{children:"Most Applied Platform"}),t.jsx("div",{className:"metric-value",children:"LinkedIn"}),t.jsx("p",{children:"Platform with the highest number of applications"})]}),t.jsxs("div",{className:"metric-card",style:{background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"12px",padding:"1.5rem",textAlign:"center",transition:"all 0.3s ease"},children:[t.jsx("h3",{children:"Active Time"}),t.jsx("div",{className:"metric-value",children:"3h 12m"}),t.jsx("p",{children:"Time spent actively searching / applying"})]})]})]});return t.jsx("div",{className:"job-controller",style:{maxWidth:"1400px",margin:"0 auto"},children:t.jsxs("div",{className:"jobcontroller-content",children:[u!=="search"&&t.jsx("div",{className:"top-bar",children:t.jsx("button",{className:"back-btn",onClick:()=>y("search"),"aria-label":"Go back",title:"Go back",children:"← Back"})}),t.jsxs("div",{className:"tab-content",style:{background:"white",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)",padding:"2rem",minHeight:"500px"},children:[u==="search"&&ee(),u==="saved"&&Z(),u==="analytics"&&K()]})]})})}function pu({userEmail:T,activeSection:_="personal",setActiveSection:p,onNavigateBack:m}){const[a,u]=X.useState("personal"),y=_||a,M=p||u,I=()=>{try{const b=localStorage.getItem("userProfileData");if(b)return JSON.parse(b)}catch(b){console.error("Error loading saved profile data:",b)}return{personalInfo:{fullName:"John Doe",email:T||"john.doe@email.com",phone:"+1 (555) 123-4567",location:"San Francisco, CA",linkedin:"linkedin.com/in/johndoe",github:"github.com/johndoe",website:"johndoe.dev",aboutMe:""},experience:[{id:1,title:"Frontend Developer",company:"TechCorp Inc.",duration:"Jan 2023 - Present",description:"Developed responsive web applications using React and TypeScript"},{id:2,title:"Junior Developer",company:"StartupXYZ",duration:"Jun 2021 - Dec 2022",description:"Built user interfaces and collaborated with backend team"}],education:[{id:1,degree:"Bachelor of Science in Computer Science",school:"University of California, Berkeley",year:"2021",gpa:"3.7/4.0"}],skills:["React","JavaScript","TypeScript","HTML/CSS","Node.js","Python","Git","MongoDB","PostgreSQL","AWS"],achievements:[{id:1,title:"Employee of the Month",description:"Recognized for outstanding performance and leadership in Q3 2023",date:"2023-09",category:"Work",image:null},{id:2,title:"Full Stack Web Development Certificate",description:"Completed comprehensive web development bootcamp with 95% score",date:"2022-12",category:"Education",image:null}]}},[v,P]=X.useState(I()),[q,L]=X.useState(""),[Z,ee]=X.useState(!1),[K,Y]=X.useState([]),[J,ue]=X.useState({personal:!1,experience:!1,education:!1,skills:!1,otherSkills:!1,achievements:!1}),[ce,me]=X.useState(["Figma","Photoshop","Illustrator"]),[ge,le]=X.useState(""),ye=b=>{const F=(b||"").trim();F&&me(G=>G.includes(F)?G:[...G,F])},je=b=>{me(F=>F.filter(G=>G!==b))},[he,we]=X.useState({}),[V,Q]=X.useState(!1),[N,S]=X.useState({title:"",description:"",date:"",category:"Work",image:null}),[A,j]=X.useState({}),[R,C]=X.useState(!1),[B,h]=X.useState({title:"",company:"",duration:"",description:""}),[l,c]=X.useState({}),[f,w]=X.useState(!1),[$,te]=X.useState({degree:"",school:"",startYear:"",endYear:"",gpa:""}),[ae,xe]=X.useState({}),[Ce,We]=X.useState(!1),[st,Pn]=X.useState(null),[Tn,hn]=X.useState(!1),[vt,zn]=X.useState(null),oi=["React","Vue.js","Angular","JavaScript","TypeScript","Python","Java","C++","C#","PHP","Node.js","Express.js","Django","Flask","Spring Boot","Ruby on Rails","Laravel","ASP.NET","HTML","CSS","SASS","SCSS","Tailwind CSS","Bootstrap","Material-UI","Chakra UI","MongoDB","PostgreSQL","MySQL","Redis","Firebase","SQLite","Oracle","SQL Server","AWS","Azure","Google Cloud","Docker","Kubernetes","Jenkins","Git","GitHub","GitLab","Linux","Ubuntu","Windows Server","Apache","Nginx","REST APIs","GraphQL","WebSockets","React Native","Flutter","Ionic","Xamarin","Swift","Kotlin","Objective-C","Machine Learning","AI","Data Science","TensorFlow","PyTorch","Pandas","NumPy","Scikit-learn","Cybersecurity","Penetration Testing","Network Security","Cryptography","Blockchain","Web3","DevOps","CI/CD","Terraform","Ansible","Monitoring","Logging","Microservices","Serverless"],Ki=["Communication","Leadership","Teamwork","Problem Solving","Critical Thinking","Creativity","Adaptability","Time Management","Organization","Attention to Detail","Work Ethic","Reliability","Emotional Intelligence","Conflict Resolution","Negotiation","Public Speaking","Presentation Skills","Customer Service","Mentoring","Coaching","Project Management","Agile Methodology","Scrum","Collaboration","Cross-functional Teams","Remote Work","Cultural Awareness","Diversity & Inclusion","Continuous Learning","Self-motivation","Resilience","Stress Management","Decision Making","Strategic Planning","Risk Management","Quality Assurance","Process Improvement","Innovation","Analytical Thinking","Research Skills","Data Analysis","Reporting","Documentation","Client Relations","Stakeholder Management","Budget Management","Resource Allocation"],ai=[...oi,...Ki],fn=b=>{const F=b.target.value;if(L(F),F.length>0){const G=ai.filter(Ne=>Ne.toLowerCase().includes(F.toLowerCase())&&!v.skills.includes(Ne));Y(G.slice(0,8)),ee(!0)}else ee(!1)},Et=b=>{const F=b||q.trim();if(F&&!v.skills.includes(F)){const G={...v,skills:[...v.skills,F]};P(G);try{localStorage.setItem("userProfileData",JSON.stringify(G)),window.dispatchEvent(new CustomEvent("profileUpdated"))}catch(Ne){console.error("Error saving skills:",Ne)}L(""),ee(!1)}},In=b=>{const F={...v,skills:v.skills.filter(G=>G!==b)};P(F);try{localStorage.setItem("userProfileData",JSON.stringify(F)),window.dispatchEvent(new CustomEvent("profileUpdated"))}catch(G){console.error("Error saving skills:",G)}},Xi=b=>{Et(b)},Zi=()=>{const b=tr();if(Object.keys(b).length>0){j(b);return}const F={id:Date.now(),title:N.title.trim(),description:N.description.trim(),date:N.date,category:N.category,image:N.image};P(G=>({...G,achievements:[...G.achievements,F]})),S({title:"",description:"",date:"",category:"Work",image:null}),j({}),Q(!1)},er=b=>{P(F=>({...F,achievements:F.achievements.filter(G=>G.id!==b)}))},tr=()=>{const b={};return N.title.trim()||(b.title="Title is required"),N.description.trim()||(b.description="Description is required"),N.date||(b.date="Date is required"),b},Ht=(b,F)=>{S(G=>({...G,[b]:F})),A[b]&&j(G=>({...G,[b]:""}))},Rn=b=>{const F=b.target.files[0];if(F){const G=new FileReader;G.onload=Ne=>{S(Ue=>({...Ue,image:Ne.target.result}))},G.readAsDataURL(F)}},li=()=>{S({title:"",description:"",date:"",category:"Work",image:null}),j({}),Q(!1)},pt=b=>{ue(F=>({...F,[b]:!F[b]}))},Xe=(b,F)=>{P(G=>({...G,personalInfo:{...G.personalInfo,[b]:F}})),hs(b,F)},hs=(b,F)=>{let G="";if(["fullName","email","phone","location","linkedin"].includes(b)&&(!F||F.trim()==="")&&(G=`${b.charAt(0).toUpperCase()+b.slice(1).replace(/([A-Z])/g," $1")} is required`),F&&F.trim()!=="")switch(b){case"email":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(F)||(G="Please enter a valid email address");break;case"phone":const Mn=/^[\+]?[1-9][\d]{0,15}$/,ar=F.replace(/[\s\-\(\)]/g,"");Mn.test(ar)||(G="Please enter a valid phone number");break;case"linkedin":case"github":case"website":try{new URL(F.startsWith("http")?F:"https://"+F)}catch{G="Please enter a valid URL"}break}we(Ue=>({...Ue,[b]:G}))},nr=()=>{const b={fullName:"Full Name",email:"Email",phone:"Phone",location:"Location",linkedin:"LinkedIn"},F=[],G=[];Object.keys(b).forEach(ot=>{const yt=v.personalInfo[ot];(!yt||yt.trim()==="")&&F.push(b[ot])});const Ne=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;v.personalInfo.email&&!Ne.test(v.personalInfo.email)&&G.push("Email format is invalid");const Ue=/^[\+]?[1-9][\d]{0,15}$/,Mn=v.personalInfo.phone.replace(/[\s\-\(\)]/g,"");if(v.personalInfo.phone&&!Ue.test(Mn)&&G.push("Phone number format is invalid"),v.personalInfo.linkedin&&v.personalInfo.linkedin.trim()!=="")try{new URL(v.personalInfo.linkedin.startsWith("http")?v.personalInfo.linkedin:"https://"+v.personalInfo.linkedin)}catch{G.push("LinkedIn URL format is invalid")}if(["github","website"].forEach(ot=>{const yt=v.personalInfo[ot];if(yt&&yt.trim()!=="")try{new URL(yt.startsWith("http")?yt:"https://"+yt)}catch{G.push(`${ot.charAt(0).toUpperCase()+ot.slice(1)} URL format is invalid`)}}),F.length>0){alert(`Please fill in the following required fields:
• ${F.join(`
• `)}`);return}if(G.length>0){alert(`Please correct the following issues:
• ${G.join(`
• `)}`);return}try{localStorage.setItem("userProfileData",JSON.stringify(v)),window.dispatchEvent(new CustomEvent("profileUpdated")),console.log("Profile data saved to localStorage:",v)}catch(ot){console.error("Error saving profile data:",ot)}ue(ot=>({...ot,personal:!1})),alert("Personal information saved successfully!")},ir=()=>{C(!0)},fs=()=>{w(!0)},qt=(b,F)=>{h(G=>({...G,[b]:F})),l[b]&&c(G=>({...G,[b]:""}))},Rt=(b,F)=>{te(G=>({...G,[b]:F})),ae[b]&&xe(G=>({...G,[b]:""}))},ci=()=>{const b={},F={title:"Job Role/Title",company:"Company/Firm Name",duration:"Duration",description:"Work Description"};return Object.keys(F).forEach(G=>{(!B[G]||B[G].trim()==="")&&(b[G]=`${F[G]} is required`)}),b},di=()=>{const b={},F={degree:"Course Name",school:"University Name",startYear:"Start Year",endYear:"End Year",gpa:"CGPA"};if(Object.keys(F).forEach(G=>{(!$[G]||$[G].trim()==="")&&(b[G]=`${F[G]} is required`)}),$.startYear&&$.endYear){const G=parseInt($.startYear),Ne=parseInt($.endYear);G>=Ne&&(b.endYear="End year must be after start year")}if($.gpa){const G=parseFloat($.gpa);(isNaN(G)||G<0||G>10)&&(b.gpa="CGPA must be a number between 0 and 10")}return b},pi=()=>{const b=ci();if(Object.keys(b).length>0){c(b);return}const F={id:Date.now(),title:B.title.trim(),company:B.company.trim(),duration:B.duration.trim(),description:B.description.trim()},G={...v,experience:[...v.experience,F]};P(G);try{localStorage.setItem("userProfileData",JSON.stringify(G)),window.dispatchEvent(new CustomEvent("profileUpdated"))}catch(Ne){console.error("Error saving experience:",Ne)}h({title:"",company:"",duration:"",description:""}),c({}),C(!1),alert("Experience added successfully!")},Yt=()=>{const b=di();if(Object.keys(b).length>0){xe(b);return}const F={id:Date.now(),degree:$.degree.trim(),school:$.school.trim(),year:`${$.startYear} - ${$.endYear}`,gpa:$.gpa.trim()},G={...v,education:[...v.education,F]};P(G);try{localStorage.setItem("userProfileData",JSON.stringify(G)),window.dispatchEvent(new CustomEvent("profileUpdated"))}catch(Ne){console.error("Error saving education:",Ne)}te({degree:"",school:"",startYear:"",endYear:"",gpa:""}),xe({}),w(!1),alert("Education added successfully!")},$t=()=>{h({title:"",company:"",duration:"",description:""}),c({}),C(!1)},ui=()=>{te({degree:"",school:"",startYear:"",endYear:"",gpa:""}),xe({}),w(!1)},rr=b=>{console.log("=== REMOVE EXPERIENCE DEBUG ==="),console.log("Experience ID to remove:",b);const F=v.experience.find(G=>G.id===b);console.log("Experience item found:",F),F?(zn(F),hn(!0)):alert("Experience not found!")},sr=()=>{vt&&(console.log("Confirming deletion of experience:",vt),P(b=>{const F=b.experience.filter(G=>G.id!==vt.id);return console.log("Updated experience after filter:",F),{...b,experience:F}}),hn(!1),zn(null),alert("Experience removed successfully!"))},mi=()=>{hn(!1),zn(null),console.log("Experience deletion cancelled")},or=b=>{console.log("=== REMOVE EDUCATION DEBUG ==="),console.log("Education ID to remove:",b);const F=v.education.find(G=>G.id===b);console.log("Education item found:",F),F?(Pn(F),We(!0)):alert("Education not found!")},hi=()=>{st&&(console.log("Confirming deletion of education:",st),P(b=>{const F=b.education.filter(G=>G.id!==st.id);return console.log("Updated education after filter:",F),{...b,education:F}}),We(!1),Pn(null),alert("Education removed successfully!"))},fi=()=>{We(!1),Pn(null),console.log("Education deletion cancelled")},At=(b,F,G)=>{P(Ne=>({...Ne,education:Ne.education.map(Ue=>Ue.id===b?{...Ue,[F]:G}:Ue)}))},Jt=(b,F,G)=>{P(Ne=>({...Ne,experience:Ne.experience.map(Ue=>Ue.id===b?{...Ue,[F]:G}:Ue)}))},gn=()=>t.jsxs("div",{className:"profile-section",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("h3",{children:"👤 Personal Information"}),t.jsx("button",{className:"edit-btn",onClick:()=>J.personal?nr():pt("personal"),children:J.personal?"Save":"Edit"})]}),t.jsxs("div",{className:"personal-info-grid",children:[t.jsxs("div",{className:"info-field",children:[t.jsx("label",{children:"Full Name *"}),J.personal?t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"text",value:v.personalInfo.fullName,onChange:b=>Xe("fullName",b.target.value),className:`edit-input ${he.fullName?"error":""}`,required:!0}),he.fullName&&t.jsx("span",{className:"error-message",children:he.fullName})]}):t.jsx("p",{children:v.personalInfo.fullName})]}),t.jsxs("div",{className:"info-field",children:[t.jsx("label",{children:"Email *"}),J.personal?t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"email",value:v.personalInfo.email,onChange:b=>Xe("email",b.target.value),className:`edit-input ${he.email?"error":""}`,required:!0}),he.email&&t.jsx("span",{className:"error-message",children:he.email})]}):t.jsx("p",{children:v.personalInfo.email})]}),t.jsxs("div",{className:"info-field",children:[t.jsx("label",{children:"Phone *"}),J.personal?t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"tel",value:v.personalInfo.phone,onChange:b=>Xe("phone",b.target.value),className:`edit-input ${he.phone?"error":""}`,required:!0}),he.phone&&t.jsx("span",{className:"error-message",children:he.phone})]}):t.jsx("p",{children:v.personalInfo.phone})]}),t.jsxs("div",{className:"info-field",children:[t.jsx("label",{children:"Location *"}),J.personal?t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"text",value:v.personalInfo.location,onChange:b=>Xe("location",b.target.value),className:`edit-input ${he.location?"error":""}`,required:!0}),he.location&&t.jsx("span",{className:"error-message",children:he.location})]}):t.jsx("p",{children:v.personalInfo.location})]}),t.jsxs("div",{className:"info-field",children:[t.jsx("label",{children:"LinkedIn *"}),J.personal?t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"url",value:v.personalInfo.linkedin,onChange:b=>Xe("linkedin",b.target.value),className:`edit-input ${he.linkedin?"error":""}`,required:!0}),he.linkedin&&t.jsx("span",{className:"error-message",children:he.linkedin})]}):t.jsx("p",{children:v.personalInfo.linkedin})]}),t.jsxs("div",{className:"info-field",children:[t.jsxs("label",{children:["GitHub ",t.jsx("span",{className:"optional-label",children:"(Optional)"})]}),J.personal?t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"url",value:v.personalInfo.github,onChange:b=>Xe("github",b.target.value),className:`edit-input ${he.github?"error":""}`,placeholder:"github.com/yourprofile"}),he.github&&t.jsx("span",{className:"error-message",children:he.github})]}):t.jsx("p",{children:v.personalInfo.github})]}),t.jsxs("div",{className:"info-field",children:[t.jsxs("label",{children:["Website ",t.jsx("span",{className:"optional-label",children:"(Optional)"})]}),J.personal?t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"url",value:v.personalInfo.website,onChange:b=>Xe("website",b.target.value),className:`edit-input ${he.website?"error":""}`,placeholder:"yourwebsite.com"}),he.website&&t.jsx("span",{className:"error-message",children:he.website})]}):t.jsx("p",{children:v.personalInfo.website})]})]}),t.jsxs("div",{className:"about-me-field",children:[t.jsxs("label",{children:["About Me ",t.jsx("span",{className:"optional-label",children:"(Optional)"})]}),J.personal?t.jsx("textarea",{className:"edit-textarea about-me-input",value:v.personalInfo.aboutMe,onChange:b=>Xe("aboutMe",b.target.value),placeholder:"Write a short summary about yourself for your resume...",rows:8}):t.jsx("p",{className:"about-me-text",children:v.personalInfo.aboutMe?v.personalInfo.aboutMe.split(`
`).map((b,F)=>t.jsxs("span",{children:[b,t.jsx("br",{})]},F)):t.jsx("em",{children:"Add an About Me summary for your resume (optional)"})})]})]}),gs=()=>t.jsxs("div",{className:"profile-section",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("h3",{children:"💼 Work Experience"}),t.jsxs("div",{className:"section-actions",children:[t.jsx("button",{className:"add-btn",onClick:ir,children:"+ Add Experience"}),t.jsx("button",{className:"edit-btn",onClick:()=>pt("experience"),children:J.experience?"Save":"Edit"})]})]}),t.jsx("div",{className:"experience-list",children:v.experience.map(b=>t.jsxs("div",{className:"experience-item",children:[t.jsxs("div",{className:"experience-header",children:[J.experience?t.jsx("input",{type:"text",value:b.title,onChange:F=>Jt(b.id,"title",F.target.value),className:"edit-input title-input"}):t.jsx("h4",{children:b.title}),J.experience&&t.jsx("button",{className:"remove-btn-experience",onClick:()=>rr(b.id),children:"Remove"})]}),t.jsx("div",{className:"experience-details",children:J.experience?t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"text",value:b.company,onChange:F=>Jt(b.id,"company",F.target.value),className:"edit-input company-input",placeholder:"Company"}),t.jsx("input",{type:"text",value:b.duration,onChange:F=>Jt(b.id,"duration",F.target.value),className:"edit-input duration-input",placeholder:"Duration"}),t.jsx("textarea",{value:b.description,onChange:F=>Jt(b.id,"description",F.target.value),className:"edit-textarea",placeholder:"Description"})]}):t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"company",children:b.company}),t.jsx("p",{className:"duration",children:b.duration}),t.jsx("p",{className:"description",children:b.description})]})})]},b.id))})]}),xn=()=>t.jsxs("div",{className:"profile-section",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("h3",{children:"🎓 Education"}),t.jsxs("div",{className:"section-actions",children:[t.jsx("button",{className:"add-btn",onClick:fs,children:"+ Add Education"}),t.jsx("button",{className:"edit-btn",onClick:()=>pt("education"),children:J.education?"Save":"Edit"})]})]}),t.jsx("div",{className:"education-list",children:v.education.map(b=>t.jsxs("div",{className:"education-item",children:[t.jsxs("div",{className:"education-header",children:[J.education?t.jsx("input",{type:"text",value:b.degree,onChange:F=>At(b.id,"degree",F.target.value),className:"edit-input degree-input"}):t.jsx("h4",{children:b.degree}),J.education&&t.jsx("button",{className:"remove-btn-education",onClick:()=>or(b.id),children:"Remove"})]}),t.jsx("div",{className:"education-details",children:J.education?t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"text",value:b.school,onChange:F=>At(b.id,"school",F.target.value),className:"edit-input school-input",placeholder:"School"}),t.jsx("input",{type:"text",value:b.year,onChange:F=>At(b.id,"year",F.target.value),className:"edit-input year-input",placeholder:"Year"}),t.jsx("input",{type:"text",value:b.gpa,onChange:F=>At(b.id,"gpa",F.target.value),className:"edit-input gpa-input",placeholder:"GPA"})]}):t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"school",children:b.school}),t.jsx("p",{className:"year",children:b.year}),t.jsxs("p",{className:"gpa",children:["GPA: ",b.gpa]})]})})]},b.id))})]}),$n=()=>t.jsxs("div",{className:"profile-section",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("h3",{children:"🛠️ Skills"}),t.jsx("button",{className:"edit-btn",onClick:()=>pt("skills"),children:J.skills?"Save":"Edit"})]}),t.jsx("div",{className:"skills-container",children:J.skills?t.jsxs("div",{className:"skills-edit",children:[t.jsxs("div",{className:"skill-input-container",children:[t.jsxs("div",{className:"skill-input-wrapper",children:[t.jsx("input",{type:"text",value:q,onChange:fn,placeholder:"Type a skill name...",className:"skill-input",onKeyPress:b=>{b.key==="Enter"&&(b.preventDefault(),Et())}}),t.jsx("button",{className:"add-skill-btn",onClick:()=>Et(),disabled:!q.trim(),children:"Add Skill"})]}),Z&&K.length>0&&t.jsxs("div",{className:"suggestions-dropdown",children:[t.jsx("div",{className:"suggestions-header",children:t.jsx("span",{children:"Suggested Skills"})}),K.map((b,F)=>t.jsx("div",{className:"suggestion-item",onClick:()=>Xi(b),children:b},F))]})]}),t.jsxs("div",{className:"added-skills",children:[t.jsxs("h4",{children:["Added Skills (",v.skills.length,")"]}),v.skills.length>0&&t.jsx("p",{className:"edit-skills-instruction",children:"💡 Click on any skill to remove it"}),t.jsxs("div",{className:"skills-grid",children:[v.skills.map((b,F)=>t.jsxs("span",{className:"skill-tag editable",onClick:()=>In(b),title:"Click to remove this skill",children:[b,t.jsx("button",{className:"remove-skill-btn",onClick:()=>In(b),title:"Remove skill",children:"×"})]},F)),v.skills.length===0&&t.jsx("p",{className:"no-skills",children:"No skills added yet. Start typing to add skills!"})]})]})]}):t.jsx("div",{className:"skills-display",children:t.jsxs("div",{className:"skills-grid",children:[v.skills.map((b,F)=>t.jsx("span",{className:"skill-tag",children:b},F)),v.skills.length===0&&t.jsx("p",{className:"no-skills",children:"No skills added yet."})]})})})]}),Ln=()=>t.jsxs("div",{className:"profile-section",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("h3",{children:"✨ Other Skills"}),t.jsx("button",{className:"edit-btn",onClick:()=>pt("otherSkills"),children:J.otherSkills?"Save":"Edit"})]}),t.jsx("div",{className:"skills-container",children:J.otherSkills?t.jsxs("div",{className:"skills-edit",children:[t.jsx("div",{className:"skill-input-container",children:t.jsxs("div",{className:"skill-input-wrapper",children:[t.jsx("input",{type:"text",value:ge,onChange:b=>le(b.target.value),placeholder:"Type an other skill...",className:"skill-input",onKeyPress:b=>{b.key==="Enter"&&(b.preventDefault(),ge.trim()&&(ye(ge.trim()),le("")))}}),t.jsx("button",{className:"add-skill-btn",onClick:()=>{ge.trim()&&(ye(ge.trim()),le(""))},disabled:!ge.trim(),children:"Add Skill"})]})}),t.jsxs("div",{className:"added-skills",children:[t.jsxs("h4",{children:["Other Skills (",ce.length,")"]}),t.jsxs("div",{className:"skills-grid",children:[ce.map((b,F)=>t.jsxs("span",{className:"skill-tag editable",onClick:()=>je(b),title:"Click to remove this skill",children:[b,t.jsx("button",{className:"remove-skill-btn",onClick:()=>je(b),title:"Remove skill",children:"×"})]},F)),ce.length===0&&t.jsx("p",{className:"no-skills",children:"No other skills added yet."})]})]})]}):t.jsx("div",{className:"skills-display",children:t.jsxs("div",{className:"skills-grid",children:[ce.map((b,F)=>t.jsx("span",{className:"skill-tag",children:b},F)),ce.length===0&&t.jsx("p",{className:"no-skills",children:"No other skills added yet."})]})})})]}),gi=()=>t.jsxs("div",{className:"profile-section",children:[t.jsxs("div",{className:"section-header",children:[t.jsx("h3",{children:"🏆 Achievements"}),t.jsx("button",{className:"edit-btn",onClick:()=>pt("achievements"),children:J.achievements?"Save":"Edit"})]}),J.achievements&&t.jsx("div",{className:"add-section",children:t.jsx("button",{className:"add-btn",onClick:()=>Q(!0),children:"➕ Add Achievement"})}),t.jsx("div",{className:"achievements-grid",children:v.achievements.length>0?v.achievements.map(b=>t.jsxs("div",{className:"achievement-card",children:[b.image&&t.jsx("div",{className:"achievement-image",children:t.jsx("img",{src:b.image,alt:b.title})}),t.jsxs("div",{className:"achievement-content",children:[t.jsxs("div",{className:"achievement-header",children:[t.jsx("h4",{children:b.title}),t.jsx("span",{className:"achievement-category",children:b.category})]}),t.jsx("p",{className:"achievement-description",children:b.description}),t.jsx("p",{className:"achievement-date",children:new Date(b.date).toLocaleDateString()}),J.achievements&&t.jsx("div",{className:"achievement-actions",children:t.jsx("button",{className:"remove-btn",onClick:()=>er(b.id),title:"Remove achievement",children:"Remove"})})]})]},b.id)):t.jsxs("div",{className:"no-achievements",children:[t.jsx("p",{children:"No achievements added yet."}),J.achievements&&t.jsx("p",{children:'Click "Add Achievement" to showcase your accomplishments!'})]})})]});return t.jsxs("div",{className:"profile",children:[t.jsxs("div",{className:"profile-sidebar",children:[t.jsx("div",{className:"sidebar-header",children:t.jsx("h2",{children:"👤 Profile"})}),t.jsxs("nav",{className:"sidebar-nav",children:[t.jsxs("button",{className:`sidebar-nav-item ${y==="personal"?"active":""}`,onClick:()=>M("personal"),children:[t.jsx("span",{className:"nav-icon",children:"📝"}),"Personal Info"]}),t.jsxs("button",{className:`sidebar-nav-item ${y==="experience"?"active":""}`,onClick:()=>M("experience"),children:[t.jsx("span",{className:"nav-icon",children:"💼"}),"Experience"]}),t.jsxs("button",{className:`sidebar-nav-item ${y==="education"?"active":""}`,onClick:()=>M("education"),children:[t.jsx("span",{className:"nav-icon",children:"🎓"}),"Education"]}),t.jsxs("button",{className:`sidebar-nav-item ${y==="skills"?"active":""}`,onClick:()=>M("skills"),children:[t.jsx("span",{className:"nav-icon",children:"⚡"}),"Skills"]}),t.jsxs("button",{className:`sidebar-nav-item ${y==="achievements"?"active":""}`,onClick:()=>M("achievements"),children:[t.jsx("span",{className:"nav-icon",children:"🏆"}),"Achievements"]})]})]}),t.jsxs("div",{className:"profile-content",children:[t.jsxs("div",{className:"profile-horizontal-nav",children:[t.jsxs("button",{className:y==="personal"?"active":"",onClick:()=>M("personal"),children:[t.jsx("span",{className:"nav-icon",children:"📝"}),"Personal Info"]}),t.jsxs("button",{className:y==="experience"?"active":"",onClick:()=>M("experience"),children:[t.jsx("span",{className:"nav-icon",children:"💼"}),"Experience"]}),t.jsxs("button",{className:y==="education"?"active":"",onClick:()=>M("education"),children:[t.jsx("span",{className:"nav-icon",children:"🎓"}),"Education"]}),t.jsxs("button",{className:y==="skills"?"active":"",onClick:()=>M("skills"),children:[t.jsx("span",{className:"nav-icon",children:"⚡"}),"Skills"]}),t.jsxs("button",{className:y==="achievements"?"active":"",onClick:()=>M("achievements"),children:[t.jsx("span",{className:"nav-icon",children:"🏆"}),"Achievements"]})]}),y==="personal"&&gn(),y==="experience"&&gs(),y==="education"&&xn(),y==="skills"&&t.jsxs(t.Fragment,{children:[$n(),Ln()]}),y==="achievements"&&gi()]}),R&&t.jsx("div",{className:"dialog-overlay",children:t.jsxs("div",{className:"dialog",children:[t.jsxs("div",{className:"dialog-header",children:[t.jsx("h3",{children:"➕ Add Work Experience"}),t.jsx("button",{className:"dialog-close",onClick:$t,children:"×"})]}),t.jsxs("div",{className:"dialog-content",children:[t.jsxs("div",{className:"dialog-field",children:[t.jsx("label",{children:"Job Role/Title *"}),t.jsx("input",{type:"text",value:B.title,onChange:b=>qt("title",b.target.value),className:`dialog-input ${l.title?"error":""}`,placeholder:"e.g. Frontend Developer, Software Engineer"}),l.title&&t.jsx("span",{className:"error-message",children:l.title})]}),t.jsxs("div",{className:"dialog-field",children:[t.jsx("label",{children:"Company/Firm Name *"}),t.jsx("input",{type:"text",value:B.company,onChange:b=>qt("company",b.target.value),className:`dialog-input ${l.company?"error":""}`,placeholder:"e.g. TechCorp Inc., Google, Microsoft"}),l.company&&t.jsx("span",{className:"error-message",children:l.company})]}),t.jsxs("div",{className:"dialog-field",children:[t.jsx("label",{children:"Duration *"}),t.jsx("input",{type:"text",value:B.duration,onChange:b=>qt("duration",b.target.value),className:`dialog-input ${l.duration?"error":""}`,placeholder:"e.g. Jan 2023 - Present, Jun 2021 - Dec 2022"}),l.duration&&t.jsx("span",{className:"error-message",children:l.duration})]}),t.jsxs("div",{className:"dialog-field",children:[t.jsx("label",{children:"Work Description *"}),t.jsx("textarea",{value:B.description,onChange:b=>qt("description",b.target.value),className:`dialog-textarea ${l.description?"error":""}`,placeholder:"Briefly describe your role, responsibilities, and achievements...",rows:"4"}),l.description&&t.jsx("span",{className:"error-message",children:l.description})]})]}),t.jsxs("div",{className:"dialog-actions",children:[t.jsx("button",{className:"dialog-btn cancel",onClick:$t,children:"Cancel"}),t.jsx("button",{className:"dialog-btn save",onClick:pi,children:"Add Experience"})]})]})}),f&&t.jsx("div",{className:"dialog-overlay",children:t.jsxs("div",{className:"dialog",children:[t.jsxs("div",{className:"dialog-header",children:[t.jsx("h3",{children:"🎓 Add Education"}),t.jsx("button",{className:"dialog-close",onClick:ui,children:"×"})]}),t.jsxs("div",{className:"dialog-content",children:[t.jsxs("div",{className:"dialog-field",children:[t.jsx("label",{children:"Course Name *"}),t.jsx("input",{type:"text",value:$.degree,onChange:b=>Rt("degree",b.target.value),className:`dialog-input ${ae.degree?"error":""}`,placeholder:"e.g. Bachelor of Science in Computer Science, MBA"}),ae.degree&&t.jsx("span",{className:"error-message",children:ae.degree})]}),t.jsxs("div",{className:"dialog-field",children:[t.jsx("label",{children:"University Name *"}),t.jsx("input",{type:"text",value:$.school,onChange:b=>Rt("school",b.target.value),className:`dialog-input ${ae.school?"error":""}`,placeholder:"e.g. Stanford University, MIT, IIT Delhi"}),ae.school&&t.jsx("span",{className:"error-message",children:ae.school})]}),t.jsxs("div",{className:"dialog-row",children:[t.jsxs("div",{className:"dialog-field",children:[t.jsx("label",{children:"Start From *"}),t.jsx("input",{type:"number",value:$.startYear,onChange:b=>Rt("startYear",b.target.value),className:`dialog-input ${ae.startYear?"error":""}`,placeholder:"2019",min:"1950",max:new Date().getFullYear()+10}),ae.startYear&&t.jsx("span",{className:"error-message",children:ae.startYear})]}),t.jsxs("div",{className:"dialog-field",children:[t.jsx("label",{children:"Ended On *"}),t.jsx("input",{type:"number",value:$.endYear,onChange:b=>Rt("endYear",b.target.value),className:`dialog-input ${ae.endYear?"error":""}`,placeholder:"2023",min:"1950",max:new Date().getFullYear()+10}),ae.endYear&&t.jsx("span",{className:"error-message",children:ae.endYear})]})]}),t.jsxs("div",{className:"dialog-field",children:[t.jsx("label",{children:"CGPA *"}),t.jsx("input",{type:"number",step:"0.01",value:$.gpa,onChange:b=>Rt("gpa",b.target.value),className:`dialog-input ${ae.gpa?"error":""}`,placeholder:"e.g. 8.5, 3.7",min:"0",max:"10"}),ae.gpa&&t.jsx("span",{className:"error-message",children:ae.gpa})]})]}),t.jsxs("div",{className:"dialog-actions",children:[t.jsx("button",{className:"dialog-btn cancel",onClick:ui,children:"Cancel"}),t.jsx("button",{className:"dialog-btn save",onClick:Yt,children:"Add Education"})]})]})}),Tn&&vt&&t.jsx("div",{className:"dialog-overlay",children:t.jsxs("div",{className:"dialog delete-confirmation-dialog",children:[t.jsxs("div",{className:"dialog-header",children:[t.jsx("h3",{children:"⚠️ Confirm Experience Deletion"}),t.jsx("button",{className:"dialog-close",onClick:mi,children:"×"})]}),t.jsx("div",{className:"dialog-content",children:t.jsxs("div",{className:"delete-warning",children:[t.jsx("p",{className:"warning-text",children:"Are you sure you want to permanently delete this work experience entry?"}),t.jsx("div",{className:"experience-preview",children:t.jsxs("div",{className:"experience-info",children:[t.jsx("h4",{className:"experience-title",children:vt.title}),t.jsx("p",{className:"experience-company",children:vt.company}),t.jsx("p",{className:"experience-duration",children:vt.duration}),t.jsx("p",{className:"experience-description",children:vt.description})]})}),t.jsxs("p",{className:"warning-note",children:[t.jsx("strong",{children:"This action cannot be undone."})," All information related to this work experience will be permanently removed from your profile."]})]})}),t.jsxs("div",{className:"dialog-actions",children:[t.jsx("button",{className:"dialog-btn cancel",onClick:mi,children:"Cancel"}),t.jsx("button",{className:"dialog-btn delete",onClick:sr,children:"Delete Experience"})]})]})}),Ce&&st&&t.jsx("div",{className:"dialog-overlay",children:t.jsxs("div",{className:"dialog delete-confirmation-dialog",children:[t.jsxs("div",{className:"dialog-header",children:[t.jsx("h3",{children:"⚠️ Confirm Education Deletion"}),t.jsx("button",{className:"dialog-close",onClick:fi,children:"×"})]}),t.jsx("div",{className:"dialog-content",children:t.jsxs("div",{className:"delete-warning",children:[t.jsx("p",{className:"warning-text",children:"Are you sure you want to permanently delete this education entry?"}),t.jsx("div",{className:"education-preview",children:t.jsxs("div",{className:"education-info",children:[t.jsx("h4",{className:"education-degree",children:st.degree}),t.jsx("p",{className:"education-school",children:st.school}),t.jsx("p",{className:"education-year",children:st.year}),t.jsxs("p",{className:"education-gpa",children:["GPA: ",st.gpa]})]})}),t.jsxs("p",{className:"warning-note",children:[t.jsx("strong",{children:"This action cannot be undone."})," All information related to this education will be permanently removed from your profile."]})]})}),t.jsxs("div",{className:"dialog-actions",children:[t.jsx("button",{className:"dialog-btn cancel",onClick:fi,children:"Cancel"}),t.jsx("button",{className:"dialog-btn delete",onClick:hi,children:"Delete Education"})]})]})}),V&&t.jsx("div",{className:"dialog-overlay",children:t.jsxs("div",{className:"dialog",children:[t.jsxs("div",{className:"dialog-header",children:[t.jsx("h3",{children:"🏆 Add Achievement"}),t.jsx("button",{className:"dialog-close",onClick:li,children:"×"})]}),t.jsxs("div",{className:"dialog-content",children:[t.jsxs("div",{className:"dialog-field",children:[t.jsx("label",{children:"Achievement Title *"}),t.jsx("input",{type:"text",value:N.title,onChange:b=>Ht("title",b.target.value),className:`dialog-input ${A.title?"error":""}`,placeholder:"e.g., Employee of the Month, Certification, Award..."}),A.title&&t.jsx("span",{className:"error-message",children:A.title})]}),t.jsxs("div",{className:"dialog-field",children:[t.jsx("label",{children:"Description *"}),t.jsx("textarea",{value:N.description,onChange:b=>Ht("description",b.target.value),className:`dialog-textarea ${A.description?"error":""}`,placeholder:"Describe your achievement and its significance...",rows:"4"}),A.description&&t.jsx("span",{className:"error-message",children:A.description})]}),t.jsxs("div",{className:"dialog-row",children:[t.jsxs("div",{className:"dialog-field",children:[t.jsx("label",{children:"Date *"}),t.jsx("input",{type:"date",value:N.date,onChange:b=>Ht("date",b.target.value),className:`dialog-input ${A.date?"error":""}`}),A.date&&t.jsx("span",{className:"error-message",children:A.date})]}),t.jsxs("div",{className:"dialog-field",children:[t.jsx("label",{children:"Category"}),t.jsxs("select",{value:N.category,onChange:b=>Ht("category",b.target.value),className:"dialog-select",children:[t.jsx("option",{value:"Work",children:"Work"}),t.jsx("option",{value:"Education",children:"Education"}),t.jsx("option",{value:"Personal",children:"Personal"}),t.jsx("option",{value:"Sports",children:"Sports"}),t.jsx("option",{value:"Volunteer",children:"Volunteer"}),t.jsx("option",{value:"Other",children:"Other"})]})]})]}),t.jsxs("div",{className:"dialog-field",children:[t.jsx("label",{children:"Achievement Image/Certificate (Optional)"}),t.jsx("input",{type:"file",accept:"image/*",onChange:Rn,className:"dialog-file-input"}),N.image&&t.jsx("div",{className:"image-preview",children:t.jsx("img",{src:N.image,alt:"Achievement preview"})})]})]}),t.jsxs("div",{className:"dialog-actions",children:[t.jsx("button",{className:"dialog-btn cancel",onClick:li,children:"Cancel"}),t.jsx("button",{className:"dialog-btn primary",onClick:Zi,children:"Add Achievement"})]})]})})]})}function uu({userEmail:T,onNavigateBack:_}){const[p,m]=X.useState("all"),[a,u]=X.useState("match"),y=[{id:1,title:"Senior Frontend Developer",company:"TechFlow Inc.",location:"San Francisco, CA",type:"Full-time",salary:"$120,000 - $150,000",matchScore:95,postedDate:"2 days ago",skills:["React","JavaScript","TypeScript","Node.js"],description:"We are looking for a skilled Frontend Developer to join our dynamic team...",remote:!0},{id:2,title:"React Developer",company:"Innovation Labs",location:"Remote",type:"Full-time",salary:"$100,000 - $130,000",matchScore:92,postedDate:"1 day ago",skills:["React","Redux","JavaScript","CSS"],description:"Join our team to build cutting-edge web applications...",remote:!0},{id:3,title:"Full Stack Developer",company:"StartupXYZ",location:"New York, NY",type:"Full-time",salary:"$90,000 - $120,000",matchScore:88,postedDate:"3 days ago",skills:["React","Node.js","MongoDB","Express"],description:"Exciting opportunity to work on diverse projects...",remote:!1},{id:4,title:"Frontend Engineer",company:"DesignCorp",location:"Austin, TX",type:"Contract",salary:"$80 - $100/hour",matchScore:85,postedDate:"5 days ago",skills:["React","Vue.js","HTML","CSS"],description:"Contract position for an experienced frontend engineer...",remote:!0},{id:5,title:"JavaScript Developer",company:"WebSolutions",location:"Seattle, WA",type:"Part-time",salary:"$60,000 - $80,000",matchScore:82,postedDate:"1 week ago",skills:["JavaScript","HTML","CSS","jQuery"],description:"Part-time opportunity for a JavaScript developer...",remote:!1}],I=[...y.filter(v=>p==="all"?!0:p==="remote"?v.remote:p==="onsite"?!v.remote:p==="fulltime"?v.type==="Full-time":p==="contract"?v.type==="Contract":!0)].sort((v,P)=>a==="match"?P.matchScore-v.matchScore:a==="date"?new Date(P.postedDate)-new Date(v.postedDate):a==="salary"?P.salary.localeCompare(v.salary):0);return t.jsxs("div",{className:"job-matches",children:[t.jsxs("div",{className:"job-matches-header",children:[t.jsxs("div",{className:"header-content",children:[t.jsx("h1",{children:"Your Job Matches"}),t.jsx("p",{children:"Jobs tailored to your skills and preferences"})]}),t.jsxs("div",{className:"header-stats",children:[t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"stat-number",children:y.length}),t.jsx("span",{className:"stat-label",children:"Total Matches"})]}),t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"stat-number",children:y.filter(v=>v.matchScore>=90).length}),t.jsx("span",{className:"stat-label",children:"Top Matches"})]})]})]}),t.jsxs("div",{className:"job-matches-controls",children:[t.jsxs("div",{className:"filters",children:[t.jsx("button",{className:`filter-btn ${p==="all"?"active":""}`,onClick:()=>m("all"),children:"All Jobs"}),t.jsx("button",{className:`filter-btn ${p==="remote"?"active":""}`,onClick:()=>m("remote"),children:"Remote"}),t.jsx("button",{className:`filter-btn ${p==="onsite"?"active":""}`,onClick:()=>m("onsite"),children:"On-site"}),t.jsx("button",{className:`filter-btn ${p==="fulltime"?"active":""}`,onClick:()=>m("fulltime"),children:"Full-time"}),t.jsx("button",{className:`filter-btn ${p==="contract"?"active":""}`,onClick:()=>m("contract"),children:"Contract"})]}),t.jsxs("div",{className:"sort-controls",children:[t.jsx("label",{children:"Sort by:"}),t.jsxs("select",{value:a,onChange:v=>u(v.target.value),className:"sort-select",children:[t.jsx("option",{value:"match",children:"Match Score"}),t.jsx("option",{value:"date",children:"Date Posted"}),t.jsx("option",{value:"salary",children:"Salary"})]})]})]}),t.jsx("div",{className:"job-matches-list",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(350px, 1fr))",gap:"1.5rem"},children:I.map(v=>{const P={id:v.id,title:v.title,company:v.company,location:v.location,postedDate:v.postedDate,description:v.description,salary:v.salary,source:"Job Board",matchScore:v.matchScore,tags:[...v.skills||[],v.type,v.remote?"Remote":""].filter(Boolean).slice(0,4),isLiked:!1};return t.jsx(ra,{job:P,showMatchScore:!0,showHeart:!0,showSource:!0,variant:"default",onApply:q=>{console.log("Apply to job:",q.title)},onToggleLike:q=>{console.log("Toggle like for job:",q)}},v.id)})}),I.length===0&&t.jsxs("div",{className:"no-matches",children:[t.jsx("div",{className:"no-matches-icon",children:"🔍"}),t.jsx("h3",{children:"No matches found"}),t.jsx("p",{children:"Try adjusting your filters to see more job opportunities."}),t.jsx("button",{className:"reset-filters-btn",onClick:()=>m("all"),children:"Reset Filters"})]})]})}function mu({userEmail:T,onNavigateBack:_}){const[p,m]=X.useState("company-az"),a=[{id:1,company:"TechFlow Solutions",position:"Senior Frontend Developer",appliedDate:"2025-08-27",status:"under_review",location:"Remote",jobType:"Full-time",salary:"$95,000 - $120,000",applicationMethod:"Company Website",notes:"Applied through their careers page. HR confirmed receipt.",companyLogo:"🏢",responseTime:"2-3 business days expected"},{id:2,company:"Innovation Labs",position:"React Developer",appliedDate:"2025-08-25",status:"interview_scheduled",location:"San Francisco, CA",jobType:"Remote",salary:"$85,000 - $110,000",applicationMethod:"LinkedIn",notes:"Recruiter reached out. Technical interview scheduled for tomorrow.",companyLogo:"🚀",responseTime:"Responded in 1 day"},{id:3,company:"DataTech Corp",position:"Full Stack Engineer",appliedDate:"2025-08-24",status:"rejected",location:"New York, NY",jobType:"Hybrid",salary:"$100,000 - $130,000",applicationMethod:"Job Board",notes:"Position filled internally. Encouraged to apply for future openings.",companyLogo:"📊",responseTime:"Responded in 3 days"},{id:4,company:"StartupHub",position:"Frontend Developer",appliedDate:"2025-08-23",status:"under_review",location:"Austin, TX",jobType:"On-site",salary:"$70,000 - $90,000",applicationMethod:"AngelList",notes:"Early-stage startup. Direct application to CTO.",companyLogo:"💡",responseTime:"1-2 weeks expected"},{id:5,company:"DesignCorp",position:"UI/UX Developer",appliedDate:"2025-08-22",status:"offer_received",location:"Seattle, WA",jobType:"Remote",salary:"$88,000 - $105,000",applicationMethod:"Referral",notes:"Referred by former colleague. Offer received pending decision.",companyLogo:"🎨",responseTime:"Responded in 2 days"},{id:6,company:"CloudTech Systems",position:"Software Engineer",appliedDate:"2025-08-20",status:"under_review",location:"Denver, CO",jobType:"Hybrid",salary:"$80,000 - $100,000",applicationMethod:"Company Website",notes:"Applied for cloud infrastructure role. Waiting for response.",companyLogo:"☁️",responseTime:"5-7 business days expected"},{id:7,company:"FinTech Solutions",position:"Frontend Developer",appliedDate:"2025-08-18",status:"rejected",location:"Boston, MA",jobType:"On-site",salary:"$90,000 - $115,000",applicationMethod:"Recruiter",notes:"Not a good culture fit according to feedback.",companyLogo:"💰",responseTime:"Responded in 1 week"},{id:8,company:"EcommerceGiant",position:"Senior React Developer",appliedDate:"2025-08-16",status:"interview_scheduled",location:"Los Angeles, CA",jobType:"Part-time",salary:"$105,000 - $135,000",applicationMethod:"LinkedIn",notes:"Second round interview next week. Technical round completed.",companyLogo:"🛒",responseTime:"Responded in 2 days"},{id:9,company:"AI Innovations",position:"Frontend Engineer",appliedDate:"2025-08-15",status:"under_review",location:"Chicago, IL",jobType:"Remote",salary:"$95,000 - $125,000",applicationMethod:"Job Board",notes:"AI/ML focused company. Very interested in the role.",companyLogo:"🤖",responseTime:"2-3 weeks expected"},{id:10,company:"MediaStream Co",position:"Web Developer",appliedDate:"2025-08-14",status:"withdrawn",location:"Miami, FL",jobType:"Contract",salary:"$65,000 - $85,000",applicationMethod:"Company Website",notes:"Withdrew application due to salary mismatch.",companyLogo:"📺",responseTime:"Self-withdrawn"}],u=[...a].sort((I,v)=>{switch(p){case"company-az":return I.company.localeCompare(v.company);case"company-za":return v.company.localeCompare(I.company);case"date":return new Date(v.appliedDate)-new Date(I.appliedDate);case"date-old":return new Date(I.appliedDate)-new Date(v.appliedDate);default:return I.company.localeCompare(v.company)}}),M=(()=>{const I=new Date,v=new Date(I.getTime()-10080*60*1e3),P=new Date(I.getTime()-720*60*60*1e3),q=a.filter(Z=>new Date(Z.appliedDate)>=v).length,L=a.filter(Z=>new Date(Z.appliedDate)>=P).length;return{thisWeek:q,thisMonth:L}})();return t.jsxs("div",{className:"job-applications",children:[t.jsxs("div",{className:"applications-header",children:[t.jsxs("div",{className:"header-content",children:[t.jsx("h1",{children:"My Job Applications"}),t.jsx("p",{children:"Track all your job applications and their current status"})]}),t.jsxs("div",{className:"applications-stats",children:[t.jsxs("div",{className:"stat-card primary",children:[t.jsx("div",{className:"stat-number",children:a.length}),t.jsx("div",{className:"stat-label",children:"Total Applications Sent"}),t.jsx("div",{className:"stat-description",children:"All time applications"})]}),t.jsxs("div",{className:"stat-card secondary",children:[t.jsx("div",{className:"stat-number",children:M.thisMonth}),t.jsx("div",{className:"stat-label",children:"Applications This Month"}),t.jsx("div",{className:"stat-description",children:"Last 30 days activity"})]})]})]}),t.jsx("div",{className:"applications-controls",children:t.jsxs("div",{className:"sort-section",children:[t.jsx("label",{htmlFor:"sort-by",children:"Sort by:"}),t.jsxs("select",{id:"sort-by",value:p,onChange:I=>m(I.target.value),className:"sort-select",children:[t.jsx("option",{value:"company-az",children:"Company Name (A-Z)"}),t.jsx("option",{value:"company-za",children:"Company Name (Z-A)"}),t.jsx("option",{value:"date",children:"Application Date (Newest First)"}),t.jsx("option",{value:"date-old",children:"Application Date (Oldest First)"})]})]})}),t.jsx("div",{className:"applications-list",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(350px, 1fr))",gap:"1.5rem"},children:u.length===0?t.jsxs("div",{className:"no-applications",children:[t.jsx("div",{className:"no-applications-icon",children:"📝"}),t.jsx("h3",{children:"No applications found"}),t.jsx("p",{children:"No applications match your current filter criteria."})]}):u.map(I=>{const v={id:I.id,title:I.position,company:I.company,location:I.location,appliedDate:I.appliedDate,salary:I.salary,description:`Applied via ${I.applicationMethod}`,source:I.applicationMethod,applicationMethod:I.applicationMethod,tags:[I.jobType,I.salary?"Salary Listed":"Salary TBD"].filter(Boolean)};return t.jsx(ra,{job:v,showMatchScore:!1,showHeart:!1,showSource:!0,variant:"application",onApply:P=>{console.log("View application for:",P.title)}},I.id)})})]})}const qc=({data:T})=>{const p=T||{name:"ELLIOT WU",photo:null,location:"PHILADELPHIA, PA 19001",phone:"(555) 555-5555",email:"EXAMPLE@EXAMPLE.COM",summary:"Results-driven marketing researcher with over 10 years of experience specializing in consumer behavior, brand strategy and digital marketing analytics. Proven expertise in leading cross-functional research projects, delivering actionable insights and driving 15% year-over-year revenue growth for Fortune 500 clients. Skilled in advanced statistical methods, market segmentation and developing predictive models that optimize marketing strategies. Published author with a strong track record of impactful research and peer-reviewed articles.",qualifications:{left:["Quantitative and qualitative research","Consumer behavior analysis","Digital marketing analytics","Data visualization (Tableau, Power BI)"],right:["Advanced statistical analysis (R, Python)","Predictive modeling and machine learning","Survey design and administration","Strategic communication and reporting"]},education:[{degree:"Master of Science - Digital Marketing",school:"Temple University",location:"Philadelphia, PA",details:["GPA: 3.8","Honors: Magna cum laude","Thesis: Measuring the Effectiveness of Influencer Marketing Across Different Social Media Platforms"]},{degree:"Certificate - Business Analytics",school:"Temple University",location:"Philadelphia, PA",details:[]},{degree:"Bachelor of Science - Marketing",school:"Temple University",location:"Philadelphia, PA",details:["GPA: 3.8","Honors: Magna cum laude","Minor: Advertising","Student Marketing Club, President"]}],experience:[{company:"CMI Media Group",position:"Senior Marketing Research Analyst",location:"Philadelphia, PA",period:"January 2018 to Current",responsibilities:["Direct consumer segmentation studies for global clients, increasing customer retention by 20%.","Design and implement predictive models that enhanced campaign ROI by 25%.","Manage a team of five analysts, delivering 98% of research projects under budget and ahead of schedule."]},{company:"Insight Global",position:"Marketing Research Consultant",location:"Philadelphia, PA",period:"May 2015 to December 2017",responsibilities:["Conducted in-depth qualitative and quantitative research for 12 startups, leading to an average 18% increase in market share.","Developed competitive benchmarking reports that informed strategic decisions for five key industries."]}]};return t.jsxs("div",{className:"academic-template",style:{fontFamily:"'Roboto', sans-serif",backgroundColor:"white",color:"black",padding:"24px",maxWidth:"768px",margin:"0 auto",fontSize:"12px",lineHeight:"1.4"},children:[t.jsx("div",{style:{borderTop:"8px solid #3B82F6",width:"100%",marginBottom:"16px"}}),t.jsx("h1",{style:{color:"#3B82F6",fontSize:"24px",fontWeight:"normal",textAlign:"center",marginBottom:"4px"},children:p.name}),p.photo&&t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:"12px"},children:t.jsx("img",{src:p.photo,alt:"Profile",style:{width:"80px",height:"80px",borderRadius:"50%",objectFit:"cover",border:"2px solid #3B82F6"}})}),t.jsx("p",{style:{textAlign:"center",fontSize:"12px",fontWeight:"800",lineHeight:"none",margin:"0"},children:p.location}),t.jsxs("p",{style:{textAlign:"center",fontSize:"12px",fontWeight:"800",lineHeight:"none",marginBottom:"12px"},children:[p.phone," | ",p.email]}),t.jsx("hr",{style:{border:"none",borderTop:"1px dotted #9CA3AF",marginBottom:"12px"}}),t.jsx("p",{style:{fontSize:"12px",fontWeight:"800",marginBottom:"4px"},children:"SUMMARY STATEMENT"}),t.jsx("p",{style:{fontSize:"12px",marginBottom:"16px"},children:p.summary}),t.jsx("hr",{style:{border:"none",borderTop:"1px dotted #9CA3AF",marginBottom:"12px"}}),t.jsx("p",{style:{fontSize:"12px",fontWeight:"800",marginBottom:"8px"},children:"CORE QUALIFICATIONS"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"24px 24px",fontSize:"12px",marginBottom:"16px"},children:[t.jsx("ul",{style:{listStyle:"disc",paddingLeft:"16px",margin:"0"},children:p.qualifications.left.map((m,a)=>t.jsx("li",{style:{marginBottom:"2px"},children:m},a))}),t.jsx("ul",{style:{listStyle:"disc",paddingLeft:"16px",margin:"0"},children:p.qualifications.right.map((m,a)=>t.jsx("li",{style:{marginBottom:"2px"},children:m},a))})]}),t.jsx("p",{style:{fontSize:"12px",fontWeight:"800",marginBottom:"4px"},children:"EDUCATION"}),p.education.map((m,a)=>t.jsxs("div",{style:{marginBottom:"8px"},children:[m.degree&&t.jsx("p",{style:{fontSize:"12px",fontWeight:"800",marginBottom:"2px"},children:m.degree}),(m.school||m.location)&&t.jsxs("p",{style:{fontSize:"12px",marginBottom:"2px"},children:[m.school," ",m.school&&m.location&&t.jsxs("span",{style:{fontWeight:"normal"},children:[" // ",m.location]})]}),m.details&&m.details.length>0&&t.jsx("ul",{style:{listStyle:"disc",paddingLeft:"16px",fontSize:"12px",marginBottom:"8px"},children:m.details.map((u,y)=>t.jsx("li",{style:{marginBottom:"2px"},children:u.includes("Honors:")?t.jsx("em",{children:u.replace("Honors: ","")}):u},y))})]},a)),t.jsx("p",{style:{fontSize:"12px",fontWeight:"800",marginBottom:"4px"},children:"WORK EXPERIENCE"}),p.experience.map((m,a)=>t.jsxs("div",{style:{marginBottom:a<p.experience.length-1?"12px":"0"},children:[t.jsx("p",{style:{fontSize:"12px",fontWeight:"800",marginBottom:"2px"},children:m.company}),t.jsxs("p",{style:{fontSize:"12px",marginBottom:"2px"},children:[m.position," ",t.jsxs("span",{style:{fontWeight:"normal"},children:["// ",m.location," // ",m.period]})]}),t.jsx("ul",{style:{listStyle:"disc",paddingLeft:"16px",fontSize:"12px",marginBottom:a<p.experience.length-1?"12px":"0"},children:m.responsibilities.map((u,y)=>t.jsx("li",{style:{marginBottom:"2px"},children:u},y))})]},a))]})},Yc=({data:T})=>{const p=T||{name:"OLIVIA WILSON",title:"Marketing Manager",photo:null,contact:{email:"hello@reallygreatsite.com",phone:"+123-456-7890",address:"123 Anywhere St., Any City",website:"reallygreatsite.com"},about:"An experienced Marketing Manager with exceptional skills in creating marketing plans, launching products, promoting them, and increasing brand awareness. I'm creative, detail-oriented, a team player, with extensive world media audience engagement, and brand management.",education:[{degree:"Master of Business",school:"Wardiere University",period:"2016 - 2018"},{degree:"BA Sales and Commerce",school:"Wardiere University",period:"2012 - 2016"}],skills:["BCR Calculations","Social media marketing","Product development lifecycle","Marketing strategy","Product promotion","Value propositions"],languages:["English","French"],experience:[{position:"Marketing Manager",company:"Borcelle Company",period:"Aug 2018 - present",responsibilities:["Handled various office tasks.","Constantly updated the company's content and mailing lists.","Monitored ongoing marketing campaigns.","Increased sales coverage."]},{position:"Marketing Assistant",company:"Timmerman Industries",period:"Jul 2016 - Aug 2018",responsibilities:["Handled the company's online presence — regularly updated the company's website and various social media accounts.","Monitored ongoing marketing campaigns."]},{position:"Marketing Assistant",company:"Utenim & Co",period:"Aug 2014 - Jul 2016",responsibilities:["Handled the company's online presence — regularly updated the company's website and various social media accounts."]}],references:[{name:"Estelle Darcy",title:"Wardiere Inc. | CEO",phone:"+123-456-7890",email:"hello@reallygreatsite.com"},{name:"Harper Russo",title:"Timmerman | CEO",phone:"+123-456-7890",email:"hello@reallygreatsite.com"}]};return t.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",backgroundColor:"#f3f4f6",padding:"16px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsxs("main",{style:{maxWidth:"1024px",width:"100%",backgroundColor:"white",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)",borderRadius:"8px",overflow:"hidden",display:"flex",flexDirection:"row"},children:[t.jsxs("aside",{style:{width:"33.333333%",backgroundColor:"#2c3e50",color:"white",padding:"32px"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:"32px"},children:t.jsx("div",{style:{width:"144px",height:"144px",borderRadius:"50%",border:"4px solid #9CA3AF",backgroundColor:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",fontWeight:"bold",color:"#2c3e50",backgroundImage:p.photo?`url(${p.photo})`:"none",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:!p.photo&&p.name.split(" ").map(m=>m[0]).join("")})}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",borderBottom:"2px solid #6B7280",paddingBottom:"8px",marginBottom:"16px",fontFamily:"'League Spartan', sans-serif"},children:"Contact"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("p",{style:{display:"flex",alignItems:"center",margin:"0",fontSize:"14px"},children:[t.jsx("span",{style:{marginRight:"12px"},children:"✉️"}),t.jsx("span",{children:p.contact.email})]}),t.jsxs("p",{style:{display:"flex",alignItems:"center",margin:"0",fontSize:"14px"},children:[t.jsx("span",{style:{marginRight:"12px"},children:"📞"}),t.jsx("span",{children:p.contact.phone})]}),t.jsxs("p",{style:{display:"flex",alignItems:"center",margin:"0",fontSize:"14px"},children:[t.jsx("span",{style:{marginRight:"12px"},children:"📍"}),t.jsx("span",{children:p.contact.address})]}),t.jsxs("p",{style:{display:"flex",alignItems:"center",margin:"0",fontSize:"14px"},children:[t.jsx("span",{style:{marginRight:"12px"},children:"🌐"}),t.jsx("span",{children:p.contact.website})]})]})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",borderBottom:"2px solid #6B7280",paddingBottom:"8px",marginBottom:"16px",fontFamily:"'League Spartan', sans-serif"},children:"Education"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:p.education.map((m,a)=>t.jsxs("div",{children:[t.jsx("p",{style:{fontWeight:"600",margin:"0",fontSize:"14px"},children:m.degree}),t.jsx("p",{style:{fontStyle:"italic",fontSize:"12px",margin:"0",color:"#E5E7EB"},children:m.school}),t.jsx("p",{style:{fontSize:"10px",color:"#D1D5DB",margin:"0"},children:m.period})]},a))})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",borderBottom:"2px solid #6B7280",paddingBottom:"8px",marginBottom:"16px",fontFamily:"'League Spartan', sans-serif"},children:"Skills"}),t.jsx("ul",{style:{listStyle:"disc",paddingLeft:"16px",margin:"0",display:"flex",flexDirection:"column",gap:"8px"},children:p.skills.map((m,a)=>t.jsx("li",{style:{fontSize:"14px"},children:m},a))})]}),t.jsxs("section",{children:[t.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",borderBottom:"2px solid #6B7280",paddingBottom:"8px",marginBottom:"16px",fontFamily:"'League Spartan', sans-serif"},children:"Language"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:p.languages.map((m,a)=>t.jsx("p",{style:{margin:"0",fontSize:"14px"},children:m},a))})]})]}),t.jsxs("div",{style:{width:"66.666667%",padding:"32px",color:"#374151"},children:[t.jsxs("header",{style:{marginBottom:"40px",textAlign:"left"},children:[t.jsx("h1",{style:{fontSize:"48px",fontWeight:"bold",color:"#1F2937",margin:"0",fontFamily:"'League Spartan', sans-serif"},children:p.name}),t.jsx("p",{style:{fontSize:"20px",color:"#6B7280",marginTop:"4px",margin:"4px 0 0 0"},children:p.title})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h2",{style:{fontSize:"32px",fontWeight:"bold",color:"#1F2937",borderBottom:"2px solid #E5E7EB",paddingBottom:"8px",marginBottom:"16px",fontFamily:"'League Spartan', sans-serif"},children:"About Me"}),t.jsx("p",{style:{lineHeight:"1.625",margin:"0",fontSize:"14px"},children:p.about})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h2",{style:{fontSize:"32px",fontWeight:"bold",color:"#1F2937",borderBottom:"2px solid #E5E7EB",paddingBottom:"8px",marginBottom:"16px",fontFamily:"'League Spartan', sans-serif"},children:"Work Experience"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:p.experience.map((m,a)=>t.jsxs("div",{children:[t.jsx("p",{style:{fontSize:"18px",fontWeight:"600",margin:"0"},children:m.position}),t.jsx("p",{style:{fontSize:"16px",color:"#4B5563",margin:"0"},children:m.company}),t.jsx("p",{style:{fontSize:"14px",color:"#6B7280",fontStyle:"italic",margin:"0"},children:m.period}),t.jsx("ul",{style:{listStyle:"disc",paddingLeft:"16px",marginTop:"8px",margin:"8px 0 0 16px",display:"flex",flexDirection:"column",gap:"4px"},children:m.responsibilities.map((u,y)=>t.jsx("li",{style:{fontSize:"14px"},children:u},y))})]},a))})]}),t.jsxs("section",{children:[t.jsx("h2",{style:{fontSize:"32px",fontWeight:"bold",color:"#1F2937",borderBottom:"2px solid #E5E7EB",paddingBottom:"8px",marginBottom:"16px",fontFamily:"'League Spartan', sans-serif"},children:"References"}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"32px"},children:p.references.map((m,a)=>t.jsxs("div",{children:[t.jsx("p",{style:{fontWeight:"bold",margin:"0",fontSize:"14px"},children:m.name}),t.jsx("p",{style:{fontSize:"12px",margin:"0"},children:m.title}),t.jsxs("p",{style:{fontSize:"12px",marginTop:"4px",margin:"4px 0 0 0"},children:["Phone: ",m.phone]}),t.jsxs("p",{style:{fontSize:"12px",margin:"0"},children:["Email: ",m.email]})]},a))})]})]})]})})};function hu({onNavigateBack:T}){const[_,p]=X.useState(null),m=[{id:"template1",name:"Professional",description:"Clean and minimalist design for corporate roles",color:"#4A6FDC",previewContent:t.jsxs("div",{className:"professional-preview",children:[t.jsxs("div",{className:"preview-header",children:[t.jsx("div",{className:"preview-name",children:"JOHN DOE"}),t.jsx("div",{className:"preview-title",children:"Senior Product Manager"}),t.jsx("div",{className:"preview-divider"}),t.jsxs("div",{className:"preview-contact",children:[t.jsx("span",{children:"📧 john.doe@example.com"}),t.jsx("span",{children:"📱 (123) 456-7890"}),t.jsx("span",{children:"📍 San Francisco, CA"}),t.jsx("span",{children:"🔗 linkedin.com/in/johndoe"})]})]}),t.jsxs("div",{className:"preview-content",children:[t.jsxs("div",{className:"preview-left",children:[t.jsxs("div",{className:"preview-section",children:[t.jsx("div",{className:"preview-section-title",children:"PROFESSIONAL SUMMARY"}),t.jsx("div",{className:"preview-text-content",children:"Results-driven Product Manager with 8+ years of experience leading cross-functional teams to deliver innovative digital products. Proven track record in market analysis, product strategy, and agile development."})]}),t.jsxs("div",{className:"preview-section",children:[t.jsx("div",{className:"preview-section-title",children:"WORK EXPERIENCE"}),t.jsxs("div",{className:"preview-experience",children:[t.jsxs("div",{className:"preview-job-header",children:[t.jsx("div",{className:"preview-job-title",children:"Senior Product Manager"}),t.jsx("div",{className:"preview-job-date",children:"2019 - Present"})]}),t.jsx("div",{className:"preview-company",children:"TechSolutions Inc., San Francisco, CA"}),t.jsxs("div",{className:"preview-responsibilities",children:["• Led product strategy and roadmap for SaaS platform, resulting in 40% increase in user engagement",t.jsx("br",{}),"• Managed cross-functional team of 12 engineers, designers, and marketers using Agile methodologies",t.jsx("br",{}),"• Conducted market research and competitive analysis to identify $2M revenue opportunity"]})]}),t.jsxs("div",{className:"preview-experience",children:[t.jsxs("div",{className:"preview-job-header",children:[t.jsx("div",{className:"preview-job-title",children:"Product Manager"}),t.jsx("div",{className:"preview-job-date",children:"2016 - 2019"})]}),t.jsx("div",{className:"preview-company",children:"Digital Innovations Co., New York, NY"}),t.jsxs("div",{className:"preview-responsibilities",children:["• Launched mobile app that acquired 500K users in first 6 months",t.jsx("br",{}),"• Collaborated with UX team to redesign onboarding flow, reducing drop-off rate by 35%",t.jsx("br",{}),"• Established product metrics framework to track KPIs and inform roadmap priorities"]})]})]})]}),t.jsxs("div",{className:"preview-right",children:[t.jsxs("div",{className:"preview-section",children:[t.jsx("div",{className:"preview-section-title",children:"TECHNICAL SKILLS"}),t.jsxs("div",{className:"preview-skills",children:[t.jsx("div",{className:"preview-skill",children:"Product Strategy & Roadmapping"}),t.jsx("div",{className:"preview-skill",children:"Market Research & Analysis"}),t.jsx("div",{className:"preview-skill",children:"Agile & Scrum Methodologies"}),t.jsx("div",{className:"preview-skill",children:"Data Analysis & Metrics"}),t.jsx("div",{className:"preview-skill",children:"User Experience Design"})]})]}),t.jsxs("div",{className:"preview-section",children:[t.jsx("div",{className:"preview-section-title",children:"BUSINESS SKILLS"}),t.jsxs("div",{className:"preview-skills",children:[t.jsx("div",{className:"preview-skill",children:"Strategic Planning"}),t.jsx("div",{className:"preview-skill",children:"Cross-functional Leadership"}),t.jsx("div",{className:"preview-skill",children:"Stakeholder Management"}),t.jsx("div",{className:"preview-skill",children:"Financial Analysis"}),t.jsx("div",{className:"preview-skill",children:"Go-to-Market Strategy"})]})]}),t.jsxs("div",{className:"preview-section",children:[t.jsx("div",{className:"preview-section-title",children:"EDUCATION"}),t.jsxs("div",{className:"preview-education",children:[t.jsx("div",{className:"preview-degree",children:"MBA, Business Administration"}),t.jsx("div",{className:"preview-school",children:"Stanford University"}),t.jsx("div",{className:"preview-date",children:"2014 - 2016"})]}),t.jsxs("div",{className:"preview-education",children:[t.jsx("div",{className:"preview-degree",children:"BS, Computer Science"}),t.jsx("div",{className:"preview-school",children:"University of California, Berkeley"}),t.jsx("div",{className:"preview-date",children:"2010 - 2014"})]})]}),t.jsxs("div",{className:"preview-section",children:[t.jsx("div",{className:"preview-section-title",children:"CERTIFICATIONS"}),t.jsxs("div",{className:"preview-certifications",children:[t.jsxs("div",{className:"preview-certification",children:[t.jsx("div",{className:"preview-cert-name",children:"Certified Scrum Product Owner"}),t.jsx("div",{className:"preview-cert-issuer",children:"Scrum Alliance, 2018"})]}),t.jsxs("div",{className:"preview-certification",children:[t.jsx("div",{className:"preview-cert-name",children:"Google Analytics Certification"}),t.jsx("div",{className:"preview-cert-issuer",children:"Google, 2017"})]})]})]}),t.jsxs("div",{className:"preview-section",children:[t.jsx("div",{className:"preview-section-title",children:"LANGUAGES"}),t.jsxs("div",{className:"preview-languages",children:[t.jsxs("div",{className:"preview-language",children:[t.jsx("span",{className:"preview-lang-name",children:"English"}),t.jsx("span",{className:"preview-lang-level",children:"Native"})]}),t.jsxs("div",{className:"preview-language",children:[t.jsx("span",{className:"preview-lang-name",children:"Spanish"}),t.jsx("span",{className:"preview-lang-level",children:"Professional"})]}),t.jsxs("div",{className:"preview-language",children:[t.jsx("span",{className:"preview-lang-name",children:"French"}),t.jsx("span",{className:"preview-lang-level",children:"Intermediate"})]})]})]})]})]})]})},{id:"template2",name:"Creative",description:"Bold layout for design and creative positions",color:"#FF7B54",previewContent:t.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:'url("/creative.jpg")',backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderRadius:"4px"}})},{id:"template3",name:"Academic",description:"Structured format for research and education roles",color:"#6E44FF",previewContent:t.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:'url("/Acedemic.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderRadius:"4px"}})},{id:"template4",name:"Technical",description:"Optimized for IT and engineering positions",color:"#2AB3A6",previewContent:t.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:'url("/Technical.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderRadius:"4px"}})},{id:"template5",name:"Executive",description:"Sophisticated design for leadership positions",color:"#345995",previewContent:t.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:'url("/Executive.jpeg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderRadius:"4px"}})},{id:"template6",name:"Modern",description:"Contemporary layout with clean typography",color:"#FB4D3D",previewContent:t.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:'url("/mordern.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderRadius:"4px"}})},{id:"template7",name:"Simple",description:"Straightforward and effective for all positions",color:"#03CEA4",previewContent:t.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:'url("/simple.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderRadius:"4px"}})},{id:"template8",name:"Entry-Level",description:"Perfect for graduates and first-time job seekers",color:"#6ea6b9",previewContent:t.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:'url("/entry-level.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderRadius:"4px"}})},{id:"template9",name:"Chronological",description:"Timeline-based layout focusing on work history",color:"#118AB2",previewContent:t.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 200 280",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{width:"200",height:"280",fill:"#ffffff"}),t.jsx("rect",{x:"10",y:"20",width:"180",height:"30",fill:"#118AB220"}),t.jsx("rect",{x:"20",y:"30",width:"100",height:"10",fill:"#118AB260"}),t.jsx("line",{x1:"30",y1:"70",x2:"30",y2:"250",stroke:"#118AB2",strokeWidth:"2"}),t.jsx("circle",{cx:"30",cy:"90",r:"6",fill:"#118AB2"}),t.jsx("rect",{x:"45",y:"80",width:"60",height:"8",fill:"#118AB280"}),t.jsx("rect",{x:"45",y:"95",width:"40",height:"6",fill:"#118AB240"}),t.jsx("rect",{x:"45",y:"110",width:"135",height:"6",fill:"#118AB220"}),t.jsx("rect",{x:"45",y:"125",width:"135",height:"6",fill:"#118AB220"}),t.jsx("circle",{cx:"30",cy:"150",r:"6",fill:"#118AB2"}),t.jsx("rect",{x:"45",y:"140",width:"60",height:"8",fill:"#118AB280"}),t.jsx("rect",{x:"45",y:"155",width:"40",height:"6",fill:"#118AB240"}),t.jsx("rect",{x:"45",y:"170",width:"135",height:"6",fill:"#118AB220"}),t.jsx("rect",{x:"45",y:"185",width:"135",height:"6",fill:"#118AB220"}),t.jsx("circle",{cx:"30",cy:"210",r:"6",fill:"#118AB2"}),t.jsx("rect",{x:"45",y:"200",width:"60",height:"8",fill:"#118AB280"}),t.jsx("rect",{x:"45",y:"215",width:"40",height:"6",fill:"#118AB240"}),t.jsx("rect",{x:"45",y:"230",width:"135",height:"6",fill:"#118AB220"}),t.jsx("rect",{x:"45",y:"245",width:"135",height:"6",fill:"#118AB220"})]})},{id:"template10",name:"Skills-Based",description:"Emphasizes competencies over work history",color:"#FFD166",previewContent:t.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 200 280",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{width:"200",height:"280",fill:"#ffffff"}),t.jsx("rect",{x:"10",y:"20",width:"180",height:"40",fill:"#FFD16610"}),t.jsx("rect",{x:"20",y:"30",width:"120",height:"10",fill:"#FFD16680"}),t.jsx("rect",{x:"20",y:"45",width:"80",height:"6",fill:"#FFD16660"}),t.jsx("rect",{x:"10",y:"80",width:"80",height:"8",fill:"#FFD166"}),t.jsx("rect",{x:"10",y:"95",width:"180",height:"6",fill:"#FFD16640",rx:"3"}),t.jsx("rect",{x:"10",y:"95",width:"150",height:"6",fill:"#FFD166",rx:"3"}),t.jsx("rect",{x:"10",y:"110",width:"180",height:"6",fill:"#FFD16640",rx:"3"}),t.jsx("rect",{x:"10",y:"110",width:"120",height:"6",fill:"#FFD166",rx:"3"}),t.jsx("rect",{x:"10",y:"125",width:"180",height:"6",fill:"#FFD16640",rx:"3"}),t.jsx("rect",{x:"10",y:"125",width:"160",height:"6",fill:"#FFD166",rx:"3"}),t.jsx("rect",{x:"10",y:"140",width:"180",height:"6",fill:"#FFD16640",rx:"3"}),t.jsx("rect",{x:"10",y:"140",width:"90",height:"6",fill:"#FFD166",rx:"3"}),t.jsx("rect",{x:"10",y:"170",width:"80",height:"8",fill:"#FFD166"}),t.jsx("rect",{x:"10",y:"185",width:"180",height:"6",fill:"#FFD16620"}),t.jsx("rect",{x:"10",y:"200",width:"180",height:"6",fill:"#FFD16620"}),t.jsx("rect",{x:"10",y:"230",width:"80",height:"8",fill:"#FFD166"}),t.jsx("rect",{x:"10",y:"245",width:"180",height:"6",fill:"#FFD16620"}),t.jsx("rect",{x:"10",y:"260",width:"180",height:"6",fill:"#FFD16620"})]})},{id:"template11",name:"Combination",description:"Balances skills and experience effectively",color:"#073B4C",previewContent:t.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 200 280",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{width:"200",height:"280",fill:"#ffffff"}),t.jsx("rect",{width:"200",height:"60",fill:"#073B4C"}),t.jsx("circle",{cx:"40",cy:"30",r:"20",fill:"white",fillOpacity:"0.2"}),t.jsx("rect",{x:"70",y:"20",width:"120",height:"10",fill:"white",fillOpacity:"0.3"}),t.jsx("rect",{x:"70",y:"35",width:"80",height:"6",fill:"white",fillOpacity:"0.2"}),t.jsx("rect",{x:"10",y:"70",width:"85",height:"100",fill:"#073B4C10"}),t.jsx("rect",{x:"20",y:"80",width:"65",height:"8",fill:"#073B4C50"}),t.jsx("rect",{x:"20",y:"95",width:"65",height:"6",fill:"#073B4C30"}),t.jsx("rect",{x:"20",y:"110",width:"65",height:"6",fill:"#073B4C30"}),t.jsx("rect",{x:"20",y:"125",width:"65",height:"6",fill:"#073B4C30"}),t.jsx("rect",{x:"20",y:"140",width:"65",height:"6",fill:"#073B4C30"}),t.jsx("rect",{x:"105",y:"80",width:"85",height:"8",fill:"#073B4C50"}),t.jsx("rect",{x:"105",y:"95",width:"85",height:"6",fill:"#073B4C30"}),t.jsx("rect",{x:"105",y:"110",width:"85",height:"6",fill:"#073B4C30"}),t.jsx("rect",{x:"105",y:"125",width:"85",height:"6",fill:"#073B4C30"}),t.jsx("rect",{x:"10",y:"180",width:"180",height:"1",fill:"#073B4C30"}),t.jsx("rect",{x:"10",y:"190",width:"80",height:"8",fill:"#073B4C50"}),t.jsx("rect",{x:"10",y:"205",width:"180",height:"6",fill:"#073B4C30"}),t.jsx("rect",{x:"10",y:"220",width:"180",height:"6",fill:"#073B4C30"}),t.jsx("rect",{x:"10",y:"235",width:"180",height:"6",fill:"#073B4C30"}),t.jsx("rect",{x:"10",y:"250",width:"180",height:"6",fill:"#073B4C30"})]})},{id:"template12",name:"ATS-Optimized",description:"Designed to pass applicant tracking systems",color:"#06D6A0",previewContent:t.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 200 280",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{width:"200",height:"280",fill:"#ffffff"}),t.jsx("rect",{x:"10",y:"20",width:"180",height:"15",fill:"#06D6A080"}),t.jsx("rect",{x:"10",y:"45",width:"120",height:"10",fill:"#06D6A060"}),t.jsx("rect",{x:"10",y:"65",width:"180",height:"2",fill:"#06D6A0"}),t.jsx("rect",{x:"10",y:"80",width:"80",height:"8",fill:"#06D6A0"}),t.jsx("rect",{x:"10",y:"95",width:"180",height:"6",fill:"#06D6A020"}),t.jsx("rect",{x:"10",y:"110",width:"180",height:"6",fill:"#06D6A020"}),t.jsx("rect",{x:"10",y:"125",width:"180",height:"6",fill:"#06D6A020"}),t.jsx("rect",{x:"10",y:"140",width:"180",height:"6",fill:"#06D6A020"}),t.jsx("rect",{x:"10",y:"165",width:"80",height:"8",fill:"#06D6A0"}),t.jsx("rect",{x:"10",y:"180",width:"180",height:"6",fill:"#06D6A020"}),t.jsx("rect",{x:"10",y:"195",width:"180",height:"6",fill:"#06D6A020"}),t.jsx("rect",{x:"10",y:"210",width:"180",height:"6",fill:"#06D6A020"}),t.jsx("rect",{x:"10",y:"225",width:"180",height:"6",fill:"#06D6A020"}),t.jsx("rect",{x:"10",y:"250",width:"180",height:"15",fill:"#06D6A040"})]})}],a=u=>{if(p(u),u.id==="template1"){const y=new CustomEvent("navigate",{detail:{page:"professional-resume-template"}});window.dispatchEvent(y)}else if(u.id==="template2"){const y=new CustomEvent("navigate",{detail:{page:"creative-resume-template"}});window.dispatchEvent(y)}else if(u.id==="template3"){const y=new CustomEvent("navigate",{detail:{page:"academic-resume-template"}});window.dispatchEvent(y)}else if(u.id==="template4"){const y=new CustomEvent("navigate",{detail:{page:"technical-resume-template"}});window.dispatchEvent(y)}else if(u.id==="template5"){const y=new CustomEvent("navigate",{detail:{page:"executive-resume-template"}});window.dispatchEvent(y)}else if(u.id==="template6"){const y=new CustomEvent("navigate",{detail:{page:"modern-resume-template"}});window.dispatchEvent(y)}else if(u.id==="template7"){const y=new CustomEvent("navigate",{detail:{page:"simple-resume-template"}});window.dispatchEvent(y)}else if(u.id==="template8"){const y=new CustomEvent("navigate",{detail:{page:"entry-level-resume-template"}});window.dispatchEvent(y)}else console.log(`Selected template: ${u.name}`),alert(`${u.name} template will be available soon!`)};return t.jsxs("div",{className:"resume-templates",children:[t.jsxs("div",{className:"top-bar",children:[t.jsx("button",{className:"back-btn",onClick:T||(()=>window.history.back()),"aria-label":"Go back",title:"Go back",children:"← Back to Tools"}),t.jsx("h1",{children:"Resume Templates"})]}),t.jsxs("div",{className:"templates-header",children:[t.jsx("h1",{children:"Choose a Resume Template"}),t.jsx("p",{children:"Select from our collection of professional, ATS-friendly templates to get started"})]}),t.jsx("div",{className:"templates-grid",children:m.map(u=>t.jsxs("div",{className:"template-card",onClick:()=>a(u),style:{borderTopColor:u.color},children:[t.jsx("div",{className:"template-preview",children:u.previewContent}),t.jsxs("div",{className:"template-info",children:[t.jsxs("div",{className:"template-description",children:[t.jsx("h3",{children:u.name}),t.jsx("p",{children:u.description})]}),t.jsx("div",{className:"template-button",children:t.jsx("button",{className:"use-template-btn",style:{backgroundColor:u.color},children:"Use This Template"})})]})]},u.id))})]})}const Jc=({data:T})=>{const p=T||(()=>{try{const m=localStorage.getItem("userProfileData");if(m){const a=JSON.parse(m);return{fullName:a.personalInfo?.fullName?.toUpperCase()||"JOHN DOE",jobTitle:a.experience?.[0]?.title||"Senior Software Engineer",email:a.personalInfo?.email||"john.doe@email.com",phone:a.personalInfo?.phone||"(555) 123-4567",location:a.personalInfo?.location||"San Francisco, CA",linkedin:a.personalInfo?.linkedin||"linkedin.com/in/johndoe",summary:a.personalInfo?.aboutMe||"Experienced software engineer with 8+ years developing scalable web applications and leading cross-functional teams.",experiences:a.experience?.map(u=>({title:u.title||"",company:u.company||"",location:a.personalInfo?.location||"",startDate:u.duration?.split(" - ")[0]||"",endDate:u.duration?.split(" - ")[1]||"",responsibilities:[u.description||""]}))||[{title:"Senior Software Engineer",company:"Tech Corp",location:"San Francisco, CA",startDate:"2020",endDate:"Present",responsibilities:["Led development of microservices architecture serving 1M+ users","Mentored junior developers and conducted code reviews","Implemented CI/CD pipelines reducing deployment time by 50%"]}],education:a.education?.map(u=>({degree:u.degree||"",school:u.school||"",startDate:u.year?.split(" - ")[0]||"",endDate:u.year?.split(" - ")[1]||""}))||[{degree:"Bachelor of Science in Computer Science",school:"University of Technology",startDate:"2012",endDate:"2016"}],technicalSkills:a.skills?.slice(0,Math.ceil((a.skills?.length||0)/2))||["JavaScript","React","Node.js","Python","Docker"],businessSkills:a.skills?.slice(Math.ceil((a.skills?.length||0)/2))||["Project Management","Team Leadership","Agile/Scrum"],certifications:[{name:"AWS Certified Solutions Architect",issuer:"Amazon Web Services",year:"2022"}],languages:[{language:"English",proficiency:"Native"}]}}}catch(m){console.error("Error loading profile data:",m)}return{fullName:"JOHN DOE",jobTitle:"Senior Software Engineer",email:"john.doe@email.com",phone:"(555) 123-4567",location:"San Francisco, CA",linkedin:"linkedin.com/in/johndoe",summary:"Experienced software engineer with 8+ years developing scalable web applications and leading cross-functional teams.",experiences:[{title:"Senior Software Engineer",company:"Tech Corp",location:"San Francisco, CA",startDate:"2020",endDate:"Present",responsibilities:["Led development of microservices architecture serving 1M+ users","Mentored junior developers and conducted code reviews","Implemented CI/CD pipelines reducing deployment time by 50%"]}],education:[{degree:"Bachelor of Science in Computer Science",school:"University of Technology",startDate:"2012",endDate:"2016"}],technicalSkills:["JavaScript","React","Node.js","Python","Docker"],businessSkills:["Project Management","Team Leadership","Agile/Scrum"],certifications:[{name:"AWS Certified Solutions Architect",issuer:"Amazon Web Services",year:"2022"}],languages:[{language:"English",proficiency:"Native"}]}})();return t.jsxs("div",{style:{fontFamily:"Inter, sans-serif",maxWidth:"1024px",margin:"0 auto",background:"white",color:"#333",lineHeight:"1.6"},children:[t.jsxs("div",{style:{background:"#4A5568 !important",color:"white !important",padding:"2.5rem 2rem",textAlign:"center"},children:[t.jsx("h1",{style:{fontSize:"3rem !important",fontWeight:"700 !important",margin:"0 0 0.5rem 0 !important",letterSpacing:"0.05em !important",color:"white !important"},children:p.fullName}),t.jsx("h2",{style:{fontSize:"1.5rem !important",color:"#e5e7eb !important",margin:"0 0 1.5rem 0 !important",fontWeight:"400 !important"},children:p.jobTitle}),t.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"2.5rem",flexWrap:"wrap",fontSize:"1rem !important",color:"white !important"},children:[t.jsxs("span",{style:{color:"white !important"},children:["📧 ",p.email]}),t.jsxs("span",{style:{color:"white !important"},children:["📞 ",p.phone]}),t.jsxs("span",{style:{color:"white !important"},children:["📍 ",p.location]}),t.jsxs("span",{style:{color:"white !important"},children:["🔗 ",p.linkedin]})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3rem",padding:"2.5rem"},children:[t.jsxs("div",{children:[t.jsxs("section",{style:{marginBottom:"2.5rem"},children:[t.jsx("h3",{style:{fontSize:"1.4rem !important",fontWeight:"600 !important",color:"#4A5568 !important",marginBottom:"1rem !important",borderBottom:"3px solid #3182CE !important",paddingBottom:"0.5rem !important"},children:"Professional Summary"}),t.jsx("p",{style:{lineHeight:"1.7 !important",margin:"0 !important",color:"#4A5568 !important",fontSize:"0.95rem !important"},children:p.summary})]}),t.jsxs("section",{children:[t.jsx("h3",{style:{fontSize:"1.4rem !important",fontWeight:"600 !important",color:"#4A5568 !important",marginBottom:"1.5rem !important",borderBottom:"3px solid #3182CE !important",paddingBottom:"0.5rem !important"},children:"Work Experience"}),p.experiences.map((m,a)=>t.jsxs("div",{style:{marginBottom:"2rem"},children:[t.jsxs("div",{style:{marginBottom:"0.75rem"},children:[t.jsx("div",{style:{fontWeight:"600 !important",color:"#4A5568 !important",fontSize:"1.1rem !important",marginBottom:"0.25rem !important"},children:m.title}),t.jsxs("div",{style:{color:"#718096 !important",fontWeight:"500 !important",marginBottom:"0.25rem !important"},children:[m.company," • ",m.location]}),t.jsxs("div",{style:{color:"#A0AEC0 !important",fontSize:"0.9rem !important"},children:[m.startDate," - ",m.endDate]})]}),t.jsx("ul",{style:{listStyleType:"disc !important",paddingLeft:"1.5rem !important",color:"#4A5568 !important",margin:"0 !important"},children:m.responsibilities.map((u,y)=>t.jsx("li",{style:{marginBottom:"0.4rem !important",fontSize:"0.95rem !important",color:"#4A5568 !important"},children:u},y))})]},a))]})]}),t.jsxs("div",{children:[t.jsxs("section",{style:{marginBottom:"2.5rem"},children:[t.jsx("h3",{style:{fontSize:"1.4rem !important",fontWeight:"600 !important",color:"#4A5568 !important",marginBottom:"1.5rem !important",borderBottom:"3px solid #3182CE !important",paddingBottom:"0.5rem !important"},children:"Skills"}),t.jsxs("div",{style:{marginBottom:"1.5rem"},children:[t.jsx("h4",{style:{fontWeight:"600 !important",marginBottom:"0.75rem !important",color:"#4A5568 !important",fontSize:"1.1rem !important"},children:"Technical Skills"}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:p.technicalSkills.map((m,a)=>t.jsx("span",{style:{background:"#EDF2F7 !important",padding:"0.4rem 0.8rem !important",borderRadius:"6px !important",fontSize:"0.9rem !important",color:"#4A5568 !important",fontWeight:"500 !important"},children:m},a))})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{fontWeight:"600 !important",marginBottom:"0.75rem !important",color:"#4A5568 !important",fontSize:"1.1rem !important"},children:"Business Skills"}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:p.businessSkills.map((m,a)=>t.jsx("span",{style:{background:"#EDF2F7 !important",padding:"0.4rem 0.8rem !important",borderRadius:"6px !important",fontSize:"0.9rem !important",color:"#4A5568 !important",fontWeight:"500 !important"},children:m},a))})]})]}),t.jsxs("section",{style:{marginBottom:"2.5rem"},children:[t.jsx("h3",{style:{fontSize:"1.4rem !important",fontWeight:"600 !important",color:"#4A5568 !important",marginBottom:"1.5rem !important",borderBottom:"3px solid #3182CE !important",paddingBottom:"0.5rem !important"},children:"Education"}),p.education.map((m,a)=>t.jsxs("div",{style:{marginBottom:"1.25rem"},children:[t.jsx("div",{style:{fontWeight:"600 !important",color:"#4A5568 !important",fontSize:"1.05rem !important",marginBottom:"0.25rem !important"},children:m.degree}),t.jsx("div",{style:{color:"#718096 !important",fontWeight:"500 !important",marginBottom:"0.25rem !important"},children:m.school}),t.jsxs("div",{style:{color:"#A0AEC0 !important",fontSize:"0.9rem !important"},children:[m.startDate," - ",m.endDate]})]},a))]}),t.jsxs("section",{style:{marginBottom:"2.5rem"},children:[t.jsx("h3",{style:{fontSize:"1.4rem !important",fontWeight:"600 !important",color:"#4A5568 !important",marginBottom:"1.5rem !important",borderBottom:"3px solid #3182CE !important",paddingBottom:"0.5rem !important"},children:"Certifications"}),p.certifications.map((m,a)=>t.jsxs("div",{style:{marginBottom:"1.25rem"},children:[t.jsx("div",{style:{fontWeight:"600 !important",color:"#4A5568 !important",fontSize:"1.05rem !important",marginBottom:"0.25rem !important"},children:m.name}),t.jsx("div",{style:{color:"#718096 !important",fontWeight:"500 !important",marginBottom:"0.25rem !important"},children:m.issuer}),t.jsx("div",{style:{color:"#A0AEC0 !important",fontSize:"0.9rem !important"},children:m.year})]},a))]}),t.jsxs("section",{children:[t.jsx("h3",{style:{fontSize:"1.4rem !important",fontWeight:"600 !important",color:"#4A5568 !important",marginBottom:"1.5rem !important",borderBottom:"3px solid #3182CE !important",paddingBottom:"0.5rem !important"},children:"Languages"}),p.languages.map((m,a)=>t.jsxs("div",{style:{marginBottom:"0.75rem"},children:[t.jsx("div",{style:{fontWeight:"600 !important",color:"#4A5568 !important",fontSize:"1.05rem !important",marginBottom:"0.25rem !important"},children:m.language}),t.jsx("div",{style:{color:"#718096 !important",fontSize:"0.9rem !important"},children:m.proficiency})]},a))]})]})]})]})},Gc=({onNavigateBack:T,onSave:_,initialData:p})=>{const m=()=>{try{const h=localStorage.getItem("userProfileData");if(h){const l=JSON.parse(h);return{fullName:l.personalInfo?.fullName?.toUpperCase()||"JOHN DOE",jobTitle:l.experience?.[0]?.title||"Senior Software Engineer",email:l.personalInfo?.email||"john.doe@email.com",phone:l.personalInfo?.phone||"(555) 123-4567",location:l.personalInfo?.location||"San Francisco, CA",linkedin:l.personalInfo?.linkedin||"linkedin.com/in/johndoe",summary:l.personalInfo?.aboutMe||"Experienced software engineer with 8+ years developing scalable web applications and leading cross-functional teams.",experiences:l.experience?.map(c=>({title:c.title||"",company:c.company||"",location:l.personalInfo?.location||"",startDate:c.duration?.split(" - ")[0]||"",endDate:c.duration?.split(" - ")[1]||"",responsibilities:[c.description||""]}))||[{title:"Senior Software Engineer",company:"Tech Corp",location:"San Francisco, CA",startDate:"2020",endDate:"Present",responsibilities:["Led development of microservices architecture serving 1M+ users","Mentored junior developers and conducted code reviews","Implemented CI/CD pipelines reducing deployment time by 50%"]}],education:l.education?.map(c=>({degree:c.degree||"",school:c.school||"",startDate:c.year?.split(" - ")[0]||"",endDate:c.year?.split(" - ")[1]||""}))||[{degree:"Bachelor of Science in Computer Science",school:"University of Technology",startDate:"2012",endDate:"2016"}],technicalSkills:l.skills?.slice(0,Math.ceil((l.skills?.length||0)/2))||["JavaScript","React","Node.js","Python","Docker"],businessSkills:l.skills?.slice(Math.ceil((l.skills?.length||0)/2))||["Project Management","Team Leadership","Agile/Scrum"],certifications:[{name:"AWS Certified Solutions Architect",issuer:"Amazon Web Services",year:"2022"}],languages:[{language:"English",proficiency:"Native"}]}}}catch(h){console.error("Error loading profile data:",h)}return{fullName:"JOHN DOE",jobTitle:"Senior Software Engineer",email:"john.doe@email.com",phone:"(555) 123-4567",location:"San Francisco, CA",linkedin:"linkedin.com/in/johndoe",summary:"Experienced software engineer with 8+ years developing scalable web applications and leading cross-functional teams.",experiences:[{title:"Senior Software Engineer",company:"Tech Corp",location:"San Francisco, CA",startDate:"2020",endDate:"Present",responsibilities:["Led development of microservices architecture serving 1M+ users","Mentored junior developers and conducted code reviews","Implemented CI/CD pipelines reducing deployment time by 50%"]}],education:[{degree:"Bachelor of Science in Computer Science",school:"University of Technology",startDate:"2012",endDate:"2016"}],technicalSkills:["JavaScript","React","Node.js","Python","Docker"],businessSkills:["Project Management","Team Leadership","Agile/Scrum"],certifications:[{name:"AWS Certified Solutions Architect",issuer:"Amazon Web Services",year:"2022"}],languages:[{language:"English",proficiency:"Native"}]}},[a,u]=X.useState(p||m()),[y,M]=X.useState("personal"),I=(h,l)=>{u(c=>({...c,[h]:l}))},v=h=>{u(l=>({...l,summary:h}))},P=(h,l,c)=>{u(f=>({...f,experiences:f.experiences.map((w,$)=>$===h?{...w,[l]:c}:w)}))},q=(h,l,c)=>{u(f=>({...f,experiences:f.experiences.map((w,$)=>$===h?{...w,responsibilities:w.responsibilities.map((te,ae)=>ae===l?c:te)}:w)}))},L=()=>{u(h=>({...h,experiences:[...h.experiences,{title:"",company:"",location:"",startDate:"",endDate:"",responsibilities:[""]}]}))},Z=h=>{a.experiences.length>1&&u(l=>({...l,experiences:l.experiences.filter((c,f)=>f!==h)}))},ee=h=>{u(l=>({...l,experiences:l.experiences.map((c,f)=>f===h?{...c,responsibilities:[...c.responsibilities,""]}:c)}))},K=(h,l)=>{u(c=>({...c,experiences:c.experiences.map((f,w)=>w===h?{...f,responsibilities:f.responsibilities.filter(($,te)=>te!==l)}:f)}))},Y=(h,l,c)=>{u(f=>({...f,[h]:f[h].map((w,$)=>$===l?c:w)}))},J=h=>{u(l=>({...l,[h]:[...l[h],""]}))},ue=(h,l)=>{a[h].length>1&&u(c=>({...c,[h]:c[h].filter((f,w)=>w!==l)}))},ce=(h,l,c)=>{u(f=>({...f,education:f.education.map((w,$)=>$===h?{...w,[l]:c}:w)}))},me=()=>{u(h=>({...h,education:[...h.education,{degree:"",school:"",startDate:"",endDate:""}]}))},ge=h=>{a.education.length>1&&u(l=>({...l,education:l.education.filter((c,f)=>f!==h)}))},le=(h,l,c)=>{u(f=>({...f,certifications:f.certifications.map((w,$)=>$===h?{...w,[l]:c}:w)}))},ye=()=>{u(h=>({...h,certifications:[...h.certifications,{name:"",issuer:"",year:""}]}))},je=h=>{a.certifications.length>1&&u(l=>({...l,certifications:l.certifications.filter((c,f)=>f!==h)}))},he=(h,l,c)=>{u(f=>({...f,languages:f.languages.map((w,$)=>$===h?{...w,[l]:c}:w)}))},we=()=>{u(h=>({...h,languages:[...h.languages,{language:"",proficiency:""}]}))},V=h=>{a.languages.length>1&&u(l=>({...l,languages:l.languages.filter((c,f)=>f!==h)}))},Q=()=>{_(a)},N=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Personal Information"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Full Name"}),t.jsx("input",{type:"text",value:a.fullName,onChange:h=>I("fullName",h.target.value),className:"form-input",placeholder:"Your Full Name"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Job Title"}),t.jsx("input",{type:"text",value:a.jobTitle,onChange:h=>I("jobTitle",h.target.value),className:"form-input",placeholder:"Your Job Title"})]}),t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",value:a.email,onChange:h=>I("email",h.target.value),className:"form-input",placeholder:"your.email@example.com"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Phone"}),t.jsx("input",{type:"text",value:a.phone,onChange:h=>I("phone",h.target.value),className:"form-input",placeholder:"(555) 123-4567"})]})]}),t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Location"}),t.jsx("input",{type:"text",value:a.location,onChange:h=>I("location",h.target.value),className:"form-input",placeholder:"City, State"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"LinkedIn"}),t.jsx("input",{type:"text",value:a.linkedin,onChange:h=>I("linkedin",h.target.value),className:"form-input",placeholder:"linkedin.com/in/yourprofile"})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Professional Summary"}),t.jsx("textarea",{value:a.summary,onChange:h=>v(h.target.value),className:"form-textarea",rows:"4",placeholder:"Brief professional summary highlighting your experience and key skills..."})]})]}),S=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Work Experience"}),a.experiences.map((h,l)=>t.jsxs("div",{className:"experience-item",children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Job Title"}),t.jsx("input",{type:"text",value:h.title,onChange:c=>P(l,"title",c.target.value),className:"form-input",placeholder:"Senior Software Engineer"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Company"}),t.jsx("input",{type:"text",value:h.company,onChange:c=>P(l,"company",c.target.value),className:"form-input",placeholder:"Company Name"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Location"}),t.jsx("input",{type:"text",value:h.location,onChange:c=>P(l,"location",c.target.value),className:"form-input",placeholder:"San Francisco, CA"})]})]}),t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Start Date"}),t.jsx("input",{type:"text",value:h.startDate,onChange:c=>P(l,"startDate",c.target.value),className:"form-input",placeholder:"2020"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"End Date"}),t.jsx("input",{type:"text",value:h.endDate,onChange:c=>P(l,"endDate",c.target.value),className:"form-input",placeholder:"Present"})]})]}),t.jsxs("div",{className:"responsibilities-section",children:[t.jsx("label",{children:"Responsibilities"}),h.responsibilities.map((c,f)=>t.jsxs("div",{className:"qualification-item",children:[t.jsx("textarea",{value:c,onChange:w=>q(l,f,w.target.value),className:"form-textarea",rows:"2",placeholder:"Describe your key responsibilities and achievements..."}),t.jsx("button",{onClick:()=>K(l,f),className:"remove-btn",disabled:h.responsibilities.length===1,children:"✕"})]},f)),t.jsx("button",{onClick:()=>ee(l),className:"add-btn",children:"+ Add Responsibility"})]}),t.jsx("button",{onClick:()=>Z(l),className:"remove-btn",style:{marginTop:"10px"},disabled:a.experiences.length===1,children:"Remove Experience"})]},l)),t.jsx("button",{onClick:L,className:"add-btn",children:"+ Add Experience"})]}),A=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Skills"}),t.jsxs("div",{className:"skills-subsection",children:[t.jsx("h4",{children:"Technical Skills"}),a.technicalSkills.map((h,l)=>t.jsxs("div",{className:"qualification-item",children:[t.jsx("input",{type:"text",value:h,onChange:c=>Y("technicalSkills",l,c.target.value),className:"form-input",placeholder:"JavaScript, React, Node.js..."}),t.jsx("button",{onClick:()=>ue("technicalSkills",l),className:"remove-btn",disabled:a.technicalSkills.length===1,children:"✕"})]},l)),t.jsx("button",{onClick:()=>J("technicalSkills"),className:"add-btn",children:"+ Add Technical Skill"})]}),t.jsxs("div",{className:"skills-subsection",children:[t.jsx("h4",{children:"Business Skills"}),a.businessSkills.map((h,l)=>t.jsxs("div",{className:"qualification-item",children:[t.jsx("input",{type:"text",value:h,onChange:c=>Y("businessSkills",l,c.target.value),className:"form-input",placeholder:"Project Management, Team Leadership..."}),t.jsx("button",{onClick:()=>ue("businessSkills",l),className:"remove-btn",disabled:a.businessSkills.length===1,children:"✕"})]},l)),t.jsx("button",{onClick:()=>J("businessSkills"),className:"add-btn",children:"+ Add Business Skill"})]})]}),j=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Education"}),a.education.map((h,l)=>t.jsxs("div",{className:"education-item",children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Degree"}),t.jsx("input",{type:"text",value:h.degree,onChange:c=>ce(l,"degree",c.target.value),className:"form-input",placeholder:"Bachelor of Science in Computer Science"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"School"}),t.jsx("input",{type:"text",value:h.school,onChange:c=>ce(l,"school",c.target.value),className:"form-input",placeholder:"University of Technology"})]})]}),t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Start Date"}),t.jsx("input",{type:"text",value:h.startDate,onChange:c=>ce(l,"startDate",c.target.value),className:"form-input",placeholder:"2012"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"End Date"}),t.jsx("input",{type:"text",value:h.endDate,onChange:c=>ce(l,"endDate",c.target.value),className:"form-input",placeholder:"2016"})]})]}),t.jsx("button",{onClick:()=>ge(l),className:"remove-btn",style:{marginTop:"10px"},disabled:a.education.length===1,children:"Remove Education"})]},l)),t.jsx("button",{onClick:me,className:"add-btn",children:"+ Add Education"})]}),R=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Certifications"}),a.certifications.map((h,l)=>t.jsxs("div",{className:"certification-item",children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Certification Name"}),t.jsx("input",{type:"text",value:h.name,onChange:c=>le(l,"name",c.target.value),className:"form-input",placeholder:"AWS Certified Solutions Architect"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Issuer"}),t.jsx("input",{type:"text",value:h.issuer,onChange:c=>le(l,"issuer",c.target.value),className:"form-input",placeholder:"Amazon Web Services"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Year"}),t.jsx("input",{type:"text",value:h.year,onChange:c=>le(l,"year",c.target.value),className:"form-input",placeholder:"2022"})]})]}),t.jsx("button",{onClick:()=>je(l),className:"remove-btn",style:{marginTop:"10px"},disabled:a.certifications.length===1,children:"Remove Certification"})]},l)),t.jsx("button",{onClick:ye,className:"add-btn",children:"+ Add Certification"})]}),C=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Languages"}),a.languages.map((h,l)=>t.jsxs("div",{className:"language-item",children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Language"}),t.jsx("input",{type:"text",value:h.language,onChange:c=>he(l,"language",c.target.value),className:"form-input",placeholder:"English"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Proficiency"}),t.jsx("input",{type:"text",value:h.proficiency,onChange:c=>he(l,"proficiency",c.target.value),className:"form-input",placeholder:"Native, Fluent, Conversational"})]})]}),t.jsx("button",{onClick:()=>V(l),className:"remove-btn",style:{marginTop:"10px"},disabled:a.languages.length===1,children:"Remove Language"})]},l)),t.jsx("button",{onClick:we,className:"add-btn",children:"+ Add Language"})]}),B=()=>{switch(y){case"personal":return N();case"experience":return S();case"skills":return A();case"education":return j();case"certifications":return R();case"languages":return C();default:return N()}};return t.jsxs("div",{className:"template-editor",children:[t.jsxs("div",{className:"editor-header",children:[t.jsx("button",{className:"back-btn",onClick:T,children:"← Back to Templates"}),t.jsx("h1",{children:"Professional Resume Editor"}),t.jsx("button",{className:"save-btn",onClick:Q,children:"💾 Save Template"})]}),t.jsxs("div",{className:"editor-content",children:[t.jsx("div",{className:"editor-sidebar",children:t.jsxs("nav",{className:"editor-nav",children:[t.jsx("button",{className:`nav-item ${y==="personal"?"active":""}`,onClick:()=>M("personal"),children:"👤 Personal Info"}),t.jsx("button",{className:`nav-item ${y==="experience"?"active":""}`,onClick:()=>M("experience"),children:"💼 Experience"}),t.jsx("button",{className:`nav-item ${y==="skills"?"active":""}`,onClick:()=>M("skills"),children:"🛠️ Skills"}),t.jsx("button",{className:`nav-item ${y==="education"?"active":""}`,onClick:()=>M("education"),children:"🎓 Education"}),t.jsx("button",{className:`nav-item ${y==="certifications"?"active":""}`,onClick:()=>M("certifications"),children:"📜 Certifications"}),t.jsx("button",{className:`nav-item ${y==="languages"?"active":""}`,onClick:()=>M("languages"),children:"🌐 Languages"})]})}),t.jsx("div",{className:"editor-main",children:t.jsx("div",{className:"editor-form",children:B()})}),t.jsxs("div",{className:"editor-preview",children:[t.jsx("h3",{children:"Live Preview"}),t.jsx("div",{className:"preview-container",children:t.jsx("div",{style:{backgroundImage:'url("/professional.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"100%",minHeight:"400px",borderRadius:"8px",position:"relative"},children:t.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:"8px"},children:t.jsx("div",{style:{transform:"scale(0.4)",transformOrigin:"top left",width:"250%",height:"250%"},children:t.jsx(Jc,{data:a})})})})})]})]})]})};function fu({onNavigateBack:T,onEdit:_}){const[p,m]=X.useState("preview"),[a,u]=X.useState(null),y=()=>{_?_():m("editor")},M=()=>{m("preview")},I=P=>{u(P)},v=()=>{const q=a||(()=>{try{const ee=localStorage.getItem("userProfileData");if(ee){const K=JSON.parse(ee);return{fullName:K.personalInfo?.fullName?.toUpperCase()||"YOUR NAME",jobTitle:K.experience?.[0]?.title||"Your Job Title",email:K.personalInfo?.email||"your.email@example.com",phone:K.personalInfo?.phone||"(123) 456-7890",location:K.personalInfo?.location||"Your Location",linkedin:K.personalInfo?.linkedin||"linkedin.com/in/yourprofile",summary:K.personalInfo?.aboutMe||"Professional with extensive experience in the field.",experiences:K.experience?.map(Y=>({title:Y.title||"",company:Y.company||"",location:K.personalInfo?.location||"",startDate:Y.duration?.split(" - ")[0]||"",endDate:Y.duration?.split(" - ")[1]||"",responsibilities:[Y.description||""]}))||[],education:K.education?.map(Y=>({degree:Y.degree||"",school:Y.school||"",startDate:Y.year?.split(" - ")[0]||"",endDate:Y.year?.split(" - ")[1]||""}))||[],technicalSkills:K.skills?.slice(0,Math.ceil((K.skills?.length||0)/2))||[],businessSkills:K.skills?.slice(Math.ceil((K.skills?.length||0)/2))||[],certifications:[{name:"Professional Certification",issuer:"Professional Body",year:"2023"}],languages:[{language:"English",proficiency:"Native"}]}}}catch(ee){console.error("Error loading profile data:",ee)}return{fullName:"JOHN DOE",jobTitle:"Senior Software Engineer",email:"john.doe@email.com",phone:"(555) 123-4567",location:"San Francisco, CA",linkedin:"linkedin.com/in/johndoe",summary:"Experienced software engineer with 8+ years developing scalable web applications and leading cross-functional teams.",experiences:[{title:"Senior Software Engineer",company:"Tech Corp",location:"San Francisco, CA",startDate:"2020",endDate:"Present",responsibilities:["Led development of microservices architecture serving 1M+ users","Mentored junior developers and conducted code reviews","Implemented CI/CD pipelines reducing deployment time by 50%"]}],education:[{degree:"Bachelor of Science in Computer Science",school:"University of Technology",startDate:"2012",endDate:"2016"}],technicalSkills:["JavaScript","React","Node.js","Python","Docker"],businessSkills:["Project Management","Team Leadership","Agile/Scrum"],certifications:[{name:"AWS Certified Solutions Architect",issuer:"Amazon Web Services",year:"2022"}],languages:[{language:"English",proficiency:"Native"}]}})(),L=window.open("","_blank"),Z=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Professional Resume - ${q.fullName}</title>
          <meta charset="UTF-8">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Inter', sans-serif !important;
              background: white !important;
              color: #333 !important;
              line-height: 1.6 !important;
              -webkit-font-smoothing: antialiased !important;
            }
            .resume-container {
              max-width: 1024px;
              margin: 0 auto;
              background: white !important;
              color: #333 !important;
              line-height: 1.6 !important;
            }
            .resume-header {
              background: #4A5568 !important;
              color: white !important;
              padding: 2.5rem 2rem;
              text-align: center;
            }
            .resume-name {
              font-size: 3rem !important;
              font-weight: 700 !important;
              margin: 0 0 0.5rem 0 !important;
              letter-spacing: 0.05em !important;
              color: white !important;
            }
            .resume-title {
              font-size: 1.5rem !important;
              color: #e5e7eb !important;
              margin: 0 0 1.5rem 0 !important;
              font-weight: 400 !important;
            }
            .resume-contact {
              display: flex;
              justify-content: center;
              gap: 2.5rem;
              flex-wrap: wrap;
              font-size: 1rem !important;
              color: white !important;
            }
            .resume-contact span {
              color: white !important;
            }
            .resume-content {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 3rem;
              padding: 2.5rem;
            }
            .section-title {
              font-size: 1.4rem !important;
              font-weight: 600 !important;
              color: #4A5568 !important;
              margin-bottom: 1.5rem !important;
              border-bottom: 3px solid #3182CE !important;
              padding-bottom: 0.5rem !important;
            }
            .experience-item, .education-item {
              margin-bottom: 2rem;
            }
            .experience-header {
              margin-bottom: 0.75rem;
            }
            .experience-title {
              font-weight: 600 !important;
              color: #4A5568 !important;
              font-size: 1.1rem !important;
              margin-bottom: 0.25rem !important;
            }
            .experience-company {
              color: #718096 !important;
              font-weight: 500 !important;
              margin-bottom: 0.25rem !important;
            }
            .experience-date {
              color: #A0AEC0 !important;
              font-size: 0.9rem !important;
            }
            .responsibilities {
              list-style-type: disc !important;
              padding-left: 1.5rem !important;
              color: #4A5568 !important;
              margin: 0 !important;
            }
            .responsibilities li {
              margin-bottom: 0.4rem !important;
              font-size: 0.95rem !important;
              color: #4A5568 !important;
            }
            .skills-grid {
              margin-bottom: 1.5rem;
            }
            .skill-category {
              margin-bottom: 1.5rem;
            }
            .skill-category h4 {
              font-weight: 600 !important;
              margin-bottom: 0.75rem !important;
              color: #4A5568 !important;
              font-size: 1.1rem !important;
            }
            .skill-list {
              display: flex;
              flex-wrap: wrap;
              gap: 0.5rem;
            }
            .skill-item {
              background: #EDF2F7 !important;
              padding: 0.4rem 0.8rem !important;
              border-radius: 6px !important;
              font-size: 0.9rem !important;
              color: #4A5568 !important;
              font-weight: 500 !important;
            }
            @media print {
              body { 
                margin: 0 !important; 
                padding: 0 !important; 
                background: white !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              .resume-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
              }
              .resume-header {
                background: #4A5568 !important;
                color: white !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              .resume-name, .resume-title, .resume-contact, .resume-contact span {
                color: white !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              .section-title {
                border-bottom: 3px solid #3182CE !important;
                color: #4A5568 !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              .skill-item {
                background: #EDF2F7 !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              @page {
                margin: 0.5in;
                size: A4;
              }
            }
          </style>
        </head>
        <body>
          <div class="resume-container">
            <div class="resume-header">
              <h1 class="resume-name">${q.fullName}</h1>
              <h2 class="resume-title">${q.jobTitle}</h2>
              <div class="resume-contact">
                <span>📧 ${q.email}</span>
                <span>📞 ${q.phone}</span>
                <span>📍 ${q.location}</span>
                <span>🔗 ${q.linkedin}</span>
              </div>
            </div>
            
            <div class="resume-content">
              <div class="left-column">
                <section class="summary-section">
                  <h3 class="section-title">Professional Summary</h3>
                  <p style="line-height: 1.7 !important; margin: 0 !important; color: #4A5568 !important; font-size: 0.95rem !important;">${q.summary}</p>
                </section>
                
                <section class="experience-section">
                  <h3 class="section-title">Work Experience</h3>
                  ${q.experiences.map(ee=>`
                    <div class="experience-item">
                      <div class="experience-header">
                        <div class="experience-title">${ee.title}</div>
                        <div class="experience-company">${ee.company} • ${ee.location}</div>
                        <div class="experience-date">${ee.startDate} - ${ee.endDate}</div>
                      </div>
                      <ul class="responsibilities">
                        ${ee.responsibilities.map(K=>`<li>${K}</li>`).join("")}
                      </ul>
                    </div>
                  `).join("")}
                </section>
              </div>
              
              <div class="right-column">
                <section class="skills-section">
                  <h3 class="section-title">Skills</h3>
                  <div class="skill-category">
                    <h4>Technical Skills</h4>
                    <div class="skill-list">
                      ${q.technicalSkills.map(ee=>`<span class="skill-item">${ee}</span>`).join("")}
                    </div>
                  </div>
                  <div class="skill-category">
                    <h4>Business Skills</h4>
                    <div class="skill-list">
                      ${q.businessSkills.map(ee=>`<span class="skill-item">${ee}</span>`).join("")}
                    </div>
                  </div>
                </section>
                
                <section class="education-section">
                  <h3 class="section-title">Education</h3>
                  ${q.education.map(ee=>`
                    <div class="education-item">
                      <div class="experience-title">${ee.degree}</div>
                      <div class="experience-company">${ee.school}</div>
                      <div class="experience-date">${ee.startDate} - ${ee.endDate}</div>
                    </div>
                  `).join("")}
                </section>
                
                <section class="certifications-section">
                  <h3 class="section-title">Certifications</h3>
                  ${q.certifications.map(ee=>`
                    <div class="education-item">
                      <div class="experience-title">${ee.name}</div>
                      <div class="experience-company">${ee.issuer}</div>
                      <div class="experience-date">${ee.year}</div>
                    </div>
                  `).join("")}
                </section>
                
                <section class="languages-section">
                  <h3 class="section-title">Languages</h3>
                  ${q.languages.map(ee=>`
                    <div class="education-item">
                      <div class="experience-title">${ee.language}</div>
                      <div class="experience-company">${ee.proficiency}</div>
                    </div>
                  `).join("")}
                </section>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;L.document.write(Z),L.document.close(),setTimeout(()=>{L.focus(),L.print()},2e3)};return p==="editor"?t.jsx(Gc,{onNavigateBack:M,onSave:I,initialData:a}):t.jsxs("div",{className:"resume-template-page",children:[t.jsxs("div",{className:"template-header",children:[t.jsx("button",{className:"back-btn",onClick:T||(()=>window.history.back()),"aria-label":"Go back",title:"Go back to templates",children:"← Back to Templates"}),t.jsxs("div",{className:"template-title",children:[t.jsx("h1",{children:"Professional Resume Template"}),t.jsx("p",{children:"Clean and modern layout for all professional positions"})]}),t.jsxs("div",{className:"template-actions",children:[t.jsx("button",{className:"edit-btn",onClick:y,children:"✏️ Edit Template"}),t.jsx("button",{className:"download-btn",onClick:v,children:"📄 Download PDF"})]})]}),t.jsx("div",{className:"template-preview-container",children:t.jsx("div",{className:"template-preview-wrapper",children:t.jsx(Jc,{data:a})})}),t.jsx("div",{className:"template-features",children:t.jsxs("div",{className:"features-grid",children:[t.jsxs("div",{className:"feature",children:[t.jsx("div",{className:"feature-icon",children:"💼"}),t.jsx("h3",{children:"Professional Design"}),t.jsx("p",{children:"Clean and sophisticated layout that makes a great first impression"})]}),t.jsxs("div",{className:"feature",children:[t.jsx("div",{className:"feature-icon",children:"📊"}),t.jsx("h3",{children:"Skills Showcase"}),t.jsx("p",{children:"Organized sections to highlight your technical and business skills"})]}),t.jsxs("div",{className:"feature",children:[t.jsx("div",{className:"feature-icon",children:"🎯"}),t.jsx("h3",{children:"ATS Friendly"}),t.jsx("p",{children:"Optimized format that works well with applicant tracking systems"})]}),t.jsxs("div",{className:"feature",children:[t.jsx("div",{className:"feature-icon",children:"📱"}),t.jsx("h3",{children:"Print Ready"}),t.jsx("p",{children:"Perfectly formatted for both digital viewing and professional printing"})]})]})})]})}function Vc({onNavigateBack:T,onSave:_,initialData:p}){const m={name:"ELLIOT WU",photo:null,location:"PHILADELPHIA, PA 19001",phone:"(555) 555-5555",email:"EXAMPLE@EXAMPLE.COM",summary:"Results-driven marketing researcher with over 10 years of experience specializing in consumer behavior, brand strategy and digital marketing analytics. Proven expertise in leading cross-functional research projects, delivering actionable insights and driving 15% year-over-year revenue growth for Fortune 500 clients. Skilled in advanced statistical methods, market segmentation and developing predictive models that optimize marketing strategies. Published author with a strong track record of impactful research and peer-reviewed articles.",qualifications:{left:["Quantitative and qualitative research","Consumer behavior analysis","Digital marketing analytics","Data visualization (Tableau, Power BI)"],right:["Advanced statistical analysis (R, Python)","Predictive modeling and machine learning","Survey design and administration","Strategic communication and reporting"]},education:[{degree:"Master of Science - Digital Marketing",school:"Temple University",location:"Philadelphia, PA",details:["GPA: 3.8","Honors: Magna cum laude","Thesis: Measuring the Effectiveness of Influencer Marketing Across Different Social Media Platforms"]},{degree:"Certificate - Business Analytics",school:"Temple University",location:"Philadelphia, PA",details:[]},{degree:"Bachelor of Science - Marketing",school:"Temple University",location:"Philadelphia, PA",details:["GPA: 3.8","Honors: Magna cum laude","Minor: Advertising","Student Marketing Club, President"]}],experience:[{company:"CMI Media Group",position:"Senior Marketing Research Analyst",location:"Philadelphia, PA",period:"January 2018 to Current",responsibilities:["Direct consumer segmentation studies for global clients, increasing customer retention by 20%.","Design and implement predictive models that enhanced campaign ROI by 25%.","Manage a team of five analysts, delivering 98% of research projects under budget and ahead of schedule."]},{company:"Insight Global",position:"Marketing Research Consultant",location:"Philadelphia, PA",period:"May 2015 to December 2017",responsibilities:["Conducted in-depth qualitative and quantitative research for 12 startups, leading to an average 18% increase in market share.","Developed competitive benchmarking reports that informed strategic decisions for five key industries."]}]},[a,u]=X.useState(p||m),[y,M]=X.useState("personal"),I=(V,Q)=>{u(N=>({...N,[V]:Q}))},v=V=>{const Q=V.target.files[0];if(Q)if(Q.type.startsWith("image/")){const N=new FileReader;N.onload=S=>{u(A=>({...A,photo:S.target.result}))},N.readAsDataURL(Q)}else alert("Please select a valid image file (PNG, JPG, JPEG, GIF)")},P=()=>{u(V=>({...V,photo:null}))},q=(V,Q,N)=>{u(S=>({...S,qualifications:{...S.qualifications,[V]:S.qualifications[V].map((A,j)=>j===Q?N:A)}}))},L=V=>{u(Q=>({...Q,qualifications:{...Q.qualifications,[V]:[...Q.qualifications[V],"New qualification"]}}))},Z=(V,Q)=>{u(N=>({...N,qualifications:{...N.qualifications,[V]:N.qualifications[V].filter((S,A)=>A!==Q)}}))},ee=(V,Q,N)=>{u(S=>({...S,education:S.education.map((A,j)=>j===V?{...A,[Q]:N}:A)}))},K=(V,Q,N)=>{u(S=>({...S,education:S.education.map((A,j)=>j===V?{...A,details:A.details.map((R,C)=>C===Q?N:R)}:A)}))},Y=V=>{u(Q=>({...Q,education:Q.education.map((N,S)=>S===V?{...N,details:[...N.details,"New detail"]}:N)}))},J=(V,Q,N)=>{u(S=>({...S,experience:S.experience.map((A,j)=>j===V?{...A,[Q]:N}:A)}))},ue=(V,Q,N)=>{u(S=>({...S,experience:S.experience.map((A,j)=>j===V?{...A,responsibilities:A.responsibilities.map((R,C)=>C===Q?N:R)}:A)}))},ce=V=>{u(Q=>({...Q,experience:Q.experience.map((N,S)=>S===V?{...N,responsibilities:[...N.responsibilities,"New responsibility"]}:N)}))},me=()=>{_&&_(a),alert("Template saved successfully! Changes will be reflected in the preview.")},ge=()=>{const V=window.open("","_blank"),Q=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Academic Resume - ${a.name}</title>
          <meta charset="UTF-8">
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;800&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Roboto', sans-serif; 
              background: white;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
              }
              .template-container {
                box-shadow: none !important;
                margin: 0 !important;
              }
              /* Hide print headers and footers */
              @page {
                margin: 0.75in;
                size: A4;
              }
            }
          </style>
        </head>
        <body>
          <div class="template-container" style="
            font-family: 'Roboto', sans-serif;
            background-color: white;
            color: black;
            padding: 24px;
            max-width: 768px;
            margin: 0 auto;
            font-size: 12px;
            line-height: 1.4;
            width: 210mm;
            min-height: 297mm;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          ">
            <!-- Header Border -->
            <div style="
              border-top: 8px solid #3B82F6;
              width: 100%;
              margin-bottom: 16px;
            "></div>
            
            <!-- Name -->
            <h1 style="
              color: #3B82F6;
              font-size: 24px;
              font-weight: normal;
              text-align: center;
              margin-bottom: 4px;
            ">${a.name}</h1>
            
            <!-- Photo -->
            ${a.photo?`
              <div style="
                display: flex;
                justify-content: center;
                margin-bottom: 12px;
              ">
                <img 
                  src="${a.photo}" 
                  alt="Profile" 
                  style="
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 2px solid #3B82F6;
                  "
                />
              </div>
            `:""}
            
            <!-- Contact Info -->
            <p style="
              text-align: center;
              font-size: 12px;
              font-weight: 800;
              line-height: none;
              margin: 0;
            ">${a.location}</p>
            
            <p style="
              text-align: center;
              font-size: 12px;
              font-weight: 800;
              line-height: none;
              margin-bottom: 12px;
            ">${a.phone} | ${a.email}</p>
            
            <!-- Divider -->
            <hr style="
              border: none;
              border-top: 1px dotted #9CA3AF;
              margin-bottom: 12px;
            " />
            
            <!-- Summary Section -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 4px;
            ">SUMMARY STATEMENT</p>
            <p style="
              font-size: 12px;
              margin-bottom: 16px;
            ">${a.summary}</p>
            
            <!-- Core Qualifications -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
            ">CORE QUALIFICATIONS</p>
            <div style="
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
              margin-bottom: 16px;
            ">
              <div>
                ${a.qualifications.left.map(N=>`
                  <p style="
                    font-size: 12px;
                    margin-bottom: 4px;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${N}
                  </p>
                `).join("")}
              </div>
              <div>
                ${a.qualifications.right.map(N=>`
                  <p style="
                    font-size: 12px;
                    margin-bottom: 4px;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${N}
                  </p>
                `).join("")}
              </div>
            </div>
            
            <!-- Education -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
            ">EDUCATION</p>
            ${a.education.map(N=>`
              <div style="margin-bottom: 12px;">
                <div style="
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  margin-bottom: 2px;
                ">
                  <h3 style="
                    font-size: 12px;
                    font-weight: 800;
                    margin: 0;
                  ">${N.degree}</h3>
                  <span style="
                    font-size: 12px;
                    font-weight: 800;
                  ">${N.period}</span>
                </div>
                <p style="
                  font-size: 12px;
                  margin: 0 0 4px 0;
                ">${N.school}, ${N.location}</p>
                ${N.details?N.details.map(S=>`
                  <p style="
                    font-size: 12px;
                    margin: 2px 0;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${S}
                  </p>
                `).join(""):""}
              </div>
            `).join("")}
            
            <!-- Professional Experience -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
              margin-top: 16px;
            ">PROFESSIONAL EXPERIENCE</p>
            ${a.experience.map(N=>`
              <div style="margin-bottom: 16px;">
                <div style="
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  margin-bottom: 2px;
                ">
                  <h3 style="
                    font-size: 12px;
                    font-weight: 800;
                    margin: 0;
                  ">${N.position}</h3>
                  <span style="
                    font-size: 12px;
                    font-weight: 800;
                  ">${N.period}</span>
                </div>
                <p style="
                  font-size: 12px;
                  margin: 0 0 4px 0;
                ">${N.company}, ${N.location}</p>
                ${N.responsibilities.map(S=>`
                  <p style="
                    font-size: 12px;
                    margin: 2px 0;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${S}
                  </p>
                `).join("")}
              </div>
            `).join("")}
          </div>
        </body>
      </html>
    `;V.document.write(Q),V.document.close(),setTimeout(()=>{V.focus(),V.print()},1e3)},le=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Personal Information"}),t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Full Name"}),t.jsx("input",{type:"text",value:a.name,onChange:V=>I("name",V.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Location"}),t.jsx("input",{type:"text",value:a.location,onChange:V=>I("location",V.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Phone"}),t.jsx("input",{type:"text",value:a.phone,onChange:V=>I("phone",V.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",value:a.email,onChange:V=>I("email",V.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Profile Photo"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.photo&&t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx("img",{src:a.photo,alt:"Profile preview",style:{width:"60px",height:"60px",borderRadius:"50%",objectFit:"cover",border:"2px solid #3B82F6"}}),t.jsx("button",{type:"button",onClick:P,className:"remove-btn",style:{padding:"5px 10px",fontSize:"12px"},children:"Remove Photo"})]}),t.jsx("input",{type:"file",accept:"image/*",onChange:v,className:"form-input",style:{padding:"8px"}}),t.jsx("small",{style:{color:"#666",fontSize:"12px"},children:"Upload a profile photo (PNG, JPG, JPEG, GIF)"})]})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Summary Statement"}),t.jsx("textarea",{value:a.summary,onChange:V=>I("summary",V.target.value),className:"form-textarea",rows:"4"})]})]})]}),ye=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Core Qualifications"}),t.jsxs("div",{className:"qualifications-grid",children:[t.jsxs("div",{className:"qualification-column",children:[t.jsx("h4",{children:"Left Column"}),a.qualifications.left.map((V,Q)=>t.jsxs("div",{className:"qualification-item",children:[t.jsx("input",{type:"text",value:V,onChange:N=>q("left",Q,N.target.value),className:"form-input"}),t.jsx("button",{onClick:()=>Z("left",Q),className:"remove-btn",children:"✕"})]},Q)),t.jsx("button",{onClick:()=>L("left"),className:"add-btn",children:"+ Add Qualification"})]}),t.jsxs("div",{className:"qualification-column",children:[t.jsx("h4",{children:"Right Column"}),a.qualifications.right.map((V,Q)=>t.jsxs("div",{className:"qualification-item",children:[t.jsx("input",{type:"text",value:V,onChange:N=>q("right",Q,N.target.value),className:"form-input"}),t.jsx("button",{onClick:()=>Z("right",Q),className:"remove-btn",children:"✕"})]},Q)),t.jsx("button",{onClick:()=>L("right"),className:"add-btn",children:"+ Add Qualification"})]})]})]}),je=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Education"}),a.education.map((V,Q)=>t.jsxs("div",{className:"education-item",children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Degree"}),t.jsx("input",{type:"text",value:V.degree,onChange:N=>ee(Q,"degree",N.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"School"}),t.jsx("input",{type:"text",value:V.school,onChange:N=>ee(Q,"school",N.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Location"}),t.jsx("input",{type:"text",value:V.location,onChange:N=>ee(Q,"location",N.target.value),className:"form-input"})]})]}),t.jsxs("div",{className:"details-section",children:[t.jsx("label",{children:"Details"}),V.details.map((N,S)=>t.jsx("div",{className:"detail-item",children:t.jsx("input",{type:"text",value:N,onChange:A=>K(Q,S,A.target.value),className:"form-input"})},S)),t.jsx("button",{onClick:()=>Y(Q),className:"add-btn small",children:"+ Add Detail"})]})]},Q))]}),he=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Work Experience"}),a.experience.map((V,Q)=>t.jsxs("div",{className:"experience-item",children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Company"}),t.jsx("input",{type:"text",value:V.company,onChange:N=>J(Q,"company",N.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Position"}),t.jsx("input",{type:"text",value:V.position,onChange:N=>J(Q,"position",N.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Location"}),t.jsx("input",{type:"text",value:V.location,onChange:N=>J(Q,"location",N.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Period"}),t.jsx("input",{type:"text",value:V.period,onChange:N=>J(Q,"period",N.target.value),className:"form-input"})]})]}),t.jsxs("div",{className:"responsibilities-section",children:[t.jsx("label",{children:"Responsibilities"}),V.responsibilities.map((N,S)=>t.jsx("div",{className:"responsibility-item",children:t.jsx("textarea",{value:N,onChange:A=>ue(Q,S,A.target.value),className:"form-textarea",rows:"2"})},S)),t.jsx("button",{onClick:()=>ce(Q),className:"add-btn small",children:"+ Add Responsibility"})]})]},Q))]}),we=()=>{switch(y){case"personal":return le();case"qualifications":return ye();case"education":return je();case"experience":return he();default:return le()}};return t.jsxs("div",{className:"template-editor",children:[t.jsxs("div",{className:"editor-header",children:[t.jsx("button",{className:"back-btn",onClick:T,"aria-label":"Go back",children:"← Back to Template"}),t.jsxs("div",{className:"editor-title",children:[t.jsx("h1",{children:"Edit Academic Template"}),t.jsx("p",{children:"Customize your resume content"})]}),t.jsxs("div",{className:"editor-actions",children:[t.jsx("button",{className:"save-btn",onClick:me,children:"💾 Save Changes"}),t.jsx("button",{className:"download-btn",onClick:ge,children:"📄 Download PDF"})]})]}),t.jsxs("div",{className:"editor-content",children:[t.jsx("div",{className:"editor-sidebar",children:t.jsxs("nav",{className:"editor-nav",children:[t.jsx("button",{className:`nav-item ${y==="personal"?"active":""}`,onClick:()=>M("personal"),children:"👤 Personal Info"}),t.jsx("button",{className:`nav-item ${y==="qualifications"?"active":""}`,onClick:()=>M("qualifications"),children:"🎯 Qualifications"}),t.jsx("button",{className:`nav-item ${y==="education"?"active":""}`,onClick:()=>M("education"),children:"🎓 Education"}),t.jsx("button",{className:`nav-item ${y==="experience"?"active":""}`,onClick:()=>M("experience"),children:"💼 Experience"})]})}),t.jsx("div",{className:"editor-main",children:t.jsx("div",{className:"editor-form",children:we()})}),t.jsxs("div",{className:"editor-preview",children:[t.jsx("h3",{children:"Live Preview"}),t.jsx("div",{className:"preview-container",children:t.jsx("div",{style:{backgroundImage:'url("/Acedemic.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"100%",minHeight:"400px",borderRadius:"8px",position:"relative"},children:t.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:"8px"},children:t.jsx("div",{style:{transform:"scale(0.6)",transformOrigin:"top left",width:"166.67%",height:"166.67%"},children:t.jsx(qc,{data:a})})})})})]})]})]})}function gu({onNavigateBack:T,onEdit:_}){const[p,m]=X.useState(!1),[a,u]=X.useState(null),y=()=>{const P=a||{name:"ELLIOT WU",photo:null,location:"PHILADELPHIA, PA 19001",phone:"(555) 555-5555",email:"EXAMPLE@EXAMPLE.COM",summary:"Results-driven marketing researcher with over 10 years of experience specializing in consumer behavior, brand strategy and digital marketing analytics. Proven expertise in leading cross-functional research projects, delivering actionable insights and driving 15% year-over-year revenue growth for Fortune 500 clients. Skilled in advanced statistical methods, market segmentation and developing predictive models that optimize marketing strategies. Published author with a strong track record of impactful research and peer-reviewed articles.",qualifications:{left:["Quantitative and qualitative research","Consumer behavior analysis","Digital marketing analytics","Data visualization (Tableau, Power BI)"],right:["Advanced statistical analysis (R, Python)","Predictive modeling and machine learning","Survey design and administration","Strategic communication and reporting"]},education:[{degree:"Master of Science - Digital Marketing",school:"Temple University",location:"Philadelphia, PA",period:"2018 - 2020",details:["GPA: 3.8",'Thesis: "Consumer Response Patterns in Digital Advertising Ecosystems"',"Graduate Research Assistant for Consumer Behavior Lab"]},{degree:"Bachelor of Science - Psychology",school:"Pennsylvania State University",location:"University Park, PA",period:"2014 - 2018",details:["Magna Cum Laude, GPA: 3.7","Minor in Statistics","President, Psychology Student Association"]}],experience:[{position:"Senior Marketing Research Analyst",company:"TechFlow Solutions",location:"Philadelphia, PA",period:"2022 - Present",responsibilities:["Lead comprehensive market research initiatives for B2B technology products, resulting in 25% improvement in product-market fit scores","Design and execute advanced statistical analyses using R and Python to identify consumer behavior patterns and market trends","Collaborate with cross-functional teams to translate research insights into actionable marketing strategies, contributing to 15% revenue growth","Manage research budget of $500K annually and oversee team of 3 junior analysts"]},{position:"Marketing Research Specialist",company:"DataVision Analytics",location:"Philadelphia, PA",period:"2020 - 2022",responsibilities:["Conducted quantitative and qualitative research studies for Fortune 500 clients across retail, healthcare, and financial services sectors","Developed predictive models to forecast consumer purchasing behavior with 85% accuracy rate","Created comprehensive research reports and presented findings to C-level executives","Implemented new survey methodologies that improved response rates by 40%"]}]},q=window.open("","_blank"),L=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Academic Resume - ${P.name}</title>
          <meta charset="UTF-8">
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;800&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Roboto', sans-serif; 
              background: white;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
              }
              .template-container {
                box-shadow: none !important;
                margin: 0 !important;
              }
              /* Hide print headers and footers */
              @page {
                margin: 0.75in;
                size: A4;
              }
            }
          </style>
        </head>
        <body>
          <div class="template-container" style="
            font-family: 'Roboto', sans-serif;
            background-color: white;
            color: black;
            padding: 24px;
            max-width: 768px;
            margin: 0 auto;
            font-size: 12px;
            line-height: 1.4;
            width: 210mm;
            min-height: 297mm;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          ">
            <!-- Header Border -->
            <div style="
              border-top: 8px solid #3B82F6;
              width: 100%;
              margin-bottom: 16px;
            "></div>
            
            <!-- Name -->
            <h1 style="
              color: #3B82F6;
              font-size: 24px;
              font-weight: normal;
              text-align: center;
              margin-bottom: 4px;
            ">${P.name}</h1>
            
            <!-- Photo -->
            ${P.photo?`
              <div style="
                display: flex;
                justify-content: center;
                margin-bottom: 12px;
              ">
                <img 
                  src="${P.photo}" 
                  alt="Profile" 
                  style="
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 2px solid #3B82F6;
                  "
                />
              </div>
            `:""}
            
            <!-- Contact Info -->
            <p style="
              text-align: center;
              font-size: 12px;
              font-weight: 800;
              line-height: none;
              margin: 0;
            ">${P.location}</p>
            
            <p style="
              text-align: center;
              font-size: 12px;
              font-weight: 800;
              line-height: none;
              margin-bottom: 12px;
            ">${P.phone} | ${P.email}</p>
            
            <!-- Divider -->
            <hr style="
              border: none;
              border-top: 1px dotted #9CA3AF;
              margin-bottom: 12px;
            " />
            
            <!-- Summary Section -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 4px;
            ">SUMMARY STATEMENT</p>
            <p style="
              font-size: 12px;
              margin-bottom: 16px;
            ">${P.summary}</p>
            
            <!-- Core Qualifications -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
            ">CORE QUALIFICATIONS</p>
            <div style="
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
              margin-bottom: 16px;
            ">
              <div>
                ${P.qualifications.left.map(Z=>`
                  <p style="
                    font-size: 12px;
                    margin-bottom: 4px;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${Z}
                  </p>
                `).join("")}
              </div>
              <div>
                ${P.qualifications.right.map(Z=>`
                  <p style="
                    font-size: 12px;
                    margin-bottom: 4px;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${Z}
                  </p>
                `).join("")}
              </div>
            </div>
            
            <!-- Education -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
            ">EDUCATION</p>
            ${P.education.map(Z=>`
              <div style="margin-bottom: 12px;">
                <div style="
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  margin-bottom: 2px;
                ">
                  <h3 style="
                    font-size: 12px;
                    font-weight: 800;
                    margin: 0;
                  ">${Z.degree}</h3>
                  <span style="
                    font-size: 12px;
                    font-weight: 800;
                  ">${Z.period}</span>
                </div>
                <p style="
                  font-size: 12px;
                  margin: 0 0 4px 0;
                ">${Z.school}, ${Z.location}</p>
                ${Z.details?Z.details.map(ee=>`
                  <p style="
                    font-size: 12px;
                    margin: 2px 0;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${ee}
                  </p>
                `).join(""):""}
              </div>
            `).join("")}
            
            <!-- Professional Experience -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
              margin-top: 16px;
            ">PROFESSIONAL EXPERIENCE</p>
            ${P.experience.map(Z=>`
              <div style="margin-bottom: 16px;">
                <div style="
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  margin-bottom: 2px;
                ">
                  <h3 style="
                    font-size: 12px;
                    font-weight: 800;
                    margin: 0;
                  ">${Z.position}</h3>
                  <span style="
                    font-size: 12px;
                    font-weight: 800;
                  ">${Z.period}</span>
                </div>
                <p style="
                  font-size: 12px;
                  margin: 0 0 4px 0;
                ">${Z.company}, ${Z.location}</p>
                ${Z.responsibilities.map(ee=>`
                  <p style="
                    font-size: 12px;
                    margin: 2px 0;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${ee}
                  </p>
                `).join("")}
              </div>
            `).join("")}
          </div>
        </body>
      </html>
    `;q.document.write(L),q.document.close(),setTimeout(()=>{q.focus(),q.print()},1e3)},M=()=>{_?_():m(!0)},I=P=>{u(P),m(!1)},v=()=>{m(!1)};return p?t.jsx(Vc,{onNavigateBack:v,onSave:I,initialData:a}):t.jsxs("div",{className:"resume-template-page",children:[t.jsxs("div",{className:"template-header",children:[t.jsx("button",{className:"back-btn",onClick:T||(()=>window.history.back()),"aria-label":"Go back",title:"Go back to templates",children:"← Back to Templates"}),t.jsxs("div",{className:"template-title",children:[t.jsx("h1",{children:"Academic Resume Template"}),t.jsx("p",{children:"Structured format for research and education roles"})]}),t.jsxs("div",{className:"template-actions",children:[t.jsx("button",{className:"edit-btn",onClick:M,children:"✏️ Edit Template"}),t.jsx("button",{className:"download-btn",onClick:y,children:"📄 Download PDF"})]})]}),t.jsx("div",{className:"template-preview-container",children:t.jsx("div",{className:"template-preview-wrapper",children:t.jsx(qc,{data:a})})}),"      ",t.jsx("div",{className:"template-features",children:t.jsxs("div",{className:"features-grid",children:[t.jsxs("div",{className:"feature",children:[t.jsx("div",{className:"feature-icon",children:"🎓"}),t.jsx("h3",{children:"Education Focused"}),t.jsx("p",{children:"Highlights academic achievements, research, and publications"})]}),t.jsxs("div",{className:"feature",children:[t.jsx("div",{className:"feature-icon",children:"📊"}),t.jsx("h3",{children:"Research Friendly"}),t.jsx("p",{children:"Perfect format for showcasing research projects and methodologies"})]}),t.jsxs("div",{className:"feature",children:[t.jsx("div",{className:"feature-icon",children:"🤖"}),t.jsx("h3",{children:"ATS Compatible"}),t.jsx("p",{children:"Optimized structure that passes through applicant tracking systems"})]}),t.jsxs("div",{className:"feature",children:[t.jsx("div",{className:"feature-icon",children:"📱"}),t.jsx("h3",{children:"Print Ready"}),t.jsx("p",{children:"Professional formatting that looks great on paper and screen"})]})]})})]})}function Qc({onNavigateBack:T,onSave:_,initialData:p}){const m={name:"OLIVIA WILSON",title:"Marketing Manager",photo:null,contact:{email:"hello@reallygreatsite.com",phone:"+123-456-7890",address:"123 Anywhere St., Any City",website:"reallygreatsite.com"},about:"An experienced Marketing Manager with exceptional skills in creating marketing plans, launching products, promoting them, and increasing brand awareness. I'm creative, detail-oriented, a team player, with extensive world media audience engagement, and brand management.",education:[{degree:"Master of Business",school:"Wardiere University",period:"2016 - 2018"},{degree:"BA Sales and Commerce",school:"Wardiere University",period:"2012 - 2016"}],skills:["BCR Calculations","Social media marketing","Product development lifecycle","Marketing strategy","Product promotion","Value propositions"],languages:["English","French"],experience:[{position:"Marketing Manager",company:"Borcelle Company",period:"Aug 2018 - present",responsibilities:["Handled various office tasks.","Constantly updated the company's content and mailing lists.","Monitored ongoing marketing campaigns.","Increased sales coverage."]},{position:"Marketing Assistant",company:"Timmerman Industries",period:"Jul 2016 - Aug 2018",responsibilities:["Handled the company's online presence — regularly updated the company's website and various social media accounts.","Monitored ongoing marketing campaigns."]},{position:"Marketing Assistant",company:"Utenim & Co",period:"Aug 2014 - Jul 2016",responsibilities:["Handled the company's online presence — regularly updated the company's website and various social media accounts."]}],references:[{name:"Estelle Darcy",title:"Wardiere Inc. | CEO",phone:"+123-456-7890",email:"hello@reallygreatsite.com"},{name:"Harper Russo",title:"Timmerman | CEO",phone:"+123-456-7890",email:"hello@reallygreatsite.com"}]},[a,u]=X.useState(p||m),[y,M]=X.useState("personal"),I=(c,f)=>{u(w=>({...w,[c]:f}))},v=(c,f)=>{u(w=>({...w,contact:{...w.contact,[c]:f}}))},P=c=>{const f=c.target.files[0];if(f)if(f.type.startsWith("image/")){const w=new FileReader;w.onload=$=>{u(te=>({...te,photo:$.target.result}))},w.readAsDataURL(f)}else alert("Please select a valid image file (PNG, JPG, JPEG, GIF)")},q=()=>{u(c=>({...c,photo:null}))},L=(c,f)=>{u(w=>({...w,skills:w.skills.map(($,te)=>te===c?f:$)}))},Z=()=>{u(c=>({...c,skills:[...c.skills,"New skill"]}))},ee=c=>{u(f=>({...f,skills:f.skills.filter((w,$)=>$!==c)}))},K=(c,f)=>{u(w=>({...w,languages:w.languages.map(($,te)=>te===c?f:$)}))},Y=()=>{u(c=>({...c,languages:[...c.languages,"New language"]}))},J=c=>{u(f=>({...f,languages:f.languages.filter((w,$)=>$!==c)}))},ue=(c,f,w)=>{u($=>({...$,education:$.education.map((te,ae)=>ae===c?{...te,[f]:w}:te)}))},ce=()=>{u(c=>({...c,education:[...c.education,{degree:"",school:"",period:""}]}))},me=c=>{u(f=>({...f,education:f.education.filter((w,$)=>$!==c)}))},ge=(c,f,w)=>{u($=>({...$,experience:$.experience.map((te,ae)=>ae===c?{...te,[f]:w}:te)}))},le=(c,f,w)=>{u($=>({...$,experience:$.experience.map((te,ae)=>ae===c?{...te,responsibilities:te.responsibilities.map((xe,Ce)=>Ce===f?w:xe)}:te)}))},ye=c=>{u(f=>({...f,experience:f.experience.map((w,$)=>$===c?{...w,responsibilities:[...w.responsibilities,"New responsibility"]}:w)}))},je=(c,f)=>{u(w=>({...w,experience:w.experience.map(($,te)=>te===c?{...$,responsibilities:$.responsibilities.filter((ae,xe)=>xe!==f)}:$)}))},he=()=>{u(c=>({...c,experience:[...c.experience,{position:"",company:"",period:"",responsibilities:[""]}]}))},we=c=>{u(f=>({...f,experience:f.experience.filter((w,$)=>$!==c)}))},V=(c,f,w)=>{u($=>({...$,references:$.references.map((te,ae)=>ae===c?{...te,[f]:w}:te)}))},Q=()=>{u(c=>({...c,references:[...c.references,{name:"",title:"",phone:"",email:""}]}))},N=c=>{u(f=>({...f,references:f.references.filter((w,$)=>$!==c)}))},S=()=>{_&&_(a),alert("Template saved successfully! Changes will be reflected in the preview.")},A=()=>{const c=window.open("","_blank"),f=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Creative Resume - ${a.name}</title>
          <meta charset="UTF-8">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Poppins', sans-serif;
              background: #f3f4f6;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              /* Hide print headers and footers */
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="outer-container" style="
            font-family: 'Poppins', sans-serif;
            background-color: #f3f4f6;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <main class="main-container" style="
              max-width: 1024px;
              width: 100%;
              background-color: white;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
              border-radius: 8px;
              overflow: hidden;
              display: flex;
              flex-direction: row;
            ">
              <!-- Left Column (Dark Background) -->
              <aside style="
                width: 33.333333%;
                background-color: #2c3e50;
                color: white;
                padding: 32px;
              ">
                <!-- Profile Picture -->
                <div style="
                  display: flex;
                  justify-content: center;
                  margin-bottom: 32px;
                ">
                  <div style="
                    width: 144px;
                    height: 144px;
                    border-radius: 50%;
                    border: 4px solid #9CA3AF;
                    background-color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    font-weight: bold;
                    color: #2c3e50;
                    ${a.photo?`background-image: url(${a.photo}); background-size: cover; background-position: center; background-repeat: no-repeat;`:""}
                  ">
                    ${a.photo?"":a.name.split(" ").map(w=>w[0]).join("")}
                  </div>
                </div>

                <!-- Contact Section -->
                <section style="margin-bottom: 40px;">
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    border-bottom: 2px solid #6B7280;
                    padding-bottom: 8px;
                    margin-bottom: 16px;
                    font-family: 'League Spartan', sans-serif;
                  ">Contact</h2>
                  <div style="display: flex; flex-direction: column; gap: 12px;">
                    <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                      <span style="margin-right: 8px;">📧</span>
                      ${a.contact.email}
                    </p>
                    <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                      <span style="margin-right: 8px;">📞</span>
                      ${a.contact.phone}
                    </p>
                    <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                      <span style="margin-right: 8px;">📍</span>
                      ${a.contact.address}
                    </p>
                    <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                      <span style="margin-right: 8px;">🌐</span>
                      ${a.contact.website}
                    </p>
                  </div>
                </section>

                <!-- Education Section -->
                <section style="margin-bottom: 40px;">
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    border-bottom: 2px solid #6B7280;
                    padding-bottom: 8px;
                    margin-bottom: 16px;
                    font-family: 'League Spartan', sans-serif;
                  ">Education</h2>
                  ${a.education.map(w=>`
                    <div style="margin-bottom: 20px;">
                      <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 4px; color: white;">${w.degree}</h3>
                      <p style="font-size: 14px; color: #D1D5DB; margin-bottom: 2px;">${w.school}</p>
                      <p style="font-size: 12px; color: #9CA3AF; margin: 0;">${w.period}</p>
                    </div>
                  `).join("")}
                </section>

                <!-- Skills Section -->
                <section style="margin-bottom: 40px;">
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    border-bottom: 2px solid #6B7280;
                    padding-bottom: 8px;
                    margin-bottom: 16px;
                    font-family: 'League Spartan', sans-serif;
                  ">Skills</h2>
                  ${a.skills.map(w=>`
                    <div style="margin-bottom: 8px;">
                      <span style="font-size: 14px; color: white;">• ${w}</span>
                    </div>
                  `).join("")}
                </section>

                <!-- Languages Section -->
                <section>
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    border-bottom: 2px solid #6B7280;
                    padding-bottom: 8px;
                    margin-bottom: 16px;
                    font-family: 'League Spartan', sans-serif;
                  ">Languages</h2>
                  ${a.languages.map(w=>`
                    <div style="margin-bottom: 8px;">
                      <span style="font-size: 14px; color: white;">• ${w}</span>
                    </div>
                  `).join("")}
                </section>
              </aside>

              <!-- Right Column (Main Content) -->
              <div style="
                flex: 1;
                padding: 32px;
                color: #374151;
              ">
                <!-- Header -->
                <header style="
                  margin-bottom: 32px;
                  text-align: left;
                ">
                  <h1 style="
                    font-size: 48px;
                    font-weight: bold;
                    color: #1F2937;
                    margin: 0;
                    font-family: 'League Spartan', sans-serif;
                    line-height: 1.1;
                  ">${a.name}</h1>
                  <p style="
                    font-size: 20px;
                    color: #6B7280;
                    margin: 8px 0 0 0;
                    font-weight: 500;
                  ">${a.title}</p>
                </header>

                <!-- About Section -->
                <section style="margin-bottom: 40px;">
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    color: #1F2937;
                    margin-bottom: 16px;
                    font-family: 'League Spartan', sans-serif;
                  ">About Me</h2>
                  <p style="
                    font-size: 14px;
                    line-height: 1.6;
                    color: #4B5563;
                    margin: 0;
                  ">${a.about}</p>
                </section>

                <!-- Experience Section -->
                <section style="margin-bottom: 40px;">
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    color: #1F2937;
                    margin-bottom: 24px;
                    font-family: 'League Spartan', sans-serif;
                  ">Work Experience</h2>
                  ${a.experience.map(w=>`
                    <div style="margin-bottom: 32px;">
                      <div style="margin-bottom: 12px;">
                        <h3 style="
                          font-size: 18px;
                          font-weight: 600;
                          color: #1F2937;
                          margin: 0;
                        ">${w.position}</h3>
                        <p style="
                          font-size: 16px;
                          color: #6B7280;
                          font-weight: 500;
                          margin: 4px 0;
                        ">${w.company}</p>
                        <p style="
                          font-size: 14px;
                          color: #9CA3AF;
                          margin: 0;
                        ">${w.period}</p>
                      </div>
                      <ul style="
                        margin: 0;
                        padding-left: 20px;
                        color: #4B5563;
                      ">
                        ${w.responsibilities.map($=>`
                          <li style="
                            font-size: 14px;
                            line-height: 1.5;
                            margin-bottom: 4px;
                          ">${$}</li>
                        `).join("")}
                      </ul>
                    </div>
                  `).join("")}
                </section>

                <!-- References Section -->
                <section>
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    color: #1F2937;
                    margin-bottom: 24px;
                    font-family: 'League Spartan', sans-serif;
                  ">References</h2>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                    ${a.references.map(w=>`
                      <div>
                        <h3 style="
                          font-size: 16px;
                          font-weight: 600;
                          color: #1F2937;
                          margin: 0 0 4px 0;
                        ">${w.name}</h3>
                        <p style="
                          font-size: 14px;
                          color: #6B7280;
                          margin: 0 0 8px 0;
                        ">${w.title}</p>
                        <p style="
                          font-size: 12px;
                          color: #9CA3AF;
                          margin: 2px 0;
                        ">${w.phone}</p>
                        <p style="
                          font-size: 12px;
                          color: #9CA3AF;
                          margin: 2px 0;
                        ">${w.email}</p>
                      </div>
                    `).join("")}
                  </div>
                </section>
              </div>
            </main>
          </div>
        </body>
      </html>
    `;c.document.write(f),c.document.close(),setTimeout(()=>{c.focus(),c.print()},1e3)},j=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Personal Information"}),t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Full Name"}),t.jsx("input",{type:"text",value:a.name,onChange:c=>I("name",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Job Title"}),t.jsx("input",{type:"text",value:a.title,onChange:c=>I("title",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",value:a.contact.email,onChange:c=>v("email",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Phone"}),t.jsx("input",{type:"text",value:a.contact.phone,onChange:c=>v("phone",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Address"}),t.jsx("input",{type:"text",value:a.contact.address,onChange:c=>v("address",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Website"}),t.jsx("input",{type:"text",value:a.contact.website,onChange:c=>v("website",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Profile Photo"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.photo&&t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx("img",{src:a.photo,alt:"Profile preview",style:{width:"60px",height:"60px",borderRadius:"50%",objectFit:"cover",border:"2px solid #ddd"}}),t.jsx("button",{type:"button",onClick:q,className:"remove-btn",style:{padding:"5px 10px",fontSize:"12px"},children:"Remove Photo"})]}),t.jsx("input",{type:"file",accept:"image/*",onChange:P,className:"form-input",style:{padding:"8px"}}),t.jsx("small",{style:{color:"#666",fontSize:"12px"},children:"Upload a profile photo (PNG, JPG, JPEG, GIF)"})]})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"About Me"}),t.jsx("textarea",{value:a.about,onChange:c=>I("about",c.target.value),className:"form-textarea",rows:"4"})]})]})]}),R=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Skills & Languages"}),t.jsxs("div",{className:"qualifications-grid",children:[t.jsxs("div",{className:"qualification-column",children:[t.jsx("h4",{children:"Skills"}),a.skills.map((c,f)=>t.jsxs("div",{className:"qualification-item",children:[t.jsx("input",{type:"text",value:c,onChange:w=>L(f,w.target.value),className:"form-input"}),t.jsx("button",{onClick:()=>ee(f),className:"remove-btn",children:"✕"})]},f)),t.jsx("button",{onClick:Z,className:"add-btn",children:"+ Add Skill"})]}),t.jsxs("div",{className:"qualification-column",children:[t.jsx("h4",{children:"Languages"}),a.languages.map((c,f)=>t.jsxs("div",{className:"qualification-item",children:[t.jsx("input",{type:"text",value:c,onChange:w=>K(f,w.target.value),className:"form-input"}),t.jsx("button",{onClick:()=>J(f),className:"remove-btn",children:"✕"})]},f)),t.jsx("button",{onClick:Y,className:"add-btn",children:"+ Add Language"})]})]})]}),C=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Education"}),a.education.map((c,f)=>t.jsxs("div",{className:"education-item",children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Degree"}),t.jsx("input",{type:"text",value:c.degree,onChange:w=>ue(f,"degree",w.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"School"}),t.jsx("input",{type:"text",value:c.school,onChange:w=>ue(f,"school",w.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Period"}),t.jsx("input",{type:"text",value:c.period,onChange:w=>ue(f,"period",w.target.value),className:"form-input"})]})]}),t.jsx("button",{onClick:()=>me(f),className:"remove-btn",style:{marginTop:"10px"},children:"Remove Education"})]},f)),t.jsx("button",{onClick:ce,className:"add-btn",children:"+ Add Education"})]}),B=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Work Experience"}),a.experience.map((c,f)=>t.jsxs("div",{className:"experience-item",children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Position"}),t.jsx("input",{type:"text",value:c.position,onChange:w=>ge(f,"position",w.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Company"}),t.jsx("input",{type:"text",value:c.company,onChange:w=>ge(f,"company",w.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Period"}),t.jsx("input",{type:"text",value:c.period,onChange:w=>ge(f,"period",w.target.value),className:"form-input"})]})]}),t.jsxs("div",{className:"responsibilities-section",children:[t.jsx("label",{children:"Responsibilities"}),c.responsibilities.map((w,$)=>t.jsxs("div",{className:"qualification-item",children:[t.jsx("textarea",{value:w,onChange:te=>le(f,$,te.target.value),className:"form-textarea",rows:"2"}),t.jsx("button",{onClick:()=>je(f,$),className:"remove-btn",children:"✕"})]},$)),t.jsx("button",{onClick:()=>ye(f),className:"add-btn small",children:"+ Add Responsibility"})]}),t.jsx("button",{onClick:()=>we(f),className:"remove-btn",style:{marginTop:"10px"},children:"Remove Experience"})]},f)),t.jsx("button",{onClick:he,className:"add-btn",children:"+ Add Experience"})]}),h=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"References"}),a.references.map((c,f)=>t.jsxs("div",{className:"education-item",children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Name"}),t.jsx("input",{type:"text",value:c.name,onChange:w=>V(f,"name",w.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Title"}),t.jsx("input",{type:"text",value:c.title,onChange:w=>V(f,"title",w.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Phone"}),t.jsx("input",{type:"text",value:c.phone,onChange:w=>V(f,"phone",w.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",value:c.email,onChange:w=>V(f,"email",w.target.value),className:"form-input"})]})]}),t.jsx("button",{onClick:()=>N(f),className:"remove-btn",style:{marginTop:"10px"},children:"Remove Reference"})]},f)),t.jsx("button",{onClick:Q,className:"add-btn",children:"+ Add Reference"})]}),l=()=>{switch(y){case"personal":return j();case"skills":return R();case"education":return C();case"experience":return B();case"references":return h();default:return j()}};return t.jsxs("div",{className:"template-editor",children:[t.jsxs("div",{className:"editor-header",children:[t.jsx("button",{className:"back-btn",onClick:T,"aria-label":"Go back",children:"← Back to Template"}),t.jsxs("div",{className:"editor-title",children:[t.jsx("h1",{children:"Edit Creative Template"}),t.jsx("p",{children:"Customize your resume content"})]}),t.jsxs("div",{className:"editor-actions",children:[t.jsx("button",{className:"save-btn",onClick:S,children:"💾 Save Changes"}),t.jsx("button",{className:"download-btn",onClick:A,children:"📄 Download PDF"})]})]}),t.jsxs("div",{className:"editor-content",children:[t.jsx("div",{className:"editor-sidebar",children:t.jsxs("nav",{className:"editor-nav",children:[t.jsx("button",{className:`nav-item ${y==="personal"?"active":""}`,onClick:()=>M("personal"),children:"👤 Personal Info"}),t.jsx("button",{className:`nav-item ${y==="skills"?"active":""}`,onClick:()=>M("skills"),children:"🎯 Skills & Languages"}),t.jsx("button",{className:`nav-item ${y==="education"?"active":""}`,onClick:()=>M("education"),children:"🎓 Education"}),t.jsx("button",{className:`nav-item ${y==="experience"?"active":""}`,onClick:()=>M("experience"),children:"💼 Experience"}),t.jsx("button",{className:`nav-item ${y==="references"?"active":""}`,onClick:()=>M("references"),children:"👥 References"})]})}),t.jsx("div",{className:"editor-main",children:t.jsx("div",{className:"editor-form",children:l()})}),t.jsxs("div",{className:"editor-preview",children:[t.jsx("h3",{children:"Live Preview"}),t.jsx("div",{className:"preview-container",children:t.jsx("div",{style:{backgroundImage:'url("/mordern.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"100%",minHeight:"400px",borderRadius:"8px",position:"relative"},children:t.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:"8px"},children:t.jsx("div",{style:{transform:"scale(0.4)",transformOrigin:"top left",width:"250%",height:"250%"},children:t.jsx(Yc,{data:a})})})})})]})]})]})}function xu({onNavigateBack:T}){const[_,p]=X.useState(!1),[m,a]=X.useState(null),u=()=>{const v=m||{name:"OLIVIA WILSON",title:"Marketing Manager",photo:null,contact:{email:"hello@reallygreatsite.com",phone:"+123-456-7890",address:"123 Anywhere St., Any City",website:"reallygreatsite.com"},about:"An experienced Marketing Manager with exceptional skills in creating marketing plans, launching products, promoting them, and increasing brand awareness. I'm creative, detail-oriented, a team player, with extensive world media audience engagement, and brand management.",education:[{degree:"Master of Business",school:"Wardiere University",period:"2016 - 2018"},{degree:"BA Sales and Commerce",school:"Wardiere University",period:"2012 - 2016"}],skills:["BCR Calculations","Social media marketing","Product development lifecycle","Marketing strategy","Product promotion","Value propositions"],languages:["English","French"],experience:[{position:"Marketing Manager",company:"Borcelle Company",period:"Aug 2018 - present",responsibilities:["Handled various office tasks.","Constantly updated the company's content and mailing lists.","Monitored ongoing marketing campaigns.","Increased sales coverage."]},{position:"Marketing Assistant",company:"Timmerman Industries",period:"Jul 2016 - Aug 2018",responsibilities:["Handled the company's online presence — regularly updated the company's website and various social media accounts.","Monitored ongoing marketing campaigns."]}],references:[{name:"Estelle Darcy",title:"Wardiere Inc. | CEO",phone:"+123-456-7890",email:"hello@reallygreatsite.com"},{name:"Harper Russo",title:"Timmerman | CEO",phone:"+123-456-7890",email:"hello@reallygreatsite.com"}]},P=window.open("","_blank"),q=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Creative Resume - ${v.name}</title>
          <meta charset="UTF-8">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Poppins', sans-serif;
              background: #f3f4f6;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              /* Hide print headers and footers */
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="outer-container" style="
            font-family: 'Poppins', sans-serif;
            background-color: #f3f4f6;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <main class="main-container" style="
              max-width: 1024px;
              width: 100%;
              background-color: white;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
              border-radius: 8px;
              overflow: hidden;
              display: flex;
              flex-direction: row;
            ">
              <!-- Left Column (Dark Background) -->
              <aside style="
                width: 33.333333%;
                background-color: #2c3e50;
                color: white;
                padding: 32px;
              ">
              <!-- Profile Picture -->
              <div style="
                display: flex;
                justify-content: center;
                margin-bottom: 32px;
              ">
                <div style="
                  width: 144px;
                  height: 144px;
                  border-radius: 50%;
                  border: 4px solid #9CA3AF;
                  background-color: #ffffff;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 24px;
                  font-weight: bold;
                  color: #2c3e50;
                  ${v.photo?`background-image: url(${v.photo}); background-size: cover; background-position: center; background-repeat: no-repeat;`:""}
                ">
                  ${v.photo?"":v.name.split(" ").map(L=>L[0]).join("")}
                </div>
              </div>

              <!-- Contact Section -->
              <section style="margin-bottom: 40px;">
                <h2 style="
                  font-size: 24px;
                  font-weight: bold;
                  border-bottom: 2px solid #6B7280;
                  padding-bottom: 8px;
                  margin-bottom: 16px;
                  font-family: 'League Spartan', sans-serif;
                ">Contact</h2>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                    <span style="margin-right: 8px;">📧</span>
                    ${v.contact.email}
                  </p>
                  <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                    <span style="margin-right: 8px;">📞</span>
                    ${v.contact.phone}
                  </p>
                  <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                    <span style="margin-right: 8px;">📍</span>
                    ${v.contact.address}
                  </p>
                  <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                    <span style="margin-right: 8px;">🌐</span>
                    ${v.contact.website}
                  </p>
                </div>
              </section>

              <!-- Education Section -->
              <section style="margin-bottom: 40px;">
                <h2 style="
                  font-size: 24px;
                  font-weight: bold;
                  border-bottom: 2px solid #6B7280;
                  padding-bottom: 8px;
                  margin-bottom: 16px;
                  font-family: 'League Spartan', sans-serif;
                ">Education</h2>
                ${v.education.map(L=>`
                  <div style="margin-bottom: 20px;">
                    <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">${L.degree}</h3>
                    <p style="font-size: 14px; color: #D1D5DB; margin-bottom: 2px;">${L.school}</p>
                    <p style="font-size: 12px; color: #9CA3AF; margin: 0;">${L.period}</p>
                  </div>
                `).join("")}
              </section>

              <!-- Skills Section -->
              <section style="margin-bottom: 40px;">
                <h2 style="
                  font-size: 24px;
                  font-weight: bold;
                  border-bottom: 2px solid #6B7280;
                  padding-bottom: 8px;
                  margin-bottom: 16px;
                  font-family: 'League Spartan', sans-serif;
                ">Skills</h2>
                ${v.skills.map(L=>`
                  <div style="margin-bottom: 8px;">
                    <span style="font-size: 14px;">• ${L}</span>
                  </div>
                `).join("")}
              </section>

              <!-- Languages Section -->
              <section>
                <h2 style="
                  font-size: 24px;
                  font-weight: bold;
                  border-bottom: 2px solid #6B7280;
                  padding-bottom: 8px;
                  margin-bottom: 16px;
                  font-family: 'League Spartan', sans-serif;
                ">Languages</h2>
                ${v.languages.map(L=>`
                  <div style="margin-bottom: 8px;">
                    <span style="font-size: 14px;">• ${L}</span>
                  </div>
                `).join("")}
              </section>
            </aside>

            <!-- Main Content -->
            <div style="
              flex: 1;
              padding: 32px;
              color: #374151;
            ">
              <!-- Header -->
              <header style="
                margin-bottom: 32px;
                text-align: left;
              ">
                <h1 style="
                  font-size: 48px;
                  font-weight: bold;
                  color: #1F2937;
                  margin: 0;
                  font-family: 'League Spartan', sans-serif;
                  line-height: 1.1;
                ">${v.name}</h1>
                <p style="
                  font-size: 20px;
                  color: #6B7280;
                  margin: 8px 0 0 0;
                  font-weight: 500;
                ">${v.title}</p>
              </header>

              <!-- About Section -->
              <section style="margin-bottom: 40px;">
                <h2 style="
                  font-size: 24px;
                  font-weight: bold;
                  color: #1F2937;
                  margin-bottom: 16px;
                  font-family: 'League Spartan', sans-serif;
                ">About Me</h2>
                <p style="
                  font-size: 14px;
                  line-height: 1.6;
                  color: #4B5563;
                  margin: 0;
                ">${v.about}</p>
              </section>

              <!-- Experience Section -->
              <section style="margin-bottom: 40px;">
                <h2 style="
                  font-size: 24px;
                  font-weight: bold;
                  color: #1F2937;
                  margin-bottom: 24px;
                  font-family: 'League Spartan', sans-serif;
                ">Work Experience</h2>
                ${v.experience.map(L=>`
                  <div style="margin-bottom: 32px;">
                    <div style="margin-bottom: 12px;">
                      <h3 style="
                        font-size: 18px;
                        font-weight: 600;
                        color: #1F2937;
                        margin: 0;
                      ">${L.position}</h3>
                      <p style="
                        font-size: 16px;
                        color: #6B7280;
                        font-weight: 500;
                        margin: 4px 0;
                      ">${L.company}</p>
                      <p style="
                        font-size: 14px;
                        color: #9CA3AF;
                        margin: 0;
                      ">${L.period}</p>
                    </div>
                    <ul style="
                      margin: 0;
                      padding-left: 20px;
                      color: #4B5563;
                    ">
                      ${L.responsibilities.map(Z=>`
                        <li style="
                          font-size: 14px;
                          line-height: 1.5;
                          margin-bottom: 4px;
                        ">${Z}</li>
                      `).join("")}
                    </ul>
                  </div>
                `).join("")}
              </section>

              <!-- References Section -->
              <section>
                <h2 style="
                  font-size: 24px;
                  font-weight: bold;
                  color: #1F2937;
                  margin-bottom: 24px;
                  font-family: 'League Spartan', sans-serif;
                ">References</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                  ${v.references.map(L=>`
                    <div>
                      <h3 style="
                        font-size: 16px;
                        font-weight: 600;
                        color: #1F2937;
                        margin: 0 0 4px 0;
                      ">${L.name}</h3>
                      <p style="
                        font-size: 14px;
                        color: #6B7280;
                        margin: 0 0 8px 0;
                      ">${L.title}</p>
                      <p style="
                        font-size: 12px;
                        color: #9CA3AF;
                        margin: 2px 0;
                      ">${L.phone}</p>
                      <p style="
                        font-size: 12px;
                        color: #9CA3AF;
                        margin: 2px 0;
                      ">${L.email}</p>
                    </div>
                  `).join("")}
                </div>
              </section>
            </main>
          </div>
        </body>
      </html>
    `;P.document.write(q),P.document.close(),setTimeout(()=>{P.focus(),P.print()},1e3)},y=()=>{p(!0)},M=v=>{a(v),p(!1)},I=()=>{p(!1)};return _?t.jsx(Qc,{onNavigateBack:I,onSave:M,initialData:m}):t.jsxs("div",{className:"resume-template-page",children:[t.jsxs("div",{className:"template-header",children:[t.jsx("button",{className:"back-btn",onClick:T||(()=>window.history.back()),"aria-label":"Go back",title:"Go back to templates",children:"← Back to Templates"}),t.jsxs("div",{className:"template-title",children:[t.jsx("h1",{children:"Creative Resume Template"}),t.jsx("p",{children:"Bold layout for design and creative positions"})]}),t.jsxs("div",{className:"template-actions",children:[t.jsx("button",{className:"edit-btn",onClick:y,children:"✏️ Edit Template"}),t.jsx("button",{className:"download-btn",onClick:u,children:"📄 Download PDF"})]})]}),t.jsx("div",{className:"template-preview-container",children:t.jsx("div",{className:"template-preview-wrapper",children:t.jsx(Yc,{data:m})})}),t.jsx("div",{className:"template-features",children:t.jsxs("div",{className:"features-grid",children:[t.jsxs("div",{className:"feature",children:[t.jsx("div",{className:"feature-icon",children:"🎨"}),t.jsx("h3",{children:"Creative Design"}),t.jsx("p",{children:"Eye-catching layout with bold colors and modern typography"})]}),t.jsxs("div",{className:"feature",children:[t.jsx("div",{className:"feature-icon",children:"🖼️"}),t.jsx("h3",{children:"Visual Impact"}),t.jsx("p",{children:"Perfect for designers, marketers, and creative professionals"})]}),t.jsxs("div",{className:"feature",children:[t.jsx("div",{className:"feature-icon",children:"🎯"}),t.jsx("h3",{children:"Brand Focused"}),t.jsx("p",{children:"Showcases personality and creativity while maintaining professionalism"})]}),t.jsxs("div",{className:"feature",children:[t.jsx("div",{className:"feature-icon",children:"📱"}),t.jsx("h3",{children:"Modern Layout"}),t.jsx("p",{children:"Two-column design that looks great both digitally and in print"})]})]})})]})}const Kc=({data:T})=>{const p=T||{personalInfo:{fullName:"Dwight Mackenzie",position:"Research Engineer",address:"400 Whipoorville Road, New York , NY 10014, United States",phone:"(917) 348-3212",email:"Mack_nz85_sd@gmail.com"},skills:["Knowledge of Engineering Principles","Strategic and Tactical Planning","Leadership Skills","Complex Problem Solving","Interpersonal Communication Skills"],languages:["German","English","Dutch"],profile:"Experienced Research Engineer with an extensive background in engineering principles, project leadership, and the effective application of research in technological companies. Bringing forth extensive experience in performing research on product development processes and offering solutions and alterations to improve safety and effectiveness. Adept in working with engineers and project managers at multiple levels to utilize research data effectively and achieve optimal results.",experience:[{position:"Research Engineer",company:"AGR, New York",period:"May 2016 — January 2019",responsibilities:["Worked with Project Managers to discuss equipment function, processes, and productivity, while offering solutions to current issues.","Researched technological improvements currently dominating the field, and tested their outcome for specific products.","Wrote daily reports and organized data presentations for accountability and quality assurance.","Tested the efficacy and safety of products and analyzed the results in relation to procedures."]},{position:"Research Engineer",company:"United Technologies Research Center, New York",period:"June 2012 — April 2016",responsibilities:["Led the research and development of technologies.","Worked in collaboration with other researchers to promote world-class applications and services.","Delivered production-level code to support applications.","Implemented innovative software solutions."]}],education:[{degree:"Master of Science in Biochemical Engineering",institution:"NYU, New York",period:"September 2007 — May 2012"},{degree:"Bachelor of Biochemical Engineering",institution:"NYU, New York",period:"September 2003 — May 2007"}]};return t.jsxs("div",{style:{fontFamily:'"Inter", sans-serif',backgroundColor:"white",color:"#111827",maxWidth:"1280px",margin:"0 auto",padding:"16px 24px"},children:[t.jsx("header",{style:{backgroundColor:"#f3f4f6",padding:"24px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",maxWidth:"800px"},children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsx("h1",{style:{fontSize:"32px",fontWeight:"800",lineHeight:"1.2",color:"#111827",margin:"0 0 8px 0"},children:p.personalInfo.fullName}),t.jsx("p",{style:{fontSize:"20px",fontWeight:"400",lineHeight:"1.3",color:"#374151",margin:"0"},children:p.personalInfo.position})]}),t.jsxs("address",{style:{fontStyle:"normal",fontSize:"14px",fontWeight:"400",color:"#374151",maxWidth:"512px",lineHeight:"1.5"},children:[p.personalInfo.address,t.jsx("br",{}),p.personalInfo.phone,t.jsx("br",{}),t.jsx("a",{href:`mailto:${p.personalInfo.email}`,style:{textDecoration:"underline",color:"#374151"},children:p.personalInfo.email})]})]})}),t.jsxs("section",{style:{marginTop:"32px",display:"flex",flexDirection:"row",gap:"48px"},children:[t.jsxs("aside",{style:{width:"33.333333%"},children:[t.jsxs("div",{style:{marginBottom:"32px"},children:[t.jsx("p",{style:{fontWeight:"700",fontSize:"14px",marginBottom:"8px",color:"#111827"},children:"Skills"}),p.skills.map((m,a)=>t.jsxs("div",{style:{marginBottom:"12px"},children:[t.jsx("p",{style:{fontSize:"14px",lineHeight:"1.4",marginBottom:"4px",color:"#111827"},children:m}),t.jsx("hr",{style:{border:"none",borderTop:"2px solid #111827",width:"80px",margin:"0"}})]},a))]}),t.jsxs("div",{children:[t.jsx("p",{style:{fontWeight:"700",fontSize:"14px",marginBottom:"8px",color:"#111827"},children:"Languages"}),p.languages.map((m,a)=>t.jsxs("div",{style:{marginBottom:"12px"},children:[t.jsx("p",{style:{fontSize:"14px",lineHeight:"1.4",marginBottom:"4px",color:"#111827"},children:m}),t.jsx("hr",{style:{border:"none",borderTop:"2px solid #111827",width:"80px",margin:"0"}})]},a))]})]}),t.jsxs("article",{style:{width:"66.666667%"},children:[t.jsxs("section",{style:{marginBottom:"32px"},children:[t.jsx("h2",{style:{fontWeight:"700",fontSize:"18px",marginBottom:"8px",color:"#111827"},children:"Profile"}),t.jsx("p",{style:{fontSize:"14px",lineHeight:"1.6",color:"#111827"},children:p.profile})]}),t.jsxs("section",{style:{marginBottom:"32px"},children:[t.jsx("h2",{style:{fontWeight:"700",fontSize:"18px",marginBottom:"8px",color:"#111827"},children:"Employment History"}),p.experience.map((m,a)=>t.jsxs("div",{style:{marginBottom:"24px"},children:[t.jsxs("p",{style:{fontWeight:"600",fontSize:"14px",marginBottom:"4px",color:"#111827"},children:[m.position,", ",m.company]}),t.jsx("p",{style:{fontSize:"12px",marginBottom:"8px",color:"#111827"},children:m.period}),t.jsx("ul",{style:{listStyleType:"disc",listStylePosition:"inside",fontSize:"14px",lineHeight:"1.5",color:"#111827",margin:"0",padding:"0"},children:m.responsibilities.map((u,y)=>t.jsx("li",{style:{marginBottom:"4px"},children:u},y))})]},a))]}),t.jsxs("section",{children:[t.jsx("h2",{style:{fontWeight:"700",fontSize:"18px",marginBottom:"8px",color:"#111827"},children:"Education"}),p.education.map((m,a)=>t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsxs("p",{style:{fontWeight:"600",fontSize:"14px",marginBottom:"4px",color:"#111827"},children:[m.degree,", ",m.institution]}),t.jsx("p",{style:{fontSize:"12px",color:"#111827"},children:m.period})]},a))]})]})]})]})};function Xc({onNavigateBack:T,onSave:_,initialData:p}){const m={personalInfo:{fullName:"Dwight Mackenzie",position:"Research Engineer",address:"400 Whipoorville Road, New York , NY 10014, United States",phone:"(917) 348-3212",email:"Mack_nz85_sd@gmail.com"},skills:["Knowledge of Engineering Principles","Strategic and Tactical Planning","Leadership Skills","Complex Problem Solving","Interpersonal Communication Skills"],languages:["German","English","Dutch"],profile:"Experienced Research Engineer with an extensive background in engineering principles, project leadership, and the effective application of research in technological companies. Bringing forth extensive experience in performing research on product development processes and offering solutions and alterations to improve safety and effectiveness. Adept in working with engineers and project managers at multiple levels to utilize research data effectively and achieve optimal results.",experience:[{position:"Research Engineer",company:"AGR, New York",period:"May 2016 — January 2019",responsibilities:["Worked with Project Managers to discuss equipment function, processes, and productivity, while offering solutions to current issues.","Researched technological improvements currently dominating the field, and tested their outcome for specific products.","Wrote daily reports and organized data presentations for accountability and quality assurance.","Tested the efficacy and safety of products and analyzed the results in relation to procedures."]},{position:"Research Engineer",company:"United Technologies Research Center, New York",period:"June 2012 — April 2016",responsibilities:["Led the research and development of technologies.","Worked in collaboration with other researchers to promote world-class applications and services.","Delivered production-level code to support applications.","Implemented innovative software solutions."]}],education:[{degree:"Master of Science in Biochemical Engineering",institution:"NYU, New York",period:"September 2007 — May 2012"},{degree:"Bachelor of Biochemical Engineering",institution:"NYU, New York",period:"September 2003 — May 2007"}]},[a,u]=X.useState(p||m),[y,M]=X.useState("personal"),I=(j,R)=>{u(C=>({...C,personalInfo:{...C.personalInfo,[j]:R}}))},v=(j,R)=>{const C=[...a.skills];C[j]=R,u(B=>({...B,skills:C}))},P=()=>{u(j=>({...j,skills:[...j.skills,""]}))},q=j=>{const R=a.skills.filter((C,B)=>B!==j);u(C=>({...C,skills:R}))},L=(j,R)=>{const C=[...a.languages];C[j]=R,u(B=>({...B,languages:C}))},Z=()=>{u(j=>({...j,languages:[...j.languages,""]}))},ee=j=>{const R=a.languages.filter((C,B)=>B!==j);u(C=>({...C,languages:R}))},K=(j,R,C)=>{const B=[...a.experience];B[j]={...B[j],[R]:C},u(h=>({...h,experience:B}))},Y=(j,R,C)=>{const B=[...a.experience];B[j].responsibilities[R]=C,u(h=>({...h,experience:B}))},J=j=>{const R=[...a.experience];R[j].responsibilities.push(""),u(C=>({...C,experience:R}))},ue=(j,R)=>{const C=[...a.experience];C[j].responsibilities=C[j].responsibilities.filter((B,h)=>h!==R),u(B=>({...B,experience:C}))},ce=()=>{u(j=>({...j,experience:[...j.experience,{position:"",company:"",period:"",responsibilities:[""]}]}))},me=j=>{const R=a.experience.filter((C,B)=>B!==j);u(C=>({...C,experience:R}))},ge=(j,R,C)=>{const B=[...a.education];B[j]={...B[j],[R]:C},u(h=>({...h,education:B}))},le=()=>{u(j=>({...j,education:[...j.education,{degree:"",institution:"",period:""}]}))},ye=j=>{const R=a.education.filter((C,B)=>B!==j);u(C=>({...C,education:R}))},je=()=>{_&&_(a)},he=()=>{const j=window.open("","_blank");j.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Technical Resume</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Inter', sans-serif; background: white; }
            @media print { body { -webkit-print-color-adjust: exact; } }
          </style>
        </head>
        <body>
          <div id="resume-content"></div>
        </body>
      </html>
    `),j.document.close(),setTimeout(()=>{j.print(),j.close()},1e3)},we=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Personal Information"}),t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Full Name"}),t.jsx("input",{type:"text",value:a.personalInfo.fullName,onChange:j=>I("fullName",j.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Position"}),t.jsx("input",{type:"text",value:a.personalInfo.position,onChange:j=>I("position",j.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Phone"}),t.jsx("input",{type:"text",value:a.personalInfo.phone,onChange:j=>I("phone",j.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",value:a.personalInfo.email,onChange:j=>I("email",j.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Address"}),t.jsx("input",{type:"text",value:a.personalInfo.address,onChange:j=>I("address",j.target.value),className:"form-input"})]})]})]}),V=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Profile"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Professional Summary"}),t.jsx("textarea",{value:a.profile,onChange:j=>u(R=>({...R,profile:j.target.value})),className:"form-textarea",rows:"6",placeholder:"Write your professional summary..."})]})]}),Q=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Skills & Languages"}),t.jsxs("div",{className:"subsection",children:[t.jsx("h4",{children:"Skills"}),a.skills.map((j,R)=>t.jsxs("div",{className:"array-item",children:[t.jsx("input",{type:"text",value:j,onChange:C=>v(R,C.target.value),className:"form-input",placeholder:"Enter a skill"}),a.skills.length>1&&t.jsx("button",{type:"button",onClick:()=>q(R),className:"remove-btn",children:"✕"})]},R)),t.jsx("button",{type:"button",onClick:P,className:"add-btn",children:"+ Add Skill"})]}),t.jsxs("div",{className:"subsection",children:[t.jsx("h4",{children:"Languages"}),a.languages.map((j,R)=>t.jsxs("div",{className:"array-item",children:[t.jsx("input",{type:"text",value:j,onChange:C=>L(R,C.target.value),className:"form-input",placeholder:"Enter a language"}),a.languages.length>1&&t.jsx("button",{type:"button",onClick:()=>ee(R),className:"remove-btn",children:"✕"})]},R)),t.jsx("button",{type:"button",onClick:Z,className:"add-btn",children:"+ Add Language"})]})]}),N=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Experience"}),a.experience.map((j,R)=>t.jsxs("div",{className:"experience-item",children:[t.jsxs("div",{className:"experience-header",children:[t.jsxs("h4",{children:["Experience ",R+1]}),a.experience.length>1&&t.jsx("button",{type:"button",onClick:()=>me(R),className:"remove-btn",children:"✕ Remove"})]}),t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Position"}),t.jsx("input",{type:"text",value:j.position,onChange:C=>K(R,"position",C.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Company"}),t.jsx("input",{type:"text",value:j.company,onChange:C=>K(R,"company",C.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Period"}),t.jsx("input",{type:"text",value:j.period,onChange:C=>K(R,"period",C.target.value),className:"form-input",placeholder:"e.g., May 2016 — January 2019"})]})]}),t.jsxs("div",{className:"responsibilities-section",children:[t.jsx("label",{children:"Responsibilities"}),j.responsibilities.map((C,B)=>t.jsxs("div",{className:"array-item",children:[t.jsx("textarea",{value:C,onChange:h=>Y(R,B,h.target.value),className:"form-textarea",rows:"2",placeholder:"Describe your responsibility..."}),j.responsibilities.length>1&&t.jsx("button",{type:"button",onClick:()=>ue(R,B),className:"remove-btn",children:"✕"})]},B)),t.jsx("button",{type:"button",onClick:()=>J(R),className:"add-btn small",children:"+ Add Responsibility"})]})]},R)),t.jsx("button",{type:"button",onClick:ce,className:"add-btn",children:"+ Add Experience"})]}),S=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Education"}),a.education.map((j,R)=>t.jsxs("div",{className:"education-item",children:[t.jsxs("div",{className:"education-header",children:[t.jsxs("h4",{children:["Education ",R+1]}),a.education.length>1&&t.jsx("button",{type:"button",onClick:()=>ye(R),className:"remove-btn",children:"✕ Remove"})]}),t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Degree"}),t.jsx("input",{type:"text",value:j.degree,onChange:C=>ge(R,"degree",C.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Institution"}),t.jsx("input",{type:"text",value:j.institution,onChange:C=>ge(R,"institution",C.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Period"}),t.jsx("input",{type:"text",value:j.period,onChange:C=>ge(R,"period",C.target.value),className:"form-input",placeholder:"e.g., September 2007 — May 2012"})]})]})]},R)),t.jsx("button",{type:"button",onClick:le,className:"add-btn",children:"+ Add Education"})]}),A=()=>{switch(y){case"personal":return t.jsxs(t.Fragment,{children:[we(),V()]});case"skills":return Q();case"experience":return N();case"education":return S();default:return we()}};return t.jsxs("div",{className:"template-editor",children:[t.jsxs("div",{className:"editor-header",children:[t.jsx("button",{className:"back-btn",onClick:T,"aria-label":"Go back",children:"← Back to Template"}),t.jsxs("div",{className:"editor-title",children:[t.jsx("h1",{children:"Edit Technical Template"}),t.jsx("p",{children:"Customize your resume content"})]}),t.jsxs("div",{className:"editor-actions",children:[t.jsx("button",{className:"save-btn",onClick:je,children:"💾 Save Changes"}),t.jsx("button",{className:"download-btn",onClick:he,children:"📄 Download PDF"})]})]}),t.jsxs("div",{className:"editor-content",children:[t.jsx("div",{className:"editor-sidebar",children:t.jsxs("nav",{className:"editor-nav",children:[t.jsx("button",{className:`nav-item ${y==="personal"?"active":""}`,onClick:()=>M("personal"),children:"👤 Personal & Profile"}),t.jsx("button",{className:`nav-item ${y==="skills"?"active":""}`,onClick:()=>M("skills"),children:"🎯 Skills & Languages"}),t.jsx("button",{className:`nav-item ${y==="experience"?"active":""}`,onClick:()=>M("experience"),children:"💼 Experience"}),t.jsx("button",{className:`nav-item ${y==="education"?"active":""}`,onClick:()=>M("education"),children:"🎓 Education"})]})}),t.jsx("div",{className:"editor-main",children:A()}),t.jsxs("div",{className:"editor-preview",children:[t.jsx("div",{className:"preview-header",children:t.jsx("h3",{children:"Live Preview"})}),t.jsx("div",{className:"preview-content",children:t.jsx("div",{style:{backgroundImage:'url("/Technical.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"100%",minHeight:"400px",borderRadius:"8px",position:"relative"},children:t.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:"8px"},children:t.jsx("div",{className:"preview-scale",children:t.jsx(Kc,{data:a})})})})})]})]})]})}function vu({onNavigateBack:T,onEdit:_}){const[p,m]=X.useState(!1),[a,u]=X.useState(null),y=()=>{_?_():m(!0)},M=P=>{u(P),m(!1)},I=()=>{m(!1)},v=()=>{const P=window.open("","_blank");P.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Technical Resume</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Inter', sans-serif; background: white; }
            @media print { body { -webkit-print-color-adjust: exact; } }
          </style>
        </head>
        <body>
          <div id="resume-content"></div>
        </body>
      </html>
    `),P.document.close(),setTimeout(()=>{P.print(),P.close()},1e3)};return p?t.jsx(Xc,{onNavigateBack:I,onSave:M,initialData:a}):t.jsxs("div",{className:"creative-resume-template",children:[t.jsxs("div",{className:"template-header",children:[t.jsx("button",{className:"back-btn",onClick:T||(()=>window.history.back()),"aria-label":"Go back",title:"Go back to templates",children:"← Back to Templates"}),t.jsxs("div",{className:"template-title",children:[t.jsx("h1",{children:"Technical Resume Template"}),t.jsx("p",{children:"Professional layout for technical and engineering positions"})]}),t.jsxs("div",{className:"template-actions",children:[t.jsx("button",{className:"edit-btn",onClick:y,children:"✏️ Edit Template"}),t.jsx("button",{className:"download-btn",onClick:v,children:"📄 Download PDF"})]})]}),t.jsx("div",{className:"template-preview-container",children:t.jsx("div",{className:"template-preview-wrapper",children:t.jsx(Kc,{data:a})})})]})}const Zc=({data:T})=>{const p=T||{personalInfo:{fullName:"MARGARET M. NERNEY",position:"Director",department:"Product Marketing",address:"584 Castro St San Francisco, CA 94114",phone:"(888) 123-4567",email:"m.nerney@gmail.com",linkedin:"linkedin.com/in/margaret.nerney"},profile:"Responsible for developing the product marketing strategy for highly complex products and services in the capacity of an expert individual contributor. Responsible for the success of a product line through development and execution of comprehensive marketing plan. Key Roles and Responsibilities: Develop business plans and positioning of cutting edge products in the marketplace.",skills:["Team Building and Leadership","P&L Management","Product Development","Customer Focused","Contract Negotiation"],experience:[{company:"AT&T",position:"DIRECTOR PRODUCT MARKETING",period:"Jul. 2018 – Present",achievements:["Accolades: Recognized as the top performer out of 400+ individuals in 2018","Manage a $320M annual development budget focused on delivering new features to increase sales conversion, service monetization and improve customer service for AT&T NOW.","Delivered ~$50M improvements to P&L.","Supervise 4 direct reports and 2 SaFe agile teams (~20 people)"]},{company:"",position:"MARKETING MANAGER",period:"Nov. 2016 – Jul. 2018",achievements:["Accolades: Top 10% in performance in 2016 & 2017","O.G. AT&T launch team that delivered 1.5M customers in less than 18 months","Successfully launching a secondary OTT service AT&T NOW in 2018 with more than 600K subscribers and on pace to double by EOY 2019","Managed partnerships with respective SVOD and AVOD partners (i.e. Fullscreen, Pandora, Amazon Music and VRV) resulting in 1M+ customers 2016-2018"]},{company:"VERIZON",position:"LEAD MANAGER MARKETING COMMS",period:"Mar. 2015 – Oct. 2016",achievements:["Accolades: Top 10% in performance in 2016 & 2017","Chief of staff and communication lead for the Chief Marketing Officer (Business)",'Researched, developed and drafted quarterly "state of the business" presentation (P&L, OI initiatives, strategic recommendations) for senior leadership and (Vteam)',"Dramatically improved employee satisfaction over a six month period among 2K+"]}],education:[{institution:"Verizon",degree:"Data Driven Marketing Analytics Degree",period:"Feb. - Nov. 2016"},{institution:"AT&T Marketing Leadership Development",degree:"",period:"Dec. 2017"},{institution:"Boston College",degree:"Bachelor of Arts",period:"May 2011"}]};return t.jsxs("div",{style:{fontFamily:'"Open Sans", sans-serif',backgroundColor:"#f0f4f8",color:"#374151",maxWidth:"1536px",margin:"0 auto",padding:"24px 48px",display:"flex",flexDirection:"row",gap:"80px"},children:[t.jsxs("section",{style:{backgroundColor:"#e8eef4",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"24px",padding:"48px",width:"360px",flexShrink:0},children:[t.jsx("h1",{style:{fontSize:"24px",fontWeight:"600",color:"#111827",marginBottom:"8px",textAlign:"center",lineHeight:"1.2"},children:p.personalInfo.fullName}),t.jsxs("h2",{style:{textAlign:"center",color:"#374151",fontWeight:"600",fontStyle:"italic",fontSize:"14px",marginBottom:"32px",lineHeight:"1.4"},children:[p.personalInfo.position,t.jsx("br",{}),t.jsx("span",{style:{fontStyle:"normal"},children:p.personalInfo.department})]}),t.jsx("div",{style:{width:"100%",borderTop:"1px solid #d1d5db",marginBottom:"32px"}}),t.jsxs("section",{style:{width:"100%",marginBottom:"32px"},children:[t.jsx("h3",{style:{textTransform:"uppercase",fontSize:"12px",fontWeight:"600",color:"#6b7280",letterSpacing:"0.05em",marginBottom:"12px"},children:"PROFILE"}),t.jsx("p",{style:{fontSize:"12px",color:"#374151",lineHeight:"1.6"},children:p.profile})]}),t.jsxs("section",{style:{width:"100%",marginBottom:"40px"},children:[t.jsx("h3",{style:{textTransform:"uppercase",fontSize:"12px",fontWeight:"600",color:"#6b7280",letterSpacing:"0.05em",marginBottom:"12px"},children:"SKILLS"}),t.jsx("ul",{style:{fontSize:"12px",color:"#374151",listStyleType:"disc",listStylePosition:"inside",margin:"0",padding:"0"},children:p.skills.map((m,a)=>t.jsx("li",{style:{marginBottom:"4px"},children:m},a))})]}),t.jsxs("section",{style:{width:"100%",color:"#6b7280",fontSize:"12px",display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsx("span",{style:{width:"14px",textAlign:"center"},children:"📍"}),t.jsx("span",{children:p.personalInfo.address})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsx("span",{style:{width:"14px",textAlign:"center"},children:"✉️"}),t.jsx("a",{href:`mailto:${p.personalInfo.email}`,style:{color:"#6b7280",textDecoration:"none"},children:p.personalInfo.email})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsx("span",{style:{width:"14px",textAlign:"center"},children:"📞"}),t.jsx("a",{href:`tel:${p.personalInfo.phone}`,style:{color:"#6b7280",textDecoration:"none"},children:p.personalInfo.phone})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsx("span",{style:{width:"14px",textAlign:"center"},children:"🔗"}),t.jsx("a",{href:`https://${p.personalInfo.linkedin}`,style:{color:"#6b7280",textDecoration:"none"},children:p.personalInfo.linkedin})]})]})]}),t.jsxs("section",{style:{flex:1,fontSize:"13px",lineHeight:"1.6",color:"#374151"},children:[t.jsx("h3",{style:{textTransform:"uppercase",fontSize:"12px",fontWeight:"600",color:"#6b7280",letterSpacing:"0.05em",marginBottom:"8px"},children:"WORK EXPERIENCE"}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid #d1d5db",marginBottom:"24px"}}),p.experience.map((m,a)=>t.jsxs("article",{style:{marginBottom:"24px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"4px"},children:[t.jsxs("div",{children:[m.company&&t.jsx("p",{style:{fontWeight:"600",color:"#111827",fontSize:"13px",lineHeight:"1.2",margin:"0"},children:m.company}),t.jsx("p",{style:{fontStyle:"italic",fontSize:"12px",color:"#374151",lineHeight:"1.2",margin:"0"},children:m.position})]}),t.jsx("p",{style:{fontSize:"11px",color:"#6b7280",fontWeight:"600",lineHeight:"1.2",margin:"0"},children:m.period})]}),t.jsx("ul",{style:{listStyleType:"disc",listStylePosition:"inside",fontSize:"12px",color:"#374151",margin:"0",padding:"0"},children:m.achievements.map((u,y)=>t.jsx("li",{style:{marginBottom:"4px"},children:u},y))})]},a)),t.jsx("h3",{style:{textTransform:"uppercase",fontSize:"12px",fontWeight:"600",color:"#6b7280",letterSpacing:"0.05em",marginBottom:"8px",marginTop:"40px"},children:"ACADEMIC"}),p.education.map((m,a)=>t.jsxs("article",{style:{fontSize:"12px",color:"#374151",marginBottom:"12px"},children:[t.jsxs("p",{style:{fontWeight:"600",color:"#111827",fontSize:"13px",lineHeight:"1.2",margin:"0",display:"flex",justifyContent:"space-between"},children:[m.institution,t.jsx("span",{style:{fontSize:"11px",color:"#6b7280",fontWeight:"400"},children:m.period})]}),m.degree&&t.jsx("p",{style:{fontStyle:"italic",margin:"0",lineHeight:"1.2"},children:m.degree})]},a))]})]})},yu=({onNavigateBack:T,onEdit:_})=>{const p={personalInfo:{fullName:"MARGARET M. NERNEY",position:"Director",department:"Product Marketing",address:"584 Castro St San Francisco, CA 94114",phone:"(888) 123-4567",email:"m.nerney@gmail.com",linkedin:"linkedin.com/in/margaret.nerney"},profile:"Responsible for developing the product marketing strategy for highly complex products and services in the capacity of an expert individual contributor. Responsible for the success of a product line through development and execution of comprehensive marketing plan. Key Roles and Responsibilities: Develop business plans and positioning of cutting edge products in the marketplace.",skills:["Team Building and Leadership","P&L Management","Product Development","Customer Focused","Contract Negotiation"],experience:[{company:"AT&T",position:"DIRECTOR PRODUCT MARKETING",period:"Jul. 2018 – Present",achievements:["Accolades: Recognized as the top performer out of 400+ individuals in 2018","Manage a $320M annual development budget focused on delivering new features to increase sales conversion, service monetization and improve customer service for AT&T NOW.","Delivered ~$50M improvements to P&L.","Supervise 4 direct reports and 2 SaFe agile teams (~20 people)"]},{company:"",position:"MARKETING MANAGER",period:"Nov. 2016 – Jul. 2018",achievements:["Accolades: Top 10% in performance in 2016 & 2017","O.G. AT&T launch team that delivered 1.5M customers in less than 18 months","Successfully launching a secondary OTT service AT&T NOW in 2018 with more than 600K subscribers and on pace to double by EOY 2019","Managed partnerships with respective SVOD and AVOD partners (i.e. Fullscreen, Pandora, Amazon Music and VRV) resulting in 1M+ customers 2016-2018"]},{company:"VERIZON",position:"LEAD MANAGER MARKETING COMMS",period:"Mar. 2015 – Oct. 2016",achievements:["Accolades: Top 10% in performance in 2016 & 2017","Chief of staff and communication lead for the Chief Marketing Officer (Business)",'Researched, developed and drafted quarterly "state of the business" presentation (P&L, OI initiatives, strategic recommendations) for senior leadership and (Vteam)',"Dramatically improved employee satisfaction over a six month period among 2K+"]}],education:[{institution:"Verizon",degree:"Data Driven Marketing Analytics Degree",period:"Feb. - Nov. 2016"},{institution:"AT&T Marketing Leadership Development",degree:"",period:"Dec. 2017"},{institution:"Boston College",degree:"Bachelor of Arts",period:"May 2011"}]},m=()=>{const a=window.open("","_blank"),u=`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${p.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            @media print {
              body {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              
              * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              
              .outer-container {
                padding: 0 !important;
                background-color: #f0f4f8 !important;
              }
              
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                max-width: 100% !important;
                width: 100% !important;
              }
              
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="outer-container" style="
            font-family: 'Open Sans', sans-serif;
            background-color: #f0f4f8;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <main class="main-container" style="
              max-width: 1536px;
              width: 100%;
              background-color: #f0f4f8;
              color: #374151;
              margin: 0 auto;
              padding: 24px 48px;
              display: flex;
              flex-direction: row;
              gap: 80px;
            ">
              <!-- Left Panel -->
              <section style="
                background-color: #e8eef4;
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 24px;
                padding: 48px;
                width: 360px;
                flex-shrink: 0;
              ">
                <h1 style="
                  font-size: 24px;
                  font-weight: 600;
                  color: #111827;
                  margin-bottom: 8px;
                  text-align: center;
                  line-height: 1.2;
                ">
                  ${p.personalInfo.fullName}
                </h1>
                
                <h2 style="
                  text-align: center;
                  color: #374151;
                  font-weight: 600;
                  font-style: italic;
                  font-size: 14px;
                  margin-bottom: 32px;
                  line-height: 1.4;
                ">
                  ${p.personalInfo.position}
                  <br />
                  <span style="font-style: normal;">
                    ${p.personalInfo.department}
                  </span>
                </h2>

                <div style="
                  width: 100%;
                  border-top: 1px solid #d1d5db;
                  margin-bottom: 32px;
                "></div>

                <!-- Profile Section -->
                <section style="width: 100%; margin-bottom: 32px;">
                  <h3 style="
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 600;
                    color: #6b7280;
                    letter-spacing: 0.05em;
                    margin-bottom: 12px;
                  ">
                    PROFILE
                  </h3>
                  <p style="
                    font-size: 12px;
                    color: #374151;
                    line-height: 1.6;
                  ">
                    ${p.profile}
                  </p>
                </section>

                <!-- Skills Section -->
                <section style="width: 100%; margin-bottom: 40px;">
                  <h3 style="
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 600;
                    color: #6b7280;
                    letter-spacing: 0.05em;
                    margin-bottom: 12px;
                  ">
                    SKILLS
                  </h3>
                  <ul style="
                    font-size: 12px;
                    color: #374151;
                    list-style-type: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                  ">
                    ${p.skills.map(y=>`
                      <li style="margin-bottom: 4px;">
                        ${y}
                      </li>
                    `).join("")}
                  </ul>
                </section>

                <!-- Contact Information -->
                <section style="
                  width: 100%;
                  color: #6b7280;
                  font-size: 12px;
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                ">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">📍</span>
                    <span>${p.personalInfo.address}</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">✉️</span>
                    <a href="mailto:${p.personalInfo.email}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${p.personalInfo.email}
                    </a>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">📞</span>
                    <a href="tel:${p.personalInfo.phone}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${p.personalInfo.phone}
                    </a>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">🔗</span>
                    <a href="https://${p.personalInfo.linkedin}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${p.personalInfo.linkedin}
                    </a>
                  </div>
                </section>
              </section>

              <!-- Right Panel -->
              <section style="
                flex: 1;
                font-size: 13px;
                line-height: 1.6;
                color: #374151;
              ">
                <!-- Work Experience -->
                <h3 style="
                  text-transform: uppercase;
                  font-size: 12px;
                  font-weight: 600;
                  color: #6b7280;
                  letter-spacing: 0.05em;
                  margin-bottom: 8px;
                ">
                  WORK EXPERIENCE
                </h3>
                <hr style="
                  border: none;
                  border-top: 1px solid #d1d5db;
                  margin-bottom: 24px;
                " />

                ${p.experience.map(y=>`
                  <article style="margin-bottom: 24px;">
                    <div style="
                      display: flex;
                      justify-content: space-between;
                      align-items: flex-start;
                      margin-bottom: 4px;
                    ">
                      <div>
                        ${y.company?`
                          <p style="
                            font-weight: 600;
                            color: #111827;
                            font-size: 13px;
                            line-height: 1.2;
                            margin: 0;
                          ">
                            ${y.company}
                          </p>
                        `:""}
                        <p style="
                          font-style: italic;
                          font-size: 12px;
                          color: #374151;
                          line-height: 1.2;
                          margin: 0;
                        ">
                          ${y.position}
                        </p>
                      </div>
                      <p style="
                        font-size: 11px;
                        color: #6b7280;
                        font-weight: 600;
                        line-height: 1.2;
                        margin: 0;
                      ">
                        ${y.period}
                      </p>
                    </div>
                    <ul style="
                      list-style-type: disc;
                      list-style-position: inside;
                      font-size: 12px;
                      color: #374151;
                      margin: 0;
                      padding: 0;
                    ">
                      ${y.achievements.map(M=>`
                        <li style="margin-bottom: 4px;">
                          ${M}
                        </li>
                      `).join("")}
                    </ul>
                  </article>
                `).join("")}

                <!-- Education -->
                <h3 style="
                  text-transform: uppercase;
                  font-size: 12px;
                  font-weight: 600;
                  color: #6b7280;
                  letter-spacing: 0.05em;
                  margin-bottom: 8px;
                  margin-top: 40px;
                ">
                  ACADEMIC
                </h3>

                ${p.education.map(y=>`
                  <article style="
                    font-size: 12px;
                    color: #374151;
                    margin-bottom: 12px;
                  ">
                    <p style="
                      font-weight: 600;
                      color: #111827;
                      font-size: 13px;
                      line-height: 1.2;
                      margin: 0;
                      display: flex;
                      justify-content: space-between;
                    ">
                      ${y.institution}
                      <span style="
                        font-size: 11px;
                        color: #6b7280;
                        font-weight: 400;
                      ">
                        ${y.period}
                      </span>
                    </p>
                    ${y.degree?`
                      <p style="
                        font-style: italic;
                        margin: 0;
                        line-height: 1.2;
                      ">
                        ${y.degree}
                      </p>
                    `:""}
                  </article>
                `).join("")}
              </section>
            </main>
          </div>
        </body>
      </html>
    `;a.document.write(u),a.document.close(),setTimeout(()=>{a.focus(),a.print()},1e3)};return t.jsx("div",{style:{minHeight:"100vh",backgroundColor:"#f8f9fa",padding:"20px"},children:t.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"30px",backgroundColor:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[t.jsx("button",{onClick:T,style:{padding:"10px 20px",backgroundColor:"#6c757d",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:"← Back to Templates"}),t.jsx("h1",{style:{fontSize:"28px",fontWeight:"bold",color:"#333",margin:"0"},children:"Executive Resume Template"}),t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsx("button",{onClick:_,style:{padding:"10px 20px",backgroundColor:"#345995",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:"✏️ Edit Resume"}),t.jsx("button",{onClick:m,style:{padding:"10px 20px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:"📄 Download PDF"})]})]}),t.jsx("div",{style:{backgroundColor:"white",borderRadius:"8px",overflow:"hidden",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"},children:t.jsx(Zc,{data:p})})]})})};function ju({onNavigateBack:T,onSave:_,initialData:p}){const m={personalInfo:{fullName:"MARGARET M. NERNEY",position:"Director",department:"Product Marketing",address:"584 Castro St San Francisco, CA 94114",phone:"(888) 123-4567",email:"m.nerney@gmail.com",linkedin:"linkedin.com/in/margaret.nerney"},profile:"Responsible for developing the product marketing strategy for highly complex products and services in the capacity of an expert individual contributor. Responsible for the success of a product line through development and execution of comprehensive marketing plan. Key Roles and Responsibilities: Develop business plans and positioning of cutting edge products in the marketplace.",skills:["Team Building and Leadership","P&L Management","Product Development","Customer Focused","Contract Negotiation"],experience:[{company:"AT&T",position:"DIRECTOR PRODUCT MARKETING",period:"Jul. 2018 – Present",achievements:["Accolades: Recognized as the top performer out of 400+ individuals in 2018","Manage a $320M annual development budget focused on delivering new features to increase sales conversion, service monetization and improve customer service for AT&T NOW.","Delivered ~$50M improvements to P&L.","Supervise 4 direct reports and 2 SaFe agile teams (~20 people)"]},{company:"",position:"MARKETING MANAGER",period:"Nov. 2016 – Jul. 2018",achievements:["Accolades: Top 10% in performance in 2016 & 2017","O.G. AT&T launch team that delivered 1.5M customers in less than 18 months","Successfully launching a secondary OTT service AT&T NOW in 2018 with more than 600K subscribers and on pace to double by EOY 2019","Managed partnerships with respective SVOD and AVOD partners (i.e. Fullscreen, Pandora, Amazon Music and VRV) resulting in 1M+ customers 2016-2018"]},{company:"VERIZON",position:"LEAD MANAGER MARKETING COMMS",period:"Mar. 2015 – Oct. 2016",achievements:["Accolades: Top 10% in performance in 2016 & 2017","Chief of staff and communication lead for the Chief Marketing Officer (Business)",'Researched, developed and drafted quarterly "state of the business" presentation (P&L, OI initiatives, strategic recommendations) for senior leadership and (Vteam)',"Dramatically improved employee satisfaction over a six month period among 2K+"]}],education:[{institution:"Verizon",degree:"Data Driven Marketing Analytics Degree",period:"Feb. - Nov. 2016"},{institution:"AT&T Marketing Leadership Development",degree:"",period:"Dec. 2017"},{institution:"Boston College",degree:"Bachelor of Arts",period:"May 2011"}]},[a,u]=X.useState(p||m),[y,M]=X.useState("personal"),I=(N,S)=>{u(A=>({...A,personalInfo:{...A.personalInfo,[N]:S}}))},v=(N,S)=>{u(A=>({...A,[N]:S}))},P=(N,S)=>{u(A=>({...A,skills:A.skills.map((j,R)=>R===N?S:j)}))},q=()=>{u(N=>({...N,skills:[...N.skills,"New skill"]}))},L=N=>{u(S=>({...S,skills:S.skills.filter((A,j)=>j!==N)}))},Z=(N,S,A)=>{u(j=>({...j,education:j.education.map((R,C)=>C===N?{...R,[S]:A}:R)}))},ee=()=>{u(N=>({...N,education:[...N.education,{institution:"",degree:"",period:""}]}))},K=N=>{u(S=>({...S,education:S.education.filter((A,j)=>j!==N)}))},Y=(N,S,A)=>{u(j=>({...j,experience:j.experience.map((R,C)=>C===N?{...R,[S]:A}:R)}))},J=(N,S,A)=>{u(j=>({...j,experience:j.experience.map((R,C)=>C===N?{...R,achievements:R.achievements.map((B,h)=>h===S?A:B)}:R)}))},ue=N=>{u(S=>({...S,experience:S.experience.map((A,j)=>j===N?{...A,achievements:[...A.achievements,"New achievement"]}:A)}))},ce=(N,S)=>{u(A=>({...A,experience:A.experience.map((j,R)=>R===N?{...j,achievements:j.achievements.filter((C,B)=>B!==S)}:j)}))},me=()=>{u(N=>({...N,experience:[...N.experience,{company:"",position:"",period:"",achievements:[""]}]}))},ge=N=>{u(S=>({...S,experience:S.experience.filter((A,j)=>j!==N)}))},le=()=>{_&&_(a),alert("Template saved successfully! Changes will be reflected in the preview.")},ye=()=>{const N=window.open("","_blank"),S=`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${a.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Open Sans', sans-serif;
              background: #f0f4f8;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              /* Hide print headers and footers */
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="outer-container" style="
            font-family: 'Open Sans', sans-serif;
            background-color: #f0f4f8;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <main class="main-container" style="
              max-width: 1536px;
              width: 100%;
              background-color: #f0f4f8;
              color: #374151;
              margin: 0 auto;
              padding: 24px 48px;
              display: flex;
              flex-direction: row;
              gap: 80px;
            ">
              <!-- Left Panel -->
              <section style="
                background-color: #e8eef4;
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 24px;
                padding: 48px;
                width: 360px;
                flex-shrink: 0;
              ">
                <h1 style="
                  font-size: 24px;
                  font-weight: 600;
                  color: #111827;
                  margin-bottom: 8px;
                  text-align: center;
                  line-height: 1.2;
                ">
                  ${a.personalInfo.fullName}
                </h1>
                
                <h2 style="
                  text-align: center;
                  color: #374151;
                  font-weight: 600;
                  font-style: italic;
                  font-size: 14px;
                  margin-bottom: 32px;
                  line-height: 1.4;
                ">
                  ${a.personalInfo.position}
                  <br />
                  <span style="font-style: normal;">
                    ${a.personalInfo.department}
                  </span>
                </h2>

                <div style="
                  width: 100%;
                  border-top: 1px solid #d1d5db;
                  margin-bottom: 32px;
                "></div>

                <!-- Profile Section -->
                <section style="width: 100%; margin-bottom: 32px;">
                  <h3 style="
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 600;
                    color: #6b7280;
                    letter-spacing: 0.05em;
                    margin-bottom: 12px;
                  ">
                    PROFILE
                  </h3>
                  <p style="
                    font-size: 12px;
                    color: #374151;
                    line-height: 1.6;
                  ">
                    ${a.profile}
                  </p>
                </section>

                <!-- Skills Section -->
                <section style="width: 100%; margin-bottom: 40px;">
                  <h3 style="
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 600;
                    color: #6b7280;
                    letter-spacing: 0.05em;
                    margin-bottom: 12px;
                  ">
                    SKILLS
                  </h3>
                  <ul style="
                    font-size: 12px;
                    color: #374151;
                    list-style-type: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                  ">
                    ${a.skills.map(A=>`
                      <li style="margin-bottom: 4px;">
                        ${A}
                      </li>
                    `).join("")}
                  </ul>
                </section>

                <!-- Contact Information -->
                <section style="
                  width: 100%;
                  color: #6b7280;
                  font-size: 12px;
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                ">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">📍</span>
                    <span>${a.personalInfo.address}</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">✉️</span>
                    <a href="mailto:${a.personalInfo.email}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${a.personalInfo.email}
                    </a>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">📞</span>
                    <a href="tel:${a.personalInfo.phone}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${a.personalInfo.phone}
                    </a>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">🔗</span>
                    <a href="https://${a.personalInfo.linkedin}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${a.personalInfo.linkedin}
                    </a>
                  </div>
                </section>
              </section>

              <!-- Right Panel -->
              <section style="
                flex: 1;
                font-size: 13px;
                line-height: 1.6;
                color: #374151;
              ">
                <!-- Work Experience -->
                <h3 style="
                  text-transform: uppercase;
                  font-size: 12px;
                  font-weight: 600;
                  color: #6b7280;
                  letter-spacing: 0.05em;
                  margin-bottom: 8px;
                ">
                  WORK EXPERIENCE
                </h3>
                <hr style="
                  border: none;
                  border-top: 1px solid #d1d5db;
                  margin-bottom: 24px;
                " />

                ${a.experience.map(A=>`
                  <article style="margin-bottom: 24px;">
                    <div style="
                      display: flex;
                      justify-content: space-between;
                      align-items: flex-start;
                      margin-bottom: 4px;
                    ">
                      <div>
                        ${A.company?`
                          <p style="
                            font-weight: 600;
                            color: #111827;
                            font-size: 13px;
                            line-height: 1.2;
                            margin: 0;
                          ">
                            ${A.company}
                          </p>
                        `:""}
                        <p style="
                          font-style: italic;
                          font-size: 12px;
                          color: #374151;
                          line-height: 1.2;
                          margin: 0;
                        ">
                          ${A.position}
                        </p>
                      </div>
                      <p style="
                        font-size: 11px;
                        color: #6b7280;
                        font-weight: 600;
                        line-height: 1.2;
                        margin: 0;
                      ">
                        ${A.period}
                      </p>
                    </div>
                    <ul style="
                      list-style-type: disc;
                      list-style-position: inside;
                      font-size: 12px;
                      color: #374151;
                      margin: 0;
                      padding: 0;
                    ">
                      ${A.achievements.map(j=>`
                        <li style="margin-bottom: 4px;">
                          ${j}
                        </li>
                      `).join("")}
                    </ul>
                  </article>
                `).join("")}

                <!-- Education -->
                <h3 style="
                  text-transform: uppercase;
                  font-size: 12px;
                  font-weight: 600;
                  color: #6b7280;
                  letter-spacing: 0.05em;
                  margin-bottom: 8px;
                  margin-top: 40px;
                ">
                  ACADEMIC
                </h3>

                ${a.education.map(A=>`
                  <article style="
                    font-size: 12px;
                    color: #374151;
                    margin-bottom: 12px;
                  ">
                    <p style="
                      font-weight: 600;
                      color: #111827;
                      font-size: 13px;
                      line-height: 1.2;
                      margin: 0;
                      display: flex;
                      justify-content: space-between;
                    ">
                      ${A.institution}
                      <span style="
                        font-size: 11px;
                        color: #6b7280;
                        font-weight: 400;
                      ">
                        ${A.period}
                      </span>
                    </p>
                    ${A.degree?`
                      <p style="
                        font-style: italic;
                        margin: 0;
                        line-height: 1.2;
                      ">
                        ${A.degree}
                      </p>
                    `:""}
                  </article>
                `).join("")}
              </section>
            </main>
          </div>
        </body>
      </html>
    `;N.document.write(S),N.document.close(),setTimeout(()=>{N.focus(),N.print()},1e3)},je=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Personal Information"}),t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Full Name"}),t.jsx("input",{type:"text",value:a.personalInfo.fullName,onChange:N=>I("fullName",N.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Position"}),t.jsx("input",{type:"text",value:a.personalInfo.position,onChange:N=>I("position",N.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Department"}),t.jsx("input",{type:"text",value:a.personalInfo.department,onChange:N=>I("department",N.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",value:a.personalInfo.email,onChange:N=>I("email",N.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Phone"}),t.jsx("input",{type:"text",value:a.personalInfo.phone,onChange:N=>I("phone",N.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"LinkedIn"}),t.jsx("input",{type:"text",value:a.personalInfo.linkedin,onChange:N=>I("linkedin",N.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Address"}),t.jsx("textarea",{value:a.personalInfo.address,onChange:N=>I("address",N.target.value),className:"form-textarea",rows:"3"})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Profile"}),t.jsx("textarea",{value:a.profile,onChange:N=>v("profile",N.target.value),className:"form-textarea",rows:"4"})]})]})]}),he=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Skills"}),t.jsx("div",{className:"qualifications-grid",children:t.jsxs("div",{className:"qualification-column",children:[t.jsx("h4",{children:"Professional Skills"}),a.skills.map((N,S)=>t.jsxs("div",{className:"qualification-item",children:[t.jsx("input",{type:"text",value:N,onChange:A=>P(S,A.target.value),className:"form-input"}),t.jsx("button",{onClick:()=>L(S),className:"remove-btn",children:"✕"})]},S)),t.jsx("button",{onClick:q,className:"add-btn",children:"+ Add Skill"})]})})]}),we=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Education"}),a.education.map((N,S)=>t.jsxs("div",{className:"education-item",children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Institution"}),t.jsx("input",{type:"text",value:N.institution,onChange:A=>Z(S,"institution",A.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Degree/Program"}),t.jsx("input",{type:"text",value:N.degree,onChange:A=>Z(S,"degree",A.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Period"}),t.jsx("input",{type:"text",value:N.period,onChange:A=>Z(S,"period",A.target.value),className:"form-input"})]})]}),t.jsx("button",{onClick:()=>K(S),className:"remove-btn",style:{marginTop:"10px"},children:"Remove Education"})]},S)),t.jsx("button",{onClick:ee,className:"add-btn",children:"+ Add Education"})]}),V=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Work Experience"}),a.experience.map((N,S)=>t.jsxs("div",{className:"experience-item",children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Company"}),t.jsx("input",{type:"text",value:N.company,onChange:A=>Y(S,"company",A.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Position"}),t.jsx("input",{type:"text",value:N.position,onChange:A=>Y(S,"position",A.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Period"}),t.jsx("input",{type:"text",value:N.period,onChange:A=>Y(S,"period",A.target.value),className:"form-input"})]})]}),t.jsxs("div",{className:"responsibilities-section",children:[t.jsx("label",{children:"Key Achievements"}),N.achievements.map((A,j)=>t.jsxs("div",{className:"qualification-item",children:[t.jsx("textarea",{value:A,onChange:R=>J(S,j,R.target.value),className:"form-textarea",rows:"2"}),t.jsx("button",{onClick:()=>ce(S,j),className:"remove-btn",children:"✕"})]},j)),t.jsx("button",{onClick:()=>ue(S),className:"add-btn small",children:"+ Add Achievement"})]}),t.jsx("button",{onClick:()=>ge(S),className:"remove-btn",style:{marginTop:"10px"},children:"Remove Experience"})]},S)),t.jsx("button",{onClick:me,className:"add-btn",children:"+ Add Experience"})]}),Q=()=>{switch(y){case"personal":return je();case"skills":return he();case"education":return we();case"experience":return V();default:return je()}};return t.jsxs("div",{className:"template-editor",children:[t.jsxs("div",{className:"editor-header",children:[t.jsx("button",{className:"back-btn",onClick:T,"aria-label":"Go back",children:"← Back to Template"}),t.jsxs("div",{className:"editor-title",children:[t.jsx("h1",{children:"Edit Executive Template"}),t.jsx("p",{children:"Customize your resume content"})]}),t.jsxs("div",{className:"editor-actions",children:[t.jsx("button",{className:"save-btn",onClick:le,children:"💾 Save Changes"}),t.jsx("button",{className:"download-btn",onClick:ye,children:"📄 Download PDF"})]})]}),t.jsxs("div",{className:"editor-content",children:[t.jsx("div",{className:"editor-sidebar",children:t.jsxs("nav",{className:"editor-nav",children:[t.jsx("button",{className:`nav-item ${y==="personal"?"active":""}`,onClick:()=>M("personal"),children:"👤 Personal Info"}),t.jsx("button",{className:`nav-item ${y==="skills"?"active":""}`,onClick:()=>M("skills"),children:"🎯 Skills"}),t.jsx("button",{className:`nav-item ${y==="education"?"active":""}`,onClick:()=>M("education"),children:"🎓 Education"}),t.jsx("button",{className:`nav-item ${y==="experience"?"active":""}`,onClick:()=>M("experience"),children:"💼 Experience"})]})}),t.jsx("div",{className:"editor-main",children:t.jsx("div",{className:"editor-form",children:Q()})}),t.jsxs("div",{className:"editor-preview",children:[t.jsx("h3",{children:"Live Preview"}),t.jsx("div",{className:"preview-container",children:t.jsx("div",{style:{backgroundImage:'url("/Executive.jpeg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"100%",minHeight:"400px",borderRadius:"8px",position:"relative"},children:t.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:"8px"},children:t.jsx("div",{style:{transform:"scale(0.4)",transformOrigin:"top left",width:"250%",height:"250%"},children:t.jsx(Zc,{data:a})})})})})]})]})]})}const ed=({data:T})=>{const p=T||{personalInfo:{fullName:"Alfredo Curtis",position:"UX / UI Designer",photo:null,location:"Istanbul, Türkiye",experience:"6 years of experience creating captivating web and mobile interfaces.",description:"Graphic design graduate from Istanbul University, blending strong visual aesthetics with user-centric design principles. Passionate about transforming complex ideas into intuitive, engaging digital experiences. Constantly evolving skill set to stay ahead in the fast-paced tech world."},contact:{website:"burakhanarsicicek.com",email:"burakhanarsicicek@outlook.com",phone:"+90 505 514 9960",linkedin:"Linkedin"},skills:["Product design","Prototyping","Flowchart","Wireframing","Interface design"],tools:["Figma","Framer","Adobe XD","Sketch","Photoshop"],languages:["Turkish (Native)","English (C1)"],experience:[{position:"Product Designer",company:"Air BnB",year:"2024"},{position:"Framer Partner",company:"Framer",year:"2024"},{position:"Project Manager",company:"Apple",year:"2023"},{position:"UX / UI Designer",company:"Fiverr LTD",year:"2020"},{position:"Graphic Designer",company:"Meta Inc.",year:"2018"},{position:"Accounting Intern",company:"Domino's",year:"2017"}],education:[{degree:"Computer Programming",institution:"Istanbul University",period:"August 2024"}],portfolio:{text:"Check out my portfolio",qrCode:null}};return t.jsx("div",{style:{fontFamily:"'Inter', sans-serif",backgroundColor:"#f3f4f6",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",padding:"16px"},children:t.jsxs("main",{style:{backgroundColor:"white",maxWidth:"800px",width:"100%",padding:"32px",position:"relative",boxShadow:"0 10px 25px rgba(0, 0, 0, 0.1)",borderRadius:"8px"},children:[t.jsxs("section",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"24px",marginBottom:"24px"},children:[t.jsx("div",{style:{width:"100px",height:"100px",borderRadius:"12px",backgroundColor:"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",fontWeight:"bold",color:"#374151",flexShrink:0,backgroundImage:p.personalInfo.photo?`url(${p.personalInfo.photo})`:"none",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:!p.personalInfo.photo&&p.personalInfo.fullName.split(" ").map(m=>m[0]).join("")}),t.jsxs("div",{style:{flex:1,fontSize:"13px",lineHeight:"1.4",color:"#1a1a1a"},children:[t.jsx("h1",{style:{fontWeight:"600",fontSize:"14px",margin:"0 0 2px 0"},children:p.personalInfo.fullName}),t.jsx("p",{style:{color:"#666666",marginBottom:"8px",fontSize:"12px",margin:"0 0 8px 0"},children:p.personalInfo.position}),t.jsxs("p",{style:{margin:"0 0 8px 0"},children:["Based in ",p.personalInfo.location,". ",p.personalInfo.experience]}),t.jsx("p",{style:{margin:"0"},children:p.personalInfo.description})]})]}),t.jsxs("section",{style:{marginTop:"24px",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"32px 32px",fontSize:"11px",color:"#1a1a1a"},children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontWeight:"600",marginBottom:"4px",fontSize:"12px",margin:"0 0 4px 0"},children:"Skills"}),t.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"2px"},children:p.skills.map((m,a)=>t.jsx("li",{children:m},a))})]}),t.jsxs("div",{children:[t.jsx("h2",{style:{fontWeight:"600",marginBottom:"4px",fontSize:"12px",margin:"0 0 4px 0"},children:"Tools"}),t.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"2px"},children:p.tools.map((m,a)=>t.jsx("li",{children:m},a))})]}),t.jsxs("div",{children:[t.jsx("h2",{style:{fontWeight:"600",marginBottom:"4px",fontSize:"12px",margin:"0 0 4px 0"},children:"Languages"}),t.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"2px"},children:p.languages.map((m,a)=>t.jsx("li",{children:m},a))})]}),t.jsxs("div",{children:[t.jsx("h2",{style:{fontWeight:"600",marginBottom:"4px",fontSize:"12px",margin:"0 0 4px 0"},children:"Contact"}),t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsx("li",{children:t.jsx("a",{href:`https://${p.contact.website}`,style:{color:"#1a1a1a",textDecoration:"underline"},children:p.contact.website})}),t.jsx("li",{children:t.jsx("a",{href:`mailto:${p.contact.email}`,style:{color:"#1a1a1a",textDecoration:"underline"},children:p.contact.email})}),t.jsx("li",{children:t.jsx("a",{href:`tel:${p.contact.phone}`,style:{color:"#1a1a1a",textDecoration:"underline"},children:p.contact.phone})}),t.jsx("li",{children:t.jsx("a",{href:"#",style:{color:"#1a1a1a",textDecoration:"underline"},children:p.contact.linkedin})})]})]})]}),t.jsxs("section",{style:{marginTop:"24px",fontSize:"12px",color:"#1a1a1a"},children:[t.jsx("h2",{style:{fontWeight:"600",marginBottom:"12px",fontSize:"13px",margin:"0 0 12px 0"},children:"Work Experience"}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"32px 32px"},children:p.experience.map((m,a)=>t.jsxs("div",{children:[t.jsxs("p",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"2px",margin:"0 0 2px 0"},children:[t.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"black",display:"inline-block"}}),t.jsx("span",{style:{fontWeight:"600"},children:m.position})]}),t.jsx("p",{style:{fontSize:"11px",marginBottom:"2px",margin:"0 0 2px 0"},children:m.company}),t.jsx("p",{style:{fontSize:"10px",color:"#666666",margin:"0"},children:m.year}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid #d9d9d9",marginTop:"12px",margin:"12px 0 0 0"}})]},a))})]}),t.jsxs("section",{style:{marginTop:"24px",fontSize:"12px",color:"#1a1a1a"},children:[t.jsx("h2",{style:{fontWeight:"600",marginBottom:"8px",fontSize:"13px",margin:"0 0 8px 0"},children:"Education"}),p.education.map((m,a)=>t.jsxs("div",{children:[t.jsxs("p",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"2px",margin:"0 0 2px 0"},children:[t.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"black",display:"inline-block"}}),t.jsx("span",{style:{fontWeight:"600"},children:m.degree})]}),t.jsx("p",{style:{fontSize:"11px",marginBottom:"2px",margin:"0 0 2px 0"},children:m.institution}),t.jsx("p",{style:{fontSize:"10px",color:"#666666",margin:"0"},children:m.period})]},a))]}),t.jsxs("section",{style:{marginTop:"32px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:"12px",color:"#1a1a1a",fontFamily:"'Indie Flower', cursive",position:"absolute",bottom:"32px",right:"32px"},children:[t.jsxs("p",{style:{marginBottom:"4px",lineHeight:"1.1",textAlign:"center",margin:"0 0 4px 0"},children:[p.portfolio.text.split(" ").slice(0,2).join(" "),t.jsx("br",{}),p.portfolio.text.split(" ").slice(2).join(" ")]}),t.jsx("div",{style:{width:"80px",height:"80px",backgroundColor:"#f3f4f6",border:"2px solid #e5e7eb",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",color:"#6b7280",textAlign:"center",backgroundImage:p.portfolio.qrCode?`url(${p.portfolio.qrCode})`:"none",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:!p.portfolio.qrCode&&"QR Code"})]})]})})};function td({onNavigateBack:T,onSave:_,initialData:p}){const m={personalInfo:{fullName:"Alfredo Curtis",position:"UX / UI Designer",photo:null,location:"Istanbul, Türkiye",experience:"6 years of experience creating captivating web and mobile interfaces.",description:"Graphic design graduate from Istanbul University, blending strong visual aesthetics with user-centric design principles. Passionate about transforming complex ideas into intuitive, engaging digital experiences. Constantly evolving skill set to stay ahead in the fast-paced tech world."},contact:{website:"burakhanarsicicek.com",email:"burakhanarsicicek@outlook.com",phone:"+90 505 514 9960",linkedin:"Linkedin"},skills:["Product design","Prototyping","Flowchart","Wireframing","Interface design"],tools:["Figma","Framer","Adobe XD","Sketch","Photoshop"],languages:["Turkish (Native)","English (C1)"],experience:[{position:"Product Designer",company:"Air BnB",year:"2024"},{position:"Framer Partner",company:"Framer",year:"2024"},{position:"Project Manager",company:"Apple",year:"2023"},{position:"UX / UI Designer",company:"Fiverr LTD",year:"2020"},{position:"Graphic Designer",company:"Meta Inc.",year:"2018"},{position:"Accounting Intern",company:"Domino's",year:"2017"}],education:[{degree:"Computer Programming",institution:"Istanbul University",period:"August 2024"}],portfolio:{text:"Check out my portfolio",qrCode:null}},[a,u]=X.useState(p||m),[y,M]=X.useState("personal"),I=(l,c)=>{u(f=>({...f,personalInfo:{...f.personalInfo,[l]:c}}))},v=(l,c)=>{u(f=>({...f,contact:{...f.contact,[l]:c}}))},P=l=>{const c=l.target.files[0];if(c)if(c.type.startsWith("image/")){const f=new FileReader;f.onload=w=>{u($=>({...$,personalInfo:{...$.personalInfo,photo:w.target.result}}))},f.readAsDataURL(c)}else alert("Please select a valid image file (PNG, JPG, JPEG, GIF)")},q=()=>{u(l=>({...l,personalInfo:{...l.personalInfo,photo:null}}))},L=l=>{const c=l.target.files[0];if(c)if(c.type.startsWith("image/")){const f=new FileReader;f.onload=w=>{u($=>({...$,portfolio:{...$.portfolio,qrCode:w.target.result}}))},f.readAsDataURL(c)}else alert("Please select a valid image file (PNG, JPG, JPEG, GIF)")},Z=()=>{u(l=>({...l,portfolio:{...l.portfolio,qrCode:null}}))},ee=(l,c)=>{u(f=>({...f,skills:f.skills.map((w,$)=>$===l?c:w)}))},K=()=>{u(l=>({...l,skills:[...l.skills,"New skill"]}))},Y=l=>{u(c=>({...c,skills:c.skills.filter((f,w)=>w!==l)}))},J=(l,c)=>{u(f=>({...f,tools:f.tools.map((w,$)=>$===l?c:w)}))},ue=()=>{u(l=>({...l,tools:[...l.tools,"New tool"]}))},ce=l=>{u(c=>({...c,tools:c.tools.filter((f,w)=>w!==l)}))},me=(l,c)=>{u(f=>({...f,languages:f.languages.map((w,$)=>$===l?c:w)}))},ge=()=>{u(l=>({...l,languages:[...l.languages,"New language"]}))},le=l=>{u(c=>({...c,languages:c.languages.filter((f,w)=>w!==l)}))},ye=(l,c,f)=>{u(w=>({...w,education:w.education.map(($,te)=>te===l?{...$,[c]:f}:$)}))},je=()=>{u(l=>({...l,education:[...l.education,{degree:"",institution:"",period:""}]}))},he=l=>{u(c=>({...c,education:c.education.filter((f,w)=>w!==l)}))},we=(l,c,f)=>{u(w=>({...w,experience:w.experience.map(($,te)=>te===l?{...$,[c]:f}:$)}))},V=()=>{u(l=>({...l,experience:[...l.experience,{position:"",company:"",year:""}]}))},Q=l=>{u(c=>({...c,experience:c.experience.filter((f,w)=>w!==l)}))},N=()=>{_&&_(a),alert("Template saved successfully! Changes will be reflected in the preview.")},S=()=>{const l=window.open("","_blank"),c=`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${a.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Inter', sans-serif;
              background: #f3f4f6;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div style="
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 16px;
          ">
            <main style="
              background-color: white;
              max-width: 800px;
              width: 100%;
              padding: 32px;
              position: relative;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
            ">
              <!-- Header Section -->
              <section style="
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                gap: 24px;
                margin-bottom: 24px;
              ">
                <!-- Profile Photo -->
                <div style="
                  width: 100px;
                  height: 100px;
                  border-radius: 12px;
                  background-color: #f3f4f6;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 24px;
                  font-weight: bold;
                  color: #374151;
                  flex-shrink: 0;
                  ${a.personalInfo.photo?`background-image: url(${a.personalInfo.photo}); background-size: cover; background-position: center; background-repeat: no-repeat;`:""}
                ">
                  ${a.personalInfo.photo?"":a.personalInfo.fullName.split(" ").map(f=>f[0]).join("")}
                </div>

                <!-- Personal Info -->
                <div style="
                  flex: 1;
                  font-size: 13px;
                  line-height: 1.4;
                  color: #1a1a1a;
                ">
                  <h1 style="
                    font-weight: 600;
                    font-size: 14px;
                    margin: 0 0 2px 0;
                  ">
                    ${a.personalInfo.fullName}
                  </h1>
                  
                  <p style="
                    color: #666666;
                    margin: 0 0 8px 0;
                    font-size: 12px;
                  ">
                    ${a.personalInfo.position}
                  </p>
                  
                  <p style="margin: 0 0 8px 0;">
                    Based in ${a.personalInfo.location}. ${a.personalInfo.experience}
                  </p>
                  
                  <p style="margin: 0;">
                    ${a.personalInfo.description}
                  </p>
                </div>
              </section>

              <!-- Skills, Tools, Languages & Contact Grid -->
              <section style="
                margin-top: 24px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 32px;
                font-size: 11px;
                color: #1a1a1a;
              ">
                <!-- Skills -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Skills
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${a.skills.map(f=>`<li>${f}</li>`).join("")}
                  </ul>
                </div>

                <!-- Tools -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Tools
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${a.tools.map(f=>`<li>${f}</li>`).join("")}
                  </ul>
                </div>

                <!-- Languages -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Languages
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${a.languages.map(f=>`<li>${f}</li>`).join("")}
                  </ul>
                </div>

                <!-- Contact -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Contact
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    <li>
                      <a href="https://${a.contact.website}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${a.contact.website}
                      </a>
                    </li>
                    <li>
                      <a href="mailto:${a.contact.email}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${a.contact.email}
                      </a>
                    </li>
                    <li>
                      <a href="tel:${a.contact.phone}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${a.contact.phone}
                      </a>
                    </li>
                    <li>
                      <a href="#" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${a.contact.linkedin}
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              <!-- Work Experience Section -->
              <section style="
                margin-top: 24px;
                font-size: 12px;
                color: #1a1a1a;
              ">
                <h2 style="
                  font-weight: 600;
                  margin: 0 0 12px 0;
                  font-size: 13px;
                ">
                  Work Experience
                </h2>
                
                <div style="
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 32px;
                ">
                  ${a.experience.map(f=>`
                    <div>
                      <p style="
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        margin: 0 0 2px 0;
                      ">
                        <span style="
                          width: 8px;
                          height: 8px;
                          border-radius: 50%;
                          background-color: black;
                          display: inline-block;
                        "></span>
                        <span style="font-weight: 600;">
                          ${f.position}
                        </span>
                      </p>
                      <p style="
                        font-size: 11px;
                        margin: 0 0 2px 0;
                      ">
                        ${f.company}
                      </p>
                      <p style="
                        font-size: 10px;
                        color: #666666;
                        margin: 0;
                      ">
                        ${f.year}
                      </p>
                      <hr style="
                        border: none;
                        border-top: 1px solid #d9d9d9;
                        margin: 12px 0 0 0;
                      " />
                    </div>
                  `).join("")}
                </div>
              </section>

              <!-- Education Section -->
              <section style="
                margin-top: 24px;
                font-size: 12px;
                color: #1a1a1a;
              ">
                <h2 style="
                  font-weight: 600;
                  margin: 0 0 8px 0;
                  font-size: 13px;
                ">
                  Education
                </h2>
                
                ${a.education.map(f=>`
                  <div>
                    <p style="
                      display: flex;
                      align-items: center;
                      gap: 8px;
                      margin: 0 0 2px 0;
                    ">
                      <span style="
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background-color: black;
                        display: inline-block;
                      "></span>
                      <span style="font-weight: 600;">
                        ${f.degree}
                      </span>
                    </p>
                    <p style="
                      font-size: 11px;
                      margin: 0 0 2px 0;
                    ">
                      ${f.institution}
                    </p>
                    <p style="
                      font-size: 10px;
                      color: #666666;
                      margin: 0;
                    ">
                      ${f.period}
                    </p>
                  </div>
                `).join("")}
              </section>

              <!-- Portfolio Section -->
              <section style="
                margin-top: 32px;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 12px;
                color: #1a1a1a;
                font-family: 'Indie Flower', cursive;
                position: absolute;
                bottom: 32px;
                right: 32px;
              ">
                <p style="
                  margin: 0 0 4px 0;
                  line-height: 1.1;
                  text-align: center;
                ">
                  ${a.portfolio.text.split(" ").slice(0,2).join(" ")}<br/>
                  ${a.portfolio.text.split(" ").slice(2).join(" ")}
                </p>
                
                <div style="
                  width: 80px;
                  height: 80px;
                  background-color: #f3f4f6;
                  border: 2px solid #e5e7eb;
                  border-radius: 4px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 10px;
                  color: #6b7280;
                  text-align: center;
                  ${a.portfolio.qrCode?`background-image: url(${a.portfolio.qrCode}); background-size: cover; background-position: center; background-repeat: no-repeat;`:""}
                ">
                  ${a.portfolio.qrCode?"":"QR Code"}
                </div>
              </section>
            </main>
          </div>
        </body>
      </html>
    `;l.document.write(c),l.document.close(),setTimeout(()=>{l.focus(),l.print()},1e3)},A=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Personal Information"}),t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Full Name"}),t.jsx("input",{type:"text",value:a.personalInfo.fullName,onChange:l=>I("fullName",l.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Job Title"}),t.jsx("input",{type:"text",value:a.personalInfo.position,onChange:l=>I("position",l.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Location"}),t.jsx("input",{type:"text",value:a.personalInfo.location,onChange:l=>I("location",l.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Profile Photo"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.personalInfo.photo&&t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx("img",{src:a.personalInfo.photo,alt:"Profile preview",style:{width:"60px",height:"60px",borderRadius:"8px",objectFit:"cover",border:"2px solid #ddd"}}),t.jsx("button",{type:"button",onClick:q,className:"remove-btn",style:{padding:"5px 10px",fontSize:"12px"},children:"Remove Photo"})]}),t.jsx("input",{type:"file",accept:"image/*",onChange:P,className:"form-input",style:{padding:"8px"}})]})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Experience Summary"}),t.jsx("input",{type:"text",value:a.personalInfo.experience,onChange:l=>I("experience",l.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Description"}),t.jsx("textarea",{value:a.personalInfo.description,onChange:l=>I("description",l.target.value),className:"form-textarea",rows:"4"})]})]})]}),j=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Contact Information"}),t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Website"}),t.jsx("input",{type:"text",value:a.contact.website,onChange:l=>v("website",l.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",value:a.contact.email,onChange:l=>v("email",l.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Phone"}),t.jsx("input",{type:"text",value:a.contact.phone,onChange:l=>v("phone",l.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"LinkedIn"}),t.jsx("input",{type:"text",value:a.contact.linkedin,onChange:l=>v("linkedin",l.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Portfolio QR Code"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.portfolio.qrCode&&t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx("img",{src:a.portfolio.qrCode,alt:"QR Code preview",style:{width:"60px",height:"60px",borderRadius:"4px",objectFit:"cover",border:"2px solid #ddd"}}),t.jsx("button",{type:"button",onClick:Z,className:"remove-btn",style:{padding:"5px 10px",fontSize:"12px"},children:"Remove QR Code"})]}),t.jsx("input",{type:"file",accept:"image/*",onChange:L,className:"form-input",style:{padding:"8px"}})]})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Portfolio Text"}),t.jsx("input",{type:"text",value:a.portfolio.text,onChange:l=>u(c=>({...c,portfolio:{...c.portfolio,text:l.target.value}})),className:"form-input"})]})]})]}),R=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Skills & Tools"}),t.jsxs("div",{className:"qualifications-grid",children:[t.jsxs("div",{className:"qualification-column",children:[t.jsx("h4",{children:"Skills"}),a.skills.map((l,c)=>t.jsxs("div",{className:"qualification-item",children:[t.jsx("input",{type:"text",value:l,onChange:f=>ee(c,f.target.value),className:"form-input"}),t.jsx("button",{onClick:()=>Y(c),className:"remove-btn",children:"✕"})]},c)),t.jsx("button",{onClick:K,className:"add-btn",children:"+ Add Skill"})]}),t.jsxs("div",{className:"qualification-column",children:[t.jsx("h4",{children:"Tools"}),a.tools.map((l,c)=>t.jsxs("div",{className:"qualification-item",children:[t.jsx("input",{type:"text",value:l,onChange:f=>J(c,f.target.value),className:"form-input"}),t.jsx("button",{onClick:()=>ce(c),className:"remove-btn",children:"✕"})]},c)),t.jsx("button",{onClick:ue,className:"add-btn",children:"+ Add Tool"})]})]}),t.jsxs("div",{style:{marginTop:"20px"},children:[t.jsx("h4",{children:"Languages"}),a.languages.map((l,c)=>t.jsxs("div",{className:"qualification-item",children:[t.jsx("input",{type:"text",value:l,onChange:f=>me(c,f.target.value),className:"form-input"}),t.jsx("button",{onClick:()=>le(c),className:"remove-btn",children:"✕"})]},c)),t.jsx("button",{onClick:ge,className:"add-btn",children:"+ Add Language"})]})]}),C=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Education"}),a.education.map((l,c)=>t.jsxs("div",{className:"education-item",children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Degree"}),t.jsx("input",{type:"text",value:l.degree,onChange:f=>ye(c,"degree",f.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Institution"}),t.jsx("input",{type:"text",value:l.institution,onChange:f=>ye(c,"institution",f.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Period"}),t.jsx("input",{type:"text",value:l.period,onChange:f=>ye(c,"period",f.target.value),className:"form-input"})]})]}),t.jsx("button",{onClick:()=>he(c),className:"remove-btn",style:{marginTop:"10px"},children:"Remove Education"})]},c)),t.jsx("button",{onClick:je,className:"add-btn",children:"+ Add Education"})]}),B=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Work Experience"}),a.experience.map((l,c)=>t.jsxs("div",{className:"experience-item",children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Position"}),t.jsx("input",{type:"text",value:l.position,onChange:f=>we(c,"position",f.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Company"}),t.jsx("input",{type:"text",value:l.company,onChange:f=>we(c,"company",f.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Year"}),t.jsx("input",{type:"text",value:l.year,onChange:f=>we(c,"year",f.target.value),className:"form-input"})]})]}),t.jsx("button",{onClick:()=>Q(c),className:"remove-btn",style:{marginTop:"10px"},children:"Remove Experience"})]},c)),t.jsx("button",{onClick:V,className:"add-btn",children:"+ Add Experience"})]}),h=()=>{switch(y){case"personal":return A();case"contact":return j();case"skills":return R();case"education":return C();case"experience":return B();default:return A()}};return t.jsxs("div",{className:"template-editor",children:[t.jsxs("div",{className:"editor-header",children:[t.jsx("button",{className:"back-btn",onClick:T,"aria-label":"Go back",children:"← Back to Template"}),t.jsxs("div",{className:"editor-title",children:[t.jsx("h1",{children:"Edit Modern Template"}),t.jsx("p",{children:"Customize your resume content"})]}),t.jsxs("div",{className:"editor-actions",children:[t.jsx("button",{className:"save-btn",onClick:N,children:"💾 Save Changes"}),t.jsx("button",{className:"download-btn",onClick:S,children:"📄 Download PDF"})]})]}),t.jsxs("div",{className:"editor-content",children:[t.jsx("div",{className:"editor-sidebar",children:t.jsxs("nav",{className:"editor-nav",children:[t.jsx("button",{className:`nav-item ${y==="personal"?"active":""}`,onClick:()=>M("personal"),children:"👤 Personal Info"}),t.jsx("button",{className:`nav-item ${y==="contact"?"active":""}`,onClick:()=>M("contact"),children:"📞 Contact & Portfolio"}),t.jsx("button",{className:`nav-item ${y==="skills"?"active":""}`,onClick:()=>M("skills"),children:"🎯 Skills & Tools"}),t.jsx("button",{className:`nav-item ${y==="education"?"active":""}`,onClick:()=>M("education"),children:"🎓 Education"}),t.jsx("button",{className:`nav-item ${y==="experience"?"active":""}`,onClick:()=>M("experience"),children:"💼 Experience"})]})}),t.jsx("div",{className:"editor-main",children:t.jsx("div",{className:"editor-form",children:h()})}),t.jsxs("div",{className:"editor-preview",children:[t.jsx("h3",{children:"Live Preview"}),t.jsx("div",{className:"preview-container",children:t.jsx("div",{style:{backgroundImage:'url("/mordern.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"100%",minHeight:"400px",borderRadius:"8px",position:"relative"},children:t.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:"8px"},children:t.jsx("div",{style:{transform:"scale(0.4)",transformOrigin:"top left",width:"250%",height:"250%"},children:t.jsx(ed,{data:a})})})})})]})]})]})}function bu({onNavigateBack:T}){const[_,p]=X.useState("preview"),[m,a]=X.useState(null),u=()=>{p("editor")},y=()=>{p("preview")},M=v=>{a(v)},I=()=>{const v=window.open("","_blank"),P=m||{personalInfo:{fullName:"Alfredo Curtis",position:"UX / UI Designer",photo:null,location:"Istanbul, Türkiye",experience:"6 years of experience creating captivating web and mobile interfaces.",description:"Graphic design graduate from Istanbul University, blending strong visual aesthetics with user-centric design principles. Passionate about transforming complex ideas into intuitive, engaging digital experiences. Constantly evolving skill set to stay ahead in the fast-paced tech world."},contact:{website:"burakhanarsicicek.com",email:"burakhanarsicicek@outlook.com",phone:"+90 505 514 9960",linkedin:"Linkedin"},skills:["Product design","Prototyping","Flowchart","Wireframing","Interface design"],tools:["Figma","Framer","Adobe XD","Sketch","Photoshop"],languages:["Turkish (Native)","English (C1)"],experience:[{position:"Product Designer",company:"Air BnB",year:"2024"},{position:"Framer Partner",company:"Framer",year:"2024"},{position:"Project Manager",company:"Apple",year:"2023"},{position:"UX / UI Designer",company:"Fiverr LTD",year:"2020"},{position:"Graphic Designer",company:"Meta Inc.",year:"2018"},{position:"Accounting Intern",company:"Domino's",year:"2017"}],education:[{degree:"Computer Programming",institution:"Istanbul University",period:"August 2024"}],portfolio:{text:"Check out my portfolio",qrCode:null}},q=`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${P.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Inter', sans-serif;
              background: #f3f4f6;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div style="
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 16px;
          ">
            <main style="
              background-color: white;
              max-width: 800px;
              width: 100%;
              padding: 32px;
              position: relative;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
            ">
              <!-- Header Section -->
              <section style="
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                gap: 24px;
                margin-bottom: 24px;
              ">
                <!-- Profile Photo -->
                <div style="
                  width: 100px;
                  height: 100px;
                  border-radius: 12px;
                  background-color: #f3f4f6;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 24px;
                  font-weight: bold;
                  color: #374151;
                  flex-shrink: 0;
                  ${P.personalInfo.photo?`background-image: url(${P.personalInfo.photo}); background-size: cover; background-position: center; background-repeat: no-repeat;`:""}
                ">
                  ${P.personalInfo.photo?"":P.personalInfo.fullName.split(" ").map(L=>L[0]).join("")}
                </div>

                <!-- Personal Info -->
                <div style="
                  flex: 1;
                  font-size: 13px;
                  line-height: 1.4;
                  color: #1a1a1a;
                ">
                  <h1 style="
                    font-weight: 600;
                    font-size: 14px;
                    margin: 0 0 2px 0;
                  ">
                    ${P.personalInfo.fullName}
                  </h1>
                  
                  <p style="
                    color: #666666;
                    margin: 0 0 8px 0;
                    font-size: 12px;
                  ">
                    ${P.personalInfo.position}
                  </p>
                  
                  <p style="margin: 0 0 8px 0;">
                    Based in ${P.personalInfo.location}. ${P.personalInfo.experience}
                  </p>
                  
                  <p style="margin: 0;">
                    ${P.personalInfo.description}
                  </p>
                </div>
              </section>

              <!-- Skills, Tools, Languages & Contact Grid -->
              <section style="
                margin-top: 24px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 32px;
                font-size: 11px;
                color: #1a1a1a;
              ">
                <!-- Skills -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Skills
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${P.skills.map(L=>`<li>${L}</li>`).join("")}
                  </ul>
                </div>

                <!-- Tools -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Tools
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${P.tools.map(L=>`<li>${L}</li>`).join("")}
                  </ul>
                </div>

                <!-- Languages -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Languages
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${P.languages.map(L=>`<li>${L}</li>`).join("")}
                  </ul>
                </div>

                <!-- Contact -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Contact
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    <li>
                      <a href="https://${P.contact.website}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${P.contact.website}
                      </a>
                    </li>
                    <li>
                      <a href="mailto:${P.contact.email}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${P.contact.email}
                      </a>
                    </li>
                    <li>
                      <a href="tel:${P.contact.phone}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${P.contact.phone}
                      </a>
                    </li>
                    <li>
                      <a href="#" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${P.contact.linkedin}
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              <!-- Work Experience Section -->
              <section style="
                margin-top: 24px;
                font-size: 12px;
                color: #1a1a1a;
              ">
                <h2 style="
                  font-weight: 600;
                  margin: 0 0 12px 0;
                  font-size: 13px;
                ">
                  Work Experience
                </h2>
                
                <div style="
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 32px;
                ">
                  ${P.experience.map(L=>`
                    <div>
                      <p style="
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        margin: 0 0 2px 0;
                      ">
                        <span style="
                          width: 8px;
                          height: 8px;
                          border-radius: 50%;
                          background-color: black;
                          display: inline-block;
                        "></span>
                        <span style="font-weight: 600;">
                          ${L.position}
                        </span>
                      </p>
                      <p style="
                        font-size: 11px;
                        margin: 0 0 2px 0;
                      ">
                        ${L.company}
                      </p>
                      <p style="
                        font-size: 10px;
                        color: #666666;
                        margin: 0;
                      ">
                        ${L.year}
                      </p>
                      <hr style="
                        border: none;
                        border-top: 1px solid #d9d9d9;
                        margin: 12px 0 0 0;
                      " />
                    </div>
                  `).join("")}
                </div>
              </section>

              <!-- Education Section -->
              <section style="
                margin-top: 24px;
                font-size: 12px;
                color: #1a1a1a;
              ">
                <h2 style="
                  font-weight: 600;
                  margin: 0 0 8px 0;
                  font-size: 13px;
                ">
                  Education
                </h2>
                
                ${P.education.map(L=>`
                  <div>
                    <p style="
                      display: flex;
                      align-items: center;
                      gap: 8px;
                      margin: 0 0 2px 0;
                    ">
                      <span style="
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background-color: black;
                        display: inline-block;
                      "></span>
                      <span style="font-weight: 600;">
                        ${L.degree}
                      </span>
                    </p>
                    <p style="
                      font-size: 11px;
                      margin: 0 0 2px 0;
                    ">
                      ${L.institution}
                    </p>
                    <p style="
                      font-size: 10px;
                      color: #666666;
                      margin: 0;
                    ">
                      ${L.period}
                    </p>
                  </div>
                `).join("")}
              </section>

              <!-- Portfolio Section -->
              <section style="
                margin-top: 32px;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 12px;
                color: #1a1a1a;
                font-family: 'Indie Flower', cursive;
                position: absolute;
                bottom: 32px;
                right: 32px;
              ">
                <p style="
                  margin: 0 0 4px 0;
                  line-height: 1.1;
                  text-align: center;
                ">
                  ${P.portfolio.text.split(" ").slice(0,2).join(" ")}<br/>
                  ${P.portfolio.text.split(" ").slice(2).join(" ")}
                </p>
                
                <div style="
                  width: 80px;
                  height: 80px;
                  background-color: #f3f4f6;
                  border: 2px solid #e5e7eb;
                  border-radius: 4px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 10px;
                  color: #6b7280;
                  text-align: center;
                  ${P.portfolio.qrCode?`background-image: url(${P.portfolio.qrCode}); background-size: cover; background-position: center; background-repeat: no-repeat;`:""}
                ">
                  ${P.portfolio.qrCode?"":"QR Code"}
                </div>
              </section>
            </main>
          </div>
        </body>
      </html>
    `;v.document.write(q),v.document.close(),setTimeout(()=>{v.focus(),v.print()},1e3)};return _==="editor"?t.jsx(td,{onNavigateBack:y,onSave:M,initialData:m}):t.jsxs("div",{className:"template-container",children:[t.jsxs("div",{className:"template-header",children:[t.jsx("button",{className:"back-btn",onClick:T,"aria-label":"Go back",children:"← Back to Templates"}),t.jsxs("div",{className:"template-title",children:[t.jsx("h1",{children:"Modern Resume Template"}),t.jsx("p",{children:"Contemporary layout with clean typography"})]}),t.jsxs("div",{className:"template-actions",children:[t.jsx("button",{className:"edit-btn",onClick:u,children:"✏️ Edit Template"}),t.jsx("button",{className:"download-btn",onClick:I,children:"📄 Download PDF"})]})]}),t.jsx("div",{className:"template-preview-container",children:t.jsx("div",{className:"template-preview-wrapper",children:t.jsx(ed,{data:m})})})]})}function nd({data:T}){const p=T||{personalInfo:{fullName:"SANDRA WARD",phone:"(555)555-5555",email:"example@example.com",address:"ABC Street, City, State 12345"},summary:"Highly skilled and creative Photographer with 4 years of experience in capturing stunning photographs for various clients and projects. Proficient in using Adobe Photoshop and Lightroom for editing and retouching images. Strong ability to understand client vision and deliver exceptional results. Experienced in graphic design and digital marketing, with a Bachelor's degree in Graphic Design and a Master's degree in Photography.",skills:["Photographer","Adobe Photoshop","Lighting","Photo Editing","Graphic Design","Digital Marketing","Social Media Management","Event Coordination"],experience:[{position:"Photographer",company:"ABC Studios",location:"New York, New York",period:"Jan 2018 - Dec 2020",responsibilities:["Captured high-quality photographs for various clients and projects","Managed and organized photoshoots, including location scouting and model selection","Edited and retouched images using Adobe Photoshop and Lightroom","Collaborated with clients to understand their vision and deliver exceptional results"]},{position:"Graphic Designer",company:"XYZ Agency",location:"Los Angeles, California",period:"Jan 2016 - Dec 2017",responsibilities:["Designed and created visually appealing graphics for various marketing materials","Collaborated with clients to understand their design needs and requirements","Managed multiple projects simultaneously and met tight deadlines","Worked closely with the marketing team to develop effective visual communication strategies"]},{position:"Marketing Assistant",company:"123 Company",location:"Chicago, Illinois",period:"Jan 2014 - Dec 2015",responsibilities:["Assisted in the development and implementation of marketing campaigns","Conducted market research and analyzed consumer behavior","Assisted social media accounts and created engaging content","Assisted organizing and coordinating promotional events"]}],education:[{degree:"Master of Fine Arts in Photography",institution:"University of ABC",location:"New York, New York",date:"Jun 2015"},{degree:"Bachelor of Arts in Graphic Design",institution:"XYZ College",location:"Los Angeles, California",date:"Jun 2013"}]};return t.jsx("div",{style:{fontFamily:"'Open Sans', sans-serif",backgroundColor:"white",minHeight:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"24px"},children:t.jsxs("main",{style:{backgroundColor:"white",borderRadius:"12px",maxWidth:"768px",width:"100%",padding:"40px",boxShadow:"0 10px 25px rgba(0, 0, 0, 0.1)",position:"relative",zIndex:10,marginTop:"48px",fontSize:"12px",lineHeight:"1.3",color:"#4b4b4b"},children:[t.jsxs("header",{style:{textAlign:"center",marginBottom:"24px"},children:[t.jsx("h1",{style:{fontWeight:"800",color:"#374151",fontSize:"18px",letterSpacing:"0.05em",margin:"0"},children:p.personalInfo.fullName}),t.jsxs("p",{style:{marginTop:"4px",color:"#9ca3af",letterSpacing:"0.05em",margin:"4px 0 0 0"},children:[p.personalInfo.phone," • ",p.personalInfo.email," • ",p.personalInfo.address]})]}),t.jsxs("section",{style:{marginBottom:"20px"},children:[t.jsx("h2",{style:{fontWeight:"bold",color:"#374151",fontSize:"12px",marginBottom:"4px",margin:"0 0 4px 0"},children:"PROFESSIONAL SUMMARY"}),t.jsx("p",{style:{color:"#4b5563",lineHeight:"1.3",margin:"0"},children:p.summary})]}),t.jsxs("section",{style:{marginBottom:"20px"},children:[t.jsx("h2",{style:{fontWeight:"bold",color:"#374151",fontSize:"12px",marginBottom:"4px",margin:"0 0 4px 0"},children:"SKILLS"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"0 24px",color:"#4b5563",fontSize:"12px",lineHeight:"1.3"},children:[t.jsx("ul",{style:{listStyle:"disc",listStylePosition:"inside",margin:"0",padding:"0",display:"flex",flexDirection:"column",gap:"2px"},children:p.skills.slice(0,Math.ceil(p.skills.length/2)).map((m,a)=>t.jsx("li",{children:m},a))}),t.jsx("ul",{style:{listStyle:"disc",listStylePosition:"inside",margin:"0",padding:"0",display:"flex",flexDirection:"column",gap:"2px"},children:p.skills.slice(Math.ceil(p.skills.length/2)).map((m,a)=>t.jsx("li",{children:m},a))})]})]}),t.jsxs("section",{style:{marginBottom:"20px"},children:[t.jsx("h2",{style:{fontWeight:"bold",color:"#374151",fontSize:"12px",marginBottom:"4px",margin:"0 0 4px 0"},children:"WORK HISTORY"}),p.experience.map((m,a)=>t.jsxs("article",{style:{marginBottom:a===p.experience.length-1?"0":"12px"},children:[t.jsxs("p",{style:{color:"#4b5563",fontSize:"12px",fontWeight:"600",margin:"0"},children:[m.period,t.jsx("br",{}),m.location]}),t.jsxs("p",{style:{fontWeight:"600",color:"#374151",fontSize:"12px",marginTop:"4px",margin:"4px 0 0 0"},children:[m.position," / ",m.company]}),t.jsx("ul",{style:{listStyle:"disc",listStylePosition:"inside",color:"#4b5563",fontSize:"12px",lineHeight:"1.3",marginTop:"4px",margin:"4px 0 0 0",padding:"0",display:"flex",flexDirection:"column",gap:"2px"},children:m.responsibilities.map((u,y)=>t.jsx("li",{children:u},y))})]},a))]}),t.jsxs("section",{children:[t.jsx("h2",{style:{fontWeight:"bold",color:"#374151",fontSize:"12px",marginBottom:"4px",margin:"0 0 4px 0"},children:"EDUCATION"}),t.jsx("div",{style:{color:"#4b5563",fontSize:"12px",lineHeight:"1.3",display:"flex",flexDirection:"column",gap:"12px"},children:p.education.map((m,a)=>t.jsxs("div",{children:[t.jsxs("p",{style:{fontWeight:"600",margin:"0"},children:[m.date,t.jsx("br",{}),m.location]}),t.jsx("p",{style:{fontWeight:"600",color:"#374151",marginTop:"2px",margin:"2px 0 0 0"},children:m.degree}),t.jsx("p",{style:{margin:"0"},children:m.institution})]},a))})]})]})})}function id({onNavigateBack:T,onSave:_,initialData:p}){const m={personalInfo:{fullName:"SANDRA WARD",phone:"(555)555-5555",email:"example@example.com",address:"ABC Street, City, State 12345"},summary:"Highly skilled and creative Photographer with 4 years of experience in capturing stunning photographs for various clients and projects. Proficient in using Adobe Photoshop and Lightroom for editing and retouching images. Strong ability to understand client vision and deliver exceptional results. Experienced in graphic design and digital marketing, with a Bachelor's degree in Graphic Design and a Master's degree in Photography.",skills:["Photographer","Adobe Photoshop","Lighting","Photo Editing","Graphic Design","Digital Marketing","Social Media Management","Event Coordination"],experience:[{position:"Photographer",company:"ABC Studios",location:"New York, New York",period:"Jan 2018 - Dec 2020",responsibilities:["Captured high-quality photographs for various clients and projects","Managed and organized photoshoots, including location scouting and model selection","Edited and retouched images using Adobe Photoshop and Lightroom","Collaborated with clients to understand their vision and deliver exceptional results"]},{position:"Graphic Designer",company:"XYZ Agency",location:"Los Angeles, California",period:"Jan 2016 - Dec 2017",responsibilities:["Designed and created visually appealing graphics for various marketing materials","Collaborated with clients to understand their design needs and requirements","Managed multiple projects simultaneously and met tight deadlines","Worked closely with the marketing team to develop effective visual communication strategies"]},{position:"Marketing Assistant",company:"123 Company",location:"Chicago, Illinois",period:"Jan 2014 - Dec 2015",responsibilities:["Assisted in the development and implementation of marketing campaigns","Conducted market research and analyzed consumer behavior","Assisted social media accounts and created engaging content","Assisted organizing and coordinating promotional events"]}],education:[{degree:"Master of Fine Arts in Photography",institution:"University of ABC",location:"New York, New York",date:"Jun 2015"},{degree:"Bachelor of Arts in Graphic Design",institution:"XYZ College",location:"Los Angeles, California",date:"Jun 2013"}]},[a,u]=X.useState(p||m),[y,M]=X.useState("personal"),I=(S,A)=>{u(j=>({...j,personalInfo:{...j.personalInfo,[S]:A}}))},v=S=>{u(A=>({...A,summary:S}))},P=(S,A)=>{u(j=>({...j,skills:j.skills.map((R,C)=>C===S?A:R)}))},q=()=>{u(S=>({...S,skills:[...S.skills,"New skill"]}))},L=S=>{u(A=>({...A,skills:A.skills.filter((j,R)=>R!==S)}))},Z=(S,A,j)=>{u(R=>({...R,experience:R.experience.map((C,B)=>B===S?{...C,[A]:j}:C)}))},ee=(S,A,j)=>{u(R=>({...R,experience:R.experience.map((C,B)=>B===S?{...C,responsibilities:C.responsibilities.map((h,l)=>l===A?j:h)}:C)}))},K=S=>{u(A=>({...A,experience:A.experience.map((j,R)=>R===S?{...j,responsibilities:[...j.responsibilities,"New responsibility"]}:j)}))},Y=(S,A)=>{u(j=>({...j,experience:j.experience.map((R,C)=>C===S?{...R,responsibilities:R.responsibilities.filter((B,h)=>h!==A)}:R)}))},J=()=>{u(S=>({...S,experience:[...S.experience,{position:"",company:"",location:"",period:"",responsibilities:["New responsibility"]}]}))},ue=S=>{u(A=>({...A,experience:A.experience.filter((j,R)=>R!==S)}))},ce=(S,A,j)=>{u(R=>({...R,education:R.education.map((C,B)=>B===S?{...C,[A]:j}:C)}))},me=()=>{u(S=>({...S,education:[...S.education,{degree:"",institution:"",location:"",date:""}]}))},ge=S=>{u(A=>({...A,education:A.education.filter((j,R)=>R!==S)}))},le=()=>{_&&_(a),alert("Template saved successfully! Changes will be reflected in the preview.")},ye=()=>{const S=window.open("","_blank"),A=`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${a.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Open Sans', sans-serif;
              background: white;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div style="
            font-family: 'Open Sans', sans-serif;
            background-color: white;
            min-height: 100vh;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 24px;
          ">
            <main style="
              background-color: white;
              border-radius: 12px;
              max-width: 768px;
              width: 100%;
              padding: 40px;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              position: relative;
              z-index: 10;
              margin-top: 48px;
              font-size: 12px;
              line-height: 1.3;
              color: #4b4b4b;
            ">
              <!-- Header -->
              <header style="
                text-align: center;
                margin-bottom: 24px;
              ">
                <h1 style="
                  font-weight: 800;
                  color: #374151;
                  font-size: 18px;
                  letter-spacing: 0.05em;
                  margin: 0;
                ">
                  ${a.personalInfo.fullName}
                </h1>
                <p style="
                  margin-top: 4px;
                  color: #9ca3af;
                  letter-spacing: 0.05em;
                  margin: 4px 0 0 0;
                ">
                  ${a.personalInfo.phone} • ${a.personalInfo.email} • ${a.personalInfo.address}
                </p>
              </header>

              <!-- Professional Summary -->
              <section style="margin-bottom: 20px;">
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  PROFESSIONAL SUMMARY
                </h2>
                <p style="
                  color: #4b5563;
                  line-height: 1.3;
                  margin: 0;
                ">
                  ${a.summary}
                </p>
              </section>

              <!-- Skills -->
              <section style="margin-bottom: 20px;">
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  SKILLS
                </h2>
                <div style="
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 0 24px;
                  color: #4b5563;
                  font-size: 12px;
                  line-height: 1.3;
                ">
                  <ul style="
                    list-style: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${a.skills.slice(0,Math.ceil(a.skills.length/2)).map(j=>`<li>${j}</li>`).join("")}
                  </ul>
                  <ul style="
                    list-style: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${a.skills.slice(Math.ceil(a.skills.length/2)).map(j=>`<li>${j}</li>`).join("")}
                  </ul>
                </div>
              </section>

              <!-- Work History -->
              <section style="margin-bottom: 20px;">
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  WORK HISTORY
                </h2>
                ${a.experience.map((j,R)=>`
                  <article style="
                    margin-bottom: ${R===a.experience.length-1?"0":"12px"};
                  ">
                    <p style="
                      color: #4b5563;
                      font-size: 12px;
                      font-weight: 600;
                      margin: 0;
                    ">
                      ${j.period}<br/>
                      ${j.location}
                    </p>
                    <p style="
                      font-weight: 600;
                      color: #374151;
                      font-size: 12px;
                      margin-top: 4px;
                      margin: 4px 0 0 0;
                    ">
                      ${j.position} / ${j.company}
                    </p>
                    <ul style="
                      list-style: disc;
                      list-style-position: inside;
                      color: #4b5563;
                      font-size: 12px;
                      line-height: 1.3;
                      margin-top: 4px;
                      margin: 4px 0 0 0;
                      padding: 0;
                      display: flex;
                      flex-direction: column;
                      gap: 2px;
                    ">
                      ${j.responsibilities.map(C=>`<li>${C}</li>`).join("")}
                    </ul>
                  </article>
                `).join("")}
              </section>

              <!-- Education -->
              <section>
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  EDUCATION
                </h2>
                <div style="
                  color: #4b5563;
                  font-size: 12px;
                  line-height: 1.3;
                  display: flex;
                  flex-direction: column;
                  gap: 12px;
                ">
                  ${a.education.map(j=>`
                    <div>
                      <p style="
                        font-weight: 600;
                        margin: 0;
                      ">
                        ${j.date}<br/>
                        ${j.location}
                      </p>
                      <p style="
                        font-weight: 600;
                        color: #374151;
                        margin-top: 2px;
                        margin: 2px 0 0 0;
                      ">
                        ${j.degree}
                      </p>
                      <p style="margin: 0;">
                        ${j.institution}
                      </p>
                    </div>
                  `).join("")}
                </div>
              </section>
            </main>
          </div>
        </body>
      </html>
    `;S.document.write(A),S.document.close(),setTimeout(()=>{S.focus(),S.print()},1e3)},je=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Personal Information"}),t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Full Name"}),t.jsx("input",{type:"text",value:a.personalInfo.fullName,onChange:S=>I("fullName",S.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Phone"}),t.jsx("input",{type:"text",value:a.personalInfo.phone,onChange:S=>I("phone",S.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",value:a.personalInfo.email,onChange:S=>I("email",S.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Address"}),t.jsx("input",{type:"text",value:a.personalInfo.address,onChange:S=>I("address",S.target.value),className:"form-input"})]})]})]}),he=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Professional Summary"}),t.jsx("div",{className:"form-grid",children:t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Summary"}),t.jsx("textarea",{value:a.summary,onChange:S=>v(S.target.value),className:"form-textarea",rows:"6"})]})})]}),we=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Skills"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.skills.map((S,A)=>t.jsxs("div",{className:"qualification-item",children:[t.jsx("input",{type:"text",value:S,onChange:j=>P(A,j.target.value),className:"form-input"}),t.jsx("button",{onClick:()=>L(A),className:"remove-btn",children:"✕"})]},A)),t.jsx("button",{onClick:q,className:"add-btn",children:"+ Add Skill"})]})]}),V=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Work Experience"}),a.experience.map((S,A)=>t.jsxs("div",{className:"experience-item",style:{marginBottom:"20px",padding:"15px",border:"1px solid #ddd",borderRadius:"8px"},children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Position"}),t.jsx("input",{type:"text",value:S.position,onChange:j=>Z(A,"position",j.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Company"}),t.jsx("input",{type:"text",value:S.company,onChange:j=>Z(A,"company",j.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Location"}),t.jsx("input",{type:"text",value:S.location,onChange:j=>Z(A,"location",j.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Period"}),t.jsx("input",{type:"text",value:S.period,onChange:j=>Z(A,"period",j.target.value),className:"form-input"})]})]}),t.jsxs("div",{style:{marginTop:"15px"},children:[t.jsx("h4",{children:"Responsibilities"}),S.responsibilities.map((j,R)=>t.jsxs("div",{className:"qualification-item",style:{marginBottom:"5px"},children:[t.jsx("textarea",{value:j,onChange:C=>ee(A,R,C.target.value),className:"form-textarea",rows:"2"}),t.jsx("button",{onClick:()=>Y(A,R),className:"remove-btn",children:"✕"})]},R)),t.jsx("button",{onClick:()=>K(A),className:"add-btn",style:{fontSize:"12px",padding:"5px 10px"},children:"+ Add Responsibility"})]}),t.jsx("button",{onClick:()=>ue(A),className:"remove-btn",style:{marginTop:"10px"},children:"Remove Experience"})]},A)),t.jsx("button",{onClick:J,className:"add-btn",children:"+ Add Experience"})]}),Q=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Education"}),a.education.map((S,A)=>t.jsxs("div",{className:"education-item",children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Degree"}),t.jsx("input",{type:"text",value:S.degree,onChange:j=>ce(A,"degree",j.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Institution"}),t.jsx("input",{type:"text",value:S.institution,onChange:j=>ce(A,"institution",j.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Location"}),t.jsx("input",{type:"text",value:S.location,onChange:j=>ce(A,"location",j.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Date"}),t.jsx("input",{type:"text",value:S.date,onChange:j=>ce(A,"date",j.target.value),className:"form-input"})]})]}),t.jsx("button",{onClick:()=>ge(A),className:"remove-btn",style:{marginTop:"10px"},children:"Remove Education"})]},A)),t.jsx("button",{onClick:me,className:"add-btn",children:"+ Add Education"})]}),N=()=>{switch(y){case"personal":return je();case"summary":return he();case"skills":return we();case"experience":return V();case"education":return Q();default:return je()}};return t.jsxs("div",{className:"template-editor",children:[t.jsxs("div",{className:"editor-header",children:[t.jsx("button",{className:"back-btn",onClick:T,"aria-label":"Go back",children:"← Back to Template"}),t.jsxs("div",{className:"editor-title",children:[t.jsx("h1",{children:"Edit Simple Template"}),t.jsx("p",{children:"Customize your resume content"})]}),t.jsxs("div",{className:"editor-actions",children:[t.jsx("button",{className:"save-btn",onClick:le,children:"💾 Save Changes"}),t.jsx("button",{className:"download-btn",onClick:ye,children:"📄 Download PDF"})]})]}),t.jsxs("div",{className:"editor-content",children:[t.jsx("div",{className:"editor-sidebar",children:t.jsxs("nav",{className:"editor-nav",children:[t.jsx("button",{className:`nav-item ${y==="personal"?"active":""}`,onClick:()=>M("personal"),children:"👤 Personal Info"}),t.jsx("button",{className:`nav-item ${y==="summary"?"active":""}`,onClick:()=>M("summary"),children:"📝 Summary"}),t.jsx("button",{className:`nav-item ${y==="skills"?"active":""}`,onClick:()=>M("skills"),children:"🎯 Skills"}),t.jsx("button",{className:`nav-item ${y==="experience"?"active":""}`,onClick:()=>M("experience"),children:"💼 Experience"}),t.jsx("button",{className:`nav-item ${y==="education"?"active":""}`,onClick:()=>M("education"),children:"🎓 Education"})]})}),t.jsx("div",{className:"editor-main",children:t.jsx("div",{className:"editor-form",children:N()})}),t.jsxs("div",{className:"editor-preview",children:[t.jsx("h3",{children:"Live Preview"}),t.jsx("div",{className:"preview-container",children:t.jsx("div",{style:{backgroundImage:'url("/simple.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"100%",minHeight:"400px",borderRadius:"8px",position:"relative"},children:t.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:"8px"},children:t.jsx("div",{style:{transform:"scale(0.4)",transformOrigin:"top left",width:"250%",height:"250%"},children:t.jsx(nd,{data:a})})})})})]})]})]})}function ku({onNavigateBack:T}){const[_,p]=X.useState("preview"),[m,a]=X.useState(null),u=()=>{p("editor")},y=()=>{p("preview")},M=v=>{a(v)},I=()=>{const v=window.open("","_blank"),P=m||{personalInfo:{fullName:"SANDRA WARD",phone:"(555)555-5555",email:"example@example.com",address:"ABC Street, City, State 12345"},summary:"Highly skilled and creative Photographer with 4 years of experience in capturing stunning photographs for various clients and projects. Proficient in using Adobe Photoshop and Lightroom for editing and retouching images. Strong ability to understand client vision and deliver exceptional results. Experienced in graphic design and digital marketing, with a Bachelor's degree in Graphic Design and a Master's degree in Photography.",skills:["Photographer","Adobe Photoshop","Lighting","Photo Editing","Graphic Design","Digital Marketing","Social Media Management","Event Coordination"],experience:[{position:"Photographer",company:"ABC Studios",location:"New York, New York",period:"Jan 2018 - Dec 2020",responsibilities:["Captured high-quality photographs for various clients and projects","Managed and organized photoshoots, including location scouting and model selection","Edited and retouched images using Adobe Photoshop and Lightroom","Collaborated with clients to understand their vision and deliver exceptional results"]},{position:"Graphic Designer",company:"XYZ Agency",location:"Los Angeles, California",period:"Jan 2016 - Dec 2017",responsibilities:["Designed and created visually appealing graphics for various marketing materials","Collaborated with clients to understand their design needs and requirements","Managed multiple projects simultaneously and met tight deadlines","Worked closely with the marketing team to develop effective visual communication strategies"]},{position:"Marketing Assistant",company:"123 Company",location:"Chicago, Illinois",period:"Jan 2014 - Dec 2015",responsibilities:["Assisted in the development and implementation of marketing campaigns","Conducted market research and analyzed consumer behavior","Assisted social media accounts and created engaging content","Assisted organizing and coordinating promotional events"]}],education:[{degree:"Master of Fine Arts in Photography",institution:"University of ABC",location:"New York, New York",date:"Jun 2015"},{degree:"Bachelor of Arts in Graphic Design",institution:"XYZ College",location:"Los Angeles, California",date:"Jun 2013"}]},q=`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${P.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Open Sans', sans-serif;
              background: white;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div style="
            font-family: 'Open Sans', sans-serif;
            background-color: white;
            min-height: 100vh;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 24px;
          ">
            <main style="
              background-color: white;
              border-radius: 12px;
              max-width: 768px;
              width: 100%;
              padding: 40px;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              position: relative;
              z-index: 10;
              margin-top: 48px;
              font-size: 12px;
              line-height: 1.3;
              color: #4b4b4b;
            ">
              <!-- Header -->
              <header style="
                text-align: center;
                margin-bottom: 24px;
              ">
                <h1 style="
                  font-weight: 800;
                  color: #374151;
                  font-size: 18px;
                  letter-spacing: 0.05em;
                  margin: 0;
                ">
                  ${P.personalInfo.fullName}
                </h1>
                <p style="
                  margin-top: 4px;
                  color: #9ca3af;
                  letter-spacing: 0.05em;
                  margin: 4px 0 0 0;
                ">
                  ${P.personalInfo.phone} • ${P.personalInfo.email} • ${P.personalInfo.address}
                </p>
              </header>

              <!-- Professional Summary -->
              <section style="margin-bottom: 20px;">
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  PROFESSIONAL SUMMARY
                </h2>
                <p style="
                  color: #4b5563;
                  line-height: 1.3;
                  margin: 0;
                ">
                  ${P.summary}
                </p>
              </section>

              <!-- Skills -->
              <section style="margin-bottom: 20px;">
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  SKILLS
                </h2>
                <div style="
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 0 24px;
                  color: #4b5563;
                  font-size: 12px;
                  line-height: 1.3;
                ">
                  <ul style="
                    list-style: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${P.skills.slice(0,Math.ceil(P.skills.length/2)).map(L=>`<li>${L}</li>`).join("")}
                  </ul>
                  <ul style="
                    list-style: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${P.skills.slice(Math.ceil(P.skills.length/2)).map(L=>`<li>${L}</li>`).join("")}
                  </ul>
                </div>
              </section>

              <!-- Work History -->
              <section style="margin-bottom: 20px;">
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  WORK HISTORY
                </h2>
                ${P.experience.map((L,Z)=>`
                  <article style="
                    margin-bottom: ${Z===P.experience.length-1?"0":"12px"};
                  ">
                    <p style="
                      color: #4b5563;
                      font-size: 12px;
                      font-weight: 600;
                      margin: 0;
                    ">
                      ${L.period}<br/>
                      ${L.location}
                    </p>
                    <p style="
                      font-weight: 600;
                      color: #374151;
                      font-size: 12px;
                      margin-top: 4px;
                      margin: 4px 0 0 0;
                    ">
                      ${L.position} / ${L.company}
                    </p>
                    <ul style="
                      list-style: disc;
                      list-style-position: inside;
                      color: #4b5563;
                      font-size: 12px;
                      line-height: 1.3;
                      margin-top: 4px;
                      margin: 4px 0 0 0;
                      padding: 0;
                      display: flex;
                      flex-direction: column;
                      gap: 2px;
                    ">
                      ${L.responsibilities.map(ee=>`<li>${ee}</li>`).join("")}
                    </ul>
                  </article>
                `).join("")}
              </section>

              <!-- Education -->
              <section>
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  EDUCATION
                </h2>
                <div style="
                  color: #4b5563;
                  font-size: 12px;
                  line-height: 1.3;
                  display: flex;
                  flex-direction: column;
                  gap: 12px;
                ">
                  ${P.education.map(L=>`
                    <div>
                      <p style="
                        font-weight: 600;
                        margin: 0;
                      ">
                        ${L.date}<br/>
                        ${L.location}
                      </p>
                      <p style="
                        font-weight: 600;
                        color: #374151;
                        margin-top: 2px;
                        margin: 2px 0 0 0;
                      ">
                        ${L.degree}
                      </p>
                      <p style="margin: 0;">
                        ${L.institution}
                      </p>
                    </div>
                  `).join("")}
                </div>
              </section>
            </main>
          </div>
        </body>
      </html>
    `;v.document.write(q),v.document.close(),setTimeout(()=>{v.focus(),v.print()},1e3)};return _==="editor"?t.jsx(id,{onNavigateBack:y,onSave:M,initialData:m}):t.jsxs("div",{className:"template-container",children:[t.jsxs("div",{className:"template-header",children:[t.jsx("button",{className:"back-btn",onClick:T,"aria-label":"Go back",children:"← Back to Templates"}),t.jsxs("div",{className:"template-title",children:[t.jsx("h1",{children:"Simple Resume Template"}),t.jsx("p",{children:"Straightforward and effective for all positions"})]}),t.jsxs("div",{className:"template-actions",children:[t.jsx("button",{className:"edit-btn",onClick:u,children:"✏️ Edit Template"}),t.jsx("button",{className:"download-btn",onClick:I,children:"📄 Download PDF"})]})]}),t.jsx("div",{className:"template-preview-container",children:t.jsx("div",{className:"template-preview-wrapper",children:t.jsx(nd,{data:m})})})]})}const rd=({data:T})=>{const p=T||{personalInfo:{fullName:"Thomas Beasley",jobTitle:"Entry-level Resume",phone:"(206) 555-1234",email:"your-name@email.com",address:"3665 McLaughlin Street, Seattle, WA 98039",photo:null},summary:"Passionate Technology Assistant skilled at troubleshooting and repairing digital devices. Excellent people skills from managing the tech support desk at Seattle Community Center. Looking to secure an entry-level position in retail where I can utilize my strong customer service skills and technical knowledge to enhance the customer experience and contribute positively to the team at [Company Name].",education:[{degree:"Bachelor's Degree in Business Administration I",institution:"Spokane University",location:"Spokane, WA",date:"May 20XX",gpa:"3.7/4.0",coursework:"Implementation of Contemporary Business Practices",dissertation:"Federal & State Business Law & Regulations, Introduction to HR Theory & Practices, Company Diversity and Inclusion, Introduction to Employer Contract Law"}],experience:[{position:"Volunteer Technology Assistant I",company:"Seattle Community Center",location:"Seattle, WA",period:"Feb 20XX – Present",responsibilities:["Set up and repair technology devices for community members","Manage service queues, ensuring community members receive timely updates on service status","Engage with diverse clients to understand technology issues","Document detailed notes and estimate completion times"]}],skills:["Customer service","Team collaboration","Troubleshooting","Multitasking","Organizing and scheduling","Time management","Verbal communication"],hobbies:[{title:"Coding",description:"Recently completed a Python bootcamp"},{title:"Digital art",description:"Create unique illustrations using Adobe Fresco"},{title:"Soccer",description:"Play for a local team"}]};return t.jsx("div",{style:{fontFamily:"'Montserrat', sans-serif",backgroundColor:"#f3f4f6",padding:"16px",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsxs("main",{style:{maxWidth:"1024px",width:"100%",backgroundColor:"white",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)",borderRadius:"8px",overflow:"hidden",display:"flex",flexDirection:"row"},children:[t.jsxs("aside",{style:{width:"33.333333%",backgroundColor:"#dbe7f0",color:"#1f2937",padding:"32px"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:"32px"},children:p.personalInfo.photo?t.jsx("img",{src:p.personalInfo.photo,alt:"Profile",style:{width:"144px",height:"144px",borderRadius:"50%",border:"4px solid #6ea6b9",objectFit:"cover"}}):t.jsx("div",{style:{width:"144px",height:"144px",borderRadius:"50%",border:"4px solid #6ea6b9",backgroundColor:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",fontWeight:"bold",color:"#1f2937"},children:p.personalInfo.fullName.split(" ").map(m=>m[0]).join("")})}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",borderBottom:"2px solid #6ea6b9",paddingBottom:"8px",marginBottom:"16px",color:"#1f2937"},children:"Contact"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{children:[t.jsx("p",{style:{margin:"0",fontSize:"14px",fontWeight:"600"},children:"Email"}),t.jsx("p",{style:{margin:"0",fontSize:"12px",color:"#4b5563"},children:p.personalInfo.email})]}),t.jsxs("div",{children:[t.jsx("p",{style:{margin:"0",fontSize:"14px",fontWeight:"600"},children:"Phone"}),t.jsx("p",{style:{margin:"0",fontSize:"12px",color:"#4b5563"},children:p.personalInfo.phone})]}),t.jsxs("div",{children:[t.jsx("p",{style:{margin:"0",fontSize:"14px",fontWeight:"600"},children:"Address"}),t.jsx("p",{style:{margin:"0",fontSize:"12px",color:"#4b5563"},children:p.personalInfo.address})]})]})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",borderBottom:"2px solid #6ea6b9",paddingBottom:"8px",marginBottom:"16px",color:"#1f2937"},children:"Education"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:p.education.map((m,a)=>t.jsxs("div",{children:[t.jsx("p",{style:{fontWeight:"600",margin:"0",fontSize:"14px"},children:m.degree}),t.jsx("p",{style:{fontStyle:"italic",fontSize:"12px",margin:"0",color:"#4b5563"},children:m.institution}),t.jsx("p",{style:{fontSize:"10px",color:"#6b7280",margin:"0"},children:m.date}),t.jsxs("p",{style:{fontSize:"10px",color:"#6b7280",margin:"4px 0 0 0"},children:["GPA: ",m.gpa]})]},a))})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",borderBottom:"2px solid #6ea6b9",paddingBottom:"8px",marginBottom:"16px",color:"#1f2937"},children:"Skills"}),t.jsx("ul",{style:{listStyle:"disc",paddingLeft:"16px",margin:"0",display:"flex",flexDirection:"column",gap:"8px"},children:p.skills.map((m,a)=>t.jsx("li",{style:{fontSize:"14px"},children:m},a))})]}),t.jsxs("section",{children:[t.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",borderBottom:"2px solid #6ea6b9",paddingBottom:"8px",marginBottom:"16px",color:"#1f2937"},children:"Hobbies"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:p.hobbies.map((m,a)=>t.jsxs("div",{children:[t.jsx("p",{style:{margin:"0",fontSize:"14px",fontWeight:"600"},children:m.title}),t.jsx("p",{style:{margin:"0",fontSize:"12px",color:"#4b5563"},children:m.description})]},a))})]})]}),t.jsxs("div",{style:{width:"66.666667%",padding:"32px",color:"#374151"},children:[t.jsxs("header",{style:{marginBottom:"40px",textAlign:"left"},children:[t.jsx("h1",{style:{fontSize:"48px",fontWeight:"bold",color:"#1f2937",margin:"0"},children:p.personalInfo.fullName}),t.jsx("p",{style:{fontSize:"20px",color:"#6b7280",margin:"8px 0 0 0",textTransform:"uppercase",letterSpacing:"0.1em"},children:p.personalInfo.jobTitle})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{fontSize:"28px",fontWeight:"bold",color:"#1f2937",margin:"0 0 16px 0",borderBottom:"2px solid #6ea6b9",paddingBottom:"8px"},children:"Summary"}),t.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",color:"#374151",margin:"0"},children:p.summary})]}),t.jsxs("section",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{fontSize:"28px",fontWeight:"bold",color:"#1f2937",margin:"0 0 24px 0",borderBottom:"2px solid #6ea6b9",paddingBottom:"8px"},children:"Experience"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:p.experience.map((m,a)=>t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{fontSize:"18px",fontWeight:"600",color:"#1f2937",margin:"0"},children:m.position}),t.jsx("p",{style:{fontSize:"16px",color:"#6ea6b9",margin:"4px 0 0 0",fontWeight:"500"},children:m.company})]}),t.jsxs("div",{style:{textAlign:"right"},children:[t.jsx("p",{style:{fontSize:"14px",color:"#6b7280",margin:"0"},children:m.period}),t.jsx("p",{style:{fontSize:"12px",color:"#9ca3af",margin:"0"},children:m.location})]})]}),t.jsx("ul",{style:{listStyle:"disc",paddingLeft:"20px",margin:"8px 0 0 0",display:"flex",flexDirection:"column",gap:"4px"},children:m.responsibilities.map((u,y)=>t.jsx("li",{style:{fontSize:"14px",lineHeight:"1.5",color:"#374151"},children:u},y))})]},a))})]}),t.jsxs("section",{children:[t.jsx("h3",{style:{fontSize:"28px",fontWeight:"bold",color:"#1f2937",margin:"0 0 16px 0",borderBottom:"2px solid #6ea6b9",paddingBottom:"8px"},children:"Relevant Coursework"}),p.education.map((m,a)=>t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsx("p",{style:{fontSize:"16px",fontWeight:"600",color:"#1f2937",margin:"0 0 8px 0"},children:m.coursework}),t.jsx("p",{style:{fontSize:"14px",color:"#374151",margin:"0",lineHeight:"1.5"},children:m.dissertation})]},a))]})]})]})})};function sd({onNavigateBack:T,onSave:_,initialData:p}){const m={personalInfo:{fullName:"Thomas Beasley",jobTitle:"Entry-level Resume",phone:"(206) 555-1234",email:"your-name@email.com",address:"3665 McLaughlin Street, Seattle, WA 98039",photo:null},summary:"Passionate Technology Assistant skilled at troubleshooting and repairing digital devices. Excellent people skills from managing the tech support desk at Seattle Community Center. Looking to secure an entry-level position in retail where I can utilize my strong customer service skills and technical knowledge to enhance the customer experience and contribute positively to the team at [Company Name].",education:[{degree:"Bachelor's Degree in Business Administration I",institution:"Spokane University",location:"Spokane, WA",date:"May 20XX",gpa:"3.7/4.0",coursework:"Implementation of Contemporary Business Practices",dissertation:"Federal & State Business Law & Regulations, Introduction to HR Theory & Practices, Company Diversity and Inclusion, Introduction to Employer Contract Law"}],experience:[{position:"Volunteer Technology Assistant I",company:"Seattle Community Center",location:"Seattle, WA",period:"Feb 20XX – Present",responsibilities:["Set up and repair technology devices for community members","Manage service queues, ensuring community members receive timely updates on service status","Engage with diverse clients to understand technology issues","Document detailed notes and estimate completion times"]}],skills:["Customer service","Team collaboration","Troubleshooting","Multitasking","Organizing and scheduling","Time management","Verbal communication"],hobbies:[{title:"Coding",description:"Recently completed a Python bootcamp"},{title:"Digital art",description:"Create unique illustrations using Adobe Fresco"},{title:"Soccer",description:"Play for a local team"}]},[a,u]=X.useState(p||m),[y,M]=X.useState("personal"),I=(h,l)=>{u(c=>({...c,personalInfo:{...c.personalInfo,[h]:l}}))},v=h=>{const l=h.target.files[0];if(l){const c=new FileReader;c.onload=f=>{I("photo",f.target.result)},c.readAsDataURL(l)}},P=()=>{I("photo",null)},q=h=>{u(l=>({...l,summary:h}))},L=(h,l,c)=>{u(f=>({...f,education:f.education.map((w,$)=>$===h?{...w,[l]:c}:w)}))},Z=()=>{u(h=>({...h,education:[...h.education,{degree:"",institution:"",location:"",date:"",gpa:"",coursework:"",dissertation:""}]}))},ee=h=>{u(l=>({...l,education:l.education.filter((c,f)=>f!==h)}))},K=(h,l,c)=>{u(f=>({...f,experience:f.experience.map((w,$)=>$===h?{...w,[l]:c}:w)}))},Y=(h,l,c)=>{u(f=>({...f,experience:f.experience.map((w,$)=>$===h?{...w,responsibilities:w.responsibilities.map((te,ae)=>ae===l?c:te)}:w)}))},J=h=>{u(l=>({...l,experience:l.experience.map((c,f)=>f===h?{...c,responsibilities:[...c.responsibilities,"New responsibility"]}:c)}))},ue=(h,l)=>{u(c=>({...c,experience:c.experience.map((f,w)=>w===h?{...f,responsibilities:f.responsibilities.filter(($,te)=>te!==l)}:f)}))},ce=()=>{u(h=>({...h,experience:[...h.experience,{position:"",company:"",location:"",period:"",responsibilities:["New responsibility"]}]}))},me=h=>{u(l=>({...l,experience:l.experience.filter((c,f)=>f!==h)}))},ge=(h,l)=>{u(c=>({...c,skills:c.skills.map((f,w)=>w===h?l:f)}))},le=()=>{u(h=>({...h,skills:[...h.skills,"New skill"]}))},ye=h=>{u(l=>({...l,skills:l.skills.filter((c,f)=>f!==h)}))},je=(h,l,c)=>{u(f=>({...f,hobbies:f.hobbies.map((w,$)=>$===h?{...w,[l]:c}:w)}))},he=()=>{u(h=>({...h,hobbies:[...h.hobbies,{title:"",description:""}]}))},we=h=>{u(l=>({...l,hobbies:l.hobbies.filter((c,f)=>f!==h)}))},V=()=>{_&&_(a),alert("Template saved successfully! Changes will be reflected in the preview.")},Q=()=>{const h=window.open("","_blank"),l=`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${a.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Montserrat', sans-serif;
              background: #f5f5f5;
              color: #1f2937;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div style="
            font-family: 'Montserrat', sans-serif;
            background-color: #f5f5f5;
            color: #1f2937;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 32px 16px;
          ">
            <div style="
              max-width: 896px;
              width: 100%;
              margin: 32px auto;
              background-color: white;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
              overflow: hidden;
            ">
              <!-- Header -->
              <header style="
                background-color: #dbe7f0;
                text-align: center;
                padding: 32px 16px;
              ">
                <h1 style="
                  font-size: 24px;
                  font-weight: 600;
                  line-height: 1.2;
                  margin: 0;
                ">
                  ${a.personalInfo.fullName}
                </h1>
                <p style="
                  text-transform: uppercase;
                  font-size: 12px;
                  letter-spacing: 0.1em;
                  color: #4b5563;
                  margin: 4px 0 0 0;
                ">
                  ${a.personalInfo.jobTitle}
                </p>
                <div style="
                  color: #4b5563;
                  margin-top: 12px;
                  font-size: 14px;
                  max-width: 512px;
                  margin: 12px auto 0 auto;
                  display: flex;
                  flex-direction: column;
                  gap: 8px;
                  align-items: center;
                ">
                  <div style="
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                  ">
                    <span>${a.personalInfo.phone}</span>
                    <span>•</span>
                    <span>${a.personalInfo.address}</span>
                    <span>•</span>
                    <a href="mailto:${a.personalInfo.email}" style="
                      color: #4b5563;
                      text-decoration: none;
                    ">
                      ${a.personalInfo.email}
                    </a>
                  </div>
                </div>
              </header>

              <!-- Main Content -->
              <main style="padding: 24px;">
                <!-- Summary -->
                <section style="
                  background-color: #6ea6b9;
                  color: white;
                  border-radius: 6px;
                  padding: 16px;
                  margin-bottom: 24px;
                ">
                  <h2 style="
                    text-align: center;
                    font-weight: 600;
                    margin-bottom: 8px;
                    font-size: 16px;
                    margin: 0 0 8px 0;
                  ">
                    Summary
                  </h2>
                  <p style="
                    font-size: 14px;
                    line-height: 1.5;
                    margin: 0;
                  ">
                    ${a.summary}
                  </p>
                </section>

                <!-- Education -->
                <section style="margin-bottom: 24px;">
                  <h3 style="
                    background-color: #dbe7f0;
                    text-align: center;
                    font-weight: 600;
                    padding: 4px 0;
                    margin-bottom: 12px;
                    font-size: 16px;
                    margin: 0 0 12px 0;
                  ">
                    Education
                  </h3>
                  ${a.education.map(c=>`
                    <div>
                      <p style="
                        font-size: 16px;
                        margin: 0 0 8px 0;
                      ">
                        <strong>${c.degree}</strong> ${c.institution}
                      </p>
                      <p style="
                        font-size: 14px;
                        color: #374151;
                        margin: 0 0 8px 0;
                      ">
                        ${c.date} I ${c.location}
                      </p>
                      <p style="
                        font-size: 14px;
                        margin: 0 0 4px 0;
                      ">
                        <strong>GPA:</strong> ${c.gpa}
                      </p>
                      <p style="
                        font-size: 14px;
                        margin: 0 0 4px 0;
                      ">
                        <strong>Relevant Coursework:</strong> ${c.coursework}
                      </p>
                      <p style="
                        font-size: 14px;
                        margin: 0;
                      ">
                        <strong>Dissertation Title:</strong> ${c.dissertation}
                      </p>
                    </div>
                  `).join("")}
                </section>

                <!-- Experience -->
                <section style="margin-bottom: 24px;">
                  <h3 style="
                    background-color: #dbe7f0;
                    text-align: center;
                    font-weight: 600;
                    padding: 4px 0;
                    margin-bottom: 12px;
                    font-size: 16px;
                    margin: 0 0 12px 0;
                  ">
                    Relevant Experience
                  </h3>
                  ${a.experience.map(c=>`
                    <div>
                      <p style="
                        font-size: 16px;
                        margin: 0 0 8px 0;
                      ">
                        <strong>${c.position}</strong> ${c.company}
                      </p>
                      <p style="
                        font-size: 14px;
                        color: #374151;
                        margin: 0 0 8px 0;
                      ">
                        ${c.period} I ${c.location}
                      </p>
                      <ul style="
                        list-style: disc;
                        list-style-position: inside;
                        font-size: 14px;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                        color: #1f2937;
                      ">
                        ${c.responsibilities.map(f=>`<li>${f}</li>`).join("")}
                      </ul>
                    </div>
                  `).join("")}
                </section>

                <!-- Skills -->
                <section style="margin-bottom: 24px;">
                  <h3 style="
                    background-color: #dbe7f0;
                    text-align: center;
                    font-weight: 600;
                    padding: 4px 0;
                    margin-bottom: 12px;
                    font-size: 16px;
                    margin: 0 0 12px 0;
                  ">
                    Key Skills
                  </h3>
                  <div style="
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 0 48px;
                    font-size: 14px;
                    color: #1f2937;
                  ">
                    <ul style="
                      list-style: disc;
                      list-style-position: inside;
                      margin: 0;
                      padding: 0;
                      display: flex;
                      flex-direction: column;
                      gap: 4px;
                    ">
                      ${a.skills.slice(0,Math.ceil(a.skills.length/2)).map(c=>`<li>${c}</li>`).join("")}
                    </ul>
                    <ul style="
                      list-style: disc;
                      list-style-position: inside;
                      margin: 0;
                      padding: 0;
                      display: flex;
                      flex-direction: column;
                      gap: 4px;
                    ">
                      ${a.skills.slice(Math.ceil(a.skills.length/2)).map(c=>`<li>${c}</li>`).join("")}
                    </ul>
                  </div>
                </section>

                <!-- Hobbies & Interests -->
                <section>
                  <h3 style="
                    background-color: #dbe7f0;
                    text-align: center;
                    font-weight: 600;
                    padding: 4px 0;
                    margin-bottom: 12px;
                    font-size: 16px;
                    margin: 0 0 12px 0;
                  ">
                    Hobbies & Interests
                  </h3>
                  <ul style="
                    list-style: disc;
                    list-style-position: inside;
                    font-size: 14px;
                    color: #1f2937;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                  ">
                    ${a.hobbies.map(c=>`
                      <li>
                        <strong>${c.title}:</strong> ${c.description}
                      </li>
                    `).join("")}
                  </ul>
                </section>
              </main>
            </div>
          </div>
        </body>
      </html>
    `;h.document.write(l),h.document.close(),setTimeout(()=>{h.focus(),h.print()},1e3)},N=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Personal Information"}),t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Full Name"}),t.jsx("input",{type:"text",value:a.personalInfo.fullName,onChange:h=>I("fullName",h.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Job Title"}),t.jsx("input",{type:"text",value:a.personalInfo.jobTitle,onChange:h=>I("jobTitle",h.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Phone"}),t.jsx("input",{type:"text",value:a.personalInfo.phone,onChange:h=>I("phone",h.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Email"}),t.jsx("input",{type:"email",value:a.personalInfo.email,onChange:h=>I("email",h.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Address"}),t.jsx("input",{type:"text",value:a.personalInfo.address,onChange:h=>I("address",h.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Profile Photo"}),t.jsx("div",{className:"photo-upload-container",children:a.personalInfo.photo?t.jsxs("div",{className:"photo-preview",children:[t.jsx("img",{src:a.personalInfo.photo,alt:"Profile",className:"photo-preview-img"}),t.jsx("button",{type:"button",onClick:P,className:"photo-remove-btn",title:"Remove photo",children:"✕"})]}):t.jsxs("div",{className:"photo-upload",children:[t.jsx("input",{type:"file",accept:"image/*",onChange:v,className:"photo-input",id:"photo-upload"}),t.jsx("label",{htmlFor:"photo-upload",className:"photo-upload-label",children:t.jsxs("div",{className:"photo-upload-placeholder",children:[t.jsx("span",{className:"photo-upload-icon",children:"📷"}),t.jsx("span",{children:"Click to upload photo"})]})})]})})]})]})]}),S=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Summary"}),t.jsx("div",{className:"form-grid",children:t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Professional Summary"}),t.jsx("textarea",{value:a.summary,onChange:h=>q(h.target.value),className:"form-textarea",rows:"6"})]})})]}),A=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Education"}),a.education.map((h,l)=>t.jsxs("div",{className:"education-item",style:{marginBottom:"20px",padding:"15px",border:"1px solid #ddd",borderRadius:"8px"},children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Degree"}),t.jsx("input",{type:"text",value:h.degree,onChange:c=>L(l,"degree",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Institution"}),t.jsx("input",{type:"text",value:h.institution,onChange:c=>L(l,"institution",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Location"}),t.jsx("input",{type:"text",value:h.location,onChange:c=>L(l,"location",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Date"}),t.jsx("input",{type:"text",value:h.date,onChange:c=>L(l,"date",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"GPA"}),t.jsx("input",{type:"text",value:h.gpa,onChange:c=>L(l,"gpa",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Relevant Coursework"}),t.jsx("input",{type:"text",value:h.coursework,onChange:c=>L(l,"coursework",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group full-width",children:[t.jsx("label",{children:"Dissertation Title"}),t.jsx("textarea",{value:h.dissertation,onChange:c=>L(l,"dissertation",c.target.value),className:"form-textarea",rows:"3"})]})]}),t.jsx("button",{onClick:()=>ee(l),className:"remove-btn",style:{marginTop:"10px"},children:"Remove Education"})]},l)),t.jsx("button",{onClick:Z,className:"add-btn",children:"+ Add Education"})]}),j=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Experience"}),a.experience.map((h,l)=>t.jsxs("div",{className:"experience-item",style:{marginBottom:"20px",padding:"15px",border:"1px solid #ddd",borderRadius:"8px"},children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Position"}),t.jsx("input",{type:"text",value:h.position,onChange:c=>K(l,"position",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Company"}),t.jsx("input",{type:"text",value:h.company,onChange:c=>K(l,"company",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Location"}),t.jsx("input",{type:"text",value:h.location,onChange:c=>K(l,"location",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Period"}),t.jsx("input",{type:"text",value:h.period,onChange:c=>K(l,"period",c.target.value),className:"form-input"})]})]}),t.jsxs("div",{style:{marginTop:"15px"},children:[t.jsx("h4",{children:"Responsibilities"}),h.responsibilities.map((c,f)=>t.jsxs("div",{className:"qualification-item",style:{marginBottom:"5px"},children:[t.jsx("textarea",{value:c,onChange:w=>Y(l,f,w.target.value),className:"form-textarea",rows:"2"}),t.jsx("button",{onClick:()=>ue(l,f),className:"remove-btn",children:"✕"})]},f)),t.jsx("button",{onClick:()=>J(l),className:"add-btn",style:{fontSize:"12px",padding:"5px 10px"},children:"+ Add Responsibility"})]}),t.jsx("button",{onClick:()=>me(l),className:"remove-btn",style:{marginTop:"10px"},children:"Remove Experience"})]},l)),t.jsx("button",{onClick:ce,className:"add-btn",children:"+ Add Experience"})]}),R=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Skills"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.skills.map((h,l)=>t.jsxs("div",{className:"qualification-item",children:[t.jsx("input",{type:"text",value:h,onChange:c=>ge(l,c.target.value),className:"form-input"}),t.jsx("button",{onClick:()=>ye(l),className:"remove-btn",children:"✕"})]},l)),t.jsx("button",{onClick:le,className:"add-btn",children:"+ Add Skill"})]})]}),C=()=>t.jsxs("div",{className:"editor-section",children:[t.jsx("h3",{children:"Hobbies & Interests"}),a.hobbies.map((h,l)=>t.jsxs("div",{className:"qualification-item",style:{marginBottom:"15px",padding:"10px",border:"1px solid #ddd",borderRadius:"6px"},children:[t.jsxs("div",{className:"form-grid",children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Title"}),t.jsx("input",{type:"text",value:h.title,onChange:c=>je(l,"title",c.target.value),className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{children:"Description"}),t.jsx("input",{type:"text",value:h.description,onChange:c=>je(l,"description",c.target.value),className:"form-input"})]})]}),t.jsx("button",{onClick:()=>we(l),className:"remove-btn",style:{marginTop:"10px"},children:"Remove Hobby"})]},l)),t.jsx("button",{onClick:he,className:"add-btn",children:"+ Add Hobby"})]}),B=()=>{switch(y){case"personal":return N();case"summary":return S();case"education":return A();case"experience":return j();case"skills":return R();case"hobbies":return C();default:return N()}};return t.jsxs("div",{className:"template-editor",children:[t.jsxs("div",{className:"editor-header",children:[t.jsx("button",{className:"back-btn",onClick:T,"aria-label":"Go back",children:"← Back to Template"}),t.jsxs("div",{className:"editor-title",children:[t.jsx("h1",{children:"Edit Entry-Level Template"}),t.jsx("p",{children:"Customize your resume content"})]}),t.jsxs("div",{className:"editor-actions",children:[t.jsx("button",{className:"save-btn",onClick:V,children:"💾 Save Changes"}),t.jsx("button",{className:"download-btn",onClick:Q,children:"📄 Download PDF"})]})]}),t.jsxs("div",{className:"editor-content",children:[t.jsx("div",{className:"editor-sidebar",children:t.jsxs("nav",{className:"editor-nav",children:[t.jsx("button",{className:`nav-item ${y==="personal"?"active":""}`,onClick:()=>M("personal"),children:"👤 Personal Info"}),t.jsx("button",{className:`nav-item ${y==="summary"?"active":""}`,onClick:()=>M("summary"),children:"📝 Summary"}),t.jsx("button",{className:`nav-item ${y==="education"?"active":""}`,onClick:()=>M("education"),children:"🎓 Education"}),t.jsx("button",{className:`nav-item ${y==="experience"?"active":""}`,onClick:()=>M("experience"),children:"💼 Experience"}),t.jsx("button",{className:`nav-item ${y==="skills"?"active":""}`,onClick:()=>M("skills"),children:"🎯 Skills"}),t.jsx("button",{className:`nav-item ${y==="hobbies"?"active":""}`,onClick:()=>M("hobbies"),children:"🎮 Hobbies"})]})}),t.jsx("div",{className:"editor-main",children:t.jsx("div",{className:"editor-form",children:B()})}),t.jsxs("div",{className:"editor-preview",children:[t.jsx("h3",{children:"Live Preview"}),t.jsx("div",{className:"preview-container",children:t.jsx("div",{style:{backgroundImage:'url("/entry-level.jpg")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"100%",minHeight:"400px",borderRadius:"8px",position:"relative"},children:t.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:"8px"},children:t.jsx("div",{style:{transform:"scale(0.35)",transformOrigin:"top left",width:"285%",height:"285%"},children:t.jsx(rd,{data:a})})})})})]})]})]})}function wu({onNavigateBack:T,onEdit:_}){const[p,m]=X.useState(!1),[a,u]=X.useState(null),y=()=>{_?_():m(!0)},M=P=>{u(P),m(!1)},I=()=>{m(!1)},v=()=>{const P=window.open("","_blank");P.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Entry-Level Resume</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Montserrat', sans-serif; background: white; }
            @media print { body { -webkit-print-color-adjust: exact; } }
          </style>
        </head>
        <body>
          <div id="resume-content"></div>
        </body>
      </html>
    `),P.document.close(),setTimeout(()=>{P.print(),P.close()},1e3)};return p?t.jsx(sd,{onNavigateBack:I,onSave:M,initialData:a}):t.jsxs("div",{className:"creative-resume-template",children:[t.jsxs("div",{className:"template-header",children:[t.jsx("button",{className:"back-btn",onClick:T||(()=>window.history.back()),"aria-label":"Go back",title:"Go back to templates",children:"← Back to Templates"}),t.jsxs("div",{className:"template-title",children:[t.jsx("h1",{children:"Entry-Level Resume Template"}),t.jsx("p",{children:"Perfect for graduates and first-time job seekers"})]}),t.jsxs("div",{className:"template-actions",children:[t.jsx("button",{className:"edit-btn",onClick:y,children:"✏️ Edit Template"}),t.jsx("button",{className:"download-btn",onClick:v,children:"📄 Download PDF"})]})]}),t.jsx("div",{className:"template-preview-container",children:t.jsx("div",{className:"template-preview-wrapper",children:t.jsx(rd,{data:a})})})]})}function Nu({onNavigateBack:T,featureName:_="This Feature"}){const p=[{name:"Job Controller",description:"Search jobs, manage and track your saved job applications",icon:"💼",status:"Available",action:"Go to Job Controller"},{name:"Resume Builder",description:"Create professional resumes with multiple templates (Professional, Creative, Technical, etc.)",icon:"📄",status:"Available",action:"Go to Resume Builder"}],m=[{name:"Interview Preparation",description:"AI-powered mock interviews and practice questions",icon:"🎤",status:"Coming Soon"},{name:"Skill Assessment",description:"Evaluate and track your technical skills",icon:"🎯",status:"Coming Soon"},{name:"Salary Calculator",description:"Research market rates and salary insights",icon:"💰",status:"Coming Soon"},{name:"Profile Management",description:"Advanced profile customization and settings",icon:"⚙️",status:"Coming Soon"}],a=u=>{let y="";switch(u){case"Job Controller":y="jobcontroller";break;case"Resume Builder":y="resume-templates";break;case"Profile Management":y="profile";break;default:y="dashboard"}const M=new CustomEvent("navigate",{detail:{page:y}});window.dispatchEvent(M)};return t.jsx("div",{className:"error-page",children:t.jsxs("div",{className:"error-container",children:[t.jsxs("div",{className:"error-header",children:[t.jsx("div",{className:"error-icon",children:"🚧"}),t.jsx("h1",{children:"Feature Under Development"}),t.jsxs("p",{className:"error-subtitle",children:[_," is not yet available in our MVP prototype"]})]}),t.jsx("div",{className:"mvp-banner",children:t.jsxs("div",{className:"mvp-content",children:[t.jsx("h2",{children:"🚀 NYXO Platform - MVP Phase"}),t.jsxs("p",{children:["We're currently in the ",t.jsx("strong",{children:"Minimum Viable Product (MVP)"})," phase, focusing on core functionality to deliver the best user experience. More features are coming soon!"]})]})}),t.jsxs("div",{className:"features-section",children:[t.jsx("h3",{children:"✅ Available Features"}),t.jsx("div",{className:"features-grid",children:p.map((u,y)=>t.jsxs("div",{className:"feature-card available",onClick:()=>a(u.name),children:[t.jsx("div",{className:"feature-icon",children:u.icon}),t.jsxs("div",{className:"feature-content",children:[t.jsx("h4",{children:u.name}),t.jsx("p",{children:u.description}),t.jsx("span",{className:"feature-status available",children:u.status}),t.jsx("button",{className:"feature-action",children:u.action})]})]},y))})]}),t.jsxs("div",{className:"features-section",children:[t.jsx("h3",{children:"🔮 Coming Soon"}),t.jsx("div",{className:"features-grid",children:m.map((u,y)=>t.jsxs("div",{className:"feature-card upcoming",children:[t.jsx("div",{className:"feature-icon",children:u.icon}),t.jsxs("div",{className:"feature-content",children:[t.jsx("h4",{children:u.name}),t.jsx("p",{children:u.description}),t.jsx("span",{className:"feature-status upcoming",children:u.status})]})]},y))})]}),t.jsxs("div",{className:"error-actions",children:[t.jsx("button",{className:"back-btn primary",onClick:T,children:"← Back to Dashboard"}),t.jsx("button",{className:"feature-btn secondary",onClick:()=>a("Job Controller"),children:"Explore Job Controller"})]}),t.jsx("div",{className:"error-footer",children:t.jsxs("p",{children:["Thank you for testing our platform! Your feedback helps us build better features.",t.jsx("br",{}),t.jsx("strong",{children:"Expected Timeline:"})," Full feature set coming in Q4 2025"]})})]})})}const od=({onNavigate:T})=>{const _=p=>{T(p)};return t.jsx("div",{className:"sitemap",children:t.jsxs("div",{className:"sitemap-container",children:[t.jsxs("header",{className:"sitemap-header",children:[t.jsx("h1",{children:"Site Map"}),t.jsx("p",{children:"Navigate through all pages and sections of NYXO"}),t.jsx("button",{className:"back-button",onClick:()=>_("dashboard"),children:"← Back to Dashboard"})]}),t.jsxs("div",{className:"sitemap-content",children:[t.jsxs("div",{className:"sitemap-section",children:[t.jsx("h2",{children:"🏠 Main Pages"}),t.jsxs("div",{className:"sitemap-links",children:[t.jsxs("div",{className:"sitemap-item",children:[t.jsx("button",{className:"sitemap-link main",onClick:()=>_("dashboard"),children:"Dashboard"}),t.jsxs("div",{className:"sub-links",children:[t.jsx("button",{className:"sitemap-link sub",children:"Your Activity"}),t.jsx("button",{className:"sitemap-link sub",children:"Job Search"}),t.jsx("button",{className:"sitemap-link sub",children:"Quick Actions"})]})]}),t.jsxs("div",{className:"sitemap-item",children:[t.jsx("button",{className:"sitemap-link main",onClick:()=>_("toolkit"),children:"Toolkit"}),t.jsxs("div",{className:"sub-links",children:[t.jsx("button",{className:"sitemap-link sub",children:"Resume Builder"}),t.jsx("button",{className:"sitemap-link sub",children:"Resume Templates"})]})]}),t.jsxs("div",{className:"sitemap-item",children:[t.jsx("button",{className:"sitemap-link main",onClick:()=>_("job-controller"),children:"Job Controller"}),t.jsxs("div",{className:"sub-links",children:[t.jsx("button",{className:"sitemap-link sub",children:"Job Applications"}),t.jsx("button",{className:"sitemap-link sub",children:"Job Matches"}),t.jsx("button",{className:"sitemap-link sub",children:"Application Tracker"}),t.jsx("button",{className:"sitemap-link sub",children:"Interview Schedule"})]})]}),t.jsxs("div",{className:"sitemap-item",children:[t.jsx("button",{className:"sitemap-link main",onClick:()=>_("profile"),children:"Profile"}),t.jsxs("div",{className:"sub-links",children:[t.jsx("button",{className:"sitemap-link sub",children:"Personal Information"}),t.jsx("button",{className:"sitemap-link sub",children:"Account Settings"}),t.jsx("button",{className:"sitemap-link sub",children:"Privacy Settings"}),t.jsx("button",{className:"sitemap-link sub",children:"Notification Preferences"})]})]})]})]}),t.jsxs("div",{className:"sitemap-section",children:[t.jsx("h2",{children:"🔧 Tools & Resources"}),t.jsxs("div",{className:"sitemap-links",children:[t.jsxs("div",{className:"sitemap-item",children:[t.jsx("button",{className:"sitemap-link main",children:"Resume Builder"}),t.jsxs("div",{className:"sub-links",children:[t.jsx("button",{className:"sitemap-link sub",children:"Professional Template"}),t.jsx("button",{className:"sitemap-link sub",children:"Creative Template"}),t.jsx("button",{className:"sitemap-link sub",children:"Modern Template"}),t.jsx("button",{className:"sitemap-link sub",children:"Classic Template"})]})]}),t.jsxs("div",{className:"sitemap-item",children:[t.jsx("button",{className:"sitemap-link main",children:"Career Resources"}),t.jsxs("div",{className:"sub-links",children:[t.jsx("button",{className:"sitemap-link sub",children:"Interview Preparation"}),t.jsx("button",{className:"sitemap-link sub",children:"Skill Assessments"}),t.jsx("button",{className:"sitemap-link sub",children:"Career Advice"}),t.jsx("button",{className:"sitemap-link sub",children:"Industry Insights"})]})]})]})]}),t.jsxs("div",{className:"sitemap-section",children:[t.jsx("h2",{children:"📋 Account & Settings"}),t.jsxs("div",{className:"sitemap-links",children:[t.jsxs("div",{className:"sitemap-item",children:[t.jsx("button",{className:"sitemap-link main",children:"Account Management"}),t.jsxs("div",{className:"sub-links",children:[t.jsx("button",{className:"sitemap-link sub",children:"Login / Register"}),t.jsx("button",{className:"sitemap-link sub",children:"Password Reset"}),t.jsx("button",{className:"sitemap-link sub",children:"Delete Account"})]})]}),t.jsxs("div",{className:"sitemap-item",children:[t.jsx("button",{className:"sitemap-link main",children:"Help & Support"}),t.jsxs("div",{className:"sub-links",children:[t.jsx("button",{className:"sitemap-link sub",children:"FAQ"}),t.jsx("button",{className:"sitemap-link sub",children:"Contact Support"}),t.jsx("button",{className:"sitemap-link sub",children:"User Guide"}),t.jsx("button",{className:"sitemap-link sub",children:"Tutorials"})]})]}),t.jsxs("div",{className:"sitemap-item",children:[t.jsx("button",{className:"sitemap-link main",children:"Legal"}),t.jsxs("div",{className:"sub-links",children:[t.jsx("button",{className:"sitemap-link sub",children:"Privacy Policy"}),t.jsx("button",{className:"sitemap-link sub",children:"Terms of Service"}),t.jsx("button",{className:"sitemap-link sub",children:"Cookie Policy"}),t.jsx("button",{className:"sitemap-link sub",children:"GDPR Compliance"})]})]})]})]})]})]})})};function Wc({onLogout:T,userEmail:_,onNavigate:p}){const[m,a]=X.useState("dashboard"),[u,y]=X.useState(!1),[M,I]=X.useState("personal"),[v,P]=X.useState("search"),[q,L]=X.useState("all"),[Z,ee]=X.useState(""),{t:K}=lu();X.useEffect(()=>{const ge=le=>{le.detail&&le.detail.page&&(le.detail.page==="error-page"&&ee(le.detail.featureName||"This Feature"),a(le.detail.page))};return window.addEventListener("navigate",ge),()=>{window.removeEventListener("navigate",ge)}},[]);const Y=()=>{y(!u)},J=ge=>{a(ge),y(!1)},ue=()=>t.jsxs(t.Fragment,{children:[t.jsx("nav",{className:`dashboard-navbar ${m==="profile"||m==="jobcontroller"||m==="toolkit"?"with-subnav":""}`,children:t.jsxs("div",{className:"dashboard-nav-container",children:[t.jsxs("div",{className:`dashboard-nav-menu ${u?"active":""}`,children:[t.jsx("button",{className:`dashboard-nav-link ${m==="dashboard"?"active":""}`,onClick:()=>J("dashboard"),children:K("dashboard")}),t.jsx("button",{className:`dashboard-nav-link ${m==="toolkit"?"active":""}`,onClick:()=>J("toolkit"),children:K("toolkit")}),m==="toolkit"&&t.jsxs("div",{className:"mobile-subnav",children:[t.jsx("div",{className:"mobile-subnav-header",children:"Toolkit Categories"}),t.jsx("button",{className:`mobile-subnav-btn ${q==="all"?"active":""}`,onClick:()=>{L("all"),y(!1)},children:"🔧 All Tools"}),t.jsx("button",{className:`mobile-subnav-btn ${q==="documents"?"active":""}`,onClick:()=>{L("documents"),y(!1)},children:"📄 Documents"}),t.jsx("button",{className:`mobile-subnav-btn ${q==="preparation"?"active":""}`,onClick:()=>{L("preparation"),y(!1)},children:"🎤 Preparation"}),t.jsx("button",{className:`mobile-subnav-btn ${q==="skills"?"active":""}`,onClick:()=>{L("skills"),y(!1)},children:"🎯 Skills"}),t.jsx("button",{className:`mobile-subnav-btn ${q==="research"?"active":""}`,onClick:()=>{L("research"),y(!1)},children:"💰 Research"})]}),t.jsx("button",{className:`dashboard-nav-link ${m==="jobcontroller"?"active":""}`,onClick:()=>J("jobcontroller"),children:K("jobController")}),m==="jobcontroller"&&t.jsxs("div",{className:"mobile-subnav",children:[t.jsx("div",{className:"mobile-subnav-header",children:"Job Controller"}),t.jsx("button",{className:`mobile-subnav-btn ${v==="search"?"active":""}`,onClick:()=>{P("search"),y(!1)},children:"🔍 Job Search"}),t.jsx("button",{className:`mobile-subnav-btn ${v==="saved"?"active":""}`,onClick:()=>{P("saved"),y(!1)},children:"💾 Saved Jobs"}),t.jsx("button",{className:`mobile-subnav-btn ${v==="analytics"?"active":""}`,onClick:()=>{P("analytics"),y(!1)},children:"📊 Analytics"})]}),t.jsx("button",{className:`dashboard-nav-link ${m==="profile"?"active":""}`,onClick:()=>J("profile"),children:K("profile")}),m==="profile"&&t.jsxs("div",{className:"mobile-subnav",children:[t.jsx("div",{className:"mobile-subnav-header",children:"Profile Sections"}),t.jsx("button",{className:`mobile-subnav-btn ${M==="personal"?"active":""}`,onClick:()=>{I("personal"),y(!1)},children:"👤 Personal Info"}),t.jsx("button",{className:`mobile-subnav-btn ${M==="experience"?"active":""}`,onClick:()=>{I("experience"),y(!1)},children:"💼 Experience"}),t.jsx("button",{className:`mobile-subnav-btn ${M==="education"?"active":""}`,onClick:()=>{I("education"),y(!1)},children:"🎓 Education"}),t.jsx("button",{className:`mobile-subnav-btn ${M==="skills"?"active":""}`,onClick:()=>{I("skills"),y(!1)},children:"🎯 Skills"}),t.jsx("button",{className:`mobile-subnav-btn ${M==="preferences"?"active":""}`,onClick:()=>{I("preferences"),y(!1)},children:"⚙️ Preferences"})]})]}),t.jsxs("div",{className:`dashboard-nav-toggle ${u?"active":""}`,onClick:Y,children:[t.jsx("span",{className:"bar"}),t.jsx("span",{className:"bar"}),t.jsx("span",{className:"bar"})]})]})}),u&&t.jsx("div",{className:"mobile-menu-overlay",onClick:()=>y(!1)})]}),ce=()=>t.jsxs("div",{className:"dashboard-home",children:[t.jsxs("div",{className:"search-bar-section",children:[t.jsx("h2",{className:"search-section-label",children:"Find Your Perfect Job"}),t.jsx("p",{className:"search-section-description",children:"Search thousands of job opportunities from top companies"}),t.jsxs("div",{className:"search-container",children:[t.jsx("input",{type:"text",className:"search-input",placeholder:"Search for jobs, companies, or keywords...",onKeyDown:ge=>{ge.key==="Enter"&&(a("jobcontroller"),P("search"))}}),t.jsx("button",{className:"search-button",onClick:()=>{a("jobcontroller"),P("search")},"aria-label":"Search",children:t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"11",cy:"11",r:"8"}),t.jsx("path",{d:"m21 21-4.35-4.35"})]})})]})]}),t.jsxs("div",{className:"activity-overview",children:[t.jsx("h2",{children:K("yourActivity")}),t.jsxs("div",{className:"activity-grid",children:[t.jsxs("div",{className:"activity-card",children:[t.jsxs("div",{className:"activity-header",children:[t.jsx("div",{className:"activity-icon job-searched",children:"🔍"}),t.jsx("div",{className:"activity-title",children:K("jobsSearched")})]}),t.jsx("div",{className:"activity-number",children:"127"}),t.jsxs("div",{className:"activity-trend positive",children:["+12 ",K("thisWeek")]})]}),t.jsxs("div",{className:"activity-card clickable",onClick:()=>a("applications"),children:[t.jsxs("div",{className:"activity-header",children:[t.jsx("div",{className:"activity-icon job-applied",children:"📝"}),t.jsx("div",{className:"activity-title",children:K("applicationsSent")}),t.jsx("div",{className:"activity-arrow",children:"→"})]}),t.jsx("div",{className:"activity-number",children:"18"}),t.jsxs("div",{className:"activity-trend positive",children:["+3 ",K("thisWeek")]})]}),t.jsxs("div",{className:"activity-card clickable",onClick:()=>a("jobmatches"),children:[t.jsxs("div",{className:"activity-header",children:[t.jsx("div",{className:"activity-icon job-matched",children:"✨"}),t.jsx("div",{className:"activity-title",children:K("jobMatches")}),t.jsx("div",{className:"activity-arrow",children:"→"})]}),t.jsx("div",{className:"activity-number",children:"34"}),t.jsxs("div",{className:"activity-trend positive",children:["+7 ",K("newMatches")]})]})]})]}),t.jsxs("div",{className:"quick-actions",children:[t.jsx("h2",{children:"Quick Actions"}),t.jsx("div",{className:"main-actions-border-container",children:t.jsxs("div",{className:"actions-grid no-hover",children:[t.jsxs("div",{className:"action-card primary",onClick:()=>a("profile"),children:[t.jsx("div",{className:"action-icon",children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"12",cy:"8",r:"4"}),t.jsx("path",{d:"M4 20c0-4 4-6 8-6s8 2 8 6"})]})}),t.jsxs("div",{className:"action-content",children:[t.jsx("h3",{children:"Update Profile"}),t.jsx("p",{children:"Keep your profile fresh and attract better opportunities"})]}),t.jsx("div",{className:"action-arrow",children:"→"})]}),t.jsxs("div",{className:"action-card secondary",onClick:()=>a("toolkit"),children:[t.jsx("div",{className:"action-icon",children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M12 2l7 4-7 4-7-4 7-4z",fill:"#b3c6e0"}),t.jsx("path",{d:"M12 10v4",stroke:"#64748b"}),t.jsx("circle",{cx:"17",cy:"17",r:"3",stroke:"#64748b",fill:"#fff"}),t.jsx("path",{d:"M17 15.5v1M17 20v-1.5M18.5 17h-1M15.5 17h1",stroke:"#64748b"})]})}),t.jsxs("div",{className:"action-content",children:[t.jsx("h3",{children:"Career Tools"}),t.jsx("p",{children:"Resume builder and career toolkit"})]}),t.jsx("div",{className:"action-arrow",children:"→"})]}),t.jsxs("div",{className:"action-card secondary",onClick:()=>a("jobcontroller"),children:[t.jsx("div",{className:"action-icon",children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("circle",{cx:"11",cy:"11",r:"8"}),t.jsx("path",{d:"m21 21-4.35-4.35"})]})}),t.jsxs("div",{className:"action-content",children:[t.jsx("h3",{children:"Find Work"}),t.jsx("p",{children:"Find new opportunities and manage job search"})]}),t.jsx("div",{className:"action-arrow",children:"→"})]})]})})]})]}),me=()=>{switch(m){case"toolkit":return t.jsx(cu,{activeCategory:q,setActiveCategory:L,onNavigateBack:()=>a("dashboard")});case"jobcontroller":return t.jsx(du,{activeTab:v,setActiveTab:P,onNavigateBack:()=>a("dashboard")});case"jobmatches":return t.jsx(uu,{onNavigateBack:()=>a("dashboard")});case"applications":return t.jsx(mu,{onNavigateBack:()=>a("dashboard")});case"profile":return t.jsx(pu,{userEmail:_,activeSection:M,setActiveSection:I,onNavigateBack:()=>a("dashboard")});case"resume-templates":return t.jsx(hu,{});case"professional-resume-template":return t.jsx(fu,{onNavigateBack:()=>a("resume-templates"),onEdit:()=>a("professional-template-editor")});case"professional-template-editor":return t.jsx(Gc,{onNavigateBack:()=>a("professional-resume-template")});case"academic-resume-template":return t.jsx(gu,{onNavigateBack:()=>a("resume-templates"),onEdit:()=>a("academic-template-editor")});case"academic-template-editor":return t.jsx(Vc,{onNavigateBack:()=>a("academic-resume-template")});case"creative-resume-template":return t.jsx(xu,{onNavigateBack:()=>a("resume-templates"),onEdit:()=>a("creative-template-editor")});case"creative-template-editor":return t.jsx(Qc,{onNavigateBack:()=>a("creative-resume-template")});case"technical-resume-template":return t.jsx(vu,{onNavigateBack:()=>a("resume-templates"),onEdit:()=>a("technical-template-editor")});case"technical-template-editor":return t.jsx(Xc,{onNavigateBack:()=>a("technical-resume-template")});case"executive-resume-template":return t.jsx(yu,{onNavigateBack:()=>a("resume-templates"),onEdit:()=>a("executive-template-editor")});case"executive-template-editor":return t.jsx(ju,{onNavigateBack:()=>a("executive-resume-template")});case"modern-resume-template":return t.jsx(bu,{onNavigateBack:()=>a("resume-templates"),onEdit:()=>a("modern-template-editor")});case"modern-template-editor":return t.jsx(td,{onNavigateBack:()=>a("modern-resume-template")});case"simple-resume-template":return t.jsx(ku,{onNavigateBack:()=>a("resume-templates"),onEdit:()=>a("simple-template-editor")});case"simple-template-editor":return t.jsx(id,{onNavigateBack:()=>a("simple-resume-template")});case"entry-level-resume-template":return t.jsx(wu,{onNavigateBack:()=>a("resume-templates"),onEdit:()=>a("entry-level-template-editor")});case"entry-level-template-editor":return t.jsx(sd,{onNavigateBack:()=>a("entry-level-resume-template")});case"error-page":return t.jsx(Nu,{onNavigateBack:()=>a("dashboard"),featureName:Z});case"sitemap":return t.jsx(od,{onNavigate:a});default:return ce()}};return t.jsxs("div",{className:"dashboard",children:[ue(),t.jsx("main",{className:`dashboard-main ${m==="profile"||m==="jobcontroller"||m==="toolkit"?"with-subnav":""}`,children:me()})]})}const Su=({onNavigate:T})=>{const _=m=>{const a=new CustomEvent("navigate",{detail:{page:m}});window.dispatchEvent(a),T&&m==="sitemap"&&T(m)},p=(m,a)=>{m.preventDefault(),_(a)};return t.jsx("footer",{className:"footer",children:t.jsxs("div",{className:"footer-container",children:[t.jsxs("div",{className:"footer-content",children:[t.jsxs("div",{className:"footer-section",children:[t.jsx("h3",{className:"footer-title",children:"NYXO"}),t.jsx("p",{className:"footer-description",children:"Your career companion for finding the perfect job opportunities and building your professional future."})]}),t.jsxs("div",{className:"footer-section",children:[t.jsx("h4",{className:"footer-heading",children:"Quick Links"}),t.jsxs("ul",{className:"footer-links",children:[t.jsx("li",{children:t.jsx("a",{href:"#dashboard",onClick:m=>p(m,"dashboard"),className:"footer-link-active",children:"Dashboard"})}),t.jsx("li",{children:t.jsx("a",{href:"#toolkit",onClick:m=>p(m,"toolkit"),className:"footer-link-active",children:"Toolkit"})}),t.jsx("li",{children:t.jsx("a",{href:"#job-controller",onClick:m=>p(m,"jobcontroller"),className:"footer-link-active",children:"Job Controller"})}),t.jsx("li",{children:t.jsx("a",{href:"#profile",onClick:m=>p(m,"profile"),className:"footer-link-active",children:"Profile"})})]})]}),t.jsxs("div",{className:"footer-section",children:[t.jsx("h4",{className:"footer-heading",children:"Resources"}),t.jsxs("ul",{className:"footer-links",children:[t.jsx("li",{children:t.jsx("a",{href:"#resume-builder",onClick:m=>p(m,"resume-templates"),className:"footer-link-active",children:"Resume Builder"})}),t.jsx("li",{children:t.jsx("a",{href:"#interview-prep",className:"footer-link-disabled",title:"Coming Soon",onClick:m=>m.preventDefault(),children:"Interview Prep"})}),t.jsx("li",{children:t.jsx("a",{href:"#career-advice",className:"footer-link-disabled",title:"Coming Soon",onClick:m=>m.preventDefault(),children:"Career Advice"})})]})]})]}),t.jsxs("div",{className:"footer-bottom",children:[t.jsx("p",{children:"© 2025 NYXO. All rights reserved."}),t.jsxs("div",{className:"footer-actions",children:[t.jsx("button",{className:"sitemap-button",onClick:()=>T&&T("sitemap"),children:"🗺️ Site Map"}),t.jsx("div",{className:"footer-social",children:t.jsx("span",{children:"Contact Us"})})]})]})]})})};function Cu(){const[T,_]=X.useState("dashboard"),[p,m]=X.useState(!0),[a,u]=X.useState("demo@example.com"),y=()=>{_("dashboard")},M=I=>{_(I)};return t.jsx(au,{children:t.jsxs("div",{className:"App",children:[T==="dashboard"?t.jsx(Wc,{onLogout:y,userEmail:a,onNavigate:M}):T==="sitemap"?t.jsx(od,{onNavigate:M}):t.jsx(Wc,{onLogout:y,userEmail:a,onNavigate:M}),t.jsx(Su,{onNavigate:M})]})})}ou.createRoot(document.getElementById("root")).render(t.jsx(Zp.StrictMode,{children:t.jsx(Cu,{})}));
