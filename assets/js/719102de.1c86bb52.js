"use strict";(self.webpackChunkgolioth_developer_training=self.webpackChunkgolioth_developer_training||[]).push([[238],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return a?o.createElement(h,r(r({ref:t},m),{},{components:a})):o.createElement(h,r({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(7294),n=a(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>u});var o=a(7462),n=a(7294),l=a(6010),r=a(2389),i=a(7392),s=a(7094),p=a(2466);const m="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:a,block:r,defaultValue:c,values:u,groupId:h,className:g}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??k.map((e=>{let{props:{value:t,label:a,attributes:o}}=e;return{value:t,label:a,attributes:o}})),y=(0,i.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:v}=(0,s.U)(),[N,x]=(0,n.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=h){const e=w[h];null!=e&&e!==N&&f.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,a=T.indexOf(t),o=f[a].value;o!==N&&(O(t),x(o),null!=h&&v(h,String(o)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",m)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},g)},f.map((e=>{let{value:t,label:a,attributes:r}=e;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:D,onFocus:C,onClick:C},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,n.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,r.Z)();return n.createElement(c,(0,o.Z)({key:String(t)},e))}},6277:(e,t,a)=>{a.d(t,{ZP:()=>r});var o=a(7462),n=(a(7294),a(3905));const l={toc:[]};function r(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Credentials allow your device to authenticate onto your local Wi-Fi\nnetwork and then to talk to the Golioth servers.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Option 1"),": Reuse ",(0,n.kt)("inlineCode",{parentName:"p"},"credentials.conf")," from previous examples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Option 2"),": Make a new ",(0,n.kt)("inlineCode",{parentName:"p"},"credentials.conf")," (required if this is the first\nexample you are running)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make a copy of ",(0,n.kt)("inlineCode",{parentName:"p"},"credentials.conf_example")," and name it ",(0,n.kt)("inlineCode",{parentName:"p"},"credentials.conf")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"cp credentials.conf_example credentials.conf\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Edit this new file to include your WiFi credentials and the PSK-ID/PSK\nfrom the device page on your Golioth console"))))))}r.isMDXComponent=!0},7009:(e,t,a)=>{a.d(t,{ZP:()=>r});var o=a(7462),n=(a(7294),a(3905));const l={toc:[]};function r(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("br",null),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Show me how to download from Kasm"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"How to download binaries from Kasm",src:a(1403).Z,width:"1216",height:"745"})),(0,n.kt)("p",null,"Because Kasm is a virtual machine running in the cloud, we can not directly program the MagTag connected to your local machine. Instead, we will download the binary so that your local machine can program that file to the MagTag in the next step."),(0,n.kt)("p",null,"The filename includes the folder name of the app you built, along with a\ntimestamp. So your download will look something like this:\n",(0,n.kt)("inlineCode",{parentName:"p"},"merged_golioth-demo_213729.bin"),"."),(0,n.kt)("p",null,'The image above shows the left sidebar menu of Kasm with the Download widget selected. Click the "DOWNLOAD" button next to the ',(0,n.kt)("inlineCode",{parentName:"p"},"merged_<appfolder>_<hhmmss>.bin")," file to download your recently compiled code.")))}r.isMDXComponent=!0},873:(e,t,a)=>{a.d(t,{ZP:()=>s});var o=a(7462),n=(a(7294),a(3905)),l=a(5488),r=a(5162);const i={toc:[]};function s(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,o.Z)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the USB cable to plug the MagTag into your local computer. Ensure the\npower switch is in the 'On' position.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Put the MagTag into DFU bootloader mode"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Hold down the Boot0 button")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Press and release the Reset button"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"MagTag Boot0 and Reset buttons",src:a(8606).Z,width:"1000",height:"643"})))))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the flash command on your local machine:"),(0,n.kt)(l.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux/MacOS",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"cd ~/Downloads\nesptool.py --chip esp32s2 --port /dev/ttyACM0 write_flash 0x0 merged_<appfolder>_<hhmmss>.bin\n"))),(0,n.kt)(r.Z,{value:"windows",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"cd %HOMEPATH%/Downloads\npython -m esptool --chip esp32s2 --port com3 write_flash 0x0 merged_<appfolder>_<hhmmss>.bin\n")),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The port for your MagTag may be different from the ",(0,n.kt)("inlineCode",{parentName:"p"},"com3")," shown above.\nFind this value in the Device Manager. Here's ",(0,n.kt)("a",{parentName:"p",href:"https://www.loom.com/share/cde8204ea8b341d892f6ad21ed43ac82"},"a video walkthrough of the\nprocess"),"."))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Press the MagTag ",(0,n.kt)("strong",{parentName:"p"},"Reset")," button to start the new firmware"))),(0,n.kt)("br",null),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If the flash is successful, ",(0,n.kt)("strong",{parentName:"p"},"you will receive an error message")," telling you that you must manually reset the device. Remember to press the reset button to run the newly flashed program. ",(0,n.kt)("a",{parentName:"p",href:"/docs/zephyr-intro/zephyr-tips#you-must-press-the-reset-button-after-flashing-firmware"},"Learn more about this"),"."),(0,n.kt)("p",{parentName:"admonition"},"On some machines you will only have a few seconds to run the ",(0,n.kt)("inlineCode",{parentName:"p"},"esptool.py")," command after entering bootloader mode. ",(0,n.kt)("a",{parentName:"p",href:"/docs/zephyr-intro/zephyr-tips#errors-with-west-build-zephyr-tree-and-esp32-environmental-variables"},"Learn more about this"),".")))}s.isMDXComponent=!0},1018:(e,t,a)=>{a.d(t,{ZP:()=>p});var o=a(7462),n=(a(7294),a(3905)),l=a(5488),r=a(5162),i=a(873);const s={toc:[]};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Put the MagTag into DFU bootloader mode (Hold Boot0, tap Reset)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change to the download directory and run the flash command on your local machine:"),(0,n.kt)(l.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux/MacOS",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"cd ~/Downloads\nesptool.py --chip esp32s2 --port /dev/ttyACM0 write_flash 0x0 merged_<appfolder>_<hhmmss>.bin\n"))),(0,n.kt)(r.Z,{value:"windows",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"cd %HOMEPATH%/Downloads\npython -m esptool --chip esp32s2 --port com3 write_flash 0x0 merged_<appfolder>_<hhmmss>.bin\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Press the MagTag ",(0,n.kt)("strong",{parentName:"p"},"Reset")," button to start the new firmware"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to reveal full firmware update instructions"),(0,n.kt)(i.ZP,{mdxType:"VerbostDownloadFlash"})))}p.isMDXComponent=!0},1375:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>c});var o=a(7462),n=(a(7294),a(3905)),l=(a(5488),a(5162),a(6277)),r=a(7009),i=a(1018);const s={sidebar_position:4},p="Golioth Hello Example",m={unversionedId:"zephyr-intro/zephyr-examples/golioth-hello",id:"zephyr-intro/zephyr-examples/golioth-hello",title:"Golioth Hello Example",description:"The Hello example is the most basic network-connected example: a 'hello world' with a long distance between processor and terminal.",source:"@site/docs/zephyr-intro/zephyr-examples/golioth-hello.md",sourceDirName:"zephyr-intro/zephyr-examples",slug:"/zephyr-intro/zephyr-examples/golioth-hello",permalink:"/docs/zephyr-intro/zephyr-examples/golioth-hello",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Blinky Example",permalink:"/docs/zephyr-intro/zephyr-examples/blinky"},next:{title:"Golioth Stream Example",permalink:"/docs/zephyr-intro/zephyr-examples/golioth-stream"}},d={},c=[{value:"Learning Objectives",id:"learning-objectives",level:2},{value:"Desired outcome(s)",id:"desired-outcomes",level:3},{value:"Time Estimate",id:"time-estimate",level:3},{value:"Workflow",id:"workflow",level:2},{value:"Build in the Kasm container",id:"build-in-the-kasm-container",level:3},{value:"Update MagTag firmware from your local machine",id:"update-magtag-firmware-from-your-local-machine",level:3},{value:"Expected Results",id:"expected-results",level:2},{value:"Challenge: Modifying Hello",id:"challenge-modifying-hello",level:2}],u={toc:c};function h(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"golioth-hello-example"},"Golioth Hello Example"),(0,n.kt)("p",null,"The Hello example is the most basic network-connected example: a 'hello world' with a long distance between processor and terminal. "),(0,n.kt)("h2",{id:"learning-objectives"},"Learning Objectives"),(0,n.kt)("p",null,"'Hello' shows not only that you can build and flash a binary, but that the binary includes credentials for your WiFi and the Golioth cloud, and that the board can successfully connect to both."),(0,n.kt)("h3",{id:"desired-outcomes"},"Desired outcome(s)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"See device logs displayed on the Golioth Console ")),(0,n.kt)("h3",{id:"time-estimate"},"Time Estimate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"5 minutes")),(0,n.kt)("h2",{id:"workflow"},"Workflow"),(0,n.kt)("h3",{id:"build-in-the-kasm-container"},"Build in the Kasm container"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Kasm container, go to your local copy of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/golioth/magtag-demo"},"the magtag-demo repository"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Desktop/magtag-training/app\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a file for WiFi and Golioth credentials"),(0,n.kt)(l.ZP,{mdxType:"CreateCredentials"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Build the example, including the credentials file you just created"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"west build -b esp32s2_saola hello -p\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the binary"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"west kasm download")," to package the compiled code and make it\navailable for download"),(0,n.kt)("li",{parentName:"ul"},"Use the Download option in Kasm's left sidebar to download\n",(0,n.kt)("inlineCode",{parentName:"li"},"merged_<appfolder>_<hhmmss>.bin")," to your local machine.")),(0,n.kt)(r.ZP,{mdxType:"HowToDownload"}))),(0,n.kt)("h3",{id:"update-magtag-firmware-from-your-local-machine"},"Update MagTag firmware from your local machine"),(0,n.kt)(i.ZP,{mdxType:"HowToFlash"}),(0,n.kt)("h2",{id:"expected-results"},"Expected Results"),(0,n.kt)("p",null,"After flashing the example you need to press the Reset button to run the program. Your MagTag may not visibly react for a few seconds as it initializes the WiFi hardware. The two center LEDs will turn blue as the board attempts to connect to the internet and establish a secure connection with Golioth. The Golioth logo will be displayed on the ePaper screen during this time."),(0,n.kt)("p",null,"When a connection is established, all four LEDs will turn green and the MagTag will being sending Hello messages to Golioth once every five seconds. The ePaper screen will display a connected message, and will print a Hello messages when log messages are sent. Each log message in this demo is sent to the Golioth servers, and can be be viewed on ",(0,n.kt)("a",{parentName:"p",href:"https://console.golioth.io/"},"the Golioth Console")," by selecting Monitor","\u2192","Logs from the sidebar menu."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Golioth Hello output shown on the Logs in Golioth Console",src:a(8230).Z,width:"1196",height:"454"})),(0,n.kt)("h2",{id:"challenge-modifying-hello"},"Challenge: Modifying Hello"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Find the log messages on the "device" page, instead of Monitor',"\u2192","Logs"),(0,n.kt)("li",{parentName:"ul"},'Change the log level from "INFO" to "WARN" and see them displayed on the log page.'),(0,n.kt)("li",{parentName:"ul"},"Change how often the logs are sent to Golioth")))}h.isMDXComponent=!0},1403:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/kasm_download_binary-4769c026b5cdf800e547216fa265501c.png"},8606:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/magtag-bootloader-mode-5c7952ae3bb40ddc89a40e0f41cf721f.jpg"},8230:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/golioth-hello-b25aeddc53e1643ad72e83b087175bfa.png"}}]);