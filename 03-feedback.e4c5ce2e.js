var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,g=function(){return c.Date.now()};function m(t,e,n){var o,r,i,a,f,u,c=0,l=!1,m=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,i=r;return o=r=void 0,c=e,a=t.apply(i,n)}function T(t){return c=t,f=setTimeout(j,e),l?y(t):a}function h(t){var n=t-u;return void 0===u||n>=e||n<0||m&&t-c>=i}function j(){var t=g();if(h(t))return w(t);f=setTimeout(j,function(t){var n=e-(t-u);return m?d(n,i-(t-c)):n}(t))}function w(t){return f=void 0,b&&o?y(t):(o=r=void 0,a)}function O(){var t=g(),n=h(t);if(o=arguments,r=this,u=t,n){if(void 0===f)return T(u);if(m)return f=setTimeout(j,e),y(u)}return void 0===f&&(f=setTimeout(j,e)),a}return e=p(e)||0,v(n)&&(l=!!n.leading,i=(m="maxWait"in n)?s(p(n.maxWait)||0,e):i,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},O.flush=function(){return void 0===f?a:w(g())},O}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function p(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var f=r.test(t);return f||i.test(t)?a(t.slice(2),f?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(t,e,{leading:o,maxWait:e,trailing:r})};const b=document.querySelector(".feedback-form");if(localStorage.getItem("feedback-form-state")){const t=JSON.parse(localStorage.getItem("feedback-form-state"));for(const e in t)b.elements[e].value=t[e]}const y={};b.addEventListener("input",e((function(t){y[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),b.addEventListener("submit",(function(t){t.preventDefault();const e={};new FormData(t.currentTarget).forEach(((t,n)=>{e[n]=t})),localStorage.removeItem("feedback-form-state"),console.log(e),t.currentTarget.reset();for(const t in y)delete y[t]}));
//# sourceMappingURL=03-feedback.e4c5ce2e.js.map
