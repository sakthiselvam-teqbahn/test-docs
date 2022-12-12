"use strict";(self.webpackChunktilli_docs=self.webpackChunktilli_docs||[]).push([[7895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(r),d=s,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(7462),s=(r(7294),r(3905));const i={id:"OpensourceQAProcess"},o="Opensource Quality Assuarance Process",a={unversionedId:"OpensourceQAProcess",id:"OpensourceQAProcess",title:"Opensource Quality Assuarance Process",description:"Tilli\u2019s Quality Assurance Process comprises 8 major steps.",source:"@site/docs/OpensourceQAProcess.md",sourceDirName:".",slug:"/OpensourceQAProcess",permalink:"/test-docs/docs/OpensourceQAProcess",draft:!1,tags:[],version:"current",frontMatter:{id:"OpensourceQAProcess"},sidebar:"tutorialSidebar",previous:{title:"OS Strategy",permalink:"/test-docs/docs/os-strategy"},next:{title:"Contribution Guidelines",permalink:"/test-docs/docs/Contribution-Guidelines"}},l={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"opensource-quality-assuarance-process"},"Opensource Quality Assuarance Process"),(0,s.kt)("p",null,"Tilli\u2019s Quality Assurance Process comprises 8 major steps. "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Product Development "),(0,s.kt)("p",{parentName:"li"},"The Development team of Tilli will, first, develop the application as per the requirements and feedback from the community. ")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Product Release"),(0,s.kt)("p",{parentName:"li"},"After the development is completed, the applications will be released and will also be updated in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tillioss"},"repositories of Tilli."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"User testing "),(0,s.kt)("p",{parentName:"li"},"Product testing will be conducted. For Unit Testing, ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," is used to ensure the correctness of the codebase. Similarly, Manual User Acceptance Testing has been conducted. The Users and Developers are encouraged to test the application to detect bugs and issues.",(0,s.kt)("a",{parentName:"p",href:"https://coveralls.io/"}," Coveralls")," is being used to test the code coverage. ")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Bugs Detection"),(0,s.kt)("p",{parentName:"li"},"From the User Testing, Unit Testing, and UAT, Bugs will be detected. Moreover, we encourage our users to get involved in identifying the bugs."))),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Bugs Reporting "),(0,s.kt)("p",{parentName:"li"},"The users and developers can update any issues/ bugs in our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tillioss/tilli-web-app/issues"},"Tilli Issue Board"),". Developers needs to report the bugs/ issue as per the labels. Here is the list of ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tillioss/tilli-web-app/labels"},"available labels")," on our project board. In case you want to propose a new feature or you have any questions, feel free to create a new issue in the respective template. ")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Bugs Verification "),(0,s.kt)("p",{parentName:"li"},"With the help of our users, developers, and contributor from around the globe, numerous bugs reported, enlisted in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tillioss/tilli-web-app/issues"},"Tilli Issue Board"),", will be verified by the team of Tilli. ")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Verified Bugs Collection"),(0,s.kt)("p",{parentName:"li"},"After validating the bugs with different parameters, verified bugs will be enlisted for the fixes. ")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Bug fixes"),(0,s.kt)("p",{parentName:"li"},"The development team along with the contributors will work on fixing the bugs. After the fixes, The product will be released. For the releases, you can go to the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tillioss/tilli-web-app/releases"},"Tilli Release Note"),". "),(0,s.kt)("p",{parentName:"li"}," ",(0,s.kt)("em",{parentName:"p"},"In this way, the iteration of this QA process will continue in Tilli.")))))}u.isMDXComponent=!0}}]);