!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t||self).itunesStoreApi={})}(this,function(t){function e(){e=function(t,e){return new i(t,void 0,e)};var t=RegExp.prototype,r=new WeakMap;function i(t,e,o){var s=new RegExp(t,e);return r.set(s,o||r.get(t)),n(s,i.prototype)}function s(t,e){var o=r.get(e);return Object.keys(o).reduce(function(e,r){return e[r]=t[o[r]],e},Object.create(null))}return o(i,RegExp),i.prototype.exec=function(e){var r=t.exec.call(this,e);return r&&(r.groups=s(r,this)),r},i.prototype[Symbol.replace]=function(e,o){if("string"==typeof o){var n=r.get(this);return t[Symbol.replace].call(this,e,o.replace(/\$<([^>]+)>/g,function(t,e){return"$"+n[e]}))}if("function"==typeof o){var i=this;return t[Symbol.replace].call(this,e,function(){var t=arguments;return"object"!=typeof t[t.length-1]&&(t=[].slice.call(t)).push(s(t,i)),o.apply(this,t)})}return t[Symbol.replace].call(this,e,o)},e.apply(this,arguments)}function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},r.apply(this,arguments)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}function i(t,e){var r,o=(null!=(r=t.match(e))?r:{}).groups;return null!=o?o:{}}var s=function(t,e){try{for(var r=new URLSearchParams,o=0,n=Object.entries(e);o<n.length;o++){var i=n[o];r.set(i[0],encodeURIComponent(i[1]).replace(/%20/g,"+"))}return Promise.resolve(function(e,o){try{var n=Promise.resolve(fetch(u+"/"+t+"?"+r.toString())).then(function(t){if(t.ok)return Promise.resolve(t.json());throw new Error(t.statusText)})}catch(t){return o(t)}return n&&n.then?n.then(void 0,o):n}(0,function(t){return Promise.reject(t)}))}catch(t){return Promise.reject(t)}},u="https://itunes.apple.com",c=/*#__PURE__*/e(/^https?:\/\/((?:apps|books|music|podcasts|))\.apple\.com\/([a-z]+)\/([\x2Da-z]+)/,{media:1,country:2,entity:3}),p=/*#__PURE__*/e(/^https?:\/\/apps\.apple\.com\/(?:(?!\/)[\s\S])*\/app\/(?:(?!\/)[\s\S])*\/id([0-9]+)/,{id:1}),a=/*#__PURE__*/e(/^https?:\/\/music\.apple\.com\/(?:(?!\/)[\s\S])*\/artist\/(?:(?!\/)[\s\S])*\/([0-9]+)/,{id:1}),l=/*#__PURE__*/e(/^https?:\/\/books\.apple\.com\/(?:(?!\/)[\s\S])*\/audiobook\/(?:(?!\/)[\s\S])*\/id([0-9]+)/,{id:1}),f=/*#__PURE__*/e(/^https?:\/\/books\.apple\.com\/(?:(?!\/)[\s\S])*\/author\/(?:(?!\/)[\s\S])*\/id([0-9]+)/,{id:1}),h=/*#__PURE__*/e(/^https?:\/\/books\.apple\.com\/(?:(?!\/)[\s\S])*\/book\/(?:(?!\/)[\s\S])*\/id([0-9]+)/,{id:1}),d=/*#__PURE__*/e(/^https?:\/\/music\.apple\.com\/(?:(?!\/)[\s\S])*\/music\x2Dvideo\/(?:(?!\/)[\s\S])*\/([0-9]+)/,{id:1}),m=/*#__PURE__*/e(/^https?:\/\/podcasts\.apple\.com\/(?:(?!\/)[\s\S])*\/podcast\/(?:(?!\/)[\s\S])*\/id([0-9]+)/,{id:1}),y=/*#__PURE__*/e(/^https?:\/\/music\.apple\.com\/(?:(?!\/)[\s\S])*\/album\/(?:(?!\/)[\s\S])*\/([0-9]+)(?:\?.*i=([0-9]+))?/,{id:1,trackId:2}),b={country:"us"};t.lookup=function(t,e,o){void 0===o&&(o={});try{var n,u=r({},b,o),v="url"===t?function(t){var e=i(t,c),r=e.country,o=e.entity,n=e.media;function s(t){return t?{country:r,id:Number(t)}:{}}function u(e){return s(i(t,e).id)}if("apps"===n)return u(p);if("books"===n&&"audiobook"===o)return u(l);if("books"===n&&"author"===o)return u(f);if("books"===n&&"book"===o)return u(h);if("music"===n&&"artist"===o)return u(a);if("music"===n&&"music-video"===o)return u(d);if("podcasts"===n&&"podcast"===o)return u(m);if("music"===n&&"album"===o){var b=i(t,y);return s(b.trackId||b.id)}return{}}(String(e)):((n={})[t]=e,n);return Promise.resolve(s("lookup",r({},u,v)))}catch(t){return Promise.reject(t)}},t.search=function(t,e){void 0===e&&(e={});try{var o=r({},b,e);return Promise.resolve(s("search",r({},o,{explicit:o.explicit?"Yes":"No",term:t})))}catch(t){return Promise.reject(t)}}});
//# sourceMappingURL=index.umd.js.map
