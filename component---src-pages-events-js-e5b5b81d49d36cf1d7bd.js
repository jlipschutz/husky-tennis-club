(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{129:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),o=(n(139),n(137)),i=n(0),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.createElement("div",null,i.createElement(o.a,{selected:"events"}))},t}(i.Component);t.default=s},135:function(e,t,n){var a;e.exports=(a=n(138))&&a.default||a},136:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(134),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(135),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},137:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n(136).Link,s=n(140),c=s.Collapse,l=s.Nav,u=s.Navbar,d=s.NavbarBrand,p=s.NavbarToggler,f=s.NavItem,g=s.NavLink,m={goals:"Goals",blog:"Blog",events:"Events",contact:"Contact Us",register:"Register"};function h(e){var t="register"===e.siteTab?"rgba(62, 34, 3, 0.82)":"black";return o.createElement(f,null,o.createElement(g,null,o.createElement(i,{to:"/"+e.siteTab+"/",style:{color:e.selected===e.siteTab?"rgba(70, 78, 255)":t,fontSize:14,fontWeight:"normal",textDecoration:"none"}},m[e.siteTab])))}var b=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isOpen:!1},t.toggle=function(){t.setState({isOpen:!t.state.isOpen})},t}return r()(t,e),t.prototype.render=function(){return o.createElement(u,{light:!0,expand:"sm",style:{position:"absolute",top:0,left:0,right:0,zIndex:3}},o.createElement(d,null,o.createElement(i,{to:"/",style:{color:"black",fontSize:14,fontWeight:600,textDecoration:"none"}},"Husky Tennis Club")),o.createElement(p,{onClick:this.toggle,style:{border:"none",outline:"none"}}),o.createElement(c,{isOpen:this.state.isOpen,navbar:!0},o.createElement(l,{className:"ml-auto",navbar:!0},o.createElement(h,{selected:this.props.selected,siteTab:"goals"}),o.createElement(h,{selected:this.props.selected,siteTab:"blog"}),o.createElement(h,{selected:this.props.selected,siteTab:"events"}),o.createElement(h,{selected:this.props.selected,siteTab:"contact"}),o.createElement(h,{selected:this.props.selected,siteTab:"register"}))))},t}(o.Component);t.a=b},138:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(46),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-pages-events-js-e5b5b81d49d36cf1d7bd.js.map