(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{202:function(e,t,n){"use strict";n.r(t);n(216);var r=n(210),a=n.n(r);var o=n(0),i=n(217),c=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return o.createElement("div",null,o.createElement(a.a,{selected:"blog"}),o.createElement(i,null,"Blog"))},r}(o.Component);t.default=c},208:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return b}),n.d(t,"StaticQueryContext",function(){return l}),n.d(t,"StaticQuery",function(){return f}),n.d(t,"useStaticQuery",function(){return d}),n.d(t,"prefetchPathname",function(){return u});var r=n(0),a=n.n(r),o=n(68),i=n.n(o);n.d(t,"Link",function(){return i.a}),n.d(t,"withAssetPrefix",function(){return o.withAssetPrefix}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"parsePath",function(){return o.parsePath}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var c=n(209),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var u=n(10).default.enqueue,l=a.a.createContext({});function p(e){var t=e.staticQueryData,n=e.data,r=e.query,o=e.render,i=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,i&&o(i),!i&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var f=function(e){var t=e.data,n=e.query,r=e.render,o=e.children;return a.a.createElement(l.Consumer,null,function(e){return a.a.createElement(p,{data:t,query:n,render:r||o,staticQueryData:e})})},d=function(e){a.a.useContext;var t=a.a.useContext(l);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}},209:function(e,t,n){var r;e.exports=(r=n(211))&&r.default||r},210:function(e,t,n){var r=n(0),a=n(208).Link,o=n(212).SiteTabValue,i=n(213),c=i.Collapse,s=i.Nav,u=i.Navbar,l=i.NavbarBrand,p=i.NavbarToggler,f=i.NavItem,d=i.NavLink;function b(e){var t="register"===e.siteTab?"rgba(62, 34, 3, 0.82)":"black";return r.createElement(a,{to:"/"+e.siteTab+"/",style:{color:e.selected===e.siteTab?"rgba(70, 78, 255)":t,fontSize:14,fontWeight:"normal",textDecoration:"none"}},r.createElement(f,null,r.createElement(d,null,o[e.siteTab])))}var y=function(e){"use strict";var t,n;function o(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={isOpen:!1},t.toggle=function(){t.setState({isOpen:!t.state.isOpen})},t}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){return r.createElement(u,{light:!0,expand:"sm",style:{position:"absolute",top:0,left:0,right:0,zIndex:3}},r.createElement(l,null,r.createElement(a,{to:"/",style:{color:"black",fontSize:14,fontWeight:600,textDecoration:"none"}},"Husky Tennis Club")),r.createElement(p,{onClick:this.toggle,style:{border:"none",outline:"none"}}),r.createElement(c,{isOpen:this.state.isOpen,navbar:!0},r.createElement(s,{className:"ml-auto",navbar:!0},r.createElement(b,{selected:this.props.selected,siteTab:"goals"}),r.createElement(b,{selected:this.props.selected,siteTab:"blog"}),r.createElement(b,{selected:this.props.selected,siteTab:"events"}),r.createElement(b,{selected:this.props.selected,siteTab:"contact"}))))},o}(r.Component);e.exports=y},211:function(e,t,n){"use strict";n.r(t);n(52),n(16),n(14),n(15),n(8),n(22);var r=n(0),a=n.n(r),o=n(96);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(o.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},212:function(e,t,n){"use strict";n.r(t),n.d(t,"SiteTabValue",function(){return r});var r={goals:"Goals",blog:"Blog",events:"Events",contact:"Contact Us",register:"Register"}},217:function(e,t,n){var r=n(0),a={marginTop:"113px",marginLeft:"30px"},o=function(e){"use strict";var t,n;function o(){return e.apply(this,arguments)||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){return r.createElement("div",{style:a},r.createElement("h1",{style:{fontWeight:200}},this.props.children))},o}(r.Component);e.exports=o}}]);
//# sourceMappingURL=component---src-pages-blog-js-348e52fe6df6c368c4cb.js.map