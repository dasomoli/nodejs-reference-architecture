"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[804],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1987:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},p="Authentication",c={unversionedId:"functional-components/auth",id:"functional-components/auth",isDocsHomePage:!1,title:"Authentication",description:"Recommended Components",source:"@site/docs/functional-components/auth.md",sourceDirName:"functional-components",slug:"/functional-components/auth",permalink:"/nodejs-reference-architecture/functional-components/auth",editUrl:"https://github.com/nodeshift/nodejs-reference-architecture/docs/functional-components/auth.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"REST APIs Development",permalink:"/nodejs-reference-architecture/functional-components/apifirst"},next:{title:"Data Caching",permalink:"/nodejs-reference-architecture/functional-components/data-caching"}},l=[{value:"Recommended Components",id:"recommended-components",children:[]},{value:"Guidance",id:"guidance",children:[]},{value:"Learning Resources",id:"learning-resources",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication"},"Authentication"),(0,i.kt)("h2",{id:"recommended-components"},"Recommended Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Passport - ",(0,i.kt)("a",{parentName:"p",href:"http://www.passportjs.org/"},"http://www.passportjs.org/"),"\nPassport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. Is based on strategies which allows for a large number of integrations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"HelmetJS - ",(0,i.kt)("a",{parentName:"p",href:"https://helmetjs.github.io/"},"https://helmetjs.github.io/"),"\nHelmet helps you secure your Express apps by setting various HTTP headers. It\u2019s not a silver bullet, but it can help!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IBM Cloud AppID ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/appid"},"https://cloud.ibm.com/docs/services/appid"),"\nApp ID helps developers to easily add authentication to their web and mobile apps with few lines of code, and secure their Cloud-native applications and services on IBM Cloud.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Istio - ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/"},"https://istio.io/"),"\nIstio provides a service mesh, includes security features ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/docs/tasks/security/"},"https://istio.io/docs/tasks/security/"),"\nIBM provides an Istio Adapter for App Identity and Access ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/docs/reference/config/policy-and-telemetry/adapters/app-identity-access-adapter/"},"https://istio.io/docs/reference/config/policy-and-telemetry/adapters/app-identity-access-adapter/")))),(0,i.kt)("h2",{id:"guidance"},"Guidance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use Helmet to configure http headers to address security attacks.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use Passport to handle your web strategy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use a web strategy based on AppID whenever possible.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There is a difference between a WebApp/BFF(Backend for Frontend) and a pure Backend API that never deals with a Frontend like a Web Browser. Knowning this difference will help you understand the requirements in terms of security.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A Frontend WebApp should never handle end user credentials such as username/password, it should always delegate to an Authorization Server for example AppID service. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ibm-cloud-security/appid-video-tutorials/blob/master/02a-simple-node-web-app/app.js"},"https://github.com/ibm-cloud-security/appid-video-tutorials/blob/master/02a-simple-node-web-app/app.js"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A pure Backend API that never deals with a fronted should never be concern of redirecting or dealing with end users, they would require an access/AOI token or assume the proxy/gateway in front is already handling this and not require token at all. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ibm-cloud-security/appid-video-tutorials/blob/master/02b-simple-node-backend-app/app.js"},"https://github.com/ibm-cloud-security/appid-video-tutorials/blob/master/02b-simple-node-backend-app/app.js"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The browser/client should never have access to access token.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Authorization Server will interact with the user and once is authenticated it will return to the browser with a grant code, which in turn can be used by the Web App request an access token. With this access token the WebApp can access a Backend API for a resource.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the refresh token whenever possible, this avoids re-authentication.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Do not use OAUTH2 implicit grant (",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6749#section-4.2"},"https://tools.ietf.org/html/rfc6749#section-4.2"),"), instead use the Authorization code workflow (",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6749#section-4.1"},"https://tools.ietf.org/html/rfc6749#section-4.1"),") whenever possible.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use OIDC ID token for authentication, they are represented as JSON Web Token (JWT) and it contains the requested claims.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When using Istio:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Istio Adapter for AppID can handle the authentication and authorization of the client, this leaves the nodejs service without the responsibilities of handling authentication or authorization. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ibm-cloud-security/app-identity-and-access-adapter"},"https://github.com/ibm-cloud-security/app-identity-and-access-adapter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using Istio you can handle authorization based on roles for the nodejs service, for example all authenticated users can read data via http method GET, but only users with ",(0,i.kt)("inlineCode",{parentName:"p"},"role=admin")," are allowed to write data via http method POST."))))),(0,i.kt)("h2",{id:"learning-resources"},"Learning Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ndlk-ZhKGXM&list=PLbAYXkuqwrX2WLQqR0LUtjT77d4hisvfK&index=2"},"Technologies Under the Hood (OAuth2, OIDC, JWT, Bearer Token)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=6roa1ZOvwtw&list=PLbAYXkuqwrX2WLQqR0LUtjT77d4hisvfK&index=3"},"Protecting Node.js Web Applications with IBM Cloud App ID"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=jJLSgkHpZwA&list=PLbAYXkuqwrX2WLQqR0LUtjT77d4hisvfK&index=4"},"Protecting Node.js Backend Application with IBM Cloud App ID")))))}d.isMDXComponent=!0}}]);