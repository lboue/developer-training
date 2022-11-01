"use strict";(self.webpackChunkgolioth_developer_training=self.webpackChunkgolioth_developer_training||[]).push([[755],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=o,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),o=a(7294),r=a(6010),l=a(2389),i=a(7392),s=a(7094),p=a(2466);const m="tabList__CuJ",d="tabItem_LNqP";function u(e){var t;const{lazy:a,block:l,defaultValue:u,values:c,groupId:h,className:g}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,i.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[N,x]=(0,o.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=h){const e=v[h];null!=e&&e!==N&&k.some((t=>t.value===e))&&x(e)}const S=e=>{const t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==N&&(C(t),x(n),null!=h&&w(h,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",m)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},k.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:O,onFocus:S,onClick:S},l,{className:(0,r.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,o.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,l.Z)();return o.createElement(u,(0,n.Z)({key:String(t)},e))}},6277:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={toc:[]};function l(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Credentials allow your device to authenticate onto your local Wi-Fi\nnetwork and then to talk to the Golioth servers.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Option 1"),": Reuse ",(0,o.kt)("inlineCode",{parentName:"p"},"credentials.conf")," from previous examples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Option 2"),": Make a new ",(0,o.kt)("inlineCode",{parentName:"p"},"credentials.conf")," (required if this is the first\nexample you are running)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make a copy of ",(0,o.kt)("inlineCode",{parentName:"p"},"credentials.conf_example")," and name it ",(0,o.kt)("inlineCode",{parentName:"p"},"credentials.conf")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cp credentials.conf_example credentials.conf\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Edit this new file to include your WiFi credentials and the PSK-ID/PSK\nfrom the device page on your Golioth console"))))))}l.isMDXComponent=!0},7009:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={toc:[]};function l(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},r,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show me how to download from Kasm"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"How to download binaries from Kasm",src:a(1403).Z,width:"1712",height:"982"})),(0,o.kt)("p",null,"Because Kasm is a virtual machine running in the cloud, we can not directly program the MagTag connected to your local machine. Instead, we will download the binary so that your local machine can program that file to the MagTag in the next step."),(0,o.kt)("p",null,'The image above shows the left sidebar menu of Kasm with the Download widget selected. Click the "DOWNLOAD" button next to the ',(0,o.kt)("inlineCode",{parentName:"p"},"merged_yymmdd_hhmmss.bin")," file to download your recently compiled code.")))}l.isMDXComponent=!0},873:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(7462),o=(a(7294),a(3905)),r=a(5488),l=a(5162);const i={toc:[]};function s(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the USB cable to plug the MagTag into your local computer. Ensure the\npower switch is in the 'On' position.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Put the MagTag into DFU bootloader mode"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Hold down the Boot0 button")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press and release the Reset button"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"MagTag Boot0 and Reset buttons",src:a(8606).Z,width:"1000",height:"643"})))))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the flash command on your local machine:"),(0,o.kt)(r.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux/MacOS",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd ~/Downloads\nesptool.py --chip esp32s2 --port /dev/ttyACM0 write_flash 0x0 merged_yymmdd_hhmmss.bin\n"))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd %HOMEPATH%/Downloads\npython -m esptool --chip esp32s2 --port com3 write_flash 0x0 merged_yymmdd_hhmmss.bin\n")),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The port for your MagTag may be different from the ",(0,o.kt)("inlineCode",{parentName:"p"},"com3")," shown above.\nFind this value in the Device Manager. Here's ",(0,o.kt)("a",{parentName:"p",href:"https://www.loom.com/share/cde8204ea8b341d892f6ad21ed43ac82"},"a video walkthrough of the\nprocess"),"."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press the MagTag ",(0,o.kt)("strong",{parentName:"p"},"Reset")," button to start the new firmware"))),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the flash is successful, ",(0,o.kt)("strong",{parentName:"p"},"you will receive an error message")," telling you that you must manually reset the device. Remember to press the reset button to run the newly flashed program. ",(0,o.kt)("a",{parentName:"p",href:"/docs/zephyr-intro/zephyr-tips#you-must-press-the-reset-button-after-flashing-firmware"},"Learn more about this"),"."),(0,o.kt)("p",{parentName:"admonition"},"On some machines you will only have a few seconds to run the ",(0,o.kt)("inlineCode",{parentName:"p"},"esptool.py")," command after entering bootloader mode. ",(0,o.kt)("a",{parentName:"p",href:"/docs/zephyr-intro/zephyr-tips#errors-with-west-build-zephyr-tree-and-esp32-environmental-variables"},"Learn more about this"),".")))}s.isMDXComponent=!0},1018:(e,t,a)=>{a.d(t,{ZP:()=>p});var n=a(7462),o=(a(7294),a(3905)),r=a(5488),l=a(5162),i=a(873);const s={toc:[]};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Put the MagTag into DFU bootloader mode (Hold Boot0, tap Reset)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change to the download directory and run the flash command on your local machine:"),(0,o.kt)(r.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux/MacOS",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd ~/Downloads\nesptool.py --chip esp32s2 --port /dev/ttyACM0 write_flash 0x0 merged_yymmdd_hhmmss.bin\n"))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd %HOMEPATH%/Downloads\npython -m esptool --chip esp32s2 --port com3 write_flash 0x0 merged_yymmdd_hhmmss.bin\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press the MagTag ",(0,o.kt)("strong",{parentName:"p"},"Reset")," button to start the new firmware"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click to reveal full firmware update instructions"),(0,o.kt)(i.ZP,{mdxType:"VerbostDownloadFlash"})))}p.isMDXComponent=!0},1824:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var n=a(7462),o=(a(7294),a(3905)),r=(a(5488),a(5162),a(6277)),l=a(7009),i=a(1018);const s={sidebar_position:5},p="Golioth Stream Example",m={unversionedId:"zephyr-intro/zephyr-examples/golioth-stream",id:"zephyr-intro/zephyr-examples/golioth-stream",title:"Golioth Stream Example",description:"The Stream example sends accelerometer sensor data to the Golioth Cloud every",source:"@site/docs/zephyr-intro/zephyr-examples/golioth-stream.md",sourceDirName:"zephyr-intro/zephyr-examples",slug:"/zephyr-intro/zephyr-examples/golioth-stream",permalink:"/docs/zephyr-intro/zephyr-examples/golioth-stream",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Golioth Hello Example",permalink:"/docs/zephyr-intro/zephyr-examples/golioth-hello"},next:{title:"Golioth Observe Example",permalink:"/docs/zephyr-intro/zephyr-examples/golioth-observe"}},d={},u=[{value:"Learning Objectives",id:"learning-objectives",level:2},{value:"Desired outcome(s)",id:"desired-outcomes",level:3},{value:"Time Estimate",id:"time-estimate",level:3},{value:"Workflow",id:"workflow",level:2},{value:"Build in the Kasm container",id:"build-in-the-kasm-container",level:3},{value:"Update MagTag firmware from your local machine",id:"update-magtag-firmware-from-your-local-machine",level:3},{value:"Expected Results",id:"expected-results",level:2},{value:"Settings Service: Change the frequency of readings",id:"settings-service-change-the-frequency-of-readings",level:3},{value:"Continued Learning",id:"continued-learning",level:3},{value:"Challenge: Modifying Stream",id:"challenge-modifying-stream",level:2},{value:"Questions:",id:"questions",level:3}],c={toc:u};function h(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"golioth-stream-example"},"Golioth Stream Example"),(0,o.kt)("p",null,"The Stream example sends accelerometer sensor data to the Golioth Cloud every\nfew seconds. Each JSON object receives a timestamp and is stored in a database\nwe refer to as LightDB stream."),(0,o.kt)("h2",{id:"learning-objectives"},"Learning Objectives"),(0,o.kt)("p",null,"We want to understand time-series data and how to interact with it in Zephyr. "),(0,o.kt)("h3",{id:"desired-outcomes"},"Desired outcome(s)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"See time-series data delivered to the Golioth cloud."),(0,o.kt)("li",{parentName:"ul"},"Understand the APIs sending to the time series database."),(0,o.kt)("li",{parentName:"ul"},"Try out the Settings Service.")),(0,o.kt)("h3",{id:"time-estimate"},"Time Estimate"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"10 minutes ")),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("h3",{id:"build-in-the-kasm-container"},"Build in the Kasm container"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Kasm container, go to your local copy of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golioth/magtag-demo"},"the magtag-demo\nrepository"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Desktop/magtag-training/app\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a file for WiFi and Golioth credentials"),(0,o.kt)(r.ZP,{mdxType:"CreateCredentials"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build the example, including the credentials file you just created"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"west build -b esp32s2_saola stream -p\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the binary"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"west kasm download")," to package the compiled code and make it\navailable for download"),(0,o.kt)("li",{parentName:"ul"},"Use the Download option in Kasm's left sidebar to download\n",(0,o.kt)("inlineCode",{parentName:"li"},"merged_yymmdd_hhmmss.bin")," to your local machine.")),(0,o.kt)(l.ZP,{mdxType:"HowToDownload"}))),(0,o.kt)("h3",{id:"update-magtag-firmware-from-your-local-machine"},"Update MagTag firmware from your local machine"),(0,o.kt)(i.ZP,{mdxType:"HowToFlash"}),(0,o.kt)("h2",{id:"expected-results"},"Expected Results"),(0,o.kt)("p",null,'The Stream example will begin running after pressing the Reset button. You will\nsee the center LEDs turn blue when the board is trying to connect to Golioth.\nWhen successful, all four LEDs will turn green, a connected message will be\nshown on the ePaper display, and sensor data will begin streaming to Golioth\neach time the screen displays "sent accel data".'),(0,o.kt)("p",null,"Sensor data can be viewed on ",(0,o.kt)("a",{parentName:"p",href:"https://console.golioth.io/"},"the Golioth Console")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select Monitor","\u2192","Stream from the sidebar menu"),(0,o.kt)("li",{parentName:"ol"},'Under "Query Response" use the time/date box and choose the ',(0,o.kt)("inlineCode",{parentName:"li"},"Last 4h")," setting"),(0,o.kt)("li",{parentName:"ol"},"To the right of the time/date box, choose the name of your device from the\nlist"),(0,o.kt)("li",{parentName:"ol"},"Click the circle arrow icon next to the Refresh button in the upper right to\nauto-refresh every 1 second"),(0,o.kt)("li",{parentName:"ol"},'Use the green arrows in the "data" column to unfold the nested JSON objects\nfor viewing')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Accelerometer data show in the Golioth Console LightDB stream view",src:a(9930).Z,width:"1240",height:"684"})),(0,o.kt)("p",null,"This streaming data can be queried using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.golioth.io/reference/rest-api/overview"},"Golioth REST\nAPI"),", or accessed on a\nnumber of different external platforms/services using our ",(0,o.kt)("a",{parentName:"p",href:"https://docs.golioth.io/cloud/output-streams"},"Output\nStreams"),". This allows timestamped\nstream data to be graphed and visualized to meet your needs."),(0,o.kt)("p",null,"Golioth also includes a LightDB State for persistent, mutable data. We will look\nat that feature in the next example."),(0,o.kt)("h3",{id:"settings-service-change-the-frequency-of-readings"},"Settings Service: Change the frequency of readings"),(0,o.kt)("p",null,"Imagine you have 100 sensors in the field and wanted to update the rate at which they take their readings. This demo is set up to take advantage of the Golioth Settings Service, which can update a setting for all devices in the fleet with a single click, or target them individually or in groups."),(0,o.kt)("p",null,"Navigate to your device on ",(0,o.kt)("a",{parentName:"p",href:"https://console.golioth.io/"},"the Golioth Console")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select Device Settings from the left sidebar"),(0,o.kt)("li",{parentName:"ol"},"Click the Create button and set the key as ",(0,o.kt)("inlineCode",{parentName:"li"},"LOOP_DELAY_S")),(0,o.kt)("li",{parentName:"ol"},"Choose Integer for data type"),(0,o.kt)("li",{parentName:"ol"},"Enter the desired delay between sensor readings (in seconds)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Setting up the LightDB State endpoint",src:a(9622).Z,width:"721",height:"454"})),(0,o.kt)("p",null,"Your MagTag will immediately recognize the change and display a message."),(0,o.kt)("p",null,"Settings can be adjusted from the project, blueprint, or device level. Try\nadjusting this value from the device-view Settings tab. Also notice that the state of the settings synchronization is reported in the summary page for your device."),(0,o.kt)("h3",{id:"continued-learning"},"Continued Learning"),(0,o.kt)("p",null,"The Query Builder found in the LightDB Stream view of the Golioth Console is a\npowerful tool for visualizing your incoming data and for testing how the data\nyou collect will be used. You can see ",(0,o.kt)("a",{parentName:"p",href:"https://blog.golioth.io/prototype-your-data-outputs-with-the-golioth-query-builder/"},"our post on Query\nBuilder"),"\nto learn more about this feature."),(0,o.kt)("h2",{id:"challenge-modifying-stream"},"Challenge: Modifying Stream"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find the source files for Stream. "),(0,o.kt)("li",{parentName:"ul"},"Modify the JSON message going back to the Golioth cloud"),(0,o.kt)("li",{parentName:"ul"},"Recompile/reflash -- Try leaving off the ",(0,o.kt)("inlineCode",{parentName:"li"},"-p")," command for a faster recompile.")),(0,o.kt)("h3",{id:"questions"},"Questions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"What are the inputs to send data to the Stream API?"),(0,o.kt)("li",{parentName:"ol"},"How do you format sensor data to send to the Stream API?")))}h.isMDXComponent=!0},1403:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kasm_download_binary-4a72cb33f6d8e6385c88d1f0ae790c23.png"},8606:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/magtag-bootloader-mode-5c7952ae3bb40ddc89a40e0f41cf721f.jpg"},9622:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/golioth-device-settings-service-ded29bb7cf3efb49fcc90eed66c81baa.png"},9930:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/golioth-stream-data-bffe13b17d84b7a29dcc6ecd7396b282.png"}}]);