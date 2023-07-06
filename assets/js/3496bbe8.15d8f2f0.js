"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Using a non-root user"},i=void 0,s={unversionedId:"part-3/section-3",id:"part-3/section-3",title:"Using a non-root user",description:"Let's get back to the youtube-dl application, that we for last time worked with it Part 2.",source:"@site/docs/part-3/section-3.md",sourceDirName:"part-3",slug:"/part-3/section-3",permalink:"/part-3/section-3",draft:!1,editUrl:"https://github.com/docker-hy/docker-hy.github.io/blob/master/docs/part-3/section-3.md",tags:[],version:"current",frontMatter:{title:"Using a non-root user"},sidebar:"materialSidebar",previous:{title:"Deployment pipelines",permalink:"/part-3/section-2"},next:{title:"Optimizing the image size",permalink:"/part-3/section-4"}},p={},l=[{value:"Exercise 3.5",id:"exercise-35",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's get back to the youtube-dl application, that we for last time worked with it ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8000/part-2/1-migrating-to-docker-compose#volumes-in-docker-compose"},"Part 2"),"."),(0,a.kt)("p",null,"The application could, in theory, escape the container due to a bug in Docker or Linux kernel. To mitigate this security issue we will add a non-root user to our container and run our process with that user. Another option would be to map the root user to a high, non-existing user id on the host with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/security/userns-remap/"},"https://docs.docker.com/engine/security/userns-remap/"),", and can be used in case you must use root within the container."),(0,a.kt)("p",null,"The Dockerfile that we did in ",(0,a.kt)("a",{parentName:"p",href:"/part-1/section-4"},"Part 1")," was this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM ubuntu:18.04\n\nWORKDIR /mydir\n\nRUN apt-get update\nRUN apt-get install -y curl python\nRUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl\nRUN chmod a+x /usr/local/bin/youtube-dl\n\nENV LC_ALL=C.UTF-8\n\nENTRYPOINT ["/usr/local/bin/youtube-dl"]\n')),(0,a.kt)("p",null,"We will add an user called ",(0,a.kt)("em",{parentName:"p"},"appuser")," with the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"RUN useradd -m appuser\n")),(0,a.kt)("p",null,"After that we change the user with the directive ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/#user"},"USER")," - so all commands after this line will be executed as our new user, including the ",(0,a.kt)("inlineCode",{parentName:"p"},"CMD")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM ubuntu:18.04\n\nWORKDIR /usr/videos\n\nENV LC_ALL=C.UTF-8\n\nRUN apt-get update\nRUN apt-get install -y curl python\nRUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl\nRUN chmod a+x /usr/local/bin/youtube-dl\nRUN useradd -m appuser\n\nUSER appuser\n\nENTRYPOINT ["/usr/local/bin/youtube-dl"]\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"WORKDIR")," is renamed to /usr/videos since it makes more sense as the videos will be downloaded there. When we run this image without bind mounting our local directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ docker container run youtube-dl https://imgur.com/JY5tHqr\n\n  [Imgur] JY5tHqr: Downloading webpage\n  [download] Destination: Imgur-JY5tHqr.mp4\n  [download] 100% of 190.20KiB in 00:0044MiB/s ETA 00:000\n  ERROR: unable to open for writing: [Errno 13] Permission denied: 'Imgur-JY5tHqr.mp4.part'\n")),(0,a.kt)("p",null,"We'll see that our ",(0,a.kt)("inlineCode",{parentName:"p"},"appuser")," user can not write to ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/videos")," - this can be fixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"chown")," or not fix it at all, if the intented usage is to always have a ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/videos")," mounted from the host. By mounting the directory the application works as intended."),(0,a.kt)("p",null,"If we want to give the  ",(0,a.kt)("inlineCode",{parentName:"p"},"appuser")," permission to write inside the container, the permission change must be done when we are still executing as root, that is, before the directive ",(0,a.kt)("inlineCode",{parentName:"p"},"USER")," is used to change the user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM ubuntu:18.04\n\n# ...\n\n# create the appuser\nRUN useradd -m appuser\n\n# change the owner of current dir to appuser\nRUN chown appuser .\n\n# now we can change the user\nUSER appuser\n\nENTRYPOINT ["/usr/local/bin/youtube-dl"]\n')),(0,a.kt)("h2",{id:"exercise-35"},"Exercise 3.5"),(0,a.kt)("admonition",{title:"Mandatory Exercise 3.5",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"  In exercises ",(0,a.kt)("a",{parentName:"p",href:"/part-1/section-6#exercises-111-114"},"1.12")," and ",(0,a.kt)("a",{parentName:"p",href:"/part-1/section-6#exercises-111-114"},"1.13")," we created Dockerfiles for both example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/docker-hy/material-applications/tree/main/example-frontend"},"frontend")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/docker-hy/material-applications/tree/main/example-backend"},"backend"),"."),(0,a.kt)("p",{parentName:"admonition"},"  Security issues with the user being a root are serious for the example frontend and backend as the containers for web services are supposed to be accessible through the Internet."),(0,a.kt)("p",{parentName:"admonition"},"  Make sure the containers start their processes as a non-root user."),(0,a.kt)("p",{parentName:"admonition"},"  Backend image is based on ",(0,a.kt)("a",{parentName:"p",href:"https://www.alpinelinux.org/"},"Alpine Linux"),", that does not support the command ",(0,a.kt)("inlineCode",{parentName:"p"},"useradd"),". Google will surely help you a way to create user in an ",(0,a.kt)("inlineCode",{parentName:"p"},"alpine")," based image."),(0,a.kt)("p",{parentName:"admonition"},"  Submit the Dockerfiles.")))}d.isMDXComponent=!0}}]);