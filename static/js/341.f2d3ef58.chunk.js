"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[341],{8341:function(n,e,t){t.r(e),t.d(e,{default:function(){return tn}});var r=t(9434),o="NOT_FOUND";var u=function(n,e){return n===e};function c(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,c=void 0===r?u:r,i=t.maxSize,a=void 0===i?1:i,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(c),f=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:o},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return o}return{get:r,put:function(e,u){r(e)===o&&(t.unshift({key:e,value:u}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,l);function p(){var e=f.get(arguments);if(e===o){if(e=n.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function i(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function a(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var u,c=0,a={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(a=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=a,f=l.memoizeOptions,p=void 0===f?t:f,d=Array.isArray(p)?p:[p],h=i(r),m=n.apply(void 0,[function(){return c++,s.apply(null,arguments)}].concat(d)),x=n((function(){for(var n=[],e=h.length,t=0;t<e;t++)n.push(h[t].apply(null,arguments));return u=m.apply(null,n)}));return Object.assign(x,{resultFunc:s,memoizedResultFunc:m,dependencies:h,lastResult:function(){return u},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),x};return o}var s,l,f,p,d,h,m,x,v=a(c),g=function(n){return n.contacts.items},y=function(n){return n.contacts.filter},b=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},Z=v([g,y],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),w=t(2791),k=t(5205),C=t(885),z=t(168),P=t(6444),A=P.ZP.form(s||(s=(0,z.Z)(["\n  width: 360px;\n  padding: ","px;\n  display: flex;\n  flex-direction: column;\n  padding: ","px;\n  align-items: center;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]})),S=P.ZP.label(l||(l=(0,z.Z)(["\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  gap: ","px;\n  padding: ","px;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]})),X=P.ZP.input(f||(f=(0,z.Z)(["\n  color: ",";\n  :hover {\n    padding: ","px;\n    border: ",";\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.secondary})),_=P.ZP.span(p||(p=(0,z.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),E=P.ZP.button(d||(d=(0,z.Z)(["\n  margin-top: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  text-align: center;\n  color: ",";\n  :hover {\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white})),F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},q=t(184);function I(){var n=(0,w.useState)(""),e=(0,C.Z)(n,2),t=e[0],o=e[1],u=(0,w.useState)(""),c=(0,C.Z)(u,2),i=c[0],a=c[1],s=(0,r.v9)(g),l=(0,r.I0)(),f=function(){o(""),a("")};return(0,q.jsxs)(A,{onSubmit:function(n){if(n.preventDefault(),s.find((function(n){return n.name===t})))return alert("".concat(t," already exists in contacts list."));l((0,k.uK)({id:F(),name:t,number:i})),f()},children:[(0,q.jsxs)(S,{children:[(0,q.jsx)(_,{children:"Name"}),(0,q.jsx)(X,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){return o(n.target.value)},value:t})]}),(0,q.jsxs)(S,{children:[(0,q.jsx)(_,{children:"Number"}),(0,q.jsx)(X,{placeholder:"+XX XXX XXX XX XX",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(n){return a(n.target.value)},value:i})]}),(0,q.jsx)(E,{type:"submit",children:"Add contact"})]})}var N=P.ZP.label(h||(h=(0,z.Z)(["\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n"])),(function(n){return n.theme.fonts.monospace}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.text})),O=P.ZP.input(m||(m=(0,z.Z)(["\n  :hover {\n    padding: ","px;\n    border: ",";\n    color: ",";\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.secondary})),R=P.ZP.span(x||(x=(0,z.Z)(["\n  margin-right: ","px;\n"])),(function(n){return n.theme.space[3]})),D=t(2634),L=t(4643);function T(){var n=(0,r.I0)();return(0,q.jsx)(D.x,{children:(0,q.jsxs)(N,{children:[(0,q.jsx)(R,{children:"Find contacts by name"}),(0,q.jsx)(O,{type:"text",name:"filter",value:(0,r.v9)(y),onChange:function(e){return n((0,L.T)(e.currentTarget.value))}})]})})}var U,K,B=t(4378);function G(n){var e=n.children;return(0,q.jsx)("div",{children:(0,q.jsx)("p",{children:e})})}var J,M,V,W=P.ZP.ul(U||(U=(0,z.Z)(["\n  text-align: center;\n  list-style: none;\n  padding: ","px; ;\n"])),(function(n){return n.theme.space[0]})),$=P.ZP.li(K||(K=(0,z.Z)(["\n  display: flex;\n  gap: ","px;\n  align-items: center;\n  justify-content: space-between;\n  padding: ","px;\n  color: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.text})),H=P.ZP.span(J||(J=(0,z.Z)(["\n  font-family: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.fonts.monospace}),(function(n){return n.theme.fontSizes.m})),Q=P.ZP.button(M||(M=(0,z.Z)(["\n  color: ",";\n  font-family: ",";\n  font-size: ",";\n  :hover {\n    background-color: ",";\n    color: ",";\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.fonts.monospace}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}));function Y(n){var e=n.name,t=n.number,o=n.id,u=(0,r.I0)();return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(H,{children:e}),(0,q.jsx)(H,{children:t}),(0,q.jsx)(Q,{type:"button",onClick:function(){return u((0,k.GK)(o))},children:"Delete"})]})}function nn(){return(0,q.jsx)(W,{children:(0,r.v9)(Z).map((function(n){var e=n.name,t=n.id,r=n.number;return(0,q.jsx)($,{children:(0,q.jsx)(Y,{id:t,name:e,number:r})},t)}))})}var en=P.ZP.h2(V||(V=(0,z.Z)(["\n  color: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.text}));var tn=function(){var n=(0,r.I0)(),e=(0,r.v9)(b),t=(0,r.v9)(j);return(0,w.useEffect)((function(){n((0,k.yF)())}),[n]),(0,q.jsxs)("div",{children:[(0,q.jsx)(I,{}),(0,q.jsx)(en,{children:"Contacts"}),(0,q.jsx)(T,{}),e&&(0,q.jsx)(B.a,{}),t&&(0,q.jsx)(G,{children:"Whoops! Something went wrong!"}),(0,q.jsx)(nn,{})]})}}}]);
//# sourceMappingURL=341.f2d3ef58.chunk.js.map