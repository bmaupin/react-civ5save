(this["webpackJsonpciv5save-editor"]=this["webpackJsonpciv5save-editor"]||[]).push([[0],{230:function(e,a,t){e.exports=t(488)},323:function(e,a,t){},488:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(74),o=t.n(s),i=(t(323),t(23)),l=t(24),c=t(27),p=t(25),m=t(15),d=t(26),h=t(31),u=t.n(h),g=t(52),v=t(224),y=t.n(v),E=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(p.a)(a).call(this,e))).handleCheckboxClick=t.handleCheckboxClick.bind(Object(m.a)(t)),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"handleCheckboxClick",value:function(e){this.props.onPropertyChanged(e.target.value,e.target.checked),"timeVictory"===e.target.value&&!1===e.target.checked&&this.props.onPropertyChanged("maxTurns",0)}},{key:"render",value:function(){return r.a.createElement(g.FormControlLabel,{className:this.props.classes.formControlLabel,control:r.a.createElement(y.a,{checked:this.props.checked,className:this.props.classes.checkbox,onClick:this.handleCheckboxClick,value:this.props.value}),label:this.props.label})}}]),a}(n.PureComponent),b=t(225),f=t.n(b),S=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(p.a)(a).call(this,e))).state={value:t.props.value},t.handleTextFieldBlur=t.handleTextFieldBlur.bind(Object(m.a)(t)),t.handleTextFieldChange=t.handleTextFieldChange.bind(Object(m.a)(t)),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({value:String(e.value)})}},{key:"handleTextFieldBlur",value:function(e){this.props.onPropertyChanged(e.target.name,Number(e.target.value))}},{key:"handleTextFieldChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.classes.subProperty},r.a.createElement(f.a,{disabled:this.props.disabled,inputProps:{max:999,min:0},label:this.props.label,name:this.props.name,onBlur:this.handleTextFieldBlur,onChange:this.handleTextFieldChange,style:{width:"100%"},type:"number",value:this.state.value}))}}]),a}(n.PureComponent),C=t(141),O=t.n(C),w=t(28),x=t.n(w),k=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(p.a)(a).call(this,e))).handleRadioGroupChange=t.handleRadioGroupChange.bind(Object(m.a)(t)),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"handleRadioGroupChange",value:function(e){this.props.onPropertyChanged(e.target.name,e.target.value)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(x.a,{style:{padding:"12px 0 0 0"},type:"body1"},this.props.label),r.a.createElement(C.RadioGroup,{className:this.props.classes.subProperty,name:this.props.name,onChange:this.handleRadioGroupChange,selectedValue:this.props.selectedValue},this.props.values.map((function(a,t){return r.a.createElement(g.FormControlLabel,{className:e.props.classes.radioButton,control:r.a.createElement(O.a,null),key:a,label:a,value:a})}))))}}]),a}(n.PureComponent),L=t(76),P=t.n(L);function T(e){return r.a.createElement("div",{className:e.classes.propertyList},r.a.createElement(x.a,{className:e.classes.propertyListHeading,type:"subheading"},e.label),r.a.createElement(P.a,{className:e.classes.paper},r.a.createElement(g.FormGroup,{className:e.classes.propertyListBody},Object.keys(e.saveProperties).map((function(a){var t=null,n=null;return"maxTurns"===a?(t=!e.savegame.timeVictory,n=e.saveProperties[a]):"turnTimerLength"===a&&(t=!e.savegame.turnTimerEnabled,n=!0===e.savegame.pitboss?"Hours":"Seconds"),"maxTurns"===a||"turnTimerLength"===a?r.a.createElement(S,{classes:e.classes,disabled:t,label:n,key:a,name:a,onPropertyChanged:e.onPropertyChanged,value:e.savegame[a]}):"turnMode"===a?r.a.createElement(k,{classes:e.classes,label:e.saveProperties[a],key:a,name:a,onPropertyChanged:e.onPropertyChanged,selectedValue:e.savegame[a],values:Object.values(u.a.TURN_MODES)}):r.a.createElement(E,{checked:e.savegame[a],classes:e.classes,key:a,label:e.saveProperties[a],onPropertyChanged:e.onPropertyChanged,value:a})})))))}function j(e){var a={policySaving:"Allow policy saving",promotionSaving:"Allow promotion saving",completeKills:"Complete kills",newRandomSeed:"New random seed",noBarbarians:"No barbarians",noEspionage:"No espionage",noCityRazing:"No city razing",oneCityChallenge:"One-city challenge",ragingBarbarians:"Raging barbarians",randomPersonalities:"Random personalities"};return e.savegame.gameMode===u.a.GAME_MODES.MULTI&&delete a.newRandomSeed,r.a.createElement(T,{classes:e.classes,label:"Advanced options",onPropertyChanged:e.onPropertyChanged,savegame:e.savegame,saveProperties:a})}var A=t(226),N=t.n(A),M=t(227),I=t(40),R=t(96),D=t.n(R),G=t(95),_=t.n(G),V=t(53),F=t.n(V),U=t(30),z=t.n(U),B=t(11),H=t.n(B);function W(e){function a(e){return new Promise((function(a,t){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.addEventListener("load",(function(){a(n.response)})),n.addEventListener("error",(function(){t(n.statusText)})),n.send()}))}return r.a.createElement(B.ListItem,{button:!0,onClick:function(t){var n,r;return F.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.changeSavegameState(he.SAVEGAME_STATES.LOADING),t.next=3,F.a.awrap(a("demo/demo.Civ5Save"));case 3:return n=t.sent,t.prev=4,t.next=7,F.a.awrap(u.a.fromFile(n));case 7:r=t.sent,e.onNewSavegame(r,"demo/demo.Civ5Save".split("/").pop()),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(4),t.t0.customMessage='Your web browser may be outdated. Please upgrade your browser or install a modern browser such as <a href="https://www.mozilla.org/firefox/">Firefox</a>.',e.onError(t.t0);case 15:case"end":return t.stop()}}),null,null,[[4,11]])}},r.a.createElement(B.ListItemIcon,null,r.a.createElement(z.a,null,"play_circle_outline")),r.a.createElement(B.ListItemText,{primary:"Demo"}))}var J=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(p.a)(a).call(this,e))).downloadURL=null,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"createDownloadURL",value:function(){if(!q(this.props.savegame))return q(this.downloadURL)||URL.revokeObjectURL(this.downloadURL),this.downloadURL=window.URL.createObjectURL(this.props.savegame.toBlob()),this.downloadURL}},{key:"render",value:function(){return r.a.createElement(B.ListItem,{button:!0,component:"a",disabled:this.props.disabled,download:this.props.savegameFilename,href:this.createDownloadURL()},r.a.createElement(B.ListItemIcon,null,r.a.createElement(z.a,null,"file_download")),r.a.createElement(B.ListItemText,{primary:"Download"}))}}]),a}(n.Component);function q(e){return"undefined"===typeof e||null===e}function K(e){return r.a.createElement(T,{classes:e.classes,label:"Hidden options",onPropertyChanged:e.onPropertyChanged,savegame:e.savegame,saveProperties:{alwaysPeace:"Always peace",alwaysWar:"Always war",lockMods:"Lock mods",noChangingWarPeace:"No changing war or peace",noCultureOverviewUI:"No culture overview UI",noHappiness:"No happiness",noPolicies:"No policies",noReligion:"No religion",noScience:"No science",noWorldCongress:"No world congress"}})}var X=t(75),Y=t.n(X);function $(e){var a={pitboss:"Pitboss",privateGame:"Private game",turnTimerEnabled:"Turn timer",turnTimerLength:"Seconds",turnMode:"Turn mode"};return e.savegame.gameMode===u.a.GAME_MODES.HOTSEAT&&(delete a.pitboss,delete a.privateGame,delete a.turnMode),r.a.createElement(T,{classes:e.classes,label:"Multiplayer options",onPropertyChanged:e.onPropertyChanged,savegame:e.savegame,saveProperties:a})}var Q=t(51),Z=t.n(Q),ee=t(228),ae=t.n(ee),te=t(229),ne=t.n(te),re=Object(I.createStyleSheet)((function(e){return{readOnlyPropertiesItem:{padding:"0 16px 16px 0"}}})),se=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(p.a)(a).call(this,e))).handleExpandClick=function(){t.setState({expanded:!t.state.expanded})},t.state={expanded:!1},t.readOnlyProperties={gameBuild:"Game build",gameVersion:"Game version",gameMode:"Game mode",currentTurn:"Current turn",difficulty:"Difficulty",startingEra:"Starting era",currentEra:"Current era",gamePace:"Game pace",mapSize:"Map size",mapFile:"Map"},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"getPlayerList",value:function(){return this.props.savegame.players.map((function(e){return"undefined"!==typeof e.civilization?"".concat(e.civilization," (").concat(e.status,")"):"(".concat(e.status,")")})).join(", ")}},{key:"isSavegamePropertyDefined",value:function(e){return!("undefined"===typeof(a=this.props.savegame)||null===a)&&"undefined"!==typeof this.props.savegame[e];var a}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.classes.propertyList,style:{maxWidth:"900px"}},r.a.createElement(Y.a,{"aria-expanded":this.state.expanded,"aria-label":"Game details",className:this.props.classes.propertyListHeading,onClick:this.handleExpandClick,style:{fontSize:this.props.theme.typography.fontSize,height:"initial",width:"initial"}},r.a.createElement(x.a,{type:"subheading"},"Game details"),r.a.createElement(z.a,{style:{margin:"0 6px",transform:this.state.expanded&&"rotate(180deg)",transition:this.props.theme.transitions.create("transform",{duration:this.props.theme.transitions.duration.shortest})}},"expand_more")),r.a.createElement(ne.a,{in:this.state.expanded,style:{margin:"-5px",padding:"5px"},transitionDuration:"auto"},r.a.createElement(P.a,{className:this.props.classes.paper},r.a.createElement("div",{className:this.props.classes.propertyListBody,style:{display:"flex",flexFlow:"row wrap",paddingBottom:"0px",paddingRight:"0px",paddingTop:"16px"}},Object.keys(this.readOnlyProperties).map((function(a){return e.isSavegamePropertyDefined(a)&&r.a.createElement("div",{className:e.props.classes.readOnlyPropertiesItem,key:a,style:{flex:"0 1 130px"}},r.a.createElement(x.a,{type:"body1"},e.readOnlyProperties[a],":",r.a.createElement("br",null),r.a.createElement("em",null,e.props.savegame[a])))})),r.a.createElement("div",{className:this.props.classes.readOnlyPropertiesItem},r.a.createElement(x.a,{type:"body1"},"Players: ",r.a.createElement("em",null,this.getPlayerList()))),this.isSavegamePropertyDefined("enabledDLC")&&r.a.createElement("div",{className:this.props.classes.readOnlyPropertiesItem,style:{width:"100%"}},r.a.createElement(x.a,{type:"body1"},"DLC: ",r.a.createElement("em",null,this.props.savegame.enabledDLC.join(", ")||"None"))),this.isSavegamePropertyDefined("enabledMods")&&r.a.createElement("div",{className:this.props.classes.readOnlyPropertiesItem,style:{width:"100%"}},r.a.createElement(x.a,{type:"body1"},"Mods: ",r.a.createElement("em",null,this.props.savegame.enabledMods.join(", ")||"None")))))))}}]),a}(n.Component);var oe=Object(I.withStyles)(re)(se),ie=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(p.a)(a).call(this,e))).handleChange=t.handleChange.bind(Object(m.a)(t)),t.handleClick=t.handleClick.bind(Object(m.a)(t)),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"handleChange",value:function(e){var a,t;return F.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.refs.fileUploader.files.length>0)){e.next=14;break}return this.props.changeSavegameState(he.SAVEGAME_STATES.LOADING),a=this.refs.fileUploader.files[0],e.prev=3,e.next=6,F.a.awrap(u.a.fromFile(a));case 6:t=e.sent,this.props.onNewSavegame(t,a.name),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),e.t0.customMessage="Please try another file or use the link on the left to report a bug.",this.props.onError(e.t0);case 14:case"end":return e.stop()}}),null,this,[[3,10]])}},{key:"handleClick",value:function(e){this.refs.fileUploader.value=null,this.refs.fileUploader.click()}},{key:"render",value:function(){return r.a.createElement(B.ListItem,{button:!0,onClick:this.handleClick},r.a.createElement(B.ListItemIcon,null,r.a.createElement(z.a,null,"folder_open")),r.a.createElement(B.ListItemText,{primary:"Open save file"}),r.a.createElement("input",{type:"file",ref:"fileUploader",onChange:this.handleChange,style:{display:"none"}}))}}]),a}(n.PureComponent);function le(e){return r.a.createElement(T,{classes:e.classes,label:"Victory types",onPropertyChanged:e.onPropertyChanged,savegame:e.savegame,saveProperties:{timeVictory:"Time victory",maxTurns:"Max turns",scienceVictory:"Science victory",dominationVictory:"Domination victory",culturalVictory:"Cultural victory",diplomaticVictory:"Diplomatic victory"}})}var ce="https://github.com/bmaupin/civ5save-editor",pe=function(){var e=D()({type:"dark"}),a=_()(e,{fontFamily:'"Tw Cen W01 Medium", "Roboto", "Helvetica", "Arial", sans-serif',fontSize:"initial"});return a.body1.fontSize="initial",a.subheading.fontSize="1.17em",a.title.fontSize="1.5em",Object(I.createMuiTheme)({palette:e,typography:a})}(),me=Object(I.createStyleSheet)((function(e){return{checkbox:{height:"36px"},formControlLabel:{marginRight:"0"},paper:{backgroundColor:pe.palette.background.contentFrame},propertyList:{margin:"20px 0 4px 24px"},propertyListBody:{margin:"10px 0 0 0",padding:"10px 20px"},radioButton:{height:"36px"},subProperty:{padding:"0 0 0 12px"}}})),de=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(p.a)(a).call(this,e))).state={savegame:null,savegameState:a.SAVEGAME_STATES.NOT_LOADED},t.changeSavegameState=t.changeSavegameState.bind(Object(m.a)(t)),t.handleError=t.handleError.bind(Object(m.a)(t)),t.handleNewSavegame=t.handleNewSavegame.bind(Object(m.a)(t)),t.handlePropertyChange=t.handlePropertyChange.bind(Object(m.a)(t)),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"changeSavegameState",value:function(e){this.setState({savegameState:e})}},{key:"handleError",value:function(e){this.setState({error:e,savegameState:a.SAVEGAME_STATES.ERROR})}},{key:"handleNewSavegame",value:function(e,t){this.setState({savegame:e,savegameFilename:t,savegameState:a.SAVEGAME_STATES.LOADED})}},{key:"handlePropertyChange",value:function(e,a){this.setState((function(t){return t.savegame[e]=a,t}))}},{key:"render",value:function(){return r.a.createElement(I.MuiThemeProvider,{className:"App",style:{height:"100%"},theme:pe},r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(N.a,{style:{position:"relative"}},r.a.createElement(ae.a,null,r.a.createElement(x.a,{style:{flex:"1"},type:"title"},"Civilization V save editor"),r.a.createElement(Y.a,{color:"contrast",href:ce},r.a.createElement(Z.a,null,r.a.createElement("path",{d:"M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"}))))),r.a.createElement("div",{style:{background:pe.palette.background.default,color:pe.palette.text.primary,display:"flex",minHeight:"calc(100% - 64px)"}},r.a.createElement("div",{style:{minHeight:"100%"}},r.a.createElement(H.a,{style:{backgroundColor:pe.palette.background.paper,boxSizing:"border-box",height:"100%"}},r.a.createElement(ie,{changeSavegameState:this.changeSavegameState,onError:this.handleError,onNewSavegame:this.handleNewSavegame}),r.a.createElement(J,{disabled:this.state.savegameState!==a.SAVEGAME_STATES.LOADED,savegame:this.state.savegame,savegameFilename:this.state.savegameFilename}),r.a.createElement(B.ListItem,{button:!0,component:"a",href:"".concat(ce,"/issues")},r.a.createElement(B.ListItemIcon,null,r.a.createElement(z.a,null,"bug_report")),r.a.createElement(B.ListItemText,{primary:"Report bug"})),r.a.createElement(W,{changeSavegameState:this.changeSavegameState,onError:this.handleError,onNewSavegame:this.handleNewSavegame}))),r.a.createElement("div",{style:{flex:"1",padding:"0 24px 20px 0"}},this.state.savegameState===a.SAVEGAME_STATES.NOT_LOADED&&r.a.createElement(H.a,{style:{opacity:"0.8"}},r.a.createElement(B.ListItem,null,r.a.createElement(B.ListItemText,{primary:"\u2190 Start by clicking here to open a Civilization V save file from your computer"})),r.a.createElement(B.ListItem,null,r.a.createElement(B.ListItemText,{primary:"\u2190 When you're done, click here to download a new save file with the changes"})),r.a.createElement(B.ListItem,null,r.a.createElement(B.ListItemText,{primary:"\u2190 If you have any problems, you can report a bug here"})),r.a.createElement(B.ListItem,null,r.a.createElement(B.ListItemText,{primary:"\u2190 Click here to try out the editor with a sample save file"}))),this.state.savegameState===a.SAVEGAME_STATES.LOADING&&r.a.createElement("div",{style:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center"}},r.a.createElement("div",null,r.a.createElement(M.CircularProgress,{size:50}))),this.state.savegameState===a.SAVEGAME_STATES.LOADED&&r.a.createElement("div",null,r.a.createElement(oe,{classes:this.props.classes,savegame:this.state.savegame,theme:pe}),r.a.createElement("div",{style:{display:"flex",flexFlow:"row wrap"}},r.a.createElement(le,{classes:this.props.classes,onPropertyChanged:this.handlePropertyChange,savegame:this.state.savegame}),r.a.createElement(j,{classes:this.props.classes,onPropertyChanged:this.handlePropertyChange,savegame:this.state.savegame}),r.a.createElement(K,{classes:this.props.classes,onPropertyChanged:this.handlePropertyChange,savegame:this.state.savegame}),(this.state.savegame.gameMode===u.a.GAME_MODES.MULTI||this.state.savegame.gameMode===u.a.GAME_MODES.HOTSEAT)&&r.a.createElement($,{classes:this.props.classes,onPropertyChanged:this.handlePropertyChange,savegame:this.state.savegame}))),this.state.savegameState===a.SAVEGAME_STATES.ERROR&&r.a.createElement(x.a,{style:{margin:"20px"},type:"subheading"},r.a.createElement("p",null,r.a.createElement(z.a,{style:{fontSize:"50px"}},"error_outline")),r.a.createElement("p",null,"The following error was encountered when trying to open the save file:"),r.a.createElement("pre",null,this.state.error.message),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.state.error.customMessage}}))))))}}]),a}(n.Component);de.SAVEGAME_STATES={ERROR:"Error",LOADED:"Loaded",LOADING:"Loading",NOT_LOADED:"Not loaded"};var he=Object(I.withStyles)(me)(de),ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(he,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/civ5save-editor",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/civ5save-editor","/service-worker.js");ue?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ge(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):ge(e)}))}}()}},[[230,1,2]]]);
//# sourceMappingURL=main.2da8e7cd.chunk.js.map