"use strict";(self.webpackChunkgolioth_developer_training=self.webpackChunkgolioth_developer_training||[]).push([[242],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7462),o=a(7294),r=a(6010),l=a(2389),i=a(7392),s=a(7094),p=a(2466);const d="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:u,groupId:h,className:k}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,i.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,o.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&f.some((t=>t.value===e))&&T(e)}const D=e=>{const t=e.currentTarget,a=x.indexOf(t),n=f[a].value;n!==N&&(C(t),T(n),null!=h&&w(h,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:O,onFocus:D,onClick:D},l,{className:(0,r.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,o.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,l.Z)();return o.createElement(c,(0,n.Z)({key:String(t)},e))}},6277:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={toc:[]};function l(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Credentials allow your device to authenticate onto your local Wi-Fi\nnetwork and then to talk to the Golioth servers.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Option 1"),": Reuse ",(0,o.kt)("inlineCode",{parentName:"p"},"credentials.conf")," from previous examples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Option 2"),": Make a new ",(0,o.kt)("inlineCode",{parentName:"p"},"credentials.conf")," (required if this is the first\nexample you are running)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make a copy of ",(0,o.kt)("inlineCode",{parentName:"p"},"credentials.conf_example")," and name it ",(0,o.kt)("inlineCode",{parentName:"p"},"credentials.conf")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cp credentials.conf_example credentials.conf\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Edit this new file to include your WiFi credentials and the PSK-ID/PSK\nfrom the device page on your Golioth console"))))))}l.isMDXComponent=!0},7009:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={toc:[]};function l(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},r,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show me how to download from KASM"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"How to download binaries from KASM",src:a(1403).Z,width:"1712",height:"982"})),(0,o.kt)("p",null,"Because KASM is a virtual machine running in the cloud, we can not directly program the MagTag connected to your local machine. Instead, we will download the binary so that your local machine can program that file to the MagTag in the next step."),(0,o.kt)("p",null,'The image above shows the left sidebar menu of KASM with the Download widget selected. Click the "DOWNLOAD" button next to the ',(0,o.kt)("inlineCode",{parentName:"p"},"merged.bin")," file to download your recently compiled code.")))}l.isMDXComponent=!0},873:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(7462),o=(a(7294),a(3905)),r=a(5488),l=a(5162);const i={toc:[]};function s(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the USB cable to plug the MagTag into your local computer. Ensure the\npower switch is in the 'On' position.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Put the MagTag into DFU bootloader mode"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Hold down the Boot0 button")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press and release the Reset button"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"MagTag Boot0 and Reset buttons",src:a(8606).Z,width:"1000",height:"643"})))))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the flash command on your local machine:"),(0,o.kt)(r.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux/MacOS",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd ~/Downloads\nesptool.py --chip esp32s2 --port /dev/ttyACM0 write_flash 0x0 merged.bin\n"))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd %HOMEPATH%/Downloads\npython -m esptool --chip esp32s2 --port com3 write_flash 0x0 merged.bin\n")),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The port for your MagTag may be different from the ",(0,o.kt)("inlineCode",{parentName:"p"},"com3")," shown above.\nFind this value in the Device Manager. Here's ",(0,o.kt)("a",{parentName:"p",href:"https://www.loom.com/share/cde8204ea8b341d892f6ad21ed43ac82"},"a video walkthrough of the\nprocess"),"."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press the MagTag ",(0,o.kt)("strong",{parentName:"p"},"Reset")," button to start the new firmware"))),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the flash is successful, ",(0,o.kt)("strong",{parentName:"p"},"you will receive an error message")," telling you that you must manually reset the device. Remember to press the reset button to run the newly flashed program. ",(0,o.kt)("a",{parentName:"p",href:"/docs/zephyr-intro/zephyr-tips#you-must-press-the-reset-button-after-flashing-firmware"},"Learn more about this"),"."),(0,o.kt)("p",{parentName:"admonition"},"On some machines you will only have a few seconds to run the ",(0,o.kt)("inlineCode",{parentName:"p"},"esptool.py")," command after entering bootloader mode. ",(0,o.kt)("a",{parentName:"p",href:"/docs/zephyr-intro/zephyr-tips#errors-with-west-build-zephyr-tree-and-esp32-environmental-variables"},"Learn more about this"),".")))}s.isMDXComponent=!0},1018:(e,t,a)=>{a.d(t,{ZP:()=>p});var n=a(7462),o=(a(7294),a(3905)),r=a(5488),l=a(5162),i=a(873);const s={toc:[]};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Put the MagTag into DFU bootloader mode (Hold Boot0, tap Reset)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change to the download directory and run the flash command on your local machine:"),(0,o.kt)(r.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux/MacOS",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd ~/Downloads\nesptool.py --chip esp32s2 --port /dev/ttyACM0 write_flash 0x0 merged.bin\n"))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd %HOMEPATH%/Downloads\npython -m esptool --chip esp32s2 --port com3 write_flash 0x0 merged.bin\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press the MagTag ",(0,o.kt)("strong",{parentName:"p"},"Reset")," button to start the new firmware"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click to reveal full firmware update instructions"),(0,o.kt)(i.ZP,{mdxType:"VerbostDownloadFlash"})))}p.isMDXComponent=!0},2410:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(7462),o=(a(7294),a(3905)),r=(a(5488),a(5162),a(6277)),l=a(7009),i=a(1018);const s={sidebar_position:6},p="Golioth Observe Example",d={unversionedId:"zephyr-intro/zephyr-examples/golioth-observe",id:"zephyr-intro/zephyr-examples/golioth-observe",title:"Golioth Observe Example",description:"The Observe example configures the MagTag to watch a LightDB state endpoint on the Golioth servers for changes. When data is updated on the could, the device recognizes this quickly and a callback is executed. For this example, a LightDB State endpoint called leds will monitor a value from 0 to 15 to control the on/off state of the LEDs on the MagTag.",source:"@site/docs/zephyr-intro/zephyr-examples/golioth-observe.md",sourceDirName:"zephyr-intro/zephyr-examples",slug:"/zephyr-intro/zephyr-examples/golioth-observe",permalink:"/docs/zephyr-intro/zephyr-examples/golioth-observe",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Golioth Stream Example",permalink:"/docs/zephyr-intro/zephyr-examples/golioth-stream"},next:{title:"Zephyr Tips and Gotchas",permalink:"/docs/zephyr-intro/zephyr-tips"}},m={},c=[{value:"Learning Objectives",id:"learning-objectives",level:2},{value:"Desired outcome(s)",id:"desired-outcomes",level:3},{value:"Time Estimate",id:"time-estimate",level:3},{value:"Workflow",id:"workflow",level:2},{value:"Build in the KASM container",id:"build-in-the-kasm-container",level:3},{value:"Update MagTag firmware from your local machine",id:"update-magtag-firmware-from-your-local-machine",level:3},{value:"Setup the LightDB State endpoint",id:"setup-the-lightdb-state-endpoint",level:2},{value:"Expected Results",id:"expected-results",level:2},{value:"Remote Procedure Call: Write to ePaper display",id:"remote-procedure-call-write-to-epaper-display",level:3},{value:"Continued Learning",id:"continued-learning",level:3}],u={toc:c};function h(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"golioth-observe-example"},"Golioth Observe Example"),(0,o.kt)("p",null,"The Observe example configures the MagTag to watch a LightDB state endpoint on the Golioth servers for changes. When data is updated on the could, the device recognizes this quickly and a callback is executed. For this example, a LightDB State endpoint called ",(0,o.kt)("inlineCode",{parentName:"p"},"leds")," will monitor a value from 0 to 15 to control the on/off state of the LEDs on the MagTag."),(0,o.kt)("h2",{id:"learning-objectives"},"Learning Objectives"),(0,o.kt)("p",null,'We are learning to use the "state" version of Golioth\'s database services (LightDB state), because it represents another way to send data down to devices in the field. This is part of a broader "command and control" (C&C) need for IoT devices. Golioth services that fall under the heading of C&C are:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"LightDB State - part of this Observe Example"),(0,o.kt)("li",{parentName:"ul"},"Remote Procedure Call (RPC)- part of this Observe Example"),(0,o.kt)("li",{parentName:"ul"},"Settings Service- part of ",(0,o.kt)("a",{parentName:"li",href:"/docs/zephyr-intro/zephyr-examples/golioth-stream"},"the Stream Example"))),(0,o.kt)("h3",{id:"desired-outcomes"},"Desired outcome(s)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Understand how to create LightDB State variables"),(0,o.kt)("li",{parentName:"ul"},'Understand what an "endpoint" is'),(0,o.kt)("li",{parentName:"ul"},"Understand how to use Callbacks in Zephyr")),(0,o.kt)("h3",{id:"time-estimate"},"Time Estimate"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"15 minutes")),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("h3",{id:"build-in-the-kasm-container"},"Build in the KASM container"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the KASM container, go to your local copy of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golioth/magtag-demo"},"the magtag-demo repository"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/magtag-training/app\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a file for WiFi and Golioth credentials"),(0,o.kt)(r.ZP,{mdxType:"CreateCredentials"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build the example, including the credentials file you just created"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"west build -b esp32s2_saola observe -p\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the binary"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"west kasm download")," to package the compiled code and make it\navailable for download"),(0,o.kt)("li",{parentName:"ul"},"Use the Download option in KASM's left sidebar to download\n",(0,o.kt)("inlineCode",{parentName:"li"},"merged_yymmdd_hhmmss.bin")," to your local machine.")),(0,o.kt)(l.ZP,{mdxType:"HowToDownload"}))),(0,o.kt)("h3",{id:"update-magtag-firmware-from-your-local-machine"},"Update MagTag firmware from your local machine"),(0,o.kt)(i.ZP,{mdxType:"HowToFlash"}),(0,o.kt)("h2",{id:"setup-the-lightdb-state-endpoint"},"Setup the LightDB State endpoint"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Golioth Console and choose Management","\u2192","Devices from the sidebar menu")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the name of your device to enter the device view, then click the LightDB State icon to open up the right sidebar dialog")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Hover your mouse over the empty JSON object and click the green plus sign that is revealed"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the JSON object is not empty (e.g. data from previous examples are shown), use the red X icon to delete each item before adding a new entry"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Type in ",(0,o.kt)("inlineCode",{parentName:"p"},"leds")," as the key name (no quotes)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Hover over ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," and click the green pencil icon to edit the value, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"15")," and click the lower green check mark to save it as an integer value. If successful you will not see quotation marks around this value."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Only integers between 0 and 15 (inclusive) are valid for this example"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Important"),': Click the "Submit" button at the bottom right of this dialog to save your changes.'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Setting up the LightDB State endpoint",src:a(3778).Z,width:"478",height:"199"})))),(0,o.kt)("h2",{id:"expected-results"},"Expected Results"),(0,o.kt)("p",null,"The Observe example will begin running after pressing the Reset button. You will see the center LEDs turn blue when the board is trying to connect to Golioth. When successful, all four LEDs will turn green, and a connected message will be shown on the ePaper display."),(0,o.kt)("p",null,"The LEDs will remain green until a change to the ",(0,o.kt)("inlineCode",{parentName:"p"},"leds")," endpoint is detected, including the first time it subscribes to observe this data at power up. The color of LEDs 0..3 will be set to red/green/blue/red. The on/off state of each LED is controlled by the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"leds")," endpoint. This value is a binary mask, so changing that value to 0 will switch all LEDs off, changing it to 8 will turn on LED3 and turn all others off. Each time a new value is observed, it will be displayed on the ePaper screen. Try changing this number and observing the behavior, noting that values outside of the 0..15 range will be ignored."),(0,o.kt)("h3",{id:"remote-procedure-call-write-to-epaper-display"},"Remote Procedure Call: Write to ePaper display"),(0,o.kt)("p",null,"Remote Precedure Call (RPC) is a Golioth feature that allows you to remotely\nexecute a function, including sending parameters to the device and receiving\ndata back from it."),(0,o.kt)("p",null,"We've implemented a simple RPC that reads a string as a parameter and writes it\nto the ePaper display."),(0,o.kt)("p",null,"Navigate to your device on ",(0,o.kt)("a",{parentName:"p",href:"https://console.golioth.io/"},"the Golioth Console")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select Remote Procedure Call from the table along the top of the device view"),(0,o.kt)("li",{parentName:"ol"},'Input "epaper" as the Method name'),(0,o.kt)("li",{parentName:"ol"},"Click on Add Parameter and type your message"),(0,o.kt)("li",{parentName:"ol"},"Click the Call Method button to execute the RPC")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Golioth Remote Procedure Call",src:a(993).Z,width:"936",height:"429"})),(0,o.kt)("p",null,"In the above example, I executed the RPC once when the MagTag was powered off,\nand again when it was powered on. What happens if you try to send a number\ninstead of a string?"),(0,o.kt)("h3",{id:"continued-learning"},"Continued Learning"),(0,o.kt)("p",null,"Of course the device can also write to the LightDB State endpoint. One example\nof this is when the endpoint doesn't exist, the MagTag will set the ",(0,o.kt)("inlineCode",{parentName:"p"},"leds"),"\nendpoint to 15 as the default. Look in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main.c")," and find the following\ncode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'snprintk(str, 6, "%d", LEDS_DEFAULT_MASK);\n\nerr = golioth_lightdb_set(client,\n        GOLIOTH_LIGHTDB_PATH(LEDS_ENDPOINT),\n        GOLIOTH_CONTENT_FORMAT_APP_JSON,\n        str,\n        strlen(str));\n')),(0,o.kt)("p",null,"With this code we are converting an integer value (LEDS_DEFAULT_MASK) to a\nstring so that we can send it over the CoAP protocol as text. The ",(0,o.kt)("inlineCode",{parentName:"p"},"leds"),"\nendpoint is selected using the ",(0,o.kt)("inlineCode",{parentName:"p"},"GOLIOTH_LIGHTDB_PATH(LEDS_ENDPOINT)")," helper\nmacro, and it's all taken care of by the ",(0,o.kt)("inlineCode",{parentName:"p"},"golioth_lightdb_set()")," function from\nthe Golioth SDK."),(0,o.kt)("p",null,"Compare this to the code that was ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golioth/magtag-demo/blob/e6b75a65e4c3a2863ae208dd8707cc7ecfefcfa8/src/main.c#L70-L93"},"used to write accelerometer\ndata"),"\nto LightDB Stream in the Stream example and you will see a more complex payload\nstring built using ",(0,o.kt)("inlineCode",{parentName:"p"},"snprintk()"),", and a different endpoint helper macro:\n",(0,o.kt)("inlineCode",{parentName:"p"},"GOLIOTH_LIGHTDB_STREAM_PATH()"),"."),(0,o.kt)("p",null,"The endpoints that send data to either LightDB State or LightDB stream differ by just one letter. While we use macros in the above example, those simply add a prefix of ",(0,o.kt)("inlineCode",{parentName:"p"},".d/")," for State or ",(0,o.kt)("inlineCode",{parentName:"p"},".s/")," for Stream."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'/* These two lines evaluate to the same string */\nuint8_t* state_endpoint_1 = GOLIOTH_LIGHTDB_PATH("leds");\nuint8_t* state_endpoint_2 = ".d/leds";\n\n/* These two lines also evaluate to the same string */\nuint8_t* stream_endpoint_1 = GOLIOTH_LIGHTDB_STREAM_PATH("accel");\nuint8_t* stream_endpoint_2 = ".s/accel";\n')))}h.isMDXComponent=!0},1403:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kasm_download_binary-4a72cb33f6d8e6385c88d1f0ae790c23.png"},8606:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/magtag-bootloader-mode-5c7952ae3bb40ddc89a40e0f41cf721f.jpg"},3778:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/golioth-lightdb-state-endpoint-824ddc2a13f4a992bfc2d384f7b9b019.png"},993:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/golioth-rpc-8b4e518d7712a92e38acf20dea3fbdad.png"}}]);