"use strict";(self.webpackChunkgolioth_developer_training=self.webpackChunkgolioth_developer_training||[]).push([[316],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),o=a(7294),r=a(6010),l=a(2389),i=a(7392),s=a(7094),p=a(2466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:m,groupId:h,className:k}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,i.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,o.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:_}=(0,p.o5)();if(null!=h){const e=v[h];null!=e&&e!==N&&g.some((t=>t.value===e))&&T(e)}const D=e=>{const t=e.currentTarget,a=x.indexOf(t),n=g[a].value;n!==N&&(_(t),T(n),null!=h&&w(h,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:E,onFocus:D,onClick:D},l,{className:(0,r.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,o.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return o.createElement(c,(0,n.Z)({key:String(t)},e))}},873:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(7462),o=(a(7294),a(3905)),r=a(5488),l=a(5162);const i={toc:[]};function s(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the USB cable to plug the MagTag into your local computer. Ensure the\npower switch is in the 'On' position.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Put the MagTag into DFU bootloader mode"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Hold down the Boot0 button")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press and release the Reset button"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"MagTag Boot0 and Reset buttons",src:a(8606).Z,width:"1000",height:"643"})))))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the flash command on your local machine:"),(0,o.kt)(r.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux/MacOS",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd ~/Downloads\nesptool.py --chip esp32s2 --port /dev/ttyACM0 write_flash 0x0 merged_<appfolder>_<hhmmss>.bin\n"))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd %HOMEPATH%/Downloads\npython -m esptool --chip esp32s2 --port com3 write_flash 0x0 merged_<appfolder>_<hhmmss>.bin\n")),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The port for your MagTag may be different from the ",(0,o.kt)("inlineCode",{parentName:"p"},"com3")," shown above.\nFind this value in the Device Manager. Here's ",(0,o.kt)("a",{parentName:"p",href:"https://www.loom.com/share/cde8204ea8b341d892f6ad21ed43ac82"},"a video walkthrough of the\nprocess"),"."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press the MagTag ",(0,o.kt)("strong",{parentName:"p"},"Reset")," button to start the new firmware"))),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the flash is successful, ",(0,o.kt)("strong",{parentName:"p"},"you will receive an error message")," telling you that you must manually reset the device. Remember to press the reset button to run the newly flashed program. ",(0,o.kt)("a",{parentName:"p",href:"/docs/zephyr-intro/zephyr-tips#you-must-press-the-reset-button-after-flashing-firmware"},"Learn more about this"),"."),(0,o.kt)("p",{parentName:"admonition"},"On some machines you will only have a few seconds to run the ",(0,o.kt)("inlineCode",{parentName:"p"},"esptool.py")," command after entering bootloader mode. ",(0,o.kt)("a",{parentName:"p",href:"/docs/zephyr-intro/zephyr-tips#errors-with-west-build-zephyr-tree-and-esp32-environmental-variables"},"Learn more about this"),".")))}s.isMDXComponent=!0},1018:(e,t,a)=>{a.d(t,{ZP:()=>p});var n=a(7462),o=(a(7294),a(3905)),r=a(5488),l=a(5162),i=a(873);const s={toc:[]};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Put the MagTag into DFU bootloader mode (Hold Boot0, tap Reset)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change to the download directory and run the flash command on your local machine:"),(0,o.kt)(r.Z,{groupId:"os",defaultValue:"linux",values:[{label:"Linux/MacOS",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd ~/Downloads\nesptool.py --chip esp32s2 --port /dev/ttyACM0 write_flash 0x0 merged_<appfolder>_<hhmmss>.bin\n"))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd %HOMEPATH%/Downloads\npython -m esptool --chip esp32s2 --port com3 write_flash 0x0 merged_<appfolder>_<hhmmss>.bin\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press the MagTag ",(0,o.kt)("strong",{parentName:"p"},"Reset")," button to start the new firmware"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click to reveal full firmware update instructions"),(0,o.kt)(i.ZP,{mdxType:"VerbostDownloadFlash"})))}p.isMDXComponent=!0},9887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(7462),o=(a(7294),a(3905)),r=a(1018);const l={sidebar_position:3,description:"Fetch and use the pin assignments from the Devicetree in C code"},i="Blinking an LED",s={unversionedId:"basic-io-exercises/mapping-gpio",id:"basic-io-exercises/mapping-gpio",title:"Blinking an LED",description:"Fetch and use the pin assignments from the Devicetree in C code",source:"@site/docs/basic-io-exercises/mapping-gpio.md",sourceDirName:"basic-io-exercises",slug:"/basic-io-exercises/mapping-gpio",permalink:"/docs/basic-io-exercises/mapping-gpio",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Fetch and use the pin assignments from the Devicetree in C code"},sidebar:"tutorialSidebar",previous:{title:"Zephyr Devicetree",permalink:"/docs/basic-io-exercises/devicetree"},next:{title:"Add Button Input",permalink:"/docs/basic-io-exercises/button-input"}},p={},d=[{value:"Learning Objectives",id:"learning-objectives",level:2},{value:"Desired outcome(s)",id:"desired-outcomes",level:3},{value:"Time Estimate",id:"time-estimate",level:3},{value:"Workflow",id:"workflow",level:2},{value:"Copy the Zephyr Blinky example",id:"copy-the-zephyr-blinky-example",level:3},{value:"Exercise: Add <code>led0</code> to your empty overlay file",id:"exercise-add-led0-to-your-empty-overlay-file",level:3},{value:"Build and flash the example",id:"build-and-flash-the-example",level:3},{value:"C code walkthrough",id:"c-code-walkthrough",level:2}],u={toc:d};function c(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"blinking-an-led"},"Blinking an LED"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"MagTag LED on pin D13",src:a(3077).Z,width:"1000",height:"492"})))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Make this LED blink!")))),(0,o.kt)("h2",{id:"learning-objectives"},"Learning Objectives"),(0,o.kt)("p",null,'Making an LED blink is the "Hello World!" of the hardware universe. This exercise challenges you to set up the red LED on the underside of the MagTag board in Devicetree. If you map it correctly with the alias ',(0,o.kt)("inlineCode",{parentName:"p"},"led0"),", the stock Zephyr blinky example will do the rest."),(0,o.kt)("h3",{id:"desired-outcomes"},"Desired outcome(s)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modify the Zephyr blinky example"),(0,o.kt)("li",{parentName:"ul"},"Create an overlay file"),(0,o.kt)("li",{parentName:"ul"},"Load the new binary to your board"),(0,o.kt)("li",{parentName:"ul"},"See an LED blinking!")),(0,o.kt)("h3",{id:"time-estimate"},"Time Estimate"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"10 minutes")),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("h3",{id:"copy-the-zephyr-blinky-example"},"Copy the Zephyr Blinky example"),(0,o.kt)("p",null,"Make a copy of the Zephyr Blinky example to work from"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~/Desktop/magtag-training/app\ncp -r ~/Desktop/magtag-training/deps/zephyr/samples/basic/blinky blinky-training\ncd blinky-training\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},"boards")," directory in your ",(0,o.kt)("inlineCode",{parentName:"li"},"blinky-training")," folder"),(0,o.kt)("li",{parentName:"ol"},"Create a new file in the boards folder called ",(0,o.kt)("inlineCode",{parentName:"li"},"esp32s2_saola.overlay"))),(0,o.kt)("p",null,"The MagTag board isn't officially supported in Zephyr, so we are using the DTS files for the Espressif Saola dev board which uses the same ESP32s2 module."),(0,o.kt)("h3",{id:"exercise-add-led0-to-your-empty-overlay-file"},"Exercise: Add ",(0,o.kt)("inlineCode",{parentName:"h3"},"led0")," to your empty overlay file"),(0,o.kt)("p",null,"To populate our overlay file you can just copy the needed parts of an existing DTS file."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ESP32 WROVER kit has LEDs on it. We can study ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/xtensa/esp_wrover_kit/esp_wrover_kit.dts"},"the DTS file for that board")," and use the parts we need for our MagTag:"),(0,o.kt)("li",{parentName:"ul"},"open ",(0,o.kt)("inlineCode",{parentName:"li"},"~/Desktop/magtag-training/deps/zephyr/boards/xtensa/esp_wrover_kit/esp_wrover_kit.dts"))),(0,o.kt)("p",null,"Here is the general structure you will need:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/ {\n    child-node {\n        subnode_nodelabel: a-sub-node {\n            foo = <3>;\n            label = "SUBNODE";\n        };\n    };\n};\n')),(0,o.kt)("p",null,"As with Linux, the ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," indicates a root node. Inside the root node we see one child node, which contains one subnode."),(0,o.kt)("p",null,"For your overlay file you will need to create:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One root node that contains two child nodes: ",(0,o.kt)("inlineCode",{parentName:"li"},"aliases")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"leds")),(0,o.kt)("li",{parentName:"ul"},"The leds child node needs a subnode that declares the red LED"),(0,o.kt)("li",{parentName:"ul"},"The aliases child node needs a subnode that associates the ",(0,o.kt)("inlineCode",{parentName:"li"},"led0")," alias with your red LED subnode")),(0,o.kt)("p",null,"Once you have copied the relevant parts from the WROVER kit DTS file into your overlay file, update the pin number for the LED. After consulting ",(0,o.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/assets/96946"},"the schematic")," we can see the D13 pin that connects to the red LED is routed to the ESP32s2 GPIO13 pin."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MagTag red LED is connected via the D13 signal",src:a(7832).Z,width:"400",height:"123"})),(0,o.kt)("p",null,"With this family of microcontrollers, any IO number that is less-than 32 will be on ",(0,o.kt)("inlineCode",{parentName:"p"},"&gpio0"),". Just update the pin number that follows that directive to match what you need. Compare your completed overlay file to the code below."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click to reveal the expected esp32s2_saola.overlay file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"esp32s2_saola.overlay","esp32s2_saola.overlay":!0},'/ {\n    aliases {\n        led0 = &red_led;\n    };\n    leds {\n        compatible = "gpio-leds";\n        red_led: red_led {\n            gpios =  <&gpio0 13 GPIO_ACTIVE_HIGH>;\n            label = "Red - LED2";\n        };\n    };\n};\n')),(0,o.kt)("p",null,"In general, subnode names, subnode labels, and the label properties can be named anything that you want. If you compare this overlay file to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golioth/magtag-demo/blob/blinky/boards/esp32s2_saola.overlay"},"overlay file previously used in the blinky example")," during Zephyr Exercises part of this training, you'll find the subnode for the LED was named differently."),(0,o.kt)("p",null,"Of note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"compatible")," property tells Zephyr the type of binding we are using"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"gpios")," assignment indicates several gpio properties:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&gpio0")," ","\u2013"," assigns the port that drives these pins (Further reading: ",(0,o.kt)("a",{parentName:"li",href:"https://blog.golioth.io/how-to-set-up-esp32-gpio-pins-in-zephyr/"},"how ESP32 pin/port assignments work"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"13")," ","\u2013"," assigns the pin number based on the IO## (or GPIO##) number, not the physical pin number on the package"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GPIO_ACTIVE_HIGH")," ","\u2013"," a flag that sets the active state of the pin. This is also where you could set a pull-up or pull-down resistor by using a bitmask: ",(0,o.kt)("inlineCode",{parentName:"li"},"(GPIO_ACTIVE_HIGH | GPIO_PULL_UP)")))))),(0,o.kt)("h3",{id:"build-and-flash-the-example"},"Build and flash the example"),(0,o.kt)(r.ZP,{mdxType:"HowToFlash"}),(0,o.kt)("h2",{id:"c-code-walkthrough"},"C code walkthrough"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"#define LED0_NODE DT_ALIAS(led0)\nstatic const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);\ngpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);\ngpio_pin_set_dt(&led, 1);\n")),(0,o.kt)("p",null,"Here is the relevant code the from ",(0,o.kt)("inlineCode",{parentName:"p"},"main.c")," file of the blinky example. Let's walk through what is happening:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A macro is used to look at the Devicetree and get the node information from the ",(0,o.kt)("inlineCode",{parentName:"li"},"led0")," alias"),(0,o.kt)("li",{parentName:"ol"},"Create a struct instance called ",(0,o.kt)("inlineCode",{parentName:"li"},"led")," that contains the relevant pin information for led0"),(0,o.kt)("li",{parentName:"ol"},"The pin is configured. This function automatically pulls in any flags specified in the Devicetree"),(0,o.kt)("li",{parentName:"ol"},"The pin is set to high (as an example we've shown the set function instead of the toggle function used in the blinky example)")),(0,o.kt)("p",null,"Notice that the macros and functions used all contain ",(0,o.kt)("inlineCode",{parentName:"p"},"dt")," to indicate these operate on a Devicetree node. There are equivalent functions/macros that operate directly, but we recommend always using the Devicetree."),(0,o.kt)("p",null,"For more information on the Zephyr GPIO system, consult ",(0,o.kt)("a",{parentName:"p",href:"https://docs.zephyrproject.org/apidoc/latest/group__gpio__interface.html"},"the GPIO driver API reference"),"."))}c.isMDXComponent=!0},8606:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/magtag-bootloader-mode-5c7952ae3bb40ddc89a40e0f41cf721f.jpg"},3077:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/d13-LED-eba32f2cfb70a342c52a2f0a43a4fdb0.jpg"},7832:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/magtag-red-led-pinout-603534633237f640651f45b256ed92a2.jpg"}}]);