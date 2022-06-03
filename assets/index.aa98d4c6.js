import{r as o,a2 as Pe,_ as ne,b2 as pe,f as G,g as f,e as E,ad as _e,z as V,i as re,b3 as De,b4 as xe,m as J,b5 as we,S as Ne,b6 as Ce,q as Se,X as Oe,b7 as be,h as qe,au as Ke,b8 as Qe,b9 as Ue,ba as ve,bb as We,bc as Xe,Z as Ze,P as ie,bd as Je,aa as Ye,be as Ve}from"./index.7e78887b.js";var et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},tt=et,Ie=function(t,a){return o.exports.createElement(Pe,ne(ne({},t),{},{ref:a,icon:tt}))};Ie.displayName="SearchOutlined";var rt=o.exports.forwardRef(Ie),at=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},nt=function(t){var a=t.prefixCls,r=t.className,n=t.hoverable,c=n===void 0?!0:n,l=at(t,["prefixCls","className","hoverable"]);return o.exports.createElement(pe,null,function(i){var p=i.getPrefixCls,s=p("card",a),d=G("".concat(s,"-grid"),r,f({},"".concat(s,"-grid-hoverable"),c));return o.exports.createElement("div",E({},l,{className:d}))})},ke=nt,ot=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},it=function(t){return o.exports.createElement(pe,null,function(a){var r=a.getPrefixCls,n=t.prefixCls,c=t.className,l=t.avatar,i=t.title,p=t.description,s=ot(t,["prefixCls","className","avatar","title","description"]),d=r("card",n),b=G("".concat(d,"-meta"),c),g=l?o.exports.createElement("div",{className:"".concat(d,"-meta-avatar")},l):null,y=i?o.exports.createElement("div",{className:"".concat(d,"-meta-title")},i):null,_=p?o.exports.createElement("div",{className:"".concat(d,"-meta-description")},p):null,w=y||_?o.exports.createElement("div",{className:"".concat(d,"-meta-detail")},y,_):null;return o.exports.createElement("div",E({},s,{className:b}),g,w)})},st=it,ct=o.exports.createContext({}),Te=ct,lt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};_e("top","middle","bottom","stretch");_e("start","end","center","space-around","space-between");var je=o.exports.forwardRef(function(e,t){var a,r=e.prefixCls,n=e.justify,c=e.align,l=e.className,i=e.style,p=e.children,s=e.gutter,d=s===void 0?0:s,b=e.wrap,g=lt(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),y=o.exports.useContext(V),_=y.getPrefixCls,w=y.direction,P=o.exports.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),C=re(P,2),R=C[0],I=C[1],k=De(),x=o.exports.useRef(d);o.exports.useEffect(function(){var u=xe.subscribe(function(O){var m=x.current||0;(!Array.isArray(m)&&J(m)==="object"||Array.isArray(m)&&(J(m[0])==="object"||J(m[1])==="object"))&&I(O)});return function(){return xe.unsubscribe(u)}},[]);var $=function(){var O=[0,0],m=Array.isArray(d)?d:[d,0];return m.forEach(function(K,U){if(J(K)==="object")for(var W=0;W<we.length;W++){var Q=we[W];if(R[Q]&&K[Q]!==void 0){O[U]=K[Q];break}}else O[U]=K||0}),O},z=_("row",r),h=$(),T=G(z,(a={},f(a,"".concat(z,"-no-wrap"),b===!1),f(a,"".concat(z,"-").concat(n),n),f(a,"".concat(z,"-").concat(c),c),f(a,"".concat(z,"-rtl"),w==="rtl"),a),l),A={},j=h[0]>0?h[0]/-2:void 0,N=h[1]>0?h[1]/-2:void 0;if(j&&(A.marginLeft=j,A.marginRight=j),k){var v=re(h,2);A.rowGap=v[1]}else N&&(A.marginTop=N,A.marginBottom=N);var S=re(h,2),F=S[0],q=S[1],H=o.exports.useMemo(function(){return{gutter:[F,q],wrap:b,supportFlexGap:k}},[F,q,b,k]);return o.exports.createElement(Te.Provider,{value:H},o.exports.createElement("div",E({},g,{className:T,style:E(E({},A),i),ref:t}),p))});je.displayName="Row";var Z=je,ft=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function ut(e){return typeof e=="number"?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}var dt=["xs","sm","md","lg","xl","xxl"],Re=o.exports.forwardRef(function(e,t){var a,r=o.exports.useContext(V),n=r.getPrefixCls,c=r.direction,l=o.exports.useContext(Te),i=l.gutter,p=l.wrap,s=l.supportFlexGap,d=e.prefixCls,b=e.span,g=e.order,y=e.offset,_=e.push,w=e.pull,P=e.className,C=e.children,R=e.flex,I=e.style,k=ft(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),x=n("col",d),$={};dt.forEach(function(j){var N,v={},S=e[j];typeof S=="number"?v.span=S:J(S)==="object"&&(v=S||{}),delete k[j],$=E(E({},$),(N={},f(N,"".concat(x,"-").concat(j,"-").concat(v.span),v.span!==void 0),f(N,"".concat(x,"-").concat(j,"-order-").concat(v.order),v.order||v.order===0),f(N,"".concat(x,"-").concat(j,"-offset-").concat(v.offset),v.offset||v.offset===0),f(N,"".concat(x,"-").concat(j,"-push-").concat(v.push),v.push||v.push===0),f(N,"".concat(x,"-").concat(j,"-pull-").concat(v.pull),v.pull||v.pull===0),f(N,"".concat(x,"-rtl"),c==="rtl"),N))});var z=G(x,(a={},f(a,"".concat(x,"-").concat(b),b!==void 0),f(a,"".concat(x,"-order-").concat(g),g),f(a,"".concat(x,"-offset-").concat(y),y),f(a,"".concat(x,"-push-").concat(_),_),f(a,"".concat(x,"-pull-").concat(w),w),a),P,$),h={};if(i&&i[0]>0){var T=i[0]/2;h.paddingLeft=T,h.paddingRight=T}if(i&&i[1]>0&&!s){var A=i[1]/2;h.paddingTop=A,h.paddingBottom=A}return R&&(h.flex=ut(R),p===!1&&!h.minWidth&&(h.minWidth=0)),o.exports.createElement("div",E({},k,{style:E(E({},h),I),className:z,ref:t}),C)});Re.displayName="Col";var M=Re,pt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function bt(e){var t=e.map(function(a,r){return o.exports.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(r)},o.exports.createElement("span",null,a))});return t}var me=o.exports.forwardRef(function(e,t){var a,r,n=o.exports.useContext(V),c=n.getPrefixCls,l=n.direction,i=o.exports.useContext(Ne),p=function(te){var L;(L=e.onTabChange)===null||L===void 0||L.call(e,te)},s=function(){var te;return o.exports.Children.forEach(e.children,function(L){L&&L.type&&L.type===ke&&(te=!0)}),te},d=e.prefixCls,b=e.className,g=e.extra,y=e.headStyle,_=y===void 0?{}:y,w=e.bodyStyle,P=w===void 0?{}:w,C=e.title,R=e.loading,I=e.bordered,k=I===void 0?!0:I,x=e.size,$=e.type,z=e.cover,h=e.actions,T=e.tabList,A=e.children,j=e.activeTabKey,N=e.defaultActiveTabKey,v=e.tabBarExtraContent,S=e.hoverable,F=e.tabProps,q=F===void 0?{}:F,H=pt(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),u=c("card",d),O=P.padding===0||P.padding==="0px"?{padding:24}:void 0,m=o.exports.createElement("div",{className:"".concat(u,"-loading-block")}),K=o.exports.createElement("div",{className:"".concat(u,"-loading-content"),style:O},o.exports.createElement(Z,{gutter:8},o.exports.createElement(M,{span:22},m)),o.exports.createElement(Z,{gutter:8},o.exports.createElement(M,{span:8},m),o.exports.createElement(M,{span:15},m)),o.exports.createElement(Z,{gutter:8},o.exports.createElement(M,{span:6},m),o.exports.createElement(M,{span:18},m)),o.exports.createElement(Z,{gutter:8},o.exports.createElement(M,{span:13},m),o.exports.createElement(M,{span:9},m)),o.exports.createElement(Z,{gutter:8},o.exports.createElement(M,{span:4},m),o.exports.createElement(M,{span:3},m),o.exports.createElement(M,{span:16},m))),U=j!==void 0,W=E(E({},q),(a={},f(a,U?"activeKey":"defaultActiveKey",U?j:N),f(a,"tabBarExtraContent",v),a)),Q,ye=T&&T.length?o.exports.createElement(Ce,E({size:"large"},W,{className:"".concat(u,"-head-tabs"),onChange:p}),T.map(function(X){return o.exports.createElement(Ce.TabPane,{tab:X.tab,disabled:X.disabled,key:X.key})})):null;(C||g||ye)&&(Q=o.exports.createElement("div",{className:"".concat(u,"-head"),style:_},o.exports.createElement("div",{className:"".concat(u,"-head-wrapper")},C&&o.exports.createElement("div",{className:"".concat(u,"-head-title")},C),g&&o.exports.createElement("div",{className:"".concat(u,"-extra")},g)),ye));var Be=z?o.exports.createElement("div",{className:"".concat(u,"-cover")},z):null,Fe=o.exports.createElement("div",{className:"".concat(u,"-body"),style:P},R?K:A),Ge=h&&h.length?o.exports.createElement("ul",{className:"".concat(u,"-actions")},bt(h)):null,He=Se(H,["onTabChange"]),he=x||i,Le=G(u,(r={},f(r,"".concat(u,"-loading"),R),f(r,"".concat(u,"-bordered"),k),f(r,"".concat(u,"-hoverable"),S),f(r,"".concat(u,"-contain-grid"),s()),f(r,"".concat(u,"-contain-tabs"),T&&T.length),f(r,"".concat(u,"-").concat(he),he),f(r,"".concat(u,"-type-").concat($),!!$),f(r,"".concat(u,"-rtl"),l==="rtl"),r),b);return o.exports.createElement("div",E({ref:t},He,{className:Le}),Q,Be,Fe,Ge)});me.Grid=ke;me.Meta=st;var Yt=me,vt=function(t){var a,r=o.exports.useContext(V),n=r.getPrefixCls,c=r.direction,l=t.prefixCls,i=t.className,p=i===void 0?"":i,s=n("input-group",l),d=G(s,(a={},f(a,"".concat(s,"-lg"),t.size==="large"),f(a,"".concat(s,"-sm"),t.size==="small"),f(a,"".concat(s,"-compact"),t.compact),f(a,"".concat(s,"-rtl"),c==="rtl"),a),p);return o.exports.createElement("span",{className:d,style:t.style,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,onFocus:t.onFocus,onBlur:t.onBlur},t.children)},mt=vt,gt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},$e=o.exports.forwardRef(function(e,t){var a,r=e.prefixCls,n=e.inputPrefixCls,c=e.className,l=e.size,i=e.suffix,p=e.enterButton,s=p===void 0?!1:p,d=e.addonAfter,b=e.loading,g=e.disabled,y=e.onSearch,_=e.onChange,w=gt(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange"]),P=o.exports.useContext(V),C=P.getPrefixCls,R=P.direction,I=o.exports.useContext(Ne),k=l||I,x=o.exports.useRef(null),$=function(u){u&&u.target&&u.type==="click"&&y&&y(u.target.value,u),_&&_(u)},z=function(u){var O;document.activeElement===((O=x.current)===null||O===void 0?void 0:O.input)&&u.preventDefault()},h=function(u){var O,m;y&&y((m=(O=x.current)===null||O===void 0?void 0:O.input)===null||m===void 0?void 0:m.value,u)},T=C("input-search",r),A=C("input",n),j=typeof s=="boolean"?o.exports.createElement(rt,null):null,N="".concat(T,"-button"),v,S=s||{},F=S.type&&S.type.__ANT_BUTTON===!0;F||S.type==="button"?v=Oe(S,E({onMouseDown:z,onClick:function(u){var O,m;(m=(O=S==null?void 0:S.props)===null||O===void 0?void 0:O.onClick)===null||m===void 0||m.call(O,u),h(u)},key:"enterButton"},F?{className:N,size:k}:{})):v=o.exports.createElement(Ke,{className:N,type:s?"primary":void 0,size:k,disabled:g,key:"enterButton",onMouseDown:z,onClick:h,loading:b,icon:j},s),d&&(v=[v,Oe(d,{key:"addonAfter"})]);var q=G(T,(a={},f(a,"".concat(T,"-rtl"),R==="rtl"),f(a,"".concat(T,"-").concat(k),!!k),f(a,"".concat(T,"-with-button"),!!s),a),c);return o.exports.createElement(be,E({ref:qe(x,t),onPressEnter:h},w,{size:k,prefixCls:A,addonAfter:v,suffix:i,onChange:$,className:q,disabled:g}))});$e.displayName="Search";var yt=$e,ht={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},xt=ht,ze=function(t,a){return o.exports.createElement(Pe,ne(ne({},t),{},{ref:a,icon:xt}))};ze.displayName="EyeInvisibleOutlined";var wt=o.exports.forwardRef(ze),Ct=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},Ot={click:"onClick",hover:"onMouseOver"},ge=o.exports.forwardRef(function(e,t){var a=o.exports.useState(!1),r=re(a,2),n=r[0],c=r[1],l=function(){var d=e.disabled;d||c(!n)},i=function(d){var b,g=e.action,y=e.iconRender,_=y===void 0?function(){return null}:y,w=Ot[g]||"",P=_(n),C=(b={},f(b,w,l),f(b,"className","".concat(d,"-icon")),f(b,"key","passwordIcon"),f(b,"onMouseDown",function(I){I.preventDefault()}),f(b,"onMouseUp",function(I){I.preventDefault()}),b);return o.exports.cloneElement(o.exports.isValidElement(P)?P:o.exports.createElement("span",null,P),C)},p=function(d){var b=d.getPrefixCls,g=e.className,y=e.prefixCls,_=e.inputPrefixCls,w=e.size,P=e.visibilityToggle,C=Ct(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),R=b("input",_),I=b("input-password",y),k=P&&i(I),x=G(I,g,f({},"".concat(I,"-").concat(w),!!w)),$=E(E({},Se(C,["suffix","iconRender"])),{type:n?"text":"password",className:x,prefixCls:R,suffix:k});return w&&($.size=w),o.exports.createElement(be,E({ref:t},$))};return o.exports.createElement(pe,null,p)});ge.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(t){return t?o.exports.createElement(Qe,null):o.exports.createElement(wt,null)}};ge.displayName="Password";var Et=ge,ee=be;ee.Group=mt;ee.Search=yt;ee.TextArea=Ue;ee.Password=Et;var Vt=ee;function Pt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ve(e,t)}function _t(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function ae(e,t,a){return We()?ae=Reflect.construct:ae=function(n,c,l){var i=[null];i.push.apply(i,c);var p=Function.bind.apply(n,i),s=new p;return l&&ve(s,l.prototype),s},ae.apply(null,arguments)}function fe(e){var t=typeof Map=="function"?new Map:void 0;return fe=function(r){if(r===null||!_t(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t!="undefined"){if(t.has(r))return t.get(r);t.set(r,n)}function n(){return ae(r,arguments,Xe(this).constructor)}return n.prototype=Object.create(r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ve(n,r)},fe(e)}var B=function(e){Pt(t,e);function t(a){var r;return r=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+a+" for more information.")||this,Ze(r)}return t}(fe(Error));function se(e){return Math.round(e*255)}function Nt(e,t,a){return se(e)+","+se(t)+","+se(a)}function Y(e,t,a,r){if(r===void 0&&(r=Nt),t===0)return r(a,a,a);var n=(e%360+360)%360/60,c=(1-Math.abs(2*a-1))*t,l=c*(1-Math.abs(n%2-1)),i=0,p=0,s=0;n>=0&&n<1?(i=c,p=l):n>=1&&n<2?(i=l,p=c):n>=2&&n<3?(p=c,s=l):n>=3&&n<4?(p=l,s=c):n>=4&&n<5?(i=l,s=c):n>=5&&n<6&&(i=c,s=l);var d=a-c/2,b=i+d,g=p+d,y=s+d;return r(b,g,y)}var Ee={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function St(e){if(typeof e!="string")return e;var t=e.toLowerCase();return Ee[t]?"#"+Ee[t]:e}var It=/^#[a-fA-F0-9]{6}$/,kt=/^#[a-fA-F0-9]{8}$/,Tt=/^#[a-fA-F0-9]{3}$/,jt=/^#[a-fA-F0-9]{4}$/,ce=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,Rt=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,$t=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,zt=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function Ae(e){if(typeof e!="string")throw new B(3);var t=St(e);if(t.match(It))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(kt)){var a=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:a}}if(t.match(Tt))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(jt)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var n=ce.exec(t);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var c=Rt.exec(t.substring(0,50));if(c)return{red:parseInt(""+c[1],10),green:parseInt(""+c[2],10),blue:parseInt(""+c[3],10),alpha:parseFloat(""+c[4])};var l=$t.exec(t);if(l){var i=parseInt(""+l[1],10),p=parseInt(""+l[2],10)/100,s=parseInt(""+l[3],10)/100,d="rgb("+Y(i,p,s)+")",b=ce.exec(d);if(!b)throw new B(4,t,d);return{red:parseInt(""+b[1],10),green:parseInt(""+b[2],10),blue:parseInt(""+b[3],10)}}var g=zt.exec(t.substring(0,50));if(g){var y=parseInt(""+g[1],10),_=parseInt(""+g[2],10)/100,w=parseInt(""+g[3],10)/100,P="rgb("+Y(y,_,w)+")",C=ce.exec(P);if(!C)throw new B(4,t,P);return{red:parseInt(""+C[1],10),green:parseInt(""+C[2],10),blue:parseInt(""+C[3],10),alpha:parseFloat(""+g[4])}}throw new B(5)}function At(e){var t=e.red/255,a=e.green/255,r=e.blue/255,n=Math.max(t,a,r),c=Math.min(t,a,r),l=(n+c)/2;if(n===c)return e.alpha!==void 0?{hue:0,saturation:0,lightness:l,alpha:e.alpha}:{hue:0,saturation:0,lightness:l};var i,p=n-c,s=l>.5?p/(2-n-c):p/(n+c);switch(n){case t:i=(a-r)/p+(a<r?6:0);break;case a:i=(r-t)/p+2;break;default:i=(t-a)/p+4;break}return i*=60,e.alpha!==void 0?{hue:i,saturation:s,lightness:l,alpha:e.alpha}:{hue:i,saturation:s,lightness:l}}function Mt(e){return At(Ae(e))}var ue=function(t){return t.length===7&&t[1]===t[2]&&t[3]===t[4]&&t[5]===t[6]?"#"+t[1]+t[3]+t[5]:t};function D(e){var t=e.toString(16);return t.length===1?"0"+t:t}function le(e){return D(Math.round(e*255))}function Bt(e,t,a){return ue("#"+le(e)+le(t)+le(a))}function oe(e,t,a){return Y(e,t,a,Bt)}function Ft(e,t,a){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number")return oe(e,t,a);if(typeof e=="object"&&t===void 0&&a===void 0)return oe(e.hue,e.saturation,e.lightness);throw new B(1)}function Gt(e,t,a,r){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number"&&typeof r=="number")return r>=1?oe(e,t,a):"rgba("+Y(e,t,a)+","+r+")";if(typeof e=="object"&&t===void 0&&a===void 0&&r===void 0)return e.alpha>=1?oe(e.hue,e.saturation,e.lightness):"rgba("+Y(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new B(2)}function de(e,t,a){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number")return ue("#"+D(e)+D(t)+D(a));if(typeof e=="object"&&t===void 0&&a===void 0)return ue("#"+D(e.red)+D(e.green)+D(e.blue));throw new B(6)}function Ht(e,t,a,r){if(typeof e=="string"&&typeof t=="number"){var n=Ae(e);return"rgba("+n.red+","+n.green+","+n.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof a=="number"&&typeof r=="number")return r>=1?de(e,t,a):"rgba("+e+","+t+","+a+","+r+")";if(typeof e=="object"&&t===void 0&&a===void 0&&r===void 0)return e.alpha>=1?de(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new B(7)}var Lt=function(t){return typeof t.red=="number"&&typeof t.green=="number"&&typeof t.blue=="number"&&(typeof t.alpha!="number"||typeof t.alpha=="undefined")},Dt=function(t){return typeof t.red=="number"&&typeof t.green=="number"&&typeof t.blue=="number"&&typeof t.alpha=="number"},qt=function(t){return typeof t.hue=="number"&&typeof t.saturation=="number"&&typeof t.lightness=="number"&&(typeof t.alpha!="number"||typeof t.alpha=="undefined")},Kt=function(t){return typeof t.hue=="number"&&typeof t.saturation=="number"&&typeof t.lightness=="number"&&typeof t.alpha=="number"};function Qt(e){if(typeof e!="object")throw new B(8);if(Dt(e))return Ht(e);if(Lt(e))return de(e);if(Kt(e))return Gt(e);if(qt(e))return Ft(e);throw new B(8)}function Me(e,t,a){return function(){var n=a.concat(Array.prototype.slice.call(arguments));return n.length>=t?e.apply(this,n):Me(e,t,n)}}function Ut(e){return Me(e,e.length,[])}function Wt(e,t,a){return Math.max(e,Math.min(t,a))}function Xt(e,t){if(t==="transparent")return t;var a=Mt(t);return Qt(E({},a,{lightness:Wt(0,1,a.lightness-parseFloat(e))}))}var Zt=Ut(Xt);const er=({title:e,placement:t,content:a,css:r})=>ie(Ve,{css:r,title:e,placement:t,content:a,arrowPointAtCenter:!0,autoAdjustOverflow:!0,children:ie("div",{css:Je({color:"#69c0ff",marginInline:"10px",fontSize:"12px",cursor:"pointer",transition:"color .2s",":hover":{color:Zt(.1,"#69c0ff")}},"",""),children:ie(Ye,{})})});export{M as C,Vt as I,Z as R,rt as S,er as T,Pt as _,Yt as a};
