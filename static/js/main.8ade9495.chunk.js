(this["webpackJsonpcar-sharing"]=this["webpackJsonpcar-sharing"]||[]).push([[0],{46:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);a(46);var n=a(1),c=a(18),r=a.n(c),s=a(3),i=a(11),o=a(7),l=a(6),u=a.n(l),d=a(25),j=a(2),p="SET_BURGER_STATUS",b="SET_TABLE_CARS",h="SET_CURRENT_CAR",O="SET_CURRENT_STEP",m="SET_NEW_TABLE_CARS",x="SET_CURRENT_CITY",f="SET_CURRENT_ADDRESS",g="SET_CITIES",v="SET_NEW_CITIES",A="SET_ADDRESSES",y="SET_PLACE_MARKS",C="SET_NEW_PLACE_MARKS",E="SET_CATEGORIES",N="SET_PLACE_MARK_INDEX",w={burger_status:!1,currentCity:{},currentOrder:{place:{text:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438",value:{city:"",street:""}},model:{text:"\u041c\u043e\u0434\u0435\u043b\u044c",value:""},color:{text:"\u0426\u0432\u0435\u0442",value:""},delay:{text:"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0430\u0440\u0435\u043d\u0434\u044b",value:"",from:"",to:""},tariff:{text:"\u0422\u0430\u0440\u0438\u0444",value:""},cistern:{text:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0431\u0430\u043a",value:""}},price:{min:0,max:32e3},tableCars:[],newTableCars:[],cities:[],newCities:[],addresses:[],newAddresses:[],placeMarks:[],newPlaceMarks:[],categories:[],placeMarkIndex:{},currentCar:{colors:["\u041b\u044e\u0431\u043e\u0439"],thumbnail:{path:""},name:""},currentStep:0,currentAddress:{name:"",city:""}};var k,S,M,B=function(e){return{type:g,payload:e}},R=function(e){return{type:v,payload:e}},T=function(e){return{type:x,payload:e}},_=function(e,t){return{type:f,address:e,city:t}},I=function(e){return{type:C,placeMark:e}},L=function(e){return{type:N,index:e}};function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var P,V=function(e){return n.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},e),k||(k=n.createElement("path",{className:"MenuToggle1_svg__line-1",d:"M9 53.8h237.66"})),S||(S=n.createElement("path",{className:"MenuToggle1_svg__line-2",d:"M9 129.25h237.66"})),M||(M=n.createElement("path",{className:"MenuToggle1_svg__line-3",d:"M9 204.7h237.66"})))};function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Q=function(e){return n.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},e),P||(P=n.createElement("path",{className:"MenuToggle2_svg__cls-1",d:"M9 129.25h237.66"})))},Y={li:["\u041f\u0410\u0420\u041a\u041e\u0412\u041a\u0410","\u0421\u0422\u0420\u0410\u0425\u041e\u0412\u041a\u0410","\u0411\u0415\u041d\u0417\u0418\u041d","\u041e\u0411\u0421\u041b\u0423\u0416\u0418\u0412\u0410\u041d\u0418\u0415"],socLink:[{text:"telegram",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACFUlEQVRIie3VO2hUQRTG8Z/GF0FQJIogiGBcbSxiCrFQ2EYRMY2IVgpipZ2FEmxEEKwkAUVsAoqFCCmiYBARjGksBLURX4VPjCLG+IhEYmIxs2R23VeyG7HIB5fZO+eb+d8995y5zGhGU1cT2vEEwzg83cAWdOEnxpNraDpgc7Ab/QnoN67jQLz/WE9gLp2vE+AXnMHq6GmL87fqAVyHTvxIgM9wDIsLvCdi/PRUYQ3YhTv+TudWzCqxrid6904WuARH8VJ+oXSgucCbRTfmJXNv4ppMtcCMkM7vCfC54ulcgUsYwNpkflnyoLMrAXfidgIbQy+2F1m8AMeFdz0gvPtU2+IedytBzyXArzhb8A9SteFF9H7C+iKe9hjvqAQejMY+LC3hyeBG8oCD2FDCezV69lcCX0k2HMAprIqxhUJLjMjPysYy++UyUiwbeWrAQTyS3zK9eJfMjQtFt7nMXouE+hgWTraq1YoL8g+J3DUiFFs5ZaP33mSgqZrwoQB8uYp1R6L3fLFgxd4SKranYK4vjlmhE4qlsiWOD6pglFSuH3NXM/aY+PRdE3o61eMYa60FPBef40ZvhYN/LN4Px/EmGqO/EaP4hfm1gOFiBIwm4yGhVd7HuX6hmjfF+4e1QmGLiVR/w44ktgavYuw+TsbfXfUAE1LcbaJwUq3EU/m1sK9e4EpaLnyvh4QzoOFfgWf0/+kP39OpbLs1428AAAAASUVORK5CYII="},{text:"facebook",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7UlEQVRIie2WPw4BQRSHP2yh3StwABEdCoVr4AQOInEKjqClEY2OKK0tSCQqjW4jNCOZrNk/Zq0l5pe84r28+X0zszObgX9TLuH4AtAAqkAR8IALsANmCb0D1RaAmyKWaUK9AGhqYAtwQqCxwJYGuA6UFfU1sBVgR8M3Un2eVzjhxYOa1wDbitpKTCBVsGrM9R0mH1Gc71IBhlJeEiHLFfHQEeglmxq0CL86qphHmaa11fuswIevBcc5XDZQk/Iu0PH1jIGRlG+AU5hpnF/mGZhKeVPR4/p6IpXZPTZgAzbg3wfrPPYWwEBRMwrVHf9iRMcIXZxjAAAAAElFTkSuQmCC"},{text:"instagram",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB4klEQVRIie3WPWtUQRQG4McPiKCI5B+IRUhh/ICANkY7QxSVRBtjIZIyf0BEwWAtWChosNC0BtSIf0CilRIsEkXU1hRZQQUtNBb3rMluJnfnrqk0LwxnZ87He2b23DPDOv51bMi068ZObG1h9w3vMfc3ScEZvMVixTGHwbLAZTu+hosR6Dle4WuLRLdhPw7GfAyXW/g04HQQfsKhKo6BPsxHjNKdN+MNfrVBugn96MARS8eehe5weLaKvhMjuBFjJNagN3yPxnw65l05xP1hfDOhO4ealcVUw7CiZnoVO4dbTYn8weZE8I6QPxKk9xR/wW1MBdExXMD9sJtY5vM95JYEzwqcjCyvL1vrVOzqp+JEmjEQupqlYxcxFiNmAzbmZKKozB0Yx9OE/gnuhs2pnIC5xD0hp0psHofcs5bEOchtv5WIZ0IeL7Gp62ZKbCoTT+KzonoHViE9ryiuybUkXsBo2D/CHZyIMY6HoRsN8rZQ1kCGpRvIAs4m7Cs1kI8hU9U5ofh0BrE71l7jgfRO94b8kNAlUb8k+nIdEqhfErNVnIbCaR6H2yStX4vJhlL27Y3hUvx+gZf40oJwO/bhQMyv4kpmsg0YUtynVZ8+s1q0ztxu04Vd8h577xTvtHX85/gNG1aEbjAmkEgAAAAASUVORK5CYII="}]},G=(a(56),a(0)),K=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.app.burger_status})),a=function(){e({type:p,payload:!t})},n=u()({"burger-menu":!0,burger__open:t}),c=u()({"svg-1__open":t,"svg-1__default":!t}),r=u()({"svg-2__open":t,"svg-2__default":!t});return Object(G.jsxs)("div",{className:"burger-page",children:[Object(G.jsxs)("aside",{className:n,children:[Object(G.jsxs)("section",{className:"toggle-wrapper",children:[Object(G.jsx)(V,{onClick:a,className:c}),Object(G.jsx)(Q,{onClick:a,className:r})]}),Object(G.jsx)("section",{className:"burger-info",children:Y.li.map((function(e){return Object(G.jsx)(i.b,{to:"/car-sharing/order",onClick:a,children:Object(G.jsx)("span",{children:e})},e)}))}),Object(G.jsx)("section",{className:"social-links",children:Y.socLink.map((function(e){return Object(G.jsx)(i.b,{to:"/car-sharing/order",children:Object(G.jsx)("img",{src:e.img,alt:e.text})},e.text)}))}),Object(G.jsx)("button",{type:"button",className:"lang",children:Object(G.jsx)("span",{children:"Eng"})})]}),Object(G.jsx)("div",{className:"burger__template"})]})},Z=a(4),z=(a(62),[{img:a.p+"static/media/img1.9d6d9a44.png",title:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430",par:"\u041e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043c\u0430\u0448\u0438\u043d\u0443 \u043d\u0430 \u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0445 \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430\u0445 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u043c\u0435\u0441\u0442\u0430\u0445, \u043d\u0435 \u043d\u0430\u0440\u0443\u0448\u0430\u044f \u041f\u0414\u0414, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0430\u0445.",button__bg:"linear-gradient(90deg,#13493F,#0C7B1B)"},{img:a.p+"static/media/img2.6812641e.png",title:"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430",par:"\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",button__bg:"linear-gradient(90deg,#132949,#0C7B67)"},{img:a.p+"static/media/img3.246addc8.png",title:"\u0411\u0435\u043d\u0437\u0438\u043d",par:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0431\u0430\u043a \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0437\u0430\u043f\u0440\u0430\u0432\u043a\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0437\u0430 \u043d\u0430\u0448 \u0441\u0447\u0451\u0442",button__bg:"linear-gradient(90deg,#493013,#7B0C3B)"},{img:a.p+"static/media/img4.6078199f.png",title:"\u041e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435",par:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0422\u041e",button__bg:"linear-gradient(90deg,#281349,#720C7B)"}]),X=function(){var e=Object(s.c)((function(e){return e.app.burger_status})),t=Object(n.useState)(0),a=Object(Z.a)(t,2),c=a[0],r=a[1];function o(e){e>z.length-1?r(0):r(e<0?z.length-1:e)}return Object(G.jsxs)("aside",{className:u()({slider:!0,slider__open:e}),children:[Object(G.jsxs)("main",{className:"slider-container",children:[Object(G.jsxs)("div",{className:"mySlides fade",children:[Object(G.jsx)("img",{src:z[c].img,alt:""}),Object(G.jsxs)("section",{className:"text",children:[Object(G.jsx)("h1",{children:z[c].title}),Object(G.jsx)("p",{children:z[c].par}),Object(G.jsx)(i.b,{to:"/car-sharing/order",children:Object(G.jsx)("button",{type:"button",style:{background:z[c].button__bg},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})})]})]}),Object(G.jsx)("button",{type:"button",className:"prev-bg","aria-label":"prev",onClick:function(){o(c-1)}}),Object(G.jsx)("span",{className:"prev",children:"\u276e"}),Object(G.jsx)("button",{type:"button",className:"next-bg","aria-label":"next",onClick:function(){o(c+1)}}),Object(G.jsx)("span",{className:"next",children:"\u276f"})]}),Object(G.jsx)("section",{className:"dots",children:z.map((function(e,t){return Object(G.jsx)("button",{type:"button","aria-label":"dots",className:u()({dot:!0,active:t===c}),value:t,onClick:function(e){return t=e.target.attributes.value.value,void o(Number(t));var t}},e.img)}))})]})},J=(a(63),function(){return Object(G.jsxs)("div",{className:"home-page",children:[Object(G.jsx)(K,{}),Object(G.jsxs)("main",{className:"main-content",children:[Object(G.jsxs)("header",{className:"header",children:[Object(G.jsx)("h1",{className:"header-title",children:"Need for drive"}),Object(G.jsxs)("span",{className:"header-map",children:[Object(G.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAB3klEQVRIibXVPYxNQRQH8N/ah4SwFsmKj+ptJKJBXkGjkA2dWkEhUZGISoQoNEKvEo1eRElEVISIj+ZpCCuWDbLBLsn6vIqZZ695c9/e3cQ/mUzmzDnnf86ZMzP8Z/TV0BnCFjQxgAX4jEFcRXu+BA3sRis6LaOJ/ShwAccxPReCBvZhOLO3AkcT25vYmyPpryDYhlVmStLBQhzBokS/ieW4njpKUxcVh/EbL0pR9eEgllQE1Yq2sxJsNJN+gVFMCIfZwjqcwPeSzSguxkz+Qa5EW7E4CaKNG5iK4w5+YCSuz+Br9Pd8tgyWJuvteJXRuyyU8Sw+VdhmCcrdsR6H5butX2jRMnmjDsFUnAdxOjo6kNHbgPuJbDIXRYqVWIOTwi2GnULNX2IZdmG17szexPEXudTX4gp2ZPZgHKfkb+4tvC8LciUaFw4vh2mcr3A+kTqvIihwTChJKj+XcxL3HuQiqnoq3goXaaQku4SHFfpPMDYXAriLTdiM28LTnMMYHlU56erbEgocijrX4jrFF9zr4aPWhzOAPbqz/SU80x97GfcqUQff4jyUyB9Lej6HXBfl8FT4JjuYxLM6hnUJikjSQVv+TOZNAK+Fu/FTRUvmUOcMOiiEpviAd3WN/gCroWJ39xmG2QAAAABJRU5ErkJggg==",alt:"location"}),"\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"]})]}),Object(G.jsxs)("section",{className:"heading",children:[Object(G.jsx)("h1",{children:"\u041a\u0430\u0440\u0448\u0435\u0440\u0438\u043d\u0433"}),Object(G.jsx)("h1",{className:"sub-title",children:"Need for drive"}),Object(G.jsx)("h4",{children:"\u041f\u043e\u043c\u0438\u043d\u0443\u0442\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e \u0442\u0432\u043e\u0435\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430"}),Object(G.jsx)(i.b,{to:"/car-sharing/order",children:Object(G.jsx)("button",{type:"button",className:"btn heading-btn",children:"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}),Object(G.jsxs)("footer",{className:"footer",children:[Object(G.jsx)("span",{className:"footer-title",children:"\xa9 2016-2019 \xabNeed for drive\xbb"}),Object(G.jsx)("span",{className:"footer-tel",children:Object(G.jsx)("a",{href:"tel:+74952342244",children:"8 (495) 234-22-44"})})]})]}),Object(G.jsx)(X,{})]})}),q=(a(64),a(8)),D=a.n(q),H=a(16),W=a(24),$=a(42),ee=a(43);var te,ae,ne=Object(W.combineReducers)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(j.a)(Object(j.a)({},e),{},{burger_status:t.payload});case b:return Object(j.a)(Object(j.a)({},e),{},{tableCars:t.payload,newTableCars:t.payload});case h:return Object(j.a)(Object(j.a)({},e),{},{currentCar:t.payload,currentOrder:Object(j.a)(Object(j.a)({},e.currentOrder),{},{model:Object(j.a)(Object(j.a)({},e.currentOrder.model),{},{value:t.payload.name})}),price:{min:t.payload.priceMin,max:t.payload.priceMax}});case m:return Object(j.a)(Object(j.a)({},e),{},{newTableCars:t.payload});case O:return Object(j.a)(Object(j.a)({},e),{},{currentStep:t.payload,currentPage:t.payload});case g:return Object(j.a)(Object(j.a)({},e),{},{cities:t.payload,newCities:t.payload});case v:return Object(j.a)(Object(j.a)({},e),{},{newCities:t.payload});case A:return Object(j.a)(Object(j.a)({},e),{},{addresses:t.payload,newAddresses:t.payload});case x:return Object(j.a)(Object(j.a)({},e),{},{currentCity:t.payload,currentOrder:Object(j.a)(Object(j.a)({},e.currentOrder),{},{place:Object(j.a)(Object(j.a)({},e.currentOrder.place),{},{value:Object(j.a)(Object(j.a)({},e.currentOrder.place.value),{},{city:t.payload.name})})})});case f:return Object(j.a)(Object(j.a)({},e),{},{currentAddress:{name:t.address,city:t.city},currentOrder:Object(j.a)(Object(j.a)({},e.currentOrder),{},{place:Object(j.a)(Object(j.a)({},e.currentOrder.place),{},{value:{city:t.city,street:t.address}})})});case y:return Object(j.a)(Object(j.a)({},e),{},{placeMarks:e.addresses.length>e.placeMarks.length?[].concat(Object(d.a)(e.placeMarks),[t.placeMark]):Object(d.a)(e.placeMarks),newPlaceMarks:e.addresses.length>e.placeMarks.length?[].concat(Object(d.a)(e.placeMarks),[t.placeMark]):Object(d.a)(e.placeMarks)});case C:return Object(j.a)(Object(j.a)({},e),{},{newPlaceMarks:t.placeMark});case E:return Object(j.a)(Object(j.a)({},e),{},{categories:t.categories});case N:return Object(j.a)(Object(j.a)({},e),{},{placeMarkIndex:t.index});default:return e}}}),ce=Object(W.createStore)(ne,Object($.composeWithDevTools)(Object(W.applyMiddleware)(ee.a))),re=a(28),se=a.n(re),ie="https://api-factory.simbirsoft1.com",oe=se.a.create({baseURL:"https://api-factory.simbirsoft1.com",headers:{"X-Api-Factory-Application-Id":"5e25c641099b810b946c5d5b",Authorization:"Bearer ".concat("52efbe08228671240494f537f2486bc109a637b4")}}),le=function(e){var t=ce.getState().app.tableCars,a=e?t.filter((function(t){return t.categoryId?t.categoryId.id===e:""})):t;ce.dispatch({type:m,payload:a})},ue=function(e){ce.dispatch(function(e){return{type:O,payload:e}}(e))},de=function(){var e=Object(H.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe({method:"GET",url:"/api/db/car",params:{limit:6,offset:2}});case 3:a=e.sent,t((n=a.data.data,{type:b,payload:n})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.response);case 10:case"end":return e.stop()}var n}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();function je(){return(je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var pe,be=function(e){return n.createElement("svg",je({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 172 172"},e),n.createElement("g",{fill:"none",strokeMiterlimit:10,fontFamily:"none",fontWeight:"none",fontSize:"none",textAnchor:"none",style:{mixBlendMode:"normal"}},te||(te=n.createElement("path",{d:"M0 172V0h172v172z"})),ae||(ae=n.createElement("path",{d:"M126.133 86a5.718 5.718 0 01-1.68 4.053L67.12 147.387a5.733 5.733 0 01-9.787-4.054V28.667a5.733 5.733 0 019.787-4.053l57.333 57.333a5.718 5.718 0 011.68 4.053z",fill:"#ccc"}))))},he=(a(84),[{text:"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435",path:""},{text:"\u041c\u043e\u0434\u0435\u043b\u044c",path:"model"},{text:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e",path:"extra"},{text:"\u0418\u0442\u043e\u0433\u043e",path:"total"}]),Oe=function(e){var t=e.page,a=Object(s.c)((function(e){return e.app.currentStep}));return Object(G.jsxs)("nav",{className:"navBar",children:[Object(G.jsxs)("header",{className:"navBar-header",children:[Object(G.jsx)("h1",{className:"header-title",children:"Need for drive"}),Object(G.jsx)("section",{className:"sideBar-map",children:Object(G.jsxs)("span",{className:"header-map",children:[Object(G.jsx)("img",{src:"https://img.icons8.com/plumpy/24/000000/google-maps-new.png",alt:"google-map"}),"\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"]})})]}),Object(G.jsx)("section",{className:"navBar-nav",children:he.map((function(e,n){return Object(G.jsxs)("span",{className:u()({active:n===t,complete:n<a}),children:[n?Object(G.jsx)(be,{}):"",Object(G.jsx)(i.b,{className:u()({disabled:n>a}),to:"/car-sharing/order/".concat(e.path),children:e.text})]},e.text)}))})]})},me=(a(85),function(e){var t=e.children,a=Object(s.c)((function(e){return e.app.currentOrder})),n=Object(s.c)((function(e){return e.app.price}));return Object(G.jsxs)("aside",{className:"sideBar",children:[Object(G.jsx)("header",{className:"sideBar-info-title sideBar-child",children:Object(G.jsx)("h1",{children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437:"})}),Object(G.jsx)("main",{className:"sideBar-parameters sideBar-child",children:Object.keys(a).map((function(e){var t,n;return a[e].value&&Object(G.jsxs)("section",{className:"sideBar-info-content",children:[Object(G.jsx)("span",{className:"place",children:a[e].text}),Object(G.jsx)("span",{className:"dots",children:"......................"}),Object(G.jsx)("div",{className:"address",children:Object(G.jsx)("span",{children:"place"===e?"".concat(null!==(t=a[e].value.city)&&void 0!==t?t:"",",\n").concat(null!==(n=a[e].value.street)&&void 0!==n?n:""):a[e].value})})]},a[e].text)}))}),Object(G.jsxs)("section",{className:"sideBar-info-price sideBar-child",children:["\u0426\u0435\u043d\u0430 \u043e\u0442 ",Object(G.jsx)("span",{children:n.min})," \u0434\u043e ",Object(G.jsx)("span",{children:n.max})]}),t]})}),xe=(a(86),function(e){var t=e.children,a=e.path,c=e.step,r=e.text,s=e.page,o=e.arrayValid,l=Object(n.useState)(!1),u=Object(Z.a)(l,2),d=u[0],j=u[1];return Object(n.useEffect)((function(){o&&j(o.some((function(e){return!e})))}),[o]),Object(G.jsxs)("div",{className:"location-page",children:[Object(G.jsx)(K,{}),Object(G.jsx)(Oe,{page:s}),t,Object(G.jsx)(me,{children:Object(G.jsx)(i.b,{to:"/car-sharing/order/".concat(a),children:Object(G.jsx)("button",{type:"button",onClick:function(){return ue(c)},className:"sideBar-button sideBar-child",disabled:d,children:r})})})]})}),fe=[54.3282,48.3866],ge=["\u041f\u043e\u043c\u0438\u043d\u0443\u0442\u043d\u043e,7 \u0440/\u043c\u0438\u043d","\u041d\u0430 \u0441\u0443\u0442\u043a\u0438, 1999 \u0440/\u0441\u0443\u0442\u043a\u0438"],ve=["\u041f\u043e\u043b\u043d\u044b\u0439 \u0431\u0430\u043a, 500\u0440","\u0414\u0435\u0442\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e, 200\u0440","\u041f\u0440\u0430\u0432\u044b\u0439 \u0440\u0443\u043b\u044c, 1600\u0440"],Ae={name:"\u0412\u0441\u0435 \u043c\u043e\u0434\u0435\u043b\u0438",id:""},ye=function(){var e=Object(H.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe({method:"GET",url:"/api/db/category",params:{limit:3}});case 3:(a=e.sent).data.data.unshift(Ae),t((n=a.data.data,{type:E,categories:n})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.response);case 11:case"end":return e.stop()}var n}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(s.b)(),t=Object(n.useState)(0),a=Object(Z.a)(t,2),c=a[0],r=a[1],i=Object(s.c)((function(e){return e.app.categories}));return Object(n.useEffect)((function(){i.length||e(ye)}),[i.length]),i.map((function(e,t){return Object(G.jsxs)("label",{className:u()({active:t===c}),htmlFor:t,children:[Object(G.jsx)("input",{type:"radio",defaultChecked:0===t,name:"category",id:t,value:e.name,onChange:function(){return a=t,n=e.id,le(n),void r(+a);var a,n}}),e.name]},e.id)}))},Ee=function(e){var t=e.item,a=e.handleClick,n=e.inputCar;return Object(G.jsxs)("button",{type:"button",className:u()({car:!0,active:t.name===n}),onClick:function(){a(t)},children:[Object(G.jsxs)("div",{children:[Object(G.jsx)("h1",{className:"car-title",children:t.name}),Object(G.jsxs)("span",{className:"car-subtitle",children:[t.priceMin," - ",t.priceMax," P"]})]}),Object(G.jsx)("img",{crossOrigin:"anonymous",referrerPolicy:"origin",src:ie+t.thumbnail.path,alt:t.name})]})},Ne=function(e){var t=e.nextStep,a=e.page,c=Object(s.b)(),r=Object(n.useState)(""),i=Object(Z.a)(r,2),o=i[0],l=i[1],u=Object(n.useState)(!1),d=Object(Z.a)(u,2),j=d[0],p=d[1],b=Object(s.c)((function(e){return e.app.tableCars})),O=Object(s.c)((function(e){return e.app.newTableCars})),m=Object(s.c)((function(e){return e.app.currentCar}));function x(e){var t;l(e.name===o?"":e.name),p(e.name!==o),c((t=e.name===o?{name:""}:e,{type:h,payload:t}))}return Object(n.useEffect)((function(){b.length||c(de),o||""===m.name||(l(m.name),p(!0))}),[b.length]),Object(G.jsx)(xe,{path:"extra",step:t,text:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e",page:a,arrayValid:[j],children:Object(G.jsxs)("main",{className:"model-content",children:[Object(G.jsx)("section",{className:"model-input",children:Object(G.jsx)(Ce,{})}),Object(G.jsx)("section",{className:"model-cars",children:O.length?O.map((function(e){return Object(G.jsx)(Ee,{handleClick:x,inputCar:o,item:e},e.id)})):"\u041c\u0430\u0448\u0438\u043d\u044b \u0434\u0430\u043d\u043d\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"})]})})},we=(a(87),function(){var e=Object(n.useState)(0),t=Object(Z.a)(e,2),a=t[0],c=t[1],r=Object(s.c)((function(e){return e.app.currentCar}));return Object(G.jsxs)("aside",{children:[Object(G.jsx)("h3",{children:"\u0426\u0432\u0435\u0442"}),Object(G.jsx)("section",{className:"extra-color",children:r.colors.map((function(e,t){return Object(G.jsxs)("label",{className:u()({active:t===a}),htmlFor:e,children:[Object(G.jsx)("input",{type:"radio",name:"color",value:e,id:e,onChange:function(){return c(t)}}),e]},e)}))})]})});function ke(){return(ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Se=function(e){return n.createElement("svg",ke({width:10,height:10,viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),pe||(pe=n.createElement("path",{d:"M8 .806L7.194 0 4 3.194.806 0 0 .806 3.194 4 0 7.194.806 8 4 4.806 7.194 8 8 7.194 4.806 4 8 .806z",fill:"#121212"})))},Me=function(){var e=Object(n.useState)(""),t=Object(Z.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(Z.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(!1),d=Object(Z.a)(l,2),j=d[0],p=d[1],b=Object(n.useState)(!1),h=Object(Z.a)(b,2),O=h[0],m=h[1],x=u()({"btn-close":!0,open:j}),f=u()({"btn-close":!0,open:O});return Object(G.jsxs)("div",{children:[Object(G.jsx)("h1",{children:"\u0414\u0430\u0442\u0430 \u0430\u0440\u0435\u043d\u0434\u044b"}),Object(G.jsxs)("div",{className:"extra-date",children:[Object(G.jsxs)("section",{className:"city-content",children:[Object(G.jsx)("span",{children:"\u0421"}),Object(G.jsxs)("div",{children:[Object(G.jsx)("input",{type:"date",value:a,onChange:function(e){return c(e.target.value)},onFocus:function(){return m(!0)},onBlur:function(){return m(!1)},name:"dateFrom",id:"dateFrom"}),Object(G.jsx)(Se,{onClick:function(){c("")},className:f})]})]}),Object(G.jsxs)("section",{className:"city-content",children:[Object(G.jsx)("span",{children:"\u041f\u043e"}),Object(G.jsxs)("div",{children:[Object(G.jsx)("input",{type:"date",name:"dateTo",onChange:function(e){return o(e.target.value)},onFocus:function(){return p(!0)},onBlur:function(){return p(!1)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043c\u044f",id:"dateTo",value:i}),Object(G.jsx)(Se,{onClick:function(){o("")},className:x})]})]})]})]})},Be=function(){var e=Object(n.useState)(0),t=Object(Z.a)(e,2),a=t[0],c=t[1];return Object(G.jsxs)("div",{children:[Object(G.jsx)("h1",{children:"\u0422\u0430\u0440\u0438\u0444"}),Object(G.jsx)("section",{className:"extra-tariff",children:ge.map((function(e,t){return Object(G.jsxs)("label",{className:u()({active:t===a}),htmlFor:e,children:[Object(G.jsx)("input",{type:"radio",name:"tariff",id:e,value:e,onChange:function(){return c(t)}}),e]},e)}))})]})},Re=function(){return Object(G.jsxs)("aside",{children:[Object(G.jsx)("h1",{children:"\u0414\u043e\u043f \u0443\u0441\u043b\u0443\u0433\u0438"}),Object(G.jsx)("section",{className:"extra-additional",children:ve.map((function(e){return Object(G.jsxs)("label",{htmlFor:e,children:[e,Object(G.jsx)("input",{type:"checkbox",name:"additional",id:e,value:e}),Object(G.jsx)("span",{className:"check-mark"})]},e)}))})]})},Te=function(e){var t=e.nextStep,a=e.page;return Object(G.jsx)(xe,{path:"total",step:t,page:a,text:"\u0418\u0442\u043e\u0433\u043e",children:Object(G.jsxs)("main",{className:"extra-content",children:[Object(G.jsx)(we,{}),Object(G.jsx)(Me,{}),Object(G.jsx)(Be,{}),Object(G.jsx)(Re,{})]})})},_e=(a(88),function(e){var t=e.nextStep,a=e.page,n=Object(s.c)((function(e){return e.app.currentCar})),c=Object(s.c)((function(e){return e.app.currentOrder}));return Object(G.jsx)(xe,{path:"confirm",text:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c",page:a,step:t,children:Object(G.jsxs)("main",{className:"total-content",children:[Object(G.jsxs)("section",{className:"total-content-info",children:[Object(G.jsx)("h1",{children:n.name}),Object(G.jsx)("span",{className:"number",children:n.number}),Object(G.jsxs)("section",{className:"text",children:[Object(G.jsx)("span",{children:"\u0422\u043e\u043f\u043b\u0438\u0432\u043e"})," ",c.cistern.value]}),Object(G.jsxs)("section",{className:"text",children:[Object(G.jsx)("span",{children:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0430 c"})," ",c.delay.from]})]}),Object(G.jsx)("img",{src:ie+n.thumbnail.path,alt:n.name})]})})}),Ie=(a(89),function(){var e=Object(H.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe({method:"GET",url:"/api/db/city",params:{limit:6}});case 3:a=e.sent,t(B(a.data.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),Le=function(e){return function(){var t=Object(H.a)(D.a.mark((function t(a){var n;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,se.a.get("".concat("https://nominatim.openstreetmap.org/search","?q=").concat(e,"&format=json&addressdetails=1&limit=1"));case 3:n=t.sent,a((c=n.data[0],{type:y,placeMark:c})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0.response);case 10:case"end":return t.stop()}var c}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},Ue=(Le(),function(e,t){var a=Object(n.useState)({value:!1,text:""}),c=Object(Z.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)({value:!1,text:"",array:[]}),o=Object(Z.a)(i,2),l=o[0],u=o[1],d=Object(n.useState)({value:!1,text:""}),j=Object(Z.a)(d,2),p=j[0],b=j[1];return Object(n.useEffect)((function(){Object.keys(t).forEach((function(a){switch(a){case"isCompareCity":var n=t[a].array.find((function(t){return e.toLowerCase()===t.name.toLowerCase()}));n&&e&&function(e){var t=ce.getState().app.placeMarks,a=ce.getState().app.currentAddress;e.name!==a.city&&ce.dispatch(_("",e.name));var n=t.filter((function(t){return e.name===t.address.city}));ce.dispatch(T(e)),ce.dispatch(I(n)),ce.dispatch(L(n.length?n[0]:{}))}(n),u({value:!!e&&!n,text:n||!e?"":t[a].text});break;case"isCompareAddress":var c,r,i=t[a].array.find((function(t){var a;return e.toLowerCase()==="".concat(t.address.road," ").concat(null!==(a=t.address.house_number)&&void 0!==a?a:"").toLowerCase()}));if(i)o="".concat(i.address.road," ").concat(null!==(c=i.address.house_number)&&void 0!==c?c:""),l=null!==(r=i.address.city)&&void 0!==r?r:"",d=i,ce.dispatch(_(o,l)),ce.dispatch(L(d));u({value:!i,text:i?"":t[a].text});break;case"isEmpty":s(e?{value:!1,text:""}:{value:!0,text:t[a].text})}var o,l,d}))}),[e]),Object(n.useEffect)((function(){l.value||r.value?b({value:!1,text:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}):b({value:!0,text:""})}),[l.value,r.value]),{isEmpty:r,isCompareError:l,inputValid:p}}),Pe=function(e,t){var a=Object(n.useState)(e),c=Object(Z.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(!1),o=Object(Z.a)(i,2),l=o[0],u=o[1],d=Object(n.useState)(!1),p=Object(Z.a)(d,2),b=p[0],h=p[1],O=Ue(r,t);return Object(j.a)({value:r,focus:l,onChange:function(e){s(e.target.value),function(e){var t=ce.getState().app.cities,a=new RegExp(e.toLowerCase());ce.dispatch(R(t.filter((function(e){return a.test(e.name.toLowerCase())}))))}(e.target.value)},onChangeAddress:function(e){s(e.target.value),function(e){var t=ce.getState().app.placeMarks,a=ce.getState().app.currentCity,n=new RegExp(e.toLowerCase());ce.dispatch(I(t.filter("name"in a?function(e){if(e.address.city&&a.name===e.address.city)return n.test("".concat(e.address.road," ").concat(e.address.house_number).toLowerCase())}:function(e){return n.test("".concat(e.address.road," ").concat(e.address.house_number).toLowerCase())})))}(e.target.value)},onBlur:function(){h(!0),u(!1)},onFocus:function(){u(!0),h(!1)},onClick:function(e){s(e),u(!1)},onClose:function(){s(""),u(!0)},isDirty:b,printError:function(e){var t=!1;return e.map((function(e){return!(!t&&O[e].value)||(t=!0,O[e].text)}))}},O)},Ve=a(17),Fe=a.n(Ve),Qe=a(93),Ye=a(94),Ge=a(97),Ke=a(95),Ze=a(96),ze=a(44),Xe=(a(90),new Fe.a.icon({iconUrl:ze.a,iconSize:[25,41],iconAnchor:[10,41],popupAnchor:[2,-40]})),Je=function(){var e=Object(s.c)((function(e){return e.app.placeMarks})),t=Object(s.c)((function(e){return e.app.placeMarkIndex}));function a(){var e=Object(Qe.a)();return Object(n.useEffect)((function(){Object.keys(t).length&&e.flyTo([+t.lat,+t.lon],e.getZoom())}),[t]),null}return Object(G.jsx)("div",{className:"map",children:Object(G.jsxs)(Ye.a,{style:{height:"450px",width:"100%"},center:fe,zoom:11,children:[Object(G.jsx)(Ge.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.length&&e.map((function(e){return Object(G.jsxs)(Ke.a,{position:[e.lat,e.lon],icon:Xe,children:[Object(G.jsx)(a,{}),Object(G.jsx)(Ze.a,{children:"".concat(e.address.city," ").concat(e.address.road)})]},e.place_id)}))]})})},qe=function(e){var t=e.value,a=e.click,n=e.text;return Object(G.jsx)("button",{type:"button",onClick:a,value:t,children:n})},De=function(e){var t=e.value,a=e.name,n=e.onChange,c=e.placeholder;return Object(G.jsx)("input",{type:"text",value:t,onChange:n,name:a,placeholder:c,id:a,autoComplete:"off"})},He=function(e){var t=e.input,a=e.array,c=e.current,r=e.auto,s=e.title,i=e.onChange,o=e.print,l=e.id;Object(n.useEffect)((function(){c&&t.onClick(c)}),[c]);var d=u()({"btn-close":!0,open:t.focus&&t.value}),j=u()({"auto-address":!0,open:t.focus&&r});return Object(G.jsxs)("div",{className:"city-content",children:[Object(G.jsx)("span",{children:s}),Object(G.jsxs)("section",{className:"city-content-main",onFocus:t.onFocus,onBlur:t.onBlur,children:[Object(G.jsx)(De,{name:l,value:t.value,onChange:i,placeholder:"city"===l?"":"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438"}),Object(G.jsx)("button",{type:"button",onClick:t.onClose,className:d,children:Object(G.jsx)(Se,{})}),Object(G.jsx)("div",{className:j,children:a.length?a.map((function(e){var t,a,n,c,r;return Object(G.jsx)(qe,{value:null!==(a=e.name)&&void 0!==a?a:"".concat(e.address.road," ").concat(null!==(n=e.address.house_number)&&void 0!==n?n:""),click:i,text:null!==(c=e.name)&&void 0!==c?c:"".concat(e.address.city," ").concat(e.address.road," ").concat(null!==(r=e.address.house_number)&&void 0!==r?r:"")},null!==(t=e.name)&&void 0!==t?t:e.address.road)})):""})]}),Object(G.jsx)("span",{children:t.isDirty&&t.printError(o)})]})},We=function(e){var t=e.nextStep,a=e.page,c=Object(s.b)(),r=Object(s.c)((function(e){return e.app.placeMarks})),i=Object(s.c)((function(e){return e.app.newCities})),o=Object(s.c)((function(e){return e.app.newPlaceMarks})),l=Object(s.c)((function(e){return e.app.currentAddress})),u=Object(s.c)((function(e){return e.app.currentCity.name})),d=Pe("",{isEmpty:{text:"\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435",value:!0},isCompareAddress:{text:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043b\u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430",value:!1,array:o}}),j=Pe("",{isCompareCity:{text:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043f\u043e\u043b\u0435 \u043f\u0443\u0441\u0442\u044b\u043c \u0438\u043b\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",value:!1,array:i}});return Object(n.useEffect)((function(){r.length?function(){var e=ce.getState().app.addresses,t=ce.getState().app.cities,a=[];t.forEach((function(t){e.some((function(e){return e.cityId.name===t.name}))&&a.push(t)})),ce.dispatch(B(a))}():(c(Ie),c(function(){var e=Object(H.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe({method:"GET",url:"/api/db/point",params:{limit:10}});case 3:a=e.sent,n=a.data.data.filter((function(e){return e.cityId})),t({type:A,payload:n}),n.forEach((function(e){ce.dispatch(Le("".concat(e.cityId.name," ").concat(e.address)))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))}),[r.length]),Object(n.useEffect)((function(){!j.value&&j.focus?(d.onClick(""),function(){var e=ce.getState().app.placeMarks,t=ce.getState().app.cities;ce.dispatch(T({})),ce.dispatch(_("","")),ce.dispatch(R(t)),ce.dispatch(I(e))}()):j.value&&l.city!==j.value&&!j.isCompareError.value&&d.onClick("")}),[j.value]),Object(n.useEffect)((function(){var e;d.focus&&!d.value&&j.inputValid.value&&(j.value||c(I(r)),c(_("",null!==(e=j.value)&&void 0!==e?e:"")))}),[d.value]),Object(G.jsx)(xe,{path:"model",text:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c",step:t,page:a,arrayValid:[d.inputValid.value,j.inputValid.value],children:Object(G.jsxs)("main",{className:"location-content",children:[Object(G.jsxs)("section",{className:"location-city",children:[Object(G.jsx)(He,{current:u,auto:j.isCompareError.value||!j.value,title:"\u0413\u043e\u0440\u043e\u0434",onChange:j.onChange,print:["isCompareError"],input:j,array:i,id:"city"}),Object(G.jsx)(He,{current:l.name,auto:d.isCompareError.value,title:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438",onChange:d.onChangeAddress,print:["isEmpty","isCompareError"],input:d,array:o,id:"place"})]}),Object(G.jsxs)("section",{className:"location-map",children:[Object(G.jsx)("h3",{children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435:"}),Object(G.jsx)(Je,{})]})]})})};var $e=function(){return Object(G.jsx)(i.a,{children:Object(G.jsxs)(o.c,{children:[Object(G.jsx)(o.a,{exact:!0,path:"/car-sharing/",component:J}),Object(G.jsx)(o.a,{exact:!0,path:"/car-sharing/order",render:function(){return Object(G.jsx)(We,{page:0,nextStep:1})}}),Object(G.jsx)(o.a,{path:"/car-sharing/order/model",render:function(){return Object(G.jsx)(Ne,{page:1,nextStep:2})}}),Object(G.jsx)(o.a,{path:"/car-sharing/order/extra",render:function(){return Object(G.jsx)(Te,{page:2,nextStep:3})}}),Object(G.jsx)(o.a,{path:"/car-sharing/order/total",render:function(){return Object(G.jsx)(_e,{page:3,nextStep:3})}})]})})};r.a.render(Object(G.jsx)(s.a,{store:ce,children:Object(G.jsx)($e,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.8ade9495.chunk.js.map