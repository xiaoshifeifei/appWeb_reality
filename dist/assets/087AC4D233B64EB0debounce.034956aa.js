/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
import{bE as t,bA as n,bF as r}from"./087AC4D233B64EB0index.70d09b05.js";var i=/\s/;var e=/^\s+/;function o(t){return t?t.slice(0,function(t){for(var n=t.length;n--&&i.test(t.charAt(n)););return n}(t)+1).replace(e,""):t}var u=NaN,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,v=parseInt;function s(r){if("number"==typeof r)return r;if(t(r))return u;if(n(r)){var i="function"==typeof r.valueOf?r.valueOf():r;r=n(i)?i+"":i}if("string"!=typeof r)return 0===r?r:+r;r=o(r);var e=f.test(r);return e||c.test(r)?v(r.slice(2),e?2:8):a.test(r)?u:+r}const l=function(){return r.Date.now()};var d=Math.max,m=Math.min;function p(t,r,i){var e,o,u,a,f,c,v=0,p=!1,h=!1,x=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function T(n){var r=e,i=o;return e=o=void 0,v=n,a=t.apply(i,r)}function y(t){var n=t-c;return void 0===c||n>=r||n<0||h&&t-v>=u}function b(){var t=l();if(y(t))return g(t);f=setTimeout(b,function(t){var n=r-(t-c);return h?m(n,u-(t-v)):n}(t))}function g(t){return f=void 0,x&&e?T(t):(e=o=void 0,a)}function E(){var t=l(),n=y(t);if(e=arguments,o=this,c=t,n){if(void 0===f)return function(t){return v=t,f=setTimeout(b,r),p?T(t):a}(c);if(h)return clearTimeout(f),f=setTimeout(b,r),T(c)}return void 0===f&&(f=setTimeout(b,r)),a}return r=s(r)||0,n(i)&&(p=!!i.leading,u=(h="maxWait"in i)?d(s(i.maxWait)||0,r):u,x="trailing"in i?!!i.trailing:x),E.cancel=function(){void 0!==f&&clearTimeout(f),v=0,e=c=o=f=void 0},E.flush=function(){return void 0===f?a:g(l())},E}export{p as d,s as t};
