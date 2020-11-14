(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{YlzB:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return c}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var n=a("7ljp");var s={path:"/mlh-fellowship-fall-2020-sprint-2",date:"2020-10-29T15:44:31.723Z",title:"MLH Fellowship(Fall 2020): Sprint 2",featuredImage:"./header.jpeg",headerImage:"./featured.jpeg",tags:["mlh","fellowship","Major League Hacking"],excerpt:"MLH Fellowship, Explorer Track: Sprint 2"},o={_frontmatter:s};function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.mdx)("wrapper",Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("p",null,Object(n.mdx)("img",Object.assign({parentName:"p"},{src:"https://socialify.git.ci/QEDK/Mentored/png?description=1&font=Bitter&forks=0&issues=1&logo=https%3A%2F%2Fmedia.discordapp.net%2Fattachments%2F763734957306150933%2F765532665629638687%2Flogo-nobg.png&owner=0&pattern=Floating%20Cogs&pulls=1&theme=Light",alt:"Mentored"}))),Object(n.mdx)("p",null,"Another 2 weeks, another sprint of the MLH Fellowship is done. This time the theme of the sprint was education 📖. This time I got to work in a\nnew team along with ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/shahpreetk"}),"Preet Shah")," and ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/QEDK"}),"Ankit Maity"),". This was again a wonderful experience\nand the first time I worked so much with web development. This time we worked on a project called ",Object(n.mdx)("strong",{parentName:"p"},"Mentored"),". Let’s take a look into what the\nproject is now. "),Object(n.mdx)("h3",null,"🙋 What is Mentored?"),Object(n.mdx)("p",null,"Mentored intends to be a single, unified platform for people new to the technology and software development to find curated, high-quality resources for their topics of interest from industry experts and real software developers. 👨‍💻"),Object(n.mdx)("p",null,"But that’s not all, this platform is built to facilitate real learning with mentorship, allowing mentees to find mentors to learn skills and build up their portfolio. ✨"),Object(n.mdx)("h3",null,"💡 Why did we build it?"),Object(n.mdx)("p",null,"Remember the first time you started off with tech? The vast internet at your fingertips but it’s the first step that’s always the hardest. 😓"),Object(n.mdx)("p",null,"With Mentored, anyone (even you!) can easily find free resources curated in a single place from industry experts instead of crawling the internet. What’s better? You can contact real mentors, software developers and engineers, and contact them to seek guidance. Sounds good? Of course, it is. 🌟"),Object(n.mdx)("p",null,"In fact, it doesn’t stop there. Mentored allows real people to mentor the future generation of developers and point them to right direction, making sure they can (to take words from our friends at MLH) truly level up. 🆙"),Object(n.mdx)("h3",null,"🌐 Where can you find it?"),Object(n.mdx)("p",null,"Find us on ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://mentored-space.herokuapp.com"}),"mentored-space.herokuapp.com"),"! Too long to type, fret not, we are moving soon to ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://mentored.space"}),"mentored.space"),"! 🌠"),Object(n.mdx)("h3",null,"💻 What did we use?"),Object(n.mdx)("p",null,"Mentored has a ReactJS frontend ⚛️ hosted with Netlify, and a Django backend 🐍 backed by PostgreSQL hosted on Google Cloud Platform. The UI is based on React Bootstrap, while the Cloud Run backend uses ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"psycopg2")," for communicating with Cloud SQL. 💽"),Object(n.mdx)("h3",null,"👨‍💻 For contributors"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"To get a deeper understanding of the project please check out our project’s ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/QEDK/Mentored/wiki"}),"wiki"),". 📖"),Object(n.mdx)("li",{parentName:"ul"},"Before contributing do go through the ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/QEDK/Mentored/blob/master/CODE_OF_CONDUCT.md"}),"Code of Conduct")," and the ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/QEDK/Mentored/blob/master/CONTRIBUTING.md"}),"Contributor Guidelines"),". 🔧"),Object(n.mdx)("li",{parentName:"ul"},"If you find any bugs in the application, or a feature you think would be nice to have, please open an ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/QEDK/Mentored/issues/new/choose"}),"issue"),". 🐞"),Object(n.mdx)("li",{parentName:"ul"},"Please follow the ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/QEDK/Mentored/wiki/Style-guidelines"}),"style guidelines")," when making contributions. We have automatic labelers and linters set up using GitHub Actions to check all pull requests for syntax and correct labelling. Instructions on running the linter locally can be found below. 🖌️"),Object(n.mdx)("li",{parentName:"ul"},"Continue reading the rest of the README to get the build instructions for both the frontend and the backend. ⛏️")),Object(n.mdx)("h3",null,"🛠️ Installation"),Object(n.mdx)("p",null,"The project can be setup by following these instructions, note that you must have ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"npm")," and ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"pip")," installed before proceeding further. You should ideally also be working in a virtual environment, such as Python’s ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"venv")," or the ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"virtualenv")," module."),Object(n.mdx)("h3",null,"🧰 Configuration"),Object(n.mdx)("p",null,"For the default server to work normally, you must have a PostgreSQL instance running on your ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"localhost")," (",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"127.0.0.1"),") on port ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"5432"),". Alternatively, if you’re working on Google Cloud Platform with a Cloud SQL connection, you can set ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"GAE_INSTANCE=1")," environment variable to use that connection instead and set ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"DB_HOST")," to the connection instance name. ☁️"),Object(n.mdx)("p",null,"When working locally, environment variables can be set or loaded from a ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),".env")," file in project root like this 📁:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"ini"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-ini"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-ini"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token constant"}),"SECRET_KEY"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token attr-value"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"="),"<your_top_secret_key>"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token constant"}),"DB_HOST"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token attr-value"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"="),"<db_host>"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token constant"}),"DB_NAME"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token attr-value"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"="),"<db_name>"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token constant"}),"DB_USERNAME"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token attr-value"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"="),"<db_username>"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token constant"}),"DB_PASSWORD"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token attr-value"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"="),"<db_password>")))),Object(n.mdx)("h3",null,"🧱 Building dependencies"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"git")," clone git@github.com:QEDK/Mentored.git\n$ ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),"cd")," Mentored/backend\n$ pip3 ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"install")," -r requirements.txt\n$ ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),"cd")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),".."),"/frontend\n$ ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"install")))),Object(n.mdx)("p",null,"That’s about it. ✔️"),Object(n.mdx)("h3",null,"⚙️ Running the server"),Object(n.mdx)("h4",null,"🔙 Backend"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),"cd")," backend\n$ python3 manage.py runserver\n  Starting development server at http://127.0.0.1:8000/"))),Object(n.mdx)("p",null,"Finally, navigate to http://localhost:8000 and you should see a ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Hello, world!")," to signify that your app is now up and running! ⚡"),Object(n.mdx)("h5",null,"🐳 Building with Docker"),Object(n.mdx)("p",null,"We also provide a ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Dockerfile")," for easy containerization and deployment of the backend, all you need to do is:"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ docker build -t ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),"'app:Dockerfile'")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),"."),"\n$ docker run app:Dockerfile"))),Object(n.mdx)("p",null,"The server should be accessible on all network interfaces on the port ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"8000"),". ⏫"),Object(n.mdx)("h4",null,"➡️ Frontend"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"bash"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),"cd")," frontend\n$ ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," start\n  Starting the development server",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),".."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),".."),"\n  The app is running at: http://localhost:3000/"))),Object(n.mdx)("p",null,"And the server should be up and running on http://localhost:3000! 🚀"),Object(n.mdx)("h3",null,"🧹 Linting"),Object(n.mdx)("p",null,"All Python scripts are linted using ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://flake8.pycqa.org"}),"flake8"),". To lint your files, simply install and run the ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"flake8")," command in the project root and it should pick up the configuration automatically. GitHub Actions will automatically check your PR against ",Object(n.mdx)("code",Object.assign({parentName:"p"},{className:"language-text"}),"flake8")," once submitted and provide helpful annotations in case of logical or stylistic errors. ℹ️"),Object(n.mdx)("h3",null,"🔜 What’s next?"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Integrate our service with mentorship providers like Raise.dev and Major League Hacking. 👩‍🏫"),Object(n.mdx)("li",{parentName:"ul"},"Enable recommendation systems and premium curations in partnership with other educational resources. 📚"),Object(n.mdx)("li",{parentName:"ul"},"Set up a forum for many-to-many interactions to speed up learning and make real engagement between people. 💬")),Object(n.mdx)("p",null,"Where we want to be: "),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"A completely unified platform to bring software learners and teachers together - with the best resources possible. 🧑🏿‍🤝‍🧑🏿")),Object(n.mdx)("h3",null,"Results 🏅"),Object(n.mdx)("p",null,"A week later, we got the results for this sprint. Our project came out on the 3rd position!!\nThis was a very exciting moment for me since it was the first time I worked Django and React to this extent. Looking forward to more\nawesome experinces over the coming weeks 🔥"),Object(n.mdx)("p",null,Object(n.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"806px"}}),"\n      ",Object(n.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/blog/static/824dd1239d3f2725b0cbfd2ea44ddf39/31be4/1.jpg",style:{display:"block"},target:"_blank",rel:["noopener"]}),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.37944664031622%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCA//EABYBAQEBAAAAAAAAAAAAAAAAAAMAAf/aAAwDAQACEAMQAAABkcMOVCdl/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAEREwL/2gAIAQEAAQUCSpI2Po0ND//EABYRAQEBAAAAAAAAAAAAAAAAAAASAf/aAAgBAwEBPwGdS//EABcRAAMBAAAAAAAAAAAAAAAAAAABElH/2gAIAQIBAT8BtFrT/8QAGRAAAwADAAAAAAAAAAAAAAAAAAExEEFx/9oACAEBAAY/AtLrKswh/8QAHBAAAgICAwAAAAAAAAAAAAAAAREAITFhEFGB/9oACAEBAAE/IcV+BDQKuwXKFZ2IkoB1N+B//9oADAMBAAIAAwAAABDH/wD/xAAXEQADAQAAAAAAAAAAAAAAAAAAAVFh/9oACAEDAQE/EMhtD//EABcRAQADAAAAAAAAAAAAAAAAAAABYfH/2gAIAQIBAT8QtRgf/8QAHBABAQEAAQUAAAAAAAAAAAAAAREAIUFRYXGR/9oACAEBAAE/ECCEBaAcYuxWYfMBwhPQ55AAak6XDHgnh5z25//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.mdx)("picture",{parentName:"a"},"\n        ",Object(n.mdx)("source",Object.assign({parentName:"picture"},{srcSet:["/blog/static/824dd1239d3f2725b0cbfd2ea44ddf39/6b97b/1.webp 506w","/blog/static/824dd1239d3f2725b0cbfd2ea44ddf39/e94a4/1.webp 806w"],sizes:"(max-width: 806px) 100vw, 806px",type:"image/webp"})),"\n        ",Object(n.mdx)("source",Object.assign({parentName:"picture"},{srcSet:["/blog/static/824dd1239d3f2725b0cbfd2ea44ddf39/a02b1/1.jpg 506w","/blog/static/824dd1239d3f2725b0cbfd2ea44ddf39/31be4/1.jpg 806w"],sizes:"(max-width: 806px) 100vw, 806px",type:"image/jpeg"})),"\n        ",Object(n.mdx)("img",Object.assign({parentName:"picture"},{className:"gatsby-resp-image-image",src:"/blog/static/824dd1239d3f2725b0cbfd2ea44ddf39/31be4/1.jpg",alt:"res",title:"res",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}})),"\n      "),"\n  "),"\n    ")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-29-10-2020-mlh-fellowship-sprint-2-index-mdx-849fce6c5e059feb2ad3.js.map