(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{155:function(t,e,n){var content=n(159);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("1fcd4353",content,!0,{sourceMap:!1})},156:function(t,e,n){var content=n(163);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("59898f33",content,!0,{sourceMap:!1})},158:function(t,e,n){"use strict";var o=n(155);n.n(o).a},159:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,"iframe{width:100%;height:80%}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}.enter{transform:translateX(100%)}.enter-to{transform:translateX(0)}.slide-enter-active{position:absolute}.leave{transform:translateX(0)}.leave-to{transform:translateX(-100%)}.slide-enter-active,.slide-leave-active{transition:all .75s ease-in-out}.modalvideo{display:block;position:fixed;z-index:600;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.9)}.modalvideo-content{margin:auto;display:block;width:80vw;height:80vh}@-webkit-keyframes zoom{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes zoom{0%{transform:scale(0)}to{transform:scale(1)}}.close{position:absolute;top:15px;right:35px;color:#f1f1f1;font-size:40px;font-weight:700;transition:.3s}.close:focus,.close:hover{color:#bbb;text-decoration:none;cursor:pointer}@media only screen and (max-width:700px){.modal-content{width:100%}}@media screen and (max-width:1023px){.navbar-menu{background-color:#000}}.svg-inline--fa.fa-w-14,.svg-inline--fa.fa-w-16{height:2rem;width:2rem}.navbar-item img{max-height:7rem}.navbar{background-color:#000;color:#fff5ee}.navbar-item,.navbar-link{color:#f0f8ff}a.navbar-item:hover{background-color:#000}@media only screen and (max-device-width:1015px){.navbar{background-color:#fff}.navbar-burger{color:#000}}",""])},160:function(t,e,n){"use strict";var o=n(157),r={computed:Object(o.a)(["status"]),data:function(){return{isOpen:!1,modalvideo:!1}},methods:{handleClick:function(){this.$root.$emit("clickedSomething")},openmodal:function(){this.modalvideo=!1,document.getElementById("myModalvideo").getElementsByTagName("iframe")[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")},closemodal:function(){document.getElementById("myModal").style.display="none"}}},l=(n(158),n(21)),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar is-fixed-top"},[n("div",{staticClass:"navbar-brand"},[n("div",{staticClass:"navbar-burger burger",class:{"is-active":t.isOpen},attrs:{"data-target":"navMenubd-example"},on:{click:function(e){t.isOpen=!t.isOpen}}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")])]),t._v(" "),n("div",{staticClass:"navbar-menu",class:{"is-active":t.isOpen},attrs:{id:"navMenubd-example"}},[n("div",{staticClass:"navbar-start"},[n("nuxt-link",{staticClass:"navbar-item",attrs:{tag:"a",to:"/"}},[n("span",{staticClass:"bd-emoji"},[t._v("🏠")]),t._v("  Inicio\r\n      ")]),t._v(" "),n("nuxt-link",{staticClass:"navbar-item",attrs:{tag:"a",to:"/hoteles"}},[n("span",{staticClass:"bd-emoji"},[t._v("🏨")]),t._v("  Hoteles\r\n       ")]),t._v(" "),n("nuxt-link",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"navbar-item",attrs:{tag:"a",to:"/ponentes"}},[n("span",{staticClass:"bd-emoji"},[t._v("👨‍🏫")]),t._v("  Ponentes\r\n       ")]),t._v(" "),n("a",{staticClass:"navbar-item",on:{click:function(e){t.modalvideo=!t.modalvideo}}},[n("span",{staticClass:"bd-emoji"},[t._v("🌎")]),t._v("  Cuidad Sede\r\n      ")])],1),t._v(" "),n("div",{staticClass:"navbar-end",staticStyle:{"flex-grow":"1","justify-content":"center"}},[n("a",{staticClass:"navbar-item is-hidden-desktop-only",attrs:{href:"https://www.facebook.com/CumbreIntlAduanero/",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),t._v(" "),n("a",{staticClass:"navbar-item is-hidden-desktop-only",attrs:{href:"https://twitter.com/a_cintl",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),t._v(" "),n("a",{staticClass:"navbar-item is-hidden-desktop-only",attrs:{href:"https://www.instagram.com/cintla1/",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)])]),t._v(" "),n("no-ssr",[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.modalvideo,expression:"modalvideo"}],staticClass:"modalvideo",attrs:{id:"myModalvideo"},on:{click:t.openmodal}},[n("span",{staticClass:"close"},[t._v("×")]),t._v(" "),n("div",{staticClass:"modalvideo-content"},[n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/TBRLEColtZg?enablejsapi=1",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])],1)],1)},[],!1,null,null,null);e.a=component.exports},162:function(t,e,n){"use strict";var o=n(156);n.n(o).a},163:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".footer{display:flex;justify-content:center;height:10vh;padding:2rem 1rem 3rem}",""])},165:function(t,e,n){var content=n(173);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("1c93b39a",content,!0,{sourceMap:!1})},166:function(t,e,n){var content=n(178);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("36873827",content,!0,{sourceMap:!1})},167:function(t,e,n){"use strict";n(162);var o=n(21),component=Object(o.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"content has-text-centered"},[e("p",[this._v("\n        Copyright © 2019 "),e("strong",[this._v("CINTLA")]),this._v(" by "),e("a",{attrs:{href:"https://www.linkedin.com/in/cgonzalezp91/",target:"_blank"}},[this._v("Carlos Gonzalez")]),this._v(".\n         The website is powered by "),e("a",{attrs:{href:"https://vuejs.org/"}},[e("font-awesome-icon",{staticStyle:{color:"#42b883"},attrs:{icon:["fab","vuejs"]}})],1)])])])},[],!1,null,null,null);e.a=component.exports},172:function(t,e,n){"use strict";var o=n(165);n.n(o).a},173:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},177:function(t,e,n){"use strict";var o=n(166);n.n(o).a},178:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,'.modal{display:none;position:fixed;z-index:600;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.9)}.modal-content{margin:auto;display:block;width:80%;height:80vh}.modal-content #img01{width:60%}.modal-content{-webkit-animation-name:zoom;animation-name:zoom;-webkit-animation-duration:.6s;animation-duration:.6s}@-webkit-keyframes zoom{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes zoom{0%{transform:scale(0)}to{transform:scale(1)}}.close{position:absolute;top:15px;right:35px;color:#f1f1f1;font-size:40px;font-weight:700;transition:.3s}.close:focus,.close:hover{color:#bbb;text-decoration:none;cursor:pointer}@media only screen and (max-width:700px){.modal-content{width:100%}}.interes{background:rgba(0,0,0,.7);width:70vw;height:80vh;display:grid;grid-template-columns:repeat(2,50%);grid-template-rows:repeat(2,50%);z-index:10}.links2{display:flex;flex-direction:column;justify-content:center;align-items:center;grid-column-start:2;grid-row-start:1;grid-row-end:3}.interes a{align-self:baseline}.organizado{justify-content:center}.organizado,.organizado1{display:flex;flex-direction:column;align-items:center}.box-icon{position:relative}.box-icon:before{content:"\\f2da";display:inline-block;font-family:FontAwesome;position:absolute;right:-1.5em}.homeicon{background-image:url(/homemini.png)}#element{margin-top:1000px}body{font-family:Arial,Helvetica,sans-serif;height:100vh;line-height:1.6}.container{margin-top:5rem}section{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100vh;color:#fff;z-index:-10}#about{flex-direction:row;justify-content:space-around}.home{display:grid;grid-template-areas:"im tex" "im tex1";justify-content:center;text-align:center;background:rgba(0,0,0,.6);z-index:10;width:100vw;height:40vh}.imagen{grid-area:im;-ms-grid-row-span:4;-ms-grid-column-span:4;margin-right:4rem;z-index:50}.text{grid-area:tex}.text1{grid-area:tex1}section h1{font-size:2rem;font-weight:700}section#home{background:url(/page.jpg) no-repeat 50% fixed;background-size:cover;z-index:-10}section#contact{background:url(/puente.jpg) no-repeat 50%/cover;opacity:1}section#interes{background:url(/truck.png) no-repeat 50%/cover}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-size:100px;letter-spacing:1px}.subtitle,.title{font-weight:300;color:#fff}.subtitle{font-size:42px;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}p{font-size:1rem;width:40vw}.evento{padding:1.5rem;margin-bottom:7vh;background:rgba(0,0,0,.8);-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-name:appear;animation-name:appear}.timer{padding:2rem}.flip-clock{overflow:hidden}.flip-card__back-bottom,.flip-card__back:after,.flip-card__back:before,.flip-card__bottom,.flip-card__top{display:block;color:#ccc;background:#222;padding:.23em .25em .4em;transform-style:preserve-3d;width:1.8em}.flip-card__back-bottom,.flip-card__bottom{color:#fff;position:absolute;top:50%;left:0;border-top:1px solid #000;background:#393939;pointer-events:none;overflow:hidden;z-index:2}video{width:20vw;height:40vh}.layer{background-color:rgba(0,0,0,.5)}.banner{width:100vw}.gridcontact{display:flex;justify-content:center;align-items:center}.profilecontac{margin-top:7px}.contactinfo{background-color:rgba(0,0,0,.7);height:80vh;width:40vw;display:flex;flex-direction:column;padding-left:2rem}.contactinfo a{padding-left:3rem}h2{display:block;font-size:1.2em;margin-top:.83em;font-weight:700}#contact img{height:80vh;width:40vw}.registro{display:flex;justify-content:space-evenly;width:50vw;padding-top:1.5rem}.button{border:solid #000}@media only screen and (max-device-width:500px){.home{display:grid;grid-template-areas:"im" "tex" "tex1";height:50vh;text-align:center;align-content:center}.home,video{justify-content:center}video{width:30vw;height:20vh;display:flex}.imagen{grid-area:im;-ms-grid-row-span:4;-ms-grid-column-span:4;display:flex;align-self:center;justify-self:center;margin-right:0}section h1{font-size:.9rem;font-weight:700}p{font-size:.6rem;width:100vw}.evento{padding:.2rem;margin-bottom:0;margin-top:1rem;background:rgba(0,0,0,.8);-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-name:appear;animation-name:appear;font-size:.7rem}.gridcontact{display:flex;flex-direction:column;justify-content:center;align-items:center}.profilecontac{margin-top:7px}.contactinfo{background-color:rgba(0,0,0,.7);height:55vh;width:90vw;display:flex;flex-direction:column;padding-left:1.1rem}.contactinfo a{padding-left:1.3rem}h2{font-size:.7rem;font-weight:700}#contact h1{font-size:.9rem}#contact a{font-size:.7rem}.navbar-item,.navbar-link{padding:.1rem .5rem}.svg-inline--fa.fa-w-14,.svg-inline--fa.fa-w-16{height:1rem!important;width:1rem!important}#contact img{height:40vh;width:80vw}.grow:hover,.image:hover{transform:scale(1);z-index:100}.button{font-size:.6rem}.timer{padding:.1rem}.registro{padding-bottom:.5rem;width:90vw}.interes{background:rgba(0,0,0,.7);width:70vw;height:80vh;display:grid;grid-template-columns:90%;grid-template-rows:repeat(4,25%);z-index:10}.links2{display:flex;flex-direction:column;justify-content:center;align-items:center;grid-column-start:1;grid-row-start:2;grid-row-end:4}.interes a{font-size:.5rem;padding:.2rem .5rem}.organizado1{grid-row-start:4;grid-row-end:4}.organizado1 figure,.organizado figure{width:25%;height:5%}}@media only screen and (min-device-width:500px) and (max-device-width:700px) and (-webkit-min-device-pixel-ratio:2){.home{display:grid;grid-template-areas:"im" "tex" "tex1";height:40vh;text-align:center;align-content:center}.home,video{justify-content:center}video{width:30vw;height:20vh;display:flex}.imagen{grid-area:im;-ms-grid-row-span:4;-ms-grid-column-span:4;display:flex;align-self:center;justify-self:center;margin-right:0}section h1{font-size:1.3rem;font-weight:700}p{font-size:.7rem;width:80vw}.evento{padding:1rem;margin-bottom:10vh;background:rgba(0,0,0,.8);-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-name:appear;animation-name:appear}.gridcontact{display:flex;flex-direction:column;justify-content:center;align-items:center}.profilecontac{margin-top:7px}.contactinfo{background-color:rgba(0,0,0,.7);height:55vh;width:80vw;display:flex;flex-direction:column;padding-left:2rem}.contactinfo a{padding-left:3rem}h2{font-size:.8rem;font-weight:700}#contact a{font-size:.7rem}.navbar-item,.navbar-link{padding:.2rem .5rem}.svg-inline--fa.fa-w-14,.svg-inline--fa.fa-w-16{height:1.3rem!important;width:1.3rem!important}#contact img{height:40vh;width:60vw}.interes a{font-size:.7rem;padding:.2rem .5rem}.interes h1{font-size:.9rem}}@media only screen and (min-device-width:701px) and (max-device-width:1000px) and (-webkit-min-device-pixel-ratio:2){section h1{font-size:1.5rem;font-weight:700}p{font-size:.9rem;width:60vw}h2{font-size:1.1rem;font-weight:700}.contactinfo{padding-left:1rem}.contactinfo a{padding-left:1.2rem}.interes a,.navbar-item,.navbar-link{padding:.2rem .5rem}.interes a{font-size:.8rem}.interes h1{font-size:1rem}}@media only screen and (min-device-width:1001px) and (max-device-width:1240px){p{width:60vw}.interes h1{font-size:1.3rem}}@media only screen and (max-device-height:850px){.conferencistas{grid-template-columns:repeat(3,20%);grid-gap:1rem}.evento{padding-top:2rem;margin-bottom:0}}@media only screen and (max-device-height:700px){.navbar-item,.navbar-link{padding:.2rem .5rem}.evento{padding-top:5rem;margin-bottom:0}}.grow,.image{transition:all .2s ease-in-out}.grow:hover,.image:hover{transform:scale(1.5);z-index:100}@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slidein{0%{margin-top:100%}to{margin-top:0}}@keyframes slidein{0%{margin-top:100%}to{margin-top:0}}',""])},179:function(t,e,n){"use strict";n.r(e);n(172);var o=n(21),r=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports,l=n(160),c=n(174),d=n.n(c),m=n(167),f=n(175),v=n.n(f),h=n(176),w=n.n(h),_={components:{Logo:r,Navbar:l.a,FlipCountdown:d.a,Footer:m.a,quickMenu:v.a},data:function(){return{count:3,icons:["fa fa-home","fa fa-id-card","fa fa-link"],list:[{isLink:!1},{isLink:!1},{isLink:!1},{isLink:!1}],backgroundColor:"#17c4c5",color:"#ffffff",position:"bottom-left",isOpenNewTab:!1,img:!1}},mounted:function(){this.$root.$on("clickedSomething",function(){console.log("work")})},methods:{handleClickInParent:function(t,e){console.log(t),console.log(e)},onclicLink:function(t,img){console.log(t),console.log(img);var e=document.getElementById("myModal"),n=document.getElementById("img01");e.style.display="block",t?(this.img=!1,w.a.embed("/pdf/".concat(t,".pdf"),"#pdfdiv")):(this.img=!0,n.src="/".concat(img))},closemodal:function(){document.getElementById("myModal").style.display="none"},onClickChild:function(t){0===t?$("html,body").animate({scrollTop:$("#home").offset().top},"slow"):1===t?$("html,body").animate({scrollTop:$("#contact").offset().top},"slow"):$("html,body").animate({scrollTop:$("#interes").offset().top},"slow"),console.log(t)},handleScroll:function(){var t=this;document.querySelectorAll(".about").forEach(function(e){var n=e.getBoundingClientRect().top,o=e.getBoundingClientRect().bottom;console.log(o+" Bottom"),(n>=0||o<=0)&&(t.sectionActive=!1),n<=0&&o>=0&&(t.sectionActive=!0)})}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},x=(n(177),Object(o.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container1"},[n("navbar"),t._v(" "),n("no-ssr",[n("quick-menu",{staticStyle:{"z-index":"500"},attrs:{"menu-count":t.count,"icon-class":t.icons,"menu-url-list":t.list,position:t.position},on:{process:t.onClickChild}})],1),t._v(" "),n("section",{attrs:{id:"home"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"timer"},[n("no-ssr",[n("flip-countdown",{staticClass:"newtime",attrs:{deadline:"2019-10-17 00:00:00"}})],1)],1)]),t._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:"about"}},[t._m(3),t._v(" "),t._m(4)]),t._v(" "),n("section",{attrs:{id:"contact"}},[n("div",{staticClass:"gridcontact"},[n("div",{staticClass:"contactinfo",attrs:{"data-aos":"flip-left"}},[n("h1",[t._v("AYUDA / ASISTENCIA")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{href:"https://api.whatsapp.com/send?phone=528677524727",target:"_blank","data-aos":"zoom-in"}},[n("font-awesome-icon",{staticStyle:{color:"#4fce5d"},attrs:{icon:["fab","whatsapp-square"]}}),t._v("   +52 (867) 752 4727\n          ")],1),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{href:"https://api.whatsapp.com/send?phone=+525573500204",target:"_blank","data-aos":"zoom-in"}},[n("font-awesome-icon",{staticStyle:{color:"#4fce5d"},attrs:{icon:["fab","whatsapp-square"]}}),t._v("   +52 (55) 735 00 204\n          ")],1)]),t._v(" "),t._m(14)])]),t._v(" "),n("section",{attrs:{id:"interes"}},[n("div",{staticClass:"interes"},[n("div",{staticClass:"links2"},[n("h1",{attrs:{"data-aos":"zoom-in"}},[t._v("LINKS DE INTERES")]),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{"data-aos":"fade-left"},on:{click:function(e){return t.onclicLink("PREGUNTAS FRECUENTES")}}},[n("span",{staticClass:"bd-emoji"},[t._v("❓")]),t._v("  Preguntas Frecuentes\n            ")]),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{"data-aos":"fade-left"},on:{click:function(e){return t.onclicLink("Política de Privacidad")}}},[n("span",{staticClass:"bd-emoji"},[t._v("📋")]),t._v("  Política de Priviacidad\n            ")]),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{"data-aos":"fade-left"},on:{click:function(e){return t.onclicLink("POLÍTICA DE ASISTENTES")}}},[n("span",{staticClass:"bd-emoji"},[t._v("📋")]),t._v("  Política de Asistencia\n            ")]),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{"data-aos":"fade-left"},on:{click:function(e){return t.onclicLink("Términos y Condiciones")}}},[n("span",{staticClass:"bd-emoji"},[t._v("📝")]),t._v("  Terminos y Condiciones\n            ")]),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{"data-aos":"fade-left"},on:{click:function(e){return t.onclicLink("","POSTERE.jpg")}}},[n("span",{staticClass:"bd-emoji"},[t._v("📋")]),t._v("  Poster Electronico\n            ")]),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{target:"_blank","data-aos":"fade-left",href:"/pdf/FOLLETO INFORMATIVO.pdf"}},[n("font-awesome-icon",{staticStyle:{color:"lightskyblue"},attrs:{icon:["fas","file-download"]}}),t._v("   Descarga Folleto Informativo\n            ")],1),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{href:"","data-aos":"fade-left"}},[n("font-awesome-icon",{staticStyle:{color:"lightskyblue"},attrs:{icon:["fas","file-download"]}}),t._v("  Descarga Guia del Visitante\n            ")],1)]),t._v(" "),t._m(15),t._v(" "),t._m(16)])]),t._v(" "),n("no-ssr",[n("div",{staticClass:"modal",attrs:{id:"myModal"},on:{click:t.closemodal}},[n("span",{staticClass:"close",on:{click:t.closemodal}},[t._v("×")]),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:t.img,expression:"img"}],staticClass:"modal-content",attrs:{id:"img01"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.img,expression:"!img"}],staticClass:"modal-content",attrs:{id:"pdfdiv"}})])]),t._v(" "),n("Footer")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"evento grow"},[e("span",{staticClass:"bd-emoji"},[this._v("📅")]),this._v("  17-18 Octubre 2019  |  "),e("span",{staticClass:"bd-emoji"},[this._v("📍")]),this._v("  Nuevo Laredo, Tamaulipas\n\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("h1",{staticClass:"lead text",staticStyle:{"align-self":"flex-end"}},[this._v("1er. Cumbre Internacional Aduanera 2019")]),this._v(" "),e("p",{staticClass:"lead text1"},[this._v("Es el evento más importante de la frontera norte de México que reúne a los proveedores líderes en el ramo aduanero, \n          a empresarios y ejecutivos de Comercio Exterior de las empresas, miembros de la cadena logística (agentes aduanales / transportistas) interesados en ser partícipes de temas de actualidad,\n          que afectan el comercio exterior de nuestro País. Representamos una plataforma para llegar a clientes interesados en sus servicios, aunado a la presencia de su marca con clientes nuevos y existentes. \n          Con el concepto: Exposición + Conferencias + Networking\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"registro"},[e("a",{staticClass:"button is-rounded",staticStyle:{"background-color":"goldenrod",color:"aliceblue","border-color":"black"},attrs:{href:"/pdf/REGISTRO PARA VISITANTES.pdf"}},[this._v("Registrate Visitante")]),this._v(" "),e("a",{staticClass:"button is-rounded",staticStyle:{"background-color":"crimson",color:"aliceblue","border-color":"black"},attrs:{href:"/pdf/REGISTRO, ESQUMA DE PATROCIONIO Y CROQUIS.pdf"}},[this._v("Registrate Expositor")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about"},[e("img",{attrs:{"data-aos":"zoom-in",src:"/ponenciaslist.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about2"},[n("div",{staticClass:"titleponente",attrs:{"data-aos":"flip-left"}},[n("h1",[t._v(" Conferencistas ")])]),t._v(" "),n("div",{staticClass:"ponentes"},[n("figure",{staticClass:"image",attrs:{"data-aos":"fade-down-right"}},[n("img",{attrs:{src:"/jose.png",alt:"Conferencista"}})]),t._v(" "),n("figure",{staticClass:"image ",attrs:{"data-aos":"fade-down"}},[n("img",{attrs:{src:"/jose.png",alt:"Conferencista"}})]),t._v(" "),n("figure",{staticClass:"image ",attrs:{"data-aos":"fade-down"}},[n("img",{attrs:{src:"/jose.png",alt:"Conferencista"}})]),t._v(" "),n("figure",{staticClass:"image ",attrs:{"data-aos":"fade-down-left"}},[n("img",{attrs:{src:"/jose.png",alt:"Conferencista"}})]),t._v(" "),n("figure",{staticClass:"image ",attrs:{"data-aos":"fade-up-right"}},[n("img",{attrs:{src:"/jose.png",alt:"Conferencista"}})]),t._v(" "),n("figure",{staticClass:"image ",attrs:{"data-aos":"fade-up"}},[n("img",{attrs:{src:"/jose.png",alt:"Conferencista"}})]),t._v(" "),n("figure",{staticClass:"image ",attrs:{"data-aos":"fade-up"}},[n("img",{attrs:{src:"/jose.png",alt:"Conferencista"}})]),t._v(" "),n("figure",{staticClass:"image ",attrs:{"data-aos":"fade-up-left"}},[n("img",{attrs:{src:"/jose.png",alt:"Conferencista"}})])]),t._v(" "),n("div",{staticClass:"titleponente"},[n("h1",[t._v(" Panelistas ")])]),t._v(" "),n("div",{staticClass:"conferencistas"},[n("figure",{staticClass:"image ",attrs:{"data-aos":"zoom-in-right"}},[n("img",{attrs:{src:"/jose.png",alt:"Panelista"}})]),t._v(" "),n("figure",{staticClass:"image ",attrs:{"data-aos":"zoom-in-down"}},[n("img",{attrs:{src:"/jose.png",alt:"Panelista"}})]),t._v(" "),n("figure",{staticClass:"image ",attrs:{"data-aos":"zoom-in-left"}},[n("img",{attrs:{src:"/jose.png",alt:"Panelista"}})]),t._v(" "),n("figure",{staticClass:"image ",attrs:{"data-aos":"zoom-in-right"}},[n("img",{attrs:{src:"/jose.png",alt:"Panelista"}})]),t._v(" "),n("figure",{staticClass:"image ",attrs:{"data-aos":"zoom-in-up"}},[n("img",{attrs:{src:"/jose.png",alt:"Panelista"}})]),t._v(" "),n("figure",{staticClass:"image ",attrs:{"data-aos":"zoom-in-left"}},[n("img",{attrs:{src:"/jose.png",alt:"Panelista"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[e("span",{staticClass:"bd-emoji"},[this._v("📞")]),this._v("LLAMANOS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item",attrs:{href:"tel:+52-867-715-3242","data-aos":"fade-right"}},[e("span",{staticClass:"bd-emoji"},[this._v("☎️")]),this._v("  +52 (867) 715 3242\n          ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item",attrs:{href:"tel:+52-477-715-3242","data-aos":"fade-right"}},[e("span",{staticClass:"bd-emoji"},[this._v("☎️")]),this._v("  +52 (477) 716 9905 ext. 07\n          ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item",attrs:{href:"tel:01-800-00-26623","data-aos":"fade-right"}},[e("span",{staticClass:"bd-emoji"},[this._v("☎️")]),this._v("  01 800 00 COMCE (26623)\n          ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[e("span",{staticClass:"bd-emoji"},[this._v("📬")]),this._v("ESCRÍBENOS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item",attrs:{href:"mailto:dirección@comce.mx","data-aos":"fade-left"}},[e("span",{staticClass:"bd-emoji"},[this._v("📧")]),this._v("  dirección@comce.mx\n          ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item",attrs:{href:"mailto:mbs@m3solutions.com.mx","data-aos":"fade-left"}},[e("span",{staticClass:"bd-emoji"},[this._v("📧")]),this._v("  mbs@m3solutions.com.mx\n          ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-item",attrs:{href:"mailto:ventas@m3solutions.com.mx","data-aos":"fade-left"}},[e("span",{staticClass:"bd-emoji"},[this._v("📧")]),this._v("  ventas@m3solutions.com.mx\n          ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[e("span",{staticClass:"bd-emoji"},[this._v("📬")]),this._v("WHATSAPP")])},function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"profilecontac",attrs:{"data-aos":"flip-down"}},[e("img",{attrs:{src:"/logoN.jpg",alt:"logo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"organizado"},[e("figure",{staticClass:"image ",attrs:{"data-aos":"zoom-in-right"}},[e("a",{attrs:{href:"http://www.comcebajio.org/",target:"_blank"}},[e("img",{attrs:{src:"/comce.png",alt:"Comce"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"organizado1"},[e("figure",{staticClass:"image ",attrs:{"data-aos":"zoom-in-right"}},[e("a",{attrs:{href:"http://www.m3solutions.com.mx",target:"_blank"}},[e("img",{attrs:{src:"/logo mbs.png",alt:"MBS"}})])])])}],!1,null,null,null));e.default=x.exports}}]);