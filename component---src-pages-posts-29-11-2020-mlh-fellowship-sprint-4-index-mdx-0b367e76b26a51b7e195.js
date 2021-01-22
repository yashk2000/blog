(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{uba3:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return o}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var n=a("7ljp");var i={path:"/mlh-fellowship-fall-2020-sprint-4",date:"2020-11-29T15:44:31.723Z",title:"MLH Fellowship(Fall 2020): Sprint 4",featuredImage:"./header.jpeg",headerImage:"./featured.jpeg",tags:["mlh","fellowship","Major League Hacking"],excerpt:"MLH Fellowship, Explorer Track: Sprint 4"},s={_frontmatter:i};function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.mdx)("wrapper",Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("p",null,Object(n.mdx)("img",Object.assign({parentName:"p"},{src:"https://socialify.git.ci/yashk2000/SneakySketchers/image?description=1&descriptionEditable=Make%20your%20almost%20perfect%20photos%2C%20perfect!&font=Source%20Code%20Pro&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark",alt:"SneakySketchers"}))),Object(n.mdx)("p",null,"So we’re done with the 4th sprint of the MLH Fellowship. This time the theme was ML/AI/Data Science. So what did we build?"),Object(n.mdx)("h2",null,"🖼️ Sneaky Sketchers"),Object(n.mdx)("h3",null,"🙋 What is Sneaky Sketchers?"),Object(n.mdx)("p",null,"Have you ever taken a photo in which there is some unneeded object in the background, ever taken a photo and someone just walked behind you, and now you feel the photo is not as good as it could have been? 📷 "),Object(n.mdx)("p",null,"If so, worry not! This desktop application allows you to select the areas in a photo you want to remove by drawing on them. Once you’re done, the app will erase the objects you drew on, and generate a new photo which would look as if those obejcts were never present! 🔥"),Object(n.mdx)("p",null,"You can also use this application for having some fun. Ever wondered how you would look without a moustache, or with spectacles? Or wondered how your face would like with different features? Well draw over your face, and let the app do the magic! 👦 👧"),Object(n.mdx)("h3",null,"💻 What did we use?"),Object(n.mdx)("p",null,"Sneaky Sketchers is built completely in ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.python.org/"}),"Python"),". We have created ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://jupyter.org/"}),"Jupyter Notebooks")," on ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://colab.research.google.com/"}),"Google Colab")," to train our models and the desktop app is built using ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://pypi.org/project/PyQt5/"}),"PyQt5")," 🐍"),Object(n.mdx)("h3",null,"Installation"),Object(n.mdx)("p",null,"For setting up the desktop app, head over ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/yashk2000/SneakySketchers/tree/main/application"}),"here"),"."),Object(n.mdx)("h3",null,"Video instructions for using the application 🎥"),Object(n.mdx)("p",null,"Click on the image below to view a video of how to use the application. "),Object(n.mdx)("div",{align:"center"},"\n    ",Object(n.mdx)("a",Object.assign({parentName:"div"},{href:"https://youtu.be/yhbVQI32spE"}),Object(n.mdx)("img",Object.assign({parentName:"a"},{src:"https://user-images.githubusercontent.com/41234408/99115100-eac7d480-2617-11eb-96c1-86f52501cb6e.png",width:720,height:420,alt:"Sneaky Sketchers"})),"\n    ")),Object(n.mdx)("h3",null,"🪜 Folder Struture"),Object(n.mdx)("p",null,"Each folder has it’s own dedicated readme on what it’s contents do, how to set them up and use them. "),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/yashk2000/SneakySketchers/tree/main/InPainting%20Notebook"}),Object(n.mdx)("code",Object.assign({parentName:"a"},{className:"language-text"}),"InPainting Notebook")),": This folder contains the jupyter notebook we trained on Google Colab. "),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/yashk2000/SneakySketchers/tree/main/application"}),Object(n.mdx)("code",Object.assign({parentName:"a"},{className:"language-text"}),"application")),": This folder contains the main PyQt5 desktop application.  "),Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/yashk2000/SneakySketchers/tree/main/inpainting"}),Object(n.mdx)("code",Object.assign({parentName:"a"},{className:"language-text"}),"inpainting")),": This folder contains python scripts that can be used for training a model, or making predictions. They can directly be imported into your own project. ")),Object(n.mdx)("h3",null,"Model Architechture"),Object(n.mdx)("p",null,"We have used the technique for ",Object(n.mdx)("strong",{parentName:"p"},"partial convolutions")," for performing image inpainting and training the model. This is a PyTorch implementation of “Image Inpainting for Irregular Holes Using Partial Convolutions”, ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://arxiv.org/abs/1804.07723"}),"https://arxiv.org/abs/1804.07723"),"\nby Guilin Liu, Fitsum A. Reda, Kevin J. Shih, Ting-Chun Wang, Andrew Tao and Bryan Catanzaro from NVIDIA. "),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"Partial Convolution Layer")),Object(n.mdx)("p",null,"The key element here is ofcourse the partial convolutional layer. Basically, given the convolutional filter ",Object(n.mdx)("strong",{parentName:"p"},"W")," and the corresponding bias ",Object(n.mdx)("em",{parentName:"p"},"b"),", the following partial convolution is applied instead of a normal convolution:"),Object(n.mdx)("img",{src:"https://raw.githubusercontent.com/MathiasGruber/PConv-Keras/master/data/images/eq1.PNG"}),Object(n.mdx)("p",null,"where ⊙ is element-wise multiplication and ",Object(n.mdx)("strong",{parentName:"p"},"M")," is a binary mask of 0s and 1s. Importantly, after each partial convolution, the mask is also updated, so that if the convolution was able to condition its output on at least one valid input, then the mask is removed at that location, i.e."),Object(n.mdx)("img",{src:"https://raw.githubusercontent.com/MathiasGruber/PConv-Keras/master/data/images/eq2.PNG"}),Object(n.mdx)("p",null,"The result of this is that with a sufficiently deep network, the mask will eventually be all ones (i.e. disappear)"),Object(n.mdx)("h3",null,"UNet Architecture"),Object(n.mdx)("p",null,"The architechture essentially it’s based on a UNet-like structure, where all normal convolutional layers are replace with partial convolutional layers, such that in all cases the image is passed through the network alongside the mask."),Object(n.mdx)("img",{src:"https://raw.githubusercontent.com/MathiasGruber/PConv-Keras/master/data/images/architecture.png"}),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"The loss function")),Object(n.mdx)("p",null,"This technique uses quite an intense loss function. The highlights of it are:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"Per-pixel losses both for maskes and un-masked regions"),Object(n.mdx)("li",{parentName:"ul"},"Perceptual loss based on ImageNet pre-trained VGG-16 (",Object(n.mdx)("em",{parentName:"li"},"pool1, pool2 and pool3 layers"),")"),Object(n.mdx)("li",{parentName:"ul"},"Style loss on VGG-16 features both for predicted image and for computed image (non-hole pixel set to ground truth)"),Object(n.mdx)("li",{parentName:"ul"},"Total variation loss for a 1-pixel dilation of the hole region")),Object(n.mdx)("p",null,"The weighting of all these loss terms are as follows:"),Object(n.mdx)("img",{src:"https://raw.githubusercontent.com/MathiasGruber/PConv-Keras/master/data/images/eq7.PNG"}),Object(n.mdx)("p",null,Object(n.mdx)("strong",{parentName:"p"},"VGG16 model for feature extraction")),Object(n.mdx)("p",null,"The authors of the paper used PyTorch to implement the model. The VGG16 model was chosen for feature extraction. The ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://pytorch.org/docs/stable/torchvision/models.html"}),"VGG16 model in PyTorch")," was trained with the following image pre-processing:\n1. Divide the image by 255,\n2. Subtract ","[0.485, 0.456, 0.406]"," from the RGB channels, respectively,\n3. Divide the RGB channels by ","[0.229, 0.224, 0.225]",", respectively."),Object(n.mdx)("h3",null,"🕒 Training Time"),Object(n.mdx)("p",null,"The paper which we referred to has trained the model on 3 different datasets, for a period of 14 days. Where as with the resources we had(thanks to Google Colab), we just trained our model on a subset of the Places2 dataset for one night. Based on this limited amount of training, the model does not match the performance given by the original implementation, but it does a pretty good job. In future, should we get the time and resources to train the model completely, we would be able to improve our model a lot.  "),Object(n.mdx)("p",null,"Our model can be downloaded from ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://drive.google.com/file/d/1_J-NgecLjU9PDvkmnJAo7-ghcQuqia2N/view?usp=sharing"}),"here"),"."),Object(n.mdx)("h3",null,"📷 How the desktop app looks"),Object(n.mdx)("table",null,Object(n.mdx)("thead",{parentName:"table"},Object(n.mdx)("tr",{parentName:"thead"},Object(n.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(n.mdx)("img",Object.assign({parentName:"th"},{src:"https://user-images.githubusercontent.com/41234408/99120923-b6591600-2621-11eb-8995-4ba92802416c.png",alt:"Screenshot_20201114_023136"}))),Object(n.mdx)("th",Object.assign({parentName:"tr"},{align:null}),Object(n.mdx)("img",Object.assign({parentName:"th"},{src:"https://user-images.githubusercontent.com/41234408/99120920-b48f5280-2621-11eb-8f48-c6a9b5c6df5b.png",alt:"Screenshot_20201114_023152"}))))),Object(n.mdx)("tbody",{parentName:"table"},Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"PyQt App"),Object(n.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Loading an image")),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.mdx)("img",Object.assign({parentName:"td"},{src:"https://user-images.githubusercontent.com/41234408/99121621-ba396800-2622-11eb-9526-f57f67ebd687.png",alt:"gg"}))),Object(n.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.mdx)("img",Object.assign({parentName:"td"},{src:"https://user-images.githubusercontent.com/41234408/99121620-b9083b00-2622-11eb-829e-499da1a7a449.png",alt:"gg1"})))),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Original"),Object(n.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Inpainted")),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.mdx)("img",Object.assign({parentName:"td"},{src:"https://user-images.githubusercontent.com/41234408/99121719-ea810680-2622-11eb-9316-f8ab7fef7888.png",alt:"ff"}))),Object(n.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.mdx)("img",Object.assign({parentName:"td"},{src:"https://user-images.githubusercontent.com/41234408/99121713-e8b74300-2622-11eb-87b8-823935ecf182.png",alt:"ff2"})))),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Original"),Object(n.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Inpainted")),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.mdx)("img",Object.assign({parentName:"td"},{src:"https://user-images.githubusercontent.com/41234408/99121752-fc62a980-2622-11eb-92eb-e806539e4492.png",alt:"ee"}))),Object(n.mdx)("td",Object.assign({parentName:"tr"},{align:null}),Object(n.mdx)("img",Object.assign({parentName:"td"},{src:"https://user-images.githubusercontent.com/41234408/99121748-fa98e600-2622-11eb-942c-b3a5978a69c6.png",alt:"ee1"})))),Object(n.mdx)("tr",{parentName:"tbody"},Object(n.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Original"),Object(n.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Inpainted")))),Object(n.mdx)("h3",null,"What’s next?"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"A web version of the application with a lighter model. "),Object(n.mdx)("li",{parentName:"ul"},"A better UI for the desktop app"),Object(n.mdx)("li",{parentName:"ul"},"Training the model further to improve it’s performance. ")),Object(n.mdx)("h3",null,"📜 License"),Object(n.mdx)("p",null,"This project is released under a free and open-source software license, Apache License 2.0 or later (",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"LICENSE"}),"LICENSE")," or ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.apache.org/licenses/LICENSE-2.0"}),"https://www.apache.org/licenses/LICENSE-2.0"),"). The documentation is also released under a free documentation license, namely the ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gnu.org/licenses/fdl-1.3.en.html"}),"GFDL v1.3")," license or later."),Object(n.mdx)("h3",null,"🖊️ Contributions"),Object(n.mdx)("p",null,"Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be licensed as above, without any additional terms or conditions."),Object(n.mdx)("h3",null,"Resources"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/MathiasGruber/PConv-Keras"}),"https://github.com/MathiasGruber/PConv-Keras")),Object(n.mdx)("li",{parentName:"ul"},"“Image Inpainting for Irregular Holes Using Partial Convolutions”, ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"https://arxiv.org/abs/1804.07723"}),"https://arxiv.org/abs/1804.07723"))),Object(n.mdx)("h3",null,"Results 💀"),Object(n.mdx)("p",null,"2 weeks later, we had the twitch live stream and got the results. Our team came second in the global finale! 🔥🔥"),Object(n.mdx)("p",null,Object(n.mdx)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}}),"\n      ",Object(n.mdx)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/blog/static/380bcda592f9d8790205d3c9092c318f/eea4a/1.jpg",style:{display:"block"},target:"_blank",rel:["noopener"]}),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.533596837944664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAwT/2gAMAwEAAhADEAAAAeRQtMNCQf/EABgQAQADAQAAAAAAAAAAAAAAAAEAERIQ/9oACAEBAAEFAgGZLTLL5//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAMAAwAAAAAAAAAAAAAAAAABESBBcf/aAAgBAQAGPwLS6SomH//EABkQAQEBAAMAAAAAAAAAAAAAAAEAESFhgf/aAAgBAQABPyHjPZSB0dluoJbVt//aAAwDAQACAAMAAAAQdD//xAAWEQADAAAAAAAAAAAAAAAAAAAAASH/2gAIAQMBAT8QHXD/xAAXEQADAQAAAAAAAAAAAAAAAAAAASER/9oACAECAQE/ENFFT//EABsQAQACAwEBAAAAAAAAAAAAAAEAESFhoTFB/9oACAEBAAE/EA1KmcAeRACd4cl4CvE+kYqmbIJBXKT/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.mdx)("picture",{parentName:"a"},"\n        ",Object(n.mdx)("source",Object.assign({parentName:"picture"},{srcSet:["/blog/static/380bcda592f9d8790205d3c9092c318f/6b97b/1.webp 506w","/blog/static/380bcda592f9d8790205d3c9092c318f/2dbb9/1.webp 1012w","/blog/static/380bcda592f9d8790205d3c9092c318f/af3f0/1.webp 1280w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"})),"\n        ",Object(n.mdx)("source",Object.assign({parentName:"picture"},{srcSet:["/blog/static/380bcda592f9d8790205d3c9092c318f/a02b1/1.jpg 506w","/blog/static/380bcda592f9d8790205d3c9092c318f/50055/1.jpg 1012w","/blog/static/380bcda592f9d8790205d3c9092c318f/eea4a/1.jpg 1280w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/jpeg"})),"\n        ",Object(n.mdx)("img",Object.assign({parentName:"picture"},{className:"gatsby-resp-image-image",src:"/blog/static/380bcda592f9d8790205d3c9092c318f/eea4a/1.jpg",alt:"winning",title:"winning",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}})),"\n      "),"\n  "),"\n    ")),Object(n.mdx)("h3",null,"Project link 📶"),Object(n.mdx)("p",null,"If you are interest in checking out the project, you can checkout the follwing links:"),Object(n.mdx)("ul",null,Object(n.mdx)("li",{parentName:"ul"},"GitHub repo: ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/yashk2000/SneakySketchers"}),"https://github.com/yashk2000/SneakySketchers")),Object(n.mdx)("li",{parentName:"ul"},"For contributors: ",Object(n.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/yashk2000/SneakySketchers#man_technologist-how-do-i-contribute"}),"https://github.com/yashk2000/SneakySketchers#man_technologist-how-do-i-contribute"))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-posts-29-11-2020-mlh-fellowship-sprint-4-index-mdx-0b367e76b26a51b7e195.js.map