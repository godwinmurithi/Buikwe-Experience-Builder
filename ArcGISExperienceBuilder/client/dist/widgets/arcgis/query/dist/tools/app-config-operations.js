System.register([],(function(e,t){return{execute:function(){e((()=>{"use strict";var e={d:(t,r)=>{for(var i in r)e.o(r,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:r[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>r});class r{constructor(){this.id="query-app-config-operation"}afterWidgetCopied(e,t,r){var i;if(!r)return t;const o=t.widgets[this.widgetId],n=null==o?void 0:o.config;let d=t;return null===(i=n.queryItems)||void 0===i||i.forEach(((i,o)=>{var n;if((null===(n=i.spatialMapWidgetIds)||void 0===n?void 0:n.length)>0){const n=i.spatialMapWidgetIds.map((e=>r[e]));d=t.setIn(["widgets",e,"config","queryItems",o,"spatialMapWidgetIds"],n)}})),d}widgetWillRemove(e){return e}}return t})())}}}));