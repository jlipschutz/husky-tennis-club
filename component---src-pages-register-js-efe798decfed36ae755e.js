(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{139:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),i=(n(150),n(144)),s=n.n(i),o=n(0),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.createElement("div",null,o.createElement(s.a,{selected:"register"}))},t}(o.Component);t.default=c},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p}),n.d(t,"useStaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),s=n.n(i),o=n(28),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"parsePath",function(){return o.parsePath}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var u=n(143),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},f=function(e){r.a.useContext;var t=r.a.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},143:function(e,t,n){var a;e.exports=(a=n(145))&&a.default||a},144:function(e,t,n){var a=n(6),r=n(0),i=n(142).Link,s=n(146).SiteTabValue,o=n(148),c=o.Collapse,u=o.Nav,l=o.Navbar,d=o.NavbarBrand,p=o.NavbarToggler,f=o.NavItem,g=o.NavLink;function h(e){var t="register"===e.siteTab?"rgba(62, 34, 3, 0.82)":"black";return r.createElement(i,{to:"/"+e.siteTab+"/",style:{color:e.selected===e.siteTab?"rgba(70, 78, 255)":t,fontSize:14,fontWeight:"normal",textDecoration:"none"}},r.createElement(f,null,r.createElement(g,null,s[e.siteTab])))}var b=function(e){"use strict";function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isOpen:!1},t.toggle=function(){t.setState({isOpen:!t.state.isOpen})},t}return a(t,e),t.prototype.render=function(){return r.createElement(l,{light:!0,expand:"sm",style:{position:"absolute",top:0,left:0,right:0,zIndex:3}},r.createElement(d,null,r.createElement(i,{to:"/",style:{color:"black",fontSize:14,fontWeight:600,textDecoration:"none"}},"Husky Tennis Club")),r.createElement(p,{onClick:this.toggle,style:{border:"none",outline:"none"}}),r.createElement(c,{isOpen:this.state.isOpen,navbar:!0},r.createElement(u,{className:"ml-auto",navbar:!0},r.createElement(h,{selected:this.props.selected,siteTab:"goals"}),r.createElement(h,{selected:this.props.selected,siteTab:"blog"}),r.createElement(h,{selected:this.props.selected,siteTab:"events"}),r.createElement(h,{selected:this.props.selected,siteTab:"contact"}),r.createElement(h,{selected:this.props.selected,siteTab:"register"}))))},t}(r.Component);e.exports=b},145:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),s=n.n(i),o=n(51),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},146:function(e,t,n){"use strict";n.r(t),n.d(t,"SiteTabValue",function(){return a});var a={goals:"Goals",blog:"Blog",events:"Events",contact:"Contact Us",register:"Register"}}}]);
//# sourceMappingURL=component---src-pages-register-js-efe798decfed36ae755e.js.map