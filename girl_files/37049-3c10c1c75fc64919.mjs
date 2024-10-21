"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[37049],{38351:(e,t,r)=>{r.d(t,{Z:()=>f});var o=r(667294),i=r(883119),n=r(876594),a=r(214877),l=r(140017),s=r(666472),d=r(677068),c=r(785893);let u=({direction:e,onClick:t})=>{let r=(0,l.ZP)(),o="right"===e?r._('Click to scroll right', 'featuredBoards.featuredBoardsModule.iconScrollRight.label', 'Accessibility label for clicking to scroll right in Featured Boards Module'):r._('Click to scroll left', 'featuredBoards.featuredBoardsModule.iconScrollLeft.label', 'Accessibility label for clicking to scroll left in Featured Boards Module');return(0,c.jsx)(i.xu,{alignItems:"center",display:"flex",height:157,left:"left"===e,marginEnd:"right"===e?5:0,marginStart:"left"===e?5:0,position:"absolute",right:"right"===e,top:!0,children:(0,c.jsx)(i.xu,{borderStyle:"shadow",height:n.QAx,rounding:4,children:(0,c.jsx)(i.hU,{accessibilityLabel:o,bgColor:"white",icon:"right"===e?"arrow-forward":"arrow-back",onClick:t,size:"sm"})})})};function _(e){return e?.map(({type:e,id:t})=>`${e??""}:${t??""}`).join("|")}function p({board:e,boardIndex:t,slotIndex:r,story:o,viewParameter:n,viewType:l}){let{logContextEvent:u}=(0,a.v)(),p=(0,s.Z)({clientTrackingParams:o.tracking_params,componentType:15086,contextLogData:{board_id:e.id,board_pin_count:e.pin_count??0,board_index:t,content_ids:_(o?.objects),story_id:o.id,story_type:o.story_type},impressionType:"Board",loggingId:o.id,slotIndex:r,viewParameter:n,viewType:l}),f=e=>{u({aux_data:{board_id:e.id,board_index:t,board_pin_count:e.pin_count??0,content_ids:_(o?.objects),story_id:o.id,story_type:o.story_type},component:15086,event_type:102,view_type:l,view_parameter:n})};return(0,c.jsx)(i.xu,{ref:p,children:(0,c.jsx)(i.iP,{onTap:()=>f(e),children:(0,c.jsx)(d.default,{boardKey:{type:"deprecated",data:e},display:"static",isBoardsActualizationReps:!0,isCollaboratorsAttributionVisible:!0,noPaddings:!0,showFollowButton:!1,type:"grid",viewParameter:n,viewType:l},e.id)})})}function f({slotIndex:e,story:t,viewParameter:r,viewType:l}){let{logContextEvent:d}=(0,a.v)(),f=(0,o.useRef)(null),[y,h]=(0,o.useState)({current:0,end:!1,start:!0}),{objects:E,subtitle:b,title:v}=t,m=(0,s.Z)({clientTrackingParams:t.tracking_params,componentType:15086,contextLogData:{content_ids:_(t?.objects),story_id:t.id,story_index:e,story_reason:"Featured Boards Module",story_title:t.title?.format,story_type:t.story_type,total_object_count:t.objects?.length},impressionType:"Story",loggingId:t.id,slotIndex:e,viewParameter:r,viewType:l}),g=e=>{if(!f.current)return;let{clientWidth:o,scrollLeft:i,scrollWidth:n}=f.current,a=n-o,s=Math.max(0,(i||0)+240*Math.floor(o/240)*e);a-s<118?f.current.scrollLeft=a:f.current.scrollLeft=s-s%240,d({aux_data:{content_ids:_(t?.objects),story_id:t.id,story_type:t.story_type},component:15086,event_type:e>0?9315:9316,view_type:l,view_parameter:r})};return(0,c.jsxs)(i.xu,{ref:m,borderStyle:"lg",paddingY:5,rounding:4,children:[(0,c.jsxs)(i.xu,{marginBottom:3,paddingX:7,children:[b&&(0,c.jsx)(i.xv,{size:"200",children:b.format}),v&&(0,c.jsx)(i.xu,{marginTop:b?1:0,children:(0,c.jsx)(i.xv,{size:"500",weight:"bold",children:v.format})})]}),(0,c.jsxs)(i.xu,{position:"relative",children:[(0,c.jsx)(i.xu,{ref:f,dangerouslySetInlineStyle:{__style:{scrollBehavior:"smooth"}},onScroll:()=>{if(!f.current)return;let e=f.current.scrollLeft||0,t=e+f.current.clientWidth>=f.current.scrollWidth;h({current:e,end:t,start:0===e})},overflow:"hidden",children:(0,c.jsxs)(i.kC,{gap:1,children:[(0,c.jsx)(i.xu,{width:n.AE8}),E?.map((o,i)=>c.jsx(p,{board:o,boardIndex:i,slotIndex:e,story:t,viewParameter:r,viewType:l},o.id)),(0,c.jsx)(i.xu,{width:n.AE8})]})}),!y.start&&(0,c.jsx)(u,{direction:"left",onClick:()=>g(-1)}),!y.end&&(0,c.jsx)(u,{direction:"right",onClick:()=>g(1)})]})]})}},481177:(e,t,r)=>{r.d(t,{Z:()=>o});let o={AMP_TRACKING_DOMAIN:"amp.pinterest.com",BoardPrivacy:{SECRET:"secret",PUBLIC:"public",PROTECTED:"protected"},BoardType:{PROTECTED:"protected"},BulkAction:{MOVE:"bulkMove",COPY:"bulkCopy",CREATE_SECTION:"bulkCreateSection",DELETE:"bulkDelete"},MAX_CHARS_FOR_BOARD_PIN_DESCRIPTION:500,MAX_CHARS_FOR_BOARD_TITLE:50,MAX_CHARS_FOR_FIRST_NAME:30,MAX_FETCH_NUM_FOLLOWERS_PER_PAGE:50,MAX_STORED_VISITED_PIN_PAGES:10,VIDEO_IFRAME_ID:"video-iframe"}},877457:(e,t,r)=>{r.d(t,{g:()=>a,t:()=>n});var o=r(667294);let i=(0,o.createContext)(null),n=i.Provider,a=()=>(0,o.useContext)(i)},321329:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(667294),i=r(703404),n=r(839391),a=r(5859);function l(e){let{mountedPlacements:t,completeExperience:r,dismissExperience:l,experiences:s,fetchAllExperiences:d,fetchAllExperiencesMulti:c,fetchExperienceForPlacements:u,triggerExperimentsForPlacement:_,viewExperience:p}=(0,n.Z)(),{isBot:f}=(0,a.B)(),y=e&&!f?(0,i.MQ)(s,t,e):null;return(0,o.useMemo)(()=>({completeExperience:r,dismissExperience:l,experienceForPlacement:y,fetchAllExperiences:d,fetchAllExperiencesMulti:c,fetchExperienceForPlacements:u,triggerExperimentsForPlacement:_,viewExperience:p}),[r,l,y,d,c,u,_,p])}},503129:(e,t,r)=>{r.d(t,{Z:()=>o});function o({gutterWidth:e,isRTL:t,itemWidth:r=236,maxColumns:o=16,minColumns:i=2}){let n=r+e,a=`
.gridCentered {
  margin-left: auto;
  margin-right: auto;
}
.gridCentered .static {
  padding: 0 ${e/2}px;
  position: absolute;
  visibility: hidden;
}
`;for(let e=i;e<o+1;e+=1){let r=e===i?0:e*n;a+=`
@media (min-width: ${r}px) and (max-width: ${(e+1)*n-1}px) {
  .gridCentered {
    max-width: ${e*n}px;
  }
  .gridCentered .static:nth-child(-n+${e}) {
    position: static !important;
    visibility: visible !important;
    float: ${t?"right":"left"};
    display: block;
  }
}
`}return a}},569372:(e,t,r)=>{r.d(t,{F_:()=>a,ZP:()=>i,bC:()=>l,y8:()=>n});var o=r(342513);class i{constructor(){var e,t,r;t={},(e="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e="pending","string"))?r:String(r))in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t}add(e,t,r){r&&(this.pending[e]={...this.pending[e]??{},[t]:r},r.finally?.(()=>this.remove(e,t)))}remove(e,t){this.pending[e]?.[t]&&(delete this.pending[e][t],0===Object.keys(this.pending[e]).length&&delete this.pending[e])}get(e,t){return this.pending[e]?.[t]??null}}let n=new i,{Provider:a,useMaybeHook:l}=(0,o.Z)("PendingFetches")},638747:(e,t,r)=>{r.d(t,{UZ:()=>p,Z8:()=>f,my:()=>y,vL:()=>E,w1:()=>h});var o=r(667294),i=r(545007),n=r(216167),a=r(342513),l=r(827625),s=r(785893);function d(e,t,r){let o=[...t[e][r.payload.name]??[],r.payload.handler],i={...t};return i[e]={...t[e],[r.payload.name]:o},i}function c(e,t,r){if(!t[e][r.payload.name])return t;let o=t[e][r.payload.name].filter(e=>e!==r.payload.handler),i={...t};return i[e]={...t[e],[r.payload.name]:o},i}let{Provider:u,useHook:_}=(0,a.Z)("ResourceContext");function p({children:e,resourceCreator:t}){let[{listeners:r,moreListeners:i},a]=(0,o.useReducer)((e,t)=>{switch(t.type){case"addListener":return d("listeners",e,t);case"addMoreListener":return d("moreListeners",e,t);case"removeListener":return c("listeners",e,t);case"removeMoreListener":return c("moreListeners",e,t);default:return e}},{listeners:{},moreListeners:{}});n.Z.fetchCompleteCallback=({resource:e,options:t,response:o,normalizedResponse:i,refresh:n,resourceSchema:a})=>{r[e]&&r[e].forEach(r=>r({isRefresh:n,normalizedResponse:i,options:t,schema:a,resource:e,response:o}))},n.Z.fetchMoreCompleteCallback=({resource:e,options:t,response:r,normalizedResponse:o,refresh:n,resourceSchema:a})=>{i[e]&&i[e].forEach(i=>i({isRefresh:n,normalizedResponse:o,options:t,schema:a,resource:e,response:r}))};let l=(0,o.useMemo)(()=>({listenerDispatch:a,resourceCreator:t}),[t]);return(0,s.jsx)(u,{value:l,children:e})}function f(e,t){let{listenerDispatch:r}=_();(0,o.useEffect)(()=>(r({type:"addListener",payload:{name:e,handler:t}}),()=>{r({type:"removeListener",payload:{name:e,handler:t}})}))}function y(e,t){let{listenerDispatch:r}=_();(0,o.useEffect)(()=>(r({type:"addMoreListener",payload:{name:e,handler:t}}),()=>{r({type:"removeMoreListener",payload:{name:e,handler:t}})}))}function h(){let e=(0,i.I0)();return(0,o.useCallback)((t,r)=>e((0,l.jB)(t,r)),[e])}function E(){return _().resourceCreator}},637253:(e,t,r)=>{r.d(t,{Z:()=>y});var o=r(667294),i=r(545007),n=r(616550),a=r(288240),l=r(5859),s=r(227258),d=r(839967),c=r(569372),u=r(638747);let{Provider:_,useMaybeHook:p}=(0,r(342513).Z)("SuspensefulResource"),f=({httpStatus:e})=>!e||e>=500;function y(e,t,r){let{enabledRouteRefresh:_,headers:y,name:h,noCache:E,options:b,schema:v}=e;p(),p();let m=(0,c.bC)(),g=(0,u.vL)(),x=(0,i.I0)(),R=(0,a.Z)(b),A=(0,o.useRef)(),C=(0,n.k6)(),D=C&&"POP"!==C.action,B=(0,o.useRef)(),O=e=>e[h]?.[R],I=(0,i.v9)(({resources:e})=>O(e)?.data),k=(0,i.v9)(({resources:e})=>O(e)?.error),L=!!k||void 0!==I,T=(0,i.v9)(({resources:e})=>!!O(e)?.fetching),j=(0,i.v9)(({resources:e})=>O(e)?.nextBookmark),M=L&&!T&&j===d.qx,P=!!(L&&_&&D&&!t),[S,Z]=(0,o.useState)(P),w=S;(0,i.wU)(I,B.current)||(S&&(B.current||!P)&&(w=!1,Z(!1)),B.current=I);let N=(0,o.useCallback)(e=>{let t=x((0,s.U)(h,{options:b,schema:v,bookmark:e,headers:y},g,void 0));e||m?.add(h,R,t)},[x,h,R,v,y]),F=(0,o.useCallback)(()=>{let e=x((0,s.b)(h,{options:b,schema:v,headers:y},g));m?.add(h,R,e)},[x,h,R,v,y]),z=(0,o.useCallback)(()=>{t||(F(),Z(!0))},[t,F]),H=(0,o.useCallback)(()=>{!j||M||T||t||N(j)},[t,N,M,T,j]),{isBot:U}=(0,l.B)(),V=(0,o.useCallback)(()=>{if(!(T||m?.get(h,R))&&!t&&A.current!==R){let e=void 0===A.current;A.current=R,!L||r&&e&&k&&f(k)?N():(!U&&E||P)&&F()}},[r,N,F,t,k,U,T,L,P,h,E,R,m]),$=(0,o.useMemo)(()=>({fetchMore:H,isFetching:T,isLoaded:L,isRefreshing:w,name:h,optionsKey:R,refresh:z}),[H,T,L,w,h,R,z]);return(0,o.useMemo)(()=>({fetchResource:V,ref:$}),[V,$])}},757640:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(667294),i=r(545007),n=r(288240),a=r(839967),l=r(637253);function s(e){let{enabledRouteRefresh:t,headers:r,name:s,noCache:d,options:c,schema:u}=e??{name:a.fY,options:null},_=(0,n.Z)(c),p=e=>e[s]?.[_],f=(0,i.v9)(({resources:e})=>p(e)?.nextBookmark),y=(0,i.v9)(({resources:e})=>p(e)?.data),h=(0,i.v9)(({resources:e})=>p(e)?.auxData),E=(0,i.v9)(({resources:e})=>p(e)?.error),{fetchResource:b,ref:{fetchMore:v,isFetching:m,isLoaded:g,isRefreshing:x,refresh:R}}=(0,l.Z)({enabledRouteRefresh:t,headers:r,name:s,noCache:d,options:c,schema:u},!e,!0),A=g&&!m&&f===a.qx;return(0,o.useEffect)(()=>{b()}),(0,o.useMemo)(()=>({auxData:h,data:y,error:E,fetchMore:v,isAtEnd:A,isFetching:m,isLoaded:g,isRefreshing:x,nextBookmark:f,refresh:R}),[h,y,E,v,A,m,g,x,f,R])}},241552:(e,t,r)=>{r.d(t,{l:()=>n,r:()=>a});var o=r(667294);let i=(0,o.createContext)(null),n=()=>(0,o.useContext)(i),a=i.Provider},71980:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(667294),i=r(883119),n=r(807028),a=r(136359),l=r(983983),s=r(4058),d=r(785893);function c({children:e,className:t,forwardRef:r,offset:c=0,position:u,shouldShowShadow:_=!1,style:p={},top:f,stickyZIndex:y}){let{setIsContentHeaderPresent:h}=(0,n.i)();(0,o.useEffect)(()=>(h(!0),function(){h(!1)}),[]);let{currentScrollPosition:E,isScrolled:b,setSubheaderShadow:v}=(0,s.WQ)();(0,o.useEffect)(()=>(_&&v("contentHeader"),()=>{_&&v(null)}),[_]);let m=!1;"pending"!==f&&(m=null!=f?E>=f:b);let g=(0,a.t)(),x=(0,d.jsx)("div",{ref:r,className:t,style:{...p,top:g+c,...m&&_?{...l.Rz,zIndex:499}:{},...u&&"sticky"!==u?{position:u}:{}},children:e});return"sticky"===u?(0,d.jsx)(i.Le,{top:g+c,zIndex:y||new i.Ry(1),children:x}):x}},136359:(e,t,r)=>{r.d(t,{c:()=>i,t:()=>n});var o=r(514810);function i({children:e}){let{height:t}=(0,o.Z)();return e(t)}function n(){let{height:e}=(0,o.Z)();return e}},324186:(e,t,r)=>{r.d(t,{C:()=>s,f:()=>l});var o=r(667294),i=r(342513),n=r(785893);let{Provider:a,useHook:l}=(0,i.Z)("MostRecentPin");function s({children:e}){let[t,r]=(0,o.useState)(),[i,l]=(0,o.useState)(),s=(0,o.useCallback)(e=>{l([e].concat((i?i.slice(0,10):[]).filter(t=>t!==e)))},[i]),d=(0,o.useMemo)(()=>({id:t,plpImageSignatures:i,setMostRecentPinId:r,setMostRecentPinImage:s}),[t,i,s]);return(0,n.jsx)(a,{value:d,children:e})}},155117:(e,t,r)=>{r.d(t,{f:()=>l,w:()=>s});var o=r(667294),i=r(342513),n=r(785893);let{Provider:a,useHook:l}=(0,i.Z)("Session");function s({children:e}){let[t,r]=(0,o.useState)(void 0),i=(0,o.useCallback)(()=>r(void 0),[]),l=(0,o.useMemo)(()=>({unauthFollowUserId:t,setUnauthFollowUserId:r,removeUnauthFollowUserId:i}),[t,i]);return(0,n.jsx)(a,{value:l,children:e})}},281871:(e,t,r)=>{r.d(t,{Z:()=>o});function o(e,t,r,i=!1,n){return{privacy_filter:t?"secret":"public",sort:r||"last_pinned_to",field_set_key:"profile_grid_item",username:e,isRetrievalHub:i,filter_types:n}}},945488:(e,t,r)=>{r.d(t,{Z:()=>o});let o=(e,t)=>`${e}:${t||""}`},885837:(e,t,r)=>{r.d(t,{O:()=>l,Q:()=>s});var o=r(827625),i=r(945488),n=r(64819);let a=["alphabetical","last_pinned_to","oldest","newest","group_boards_at_top","custom"],l={name:"BoardsResource",key:"boardsResource",options:({boardOrder:e,filterStories:t,mixPublicSecret:r,username:o,privacyFilter:i="all",filterAllPins:n=!1,filterShoppingList:a=!1,includeArchived:l=!0},s)=>({privacy_filter:i,sort:e||"last_pinned_to",field_set_key:"profile_grid_item",filter_stories:t,username:o,page_size:25,group_by:r?"mix_public_private":"visibility",include_archived:l,redux_normalize_feed:!0,filter_all_pins:n,filter_shopping_list:a,...s?{orbac_subject_id:s}:Object.freeze({})})},s=e=>a.reduce((t,r)=>{let a=[(0,n.N8)("profileBoards",(0,i.Z)(e,r))];return[!0,!1].forEach(t=>{[!0,!1].forEach(i=>{a.push((0,o.jB)(l.name,l.options({username:e,boardOrder:r,mixPublicSecret:t,filterStories:i})))})}),t.concat(a)},[])},821419:(e,t,r)=>{r.d(t,{Br:()=>c,Cr:()=>E,K8:()=>f,L1:()=>D,YQ:()=>C,ZP:()=>b,aX:()=>v,eo:()=>_,md:()=>u,oG:()=>p,oL:()=>m,of:()=>y,xQ:()=>h,xR:()=>A,yT:()=>d});var o=r(216167),i=r(481177),n=r(227258),a=r(827625),l=r(281871),s=r(885837);function d(e){return{type:"BOARD_UPDATE_COMPLETE",payload:{board:e}}}function c(e){return{type:"BOARD_PIN_COUNT_CHANGED",payload:e}}function u(e,t){return{type:"BOARD_FOLLOW",payload:{boardId:e,value:t}}}function _({viewingUserId:e,viewingUsername:t,boardId:r,boardPinCount:o}){return{type:"BOARD_DELETE",payload:{viewingUserId:e,viewingUsername:t,boardId:r,boardPinCount:o}}}let p=(e,t)=>r=>r((0,n.U)("BoardResource",{options:{board_id:e,field_set_key:t}}));function f(e){return t=>{e&&(0,s.Q)(e).forEach(e=>{t(e)})}}let y=e=>({type:"BOARD_DISMISS_SENSITIVITY_SCREEN",payload:{boardId:e}}),h=e=>p(e,"pin_count"),E=(e,t)=>({type:"BOARD_COVER_IMAGE_UPDATED",payload:{boardId:e,coverPin:t}}),b=e=>({type:"BOARD_DISABLE_MORE_IDEAS_BADGING",payload:{boardId:e}});function v(e,t,r){let n={name:e,privacy:i.Z.BoardPrivacy.PUBLIC,username:t,...r?{orbac_subject_id:r}:Object.freeze({})};return e=>o.Z.create("BoardResource",n).callCreate().then(r=>{let o=r.resource_response.data;return e(t&&(0,a.jB)("BoardsResource",(0,l.Z)(t,!1))),o})}function m(e={},t,r){return{type:"BOARD_CREATE_COMPLETE",payload:{options:e,board:t},error:r}}let g=(e,t)=>({type:"BOARD_INVITE_DENIED_BY_VIEWER",payload:{boardId:e,userId:t}}),x=(e,t,r)=>({type:"BOARD_COLLABORATOR_DELETE",payload:{boardId:e,userId:t,viewingUser:r}}),R=(e,t,r,o)=>({type:"BOARD_COLLABORATOR_ADD",payload:{boardId:e,viewingUser:t,status:r,collaboratingUsers:o}}),A=(e,t,r)=>async i=>{i(g(e,t));let n=await o.Z.create("BoardInviteResource",{board_id:e,invited_user_id:t}).callDelete();return n.resource_response.error||r({event_type:29,object_id_str:e}),n},C=(e,t,r,i,n,a)=>async l=>{l(x(e,i?.id??"",r));try{(await o.Z.create("accepted"===t?"BoardCollaboratorResource":"BoardInviteResource",{board_id:e,field_set_key:"boardEdit",invited_user_id:i?.id??"",...a?{orbac_subject_id:a}:{}}).callDelete()).resource_response.error||n({event_type:"accepted"===t?25:29,object_id_str:e})}catch(o){l(R(e,r,t,[i]))}},D=(e,t,r,i)=>n=>{let a=o.Z.create("BoardResource",{board_id:r}).callDelete();return n(_({viewingUserId:e,viewingUsername:t,boardId:r,boardPinCount:i})),a}},64819:(e,t,r)=>{function o(e){return{type:"FEED_ITEM_REORDERED",payload:e}}function i(e,t){return{type:"FEED_INVALIDATE",payload:{feedType:e,feedId:t}}}r.d(t,{EX:()=>a,N8:()=>i,Qv:()=>n,_f:()=>o,vX:()=>l});let n=(e,t,r=Object.freeze({}))=>({type:"APPEND_FEED_ITEMS",payload:{id:e,options:r,items:t}});function a(e){return{type:"FEED_ITEMS_REMOVED",payload:e}}function l(e){return{type:"FEED_ITEMS_ADDED",payload:e}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/37049-3c10c1c75fc64919.mjs.map