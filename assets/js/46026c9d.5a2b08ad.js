"use strict";(self.webpackChunkgolioth_developer_training=self.webpackChunkgolioth_developer_training||[]).push([[773],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(i),h=o,v=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return i?n.createElement(v,r(r({ref:t},d),{},{components:i})):n.createElement(v,r({ref:t},d))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},8193:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>h,toc:()=>m});var n=i(7462),o=(i(7294),i(3905));const a={toc:[{value:"Step 1: Project name",id:"step-1-project-name",level:3},{value:"Step 2: Device name",id:"step-2-device-name",level:3},{value:"Step 3: Device credentials",id:"step-3-device-credentials",level:3}]};function r(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To begin using Golioth please register for an account at ",(0,o.kt)("a",{parentName:"p",href:"https://console.golioth.io/"},"console.golioth.io"),"."),(0,o.kt)("p",null,"Once registered, you can review our terms of service and continue to the Wizard that guides you through provisioning your first device."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Golioth Console hardware provisioning wizard",src:i(8099).Z,width:"1590",height:"635"})),(0,o.kt)("h3",{id:"step-1-project-name"},"Step 1: Project name"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enter a Project Name of your choosing")),(0,o.kt)("h3",{id:"step-2-device-name"},"Step 2: Device name"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enter a human-readable Device Name")),(0,o.kt)("h3",{id:"step-3-device-credentials"},"Step 3: Device credentials"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Identity of this device is automatically populated from the device name with ",(0,o.kt)("inlineCode",{parentName:"li"},"-id")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"@project-name")," appended"),(0,o.kt)("li",{parentName:"ul"},"A Pre-Shared Key (PSK) is automatically generated. This is a password that will authenticate this device to the Golioth Cloud")),(0,o.kt)("p",null,"It really is that simple, you have provisioned your first device! Let's provision a second device to get to know the console just a bit better."))}r.isMDXComponent=!0;const l={toc:[{value:"Create a new device",id:"create-a-new-device",level:2},{value:"1. Device name",id:"1-device-name",level:3},{value:"2. Tags, Blueprints, and hardware ID",id:"2-tags-blueprints-and-hardware-id",level:3},{value:"3. Generate Credentials",id:"3-generate-credentials",level:3},{value:"New device summary",id:"new-device-summary",level:2}]};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's use the Golioth Console to create a new device."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Golioth Console device view",src:i(6143).Z,width:"1920",height:"914"})),(0,o.kt)("p",null,"In the center at the top of the console widow the currently selected project is\nshown. On the left sidebar we can use the Devices option to list this project's\ndevices. Here we see the device that was created by the quickstart wizard."),(0,o.kt)("h2",{id:"create-a-new-device"},"Create a new device"),(0,o.kt)("p",null,"Click the Create button in the upper right to create a new device."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dialog for creating new devices",src:i(7205).Z,width:"586",height:"632"})),(0,o.kt)("h3",{id:"1-device-name"},"1. Device name"),(0,o.kt)("p",null,"Enter a name for your device"),(0,o.kt)("h3",{id:"2-tags-blueprints-and-hardware-id"},"2. Tags, Blueprints, and hardware ID"),(0,o.kt)("p",null,"There are three optional values that we are not setting for this example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tags:")," Group different types of devices together with your project"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Blueprints:")," A designator used to identify device types for Over-the-Air\nupdates (OTA)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hardware ID:")," A unique hardware ID that you can choose to set to meet your\nproject's needs (MAC address, serial number, etc.)")),(0,o.kt)("h3",{id:"3-generate-credentials"},"3. Generate Credentials"),(0,o.kt)("p",null,"By default, a PSK-ID and PSK will be automatically generated for this device.\nIf you wish to set these manually, you may choose that option from the dropdown\nmenu."),(0,o.kt)("h2",{id:"new-device-summary"},"New device summary"),(0,o.kt)("p",null,"After clicking save, your device is created and a new device summary is displayed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New device summary window",src:i(7805).Z,width:"510",height:"449"})),(0,o.kt)("p",null,"Click the Go to Device Management button and continue to the next page of this\nguide."))}s.isMDXComponent=!0;const c={toc:[{value:"Retrieving Device Credentials",id:"retrieving-device-credentials",level:3}]};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To connect to the Golioth Cloud, we need to pass the newly created credentials\nto the hardware device."),(0,o.kt)("h3",{id:"retrieving-device-credentials"},"Retrieving Device Credentials"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Device details now includes device credentials",src:i(6717).Z,width:"1350",height:"229"})),(0,o.kt)("p",null,"To access device credentials, select the Credentials tab from the device view\nin the Golioth Console. The PSK-ID and PSK (the Identity and the Pre Shared\nKey) are what your device needs to authenticate and connect to the Golioth\nCloud. You can always return to this panel in the device details to retrieve\nthese values."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When a device credential ID is automatically assigned it follows this\nformat: GMT timestamp, the name of the device, and the name of the project. If\nyou prefer shorter device IDs, you may want to choose the ID yourself. By\nconvention, all device credential IDs will end with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," symbol followed by\nthe project name.")),(0,o.kt)("p",null,"Congratulations, you're ready to move on to selecting hardware!"))}d.isMDXComponent=!0;const u={sidebar_position:3},p="Console Signup and Exploration",h={unversionedId:"golioth-intro/signup",id:"golioth-intro/signup",title:"Console Signup and Exploration",description:"This section includes references to the Golioth docs site. We are linking you there so you have the most up-to-date directions on getting started with the Golioth Cloud. Once you have completed a section, you will come back to this page for further instructions.",source:"@site/docs/golioth-intro/signup.md",sourceDirName:"golioth-intro",slug:"/golioth-intro/signup",permalink:"/docs/golioth-intro/signup",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Training Requirements",permalink:"/docs/golioth-intro/requirements"},next:{title:"Golioth Exercises",permalink:"/docs/golioth-exercises/"}},v={},m=[{value:"Learning Objectives",id:"learning-objectives",level:2},{value:"Desired Outcome",id:"desired-outcome",level:3},{value:"Time Estimate",id:"time-estimate",level:3},{value:"Signup and Provision your first device",id:"signup-and-provision-your-first-device",level:2},{value:"Manage Devices",id:"manage-devices",level:2},{value:"Authorize Devices",id:"authorize-devices",level:2},{value:"Additional exercises",id:"additional-exercises",level:2}],g={toc:m};function f(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"console-signup-and-exploration"},"Console Signup and Exploration"),(0,o.kt)("p",null,"This section includes references to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.golioth.io/"},"the Golioth docs site"),". We are linking you there so you have the most up-to-date directions on getting started with the Golioth Cloud. Once you have completed a section, you will come back to this page for further instructions."),(0,o.kt)("h2",{id:"learning-objectives"},"Learning Objectives"),(0,o.kt)("p",null,"This section is to get you signed up with a Golioth account, which is required for getting credentials so your device can authenticate to Golioth and later accessing device data on the Console. There is a 'wizard' that will guide you through creating your first device on the platform."),(0,o.kt)("h3",{id:"desired-outcome"},"Desired Outcome"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Understand how to add a single device to the console"),(0,o.kt)("li",{parentName:"ul"},"Be able to access the credentials for use on your device.")),(0,o.kt)("h3",{id:"time-estimate"},"Time Estimate"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"5 minutes")),(0,o.kt)("h2",{id:"signup-and-provision-your-first-device"},"Signup and Provision your first device"),(0,o.kt)(r,{mdxType:"GoliothRegister"}),(0,o.kt)("h2",{id:"manage-devices"},"Manage Devices"),(0,o.kt)(s,{mdxType:"GoliothManage"}),(0,o.kt)("h2",{id:"authorize-devices"},"Authorize Devices"),(0,o.kt)(d,{mdxType:"GoliothAuthorize"}),(0,o.kt)("h2",{id:"additional-exercises"},"Additional exercises"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Create a "fleet" of 5 devices with unique credentials for each.'),(0,o.kt)("li",{parentName:"ul"},"See how the menus are set up and what features exist on the Golioth ",(0,o.kt)("a",{parentName:"li",href:"https://console.golioth.io"},"Console"),"."),(0,o.kt)("li",{parentName:"ul"},'Attempt to add a "tag" and a "blueprint" to your ',(0,o.kt)("a",{parentName:"li",href:"https://console.golioth.io"},"Console"),".")))}f.isMDXComponent=!0},7805:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/gettingstarted-console-createdevice-confirmation-0514acf1de54cb53f190185e177da390.png"},7205:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/gettingstarted-console-createdevice-26e740e60f6947dadfcdd4aa1f779e07.png"},6143:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/gettingstarted-console-devices-935af4079ad71ae48835e8ecede91c2d.png"},6717:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/gettingstarted-console-deviceview-credentialspanel-72c9bca3eb35fe282af5aad2aa526242.png"},8099:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/gettingstarted-console-wizard-6d195e2444cc9540d29351e4b0242375.png"}}]);