"use strict";(self.webpackChunkgolioth_developer_training=self.webpackChunkgolioth_developer_training||[]).push([[315],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7462),o=a(7294),i=a(6010),l=a(2389),r=a(7392),s=a(7094),p=a(2466);const d="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:u,groupId:h,className:g}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=u??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,r.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==w&&!k.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,s.U)(),[N,T]=(0,o.useState)(w),x=[],{blockElementScrollPositionUntilNextRender:D}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&k.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=x.indexOf(t),n=k[a].value;n!==N&&(D(t),T(n),null!=h&&v(h,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},g)},k.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:C,onFocus:O,onClick:O},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,o.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,l.Z)();return o.createElement(c,(0,n.Z)({key:String(t)},e))}},7009:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(7462),o=(a(7294),a(3905));const i={toc:[]};function l(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show me how to download from Kasm"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"How to download binaries from Kasm",src:a(1403).Z,width:"1216",height:"745"})),(0,o.kt)("p",null,"Because Kasm is a virtual machine running in the cloud, we can not directly program the MagTag connected to your local machine. Instead, we will download the binary so that your local machine can program that file to the MagTag in the next step."),(0,o.kt)("p",null,"The filename includes the folder name of the app you built, along with a\ntimestamp. So your download will look something like this:\n",(0,o.kt)("inlineCode",{parentName:"p"},"merged_golioth-demo_213729.bin"),"."),(0,o.kt)("p",null,'The image above shows the left sidebar menu of Kasm with the Download widget selected. Click the "DOWNLOAD" button next to the ',(0,o.kt)("inlineCode",{parentName:"p"},"merged_<appfolder>_<hhmmss>.bin")," file to download your recently compiled code.")))}l.isMDXComponent=!0},873:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(7462),o=(a(7294),a(3905)),i=a(5488),l=a(5162);const r={toc:[]};function s(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},r,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the USB cable to plug the MagTag into your local computer. Ensure the\npower switch is in the 'On' position.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Put the MagTag into DFU bootloader mode"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Hold down the Boot0 button")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press and release the Reset button"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"MagTag Boot0 and Reset buttons",src:a(8606).Z,width:"1000",height:"643"})))))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the flash command on your local machine:"),(0,o.kt)(i.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux/MacOS",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd ~/Downloads\nesptool.py --chip esp32s2 --port /dev/ttyACM0 write_flash 0x0 merged_<appfolder>_<hhmmss>.bin\n"))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd %HOMEPATH%/Downloads\npython -m esptool --chip esp32s2 --port com3 write_flash 0x0 merged_<appfolder>_<hhmmss>.bin\n")),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The port for your MagTag may be different from the ",(0,o.kt)("inlineCode",{parentName:"p"},"com3")," shown above.\nFind this value in the Device Manager. Here's ",(0,o.kt)("a",{parentName:"p",href:"https://www.loom.com/share/cde8204ea8b341d892f6ad21ed43ac82"},"a video walkthrough of the\nprocess"),"."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press the MagTag ",(0,o.kt)("strong",{parentName:"p"},"Reset")," button to start the new firmware"))),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the flash is successful, ",(0,o.kt)("strong",{parentName:"p"},"you will receive an error message")," telling you that you must manually reset the device. Remember to press the reset button to run the newly flashed program. ",(0,o.kt)("a",{parentName:"p",href:"/docs/zephyr-intro/zephyr-tips#you-must-press-the-reset-button-after-flashing-firmware"},"Learn more about this"),"."),(0,o.kt)("p",{parentName:"admonition"},"On some machines you will only have a few seconds to run the ",(0,o.kt)("inlineCode",{parentName:"p"},"esptool.py")," command after entering bootloader mode. ",(0,o.kt)("a",{parentName:"p",href:"/docs/zephyr-intro/zephyr-tips#errors-with-west-build-zephyr-tree-and-esp32-environmental-variables"},"Learn more about this"),".")))}s.isMDXComponent=!0},5059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(7462),o=(a(7294),a(3905)),i=a(7009),l=a(873);const r={sidebar_position:2},s="Build the Golioth Demo",p={unversionedId:"golioth-exercises/compile-golioth-demo",id:"golioth-exercises/compile-golioth-demo",title:"Build the Golioth Demo",description:"We begin with a full-featured demo! But for the MagTag to connect we must give",source:"@site/docs/golioth-exercises/compile-golioth-demo.md",sourceDirName:"golioth-exercises",slug:"/golioth-exercises/compile-golioth-demo",permalink:"/docs/golioth-exercises/compile-golioth-demo",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install esptool on your local machine",permalink:"/docs/golioth-exercises/install_esptool"},next:{title:"Exploring Golioth using the MagTag",permalink:"/docs/golioth-exercises/golioth-explore"}},d={},m=[{value:"Learning objectives",id:"learning-objectives",level:2},{value:"Desired outcome(s)",id:"desired-outcomes",level:3},{value:"Time Estimate",id:"time-estimate",level:3},{value:"Workflow",id:"workflow",level:2},{value:"Build in the Kasm container",id:"build-in-the-kasm-container",level:3},{value:"Update MagTag firmware from your local machine",id:"update-magtag-firmware-from-your-local-machine",level:3},{value:"Expected results",id:"expected-results",level:2}],c={toc:m};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-the-golioth-demo"},"Build the Golioth Demo"),(0,o.kt)("p",null,"We begin with a full-featured demo! But for the MagTag to connect we must give\nit one set of credentials to connect to your WiFi and another set of\ncredentials to connect to Golioth that you created in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/golioth-intro/signup"},"Golioth Signup and\nExploration")," section."),(0,o.kt)("h2",{id:"learning-objectives"},"Learning objectives"),(0,o.kt)("p",null,"We are building your muscles around compiling Zephyr binaries, by starting with\npre-configured code. All you need to do is add credentials, compile, and load\nthe binary onto your device."),(0,o.kt)("p",null,"We are doing this so you can use this hardware and firmware on the MagTag to\nexperiment with features on Golioth in the next section."),(0,o.kt)("h3",{id:"desired-outcomes"},"Desired outcome(s)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a customized file containing your credentials for Wi-Fi and Golioth."),(0,o.kt)("li",{parentName:"ul"},"Build a binary containing those credentials."),(0,o.kt)("li",{parentName:"ul"},"Download the built binary and load it onto the MagTag hardware."),(0,o.kt)("li",{parentName:"ul"},"See the device connect to Golioth over WiFi")),(0,o.kt)("h3",{id:"time-estimate"},"Time Estimate"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This section will take 5-20 minutes",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Depending on experience with Zephyr and the ",(0,o.kt)("inlineCode",{parentName:"li"},"west")," meta tool.")))),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("admonition",{title:"Using VScode",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In this exercise we detail how to use VScode when editing, building, and\nflashing a Zephyr project. This process may also be reused with all other\nexercises."),(0,o.kt)("p",{parentName:"admonition"},"Of course, VScode is optional and you may choose to use any editor of your\nchoice and to build/flash from the command line.")),(0,o.kt)("h3",{id:"build-in-the-kasm-container"},"Build in the Kasm container"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Kasm container, open the magtag-training project in VScode"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"use the icon on the desktop to open vscode"),(0,o.kt)("li",{parentName:"ul"},"Choose File","\u2192","Open Folder"),(0,o.kt)("li",{parentName:"ul"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"~/Desktop/magtag-training/app")," and open it"),(0,o.kt)("li",{parentName:"ul"},"Confirm that you trust the authors in the window that appears")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Open magtag-training/app folder in VScode",src:a(2787).Z,width:"1055",height:"820"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a file for WiFi and Golioth credentials"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Create ",(0,o.kt)("inlineCode",{parentName:"li"},"credentials.conf"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Right click on the credentials.conf_example in the Explorer sidebar and\nchoose Copy"),(0,o.kt)("li",{parentName:"ul"},"Right click on and empty space in the Explorer sidebar and choose Paste"),(0,o.kt)("li",{parentName:"ul"},"Right click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"credentials copy.conf_example")," and choose Rename"),(0,o.kt)("li",{parentName:"ul"},"Name the file ",(0,o.kt)("inlineCode",{parentName:"li"},"credentials.conf"),". The file will now be open in an editor\nwindow"))),(0,o.kt)("li",{parentName:"ul"},"Edit this new file to include your WiFi credentials and the PSK-ID/PSK\nfrom the device page on your ",(0,o.kt)("a",{parentName:"li",href:"https://console.golioth.io/"},"Golioth\nconsole")),(0,o.kt)("li",{parentName:"ul"},"Save the file",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This file will be ignored by git, and may be reused in other examples.")))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Create a credentials file",src:a(8483).Z,width:"1058",height:"822"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build the example, including the credentials file you just created"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To open a terminal window in VScode click on Terminal","\u2192","New Terminal"),(0,o.kt)("li",{parentName:"ul"},"Run the following code in the terminal to build the ",(0,o.kt)("inlineCode",{parentName:"li"},"golioth-demo")," app")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"west build -b esp32s2_saola golioth-demo -p\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Create a credentials file",src:a(3797).Z,width:"1053",height:"821"})),(0,o.kt)("admonition",{parentName:"li",title:"Use the app folder for builds",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We want to build all of the sample code from the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/Desktop/magtag-training/app"),"\nfolder. The VScode terminal should automatically begin in this folder\nbecause that is the folder we already opened in the Explorer sidebar"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the binary"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In the VScode terminal, run ",(0,o.kt)("inlineCode",{parentName:"li"},"west kasm download")," to package the compiled\ncode and make it available for download"),(0,o.kt)("li",{parentName:"ul"},"Use the Download option in Kasm's left sidebar to download\n",(0,o.kt)("inlineCode",{parentName:"li"},"merged_<appfolder>_<hhmmss>.bin")," to your local machine.")),(0,o.kt)(i.ZP,{mdxType:"HowToDownload"}))),(0,o.kt)("h3",{id:"update-magtag-firmware-from-your-local-machine"},"Update MagTag firmware from your local machine"),(0,o.kt)(l.ZP,{mdxType:"VerboseFlash"}),(0,o.kt)("h2",{id:"expected-results"},"Expected results"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Golioth Demo connected to WiFi and the Golioth Servers",src:a(5146).Z,width:"1280",height:"720"})),(0,o.kt)("p",null,"After flashing the example you need to press the Reset button to run the\nprogram. Your MagTag may not visibly react for a few seconds as it initializes\nthe WiFi hardware. The two center LEDs will turn blue as the board attempts to\nconnect to the internet and establish a secure connection with Golioth. The\nGolioth logo will be displayed on the ePaper screen during this time."),(0,o.kt)("p",null,'When a connection is established, the four LEDs will turn to yellow, blue,\ngreen, and red and the MagTag show a "Connected to Golioth!"'))}u.isMDXComponent=!0},1403:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kasm_download_binary-4769c026b5cdf800e547216fa265501c.png"},8606:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/magtag-bootloader-mode-5c7952ae3bb40ddc89a40e0f41cf721f.jpg"},3797:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kasm-vscode-compile-53a8f20fe62fb289e725189d44518583.png"},8483:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kasm-vscode-credentials-19d017e72b320446a9d55b1d6a210213.png"},2787:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kasm-vscode-open-folder-trust-e894dec2d5af25dc0cb357233b640b82.png"},5146:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/magtag-golioth-connected-a75627f7ed7bd5b7096a0e684d89362c.jpg"}}]);