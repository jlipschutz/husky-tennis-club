(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{202:function(e,t,A){"use strict";A.r(t);A(228);var n=A(217),a=A.n(n);var r=A(0);A(247);var o=A(272),i=A(229),c=A(230),s=A(273),l=function(e){var t,A;function n(){return e.apply(this,arguments)||this}return A=e,(t=n).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,n.prototype.render=function(){return r.createElement("div",null,r.createElement("div",{className:o.wrapper},r.createElement(a.a,{selected:"contact"}),r.createElement(i,null,"Contact Us"),r.createElement(s,null)),r.createElement(c,{color:"#144788"}))},n}(r.Component);t.default=l},208:function(e,t,A){"use strict";A.r(t),A.d(t,"graphql",function(){return h}),A.d(t,"StaticQueryContext",function(){return l}),A.d(t,"StaticQuery",function(){return p}),A.d(t,"useStaticQuery",function(){return d}),A.d(t,"prefetchPathname",function(){return s});var n=A(0),a=A.n(n),r=A(68),o=A.n(r);A.d(t,"Link",function(){return o.a}),A.d(t,"withAssetPrefix",function(){return r.withAssetPrefix}),A.d(t,"withPrefix",function(){return r.withPrefix}),A.d(t,"parsePath",function(){return r.parsePath}),A.d(t,"navigate",function(){return r.navigate}),A.d(t,"push",function(){return r.push}),A.d(t,"replace",function(){return r.replace}),A.d(t,"navigateTo",function(){return r.navigateTo});var i=A(211),c=A.n(i);A.d(t,"PageRenderer",function(){return c.a});var s=A(10).default.enqueue,l=a.a.createContext({});function u(e){var t=e.staticQueryData,A=e.data,n=e.query,r=e.render,o=A?A.data:t[n]&&t[n].data;return a.a.createElement(a.a.Fragment,null,o&&r(o),!o&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(e){var t=e.data,A=e.query,n=e.render,r=e.children;return a.a.createElement(l.Consumer,null,function(e){return a.a.createElement(u,{data:t,query:A,render:n||r,staticQueryData:e})})},d=function(e){a.a.useContext;var t=a.a.useContext(l);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}},211:function(e,t,A){var n;e.exports=(n=A(218))&&n.default||n},213:function(e,t,A){"use strict";A.r(t),A.d(t,"SiteTabValue",function(){return r}),A.d(t,"GoalsSectionData",function(){return o}),A.d(t,"BlogSectionData",function(){return i});A(214);var n=A(215),a=A(216),r=(A(0),A(222),{goals:"Goals",blog:"Blog",events:"Events",contact:"Contact Us",register:"Register"}),o={recreational:{title:"recreational",picture:a.a,description:"We always welcome new players to come join us and participate in the Husky fun. During the beginning of fall quarter we invite all interested tennis  players to play tennis and meet our current officers to learn more about the club.",titleColor:"#CA9E86"},competitive:{title:"competitive",picture:n.a,description:"Throughout the last few years, Husky Tennis  Club has been competitive in the Pacific Northwest Section of USTA's Tennis on Campus program.We have placed as finalists in the Pacific Northwest Sectionalstournament and have participated in the USTA Tennis on Campus Nationals tournament as well. We continue to striveto secure a place on the draw at Nationals.",titleColor:"#AEDDFD"}},i={fallPractice:{title:"HTC Fall Practice 2019",description:"We will be running practice Monday, Wednesday, and Thursday from 5:00pm-8:00pm at the South IMA Courts.",image:"../../images/tenniscourt.jpg",imageTitle:"IMA Courts",date:"September 25th - December 5th",link:"n/a",linkAvailable:!1},freshmenPractice:{title:"New Member Practice",description:"We run one practice before school starts to let new members learn more about the club and meet new friends to hit with.This practice will be from 4:00pm-7:00pm.",image:"../../images/tenniscourt.jpg",imageTitle:"IMA Courts",date:"September 23rd",link:"n/a",linkAvailable:!1},osuTournament:{title:"OSU Fall Invitational",description:"Tryout for our competitive team that travels across the PNW and play against other college club teams!",image:"../../images/tenniscourt.jpg",imageTitle:"IMA Courts",date:"October 18th - 20th",link:"http://bit.ly/OSUFallTournament",linkAvailable:!0}}},214:function(e,t,A){"use strict";A(219),A(0),A(208),A(209)},215:function(e,t,A){"use strict";var n=A(220),a=A(0),r=A.n(a),o=A(208),i=A(209),c=A.n(i);t.a=function(){return r.a.createElement(o.StaticQuery,{query:"2848880650",render:function(e){return r.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid,style:{boxShadow:"4px 4px 8px rgba(0, 0, 0, 0.25)",borderRadius:"3px"}})},data:n})}},216:function(e,t,A){"use strict";var n=A(221),a=A(0),r=A.n(a),o=A(208),i=A(209),c=A.n(i);t.a=function(){return r.a.createElement(o.StaticQuery,{query:"2140269625",render:function(e){return r.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid,style:{boxShadow:"0px 10px 20px rgba(31, 32, 65, 0.05)",borderRadius:"3px"}})},data:n})}},217:function(e,t,A){var n=A(0),a=A(208).Link,r=A(213).SiteTabValue,o=A(223),i=o.Collapse,c=o.Nav,s=o.Navbar,l=o.NavbarBrand,u=o.NavbarToggler,p=o.NavItem,d=o.NavLink;function h(e){var t="register"===e.siteTab?"rgba(62, 34, 3, 0.82)":"black";return n.createElement(a,{to:"/"+e.siteTab+"/",style:{color:e.selected===e.siteTab?"rgba(70, 78, 255)":t,fontSize:14,fontWeight:"normal",textDecoration:"none"}},n.createElement(p,null,n.createElement(d,null,r[e.siteTab])))}var m=function(e){"use strict";var t,A;function r(){for(var t,A=arguments.length,n=new Array(A),a=0;a<A;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={isOpen:!1},t.toggle=function(){t.setState({isOpen:!t.state.isOpen})},t}return A=e,(t=r).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,r.prototype.render=function(){return n.createElement(s,{light:!0,expand:"sm",style:{position:"absolute",top:0,left:0,right:0,zIndex:3}},n.createElement(l,null,n.createElement(a,{to:"/",style:{color:"black",fontSize:14,fontWeight:600,textDecoration:"none"}},"Husky Tennis Club")),n.createElement(u,{onClick:this.toggle,style:{border:"none",outline:"none"}}),n.createElement(i,{isOpen:this.state.isOpen,navbar:!0},n.createElement(c,{className:"ml-auto",navbar:!0},n.createElement(h,{selected:this.props.selected,siteTab:"goals"}),n.createElement(h,{selected:this.props.selected,siteTab:"blog"}),n.createElement(h,{selected:this.props.selected,siteTab:"events"}),n.createElement(h,{selected:this.props.selected,siteTab:"contact"}))))},r}(n.Component);e.exports=m},218:function(e,t,A){"use strict";A.r(t);A(54),A(16),A(14),A(15),A(8),A(22);var n=A(0),a=A.n(n),r=A(99);function o(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),A.push.apply(A,n)}return A}function i(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}t.default=function(e){var t=e.location,A=e.pageResources;return A?a.a.createElement(r.a,function(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?o(A,!0).forEach(function(t){i(e,t,A[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):o(A).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))})}return e}({location:t,pageResources:A},A.json)):null}},219:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDAgT/xAAXAQEBAQEAAAAAAAAAAAAAAAADAgEE/9oADAMBAAIQAxAAAAGXpz7cmcKOluIUsD1//8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIAAxEz/9oACAEBAAEFAgNjVlRK+lpxJQoFWRxj/wD/xAAZEQACAwEAAAAAAAAAAAAAAAABAgAQESH/2gAIAQMBAT8BUDKJ7FUZP//EABcRAAMBAAAAAAAAAAAAAAAAAAABMRD/2gAIAQIBAT8BdxQZ/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAEQEUHB/9oACAEBAAY/AjYhryb1xn//xAAcEAEAAwACAwAAAAAAAAAAAAABABEhEEFRgZH/2gAIAQEAAT8hsVLCr7wkpLbg+krHGA+RgE3uGAwn/9oADAMBAAIAAwAAABBg2AP/xAAZEQEAAgMAAAAAAAAAAAAAAAABABAhMUH/2gAIAQMBAT8QQ13TCzEFTk//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEQ/9oACAECAQE/EEgDgMSdb//EAB8QAQACAgICAwAAAAAAAAAAAAEAESExQYFRYaGxwf/aAAgBAQABPxCp+m2VgocFp1cYK7A/ZWIFRGgtvfUVdfECHJRPA6PUAAs2GYJRwHE//9k=",aspectRatio:1.0019880715705765,src:"/husky-tennis-club/static/a8c269ced5d0b50a85949384a69411ca/65fee/brandon.jpg",srcSet:"/husky-tennis-club/static/a8c269ced5d0b50a85949384a69411ca/6df45/brandon.jpg 59w,\n/husky-tennis-club/static/a8c269ced5d0b50a85949384a69411ca/6dc1a/brandon.jpg 118w,\n/husky-tennis-club/static/a8c269ced5d0b50a85949384a69411ca/65fee/brandon.jpg 236w,\n/husky-tennis-club/static/a8c269ced5d0b50a85949384a69411ca/a70b9/brandon.jpg 354w,\n/husky-tennis-club/static/a8c269ced5d0b50a85949384a69411ca/215d2/brandon.jpg 472w,\n/husky-tennis-club/static/a8c269ced5d0b50a85949384a69411ca/84513/brandon.jpg 1008w",sizes:"(max-width: 236px) 100vw, 236px"}}}}}},220:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwABAv/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABDV4zsYJP/8QAGhABAAIDAQAAAAAAAAAAAAAAAgABAxITIv/aAAgBAQABBQIC7jG0vGamvMDynfN//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEh/9oACAEDAQE/AYx//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHRAAAgIBBQAAAAAAAAAAAAAAAAECETEyQWGBof/aAAgBAQAGPwKoSvofBr8FTyPe0OKP/8QAGhABAQEAAwEAAAAAAAAAAAAAAREAITFBYf/aAAgBAQABPyEBgWL0wVKUEmbjy+Zdn6mShexzu2Bfd//aAAwDAQACAAMAAAAQz/8A/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERITH/2gAIAQMBAT8QS4VOn//EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8QeEZ//8QAHBABAQACAwEBAAAAAAAAAAAAAREAITFBYVGR/9oACAEBAAE/EEylS0Hccdu9DiwlN95sOjdEPOcqBQSIB89fcQYwXwWw/cQNKh5b3n//2Q==",aspectRatio:1.5003663003663004,src:"/husky-tennis-club/static/4e41e1123f37d7754c1acc579bbe446b/aa6e4/nationals.jpg",srcSet:"/husky-tennis-club/static/4e41e1123f37d7754c1acc579bbe446b/a9d44/nationals.jpg 109w,\n/husky-tennis-club/static/4e41e1123f37d7754c1acc579bbe446b/3bf88/nationals.jpg 218w,\n/husky-tennis-club/static/4e41e1123f37d7754c1acc579bbe446b/aa6e4/nationals.jpg 436w,\n/husky-tennis-club/static/4e41e1123f37d7754c1acc579bbe446b/fa588/nationals.jpg 654w,\n/husky-tennis-club/static/4e41e1123f37d7754c1acc579bbe446b/15f7c/nationals.jpg 872w,\n/husky-tennis-club/static/4e41e1123f37d7754c1acc579bbe446b/3d25e/nationals.jpg 2048w",sizes:"(max-width: 436px) 100vw, 436px"}}}}}},221:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFjs5iWkAv/xAAbEAADAAIDAAAAAAAAAAAAAAABAgMABBESE//aAAgBAQABBQJq809GwWICN22VcsoqUH//xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQMBAT8BiY//xAAWEQEBAQAAAAAAAAAAAAAAAAAAESH/2gAIAQIBAT8BrX//xAAbEAACAwADAAAAAAAAAAAAAAAAAQIRMRIiQf/aAAgBAQAGPwLjF4ZZ2irM0nfhSR//xAAcEAACAgIDAAAAAAAAAAAAAAAAARExIUFRcZH/2gAIAQEAAT8hayAoWiClTlvIiLomaQobyX1Cj6D/2gAMAwEAAgADAAAAEFTP/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAwEBPxCXg7H/xAAXEQEBAQEAAAAAAAAAAAAAAAABEQBR/9oACAECAQE/EFDbr3v/xAAcEAEBAAMAAwEAAAAAAAAAAAABEQAhMUFRkcH/2gAIAQEAAT8QUwigBfaP5lqEzQgPmzuLAxV0vwcZgirGiUuUH2CasHuGegVVa5//2Q==",aspectRatio:1.5003663003663004,src:"/husky-tennis-club/static/2472c387991d6629ac3d54e4ce9d8a57/aa6e4/burgers.jpg",srcSet:"/husky-tennis-club/static/2472c387991d6629ac3d54e4ce9d8a57/a9d44/burgers.jpg 109w,\n/husky-tennis-club/static/2472c387991d6629ac3d54e4ce9d8a57/3bf88/burgers.jpg 218w,\n/husky-tennis-club/static/2472c387991d6629ac3d54e4ce9d8a57/aa6e4/burgers.jpg 436w,\n/husky-tennis-club/static/2472c387991d6629ac3d54e4ce9d8a57/fa588/burgers.jpg 654w,\n/husky-tennis-club/static/2472c387991d6629ac3d54e4ce9d8a57/15f7c/burgers.jpg 872w,\n/husky-tennis-club/static/2472c387991d6629ac3d54e4ce9d8a57/3d25e/burgers.jpg 2048w",sizes:"(max-width: 436px) 100vw, 436px"}}}}}},222:function(e,t,A){e.exports=A.p+"static/recreational-faf5b4ffa288302407cc769e3d16712e.jpg"},229:function(e,t,A){var n=A(0),a={marginTop:"113px",marginLeft:"30px"},r=function(e){"use strict";var t,A;function r(){return e.apply(this,arguments)||this}return A=e,(t=r).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,r.prototype.render=function(){return n.createElement("div",{style:a},n.createElement("h1",{style:{fontWeight:200}},this.props.children))},r}(n.Component);e.exports=r},230:function(e,t,A){var n=A(0),a=function(e){"use strict";var t,A;function a(){return e.apply(this,arguments)||this}return A=e,(t=a).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,a.prototype.render=function(){return n.createElement("div",{style:{width:"100%",height:"250px",paddingTop:"213px",fontSize:11,color:void 0===this.props.color?"#144788":this.props.color,textAlign:"center",zIndex:-1}},n.createElement("p",null,"Made with ❤ by Husky Tennis Club Web Dev Team"))},a}(n.Component);e.exports=a},232:function(e,t,A){var n=A(224),a=A(0),r=A(223).Button;function o(e){return a.createElement(r,{className:n.buttonCustom,style:{background:"linear-gradient(90deg, #F27A54 0%, #A154F2 100%)",borderRadius:"20px",color:"rgba(255,255,255,0.8)",borderStyle:"none",fontSize:11,fontWeight:"bold",fontFamily:'"Montserrat"',marginLeft:null!==e.marginLeft?e.marginLeft:0,width:null!==e.width?e.width:void 0}},e.children)}var i=function(e){"use strict";var t,A;function n(){return e.apply(this,arguments)||this}return A=e,(t=n).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,n.prototype.render=function(){return a.createElement("a",{href:this.props.site,rel:"noopener noreferrer",target:void 0===this.props.redirect||this.props.redirect?"_blank":""},a.createElement(o,{marginLeft:this.props.marginLeft,width:this.props.width},this.props.children))},n}(a.Component);e.exports=i},273:function(e,t,A){var n=A(0),a=A(274),r=A(276).QAData,o=A(248),i=o.FaFacebookSquare,c=o.FaEnvelope,s=A(232),l=function(e){"use strict";var t,A;function o(){return e.apply(this,arguments)||this}return A=e,(t=o).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,o.prototype.render=function(){console.log(r);var e=[];return r.data.forEach(function(t){e.push(n.createElement(a,{data:t}))}),n.createElement("div",{className:"container",style:{marginTop:"40px"}},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col-12 col-md-3 leftText",style:{fontWeight:600,fontSize:28,color:"rgba(116,122,255,.7)",marginBottom:20,lineHeight:1.4}},"How can we help?"),n.createElement("div",{className:"col-12 col-md-9"},e,n.createElement("div",{className:"",style:{marginTop:130}},n.createElement("div",{style:{fontSize:23,fontWeight:300}},"Still need help?"),n.createElement("div",{style:{fontSize:15,marginTop:20}},"Email us and one of the officers will answer your questions."),n.createElement("div",{style:{marginTop:20}},n.createElement(s,{site:"mailto:huskytennis@gmail.com",width:205,redirect:!1},n.createElement("span",{style:{display:"inline-block",fontSize:16,marginRight:18}},n.createElement(c,null)),"EMAIL"),n.createElement("div",{style:{fontSize:15,marginTop:30}},"Or join our Facebook group!"),n.createElement("div",{style:{marginTop:20}},n.createElement(s,{site:"https://www.facebook.com/groups/huskytennisclub/",width:205},n.createElement("span",{style:{display:"inline-block",fontSize:16,marginRight:18}},n.createElement(i,null)),"FACEBOOK GROUP")))))))},o}(n.Component);e.exports=l},274:function(e,t,A){var n=A(247),a=A(0),r=A(275).IoIosArrowDown,o=function(e){"use strict";var t,A;function o(t){var A;return(A=e.call(this,t)||this).handleTitleClick=function(e){A.setState({isAnswerDisplayed:!A.state.isAnswerDisplayed})},A.state={isAnswerDisplayed:!1},A}return A=e,(t=o).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A,o.prototype.render=function(){return console.log(this.props.data),a.createElement("div",{className:n.cardStyle},a.createElement("div",{className:"card",style:{border:"none"}},a.createElement("div",{className:"card-body",onClick:this.handleTitleClick},a.createElement("div",{className:"card-title d-flex justify-content-between",style:{marginBottom:0,fontWeight:300,fontSize:14,color:"#1F2041"}},a.createElement("div",null,this.props.data.question),a.createElement("div",null,a.createElement(r,{style:{color:"#9CA0FD",transform:this.state.isAnswerDisplayed?"rotate(180deg)":"none"}}))),a.createElement("div",{className:"card-text",style:{display:this.state.isAnswerDisplayed?"block":"none",marginTop:25,fontSize:14,opacity:.85}},this.props.data.answer))))},o}(a.Component);e.exports=o},276:function(e,t,A){"use strict";A.r(t),A.d(t,"QAData",function(){return r});A(233);var n=A(0);function a(e){return n.createElement("a",{href:e.link,rel:"noopener noreferrer",style:{textDecoration:"none",color:"#B68A62"}},e.label)}var r={data:[{question:"I would like to learn more about the club. Who can I talk to?",answer:n.createElement("span",null,"Contact us via"," ",n.createElement(a,{label:"email",link:"mailto:huskytennis@gmail.com"})," or through our Facebook group!")},{question:"I want to donate to or sponsor the club!",answer:n.createElement("span",null,"We are grateful that you want to donate or sponsor our club! Please email the club treasurer,"," ",n.createElement(a,{label:"Matt Cao",link:"mailto:huskytennis@gmail.com"}),".")},{question:"I want to play tennis! But I never have touched a racquet before!",answer:n.createElement("span",null,"Don't worry! We welcome players from all skill levels! ")},{question:"What happens when it rains?",answer:n.createElement("span",null,"Unfortunately if the courts get too wet we cancel practice for that day. We update if practice is cancelled regularly through Facebook and our mailing list.")},{question:"When are practices?",answer:n.createElement("span",null,"Practices for Fall 2019 are Monday, Wednesday, Thursday from 5:00pm - 8:00pm at the South IMA Courts. You do not need to stay for the entire practice, so feel free to drop by any time!")},{question:"How much does joining the club cost?",answer:n.createElement("span",null,"The annual membership fee is $40 if you pay our Treasurer Matt Cao by September 30th via cash or Venmo. This membership fee will increase to $50 if not paid by the cutoff. You can also just pay a quarterly fee of $15 if you are only sigining up for one quarter. This covers court reservations, equipment, and other fees that help the club.")},{question:"Do we get to use indoor courts?",answer:n.createElement("span",null,"For Fall quarter we do not use indoor courts, but during Winter Quarter we get a weekly practice in the Nordstrom Courts nearby the IMA.")},{question:"Do we have to miss classes for tournaments?",answer:n.createElement("span",null,"Due to the fact that we leave Fridays to carpool to tournaments there is a chance you will miss some of your Friday classes. However, we try to accomodate for morning classes and we try to maximize how much time you can spend at school before leaving that Friday.")}]}}}]);
//# sourceMappingURL=component---src-pages-contact-js-71790a18e83bbb81afed.js.map