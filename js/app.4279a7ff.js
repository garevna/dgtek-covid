(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dgtek-covid/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("8a23"),r=a.n(n);r.a},"0968":function(t,e,a){"use strict";var n=a("de00"),r=a.n(n);r.a},"0b0a":function(t,e,a){t.exports=a.p+"img/ico-1.2696b6cc.svg"},"1ae8":function(t,e,a){},2775:function(t,e,a){t.exports=a.p+"img/header-back-large.a2e7c30a.png"},"2a09":function(t,e,a){t.exports=a.p+"img/ico-2.5dd01049.svg"},"392f":function(t,e,a){"use strict";var n=a("4bdf"),r=a.n(n);r.a},"41b0":function(t,e,a){"use strict";var n=a("ebdc"),r=a.n(n);r.a},"4bdf":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("Header"),n("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:""}},[n("v-row",{staticClass:"pa-0 ma-0",attrs:{justify:"center"}},[n("v-sheet",{staticClass:"mx-auto",attrs:{width:"100%",color:"homefone",tile:""}},[n("v-row",{staticClass:"mx-0 px-0"},[n("v-col",{staticClass:"mx-0 px-0",attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"transparent mx-0",attrs:{flat:""}},[n("v-img",{staticStyle:{opacity:"0.2"},attrs:{src:a("d72e"),height:"800",contain:""}}),n("v-card",{staticClass:"user-contact transparent mx-auto pa-0",staticStyle:{"margin-bottom":"120px"},attrs:{width:t.viewport.width>600?450:340,flat:""}},[n("UserContact")],1)],1)],1),n("v-col",{staticClass:"aside-col",attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"aside-card transparent",attrs:{flat:""}},[n("Aside")],1)],1)],1)],1)],1),n("v-row",{staticClass:"mx-0 px-0"},[n("BandWidth")],1),n("v-row",{staticClass:"mx-0 px-0"},[n("FAQ")],1),n("v-row",{staticClass:"mx-0 px-0"},[n("StayConnected")],1),n("v-row",[n("section",{staticClass:"mx-auto",attrs:{id:"footer"}},[n("div",{staticClass:"base-title"},[n("a",{staticClass:"core-goto",attrs:{href:"#footer"}}),n("Footer")],1)])])],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"header-back ma-0 pa-0",attrs:{fluid:""}},[n("v-img",{staticClass:"mx-0 px-0",attrs:{src:t.headerBackImage,height:t.headerHeight,position:t.headerBackPosition}},[n("v-row",{staticClass:"mx-0 px-0"},[n("v-col",{staticClass:"mx-0 px-0",attrs:{cols:"12",lg:"6"}},[n("v-card",{staticClass:"header-card transparent",attrs:{flat:""}},[n("v-card-title",{staticClass:"mx-0"},[n("h1",[t._v("Helping The Community")])]),n("v-card-text",{staticClass:"mx-0"},[n("h5",[t._v("The COVID-19 pandemic is the defining challenge of our generation. Here’s how we’re helping.")])])],1)],1),n("v-col",{staticClass:"mx-0 px-0 mt-12",attrs:{cols:"12",lg:"6"}},[n("v-card",{staticClass:"transparent mx-auto my-12 py-12 text-center",attrs:{flat:""}},[n("v-img",{staticClass:"picture",attrs:{src:a("9487")}})],1)],1)],1)],1)],1)},s=[],c={name:"Header",data:function(){return{viewport:{width:window.innerWidth,height:window.innerHeight}}},computed:{headerHeight:function(){return this.viewport.width>=1904?"1000px":this.viewport.width>=1440?"810px":"770px"},headerBackImage:function(){return this.viewport.width>=1904?a("2775"):this.viewport.width<900?a("9819"):a("7e44")},headerBackPosition:function(){return console.log(this.viewport.width>=1904?"center top":"left top"),this.viewport.width>=1904?"center top":"left top"}},methods:{onResize:function(){this.viewport.width=window.innerWidth,this.viewport.height=window.innerHeight}},mounted:function(){window.addEventListener("resize",this.onResize,{passive:!0})},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})}},l=c,d=(a("392f"),a("2877")),u=a("6544"),p=a.n(u),h=a("b0af"),f=a("99d9"),v=a("62ad"),m=a("a523"),g=a("adda"),w=a("0fd9"),b=Object(d["a"])(l,o,s,!1,null,"e55af852",null),A=b.exports;p()(b,{VCard:h["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:v["a"],VContainer:m["a"],VImg:g["a"],VRow:w["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"aside-card transparent mx-3",attrs:{flat:"",width:"480"}},[a("v-card-title",[a("h2",[t._v("Our Offer To The Community")])]),a("v-card-text",[a("p",[t._v(" DGtek wants to help you adjust to the new normal."),a("br"),t._v(" That’s why we are giving away ultra-fast fibre connections - for free. No strings attached."),a("br"),t._v(" No clauses or contracts. ")])]),a("v-card-text",[a("p",{staticStyle:{"margin-left":"0!important"}},[a("b",[t._v("Exactly what’s on offer:")])]),a("h5",[t._v("6 months "),a("span",{staticClass:"red--text"},[t._v("of free internet*")])]),a("h5",[t._v("3 months "),a("span",{staticClass:"red--text"},[t._v("of free internet**")])])]),a("v-card-text",[a("p",{staticClass:"small"},[t._v(" *to pensioners, retirees and residents in aged care facilities"),a("br"),t._v(" **to all families impacted by COVID-19 ")])])],1)},C=[],y=(a("6572"),{}),k=Object(d["a"])(y,x,C,!1,null,"5ec4e601",null),_=k.exports;p()(k,{VCard:h["a"],VCardText:f["b"],VCardTitle:f["c"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"user-info mx-auto pa-6"},[a("v-card-title",[a("h4",[t._v("Get Our Limited Offer!")])]),a("v-card-text",{staticClass:"mx-0 px-0",attrs:{width:"100%"}},[t._l(t.items,(function(e,n){return a("v-text-field",{key:n,staticClass:"user-inputs",attrs:{placeholder:e.placeholder,outlined:"",color:e.color,error:e.error,"append-icon":e.validationIcon},on:{input:function(a){return t.validate(e)}},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}})})),a("v-textarea",{staticClass:"user-inputs",attrs:{placeholder:"Tell us how covid-19 impacted you*",outlined:"",color:"#656565","auto-grow":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],2),a("v-card-actions",{staticClass:"text-center"},[a("v-btn",{staticClass:"submit-button",attrs:{dark:"",width:"100%",height:"65",color:"buttons"},on:{click:t.sendUserRequest}},[t._v("SUBMIT")])],1),a("Popup",{attrs:{opened:t.popupOpened},on:{"update:opened":function(e){t.popupOpened=e}}})],1)},E=[],T=(a("99af"),a("b0c0"),a("a9e3"),a("d3b7"),a("96cf"),a("1da1")),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.opened,callback:function(e){t.opened=e},expression:"opened"}},[a("v-card",{staticClass:"pa-6"},[a("v-card-title",[a("h2",{attrs:{"text-color":"primary"}},[t._v("Thanks!")])]),a("v-card-text",[a("p",[t._v("We'll get back to you shortly")])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"primary",attrs:{text:""},on:{click:function(e){return t.$emit("update:opened",!1)}}},[t._v("CLOSE")])],1)],1)],1)],1)},F=[],R={name:"Popup",props:["opened"]},O=R,B=a("8336"),D=a("169a"),I=a("2fa4"),j=Object(d["a"])(O,S,F,!1,null,"9b945564",null),G=j.exports;p()(j,{VBtn:B["a"],VCard:h["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VDialog:D["a"],VRow:w["a"],VSpacer:I["a"]});var P=a("1ffa"),M={name:"UserContact",components:{Popup:G},data:function(){return{message:"",normalColor:"#656565",errorColor:"#FF0E00",popupOpened:!1,items:{name:{value:"",placeholder:"Name*",error:!1,color:"",validationIcon:"",validator:function(){this.error=this.value.length<2}},email:{value:"",placeholder:"Email*",error:!1,color:"",validationIcon:"",validator:function(){this.error=!P.validate(this.value),this.validationIcon=this.error?"$invalid":"$valid",this.color=this.error?"#FF0E00":"#656565"}},address:{value:"",placeholder:"Address*",error:!1,color:"",validationIcon:"",validator:function(){this.error=this.value.length<5}},postcode:{value:"",placeholder:"Postcode*",error:!1,color:"",validationIcon:"",validator:function(){this.error=!Number(this.value)||Number(this.value)<3e3||Number(this.value)>9999}},state:{value:"",placeholder:"State*",error:!1,color:"",validationIcon:"",validator:function(){this.error=this.value.length<5}}}}},computed:{},methods:{initFields:function(){for(var t in this.items)this.items[t].validationIcon="",this.items[t].error=!1,this.items[t].color=this.normalColor,this.items[t].value="";this.message=""},validate:function(t){t.validator(),t.validationIcon=t.error?"$invalid":"$valid",t.color=t.error?this.errorColor:this.normalColor},findErrors:function(){var t=0;for(var e in this.items)this.validate(this.items[e]),t+=this.items[e].error;return t>0},sendUserRequest:function(){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.findErrors()){e.next=2;break}return e.abrupt("return");case 2:return t.popupOpened=!0,e.next=5,fetch("https://dka.dgtek.net/api/frontend/mail",{method:"POST",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"},body:JSON.stringify({name:t.items.name.value,email:t.items.email.value,phone:"...",subject:"COVID-19: DGTek helping The Community",message:"Your address: ".concat(t.items.address.value,", ").concat(t.items.postcode.value,", ").concat(t.items.state.value,"\nYour message:\n").concat(t.message)})});case 5:return e.next=7,e.sent.json();case 7:t.initFields();case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.initFields()}},H=M,N=(a("7612"),a("8654")),W=a("a844"),L=Object(d["a"])(H,V,E,!1,null,"550b1ba7",null),U=L.exports;p()(L,{VBtn:B["a"],VCard:h["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VTextField:N["a"],VTextarea:W["a"]});var z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"homefone ma-0 pa-0",attrs:{fluid:""}},[n("v-img",{staticClass:"mx-0 px-0",attrs:{src:a("847c"),height:t.backgroundHeight,position:"center"}}),n("v-card",{staticClass:"white-title transparent mx-auto",style:{marginTop:t.whiteTextMarginTop},attrs:{flat:""}},[n("v-card-title",[n("h2",[t._v("All The Bandwidth You’ll Ever Need , Zero Congestion.")])]),n("v-card-text",[n("h5",[t._v("We started building our fibre-to-the-home network in 2016."),n("br"),t._v(" In all this time, we have maintained 99.9% uptime and have never delivered a speed below what we promised to a customer.")])])],1),n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"mx-auto",attrs:{cols:"12",lg:"10",xl:"8"}},[n("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.cards,(function(e,a){return n("v-col",{key:a,attrs:{cols:"12",lg:"4"}},[n("v-card",{staticClass:"cards mx-auto px-6 px-xs-4",style:{marginTop:t.cardsMarginTop},attrs:{shaped:"",elevation:"10"}},[n("v-img",{staticClass:"red-icons",attrs:{src:e.image,width:t.iconSize,height:t.iconSize,contain:"",position:"left"}}),n("h3",[t._v(t._s(e.title))]),n("v-card-text",[n("p",[t._v(t._s(e.text))])])],1)],1)})),1)],1)],1)],1)],1)},Y=[],q={name:"BandWidth",data:function(){return{viewport:{width:window.innerWidth,height:window.innerHeight},cards:[{image:a("0b0a"),title:"Symmetrical Speeds",text:"DGTek gives you the same upload and download speed.\n            Our upload speeds are 20x faster than the NBN.\n            This means all your upload thirsty Skype, Zoom and Google Hangouts calls are handled, no issue!"},{image:a("2a09"),title:"Zero Congestion",text:"Stream in 4K on every TV, laptop and phone in your house - no waiting time. With our 500Mbps fibre connection, we never miss a beat."},{image:a("7661"),title:"Reliability",text:"In these uncertain times, the internet is our lifeline. It connects us to our work, our friends and our families. DGtek’s fibre has 99.9% uptime, how’s that for peace of mind?"}]}},computed:{fullHeight:function(){return this.viewport.width>=1140?"766px":"1045px"},backgroundHeight:function(){return this.viewport.width>=1140?"635px":"955px"},whiteTextMarginTop:function(){return this.viewport.width>=1140?"-580px":"-900px"},whiteTextMarginLeft:function(){return this.viewport.width>=1140?"380px":"100px"},cardsMarginTop:function(){return this.viewport.width>1140?"40px":"0px"},iconSize:function(){return this.viewport.width>1140?"51px":"32px"}},methods:{onResize:function(){this.viewport.width=window.innerWidth,this.viewport.height=window.innerHeight}},mounted:function(){window.addEventListener("resize",this.onResize,{passive:!0})},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})}},Q=q,K=(a("7aa9"),Object(d["a"])(Q,z,Y,!1,null,"ec9f7496",null)),X=K.exports;p()(K,{VCard:h["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:v["a"],VContainer:m["a"],VImg:g["a"],VRow:w["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"homefone mx-auto my-12 px-0 py-12"},[a("v-card",{staticClass:"transparent mx-auto",attrs:{flat:"","max-width":"980"}},[a("v-card-title",[a("h2",[t._v("FAQ")])]),a("v-card-text",[a("v-expansion-panels",{attrs:{accordion:"",focusable:"",flat:"",hover:"",tile:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},t._l(t.faq,(function(e,n){return a("v-expansion-panel",{key:n},[a("v-expansion-panel-header",{attrs:{height:"64"},scopedSlots:t._u([{key:"actions",fn:function(){return[a("v-icon",{attrs:{color:"#444"}},[t._v("$expand")])]},proxy:!0}],null,!0)},[a("h5",{staticClass:"my-0"},[t._v(t._s(e.question))])]),a("v-expansion-panel-content",{staticClass:"answer",domProps:{innerHTML:t._s(e.answer)}})],1)})),1)],1)],1)],1)},J=[],$={name:"FAQ",data:function(){return{panel:null,faq:[{question:"Why is DGtek Giving Away Free Internet? ",answer:"<div>\n              <p>Aside from the fact that it’s our civic duty, and we are clearly all in this together, most of Australia’s internet infrastructure just isn’t equipped to handle traffic of this magnitude.</p>\n              <p>DGtek offers the best fibre internet service in Australia. Unfortunately, the only people who know this are already our customers.\n              If we can help our fellow Aussies and spread the word at the same time, well that’s a no-brainer.</p>\n              <p>If you live in the area or know someone that does - take advantage of FREE fibre internet</p>\n          </div>"},{question:"How Does DGtek’s Symmetrical Fibre Help Me Work or Study from Home?",answer:"<div>\n                    <p>You might have noticed that all of the NBN’s residential connections have much faster download speeds than upload speeds.</p>\n                    <p>An assumption has been made about how we use the internet and to be fair it’s a pretty safe assumption. Unfortunately, their vision wasn’t 2020.</p>\n                    <p>Today, the virus has flipped society on its head and turned our homes into our offices.\n                    There could be as many people working online in your street as you’d find in a large office building - and that is a problem.</p>\n                    <p>Business applications like video conferencing are further antagonising the lack-of-bandwidth issue because they are upload thirsty.\n                    Remember, Australian homes had less upload bandwidth to begin with and the added strain has resulted in additional congestion. </p>\n                    <p>When the kids are online-learning, parents are online-working and grandma is FaceTiming, that bandwidth is shared by everyone.</p>\n                    <p>If there isn’t enough to go around, then connection quality suffers, calls are dropped, and voices are delayed.</p>\n                    <p>DGtek’s internet service alleviates all these problems by simply offering symmetrical speeds.</p>\n                    <p>All you really need to understand is that our upload speeds are as fast as our downloads.</p>\n                    <p>DGtek’s 500Mbps download is 5x faster than the fastest NBN 100 download internet service.</p>\n                    <p>DGtek’s 500Mbps upload is over 10x faster than the fastest NBN’s 40Mbps upload internet service.</p>\n                  </div>\n                   "},{question:"Where is DGtek Available?",answer:'<div>\n            <p>\n              DGtek currently provides ultra-fast, direct fibre service to homes and businesses across Melbourne CBD and South-East suburbs – Port/South Melbourne, St Kilda, Elwood, Bentleigh and Moorabbin.\n            </p>\n            <a href="#footer">DGtek</a>\n            </div>'}]}}},tt=$,et=(a("0968"),a("cd55")),at=a("49e2"),nt=a("c865"),rt=a("0393"),it=a("132d"),ot=Object(d["a"])(tt,Z,J,!1,null,"9631de6a",null),st=ot.exports;p()(ot,{VCard:h["a"],VCardText:f["b"],VCardTitle:f["c"],VContainer:m["a"],VExpansionPanel:et["a"],VExpansionPanelContent:at["a"],VExpansionPanelHeader:nt["a"],VExpansionPanels:rt["a"],VIcon:it["a"]});var ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-card",{staticClass:"transparent mx-auto",attrs:{flat:"","max-width":"900"}},[a("v-card-title",[a("h2",[t._v("Stay connected")])]),a("v-card-text",[a("p",[t._v("Send us an enquiry and a member of our team will get back to you as soon as possible to answer any questions you may have or guide you through the connection process")])]),a("v-row",{staticClass:"py-3 py-md-12",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",lg:"4"}},[a("v-text-field",{attrs:{placeholder:"Name*",outlined:"",filled:"",height:"48",color:"#656565"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-col",{attrs:{cols:"12",lg:"4"}},[a("v-text-field",{attrs:{placeholder:"Email*",outlined:"",filled:"",height:"48",color:t.emailColor},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12",lg:"4"}},[a("v-text-field",{attrs:{placeholder:"Phone*",outlined:"",filled:"",height:"48",color:"#656565"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{filled:"",placeholder:"Your Message","auto-grow":"",color:"#656565"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1),a("v-row",{staticClass:"py-3",attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"submit",attrs:{cols:"12"}},[a("v-btn",{staticClass:"buttons",attrs:{dark:"",width:"220",height:"48"},on:{click:t.sendData}},[t._v("Submit")])],1)],1)],1)],1),a("Popup",{attrs:{opened:t.popupOpened},on:{"update:opened":function(e){t.popupOpened=e}}})],1)],1)},lt=[],dt=(a("4160"),a("1ffa")),ut={components:{Popup:G},data:function(){return{name:"",phone:"",email:"",message:"",popupOpened:!1,emailError:!1,emailColor:"",normalColor:"#454545",errorColor:"#FF0E00"}},watch:{email:function(t){this.emailError=!dt.validate(t),this.emailColor=this.emailError?this.errorColor:this.normalColor}},methods:{initFields:function(){var t=this;["name","phone","email","message"].forEach((function(e){t[e]=""})),this.emailError=!1,this.emailColor=this.normalColor},sendData:function(){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.emailError){e.next=2;break}return e.abrupt("return");case 2:return t.popupOpened=!0,e.next=5,fetch("https://dka.dgtek.net/api/frontend/mail",{method:"POST",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"},body:JSON.stringify({name:t.name,email:t.email,phone:t.phone,subject:"COVID-19: DGTek helping The Community",message:t.message})});case 5:return e.next=7,e.sent.json();case 7:t.initFields();case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.initFields()}},pt=ut,ht=(a("d372"),Object(d["a"])(pt,ct,lt,!1,null,"d9964b72",null)),ft=ht.exports;p()(ht,{VBtn:B["a"],VCard:h["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:v["a"],VContainer:m["a"],VRow:w["a"],VTextField:N["a"],VTextarea:W["a"]});var vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"mx-auto"},[n("v-col",{staticClass:"mx-auto",attrs:{cols:"12",xl:"10"}},[n("v-row",[n("v-col",{attrs:{cols:"12",lg:"4"}},[n("v-card",{staticClass:"transparent mx-auto",attrs:{flat:""}},[n("v-card-actions",[n("v-img",{staticStyle:{"margin-left":"8px"},attrs:{src:a("fe29"),width:"80",height:"52",contain:"",position:"left center"}})],1),n("v-card-title",[n("h6",[t._v("About us")])]),n("v-card-text",[n("p",[t._v(" DGtek is a registered Australia Telecommunications Infrastructure Carrier that designs, builds, operates and maintains high-speed Optical Fibre Networks. ")])])],1)],1),n("v-col",{attrs:{cols:"12",lg:"2"}},[n("v-card",{staticClass:"transparent mx-auto",attrs:{flat:""}},[n("v-card-title",[n("h6",[t._v("Company")])]),n("v-card-text",[n("p",[n("a",{attrs:{href:"https://dgtek.net/products",target:"_blank"}},[t._v("Products")])]),n("p",[n("a",{attrs:{href:"https://dgtek.net",target:"_blank"}},[t._v("About Us")])]),n("p",[n("a",{attrs:{href:"https://dgtek.net/blog/dgtek-in-media",target:"_blank"}},[t._v("Dgtek in Media")])]),n("p",[n("a",{attrs:{href:"https://dgtek.net/blog",target:"_blank"}},[t._v("Blog")])]),n("p",[n("a",{attrs:{href:"https://dgtek.net",target:"_blank"}},[t._v("FAQ")])])])],1)],1),n("v-col",{attrs:{cols:"12",lg:"2"}},[n("v-card",{staticClass:"transparent mx-auto",attrs:{flat:""}},[n("v-card-title",[n("h6",[t._v("Products")])]),n("v-card-text",[n("p",[n("a",{attrs:{href:"https://dgtek.net/products/residential-internet",target:"_blank"}},[t._v("Residential Internet")])]),n("p",[n("a",{attrs:{href:"https://dgtek.net/products/commercial-internet",target:"_blank"}},[t._v("Commercial Internet")])]),n("p",[n("a",{attrs:{href:"https://dgtek.net/products/dedicated-services",target:"_blank"}},[t._v("Lit/dark fibre")])]),n("p",[n("a",{attrs:{href:"https://dgtek.net/products/developers",target:"_blank"}},[t._v("Developers/greenfield")])]),n("p",[n("a",{attrs:{href:"https://dgtek.net/products/owners-corporations",target:"_blank"}},[t._v("OCs&body corporates")])]),n("p",[n("a",{attrs:{href:"https://dgtek.net/products/social-responsibility",target:"_blank"}},[t._v("Free internet for not-for-profit")])])])],1)],1),n("v-col",{attrs:{cols:"12",lg:"2"}},[n("v-card",{staticClass:"transparent mx-auto",attrs:{flat:""}},[n("v-card-title",[n("h6",[t._v("Client")])]),n("v-card-text",[n("p",[t._v("Website Disclaimer")]),n("p",[t._v("Terms & Conditions")]),n("p",[t._v("DGTek Privacy Policy")])])],1)],1),n("v-col",{attrs:{cols:"12",lg:"2"}},[n("v-card",{staticClass:"transparent mx-auto",attrs:{flat:""}},[n("v-card-title",[n("h6",[t._v("Contacts")])]),n("v-card-text",[n("p",[t._v("Phone: "),n("a",{attrs:{href:"tel:1800 359 602"}},[t._v("1800 359 602")])]),n("p",[t._v("Email: "),n("a",{attrs:{href:"mailto:info@dgtek.net"}},[t._v("info@dgtek.net")])]),n("p",[n("a",{attrs:{href:"https://www.facebook.com/ISPDGtek/",target:"_blank"}},[n("v-img",{attrs:{src:a("b403"),width:"10",height:"10",contain:""}})],1),n("a",{attrs:{href:"https://www.picuki.com/tag/DGTEK",target:"_blank"}},[n("v-img",{attrs:{src:a("7c69"),width:"10",height:"10",contain:""}})],1),n("a",{attrs:{href:"https://www.linkedin.com/company/dgtek/",target:"_blank"}},[n("v-img",{attrs:{src:a("f6ce"),width:"10",height:"10",contain:""}})],1)])])],1)],1)],1)],1)],1),n("hr"),n("v-row",{staticClass:"mx-auto"},[n("p",{staticStyle:{width:"100%","text-align":"center"}},[t._v("2019 © DGtek Pty. Ltd. ABN 61 600 896 115")])])],1)},mt=[],gt={name:"Footer",data:function(){return{viewport:{width:window.innerWidth,height:window.innerHeight}}},methods:{onResize:function(){this.viewport.width=window.innerWidth,this.viewport.height=window.innerHeight}},mounted:function(){window.addEventListener("resize",this.onResize,{passive:!0})},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})}},wt=gt,bt=(a("41b0"),Object(d["a"])(wt,vt,mt,!1,null,"9efd57b0",null)),At=bt.exports;p()(bt,{VCard:h["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:v["a"],VContainer:m["a"],VImg:g["a"],VRow:w["a"]});var xt={name:"App",components:{Header:A,Aside:_,UserContact:U,BandWidth:X,FAQ:st,StayConnected:ft,Footer:At},data:function(){return{cards:null,viewport:{width:window.innerWidth,height:window.innerHeight}}},computed:{headerHeight:function(){return this.viewport.width>=1440?810:770}},methods:{clickHandler:function(t){window.open(t)},onResize:function(){this.viewport.width=window.innerWidth,this.viewport.height=window.innerHeight}},beforeMount:function(){},mounted:function(){window.addEventListener("resize",this.onResize,{passive:!0})},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})}},Ct=xt,yt=(a("034f"),a("c75e"),a("7496")),kt=a("8dd9"),_t=Object(d["a"])(Ct,r,i,!1,null,"024ef5da",null),Vt=_t.exports;p()(_t,{VApp:yt["a"],VCard:h["a"],VCol:v["a"],VContainer:m["a"],VImg:g["a"],VRow:w["a"],VSheet:kt["a"]});a("5363");var Et=a("f309");n["a"].use(Et["a"]);var Tt=new Et["a"]({icons:{iconfont:"mdi",values:{expand:"mdi-chevron-down",valid:"mdi-check-bold",invalid:"mdi-alert-outline"}},theme:{themes:{light:{primary:"#FF0E00",secondary:"#E82F37",buttons:"#F54436",homefone:"#FEFEFE",inputs:"#EFEFEF",activefield:"#D9D9D9",warning:"#FAFF00"},dark:{primary:"#FF0E00",secondary:"#E82F37",buttons:"#F54436",homefone:"#FEFEFE",fields:"#EFEFEF",activefield:"#D9D9D9",warning:"#FAFF00"}}}}),St=(a("7d5d"),a("b339"),a("9483"));Object(St["a"])("".concat("/dgtek-covid/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].use(Tt),n["a"].config.productionTip=!1;new n["a"]({vuetify:Tt,render:function(t){return t(Vt)}}).$mount("#app")},6572:function(t,e,a){"use strict";var n=a("c256"),r=a.n(n);r.a},7612:function(t,e,a){"use strict";var n=a("1ae8"),r=a.n(n);r.a},7661:function(t,e,a){t.exports=a.p+"img/ico-3.1f39d358.svg"},"7aa9":function(t,e,a){"use strict";var n=a("f1d9"),r=a.n(n);r.a},"7c69":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEbSURBVHgBrZPNbcJAEIVnxy6AEtJBSAVxOiAd2BVkL5av3C1L7iChgiQdmA4owSVw9x/vAZYQrDEYnrSyNT/fjGZ2TZIkL23bfotIINNUqGqkD0KogAydAkFiiM9b13WrHqZyp5BcZFm2StN043nesrdfA22RtMRZyKFri1MaY+acKwOapln0wSaO484B2VRV9ZHn+fbUaK2d+b6fY7jvKEDf/FpHJSCf5xCKtrquLSByCnGCEPSHhFIGRBhifs7tro4KGRFA61tAk+QCBTKWpPo6CsJ6w369LtGHGDsKgma4ub8uGNdPH2Z04Ru6R+ys5C1G4v++oirX/cVCrnhfBnSsGgIQyg166tYKeVAcgeI5RPyRiWIunk20A/otkS2G6M2WAAAAAElFTkSuQmCC"},"7d5d":function(t,e,a){},"7e44":function(t,e,a){t.exports=a.p+"img/header-back.97274c2b.png"},"847c":function(t,e,a){t.exports=a.p+"img/red-background.b6df979e.png"},"8a23":function(t,e,a){},9487:function(t,e,a){t.exports=a.p+"img/top-picture.b03ecf28.png"},9819:function(t,e,a){t.exports=a.p+"img/header-back-small.d1ac8143.png"},afd6:function(t,e,a){},b339:function(t,e,a){},b403:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgB1VPLDYMwDDVRB2CEdIOOwAiMADMA4tqeQSIbQDdhg3YERuAOIn2pCIpaChE59UmRn634+QPx8jzn0zTVRBTQMbSMsZg5iigESoM5iixizPJiM1fm+sB/mhdOewpSymtZlrfPeJZlvenvdjSO450ssNuREKLTPE3TyvM8X3FYjm7thUwgOYThipsiW0I9LoqVuED83RH+nQicL0WwNLmS0BVFcaYNIO8Bc9G+7edfw8V0fo3mo2KkCDprdDBJkhAj+Xo8KyGceuaNDkKkguFY+leCy2h/INSSI7D8lg3DECtCB6Fy8R7jF2l+YTQq3PiyAAAAAElFTkSuQmCC"},c256:function(t,e,a){},c75e:function(t,e,a){"use strict";var n=a("f156"),r=a.n(n);r.a},d372:function(t,e,a){"use strict";var n=a("afd6"),r=a.n(n);r.a},d72e:function(t,e,a){t.exports=a.p+"img/map-picture.54759fbf.svg"},de00:function(t,e,a){},ebdc:function(t,e,a){},f156:function(t,e,a){},f1d9:function(t,e,a){},f6ce:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD/SURBVHgBzVPRDYIwEL02DoAb1Al0BN3AEWSDGkL4xW/4YANWcARGwA1wA/4h4LtYiYGaFPjxJZf3crSvvTsqoihSXdflRHSkZSiklL5cacI4sodcaTKYbSzJsu/7WgihoBU5QlpyOk3TE7igGZjcCPUqrfUT0qMZmBhhAjGCjFFt4tvUeoCttEuSJDvwHbfTrJum2YG3HOjf1dVogizL6o9G/zKYxeM1G3JAEARnlJvD4GaMHpjq/Bth0x7kGWbU4zVORi74PyMRhmE/ypX07sEBUbHm54IGK3AF5pxnvg+wTe0w1thMhhX9eH9cWkErgQMKib/WZ0ELwXvbtvVfLO1t7op/4VcAAAAASUVORK5CYII="},fe29:function(t,e,a){t.exports=a.p+"img/dgtek-logo.e84ebe24.svg"}});