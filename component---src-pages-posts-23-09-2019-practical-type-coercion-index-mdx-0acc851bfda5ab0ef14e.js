(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6boC":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return o}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("q1tI");var n=t("7ljp");var s={path:"/pratical-type-coercion",date:"2019-09-24T17:12:33.962Z",title:"Practical type coercion / conversion and type checks in JavaScript",featuredImage:"./header.jpg",headerImage:"./header.jpg",tags:["coercion","JS","web","conversion","JavaScript","type checks"],excerpt:"One of the most discussed topics of JS is the types system in context with the equality operator and explicit and implicit type coercion."},c={_frontmatter:s};function o(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.mdx)("wrapper",Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),Object(n.mdx)("p",null,"One of the most discussed topics of JS is the types system in context with the equality operator and explicit and implicit type coercion."),Object(n.mdx)("p",null,"Soo Yes! JavaScript has a lot of weird corner cases when it comes to type equality and coercion."),Object(n.mdx)("p",null,"Some examples"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"*"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"NaN")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"===")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"NaN")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// false"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"null")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"==")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"0")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// false"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"-"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"0")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"===")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token number"}),"0")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// true"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"‘a’",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"==")," ‘a’ ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// true*")))),Object(n.mdx)("p",null,"There is a huge open source list of examples which you can find ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/denysdovhan/wtfjs"}),"here"),". In reality, most programming languages have some corner cases and many of them even make sense."),Object(n.mdx)("p",null,"What I found interesting about type coercion are not all these corner cases instead I like some practical concepts and learnings which you can take from those corner case examples and introduce the learnings into your codebase."),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"It is really helpful to learn how type coercion in JS works to better reason about your code"),Object(n.mdx)("li",{parentName:"ul"},"There are some practical things you can improve in your programs if you know how coercion works"),Object(n.mdx)("li",{parentName:"ul"},"You don’t need to know all of the corner cases look up the ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"https://tc39.github.io/ecma262/"}),"JS spec")," if you don’t understand a particular check")),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"The first thing you should make sure is to lower the surface area of your functions to keep them as small as possible e.g. avoid overloading your functions.")),Object(n.mdx)("p",null,"That means if it doesn’t make sense to accept a string and a number as a function parameter don’t try to implement both definitions instead make it visible to the reader of your code that the function only works with numbers."),Object(n.mdx)("p",null,"Keep in mind with more information you usually end up with a better result. This is how diversity works if you have more different opinions and perspectives you create better outcomes. So the more you know about coercion the more you can clean up your code. The first example are undefined and null checks."),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// 1."),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// You can avoid checking for undefined and null by using the == operator instead"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// of === so here you can actually make use of the implicit equality operator conversion"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"a ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!==")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"undefined")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"&&")," a ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!==")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"null"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// checks for both undefined and null"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"a ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!=")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"null"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// 2. If you want to check whether an array is an array use the built in method"),"\nArray",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"isArray"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"MyArray",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// 3."),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Use Number.isNaN(value) to check for NaN"),"\nNumber",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"isNan"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"value",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// 4."),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Do not check boolean with == for boolean or when the type is unknown"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Use truthy correctly"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// This is ok if you check existency not boolean"),"\n\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// run the code"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// bad since e.g."),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"object ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"==")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"true"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// doesnt work"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// If you have initialised an empty array or an empty object and you want check for existence"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// this will not work since == and === operator implicit coerce"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"==")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"true"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// false"),"\nObject ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"===")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"true"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// false")))),Object(n.mdx)("p",null,"You can just check if the ",Object(n.mdx)("em",{parentName:"p"},"variable")," has a truthy value or not. That means do this"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"if")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"value",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(n.mdx)("p",null,"will evaluate to true if ",Object(n.mdx)("em",{parentName:"p"},"value")," is ",Object(n.mdx)("strong",{parentName:"p"},"not"),":"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"null"),Object(n.mdx)("li",{parentName:"ul"},"undefined"),Object(n.mdx)("li",{parentName:"ul"},"NaN"),Object(n.mdx)("li",{parentName:"ul"},'empty string ("")'),Object(n.mdx)("li",{parentName:"ul"},"0"),Object(n.mdx)("li",{parentName:"ul"},"false")),Object(n.mdx)("p",null,"You may have already seen some deeper nested objects checks for example if you have a nested object like this"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"let")," date ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"date",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," year",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," month",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," day ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(n.mdx)("p",null,"If you safely want to know whether date has a day property defined you need to do something like the code below"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," date ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," date ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"&&")," date",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"year ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"&&")," date",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"year",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"month ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"&&")," date",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"year",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"month",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"day",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.mdx)("p",null,"If you have a deeply nested object you will end up writing a lot of the above code. There are a lot of libraries and helpers and also a huge discussion about this ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://stackoverflow.com/questions/2631001/test-for-existence-of-nested-javascript-object-key"}),"topic")," on stack overflow."),Object(n.mdx)("p",null,"Until recently there were only some packages out there which tried to help you with such cases but recently optional chaining has come into the JS spec."),Object(n.mdx)("h2",null,"💪 Optional chaining to the rescue"),Object(n.mdx)("p",null,Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/tc39/proposal-optional-chaining"}),"Optional chaining")," has finally reached stage 4 of the TC39 process and hopefully, most browsers will support it in the near time"),Object(n.mdx)("p",null,"With optional, chaining you can use the ",Object(n.mdx)("em",{parentName:"p"},"?")," to check for existence."),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," day ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," date",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?."),"year",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?."),"month",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?."),"day",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.mdx)("p",null,"But until it will officially be merged into the browsers I will end up using idx package which was created by a Facebook team. The best part about it is that it doesn’t will ship extra code to your JS bundle since you can remove idx during the build with babel."),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," idx ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),"'idx'"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// let date = {date: { year: { month: { day }}"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// you can access the nested day property like this"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," day ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"idx"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"date",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"_"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," _",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"year",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"month",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"day",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.mdx)("p",null,"Finally, a program is much more reasonable when you know the types. It is then much easier to use the appropriate built-in language tools to check for the corner cases."))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-23-09-2019-practical-type-coercion-index-mdx-0acc851bfda5ab0ef14e.js.map