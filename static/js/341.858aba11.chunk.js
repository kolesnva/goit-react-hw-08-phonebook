"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[341],{8341:function(n,e,t){t.r(e),t.d(e,{default:function(){return un}});var r=t(9434),o="NOT_FOUND";var i=function(n,e){return n===e};function u(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,u=void 0===r?i:r,c=t.maxSize,a=void 0===c?1:c,s=t.resultEqualityCheck,f=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(u),p=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:o},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(f):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return o}return{get:r,put:function(e,i){r(e)===o&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,f);function d(){var e=p.get(arguments);if(e===o){if(e=n.apply(null,arguments),s){var t=p.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}p.put(arguments,e)}return e}return d.clearCache=function(){return p.clear()},d}function c(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function a(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,u=0,a={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(a=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var f=a,p=f.memoizeOptions,d=void 0===p?t:p,l=Array.isArray(d)?d:[d],m=c(r),h=n.apply(void 0,[function(){return u++,s.apply(null,arguments)}].concat(l)),g=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(g,{resultFunc:s,memoizedResultFunc:h,dependencies:m,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),g};return o}var s,f,p,d,l,m,h,g,x,v=a(u),b=function(n){return n.contacts.items},y=function(n){return n.contacts.filter},j=function(n){return n.contacts.isLoading},Z=function(n){return n.contacts.error},w=v([b,y],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),k=t(2791),z=t(5205),C=t(885),P=t(168),S=t(6444),A=S.ZP.h2(s||(s=(0,P.Z)(["\n  text-align: center;\n  font-family: ",";\n"])),(function(n){return n.theme.fonts.monospace})),X=S.ZP.div(f||(f=(0,P.Z)(["\n  margin: 0 auto;\n  margin-top: ","px;\n  max-width: 50vw;\n  display: flex;\n  justify-content: center;\n  padding: ","px;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[5]})),_=S.ZP.form(p||(p=(0,P.Z)(["\n  display: inline-block;\n  text-align: center;\n"]))),E=S.ZP.label(d||(d=(0,P.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: ","px;\n  padding: ","px;\n  font-family: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fonts.monospace}),(function(n){return n.theme.fontSizes.l})),F=S.ZP.input(l||(l=(0,P.Z)(["\n  outline: none;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  border-radius: ",";\n  border: 1px solid #0b89d5;\n  font-family: ",";\n  font-size: ",";\n  &:hover,\n  :focus {\n    border: 2px solid #0078bf;\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.fonts.monospace}),(function(n){return n.theme.fontSizes.m})),q=S.ZP.button(m||(m=(0,P.Z)(["\n  display: block;\n  margin: 0 auto;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  margin-top: ","px;\n  border-radius: ",";\n  font-family: ",";\n  font-size: ",";\n  background-color: ",";\n  color: ",";\n  border: none;\n  &:hover,\n  :focus {\n    background-color: ",";\n    border: none;\n    outline: none;\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[6]}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.buttonBackground}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.hover})),I=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},N=t(184);function O(){var n=(0,k.useState)(""),e=(0,C.Z)(n,2),t=e[0],o=e[1],i=(0,k.useState)(""),u=(0,C.Z)(i,2),c=u[0],a=u[1],s=(0,r.v9)(b),f=(0,r.I0)(),p=function(){o(""),a("")};return(0,N.jsx)(X,{children:(0,N.jsxs)(_,{onSubmit:function(n){if(n.preventDefault(),s.find((function(n){return n.name===t})))return alert("".concat(t," already exists in contacts list."));f((0,z.uK)({id:I(),name:t,number:c})),p()},children:[(0,N.jsx)(A,{children:"Add contact here:"}),(0,N.jsxs)(E,{children:["Name:",(0,N.jsx)(F,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){return o(n.target.value)},value:t})]}),(0,N.jsxs)(E,{children:["Number:",(0,N.jsx)(F,{placeholder:"+XX XXX XXX XX XX",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(n){return a(n.target.value)},value:c})]}),(0,N.jsx)(q,{type:"submit",children:"Add contact"})]})})}var R=S.ZP.div(h||(h=(0,P.Z)(["\n  margin: 0 auto;\n  margin-top: ","px;\n  max-width: 50vw;\n  display: flex;\n  justify-content: center;\n  padding: ","px;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[5]})),B=S.ZP.label(g||(g=(0,P.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: ","px;\n  padding: ","px;\n  font-family: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fonts.monospace}),(function(n){return n.theme.fontSizes.l})),D=S.ZP.input(x||(x=(0,P.Z)(["\n  outline: none;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  border-radius: ",";\n  border: 1px solid #0b89d5;\n  font-family: ",";\n  font-size: ",";\n  &:hover,\n  :focus {\n    border: 2px solid #0078bf;\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.fonts.monospace}),(function(n){return n.theme.fontSizes.m})),L=t(4643);function T(){var n=(0,r.I0)();return(0,N.jsx)(R,{children:(0,N.jsxs)(B,{children:["Find contacts by name",(0,N.jsx)(D,{type:"text",name:"filter",value:(0,r.v9)(y),onChange:function(e){return n((0,L.T)(e.currentTarget.value))}})]})})}var U,K,G=t(4378);function J(n){var e=n.children;return(0,N.jsx)("div",{children:(0,N.jsx)("p",{children:e})})}var M,V,W,$,H=S.ZP.ul(U||(U=(0,P.Z)(["\n  margin: 0 auto;\n  margin-top: ","px;\n  max-width: 50vw;\n  padding: ","px;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[5]})),Q=S.ZP.li(K||(K=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),Y=S.ZP.span(M||(M=(0,P.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: ","px;\n  padding: ","px;\n  font-family: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fonts.monospace}),(function(n){return n.theme.fontSizes.l})),nn=S.ZP.button(V||(V=(0,P.Z)(["\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  font-family: ",";\n  font-size: ",";\n  background-color: ",";\n  color: ",";\n  border: none;\n  border-radius: ",";\n  &:hover,\n  :focus {\n    background-color: ",";\n    border: none;\n    outline: none;\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fonts.monospace}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.buttonBackground}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.hover}));function en(n){var e=n.name,t=n.number,o=n.id,i=(0,r.I0)();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Y,{children:e}),(0,N.jsx)(Y,{children:t}),(0,N.jsx)(nn,{type:"button",onClick:function(){return i((0,z.GK)(o))},children:"Delete"})]})}function tn(){return(0,N.jsx)(H,{children:(0,r.v9)(w).map((function(n){var e=n.name,t=n.id,r=n.number;return(0,N.jsx)(Q,{children:(0,N.jsx)(en,{id:t,name:e,number:r})},t)}))})}var rn=S.ZP.div(W||(W=(0,P.Z)([""]))),on=S.ZP.h2($||($=(0,P.Z)(["\n  text-align: center;\n"])));var un=function(){var n=(0,r.I0)(),e=(0,r.v9)(j),t=(0,r.v9)(Z);return(0,k.useEffect)((function(){n((0,z.yF)())}),[n]),(0,N.jsxs)(rn,{children:[(0,N.jsx)(O,{}),(0,N.jsx)(on,{children:"Contacts"}),(0,N.jsx)(T,{}),e&&(0,N.jsx)(G.a,{}),t&&(0,N.jsx)(J,{children:"Whoops! Something went wrong!"}),(0,N.jsx)(tn,{})]})}}}]);
//# sourceMappingURL=341.858aba11.chunk.js.map