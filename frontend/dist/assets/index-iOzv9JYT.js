(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var Td={exports:{}},_a={},wd={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function sx(){if(eg)return yt;eg=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function m(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(k,Z,be){this.props=k,this.context=Z,this.refs=E,this.updater=be||x}S.prototype.isReactComponent={},S.prototype.setState=function(k,Z){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,Z,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function y(){}y.prototype=S.prototype;function R(k,Z,be){this.props=k,this.context=Z,this.refs=E,this.updater=be||x}var P=R.prototype=new y;P.constructor=R,M(P,S.prototype),P.isPureReactComponent=!0;var C=Array.isArray,D=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function w(k,Z,be){var je,Je={},se=null,me=null;if(Z!=null)for(je in Z.ref!==void 0&&(me=Z.ref),Z.key!==void 0&&(se=""+Z.key),Z)D.call(Z,je)&&!O.hasOwnProperty(je)&&(Je[je]=Z[je]);var pe=arguments.length-2;if(pe===1)Je.children=be;else if(1<pe){for(var Fe=Array(pe),He=0;He<pe;He++)Fe[He]=arguments[He+2];Je.children=Fe}if(k&&k.defaultProps)for(je in pe=k.defaultProps,pe)Je[je]===void 0&&(Je[je]=pe[je]);return{$$typeof:o,type:k,key:se,ref:me,props:Je,_owner:I.current}}function L(k,Z){return{$$typeof:o,type:k.type,key:Z,ref:k.ref,props:k.props,_owner:k._owner}}function oe(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function F(k){var Z={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(be){return Z[be]})}var X=/\/+/g;function j(k,Z){return typeof k=="object"&&k!==null&&k.key!=null?F(""+k.key):Z.toString(36)}function ne(k,Z,be,je,Je){var se=typeof k;(se==="undefined"||se==="boolean")&&(k=null);var me=!1;if(k===null)me=!0;else switch(se){case"string":case"number":me=!0;break;case"object":switch(k.$$typeof){case o:case e:me=!0}}if(me)return me=k,Je=Je(me),k=je===""?"."+j(me,0):je,C(Je)?(be="",k!=null&&(be=k.replace(X,"$&/")+"/"),ne(Je,Z,be,"",function(He){return He})):Je!=null&&(oe(Je)&&(Je=L(Je,be+(!Je.key||me&&me.key===Je.key?"":(""+Je.key).replace(X,"$&/")+"/")+k)),Z.push(Je)),1;if(me=0,je=je===""?".":je+":",C(k))for(var pe=0;pe<k.length;pe++){se=k[pe];var Fe=je+j(se,pe);me+=ne(se,Z,be,Fe,Je)}else if(Fe=m(k),typeof Fe=="function")for(k=Fe.call(k),pe=0;!(se=k.next()).done;)se=se.value,Fe=je+j(se,pe++),me+=ne(se,Z,be,Fe,Je);else if(se==="object")throw Z=String(k),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return me}function $(k,Z,be){if(k==null)return k;var je=[],Je=0;return ne(k,je,"","",function(se){return Z.call(be,se,Je++)}),je}function J(k){if(k._status===-1){var Z=k._result;Z=Z(),Z.then(function(be){(k._status===0||k._status===-1)&&(k._status=1,k._result=be)},function(be){(k._status===0||k._status===-1)&&(k._status=2,k._result=be)}),k._status===-1&&(k._status=0,k._result=Z)}if(k._status===1)return k._result.default;throw k._result}var G={current:null},Q={transition:null},ae={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:Q,ReactCurrentOwner:I};function ue(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:$,forEach:function(k,Z,be){$(k,function(){Z.apply(this,arguments)},be)},count:function(k){var Z=0;return $(k,function(){Z++}),Z},toArray:function(k){return $(k,function(Z){return Z})||[]},only:function(k){if(!oe(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},yt.Component=S,yt.Fragment=t,yt.Profiler=s,yt.PureComponent=R,yt.StrictMode=i,yt.Suspense=h,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,yt.act=ue,yt.cloneElement=function(k,Z,be){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var je=M({},k.props),Je=k.key,se=k.ref,me=k._owner;if(Z!=null){if(Z.ref!==void 0&&(se=Z.ref,me=I.current),Z.key!==void 0&&(Je=""+Z.key),k.type&&k.type.defaultProps)var pe=k.type.defaultProps;for(Fe in Z)D.call(Z,Fe)&&!O.hasOwnProperty(Fe)&&(je[Fe]=Z[Fe]===void 0&&pe!==void 0?pe[Fe]:Z[Fe])}var Fe=arguments.length-2;if(Fe===1)je.children=be;else if(1<Fe){pe=Array(Fe);for(var He=0;He<Fe;He++)pe[He]=arguments[He+2];je.children=pe}return{$$typeof:o,type:k.type,key:Je,ref:se,props:je,_owner:me}},yt.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},yt.createElement=w,yt.createFactory=function(k){var Z=w.bind(null,k);return Z.type=k,Z},yt.createRef=function(){return{current:null}},yt.forwardRef=function(k){return{$$typeof:d,render:k}},yt.isValidElement=oe,yt.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:J}},yt.memo=function(k,Z){return{$$typeof:f,type:k,compare:Z===void 0?null:Z}},yt.startTransition=function(k){var Z=Q.transition;Q.transition={};try{k()}finally{Q.transition=Z}},yt.unstable_act=ue,yt.useCallback=function(k,Z){return G.current.useCallback(k,Z)},yt.useContext=function(k){return G.current.useContext(k)},yt.useDebugValue=function(){},yt.useDeferredValue=function(k){return G.current.useDeferredValue(k)},yt.useEffect=function(k,Z){return G.current.useEffect(k,Z)},yt.useId=function(){return G.current.useId()},yt.useImperativeHandle=function(k,Z,be){return G.current.useImperativeHandle(k,Z,be)},yt.useInsertionEffect=function(k,Z){return G.current.useInsertionEffect(k,Z)},yt.useLayoutEffect=function(k,Z){return G.current.useLayoutEffect(k,Z)},yt.useMemo=function(k,Z){return G.current.useMemo(k,Z)},yt.useReducer=function(k,Z,be){return G.current.useReducer(k,Z,be)},yt.useRef=function(k){return G.current.useRef(k)},yt.useState=function(k){return G.current.useState(k)},yt.useSyncExternalStore=function(k,Z,be){return G.current.useSyncExternalStore(k,Z,be)},yt.useTransition=function(){return G.current.useTransition()},yt.version="18.3.1",yt}var tg;function df(){return tg||(tg=1,wd.exports=sx()),wd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function ox(){if(ng)return _a;ng=1;var o=df(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,f){var g,_={},m=null,x=null;f!==void 0&&(m=""+f),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(x=h.ref);for(g in h)i.call(h,g)&&!a.hasOwnProperty(g)&&(_[g]=h[g]);if(d&&d.defaultProps)for(g in h=d.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:e,type:d,key:m,ref:x,props:_,_owner:s.current}}return _a.Fragment=t,_a.jsx=c,_a.jsxs=c,_a}var ig;function ax(){return ig||(ig=1,Td.exports=ox()),Td.exports}var B=ax(),Rt=df(),$l={},Ad={exports:{}},Xn={},bd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function lx(){return rg||(rg=1,(function(o){function e(Q,ae){var ue=Q.length;Q.push(ae);e:for(;0<ue;){var k=ue-1>>>1,Z=Q[k];if(0<s(Z,ae))Q[k]=ae,Q[ue]=Z,ue=k;else break e}}function t(Q){return Q.length===0?null:Q[0]}function i(Q){if(Q.length===0)return null;var ae=Q[0],ue=Q.pop();if(ue!==ae){Q[0]=ue;e:for(var k=0,Z=Q.length,be=Z>>>1;k<be;){var je=2*(k+1)-1,Je=Q[je],se=je+1,me=Q[se];if(0>s(Je,ue))se<Z&&0>s(me,Je)?(Q[k]=me,Q[se]=ue,k=se):(Q[k]=Je,Q[je]=ue,k=je);else if(se<Z&&0>s(me,ue))Q[k]=me,Q[se]=ue,k=se;else break e}}return ae}function s(Q,ae){var ue=Q.sortIndex-ae.sortIndex;return ue!==0?ue:Q.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,d=c.now();o.unstable_now=function(){return c.now()-d}}var h=[],f=[],g=1,_=null,m=3,x=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(Q){for(var ae=t(f);ae!==null;){if(ae.callback===null)i(f);else if(ae.startTime<=Q)i(f),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=t(f)}}function C(Q){if(E=!1,P(Q),!M)if(t(h)!==null)M=!0,J(D);else{var ae=t(f);ae!==null&&G(C,ae.startTime-Q)}}function D(Q,ae){M=!1,E&&(E=!1,y(w),w=-1),x=!0;var ue=m;try{for(P(ae),_=t(h);_!==null&&(!(_.expirationTime>ae)||Q&&!F());){var k=_.callback;if(typeof k=="function"){_.callback=null,m=_.priorityLevel;var Z=k(_.expirationTime<=ae);ae=o.unstable_now(),typeof Z=="function"?_.callback=Z:_===t(h)&&i(h),P(ae)}else i(h);_=t(h)}if(_!==null)var be=!0;else{var je=t(f);je!==null&&G(C,je.startTime-ae),be=!1}return be}finally{_=null,m=ue,x=!1}}var I=!1,O=null,w=-1,L=5,oe=-1;function F(){return!(o.unstable_now()-oe<L)}function X(){if(O!==null){var Q=o.unstable_now();oe=Q;var ae=!0;try{ae=O(!0,Q)}finally{ae?j():(I=!1,O=null)}}else I=!1}var j;if(typeof R=="function")j=function(){R(X)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,$=ne.port2;ne.port1.onmessage=X,j=function(){$.postMessage(null)}}else j=function(){S(X,0)};function J(Q){O=Q,I||(I=!0,j())}function G(Q,ae){w=S(function(){Q(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Q){Q.callback=null},o.unstable_continueExecution=function(){M||x||(M=!0,J(D))},o.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<Q?Math.floor(1e3/Q):5},o.unstable_getCurrentPriorityLevel=function(){return m},o.unstable_getFirstCallbackNode=function(){return t(h)},o.unstable_next=function(Q){switch(m){case 1:case 2:case 3:var ae=3;break;default:ae=m}var ue=m;m=ae;try{return Q()}finally{m=ue}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(Q,ae){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var ue=m;m=Q;try{return ae()}finally{m=ue}},o.unstable_scheduleCallback=function(Q,ae,ue){var k=o.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?k+ue:k):ue=k,Q){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=ue+Z,Q={id:g++,callback:ae,priorityLevel:Q,startTime:ue,expirationTime:Z,sortIndex:-1},ue>k?(Q.sortIndex=ue,e(f,Q),t(h)===null&&Q===t(f)&&(E?(y(w),w=-1):E=!0,G(C,ue-k))):(Q.sortIndex=Z,e(h,Q),M||x||(M=!0,J(D))),Q},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(Q){var ae=m;return function(){var ue=m;m=ae;try{return Q.apply(this,arguments)}finally{m=ue}}}})(Rd)),Rd}var sg;function cx(){return sg||(sg=1,bd.exports=lx()),bd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function ux(){if(og)return Xn;og=1;var o=df(),e=cx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function m(n){return h.call(_,n)?!0:h.call(g,n)?!1:f.test(n)?_[n]=!0:(g[n]=!0,!1)}function x(n,r,l,u){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,u){if(r===null||typeof r>"u"||x(n,r,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,u,p,v,A){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,R);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,R);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,R);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,l,u){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,u)&&(l=null),u||p===null?m(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,u=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,u?n.setAttributeNS(u,r,l):n.setAttribute(r,l))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),F=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),Q=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=Q&&n[Q]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,k;function Z(n){if(k===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);k=r&&r[1]||""}return`
`+k+n}var be=!1;function je(n,r){if(!n||be)return"";be=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(le){var u=le}Reflect.construct(n,[],r)}else{try{r.call()}catch(le){u=le}n.call(r.prototype)}else{try{throw Error()}catch(le){u=le}n()}}catch(le){if(le&&u&&typeof le.stack=="string"){for(var p=le.stack.split(`
`),v=u.stack.split(`
`),A=p.length-1,U=v.length-1;1<=A&&0<=U&&p[A]!==v[U];)U--;for(;1<=A&&0<=U;A--,U--)if(p[A]!==v[U]){if(A!==1||U!==1)do if(A--,U--,0>U||p[A]!==v[U]){var z=`
`+p[A].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=A&&0<=U);break}}}finally{be=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?Z(n):""}function Je(n){switch(n.tag){case 5:return Z(n.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return n=je(n.type,!1),n;case 11:return n=je(n.type.render,!1),n;case 1:return n=je(n.type,!0),n;default:return""}}function se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case L:return"Profiler";case w:return"StrictMode";case j:return"Suspense";case ne:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case oe:return(n._context.displayName||"Context")+".Provider";case X:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $:return r=n.displayName||null,r!==null?r:se(n.type)||"Memo";case J:r=n._payload,n=n._init;try{return se(n(r))}catch{}}return null}function me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(r);case 8:return r===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function He(n){var r=Fe(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(A){u=""+A,v.call(this,A)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function rt(n){n._valueTracker||(n._valueTracker=He(n))}function tn(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),u="";return n&&(u=Fe(n)?n.checked?"true":"false":n.value),n=u,n!==l?(r.setValue(n),!0):!1}function xt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ct(n,r){var l=r.checked;return ue({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Ut(n,r){var l=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;l=pe(r.value!=null?r.value:l),n._wrapperState={initialChecked:u,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ft(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function jt(n,r){ft(n,r);var l=pe(r.value),u=r.type;if(l!=null)u==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Kt(n,r.type,l):r.hasOwnProperty("defaultValue")&&Kt(n,r.type,pe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function V(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Kt(n,r,l){(r!=="number"||xt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Et=Array.isArray;function Pt(n,r,l,u){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&u&&(n[l].defaultSelected=!0)}else{for(l=""+pe(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function Ge(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function N(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Et(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:pe(l)}}function T(n,r){var l=pe(r.value),u=pe(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),u!=null&&(n.defaultValue=""+u)}function Y(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var de,ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=de.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function we(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},st=["Webkit","ms","Moz","O"];Object.keys(Ke).forEach(function(n){st.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ke[r]=Ke[n]})});function ye(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ke.hasOwnProperty(n)&&Ke[n]?(""+r).trim():r+"px"}function Te(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var u=l.indexOf("--")===0,p=ye(l,r[l],u);l==="float"&&(l="cssFloat"),u?n.setProperty(l,p):n[l]=p}}var We=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(n,r){if(r){if(We[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Le(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ae=null,Me=null,Ne=null;function Se(n){if(n=na(n)){if(typeof Ae!="function")throw Error(t(280));var r=n.stateNode;r&&(r=dl(r),Ae(n.stateNode,n.type,r))}}function he(n){Me?Ne?Ne.push(n):Ne=[n]:Me=n}function ze(){if(Me){var n=Me,r=Ne;if(Ne=Me=null,Se(n),r)for(n=0;n<r.length;n++)Se(r[n])}}function at(n,r){return n(r)}function Ot(){}var Lt=!1;function oi(n,r,l){if(Lt)return n(r,l);Lt=!0;try{return at(n,r,l)}finally{Lt=!1,(Me!==null||Ne!==null)&&(Ot(),ze())}}function Pn(n,r){var l=n.stateNode;if(l===null)return null;var u=dl(l);if(u===null)return null;l=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ns=!1;if(d)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Ns=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Ns=!1}function Xc(n,r,l,u,p,v,A,U,z){var le=Array.prototype.slice.call(arguments,3);try{r.apply(l,le)}catch(ve){this.onError(ve)}}var wr=!1,is=null,ai=!1,rs=null,Ga={onError:function(n){wr=!0,is=n}};function Wa(n,r,l,u,p,v,A,U,z){wr=!1,is=null,Xc.apply(Ga,arguments)}function Ds(n,r,l,u,p,v,A,U,z){if(Wa.apply(this,arguments),wr){if(wr){var le=is;wr=!1,is=null}else throw Error(t(198));ai||(ai=!0,rs=le)}}function Ui(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function ss(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function ko(n){if(Ui(n)!==n)throw Error(t(188))}function ja(n){var r=n.alternate;if(!r){if(r=Ui(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,u=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){l=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return ko(p),n;if(v===u)return ko(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==u.return)l=p,u=v;else{for(var A=!1,U=p.child;U;){if(U===l){A=!0,l=p,u=v;break}if(U===u){A=!0,u=p,l=v;break}U=U.sibling}if(!A){for(U=v.child;U;){if(U===l){A=!0,l=v,u=p;break}if(U===u){A=!0,u=v,l=p;break}U=U.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Xa(n){return n=ja(n),n!==null?Ya(n):null}function Ya(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ya(n);if(r!==null)return r;n=n.sibling}return null}var qa=e.unstable_scheduleCallback,Ka=e.unstable_cancelCallback,Yc=e.unstable_shouldYield,qc=e.unstable_requestPaint,b=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,ce=e.unstable_ImmediatePriority,re=e.unstable_UserBlockingPriority,te=e.unstable_NormalPriority,Ce=e.unstable_LowPriority,Ue=e.unstable_IdlePriority,Re=null,De=null;function Ze(n){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Re,n,void 0,(n.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Ft,pt=Math.log,Qe=Math.LN2;function Ft(n){return n>>>=0,n===0?32:31-(pt(n)/Qe|0)|0}var Gt=64,Ht=4194304;function At(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function nn(n,r){var l=n.pendingLanes;if(l===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,A=l&268435455;if(A!==0){var U=A&~p;U!==0?u=At(U):(v&=A,v!==0&&(u=At(v)))}else A=l&~p,A!==0?u=At(A):v!==0&&(u=At(v));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if((u&4)!==0&&(u|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)l=31-tt(r),p=1<<l,u|=n[l],r&=~p;return u}function qe(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ln(n,r){for(var l=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var A=31-tt(v),U=1<<A,z=p[A];z===-1?((U&l)===0||(U&u)!==0)&&(p[A]=qe(U,r)):z<=r&&(n.expiredLanes|=U),v&=~U}}function Tt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Bn(){var n=Gt;return Gt<<=1,(Gt&4194240)===0&&(Gt=64),n}function zn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Kn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-tt(r),n[r]=l}function Ar(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-tt(l),v=1<<p;r[p]=0,u[p]=-1,n[p]=-1,l&=~v}}function It(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var u=31-tt(l),p=1<<u;p&r|n[u]&r&&(n[u]|=r),l&=~p}}var lt=0;function yi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var rn,li,ir,Bo,Ff,Kc=!1,$a=[],br=null,Rr=null,Cr=null,zo=new Map,Vo=new Map,Pr=[],b0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Of(n,r){switch(n){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":zo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(r.pointerId)}}function Ho(n,r,l,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},r!==null&&(r=na(r),r!==null&&li(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function R0(n,r,l,u,p){switch(r){case"focusin":return br=Ho(br,n,r,l,u,p),!0;case"dragenter":return Rr=Ho(Rr,n,r,l,u,p),!0;case"mouseover":return Cr=Ho(Cr,n,r,l,u,p),!0;case"pointerover":var v=p.pointerId;return zo.set(v,Ho(zo.get(v)||null,n,r,l,u,p)),!0;case"gotpointercapture":return v=p.pointerId,Vo.set(v,Ho(Vo.get(v)||null,n,r,l,u,p)),!0}return!1}function kf(n){var r=os(n.target);if(r!==null){var l=Ui(r);if(l!==null){if(r=l.tag,r===13){if(r=ss(l),r!==null){n.blockedOn=r,Ff(n.priority,function(){ir(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Za(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Zc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);ht=u,l.target.dispatchEvent(u),ht=null}else return r=na(l),r!==null&&li(r),n.blockedOn=l,!1;r.shift()}return!0}function Bf(n,r,l){Za(n)&&l.delete(r)}function C0(){Kc=!1,br!==null&&Za(br)&&(br=null),Rr!==null&&Za(Rr)&&(Rr=null),Cr!==null&&Za(Cr)&&(Cr=null),zo.forEach(Bf),Vo.forEach(Bf)}function Go(n,r){n.blockedOn===r&&(n.blockedOn=null,Kc||(Kc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,C0)))}function Wo(n){function r(p){return Go(p,n)}if(0<$a.length){Go($a[0],n);for(var l=1;l<$a.length;l++){var u=$a[l];u.blockedOn===n&&(u.blockedOn=null)}}for(br!==null&&Go(br,n),Rr!==null&&Go(Rr,n),Cr!==null&&Go(Cr,n),zo.forEach(r),Vo.forEach(r),l=0;l<Pr.length;l++)u=Pr[l],u.blockedOn===n&&(u.blockedOn=null);for(;0<Pr.length&&(l=Pr[0],l.blockedOn===null);)kf(l),l.blockedOn===null&&Pr.shift()}var Is=C.ReactCurrentBatchConfig,Ja=!0;function P0(n,r,l,u){var p=lt,v=Is.transition;Is.transition=null;try{lt=1,$c(n,r,l,u)}finally{lt=p,Is.transition=v}}function L0(n,r,l,u){var p=lt,v=Is.transition;Is.transition=null;try{lt=4,$c(n,r,l,u)}finally{lt=p,Is.transition=v}}function $c(n,r,l,u){if(Ja){var p=Zc(n,r,l,u);if(p===null)pu(n,r,u,Qa,l),Of(n,u);else if(R0(p,n,r,l,u))u.stopPropagation();else if(Of(n,u),r&4&&-1<b0.indexOf(n)){for(;p!==null;){var v=na(p);if(v!==null&&rn(v),v=Zc(n,r,l,u),v===null&&pu(n,r,u,Qa,l),v===p)break;p=v}p!==null&&u.stopPropagation()}else pu(n,r,u,null,l)}}var Qa=null;function Zc(n,r,l,u){if(Qa=null,n=H(u),n=os(n),n!==null)if(r=Ui(n),r===null)n=null;else if(l=r.tag,l===13){if(n=ss(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Qa=n,null}function zf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case ce:return 1;case re:return 4;case te:case Ce:return 16;case Ue:return 536870912;default:return 16}default:return 16}}var Lr=null,Jc=null,el=null;function Vf(){if(el)return el;var n,r=Jc,l=r.length,u,p="value"in Lr?Lr.value:Lr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var A=l-n;for(u=1;u<=A&&r[l-u]===p[v-u];u++);return el=p.slice(n,1<u?1-u:void 0)}function tl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function nl(){return!0}function Hf(){return!1}function $n(n){function r(l,u,p,v,A){this._reactName=l,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=A,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(l=n[U],this[U]=l?l(v):v[U]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?nl:Hf,this.isPropagationStopped=Hf,this}return ue(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),r}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qc=$n(Us),jo=ue({},Us,{view:0,detail:0}),N0=$n(jo),eu,tu,Xo,il=ue({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xo&&(Xo&&n.type==="mousemove"?(eu=n.screenX-Xo.screenX,tu=n.screenY-Xo.screenY):tu=eu=0,Xo=n),eu)},movementY:function(n){return"movementY"in n?n.movementY:tu}}),Gf=$n(il),D0=ue({},il,{dataTransfer:0}),I0=$n(D0),U0=ue({},jo,{relatedTarget:0}),nu=$n(U0),F0=ue({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),O0=$n(F0),k0=ue({},Us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),B0=$n(k0),z0=ue({},Us,{data:0}),Wf=$n(z0),V0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W0(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=G0[n])?!!r[n]:!1}function iu(){return W0}var j0=ue({},jo,{key:function(n){if(n.key){var r=V0[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=tl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?H0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(n){return n.type==="keypress"?tl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?tl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),X0=$n(j0),Y0=ue({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jf=$n(Y0),q0=ue({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),K0=$n(q0),$0=ue({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z0=$n($0),J0=ue({},il,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Q0=$n(J0),ev=[9,13,27,32],ru=d&&"CompositionEvent"in window,Yo=null;d&&"documentMode"in document&&(Yo=document.documentMode);var tv=d&&"TextEvent"in window&&!Yo,Xf=d&&(!ru||Yo&&8<Yo&&11>=Yo),Yf=" ",qf=!1;function Kf(n,r){switch(n){case"keyup":return ev.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $f(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fs=!1;function nv(n,r){switch(n){case"compositionend":return $f(r);case"keypress":return r.which!==32?null:(qf=!0,Yf);case"textInput":return n=r.data,n===Yf&&qf?null:n;default:return null}}function iv(n,r){if(Fs)return n==="compositionend"||!ru&&Kf(n,r)?(n=Vf(),el=Jc=Lr=null,Fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Xf&&r.locale!=="ko"?null:r.data;default:return null}}var rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!rv[n.type]:r==="textarea"}function Jf(n,r,l,u){he(u),r=ll(r,"onChange"),0<r.length&&(l=new Qc("onChange","change",null,l,u),n.push({event:l,listeners:r}))}var qo=null,Ko=null;function sv(n){gp(n,0)}function rl(n){var r=Vs(n);if(tn(r))return n}function ov(n,r){if(n==="change")return r}var Qf=!1;if(d){var su;if(d){var ou="oninput"in document;if(!ou){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),ou=typeof ep.oninput=="function"}su=ou}else su=!1;Qf=su&&(!document.documentMode||9<document.documentMode)}function tp(){qo&&(qo.detachEvent("onpropertychange",np),Ko=qo=null)}function np(n){if(n.propertyName==="value"&&rl(Ko)){var r=[];Jf(r,Ko,n,H(n)),oi(sv,r)}}function av(n,r,l){n==="focusin"?(tp(),qo=r,Ko=l,qo.attachEvent("onpropertychange",np)):n==="focusout"&&tp()}function lv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return rl(Ko)}function cv(n,r){if(n==="click")return rl(r)}function uv(n,r){if(n==="input"||n==="change")return rl(r)}function dv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Si=typeof Object.is=="function"?Object.is:dv;function $o(n,r){if(Si(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),u=Object.keys(r);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var p=l[u];if(!h.call(r,p)||!Si(n[p],r[p]))return!1}return!0}function ip(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rp(n,r){var l=ip(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=r&&u>=r)return{node:l,offset:r-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ip(l)}}function sp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?sp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function op(){for(var n=window,r=xt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=xt(n.document)}return r}function au(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function hv(n){var r=op(),l=n.focusedElem,u=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&sp(l.ownerDocument.documentElement,l)){if(u!==null&&au(l)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=rp(l,v);var A=rp(l,u);p&&A&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(r),n.extend(A.node,A.offset)):(r.setEnd(A.node,A.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var fv=d&&"documentMode"in document&&11>=document.documentMode,Os=null,lu=null,Zo=null,cu=!1;function ap(n,r,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;cu||Os==null||Os!==xt(u)||(u=Os,"selectionStart"in u&&au(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Zo&&$o(Zo,u)||(Zo=u,u=ll(lu,"onSelect"),0<u.length&&(r=new Qc("onSelect","select",null,r,l),n.push({event:r,listeners:u}),r.target=Os)))}function sl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var ks={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},uu={},lp={};d&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function ol(n){if(uu[n])return uu[n];if(!ks[n])return n;var r=ks[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in lp)return uu[n]=r[l];return n}var cp=ol("animationend"),up=ol("animationiteration"),dp=ol("animationstart"),hp=ol("transitionend"),fp=new Map,pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(n,r){fp.set(n,r),a(r,[n])}for(var du=0;du<pp.length;du++){var hu=pp[du],pv=hu.toLowerCase(),mv=hu[0].toUpperCase()+hu.slice(1);Nr(pv,"on"+mv)}Nr(cp,"onAnimationEnd"),Nr(up,"onAnimationIteration"),Nr(dp,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(hp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function mp(n,r,l){var u=n.type||"unknown-event";n.currentTarget=l,Ds(u,r,void 0,n),n.currentTarget=null}function gp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],p=u.event;u=u.listeners;e:{var v=void 0;if(r)for(var A=u.length-1;0<=A;A--){var U=u[A],z=U.instance,le=U.currentTarget;if(U=U.listener,z!==v&&p.isPropagationStopped())break e;mp(p,U,le),v=z}else for(A=0;A<u.length;A++){if(U=u[A],z=U.instance,le=U.currentTarget,U=U.listener,z!==v&&p.isPropagationStopped())break e;mp(p,U,le),v=z}}}if(ai)throw n=rs,ai=!1,rs=null,n}function Xt(n,r){var l=r[yu];l===void 0&&(l=r[yu]=new Set);var u=n+"__bubble";l.has(u)||(_p(r,n,2,!1),l.add(u))}function fu(n,r,l){var u=0;r&&(u|=4),_p(l,n,u,r)}var al="_reactListening"+Math.random().toString(36).slice(2);function Qo(n){if(!n[al]){n[al]=!0,i.forEach(function(l){l!=="selectionchange"&&(gv.has(l)||fu(l,!1,n),fu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[al]||(r[al]=!0,fu("selectionchange",!1,r))}}function _p(n,r,l,u){switch(zf(r)){case 1:var p=P0;break;case 4:p=L0;break;default:p=$c}l=p.bind(null,r,l,n),p=void 0,!Ns||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function pu(n,r,l,u,p){var v=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var U=u.stateNode.containerInfo;if(U===p||U.nodeType===8&&U.parentNode===p)break;if(A===4)for(A=u.return;A!==null;){var z=A.tag;if((z===3||z===4)&&(z=A.stateNode.containerInfo,z===p||z.nodeType===8&&z.parentNode===p))return;A=A.return}for(;U!==null;){if(A=os(U),A===null)return;if(z=A.tag,z===5||z===6){u=v=A;continue e}U=U.parentNode}}u=u.return}oi(function(){var le=v,ve=H(l),xe=[];e:{var _e=fp.get(n);if(_e!==void 0){var Ie=Qc,Ve=n;switch(n){case"keypress":if(tl(l)===0)break e;case"keydown":case"keyup":Ie=X0;break;case"focusin":Ve="focus",Ie=nu;break;case"focusout":Ve="blur",Ie=nu;break;case"beforeblur":case"afterblur":Ie=nu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=I0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=K0;break;case cp:case up:case dp:Ie=O0;break;case hp:Ie=Z0;break;case"scroll":Ie=N0;break;case"wheel":Ie=Q0;break;case"copy":case"cut":case"paste":Ie=B0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=jf}var Xe=(r&4)!==0,sn=!Xe&&n==="scroll",ee=Xe?_e!==null?_e+"Capture":null:_e;Xe=[];for(var W=le,ie;W!==null;){ie=W;var Ee=ie.stateNode;if(ie.tag===5&&Ee!==null&&(ie=Ee,ee!==null&&(Ee=Pn(W,ee),Ee!=null&&Xe.push(ea(W,Ee,ie)))),sn)break;W=W.return}0<Xe.length&&(_e=new Ie(_e,Ve,null,l,ve),xe.push({event:_e,listeners:Xe}))}}if((r&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",_e&&l!==ht&&(Ve=l.relatedTarget||l.fromElement)&&(os(Ve)||Ve[rr]))break e;if((Ie||_e)&&(_e=ve.window===ve?ve:(_e=ve.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ie?(Ve=l.relatedTarget||l.toElement,Ie=le,Ve=Ve?os(Ve):null,Ve!==null&&(sn=Ui(Ve),Ve!==sn||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ie=null,Ve=le),Ie!==Ve)){if(Xe=Gf,Ee="onMouseLeave",ee="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Xe=jf,Ee="onPointerLeave",ee="onPointerEnter",W="pointer"),sn=Ie==null?_e:Vs(Ie),ie=Ve==null?_e:Vs(Ve),_e=new Xe(Ee,W+"leave",Ie,l,ve),_e.target=sn,_e.relatedTarget=ie,Ee=null,os(ve)===le&&(Xe=new Xe(ee,W+"enter",Ve,l,ve),Xe.target=ie,Xe.relatedTarget=sn,Ee=Xe),sn=Ee,Ie&&Ve)t:{for(Xe=Ie,ee=Ve,W=0,ie=Xe;ie;ie=Bs(ie))W++;for(ie=0,Ee=ee;Ee;Ee=Bs(Ee))ie++;for(;0<W-ie;)Xe=Bs(Xe),W--;for(;0<ie-W;)ee=Bs(ee),ie--;for(;W--;){if(Xe===ee||ee!==null&&Xe===ee.alternate)break t;Xe=Bs(Xe),ee=Bs(ee)}Xe=null}else Xe=null;Ie!==null&&vp(xe,_e,Ie,Xe,!1),Ve!==null&&sn!==null&&vp(xe,sn,Ve,Xe,!0)}}e:{if(_e=le?Vs(le):window,Ie=_e.nodeName&&_e.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&_e.type==="file")var $e=ov;else if(Zf(_e))if(Qf)$e=uv;else{$e=lv;var nt=av}else(Ie=_e.nodeName)&&Ie.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&($e=cv);if($e&&($e=$e(n,le))){Jf(xe,$e,l,ve);break e}nt&&nt(n,_e,le),n==="focusout"&&(nt=_e._wrapperState)&&nt.controlled&&_e.type==="number"&&Kt(_e,"number",_e.value)}switch(nt=le?Vs(le):window,n){case"focusin":(Zf(nt)||nt.contentEditable==="true")&&(Os=nt,lu=le,Zo=null);break;case"focusout":Zo=lu=Os=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,ap(xe,l,ve);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":ap(xe,l,ve)}var it;if(ru)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else Fs?Kf(n,l)&&(ct="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(Xf&&l.locale!=="ko"&&(Fs||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Fs&&(it=Vf()):(Lr=ve,Jc="value"in Lr?Lr.value:Lr.textContent,Fs=!0)),nt=ll(le,ct),0<nt.length&&(ct=new Wf(ct,n,null,l,ve),xe.push({event:ct,listeners:nt}),it?ct.data=it:(it=$f(l),it!==null&&(ct.data=it)))),(it=tv?nv(n,l):iv(n,l))&&(le=ll(le,"onBeforeInput"),0<le.length&&(ve=new Wf("onBeforeInput","beforeinput",null,l,ve),xe.push({event:ve,listeners:le}),ve.data=it))}gp(xe,r)})}function ea(n,r,l){return{instance:n,listener:r,currentTarget:l}}function ll(n,r){for(var l=r+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=Pn(n,l),v!=null&&u.unshift(ea(n,v,p)),v=Pn(n,r),v!=null&&u.push(ea(n,v,p))),n=n.return}return u}function Bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function vp(n,r,l,u,p){for(var v=r._reactName,A=[];l!==null&&l!==u;){var U=l,z=U.alternate,le=U.stateNode;if(z!==null&&z===u)break;U.tag===5&&le!==null&&(U=le,p?(z=Pn(l,v),z!=null&&A.unshift(ea(l,z,U))):p||(z=Pn(l,v),z!=null&&A.push(ea(l,z,U)))),l=l.return}A.length!==0&&n.push({event:r,listeners:A})}var _v=/\r\n?/g,vv=/\u0000|\uFFFD/g;function xp(n){return(typeof n=="string"?n:""+n).replace(_v,`
`).replace(vv,"")}function cl(n,r,l){if(r=xp(r),xp(n)!==r&&l)throw Error(t(425))}function ul(){}var mu=null,gu=null;function _u(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,xv=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,yv=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(n){return yp.resolve(null).then(n).catch(Sv)}:vu;function Sv(n){setTimeout(function(){throw n})}function xu(n,r){var l=r,u=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(u===0){n.removeChild(p),Wo(r);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=p}while(l);Wo(r)}function Dr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Sp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var zs=Math.random().toString(36).slice(2),Fi="__reactFiber$"+zs,ta="__reactProps$"+zs,rr="__reactContainer$"+zs,yu="__reactEvents$"+zs,Mv="__reactListeners$"+zs,Ev="__reactHandles$"+zs;function os(n){var r=n[Fi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[rr]||l[Fi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Sp(n);n!==null;){if(l=n[Fi])return l;n=Sp(n)}return r}n=l,l=n.parentNode}return null}function na(n){return n=n[Fi]||n[rr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function dl(n){return n[ta]||null}var Su=[],Hs=-1;function Ir(n){return{current:n}}function Yt(n){0>Hs||(n.current=Su[Hs],Su[Hs]=null,Hs--)}function Wt(n,r){Hs++,Su[Hs]=n.current,n.current=r}var Ur={},Tn=Ir(Ur),Vn=Ir(!1),as=Ur;function Gs(n,r){var l=n.type.contextTypes;if(!l)return Ur;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Hn(n){return n=n.childContextTypes,n!=null}function hl(){Yt(Vn),Yt(Tn)}function Mp(n,r,l){if(Tn.current!==Ur)throw Error(t(168));Wt(Tn,r),Wt(Vn,l)}function Ep(n,r,l){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,me(n)||"Unknown",p));return ue({},l,u)}function fl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ur,as=Tn.current,Wt(Tn,n),Wt(Vn,Vn.current),!0}function Tp(n,r,l){var u=n.stateNode;if(!u)throw Error(t(169));l?(n=Ep(n,r,as),u.__reactInternalMemoizedMergedChildContext=n,Yt(Vn),Yt(Tn),Wt(Tn,n)):Yt(Vn),Wt(Vn,l)}var sr=null,pl=!1,Mu=!1;function wp(n){sr===null?sr=[n]:sr.push(n)}function Tv(n){pl=!0,wp(n)}function Fr(){if(!Mu&&sr!==null){Mu=!0;var n=0,r=lt;try{var l=sr;for(lt=1;n<l.length;n++){var u=l[n];do u=u(!0);while(u!==null)}sr=null,pl=!1}catch(p){throw sr!==null&&(sr=sr.slice(n+1)),qa(ce,Fr),p}finally{lt=r,Mu=!1}}return null}var Ws=[],js=0,ml=null,gl=0,ci=[],ui=0,ls=null,or=1,ar="";function cs(n,r){Ws[js++]=gl,Ws[js++]=ml,ml=n,gl=r}function Ap(n,r,l){ci[ui++]=or,ci[ui++]=ar,ci[ui++]=ls,ls=n;var u=or;n=ar;var p=32-tt(u)-1;u&=~(1<<p),l+=1;var v=32-tt(r)+p;if(30<v){var A=p-p%5;v=(u&(1<<A)-1).toString(32),u>>=A,p-=A,or=1<<32-tt(r)+p|l<<p|u,ar=v+n}else or=1<<v|l<<p|u,ar=n}function Eu(n){n.return!==null&&(cs(n,1),Ap(n,1,0))}function Tu(n){for(;n===ml;)ml=Ws[--js],Ws[js]=null,gl=Ws[--js],Ws[js]=null;for(;n===ls;)ls=ci[--ui],ci[ui]=null,ar=ci[--ui],ci[ui]=null,or=ci[--ui],ci[ui]=null}var Zn=null,Jn=null,$t=!1,Mi=null;function bp(n,r){var l=pi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Rp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Zn=n,Jn=Dr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Zn=n,Jn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=ls!==null?{id:or,overflow:ar}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=pi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Zn=n,Jn=null,!0):!1;default:return!1}}function wu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Au(n){if($t){var r=Jn;if(r){var l=r;if(!Rp(n,r)){if(wu(n))throw Error(t(418));r=Dr(l.nextSibling);var u=Zn;r&&Rp(n,r)?bp(u,l):(n.flags=n.flags&-4097|2,$t=!1,Zn=n)}}else{if(wu(n))throw Error(t(418));n.flags=n.flags&-4097|2,$t=!1,Zn=n}}}function Cp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zn=n}function _l(n){if(n!==Zn)return!1;if(!$t)return Cp(n),$t=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!_u(n.type,n.memoizedProps)),r&&(r=Jn)){if(wu(n))throw Pp(),Error(t(418));for(;r;)bp(n,r),r=Dr(r.nextSibling)}if(Cp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Jn=Dr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Jn=null}}else Jn=Zn?Dr(n.stateNode.nextSibling):null;return!0}function Pp(){for(var n=Jn;n;)n=Dr(n.nextSibling)}function Xs(){Jn=Zn=null,$t=!1}function bu(n){Mi===null?Mi=[n]:Mi.push(n)}var wv=C.ReactCurrentBatchConfig;function ia(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(A){var U=p.refs;A===null?delete U[v]:U[v]=A},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function vl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Lp(n){var r=n._init;return r(n._payload)}function Np(n){function r(ee,W){if(n){var ie=ee.deletions;ie===null?(ee.deletions=[W],ee.flags|=16):ie.push(W)}}function l(ee,W){if(!n)return null;for(;W!==null;)r(ee,W),W=W.sibling;return null}function u(ee,W){for(ee=new Map;W!==null;)W.key!==null?ee.set(W.key,W):ee.set(W.index,W),W=W.sibling;return ee}function p(ee,W){return ee=Wr(ee,W),ee.index=0,ee.sibling=null,ee}function v(ee,W,ie){return ee.index=ie,n?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<W?(ee.flags|=2,W):ie):(ee.flags|=2,W)):(ee.flags|=1048576,W)}function A(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function U(ee,W,ie,Ee){return W===null||W.tag!==6?(W=vd(ie,ee.mode,Ee),W.return=ee,W):(W=p(W,ie),W.return=ee,W)}function z(ee,W,ie,Ee){var $e=ie.type;return $e===O?ve(ee,W,ie.props.children,Ee,ie.key):W!==null&&(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===J&&Lp($e)===W.type)?(Ee=p(W,ie.props),Ee.ref=ia(ee,W,ie),Ee.return=ee,Ee):(Ee=Hl(ie.type,ie.key,ie.props,null,ee.mode,Ee),Ee.ref=ia(ee,W,ie),Ee.return=ee,Ee)}function le(ee,W,ie,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=xd(ie,ee.mode,Ee),W.return=ee,W):(W=p(W,ie.children||[]),W.return=ee,W)}function ve(ee,W,ie,Ee,$e){return W===null||W.tag!==7?(W=_s(ie,ee.mode,Ee,$e),W.return=ee,W):(W=p(W,ie),W.return=ee,W)}function xe(ee,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number")return W=vd(""+W,ee.mode,ie),W.return=ee,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case D:return ie=Hl(W.type,W.key,W.props,null,ee.mode,ie),ie.ref=ia(ee,null,W),ie.return=ee,ie;case I:return W=xd(W,ee.mode,ie),W.return=ee,W;case J:var Ee=W._init;return xe(ee,Ee(W._payload),ie)}if(Et(W)||ae(W))return W=_s(W,ee.mode,ie,null),W.return=ee,W;vl(ee,W)}return null}function _e(ee,W,ie,Ee){var $e=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return $e!==null?null:U(ee,W,""+ie,Ee);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case D:return ie.key===$e?z(ee,W,ie,Ee):null;case I:return ie.key===$e?le(ee,W,ie,Ee):null;case J:return $e=ie._init,_e(ee,W,$e(ie._payload),Ee)}if(Et(ie)||ae(ie))return $e!==null?null:ve(ee,W,ie,Ee,null);vl(ee,ie)}return null}function Ie(ee,W,ie,Ee,$e){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return ee=ee.get(ie)||null,U(W,ee,""+Ee,$e);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case D:return ee=ee.get(Ee.key===null?ie:Ee.key)||null,z(W,ee,Ee,$e);case I:return ee=ee.get(Ee.key===null?ie:Ee.key)||null,le(W,ee,Ee,$e);case J:var nt=Ee._init;return Ie(ee,W,ie,nt(Ee._payload),$e)}if(Et(Ee)||ae(Ee))return ee=ee.get(ie)||null,ve(W,ee,Ee,$e,null);vl(W,Ee)}return null}function Ve(ee,W,ie,Ee){for(var $e=null,nt=null,it=W,ct=W=0,vn=null;it!==null&&ct<ie.length;ct++){it.index>ct?(vn=it,it=null):vn=it.sibling;var Dt=_e(ee,it,ie[ct],Ee);if(Dt===null){it===null&&(it=vn);break}n&&it&&Dt.alternate===null&&r(ee,it),W=v(Dt,W,ct),nt===null?$e=Dt:nt.sibling=Dt,nt=Dt,it=vn}if(ct===ie.length)return l(ee,it),$t&&cs(ee,ct),$e;if(it===null){for(;ct<ie.length;ct++)it=xe(ee,ie[ct],Ee),it!==null&&(W=v(it,W,ct),nt===null?$e=it:nt.sibling=it,nt=it);return $t&&cs(ee,ct),$e}for(it=u(ee,it);ct<ie.length;ct++)vn=Ie(it,ee,ct,ie[ct],Ee),vn!==null&&(n&&vn.alternate!==null&&it.delete(vn.key===null?ct:vn.key),W=v(vn,W,ct),nt===null?$e=vn:nt.sibling=vn,nt=vn);return n&&it.forEach(function(jr){return r(ee,jr)}),$t&&cs(ee,ct),$e}function Xe(ee,W,ie,Ee){var $e=ae(ie);if(typeof $e!="function")throw Error(t(150));if(ie=$e.call(ie),ie==null)throw Error(t(151));for(var nt=$e=null,it=W,ct=W=0,vn=null,Dt=ie.next();it!==null&&!Dt.done;ct++,Dt=ie.next()){it.index>ct?(vn=it,it=null):vn=it.sibling;var jr=_e(ee,it,Dt.value,Ee);if(jr===null){it===null&&(it=vn);break}n&&it&&jr.alternate===null&&r(ee,it),W=v(jr,W,ct),nt===null?$e=jr:nt.sibling=jr,nt=jr,it=vn}if(Dt.done)return l(ee,it),$t&&cs(ee,ct),$e;if(it===null){for(;!Dt.done;ct++,Dt=ie.next())Dt=xe(ee,Dt.value,Ee),Dt!==null&&(W=v(Dt,W,ct),nt===null?$e=Dt:nt.sibling=Dt,nt=Dt);return $t&&cs(ee,ct),$e}for(it=u(ee,it);!Dt.done;ct++,Dt=ie.next())Dt=Ie(it,ee,ct,Dt.value,Ee),Dt!==null&&(n&&Dt.alternate!==null&&it.delete(Dt.key===null?ct:Dt.key),W=v(Dt,W,ct),nt===null?$e=Dt:nt.sibling=Dt,nt=Dt);return n&&it.forEach(function(rx){return r(ee,rx)}),$t&&cs(ee,ct),$e}function sn(ee,W,ie,Ee){if(typeof ie=="object"&&ie!==null&&ie.type===O&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case D:e:{for(var $e=ie.key,nt=W;nt!==null;){if(nt.key===$e){if($e=ie.type,$e===O){if(nt.tag===7){l(ee,nt.sibling),W=p(nt,ie.props.children),W.return=ee,ee=W;break e}}else if(nt.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===J&&Lp($e)===nt.type){l(ee,nt.sibling),W=p(nt,ie.props),W.ref=ia(ee,nt,ie),W.return=ee,ee=W;break e}l(ee,nt);break}else r(ee,nt);nt=nt.sibling}ie.type===O?(W=_s(ie.props.children,ee.mode,Ee,ie.key),W.return=ee,ee=W):(Ee=Hl(ie.type,ie.key,ie.props,null,ee.mode,Ee),Ee.ref=ia(ee,W,ie),Ee.return=ee,ee=Ee)}return A(ee);case I:e:{for(nt=ie.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){l(ee,W.sibling),W=p(W,ie.children||[]),W.return=ee,ee=W;break e}else{l(ee,W);break}else r(ee,W);W=W.sibling}W=xd(ie,ee.mode,Ee),W.return=ee,ee=W}return A(ee);case J:return nt=ie._init,sn(ee,W,nt(ie._payload),Ee)}if(Et(ie))return Ve(ee,W,ie,Ee);if(ae(ie))return Xe(ee,W,ie,Ee);vl(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,W!==null&&W.tag===6?(l(ee,W.sibling),W=p(W,ie),W.return=ee,ee=W):(l(ee,W),W=vd(ie,ee.mode,Ee),W.return=ee,ee=W),A(ee)):l(ee,W)}return sn}var Ys=Np(!0),Dp=Np(!1),xl=Ir(null),yl=null,qs=null,Ru=null;function Cu(){Ru=qs=yl=null}function Pu(n){var r=xl.current;Yt(xl),n._currentValue=r}function Lu(n,r,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===l)break;n=n.return}}function Ks(n,r){yl=n,Ru=qs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Gn=!0),n.firstContext=null)}function di(n){var r=n._currentValue;if(Ru!==n)if(n={context:n,memoizedValue:r,next:null},qs===null){if(yl===null)throw Error(t(308));qs=n,yl.dependencies={lanes:0,firstContext:n}}else qs=qs.next=n;return r}var us=null;function Nu(n){us===null?us=[n]:us.push(n)}function Ip(n,r,l,u){var p=r.interleaved;return p===null?(l.next=l,Nu(r)):(l.next=p.next,p.next=l),r.interleaved=l,lr(n,u)}function lr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Or=!1;function Du(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Up(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function cr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function kr(n,r,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Nt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,lr(n,l)}return p=u.interleaved,p===null?(r.next=r,Nu(u)):(r.next=p.next,p.next=r),u.interleaved=r,lr(n,l)}function Sl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,It(n,l)}}function Fp(n,r){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=A:v=v.next=A,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Ml(n,r,l,u){var p=n.updateQueue;Or=!1;var v=p.firstBaseUpdate,A=p.lastBaseUpdate,U=p.shared.pending;if(U!==null){p.shared.pending=null;var z=U,le=z.next;z.next=null,A===null?v=le:A.next=le,A=z;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,U=ve.lastBaseUpdate,U!==A&&(U===null?ve.firstBaseUpdate=le:U.next=le,ve.lastBaseUpdate=z))}if(v!==null){var xe=p.baseState;A=0,ve=le=z=null,U=v;do{var _e=U.lane,Ie=U.eventTime;if((u&_e)===_e){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ve=n,Xe=U;switch(_e=r,Ie=l,Xe.tag){case 1:if(Ve=Xe.payload,typeof Ve=="function"){xe=Ve.call(Ie,xe,_e);break e}xe=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Xe.payload,_e=typeof Ve=="function"?Ve.call(Ie,xe,_e):Ve,_e==null)break e;xe=ue({},xe,_e);break e;case 2:Or=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,_e=p.effects,_e===null?p.effects=[U]:_e.push(U))}else Ie={eventTime:Ie,lane:_e,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ve===null?(le=ve=Ie,z=xe):ve=ve.next=Ie,A|=_e;if(U=U.next,U===null){if(U=p.shared.pending,U===null)break;_e=U,U=_e.next,_e.next=null,p.lastBaseUpdate=_e,p.shared.pending=null}}while(!0);if(ve===null&&(z=xe),p.baseState=z,p.firstBaseUpdate=le,p.lastBaseUpdate=ve,r=p.shared.interleaved,r!==null){p=r;do A|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);fs|=A,n.lanes=A,n.memoizedState=xe}}function Op(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=l,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var ra={},Oi=Ir(ra),sa=Ir(ra),oa=Ir(ra);function ds(n){if(n===ra)throw Error(t(174));return n}function Iu(n,r){switch(Wt(oa,r),Wt(sa,n),Wt(Oi,ra),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ge(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ge(r,n)}Yt(Oi),Wt(Oi,r)}function $s(){Yt(Oi),Yt(sa),Yt(oa)}function kp(n){ds(oa.current);var r=ds(Oi.current),l=ge(r,n.type);r!==l&&(Wt(sa,n),Wt(Oi,l))}function Uu(n){sa.current===n&&(Yt(Oi),Yt(sa))}var Zt=Ir(0);function El(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Fu=[];function Ou(){for(var n=0;n<Fu.length;n++)Fu[n]._workInProgressVersionPrimary=null;Fu.length=0}var Tl=C.ReactCurrentDispatcher,ku=C.ReactCurrentBatchConfig,hs=0,Jt=null,cn=null,gn=null,wl=!1,aa=!1,la=0,Av=0;function wn(){throw Error(t(321))}function Bu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Si(n[l],r[l]))return!1;return!0}function zu(n,r,l,u,p,v){if(hs=v,Jt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Tl.current=n===null||n.memoizedState===null?Pv:Lv,n=l(u,p),aa){v=0;do{if(aa=!1,la=0,25<=v)throw Error(t(301));v+=1,gn=cn=null,r.updateQueue=null,Tl.current=Nv,n=l(u,p)}while(aa)}if(Tl.current=Rl,r=cn!==null&&cn.next!==null,hs=0,gn=cn=Jt=null,wl=!1,r)throw Error(t(300));return n}function Vu(){var n=la!==0;return la=0,n}function ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Jt.memoizedState=gn=n:gn=gn.next=n,gn}function hi(){if(cn===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var r=gn===null?Jt.memoizedState:gn.next;if(r!==null)gn=r,cn=n;else{if(n===null)throw Error(t(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},gn===null?Jt.memoizedState=gn=n:gn=gn.next=n}return gn}function ca(n,r){return typeof r=="function"?r(n):r}function Hu(n){var r=hi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=cn,p=u.baseQueue,v=l.pending;if(v!==null){if(p!==null){var A=p.next;p.next=v.next,v.next=A}u.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,u=u.baseState;var U=A=null,z=null,le=v;do{var ve=le.lane;if((hs&ve)===ve)z!==null&&(z=z.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),u=le.hasEagerState?le.eagerState:n(u,le.action);else{var xe={lane:ve,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};z===null?(U=z=xe,A=u):z=z.next=xe,Jt.lanes|=ve,fs|=ve}le=le.next}while(le!==null&&le!==v);z===null?A=u:z.next=U,Si(u,r.memoizedState)||(Gn=!0),r.memoizedState=u,r.baseState=A,r.baseQueue=z,l.lastRenderedState=u}if(n=l.interleaved,n!==null){p=n;do v=p.lane,Jt.lanes|=v,fs|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Gu(n){var r=hi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do v=n(v,A.action),A=A.next;while(A!==p);Si(v,r.memoizedState)||(Gn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,u]}function Bp(){}function zp(n,r){var l=Jt,u=hi(),p=r(),v=!Si(u.memoizedState,p);if(v&&(u.memoizedState=p,Gn=!0),u=u.queue,Wu(Gp.bind(null,l,u,n),[n]),u.getSnapshot!==r||v||gn!==null&&gn.memoizedState.tag&1){if(l.flags|=2048,ua(9,Hp.bind(null,l,u,p,r),void 0,null),_n===null)throw Error(t(349));(hs&30)!==0||Vp(l,r,p)}return p}function Vp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Jt.updateQueue,r===null?(r={lastEffect:null,stores:null},Jt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Hp(n,r,l,u){r.value=l,r.getSnapshot=u,Wp(r)&&jp(n)}function Gp(n,r,l){return l(function(){Wp(r)&&jp(n)})}function Wp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Si(n,l)}catch{return!0}}function jp(n){var r=lr(n,1);r!==null&&Ai(r,n,1,-1)}function Xp(n){var r=ki();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:n},r.queue=n,n=n.dispatch=Cv.bind(null,Jt,n),[r.memoizedState,n]}function ua(n,r,l,u){return n={tag:n,create:r,destroy:l,deps:u,next:null},r=Jt.updateQueue,r===null?(r={lastEffect:null,stores:null},Jt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,r.lastEffect=n)),n}function Yp(){return hi().memoizedState}function Al(n,r,l,u){var p=ki();Jt.flags|=n,p.memoizedState=ua(1|r,l,void 0,u===void 0?null:u)}function bl(n,r,l,u){var p=hi();u=u===void 0?null:u;var v=void 0;if(cn!==null){var A=cn.memoizedState;if(v=A.destroy,u!==null&&Bu(u,A.deps)){p.memoizedState=ua(r,l,v,u);return}}Jt.flags|=n,p.memoizedState=ua(1|r,l,v,u)}function qp(n,r){return Al(8390656,8,n,r)}function Wu(n,r){return bl(2048,8,n,r)}function Kp(n,r){return bl(4,2,n,r)}function $p(n,r){return bl(4,4,n,r)}function Zp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Jp(n,r,l){return l=l!=null?l.concat([n]):null,bl(4,4,Zp.bind(null,r,n),l)}function ju(){}function Qp(n,r){var l=hi();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Bu(r,u[1])?u[0]:(l.memoizedState=[n,r],n)}function em(n,r){var l=hi();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Bu(r,u[1])?u[0]:(n=n(),l.memoizedState=[n,r],n)}function tm(n,r,l){return(hs&21)===0?(n.baseState&&(n.baseState=!1,Gn=!0),n.memoizedState=l):(Si(l,r)||(l=Bn(),Jt.lanes|=l,fs|=l,n.baseState=!0),r)}function bv(n,r){var l=lt;lt=l!==0&&4>l?l:4,n(!0);var u=ku.transition;ku.transition={};try{n(!1),r()}finally{lt=l,ku.transition=u}}function nm(){return hi().memoizedState}function Rv(n,r,l){var u=Hr(n);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},im(n))rm(r,l);else if(l=Ip(n,r,l,u),l!==null){var p=Dn();Ai(l,n,u,p),sm(l,r,u)}}function Cv(n,r,l){var u=Hr(n),p={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(im(n))rm(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var A=r.lastRenderedState,U=v(A,l);if(p.hasEagerState=!0,p.eagerState=U,Si(U,A)){var z=r.interleaved;z===null?(p.next=p,Nu(r)):(p.next=z.next,z.next=p),r.interleaved=p;return}}catch{}finally{}l=Ip(n,r,p,u),l!==null&&(p=Dn(),Ai(l,n,u,p),sm(l,r,u))}}function im(n){var r=n.alternate;return n===Jt||r!==null&&r===Jt}function rm(n,r){aa=wl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function sm(n,r,l){if((l&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,It(n,l)}}var Rl={readContext:di,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},Pv={readContext:di,useCallback:function(n,r){return ki().memoizedState=[n,r===void 0?null:r],n},useContext:di,useEffect:qp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Al(4194308,4,Zp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Al(4194308,4,n,r)},useInsertionEffect:function(n,r){return Al(4,2,n,r)},useMemo:function(n,r){var l=ki();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var u=ki();return r=l!==void 0?l(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=Rv.bind(null,Jt,n),[u.memoizedState,n]},useRef:function(n){var r=ki();return n={current:n},r.memoizedState=n},useState:Xp,useDebugValue:ju,useDeferredValue:function(n){return ki().memoizedState=n},useTransition:function(){var n=Xp(!1),r=n[0];return n=bv.bind(null,n[1]),ki().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var u=Jt,p=ki();if($t){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),_n===null)throw Error(t(349));(hs&30)!==0||Vp(u,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,qp(Gp.bind(null,u,v,n),[n]),u.flags|=2048,ua(9,Hp.bind(null,u,v,l,r),void 0,null),l},useId:function(){var n=ki(),r=_n.identifierPrefix;if($t){var l=ar,u=or;l=(u&~(1<<32-tt(u)-1)).toString(32)+l,r=":"+r+"R"+l,l=la++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Av++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Lv={readContext:di,useCallback:Qp,useContext:di,useEffect:Wu,useImperativeHandle:Jp,useInsertionEffect:Kp,useLayoutEffect:$p,useMemo:em,useReducer:Hu,useRef:Yp,useState:function(){return Hu(ca)},useDebugValue:ju,useDeferredValue:function(n){var r=hi();return tm(r,cn.memoizedState,n)},useTransition:function(){var n=Hu(ca)[0],r=hi().memoizedState;return[n,r]},useMutableSource:Bp,useSyncExternalStore:zp,useId:nm,unstable_isNewReconciler:!1},Nv={readContext:di,useCallback:Qp,useContext:di,useEffect:Wu,useImperativeHandle:Jp,useInsertionEffect:Kp,useLayoutEffect:$p,useMemo:em,useReducer:Gu,useRef:Yp,useState:function(){return Gu(ca)},useDebugValue:ju,useDeferredValue:function(n){var r=hi();return cn===null?r.memoizedState=n:tm(r,cn.memoizedState,n)},useTransition:function(){var n=Gu(ca)[0],r=hi().memoizedState;return[n,r]},useMutableSource:Bp,useSyncExternalStore:zp,useId:nm,unstable_isNewReconciler:!1};function Ei(n,r){if(n&&n.defaultProps){r=ue({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Xu(n,r,l,u){r=n.memoizedState,l=l(u,r),l=l==null?r:ue({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Cl={isMounted:function(n){return(n=n._reactInternals)?Ui(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var u=Dn(),p=Hr(n),v=cr(u,p);v.payload=r,l!=null&&(v.callback=l),r=kr(n,v,p),r!==null&&(Ai(r,n,p,u),Sl(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var u=Dn(),p=Hr(n),v=cr(u,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=kr(n,v,p),r!==null&&(Ai(r,n,p,u),Sl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Dn(),u=Hr(n),p=cr(l,u);p.tag=2,r!=null&&(p.callback=r),r=kr(n,p,u),r!==null&&(Ai(r,n,u,l),Sl(r,n,u))}};function om(n,r,l,u,p,v,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,A):r.prototype&&r.prototype.isPureReactComponent?!$o(l,u)||!$o(p,v):!0}function am(n,r,l){var u=!1,p=Ur,v=r.contextType;return typeof v=="object"&&v!==null?v=di(v):(p=Hn(r)?as:Tn.current,u=r.contextTypes,v=(u=u!=null)?Gs(n,p):Ur),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Cl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function lm(n,r,l,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,u),r.state!==n&&Cl.enqueueReplaceState(r,r.state,null)}function Yu(n,r,l,u){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Du(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=di(v):(v=Hn(r)?as:Tn.current,p.context=Gs(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Xu(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Cl.enqueueReplaceState(p,p.state,null),Ml(n,l,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Zs(n,r){try{var l="",u=r;do l+=Je(u),u=u.return;while(u);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function qu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Ku(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Dv=typeof WeakMap=="function"?WeakMap:Map;function cm(n,r,l){l=cr(-1,l),l.tag=3,l.payload={element:null};var u=r.value;return l.callback=function(){Fl||(Fl=!0,ud=u),Ku(n,r)},l}function um(n,r,l){l=cr(-1,l),l.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;l.payload=function(){return u(p)},l.callback=function(){Ku(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Ku(n,r),typeof u!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})}),l}function dm(n,r,l){var u=n.pingCache;if(u===null){u=n.pingCache=new Dv;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(l)||(p.add(l),n=Yv.bind(null,n,r,l),r.then(n,n))}function hm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function fm(n,r,l,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=cr(-1,1),r.tag=2,kr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Iv=C.ReactCurrentOwner,Gn=!1;function Nn(n,r,l,u){r.child=n===null?Dp(r,null,l,u):Ys(r,n.child,l,u)}function pm(n,r,l,u,p){l=l.render;var v=r.ref;return Ks(r,p),u=zu(n,r,l,u,v,p),l=Vu(),n!==null&&!Gn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,ur(n,r,p)):($t&&l&&Eu(r),r.flags|=1,Nn(n,r,u,p),r.child)}function mm(n,r,l,u,p){if(n===null){var v=l.type;return typeof v=="function"&&!_d(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,gm(n,r,v,u,p)):(n=Hl(l.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&p)===0){var A=v.memoizedProps;if(l=l.compare,l=l!==null?l:$o,l(A,u)&&n.ref===r.ref)return ur(n,r,p)}return r.flags|=1,n=Wr(v,u),n.ref=r.ref,n.return=r,r.child=n}function gm(n,r,l,u,p){if(n!==null){var v=n.memoizedProps;if($o(v,u)&&n.ref===r.ref)if(Gn=!1,r.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Gn=!0);else return r.lanes=n.lanes,ur(n,r,p)}return $u(n,r,l,u,p)}function _m(n,r,l){var u=r.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(Qs,Qn),Qn|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Wt(Qs,Qn),Qn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:l,Wt(Qs,Qn),Qn|=u}else v!==null?(u=v.baseLanes|l,r.memoizedState=null):u=l,Wt(Qs,Qn),Qn|=u;return Nn(n,r,p,l),r.child}function vm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function $u(n,r,l,u,p){var v=Hn(l)?as:Tn.current;return v=Gs(r,v),Ks(r,p),l=zu(n,r,l,u,v,p),u=Vu(),n!==null&&!Gn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,ur(n,r,p)):($t&&u&&Eu(r),r.flags|=1,Nn(n,r,l,p),r.child)}function xm(n,r,l,u,p){if(Hn(l)){var v=!0;fl(r)}else v=!1;if(Ks(r,p),r.stateNode===null)Ll(n,r),am(r,l,u),Yu(r,l,u,p),u=!0;else if(n===null){var A=r.stateNode,U=r.memoizedProps;A.props=U;var z=A.context,le=l.contextType;typeof le=="object"&&le!==null?le=di(le):(le=Hn(l)?as:Tn.current,le=Gs(r,le));var ve=l.getDerivedStateFromProps,xe=typeof ve=="function"||typeof A.getSnapshotBeforeUpdate=="function";xe||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(U!==u||z!==le)&&lm(r,A,u,le),Or=!1;var _e=r.memoizedState;A.state=_e,Ml(r,u,A,p),z=r.memoizedState,U!==u||_e!==z||Vn.current||Or?(typeof ve=="function"&&(Xu(r,l,ve,u),z=r.memoizedState),(U=Or||om(r,l,U,u,_e,z,le))?(xe||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(r.flags|=4194308)):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=z),A.props=u,A.state=z,A.context=le,u=U):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{A=r.stateNode,Up(n,r),U=r.memoizedProps,le=r.type===r.elementType?U:Ei(r.type,U),A.props=le,xe=r.pendingProps,_e=A.context,z=l.contextType,typeof z=="object"&&z!==null?z=di(z):(z=Hn(l)?as:Tn.current,z=Gs(r,z));var Ie=l.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(U!==xe||_e!==z)&&lm(r,A,u,z),Or=!1,_e=r.memoizedState,A.state=_e,Ml(r,u,A,p);var Ve=r.memoizedState;U!==xe||_e!==Ve||Vn.current||Or?(typeof Ie=="function"&&(Xu(r,l,Ie,u),Ve=r.memoizedState),(le=Or||om(r,l,le,u,_e,Ve,z)||!1)?(ve||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,Ve,z),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,Ve,z)),typeof A.componentDidUpdate=="function"&&(r.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof A.componentDidUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Ve),A.props=u,A.state=Ve,A.context=z,u=le):(typeof A.componentDidUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),u=!1)}return Zu(n,r,l,u,v,p)}function Zu(n,r,l,u,p,v){vm(n,r);var A=(r.flags&128)!==0;if(!u&&!A)return p&&Tp(r,l,!1),ur(n,r,v);u=r.stateNode,Iv.current=r;var U=A&&typeof l.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&A?(r.child=Ys(r,n.child,null,v),r.child=Ys(r,null,U,v)):Nn(n,r,U,v),r.memoizedState=u.state,p&&Tp(r,l,!0),r.child}function ym(n){var r=n.stateNode;r.pendingContext?Mp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Mp(n,r.context,!1),Iu(n,r.containerInfo)}function Sm(n,r,l,u,p){return Xs(),bu(p),r.flags|=256,Nn(n,r,l,u),r.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function Qu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Mm(n,r,l){var u=r.pendingProps,p=Zt.current,v=!1,A=(r.flags&128)!==0,U;if((U=A)||(U=n!==null&&n.memoizedState===null?!1:(p&2)!==0),U?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Wt(Zt,p&1),n===null)return Au(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(A=u.children,n=u.fallback,v?(u=r.mode,v=r.child,A={mode:"hidden",children:A},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=A):v=Gl(A,u,0,null),n=_s(n,u,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Qu(l),r.memoizedState=Ju,n):ed(r,A));if(p=n.memoizedState,p!==null&&(U=p.dehydrated,U!==null))return Uv(n,r,A,u,U,p,l);if(v){v=u.fallback,A=r.mode,p=n.child,U=p.sibling;var z={mode:"hidden",children:u.children};return(A&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=z,r.deletions=null):(u=Wr(p,z),u.subtreeFlags=p.subtreeFlags&14680064),U!==null?v=Wr(U,v):(v=_s(v,A,l,null),v.flags|=2),v.return=r,u.return=r,u.sibling=v,r.child=u,u=v,v=r.child,A=n.child.memoizedState,A=A===null?Qu(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},v.memoizedState=A,v.childLanes=n.childLanes&~l,r.memoizedState=Ju,u}return v=n.child,n=v.sibling,u=Wr(v,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=l),u.return=r,u.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=u,r.memoizedState=null,u}function ed(n,r){return r=Gl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Pl(n,r,l,u){return u!==null&&bu(u),Ys(r,n.child,null,l),n=ed(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Uv(n,r,l,u,p,v,A){if(l)return r.flags&256?(r.flags&=-257,u=qu(Error(t(422))),Pl(n,r,A,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=u.fallback,p=r.mode,u=Gl({mode:"visible",children:u.children},p,0,null),v=_s(v,p,A,null),v.flags|=2,u.return=r,v.return=r,u.sibling=v,r.child=u,(r.mode&1)!==0&&Ys(r,n.child,null,A),r.child.memoizedState=Qu(A),r.memoizedState=Ju,v);if((r.mode&1)===0)return Pl(n,r,A,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var U=u.dgst;return u=U,v=Error(t(419)),u=qu(v,u,void 0),Pl(n,r,A,u)}if(U=(A&n.childLanes)!==0,Gn||U){if(u=_n,u!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|A))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,lr(n,p),Ai(u,n,p,-1))}return gd(),u=qu(Error(t(421))),Pl(n,r,A,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=qv.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,Jn=Dr(p.nextSibling),Zn=r,$t=!0,Mi=null,n!==null&&(ci[ui++]=or,ci[ui++]=ar,ci[ui++]=ls,or=n.id,ar=n.overflow,ls=r),r=ed(r,u.children),r.flags|=4096,r)}function Em(n,r,l){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Lu(n.return,r,l)}function td(n,r,l,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=l,v.tailMode=p)}function Tm(n,r,l){var u=r.pendingProps,p=u.revealOrder,v=u.tail;if(Nn(n,r,u.children,l),u=Zt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Em(n,l,r);else if(n.tag===19)Em(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Wt(Zt,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&El(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),td(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&El(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}td(r,!0,l,null,v);break;case"together":td(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ll(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function ur(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),fs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Wr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Wr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Fv(n,r,l){switch(r.tag){case 3:ym(r),Xs();break;case 5:kp(r);break;case 1:Hn(r.type)&&fl(r);break;case 4:Iu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;Wt(xl,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Wt(Zt,Zt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Mm(n,r,l):(Wt(Zt,Zt.current&1),n=ur(n,r,l),n!==null?n.sibling:null);Wt(Zt,Zt.current&1);break;case 19:if(u=(l&r.childLanes)!==0,(n.flags&128)!==0){if(u)return Tm(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Wt(Zt,Zt.current),u)break;return null;case 22:case 23:return r.lanes=0,_m(n,r,l)}return ur(n,r,l)}var wm,nd,Am,bm;wm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},nd=function(){},Am=function(n,r,l,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,ds(Oi.current);var v=null;switch(l){case"input":p=Ct(n,p),u=Ct(n,u),v=[];break;case"select":p=ue({},p,{value:void 0}),u=ue({},u,{value:void 0}),v=[];break;case"textarea":p=Ge(n,p),u=Ge(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ul)}Be(l,u);var A;l=null;for(le in p)if(!u.hasOwnProperty(le)&&p.hasOwnProperty(le)&&p[le]!=null)if(le==="style"){var U=p[le];for(A in U)U.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(s.hasOwnProperty(le)?v||(v=[]):(v=v||[]).push(le,null));for(le in u){var z=u[le];if(U=p!=null?p[le]:void 0,u.hasOwnProperty(le)&&z!==U&&(z!=null||U!=null))if(le==="style")if(U){for(A in U)!U.hasOwnProperty(A)||z&&z.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in z)z.hasOwnProperty(A)&&U[A]!==z[A]&&(l||(l={}),l[A]=z[A])}else l||(v||(v=[]),v.push(le,l)),l=z;else le==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(v=v||[]).push(le,z)):le==="children"?typeof z!="string"&&typeof z!="number"||(v=v||[]).push(le,""+z):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(s.hasOwnProperty(le)?(z!=null&&le==="onScroll"&&Xt("scroll",n),v||U===z||(v=[])):(v=v||[]).push(le,z))}l&&(v=v||[]).push("style",l);var le=v;(r.updateQueue=le)&&(r.flags|=4)}},bm=function(n,r,l,u){l!==u&&(r.flags|=4)};function da(n,r){if(!$t)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function An(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=l,r}function Ov(n,r,l){var u=r.pendingProps;switch(Tu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(r),null;case 1:return Hn(r.type)&&hl(),An(r),null;case 3:return u=r.stateNode,$s(),Yt(Vn),Yt(Tn),Ou(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(_l(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Mi!==null&&(fd(Mi),Mi=null))),nd(n,r),An(r),null;case 5:Uu(r);var p=ds(oa.current);if(l=r.type,n!==null&&r.stateNode!=null)Am(n,r,l,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return An(r),null}if(n=ds(Oi.current),_l(r)){u=r.stateNode,l=r.type;var v=r.memoizedProps;switch(u[Fi]=r,u[ta]=v,n=(r.mode&1)!==0,l){case"dialog":Xt("cancel",u),Xt("close",u);break;case"iframe":case"object":case"embed":Xt("load",u);break;case"video":case"audio":for(p=0;p<Jo.length;p++)Xt(Jo[p],u);break;case"source":Xt("error",u);break;case"img":case"image":case"link":Xt("error",u),Xt("load",u);break;case"details":Xt("toggle",u);break;case"input":Ut(u,v),Xt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},Xt("invalid",u);break;case"textarea":N(u,v),Xt("invalid",u)}Be(l,v),p=null;for(var A in v)if(v.hasOwnProperty(A)){var U=v[A];A==="children"?typeof U=="string"?u.textContent!==U&&(v.suppressHydrationWarning!==!0&&cl(u.textContent,U,n),p=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(v.suppressHydrationWarning!==!0&&cl(u.textContent,U,n),p=["children",""+U]):s.hasOwnProperty(A)&&U!=null&&A==="onScroll"&&Xt("scroll",u)}switch(l){case"input":rt(u),V(u,v,!0);break;case"textarea":rt(u),Y(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=ul)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=A.createElement(l,{is:u.is}):(n=A.createElement(l),l==="select"&&(A=n,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):n=A.createElementNS(n,l),n[Fi]=r,n[ta]=u,wm(n,r,!1,!1),r.stateNode=n;e:{switch(A=Le(l,u),l){case"dialog":Xt("cancel",n),Xt("close",n),p=u;break;case"iframe":case"object":case"embed":Xt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Jo.length;p++)Xt(Jo[p],n);p=u;break;case"source":Xt("error",n),p=u;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),p=u;break;case"details":Xt("toggle",n),p=u;break;case"input":Ut(n,u),p=Ct(n,u),Xt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=ue({},u,{value:void 0}),Xt("invalid",n);break;case"textarea":N(n,u),p=Ge(n,u),Xt("invalid",n);break;default:p=u}Be(l,p),U=p;for(v in U)if(U.hasOwnProperty(v)){var z=U[v];v==="style"?Te(n,z):v==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ke(n,z)):v==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&we(n,z):typeof z=="number"&&we(n,""+z):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?z!=null&&v==="onScroll"&&Xt("scroll",n):z!=null&&P(n,v,z,A))}switch(l){case"input":rt(n),V(n,u,!1);break;case"textarea":rt(n),Y(n);break;case"option":u.value!=null&&n.setAttribute("value",""+pe(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?Pt(n,!!u.multiple,v,!1):u.defaultValue!=null&&Pt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ul)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return An(r),null;case 6:if(n&&r.stateNode!=null)bm(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(l=ds(oa.current),ds(Oi.current),_l(r)){if(u=r.stateNode,l=r.memoizedProps,u[Fi]=r,(v=u.nodeValue!==l)&&(n=Zn,n!==null))switch(n.tag){case 3:cl(u.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&cl(u.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Fi]=r,r.stateNode=u}return An(r),null;case 13:if(Yt(Zt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if($t&&Jn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Pp(),Xs(),r.flags|=98560,v=!1;else if(v=_l(r),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Fi]=r}else Xs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;An(r),v=!1}else Mi!==null&&(fd(Mi),Mi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Zt.current&1)!==0?un===0&&(un=3):gd())),r.updateQueue!==null&&(r.flags|=4),An(r),null);case 4:return $s(),nd(n,r),n===null&&Qo(r.stateNode.containerInfo),An(r),null;case 10:return Pu(r.type._context),An(r),null;case 17:return Hn(r.type)&&hl(),An(r),null;case 19:if(Yt(Zt),v=r.memoizedState,v===null)return An(r),null;if(u=(r.flags&128)!==0,A=v.rendering,A===null)if(u)da(v,!1);else{if(un!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(A=El(n),A!==null){for(r.flags|=128,da(v,!1),u=A.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=l,l=r.child;l!==null;)v=l,n=u,v.flags&=14680066,A=v.alternate,A===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=A.childLanes,v.lanes=A.lanes,v.child=A.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=A.memoizedProps,v.memoizedState=A.memoizedState,v.updateQueue=A.updateQueue,v.type=A.type,n=A.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Wt(Zt,Zt.current&1|2),r.child}n=n.sibling}v.tail!==null&&b()>eo&&(r.flags|=128,u=!0,da(v,!1),r.lanes=4194304)}else{if(!u)if(n=El(A),n!==null){if(r.flags|=128,u=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),da(v,!0),v.tail===null&&v.tailMode==="hidden"&&!A.alternate&&!$t)return An(r),null}else 2*b()-v.renderingStartTime>eo&&l!==1073741824&&(r.flags|=128,u=!0,da(v,!1),r.lanes=4194304);v.isBackwards?(A.sibling=r.child,r.child=A):(l=v.last,l!==null?l.sibling=A:r.child=A,v.last=A)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=b(),r.sibling=null,l=Zt.current,Wt(Zt,u?l&1|2:l&1),r):(An(r),null);case 22:case 23:return md(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Qn&1073741824)!==0&&(An(r),r.subtreeFlags&6&&(r.flags|=8192)):An(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function kv(n,r){switch(Tu(r),r.tag){case 1:return Hn(r.type)&&hl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return $s(),Yt(Vn),Yt(Tn),Ou(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Uu(r),null;case 13:if(Yt(Zt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Xs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Yt(Zt),null;case 4:return $s(),null;case 10:return Pu(r.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var Nl=!1,bn=!1,Bv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Js(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){en(n,r,u)}else l.current=null}function id(n,r,l){try{l()}catch(u){en(n,r,u)}}var Rm=!1;function zv(n,r){if(mu=Ja,n=op(),au(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var A=0,U=-1,z=-1,le=0,ve=0,xe=n,_e=null;t:for(;;){for(var Ie;xe!==l||p!==0&&xe.nodeType!==3||(U=A+p),xe!==v||u!==0&&xe.nodeType!==3||(z=A+u),xe.nodeType===3&&(A+=xe.nodeValue.length),(Ie=xe.firstChild)!==null;)_e=xe,xe=Ie;for(;;){if(xe===n)break t;if(_e===l&&++le===p&&(U=A),_e===v&&++ve===u&&(z=A),(Ie=xe.nextSibling)!==null)break;xe=_e,_e=xe.parentNode}xe=Ie}l=U===-1||z===-1?null:{start:U,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(gu={focusedElem:n,selectionRange:l},Ja=!1,Oe=r;Oe!==null;)if(r=Oe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Oe=n;else for(;Oe!==null;){r=Oe;try{var Ve=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Xe=Ve.memoizedProps,sn=Ve.memoizedState,ee=r.stateNode,W=ee.getSnapshotBeforeUpdate(r.elementType===r.type?Xe:Ei(r.type,Xe),sn);ee.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ie=r.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){en(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,Oe=n;break}Oe=r.return}return Ve=Rm,Rm=!1,Ve}function ha(n,r,l){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&id(r,l,v)}p=p.next}while(p!==u)}}function Dl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var u=l.create;l.destroy=u()}l=l.next}while(l!==r)}}function rd(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Cm(n){var r=n.alternate;r!==null&&(n.alternate=null,Cm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Fi],delete r[ta],delete r[yu],delete r[Mv],delete r[Ev])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Pm(n){return n.tag===5||n.tag===3||n.tag===4}function Lm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Pm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function sd(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=ul));else if(u!==4&&(n=n.child,n!==null))for(sd(n,r,l),n=n.sibling;n!==null;)sd(n,r,l),n=n.sibling}function od(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(od(n,r,l),n=n.sibling;n!==null;)od(n,r,l),n=n.sibling}var Mn=null,Ti=!1;function Br(n,r,l){for(l=l.child;l!==null;)Nm(n,r,l),l=l.sibling}function Nm(n,r,l){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Re,l)}catch{}switch(l.tag){case 5:bn||Js(l,r);case 6:var u=Mn,p=Ti;Mn=null,Br(n,r,l),Mn=u,Ti=p,Mn!==null&&(Ti?(n=Mn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Mn.removeChild(l.stateNode));break;case 18:Mn!==null&&(Ti?(n=Mn,l=l.stateNode,n.nodeType===8?xu(n.parentNode,l):n.nodeType===1&&xu(n,l),Wo(n)):xu(Mn,l.stateNode));break;case 4:u=Mn,p=Ti,Mn=l.stateNode.containerInfo,Ti=!0,Br(n,r,l),Mn=u,Ti=p;break;case 0:case 11:case 14:case 15:if(!bn&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,A=v.destroy;v=v.tag,A!==void 0&&((v&2)!==0||(v&4)!==0)&&id(l,r,A),p=p.next}while(p!==u)}Br(n,r,l);break;case 1:if(!bn&&(Js(l,r),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(U){en(l,r,U)}Br(n,r,l);break;case 21:Br(n,r,l);break;case 22:l.mode&1?(bn=(u=bn)||l.memoizedState!==null,Br(n,r,l),bn=u):Br(n,r,l);break;default:Br(n,r,l)}}function Dm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Bv),r.forEach(function(u){var p=Kv.bind(null,n,u);l.has(u)||(l.add(u),u.then(p,p))})}}function wi(n,r){var l=r.deletions;if(l!==null)for(var u=0;u<l.length;u++){var p=l[u];try{var v=n,A=r,U=A;e:for(;U!==null;){switch(U.tag){case 5:Mn=U.stateNode,Ti=!1;break e;case 3:Mn=U.stateNode.containerInfo,Ti=!0;break e;case 4:Mn=U.stateNode.containerInfo,Ti=!0;break e}U=U.return}if(Mn===null)throw Error(t(160));Nm(v,A,p),Mn=null,Ti=!1;var z=p.alternate;z!==null&&(z.return=null),p.return=null}catch(le){en(p,r,le)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Im(r,n),r=r.sibling}function Im(n,r){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(wi(r,n),Bi(n),u&4){try{ha(3,n,n.return),Dl(3,n)}catch(Xe){en(n,n.return,Xe)}try{ha(5,n,n.return)}catch(Xe){en(n,n.return,Xe)}}break;case 1:wi(r,n),Bi(n),u&512&&l!==null&&Js(l,l.return);break;case 5:if(wi(r,n),Bi(n),u&512&&l!==null&&Js(l,l.return),n.flags&32){var p=n.stateNode;try{we(p,"")}catch(Xe){en(n,n.return,Xe)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,A=l!==null?l.memoizedProps:v,U=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{U==="input"&&v.type==="radio"&&v.name!=null&&ft(p,v),Le(U,A);var le=Le(U,v);for(A=0;A<z.length;A+=2){var ve=z[A],xe=z[A+1];ve==="style"?Te(p,xe):ve==="dangerouslySetInnerHTML"?ke(p,xe):ve==="children"?we(p,xe):P(p,ve,xe,le)}switch(U){case"input":jt(p,v);break;case"textarea":T(p,v);break;case"select":var _e=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Ie=v.value;Ie!=null?Pt(p,!!v.multiple,Ie,!1):_e!==!!v.multiple&&(v.defaultValue!=null?Pt(p,!!v.multiple,v.defaultValue,!0):Pt(p,!!v.multiple,v.multiple?[]:"",!1))}p[ta]=v}catch(Xe){en(n,n.return,Xe)}}break;case 6:if(wi(r,n),Bi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(Xe){en(n,n.return,Xe)}}break;case 3:if(wi(r,n),Bi(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{Wo(r.containerInfo)}catch(Xe){en(n,n.return,Xe)}break;case 4:wi(r,n),Bi(n);break;case 13:wi(r,n),Bi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(cd=b())),u&4&&Dm(n);break;case 22:if(ve=l!==null&&l.memoizedState!==null,n.mode&1?(bn=(le=bn)||ve,wi(r,n),bn=le):wi(r,n),Bi(n),u&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!ve&&(n.mode&1)!==0)for(Oe=n,ve=n.child;ve!==null;){for(xe=Oe=ve;Oe!==null;){switch(_e=Oe,Ie=_e.child,_e.tag){case 0:case 11:case 14:case 15:ha(4,_e,_e.return);break;case 1:Js(_e,_e.return);var Ve=_e.stateNode;if(typeof Ve.componentWillUnmount=="function"){u=_e,l=_e.return;try{r=u,Ve.props=r.memoizedProps,Ve.state=r.memoizedState,Ve.componentWillUnmount()}catch(Xe){en(u,l,Xe)}}break;case 5:Js(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Om(xe);continue}}Ie!==null?(Ie.return=_e,Oe=Ie):Om(xe)}ve=ve.sibling}e:for(ve=null,xe=n;;){if(xe.tag===5){if(ve===null){ve=xe;try{p=xe.stateNode,le?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(U=xe.stateNode,z=xe.memoizedProps.style,A=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=ye("display",A))}catch(Xe){en(n,n.return,Xe)}}}else if(xe.tag===6){if(ve===null)try{xe.stateNode.nodeValue=le?"":xe.memoizedProps}catch(Xe){en(n,n.return,Xe)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;ve===xe&&(ve=null),xe=xe.return}ve===xe&&(ve=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:wi(r,n),Bi(n),u&4&&Dm(n);break;case 21:break;default:wi(r,n),Bi(n)}}function Bi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Pm(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(we(p,""),u.flags&=-33);var v=Lm(n);od(n,v,p);break;case 3:case 4:var A=u.stateNode.containerInfo,U=Lm(n);sd(n,U,A);break;default:throw Error(t(161))}}catch(z){en(n,n.return,z)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Vv(n,r,l){Oe=n,Um(n)}function Um(n,r,l){for(var u=(n.mode&1)!==0;Oe!==null;){var p=Oe,v=p.child;if(p.tag===22&&u){var A=p.memoizedState!==null||Nl;if(!A){var U=p.alternate,z=U!==null&&U.memoizedState!==null||bn;U=Nl;var le=bn;if(Nl=A,(bn=z)&&!le)for(Oe=p;Oe!==null;)A=Oe,z=A.child,A.tag===22&&A.memoizedState!==null?km(p):z!==null?(z.return=A,Oe=z):km(p);for(;v!==null;)Oe=v,Um(v),v=v.sibling;Oe=p,Nl=U,bn=le}Fm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,Oe=v):Fm(n)}}function Fm(n){for(;Oe!==null;){var r=Oe;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:bn||Dl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!bn)if(l===null)u.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:Ei(r.type,l.memoizedProps);u.componentDidUpdate(p,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Op(r,v,u);break;case 3:var A=r.updateQueue;if(A!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Op(r,A,l)}break;case 5:var U=r.stateNode;if(l===null&&r.flags&4){l=U;var z=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var le=r.alternate;if(le!==null){var ve=le.memoizedState;if(ve!==null){var xe=ve.dehydrated;xe!==null&&Wo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||r.flags&512&&rd(r)}catch(_e){en(r,r.return,_e)}}if(r===n){Oe=null;break}if(l=r.sibling,l!==null){l.return=r.return,Oe=l;break}Oe=r.return}}function Om(n){for(;Oe!==null;){var r=Oe;if(r===n){Oe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Oe=l;break}Oe=r.return}}function km(n){for(;Oe!==null;){var r=Oe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Dl(4,r)}catch(z){en(r,l,z)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(z){en(r,p,z)}}var v=r.return;try{rd(r)}catch(z){en(r,v,z)}break;case 5:var A=r.return;try{rd(r)}catch(z){en(r,A,z)}}}catch(z){en(r,r.return,z)}if(r===n){Oe=null;break}var U=r.sibling;if(U!==null){U.return=r.return,Oe=U;break}Oe=r.return}}var Hv=Math.ceil,Il=C.ReactCurrentDispatcher,ad=C.ReactCurrentOwner,fi=C.ReactCurrentBatchConfig,Nt=0,_n=null,an=null,En=0,Qn=0,Qs=Ir(0),un=0,fa=null,fs=0,Ul=0,ld=0,pa=null,Wn=null,cd=0,eo=1/0,dr=null,Fl=!1,ud=null,zr=null,Ol=!1,Vr=null,kl=0,ma=0,dd=null,Bl=-1,zl=0;function Dn(){return(Nt&6)!==0?b():Bl!==-1?Bl:Bl=b()}function Hr(n){return(n.mode&1)===0?1:(Nt&2)!==0&&En!==0?En&-En:wv.transition!==null?(zl===0&&(zl=Bn()),zl):(n=lt,n!==0||(n=window.event,n=n===void 0?16:zf(n.type)),n)}function Ai(n,r,l,u){if(50<ma)throw ma=0,dd=null,Error(t(185));Kn(n,l,u),((Nt&2)===0||n!==_n)&&(n===_n&&((Nt&2)===0&&(Ul|=l),un===4&&Gr(n,En)),jn(n,u),l===1&&Nt===0&&(r.mode&1)===0&&(eo=b()+500,pl&&Fr()))}function jn(n,r){var l=n.callbackNode;Ln(n,r);var u=nn(n,n===_n?En:0);if(u===0)l!==null&&Ka(l),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(l!=null&&Ka(l),r===1)n.tag===0?Tv(zm.bind(null,n)):wp(zm.bind(null,n)),yv(function(){(Nt&6)===0&&Fr()}),l=null;else{switch(yi(u)){case 1:l=ce;break;case 4:l=re;break;case 16:l=te;break;case 536870912:l=Ue;break;default:l=te}l=qm(l,Bm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Bm(n,r){if(Bl=-1,zl=0,(Nt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(to()&&n.callbackNode!==l)return null;var u=nn(n,n===_n?En:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Vl(n,u);else{r=u;var p=Nt;Nt|=2;var v=Hm();(_n!==n||En!==r)&&(dr=null,eo=b()+500,ms(n,r));do try{jv();break}catch(U){Vm(n,U)}while(!0);Cu(),Il.current=v,Nt=p,an!==null?r=0:(_n=null,En=0,r=un)}if(r!==0){if(r===2&&(p=Tt(n),p!==0&&(u=p,r=hd(n,p))),r===1)throw l=fa,ms(n,0),Gr(n,u),jn(n,b()),l;if(r===6)Gr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!Gv(p)&&(r=Vl(n,u),r===2&&(v=Tt(n),v!==0&&(u=v,r=hd(n,v))),r===1))throw l=fa,ms(n,0),Gr(n,u),jn(n,b()),l;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:gs(n,Wn,dr);break;case 3:if(Gr(n,u),(u&130023424)===u&&(r=cd+500-b(),10<r)){if(nn(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Dn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=vu(gs.bind(null,n,Wn,dr),r);break}gs(n,Wn,dr);break;case 4:if(Gr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var A=31-tt(u);v=1<<A,A=r[A],A>p&&(p=A),u&=~v}if(u=p,u=b()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Hv(u/1960))-u,10<u){n.timeoutHandle=vu(gs.bind(null,n,Wn,dr),u);break}gs(n,Wn,dr);break;case 5:gs(n,Wn,dr);break;default:throw Error(t(329))}}}return jn(n,b()),n.callbackNode===l?Bm.bind(null,n):null}function hd(n,r){var l=pa;return n.current.memoizedState.isDehydrated&&(ms(n,r).flags|=256),n=Vl(n,r),n!==2&&(r=Wn,Wn=l,r!==null&&fd(r)),n}function fd(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function Gv(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var p=l[u],v=p.getSnapshot;p=p.value;try{if(!Si(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Gr(n,r){for(r&=~ld,r&=~Ul,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-tt(r),u=1<<l;n[l]=-1,r&=~u}}function zm(n){if((Nt&6)!==0)throw Error(t(327));to();var r=nn(n,0);if((r&1)===0)return jn(n,b()),null;var l=Vl(n,r);if(n.tag!==0&&l===2){var u=Tt(n);u!==0&&(r=u,l=hd(n,u))}if(l===1)throw l=fa,ms(n,0),Gr(n,r),jn(n,b()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,gs(n,Wn,dr),jn(n,b()),null}function pd(n,r){var l=Nt;Nt|=1;try{return n(r)}finally{Nt=l,Nt===0&&(eo=b()+500,pl&&Fr())}}function ps(n){Vr!==null&&Vr.tag===0&&(Nt&6)===0&&to();var r=Nt;Nt|=1;var l=fi.transition,u=lt;try{if(fi.transition=null,lt=1,n)return n()}finally{lt=u,fi.transition=l,Nt=r,(Nt&6)===0&&Fr()}}function md(){Qn=Qs.current,Yt(Qs)}function ms(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,xv(l)),an!==null)for(l=an.return;l!==null;){var u=l;switch(Tu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&hl();break;case 3:$s(),Yt(Vn),Yt(Tn),Ou();break;case 5:Uu(u);break;case 4:$s();break;case 13:Yt(Zt);break;case 19:Yt(Zt);break;case 10:Pu(u.type._context);break;case 22:case 23:md()}l=l.return}if(_n=n,an=n=Wr(n.current,null),En=Qn=r,un=0,fa=null,ld=Ul=fs=0,Wn=pa=null,us!==null){for(r=0;r<us.length;r++)if(l=us[r],u=l.interleaved,u!==null){l.interleaved=null;var p=u.next,v=l.pending;if(v!==null){var A=v.next;v.next=p,u.next=A}l.pending=u}us=null}return n}function Vm(n,r){do{var l=an;try{if(Cu(),Tl.current=Rl,wl){for(var u=Jt.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}wl=!1}if(hs=0,gn=cn=Jt=null,aa=!1,la=0,ad.current=null,l===null||l.return===null){un=1,fa=r,an=null;break}e:{var v=n,A=l.return,U=l,z=r;if(r=En,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var le=z,ve=U,xe=ve.tag;if((ve.mode&1)===0&&(xe===0||xe===11||xe===15)){var _e=ve.alternate;_e?(ve.updateQueue=_e.updateQueue,ve.memoizedState=_e.memoizedState,ve.lanes=_e.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=hm(A);if(Ie!==null){Ie.flags&=-257,fm(Ie,A,U,v,r),Ie.mode&1&&dm(v,le,r),r=Ie,z=le;var Ve=r.updateQueue;if(Ve===null){var Xe=new Set;Xe.add(z),r.updateQueue=Xe}else Ve.add(z);break e}else{if((r&1)===0){dm(v,le,r),gd();break e}z=Error(t(426))}}else if($t&&U.mode&1){var sn=hm(A);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),fm(sn,A,U,v,r),bu(Zs(z,U));break e}}v=z=Zs(z,U),un!==4&&(un=2),pa===null?pa=[v]:pa.push(v),v=A;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var ee=cm(v,z,r);Fp(v,ee);break e;case 1:U=z;var W=v.type,ie=v.stateNode;if((v.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(zr===null||!zr.has(ie)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ee=um(v,U,r);Fp(v,Ee);break e}}v=v.return}while(v!==null)}Wm(l)}catch($e){r=$e,an===l&&l!==null&&(an=l=l.return);continue}break}while(!0)}function Hm(){var n=Il.current;return Il.current=Rl,n===null?Rl:n}function gd(){(un===0||un===3||un===2)&&(un=4),_n===null||(fs&268435455)===0&&(Ul&268435455)===0||Gr(_n,En)}function Vl(n,r){var l=Nt;Nt|=2;var u=Hm();(_n!==n||En!==r)&&(dr=null,ms(n,r));do try{Wv();break}catch(p){Vm(n,p)}while(!0);if(Cu(),Nt=l,Il.current=u,an!==null)throw Error(t(261));return _n=null,En=0,un}function Wv(){for(;an!==null;)Gm(an)}function jv(){for(;an!==null&&!Yc();)Gm(an)}function Gm(n){var r=Ym(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,r===null?Wm(n):an=r,ad.current=null}function Wm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=Ov(l,r,Qn),l!==null){an=l;return}}else{if(l=kv(l,r),l!==null){l.flags&=32767,an=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{un=6,an=null;return}}if(r=r.sibling,r!==null){an=r;return}an=r=n}while(r!==null);un===0&&(un=5)}function gs(n,r,l){var u=lt,p=fi.transition;try{fi.transition=null,lt=1,Xv(n,r,l,u)}finally{fi.transition=p,lt=u}return null}function Xv(n,r,l,u){do to();while(Vr!==null);if((Nt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(Ar(n,v),n===_n&&(an=_n=null,En=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Ol||(Ol=!0,qm(te,function(){return to(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=fi.transition,fi.transition=null;var A=lt;lt=1;var U=Nt;Nt|=4,ad.current=null,zv(n,l),Im(l,n),hv(gu),Ja=!!mu,gu=mu=null,n.current=l,Vv(l),qc(),Nt=U,lt=A,fi.transition=v}else n.current=l;if(Ol&&(Ol=!1,Vr=n,kl=p),v=n.pendingLanes,v===0&&(zr=null),Ze(l.stateNode),jn(n,b()),r!==null)for(u=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],u(p.value,{componentStack:p.stack,digest:p.digest});if(Fl)throw Fl=!1,n=ud,ud=null,n;return(kl&1)!==0&&n.tag!==0&&to(),v=n.pendingLanes,(v&1)!==0?n===dd?ma++:(ma=0,dd=n):ma=0,Fr(),null}function to(){if(Vr!==null){var n=yi(kl),r=fi.transition,l=lt;try{if(fi.transition=null,lt=16>n?16:n,Vr===null)var u=!1;else{if(n=Vr,Vr=null,kl=0,(Nt&6)!==0)throw Error(t(331));var p=Nt;for(Nt|=4,Oe=n.current;Oe!==null;){var v=Oe,A=v.child;if((Oe.flags&16)!==0){var U=v.deletions;if(U!==null){for(var z=0;z<U.length;z++){var le=U[z];for(Oe=le;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:ha(8,ve,v)}var xe=ve.child;if(xe!==null)xe.return=ve,Oe=xe;else for(;Oe!==null;){ve=Oe;var _e=ve.sibling,Ie=ve.return;if(Cm(ve),ve===le){Oe=null;break}if(_e!==null){_e.return=Ie,Oe=_e;break}Oe=Ie}}}var Ve=v.alternate;if(Ve!==null){var Xe=Ve.child;if(Xe!==null){Ve.child=null;do{var sn=Xe.sibling;Xe.sibling=null,Xe=sn}while(Xe!==null)}}Oe=v}}if((v.subtreeFlags&2064)!==0&&A!==null)A.return=v,Oe=A;else e:for(;Oe!==null;){if(v=Oe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:ha(9,v,v.return)}var ee=v.sibling;if(ee!==null){ee.return=v.return,Oe=ee;break e}Oe=v.return}}var W=n.current;for(Oe=W;Oe!==null;){A=Oe;var ie=A.child;if((A.subtreeFlags&2064)!==0&&ie!==null)ie.return=A,Oe=ie;else e:for(A=W;Oe!==null;){if(U=Oe,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Dl(9,U)}}catch($e){en(U,U.return,$e)}if(U===A){Oe=null;break e}var Ee=U.sibling;if(Ee!==null){Ee.return=U.return,Oe=Ee;break e}Oe=U.return}}if(Nt=p,Fr(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Re,n)}catch{}u=!0}return u}finally{lt=l,fi.transition=r}}return!1}function jm(n,r,l){r=Zs(l,r),r=cm(n,r,1),n=kr(n,r,1),r=Dn(),n!==null&&(Kn(n,1,r),jn(n,r))}function en(n,r,l){if(n.tag===3)jm(n,n,l);else for(;r!==null;){if(r.tag===3){jm(r,n,l);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(zr===null||!zr.has(u))){n=Zs(l,n),n=um(r,n,1),r=kr(r,n,1),n=Dn(),r!==null&&(Kn(r,1,n),jn(r,n));break}}r=r.return}}function Yv(n,r,l){var u=n.pingCache;u!==null&&u.delete(r),r=Dn(),n.pingedLanes|=n.suspendedLanes&l,_n===n&&(En&l)===l&&(un===4||un===3&&(En&130023424)===En&&500>b()-cd?ms(n,0):ld|=l),jn(n,r)}function Xm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ht,Ht<<=1,(Ht&130023424)===0&&(Ht=4194304)));var l=Dn();n=lr(n,r),n!==null&&(Kn(n,r,l),jn(n,l))}function qv(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Xm(n,l)}function Kv(n,r){var l=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Xm(n,l)}var Ym;Ym=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Vn.current)Gn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Gn=!1,Fv(n,r,l);Gn=(n.flags&131072)!==0}else Gn=!1,$t&&(r.flags&1048576)!==0&&Ap(r,gl,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Ll(n,r),n=r.pendingProps;var p=Gs(r,Tn.current);Ks(r,l),p=zu(null,r,u,n,p,l);var v=Vu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Hn(u)?(v=!0,fl(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Du(r),p.updater=Cl,r.stateNode=p,p._reactInternals=r,Yu(r,u,n,l),r=Zu(null,r,u,!0,v,l)):(r.tag=0,$t&&v&&Eu(r),Nn(null,r,p,l),r=r.child),r;case 16:u=r.elementType;e:{switch(Ll(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=Zv(u),n=Ei(u,n),p){case 0:r=$u(null,r,u,n,l);break e;case 1:r=xm(null,r,u,n,l);break e;case 11:r=pm(null,r,u,n,l);break e;case 14:r=mm(null,r,u,Ei(u.type,n),l);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ei(u,p),$u(n,r,u,p,l);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ei(u,p),xm(n,r,u,p,l);case 3:e:{if(ym(r),n===null)throw Error(t(387));u=r.pendingProps,v=r.memoizedState,p=v.element,Up(n,r),Ml(r,u,null,l);var A=r.memoizedState;if(u=A.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=Zs(Error(t(423)),r),r=Sm(n,r,u,l,p);break e}else if(u!==p){p=Zs(Error(t(424)),r),r=Sm(n,r,u,l,p);break e}else for(Jn=Dr(r.stateNode.containerInfo.firstChild),Zn=r,$t=!0,Mi=null,l=Dp(r,null,u,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Xs(),u===p){r=ur(n,r,l);break e}Nn(n,r,u,l)}r=r.child}return r;case 5:return kp(r),n===null&&Au(r),u=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,A=p.children,_u(u,p)?A=null:v!==null&&_u(u,v)&&(r.flags|=32),vm(n,r),Nn(n,r,A,l),r.child;case 6:return n===null&&Au(r),null;case 13:return Mm(n,r,l);case 4:return Iu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Ys(r,null,u,l):Nn(n,r,u,l),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ei(u,p),pm(n,r,u,p,l);case 7:return Nn(n,r,r.pendingProps,l),r.child;case 8:return Nn(n,r,r.pendingProps.children,l),r.child;case 12:return Nn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,v=r.memoizedProps,A=p.value,Wt(xl,u._currentValue),u._currentValue=A,v!==null)if(Si(v.value,A)){if(v.children===p.children&&!Vn.current){r=ur(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var U=v.dependencies;if(U!==null){A=v.child;for(var z=U.firstContext;z!==null;){if(z.context===u){if(v.tag===1){z=cr(-1,l&-l),z.tag=2;var le=v.updateQueue;if(le!==null){le=le.shared;var ve=le.pending;ve===null?z.next=z:(z.next=ve.next,ve.next=z),le.pending=z}}v.lanes|=l,z=v.alternate,z!==null&&(z.lanes|=l),Lu(v.return,l,r),U.lanes|=l;break}z=z.next}}else if(v.tag===10)A=v.type===r.type?null:v.child;else if(v.tag===18){if(A=v.return,A===null)throw Error(t(341));A.lanes|=l,U=A.alternate,U!==null&&(U.lanes|=l),Lu(A,l,r),A=v.sibling}else A=v.child;if(A!==null)A.return=v;else for(A=v;A!==null;){if(A===r){A=null;break}if(v=A.sibling,v!==null){v.return=A.return,A=v;break}A=A.return}v=A}Nn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,Ks(r,l),p=di(p),u=u(p),r.flags|=1,Nn(n,r,u,l),r.child;case 14:return u=r.type,p=Ei(u,r.pendingProps),p=Ei(u.type,p),mm(n,r,u,p,l);case 15:return gm(n,r,r.type,r.pendingProps,l);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ei(u,p),Ll(n,r),r.tag=1,Hn(u)?(n=!0,fl(r)):n=!1,Ks(r,l),am(r,u,p),Yu(r,u,p,l),Zu(null,r,u,!0,n,l);case 19:return Tm(n,r,l);case 22:return _m(n,r,l)}throw Error(t(156,r.tag))};function qm(n,r){return qa(n,r)}function $v(n,r,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(n,r,l,u){return new $v(n,r,l,u)}function _d(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Zv(n){if(typeof n=="function")return _d(n)?1:0;if(n!=null){if(n=n.$$typeof,n===X)return 11;if(n===$)return 14}return 2}function Wr(n,r){var l=n.alternate;return l===null?(l=pi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Hl(n,r,l,u,p,v){var A=2;if(u=n,typeof n=="function")_d(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case O:return _s(l.children,p,v,r);case w:A=8,p|=8;break;case L:return n=pi(12,l,r,p|2),n.elementType=L,n.lanes=v,n;case j:return n=pi(13,l,r,p),n.elementType=j,n.lanes=v,n;case ne:return n=pi(19,l,r,p),n.elementType=ne,n.lanes=v,n;case G:return Gl(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case oe:A=10;break e;case F:A=9;break e;case X:A=11;break e;case $:A=14;break e;case J:A=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=pi(A,l,r,p),r.elementType=n,r.type=u,r.lanes=v,r}function _s(n,r,l,u){return n=pi(7,n,u,r),n.lanes=l,n}function Gl(n,r,l,u){return n=pi(22,n,u,r),n.elementType=G,n.lanes=l,n.stateNode={isHidden:!1},n}function vd(n,r,l){return n=pi(6,n,null,r),n.lanes=l,n}function xd(n,r,l){return r=pi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Jv(n,r,l,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zn(0),this.expirationTimes=zn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function yd(n,r,l,u,p,v,A,U,z){return n=new Jv(n,r,l,U,z),r===1?(r=1,v===!0&&(r|=8)):r=0,v=pi(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Du(v),n}function Qv(n,r,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:r,implementation:l}}function Km(n){if(!n)return Ur;n=n._reactInternals;e:{if(Ui(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Hn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Hn(l))return Ep(n,l,r)}return r}function $m(n,r,l,u,p,v,A,U,z){return n=yd(l,u,!0,n,p,v,A,U,z),n.context=Km(null),l=n.current,u=Dn(),p=Hr(l),v=cr(u,p),v.callback=r??null,kr(l,v,p),n.current.lanes=p,Kn(n,p,u),jn(n,u),n}function Wl(n,r,l,u){var p=r.current,v=Dn(),A=Hr(p);return l=Km(l),r.context===null?r.context=l:r.pendingContext=l,r=cr(v,A),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=kr(p,r,A),n!==null&&(Ai(n,p,A,v),Sl(n,p,A)),A}function jl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Zm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Sd(n,r){Zm(n,r),(n=n.alternate)&&Zm(n,r)}function ex(){return null}var Jm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Md(n){this._internalRoot=n}Xl.prototype.render=Md.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Wl(n,r,null,null)},Xl.prototype.unmount=Md.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ps(function(){Wl(null,n,null,null)}),r[rr]=null}};function Xl(n){this._internalRoot=n}Xl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Bo();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Pr.length&&r!==0&&r<Pr[l].priority;l++);Pr.splice(l,0,n),l===0&&kf(n)}};function Ed(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Qm(){}function tx(n,r,l,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var le=jl(A);v.call(le)}}var A=$m(r,u,n,0,null,!1,!1,"",Qm);return n._reactRootContainer=A,n[rr]=A.current,Qo(n.nodeType===8?n.parentNode:n),ps(),A}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var U=u;u=function(){var le=jl(z);U.call(le)}}var z=yd(n,0,!1,null,null,!1,!1,"",Qm);return n._reactRootContainer=z,n[rr]=z.current,Qo(n.nodeType===8?n.parentNode:n),ps(function(){Wl(r,z,l,u)}),z}function ql(n,r,l,u,p){var v=l._reactRootContainer;if(v){var A=v;if(typeof p=="function"){var U=p;p=function(){var z=jl(A);U.call(z)}}Wl(r,A,n,p)}else A=tx(l,r,n,p,u);return jl(A)}rn=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=At(r.pendingLanes);l!==0&&(It(r,l|1),jn(r,b()),(Nt&6)===0&&(eo=b()+500,Fr()))}break;case 13:ps(function(){var u=lr(n,1);if(u!==null){var p=Dn();Ai(u,n,1,p)}}),Sd(n,1)}},li=function(n){if(n.tag===13){var r=lr(n,134217728);if(r!==null){var l=Dn();Ai(r,n,134217728,l)}Sd(n,134217728)}},ir=function(n){if(n.tag===13){var r=Hr(n),l=lr(n,r);if(l!==null){var u=Dn();Ai(l,n,r,u)}Sd(n,r)}},Bo=function(){return lt},Ff=function(n,r){var l=lt;try{return lt=n,r()}finally{lt=l}},Ae=function(n,r,l){switch(r){case"input":if(jt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var u=l[r];if(u!==n&&u.form===n.form){var p=dl(u);if(!p)throw Error(t(90));tn(u),jt(u,p)}}}break;case"textarea":T(n,l);break;case"select":r=l.value,r!=null&&Pt(n,!!l.multiple,r,!1)}},at=pd,Ot=ps;var nx={usingClientEntryPoint:!1,Events:[na,Vs,dl,he,ze,pd]},ga={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ix={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Xa(n),n===null?null:n.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance||ex,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Re=Kl.inject(ix),De=Kl}catch{}}return Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nx,Xn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(r))throw Error(t(200));return Qv(n,r,null,l)},Xn.createRoot=function(n,r){if(!Ed(n))throw Error(t(299));var l=!1,u="",p=Jm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=yd(n,1,!1,null,null,l,!1,u,p),n[rr]=r.current,Qo(n.nodeType===8?n.parentNode:n),new Md(r)},Xn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Xa(r),n=n===null?null:n.stateNode,n},Xn.flushSync=function(n){return ps(n)},Xn.hydrate=function(n,r,l){if(!Yl(r))throw Error(t(200));return ql(null,n,r,!0,l)},Xn.hydrateRoot=function(n,r,l){if(!Ed(n))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,p=!1,v="",A=Jm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),r=$m(r,null,n,1,l??null,p,!1,v,A),n[rr]=r.current,Qo(n),u)for(n=0;n<u.length;n++)l=u[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Xl(r)},Xn.render=function(n,r,l){if(!Yl(r))throw Error(t(200));return ql(null,n,r,!1,l)},Xn.unmountComponentAtNode=function(n){if(!Yl(n))throw Error(t(40));return n._reactRootContainer?(ps(function(){ql(null,null,n,!1,function(){n._reactRootContainer=null,n[rr]=null})}),!0):!1},Xn.unstable_batchedUpdates=pd,Xn.unstable_renderSubtreeIntoContainer=function(n,r,l,u){if(!Yl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ql(n,r,l,!1,u)},Xn.version="18.3.1-next-f1338f8080-20240426",Xn}var ag;function dx(){if(ag)return Ad.exports;ag=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ad.exports=ux(),Ad.exports}var lg;function hx(){if(lg)return $l;lg=1;var o=dx();return $l.createRoot=o.createRoot,$l.hydrateRoot=o.hydrateRoot,$l}var fx=hx();const px="_panel_1qijk_1",mx="_panelHeader_1qijk_8",gx="_panelTitle_1qijk_18",_x="_uploadBtn_1qijk_27",vx="_dropZone_1qijk_44",xx="_dropZoneActive_1qijk_61",yx="_layerList_1qijk_82",Sx="_emptyMsg_1qijk_91",Mx="_listLabel_1qijk_99",Ex="_layerCard_1qijk_107",Tx="_layerCardExpanded_1qijk_119",wx="_cardRow_1qijk_123",Ax="_colorSwatch_1qijk_131",bx="_layerInfo_1qijk_139",Rx="_layerName_1qijk_144",Cx="_layerMeta_1qijk_153",Px="_levelBadge_1qijk_161",Lx="_roleBadge_1qijk_172",Nx="_parentBadge_1qijk_182",Dx="_cardActions_1qijk_188",Ix="_editBtn_1qijk_194",Ux="_removeBtn_1qijk_195",Fx="_editor_1qijk_219",Ox="_editorGrid_1qijk_228",kx="_paramField_1qijk_234",Bx="_paramLabel_1qijk_240",zx="_paramInput_1qijk_247",Vx="_paramSelect_1qijk_248",Hx="_hexRow_1qijk_265",Gx="_hexPicker_1qijk_271",Wx="_filenamePreview_1qijk_282",jx="_filenameLabel_1qijk_288",Xx="_filenameCode_1qijk_295",Yx="_namingHelper_1qijk_307",qx="_helperLabel_1qijk_313",Kx="_syntaxExample_1qijk_321",Mt={panel:px,panelHeader:mx,panelTitle:gx,uploadBtn:_x,dropZone:vx,dropZoneActive:xx,layerList:yx,emptyMsg:Sx,listLabel:Mx,layerCard:Ex,layerCardExpanded:Tx,cardRow:wx,colorSwatch:Ax,layerInfo:bx,layerName:Rx,layerMeta:Cx,levelBadge:Px,roleBadge:Lx,parentBadge:Nx,cardActions:Dx,editBtn:Ix,removeBtn:Ux,editor:Fx,editorGrid:Ox,paramField:kx,paramLabel:Bx,paramInput:zx,paramSelect:Vx,hexRow:Hx,hexPicker:Gx,filenamePreview:Wx,filenameLabel:jx,filenameCode:Xx,namingHelper:Yx,helperLabel:qx,syntaxExample:Kx},$x={h0:0,h1:1,h2:2,h3:3,h4:4,h5:5,h6:6,h7:7};function U_(o){const e=o.replace(/[+-]$/,""),t=$x[e]??0;return o.endsWith("+")?t+.25:o.endsWith("-")?t-.25:t}function Zx(o){const t=o.replace(/\.svg$/i,"").split("__"),i={};for(const s of t){const a=s.indexOf("=");a>0&&(i[s.slice(0,a)]=s.slice(a+1))}return{lvl:i.lvl??"h0",sem:i.sem??"",rol:i.rol??"base",col:i.col??"",hex:i.hex??"CCCCCC",par:i.par??"",inf:i.inf??""}}function F_(o){const e=[`lvl=${o.lvl}`,`sem=${o.sem}`,`rol=${o.rol}`];return o.par&&e.push(`par=${o.par}`),o.col&&e.push(`col=${o.col}`),o.hex&&e.push(`hex=${o.hex}`),o.inf&&e.push(`inf=${o.inf}`),e.join("__")+".svg"}function Jx(o){const e=Zx(o.name);return{id:`${Date.now()}-${Math.random().toString(36).slice(2)}`,file:o,params:e,sortKey:U_(e.lvl)}}const Qx={base:"#4CAF50",core:"#2196F3",insert:"#FF9800",detail:"#9C27B0",cover:"#F44336",pillar:"#00BCD4",drop:"#795548"},ey=["h0","h0+","h1-","h1","h1+","h2-","h2","h2+","h3-","h3","h3+","h4-","h4","h4+","h5-","h5","h5+","h6-","h6","h6+","h7-","h7"],ty=["base","core","insert","detail","cover","pillar","drop"];function ny({layers:o,onAddFiles:e,onRemoveLayer:t,onUpdateLayer:i}){const s=Rt.useRef(null),[a,c]=Rt.useState(!1),[d,h]=Rt.useState(null),f=Rt.useCallback(E=>{E.preventDefault(),c(!1),e(E.dataTransfer.files)},[e]),g=Rt.useCallback(E=>{E.preventDefault(),c(!0)},[]),_=Rt.useCallback(()=>c(!1),[]),m=Rt.useCallback(E=>{E.target.files&&e(E.target.files),E.target.value=""},[e]),x=E=>h(S=>S===E?null:E),M=(E,S,y)=>{const R={...E.params,[S]:y},P=F_(R),C=new File([E.file],P,{type:E.file.type}),D=S==="lvl"?U_(y):E.sortKey;i(E.id,{params:R,file:C,sortKey:D})};return B.jsxs("div",{className:Mt.panel,children:[B.jsxs("div",{className:Mt.panelHeader,children:[B.jsx("h2",{className:Mt.panelTitle,children:"Layers"}),B.jsxs("button",{className:Mt.uploadBtn,onClick:()=>{var E;return(E=s.current)==null?void 0:E.click()},children:[B.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[B.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),B.jsx("polyline",{points:"17 8 12 3 7 8"}),B.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),"Upload SVGs"]}),B.jsx("input",{ref:s,type:"file",accept:".svg",multiple:!0,style:{display:"none"},onChange:m})]}),B.jsxs("div",{className:`${Mt.dropZone} ${a?Mt.dropZoneActive:""}`,onDrop:f,onDragOver:g,onDragLeave:_,onClick:()=>{var E;return(E=s.current)==null?void 0:E.click()},role:"button",tabIndex:0,onKeyDown:E=>{var S;return E.key==="Enter"&&((S=s.current)==null?void 0:S.click())},children:[B.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.5",children:[B.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),B.jsx("polyline",{points:"17 8 12 3 7 8"}),B.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),B.jsx("p",{children:a?"Drop to add":"Drop SVG files here"}),B.jsxs("span",{children:["Named with ",B.jsx("code",{children:"lvl="})," convention"]})]}),B.jsx("div",{className:Mt.layerList,children:o.length===0?B.jsx("p",{className:Mt.emptyMsg,children:"No layers yet — upload SVG files above"}):B.jsxs(B.Fragment,{children:[B.jsxs("p",{className:Mt.listLabel,children:[o.length," LAYER",o.length!==1?"S":""]}),o.map(E=>B.jsx(iy,{layer:E,expanded:d===E.id,onToggle:()=>x(E.id),onRemove:()=>t(E.id),onUpdateParam:(S,y)=>M(E,S,y)},E.id))]})}),B.jsxs("div",{className:Mt.namingHelper,children:[B.jsx("p",{className:Mt.helperLabel,children:"NAMING SYNTAX"}),B.jsx("code",{className:Mt.syntaxExample,children:"lvl=h2__sem=Body__rol=core__col=White__hex=FFFFFF"})]})]})}function iy({layer:o,expanded:e,onToggle:t,onRemove:i,onUpdateParam:s}){const{params:a}=o,c=`#${a.hex||"CCCCCC"}`,d=Qx[a.rol]??"#666";return B.jsxs("div",{className:`${Mt.layerCard} ${e?Mt.layerCardExpanded:""}`,children:[B.jsxs("div",{className:Mt.cardRow,onClick:t,role:"button",tabIndex:0,onKeyDown:h=>h.key==="Enter"&&t(),children:[B.jsx("div",{className:Mt.colorSwatch,style:{background:c}}),B.jsxs("div",{className:Mt.layerInfo,children:[B.jsx("span",{className:Mt.layerName,children:a.sem||o.file.name}),B.jsxs("div",{className:Mt.layerMeta,children:[B.jsx("span",{className:Mt.levelBadge,children:a.lvl}),B.jsx("span",{className:Mt.roleBadge,style:{background:d},children:a.rol}),a.par&&B.jsxs("span",{className:Mt.parentBadge,children:["← ",a.par]})]})]}),B.jsxs("div",{className:Mt.cardActions,children:[B.jsx("button",{className:Mt.editBtn,title:"Edit parameters",onClick:h=>{h.stopPropagation(),t()},children:B.jsxs("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[B.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),B.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4z"})]})}),B.jsx("button",{className:Mt.removeBtn,title:"Remove layer",onClick:h=>{h.stopPropagation(),i()},children:B.jsxs("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[B.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),B.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})]}),e&&B.jsxs("div",{className:Mt.editor,onClick:h=>h.stopPropagation(),children:[B.jsxs("div",{className:Mt.editorGrid,children:[B.jsx(vs,{label:"Level (lvl)",type:"select",value:a.lvl,options:ey,onChange:h=>s("lvl",h)}),B.jsx(vs,{label:"Semantic Name (sem)",value:a.sem,onChange:h=>s("sem",h)}),B.jsx(vs,{label:"Role (rol)",type:"select",value:a.rol,options:ty,onChange:h=>s("rol",h)}),B.jsx(vs,{label:"Parent (par)",value:a.par,placeholder:"optional",onChange:h=>s("par",h)}),B.jsx(vs,{label:"Color Name (col)",value:a.col,placeholder:"e.g. White",onChange:h=>s("col",h)}),B.jsx(vs,{label:"Hex Color (hex)",value:a.hex,placeholder:"FFFFFF",onChange:h=>s("hex",h.replace("#","")),type:"hex",hexColor:c}),B.jsx(vs,{label:"Inflate (inf)",value:a.inf,placeholder:"optional, e.g. 0.1",onChange:h=>s("inf",h)})]}),B.jsxs("div",{className:Mt.filenamePreview,children:[B.jsx("span",{className:Mt.filenameLabel,children:"Filename:"}),B.jsx("code",{className:Mt.filenameCode,children:F_(a)})]})]})]})}function vs({label:o,value:e,onChange:t,type:i="text",options:s,placeholder:a,hexColor:c}){return B.jsxs("div",{className:Mt.paramField,children:[B.jsx("label",{className:Mt.paramLabel,children:o}),i==="select"&&s?B.jsx("select",{className:Mt.paramSelect,value:e,onChange:d=>t(d.target.value),children:s.map(d=>B.jsx("option",{value:d,children:d},d))}):i==="hex"?B.jsxs("div",{className:Mt.hexRow,children:[B.jsx("input",{type:"color",className:Mt.hexPicker,value:c||"#CCCCCC",onChange:d=>t(d.target.value.replace("#","").toUpperCase())}),B.jsx("input",{className:Mt.paramInput,value:e,placeholder:a,onChange:d=>t(d.target.value.replace("#","").toUpperCase()),maxLength:6})]}):B.jsx("input",{className:Mt.paramInput,value:e,placeholder:a,onChange:d=>t(d.target.value)})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hf="183",yo={ROTATE:0,DOLLY:1,PAN:2},xo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ry=0,cg=1,sy=2,Ac=1,oy=2,Ra=3,Mr=0,qn=1,Wi=2,yr=0,So=1,ug=2,dg=3,hg=4,ay=5,As=100,ly=101,cy=102,uy=103,dy=104,hy=200,fy=201,py=202,my=203,mh=204,gh=205,gy=206,_y=207,vy=208,xy=209,yy=210,Sy=211,My=212,Ey=213,Ty=214,_h=0,vh=1,xh=2,To=3,yh=4,Sh=5,Mh=6,Eh=7,O_=0,wy=1,Ay=2,Yi=0,k_=1,B_=2,z_=3,ff=4,V_=5,H_=6,G_=7,fg="attached",by="detached",W_=300,Ps=301,wo=302,Cd=303,Pd=304,zc=306,Ao=1e3,ji=1001,Ic=1002,hn=1003,j_=1004,Ca=1005,fn=1006,bc=1007,vr=1008,ni=1009,X_=1010,Y_=1011,Ia=1012,pf=1013,$i=1014,vi=1015,Er=1016,mf=1017,gf=1018,Ua=1020,q_=35902,K_=35899,$_=1021,Z_=1022,xi=1023,Tr=1026,Rs=1027,_f=1028,vf=1029,bo=1030,xf=1031,yf=1033,Rc=33776,Cc=33777,Pc=33778,Lc=33779,Th=35840,wh=35841,Ah=35842,bh=35843,Rh=36196,Ch=37492,Ph=37496,Lh=37488,Nh=37489,Dh=37490,Ih=37491,Uh=37808,Fh=37809,Oh=37810,kh=37811,Bh=37812,zh=37813,Vh=37814,Hh=37815,Gh=37816,Wh=37817,jh=37818,Xh=37819,Yh=37820,qh=37821,Kh=36492,$h=36494,Zh=36495,Jh=36283,Qh=36284,ef=36285,tf=36286,Fa=2300,Oa=2301,Ld=2302,pg=2303,mg=2400,gg=2401,_g=2402,Ry=2500,Cy=0,J_=1,nf=2,Py=3200,Q_=0,Ly=1,es="",yn="srgb",kn="srgb-linear",Uc="linear",kt="srgb",no=7680,vg=519,Ny=512,Dy=513,Iy=514,Sf=515,Uy=516,Fy=517,Mf=518,Oy=519,rf=35044,xg="300 es",Xi=2e3,ka=2001;function ky(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function By(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Ba(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function zy(){const o=Ba("canvas");return o.style.display="block",o}const yg={};function Fc(...o){const e="THREE."+o.shift();console.log(e,...o)}function e0(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=o[1];t&&t.isStackTrace?o[0]+=" "+t.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function et(...o){o=e0(o);const e="THREE."+o.shift();{const t=o[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...o)}}function ot(...o){o=e0(o);const e="THREE."+o.shift();{const t=o[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...o)}}function Oc(...o){const e=o.join(" ");e in yg||(yg[e]=!0,et(...o))}function Vy(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const Hy={[_h]:vh,[xh]:Mh,[yh]:Eh,[To]:Sh,[vh]:_h,[Mh]:xh,[Eh]:yh,[Sh]:To};class Ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sg=1234567;const La=Math.PI/180,Ro=180/Math.PI;function Ni(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function vt(o,e,t){return Math.max(e,Math.min(t,o))}function Ef(o,e){return(o%e+e)%e}function Gy(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function Wy(o,e,t){return o!==e?(t-o)/(e-o):0}function Na(o,e,t){return(1-t)*o+t*e}function jy(o,e,t,i){return Na(o,e,1-Math.exp(-t*i))}function Xy(o,e=1){return e-Math.abs(Ef(o,e*2)-e)}function Yy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function qy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Ky(o,e){return o+Math.floor(Math.random()*(e-o+1))}function $y(o,e){return o+Math.random()*(e-o)}function Zy(o){return o*(.5-Math.random())}function Jy(o){o!==void 0&&(Sg=o);let e=Sg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qy(o){return o*La}function eS(o){return o*Ro}function tS(o){return(o&o-1)===0&&o!==0}function nS(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function iS(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function rS(o,e,t,i,s){const a=Math.cos,c=Math.sin,d=a(t/2),h=c(t/2),f=a((e+i)/2),g=c((e+i)/2),_=a((e-i)/2),m=c((e-i)/2),x=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(d*g,h*_,h*m,d*f);break;case"YZY":o.set(h*m,d*g,h*_,d*f);break;case"ZXZ":o.set(h*_,h*m,d*g,d*f);break;case"XZX":o.set(d*g,h*M,h*x,d*f);break;case"YXY":o.set(h*x,d*g,h*M,d*f);break;case"ZYZ":o.set(h*M,h*x,d*g,d*f);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const t0={DEG2RAD:La,RAD2DEG:Ro,generateUUID:Ni,clamp:vt,euclideanModulo:Ef,mapLinear:Gy,inverseLerp:Wy,lerp:Na,damp:jy,pingpong:Xy,smoothstep:Yy,smootherstep:qy,randInt:Ky,randFloat:$y,randFloatSpread:Zy,seededRandom:Jy,degToRad:Qy,radToDeg:eS,isPowerOfTwo:tS,ceilPowerOfTwo:nS,floorPowerOfTwo:iS,setQuaternionFromProperEuler:rS,normalize:Bt,denormalize:Pi};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Di{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,d){let h=i[s+0],f=i[s+1],g=i[s+2],_=i[s+3],m=a[c+0],x=a[c+1],M=a[c+2],E=a[c+3];if(_!==E||h!==m||f!==x||g!==M){let S=h*m+f*x+g*M+_*E;S<0&&(m=-m,x=-x,M=-M,E=-E,S=-S);let y=1-d;if(S<.9995){const R=Math.acos(S),P=Math.sin(R);y=Math.sin(y*R)/P,d=Math.sin(d*R)/P,h=h*y+m*d,f=f*y+x*d,g=g*y+M*d,_=_*y+E*d}else{h=h*y+m*d,f=f*y+x*d,g=g*y+M*d,_=_*y+E*d;const R=1/Math.sqrt(h*h+f*f+g*g+_*_);h*=R,f*=R,g*=R,_*=R}}e[t]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,s,a,c){const d=i[s],h=i[s+1],f=i[s+2],g=i[s+3],_=a[c],m=a[c+1],x=a[c+2],M=a[c+3];return e[t]=d*M+g*_+h*x-f*m,e[t+1]=h*M+g*m+f*_-d*x,e[t+2]=f*M+g*x+d*m-h*_,e[t+3]=g*M-d*_-h*m-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,d=Math.cos,h=Math.sin,f=d(i/2),g=d(s/2),_=d(a/2),m=h(i/2),x=h(s/2),M=h(a/2);switch(c){case"XYZ":this._x=m*g*_+f*x*M,this._y=f*x*_-m*g*M,this._z=f*g*M+m*x*_,this._w=f*g*_-m*x*M;break;case"YXZ":this._x=m*g*_+f*x*M,this._y=f*x*_-m*g*M,this._z=f*g*M-m*x*_,this._w=f*g*_+m*x*M;break;case"ZXY":this._x=m*g*_-f*x*M,this._y=f*x*_+m*g*M,this._z=f*g*M+m*x*_,this._w=f*g*_-m*x*M;break;case"ZYX":this._x=m*g*_-f*x*M,this._y=f*x*_+m*g*M,this._z=f*g*M-m*x*_,this._w=f*g*_+m*x*M;break;case"YZX":this._x=m*g*_+f*x*M,this._y=f*x*_+m*g*M,this._z=f*g*M-m*x*_,this._w=f*g*_-m*x*M;break;case"XZY":this._x=m*g*_-f*x*M,this._y=f*x*_-m*g*M,this._z=f*g*M+m*x*_,this._w=f*g*_+m*x*M;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],d=t[5],h=t[9],f=t[2],g=t[6],_=t[10],m=i+d+_;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(g-h)*x,this._y=(a-f)*x,this._z=(c-s)*x}else if(i>d&&i>_){const x=2*Math.sqrt(1+i-d-_);this._w=(g-h)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(a+f)/x}else if(d>_){const x=2*Math.sqrt(1+d-i-_);this._w=(a-f)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(h+g)/x}else{const x=2*Math.sqrt(1+_-i-d);this._w=(c-s)/x,this._x=(a+f)/x,this._y=(h+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,d=t._x,h=t._y,f=t._z,g=t._w;return this._x=i*g+c*d+s*f-a*h,this._y=s*g+c*h+a*d-i*f,this._z=a*g+c*f+i*h-s*d,this._w=c*g-i*d-s*h-a*f,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,a=e._z,c=e._w,d=this.dot(e);d<0&&(i=-i,s=-s,a=-a,c=-c,d=-d);let h=1-t;if(d<.9995){const f=Math.acos(d),g=Math.sin(f);h=Math.sin(h*f)/g,t=Math.sin(t*f)/g,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,d=e.z,h=e.w,f=2*(c*s-d*i),g=2*(d*t-a*s),_=2*(a*i-c*t);return this.x=t+h*f+c*_-d*g,this.y=i+h*g+d*f-a*_,this.z=s+h*_+a*g-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,d=t.y,h=t.z;return this.x=s*h-a*d,this.y=a*c-i*h,this.z=i*d-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new K,Mg=new Di;class mt{constructor(e,t,i,s,a,c,d,h,f){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,d,h,f)}set(e,t,i,s,a,c,d,h,f){const g=this.elements;return g[0]=e,g[1]=s,g[2]=d,g[3]=t,g[4]=a,g[5]=h,g[6]=i,g[7]=c,g[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],d=i[3],h=i[6],f=i[1],g=i[4],_=i[7],m=i[2],x=i[5],M=i[8],E=s[0],S=s[3],y=s[6],R=s[1],P=s[4],C=s[7],D=s[2],I=s[5],O=s[8];return a[0]=c*E+d*R+h*D,a[3]=c*S+d*P+h*I,a[6]=c*y+d*C+h*O,a[1]=f*E+g*R+_*D,a[4]=f*S+g*P+_*I,a[7]=f*y+g*C+_*O,a[2]=m*E+x*R+M*D,a[5]=m*S+x*P+M*I,a[8]=m*y+x*C+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],d=e[5],h=e[6],f=e[7],g=e[8];return t*c*g-t*d*f-i*a*g+i*d*h+s*a*f-s*c*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],d=e[5],h=e[6],f=e[7],g=e[8],_=g*c-d*f,m=d*h-g*a,x=f*a-c*h,M=t*_+i*m+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=_*E,e[1]=(s*f-g*i)*E,e[2]=(d*i-s*c)*E,e[3]=m*E,e[4]=(g*t-s*h)*E,e[5]=(s*a-d*t)*E,e[6]=x*E,e[7]=(i*h-f*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,d){const h=Math.cos(a),f=Math.sin(a);return this.set(i*h,i*f,-i*(h*c+f*d)+c+e,-s*f,s*h,-s*(-f*c+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Dd.makeScale(e,t)),this}rotate(e){return this.premultiply(Dd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dd=new mt,Eg=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tg=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sS(){const o={enabled:!0,workingColorSpace:kn,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===kt&&(s.r=Sr(s.r),s.g=Sr(s.g),s.b=Sr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(s.r=Mo(s.r),s.g=Mo(s.g),s.b=Mo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?Uc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Oc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Oc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[kn]:{primaries:e,whitePoint:i,transfer:Uc,toXYZ:Eg,fromXYZ:Tg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:kt,toXYZ:Eg,fromXYZ:Tg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),o}const wt=sS();function Sr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Mo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let io;class oS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{io===void 0&&(io=Ba("canvas")),io.width=e.width,io.height=e.height;const s=io.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=io}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=Sr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Sr(t[i]/255)*255):t[i]=Sr(t[i]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aS=0;class Tf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,d=s.length;c<d;c++)s[c].isDataTexture?a.push(Id(s[c].image)):a.push(Id(s[c]))}else a=Id(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function Id(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?oS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let lS=0;const Ud=new K;class Sn extends Ls{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,i=ji,s=ji,a=fn,c=vr,d=xi,h=ni,f=Sn.DEFAULT_ANISOTROPY,g=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Ni(),this.name="",this.source=new Tf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=d,this.internalFormat=null,this.type=h,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ud).x}get height(){return this.source.getSize(Ud).y}get depth(){return this.source.getSize(Ud).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==W_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ao:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case Ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ao:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case Ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=W_;Sn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,i=0,s=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const h=e.elements,f=h[0],g=h[4],_=h[8],m=h[1],x=h[5],M=h[9],E=h[2],S=h[6],y=h[10];if(Math.abs(g-m)<.01&&Math.abs(_-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+m)<.1&&Math.abs(_+E)<.1&&Math.abs(M+S)<.1&&Math.abs(f+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(f+1)/2,C=(x+1)/2,D=(y+1)/2,I=(g+m)/4,O=(_+E)/4,w=(M+S)/4;return P>C&&P>D?P<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(P),s=I/i,a=O/i):C>D?C<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(C),i=I/s,a=w/s):D<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(D),i=O/a,s=w/a),this.set(i,s,a,t),this}let R=Math.sqrt((S-M)*(S-M)+(_-E)*(_-E)+(m-g)*(m-g));return Math.abs(R)<.001&&(R=1),this.x=(S-M)/R,this.y=(_-E)/R,this.z=(m-g)/R,this.w=Math.acos((f+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cS extends Ls{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},a=new Sn(s),c=i.count;for(let d=0;d<c;d++)this.textures[d]=a.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Tf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends cS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class n0 extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uS extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _t{constructor(e,t,i,s,a,c,d,h,f,g,_,m,x,M,E,S){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,d,h,f,g,_,m,x,M,E,S)}set(e,t,i,s,a,c,d,h,f,g,_,m,x,M,E,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=s,y[1]=a,y[5]=c,y[9]=d,y[13]=h,y[2]=f,y[6]=g,y[10]=_,y[14]=m,y[3]=x,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ro.setFromMatrixColumn(e,0).length(),a=1/ro.setFromMatrixColumn(e,1).length(),c=1/ro.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),d=Math.sin(i),h=Math.cos(s),f=Math.sin(s),g=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const m=c*g,x=c*_,M=d*g,E=d*_;t[0]=h*g,t[4]=-h*_,t[8]=f,t[1]=x+M*f,t[5]=m-E*f,t[9]=-d*h,t[2]=E-m*f,t[6]=M+x*f,t[10]=c*h}else if(e.order==="YXZ"){const m=h*g,x=h*_,M=f*g,E=f*_;t[0]=m+E*d,t[4]=M*d-x,t[8]=c*f,t[1]=c*_,t[5]=c*g,t[9]=-d,t[2]=x*d-M,t[6]=E+m*d,t[10]=c*h}else if(e.order==="ZXY"){const m=h*g,x=h*_,M=f*g,E=f*_;t[0]=m-E*d,t[4]=-c*_,t[8]=M+x*d,t[1]=x+M*d,t[5]=c*g,t[9]=E-m*d,t[2]=-c*f,t[6]=d,t[10]=c*h}else if(e.order==="ZYX"){const m=c*g,x=c*_,M=d*g,E=d*_;t[0]=h*g,t[4]=M*f-x,t[8]=m*f+E,t[1]=h*_,t[5]=E*f+m,t[9]=x*f-M,t[2]=-f,t[6]=d*h,t[10]=c*h}else if(e.order==="YZX"){const m=c*h,x=c*f,M=d*h,E=d*f;t[0]=h*g,t[4]=E-m*_,t[8]=M*_+x,t[1]=_,t[5]=c*g,t[9]=-d*g,t[2]=-f*g,t[6]=x*_+M,t[10]=m-E*_}else if(e.order==="XZY"){const m=c*h,x=c*f,M=d*h,E=d*f;t[0]=h*g,t[4]=-_,t[8]=f*g,t[1]=m*_+E,t[5]=c*g,t[9]=x*_-M,t[2]=M*_-x,t[6]=d*g,t[10]=E*_+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dS,e,hS)}lookAt(e,t,i){const s=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Xr.crossVectors(i,ei),Xr.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Xr.crossVectors(i,ei)),Xr.normalize(),Zl.crossVectors(ei,Xr),s[0]=Xr.x,s[4]=Zl.x,s[8]=ei.x,s[1]=Xr.y,s[5]=Zl.y,s[9]=ei.y,s[2]=Xr.z,s[6]=Zl.z,s[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],d=i[4],h=i[8],f=i[12],g=i[1],_=i[5],m=i[9],x=i[13],M=i[2],E=i[6],S=i[10],y=i[14],R=i[3],P=i[7],C=i[11],D=i[15],I=s[0],O=s[4],w=s[8],L=s[12],oe=s[1],F=s[5],X=s[9],j=s[13],ne=s[2],$=s[6],J=s[10],G=s[14],Q=s[3],ae=s[7],ue=s[11],k=s[15];return a[0]=c*I+d*oe+h*ne+f*Q,a[4]=c*O+d*F+h*$+f*ae,a[8]=c*w+d*X+h*J+f*ue,a[12]=c*L+d*j+h*G+f*k,a[1]=g*I+_*oe+m*ne+x*Q,a[5]=g*O+_*F+m*$+x*ae,a[9]=g*w+_*X+m*J+x*ue,a[13]=g*L+_*j+m*G+x*k,a[2]=M*I+E*oe+S*ne+y*Q,a[6]=M*O+E*F+S*$+y*ae,a[10]=M*w+E*X+S*J+y*ue,a[14]=M*L+E*j+S*G+y*k,a[3]=R*I+P*oe+C*ne+D*Q,a[7]=R*O+P*F+C*$+D*ae,a[11]=R*w+P*X+C*J+D*ue,a[15]=R*L+P*j+C*G+D*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],d=e[5],h=e[9],f=e[13],g=e[2],_=e[6],m=e[10],x=e[14],M=e[3],E=e[7],S=e[11],y=e[15],R=h*x-f*m,P=d*x-f*_,C=d*m-h*_,D=c*x-f*g,I=c*m-h*g,O=c*_-d*g;return t*(E*R-S*P+y*C)-i*(M*R-S*D+y*I)+s*(M*P-E*D+y*O)-a*(M*C-E*I+S*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],d=e[5],h=e[6],f=e[7],g=e[8],_=e[9],m=e[10],x=e[11],M=e[12],E=e[13],S=e[14],y=e[15],R=t*d-i*c,P=t*h-s*c,C=t*f-a*c,D=i*h-s*d,I=i*f-a*d,O=s*f-a*h,w=g*E-_*M,L=g*S-m*M,oe=g*y-x*M,F=_*S-m*E,X=_*y-x*E,j=m*y-x*S,ne=R*j-P*X+C*F+D*oe-I*L+O*w;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/ne;return e[0]=(d*j-h*X+f*F)*$,e[1]=(s*X-i*j-a*F)*$,e[2]=(E*O-S*I+y*D)*$,e[3]=(m*I-_*O-x*D)*$,e[4]=(h*oe-c*j-f*L)*$,e[5]=(t*j-s*oe+a*L)*$,e[6]=(S*C-M*O-y*P)*$,e[7]=(g*O-m*C+x*P)*$,e[8]=(c*X-d*oe+f*w)*$,e[9]=(i*oe-t*X-a*w)*$,e[10]=(M*I-E*C+y*R)*$,e[11]=(_*C-g*I-x*R)*$,e[12]=(d*L-c*F-h*w)*$,e[13]=(t*F-i*L+s*w)*$,e[14]=(E*P-M*D-S*R)*$,e[15]=(g*D-_*P+m*R)*$,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,d=e.y,h=e.z,f=a*c,g=a*d;return this.set(f*c+i,f*d-s*h,f*h+s*d,0,f*d+s*h,g*d+i,g*h-s*c,0,f*h-s*d,g*h+s*c,a*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,d=t._z,h=t._w,f=a+a,g=c+c,_=d+d,m=a*f,x=a*g,M=a*_,E=c*g,S=c*_,y=d*_,R=h*f,P=h*g,C=h*_,D=i.x,I=i.y,O=i.z;return s[0]=(1-(E+y))*D,s[1]=(x+C)*D,s[2]=(M-P)*D,s[3]=0,s[4]=(x-C)*I,s[5]=(1-(m+y))*I,s[6]=(S+R)*I,s[7]=0,s[8]=(M+P)*O,s[9]=(S-R)*O,s[10]=(1-(m+E))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinant();if(a===0)return i.set(1,1,1),t.identity(),this;let c=ro.set(s[0],s[1],s[2]).length();const d=ro.set(s[4],s[5],s[6]).length(),h=ro.set(s[8],s[9],s[10]).length();a<0&&(c=-c),bi.copy(this);const f=1/c,g=1/d,_=1/h;return bi.elements[0]*=f,bi.elements[1]*=f,bi.elements[2]*=f,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=_,bi.elements[9]*=_,bi.elements[10]*=_,t.setFromRotationMatrix(bi),i.x=c,i.y=d,i.z=h,this}makePerspective(e,t,i,s,a,c,d=Xi,h=!1){const f=this.elements,g=2*a/(t-e),_=2*a/(i-s),m=(t+e)/(t-e),x=(i+s)/(i-s);let M,E;if(h)M=a/(c-a),E=c*a/(c-a);else if(d===Xi)M=-(c+a)/(c-a),E=-2*c*a/(c-a);else if(d===ka)M=-c/(c-a),E=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=g,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=_,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,a,c,d=Xi,h=!1){const f=this.elements,g=2/(t-e),_=2/(i-s),m=-(t+e)/(t-e),x=-(i+s)/(i-s);let M,E;if(h)M=1/(c-a),E=c/(c-a);else if(d===Xi)M=-2/(c-a),E=-(c+a)/(c-a);else if(d===ka)M=-1/(c-a),E=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=g,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=_,f[9]=0,f[13]=x,f[2]=0,f[6]=0,f[10]=M,f[14]=E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ro=new K,bi=new _t,dS=new K(0,0,0),hS=new K(1,1,1),Xr=new K,Zl=new K,ei=new K,wg=new _t,Ag=new Di;class Zi{constructor(e=0,t=0,i=0,s=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],d=s[8],h=s[1],f=s[5],g=s[9],_=s[2],m=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(vt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,f),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(d,a)):(this._x=Math.atan2(-g,x),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ag.setFromEuler(this),this.setFromQuaternion(Ag,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class i0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fS=0;const bg=new K,so=new Di,hr=new _t,Jl=new K,va=new K,pS=new K,mS=new Di,Rg=new K(1,0,0),Cg=new K(0,1,0),Pg=new K(0,0,1),Lg={type:"added"},gS={type:"removed"},oo={type:"childadded",child:null},Fd={type:"childremoved",child:null};class Qt extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new K,t=new Zi,i=new Di,s=new K(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new mt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(Rg,e)}rotateY(e){return this.rotateOnAxis(Cg,e)}rotateZ(e){return this.rotateOnAxis(Pg,e)}translateOnAxis(e,t){return bg.copy(e).applyQuaternion(this.quaternion),this.position.add(bg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rg,e)}translateY(e){return this.translateOnAxis(Cg,e)}translateZ(e){return this.translateOnAxis(Pg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jl.copy(e):Jl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(va,Jl,this.up):hr.lookAt(Jl,va,this.up),this.quaternion.setFromRotationMatrix(hr),s&&(hr.extractRotation(s.matrixWorld),so.setFromRotationMatrix(hr),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lg),oo.child=e,this.dispatchEvent(oo),oo.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gS),Fd.child=e,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lg),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,pS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,mS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*s,a[13]+=i-a[1]*t-a[5]*i-a[9]*s,a[14]+=s-a[2]*t-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let f=0,g=h.length;f<g;f++){const _=h[f];a(e.shapes,_)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,f=this.material.length;h<f;h++)d.push(a(e.materials,this.material[h]));s.material=d}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];s.animations.push(a(e.animations,h))}}if(t){const d=c(e.geometries),h=c(e.materials),f=c(e.textures),g=c(e.images),_=c(e.shapes),m=c(e.skeletons),x=c(e.animations),M=c(e.nodes);d.length>0&&(i.geometries=d),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),g.length>0&&(i.images=g),_.length>0&&(i.shapes=_),m.length>0&&(i.skeletons=m),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(d){const h=[];for(const f in d){const g=d[f];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Qt.DEFAULT_UP=new K(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ts extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _S={type:"move"};class Od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const d=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),y=this._getHandJoint(f,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],m=g.position.distanceTo(_.position),x=.02,M=.005;f.inputState.pinching&&m>x+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=x-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(_S)))}return d!==null&&(d.visible=s!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ts;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const r0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function kd(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=wt.workingColorSpace){if(e=Ef(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=kd(c,a,e+1/3),this.g=kd(c,a,e),this.b=kd(c,a,e-1/3)}return wt.colorSpaceToWorking(this,s),this}setStyle(e,t=yn){function i(a){a!==void 0&&parseFloat(a)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],d=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const i=r0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return wt.workingToColorSpace(Cn.copy(this),e),Math.round(vt(Cn.r*255,0,255))*65536+Math.round(vt(Cn.g*255,0,255))*256+Math.round(vt(Cn.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(Cn.copy(this),t);const i=Cn.r,s=Cn.g,a=Cn.b,c=Math.max(i,s,a),d=Math.min(i,s,a);let h,f;const g=(d+c)/2;if(d===c)h=0,f=0;else{const _=c-d;switch(f=g<=.5?_/(c+d):_/(2-c-d),c){case i:h=(s-a)/_+(s<a?6:0);break;case s:h=(a-i)/_+2;break;case a:h=(i-s)/_+4;break}h/=6}return e.h=h,e.s=f,e.l=g,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=yn){wt.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,i=Cn.g,s=Cn.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(Ql);const i=Na(Yr.h,Ql.h,t),s=Na(Yr.s,Ql.s,t),a=Na(Yr.l,Ql.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new ut;ut.NAMES=r0;class vS extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ri=new K,fr=new K,Bd=new K,pr=new K,ao=new K,lo=new K,Ng=new K,zd=new K,Vd=new K,Hd=new K,Gd=new qt,Wd=new qt,jd=new qt;class Li{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ri.subVectors(e,t),s.cross(Ri);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Ri.subVectors(s,t),fr.subVectors(i,t),Bd.subVectors(e,t);const c=Ri.dot(Ri),d=Ri.dot(fr),h=Ri.dot(Bd),f=fr.dot(fr),g=fr.dot(Bd),_=c*f-d*d;if(_===0)return a.set(0,0,0),null;const m=1/_,x=(f*h-d*g)*m,M=(c*g-d*h)*m;return a.set(1-x-M,M,x)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,i,s,a,c,d,h){return this.getBarycoord(e,t,i,s,pr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,pr.x),h.addScaledVector(c,pr.y),h.addScaledVector(d,pr.z),h)}static getInterpolatedAttribute(e,t,i,s,a,c){return Gd.setScalar(0),Wd.setScalar(0),jd.setScalar(0),Gd.fromBufferAttribute(e,t),Wd.fromBufferAttribute(e,i),jd.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Gd,a.x),c.addScaledVector(Wd,a.y),c.addScaledVector(jd,a.z),c}static isFrontFacing(e,t,i,s){return Ri.subVectors(i,t),fr.subVectors(e,t),Ri.cross(fr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Ri.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Li.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,d;ao.subVectors(s,i),lo.subVectors(a,i),zd.subVectors(e,i);const h=ao.dot(zd),f=lo.dot(zd);if(h<=0&&f<=0)return t.copy(i);Vd.subVectors(e,s);const g=ao.dot(Vd),_=lo.dot(Vd);if(g>=0&&_<=g)return t.copy(s);const m=h*_-g*f;if(m<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(i).addScaledVector(ao,c);Hd.subVectors(e,a);const x=ao.dot(Hd),M=lo.dot(Hd);if(M>=0&&x<=M)return t.copy(a);const E=x*f-h*M;if(E<=0&&f>=0&&M<=0)return d=f/(f-M),t.copy(i).addScaledVector(lo,d);const S=g*M-x*_;if(S<=0&&_-g>=0&&x-M>=0)return Ng.subVectors(a,s),d=(_-g)/(_-g+(x-M)),t.copy(s).addScaledVector(Ng,d);const y=1/(S+E+m);return c=E*y,d=m*y,t.copy(i).addScaledVector(ao,c).addScaledVector(lo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qi{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=a.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Ci):Ci.fromBufferAttribute(a,c),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ec.copy(i.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),tc.subVectors(this.max,xa),co.subVectors(e.a,xa),uo.subVectors(e.b,xa),ho.subVectors(e.c,xa),qr.subVectors(uo,co),Kr.subVectors(ho,uo),xs.subVectors(co,ho);let t=[0,-qr.z,qr.y,0,-Kr.z,Kr.y,0,-xs.z,xs.y,qr.z,0,-qr.x,Kr.z,0,-Kr.x,xs.z,0,-xs.x,-qr.y,qr.x,0,-Kr.y,Kr.x,0,-xs.y,xs.x,0];return!Xd(t,co,uo,ho,tc)||(t=[1,0,0,0,1,0,0,0,1],!Xd(t,co,uo,ho,tc))?!1:(nc.crossVectors(qr,Kr),t=[nc.x,nc.y,nc.z],Xd(t,co,uo,ho,tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mr=[new K,new K,new K,new K,new K,new K,new K,new K],Ci=new K,ec=new Qi,co=new K,uo=new K,ho=new K,qr=new K,Kr=new K,xs=new K,xa=new K,tc=new K,nc=new K,ys=new K;function Xd(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){ys.fromArray(o,a);const d=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),h=e.dot(ys),f=t.dot(ys),g=i.dot(ys);if(Math.max(-Math.max(h,f,g),Math.min(h,f,g))>d)return!1}return!0}const ln=new K,ic=new dt;let xS=0;class On{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rf,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),s=Bt(s,this.array),a=Bt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rf&&(e.usage=this.usage),e}}class s0 extends On{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class o0 extends On{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ii extends On{constructor(e,t,i){super(new Float32Array(e),t,i)}}const yS=new Qi,ya=new K,Yd=new K;class er{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yS.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);const t=ya.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ya,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(Yd)),this.expandByPoint(ya.copy(e.center).sub(Yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let SS=0;const mi=new _t,qd=new Qt,fo=new K,ti=new Qi,Sa=new Qi,xn=new K;class si extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ky(e)?o0:s0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new mt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,i){return mi.makeTranslation(e,t,i),this.applyMatrix4(mi),this}scale(e,t,i){return mi.makeScale(e,t,i),this.applyMatrix4(mi),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ii(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const d=t[a];Sa.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ti.min,Sa.min),ti.expandByPoint(xn),xn.addVectors(ti.max,Sa.max),ti.expandByPoint(xn)):(ti.expandByPoint(Sa.min),ti.expandByPoint(Sa.max))}ti.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)xn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(xn));if(t)for(let a=0,c=t.length;a<c;a++){const d=t[a],h=this.morphTargetsRelative;for(let f=0,g=d.count;f<g;f++)xn.fromBufferAttribute(d,f),h&&(fo.fromBufferAttribute(e,f),xn.add(fo)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let w=0;w<i.count;w++)d[w]=new K,h[w]=new K;const f=new K,g=new K,_=new K,m=new dt,x=new dt,M=new dt,E=new K,S=new K;function y(w,L,oe){f.fromBufferAttribute(i,w),g.fromBufferAttribute(i,L),_.fromBufferAttribute(i,oe),m.fromBufferAttribute(a,w),x.fromBufferAttribute(a,L),M.fromBufferAttribute(a,oe),g.sub(f),_.sub(f),x.sub(m),M.sub(m);const F=1/(x.x*M.y-M.x*x.y);isFinite(F)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(_,-x.y).multiplyScalar(F),S.copy(_).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(F),d[w].add(E),d[L].add(E),d[oe].add(E),h[w].add(S),h[L].add(S),h[oe].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,L=R.length;w<L;++w){const oe=R[w],F=oe.start,X=oe.count;for(let j=F,ne=F+X;j<ne;j+=3)y(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const P=new K,C=new K,D=new K,I=new K;function O(w){D.fromBufferAttribute(s,w),I.copy(D);const L=d[w];P.copy(L),P.sub(D.multiplyScalar(D.dot(L))).normalize(),C.crossVectors(I,L);const F=C.dot(h[w])<0?-1:1;c.setXYZW(w,P.x,P.y,P.z,F)}for(let w=0,L=R.length;w<L;++w){const oe=R[w],F=oe.start,X=oe.count;for(let j=F,ne=F+X;j<ne;j+=3)O(e.getX(j+0)),O(e.getX(j+1)),O(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,x=i.count;m<x;m++)i.setXYZ(m,0,0,0);const s=new K,a=new K,c=new K,d=new K,h=new K,f=new K,g=new K,_=new K;if(e)for(let m=0,x=e.count;m<x;m+=3){const M=e.getX(m+0),E=e.getX(m+1),S=e.getX(m+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),g.subVectors(c,a),_.subVectors(s,a),g.cross(_),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),d.add(g),h.add(g),f.add(g),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(E,h.x,h.y,h.z),i.setXYZ(S,f.x,f.y,f.z)}else for(let m=0,x=t.count;m<x;m+=3)s.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,a),_.subVectors(s,a),g.cross(_),i.setXYZ(m+0,g.x,g.y,g.z),i.setXYZ(m+1,g.x,g.y,g.z),i.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(d,h){const f=d.array,g=d.itemSize,_=d.normalized,m=new f.constructor(h.length*g);let x=0,M=0;for(let E=0,S=h.length;E<S;E++){d.isInterleavedBufferAttribute?x=h[E]*d.data.stride+d.offset:x=h[E]*g;for(let y=0;y<g;y++)m[M++]=f[x++]}return new On(m,g,_)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new si,i=this.index.array,s=this.attributes;for(const d in s){const h=s[d],f=e(h,i);t.setAttribute(d,f)}const a=this.morphAttributes;for(const d in a){const h=[],f=a[d];for(let g=0,_=f.length;g<_;g++){const m=f[g],x=e(m,i);h.push(x)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const f=c[d];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const f=i[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],g=[];for(let _=0,m=f.length;_<m;_++){const x=f[_];g.push(x.toJSON(e.data))}g.length>0&&(s[h]=g,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const f in s){const g=s[f];this.setAttribute(f,g.clone(t))}const a=e.morphAttributes;for(const f in a){const g=[],_=a[f];for(let m=0,x=_.length;m<x;m++)g.push(_[m].clone(t));this.morphAttributes[f]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,g=c.length;f<g;f++){const _=c[f];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class MS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rf,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const In=new K;class wf{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),s=Bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),s=Bt(s,this.array),a=Bt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Fc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new On(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Fc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ES=0;class Ki extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=So,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==So&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mh&&(i.blendSrc=this.blendSrc),this.blendDst!==gh&&(i.blendDst=this.blendDst),this.blendEquation!==As&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(i.stencilFail=this.stencilFail),this.stencilZFail!==no&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const d in a){const h=a[d];delete h.metadata,c.push(h)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gr=new K,Kd=new K,rc=new K,$r=new K,$d=new K,sc=new K,Zd=new K;class Va{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Kd.copy(e).add(t).multiplyScalar(.5),rc.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(Kd);const a=e.distanceTo(t)*.5,c=-this.direction.dot(rc),d=$r.dot(this.direction),h=-$r.dot(rc),f=$r.lengthSq(),g=Math.abs(1-c*c);let _,m,x,M;if(g>0)if(_=c*h-d,m=c*d-h,M=a*g,_>=0)if(m>=-M)if(m<=M){const E=1/g;_*=E,m*=E,x=_*(_+c*m+2*d)+m*(c*_+m+2*h)+f}else m=a,_=Math.max(0,-(c*m+d)),x=-_*_+m*(m+2*h)+f;else m=-a,_=Math.max(0,-(c*m+d)),x=-_*_+m*(m+2*h)+f;else m<=-M?(_=Math.max(0,-(-c*a+d)),m=_>0?-a:Math.min(Math.max(-a,-h),a),x=-_*_+m*(m+2*h)+f):m<=M?(_=0,m=Math.min(Math.max(-a,-h),a),x=m*(m+2*h)+f):(_=Math.max(0,-(c*a+d)),m=_>0?a:Math.min(Math.max(-a,-h),a),x=-_*_+m*(m+2*h)+f);else m=c>0?-a:a,_=Math.max(0,-(c*m+d)),x=-_*_+m*(m+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(Kd).addScaledVector(rc,m),x}intersectSphere(e,t){gr.subVectors(e.center,this.origin);const i=gr.dot(this.direction),s=gr.dot(gr)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),d=i-c,h=i+c;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,d,h;const f=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,m=this.origin;return f>=0?(i=(e.min.x-m.x)*f,s=(e.max.x-m.x)*f):(i=(e.max.x-m.x)*f,s=(e.min.x-m.x)*f),g>=0?(a=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(a=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),_>=0?(d=(e.min.z-m.z)*_,h=(e.max.z-m.z)*_):(d=(e.max.z-m.z)*_,h=(e.min.z-m.z)*_),i>h||d>s)||((d>i||i!==i)&&(i=d),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,i,s,a){$d.subVectors(t,e),sc.subVectors(i,e),Zd.crossVectors($d,sc);let c=this.direction.dot(Zd),d;if(c>0){if(s)return null;d=1}else if(c<0)d=-1,c=-c;else return null;$r.subVectors(this.origin,e);const h=d*this.direction.dot(sc.crossVectors($r,sc));if(h<0)return null;const f=d*this.direction.dot($d.cross($r));if(f<0||h+f>c)return null;const g=-d*$r.dot(Zd);return g<0?null:this.at(g/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cs extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=O_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dg=new _t,Ss=new Va,oc=new er,Ig=new K,ac=new K,lc=new K,cc=new K,Jd=new K,uc=new K,Ug=new K,dc=new K;class ri extends Qt{constructor(e=new si,t=new Cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const d=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(a&&d){uc.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const g=d[h],_=a[h];g!==0&&(Jd.fromBufferAttribute(_,e),c?uc.addScaledVector(Jd,g):uc.addScaledVector(Jd.sub(t),g))}t.add(uc)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oc.copy(i.boundingSphere),oc.applyMatrix4(a),Ss.copy(e.ray).recast(e.near),!(oc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(oc,Ig)===null||Ss.origin.distanceToSquared(Ig)>(e.far-e.near)**2))&&(Dg.copy(a).invert(),Ss.copy(e.ray).applyMatrix4(Dg),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,d=a.index,h=a.attributes.position,f=a.attributes.uv,g=a.attributes.uv1,_=a.attributes.normal,m=a.groups,x=a.drawRange;if(d!==null)if(Array.isArray(c))for(let M=0,E=m.length;M<E;M++){const S=m[M],y=c[S.materialIndex],R=Math.max(S.start,x.start),P=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let C=R,D=P;C<D;C+=3){const I=d.getX(C),O=d.getX(C+1),w=d.getX(C+2);s=hc(this,y,e,i,f,g,_,I,O,w),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(d.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const R=d.getX(S),P=d.getX(S+1),C=d.getX(S+2);s=hc(this,c,e,i,f,g,_,R,P,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,E=m.length;M<E;M++){const S=m[M],y=c[S.materialIndex],R=Math.max(S.start,x.start),P=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let C=R,D=P;C<D;C+=3){const I=C,O=C+1,w=C+2;s=hc(this,y,e,i,f,g,_,I,O,w),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(h.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const R=S,P=S+1,C=S+2;s=hc(this,c,e,i,f,g,_,R,P,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function TS(o,e,t,i,s,a,c,d){let h;if(e.side===qn?h=i.intersectTriangle(c,a,s,!0,d):h=i.intersectTriangle(s,a,c,e.side===Mr,d),h===null)return null;dc.copy(d),dc.applyMatrix4(o.matrixWorld);const f=t.ray.origin.distanceTo(dc);return f<t.near||f>t.far?null:{distance:f,point:dc.clone(),object:o}}function hc(o,e,t,i,s,a,c,d,h,f){o.getVertexPosition(d,ac),o.getVertexPosition(h,lc),o.getVertexPosition(f,cc);const g=TS(o,e,t,i,ac,lc,cc,Ug);if(g){const _=new K;Li.getBarycoord(Ug,ac,lc,cc,_),s&&(g.uv=Li.getInterpolatedAttribute(s,d,h,f,_,new dt)),a&&(g.uv1=Li.getInterpolatedAttribute(a,d,h,f,_,new dt)),c&&(g.normal=Li.getInterpolatedAttribute(c,d,h,f,_,new K),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const m={a:d,b:h,c:f,normal:new K,materialIndex:0};Li.getNormal(ac,lc,cc,m.normal),g.face=m,g.barycoord=_}return g}const Fg=new K,Og=new qt,kg=new qt,wS=new K,Bg=new _t,fc=new K,Qd=new er,zg=new _t,eh=new Va;class AS extends ri{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fg,this.bindMatrix=new _t,this.bindMatrixInverse=new _t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fc),this.boundingBox.expandByPoint(fc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new er),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fc),this.boundingSphere.expandByPoint(fc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qd.copy(this.boundingSphere),Qd.applyMatrix4(s),e.ray.intersectsSphere(Qd)!==!1&&(zg.copy(s).invert(),eh.copy(e.ray).applyMatrix4(zg),!(this.boundingBox!==null&&eh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,eh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===by?this.bindMatrixInverse.copy(this.bindMatrix).invert():et("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Og.fromBufferAttribute(s.attributes.skinIndex,e),kg.fromBufferAttribute(s.attributes.skinWeight,e),Fg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=kg.getComponent(a);if(c!==0){const d=Og.getComponent(a);Bg.multiplyMatrices(i.bones[d].matrixWorld,i.boneInverses[d]),t.addScaledVector(wS.copy(Fg).applyMatrix4(Bg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class a0 extends Qt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Af extends Sn{constructor(e=null,t=1,i=1,s,a,c,d,h,f=hn,g=hn,_,m){super(null,c,d,h,f,g,s,a,_,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vg=new _t,bS=new _t;class bf{constructor(e=[],t=[]){this.uuid=Ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){et("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new _t)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new _t;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const d=e[a]?e[a].matrixWorld:bS;Vg.multiplyMatrices(d,t[a]),Vg.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new bf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Af(t,e,e,xi,vi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(et("Skeleton: No bone found with UUID:",a),c=new a0),this.bones.push(c),this.boneInverses.push(new _t().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const d=i[s];e.boneInverses.push(d.toArray())}return e}}class sf extends On{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const po=new _t,Hg=new _t,pc=[],Gg=new Qi,RS=new _t,Ma=new ri,Ea=new er;class CS extends ri{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sf(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,RS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,po),Gg.copy(e.boundingBox).applyMatrix4(po),this.boundingBox.union(Gg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new er),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,po),Ea.copy(e.boundingSphere).applyMatrix4(po),this.boundingSphere.union(Ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let d=0;d<i.length;d++)i[d]=s[c+d]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ma.geometry=this.geometry,Ma.material=this.material,Ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(i),e.ray.intersectsSphere(Ea)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,po),Hg.multiplyMatrices(i,po),Ma.matrixWorld=Hg,Ma.raycast(e,pc);for(let c=0,d=pc.length;c<d;c++){const h=pc[c];h.instanceId=a,h.object=this,t.push(h)}pc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Af(new Float32Array(s*this.count),s,this.count,_f,vi));const a=this.morphTexture.source.data.data;let c=0;for(let f=0;f<i.length;f++)c+=i[f];const d=this.geometry.morphTargetsRelative?1:1-c,h=s*e;a[h]=d,a.set(i,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const th=new K,PS=new K,LS=new mt;class Qr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=th.subVectors(i,t).cross(PS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(th),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||LS.getNormalMatrix(e),s=this.coplanarPoint(th).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new er,NS=new dt(.5,.5),mc=new K;class Rf{constructor(e=new Qr,t=new Qr,i=new Qr,s=new Qr,a=new Qr,c=new Qr){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(i),d[3].copy(s),d[4].copy(a),d[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xi,i=!1){const s=this.planes,a=e.elements,c=a[0],d=a[1],h=a[2],f=a[3],g=a[4],_=a[5],m=a[6],x=a[7],M=a[8],E=a[9],S=a[10],y=a[11],R=a[12],P=a[13],C=a[14],D=a[15];if(s[0].setComponents(f-c,x-g,y-M,D-R).normalize(),s[1].setComponents(f+c,x+g,y+M,D+R).normalize(),s[2].setComponents(f+d,x+_,y+E,D+P).normalize(),s[3].setComponents(f-d,x-_,y-E,D-P).normalize(),i)s[4].setComponents(h,m,S,C).normalize(),s[5].setComponents(f-h,x-m,y-S,D-C).normalize();else if(s[4].setComponents(f-h,x-m,y-S,D-C).normalize(),t===Xi)s[5].setComponents(f+h,x+m,y+S,D+C).normalize();else if(t===ka)s[5].setComponents(h,m,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const t=NS.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(mc.x=s.normal.x>0?e.max.x:e.min.x,mc.y=s.normal.y>0?e.max.y:e.min.y,mc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cf extends Ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kc=new K,Bc=new K,Wg=new _t,Ta=new Va,gc=new er,nh=new K,jg=new K;class Pf extends Qt{constructor(e=new si,t=new Cf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)kc.fromBufferAttribute(t,s-1),Bc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=kc.distanceTo(Bc);e.setAttribute("lineDistance",new ii(i,1))}else et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gc.copy(i.boundingSphere),gc.applyMatrix4(s),gc.radius+=a,e.ray.intersectsSphere(gc)===!1)return;Wg.copy(s).invert(),Ta.copy(e.ray).applyMatrix4(Wg);const d=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const x=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let E=x,S=M-1;E<S;E+=f){const y=g.getX(E),R=g.getX(E+1),P=_c(this,e,Ta,h,y,R,E);P&&t.push(P)}if(this.isLineLoop){const E=g.getX(M-1),S=g.getX(x),y=_c(this,e,Ta,h,E,S,M-1);y&&t.push(y)}}else{const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=x,S=M-1;E<S;E+=f){const y=_c(this,e,Ta,h,E,E+1,E);y&&t.push(y)}if(this.isLineLoop){const E=_c(this,e,Ta,h,M-1,x,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const d=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a}}}}}function _c(o,e,t,i,s,a,c){const d=o.geometry.attributes.position;if(kc.fromBufferAttribute(d,s),Bc.fromBufferAttribute(d,a),t.distanceSqToSegment(kc,Bc,nh,jg)>i)return;nh.applyMatrix4(o.matrixWorld);const f=e.ray.origin.distanceTo(nh);if(!(f<e.near||f>e.far))return{distance:f,point:jg.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}const Xg=new K,Yg=new K;class l0 extends Pf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)Xg.fromBufferAttribute(t,s),Yg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Xg.distanceTo(Yg);e.setAttribute("lineDistance",new ii(i,1))}else et("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class DS extends Pf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class c0 extends Ki{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qg=new _t,of=new Va,vc=new er,xc=new K;class IS extends Qt{constructor(e=new si,t=new c0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vc.copy(i.boundingSphere),vc.applyMatrix4(s),vc.radius+=a,e.ray.intersectsSphere(vc)===!1)return;qg.copy(s).invert(),of.copy(e.ray).applyMatrix4(qg);const d=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,f=i.index,_=i.attributes.position;if(f!==null){const m=Math.max(0,c.start),x=Math.min(f.count,c.start+c.count);for(let M=m,E=x;M<E;M++){const S=f.getX(M);xc.fromBufferAttribute(_,S),Kg(xc,S,h,s,e,t,this)}}else{const m=Math.max(0,c.start),x=Math.min(_.count,c.start+c.count);for(let M=m,E=x;M<E;M++)xc.fromBufferAttribute(_,M),Kg(xc,M,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const d=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a}}}}}function Kg(o,e,t,i,s,a,c){const d=of.distanceSqToPoint(o);if(d<t){const h=new K;of.closestPointToPoint(o,h),h.applyMatrix4(i);const f=s.ray.origin.distanceTo(h);if(f<s.near||f>s.far)return;a.push({distance:f,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class u0 extends Sn{constructor(e=[],t=Ps,i,s,a,c,d,h,f,g){super(e,t,i,s,a,c,d,h,f,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class za extends Sn{constructor(e,t,i=$i,s,a,c,d=hn,h=hn,f,g=Tr,_=1){if(g!==Tr&&g!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:_};super(m,s,a,c,d,h,g,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class US extends za{constructor(e,t=$i,i=Ps,s,a,c=hn,d=hn,h,f=Tr){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,i,s,a,c,d,h,f),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class d0 extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ha extends si{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const d=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const h=[],f=[],g=[],_=[];let m=0,x=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(h),this.setAttribute("position",new ii(f,3)),this.setAttribute("normal",new ii(g,3)),this.setAttribute("uv",new ii(_,2));function M(E,S,y,R,P,C,D,I,O,w,L){const oe=C/O,F=D/w,X=C/2,j=D/2,ne=I/2,$=O+1,J=w+1;let G=0,Q=0;const ae=new K;for(let ue=0;ue<J;ue++){const k=ue*F-j;for(let Z=0;Z<$;Z++){const be=Z*oe-X;ae[E]=be*R,ae[S]=k*P,ae[y]=ne,f.push(ae.x,ae.y,ae.z),ae[E]=0,ae[S]=0,ae[y]=I>0?1:-1,g.push(ae.x,ae.y,ae.z),_.push(Z/O),_.push(1-ue/w),G+=1}}for(let ue=0;ue<w;ue++)for(let k=0;k<O;k++){const Z=m+k+$*ue,be=m+k+$*(ue+1),je=m+(k+1)+$*(ue+1),Je=m+(k+1)+$*ue;h.push(Z,be,Je),h.push(be,je,Je),Q+=6}d.addGroup(x,Q,L),x+=Q,m+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vc extends si{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,d=Math.floor(i),h=Math.floor(s),f=d+1,g=h+1,_=e/d,m=t/h,x=[],M=[],E=[],S=[];for(let y=0;y<g;y++){const R=y*m-c;for(let P=0;P<f;P++){const C=P*_-a;M.push(C,-R,0),E.push(0,0,1),S.push(P/d),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let R=0;R<d;R++){const P=R+f*y,C=R+f*(y+1),D=R+1+f*(y+1),I=R+1+f*y;x.push(P,C,I),x.push(C,D,I)}this.setIndex(x),this.setAttribute("position",new ii(M,3)),this.setAttribute("normal",new ii(E,3)),this.setAttribute("uv",new ii(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Co(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Un(o){const e={};for(let t=0;t<o.length;t++){const i=Co(o[t]);for(const s in i)e[s]=i[s]}return e}function FS(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function h0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const OS={clone:Co,merge:Un};var kS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kS,this.fragmentShader=BS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=FS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class zS extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lf extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Q_,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tr extends Lf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class VS extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HS extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function yc(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function GS(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function $g(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const d=t[a]*e;for(let h=0;h!==e;++h)s[c++]=o[d+h]}return s}function f0(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push(...c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class Do{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let d=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===d)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const d=t[1];e<d&&(i=2,a=d);for(let h=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const d=i+c>>>1;e<t[d]?c=d:i=d+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class WS extends Do{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mg,endingEnd:mg}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,d=s[a],h=s[c];if(d===void 0)switch(this.getSettings_().endingStart){case gg:a=e,d=2*t-i;break;case _g:a=s.length-2,d=t+s[a]-s[a+1];break;default:a=e,d=i}if(h===void 0)switch(this.getSettings_().endingEnd){case gg:c=e,h=2*i-t;break;case _g:c=1,h=i+s[1]-s[0];break;default:c=e-1,h=t}const f=(i-t)*.5,g=this.valueSize;this._weightPrev=f/(t-d),this._weightNext=f/(h-i),this._offsetPrev=a*g,this._offsetNext=c*g}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=e*d,f=h-d,g=this._offsetPrev,_=this._offsetNext,m=this._weightPrev,x=this._weightNext,M=(i-t)/(s-t),E=M*M,S=E*M,y=-m*S+2*m*E-m*M,R=(1+m)*S+(-1.5-2*m)*E+(-.5+m)*M+1,P=(-1-x)*S+(1.5+x)*E+.5*M,C=x*S-x*E;for(let D=0;D!==d;++D)a[D]=y*c[g+D]+R*c[f+D]+P*c[h+D]+C*c[_+D];return a}}class jS extends Do{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=e*d,f=h-d,g=(i-t)/(s-t),_=1-g;for(let m=0;m!==d;++m)a[m]=c[f+m]*_+c[h+m]*g;return a}}class XS extends Do{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class YS extends Do{interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=e*d,f=h-d,g=this.settings||this.DefaultSettings_,_=g.inTangents,m=g.outTangents;if(!_||!m){const E=(i-t)/(s-t),S=1-E;for(let y=0;y!==d;++y)a[y]=c[f+y]*S+c[h+y]*E;return a}const x=d*2,M=e-1;for(let E=0;E!==d;++E){const S=c[f+E],y=c[h+E],R=M*x+E*2,P=m[R],C=m[R+1],D=e*x+E*2,I=_[D],O=_[D+1];let w=(i-t)/(s-t),L,oe,F,X,j;for(let ne=0;ne<8;ne++){L=w*w,oe=L*w,F=1-w,X=F*F,j=X*F;const J=j*t+3*X*w*P+3*F*L*I+oe*s-i;if(Math.abs(J)<1e-10)break;const G=3*X*(P-t)+6*F*w*(I-P)+3*L*(s-I);if(Math.abs(G)<1e-10)break;w=w-J/G,w=Math.max(0,Math.min(1,w))}a[E]=j*S+3*X*w*C+3*F*L*O+oe*y}return a}}class Ii{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yc(t,this.TimeBufferType),this.values=yc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:yc(e.times,Array),values:yc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new XS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new WS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new YS(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Fa:t=this.InterpolantFactoryMethodDiscrete;break;case Oa:t=this.InterpolantFactoryMethodLinear;break;case Ld:t=this.InterpolantFactoryMethodSmooth;break;case pg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return et("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fa;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return Ld;case this.InterpolantFactoryMethodBezier:return pg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const d=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*d,c*d)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let d=0;d!==a;d++){const h=i[d];if(typeof h=="number"&&isNaN(h)){ot("KeyframeTrack: Time is not a valid number.",this,d,h),e=!1;break}if(c!==null&&c>h){ot("KeyframeTrack: Out of order keys.",this,d,h,c),e=!1;break}c=h}if(s!==void 0&&By(s))for(let d=0,h=s.length;d!==h;++d){const f=s[d];if(isNaN(f)){ot("KeyframeTrack: Value is not a valid number.",this,d,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ld,a=e.length-1;let c=1;for(let d=1;d<a;++d){let h=!1;const f=e[d],g=e[d+1];if(f!==g&&(d!==1||f!==e[0]))if(s)h=!0;else{const _=d*i,m=_-i,x=_+i;for(let M=0;M!==i;++M){const E=t[_+M];if(E!==t[m+M]||E!==t[x+M]){h=!0;break}}}if(h){if(d!==c){e[c]=e[d];const _=d*i,m=c*i;for(let x=0;x!==i;++x)t[m+x]=t[_+x]}++c}}if(a>0){e[c]=e[a];for(let d=a*i,h=c*i,f=0;f!==i;++f)t[h+f]=t[d+f];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ii.prototype.ValueTypeName="";Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Oa;class Io extends Ii{constructor(e,t,i){super(e,t,i)}}Io.prototype.ValueTypeName="bool";Io.prototype.ValueBufferType=Array;Io.prototype.DefaultInterpolation=Fa;Io.prototype.InterpolantFactoryMethodLinear=void 0;Io.prototype.InterpolantFactoryMethodSmooth=void 0;class p0 extends Ii{constructor(e,t,i,s){super(e,t,i,s)}}p0.prototype.ValueTypeName="color";class Po extends Ii{constructor(e,t,i,s){super(e,t,i,s)}}Po.prototype.ValueTypeName="number";class qS extends Do{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=(i-t)/(s-t);let f=e*d;for(let g=f+d;f!==g;f+=4)Di.slerpFlat(a,0,c,f-d,c,f,h);return a}}class Lo extends Ii{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new qS(this.times,this.values,this.getValueSize(),e)}}Lo.prototype.ValueTypeName="quaternion";Lo.prototype.InterpolantFactoryMethodSmooth=void 0;class Uo extends Ii{constructor(e,t,i){super(e,t,i)}}Uo.prototype.ValueTypeName="string";Uo.prototype.ValueBufferType=Array;Uo.prototype.DefaultInterpolation=Fa;Uo.prototype.InterpolantFactoryMethodLinear=void 0;Uo.prototype.InterpolantFactoryMethodSmooth=void 0;class No extends Ii{constructor(e,t,i,s){super(e,t,i,s)}}No.prototype.ValueTypeName="vector";class KS{constructor(e="",t=-1,i=[],s=Ry){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ni(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,d=i.length;c!==d;++c)t.push(ZS(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,c=i.length;a!==c;++a)t.push(Ii.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let d=0;d<a;d++){let h=[],f=[];h.push((d+a-1)%a,d,(d+1)%a),f.push(0,1,0);const g=GS(h);h=$g(h,1,g),f=$g(f,1,g),!s&&h[0]===0&&(h.push(a),f.push(f[0])),c.push(new Po(".morphTargetInfluences["+t[d].name+"]",h,f).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let d=0,h=e.length;d<h;d++){const f=e[d],g=f.name.match(a);if(g&&g.length>1){const _=g[1];let m=s[_];m||(s[_]=m=[]),m.push(f)}}const c=[];for(const d in s)c.push(this.CreateFromMorphTargetSequence(d,s[d],t,i));return c}static parseAnimation(e,t){if(et("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ot("AnimationClip: No animation in JSONLoader data."),null;const i=function(_,m,x,M,E){if(x.length!==0){const S=[],y=[];f0(x,S,y,M),S.length!==0&&E.push(new _(m,S,y))}},s=[],a=e.name||"default",c=e.fps||30,d=e.blendMode;let h=e.length||-1;const f=e.hierarchy||[];for(let _=0;_<f.length;_++){const m=f[_].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const x={};let M;for(M=0;M<m.length;M++)if(m[M].morphTargets)for(let E=0;E<m[M].morphTargets.length;E++)x[m[M].morphTargets[E]]=-1;for(const E in x){const S=[],y=[];for(let R=0;R!==m[M].morphTargets.length;++R){const P=m[M];S.push(P.time),y.push(P.morphTarget===E?1:0)}s.push(new Po(".morphTargetInfluence["+E+"]",S,y))}h=x.length*c}else{const x=".bones["+t[_].name+"]";i(No,x+".position",m,"pos",s),i(Lo,x+".quaternion",m,"rot",s),i(No,x+".scale",m,"scl",s)}}return s.length===0?null:new this(a,h,s,d)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function $S(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Po;case"vector":case"vector2":case"vector3":case"vector4":return No;case"color":return p0;case"quaternion":return Lo;case"bool":case"boolean":return Io;case"string":return Uo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function ZS(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$S(o.type);if(o.times===void 0){const t=[],i=[];f0(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const xr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(Zg(o)||(this.files[o]=e))},get:function(o){if(this.enabled!==!1&&!Zg(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Zg(o){try{const e=o.slice(o.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class JS{constructor(e,t,i){const s=this;let a=!1,c=0,d=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(g){d++,a===!1&&s.onStart!==void 0&&s.onStart(g,c,d),a=!0},this.itemEnd=function(g){c++,s.onProgress!==void 0&&s.onProgress(g,c,d),c===d&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,_){return f.push(g,_),this},this.removeHandler=function(g){const _=f.indexOf(g);return _!==-1&&f.splice(_,2),this},this.getHandler=function(g){for(let _=0,m=f.length;_<m;_+=2){const x=f[_],M=f[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const QS=new JS;class Fo{constructor(e){this.manager=e!==void 0?e:QS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Fo.DEFAULT_MATERIAL_NAME="__DEFAULT";const _r={};class eM extends Error{constructor(e,t){super(e),this.response=t}}class m0 extends Fo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=xr.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(_r[e]!==void 0){_r[e].push({onLoad:t,onProgress:i,onError:s});return}_r[e]=[],_r[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,h=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&et("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const g=_r[e],_=f.body.getReader(),m=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),x=m?parseInt(m):0,M=x!==0;let E=0;const S=new ReadableStream({start(y){R();function R(){_.read().then(({done:P,value:C})=>{if(P)y.close();else{E+=C.byteLength;const D=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:x});for(let I=0,O=g.length;I<O;I++){const w=g[I];w.onProgress&&w.onProgress(D)}y.enqueue(C),R()}},P=>{y.error(P)})}}});return new Response(S)}else throw new eM(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(g=>new DOMParser().parseFromString(g,d));case"json":return f.json();default:if(d==="")return f.text();{const _=/charset="?([^;"\s]*)"?/i.exec(d),m=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(m);return f.arrayBuffer().then(M=>x.decode(M))}}}).then(f=>{xr.add(`file:${e}`,f);const g=_r[e];delete _r[e];for(let _=0,m=g.length;_<m;_++){const x=g[_];x.onLoad&&x.onLoad(f)}}).catch(f=>{const g=_r[e];if(g===void 0)throw this.manager.itemError(e),f;delete _r[e];for(let _=0,m=g.length;_<m;_++){const x=g[_];x.onError&&x.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const mo=new WeakMap;class tM extends Fo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=xr.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0);else{let _=mo.get(c);_===void 0&&(_=[],mo.set(c,_)),_.push({onLoad:t,onError:s})}return c}const d=Ba("img");function h(){g(),t&&t(this);const _=mo.get(this)||[];for(let m=0;m<_.length;m++){const x=_[m];x.onLoad&&x.onLoad(this)}mo.delete(this),a.manager.itemEnd(e)}function f(_){g(),s&&s(_),xr.remove(`image:${e}`);const m=mo.get(this)||[];for(let x=0;x<m.length;x++){const M=m[x];M.onError&&M.onError(_)}mo.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function g(){d.removeEventListener("load",h,!1),d.removeEventListener("error",f,!1)}return d.addEventListener("load",h,!1),d.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),xr.add(`image:${e}`,d),a.manager.itemStart(e),d.src=e,d}}class nM extends Fo{constructor(e){super(e)}load(e,t,i,s){const a=new Sn,c=new tM(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){a.image=d,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Hc extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ih=new _t,Jg=new K,Qg=new K;class Nf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rf,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Jg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jg),Qg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qg),t.updateMatrixWorld(),ih.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ka||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sc=new K,Mc=new Di,zi=new K;class g0 extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sc,Mc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Sc,Mc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zr=new K,e_=new dt,t_=new dt;class Fn extends g0{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,e_,t_),t.subVectors(t_,e_)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(La*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;a+=c.offsetX*s/h,t-=c.offsetY*i/f,s*=c.width/h,i*=c.height/f}const d=this.filmOffset;d!==0&&(a+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class iM extends Nf{constructor(){super(new Fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Ro*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rM extends Hc{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new iM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class sM extends Nf{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0}}class oM extends Hc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new sM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Gc extends g0{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,d=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class aM extends Nf{constructor(){super(new Gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nc extends Hc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new aM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class lM extends Hc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Da{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const rh=new WeakMap;class cM extends Fo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&et("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&et("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=xr.get(`image-bitmap:${e}`);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(f=>{if(rh.has(c)===!0)s&&s(rh.get(c)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(f),a.manager.itemEnd(e),f});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const d={};d.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",d.headers=this.requestHeader,d.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const h=fetch(e,d).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(f){return xr.add(`image-bitmap:${e}`,f),t&&t(f),a.manager.itemEnd(e),f}).catch(function(f){s&&s(f),rh.set(h,f),xr.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});xr.add(`image-bitmap:${e}`,h),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const go=-90,_o=1;class uM extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fn(go,_o,e,t);s.layers=this.layers,this.add(s);const a=new Fn(go,_o,e,t);a.layers=this.layers,this.add(a);const c=new Fn(go,_o,e,t);c.layers=this.layers,this.add(c);const d=new Fn(go,_o,e,t);d.layers=this.layers,this.add(d);const h=new Fn(go,_o,e,t);h.layers=this.layers,this.add(h);const f=new Fn(go,_o,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,d,h]=t;for(const f of t)this.remove(f);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,d,h,f,g]=this.children,_=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,3,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,m,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class dM extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Df="\\[\\]\\.:\\/",hM=new RegExp("["+Df+"]","g"),If="[^"+Df+"]",fM="[^"+Df.replace("\\.","")+"]",pM=/((?:WC+[\/:])*)/.source.replace("WC",If),mM=/(WCOD+)?/.source.replace("WCOD",fM),gM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",If),_M=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",If),vM=new RegExp("^"+pM+mM+gM+_M+"$"),xM=["material","materials","bones","map"];class yM{constructor(e,t,i){const s=i||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class zt{constructor(e,t,i){this.path=t,this.parsedPath=i||zt.parseTrackName(t),this.node=zt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new zt.Composite(e,t,i):new zt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hM,"")}static parseTrackName(e){const t=vM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);xM.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const d=a[c];if(d.name===t||d.uuid===t)return d;const h=i(d.children);if(h)return h}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=zt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=t.objectIndex;switch(i){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===f){f=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(f!==void 0){if(e[f]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const c=e[s];if(c===void 0){const f=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+f+"."+s+" but it wasn't found.",e);return}let d=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?d=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(d=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][d]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}zt.Composite=yM;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class n_{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class SM extends l0{constructor(e=10,t=10,i=4473924,s=8947848){i=new ut(i),s=new ut(s);const a=t/2,c=e/t,d=e/2,h=[],f=[];for(let m=0,x=0,M=-d;m<=t;m++,M+=c){h.push(-d,0,M,d,0,M),h.push(M,0,-d,M,0,d);const E=m===a?i:s;E.toArray(f,x),x+=3,E.toArray(f,x),x+=3,E.toArray(f,x),x+=3,E.toArray(f,x),x+=3}const g=new si;g.setAttribute("position",new ii(h,3)),g.setAttribute("color",new ii(f,3));const _=new Cf({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class MM extends Ls{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){et("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function i_(o,e,t,i){const s=EM(i);switch(t){case $_:return o*e;case _f:return o*e/s.components*s.byteLength;case vf:return o*e/s.components*s.byteLength;case bo:return o*e*2/s.components*s.byteLength;case xf:return o*e*2/s.components*s.byteLength;case Z_:return o*e*3/s.components*s.byteLength;case xi:return o*e*4/s.components*s.byteLength;case yf:return o*e*4/s.components*s.byteLength;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Lc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wh:case bh:return Math.max(o,16)*Math.max(e,8)/4;case Th:case Ah:return Math.max(o,8)*Math.max(e,8)/2;case Rh:case Ch:case Lh:case Nh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ph:case Dh:case Ih:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case kh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case zh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case jh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Kh:case $h:case Zh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Jh:case Qh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ef:case tf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function EM(o){switch(o){case ni:case X_:return{byteLength:1,components:1};case Ia:case Y_:case Er:return{byteLength:2,components:1};case mf:case gf:return{byteLength:2,components:4};case $i:case pf:case vi:return{byteLength:4,components:1};case q_:case K_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hf}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _0(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function TM(o){const e=new WeakMap;function t(d,h){const f=d.array,g=d.usage,_=f.byteLength,m=o.createBuffer();o.bindBuffer(h,m),o.bufferData(h,f,g),d.onUploadCallback();let x;if(f instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)x=o.HALF_FLOAT;else if(f instanceof Uint16Array)d.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=o.SHORT;else if(f instanceof Uint32Array)x=o.UNSIGNED_INT;else if(f instanceof Int32Array)x=o.INT;else if(f instanceof Int8Array)x=o.BYTE;else if(f instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:d.version,size:_}}function i(d,h,f){const g=h.array,_=h.updateRanges;if(o.bindBuffer(f,d),_.length===0)o.bufferSubData(f,0,g);else{_.sort((x,M)=>x.start-M.start);let m=0;for(let x=1;x<_.length;x++){const M=_[m],E=_[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++m,_[m]=E)}_.length=m+1;for(let x=0,M=_.length;x<M;x++){const E=_[x];o.bufferSubData(f,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function a(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(o.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const f=e.get(d);if(f===void 0)e.set(d,t(d,h));else if(f.version<d.version){if(f.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,d,h),f.version=d.version}}return{get:s,remove:a,update:c}}var wM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,IM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,XM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,YM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$M=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_E=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ME=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,EE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,eT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_T=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ET=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:wM,alphahash_pars_fragment:AM,alphamap_fragment:bM,alphamap_pars_fragment:RM,alphatest_fragment:CM,alphatest_pars_fragment:PM,aomap_fragment:LM,aomap_pars_fragment:NM,batching_pars_vertex:DM,batching_vertex:IM,begin_vertex:UM,beginnormal_vertex:FM,bsdfs:OM,iridescence_fragment:kM,bumpmap_pars_fragment:BM,clipping_planes_fragment:zM,clipping_planes_pars_fragment:VM,clipping_planes_pars_vertex:HM,clipping_planes_vertex:GM,color_fragment:WM,color_pars_fragment:jM,color_pars_vertex:XM,color_vertex:YM,common:qM,cube_uv_reflection_fragment:KM,defaultnormal_vertex:$M,displacementmap_pars_vertex:ZM,displacementmap_vertex:JM,emissivemap_fragment:QM,emissivemap_pars_fragment:eE,colorspace_fragment:tE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:rE,envmap_pars_fragment:sE,envmap_pars_vertex:oE,envmap_physical_pars_fragment:_E,envmap_vertex:aE,fog_vertex:lE,fog_pars_vertex:cE,fog_fragment:uE,fog_pars_fragment:dE,gradientmap_pars_fragment:hE,lightmap_pars_fragment:fE,lights_lambert_fragment:pE,lights_lambert_pars_fragment:mE,lights_pars_begin:gE,lights_toon_fragment:vE,lights_toon_pars_fragment:xE,lights_phong_fragment:yE,lights_phong_pars_fragment:SE,lights_physical_fragment:ME,lights_physical_pars_fragment:EE,lights_fragment_begin:TE,lights_fragment_maps:wE,lights_fragment_end:AE,logdepthbuf_fragment:bE,logdepthbuf_pars_fragment:RE,logdepthbuf_pars_vertex:CE,logdepthbuf_vertex:PE,map_fragment:LE,map_pars_fragment:NE,map_particle_fragment:DE,map_particle_pars_fragment:IE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:FE,morphinstance_vertex:OE,morphcolor_vertex:kE,morphnormal_vertex:BE,morphtarget_pars_vertex:zE,morphtarget_vertex:VE,normal_fragment_begin:HE,normal_fragment_maps:GE,normal_pars_fragment:WE,normal_pars_vertex:jE,normal_vertex:XE,normalmap_pars_fragment:YE,clearcoat_normal_fragment_begin:qE,clearcoat_normal_fragment_maps:KE,clearcoat_pars_fragment:$E,iridescence_pars_fragment:ZE,opaque_fragment:JE,packing:QE,premultiplied_alpha_fragment:eT,project_vertex:tT,dithering_fragment:nT,dithering_pars_fragment:iT,roughnessmap_fragment:rT,roughnessmap_pars_fragment:sT,shadowmap_pars_fragment:oT,shadowmap_pars_vertex:aT,shadowmap_vertex:lT,shadowmask_pars_fragment:cT,skinbase_vertex:uT,skinning_pars_vertex:dT,skinning_vertex:hT,skinnormal_vertex:fT,specularmap_fragment:pT,specularmap_pars_fragment:mT,tonemapping_fragment:gT,tonemapping_pars_fragment:_T,transmission_fragment:vT,transmission_pars_fragment:xT,uv_pars_fragment:yT,uv_pars_vertex:ST,uv_vertex:MT,worldpos_vertex:ET,background_vert:TT,background_frag:wT,backgroundCube_vert:AT,backgroundCube_frag:bT,cube_vert:RT,cube_frag:CT,depth_vert:PT,depth_frag:LT,distance_vert:NT,distance_frag:DT,equirect_vert:IT,equirect_frag:UT,linedashed_vert:FT,linedashed_frag:OT,meshbasic_vert:kT,meshbasic_frag:BT,meshlambert_vert:zT,meshlambert_frag:VT,meshmatcap_vert:HT,meshmatcap_frag:GT,meshnormal_vert:WT,meshnormal_frag:jT,meshphong_vert:XT,meshphong_frag:YT,meshphysical_vert:qT,meshphysical_frag:KT,meshtoon_vert:$T,meshtoon_frag:ZT,points_vert:JT,points_frag:QT,shadow_vert:e1,shadow_frag:t1,sprite_vert:n1,sprite_frag:i1},Pe={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Gi={basic:{uniforms:Un([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Un([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Un([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Un([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Un([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ut(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Un([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Un([Pe.points,Pe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Un([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Un([Pe.common,Pe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Un([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Un([Pe.sprite,Pe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Un([Pe.common,Pe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Un([Pe.lights,Pe.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Gi.physical={uniforms:Un([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Ec={r:0,b:0,g:0},Es=new Zi,r1=new _t;function s1(o,e,t,i,s,a){const c=new ut(0);let d=s===!0?0:1,h,f,g=null,_=0,m=null;function x(R){let P=R.isScene===!0?R.background:null;if(P&&P.isTexture){const C=R.backgroundBlurriness>0;P=e.get(P,C)}return P}function M(R){let P=!1;const C=x(R);C===null?S(c,d):C&&C.isColor&&(S(C,1),P=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(o.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function E(R,P){const C=x(P);C&&(C.isCubeTexture||C.mapping===zc)?(f===void 0&&(f=new ri(new Ha(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Co(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(D,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),Es.copy(P.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(r1.makeRotationFromEuler(Es)),f.material.toneMapped=wt.getTransfer(C.colorSpace)!==kt,(g!==C||_!==C.version||m!==o.toneMapping)&&(f.material.needsUpdate=!0,g=C,_=C.version,m=o.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new ri(new Vc(2,2),new Ji({name:"BackgroundMaterial",uniforms:Co(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=wt.getTransfer(C.colorSpace)!==kt,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||m!==o.toneMapping)&&(h.material.needsUpdate=!0,g=C,_=C.version,m=o.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function S(R,P){R.getRGB(Ec,h0(o)),t.buffers.color.setClear(Ec.r,Ec.g,Ec.b,P,a)}function y(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,P=1){c.set(R),d=P,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,S(c,d)},render:M,addToRenderList:E,dispose:y}}function o1(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=m(null);let a=s,c=!1;function d(F,X,j,ne,$){let J=!1;const G=_(F,ne,j,X);a!==G&&(a=G,f(a.object)),J=x(F,ne,j,$),J&&M(F,ne,j,$),$!==null&&e.update($,o.ELEMENT_ARRAY_BUFFER),(J||c)&&(c=!1,C(F,X,j,ne),$!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function h(){return o.createVertexArray()}function f(F){return o.bindVertexArray(F)}function g(F){return o.deleteVertexArray(F)}function _(F,X,j,ne){const $=ne.wireframe===!0;let J=i[X.id];J===void 0&&(J={},i[X.id]=J);const G=F.isInstancedMesh===!0?F.id:0;let Q=J[G];Q===void 0&&(Q={},J[G]=Q);let ae=Q[j.id];ae===void 0&&(ae={},Q[j.id]=ae);let ue=ae[$];return ue===void 0&&(ue=m(h()),ae[$]=ue),ue}function m(F){const X=[],j=[],ne=[];for(let $=0;$<t;$++)X[$]=0,j[$]=0,ne[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:j,attributeDivisors:ne,object:F,attributes:{},index:null}}function x(F,X,j,ne){const $=a.attributes,J=X.attributes;let G=0;const Q=j.getAttributes();for(const ae in Q)if(Q[ae].location>=0){const k=$[ae];let Z=J[ae];if(Z===void 0&&(ae==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),ae==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),k===void 0||k.attribute!==Z||Z&&k.data!==Z.data)return!0;G++}return a.attributesNum!==G||a.index!==ne}function M(F,X,j,ne){const $={},J=X.attributes;let G=0;const Q=j.getAttributes();for(const ae in Q)if(Q[ae].location>=0){let k=J[ae];k===void 0&&(ae==="instanceMatrix"&&F.instanceMatrix&&(k=F.instanceMatrix),ae==="instanceColor"&&F.instanceColor&&(k=F.instanceColor));const Z={};Z.attribute=k,k&&k.data&&(Z.data=k.data),$[ae]=Z,G++}a.attributes=$,a.attributesNum=G,a.index=ne}function E(){const F=a.newAttributes;for(let X=0,j=F.length;X<j;X++)F[X]=0}function S(F){y(F,0)}function y(F,X){const j=a.newAttributes,ne=a.enabledAttributes,$=a.attributeDivisors;j[F]=1,ne[F]===0&&(o.enableVertexAttribArray(F),ne[F]=1),$[F]!==X&&(o.vertexAttribDivisor(F,X),$[F]=X)}function R(){const F=a.newAttributes,X=a.enabledAttributes;for(let j=0,ne=X.length;j<ne;j++)X[j]!==F[j]&&(o.disableVertexAttribArray(j),X[j]=0)}function P(F,X,j,ne,$,J,G){G===!0?o.vertexAttribIPointer(F,X,j,$,J):o.vertexAttribPointer(F,X,j,ne,$,J)}function C(F,X,j,ne){E();const $=ne.attributes,J=j.getAttributes(),G=X.defaultAttributeValues;for(const Q in J){const ae=J[Q];if(ae.location>=0){let ue=$[Q];if(ue===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(ue=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(ue=F.instanceColor)),ue!==void 0){const k=ue.normalized,Z=ue.itemSize,be=e.get(ue);if(be===void 0)continue;const je=be.buffer,Je=be.type,se=be.bytesPerElement,me=Je===o.INT||Je===o.UNSIGNED_INT||ue.gpuType===pf;if(ue.isInterleavedBufferAttribute){const pe=ue.data,Fe=pe.stride,He=ue.offset;if(pe.isInstancedInterleavedBuffer){for(let rt=0;rt<ae.locationSize;rt++)y(ae.location+rt,pe.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let rt=0;rt<ae.locationSize;rt++)S(ae.location+rt);o.bindBuffer(o.ARRAY_BUFFER,je);for(let rt=0;rt<ae.locationSize;rt++)P(ae.location+rt,Z/ae.locationSize,Je,k,Fe*se,(He+Z/ae.locationSize*rt)*se,me)}else{if(ue.isInstancedBufferAttribute){for(let pe=0;pe<ae.locationSize;pe++)y(ae.location+pe,ue.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let pe=0;pe<ae.locationSize;pe++)S(ae.location+pe);o.bindBuffer(o.ARRAY_BUFFER,je);for(let pe=0;pe<ae.locationSize;pe++)P(ae.location+pe,Z/ae.locationSize,Je,k,Z*se,Z/ae.locationSize*pe*se,me)}}else if(G!==void 0){const k=G[Q];if(k!==void 0)switch(k.length){case 2:o.vertexAttrib2fv(ae.location,k);break;case 3:o.vertexAttrib3fv(ae.location,k);break;case 4:o.vertexAttrib4fv(ae.location,k);break;default:o.vertexAttrib1fv(ae.location,k)}}}}R()}function D(){L();for(const F in i){const X=i[F];for(const j in X){const ne=X[j];for(const $ in ne){const J=ne[$];for(const G in J)g(J[G].object),delete J[G];delete ne[$]}}delete i[F]}}function I(F){if(i[F.id]===void 0)return;const X=i[F.id];for(const j in X){const ne=X[j];for(const $ in ne){const J=ne[$];for(const G in J)g(J[G].object),delete J[G];delete ne[$]}}delete i[F.id]}function O(F){for(const X in i){const j=i[X];for(const ne in j){const $=j[ne];if($[F.id]===void 0)continue;const J=$[F.id];for(const G in J)g(J[G].object),delete J[G];delete $[F.id]}}}function w(F){for(const X in i){const j=i[X],ne=F.isInstancedMesh===!0?F.id:0,$=j[ne];if($!==void 0){for(const J in $){const G=$[J];for(const Q in G)g(G[Q].object),delete G[Q];delete $[J]}delete j[ne],Object.keys(j).length===0&&delete i[X]}}}function L(){oe(),c=!0,a!==s&&(a=s,f(a.object))}function oe(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:L,resetDefaultState:oe,dispose:D,releaseStatesOfGeometry:I,releaseStatesOfObject:w,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:S,disableUnusedAttributes:R}}function a1(o,e,t){let i;function s(f){i=f}function a(f,g){o.drawArrays(i,f,g),t.update(g,i,1)}function c(f,g,_){_!==0&&(o.drawArraysInstanced(i,f,g,_),t.update(g,i,_))}function d(f,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,g,0,_);let x=0;for(let M=0;M<_;M++)x+=g[M];t.update(x,i,1)}function h(f,g,_,m){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<f.length;M++)c(f[M],g[M],m[M]);else{x.multiDrawArraysInstancedWEBGL(i,f,0,g,0,m,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E]*m[E];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function l1(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==xi&&i.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const w=O===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ni&&i.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==vi&&!w)}function h(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const g=h(f);g!==f&&(et("WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);const _=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:f,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:R,maxVaryings:P,maxFragmentUniforms:C,maxSamples:D,samples:I}}function c1(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new Qr,d=new mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){const x=_.length!==0||m||i!==0||s;return s=m,i=_.length,x},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,m){t=g(_,m,0)},this.setState=function(_,m,x){const M=_.clippingPlanes,E=_.clipIntersection,S=_.clipShadows,y=o.get(_);if(!s||M===null||M.length===0||a&&!S)a?g(null):f();else{const R=a?0:i,P=R*4;let C=y.clippingState||null;h.value=C,C=g(M,m,P,x);for(let D=0;D!==P;++D)C[D]=t[D];y.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(_,m,x,M){const E=_!==null?_.length:0;let S=null;if(E!==0){if(S=h.value,M!==!0||S===null){const y=x+E*4,R=m.matrixWorldInverse;d.getNormalMatrix(R),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,C=x;P!==E;++P,C+=4)c.copy(_[P]).applyMatrix4(R,d),c.normal.toArray(S,C),S[C+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}const ns=4,r_=[.125,.215,.35,.446,.526,.582],bs=20,u1=256,wa=new Gc,s_=new ut;let sh=null,oh=0,ah=0,lh=!1;const d1=new K;class o_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,a={}){const{size:c=256,position:d=d1}=a;sh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,s,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,oh,ah),this._renderer.xr.enabled=lh,e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Er,format:xi,colorSpace:kn,depthBuffer:!1},s=a_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a_(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=h1(a)),this._blurMaterial=p1(a,e,t),this._ggxMaterial=f1(a,e,t)}return s}_compileMaterial(e){const t=new ri(new si,e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,i,s,a){const h=new Fn(90,1,t,i),f=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,x=_.toneMapping;_.getClearColor(s_),_.toneMapping=Yi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new Ha,new Cs({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,S=E.material;let y=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,y=!0):(S.color.copy(s_),y=!0);for(let P=0;P<6;P++){const C=P%3;C===0?(h.up.set(0,f[P],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+g[P],a.y,a.z)):C===1?(h.up.set(0,0,f[P]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+g[P],a.z)):(h.up.set(0,f[P],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+g[P]));const D=this._cubeSize;vo(s,C*D,P>2?D:0,D,D),_.setRenderTarget(s),y&&_.render(E,h),_.render(e,h)}_.toneMapping=x,_.autoClear=m,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ps||e.mapping===wo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=c_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l_());const a=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const d=a.uniforms;d.envMap.value=e;const h=this._cubeSize;vo(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,wa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[i];d.material=c;const h=c.uniforms,f=i/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),_=Math.sqrt(f*f-g*g),m=0+f*1.25,x=_*m,{_lodMax:M}=this,E=this._sizeLods[i],S=3*E*(i>M-ns?i-M+ns:0),y=4*(this._cubeSize-E);h.envMap.value=e.texture,h.roughness.value=x,h.mipInt.value=M-t,vo(a,S,y,3*E,2*E),s.setRenderTarget(a),s.render(d,wa),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=M-i,vo(e,S,y,3*E,2*E),s.setRenderTarget(e),s.render(d,wa)}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,d){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[s];_.material=f;const m=f.uniforms,x=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*bs-1),E=a/M,S=isFinite(a)?1+Math.floor(g*E):bs;S>bs&&et(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${bs}`);const y=[];let R=0;for(let O=0;O<bs;++O){const w=O/E,L=Math.exp(-w*w/2);y.push(L),O===0?R+=L:O<S&&(R+=2*L)}for(let O=0;O<y.length;O++)y[O]=y[O]/R;m.envMap.value=e.texture,m.samples.value=S,m.weights.value=y,m.latitudinal.value=c==="latitudinal",d&&(m.poleAxis.value=d);const{_lodMax:P}=this;m.dTheta.value=M,m.mipInt.value=P-i;const C=this._sizeLods[s],D=3*C*(s>P-ns?s-P+ns:0),I=4*(this._cubeSize-C);vo(t,D,I,3*C,2*C),h.setRenderTarget(t),h.render(_,wa)}}function h1(o){const e=[],t=[],i=[];let s=o;const a=o-ns+1+r_.length;for(let c=0;c<a;c++){const d=Math.pow(2,s);e.push(d);let h=1/d;c>o-ns?h=r_[c-o+ns-1]:c===0&&(h=0),t.push(h);const f=1/(d-2),g=-f,_=1+f,m=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,M=6,E=3,S=2,y=1,R=new Float32Array(E*M*x),P=new Float32Array(S*M*x),C=new Float32Array(y*M*x);for(let I=0;I<x;I++){const O=I%3*2/3-1,w=I>2?0:-1,L=[O,w,0,O+2/3,w,0,O+2/3,w+1,0,O,w,0,O+2/3,w+1,0,O,w+1,0];R.set(L,E*M*I),P.set(m,S*M*I);const oe=[I,I,I,I,I,I];C.set(oe,y*M*I)}const D=new si;D.setAttribute("position",new On(R,E)),D.setAttribute("uv",new On(P,S)),D.setAttribute("faceIndex",new On(C,y)),i.push(new ri(D,null)),s>ns&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function a_(o,e,t){const i=new qi(o,e,t);return i.texture.mapping=zc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vo(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function f1(o,e,t){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:u1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function p1(o,e,t){const i=new Float32Array(bs),s=new K(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function l_(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function c_(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class v0 extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new u0(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ha(5,5,5),a=new Ji({name:"CubemapFromEquirect",uniforms:Co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qn,blending:yr});a.uniforms.tEquirect.value=t;const c=new ri(s,a),d=t.minFilter;return t.minFilter===vr&&(t.minFilter=fn),new uM(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}function m1(o){let e=new WeakMap,t=new WeakMap,i=null;function s(m,x=!1){return m==null?null:x?c(m):a(m)}function a(m){if(m&&m.isTexture){const x=m.mapping;if(x===Cd||x===Pd)if(e.has(m)){const M=e.get(m).texture;return d(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const E=new v0(M.height);return E.fromEquirectangularTexture(o,m),e.set(m,E),m.addEventListener("dispose",f),d(E.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const x=m.mapping,M=x===Cd||x===Pd,E=x===Ps||x===wo;if(M||E){let S=t.get(m);const y=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==y)return i===null&&(i=new o_(o)),S=M?i.fromEquirectangular(m,S):i.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),S.texture;if(S!==void 0)return S.texture;{const R=m.image;return M&&R&&R.height>0||E&&R&&h(R)?(i===null&&(i=new o_(o)),S=M?i.fromEquirectangular(m):i.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),m.addEventListener("dispose",g),S.texture):null}}}return m}function d(m,x){return x===Cd?m.mapping=Ps:x===Pd&&(m.mapping=wo),m}function h(m){let x=0;const M=6;for(let E=0;E<M;E++)m[E]!==void 0&&x++;return x===M}function f(m){const x=m.target;x.removeEventListener("dispose",f);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function g(m){const x=m.target;x.removeEventListener("dispose",g);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:_}}function g1(o){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=o.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Oc("WebGLRenderer: "+i+" extension not supported."),s}}}function _1(o,e,t,i){const s={},a=new WeakMap;function c(_){const m=_.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete s[m.id];const x=a.get(m);x&&(e.remove(x),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function d(_,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,t.memory.geometries++),m}function h(_){const m=_.attributes;for(const x in m)e.update(m[x],o.ARRAY_BUFFER)}function f(_){const m=[],x=_.index,M=_.attributes.position;let E=0;if(M===void 0)return;if(x!==null){const R=x.array;E=x.version;for(let P=0,C=R.length;P<C;P+=3){const D=R[P+0],I=R[P+1],O=R[P+2];m.push(D,I,I,O,O,D)}}else{const R=M.array;E=M.version;for(let P=0,C=R.length/3-1;P<C;P+=3){const D=P+0,I=P+1,O=P+2;m.push(D,I,I,O,O,D)}}const S=new(M.count>=65535?o0:s0)(m,1);S.version=E;const y=a.get(_);y&&e.remove(y),a.set(_,S)}function g(_){const m=a.get(_);if(m){const x=_.index;x!==null&&m.version<x.version&&f(_)}else f(_);return a.get(_)}return{get:d,update:h,getWireframeAttribute:g}}function v1(o,e,t){let i;function s(m){i=m}let a,c;function d(m){a=m.type,c=m.bytesPerElement}function h(m,x){o.drawElements(i,x,a,m*c),t.update(x,i,1)}function f(m,x,M){M!==0&&(o.drawElementsInstanced(i,x,a,m*c,M),t.update(x,i,M))}function g(m,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,m,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,i,1)}function _(m,x,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<m.length;y++)f(m[y]/c,x[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(i,x,0,a,m,0,E,0,M);let y=0;for(let R=0;R<M;R++)y+=x[R]*E[R];t.update(y,i,1)}}this.setMode=s,this.setIndex=d,this.render=h,this.renderInstances=f,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function x1(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,d){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=d*(a/3);break;case o.LINES:t.lines+=d*(a/2);break;case o.LINE_STRIP:t.lines+=d*(a-1);break;case o.LINE_LOOP:t.lines+=d*a;break;case o.POINTS:t.points+=d*a;break;default:ot("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function y1(o,e,t){const i=new WeakMap,s=new qt;function a(c,d,h){const f=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let m=i.get(d);if(m===void 0||m.count!==_){let oe=function(){w.dispose(),i.delete(d),d.removeEventListener("dispose",oe)};var x=oe;m!==void 0&&m.texture.dispose();const M=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let C=0;M===!0&&(C=1),E===!0&&(C=2),S===!0&&(C=3);let D=d.attributes.position.count*C,I=1;D>e.maxTextureSize&&(I=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const O=new Float32Array(D*I*4*_),w=new n0(O,D,I,_);w.type=vi,w.needsUpdate=!0;const L=C*4;for(let F=0;F<_;F++){const X=y[F],j=R[F],ne=P[F],$=D*I*4*F;for(let J=0;J<X.count;J++){const G=J*L;M===!0&&(s.fromBufferAttribute(X,J),O[$+G+0]=s.x,O[$+G+1]=s.y,O[$+G+2]=s.z,O[$+G+3]=0),E===!0&&(s.fromBufferAttribute(j,J),O[$+G+4]=s.x,O[$+G+5]=s.y,O[$+G+6]=s.z,O[$+G+7]=0),S===!0&&(s.fromBufferAttribute(ne,J),O[$+G+8]=s.x,O[$+G+9]=s.y,O[$+G+10]=s.z,O[$+G+11]=ne.itemSize===4?s.w:1)}}m={count:_,texture:w,size:new dt(D,I)},i.set(d,m),d.addEventListener("dispose",oe)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<f.length;S++)M+=f[S];const E=d.morphTargetsRelative?1:1-M;h.getUniforms().setValue(o,"morphTargetBaseInfluence",E),h.getUniforms().setValue(o,"morphTargetInfluences",f)}h.getUniforms().setValue(o,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}return{update:a}}function S1(o,e,t,i,s){let a=new WeakMap;function c(f){const g=s.render.frame,_=f.geometry,m=e.get(f,_);if(a.get(m)!==g&&(e.update(m),a.set(m,g)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),a.get(f)!==g&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),a.set(f,g))),f.isSkinnedMesh){const x=f.skeleton;a.get(x)!==g&&(x.update(),a.set(x,g))}return m}function d(){a=new WeakMap}function h(f){const g=f.target;g.removeEventListener("dispose",h),i.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:d}}const M1={[k_]:"LINEAR_TONE_MAPPING",[B_]:"REINHARD_TONE_MAPPING",[z_]:"CINEON_TONE_MAPPING",[ff]:"ACES_FILMIC_TONE_MAPPING",[H_]:"AGX_TONE_MAPPING",[G_]:"NEUTRAL_TONE_MAPPING",[V_]:"CUSTOM_TONE_MAPPING"};function E1(o,e,t,i,s){const a=new qi(e,t,{type:o,depthBuffer:i,stencilBuffer:s}),c=new qi(e,t,{type:Er,depthBuffer:!1,stencilBuffer:!1}),d=new si;d.setAttribute("position",new ii([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ii([0,2,0,0,2,0],2));const h=new zS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ri(d,h),g=new Gc(-1,1,1,-1,0,1);let _=null,m=null,x=!1,M,E=null,S=[],y=!1;this.setSize=function(R,P){a.setSize(R,P),c.setSize(R,P);for(let C=0;C<S.length;C++){const D=S[C];D.setSize&&D.setSize(R,P)}},this.setEffects=function(R){S=R,y=S.length>0&&S[0].isRenderPass===!0;const P=a.width,C=a.height;for(let D=0;D<S.length;D++){const I=S[D];I.setSize&&I.setSize(P,C)}},this.begin=function(R,P){if(x||R.toneMapping===Yi&&S.length===0)return!1;if(E=P,P!==null){const C=P.width,D=P.height;(a.width!==C||a.height!==D)&&this.setSize(C,D)}return y===!1&&R.setRenderTarget(a),M=R.toneMapping,R.toneMapping=Yi,!0},this.hasRenderPass=function(){return y},this.end=function(R,P){R.toneMapping=M,x=!0;let C=a,D=c;for(let I=0;I<S.length;I++){const O=S[I];if(O.enabled!==!1&&(O.render(R,D,C,P),O.needsSwap!==!1)){const w=C;C=D,D=w}}if(_!==R.outputColorSpace||m!==R.toneMapping){_=R.outputColorSpace,m=R.toneMapping,h.defines={},wt.getTransfer(_)===kt&&(h.defines.SRGB_TRANSFER="");const I=M1[m];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=C.texture,R.setRenderTarget(E),R.render(f,g),E=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),c.dispose(),d.dispose(),h.dispose()}}const x0=new Sn,af=new za(1,1),y0=new n0,S0=new uS,M0=new u0,u_=[],d_=[],h_=new Float32Array(16),f_=new Float32Array(9),p_=new Float32Array(4);function Oo(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=u_[s];if(a===void 0&&(a=new Float32Array(s),u_[s]=a),e!==0){i.toArray(a,0);for(let c=1,d=0;c!==e;++c)d+=t,o[c].toArray(a,d)}return a}function pn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function mn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function jc(o,e){let t=d_[e];t===void 0&&(t=new Int32Array(e),d_[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function T1(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function w1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;o.uniform2fv(this.addr,e),mn(t,e)}}function A1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;o.uniform3fv(this.addr,e),mn(t,e)}}function b1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;o.uniform4fv(this.addr,e),mn(t,e)}}function R1(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;p_.set(i),o.uniformMatrix2fv(this.addr,!1,p_),mn(t,i)}}function C1(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;f_.set(i),o.uniformMatrix3fv(this.addr,!1,f_),mn(t,i)}}function P1(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(pn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,i))return;h_.set(i),o.uniformMatrix4fv(this.addr,!1,h_),mn(t,i)}}function L1(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function N1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;o.uniform2iv(this.addr,e),mn(t,e)}}function D1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;o.uniform3iv(this.addr,e),mn(t,e)}}function I1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;o.uniform4iv(this.addr,e),mn(t,e)}}function U1(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function F1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;o.uniform2uiv(this.addr,e),mn(t,e)}}function O1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;o.uniform3uiv(this.addr,e),mn(t,e)}}function k1(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;o.uniform4uiv(this.addr,e),mn(t,e)}}function B1(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(af.compareFunction=t.isReversedDepthBuffer()?Mf:Sf,a=af):a=x0,t.setTexture2D(e||a,s)}function z1(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||S0,s)}function V1(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||M0,s)}function H1(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||y0,s)}function G1(o){switch(o){case 5126:return T1;case 35664:return w1;case 35665:return A1;case 35666:return b1;case 35674:return R1;case 35675:return C1;case 35676:return P1;case 5124:case 35670:return L1;case 35667:case 35671:return N1;case 35668:case 35672:return D1;case 35669:case 35673:return I1;case 5125:return U1;case 36294:return F1;case 36295:return O1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return H1}}function W1(o,e){o.uniform1fv(this.addr,e)}function j1(o,e){const t=Oo(e,this.size,2);o.uniform2fv(this.addr,t)}function X1(o,e){const t=Oo(e,this.size,3);o.uniform3fv(this.addr,t)}function Y1(o,e){const t=Oo(e,this.size,4);o.uniform4fv(this.addr,t)}function q1(o,e){const t=Oo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function K1(o,e){const t=Oo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function $1(o,e){const t=Oo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Z1(o,e){o.uniform1iv(this.addr,e)}function J1(o,e){o.uniform2iv(this.addr,e)}function Q1(o,e){o.uniform3iv(this.addr,e)}function ew(o,e){o.uniform4iv(this.addr,e)}function tw(o,e){o.uniform1uiv(this.addr,e)}function nw(o,e){o.uniform2uiv(this.addr,e)}function iw(o,e){o.uniform3uiv(this.addr,e)}function rw(o,e){o.uniform4uiv(this.addr,e)}function sw(o,e,t){const i=this.cache,s=e.length,a=jc(t,s);pn(i,a)||(o.uniform1iv(this.addr,a),mn(i,a));let c;this.type===o.SAMPLER_2D_SHADOW?c=af:c=x0;for(let d=0;d!==s;++d)t.setTexture2D(e[d]||c,a[d])}function ow(o,e,t){const i=this.cache,s=e.length,a=jc(t,s);pn(i,a)||(o.uniform1iv(this.addr,a),mn(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||S0,a[c])}function aw(o,e,t){const i=this.cache,s=e.length,a=jc(t,s);pn(i,a)||(o.uniform1iv(this.addr,a),mn(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||M0,a[c])}function lw(o,e,t){const i=this.cache,s=e.length,a=jc(t,s);pn(i,a)||(o.uniform1iv(this.addr,a),mn(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||y0,a[c])}function cw(o){switch(o){case 5126:return W1;case 35664:return j1;case 35665:return X1;case 35666:return Y1;case 35674:return q1;case 35675:return K1;case 35676:return $1;case 5124:case 35670:return Z1;case 35667:case 35671:return J1;case 35668:case 35672:return Q1;case 35669:case 35673:return ew;case 5125:return tw;case 36294:return nw;case 36295:return iw;case 36296:return rw;case 35678:case 36198:case 36298:case 36306:case 35682:return sw;case 35679:case 36299:case 36307:return ow;case 35680:case 36300:case 36308:case 36293:return aw;case 36289:case 36303:case 36311:case 36292:return lw}}class uw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=G1(t.type)}}class dw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cw(t.type)}}class hw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const d=s[a];d.setValue(e,t[d.id],i)}}}const ch=/(\w+)(\])?(\[|\.)?/g;function m_(o,e){o.seq.push(e),o.map[e.id]=e}function fw(o,e,t){const i=o.name,s=i.length;for(ch.lastIndex=0;;){const a=ch.exec(i),c=ch.lastIndex;let d=a[1];const h=a[2]==="]",f=a[3];if(h&&(d=d|0),f===void 0||f==="["&&c+2===s){m_(t,f===void 0?new uw(d,o,e):new dw(d,o,e));break}else{let _=t.map[d];_===void 0&&(_=new hw(d),m_(t,_)),t=_}}}class Dc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const d=e.getActiveUniform(t,c),h=e.getUniformLocation(t,d.name);fw(d,h,this)}const s=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):a.push(c);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const d=t[a],h=i[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function g_(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const pw=37297;let mw=0;function gw(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const d=c+1;i.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return i.join(`
`)}const __=new mt;function _w(o){wt._getMatrix(__,wt.workingColorSpace,o);const e=`mat3( ${__.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(o)){case Uc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function v_(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),a=(o.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+gw(o.getShaderSource(e),d)}else return a}function vw(o,e){const t=_w(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const xw={[k_]:"Linear",[B_]:"Reinhard",[z_]:"Cineon",[ff]:"ACESFilmic",[H_]:"AgX",[G_]:"Neutral",[V_]:"Custom"};function yw(o,e){const t=xw[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tc=new K;function Sw(){wt.getLuminanceCoefficients(Tc);const o=Tc.x.toFixed(4),e=Tc.y.toFixed(4),t=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function Ew(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Tw(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let d=1;a.type===o.FLOAT_MAT2&&(d=2),a.type===o.FLOAT_MAT3&&(d=3),a.type===o.FLOAT_MAT4&&(d=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:d}}return t}function Pa(o){return o!==""}function x_(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function y_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ww=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(o){return o.replace(ww,bw)}const Aw=new Map;function bw(o,e){let t=gt[e];if(t===void 0){const i=Aw.get(e);if(i!==void 0)t=gt[i],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lf(t)}const Rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S_(o){return o.replace(Rw,Cw)}function Cw(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function M_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Pw={[Ac]:"SHADOWMAP_TYPE_PCF",[Ra]:"SHADOWMAP_TYPE_VSM"};function Lw(o){return Pw[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Nw={[Ps]:"ENVMAP_TYPE_CUBE",[wo]:"ENVMAP_TYPE_CUBE",[zc]:"ENVMAP_TYPE_CUBE_UV"};function Dw(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":Nw[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Iw={[wo]:"ENVMAP_MODE_REFRACTION"};function Uw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Iw[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fw={[O_]:"ENVMAP_BLENDING_MULTIPLY",[wy]:"ENVMAP_BLENDING_MIX",[Ay]:"ENVMAP_BLENDING_ADD"};function Ow(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":Fw[o.combine]||"ENVMAP_BLENDING_NONE"}function kw(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Bw(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,d=t.fragmentShader;const h=Lw(t),f=Dw(t),g=Uw(t),_=Ow(t),m=kw(t),x=Mw(t),M=Ew(a),E=s.createProgram();let S,y,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Pa).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Pa).join(`
`),y.length>0&&(y+=`
`)):(S=[M_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),y=[M_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?gt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?yw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,vw("linearToOutputTexel",t.outputColorSpace),Sw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),c=lf(c),c=x_(c,t),c=y_(c,t),d=lf(d),d=x_(d,t),d=y_(d,t),c=S_(c),d=S_(d),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=R+S+c,C=R+y+d,D=g_(s,s.VERTEX_SHADER,P),I=g_(s,s.FRAGMENT_SHADER,C);s.attachShader(E,D),s.attachShader(E,I),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function O(F){if(o.debug.checkShaderErrors){const X=s.getProgramInfoLog(E)||"",j=s.getShaderInfoLog(D)||"",ne=s.getShaderInfoLog(I)||"",$=X.trim(),J=j.trim(),G=ne.trim();let Q=!0,ae=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(Q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,D,I);else{const ue=v_(s,D,"vertex"),k=v_(s,I,"fragment");ot("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+$+`
`+ue+`
`+k)}else $!==""?et("WebGLProgram: Program Info Log:",$):(J===""||G==="")&&(ae=!1);ae&&(F.diagnostics={runnable:Q,programLog:$,vertexShader:{log:J,prefix:S},fragmentShader:{log:G,prefix:y}})}s.deleteShader(D),s.deleteShader(I),w=new Dc(s,E),L=Tw(s,E)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let oe=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return oe===!1&&(oe=s.getProgramParameter(E,pw)),oe},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=I,this}let zw=0;class Vw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Hw(e),t.set(e,i)),i}}class Hw{constructor(e){this.id=zw++,this.code=e,this.usedTimes=0}}function Gw(o,e,t,i,s,a){const c=new i0,d=new Vw,h=new Set,f=[],g=new Map,_=i.logarithmicDepthBuffer;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return h.add(w),w===0?"uv":`uv${w}`}function E(w,L,oe,F,X){const j=F.fog,ne=X.geometry,$=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,J=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,G=e.get(w.envMap||$,J),Q=G&&G.mapping===zc?G.image.height:null,ae=x[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&et("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const ue=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,k=ue!==void 0?ue.length:0;let Z=0;ne.morphAttributes.position!==void 0&&(Z=1),ne.morphAttributes.normal!==void 0&&(Z=2),ne.morphAttributes.color!==void 0&&(Z=3);let be,je,Je,se;if(ae){const Lt=Gi[ae];be=Lt.vertexShader,je=Lt.fragmentShader}else be=w.vertexShader,je=w.fragmentShader,d.update(w),Je=d.getVertexShaderID(w),se=d.getFragmentShaderID(w);const me=o.getRenderTarget(),pe=o.state.buffers.depth.getReversed(),Fe=X.isInstancedMesh===!0,He=X.isBatchedMesh===!0,rt=!!w.map,tn=!!w.matcap,xt=!!G,Ct=!!w.aoMap,Ut=!!w.lightMap,ft=!!w.bumpMap,jt=!!w.normalMap,V=!!w.displacementMap,Kt=!!w.emissiveMap,Et=!!w.metalnessMap,Pt=!!w.roughnessMap,Ge=w.anisotropy>0,N=w.clearcoat>0,T=w.dispersion>0,Y=w.iridescence>0,fe=w.sheen>0,ge=w.transmission>0,de=Ge&&!!w.anisotropyMap,ke=N&&!!w.clearcoatMap,we=N&&!!w.clearcoatNormalMap,Ke=N&&!!w.clearcoatRoughnessMap,st=Y&&!!w.iridescenceMap,ye=Y&&!!w.iridescenceThicknessMap,Te=fe&&!!w.sheenColorMap,We=fe&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Le=!!w.specularColorMap,ht=!!w.specularIntensityMap,H=ge&&!!w.transmissionMap,Ae=ge&&!!w.thicknessMap,Me=!!w.gradientMap,Ne=!!w.alphaMap,Se=w.alphaTest>0,he=!!w.alphaHash,ze=!!w.extensions;let at=Yi;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(at=o.toneMapping);const Ot={shaderID:ae,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:je,defines:w.defines,customVertexShaderID:Je,customFragmentShaderID:se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:He,batchingColor:He&&X._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&X.instanceColor!==null,instancingMorph:Fe&&X.morphTexture!==null,outputColorSpace:me===null?o.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:kn,alphaToCoverage:!!w.alphaToCoverage,map:rt,matcap:tn,envMap:xt,envMapMode:xt&&G.mapping,envMapCubeUVHeight:Q,aoMap:Ct,lightMap:Ut,bumpMap:ft,normalMap:jt,displacementMap:V,emissiveMap:Kt,normalMapObjectSpace:jt&&w.normalMapType===Ly,normalMapTangentSpace:jt&&w.normalMapType===Q_,metalnessMap:Et,roughnessMap:Pt,anisotropy:Ge,anisotropyMap:de,clearcoat:N,clearcoatMap:ke,clearcoatNormalMap:we,clearcoatRoughnessMap:Ke,dispersion:T,iridescence:Y,iridescenceMap:st,iridescenceThicknessMap:ye,sheen:fe,sheenColorMap:Te,sheenRoughnessMap:We,specularMap:Be,specularColorMap:Le,specularIntensityMap:ht,transmission:ge,transmissionMap:H,thicknessMap:Ae,gradientMap:Me,opaque:w.transparent===!1&&w.blending===So&&w.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Se,alphaHash:he,combine:w.combine,mapUv:rt&&M(w.map.channel),aoMapUv:Ct&&M(w.aoMap.channel),lightMapUv:Ut&&M(w.lightMap.channel),bumpMapUv:ft&&M(w.bumpMap.channel),normalMapUv:jt&&M(w.normalMap.channel),displacementMapUv:V&&M(w.displacementMap.channel),emissiveMapUv:Kt&&M(w.emissiveMap.channel),metalnessMapUv:Et&&M(w.metalnessMap.channel),roughnessMapUv:Pt&&M(w.roughnessMap.channel),anisotropyMapUv:de&&M(w.anisotropyMap.channel),clearcoatMapUv:ke&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:we&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:We&&M(w.sheenRoughnessMap.channel),specularMapUv:Be&&M(w.specularMap.channel),specularColorMapUv:Le&&M(w.specularColorMap.channel),specularIntensityMapUv:ht&&M(w.specularIntensityMap.channel),transmissionMapUv:H&&M(w.transmissionMap.channel),thicknessMapUv:Ae&&M(w.thicknessMap.channel),alphaMapUv:Ne&&M(w.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(jt||Ge),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ne.attributes.uv&&(rt||Ne),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||ne.attributes.normal===void 0&&jt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:pe,skinning:X.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Z,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&oe.length>0,shadowMapType:o.shadowMap.type,toneMapping:at,decodeVideoTexture:rt&&w.map.isVideoTexture===!0&&wt.getTransfer(w.map.colorSpace)===kt,decodeVideoTextureEmissive:Kt&&w.emissiveMap.isVideoTexture===!0&&wt.getTransfer(w.emissiveMap.colorSpace)===kt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Wi,flipSided:w.side===qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ze&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&w.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ot.vertexUv1s=h.has(1),Ot.vertexUv2s=h.has(2),Ot.vertexUv3s=h.has(3),h.clear(),Ot}function S(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const oe in w.defines)L.push(oe),L.push(w.defines[oe]);return w.isRawShaderMaterial===!1&&(y(L,w),R(L,w),L.push(o.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function y(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function R(w,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),w.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),w.push(c.mask)}function P(w){const L=x[w.type];let oe;if(L){const F=Gi[L];oe=OS.clone(F.uniforms)}else oe=w.uniforms;return oe}function C(w,L){let oe=g.get(L);return oe!==void 0?++oe.usedTimes:(oe=new Bw(o,L,w,s),f.push(oe),g.set(L,oe)),oe}function D(w){if(--w.usedTimes===0){const L=f.indexOf(w);f[L]=f[f.length-1],f.pop(),g.delete(w.cacheKey),w.destroy()}}function I(w){d.remove(w)}function O(){d.dispose()}return{getParameters:E,getProgramCacheKey:S,getUniforms:P,acquireProgram:C,releaseProgram:D,releaseShaderCache:I,programs:f,dispose:O}}function Ww(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let d=o.get(c);return d===void 0&&(d={},o.set(c,d)),d}function i(c){o.delete(c)}function s(c,d,h){o.get(c)[d]=h}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function jw(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function E_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function T_(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function d(m,x,M,E,S,y){let R=o[e];return R===void 0?(R={id:m.id,object:m,geometry:x,material:M,materialVariant:c(m),groupOrder:E,renderOrder:m.renderOrder,z:S,group:y},o[e]=R):(R.id=m.id,R.object=m,R.geometry=x,R.material=M,R.materialVariant=c(m),R.groupOrder=E,R.renderOrder=m.renderOrder,R.z=S,R.group=y),e++,R}function h(m,x,M,E,S,y){const R=d(m,x,M,E,S,y);M.transmission>0?i.push(R):M.transparent===!0?s.push(R):t.push(R)}function f(m,x,M,E,S,y){const R=d(m,x,M,E,S,y);M.transmission>0?i.unshift(R):M.transparent===!0?s.unshift(R):t.unshift(R)}function g(m,x){t.length>1&&t.sort(m||jw),i.length>1&&i.sort(x||E_),s.length>1&&s.sort(x||E_)}function _(){for(let m=e,x=o.length;m<x;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:h,unshift:f,finish:_,sort:g}}function Xw(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new T_,o.set(i,[c])):s>=a.length?(c=new T_,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function Yw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new ut};break;case"SpotLight":t={position:new K,direction:new K,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=t,t}}}function qw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Kw=0;function $w(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Zw(o){const e=new Yw,t=qw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new K);const s=new K,a=new _t,c=new _t;function d(f){let g=0,_=0,m=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let x=0,M=0,E=0,S=0,y=0,R=0,P=0,C=0,D=0,I=0,O=0;f.sort($w);for(let L=0,oe=f.length;L<oe;L++){const F=f[L],X=F.color,j=F.intensity,ne=F.distance;let $=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===bo?$=F.shadow.map.texture:$=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)g+=X.r*j,_+=X.g*j,m+=X.b*j;else if(F.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(F.sh.coefficients[J],j);O++}else if(F.isDirectionalLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const G=F.shadow,Q=t.get(F);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,i.directionalShadow[x]=Q,i.directionalShadowMap[x]=$,i.directionalShadowMatrix[x]=F.shadow.matrix,R++}i.directional[x]=J,x++}else if(F.isSpotLight){const J=e.get(F);J.position.setFromMatrixPosition(F.matrixWorld),J.color.copy(X).multiplyScalar(j),J.distance=ne,J.coneCos=Math.cos(F.angle),J.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),J.decay=F.decay,i.spot[E]=J;const G=F.shadow;if(F.map&&(i.spotLightMap[D]=F.map,D++,G.updateMatrices(F),F.castShadow&&I++),i.spotLightMatrix[E]=G.matrix,F.castShadow){const Q=t.get(F);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,i.spotShadow[E]=Q,i.spotShadowMap[E]=$,C++}E++}else if(F.isRectAreaLight){const J=e.get(F);J.color.copy(X).multiplyScalar(j),J.halfWidth.set(F.width*.5,0,0),J.halfHeight.set(0,F.height*.5,0),i.rectArea[S]=J,S++}else if(F.isPointLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),J.distance=F.distance,J.decay=F.decay,F.castShadow){const G=F.shadow,Q=t.get(F);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,Q.shadowCameraNear=G.camera.near,Q.shadowCameraFar=G.camera.far,i.pointShadow[M]=Q,i.pointShadowMap[M]=$,i.pointShadowMatrix[M]=F.shadow.matrix,P++}i.point[M]=J,M++}else if(F.isHemisphereLight){const J=e.get(F);J.skyColor.copy(F.color).multiplyScalar(j),J.groundColor.copy(F.groundColor).multiplyScalar(j),i.hemi[y]=J,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=_,i.ambient[2]=m;const w=i.hash;(w.directionalLength!==x||w.pointLength!==M||w.spotLength!==E||w.rectAreaLength!==S||w.hemiLength!==y||w.numDirectionalShadows!==R||w.numPointShadows!==P||w.numSpotShadows!==C||w.numSpotMaps!==D||w.numLightProbes!==O)&&(i.directional.length=x,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=y,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=C+D-I,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=O,w.directionalLength=x,w.pointLength=M,w.spotLength=E,w.rectAreaLength=S,w.hemiLength=y,w.numDirectionalShadows=R,w.numPointShadows=P,w.numSpotShadows=C,w.numSpotMaps=D,w.numLightProbes=O,i.version=Kw++)}function h(f,g){let _=0,m=0,x=0,M=0,E=0;const S=g.matrixWorldInverse;for(let y=0,R=f.length;y<R;y++){const P=f[y];if(P.isDirectionalLight){const C=i.directional[_];C.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),_++}else if(P.isSpotLight){const C=i.spot[x];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),x++}else if(P.isRectAreaLight){const C=i.rectArea[M];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),c.identity(),a.copy(P.matrixWorld),a.premultiply(S),c.extractRotation(a),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const C=i.point[m];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),m++}else if(P.isHemisphereLight){const C=i.hemi[E];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(S),E++}}}return{setup:d,setupView:h,state:i}}function w_(o){const e=new Zw(o),t=[],i=[];function s(g){f.camera=g,t.length=0,i.length=0}function a(g){t.push(g)}function c(g){i.push(g)}function d(){e.setup(t)}function h(g){e.setupView(t,g)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:d,setupLightsView:h,pushLight:a,pushShadow:c}}function Jw(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let d;return c===void 0?(d=new w_(o),e.set(s,[d])):a>=c.length?(d=new w_(o),c.push(d)):d=c[a],d}function i(){e=new WeakMap}return{get:t,dispose:i}}const Qw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tA=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],nA=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],A_=new _t,Aa=new K,uh=new K;function iA(o,e,t){let i=new Rf;const s=new dt,a=new dt,c=new qt,d=new VS,h=new HS,f={},g=t.maxTextureSize,_={[Mr]:qn,[qn]:Mr,[Wi]:Wi},m=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Qw,fragmentShader:eA}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const M=new si;M.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ri(M,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let y=this.type;this.render=function(I,O,w){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;this.type===oy&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ac);const L=o.getRenderTarget(),oe=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),X=o.state;X.setBlending(yr),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const j=y!==this.type;j&&O.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach($=>$.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,$=I.length;ne<$;ne++){const J=I[ne],G=J.shadow;if(G===void 0){et("WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Q=G.getFrameExtents();s.multiply(Q),a.copy(G.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(a.x=Math.floor(g/Q.x),s.x=a.x*Q.x,G.mapSize.x=a.x),s.y>g&&(a.y=Math.floor(g/Q.y),s.y=a.y*Q.y,G.mapSize.y=a.y));const ae=o.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ae,G.map===null||j===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ra){if(J.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new qi(s.x,s.y,{format:bo,type:Er,minFilter:fn,magFilter:fn,generateMipmaps:!1}),G.map.texture.name=J.name+".shadowMap",G.map.depthTexture=new za(s.x,s.y,vi),G.map.depthTexture.name=J.name+".shadowMapDepth",G.map.depthTexture.format=Tr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=hn,G.map.depthTexture.magFilter=hn}else J.isPointLight?(G.map=new v0(s.x),G.map.depthTexture=new US(s.x,$i)):(G.map=new qi(s.x,s.y),G.map.depthTexture=new za(s.x,s.y,$i)),G.map.depthTexture.name=J.name+".shadowMap",G.map.depthTexture.format=Tr,this.type===Ac?(G.map.depthTexture.compareFunction=ae?Mf:Sf,G.map.depthTexture.minFilter=fn,G.map.depthTexture.magFilter=fn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=hn,G.map.depthTexture.magFilter=hn);G.camera.updateProjectionMatrix()}const ue=G.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<ue;k++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,k),o.clear();else{k===0&&(o.setRenderTarget(G.map),o.clear());const Z=G.getViewport(k);c.set(a.x*Z.x,a.y*Z.y,a.x*Z.z,a.y*Z.w),X.viewport(c)}if(J.isPointLight){const Z=G.camera,be=G.matrix,je=J.distance||Z.far;je!==Z.far&&(Z.far=je,Z.updateProjectionMatrix()),Aa.setFromMatrixPosition(J.matrixWorld),Z.position.copy(Aa),uh.copy(Z.position),uh.add(tA[k]),Z.up.copy(nA[k]),Z.lookAt(uh),Z.updateMatrixWorld(),be.makeTranslation(-Aa.x,-Aa.y,-Aa.z),A_.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(A_,Z.coordinateSystem,Z.reversedDepth)}else G.updateMatrices(J);i=G.getFrustum(),C(O,w,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===Ra&&R(G,w),G.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(L,oe,F)};function R(I,O){const w=e.update(E);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new qi(s.x,s.y,{format:bo,type:Er})),m.uniforms.shadow_pass.value=I.map.depthTexture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(O,null,w,m,E,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(O,null,w,x,E,null)}function P(I,O,w,L){let oe=null;const F=w.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)oe=F;else if(oe=w.isPointLight===!0?h:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const X=oe.uuid,j=O.uuid;let ne=f[X];ne===void 0&&(ne={},f[X]=ne);let $=ne[j];$===void 0&&($=oe.clone(),ne[j]=$,O.addEventListener("dispose",D)),oe=$}if(oe.visible=O.visible,oe.wireframe=O.wireframe,L===Ra?oe.side=O.shadowSide!==null?O.shadowSide:O.side:oe.side=O.shadowSide!==null?O.shadowSide:_[O.side],oe.alphaMap=O.alphaMap,oe.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,oe.map=O.map,oe.clipShadows=O.clipShadows,oe.clippingPlanes=O.clippingPlanes,oe.clipIntersection=O.clipIntersection,oe.displacementMap=O.displacementMap,oe.displacementScale=O.displacementScale,oe.displacementBias=O.displacementBias,oe.wireframeLinewidth=O.wireframeLinewidth,oe.linewidth=O.linewidth,w.isPointLight===!0&&oe.isMeshDistanceMaterial===!0){const X=o.properties.get(oe);X.light=w}return oe}function C(I,O,w,L,oe){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&oe===Ra)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,I.matrixWorld);const j=e.update(I),ne=I.material;if(Array.isArray(ne)){const $=j.groups;for(let J=0,G=$.length;J<G;J++){const Q=$[J],ae=ne[Q.materialIndex];if(ae&&ae.visible){const ue=P(I,ae,L,oe);I.onBeforeShadow(o,I,O,w,j,ue,Q),o.renderBufferDirect(w,null,j,ue,I,Q),I.onAfterShadow(o,I,O,w,j,ue,Q)}}}else if(ne.visible){const $=P(I,ne,L,oe);I.onBeforeShadow(o,I,O,w,j,$,null),o.renderBufferDirect(w,null,j,$,I,null),I.onAfterShadow(o,I,O,w,j,$,null)}}const X=I.children;for(let j=0,ne=X.length;j<ne;j++)C(X[j],O,w,L,oe)}function D(I){I.target.removeEventListener("dispose",D);for(const w in f){const L=f[w],oe=I.target.uuid;oe in L&&(L[oe].dispose(),delete L[oe])}}}function rA(o,e){function t(){let H=!1;const Ae=new qt;let Me=null;const Ne=new qt(0,0,0,0);return{setMask:function(Se){Me!==Se&&!H&&(o.colorMask(Se,Se,Se,Se),Me=Se)},setLocked:function(Se){H=Se},setClear:function(Se,he,ze,at,Ot){Ot===!0&&(Se*=at,he*=at,ze*=at),Ae.set(Se,he,ze,at),Ne.equals(Ae)===!1&&(o.clearColor(Se,he,ze,at),Ne.copy(Ae))},reset:function(){H=!1,Me=null,Ne.set(-1,0,0,0)}}}function i(){let H=!1,Ae=!1,Me=null,Ne=null,Se=null;return{setReversed:function(he){if(Ae!==he){const ze=e.get("EXT_clip_control");he?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Ae=he;const at=Se;Se=null,this.setClear(at)}},getReversed:function(){return Ae},setTest:function(he){he?me(o.DEPTH_TEST):pe(o.DEPTH_TEST)},setMask:function(he){Me!==he&&!H&&(o.depthMask(he),Me=he)},setFunc:function(he){if(Ae&&(he=Hy[he]),Ne!==he){switch(he){case _h:o.depthFunc(o.NEVER);break;case vh:o.depthFunc(o.ALWAYS);break;case xh:o.depthFunc(o.LESS);break;case To:o.depthFunc(o.LEQUAL);break;case yh:o.depthFunc(o.EQUAL);break;case Sh:o.depthFunc(o.GEQUAL);break;case Mh:o.depthFunc(o.GREATER);break;case Eh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ne=he}},setLocked:function(he){H=he},setClear:function(he){Se!==he&&(Se=he,Ae&&(he=1-he),o.clearDepth(he))},reset:function(){H=!1,Me=null,Ne=null,Se=null,Ae=!1}}}function s(){let H=!1,Ae=null,Me=null,Ne=null,Se=null,he=null,ze=null,at=null,Ot=null;return{setTest:function(Lt){H||(Lt?me(o.STENCIL_TEST):pe(o.STENCIL_TEST))},setMask:function(Lt){Ae!==Lt&&!H&&(o.stencilMask(Lt),Ae=Lt)},setFunc:function(Lt,oi,Pn){(Me!==Lt||Ne!==oi||Se!==Pn)&&(o.stencilFunc(Lt,oi,Pn),Me=Lt,Ne=oi,Se=Pn)},setOp:function(Lt,oi,Pn){(he!==Lt||ze!==oi||at!==Pn)&&(o.stencilOp(Lt,oi,Pn),he=Lt,ze=oi,at=Pn)},setLocked:function(Lt){H=Lt},setClear:function(Lt){Ot!==Lt&&(o.clearStencil(Lt),Ot=Lt)},reset:function(){H=!1,Ae=null,Me=null,Ne=null,Se=null,he=null,ze=null,at=null,Ot=null}}}const a=new t,c=new i,d=new s,h=new WeakMap,f=new WeakMap;let g={},_={},m=new WeakMap,x=[],M=null,E=!1,S=null,y=null,R=null,P=null,C=null,D=null,I=null,O=new ut(0,0,0),w=0,L=!1,oe=null,F=null,X=null,j=null,ne=null;const $=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,G=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=G>=2);let ae=null,ue={};const k=o.getParameter(o.SCISSOR_BOX),Z=o.getParameter(o.VIEWPORT),be=new qt().fromArray(k),je=new qt().fromArray(Z);function Je(H,Ae,Me,Ne){const Se=new Uint8Array(4),he=o.createTexture();o.bindTexture(H,he),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ze=0;ze<Me;ze++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,Ne,0,o.RGBA,o.UNSIGNED_BYTE,Se):o.texImage2D(Ae+ze,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Se);return he}const se={};se[o.TEXTURE_2D]=Je(o.TEXTURE_2D,o.TEXTURE_2D,1),se[o.TEXTURE_CUBE_MAP]=Je(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[o.TEXTURE_2D_ARRAY]=Je(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),se[o.TEXTURE_3D]=Je(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),d.setClear(0),me(o.DEPTH_TEST),c.setFunc(To),ft(!1),jt(cg),me(o.CULL_FACE),Ct(yr);function me(H){g[H]!==!0&&(o.enable(H),g[H]=!0)}function pe(H){g[H]!==!1&&(o.disable(H),g[H]=!1)}function Fe(H,Ae){return _[H]!==Ae?(o.bindFramebuffer(H,Ae),_[H]=Ae,H===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ae),H===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function He(H,Ae){let Me=x,Ne=!1;if(H){Me=m.get(Ae),Me===void 0&&(Me=[],m.set(Ae,Me));const Se=H.textures;if(Me.length!==Se.length||Me[0]!==o.COLOR_ATTACHMENT0){for(let he=0,ze=Se.length;he<ze;he++)Me[he]=o.COLOR_ATTACHMENT0+he;Me.length=Se.length,Ne=!0}}else Me[0]!==o.BACK&&(Me[0]=o.BACK,Ne=!0);Ne&&o.drawBuffers(Me)}function rt(H){return M!==H?(o.useProgram(H),M=H,!0):!1}const tn={[As]:o.FUNC_ADD,[ly]:o.FUNC_SUBTRACT,[cy]:o.FUNC_REVERSE_SUBTRACT};tn[uy]=o.MIN,tn[dy]=o.MAX;const xt={[hy]:o.ZERO,[fy]:o.ONE,[py]:o.SRC_COLOR,[mh]:o.SRC_ALPHA,[yy]:o.SRC_ALPHA_SATURATE,[vy]:o.DST_COLOR,[gy]:o.DST_ALPHA,[my]:o.ONE_MINUS_SRC_COLOR,[gh]:o.ONE_MINUS_SRC_ALPHA,[xy]:o.ONE_MINUS_DST_COLOR,[_y]:o.ONE_MINUS_DST_ALPHA,[Sy]:o.CONSTANT_COLOR,[My]:o.ONE_MINUS_CONSTANT_COLOR,[Ey]:o.CONSTANT_ALPHA,[Ty]:o.ONE_MINUS_CONSTANT_ALPHA};function Ct(H,Ae,Me,Ne,Se,he,ze,at,Ot,Lt){if(H===yr){E===!0&&(pe(o.BLEND),E=!1);return}if(E===!1&&(me(o.BLEND),E=!0),H!==ay){if(H!==S||Lt!==L){if((y!==As||C!==As)&&(o.blendEquation(o.FUNC_ADD),y=As,C=As),Lt)switch(H){case So:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ug:o.blendFunc(o.ONE,o.ONE);break;case dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:ot("WebGLState: Invalid blending: ",H);break}else switch(H){case So:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ug:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case dg:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hg:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",H);break}R=null,P=null,D=null,I=null,O.set(0,0,0),w=0,S=H,L=Lt}return}Se=Se||Ae,he=he||Me,ze=ze||Ne,(Ae!==y||Se!==C)&&(o.blendEquationSeparate(tn[Ae],tn[Se]),y=Ae,C=Se),(Me!==R||Ne!==P||he!==D||ze!==I)&&(o.blendFuncSeparate(xt[Me],xt[Ne],xt[he],xt[ze]),R=Me,P=Ne,D=he,I=ze),(at.equals(O)===!1||Ot!==w)&&(o.blendColor(at.r,at.g,at.b,Ot),O.copy(at),w=Ot),S=H,L=!1}function Ut(H,Ae){H.side===Wi?pe(o.CULL_FACE):me(o.CULL_FACE);let Me=H.side===qn;Ae&&(Me=!Me),ft(Me),H.blending===So&&H.transparent===!1?Ct(yr):Ct(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const Ne=H.stencilWrite;d.setTest(Ne),Ne&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Kt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?me(o.SAMPLE_ALPHA_TO_COVERAGE):pe(o.SAMPLE_ALPHA_TO_COVERAGE)}function ft(H){oe!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),oe=H)}function jt(H){H!==ry?(me(o.CULL_FACE),H!==F&&(H===cg?o.cullFace(o.BACK):H===sy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):pe(o.CULL_FACE),F=H}function V(H){H!==X&&(J&&o.lineWidth(H),X=H)}function Kt(H,Ae,Me){H?(me(o.POLYGON_OFFSET_FILL),(j!==Ae||ne!==Me)&&(j=Ae,ne=Me,c.getReversed()&&(Ae=-Ae),o.polygonOffset(Ae,Me))):pe(o.POLYGON_OFFSET_FILL)}function Et(H){H?me(o.SCISSOR_TEST):pe(o.SCISSOR_TEST)}function Pt(H){H===void 0&&(H=o.TEXTURE0+$-1),ae!==H&&(o.activeTexture(H),ae=H)}function Ge(H,Ae,Me){Me===void 0&&(ae===null?Me=o.TEXTURE0+$-1:Me=ae);let Ne=ue[Me];Ne===void 0&&(Ne={type:void 0,texture:void 0},ue[Me]=Ne),(Ne.type!==H||Ne.texture!==Ae)&&(ae!==Me&&(o.activeTexture(Me),ae=Me),o.bindTexture(H,Ae||se[H]),Ne.type=H,Ne.texture=Ae)}function N(){const H=ue[ae];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function Y(){try{o.compressedTexImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function fe(){try{o.texSubImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function ge(){try{o.texSubImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function de(){try{o.compressedTexSubImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function ke(){try{o.compressedTexSubImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function we(){try{o.texStorage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function Ke(){try{o.texStorage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function st(){try{o.texImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function ye(){try{o.texImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function Te(H){be.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),be.copy(H))}function We(H){je.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),je.copy(H))}function Be(H,Ae){let Me=f.get(Ae);Me===void 0&&(Me=new WeakMap,f.set(Ae,Me));let Ne=Me.get(H);Ne===void 0&&(Ne=o.getUniformBlockIndex(Ae,H.name),Me.set(H,Ne))}function Le(H,Ae){const Ne=f.get(Ae).get(H);h.get(Ae)!==Ne&&(o.uniformBlockBinding(Ae,Ne,H.__bindingPointIndex),h.set(Ae,Ne))}function ht(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},ae=null,ue={},_={},m=new WeakMap,x=[],M=null,E=!1,S=null,y=null,R=null,P=null,C=null,D=null,I=null,O=new ut(0,0,0),w=0,L=!1,oe=null,F=null,X=null,j=null,ne=null,be.set(0,0,o.canvas.width,o.canvas.height),je.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),d.reset()}return{buffers:{color:a,depth:c,stencil:d},enable:me,disable:pe,bindFramebuffer:Fe,drawBuffers:He,useProgram:rt,setBlending:Ct,setMaterial:Ut,setFlipSided:ft,setCullFace:jt,setLineWidth:V,setPolygonOffset:Kt,setScissorTest:Et,activeTexture:Pt,bindTexture:Ge,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:Y,texImage2D:st,texImage3D:ye,updateUBOMapping:Be,uniformBlockBinding:Le,texStorage2D:we,texStorage3D:Ke,texSubImage2D:fe,texSubImage3D:ge,compressedTexSubImage2D:de,compressedTexSubImage3D:ke,scissor:Te,viewport:We,reset:ht}}function sA(o,e,t,i,s,a,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new dt,g=new WeakMap;let _;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,T){return x?new OffscreenCanvas(N,T):Ba("canvas")}function E(N,T,Y){let fe=1;const ge=Ge(N);if((ge.width>Y||ge.height>Y)&&(fe=Y/Math.max(ge.width,ge.height)),fe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const de=Math.floor(fe*ge.width),ke=Math.floor(fe*ge.height);_===void 0&&(_=M(de,ke));const we=T?M(de,ke):_;return we.width=de,we.height=ke,we.getContext("2d").drawImage(N,0,0,de,ke),et("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+de+"x"+ke+")."),we}else return"data"in N&&et("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),N;return N}function S(N){return N.generateMipmaps}function y(N){o.generateMipmap(N)}function R(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(N,T,Y,fe,ge=!1){if(N!==null){if(o[N]!==void 0)return o[N];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let de=T;if(T===o.RED&&(Y===o.FLOAT&&(de=o.R32F),Y===o.HALF_FLOAT&&(de=o.R16F),Y===o.UNSIGNED_BYTE&&(de=o.R8)),T===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(de=o.R8UI),Y===o.UNSIGNED_SHORT&&(de=o.R16UI),Y===o.UNSIGNED_INT&&(de=o.R32UI),Y===o.BYTE&&(de=o.R8I),Y===o.SHORT&&(de=o.R16I),Y===o.INT&&(de=o.R32I)),T===o.RG&&(Y===o.FLOAT&&(de=o.RG32F),Y===o.HALF_FLOAT&&(de=o.RG16F),Y===o.UNSIGNED_BYTE&&(de=o.RG8)),T===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(de=o.RG8UI),Y===o.UNSIGNED_SHORT&&(de=o.RG16UI),Y===o.UNSIGNED_INT&&(de=o.RG32UI),Y===o.BYTE&&(de=o.RG8I),Y===o.SHORT&&(de=o.RG16I),Y===o.INT&&(de=o.RG32I)),T===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(de=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(de=o.RGB16UI),Y===o.UNSIGNED_INT&&(de=o.RGB32UI),Y===o.BYTE&&(de=o.RGB8I),Y===o.SHORT&&(de=o.RGB16I),Y===o.INT&&(de=o.RGB32I)),T===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),Y===o.UNSIGNED_INT&&(de=o.RGBA32UI),Y===o.BYTE&&(de=o.RGBA8I),Y===o.SHORT&&(de=o.RGBA16I),Y===o.INT&&(de=o.RGBA32I)),T===o.RGB&&(Y===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),Y===o.UNSIGNED_INT_10F_11F_11F_REV&&(de=o.R11F_G11F_B10F)),T===o.RGBA){const ke=ge?Uc:wt.getTransfer(fe);Y===o.FLOAT&&(de=o.RGBA32F),Y===o.HALF_FLOAT&&(de=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(de=ke===kt?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function C(N,T){let Y;return N?T===null||T===$i||T===Ua?Y=o.DEPTH24_STENCIL8:T===vi?Y=o.DEPTH32F_STENCIL8:T===Ia&&(Y=o.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===$i||T===Ua?Y=o.DEPTH_COMPONENT24:T===vi?Y=o.DEPTH_COMPONENT32F:T===Ia&&(Y=o.DEPTH_COMPONENT16),Y}function D(N,T){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==hn&&N.minFilter!==fn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function I(N){const T=N.target;T.removeEventListener("dispose",I),w(T),T.isVideoTexture&&g.delete(T)}function O(N){const T=N.target;T.removeEventListener("dispose",O),oe(T)}function w(N){const T=i.get(N);if(T.__webglInit===void 0)return;const Y=N.source,fe=m.get(Y);if(fe){const ge=fe[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&L(N),Object.keys(fe).length===0&&m.delete(Y)}i.remove(N)}function L(N){const T=i.get(N);o.deleteTexture(T.__webglTexture);const Y=N.source,fe=m.get(Y);delete fe[T.__cacheKey],c.memory.textures--}function oe(N){const T=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(T.__webglFramebuffer[fe]))for(let ge=0;ge<T.__webglFramebuffer[fe].length;ge++)o.deleteFramebuffer(T.__webglFramebuffer[fe][ge]);else o.deleteFramebuffer(T.__webglFramebuffer[fe]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[fe])}else{if(Array.isArray(T.__webglFramebuffer))for(let fe=0;fe<T.__webglFramebuffer.length;fe++)o.deleteFramebuffer(T.__webglFramebuffer[fe]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let fe=0;fe<T.__webglColorRenderbuffer.length;fe++)T.__webglColorRenderbuffer[fe]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[fe]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=N.textures;for(let fe=0,ge=Y.length;fe<ge;fe++){const de=i.get(Y[fe]);de.__webglTexture&&(o.deleteTexture(de.__webglTexture),c.memory.textures--),i.remove(Y[fe])}i.remove(N)}let F=0;function X(){F=0}function j(){const N=F;return N>=s.maxTextures&&et("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),F+=1,N}function ne(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function $(N,T){const Y=i.get(N);if(N.isVideoTexture&&Et(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){const fe=N.image;if(fe===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{se(Y,N,T);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+T)}function J(N,T){const Y=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){se(Y,N,T);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+T)}function G(N,T){const Y=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){se(Y,N,T);return}t.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+T)}function Q(N,T){const Y=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Y.__version!==N.version){me(Y,N,T);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+T)}const ae={[Ao]:o.REPEAT,[ji]:o.CLAMP_TO_EDGE,[Ic]:o.MIRRORED_REPEAT},ue={[hn]:o.NEAREST,[j_]:o.NEAREST_MIPMAP_NEAREST,[Ca]:o.NEAREST_MIPMAP_LINEAR,[fn]:o.LINEAR,[bc]:o.LINEAR_MIPMAP_NEAREST,[vr]:o.LINEAR_MIPMAP_LINEAR},k={[Ny]:o.NEVER,[Oy]:o.ALWAYS,[Dy]:o.LESS,[Sf]:o.LEQUAL,[Iy]:o.EQUAL,[Mf]:o.GEQUAL,[Uy]:o.GREATER,[Fy]:o.NOTEQUAL};function Z(N,T){if(T.type===vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===fn||T.magFilter===bc||T.magFilter===Ca||T.magFilter===vr||T.minFilter===fn||T.minFilter===bc||T.minFilter===Ca||T.minFilter===vr)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,ae[T.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,ae[T.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,ae[T.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,ue[T.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,ue[T.minFilter]),T.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,k[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hn||T.minFilter!==Ca&&T.minFilter!==vr||T.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function be(N,T){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",I));const fe=T.source;let ge=m.get(fe);ge===void 0&&(ge={},m.set(fe,ge));const de=ne(T);if(de!==N.__cacheKey){ge[de]===void 0&&(ge[de]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),ge[de].usedTimes++;const ke=ge[N.__cacheKey];ke!==void 0&&(ge[N.__cacheKey].usedTimes--,ke.usedTimes===0&&L(T)),N.__cacheKey=de,N.__webglTexture=ge[de].texture}return Y}function je(N,T,Y){return Math.floor(Math.floor(N/Y)/T)}function Je(N,T,Y,fe){const de=N.updateRanges;if(de.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,Y,fe,T.data);else{de.sort((ye,Te)=>ye.start-Te.start);let ke=0;for(let ye=1;ye<de.length;ye++){const Te=de[ke],We=de[ye],Be=Te.start+Te.count,Le=je(We.start,T.width,4),ht=je(Te.start,T.width,4);We.start<=Be+1&&Le===ht&&je(We.start+We.count-1,T.width,4)===Le?Te.count=Math.max(Te.count,We.start+We.count-Te.start):(++ke,de[ke]=We)}de.length=ke+1;const we=o.getParameter(o.UNPACK_ROW_LENGTH),Ke=o.getParameter(o.UNPACK_SKIP_PIXELS),st=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let ye=0,Te=de.length;ye<Te;ye++){const We=de[ye],Be=Math.floor(We.start/4),Le=Math.ceil(We.count/4),ht=Be%T.width,H=Math.floor(Be/T.width),Ae=Le,Me=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ht),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),t.texSubImage2D(o.TEXTURE_2D,0,ht,H,Ae,Me,Y,fe,T.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,we),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ke),o.pixelStorei(o.UNPACK_SKIP_ROWS,st)}}function se(N,T,Y){let fe=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=o.TEXTURE_3D);const ge=be(N,T),de=T.source;t.bindTexture(fe,N.__webglTexture,o.TEXTURE0+Y);const ke=i.get(de);if(de.version!==ke.__version||ge===!0){t.activeTexture(o.TEXTURE0+Y);const we=wt.getPrimaries(wt.workingColorSpace),Ke=T.colorSpace===es?null:wt.getPrimaries(T.colorSpace),st=T.colorSpace===es||we===Ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let ye=E(T.image,!1,s.maxTextureSize);ye=Pt(T,ye);const Te=a.convert(T.format,T.colorSpace),We=a.convert(T.type);let Be=P(T.internalFormat,Te,We,T.colorSpace,T.isVideoTexture);Z(fe,T);let Le;const ht=T.mipmaps,H=T.isVideoTexture!==!0,Ae=ke.__version===void 0||ge===!0,Me=de.dataReady,Ne=D(T,ye);if(T.isDepthTexture)Be=C(T.format===Rs,T.type),Ae&&(H?t.texStorage2D(o.TEXTURE_2D,1,Be,ye.width,ye.height):t.texImage2D(o.TEXTURE_2D,0,Be,ye.width,ye.height,0,Te,We,null));else if(T.isDataTexture)if(ht.length>0){H&&Ae&&t.texStorage2D(o.TEXTURE_2D,Ne,Be,ht[0].width,ht[0].height);for(let Se=0,he=ht.length;Se<he;Se++)Le=ht[Se],H?Me&&t.texSubImage2D(o.TEXTURE_2D,Se,0,0,Le.width,Le.height,Te,We,Le.data):t.texImage2D(o.TEXTURE_2D,Se,Be,Le.width,Le.height,0,Te,We,Le.data);T.generateMipmaps=!1}else H?(Ae&&t.texStorage2D(o.TEXTURE_2D,Ne,Be,ye.width,ye.height),Me&&Je(T,ye,Te,We)):t.texImage2D(o.TEXTURE_2D,0,Be,ye.width,ye.height,0,Te,We,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){H&&Ae&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,Be,ht[0].width,ht[0].height,ye.depth);for(let Se=0,he=ht.length;Se<he;Se++)if(Le=ht[Se],T.format!==xi)if(Te!==null)if(H){if(Me)if(T.layerUpdates.size>0){const ze=i_(Le.width,Le.height,T.format,T.type);for(const at of T.layerUpdates){const Ot=Le.data.subarray(at*ze/Le.data.BYTES_PER_ELEMENT,(at+1)*ze/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,at,Le.width,Le.height,1,Te,Ot)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,ye.depth,Te,Le.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Se,Be,Le.width,Le.height,ye.depth,0,Le.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Me&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,ye.depth,Te,We,Le.data):t.texImage3D(o.TEXTURE_2D_ARRAY,Se,Be,Le.width,Le.height,ye.depth,0,Te,We,Le.data)}else{H&&Ae&&t.texStorage2D(o.TEXTURE_2D,Ne,Be,ht[0].width,ht[0].height);for(let Se=0,he=ht.length;Se<he;Se++)Le=ht[Se],T.format!==xi?Te!==null?H?Me&&t.compressedTexSubImage2D(o.TEXTURE_2D,Se,0,0,Le.width,Le.height,Te,Le.data):t.compressedTexImage2D(o.TEXTURE_2D,Se,Be,Le.width,Le.height,0,Le.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Me&&t.texSubImage2D(o.TEXTURE_2D,Se,0,0,Le.width,Le.height,Te,We,Le.data):t.texImage2D(o.TEXTURE_2D,Se,Be,Le.width,Le.height,0,Te,We,Le.data)}else if(T.isDataArrayTexture)if(H){if(Ae&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,Be,ye.width,ye.height,ye.depth),Me)if(T.layerUpdates.size>0){const Se=i_(ye.width,ye.height,T.format,T.type);for(const he of T.layerUpdates){const ze=ye.data.subarray(he*Se/ye.data.BYTES_PER_ELEMENT,(he+1)*Se/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,he,ye.width,ye.height,1,Te,We,ze)}T.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Te,We,ye.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Be,ye.width,ye.height,ye.depth,0,Te,We,ye.data);else if(T.isData3DTexture)H?(Ae&&t.texStorage3D(o.TEXTURE_3D,Ne,Be,ye.width,ye.height,ye.depth),Me&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Te,We,ye.data)):t.texImage3D(o.TEXTURE_3D,0,Be,ye.width,ye.height,ye.depth,0,Te,We,ye.data);else if(T.isFramebufferTexture){if(Ae)if(H)t.texStorage2D(o.TEXTURE_2D,Ne,Be,ye.width,ye.height);else{let Se=ye.width,he=ye.height;for(let ze=0;ze<Ne;ze++)t.texImage2D(o.TEXTURE_2D,ze,Be,Se,he,0,Te,We,null),Se>>=1,he>>=1}}else if(ht.length>0){if(H&&Ae){const Se=Ge(ht[0]);t.texStorage2D(o.TEXTURE_2D,Ne,Be,Se.width,Se.height)}for(let Se=0,he=ht.length;Se<he;Se++)Le=ht[Se],H?Me&&t.texSubImage2D(o.TEXTURE_2D,Se,0,0,Te,We,Le):t.texImage2D(o.TEXTURE_2D,Se,Be,Te,We,Le);T.generateMipmaps=!1}else if(H){if(Ae){const Se=Ge(ye);t.texStorage2D(o.TEXTURE_2D,Ne,Be,Se.width,Se.height)}Me&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Te,We,ye)}else t.texImage2D(o.TEXTURE_2D,0,Be,Te,We,ye);S(T)&&y(fe),ke.__version=de.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function me(N,T,Y){if(T.image.length!==6)return;const fe=be(N,T),ge=T.source;t.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+Y);const de=i.get(ge);if(ge.version!==de.__version||fe===!0){t.activeTexture(o.TEXTURE0+Y);const ke=wt.getPrimaries(wt.workingColorSpace),we=T.colorSpace===es?null:wt.getPrimaries(T.colorSpace),Ke=T.colorSpace===es||ke===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const st=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,Te=[];for(let he=0;he<6;he++)!st&&!ye?Te[he]=E(T.image[he],!0,s.maxCubemapSize):Te[he]=ye?T.image[he].image:T.image[he],Te[he]=Pt(T,Te[he]);const We=Te[0],Be=a.convert(T.format,T.colorSpace),Le=a.convert(T.type),ht=P(T.internalFormat,Be,Le,T.colorSpace),H=T.isVideoTexture!==!0,Ae=de.__version===void 0||fe===!0,Me=ge.dataReady;let Ne=D(T,We);Z(o.TEXTURE_CUBE_MAP,T);let Se;if(st){H&&Ae&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,ht,We.width,We.height);for(let he=0;he<6;he++){Se=Te[he].mipmaps;for(let ze=0;ze<Se.length;ze++){const at=Se[ze];T.format!==xi?Be!==null?H?Me&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,0,0,at.width,at.height,Be,at.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,ht,at.width,at.height,0,at.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,0,0,at.width,at.height,Be,Le,at.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze,ht,at.width,at.height,0,Be,Le,at.data)}}}else{if(Se=T.mipmaps,H&&Ae){Se.length>0&&Ne++;const he=Ge(Te[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,ht,he.width,he.height)}for(let he=0;he<6;he++)if(ye){H?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Te[he].width,Te[he].height,Be,Le,Te[he].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,Te[he].width,Te[he].height,0,Be,Le,Te[he].data);for(let ze=0;ze<Se.length;ze++){const Ot=Se[ze].image[he].image;H?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,0,0,Ot.width,Ot.height,Be,Le,Ot.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,ht,Ot.width,Ot.height,0,Be,Le,Ot.data)}}else{H?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Be,Le,Te[he]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,Be,Le,Te[he]);for(let ze=0;ze<Se.length;ze++){const at=Se[ze];H?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,0,0,Be,Le,at.image[he]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,ze+1,ht,Be,Le,at.image[he])}}}S(T)&&y(o.TEXTURE_CUBE_MAP),de.__version=ge.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function pe(N,T,Y,fe,ge,de){const ke=a.convert(Y.format,Y.colorSpace),we=a.convert(Y.type),Ke=P(Y.internalFormat,ke,we,Y.colorSpace),st=i.get(T),ye=i.get(Y);if(ye.__renderTarget=T,!st.__hasExternalTextures){const Te=Math.max(1,T.width>>de),We=Math.max(1,T.height>>de);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?t.texImage3D(ge,de,Ke,Te,We,T.depth,0,ke,we,null):t.texImage2D(ge,de,Ke,Te,We,0,ke,we,null)}t.bindFramebuffer(o.FRAMEBUFFER,N),Kt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,fe,ge,ye.__webglTexture,0,V(T)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,fe,ge,ye.__webglTexture,de),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(N,T,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,N),T.depthBuffer){const fe=T.depthTexture,ge=fe&&fe.isDepthTexture?fe.type:null,de=C(T.stencilBuffer,ge),ke=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Kt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(T),de,T.width,T.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(T),de,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,de,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,ke,o.RENDERBUFFER,N)}else{const fe=T.textures;for(let ge=0;ge<fe.length;ge++){const de=fe[ge],ke=a.convert(de.format,de.colorSpace),we=a.convert(de.type),Ke=P(de.internalFormat,ke,we,de.colorSpace);Kt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(T),Ke,T.width,T.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(T),Ke,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ke,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function He(N,T,Y){const fe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(o.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=i.get(T.depthTexture);if(ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),fe){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,T.depthTexture.addEventListener("dispose",I)),ge.__webglTexture===void 0){ge.__webglTexture=o.createTexture(),t.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),Z(o.TEXTURE_CUBE_MAP,T.depthTexture);const st=a.convert(T.depthTexture.format),ye=a.convert(T.depthTexture.type);let Te;T.depthTexture.format===Tr?Te=o.DEPTH_COMPONENT24:T.depthTexture.format===Rs&&(Te=o.DEPTH24_STENCIL8);for(let We=0;We<6;We++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Te,T.width,T.height,0,st,ye,null)}}else $(T.depthTexture,0);const de=ge.__webglTexture,ke=V(T),we=fe?o.TEXTURE_CUBE_MAP_POSITIVE_X+Y:o.TEXTURE_2D,Ke=T.depthTexture.format===Rs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===Tr)Kt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ke,we,de,0,ke):o.framebufferTexture2D(o.FRAMEBUFFER,Ke,we,de,0);else if(T.depthTexture.format===Rs)Kt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ke,we,de,0,ke):o.framebufferTexture2D(o.FRAMEBUFFER,Ke,we,de,0);else throw new Error("Unknown depthTexture format")}function rt(N){const T=i.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const fe=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),fe){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,fe.removeEventListener("dispose",ge)};fe.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=fe}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(Y)for(let fe=0;fe<6;fe++)He(T.__webglFramebuffer[fe],N,fe);else{const fe=N.texture.mipmaps;fe&&fe.length>0?He(T.__webglFramebuffer[0],N,0):He(T.__webglFramebuffer,N,0)}else if(Y){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]===void 0)T.__webglDepthbuffer[fe]=o.createRenderbuffer(),Fe(T.__webglDepthbuffer[fe],N,!1);else{const ge=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[fe];o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,de)}}else{const fe=N.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Fe(T.__webglDepthbuffer,N,!1);else{const ge=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,de)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function tn(N,T,Y){const fe=i.get(N);T!==void 0&&pe(fe.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&rt(N)}function xt(N){const T=N.texture,Y=i.get(N),fe=i.get(T);N.addEventListener("dispose",O);const ge=N.textures,de=N.isWebGLCubeRenderTarget===!0,ke=ge.length>1;if(ke||(fe.__webglTexture===void 0&&(fe.__webglTexture=o.createTexture()),fe.__version=T.version,c.memory.textures++),de){Y.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[we]=[];for(let Ke=0;Ke<T.mipmaps.length;Ke++)Y.__webglFramebuffer[we][Ke]=o.createFramebuffer()}else Y.__webglFramebuffer[we]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)Y.__webglFramebuffer[we]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(ke)for(let we=0,Ke=ge.length;we<Ke;we++){const st=i.get(ge[we]);st.__webglTexture===void 0&&(st.__webglTexture=o.createTexture(),c.memory.textures++)}if(N.samples>0&&Kt(N)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ke=ge[we];Y.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[we]);const st=a.convert(Ke.format,Ke.colorSpace),ye=a.convert(Ke.type),Te=P(Ke.internalFormat,st,ye,Ke.colorSpace,N.isXRRenderTarget===!0),We=V(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Te,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,Y.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Fe(Y.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(de){t.bindTexture(o.TEXTURE_CUBE_MAP,fe.__webglTexture),Z(o.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ke=0;Ke<T.mipmaps.length;Ke++)pe(Y.__webglFramebuffer[we][Ke],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ke);else pe(Y.__webglFramebuffer[we],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(T)&&y(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let we=0,Ke=ge.length;we<Ke;we++){const st=ge[we],ye=i.get(st);let Te=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Te=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Te,ye.__webglTexture),Z(Te,st),pe(Y.__webglFramebuffer,N,st,o.COLOR_ATTACHMENT0+we,Te,0),S(st)&&y(Te)}t.unbindTexture()}else{let we=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(we=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(we,fe.__webglTexture),Z(we,T),T.mipmaps&&T.mipmaps.length>0)for(let Ke=0;Ke<T.mipmaps.length;Ke++)pe(Y.__webglFramebuffer[Ke],N,T,o.COLOR_ATTACHMENT0,we,Ke);else pe(Y.__webglFramebuffer,N,T,o.COLOR_ATTACHMENT0,we,0);S(T)&&y(we),t.unbindTexture()}N.depthBuffer&&rt(N)}function Ct(N){const T=N.textures;for(let Y=0,fe=T.length;Y<fe;Y++){const ge=T[Y];if(S(ge)){const de=R(N),ke=i.get(ge).__webglTexture;t.bindTexture(de,ke),y(de),t.unbindTexture()}}}const Ut=[],ft=[];function jt(N){if(N.samples>0){if(Kt(N)===!1){const T=N.textures,Y=N.width,fe=N.height;let ge=o.COLOR_BUFFER_BIT;const de=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ke=i.get(N),we=T.length>1;if(we)for(let st=0;st<T.length;st++)t.bindFramebuffer(o.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+st,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+st,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const Ke=N.texture.mipmaps;Ke&&Ke.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let st=0;st<T.length;st++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ke.__webglColorRenderbuffer[st]);const ye=i.get(T[st]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ye,0)}o.blitFramebuffer(0,0,Y,fe,0,0,Y,fe,ge,o.NEAREST),h===!0&&(Ut.length=0,ft.length=0,Ut.push(o.COLOR_ATTACHMENT0+st),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ut.push(de),ft.push(de),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ft)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let st=0;st<T.length;st++){t.bindFramebuffer(o.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+st,o.RENDERBUFFER,ke.__webglColorRenderbuffer[st]);const ye=i.get(T[st]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+st,o.TEXTURE_2D,ye,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const T=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function V(N){return Math.min(s.maxSamples,N.samples)}function Kt(N){const T=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Et(N){const T=c.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function Pt(N,T){const Y=N.colorSpace,fe=N.format,ge=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==kn&&Y!==es&&(wt.getTransfer(Y)===kt?(fe!==xi||ge!==ni)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",Y)),T}function Ge(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(f.width=N.naturalWidth||N.width,f.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(f.width=N.displayWidth,f.height=N.displayHeight):(f.width=N.width,f.height=N.height),f}this.allocateTextureUnit=j,this.resetTextureUnits=X,this.setTexture2D=$,this.setTexture2DArray=J,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=tn,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function oA(o,e){function t(i,s=es){let a;const c=wt.getTransfer(s);if(i===ni)return o.UNSIGNED_BYTE;if(i===mf)return o.UNSIGNED_SHORT_4_4_4_4;if(i===gf)return o.UNSIGNED_SHORT_5_5_5_1;if(i===q_)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===K_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(i===X_)return o.BYTE;if(i===Y_)return o.SHORT;if(i===Ia)return o.UNSIGNED_SHORT;if(i===pf)return o.INT;if(i===$i)return o.UNSIGNED_INT;if(i===vi)return o.FLOAT;if(i===Er)return o.HALF_FLOAT;if(i===$_)return o.ALPHA;if(i===Z_)return o.RGB;if(i===xi)return o.RGBA;if(i===Tr)return o.DEPTH_COMPONENT;if(i===Rs)return o.DEPTH_STENCIL;if(i===_f)return o.RED;if(i===vf)return o.RED_INTEGER;if(i===bo)return o.RG;if(i===xf)return o.RG_INTEGER;if(i===yf)return o.RGBA_INTEGER;if(i===Rc||i===Cc||i===Pc||i===Lc)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Rc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Rc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Th||i===wh||i===Ah||i===bh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Th)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ah)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rh||i===Ch||i===Ph||i===Lh||i===Nh||i===Dh||i===Ih)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Rh||i===Ch)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ph)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Lh)return a.COMPRESSED_R11_EAC;if(i===Nh)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Dh)return a.COMPRESSED_RG11_EAC;if(i===Ih)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uh||i===Fh||i===Oh||i===kh||i===Bh||i===zh||i===Vh||i===Hh||i===Gh||i===Wh||i===jh||i===Xh||i===Yh||i===qh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Uh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kh||i===$h||i===Zh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Kh)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$h)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jh||i===Qh||i===ef||i===tf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Jh)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Qh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ef)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ua?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const aA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new d0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ji({vertexShader:aA,fragmentShader:lA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ri(new Vc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uA extends Ls{constructor(e,t){super();const i=this;let s=null,a=1,c=null,d="local-floor",h=1,f=null,g=null,_=null,m=null,x=null,M=null;const E=typeof XRWebGLBinding<"u",S=new cA,y={},R=t.getContextAttributes();let P=null,C=null;const D=[],I=[],O=new dt;let w=null;const L=new Fn;L.viewport=new qt;const oe=new Fn;oe.viewport=new qt;const F=[L,oe],X=new dM;let j=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let me=D[se];return me===void 0&&(me=new Od,D[se]=me),me.getTargetRaySpace()},this.getControllerGrip=function(se){let me=D[se];return me===void 0&&(me=new Od,D[se]=me),me.getGripSpace()},this.getHand=function(se){let me=D[se];return me===void 0&&(me=new Od,D[se]=me),me.getHandSpace()};function $(se){const me=I.indexOf(se.inputSource);if(me===-1)return;const pe=D[me];pe!==void 0&&(pe.update(se.inputSource,se.frame,f||c),pe.dispatchEvent({type:se.type,data:se.inputSource}))}function J(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",G);for(let se=0;se<D.length;se++){const me=I[se];me!==null&&(I[se]=null,D[se].disconnect(me))}j=null,ne=null,S.reset();for(const se in y)delete y[se];e.setRenderTarget(P),x=null,m=null,_=null,s=null,C=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){a=se,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){d=se,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(se){f=se},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return _===null&&E&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",J),s.addEventListener("inputsourceschange",G),R.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(O),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Fe=null,He=null;R.depth&&(He=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=R.stencil?Rs:Tr,Fe=R.stencil?Ua:$i);const rt={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:a};_=this.getBinding(),m=_.createProjectionLayer(rt),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),C=new qi(m.textureWidth,m.textureHeight,{format:xi,type:ni,depthTexture:new za(m.textureWidth,m.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const pe={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new qi(x.framebufferWidth,x.framebufferHeight,{format:xi,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await s.requestReferenceSpace(d),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(se){for(let me=0;me<se.removed.length;me++){const pe=se.removed[me],Fe=I.indexOf(pe);Fe>=0&&(I[Fe]=null,D[Fe].disconnect(pe))}for(let me=0;me<se.added.length;me++){const pe=se.added[me];let Fe=I.indexOf(pe);if(Fe===-1){for(let rt=0;rt<D.length;rt++)if(rt>=I.length){I.push(pe),Fe=rt;break}else if(I[rt]===null){I[rt]=pe,Fe=rt;break}if(Fe===-1)break}const He=D[Fe];He&&He.connect(pe)}}const Q=new K,ae=new K;function ue(se,me,pe){Q.setFromMatrixPosition(me.matrixWorld),ae.setFromMatrixPosition(pe.matrixWorld);const Fe=Q.distanceTo(ae),He=me.projectionMatrix.elements,rt=pe.projectionMatrix.elements,tn=He[14]/(He[10]-1),xt=He[14]/(He[10]+1),Ct=(He[9]+1)/He[5],Ut=(He[9]-1)/He[5],ft=(He[8]-1)/He[0],jt=(rt[8]+1)/rt[0],V=tn*ft,Kt=tn*jt,Et=Fe/(-ft+jt),Pt=Et*-ft;if(me.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Pt),se.translateZ(Et),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),He[10]===-1)se.projectionMatrix.copy(me.projectionMatrix),se.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ge=tn+Et,N=xt+Et,T=V-Pt,Y=Kt+(Fe-Pt),fe=Ct*xt/N*Ge,ge=Ut*xt/N*Ge;se.projectionMatrix.makePerspective(T,Y,fe,ge,Ge,N),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function k(se,me){me===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(me.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let me=se.near,pe=se.far;S.texture!==null&&(S.depthNear>0&&(me=S.depthNear),S.depthFar>0&&(pe=S.depthFar)),X.near=oe.near=L.near=me,X.far=oe.far=L.far=pe,(j!==X.near||ne!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),j=X.near,ne=X.far),X.layers.mask=se.layers.mask|6,L.layers.mask=X.layers.mask&-5,oe.layers.mask=X.layers.mask&-3;const Fe=se.parent,He=X.cameras;k(X,Fe);for(let rt=0;rt<He.length;rt++)k(He[rt],Fe);He.length===2?ue(X,L,oe):X.projectionMatrix.copy(L.projectionMatrix),Z(se,X,Fe)};function Z(se,me,pe){pe===null?se.matrix.copy(me.matrixWorld):(se.matrix.copy(pe.matrixWorld),se.matrix.invert(),se.matrix.multiply(me.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(me.projectionMatrix),se.projectionMatrixInverse.copy(me.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ro*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(m===null&&x===null))return h},this.setFoveation=function(se){h=se,m!==null&&(m.fixedFoveation=se),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(X)},this.getCameraTexture=function(se){return y[se]};let be=null;function je(se,me){if(g=me.getViewerPose(f||c),M=me,g!==null){const pe=g.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let Fe=!1;pe.length!==X.cameras.length&&(X.cameras.length=0,Fe=!0);for(let xt=0;xt<pe.length;xt++){const Ct=pe[xt];let Ut=null;if(x!==null)Ut=x.getViewport(Ct);else{const jt=_.getViewSubImage(m,Ct);Ut=jt.viewport,xt===0&&(e.setRenderTargetTextures(C,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(C))}let ft=F[xt];ft===void 0&&(ft=new Fn,ft.layers.enable(xt),ft.viewport=new qt,F[xt]=ft),ft.matrix.fromArray(Ct.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Ct.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),xt===0&&(X.matrix.copy(ft.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Fe===!0&&X.cameras.push(ft)}const He=s.enabledFeatures;if(He&&He.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){_=i.getBinding();const xt=_.getDepthInformation(pe[0]);xt&&xt.isValid&&xt.texture&&S.init(xt,s.renderState)}if(He&&He.includes("camera-access")&&E){e.state.unbindTexture(),_=i.getBinding();for(let xt=0;xt<pe.length;xt++){const Ct=pe[xt].camera;if(Ct){let Ut=y[Ct];Ut||(Ut=new d0,y[Ct]=Ut);const ft=_.getCameraImage(Ct);Ut.sourceTexture=ft}}}}for(let pe=0;pe<D.length;pe++){const Fe=I[pe],He=D[pe];Fe!==null&&He!==void 0&&He.update(Fe,me,f||c)}be&&be(se,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),M=null}const Je=new _0;Je.setAnimationLoop(je),this.setAnimationLoop=function(se){be=se},this.dispose=function(){}}}const Ts=new Zi,dA=new _t;function hA(o,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,h0(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,R,P,C){y.isMeshBasicMaterial?a(S,y):y.isMeshLambertMaterial?(a(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(a(S,y),_(S,y)):y.isMeshPhongMaterial?(a(S,y),g(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(a(S,y),m(S,y),y.isMeshPhysicalMaterial&&x(S,y,C)):y.isMeshMatcapMaterial?(a(S,y),M(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),E(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&d(S,y)):y.isPointsMaterial?h(S,y,R,P):y.isSpriteMaterial?f(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===qn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===qn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const R=e.get(y),P=R.envMap,C=R.envMapRotation;P&&(S.envMap.value=P,Ts.copy(C),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),S.envMapRotation.value.setFromMatrix4(dA.makeRotationFromEuler(Ts)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function d(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,R,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*R,S.scale.value=P*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function m(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,R){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===qn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const R=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fA(o,e,t,i){let s={},a={},c=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,P){const C=P.program;i.uniformBlockBinding(R,C)}function f(R,P){let C=s[R.id];C===void 0&&(M(R),C=g(R),s[R.id]=C,R.addEventListener("dispose",S));const D=P.program;i.updateUBOMapping(R,D);const I=e.render.frame;a[R.id]!==I&&(m(R),a[R.id]=I)}function g(R){const P=_();R.__bindingPointIndex=P;const C=o.createBuffer(),D=R.__size,I=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,D,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,C),C}function _(){for(let R=0;R<d;R++)if(c.indexOf(R)===-1)return c.push(R),R;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const P=s[R.id],C=R.uniforms,D=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let I=0,O=C.length;I<O;I++){const w=Array.isArray(C[I])?C[I]:[C[I]];for(let L=0,oe=w.length;L<oe;L++){const F=w[L];if(x(F,I,L,D)===!0){const X=F.__offset,j=Array.isArray(F.value)?F.value:[F.value];let ne=0;for(let $=0;$<j.length;$++){const J=j[$],G=E(J);typeof J=="number"||typeof J=="boolean"?(F.__data[0]=J,o.bufferSubData(o.UNIFORM_BUFFER,X+ne,F.__data)):J.isMatrix3?(F.__data[0]=J.elements[0],F.__data[1]=J.elements[1],F.__data[2]=J.elements[2],F.__data[3]=0,F.__data[4]=J.elements[3],F.__data[5]=J.elements[4],F.__data[6]=J.elements[5],F.__data[7]=0,F.__data[8]=J.elements[6],F.__data[9]=J.elements[7],F.__data[10]=J.elements[8],F.__data[11]=0):(J.toArray(F.__data,ne),ne+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,X,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(R,P,C,D){const I=R.value,O=P+"_"+C;if(D[O]===void 0)return typeof I=="number"||typeof I=="boolean"?D[O]=I:D[O]=I.clone(),!0;{const w=D[O];if(typeof I=="number"||typeof I=="boolean"){if(w!==I)return D[O]=I,!0}else if(w.equals(I)===!1)return w.copy(I),!0}return!1}function M(R){const P=R.uniforms;let C=0;const D=16;for(let O=0,w=P.length;O<w;O++){const L=Array.isArray(P[O])?P[O]:[P[O]];for(let oe=0,F=L.length;oe<F;oe++){const X=L[oe],j=Array.isArray(X.value)?X.value:[X.value];for(let ne=0,$=j.length;ne<$;ne++){const J=j[ne],G=E(J),Q=C%D,ae=Q%G.boundary,ue=Q+ae;C+=ae,ue!==0&&D-ue<G.storage&&(C+=D-ue),X.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=C,C+=G.storage}}}const I=C%D;return I>0&&(C+=D-I),R.__size=C,R.__cache={},this}function E(R){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=48,P.storage=48):R.isMatrix4?(P.boundary=64,P.storage=64):R.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):et("WebGLRenderer: Unsupported uniform value type.",R),P}function S(R){const P=R.target;P.removeEventListener("dispose",S);const C=c.indexOf(P.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(s[P.id]),delete s[P.id],delete a[P.id]}function y(){for(const R in s)o.deleteBuffer(s[R]);c=[],s={},a={}}return{bind:h,update:f,dispose:y}}const pA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function mA(){return Vi===null&&(Vi=new Af(pA,16,16,bo,Er),Vi.name="DFG_LUT",Vi.minFilter=fn,Vi.magFilter=fn,Vi.wrapS=ji,Vi.wrapT=ji,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class gA{constructor(e={}){const{canvas:t=zy(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:x=ni}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const E=x,S=new Set([yf,xf,vf]),y=new Set([ni,$i,Ia,Ua,mf,gf]),R=new Uint32Array(4),P=new Int32Array(4);let C=null,D=null;const I=[],O=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let oe=!1;this._outputColorSpace=yn;let F=0,X=0,j=null,ne=-1,$=null;const J=new qt,G=new qt;let Q=null;const ae=new ut(0);let ue=0,k=t.width,Z=t.height,be=1,je=null,Je=null;const se=new qt(0,0,k,Z),me=new qt(0,0,k,Z);let pe=!1;const Fe=new Rf;let He=!1,rt=!1;const tn=new _t,xt=new K,Ct=new qt,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function jt(){return j===null?be:1}let V=i;function Kt(b,q){return t.getContext(b,q)}try{const b={alpha:!0,depth:s,stencil:a,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hf}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Ot,!1),V===null){const q="webgl2";if(V=Kt(q,b),V===null)throw Kt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw ot("WebGLRenderer: "+b.message),b}let Et,Pt,Ge,N,T,Y,fe,ge,de,ke,we,Ke,st,ye,Te,We,Be,Le,ht,H,Ae,Me,Ne;function Se(){Et=new g1(V),Et.init(),Ae=new oA(V,Et),Pt=new l1(V,Et,e,Ae),Ge=new rA(V,Et),Pt.reversedDepthBuffer&&m&&Ge.buffers.depth.setReversed(!0),N=new x1(V),T=new Ww,Y=new sA(V,Et,Ge,T,Pt,Ae,N),fe=new m1(L),ge=new TM(V),Me=new o1(V,ge),de=new _1(V,ge,N,Me),ke=new S1(V,de,ge,Me,N),Le=new y1(V,Pt,Y),Te=new c1(T),we=new Gw(L,fe,Et,Pt,Me,Te),Ke=new hA(L,T),st=new Xw,ye=new Jw(Et),Be=new s1(L,fe,Ge,ke,M,h),We=new iA(L,ke,Pt),Ne=new fA(V,N,Pt,Ge),ht=new a1(V,Et,N),H=new v1(V,Et,N),N.programs=we.programs,L.capabilities=Pt,L.extensions=Et,L.properties=T,L.renderLists=st,L.shadowMap=We,L.state=Ge,L.info=N}Se(),E!==ni&&(w=new E1(E,t.width,t.height,s,a));const he=new uA(L,V);this.xr=he,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=Et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(b){b!==void 0&&(be=b,this.setSize(k,Z,!1))},this.getSize=function(b){return b.set(k,Z)},this.setSize=function(b,q,ce=!0){if(he.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,Z=q,t.width=Math.floor(b*be),t.height=Math.floor(q*be),ce===!0&&(t.style.width=b+"px",t.style.height=q+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(k*be,Z*be).floor()},this.setDrawingBufferSize=function(b,q,ce){k=b,Z=q,be=ce,t.width=Math.floor(b*ce),t.height=Math.floor(q*ce),this.setViewport(0,0,b,q)},this.setEffects=function(b){if(E===ni){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let q=0;q<b.length;q++)if(b[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(J)},this.getViewport=function(b){return b.copy(se)},this.setViewport=function(b,q,ce,re){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,q,ce,re),Ge.viewport(J.copy(se).multiplyScalar(be).round())},this.getScissor=function(b){return b.copy(me)},this.setScissor=function(b,q,ce,re){b.isVector4?me.set(b.x,b.y,b.z,b.w):me.set(b,q,ce,re),Ge.scissor(G.copy(me).multiplyScalar(be).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(b){Ge.setScissorTest(pe=b)},this.setOpaqueSort=function(b){je=b},this.setTransparentSort=function(b){Je=b},this.getClearColor=function(b){return b.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,ce=!0){let re=0;if(b){let te=!1;if(j!==null){const Ce=j.texture.format;te=S.has(Ce)}if(te){const Ce=j.texture.type,Ue=y.has(Ce),Re=Be.getClearColor(),De=Be.getClearAlpha(),Ze=Re.r,tt=Re.g,pt=Re.b;Ue?(R[0]=Ze,R[1]=tt,R[2]=pt,R[3]=De,V.clearBufferuiv(V.COLOR,0,R)):(P[0]=Ze,P[1]=tt,P[2]=pt,P[3]=De,V.clearBufferiv(V.COLOR,0,P))}else re|=V.COLOR_BUFFER_BIT}q&&(re|=V.DEPTH_BUFFER_BIT),ce&&(re|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&V.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Ot,!1),Be.dispose(),st.dispose(),ye.dispose(),T.dispose(),fe.dispose(),ke.dispose(),Me.dispose(),Ne.dispose(),we.dispose(),he.dispose(),he.removeEventListener("sessionstart",wr),he.removeEventListener("sessionend",is),ai.stop()};function ze(b){b.preventDefault(),Fc("WebGLRenderer: Context Lost."),oe=!0}function at(){Fc("WebGLRenderer: Context Restored."),oe=!1;const b=N.autoReset,q=We.enabled,ce=We.autoUpdate,re=We.needsUpdate,te=We.type;Se(),N.autoReset=b,We.enabled=q,We.autoUpdate=ce,We.needsUpdate=re,We.type=te}function Ot(b){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Lt(b){const q=b.target;q.removeEventListener("dispose",Lt),oi(q)}function oi(b){Pn(b),T.remove(b)}function Pn(b){const q=T.get(b).programs;q!==void 0&&(q.forEach(function(ce){we.releaseProgram(ce)}),b.isShaderMaterial&&we.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,ce,re,te,Ce){q===null&&(q=Ut);const Ue=te.isMesh&&te.matrixWorld.determinant()<0,Re=Xa(b,q,ce,re,te);Ge.setMaterial(re,Ue);let De=ce.index,Ze=1;if(re.wireframe===!0){if(De=de.getWireframeAttribute(ce),De===void 0)return;Ze=2}const tt=ce.drawRange,pt=ce.attributes.position;let Qe=tt.start*Ze,Ft=(tt.start+tt.count)*Ze;Ce!==null&&(Qe=Math.max(Qe,Ce.start*Ze),Ft=Math.min(Ft,(Ce.start+Ce.count)*Ze)),De!==null?(Qe=Math.max(Qe,0),Ft=Math.min(Ft,De.count)):pt!=null&&(Qe=Math.max(Qe,0),Ft=Math.min(Ft,pt.count));const Gt=Ft-Qe;if(Gt<0||Gt===1/0)return;Me.setup(te,re,Re,ce,De);let Ht,At=ht;if(De!==null&&(Ht=ge.get(De),At=H,At.setIndex(Ht)),te.isMesh)re.wireframe===!0?(Ge.setLineWidth(re.wireframeLinewidth*jt()),At.setMode(V.LINES)):At.setMode(V.TRIANGLES);else if(te.isLine){let nn=re.linewidth;nn===void 0&&(nn=1),Ge.setLineWidth(nn*jt()),te.isLineSegments?At.setMode(V.LINES):te.isLineLoop?At.setMode(V.LINE_LOOP):At.setMode(V.LINE_STRIP)}else te.isPoints?At.setMode(V.POINTS):te.isSprite&&At.setMode(V.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Oc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))At.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const nn=te._multiDrawStarts,qe=te._multiDrawCounts,Ln=te._multiDrawCount,Tt=De?ge.get(De).bytesPerElement:1,Bn=T.get(re).currentProgram.getUniforms();for(let zn=0;zn<Ln;zn++)Bn.setValue(V,"_gl_DrawID",zn),At.render(nn[zn]/Tt,qe[zn])}else if(te.isInstancedMesh)At.renderInstances(Qe,Gt,te.count);else if(ce.isInstancedBufferGeometry){const nn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,qe=Math.min(ce.instanceCount,nn);At.renderInstances(Qe,Gt,qe)}else At.render(Qe,Gt)};function Ns(b,q,ce){b.transparent===!0&&b.side===Wi&&b.forceSinglePass===!1?(b.side=qn,b.needsUpdate=!0,ss(b,q,ce),b.side=Mr,b.needsUpdate=!0,ss(b,q,ce),b.side=Wi):ss(b,q,ce)}this.compile=function(b,q,ce=null){ce===null&&(ce=b),D=ye.get(ce),D.init(q),O.push(D),ce.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),b!==ce&&b.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),D.setupLights();const re=new Set;return b.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ce=te.material;if(Ce)if(Array.isArray(Ce))for(let Ue=0;Ue<Ce.length;Ue++){const Re=Ce[Ue];Ns(Re,ce,te),re.add(Re)}else Ns(Ce,ce,te),re.add(Ce)}),D=O.pop(),re},this.compileAsync=function(b,q,ce=null){const re=this.compile(b,q,ce);return new Promise(te=>{function Ce(){if(re.forEach(function(Ue){T.get(Ue).currentProgram.isReady()&&re.delete(Ue)}),re.size===0){te(b);return}setTimeout(Ce,10)}Et.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let nr=null;function Xc(b){nr&&nr(b)}function wr(){ai.stop()}function is(){ai.start()}const ai=new _0;ai.setAnimationLoop(Xc),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(b){nr=b,he.setAnimationLoop(b),b===null?ai.stop():ai.start()},he.addEventListener("sessionstart",wr),he.addEventListener("sessionend",is),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(oe===!0)return;const ce=he.enabled===!0&&he.isPresenting===!0,re=w!==null&&(j===null||ce)&&w.begin(L,j);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(q),q=he.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,q,j),D=ye.get(b,O.length),D.init(q),O.push(D),tn.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Fe.setFromProjectionMatrix(tn,Xi,q.reversedDepth),rt=this.localClippingEnabled,He=Te.init(this.clippingPlanes,rt),C=st.get(b,I.length),C.init(),I.push(C),he.enabled===!0&&he.isPresenting===!0){const Ue=L.xr.getDepthSensingMesh();Ue!==null&&rs(Ue,q,-1/0,L.sortObjects)}rs(b,q,0,L.sortObjects),C.finish(),L.sortObjects===!0&&C.sort(je,Je),ft=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ft&&Be.addToRenderList(C,b),this.info.render.frame++,He===!0&&Te.beginShadows();const te=D.state.shadowsArray;if(We.render(te,b,q),He===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&w.hasRenderPass())===!1){const Ue=C.opaque,Re=C.transmissive;if(D.setupLights(),q.isArrayCamera){const De=q.cameras;if(Re.length>0)for(let Ze=0,tt=De.length;Ze<tt;Ze++){const pt=De[Ze];Wa(Ue,Re,b,pt)}ft&&Be.render(b);for(let Ze=0,tt=De.length;Ze<tt;Ze++){const pt=De[Ze];Ga(C,b,pt,pt.viewport)}}else Re.length>0&&Wa(Ue,Re,b,q),ft&&Be.render(b),Ga(C,b,q)}j!==null&&X===0&&(Y.updateMultisampleRenderTarget(j),Y.updateRenderTargetMipmap(j)),re&&w.end(L),b.isScene===!0&&b.onAfterRender(L,b,q),Me.resetDefaultState(),ne=-1,$=null,O.pop(),O.length>0?(D=O[O.length-1],He===!0&&Te.setGlobalState(L.clippingPlanes,D.state.camera)):D=null,I.pop(),I.length>0?C=I[I.length-1]:C=null};function rs(b,q,ce,re){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)ce=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Fe.intersectsSprite(b)){re&&Ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(tn);const Ue=ke.update(b),Re=b.material;Re.visible&&C.push(b,Ue,Re,ce,Ct.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Fe.intersectsObject(b))){const Ue=ke.update(b),Re=b.material;if(re&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ct.copy(b.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ct.copy(Ue.boundingSphere.center)),Ct.applyMatrix4(b.matrixWorld).applyMatrix4(tn)),Array.isArray(Re)){const De=Ue.groups;for(let Ze=0,tt=De.length;Ze<tt;Ze++){const pt=De[Ze],Qe=Re[pt.materialIndex];Qe&&Qe.visible&&C.push(b,Ue,Qe,ce,Ct.z,pt)}}else Re.visible&&C.push(b,Ue,Re,ce,Ct.z,null)}}const Ce=b.children;for(let Ue=0,Re=Ce.length;Ue<Re;Ue++)rs(Ce[Ue],q,ce,re)}function Ga(b,q,ce,re){const{opaque:te,transmissive:Ce,transparent:Ue}=b;D.setupLightsView(ce),He===!0&&Te.setGlobalState(L.clippingPlanes,ce),re&&Ge.viewport(J.copy(re)),te.length>0&&Ds(te,q,ce),Ce.length>0&&Ds(Ce,q,ce),Ue.length>0&&Ds(Ue,q,ce),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Wa(b,q,ce,re){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[re.id]===void 0){const Qe=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[re.id]=new qi(1,1,{generateMipmaps:!0,type:Qe?Er:ni,minFilter:vr,samples:Math.max(4,Pt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Ce=D.state.transmissionRenderTarget[re.id],Ue=re.viewport||J;Ce.setSize(Ue.z*L.transmissionResolutionScale,Ue.w*L.transmissionResolutionScale);const Re=L.getRenderTarget(),De=L.getActiveCubeFace(),Ze=L.getActiveMipmapLevel();L.setRenderTarget(Ce),L.getClearColor(ae),ue=L.getClearAlpha(),ue<1&&L.setClearColor(16777215,.5),L.clear(),ft&&Be.render(ce);const tt=L.toneMapping;L.toneMapping=Yi;const pt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),D.setupLightsView(re),He===!0&&Te.setGlobalState(L.clippingPlanes,re),Ds(b,ce,re),Y.updateMultisampleRenderTarget(Ce),Y.updateRenderTargetMipmap(Ce),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ft=0,Gt=q.length;Ft<Gt;Ft++){const Ht=q[Ft],{object:At,geometry:nn,material:qe,group:Ln}=Ht;if(qe.side===Wi&&At.layers.test(re.layers)){const Tt=qe.side;qe.side=qn,qe.needsUpdate=!0,Ui(At,ce,re,nn,qe,Ln),qe.side=Tt,qe.needsUpdate=!0,Qe=!0}}Qe===!0&&(Y.updateMultisampleRenderTarget(Ce),Y.updateRenderTargetMipmap(Ce))}L.setRenderTarget(Re,De,Ze),L.setClearColor(ae,ue),pt!==void 0&&(re.viewport=pt),L.toneMapping=tt}function Ds(b,q,ce){const re=q.isScene===!0?q.overrideMaterial:null;for(let te=0,Ce=b.length;te<Ce;te++){const Ue=b[te],{object:Re,geometry:De,group:Ze}=Ue;let tt=Ue.material;tt.allowOverride===!0&&re!==null&&(tt=re),Re.layers.test(ce.layers)&&Ui(Re,q,ce,De,tt,Ze)}}function Ui(b,q,ce,re,te,Ce){b.onBeforeRender(L,q,ce,re,te,Ce),b.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),te.onBeforeRender(L,q,ce,re,b,Ce),te.transparent===!0&&te.side===Wi&&te.forceSinglePass===!1?(te.side=qn,te.needsUpdate=!0,L.renderBufferDirect(ce,q,re,te,b,Ce),te.side=Mr,te.needsUpdate=!0,L.renderBufferDirect(ce,q,re,te,b,Ce),te.side=Wi):L.renderBufferDirect(ce,q,re,te,b,Ce),b.onAfterRender(L,q,ce,re,te,Ce)}function ss(b,q,ce){q.isScene!==!0&&(q=Ut);const re=T.get(b),te=D.state.lights,Ce=D.state.shadowsArray,Ue=te.state.version,Re=we.getParameters(b,te.state,Ce,q,ce),De=we.getProgramCacheKey(Re);let Ze=re.programs;re.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?q.environment:null,re.fog=q.fog;const tt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;re.envMap=fe.get(b.envMap||re.environment,tt),re.envMapRotation=re.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,Ze===void 0&&(b.addEventListener("dispose",Lt),Ze=new Map,re.programs=Ze);let pt=Ze.get(De);if(pt!==void 0){if(re.currentProgram===pt&&re.lightsStateVersion===Ue)return ja(b,Re),pt}else Re.uniforms=we.getUniforms(b),b.onBeforeCompile(Re,L),pt=we.acquireProgram(Re,De),Ze.set(De,pt),re.uniforms=Re.uniforms;const Qe=re.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Qe.clippingPlanes=Te.uniform),ja(b,Re),re.needsLights=qa(b),re.lightsStateVersion=Ue,re.needsLights&&(Qe.ambientLightColor.value=te.state.ambient,Qe.lightProbe.value=te.state.probe,Qe.directionalLights.value=te.state.directional,Qe.directionalLightShadows.value=te.state.directionalShadow,Qe.spotLights.value=te.state.spot,Qe.spotLightShadows.value=te.state.spotShadow,Qe.rectAreaLights.value=te.state.rectArea,Qe.ltc_1.value=te.state.rectAreaLTC1,Qe.ltc_2.value=te.state.rectAreaLTC2,Qe.pointLights.value=te.state.point,Qe.pointLightShadows.value=te.state.pointShadow,Qe.hemisphereLights.value=te.state.hemi,Qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Qe.spotLightMatrix.value=te.state.spotLightMatrix,Qe.spotLightMap.value=te.state.spotLightMap,Qe.pointShadowMatrix.value=te.state.pointShadowMatrix),re.currentProgram=pt,re.uniformsList=null,pt}function ko(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Dc.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function ja(b,q){const ce=T.get(b);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function Xa(b,q,ce,re,te){q.isScene!==!0&&(q=Ut),Y.resetTextureUnits();const Ce=q.fog,Ue=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?q.environment:null,Re=j===null?L.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:kn,De=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Ze=fe.get(re.envMap||Ue,De),tt=re.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pt=!!ce.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Qe=!!ce.morphAttributes.position,Ft=!!ce.morphAttributes.normal,Gt=!!ce.morphAttributes.color;let Ht=Yi;re.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ht=L.toneMapping);const At=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,nn=At!==void 0?At.length:0,qe=T.get(re),Ln=D.state.lights;if(He===!0&&(rt===!0||b!==$)){const rn=b===$&&re.id===ne;Te.setState(re,b,rn)}let Tt=!1;re.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ln.state.version||qe.outputColorSpace!==Re||te.isBatchedMesh&&qe.batching===!1||!te.isBatchedMesh&&qe.batching===!0||te.isBatchedMesh&&qe.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&qe.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&qe.instancing===!1||!te.isInstancedMesh&&qe.instancing===!0||te.isSkinnedMesh&&qe.skinning===!1||!te.isSkinnedMesh&&qe.skinning===!0||te.isInstancedMesh&&qe.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&qe.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&qe.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&qe.instancingMorph===!1&&te.morphTexture!==null||qe.envMap!==Ze||re.fog===!0&&qe.fog!==Ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Te.numPlanes||qe.numIntersection!==Te.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==pt||qe.morphTargets!==Qe||qe.morphNormals!==Ft||qe.morphColors!==Gt||qe.toneMapping!==Ht||qe.morphTargetsCount!==nn)&&(Tt=!0):(Tt=!0,qe.__version=re.version);let Bn=qe.currentProgram;Tt===!0&&(Bn=ss(re,q,te));let zn=!1,Kn=!1,Ar=!1;const It=Bn.getUniforms(),lt=qe.uniforms;if(Ge.useProgram(Bn.program)&&(zn=!0,Kn=!0,Ar=!0),re.id!==ne&&(ne=re.id,Kn=!0),zn||$!==b){Ge.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),It.setValue(V,"projectionMatrix",b.projectionMatrix),It.setValue(V,"viewMatrix",b.matrixWorldInverse);const li=It.map.cameraPosition;li!==void 0&&li.setValue(V,xt.setFromMatrixPosition(b.matrixWorld)),Pt.logarithmicDepthBuffer&&It.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&It.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),$!==b&&($=b,Kn=!0,Ar=!0)}if(qe.needsLights&&(Ln.state.directionalShadowMap.length>0&&It.setValue(V,"directionalShadowMap",Ln.state.directionalShadowMap,Y),Ln.state.spotShadowMap.length>0&&It.setValue(V,"spotShadowMap",Ln.state.spotShadowMap,Y),Ln.state.pointShadowMap.length>0&&It.setValue(V,"pointShadowMap",Ln.state.pointShadowMap,Y)),te.isSkinnedMesh){It.setOptional(V,te,"bindMatrix"),It.setOptional(V,te,"bindMatrixInverse");const rn=te.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),It.setValue(V,"boneTexture",rn.boneTexture,Y))}te.isBatchedMesh&&(It.setOptional(V,te,"batchingTexture"),It.setValue(V,"batchingTexture",te._matricesTexture,Y),It.setOptional(V,te,"batchingIdTexture"),It.setValue(V,"batchingIdTexture",te._indirectTexture,Y),It.setOptional(V,te,"batchingColorTexture"),te._colorsTexture!==null&&It.setValue(V,"batchingColorTexture",te._colorsTexture,Y));const yi=ce.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&Le.update(te,ce,Bn),(Kn||qe.receiveShadow!==te.receiveShadow)&&(qe.receiveShadow=te.receiveShadow,It.setValue(V,"receiveShadow",te.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&q.environment!==null&&(lt.envMapIntensity.value=q.environmentIntensity),lt.dfgLUT!==void 0&&(lt.dfgLUT.value=mA()),Kn&&(It.setValue(V,"toneMappingExposure",L.toneMappingExposure),qe.needsLights&&Ya(lt,Ar),Ce&&re.fog===!0&&Ke.refreshFogUniforms(lt,Ce),Ke.refreshMaterialUniforms(lt,re,be,Z,D.state.transmissionRenderTarget[b.id]),Dc.upload(V,ko(qe),lt,Y)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Dc.upload(V,ko(qe),lt,Y),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&It.setValue(V,"center",te.center),It.setValue(V,"modelViewMatrix",te.modelViewMatrix),It.setValue(V,"normalMatrix",te.normalMatrix),It.setValue(V,"modelMatrix",te.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const rn=re.uniformsGroups;for(let li=0,ir=rn.length;li<ir;li++){const Bo=rn[li];Ne.update(Bo,Bn),Ne.bind(Bo,Bn)}}return Bn}function Ya(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function qa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,q,ce){const re=T.get(b);re.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),T.get(b.texture).__webglTexture=q,T.get(b.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ce,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const ce=T.get(b);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0};const Ka=V.createFramebuffer();this.setRenderTarget=function(b,q=0,ce=0){j=b,F=q,X=ce;let re=null,te=!1,Ce=!1;if(b){const Re=T.get(b);if(Re.__useDefaultFramebuffer!==void 0){Ge.bindFramebuffer(V.FRAMEBUFFER,Re.__webglFramebuffer),J.copy(b.viewport),G.copy(b.scissor),Q=b.scissorTest,Ge.viewport(J),Ge.scissor(G),Ge.setScissorTest(Q),ne=-1;return}else if(Re.__webglFramebuffer===void 0)Y.setupRenderTarget(b);else if(Re.__hasExternalTextures)Y.rebindTextures(b,T.get(b.texture).__webglTexture,T.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const tt=b.depthTexture;if(Re.__boundDepthTexture!==tt){if(tt!==null&&T.has(tt)&&(b.width!==tt.image.width||b.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(b)}}const De=b.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ce=!0);const Ze=T.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ze[q])?re=Ze[q][ce]:re=Ze[q],te=!0):b.samples>0&&Y.useMultisampledRTT(b)===!1?re=T.get(b).__webglMultisampledFramebuffer:Array.isArray(Ze)?re=Ze[ce]:re=Ze,J.copy(b.viewport),G.copy(b.scissor),Q=b.scissorTest}else J.copy(se).multiplyScalar(be).floor(),G.copy(me).multiplyScalar(be).floor(),Q=pe;if(ce!==0&&(re=Ka),Ge.bindFramebuffer(V.FRAMEBUFFER,re)&&Ge.drawBuffers(b,re),Ge.viewport(J),Ge.scissor(G),Ge.setScissorTest(Q),te){const Re=T.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Re.__webglTexture,ce)}else if(Ce){const Re=q;for(let De=0;De<b.textures.length;De++){const Ze=T.get(b.textures[De]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+De,Ze.__webglTexture,ce,Re)}}else if(b!==null&&ce!==0){const Re=T.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Re.__webglTexture,ce)}ne=-1},this.readRenderTargetPixels=function(b,q,ce,re,te,Ce,Ue,Re=0){if(!(b&&b.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue]),De){Ge.bindFramebuffer(V.FRAMEBUFFER,De);try{const Ze=b.textures[Re],tt=Ze.format,pt=Ze.type;if(b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Re),!Pt.textureFormatReadable(tt)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(pt)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-re&&ce>=0&&ce<=b.height-te&&V.readPixels(q,ce,re,te,Ae.convert(tt),Ae.convert(pt),Ce)}finally{const Ze=j!==null?T.get(j).__webglFramebuffer:null;Ge.bindFramebuffer(V.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(b,q,ce,re,te,Ce,Ue,Re=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue]),De)if(q>=0&&q<=b.width-re&&ce>=0&&ce<=b.height-te){Ge.bindFramebuffer(V.FRAMEBUFFER,De);const Ze=b.textures[Re],tt=Ze.format,pt=Ze.type;if(b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Re),!Pt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.bufferData(V.PIXEL_PACK_BUFFER,Ce.byteLength,V.STREAM_READ),V.readPixels(q,ce,re,te,Ae.convert(tt),Ae.convert(pt),0);const Ft=j!==null?T.get(j).__webglFramebuffer:null;Ge.bindFramebuffer(V.FRAMEBUFFER,Ft);const Gt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Vy(V,Gt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ce),V.deleteBuffer(Qe),V.deleteSync(Gt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,ce=0){const re=Math.pow(2,-ce),te=Math.floor(b.image.width*re),Ce=Math.floor(b.image.height*re),Ue=q!==null?q.x:0,Re=q!==null?q.y:0;Y.setTexture2D(b,0),V.copyTexSubImage2D(V.TEXTURE_2D,ce,0,0,Ue,Re,te,Ce),Ge.unbindTexture()};const Yc=V.createFramebuffer(),qc=V.createFramebuffer();this.copyTextureToTexture=function(b,q,ce=null,re=null,te=0,Ce=0){let Ue,Re,De,Ze,tt,pt,Qe,Ft,Gt;const Ht=b.isCompressedTexture?b.mipmaps[Ce]:b.image;if(ce!==null)Ue=ce.max.x-ce.min.x,Re=ce.max.y-ce.min.y,De=ce.isBox3?ce.max.z-ce.min.z:1,Ze=ce.min.x,tt=ce.min.y,pt=ce.isBox3?ce.min.z:0;else{const lt=Math.pow(2,-te);Ue=Math.floor(Ht.width*lt),Re=Math.floor(Ht.height*lt),b.isDataArrayTexture?De=Ht.depth:b.isData3DTexture?De=Math.floor(Ht.depth*lt):De=1,Ze=0,tt=0,pt=0}re!==null?(Qe=re.x,Ft=re.y,Gt=re.z):(Qe=0,Ft=0,Gt=0);const At=Ae.convert(q.format),nn=Ae.convert(q.type);let qe;q.isData3DTexture?(Y.setTexture3D(q,0),qe=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Y.setTexture2DArray(q,0),qe=V.TEXTURE_2D_ARRAY):(Y.setTexture2D(q,0),qe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const Ln=V.getParameter(V.UNPACK_ROW_LENGTH),Tt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Bn=V.getParameter(V.UNPACK_SKIP_PIXELS),zn=V.getParameter(V.UNPACK_SKIP_ROWS),Kn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ht.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ht.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ze),V.pixelStorei(V.UNPACK_SKIP_ROWS,tt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,pt);const Ar=b.isDataArrayTexture||b.isData3DTexture,It=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const lt=T.get(b),yi=T.get(q),rn=T.get(lt.__renderTarget),li=T.get(yi.__renderTarget);Ge.bindFramebuffer(V.READ_FRAMEBUFFER,rn.__webglFramebuffer),Ge.bindFramebuffer(V.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let ir=0;ir<De;ir++)Ar&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,T.get(b).__webglTexture,te,pt+ir),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,T.get(q).__webglTexture,Ce,Gt+ir)),V.blitFramebuffer(Ze,tt,Ue,Re,Qe,Ft,Ue,Re,V.DEPTH_BUFFER_BIT,V.NEAREST);Ge.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(te!==0||b.isRenderTargetTexture||T.has(b)){const lt=T.get(b),yi=T.get(q);Ge.bindFramebuffer(V.READ_FRAMEBUFFER,Yc),Ge.bindFramebuffer(V.DRAW_FRAMEBUFFER,qc);for(let rn=0;rn<De;rn++)Ar?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,lt.__webglTexture,te,pt+rn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,lt.__webglTexture,te),It?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,yi.__webglTexture,Ce,Gt+rn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,yi.__webglTexture,Ce),te!==0?V.blitFramebuffer(Ze,tt,Ue,Re,Qe,Ft,Ue,Re,V.COLOR_BUFFER_BIT,V.NEAREST):It?V.copyTexSubImage3D(qe,Ce,Qe,Ft,Gt+rn,Ze,tt,Ue,Re):V.copyTexSubImage2D(qe,Ce,Qe,Ft,Ze,tt,Ue,Re);Ge.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else It?b.isDataTexture||b.isData3DTexture?V.texSubImage3D(qe,Ce,Qe,Ft,Gt,Ue,Re,De,At,nn,Ht.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(qe,Ce,Qe,Ft,Gt,Ue,Re,De,At,Ht.data):V.texSubImage3D(qe,Ce,Qe,Ft,Gt,Ue,Re,De,At,nn,Ht):b.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ce,Qe,Ft,Ue,Re,At,nn,Ht.data):b.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ce,Qe,Ft,Ht.width,Ht.height,At,Ht.data):V.texSubImage2D(V.TEXTURE_2D,Ce,Qe,Ft,Ue,Re,At,nn,Ht);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ln),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Bn),V.pixelStorei(V.UNPACK_SKIP_ROWS,zn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Kn),Ce===0&&q.generateMipmaps&&V.generateMipmap(qe),Ge.unbindTexture()},this.initRenderTarget=function(b){T.get(b).__webglFramebuffer===void 0&&Y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Y.setTextureCube(b,0):b.isData3DTexture?Y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Y.setTexture2DArray(b,0):Y.setTexture2D(b,0),Ge.unbindTexture()},this.resetState=function(){F=0,X=0,j=null,Ge.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const b_={type:"change"},Uf={type:"start"},E0={type:"end"},wc=new Va,R_=new Qr,_A=Math.cos(70*t0.DEG2RAD),dn=new K,Yn=2*Math.PI,Vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dh=1e-6;class vA extends MM{constructor(e,t=null){super(e,t),this.state=Vt.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yo.ROTATE,MIDDLE:yo.DOLLY,RIGHT:yo.PAN},this.touches={ONE:xo.ROTATE,TWO:xo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Di,this._lastTargetPosition=new K,this._quat=new Di().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new n_,this._sphericalDelta=new n_,this._scale=1,this._panOffset=new K,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new K,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yA.bind(this),this._onPointerDown=xA.bind(this),this._onPointerUp=SA.bind(this),this._onContextMenu=RA.bind(this),this._onMouseWheel=TA.bind(this),this._onKeyDown=wA.bind(this),this._onTouchStart=AA.bind(this),this._onTouchMove=bA.bind(this),this._onMouseDown=MA.bind(this),this._onMouseMove=EA.bind(this),this._interceptControlDown=CA.bind(this),this._interceptControlUp=PA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(b_),this.update(),this.state=Vt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;dn.copy(t).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===Vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Yn:i>Math.PI&&(i-=Yn),s<-Math.PI?s+=Yn:s>Math.PI&&(s-=Yn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),t.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const d=dn.length();c=this._clampDistance(d*this._scale);const h=d-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),a=!!h}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=h!==this.object.zoom;const f=new K(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(d),this.object.updateMatrixWorld(),c=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(wc.origin.copy(this.object.position),wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wc.direction))<_A?this.object.lookAt(this.target):(R_.setFromNormalAndCoplanarPoint(this.object.up,this.target),wc.intersectPlane(R_,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>dh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dh||this._lastTargetPosition.distanceToSquared(this.target)>dh?(this.dispatchEvent(b_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Yn/60*this.autoRotateSpeed*e:Yn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){dn.setFromMatrixColumn(t,0),dn.multiplyScalar(-e),this._panOffset.add(dn)}_panUp(e,t){this.screenSpacePanning===!0?dn.setFromMatrixColumn(t,1):(dn.setFromMatrixColumn(t,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(e),this._panOffset.add(dn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;dn.copy(s).sub(this.target);let a=dn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,a=t-i.top,c=i.width,d=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(a/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(c,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new dt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function yA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function SA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(E0),this.state=Vt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function MA(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case yo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Vt.DOLLY;break;case yo.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Vt.ROTATE}break;case yo.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Vt.PAN}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(Uf)}function EA(o){switch(this.state){case Vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function TA(o){this.enabled===!1||this.enableZoom===!1||this.state!==Vt.NONE||(o.preventDefault(),this.dispatchEvent(Uf),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(E0))}function wA(o){this.enabled!==!1&&this._handleKeyDown(o)}function AA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case xo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Vt.TOUCH_ROTATE;break;case xo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Vt.TOUCH_PAN;break;default:this.state=Vt.NONE}break;case 2:switch(this.touches.TWO){case xo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Vt.TOUCH_DOLLY_PAN;break;case xo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Vt.TOUCH_DOLLY_ROTATE;break;default:this.state=Vt.NONE}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(Uf)}function bA(o){switch(this._trackPointer(o),this.state){case Vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Vt.NONE}}function RA(o){this.enabled!==!1&&o.preventDefault()}function CA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function PA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function C_(o,e){if(e===Cy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===nf||e===J_){let t=o.getIndex();if(t===null){const c=[],d=o.getAttribute("position");if(d!==void 0){for(let h=0;h<d.count;h++)c.push(h);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===nf)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}function LA(o){const e=new Map,t=new Map,i=o.clone();return T0(o,i,function(s,a){e.set(a,s),t.set(s,a)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const a=s,c=e.get(s),d=c.skeleton.bones;a.skeleton=c.skeleton.clone(),a.bindMatrix.copy(c.bindMatrix),a.skeleton.bones=d.map(function(h){return t.get(h)}),a.bind(a.skeleton,a.bindMatrix)}),i}function T0(o,e,t){t(o,e);for(let i=0;i<o.children.length;i++)T0(o.children[i],e.children[i],t)}class NA extends Fo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new OA(t)}),this.register(function(t){return new kA(t)}),this.register(function(t){return new YA(t)}),this.register(function(t){return new qA(t)}),this.register(function(t){return new KA(t)}),this.register(function(t){return new zA(t)}),this.register(function(t){return new VA(t)}),this.register(function(t){return new HA(t)}),this.register(function(t){return new GA(t)}),this.register(function(t){return new FA(t)}),this.register(function(t){return new WA(t)}),this.register(function(t){return new BA(t)}),this.register(function(t){return new XA(t)}),this.register(function(t){return new jA(t)}),this.register(function(t){return new IA(t)}),this.register(function(t){return new P_(t,St.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new P_(t,St.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new $A(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const f=Da.extractUrlBase(e);c=Da.resolveURL(f,this.path)}else c=Da.extractUrlBase(e);this.manager.itemStart(e);const d=function(f){s?s(f):console.error(f),a.manager.itemError(e),a.manager.itemEnd(e)},h=new m0(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(f){try{a.parse(f,c,function(g){t(g),a.manager.itemEnd(e)},d)}catch(g){d(g)}},i,d)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},d={},h=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(h.decode(new Uint8Array(e,0,4))===w0){try{c[St.KHR_BINARY_GLTF]=new ZA(e)}catch(_){s&&s(_);return}a=JSON.parse(c[St.KHR_BINARY_GLTF].content)}else a=JSON.parse(h.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const f=new ub(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](f);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),d[_.name]=_,c[_.name]=!0}if(a.extensionsUsed)for(let g=0;g<a.extensionsUsed.length;++g){const _=a.extensionsUsed[g],m=a.extensionsRequired||[];switch(_){case St.KHR_MATERIALS_UNLIT:c[_]=new UA;break;case St.KHR_DRACO_MESH_COMPRESSION:c[_]=new JA(a,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:c[_]=new QA;break;case St.KHR_MESH_QUANTIZATION:c[_]=new eb;break;default:m.indexOf(_)>=0&&d[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}f.setExtensions(c),f.setPlugins(d),f.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function DA(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}function on(o,e,t){const i=o.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class IA{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,h=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let f;const g=new ut(16777215);h.color!==void 0&&g.setRGB(h.color[0],h.color[1],h.color[2],kn);const _=h.range!==void 0?h.range:0;switch(h.type){case"directional":f=new Nc(g),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new oM(g),f.distance=_;break;case"spot":f=new rM(g),f.distance=_,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,f.angle=h.spot.outerConeAngle,f.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return f.position.set(0,0,0),Hi(f,h),h.intensity!==void 0&&(f.intensity=h.intensity),f.name=t.createUniqueName(h.name||"light_"+e),s=Promise.resolve(f),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],d=(a.extensions&&a.extensions[this.name]||{}).light;return d===void 0?null:this._loadLight(d).then(function(h){return i._getNodeRef(t.cache,d,h)})}}class UA{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return Cs}extendParams(e,t,i){const s=[];e.color=new ut(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],kn),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,yn))}return Promise.all(s)}}class FA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class OA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return on(this.parser,e,this.name)!==null?tr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const a=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new dt(a,a)}return Promise.all(s)}}class kA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){return on(this.parser,e,this.name)!==null?tr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class BA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return on(this.parser,e,this.name)!==null?tr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}}class zA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){return on(this.parser,e,this.name)!==null?tr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(t.sheenColor=new ut(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const a=i.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],kn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,yn)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}}class VA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return on(this.parser,e,this.name)!==null?tr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}}class HA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){return on(this.parser,e,this.name)!==null?tr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const a=i.attenuationColor||[1,1,1];return t.attenuationColor=new ut().setRGB(a[0],a[1],a[2],kn),Promise.all(s)}}class GA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){return on(this.parser,e,this.name)!==null?tr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5),Promise.resolve()}}class WA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){return on(this.parser,e,this.name)!==null?tr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const a=i.specularColorFactor||[1,1,1];return t.specularColor=new ut().setRGB(a[0],a[1],a[2],kn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,yn)),Promise.all(s)}}class jA{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){return on(this.parser,e,this.name)!==null?tr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}}class XA{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return on(this.parser,e,this.name)!==null?tr:null}extendMaterialParams(e,t){const i=on(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}}class YA{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class qA{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],d=s.images[c.source];let h=i.textureLoader;if(d.uri){const f=i.options.manager.getHandler(d.uri);f!==null&&(h=f)}return i.loadTextureImage(e,c.source,h)}}class KA{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],d=s.images[c.source];let h=i.textureLoader;if(d.uri){const f=i.options.manager.getHandler(d.uri);f!==null&&(h=f)}return i.loadTextureImage(e,c.source,h)}}class P_{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(d){const h=s.byteOffset||0,f=s.byteLength||0,g=s.count,_=s.byteStride,m=new Uint8Array(d,h,f);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(g,_,m,s.mode,s.filter).then(function(x){return x.buffer}):c.ready.then(function(){const x=new ArrayBuffer(g*_);return c.decodeGltfBuffer(new Uint8Array(x),g,_,m,s.mode,s.filter),x})})}else return null}}class $A{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const f of s.primitives)if(f.mode!==_i.TRIANGLES&&f.mode!==_i.TRIANGLE_STRIP&&f.mode!==_i.TRIANGLE_FAN&&f.mode!==void 0)return null;const c=i.extensions[this.name].attributes,d=[],h={};for(const f in c)d.push(this.parser.getDependency("accessor",c[f]).then(g=>(h[f]=g,h[f])));return d.length<1?null:(d.push(this.parser.createNodeMesh(e)),Promise.all(d).then(f=>{const g=f.pop(),_=g.isGroup?g.children:[g],m=f[0].count,x=[];for(const M of _){const E=new _t,S=new K,y=new Di,R=new K(1,1,1),P=new CS(M.geometry,M.material,m);for(let C=0;C<m;C++)h.TRANSLATION&&S.fromBufferAttribute(h.TRANSLATION,C),h.ROTATION&&y.fromBufferAttribute(h.ROTATION,C),h.SCALE&&R.fromBufferAttribute(h.SCALE,C),P.setMatrixAt(C,E.compose(S,y,R));for(const C in h)if(C==="_COLOR_0"){const D=h[C];P.instanceColor=new sf(D.array,D.itemSize,D.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&M.geometry.setAttribute(C,h[C]);Qt.prototype.copy.call(P,M),this.parser.assignFinalMaterial(P),x.push(P)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const w0="glTF",ba=12,L_={JSON:1313821514,BIN:5130562};class ZA{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ba),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==w0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ba,a=new DataView(e,ba);let c=0;for(;c<s;){const d=a.getUint32(c,!0);c+=4;const h=a.getUint32(c,!0);if(c+=4,h===L_.JSON){const f=new Uint8Array(e,ba+c,d);this.content=i.decode(f)}else if(h===L_.BIN){const f=ba+c;this.body=e.slice(f,f+d)}c+=d}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class JA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,d={},h={},f={};for(const g in c){const _=cf[g]||g.toLowerCase();d[_]=c[g]}for(const g in e.attributes){const _=cf[g]||g.toLowerCase();if(c[g]!==void 0){const m=i.accessors[e.attributes[g]],x=Eo[m.componentType];f[_]=x.name,h[_]=m.normalized===!0}}return t.getDependency("bufferView",a).then(function(g){return new Promise(function(_,m){s.decodeDracoFile(g,function(x){for(const M in x.attributes){const E=x.attributes[M],S=h[M];S!==void 0&&(E.normalized=S)}_(x)},d,f,kn,m)})})}}class QA{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class eb{constructor(){this.name=St.KHR_MESH_QUANTIZATION}}class A0 extends Do{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=d*2,f=d*3,g=s-t,_=(i-t)/g,m=_*_,x=m*_,M=e*f,E=M-f,S=-2*x+3*m,y=x-m,R=1-S,P=y-m+_;for(let C=0;C!==d;C++){const D=c[E+C+d],I=c[E+C+h]*g,O=c[M+C+d],w=c[M+C]*g;a[C]=R*D+P*I+S*O+y*w}return a}}const tb=new Di;class nb extends A0{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return tb.fromArray(a).normalize().toArray(a),a}}const _i={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},N_={9728:hn,9729:fn,9984:j_,9985:bc,9986:Ca,9987:vr},D_={33071:ji,33648:Ic,10497:Ao},hh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ib={CUBICSPLINE:void 0,LINEAR:Oa,STEP:Fa},fh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rb(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Lf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mr})),o.DefaultMaterial}function ws(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Hi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sb(o,e,t){let i=!1,s=!1,a=!1;for(let f=0,g=e.length;f<g;f++){const _=e[f];if(_.POSITION!==void 0&&(i=!0),_.NORMAL!==void 0&&(s=!0),_.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],d=[],h=[];for(let f=0,g=e.length;f<g;f++){const _=e[f];if(i){const m=_.POSITION!==void 0?t.getDependency("accessor",_.POSITION):o.attributes.position;c.push(m)}if(s){const m=_.NORMAL!==void 0?t.getDependency("accessor",_.NORMAL):o.attributes.normal;d.push(m)}if(a){const m=_.COLOR_0!==void 0?t.getDependency("accessor",_.COLOR_0):o.attributes.color;h.push(m)}}return Promise.all([Promise.all(c),Promise.all(d),Promise.all(h)]).then(function(f){const g=f[0],_=f[1],m=f[2];return i&&(o.morphAttributes.position=g),s&&(o.morphAttributes.normal=_),a&&(o.morphAttributes.color=m),o.morphTargetsRelative=!0,o})}function ob(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ab(o){let e;const t=o.extensions&&o.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ph(t.attributes):e=o.indices+":"+ph(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+ph(o.targets[i]);return e}function ph(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function uf(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lb(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const cb=new _t;class ub{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new DA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const d=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(d)===!0;const h=d.match(/Version\/(\d+)/);s=i&&h?parseInt(h[1],10):-1,a=d.indexOf("Firefox")>-1,c=a?d.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new nM(this.options.manager):this.textureLoader=new cM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new m0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const d={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return ws(a,d,s),Hi(d,s),Promise.all(i._invokeAll(function(h){return h.afterRoot&&h.afterRoot(d)})).then(function(){for(const h of d.scenes)h.updateMatrixWorld();e(d)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let d=0,h=c.length;d<h;d++)e[c[d]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,d)=>{const h=this.associations.get(c);h!=null&&this.associations.set(d,h);for(const[f,g]of c.children.entries())a(g,d.children[f])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(Da.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=hh[s.type],d=Eo[s.componentType],h=s.normalized===!0,f=new d(s.count*c);return Promise.resolve(new On(f,c,h))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const d=c[0],h=hh[s.type],f=Eo[s.componentType],g=f.BYTES_PER_ELEMENT,_=g*h,m=s.byteOffset||0,x=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,S;if(x&&x!==_){const y=Math.floor(m/x),R="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+y+":"+s.count;let P=t.cache.get(R);P||(E=new f(d,y*x,s.count*x/g),P=new MS(E,x/g),t.cache.add(R,P)),S=new wf(P,h,m%x/g,M)}else d===null?E=new f(s.count*h):E=new f(d,m,s.count*h),S=new On(E,h,M);if(s.sparse!==void 0){const y=hh.SCALAR,R=Eo[s.sparse.indices.componentType],P=s.sparse.indices.byteOffset||0,C=s.sparse.values.byteOffset||0,D=new R(c[1],P,s.sparse.count*y),I=new f(c[2],C,s.sparse.count*h);d!==null&&(S=new On(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let O=0,w=D.length;O<w;O++){const L=D[O];if(S.setX(L,I[O*h]),h>=2&&S.setY(L,I[O*h+1]),h>=3&&S.setZ(L,I[O*h+2]),h>=4&&S.setW(L,I[O*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let d=this.textureLoader;if(c.uri){const h=i.manager.getHandler(c.uri);h!==null&&(d=h)}return this.loadTextureImage(e,a,d)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],d=a.images[t],h=(d.uri||d.bufferView)+":"+c.sampler;if(this.textureCache[h])return this.textureCache[h];const f=this.loadImageSource(t,i).then(function(g){g.flipY=!1,g.name=c.name||d.name||"",g.name===""&&typeof d.uri=="string"&&d.uri.startsWith("data:image/")===!1&&(g.name=d.uri);const m=(a.samplers||{})[c.sampler]||{};return g.magFilter=N_[m.magFilter]||fn,g.minFilter=N_[m.minFilter]||vr,g.wrapS=D_[m.wrapS]||Ao,g.wrapT=D_[m.wrapT]||Ao,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==hn&&g.minFilter!==fn,s.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[h]=f,f}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const c=s.images[e],d=self.URL||self.webkitURL;let h=c.uri||"",f=!1;if(c.bufferView!==void 0)h=i.getDependency("bufferView",c.bufferView).then(function(_){f=!0;const m=new Blob([_],{type:c.mimeType});return h=d.createObjectURL(m),h});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(h).then(function(_){return new Promise(function(m,x){let M=m;t.isImageBitmapLoader===!0&&(M=function(E){const S=new Sn(E);S.needsUpdate=!0,m(S)}),t.load(Da.resolveURL(_,a.path),M,void 0,x)})}).then(function(_){return f===!0&&d.revokeObjectURL(h),Hi(_,c),_.userData.mimeType=c.mimeType||lb(c.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),_});return this.sourceCache[e]=g,g}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[St.KHR_TEXTURE_TRANSFORM]){const d=i.extensions!==void 0?i.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(d){const h=a.associations.get(c);c=a.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(c,d),a.associations.set(c,h)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const d="PointsMaterial:"+i.uuid;let h=this.cache.get(d);h||(h=new c0,Ki.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,h.sizeAttenuation=!1,this.cache.add(d,h)),i=h}else if(e.isLine){const d="LineBasicMaterial:"+i.uuid;let h=this.cache.get(d);h||(h=new Cf,Ki.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,this.cache.add(d,h)),i=h}if(s||a||c){let d="ClonedMaterial:"+i.uuid+":";s&&(d+="derivative-tangents:"),a&&(d+="vertex-colors:"),c&&(d+="flat-shading:");let h=this.cache.get(d);h||(h=i.clone(),a&&(h.vertexColors=!0),c&&(h.flatShading=!0),s&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(d,h),this.associations.set(h,this.associations.get(i))),i=h}e.material=i}getMaterialType(){return Lf}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const d={},h=a.extensions||{},f=[];if(h[St.KHR_MATERIALS_UNLIT]){const _=s[St.KHR_MATERIALS_UNLIT];c=_.getMaterialType(),f.push(_.extendParams(d,a,t))}else{const _=a.pbrMetallicRoughness||{};if(d.color=new ut(1,1,1),d.opacity=1,Array.isArray(_.baseColorFactor)){const m=_.baseColorFactor;d.color.setRGB(m[0],m[1],m[2],kn),d.opacity=m[3]}_.baseColorTexture!==void 0&&f.push(t.assignTexture(d,"map",_.baseColorTexture,yn)),d.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,d.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(f.push(t.assignTexture(d,"metalnessMap",_.metallicRoughnessTexture)),f.push(t.assignTexture(d,"roughnessMap",_.metallicRoughnessTexture))),c=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),f.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,d)})))}a.doubleSided===!0&&(d.side=Wi);const g=a.alphaMode||fh.OPAQUE;if(g===fh.BLEND?(d.transparent=!0,d.depthWrite=!1):(d.transparent=!1,g===fh.MASK&&(d.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==Cs&&(f.push(t.assignTexture(d,"normalMap",a.normalTexture)),d.normalScale=new dt(1,1),a.normalTexture.scale!==void 0)){const _=a.normalTexture.scale;d.normalScale.set(_,_)}if(a.occlusionTexture!==void 0&&c!==Cs&&(f.push(t.assignTexture(d,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(d.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==Cs){const _=a.emissiveFactor;d.emissive=new ut().setRGB(_[0],_[1],_[2],kn)}return a.emissiveTexture!==void 0&&c!==Cs&&f.push(t.assignTexture(d,"emissiveMap",a.emissiveTexture,yn)),Promise.all(f).then(function(){const _=new c(d);return a.name&&(_.name=a.name),Hi(_,a),t.associations.set(_,{materials:e}),a.extensions&&ws(s,_,a),_})}createUniqueName(e){const t=zt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(d){return i[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(d,t).then(function(h){return I_(h,d,t)})}const c=[];for(let d=0,h=e.length;d<h;d++){const f=e[d],g=ab(f),_=s[g];if(_)c.push(_.promise);else{let m;f.extensions&&f.extensions[St.KHR_DRACO_MESH_COMPRESSION]?m=a(f):m=I_(new si,f,t),s[g]={primitive:f,promise:m},c.push(m)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,d=[];for(let h=0,f=c.length;h<f;h++){const g=c[h].material===void 0?rb(this.cache):this.getDependency("material",c[h].material);d.push(g)}return d.push(t.loadGeometries(c)),Promise.all(d).then(function(h){const f=h.slice(0,h.length-1),g=h[h.length-1],_=[];for(let x=0,M=g.length;x<M;x++){const E=g[x],S=c[x];let y;const R=f[x];if(S.mode===_i.TRIANGLES||S.mode===_i.TRIANGLE_STRIP||S.mode===_i.TRIANGLE_FAN||S.mode===void 0)y=a.isSkinnedMesh===!0?new AS(E,R):new ri(E,R),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),S.mode===_i.TRIANGLE_STRIP?y.geometry=C_(y.geometry,J_):S.mode===_i.TRIANGLE_FAN&&(y.geometry=C_(y.geometry,nf));else if(S.mode===_i.LINES)y=new l0(E,R);else if(S.mode===_i.LINE_STRIP)y=new Pf(E,R);else if(S.mode===_i.LINE_LOOP)y=new DS(E,R);else if(S.mode===_i.POINTS)y=new IS(E,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(y.geometry.morphAttributes).length>0&&ob(y,a),y.name=t.createUniqueName(a.name||"mesh_"+e),Hi(y,a),S.extensions&&ws(s,y,S),t.assignFinalMaterial(y),_.push(y)}for(let x=0,M=_.length;x<M;x++)t.associations.set(_[x],{meshes:e,primitives:x});if(_.length===1)return a.extensions&&ws(s,_[0],a),_[0];const m=new ts;a.extensions&&ws(s,m,a),t.associations.set(m,{meshes:e});for(let x=0,M=_.length;x<M;x++)m.add(_[x]);return m})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Fn(t0.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Gc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Hi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,d=[],h=[];for(let f=0,g=c.length;f<g;f++){const _=c[f];if(_){d.push(_);const m=new _t;a!==null&&m.fromArray(a.array,f*16),h.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[f])}return new bf(d,h)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],d=[],h=[],f=[],g=[];for(let _=0,m=s.channels.length;_<m;_++){const x=s.channels[_],M=s.samplers[x.sampler],E=x.target,S=E.node,y=s.parameters!==void 0?s.parameters[M.input]:M.input,R=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(c.push(this.getDependency("node",S)),d.push(this.getDependency("accessor",y)),h.push(this.getDependency("accessor",R)),f.push(M),g.push(E))}return Promise.all([Promise.all(c),Promise.all(d),Promise.all(h),Promise.all(f),Promise.all(g)]).then(function(_){const m=_[0],x=_[1],M=_[2],E=_[3],S=_[4],y=[];for(let P=0,C=m.length;P<C;P++){const D=m[P],I=x[P],O=M[P],w=E[P],L=S[P];if(D===void 0)continue;D.updateMatrix&&D.updateMatrix();const oe=i._createAnimationTracks(D,I,O,w,L);if(oe)for(let F=0;F<oe.length;F++)y.push(oe[F])}const R=new KS(a,void 0,y);return Hi(R,s),R})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(d){if(d.isMesh)for(let h=0,f=s.weights.length;h<f;h++)d.morphTargetInfluences[h]=s.weights[h]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],d=s.children||[];for(let f=0,g=d.length;f<g;f++)c.push(i.getDependency("node",d[f]));const h=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),h]).then(function(f){const g=f[0],_=f[1],m=f[2];m!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(m,cb)});for(let x=0,M=_.length;x<M;x++)g.add(_[x]);if(g.userData.pivot!==void 0&&_.length>0){const x=g.userData.pivot,M=_[0];g.pivot=new K().fromArray(x),g.position.x-=x[0],g.position.y-=x[1],g.position.z-=x[2],M.position.set(0,0,0),delete g.userData.pivot}return g})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",d=[],h=s._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});return h&&d.push(h),a.camera!==void 0&&d.push(s.getDependency("camera",a.camera).then(function(f){return s._getNodeRef(s.cameraCache,a.camera,f)})),s._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){d.push(f)}),this.nodeCache[e]=Promise.all(d).then(function(f){let g;if(a.isBone===!0?g=new a0:f.length>1?g=new ts:f.length===1?g=f[0]:g=new Qt,g!==f[0])for(let _=0,m=f.length;_<m;_++)g.add(f[_]);if(a.name&&(g.userData.name=a.name,g.name=c),Hi(g,a),a.extensions&&ws(i,g,a),a.matrix!==void 0){const _=new _t;_.fromArray(a.matrix),g.applyMatrix4(_)}else a.translation!==void 0&&g.position.fromArray(a.translation),a.rotation!==void 0&&g.quaternion.fromArray(a.rotation),a.scale!==void 0&&g.scale.fromArray(a.scale);if(!s.associations.has(g))s.associations.set(g,{});else if(a.mesh!==void 0&&s.meshCache.refs[a.mesh]>1){const _=s.associations.get(g);s.associations.set(g,{..._})}return s.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new ts;i.name&&(a.name=s.createUniqueName(i.name)),Hi(a,i),i.extensions&&ws(t,a,i);const c=i.nodes||[],d=[];for(let h=0,f=c.length;h<f;h++)d.push(s.getDependency("node",c[h]));return Promise.all(d).then(function(h){for(let g=0,_=h.length;g<_;g++){const m=h[g];m.parent!==null?a.add(LA(m)):a.add(m)}const f=g=>{const _=new Map;for(const[m,x]of s.associations)(m instanceof Ki||m instanceof Sn)&&_.set(m,x);return g.traverse(m=>{const x=s.associations.get(m);x!=null&&_.set(m,x)}),_};return s.associations=f(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],d=e.name?e.name:e.uuid,h=[];Jr[a.path]===Jr.weights?e.traverse(function(m){m.morphTargetInfluences&&h.push(m.name?m.name:m.uuid)}):h.push(d);let f;switch(Jr[a.path]){case Jr.weights:f=Po;break;case Jr.rotation:f=Lo;break;case Jr.translation:case Jr.scale:f=No;break;default:switch(i.itemSize){case 1:f=Po;break;case 2:case 3:default:f=No;break}break}const g=s.interpolation!==void 0?ib[s.interpolation]:Oa,_=this._getArrayFromAccessor(i);for(let m=0,x=h.length;m<x;m++){const M=new f(h[m]+"."+Jr[a.path],t.array,_,g);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=uf(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Lo?nb:A0;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function db(o,e,t){const i=e.attributes,s=new Qi;if(i.POSITION!==void 0){const d=t.json.accessors[i.POSITION],h=d.min,f=d.max;if(h!==void 0&&f!==void 0){if(s.set(new K(h[0],h[1],h[2]),new K(f[0],f[1],f[2])),d.normalized){const g=uf(Eo[d.componentType]);s.min.multiplyScalar(g),s.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const d=new K,h=new K;for(let f=0,g=a.length;f<g;f++){const _=a[f];if(_.POSITION!==void 0){const m=t.json.accessors[_.POSITION],x=m.min,M=m.max;if(x!==void 0&&M!==void 0){if(h.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),h.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),h.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),m.normalized){const E=uf(Eo[m.componentType]);h.multiplyScalar(E)}d.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(d)}o.boundingBox=s;const c=new er;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function I_(o,e,t){const i=e.attributes,s=[];function a(c,d){return t.getDependency("accessor",c).then(function(h){o.setAttribute(d,h)})}for(const c in i){const d=cf[c]||c.toLowerCase();d in o.attributes||s.push(a(i[c],d))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(d){o.setIndex(d)});s.push(c)}return wt.workingColorSpace!==kn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${wt.workingColorSpace}" not supported.`),Hi(o,e),db(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?sb(o,e.targets,t):o})}const hb="_panel_1ux0o_1",fb="_toolbar_1ux0o_8",pb="_toolbarLabel_1ux0o_18",mb="_toolbarActions_1ux0o_26",gb="_toolBtn_1ux0o_31",_b="_viewerArea_1ux0o_54",vb="_canvas_1ux0o_60",xb="_overlay_1ux0o_71",yb="_placeholder_1ux0o_80",Sb="_placeholderCube_1ux0o_89",Mb="_placeholderTitle_1ux0o_99",Eb="_placeholderDesc_1ux0o_105",Tb="_hintRow_1ux0o_117",wb="_hint_1ux0o_117",Ab="_progressBox_1ux0o_129",bb="_progressSpinner_1ux0o_144",Rb="_progressTitle_1ux0o_157",Cb="_progressLog_1ux0o_163",Pb="_errorBox_1ux0o_172",Lb="_errorIcon_1ux0o_187",Nb="_errorTitle_1ux0o_192",Db="_errorMsg_1ux0o_198",Ib="_noWebGLBox_1ux0o_205",Ub="_noWebGLIcon_1ux0o_214",Fb="_statusBar_1ux0o_219",Ob="_statusDot_1ux0o_231",bt={panel:hb,toolbar:fb,toolbarLabel:pb,toolbarActions:mb,toolBtn:gb,viewerArea:_b,canvas:vb,overlay:xb,placeholder:yb,placeholderCube:Sb,placeholderTitle:Mb,placeholderDesc:Eb,hintRow:Tb,hint:wb,progressBox:Ab,progressSpinner:bb,progressTitle:Rb,progressLog:Cb,errorBox:Pb,errorIcon:Lb,errorTitle:Nb,errorMsg:Db,noWebGLBox:Ib,noWebGLIcon:Ub,statusBar:Fb,statusDot:Ob};function kb(){try{const o=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(o.getContext("webgl")||o.getContext("experimental-webgl")))}catch{return!1}}function Bb({state:o}){const{jobStatus:e,jobLogs:t,modelUrl:i,stlUrl:s}=o,a=Rt.useRef(null),[c,d]=Rt.useState(!1),h=Rt.useRef(null),f=Rt.useCallback(()=>{if(!a.current||h.current)return;if(!kb()){d(!0);return}const R=a.current,P=R.clientWidth,C=R.clientHeight;let D;try{D=new gA({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{d(!0);return}D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.setSize(P,C),D.shadowMap.enabled=!0,D.outputColorSpace=yn,D.toneMapping=ff,D.toneMappingExposure=1.2,R.appendChild(D.domElement);const I=new vS;I.background=new ut(1250067);const O=new Fn(45,P/C,.1,1e3);O.position.set(0,40,80),O.lookAt(0,10,0);const w=new vA(O,D.domElement);w.enableDamping=!0,w.dampingFactor=.08,w.minDistance=10,w.maxDistance=400,w.target.set(0,10,0);const L=new lM(16777215,.6);I.add(L);const oe=new Nc(16777215,1.2);oe.position.set(40,80,40),oe.castShadow=!0,oe.shadow.mapSize.set(2048,2048),I.add(oe);const F=new Nc(12907776,.3);F.position.set(-30,20,-40),I.add(F);const X=new Nc(8323327,.2);X.position.set(0,-20,-60),I.add(X);const j=new SM(200,40,3026478,3026478);j.position.y=0,I.add(j);const ne=new ts;I.add(ne);let $=0;const J=()=>{$=requestAnimationFrame(J),w.update(),D.render(I,O)};J();const G=()=>{if(!a.current)return;const Q=a.current.clientWidth,ae=a.current.clientHeight;O.aspect=Q/ae,O.updateProjectionMatrix(),D.setSize(Q,ae)};return window.addEventListener("resize",G),h.current={renderer:D,scene:I,camera:O,controls:w,rafId:$,modelGroup:ne},()=>{window.removeEventListener("resize",G)}},[]),g=Rt.useCallback(()=>{if(!h.current)return;const{camera:R,controls:P}=h.current;R.position.set(0,40,80),R.lookAt(0,10,0),P.target.set(0,10,0),P.update()},[]);Rt.useEffect(()=>{const R=f();return()=>{R==null||R(),h.current&&(cancelAnimationFrame(h.current.rafId),h.current.renderer.dispose(),a.current&&(a.current.innerHTML=""),h.current=null)}},[f]);const _=Rt.useCallback(()=>{if(!h.current)return;const{modelGroup:R,camera:P,controls:C}=h.current;for(;R.children.length>0;){const D=R.children[0];R.remove(D),D.geometry&&D.geometry.dispose()}P.position.set(0,40,80),C.target.set(0,10,0),C.update()},[]);Rt.useEffect(()=>{if(!i){_();return}if(!h.current)return;const{modelGroup:R,camera:P,controls:C}=h.current;for(;R.children.length>0;){const I=R.children[0];R.remove(I),I.geometry&&I.geometry.dispose()}new NA().load(i,I=>{const O=I.scene,w=new Qi().setFromObject(O),L=w.getCenter(new K),oe=w.getSize(new K),F=Math.max(oe.x,oe.y,oe.z),j=50/(F||1);O.scale.setScalar(j),O.position.sub(L.multiplyScalar(j)),O.position.y+=oe.y*j*.5,O.traverse($=>{if($.isMesh){const J=$;J.castShadow=!0,J.receiveShadow=!0}}),R.add(O);const ne=F*j*2.5;P.position.set(0,oe.y*j*.5,ne),C.target.set(0,oe.y*j*.3,0),C.update()},void 0,I=>console.error("GLTFLoader error:",I))},[i]);const m=e==="idle"&&!c,x=e==="pending"||e==="running",M=e==="error",E=e==="done"&&i,S=t[t.length-1]??"Starting...",y=()=>{if(!s)return;const R=document.createElement("a");R.href=s,R.download="pendant.stl",R.click()};return B.jsxs("div",{className:bt.panel,children:[B.jsxs("div",{className:bt.toolbar,children:[B.jsx("span",{className:bt.toolbarLabel,children:"3D Viewer"}),B.jsxs("div",{className:bt.toolbarActions,children:[B.jsxs("button",{className:bt.toolBtn,onClick:g,title:"Reset camera view",children:[B.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[B.jsx("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),B.jsx("path",{d:"M3 3v5h5"})]}),"Reset View"]}),B.jsxs("button",{className:bt.toolBtn,onClick:y,disabled:!s,title:"Download STL",children:[B.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[B.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),B.jsx("polyline",{points:"7 10 12 15 17 10"}),B.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Export STL"]})]})]}),B.jsxs("div",{className:bt.viewerArea,children:[B.jsx("div",{ref:a,className:bt.canvas}),m&&B.jsx("div",{className:bt.overlay,children:B.jsxs("div",{className:bt.placeholder,children:[B.jsx("div",{className:bt.placeholderCube,children:B.jsxs("svg",{viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"72",height:"72",children:[B.jsx("polygon",{points:"40,10 70,27 70,57 40,74 10,57 10,27",stroke:"#C4F500",strokeWidth:"1.5",fill:"rgba(196,245,0,0.04)",opacity:"0.7"}),B.jsx("polygon",{points:"40,10 70,27 40,44 10,27",stroke:"#C4F500",strokeWidth:"1",fill:"rgba(196,245,0,0.07)",opacity:"0.7"}),B.jsx("line",{x1:"40",y1:"44",x2:"40",y2:"74",stroke:"#C4F500",strokeWidth:"1",opacity:"0.4"}),B.jsx("circle",{cx:"40",cy:"44",r:"2",fill:"#C4F500",opacity:"0.6"})]})}),B.jsx("p",{className:bt.placeholderTitle,children:"No model generated yet"}),B.jsxs("p",{className:bt.placeholderDesc,children:["Upload SVG layers and click ",B.jsx("strong",{children:"Generate Pendant"})," to create a 3D model"]}),B.jsxs("div",{className:bt.hintRow,children:[B.jsx("div",{className:bt.hint,children:"Orbit: click + drag"}),B.jsx("div",{className:bt.hint,children:"Zoom: scroll wheel"}),B.jsx("div",{className:bt.hint,children:"Pan: right-click + drag"})]})]})}),c&&B.jsx("div",{className:bt.overlay,children:B.jsxs("div",{className:bt.noWebGLBox,children:[B.jsx("div",{className:bt.noWebGLIcon,children:"🖥️"}),B.jsx("p",{className:bt.placeholderTitle,children:"WebGL not available"}),B.jsxs("p",{className:bt.placeholderDesc,children:["Your browser or environment does not support WebGL.",B.jsx("br",{}),"Generation still works — you can download the STL/GLB files."]})]})}),x&&B.jsx("div",{className:bt.overlay,children:B.jsxs("div",{className:bt.progressBox,children:[B.jsx("div",{className:bt.progressSpinner}),B.jsx("p",{className:bt.progressTitle,children:"Generating 3D model…"}),B.jsx("p",{className:bt.progressLog,children:S})]})}),M&&B.jsx("div",{className:bt.overlay,children:B.jsxs("div",{className:bt.errorBox,children:[B.jsx("div",{className:bt.errorIcon,children:"⚠"}),B.jsx("p",{className:bt.errorTitle,children:"Generation failed"}),B.jsx("p",{className:bt.errorMsg,children:o.jobError})]})})]}),B.jsxs("div",{className:bt.statusBar,children:[B.jsx("span",{className:bt.statusDot,style:{background:x?"#f59e0b":M?"var(--danger)":E?"var(--accent)":"#555",boxShadow:x?"0 0 6px rgba(245,158,11,0.5)":E?"0 0 6px rgba(196,245,0,0.5)":"none"}}),B.jsxs("span",{children:[m&&"Ready — upload SVG layers to begin",x&&`Processing: ${S}`,M&&"Error — see right panel for details",E&&"Model loaded — use mouse to orbit, zoom, and pan"]})]})]})}const zb="_panel_1azv3_1",Vb="_section_1azv3_7",Hb="_sectionTitle_1azv3_14",Gb="_sectionDesc_1azv3_22",Wb="_divider_1azv3_29",jb="_field_1azv3_35",Xb="_label_1azv3_41",Yb="_scaleRow_1azv3_47",qb="_slider_1azv3_53",Kb="_scaleValue_1azv3_83",$b="_select_1azv3_92",Zb="_generateBtn_1azv3_103",Jb="_spinner_1azv3_128",Qb="_logBox_1azv3_143",eR="_logLine_1azv3_155",tR="_logPulse_1azv3_162",nR="_errorBox_1azv3_171",iR="_errorIcon_1azv3_184",rR="_statsGrid_1azv3_189",sR="_statCell_1azv3_195",oR="_statNum_1azv3_206",aR="_statLabel_1azv3_214",lR="_swapGrid_1azv3_221",cR="_swapBtn_1azv3_227",uR="_swapIcon_1azv3_250",dR="_swapLabel_1azv3_255",hR="_swapHint_1azv3_262",fR="_exportRow_1azv3_269",pR="_exportBtn_1azv3_275",mR="_heightTable_1azv3_299",gR="_heightRow_1azv3_305",_R="_heightCode_1azv3_315",vR="_heightMm_1azv3_322",Ye={panel:zb,section:Vb,sectionTitle:Hb,sectionDesc:Gb,divider:Wb,field:jb,label:Xb,scaleRow:Yb,slider:qb,scaleValue:Kb,select:$b,generateBtn:Zb,spinner:Jb,logBox:Qb,logLine:eR,logPulse:tR,errorBox:nR,errorIcon:iR,statsGrid:rR,statCell:sR,statNum:oR,statLabel:aR,swapGrid:lR,swapBtn:cR,swapIcon:uR,swapLabel:dR,swapHint:hR,exportRow:fR,exportBtn:pR,heightTable:mR,heightRow:gR,heightCode:_R,heightMm:vR},xR=[{id:"nfc",label:"Add NFC Cap",icon:"📡",desc:"Embed NFC module pocket"},{id:"logo",label:"Add Logo",icon:"🏷️",desc:"Insert brand logo"},{id:"hook",label:"Add Hook",icon:"🪝",desc:"Add bail hook"},{id:"loop",label:"Add Loop",icon:"⭕",desc:"Add split ring loop"}];function yR({state:o,scale:e,onScaleChange:t,onGenerate:i,onSwap:s}){const{layers:a,jobStatus:c,jobLogs:d,jobError:h,modelUrl:f,stlUrl:g,stats:_}=o,m=c==="pending"||c==="running",x=c==="done",M=a.length>0&&!m,E=()=>{if(!g)return;const y=document.createElement("a");y.href=g,y.download="pendant.stl",y.click()},S=()=>{if(!f)return;const y=document.createElement("a");y.href=f,y.download="pendant.glb",y.click()};return B.jsxs("div",{className:Ye.panel,children:[B.jsxs("div",{className:Ye.section,children:[B.jsx("h3",{className:Ye.sectionTitle,children:"Settings"}),B.jsxs("div",{className:Ye.field,children:[B.jsx("label",{className:Ye.label,children:"Scale"}),B.jsxs("div",{className:Ye.scaleRow,children:[B.jsx("input",{type:"range",min:"0.1",max:"3.0",step:"0.05",value:e,onChange:y=>t(Number(y.target.value)),className:Ye.slider,disabled:m}),B.jsxs("span",{className:Ye.scaleValue,children:[e.toFixed(2),"×"]})]})]}),B.jsxs("div",{className:Ye.field,children:[B.jsx("label",{className:Ye.label,children:"Input Mode"}),B.jsxs("select",{className:Ye.select,disabled:!0,children:[B.jsx("option",{value:"SVG",children:"SVG (Recommended)"}),B.jsx("option",{value:"DXF",children:"DXF"})]})]})]}),B.jsx("div",{className:Ye.divider}),B.jsxs("div",{className:Ye.section,children:[B.jsx("h3",{className:Ye.sectionTitle,children:"Generate"}),a.length===0?B.jsx("p",{className:Ye.sectionDesc,children:"Upload SVG layers to get started."}):B.jsxs("p",{className:Ye.sectionDesc,children:[a.length," layer",a.length!==1?"s":""," ready to process."]}),B.jsx("button",{className:Ye.generateBtn,onClick:i,disabled:!M,children:m?B.jsxs(B.Fragment,{children:[B.jsx("span",{className:Ye.spinner}),"Processing..."]}):B.jsxs(B.Fragment,{children:[B.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:B.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),"Generate Pendant"]})})]}),(m||d.length>0||h)&&B.jsxs(B.Fragment,{children:[B.jsx("div",{className:Ye.divider}),B.jsxs("div",{className:Ye.section,children:[B.jsx("h3",{className:Ye.sectionTitle,children:"Progress"}),h?B.jsxs("div",{className:Ye.errorBox,children:[B.jsx("span",{className:Ye.errorIcon,children:"⚠"}),B.jsx("span",{children:h})]}):B.jsxs("div",{className:Ye.logBox,children:[d.slice(-12).map((y,R)=>B.jsx("div",{className:Ye.logLine,children:y},R)),m&&B.jsx("div",{className:Ye.logLine+" "+Ye.logPulse,children:"..."})]})]})]}),x&&_&&B.jsxs(B.Fragment,{children:[B.jsx("div",{className:Ye.divider}),B.jsxs("div",{className:Ye.section,children:[B.jsx("h3",{className:Ye.sectionTitle,children:"Result"}),B.jsxs("div",{className:Ye.statsGrid,children:[B.jsxs("div",{className:Ye.statCell,children:[B.jsx("span",{className:Ye.statNum,children:_.components??0}),B.jsx("span",{className:Ye.statLabel,children:"Components"})]}),B.jsxs("div",{className:Ye.statCell,children:[B.jsx("span",{className:Ye.statNum,children:_.bodies??0}),B.jsx("span",{className:Ye.statLabel,children:"Bodies"})]}),B.jsxs("div",{className:Ye.statCell,children:[B.jsx("span",{className:Ye.statNum,children:Number(_.faces??0).toLocaleString()}),B.jsx("span",{className:Ye.statLabel,children:"Faces"})]})]})]})]}),B.jsx("div",{className:Ye.divider}),B.jsxs("div",{className:Ye.section,children:[B.jsx("h3",{className:Ye.sectionTitle,children:"Add Components"}),B.jsx("p",{className:Ye.sectionDesc,children:"Swap hardware components onto the generated pendant."}),B.jsx("div",{className:Ye.swapGrid,children:xR.map(y=>B.jsxs("button",{className:Ye.swapBtn,disabled:!x||m,title:y.desc,onClick:()=>s(y.id),children:[B.jsx("span",{className:Ye.swapIcon,children:y.icon}),B.jsx("span",{className:Ye.swapLabel,children:y.label})]},y.id))}),!x&&B.jsx("p",{className:Ye.swapHint,children:"Available after generation"})]}),B.jsx("div",{className:Ye.divider}),B.jsxs("div",{className:Ye.section,children:[B.jsx("h3",{className:Ye.sectionTitle,children:"Export"}),B.jsxs("div",{className:Ye.exportRow,children:[B.jsxs("button",{className:Ye.exportBtn,onClick:E,disabled:!x,children:[B.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[B.jsx("polyline",{points:"7 10 12 15 17 10"}),B.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"}),B.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"})]}),"STL"]}),B.jsxs("button",{className:Ye.exportBtn,onClick:S,disabled:!x,children:[B.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[B.jsx("polyline",{points:"7 10 12 15 17 10"}),B.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"}),B.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"})]}),"GLB"]})]})]}),B.jsx("div",{className:Ye.divider}),B.jsxs("div",{className:Ye.section,children:[B.jsx("h3",{className:Ye.sectionTitle,children:"Height Reference"}),B.jsx("div",{className:Ye.heightTable,children:[["h0","12.00 mm"],["h1","13.43 mm"],["h2","14.86 mm"],["h3","16.29 mm"],["h4","17.71 mm"],["h5","19.14 mm"],["h6","20.57 mm"],["h7","22.00 mm"]].map(([y,R])=>B.jsxs("div",{className:Ye.heightRow,children:[B.jsx("code",{className:Ye.heightCode,children:y}),B.jsx("span",{className:Ye.heightMm,children:R})]},y))})]})]})}const SR="_layout_4cnwz_1",MR="_header_4cnwz_9",ER="_logo_4cnwz_20",TR="_logoIcon_4cnwz_26",wR="_logoName_4cnwz_30",AR="_logoBadge_4cnwz_37",bR="_tagline_4cnwz_48",RR="_clearBtn_4cnwz_54",CR="_workspace_4cnwz_69",PR="_sidebar_4cnwz_75",LR="_viewer_4cnwz_85",NR="_controls_4cnwz_94",gi={layout:SR,header:MR,logo:ER,logoIcon:TR,logoName:wR,logoBadge:AR,tagline:bR,clearBtn:RR,workspace:CR,sidebar:PR,viewer:LR,controls:NR},DR=1200;function IR(){const[o,e]=Rt.useState([]),[t,i]=Rt.useState(1),[s,a]=Rt.useState(null),[c,d]=Rt.useState("idle"),[h,f]=Rt.useState([]),[g,_]=Rt.useState(null),[m,x]=Rt.useState(null),[M,E]=Rt.useState(null),[S,y]=Rt.useState(null),R=Rt.useRef(null),P=Rt.useCallback(F=>{const X=Array.from(F).filter(j=>j.name.toLowerCase().endsWith(".svg"));X.length&&e(j=>{const ne=new Set(j.map(G=>G.file.name)),$=X.filter(G=>!ne.has(G.name)).map(Jx),J=[...j,...$];return J.sort((G,Q)=>G.sortKey-Q.sortKey),J})},[]),C=Rt.useCallback(F=>{e(X=>X.filter(j=>j.id!==F))},[]),D=Rt.useCallback((F,X)=>{e(j=>{const ne=j.map($=>$.id===F?{...$,...X}:$);return ne.sort(($,J)=>$.sortKey-J.sortKey),ne})},[]),I=Rt.useCallback(()=>{R.current&&clearInterval(R.current),e([]),a(null),d("idle"),f([]),_(null),m&&URL.revokeObjectURL(m),x(null),E(null),y(null)},[m]),O=Rt.useCallback(F=>{R.current&&clearInterval(R.current);const X=async()=>{try{const j=await fetch(`/api/job/${F}`);if(!j.ok)return;const ne=await j.json();if(f(ne.logs??[]),ne.status==="done"){clearInterval(R.current),d("done"),y(ne.stats??null);const $=`/api/result/${F}/model.gltf`,J=`/api/result/${F}/model.stl`;x($),E(J)}else ne.status==="error"?(clearInterval(R.current),d("error"),_(ne.error??"Unknown error")):d(ne.status)}catch{}};R.current=setInterval(X,DR),X()},[]),w=Rt.useCallback(async()=>{if(!o.length)return;d("pending"),f([]),_(null),x(null),E(null),y(null);const F=new FormData;F.append("scale",String(t)),F.append("mode","SVG");for(const X of o){const j=new File([X.file],X.file.name,{type:X.file.type});F.append("files",j)}try{const X=await fetch("/api/generate",{method:"POST",body:F});if(!X.ok){const ne=await X.text();d("error"),_(ne);return}const{job_id:j}=await X.json();a(j),O(j)}catch(X){d("error"),_(String(X))}},[o,t,O]),L=Rt.useCallback(async F=>{if(!(!s||c!=="done")){d("pending");try{const X=await fetch(`/api/swap/${s}/${F}`,{method:"POST"});if(!X.ok){d("error"),_(await X.text());return}const{job_id:j}=await X.json();a(j),x(null),O(j)}catch(X){d("error"),_(String(X))}}},[s,c,O]);Rt.useEffect(()=>()=>{R.current&&clearInterval(R.current)},[]);const oe={layers:o,scale:t,jobId:s,jobStatus:c,jobLogs:h,jobError:g,modelUrl:m,stlUrl:M,stats:S};return B.jsxs("div",{className:gi.layout,children:[B.jsxs("header",{className:gi.header,children:[B.jsxs("div",{className:gi.logo,children:[B.jsx("span",{className:gi.logoIcon,children:"⛓️"}),B.jsx("span",{className:gi.logoName,children:"AutoChains"}),B.jsx("span",{className:gi.logoBadge,children:"Web"})]}),B.jsx("p",{className:gi.tagline,children:"2.5D Pendant Generator — Browser Edition"}),o.length>0&&B.jsx("button",{className:gi.clearBtn,onClick:I,title:"Clear all layers and reset",children:"Clear / Start Over"})]}),B.jsxs("div",{className:gi.workspace,children:[B.jsx("aside",{className:gi.sidebar,children:B.jsx(ny,{layers:o,onAddFiles:P,onRemoveLayer:C,onUpdateLayer:D})}),B.jsx("main",{className:gi.viewer,children:B.jsx(Bb,{state:oe})}),B.jsx("aside",{className:gi.controls,children:B.jsx(yR,{state:oe,scale:t,onScaleChange:i,onGenerate:w,onSwap:L})})]})]})}fx.createRoot(document.getElementById("root")).render(B.jsx(Rt.StrictMode,{children:B.jsx(IR,{})}));
