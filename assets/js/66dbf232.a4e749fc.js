"use strict";(self.webpackChunkxyter_docs=self.webpackChunkxyter_docs||[]).push([[294],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),g=o(n),s=r,c=g["".concat(u,".").concat(s)]||g[s]||p[s]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var d={};for(var u in e)hasOwnProperty.call(e,u)&&(d[u]=e[u]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8819:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],d={},u="Guild",o={unversionedId:"configuration/guild/index",id:"configuration/guild/index",title:"Guild",description:"| Parameter               | Default            | Command                                  | Description                                                                                            | Type       |",source:"@site/docs/configuration/guild/index.md",sourceDirName:"configuration/guild",slug:"/configuration/guild/",permalink:"/docs/configuration/guild/",editUrl:"https://github.com/ZynerOrg/xyter-docs/tree/main/packages/create-docusaurus/templates/shared/docs/configuration/guild/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/configuration/"},next:{title:"User",permalink:"/docs/configuration/user/"}},m={},p=[],g={toc:p};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"guild"},"Guild"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_","id"),(0,l.kt)("td",{parentName:"tr",align:null},"auto"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier in database"),(0,l.kt)("td",{parentName:"tr",align:null},"Identifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"guildId"),(0,l.kt)("td",{parentName:"tr",align:null},"guild.id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier of Guild"),(0,l.kt)("td",{parentName:"tr",align:null},"Snowflake")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credits.status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/settings guild credits status")),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle status of credits"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credits.rate"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/settings guild credits rate")),(0,l.kt)("td",{parentName:"tr",align:null},"How much credits members should get for sending messages"),(0,l.kt)("td",{parentName:"tr",align:null},"Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credits.minimumLength"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/settings guild credits minimum-length")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum length of a message to be granted credits for sending the message"),(0,l.kt)("td",{parentName:"tr",align:null},"Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credits.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"5000"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/settings guild credits timeout")),(0,l.kt)("td",{parentName:"tr",align:null},"How long members need to wait between earning credits for sending messages, specified in milliseconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credits.workRate"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/settings guild credits work-rate")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum amount of credits a member can earn when using command ",(0,l.kt)("inlineCode",{parentName:"td"},"/credits work")),(0,l.kt)("td",{parentName:"tr",align:null},"Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credits.workTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"900000"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/settings guild credits work-timeout")),(0,l.kt)("td",{parentName:"tr",align:null},"How long members need to wait between working using command ",(0,l.kt)("inlineCode",{parentName:"td"},"/credits work"),", specified in milliseconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shop.roles.status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle status of shop roles"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shop.roles.pricePerHour"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"How much members are charged for custom roles per hour"),(0,l.kt)("td",{parentName:"tr",align:null},"Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"points.status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/settings guild points status")),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle status of points"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"points.rate"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/settings guild points rate")),(0,l.kt)("td",{parentName:"tr",align:null},"How much points members should get for sending message"),(0,l.kt)("td",{parentName:"tr",align:null},"Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"points.minimumLength"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/settings guild points minimum-length")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum length of a message to be granted points for sending the message"),(0,l.kt)("td",{parentName:"tr",align:null},"Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"points.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"5000"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/settings guild points timeout")),(0,l.kt)("td",{parentName:"tr",align:null},"How long members need to wait between earning points for sending messages, specified in milliseconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createdAt"),(0,l.kt)("td",{parentName:"tr",align:null},"new Date()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"When guild was added to database"),(0,l.kt)("td",{parentName:"tr",align:null},"Date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updatedAt"),(0,l.kt)("td",{parentName:"tr",align:null},"new Date()"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Last time guild was updated in the database"),(0,l.kt)("td",{parentName:"tr",align:null},"Date")))))}s.isMDXComponent=!0}}]);