(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5075)}])},5075:function(t,e,r){"use strict";r.r(e);var a=r(5893),n=r(7294);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=function(t){var e=t.htmlFor,r=t.children;return(0,a.jsx)("div",{className:"w-8/12",children:(0,a.jsx)("label",{className:"text-white text-lg text-left",htmlFor:e,children:r})})},o=function(t){var e=t.name;return(0,a.jsx)("input",{type:"text",name:e,defaultValue:"mariItemCount"==e?95:"",className:"rounded w-8/12 p-2 pl-4 pr-4 outline-none"})};e.default=function(){var t=(0,n.useState)(),e=t[0],r=t[1],i=(0,n.useState)(),m=i[0],c=i[1],u=(0,n.useRef)({mariItemCount:95});return(0,a.jsxs)("div",{className:"w-224 h-160 center",children:[(0,a.jsx)("div",{className:"w-1/2 float-left rounded h-full p-8",children:(0,a.jsxs)("form",{onSubmit:function(t){return t.preventDefault()},onChange:function(t){var e=t.target;if(!isNaN(parseFloat(e.value))){var a=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),a.forEach((function(e){l(t,e,r[e])}))}return t}({},u.current);a[e.name]=parseFloat(e.value),u.current=a,isNaN(u.current.mariGoldCost)||isNaN(u.current.mariCrystalCount)||isNaN(u.current.mariItemCount)||isNaN(u.current.mariItemCost)||r(a.mariItemCost/a.mariItemCount*(a.mariGoldCost/a.mariCrystalCount)),isNaN(u.current.marketItemCost)||isNaN(u.current.marketItemCount)||c(a.marketItemCost/a.marketItemCount)}},action:"#",className:"flex items-start flex-col w-full h-full space-y-4",children:[(0,a.jsx)(s,{htmlFor:"mariGoldCost",children:"Mari Gold Cost"}),(0,a.jsx)(o,{name:"mariGoldCost"}),(0,a.jsx)(s,{htmlFor:"mariCrystalCount",children:"Mari Crystal Amount"}),(0,a.jsx)(o,{name:"mariCrystalCount"}),(0,a.jsx)(s,{htmlFor:"mariItemCount",children:"Mari Amount of Items"}),(0,a.jsx)(o,{name:"mariItemCount"}),(0,a.jsx)(s,{htmlFor:"mariItemCost",children:"Mari Item Cost"}),(0,a.jsx)(o,{name:"mariItemCost"}),(0,a.jsx)(s,{htmlFor:"marketItemCount",children:"Market Item Count"}),(0,a.jsx)(o,{name:"marketItemCount"}),(0,a.jsx)(s,{htmlFor:"marketItemCost",children:"Market Item Cost"}),(0,a.jsx)(o,{name:"marketItemCost"})]})}),(0,a.jsxs)("div",{className:"w-1/2 float-left h-full text-xl text-white p-8 relative",children:[(0,a.jsx)("p",{className:"text-center opacity-50 text-2xl",children:"Mari"}),(0,a.jsxs)("p",{className:"text-center",children:[null===e||void 0===e?void 0:e.toFixed(2)," Gold/Item"]}),(0,a.jsx)("p",{className:"text-center mt-8 opacity-50 text-2xl",children:"Market"}),(0,a.jsxs)("p",{className:"text-center",children:[null===m||void 0===m?void 0:m.toFixed(2)," Gold/Item"]}),(0,a.jsxs)("div",{className:"w-full absolute bottom-10 left-0",children:[(0,a.jsx)("p",{className:"text-center w-full opacity-50 text-2xl",children:"Result"}),e&&m?(0,a.jsx)("p",{className:"text-center",children:e>m?"Market is more worth":"Mari is more worth"}):(0,a.jsx)("br",{})]})]})]})}}},function(t){t.O(0,[774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);