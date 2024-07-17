(()=>{"use strict";const H=window["mightyMods.common"],r=(window,window["ng.core"]),f=window.rxjs;function b(n){return"function"==typeof n}const ye=function ji(n){const e=n(i=>{Error.call(i),i.stack=(new Error).stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}(n=>function(e){n(this),this.message=e?`${e.length} errors occurred during unsubscription:\n${e.map((i,o)=>`${o+1}) ${i.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=e});function we(n,t){if(n){const e=n.indexOf(t);0<=e&&n.splice(e,1)}}class I{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;const{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(const s of e)s.remove(this);else e.remove(this);const{initialTeardown:i}=this;if(b(i))try{i()}catch(s){t=s instanceof ye?s.errors:[s]}const{_finalizers:o}=this;if(o){this._finalizers=null;for(const s of o)try{ot(s)}catch(a){t=t??[],a instanceof ye?t=[...t,...a.errors]:t.push(a)}}if(t)throw new ye(t)}}add(t){var e;if(t&&t!==this)if(this.closed)ot(t);else{if(t instanceof I){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(e=this._finalizers)&&void 0!==e?e:[]).push(t)}}_hasParent(t){const{_parentage:e}=this;return e===t||Array.isArray(e)&&e.includes(t)}_addParent(t){const{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t}_removeParent(t){const{_parentage:e}=this;e===t?this._parentage=null:Array.isArray(e)&&we(e,t)}remove(t){const{_finalizers:e}=this;e&&we(e,t),t instanceof I&&t._removeParent(this)}}function nt(n){return n instanceof I||n&&"closed"in n&&b(n.remove)&&b(n.add)&&b(n.unsubscribe)}function ot(n){b(n)?n():n.unsubscribe()}I.EMPTY=(()=>{const n=new I;return n.closed=!0,n})();const F={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},oe={setTimeout(n,t,...e){const{delegate:i}=oe;return i?.setTimeout?i.setTimeout(n,t,...e):setTimeout(n,t,...e)},clearTimeout(n){const{delegate:t}=oe;return(t?.clearTimeout||clearTimeout)(n)},delegate:void 0};function se(){}const Vi=Ce("C",void 0,void 0);function Ce(n,t,e){return{kind:n,value:t,error:e}}let L=null;class Se extends I{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,nt(t)&&t.add(this)):this.destination=Zi}static create(t,e,i){return new Me(t,e,i)}next(t){this.isStopped?ke(function Hi(n){return Ce("N",n,void 0)}(t),this):this._next(t)}error(t){this.isStopped?ke(function zi(n){return Ce("E",void 0,n)}(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?ke(Vi,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const Yi=Function.prototype.bind;function Ee(n,t){return Yi.call(n,t)}class Xi{constructor(t){this.partialObserver=t}next(t){const{partialObserver:e}=this;if(e.next)try{e.next(t)}catch(i){re(i)}}error(t){const{partialObserver:e}=this;if(e.error)try{e.error(t)}catch(i){re(i)}else re(t)}complete(){const{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(e){re(e)}}}class Me extends Se{constructor(t,e,i){let o;if(super(),b(t)||!t)o={next:t??void 0,error:e??void 0,complete:i??void 0};else{let s;this&&F.useDeprecatedNextContext?(s=Object.create(t),s.unsubscribe=()=>this.unsubscribe(),o={next:t.next&&Ee(t.next,s),error:t.error&&Ee(t.error,s),complete:t.complete&&Ee(t.complete,s)}):o=t}this.destination=new Xi(o)}}function re(n){F.useDeprecatedSynchronousErrorHandling?function Wi(n){F.useDeprecatedSynchronousErrorHandling&&L&&(L.errorThrown=!0,L.error=n)}(n):function st(n){oe.setTimeout(()=>{const{onUnhandledError:t}=F;if(!t)throw n;t(n)})}(n)}function ke(n,t){const{onStoppedNotification:e}=F;e&&oe.setTimeout(()=>e(n,t))}const Zi={closed:!0,next:se,error:function $i(n){throw n},complete:se};"function"==typeof SuppressedError&&SuppressedError;const Re="function"==typeof Symbol&&Symbol.observable||"@@observable";function ae(n){return n}let Be,G,M=(()=>{class n{constructor(e){e&&(this._subscribe=e)}lift(e){const i=new n;return i.source=this,i.operator=e,i}subscribe(e,i,o){const s=function bn(n){return n&&n instanceof Se||function vn(n){return n&&b(n.next)&&b(n.error)&&b(n.complete)}(n)&&nt(n)}(e)?e:new Me(e,i,o);return function Ui(n){if(F.useDeprecatedSynchronousErrorHandling){const t=!L;if(t&&(L={errorThrown:!1,error:null}),n(),t){const{errorThrown:e,error:i}=L;if(L=null,e)throw i}}else n()}(()=>{const{operator:a,source:c}=this;s.add(a?a.call(s,c):c?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return new(i=ft(i))((o,s)=>{const a=new Me({next:c=>{try{e(c)}catch(d){s(d),a.unsubscribe()}},error:s,complete:o});this.subscribe(a)})}_subscribe(e){var i;return null===(i=this.source)||void 0===i?void 0:i.subscribe(e)}[Re](){return this}pipe(...e){return function ut(n){return 0===n.length?ae:1===n.length?n[0]:function(e){return n.reduce((i,o)=>o(i),e)}}(e)(this)}toPromise(e){return new(e=ft(e))((i,o)=>{let s;this.subscribe(a=>s=a,a=>o(a),()=>i(s))})}}return n.create=t=>new n(t),n})();function ft(n){var t;return null!==(t=n??F.Promise)&&void 0!==t?t:Promise}!function yn(){"function"==typeof Symbol&&Symbol.iterator&&Symbol}(),window;try{Be=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Be=!1}function q(n){return function Bn(){if(null==G&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>G=!0}))}finally{G=G||!1}return G}()?n:!!n.capture}class so extends I{constructor(t,e){super()}schedule(t,e=0){return this}}const ue={setInterval(n,t,...e){const{delegate:i}=ue;return i?.setInterval?i.setInterval(n,t,...e):setInterval(n,t,...e)},clearInterval(n){const{delegate:t}=ue;return(t?.clearInterval||clearInterval)(n)},delegate:void 0},Rt={now:()=>(Rt.delegate||Date).now(),delegate:void 0};class K{constructor(t,e=K.now){this.schedulerActionCtor=t,this.now=e}schedule(t,e=0,i){return new this.schedulerActionCtor(this,t).schedule(i,e)}}K.now=Rt.now,new class ao extends K{constructor(t,e=K.now){super(t,e),this.actions=[],this._active=!1}flush(t){const{actions:e}=this;if(this._active)return void e.push(t);let i;this._active=!0;do{if(i=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,i){for(;t=e.shift();)t.unsubscribe();throw i}}}(class ro extends so{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){var i;if(this.closed)return this;this.state=t;const o=this.id,s=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(s,o,e)),this.pending=!0,this.delay=e,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(s,this.id,e),this}requestAsyncId(t,e,i=0){return ue.setInterval(t.flush.bind(t,this),i)}recycleAsyncId(t,e,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return e;null!=e&&ue.clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(t,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let o,i=!1;try{this.work(t)}catch(s){i=!0,o=s||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:t,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,we(i,this),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null,super.unsubscribe()}}}),new M(n=>n.complete());const Jt=q({passive:!0,capture:!0});class es{constructor(){this._events=new Map,this._delegateEventHandler=t=>{const e=function T(n){return n.composedPath?n.composedPath()[0]:n.target}(t);e&&this._events.get(t.type)?.forEach((i,o)=>{(o===e||o.contains(e))&&i.forEach(s=>s.handleEvent(t))})}}addHandler(t,e,i,o){const s=this._events.get(e);if(s){const a=s.get(i);a?a.add(o):s.set(i,new Set([o]))}else this._events.set(e,new Map([[i,new Set([o])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Jt)})}removeHandler(t,e,i){const o=this._events.get(t);if(!o)return;const s=o.get(e);s&&(s.delete(i),0===s.size&&o.delete(e),0===o.size&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,Jt)))}}class ge{static#e=this._eventManager=new es;constructor(t,e,i,o){this._target=t,this._ngZone=e,this._platform=o,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,o.isBrowser&&(this._containerElement=X(i))}fadeInRipple(t,e,i={}){const o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s={...ei,...i.animation};i.centered&&(t=o.left+o.width/2,e=o.top+o.height/2);const a=i.radius||function is(n,t,e){const i=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),o=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(i*i+o*o)}(t,e,o),c=t-o.left,d=e-o.top,l=s.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=c-a+"px",h.style.top=d-a+"px",h.style.height=2*a+"px",h.style.width=2*a+"px",null!=i.color&&(h.style.backgroundColor=i.color),h.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(h);const u=window.getComputedStyle(h),p=u.transitionDuration,g="none"===u.transitionProperty||"0s"===p||"0s, 0s"===p||0===o.width&&0===o.height,_=new Jo(this,h,i,g);h.style.transform="scale3d(1, 1, 1)",_.state=0,i.persistent||(this._mostRecentTransientRipple=_);let C=null;return!g&&(l||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const w=()=>this._finishRippleTransition(_),Bi=()=>this._destroyRipple(_);h.addEventListener("transitionend",w),h.addEventListener("transitioncancel",Bi),C={onTransitionEnd:w,onTransitionCancel:Bi}}),this._activeRipples.set(_,C),(g||!l)&&this._finishRippleTransition(_),_}fadeOutRipple(t){if(2===t.state||3===t.state)return;const e=t.element,i={...ei,...t.config.animation};e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",t.state=2,(t._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){const e=X(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,ii.forEach(i=>{ge._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(t){"mousedown"===t.type?this._onMousedown(t):"touchstart"===t.type?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ni.forEach(e=>{this._triggerElement.addEventListener(e,this,ti)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){0===t.state?this._startFadeOutTransition(t):2===t.state&&this._destroyRipple(t)}_startFadeOutTransition(t){const e=t===this._mostRecentTransientRipple,{persistent:i}=t.config;t.state=1,!i&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){const e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=3,null!==e&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel)),t.element.remove()}_onMousedown(t){const e=Ye(t),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Xe(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const e=t.changedTouches;for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{!t.config.persistent&&(1===t.state||t.config.terminateOnPointerUp&&0===t.state)&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){const t=this._triggerElement;t&&(ii.forEach(e=>ge._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&ni.forEach(e=>t.removeEventListener(e,this,ti)))}}function di(n,t,e,i,o,s,a){try{var c=n[s](a),d=c.value}catch(l){return void e(l)}c.done?t(d):Promise.resolve(d).then(i,o)}window;const ps=window["ng.common.http"],_s={version:1,authoringPage:{appContainer:"#app",sidebar:{container:"#blocks-sidebar",blockEditor:".blocks-sidebar__edit",itemListContainer:".block-wizard__list-container",itemList:".block-wizard__list",item:".block-wizard__item",itemButton:".block-wizard__link",closeButton:".blocks-sidebar__close"},secondarySidebar:{container:".secondary-sidebar",sidebarOpenClass:"secondary-sidebar--open",nestedContainer:".secondary-sidebar__container",itemList:".blocks-group__list",itemButton:".blocks-group__link",itemLabel:".blocks-group__label"},riseBlock:{container:".block",willEnterSelector:".block--will-enter[data-block-id]",willEnterClass:"block--will-enter",blockIdAttribute:"data-block-id",blockIdSelector:"[data-block-id]",blockIdSelectorWithId:'[data-block-id="{{RISE_BLOCK_ID}}"]',blocksTabs:".blocks-tabs",blocksTabsCol:".blocks-tabs__col",blockControls:{leftSideContainer:".block-controls__scrollable",rightSideContainer:".block-controls__tools-options",editButton:".block-controls__btn-icon--type-content",duplicateButton:".block-controls__btn-icon.block-controls__btn-icon--type-duplicate",removeButton:".block-controls__tools .block-controls__btn-icon--type-remove"},designMenu:{main:".block-controls__menu-design",container:".block-design-menu__container",themeTintOption:".block-background-menu__item--tint",customColorOption:".block-background-menu__custom-color-wrap",selectedOptionCheckmark:"svg.block-background-menu__ico-checkmark",designMenuItem:".block-background-menu__item"}},shareSettingsContent:{container:".menu-popover__content .share__content"},lessonHeader:{title:".lesson-header__title"},richTextEditor:{codeView:".fr-code-view",submitAction:".fr-submit",codeViewCloseIcon:"a.fr-command.html-switch",colorPickerContainer:".fr-color-hex-layer",colorPickerInput:".fr-input-line"},notification:{container:".app-notification",messageContainer:".app-notification__message",actionContainer:".app-notification__action"},colorPicker:{container:".rise-color-picker",colorInputField:".rise-color-picker__field"},theme:{sidebarContainer:".author-layout__sidebar",iframeContainer:".author-layout__container",indexContainer:".author-theme__index",navContainerUlElement:"nav.author-theme__index-nav ul"},blocksShortcut:{container:".block-shortcut",allBlocksButton:".block-shortcut__all-blocks"}},previewPage:{appContainer:"#app",contentFrame:"iframe.preview-content__frame",contentFrameClass:"preview-content__frame",blockElementsWithCssSelectors:"[data-block-id][data-mighty-css-selector]",blockElementsWithoutCssSelectors:"[data-block-id]:not([data-mighty-css-selector])"},reviewPage:{reviewCardGridClass:"items-list-grid",reviewCardParentClass:"items-list--item",reviewCard:'[data-item-id="{{REVIEW_ITEM_ID}}"]',reviewCardAppLogo:".applogo"},publishPage:{container:".export-flow"},publishReviewPage:{settingsContainer:".review-publish-settings",settingsHeader:".settings-header",publishButton:'[data-testid="AppHeaderButtonGroup"] button',reviewItemInput:".review-publish-settings-new-item__input",reviewItemsDropdown:".dropdown__select",reviewItemsDropdownOptions:".dropdown-option",reviewItemsExitingRadioOption:"#radioExistingItem",reviewItemsNewRadioOption:"#radioNewItem"},downloadPage:{container:".export-download"},publishedCoursePage:{riseBlocks:{container:".block",blocksTabs:".blocks-tabs",markAsCompleteHeaderItems:"button.blocks-tabs__header-item",blockIdAttribute:"data-block-id",blockIdSelector:"[data-block-id]",blockIdSelectorWithId:'[data-block-id="{{RISE_BLOCK_ID}}"]',unlinkedBlocks:".block--unlinked",blockWrapperElement:".block-wrapper"}},mods:{audioBlock:{player:".audio-player",playButton:".audio-player__play"},videoBlock:{videoElement:"video",playControls:".vjs-play-control"},gradientMod:{onePager:{lessonSlideBackgroundTop:".blocks-lesson-slide__background-top",lessonSlideBackgroundBottom:".blocks-lesson-slide__background-bottom",lessonItems:".blocks-lesson-slide__wrapper:not(.blocks-lesson-slide__wrapper--exiting) .blocks-lesson-slide__lesson [data-block-id]"}},buttonMod:{continueButtonSelector:".continue-btn",knowledgeCheckButtonSelector:".quiz-card__button",generalButtonSelector:".blocks-button__button"},listBlock:{container:".block-list"},listNumberedBlock:{container:".block-list--numbered",numberElement:".block-list__number"},numberedDivider:{dividerWrap:".block-divider--numbered .block-divider__wrap"},getNextSiblingMod:{lessonBlock:".blocks-lesson",blockWrapper:".block-wrapper",siblingByBlockId:'[data-block-id="{{BLOCK_ID}}"]'},beginButtonMod:{coverPageSelector:".cover__header",beginButtonActionWrapper:".cover__header-content-action-wrapper",descriptionBoxContainer:".cover__details-description-outline",tableOfContentsContainer:".cover__details-content-section--type-outline",tableOfContentsContainerImaginationTheme:".cover__details-content-section--type-outline-no-logo",beginButton:".cover__header-content-action-link",firstSectionHasTitle:".cover__details-content-section--type-outline section:first-child .overview-list__section-title"}}};let Ge=(()=>{class n{constructor(e,i){this.http=e,this.isPackaged=i,this.elementSelectors=_s}init(){var e=this;return function ms(n){return function(){var t=this,e=arguments;return new Promise(function(i,o){var s=n.apply(t,e);function a(d){di(s,i,o,a,c,"next",d)}function c(d){di(s,i,o,a,c,"throw",d)}a(void 0)})}}(function*(){if(!e.isPackaged){const i=yield(0,f.lastValueFrom)(e.http.get("/api/rise-selectors"));e.elementSelectors=i}})()}static#e=this.\u0275fac=function(i){return new(i||n)(r.\u0275\u0275inject(ps.HttpClient),r.\u0275\u0275inject("IS_PACKAGED"))};static#t=this.\u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),hi=(()=>{class n extends H.MightyRiseThemeModComponent{get buttonPosition(){return(this.data?.buttonPosition??"").length>0?this.data?.buttonPosition:void 0}get buttonLocation(){return(this.data?.buttonLocation??"").length>0?this.data?.buttonLocation:void 0}constructor(e,i){super(),this.riseCourseDataService=e,this.riseElementSelectorsService=i}ngOnInit(){this.beginButtonObserver?.disconnect(),this.beginButtonObserver=new MutationObserver(()=>{const e=this.getCoverPage();e&&!e.hasAttribute("data-mighty-begin-button-moved")&&(e.setAttribute("data-mighty-begin-button-moved",""),this.moveBeginButton())}),this.beginButtonObserver.observe(document.body,{childList:!0,subtree:!0})}ngOnChanges(){this.data&&(this.injectStyles(),this.moveBeginButton())}ngOnDestroy(){const e=document.querySelector("style[data-mighty-begin-button-style]");e&&e.remove(),this.beginButtonObserver?.disconnect(),this.resetBeginButtonPosition()}injectStyles(){let e=document.querySelector("style[data-mighty-begin-button-style]");e&&e.remove(),e=document.createElement("style"),e.setAttribute("data-mighty-begin-button-style",""),e.textContent=`\n            #app ${this.riseElementSelectorsService.elementSelectors.mods.beginButtonMod.beginButtonActionWrapper}[data-mighty-begin-button-moved] {\n                display: none;\n            }\n            #app ${this.riseElementSelectorsService.elementSelectors.mods.beginButtonMod.beginButtonActionWrapper}[data-mighty-begin-button-position] {\n                width: 100%;\n            }\n            #app ${this.riseElementSelectorsService.elementSelectors.mods.beginButtonMod.beginButtonActionWrapper}[data-mighty-begin-button-position="left"] {\n                justify-content: flex-start;\n            }\n            #app ${this.riseElementSelectorsService.elementSelectors.mods.beginButtonMod.beginButtonActionWrapper}[data-mighty-begin-button-position="right"] {\n                justify-content: flex-end;\n            }\n            #app ${this.riseElementSelectorsService.elementSelectors.mods.beginButtonMod.beginButtonActionWrapper}[data-mighty-begin-button-position="center"] {\n                justify-content: center;\n            }\n            #app ${this.riseElementSelectorsService.elementSelectors.mods.beginButtonMod.beginButtonActionWrapper}[data-mighty-begin-button-position="fullWidth"] a {\n                width: 100%;\n                text-align: center;\n            }\n            #app ${this.riseElementSelectorsService.elementSelectors.mods.beginButtonMod.beginButton} {\n                ${this.buildBeginButtonStyle(this.data)}\n            }\n        `,document.head.appendChild(e)}buildBeginButtonStyle(e){let i="";if(void 0!==e?.fontSize&&(i+=`font-size: ${e.fontSize}px !important;\n`),void 0!==e?.letterSpacing&&(i+=`letter-spacing: ${e.letterSpacing/10}px !important;\n`),e?.labelCasing&&(i+=`text-transform: ${e.labelCasing} !important;\n`),e?.labelColor&&(i+=`color: ${e.labelColor} !important;\n`),e?.backgroundColor&&(i+=`background-color: ${e.backgroundColor} !important;\n`),void 0!==e?.borderRadius&&(i+=`border-radius: ${e.borderRadius}px !important;\n`),e?.border&&"none"!==e.border&&(i+=`border: ${e.border} solid ${e.borderColor} !important;\n`),e?.dropShadow&&"none"!==e.dropShadow)switch(e.dropShadow){case"small":i+="box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2) !important;\n";break;case"medium":i+="box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24) !important;\n";break;case"large":i+="box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35) !important;\n"}return i}resetBeginButtonPosition(){const e=document.querySelector(`${this.riseElementSelectorsService.elementSelectors.mods.beginButtonMod.beginButtonActionWrapper}[data-mighty-begin-button-moved]`);if(e){e.removeAttribute("data-mighty-begin-button-moved");const i=document.querySelector("[data-mighty-begin-button-duplicated]");i&&i.remove()}}getCoverPage(){return document.querySelector(this.riseElementSelectorsService.elementSelectors.mods.beginButtonMod.coverPageSelector)}moveBeginButton(){if(this.resetBeginButtonPosition(),this.buttonLocation||this.buttonPosition){const e=document.querySelector(this.riseElementSelectorsService.elementSelectors.mods.beginButtonMod.beginButtonActionWrapper);if(e){const i=e.cloneNode(!0);if(e.setAttribute("data-mighty-begin-button-moved",""),i.setAttribute("data-mighty-begin-button-duplicated",""),this.buttonPosition&&i.setAttribute("data-mighty-begin-button-position",this.buttonPosition),this.buttonLocation){const s=this.riseCourseDataService.getCachedCourseData()?.course?.theme?.themeId??"classic",a=this.riseElementSelectorsService.elementSelectors.mods.beginButtonMod.descriptionBoxContainer;let c=this.riseElementSelectorsService.elementSelectors.mods.beginButtonMod.tableOfContentsContainer;if("classic"===s)i.style.marginTop="5rem",i.style.marginBottom="5rem";else if("imaginative"===s)c=this.riseElementSelectorsService.elementSelectors.mods.beginButtonMod.tableOfContentsContainerImaginationTheme,"aboveTableOfContents"===this.buttonLocation&&(i.style.marginBottom="5.6rem");else if("organic"===s){const h=document.querySelector(this.riseElementSelectorsService.elementSelectors.mods.beginButtonMod.firstSectionHasTitle);"aboveTableOfContents"===this.buttonLocation&&(i.style.marginBottom=h?"1.6rem":"6.4rem"),"belowTableOfContents"===this.buttonLocation&&(i.style.marginTop="5rem")}const d=i.querySelector(this.riseElementSelectorsService.elementSelectors.mods.beginButtonMod.beginButton);d&&(d.style.marginBottom="0");const l=document.querySelector(a);if(l)if("belowTableOfContents"===this.buttonLocation)l.appendChild(i);else if("aboveTableOfContents"===this.buttonLocation){const h=l.querySelector(c);h?h.insertAdjacentElement("beforebegin",i):l.appendChild(i)}}else e.insertAdjacentElement("afterend",i)}}}static#e=this.\u0275fac=function(i){return new(i||n)(r.\u0275\u0275directiveInject("RISE_COURSE_DATA_SERVICE"),r.\u0275\u0275directiveInject(Ge))};static#t=this.\u0275cmp=r.\u0275\u0275defineComponent({type:n,selectors:[["mighty-rise-theme-mod-begin-button"]],standalone:!0,features:[r.\u0275\u0275InheritDefinitionFeature,r.\u0275\u0275NgOnChangesFeature,r.\u0275\u0275StandaloneFeature],decls:0,vars:0,template:function(i,o){},encapsulation:3})}return n})(),Li=(()=>{class n extends H.MightyRiseThemeModComponent{ngOnChanges(){this.data&&(this.injectCustomCss(),this.injectCustomJavascript())}ngOnDestroy(){const e=document.querySelector("style[data-mighty-custom-code-style]");e&&e.remove()}injectCustomCss(){if(this.data){let e=document.querySelector("style[data-mighty-custom-code-style]");e&&e.remove(),this.data.customCss&&this.data.customCss.length>0&&(e=document.createElement("style"),e.setAttribute("data-mighty-custom-code-style",""),e.textContent=this.data.customCss,document.head.appendChild(e))}}injectCustomJavascript(){if(this.data){let e=document.querySelector("script[data-mighty-custom-code-script]");e&&e.remove(),this.data.customJavascript&&this.data.customJavascript.length>0&&(e=document.createElement("script"),e.setAttribute("data-mighty-custom-code-script",""),e.textContent=this.data.customJavascript,document.body.appendChild(e))}}static#e=this.\u0275fac=function(){let e;return function(o){return(e||(e=r.\u0275\u0275getInheritedFactory(n)))(o||n)}}();static#t=this.\u0275cmp=r.\u0275\u0275defineComponent({type:n,selectors:[["mighty-rise-theme-mod-custom-code"]],standalone:!0,features:[r.\u0275\u0275InheritDefinitionFeature,r.\u0275\u0275NgOnChangesFeature,r.\u0275\u0275StandaloneFeature],decls:0,vars:0,template:function(i,o){},encapsulation:3})}return n})();(0,H.defineRiseThemeMod)(hi),(0,H.defineRiseThemeMod)(Li)})();