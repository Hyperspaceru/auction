(this.webpackJsonpauction=this.webpackJsonpauction||[]).push([[0],[,,,,,,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return _}));var n=4,c=function(e){return e.id=n++,{type:"ADD_ITEM",payload:e}},r=function(e){return{type:"DELETE_ITEM",payload:e}},_=function(e){return{type:"UPDATE_ITEM",payload:e}}},,,,,,,,,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_eso_repos_auction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_ListItem_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(43),_ListItem_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_ListItem_scss__WEBPACK_IMPORTED_MODULE_2__),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_redux_actions_itemsActions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),checkMathExp=function(e){return!!e.match(/^\d+(\s*[+\-*/]\s*\d+)+$/g)};function ListItem(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.text),_useState2=Object(_home_eso_repos_auction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),_text=_useState2[0],setText=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.cost),_useState4=Object(_home_eso_repos_auction_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),_cost=_useState4[0],setCost=_useState4[1],dispatch=Object(react_redux__WEBPACK_IMPORTED_MODULE_3__.b)(),handleChange=function(e,t){t(e.target.value)},handleTextFocus=function(e){var t=e.target.value;setText(t),dispatch(Object(_redux_actions_itemsActions__WEBPACK_IMPORTED_MODULE_4__.c)({id:props.id,text:t,cost:_cost}))},handleTextKey=function(e){var t=e.target.value;"Enter"!==e.key&&13!==e.keyCode||(setText(t),dispatch(Object(_redux_actions_itemsActions__WEBPACK_IMPORTED_MODULE_4__.c)({id:props.id,text:t,cost:_cost})))},handleCostFocus=function handleCostFocus(event){var value=event.target.value;checkMathExp(value)&&(value=eval(value)),setCost(value),dispatch(Object(_redux_actions_itemsActions__WEBPACK_IMPORTED_MODULE_4__.c)({id:props.id,text:_text,cost:value}))},handleCostKey=function handleCostKey(event){var value=event.target.value;"Enter"!==event.key&&13!==event.keyCode||(checkMathExp(value)&&(value=eval(value)),setCost(value),dispatch(Object(_redux_actions_itemsActions__WEBPACK_IMPORTED_MODULE_4__.c)({id:props.id,text:_text,cost:value})))};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"list__item"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"list__input_group"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"text",className:"list__input",value:_text,onChange:function(e){return handleChange(e,setText)},onKeyUp:function(e){return handleTextKey(e)},onBlur:function(e){return handleTextFocus(e)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{type:"text",className:"list__input input_cost",value:_cost,onChange:function(e){return handleChange(e,setCost)},onKeyUp:function(e){return handleCostKey(e)},onBlur:function(e){return handleCostFocus(e)},placeholder:"\u0421\u0443\u043c\u043c\u0430",pattern:"[0-9\\.\\+\\-\\*\\/]*"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"list__delete",onClick:props.onDelete},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i",{class:"fas fa-times"})))}__webpack_exports__.a=ListItem},,function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),_=a.n(r),u=(a(32),a(33),a(4)),s=a(2),o=(a(38),function(e){return{minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60),mills:e%1e3}}),l=function(e){var t=e.initialTime,a=Object(n.useRef)(t),r=Object(n.useRef)(null),_=Object(n.useState)(o(0)),l=Object(u.a)(_,2),i=l[0],m=l[1],E=Object(n.useState)(null),d=Object(u.a)(E,2),b=d[0],O=d[1],f=Object(s.b)(),p=Object(s.c)((function(e){return e.timerReducer}));return Object(n.useEffect)((function(){if(0!==p.minuteUpdate&&(a.current=Math.max(a.current+6e4*p.minuteUpdate,0),f({type:"MINUTE_UPDATE_DONE"}),m(o(a.current))),p.reset&&(a.current=t,r.current=null,f({type:"RESET_TIMER_DONE"}),m(o(a.current))),p.isPause||p.timeIsOver)clearInterval(b),r.current=null,p.timeIsOver&&(a.current=0),m(o(a.current));else{var e=setInterval((function(){var e=r.current?r.current:Date.now(),t=Date.now()-e,n=a.current-t;n<10?(f({type:"STOP_TIMER"}),a.current=0,m(0)):(r.current=Date.now(),a.current=n,m(o(n)))}),33);O(e)}return function(){return clearInterval(b)}}),[p,f]),c.a.createElement("div",{className:"timer_container"},c.a.createElement("p",{className:"timer"},i.minutes?i.minutes:0," : ",i.seconds?i.seconds:0," : ",i.mills?i.mills:0))};a(39);var i=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.timerReducer}));return c.a.createElement("div",{className:"control-bar"},c.a.createElement("button",{className:"control-bar_button",onClick:function(){return e({type:"RESET_TIMER"})}},c.a.createElement("i",{class:"fas fa-stop"})),c.a.createElement("button",{className:"control-bar_button",onClick:function(){return e({type:"PLUS_MINUTE"})}},c.a.createElement("i",{class:"fas fa-plus"})),c.a.createElement("button",{className:"control-bar_button ".concat(t.isPause?"":"button--disable"),onClick:function(){return e({type:"START_TIMER"})}},c.a.createElement("i",{class:"fas fa-play"})),c.a.createElement("button",{className:"control-bar_button ".concat(t.isPause?"button--disable":""),onClick:function(){return e({type:"PAUSE_TIMER"})}},c.a.createElement("i",{class:"fas fa-pause"})),c.a.createElement("button",{className:"control-bar_button",onClick:function(){return e({type:"MINUS_MINUTE"})}},c.a.createElement("i",{class:"fas fa-minus"})),c.a.createElement("button",{className:"control-bar_button",onClick:function(){return e({type:"SHOW_MENU"})}},c.a.createElement("i",{class:"fas fa-ellipsis-h"})))},m=(a(40),a(8)),E=function(e,t){t(e.target.value)};var d=function(){var e=Object(s.b)(),t=Object(n.useState)(),a=Object(u.a)(t,2),r=a[0],_=a[1],o=Object(n.useState)(),l=Object(u.a)(o,2),i=l[0],d=l[1],b=Object(n.useRef)(null);return c.a.createElement("form",{onSubmit:function(t){return a=t,e(Object(m.a)({text:r,cost:i})),a.preventDefault(),_(""),d(""),void b.current.focus();var a},className:"add-form",id:"add-form"},c.a.createElement("button",{type:"submit",className:"add-form_submit",form:"add-form"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),c.a.createElement("div",{className:"add-form_input-group"},c.a.createElement("input",{ref:b,type:"text",className:"add-form_input",value:r,onChange:function(e){return E(e,_)}}),c.a.createElement("input",{type:"text",className:"add-form_input",value:i,onChange:function(e){return E(e,d)}})))},b=(a(41),function(e){var t="data:text/csv;charset=utf-8,";return e.forEach((function(e){var a="".concat(e.text,", ").concat(e.cost);t+=a+"\r\n"})),t}),O=function(e){var t="data:text/csv;charset=utf-8,";return e.forEach((function(e){for(var a=0;a<e.cost;a++){var n="".concat(e.text);t+=n+"\r\n"}})),t};var f=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],_=Object(s.c)((function(e){return e.itemsReducer})),o=Object(s.c)((function(e){return e.modalMenuReducer})),l=Object(s.b)();return!o.menuIsVisible&&a&&r(!1),c.a.createElement("div",{className:"modal ".concat(o.menuIsVisible?"":"modal--disable"),onClick:function(){return l({type:"HIDE_MENU"})}},c.a.createElement("div",{className:"modal_menu",onClick:function(e){e.stopPropagation()}},c.a.createElement("div",{className:"modal_menu__item"},c.a.createElement("button",{className:"modal_menu__button",onClick:function(){r(!a)}},"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"),c.a.createElement("div",{className:"modal_menu__subitem ".concat(a?"modal_menu__subitem--slide":"")},c.a.createElement("button",{className:"modal_menu__button"},c.a.createElement("a",{className:"button__link",download:"list.csv",href:encodeURI(b(_))},"\u041e\u0431\u044b\u0447\u043d\u044b\u0439")," "),c.a.createElement("button",{className:"modal_menu__button"},c.a.createElement("a",{className:"button__link",download:"list_balls.csv",href:encodeURI(O(_))},"\u0414\u043b\u044f \u0448\u0430\u0440\u043e\u0432")))),c.a.createElement("div",{className:"modal_menu__item"},c.a.createElement("label",{className:"switch__title"},"\u0412\u044b\u043a\u0443\u043f"),c.a.createElement("label",{class:"switch"},c.a.createElement("input",{type:"checkbox",checked:o.buyoutEnabled,onChange:function(e){!function(e,t){e.target.checked?t({type:"ENABLE_BUYOUT"}):t({type:"DISABLE_BUYOUT"})}(e,l)},class:"switch__checkbox"}),c.a.createElement("div",{class:"switch__slider"})),c.a.createElement("div",{className:"modal_menu__subitem ".concat(o.buyoutEnabled?"modal_menu__subitem--slide":"")},c.a.createElement("input",{className:"modal_menu__input",type:"text",value:o.buyoutCost,onChange:function(e){l({type:"SET_BUYOUTCOST",payload:{cost:e.target.value}})}})))))},p=(a(42),a(25));var v=function(){var e=Object(s.c)((function(e){return e.itemsReducer})),t=Object(s.b)();return c.a.createElement("section",{className:"list"},e.map((function(e){return c.a.createElement(p.a,{key:e.id,id:e.id,text:e.text,cost:e.cost,onDelete:function(){t(Object(m.b)(e.id))}})})))},T=(a(44),function(e,t){return e.cost>=t.cost?e:t});var M=function(){var e=Object(s.c)((function(e){return e.itemsReducer})),t=Object(s.c)((function(e){return e.timerReducer})),a=Object(s.c)((function(e){return e.modalMenuReducer})),r=Object(n.useState)(e.length>0?e.reduce(T):{}),_=Object(u.a)(r,2),o=_[0],l=_[1],i=Object(s.b)();return Object(n.useEffect)((function(){e.length>0&&l(e.reduce(T))}),[e]),Object(n.useEffect)((function(){a.buyoutEnabled&&o.cost>=a.buyoutCost&&a.buyoutCost>0&&(!t.isPause||t.timeIsOver)&&i({type:"STOP_TIMER"})}),[o,t.isPause]),e.length>0?c.a.createElement("div",{className:"modal-winner ".concat(t.timeIsOver?"":"modal-winner--disable"),onClick:function(){return i({type:"STOP_TIMER_DONE"})}},c.a.createElement("div",{className:"modal-winner_text"},c.a.createElement("h1",{className:"modal-winner_h1"},"\u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c"),c.a.createElement("h3",{className:"modal-winner_name"},o.text),c.a.createElement("p",{className:"modal-winner_price"},o.cost," \u0440\u0443\u0431\u043b\u0435\u0439"))):""};a(45);var h=function(){var e=Object(s.c)((function(e){return e.modalMenuReducer}));return c.a.createElement("p",{className:"buyoutItem ".concat(e.buyoutEnabled?"":"buyoutItem--hide")},"\u0412\u044b\u043a\u0443\u043f ",e.buyoutCost)};var I=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("main",null,c.a.createElement(M,null),c.a.createElement(f,null),c.a.createElement(l,{initialTime:2e4}),c.a.createElement(h,null),c.a.createElement(d,null),c.a.createElement(v,null)),c.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(26),D=a.n(j),y=a(11),P=a(1),U={isPause:!0,minuteUpdate:0,timeIsOver:!1,reset:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_TIMER":return Object(P.a)(Object(P.a)({},e),{},{isPause:!1,timeIsOver:!1});case"PAUSE_TIMER":return Object(P.a)(Object(P.a)({},e),{},{isPause:!0});case"STOP_TIMER":return Object(P.a)(Object(P.a)({},e),{},{timeIsOver:!0,isPause:!0});case"STOP_TIMER_DONE":return Object(P.a)(Object(P.a)({},e),{},{timeIsOver:!1});case"RESET_TIMER":return Object(P.a)(Object(P.a)({},U),{},{reset:!0});case"RESET_TIMER_DONE":return Object(P.a)(Object(P.a)({},e),{},{reset:!1});case"PLUS_MINUTE":return Object(P.a)(Object(P.a)({},e),{},{minuteUpdate:1});case"MINUS_MINUTE":return Object(P.a)(Object(P.a)({},e),{},{minuteUpdate:-1});case"MINUTE_UPDATE_DONE":return Object(P.a)(Object(P.a)({},e),{},{minuteUpdate:0});default:return e}},N=a(12),R=[{id:1,text:"\u041a\u0430\u043c\u0435\u043d\u044c (2009)",cost:100},{id:2,text:"\u0421\u043e\u0440\u0432\u0438 \u0433\u043e\u043b\u043e\u0432\u0430 \u0447\u0430\u0441\u0442\u044c \u043f\u0435\u0440\u0432\u0430\u044f \u044d\u043f\u0438\u0437\u043e\u0434 5 (2009)",cost:500},{id:3,text:"\u042e\u0436\u043d\u044b\u0439 \u043f\u0430\u0440\u043a (2001)",cost:300}],x=function(e,t){return t.cost-e.cost},S=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_ITEM":return e=Object(N.a)(t),e=[].concat(Object(N.a)(e),[{id:a.payload.id,text:a.payload.text,cost:a.payload.cost}]).sort((function(e,t){return x(e,t)}));case"DELETE_ITEM":return e=Object(N.a)(t).filter((function(e){return e.id!==a.payload}));case"UPDATE_ITEM":return e=Object(N.a)(t).filter((function(e){return e.id!==a.payload.id})),e=[].concat(Object(N.a)(e),[{id:a.payload.id,text:a.payload.text,cost:a.payload.cost}]).sort((function(e,t){return x(e,t)}));default:return t}},A={menuIsVisible:!1,buyoutEnabled:!0,buyoutCost:600},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_MENU":return Object(P.a)(Object(P.a)({},e),{},{menuIsVisible:!0});case"HIDE_MENU":return Object(P.a)(Object(P.a)({},e),{},{menuIsVisible:!1});case"ENABLE_BUYOUT":return Object(P.a)(Object(P.a)({},e),{},{buyoutEnabled:!0});case"DISABLE_BUYOUT":return Object(P.a)(Object(P.a)({},e),{},{buyoutEnabled:!1});case"SET_BUYOUTCOST":return Object(P.a)(Object(P.a)({},e),{},{buyoutCost:t.payload.cost});default:return e}},k=Object(y.b)({timerReducer:C,itemsReducer:S,modalMenuReducer:w}),L=Object(y.c)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());_.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{store:L},c.a.createElement(D.a,{basename:"/auction"},c.a.createElement(I,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.51d14bd2.chunk.js.map