(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Cuy+":function(a,e,r){"use strict";r.r(e);var t=r("q1tI"),n=r.n(t),c=r("1f/Z"),o=r.n(c),l=r("Gw0d"),i=r("uRdJ"),m=r("9Hrx"),s=r("MX0m"),d=r.n(s),y=r("Wbzz"),p=function(a){function e(e){var r;return(r=a.call(this,e)||this).state={name:"",email:"",emailReal:"",message:"",human:""},r.handleChange=r.handleChange.bind(Object(i.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(i.a)(r)),r}Object(m.a)(e,a);var r=e.prototype;return r.encode=function(a){return Object.keys(a).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(a[e])})).join("&")},r.handleSubmit=function(a){if(a.preventDefault(),""==this.state.email)if("human"==this.state.human){var e=document.getElementById("submitButton");e.disabled=!0,e.value="Sending...",e.style.transition="200ms ease-in-out",e.style.backgroundColor=o.a.color.brand.primaryLight,e.style.borderColor=o.a.color.brand.primaryLight,e.style.color="#666",fetch(this.contactPostAddress,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:this.encode(Object.assign({"form-name":"contact","javascript-detected":!0},this.state))}).then((function(a){return a.json()})).then((function(a){console.log(a),"success"==a.result?(console.log("Form submission success"),Object(y.d)("/success")):(console.error(a),alert("Server responded with error! Sorry about this."))})).catch((function(a){console.error(a),alert("Unable to deliver. Is your internet connection down?")}))}else alert("Bot check failed. Please write 'human' (without quotes) in the field just above the submit button, then try again.")},r.handleChange=function(a){var e;this.setState(((e={})[a.target.name]=a.target.value,e))},r.render=function(){var a=this;return n.a.createElement(y.b,{query:"3885512103",render:function(e){var r=e.site.siteMetadata.contactPostAddress;return a.contactPostAddress=r,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])+" form"},n.a.createElement("form",{name:"contact",method:"post",action:r,onSubmit:a.handleSubmit,"data-netlify":"true",className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])},n.a.createElement("label",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])+" formItem"},"Name (optional):",n.a.createElement("br",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])}),n.a.createElement("input",{type:"text",name:"name",value:a.state.name,onChange:a.handleChange,className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])})),n.a.createElement("br",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])}),n.a.createElement("br",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])}),n.a.createElement("label",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])+" formItem"},"E-mail (optional):",n.a.createElement("br",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])}),n.a.createElement("input",{type:"email",name:"emailReal",value:a.state.emailReal,onChange:a.handleChange,className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])})),n.a.createElement("br",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])}),n.a.createElement("br",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])}),n.a.createElement("input",{type:"email",name:"email",value:a.state.email,onChange:a.handleChange,style:{display:"none"},className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])}),n.a.createElement("label",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])+" formItem"},"Message:",n.a.createElement("br",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])}),n.a.createElement("textarea",{name:"message",required:!0,value:a.state.message,onChange:a.handleChange,className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])})),n.a.createElement("br",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])}),n.a.createElement("br",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])}),n.a.createElement("label",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])+" formItem"},'If you are not a robot, then write "human" in this field:',n.a.createElement("br",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])}),n.a.createElement("input",{type:"human",name:"human",value:a.state.human,onChange:a.handleChange,className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])})),n.a.createElement("br",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])}),n.a.createElement("br",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])}),n.a.createElement("input",{type:"submit",value:"Submit",id:"submitButton",className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])+" formItem"}),""===r&&n.a.createElement("h1",{className:d.a.dynamic([["580675822",[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]]])},"Undefined contactPostAddress!")),n.a.createElement(d.a,{styleId:"580675822",css:[".formItem.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector,textarea.__jsx-style-dynamic-selector{width:100%;border-radius:5px;border-width:2px;font-family:Open Sans;font-weight:400;font-size:1em;}",".formItem.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{height:30px;max-width:300px;}",".formItem.__jsx-style-dynamic-selector textarea.__jsx-style-dynamic-selector{height:100px;max-width:600px;}","#submitButton.__jsx-style-dynamic-selector{color:white;height:auto;font-family:Open Sans;font-size:1.2em;font-weight:400;padding:0.5em 3em;border-radius:5px;background:"+o.a.color.brand.primary+";border:1px solid "+o.a.color.brand.primary+";}","#submitButton.__jsx-style-dynamic-selector:hover{background:"+o.a.color.brand.primaryDark+";cursor:pointer;}"],dynamic:[o.a.color.brand.primary,o.a.color.brand.primary,o.a.color.brand.primaryDark]})))}})},e}(n.a.Component),b=r("YvhC"),u=r("hkyM");e.default=function(a){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{theme:o.a},n.a.createElement("header",null,n.a.createElement(b.a,{title:"Contact",theme:o.a})),n.a.createElement(p,{theme:o.a})),n.a.createElement(u.a,{pageTitle:"Contact"}))}},Gw0d:function(a,e,r){"use strict";r.d(e,"a",(function(){return l}));var t=r("MX0m"),n=r.n(t),c=r("q1tI"),o=r.n(c),l=function(a){var e=a.children,r=a.theme;return o.a.createElement(o.a.Fragment,null,o.a.createElement("article",{className:n.a.dynamic([["3487304345",[r.space.inset.default,"calc("+r.space.default+") calc("+r.space.default+" * 2)",r.text.maxWidth.tablet,"calc("+r.space.default+" * 2 + 90px) 0 calc("+r.space.default+" * 2)",r.text.maxWidth.desktop]]])+" article"},e),o.a.createElement(n.a,{styleId:"3487304345",css:[".article.__jsx-style-dynamic-selector{padding:"+r.space.inset.default+";padding-bottom:0px !important;margin:0 auto;}","@media screen and (min-width:600px){.article.__jsx-style-dynamic-selector{padding:calc("+r.space.default+") calc("+r.space.default+" * 2);max-width:"+r.text.maxWidth.tablet+";}}","@media screen and (min-width:1024px){.article.__jsx-style-dynamic-selector{padding:calc("+r.space.default+" * 2 + 90px) 0 calc("+r.space.default+" * 2);max-width:"+r.text.maxWidth.desktop+";}}"],dynamic:[r.space.inset.default,"calc("+r.space.default+") calc("+r.space.default+" * 2)",r.text.maxWidth.tablet,"calc("+r.space.default+" * 2 + 90px) 0 calc("+r.space.default+" * 2)",r.text.maxWidth.desktop]}))}},YvhC:function(a,e,r){"use strict";var t=r("MX0m"),n=r.n(t),c=r("q1tI"),o=r.n(c);e.a=function(a){var e=a.title,r=a.children,t=a.theme;return o.a.createElement(o.a.Fragment,null,e?o.a.createElement("h1",{className:n.a.dynamic([["2680357445",[t.font.size.xxl,t.space.stack.l,t.color.neutral.gray.j,t.font.weight.standard,t.space.stack.xs,t.color.brand.primary,"calc("+t.font.size.xl+" * 1.2)","calc("+t.font.size.xl+" * 1.4)"]]])},e):o.a.createElement("h1",{className:n.a.dynamic([["2680357445",[t.font.size.xxl,t.space.stack.l,t.color.neutral.gray.j,t.font.weight.standard,t.space.stack.xs,t.color.brand.primary,"calc("+t.font.size.xl+" * 1.2)","calc("+t.font.size.xl+" * 1.4)"]]])},r),o.a.createElement(n.a,{styleId:"2680357445",css:["h1.__jsx-style-dynamic-selector{font-size:"+t.font.size.xxl+";margin:"+t.space.stack.l+";-webkit-animation-name:headlineEntry;-webkit-animation-name:headlineEntry-__jsx-style-dynamic-selector;animation-name:headlineEntry-__jsx-style-dynamic-selector;-webkit-animation-duration:0;-webkit-animation-duration:0;animation-duration:0;color:"+t.color.neutral.gray.j+";}","h1.__jsx-style-dynamic-selector span{font-weight:"+t.font.weight.standard+";display:block;font-size:0.5em;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;margin:"+t.space.stack.xs+";}","h1.__jsx-style-dynamic-selector svg{height:0.75em;fill:"+t.color.brand.primary+";}","@-webkit-keyframes headlineEntry{from.__jsx-style-dynamic-selector{opacity:0.5;}to.__jsx-style-dynamic-selector{opacity:1;}}","@-webkit-keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@media screen and (min-width:600px){h1.__jsx-style-dynamic-selector{font-size:calc("+t.font.size.xl+" * 1.2);}}","@media screen and (min-width:1024px){h1.__jsx-style-dynamic-selector{font-size:calc("+t.font.size.xl+" * 1.4);}}"],dynamic:[t.font.size.xxl,t.space.stack.l,t.color.neutral.gray.j,t.font.weight.standard,t.space.stack.xs,t.color.brand.primary,"calc("+t.font.size.xl+" * 1.2)","calc("+t.font.size.xl+" * 1.4)"]}))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-85257867fa017839aebd.js.map