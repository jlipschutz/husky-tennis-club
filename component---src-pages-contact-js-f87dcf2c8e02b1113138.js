(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{202:function(e,t,n){"use strict";n.r(t);n(221);var r=n(213),o=n.n(r);var a=n(0);n(242);var i=n(267),l=n(222),s=n(225),c=n(268),u=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.createElement("div",null,a.createElement("div",{className:i.wrapper},a.createElement(o.a,{selected:"contact"}),a.createElement(l,null,"Contact Us"),a.createElement(c,null)),a.createElement(s,{color:"#144788"}))},r}(a.Component);t.default=u},209:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return m}),n.d(t,"useStaticQuery",function(){return d}),n.d(t,"prefetchPathname",function(){return c});var r=n(0),o=n.n(r),a=n(68),i=n.n(a);n.d(t,"Link",function(){return i.a}),n.d(t,"withAssetPrefix",function(){return a.withAssetPrefix}),n.d(t,"withPrefix",function(){return a.withPrefix}),n.d(t,"parsePath",function(){return a.parsePath}),n.d(t,"navigate",function(){return a.navigate}),n.d(t,"push",function(){return a.push}),n.d(t,"replace",function(){return a.replace}),n.d(t,"navigateTo",function(){return a.navigateTo});var l=n(210),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var c=n(10).default.enqueue,u=o.a.createContext({});function p(e){var t=e.staticQueryData,n=e.data,r=e.query,a=e.render,i=n?n.data:t[r]&&t[r].data;return o.a.createElement(o.a.Fragment,null,i&&a(i),!i&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,n=e.query,r=e.render,a=e.children;return o.a.createElement(u.Consumer,null,function(e){return o.a.createElement(p,{data:t,query:n,render:r||a,staticQueryData:e})})},d=function(e){o.a.useContext;var t=o.a.useContext(u);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}},210:function(e,t,n){var r;e.exports=(r=n(214))&&r.default||r},212:function(e,t,n){"use strict";n.r(t),n.d(t,"SiteTabValue",function(){return r}),n.d(t,"BlogSectionData",function(){return o});var r={goals:"Goals",blog:"Blog",events:"Events",contact:"Contact Us",register:"Register"},o={fallPractice:{title:"HTC Fall Practice 2019",description:"We will be running practice Monday, Wednesday, and Thursday from 5:00pm-8:00pm at the South IMA Courts.",image:"../../images/tenniscourt.jpg",imageTitle:"IMA Courts",date:"September 25th - December 5th",link:"n/a",linkAvailable:!1},freshmenPractice:{title:"New Member Practice",description:"We run one practice before school starts to let new members learn more about the club and meet new friends to hit with.This practice will be from 4:00pm-7:00pm.",image:"../../images/tenniscourt.jpg",imageTitle:"IMA Courts",date:"September 23rd",link:"n/a",linkAvailable:!1},osuTournament:{title:"OSU Fall Invitational",description:"Tryout for our competitive team that travels across the PNW and play against other college club teams!",image:"../../images/tenniscourt.jpg",imageTitle:"IMA Courts",date:"October 18th - 20th",link:"http://bit.ly/OSUFallTournament",linkAvailable:!0}}},213:function(e,t,n){var r=n(0),o=n(209).Link,a=n(212).SiteTabValue,i=n(216),l=i.Collapse,s=i.Nav,c=i.Navbar,u=i.NavbarBrand,p=i.NavbarToggler,m=i.NavItem,d=i.NavLink;function f(e){var t="register"===e.siteTab?"rgba(62, 34, 3, 0.82)":"black";return r.createElement(o,{to:"/"+e.siteTab+"/",style:{color:e.selected===e.siteTab?"rgba(70, 78, 255)":t,fontSize:14,fontWeight:"normal",textDecoration:"none"}},r.createElement(m,null,r.createElement(d,null,a[e.siteTab])))}var h=function(e){"use strict";var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={isOpen:!1},t.toggle=function(){t.setState({isOpen:!t.state.isOpen})},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.createElement(c,{light:!0,expand:"sm",style:{position:"absolute",top:0,left:0,right:0,zIndex:3}},r.createElement(u,null,r.createElement(o,{to:"/",style:{color:"black",fontSize:14,fontWeight:600,textDecoration:"none"}},"Husky Tennis Club")),r.createElement(p,{onClick:this.toggle,style:{border:"none",outline:"none"}}),r.createElement(l,{isOpen:this.state.isOpen,navbar:!0},r.createElement(s,{className:"ml-auto",navbar:!0},r.createElement(f,{selected:this.props.selected,siteTab:"goals"}),r.createElement(f,{selected:this.props.selected,siteTab:"blog"}),r.createElement(f,{selected:this.props.selected,siteTab:"events"}),r.createElement(f,{selected:this.props.selected,siteTab:"contact"}))))},a}(r.Component);e.exports=h},214:function(e,t,n){"use strict";n.r(t);n(54),n(16),n(14),n(15),n(8),n(22);var r=n(0),o=n.n(r),a=n(99);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(a.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},222:function(e,t,n){var r=n(0),o={marginTop:"113px",marginLeft:"30px"},a=function(e){"use strict";var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.createElement("div",{style:o},r.createElement("h1",{style:{fontWeight:200}},this.props.children))},a}(r.Component);e.exports=a},224:function(e,t,n){var r=n(218),o=n(0),a=n(216).Button;function i(e){return o.createElement(a,{className:r.buttonCustom,style:{background:"linear-gradient(90deg, #F27A54 0%, #A154F2 100%)",borderRadius:"20px",color:"rgba(255,255,255,0.8)",borderStyle:"none",fontSize:11,fontWeight:"bold",fontFamily:'"Montserrat"',marginLeft:null!==e.marginLeft?e.marginLeft:0,width:null!==e.width?e.width:void 0}},e.children)}var l=function(e){"use strict";var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return o.createElement("a",{href:this.props.site,rel:"noopener noreferrer",target:void 0===this.props.redirect||this.props.redirect?"_blank":""},o.createElement(i,{marginLeft:this.props.marginLeft,width:this.props.width},this.props.children))},r}(o.Component);e.exports=l},225:function(e,t,n){var r=n(0),o=function(e){"use strict";var t,n;function o(){return e.apply(this,arguments)||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){return r.createElement("div",{style:{width:"100%",height:"250px",paddingTop:"213px",fontSize:11,color:void 0===this.props.color?"#144788":this.props.color,textAlign:"center",zIndex:-1}},r.createElement("p",null,"Made with ❤ by Husky Tennis Club Web Dev Team"))},o}(r.Component);e.exports=o},268:function(e,t,n){var r=n(0),o=n(269),a=n(271).QAData,i=n(243),l=i.FaFacebookSquare,s=i.FaEnvelope,c=n(224),u=function(e){"use strict";var t,n;function i(){return e.apply(this,arguments)||this}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.prototype.render=function(){console.log(a);var e=[];return a.data.forEach(function(t){e.push(r.createElement(o,{data:t}))}),r.createElement("div",{className:"container",style:{marginTop:"40px"}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col-12 col-md-3 leftText",style:{fontWeight:600,fontSize:28,color:"rgba(116,122,255,.7)",marginBottom:20,lineHeight:1.4}},"How can we help?"),r.createElement("div",{className:"col-12 col-md-9"},e,r.createElement("div",{className:"",style:{marginTop:130}},r.createElement("div",{style:{fontSize:23,fontWeight:300}},"Still need help?"),r.createElement("div",{style:{fontSize:15,marginTop:20}},"Email us and one of the officers will answer your questions."),r.createElement("div",{style:{marginTop:20}},r.createElement(c,{site:"mailto:huskytennis@gmail.com",width:205,redirect:!1},r.createElement("span",{style:{display:"inline-block",fontSize:16,marginRight:18}},r.createElement(s,null)),"EMAIL"),r.createElement("div",{style:{fontSize:15,marginTop:30}},"Or join our Facebook group!"),r.createElement("div",{style:{marginTop:20}},r.createElement(c,{site:"https://www.facebook.com/groups/huskytennisclub/",width:205},r.createElement("span",{style:{display:"inline-block",fontSize:16,marginRight:18}},r.createElement(l,null)),"FACEBOOK GROUP")))))))},i}(r.Component);e.exports=u},269:function(e,t,n){var r=n(242),o=n(0),a=n(270).IoIosArrowDown,i=function(e){"use strict";var t,n;function i(t){var n;return(n=e.call(this,t)||this).handleTitleClick=function(e){n.setState({isAnswerDisplayed:!n.state.isAnswerDisplayed})},n.state={isAnswerDisplayed:!1},n}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.prototype.render=function(){return console.log(this.props.data),o.createElement("div",{className:r.cardStyle},o.createElement("div",{className:"card",style:{border:"none"}},o.createElement("div",{className:"card-body",onClick:this.handleTitleClick},o.createElement("div",{className:"card-title d-flex justify-content-between",style:{marginBottom:0,fontWeight:300,fontSize:14,color:"#1F2041"}},o.createElement("div",null,this.props.data.question),o.createElement("div",null,o.createElement(a,{style:{color:"#9CA0FD",transform:this.state.isAnswerDisplayed?"rotate(180deg)":"none"}}))),o.createElement("div",{className:"card-text",style:{display:this.state.isAnswerDisplayed?"block":"none",marginTop:25,fontSize:14,opacity:.85}},this.props.data.answer))))},i}(o.Component);e.exports=i},271:function(e,t,n){"use strict";n.r(t),n.d(t,"QAData",function(){return a});n(226);var r=n(0);function o(e){return r.createElement("a",{href:e.link,rel:"noopener noreferrer",style:{textDecoration:"none",color:"#B68A62"}},e.label)}var a={data:[{question:"I would like to learn more about the club. Who can I talk to?",answer:r.createElement("span",null,"Contact us via"," ",r.createElement(o,{label:"email",link:"mailto:huskytennis@gmail.com"})," or through our Facebook group!")},{question:"I want to donate to or sponsor the club!",answer:r.createElement("span",null,"We are grateful that you want to donate or sponsor our club! Please email the club treasurer,"," ",r.createElement(o,{label:"Matt Cao",link:"mailto:huskytennis@gmail.com"}),".")},{question:"I want to play tennis! But I never touched a racquet before!",answer:r.createElement("span",null,"Don't worry! We welcome players from all skill level! ")}]}}}]);
//# sourceMappingURL=component---src-pages-contact-js-f87dcf2c8e02b1113138.js.map