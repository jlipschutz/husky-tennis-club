(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{205:function(A,e,t){"use strict";t.r(e);t(228);var a=t(217),n=t.n(a);var r=t(0),i=function(A){var e,t;function a(){return A.apply(this,arguments)||this}return t=A,(e=a).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,a.prototype.render=function(){return r.createElement("div",null,r.createElement(n.a,{selected:"register"}))},a}(r.Component);e.default=i},208:function(A,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return g}),t.d(e,"StaticQueryContext",function(){return u}),t.d(e,"StaticQuery",function(){return d}),t.d(e,"useStaticQuery",function(){return p}),t.d(e,"prefetchPathname",function(){return o});var a=t(0),n=t.n(a),r=t(68),i=t.n(r);t.d(e,"Link",function(){return i.a}),t.d(e,"withAssetPrefix",function(){return r.withAssetPrefix}),t.d(e,"withPrefix",function(){return r.withPrefix}),t.d(e,"parsePath",function(){return r.parsePath}),t.d(e,"navigate",function(){return r.navigate}),t.d(e,"push",function(){return r.push}),t.d(e,"replace",function(){return r.replace}),t.d(e,"navigateTo",function(){return r.navigateTo});var c=t(211),s=t.n(c);t.d(e,"PageRenderer",function(){return s.a});var o=t(10).default.enqueue,u=n.a.createContext({});function l(A){var e=A.staticQueryData,t=A.data,a=A.query,r=A.render,i=t?t.data:e[a]&&e[a].data;return n.a.createElement(n.a.Fragment,null,i&&r(i),!i&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(A){var e=A.data,t=A.query,a=A.render,r=A.children;return n.a.createElement(u.Consumer,null,function(A){return n.a.createElement(l,{data:e,query:t,render:a||r,staticQueryData:A})})},p=function(A){n.a.useContext;var e=n.a.useContext(u);if(e[A]&&e[A].data)return e[A].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}},211:function(A,e,t){var a;A.exports=(a=t(218))&&a.default||a},213:function(A,e,t){"use strict";t.r(e),t.d(e,"SiteTabValue",function(){return r}),t.d(e,"GoalsSectionData",function(){return i}),t.d(e,"BlogSectionData",function(){return c});t(214);var a=t(215),n=t(216),r=(t(0),t(222),{goals:"Goals",blog:"Blog",events:"Events",contact:"Contact Us",register:"Register"}),i={recreational:{title:"recreational",picture:n.a,description:"We always welcome new players to come join us and participate in the Husky fun. During the beginning of fall quarter we invite all interested tennis  players to play tennis and meet our current officers to learn more about the club.",titleColor:"#CA9E86"},competitive:{title:"competitive",picture:a.a,description:"Throughout the last few years, Husky Tennis  Club has been competitive in the Pacific Northwest Section of USTA's Tennis on Campus program.We have placed as finalists in the Pacific Northwest Sectionalstournament and have participated in the USTA Tennis on Campus Nationals tournament as well. We continue to striveto secure a place on the draw at Nationals.",titleColor:"#AEDDFD"}},c={fallPractice:{title:"HTC Fall Practice 2019",description:"We will be running practice Monday, Wednesday, and Thursday from 5:00pm-8:00pm at the South IMA Courts.",image:"../../images/tenniscourt.jpg",imageTitle:"IMA Courts",date:"September 25th - December 5th",link:"n/a",linkAvailable:!1},freshmenPractice:{title:"New Member Practice",description:"We run one practice before school starts to let new members learn more about the club and meet new friends to hit with.This practice will be from 4:00pm-7:00pm.",image:"../../images/tenniscourt.jpg",imageTitle:"IMA Courts",date:"September 23rd",link:"n/a",linkAvailable:!1},osuTournament:{title:"OSU Fall Invitational",description:"Tryout for our competitive team that travels across the PNW and play against other college club teams!",image:"../../images/tenniscourt.jpg",imageTitle:"IMA Courts",date:"October 18th - 20th",link:"http://bit.ly/OSUFallTournament",linkAvailable:!0}}},214:function(A,e,t){"use strict";t(219),t(0),t(208),t(209)},215:function(A,e,t){"use strict";var a=t(220),n=t(0),r=t.n(n),i=t(208),c=t(209),s=t.n(c);e.a=function(){return r.a.createElement(i.StaticQuery,{query:"2848880650",render:function(A){return r.a.createElement(s.a,{fluid:A.placeholderImage.childImageSharp.fluid,style:{boxShadow:"4px 4px 8px rgba(0, 0, 0, 0.25)",borderRadius:"3px"}})},data:a})}},216:function(A,e,t){"use strict";var a=t(221),n=t(0),r=t.n(n),i=t(208),c=t(209),s=t.n(c);e.a=function(){return r.a.createElement(i.StaticQuery,{query:"2140269625",render:function(A){return r.a.createElement(s.a,{fluid:A.placeholderImage.childImageSharp.fluid,style:{boxShadow:"0px 10px 20px rgba(31, 32, 65, 0.05)",borderRadius:"3px"}})},data:a})}},217:function(A,e,t){var a=t(0),n=t(208).Link,r=t(213).SiteTabValue,i=t(224),c=i.Collapse,s=i.Nav,o=i.Navbar,u=i.NavbarBrand,l=i.NavbarToggler,d=i.NavItem,p=i.NavLink;function g(A){var e="register"===A.siteTab?"rgba(62, 34, 3, 0.82)":"black";return a.createElement(n,{to:"/"+A.siteTab+"/",style:{color:A.selected===A.siteTab?"rgba(70, 78, 255)":e,fontSize:14,fontWeight:"normal",textDecoration:"none"}},a.createElement(d,null,a.createElement(p,null,r[A.siteTab])))}var b=function(A){"use strict";var e,t;function r(){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return(e=A.call.apply(A,[this].concat(a))||this).state={isOpen:!1},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return t=A,(e=r).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,r.prototype.render=function(){return a.createElement(o,{light:!0,expand:"sm",style:{position:"absolute",top:0,left:0,right:0,zIndex:3}},a.createElement(u,null,a.createElement(n,{to:"/",style:{color:"black",fontSize:14,fontWeight:600,textDecoration:"none"}},"Husky Tennis Club")),a.createElement(l,{onClick:this.toggle,style:{border:"none",outline:"none"}}),a.createElement(c,{isOpen:this.state.isOpen,navbar:!0},a.createElement(s,{className:"ml-auto",navbar:!0},a.createElement(g,{selected:this.props.selected,siteTab:"goals"}),a.createElement(g,{selected:this.props.selected,siteTab:"blog"}),a.createElement(g,{selected:this.props.selected,siteTab:"events"}),a.createElement(g,{selected:this.props.selected,siteTab:"contact"}))))},r}(a.Component);A.exports=b},218:function(A,e,t){"use strict";t.r(e);t(54),t(16),t(14),t(15),t(8),t(22);var a=t(0),n=t.n(a),r=t(99);function i(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable})),t.push.apply(t,a)}return t}function c(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}e.default=function(A){var e=A.location,t=A.pageResources;return t?n.a.createElement(r.a,function(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(t,!0).forEach(function(e){c(A,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):i(t).forEach(function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))})}return A}({location:e,pageResources:t},t.json)):null}},219:function(A){A.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDAgT/xAAXAQEBAQEAAAAAAAAAAAAAAAADAgEE/9oADAMBAAIQAxAAAAGXpz7cmcKOluIUsD1//8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIAAxEz/9oACAEBAAEFAgNjVlRK+lpxJQoFWRxj/wD/xAAZEQACAwEAAAAAAAAAAAAAAAABAgAQESH/2gAIAQMBAT8BUDKJ7FUZP//EABcRAAMBAAAAAAAAAAAAAAAAAAABMRD/2gAIAQIBAT8BdxQZ/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAEQEUHB/9oACAEBAAY/AjYhryb1xn//xAAcEAEAAwACAwAAAAAAAAAAAAABABEhEEFRgZH/2gAIAQEAAT8hsVLCr7wkpLbg+krHGA+RgE3uGAwn/9oADAMBAAIAAwAAABBg2AP/xAAZEQEAAgMAAAAAAAAAAAAAAAABABAhMUH/2gAIAQMBAT8QQ13TCzEFTk//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEQ/9oACAECAQE/EEgDgMSdb//EAB8QAQACAgICAwAAAAAAAAAAAAEAESExQYFRYaGxwf/aAAgBAQABPxCp+m2VgocFp1cYK7A/ZWIFRGgtvfUVdfECHJRPA6PUAAs2GYJRwHE//9k=",aspectRatio:1.0019880715705765,src:"/husky-tennis-club/static/a8c269ced5d0b50a85949384a69411ca/65fee/brandon.jpg",srcSet:"/husky-tennis-club/static/a8c269ced5d0b50a85949384a69411ca/6df45/brandon.jpg 59w,\n/husky-tennis-club/static/a8c269ced5d0b50a85949384a69411ca/6dc1a/brandon.jpg 118w,\n/husky-tennis-club/static/a8c269ced5d0b50a85949384a69411ca/65fee/brandon.jpg 236w,\n/husky-tennis-club/static/a8c269ced5d0b50a85949384a69411ca/a70b9/brandon.jpg 354w,\n/husky-tennis-club/static/a8c269ced5d0b50a85949384a69411ca/215d2/brandon.jpg 472w,\n/husky-tennis-club/static/a8c269ced5d0b50a85949384a69411ca/84513/brandon.jpg 1008w",sizes:"(max-width: 236px) 100vw, 236px"}}}}}},220:function(A){A.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwABAv/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABDV4zsYJP/8QAGhABAAIDAQAAAAAAAAAAAAAAAgABAxITIv/aAAgBAQABBQIC7jG0vGamvMDynfN//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEh/9oACAEDAQE/AYx//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHRAAAgIBBQAAAAAAAAAAAAAAAAECETEyQWGBof/aAAgBAQAGPwKoSvofBr8FTyPe0OKP/8QAGhABAQEAAwEAAAAAAAAAAAAAAREAITFBYf/aAAgBAQABPyEBgWL0wVKUEmbjy+Zdn6mShexzu2Bfd//aAAwDAQACAAMAAAAQz/8A/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERITH/2gAIAQMBAT8QS4VOn//EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8QeEZ//8QAHBABAQACAwEBAAAAAAAAAAAAAREAITFBYVGR/9oACAEBAAE/EEylS0Hccdu9DiwlN95sOjdEPOcqBQSIB89fcQYwXwWw/cQNKh5b3n//2Q==",aspectRatio:1.5003663003663004,src:"/husky-tennis-club/static/4e41e1123f37d7754c1acc579bbe446b/aa6e4/nationals.jpg",srcSet:"/husky-tennis-club/static/4e41e1123f37d7754c1acc579bbe446b/a9d44/nationals.jpg 109w,\n/husky-tennis-club/static/4e41e1123f37d7754c1acc579bbe446b/3bf88/nationals.jpg 218w,\n/husky-tennis-club/static/4e41e1123f37d7754c1acc579bbe446b/aa6e4/nationals.jpg 436w,\n/husky-tennis-club/static/4e41e1123f37d7754c1acc579bbe446b/fa588/nationals.jpg 654w,\n/husky-tennis-club/static/4e41e1123f37d7754c1acc579bbe446b/15f7c/nationals.jpg 872w,\n/husky-tennis-club/static/4e41e1123f37d7754c1acc579bbe446b/3d25e/nationals.jpg 2048w",sizes:"(max-width: 436px) 100vw, 436px"}}}}}},221:function(A){A.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFjs5iWkAv/xAAbEAADAAIDAAAAAAAAAAAAAAABAgMABBESE//aAAgBAQABBQJq809GwWICN22VcsoqUH//xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQMBAT8BiY//xAAWEQEBAQAAAAAAAAAAAAAAAAAAESH/2gAIAQIBAT8BrX//xAAbEAACAwADAAAAAAAAAAAAAAAAAQIRMRIiQf/aAAgBAQAGPwLjF4ZZ2irM0nfhSR//xAAcEAACAgIDAAAAAAAAAAAAAAAAARExIUFRcZH/2gAIAQEAAT8hayAoWiClTlvIiLomaQobyX1Cj6D/2gAMAwEAAgADAAAAEFTP/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAwEBPxCXg7H/xAAXEQEBAQEAAAAAAAAAAAAAAAABEQBR/9oACAECAQE/EFDbr3v/xAAcEAEBAAMAAwEAAAAAAAAAAAABEQAhMUFRkcH/2gAIAQEAAT8QUwigBfaP5lqEzQgPmzuLAxV0vwcZgirGiUuUH2CasHuGegVVa5//2Q==",aspectRatio:1.5003663003663004,src:"/husky-tennis-club/static/2472c387991d6629ac3d54e4ce9d8a57/aa6e4/burgers.jpg",srcSet:"/husky-tennis-club/static/2472c387991d6629ac3d54e4ce9d8a57/a9d44/burgers.jpg 109w,\n/husky-tennis-club/static/2472c387991d6629ac3d54e4ce9d8a57/3bf88/burgers.jpg 218w,\n/husky-tennis-club/static/2472c387991d6629ac3d54e4ce9d8a57/aa6e4/burgers.jpg 436w,\n/husky-tennis-club/static/2472c387991d6629ac3d54e4ce9d8a57/fa588/burgers.jpg 654w,\n/husky-tennis-club/static/2472c387991d6629ac3d54e4ce9d8a57/15f7c/burgers.jpg 872w,\n/husky-tennis-club/static/2472c387991d6629ac3d54e4ce9d8a57/3d25e/burgers.jpg 2048w",sizes:"(max-width: 436px) 100vw, 436px"}}}}}},222:function(A,e,t){A.exports=t.p+"static/recreational-faf5b4ffa288302407cc769e3d16712e.jpg"}}]);
//# sourceMappingURL=component---src-pages-register-js-903b2f25321a123d0583.js.map