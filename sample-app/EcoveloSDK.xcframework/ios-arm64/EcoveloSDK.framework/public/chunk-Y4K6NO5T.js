import {
  APP_INITIALIZER,
  ActivatedRoute,
  AngularDelegate,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Config,
  ConfigToken,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EnvironmentInjector,
  HostListener,
  Injectable,
  Injector,
  IonBackButton,
  IonModal,
  IonNav,
  IonPopover,
  IonRouterOutlet,
  IonTabs,
  Location,
  MaxValidator,
  MenuController,
  MinValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NavController,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Optional,
  OverlayBaseController,
  Router,
  RouterLinkDelegateDirective,
  RouterLinkWithHrefDelegateDirective,
  SkipSelf,
  ValueAccessor,
  ViewChild,
  ViewContainerRef,
  __decorate,
  forwardRef,
  fromEvent,
  inject,
  provideComponentInputBinding,
  raf,
  setClassMetadata,
  setIonicClasses,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-DGENMXJW.js";
import {
  menuController
} from "./chunk-SE3ANTEE.js";
import {
  getTimeGivenProgression
} from "./chunk-H7W7X3R4.js";
import {
  setupConfig
} from "./chunk-644FBQT2.js";
import {
  actionSheetController,
  alertController,
  loadingController,
  modalController,
  pickerController,
  popoverController,
  toastController
} from "./chunk-QATEHYOA.js";
import {
  initialize
} from "./chunk-TXLH22R2.js";
import {
  createGesture
} from "./chunk-7NA53B7M.js";
import {
  createAnimation
} from "./chunk-2BRJTTQT.js";
import {
  bootstrapLazy
} from "./chunk-BFPTXCSH.js";
import {
  __async,
  __publicField,
  __spreadProps,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/app-globals-CvLYUxE9.js
var globalScripts = initialize;

// node_modules/@ionic/core/dist/esm/loader.js
var defineCustomElements = (win, options) => __async(null, null, function* () {
  if (typeof window === "undefined") return void 0;
  yield globalScripts();
  return bootstrapLazy(JSON.parse('[["ion-menu_3",[[289,"ion-menu-button",{"color":[513],"disabled":[4],"menu":[1],"autoHide":[4,"auto-hide"],"type":[1],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]],[289,"ion-menu",{"contentId":[513,"content-id"],"menuId":[513,"menu-id"],"type":[1025],"disabled":[1028],"side":[513],"swipeGesture":[4,"swipe-gesture"],"maxEdgeStart":[2,"max-edge-start"],"isPaneVisible":[32],"isEndSide":[32],"isOpen":[64],"isActive":[64],"open":[64],"close":[64],"toggle":[64],"setOpen":[64]},[[16,"ionSplitPaneVisible","onSplitPaneChanged"],[2,"click","onBackdropClick"]],{"type":["typeChanged"],"disabled":["disabledChanged"],"side":["sideChanged"],"swipeGesture":["swipeGestureChanged"]}],[257,"ion-menu-toggle",{"menu":[1],"autoHide":[4,"auto-hide"],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]]]],["ion-input-password-toggle",[[289,"ion-input-password-toggle",{"color":[513],"showIcon":[1,"show-icon"],"hideIcon":[1,"hide-icon"],"type":[1025]},null,{"type":["onTypeChange"]}]]],["ion-fab_3",[[289,"ion-fab-button",{"color":[513],"activated":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16,"router-animation"],"target":[1],"show":[4],"translucent":[4],"type":[1],"size":[1],"closeIcon":[1,"close-icon"]}],[257,"ion-fab",{"horizontal":[1],"vertical":[1],"edge":[4],"activated":[1028],"close":[64],"toggle":[64]},null,{"activated":["activatedChanged"]}],[257,"ion-fab-list",{"activated":[4],"side":[1]},null,{"activated":["activatedChanged"]}]]],["ion-refresher_2",[[256,"ion-refresher-content",{"pullingIcon":[1025,"pulling-icon"],"pullingText":[1,"pulling-text"],"refreshingSpinner":[1025,"refreshing-spinner"],"refreshingText":[1,"refreshing-text"]}],[288,"ion-refresher",{"pullMin":[2,"pull-min"],"pullMax":[2,"pull-max"],"closeDuration":[1,"close-duration"],"snapbackDuration":[1,"snapback-duration"],"pullFactor":[2,"pull-factor"],"disabled":[4],"nativeRefresher":[32],"state":[32],"complete":[64],"cancel":[64],"getProgress":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-back-button",[[289,"ion-back-button",{"color":[513],"defaultHref":[1025,"default-href"],"disabled":[516],"icon":[1],"text":[1],"type":[1],"routerAnimation":[16,"router-animation"]}]]],["ion-toast",[[289,"ion-toast",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"color":[513],"enterAnimation":[16,"enter-animation"],"leaveAnimation":[16,"leave-animation"],"cssClass":[1,"css-class"],"duration":[2],"header":[1],"layout":[1],"message":[1],"keyboardClose":[4,"keyboard-close"],"position":[1],"positionAnchor":[1,"position-anchor"],"buttons":[16],"translucent":[4],"animated":[4],"icon":[1],"htmlAttributes":[16,"html-attributes"],"swipeGesture":[1,"swipe-gesture"],"isOpen":[4,"is-open"],"trigger":[1],"revealContentToScreenReader":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"swipeGesture":["swipeGestureChanged"],"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-card_5",[[289,"ion-card",{"color":[513],"button":[4],"type":[1],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16,"router-animation"],"target":[1]}],[288,"ion-card-content"],[289,"ion-card-header",{"color":[513],"translucent":[4]}],[289,"ion-card-subtitle",{"color":[513]}],[289,"ion-card-title",{"color":[513]}]]],["ion-item-option_3",[[289,"ion-item-option",{"color":[513],"disabled":[4],"download":[1],"expandable":[4],"href":[1],"rel":[1],"target":[1],"type":[1]}],[288,"ion-item-options",{"side":[1],"fireSwipeEvent":[64]}],[256,"ion-item-sliding",{"disabled":[4],"state":[32],"getOpenAmount":[64],"getSlidingRatio":[64],"open":[64],"close":[64],"closeOpened":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-accordion_2",[[305,"ion-accordion",{"value":[1],"disabled":[4],"readonly":[4],"toggleIcon":[1,"toggle-icon"],"toggleIconSlot":[1,"toggle-icon-slot"],"state":[32],"isNext":[32],"isPrevious":[32]},null,{"value":["valueChanged"]}],[289,"ion-accordion-group",{"animated":[4],"multiple":[4],"value":[1025],"disabled":[4],"readonly":[4],"expand":[1],"requestAccordionToggle":[64],"getAccordions":[64]},[[0,"keydown","onKeydown"]],{"value":["valueChanged"],"disabled":["disabledChanged"],"readonly":["readonlyChanged"]}]]],["ion-infinite-scroll_2",[[288,"ion-infinite-scroll-content",{"loadingSpinner":[1025,"loading-spinner"],"loadingText":[1,"loading-text"]}],[256,"ion-infinite-scroll",{"threshold":[1],"disabled":[4],"position":[1],"isLoading":[32],"complete":[64]},null,{"threshold":["thresholdChanged"],"disabled":["disabledChanged"]}]]],["ion-reorder_2",[[289,"ion-reorder",null,[[2,"click","onClick"]]],[256,"ion-reorder-group",{"disabled":[4],"state":[32],"complete":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-segment_2",[[289,"ion-segment-button",{"contentId":[513,"content-id"],"disabled":[1028],"layout":[1],"type":[1],"value":[8],"checked":[32],"setFocus":[64]},null,{"value":["valueChanged"]}],[289,"ion-segment",{"color":[513],"disabled":[4],"scrollable":[4],"swipeGesture":[4,"swipe-gesture"],"value":[1032],"selectOnFocus":[4,"select-on-focus"],"activated":[32]},[[16,"ionSegmentViewScroll","handleSegmentViewScroll"],[0,"keydown","onKeyDown"]],{"color":["colorChanged"],"swipeGesture":["swipeGestureChanged"],"value":["valueChanged"],"disabled":["disabledChanged"]}]]],["ion-chip",[[289,"ion-chip",{"color":[513],"outline":[4],"disabled":[4]}]]],["ion-input",[[294,"ion-input",{"color":[513],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearInputIcon":[1,"clear-input-icon"],"clearOnEdit":[4,"clear-on-edit"],"counter":[4],"counterFormatter":[16,"counter-formatter"],"debounce":[2],"disabled":[516],"enterkeyhint":[1],"errorText":[1,"error-text"],"fill":[1],"inputmode":[1],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"max":[8],"maxlength":[2],"min":[8],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[516],"required":[4],"shape":[1],"spellcheck":[4],"step":[1],"type":[1],"value":[1032],"hasFocus":[32],"setFocus":[64],"getInputElement":[64]},[[2,"click","onClickCapture"]],{"debounce":["debounceChanged"],"type":["onTypeChange"],"value":["valueChanged"],"dir":["onDirChanged"]}]]],["ion-searchbar",[[290,"ion-searchbar",{"color":[513],"animated":[4],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"cancelButtonIcon":[1,"cancel-button-icon"],"cancelButtonText":[1,"cancel-button-text"],"clearIcon":[1,"clear-icon"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"searchIcon":[1,"search-icon"],"showCancelButton":[1,"show-cancel-button"],"showClearButton":[1,"show-clear-button"],"spellcheck":[4],"type":[1],"value":[1025],"focused":[32],"noAnimate":[32],"setFocus":[64],"getInputElement":[64]},null,{"lang":["onLangChanged"],"dir":["onDirChanged"],"debounce":["debounceChanged"],"value":["valueChanged"],"showCancelButton":["showCancelButtonChanged"]}]]],["ion-toggle",[[289,"ion-toggle",{"color":[513],"name":[1],"checked":[1028],"disabled":[4],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"value":[1],"enableOnOffLabels":[4,"enable-on-off-labels"],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"required":[4],"activated":[32]},null,{"disabled":["disabledChanged"]}]]],["ion-nav_2",[[257,"ion-nav",{"delegate":[16],"swipeGesture":[1028,"swipe-gesture"],"animated":[4],"animation":[16],"rootParams":[16,"root-params"],"root":[1],"push":[64],"insert":[64],"insertPages":[64],"pop":[64],"popTo":[64],"popToRoot":[64],"removeIndex":[64],"setRoot":[64],"setPages":[64],"setRouteId":[64],"getRouteId":[64],"getActive":[64],"getByIndex":[64],"canGoBack":[64],"getPrevious":[64],"getLength":[64]},null,{"swipeGesture":["swipeGestureChanged"],"root":["rootChanged"]}],[256,"ion-nav-link",{"component":[1],"componentProps":[16,"component-props"],"routerDirection":[1,"router-direction"],"routerAnimation":[16,"router-animation"]}]]],["ion-tab_2",[[257,"ion-tab",{"active":[1028],"delegate":[16],"tab":[1],"component":[1],"setActive":[64]},null,{"active":["changeActive"]}],[257,"ion-tabs",{"useRouter":[1028,"use-router"],"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64],"setRouteId":[64],"getRouteId":[64]}]]],["ion-textarea",[[294,"ion-textarea",{"color":[513],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[4],"fill":[1],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"cols":[514],"rows":[2],"wrap":[1],"autoGrow":[516,"auto-grow"],"value":[1025],"counter":[4],"counterFormatter":[16,"counter-formatter"],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"shape":[1],"hasFocus":[32],"setFocus":[64],"getInputElement":[64]},[[2,"click","onClickCapture"]],{"debounce":["debounceChanged"],"value":["valueChanged"],"dir":["onDirChanged"]}]]],["ion-backdrop",[[289,"ion-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]],["ion-loading",[[290,"ion-loading",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16,"enter-animation"],"leaveAnimation":[16,"leave-animation"],"message":[1],"cssClass":[1,"css-class"],"duration":[2],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"spinner":[1025],"translucent":[4],"animated":[4],"htmlAttributes":[16,"html-attributes"],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-breadcrumb_2",[[289,"ion-breadcrumb",{"collapsed":[4],"last":[4],"showCollapsedIndicator":[4,"show-collapsed-indicator"],"color":[1],"active":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"separator":[4],"target":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16,"router-animation"]}],[289,"ion-breadcrumbs",{"color":[513],"maxItems":[2,"max-items"],"itemsBeforeCollapse":[2,"items-before-collapse"],"itemsAfterCollapse":[2,"items-after-collapse"],"collapsed":[32],"activeChanged":[32]},[[0,"collapsedClick","onCollapsedClick"]],{"maxItems":["maxItemsChanged"],"itemsBeforeCollapse":["maxItemsChanged"],"itemsAfterCollapse":["maxItemsChanged"]}]]],["ion-tab-bar_2",[[289,"ion-tab-button",{"disabled":[4],"download":[1],"href":[1],"rel":[1],"layout":[1025],"selected":[1028],"tab":[1],"target":[1]},[[8,"ionTabBarChanged","onTabBarChanged"]]],[289,"ion-tab-bar",{"color":[513],"selectedTab":[1,"selected-tab"],"translucent":[4],"keyboardVisible":[32]},null,{"selectedTab":["selectedTabChanged"]}]]],["ion-datetime-button",[[289,"ion-datetime-button",{"color":[513],"disabled":[516],"datetime":[1],"datetimePresentation":[32],"dateText":[32],"timeText":[32],"datetimeActive":[32],"selectedButton":[32]}]]],["ion-route_4",[[0,"ion-route",{"url":[1],"component":[1],"componentProps":[16,"component-props"],"beforeLeave":[16,"before-leave"],"beforeEnter":[16,"before-enter"]},null,{"url":["onUpdate"],"component":["onUpdate"],"componentProps":["onComponentProps"]}],[0,"ion-route-redirect",{"from":[1],"to":[1]},null,{"from":["propDidChange"],"to":["propDidChange"]}],[0,"ion-router",{"root":[1],"useHash":[4,"use-hash"],"canTransition":[64],"push":[64],"back":[64],"printDebug":[64],"navChanged":[64]},[[8,"popstate","onPopState"],[4,"ionBackButton","onBackButton"]]],[257,"ion-router-link",{"color":[513],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16,"router-animation"],"target":[1]}]]],["ion-avatar_3",[[289,"ion-avatar"],[289,"ion-badge",{"color":[513]}],[257,"ion-thumbnail"]]],["ion-col_3",[[257,"ion-col",{"offset":[1],"offsetXs":[1,"offset-xs"],"offsetSm":[1,"offset-sm"],"offsetMd":[1,"offset-md"],"offsetLg":[1,"offset-lg"],"offsetXl":[1,"offset-xl"],"pull":[1],"pullXs":[1,"pull-xs"],"pullSm":[1,"pull-sm"],"pullMd":[1,"pull-md"],"pullLg":[1,"pull-lg"],"pullXl":[1,"pull-xl"],"push":[1],"pushXs":[1,"push-xs"],"pushSm":[1,"push-sm"],"pushMd":[1,"push-md"],"pushLg":[1,"push-lg"],"pushXl":[1,"push-xl"],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"]},[[9,"resize","onResize"]]],[257,"ion-grid",{"fixed":[4]}],[257,"ion-row"]]],["ion-img",[[257,"ion-img",{"alt":[1],"src":[1],"loadSrc":[32],"loadError":[32]},null,{"src":["srcChanged"]}]]],["ion-input-otp",[[294,"ion-input-otp",{"autocapitalize":[1],"color":[513],"disabled":[516],"fill":[1],"inputmode":[1],"length":[2],"pattern":[1],"readonly":[516],"separators":[1],"shape":[1],"size":[1],"type":[1],"value":[1032],"inputValues":[32],"hasFocus":[32],"previousInputValues":[32],"setFocus":[64]},null,{"value":["valueChanged"],"separators":["processSeparators"],"length":["processSeparators"]}]]],["ion-progress-bar",[[289,"ion-progress-bar",{"type":[1],"reversed":[4],"value":[2],"buffer":[2],"color":[513]}]]],["ion-range",[[289,"ion-range",{"color":[513],"debounce":[2],"name":[1],"label":[1],"dualKnobs":[4,"dual-knobs"],"min":[2],"max":[2],"pin":[4],"pinFormatter":[16,"pin-formatter"],"snaps":[4],"step":[2],"ticks":[4],"activeBarStart":[1026,"active-bar-start"],"disabled":[4],"value":[1026],"labelPlacement":[1,"label-placement"],"ratioA":[32],"ratioB":[32],"pressedKnob":[32]},null,{"debounce":["debounceChanged"],"min":["minChanged"],"max":["maxChanged"],"step":["stepChanged"],"activeBarStart":["activeBarStartChanged"],"disabled":["disabledChanged"],"value":["valueChanged"]}]]],["ion-segment-content",[[257,"ion-segment-content"]]],["ion-segment-view",[[289,"ion-segment-view",{"disabled":[4],"isManualScroll":[32],"setContent":[64]},[[1,"scroll","handleScroll"],[1,"touchstart","handleScrollStart"],[1,"touchend","handleTouchEnd"]]]]],["ion-split-pane",[[289,"ion-split-pane",{"contentId":[513,"content-id"],"disabled":[4],"when":[8],"visible":[32],"isVisible":[64]},null,{"visible":["visibleChanged"],"disabled":["updateState"],"when":["updateState"]}]]],["ion-text",[[257,"ion-text",{"color":[513]}]]],["ion-select-modal",[[290,"ion-select-modal",{"header":[1],"multiple":[4],"options":[16]}]]],["ion-datetime_3",[[289,"ion-datetime",{"color":[1],"name":[1],"disabled":[4],"formatOptions":[16,"format-options"],"readonly":[4],"isDateEnabled":[16,"is-date-enabled"],"showAdjacentDays":[4,"show-adjacent-days"],"min":[1025],"max":[1025],"presentation":[1],"cancelText":[1,"cancel-text"],"doneText":[1,"done-text"],"clearText":[1,"clear-text"],"yearValues":[8,"year-values"],"monthValues":[8,"month-values"],"dayValues":[8,"day-values"],"hourValues":[8,"hour-values"],"minuteValues":[8,"minute-values"],"locale":[1],"firstDayOfWeek":[2,"first-day-of-week"],"titleSelectedDatesFormatter":[16,"title-selected-dates-formatter"],"multiple":[4],"highlightedDates":[16,"highlighted-dates"],"value":[1025],"showDefaultTitle":[4,"show-default-title"],"showDefaultButtons":[4,"show-default-buttons"],"showClearButton":[4,"show-clear-button"],"showDefaultTimeLabel":[4,"show-default-time-label"],"hourCycle":[1,"hour-cycle"],"size":[1],"preferWheel":[4,"prefer-wheel"],"showMonthAndYear":[32],"activeParts":[32],"workingParts":[32],"isTimePopoverOpen":[32],"forceRenderDate":[32],"confirm":[64],"reset":[64],"cancel":[64]},null,{"formatOptions":["formatOptionsChanged"],"disabled":["disabledChanged"],"min":["minChanged"],"max":["maxChanged"],"presentation":["presentationChanged"],"yearValues":["yearValuesChanged"],"monthValues":["monthValuesChanged"],"dayValues":["dayValuesChanged"],"hourValues":["hourValuesChanged"],"minuteValues":["minuteValuesChanged"],"value":["valueChanged"]}],[290,"ion-picker-legacy",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16,"enter-animation"],"leaveAnimation":[16,"leave-animation"],"buttons":[16],"columns":[16],"cssClass":[1,"css-class"],"duration":[2],"showBackdrop":[4,"show-backdrop"],"backdropDismiss":[4,"backdrop-dismiss"],"animated":[4],"htmlAttributes":[16,"html-attributes"],"isOpen":[4,"is-open"],"trigger":[1],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"getColumn":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}],[288,"ion-picker-legacy-column",{"col":[16]},null,{"col":["colChanged"]}]]],["ion-action-sheet",[[290,"ion-action-sheet",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16,"enter-animation"],"leaveAnimation":[16,"leave-animation"],"buttons":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"header":[1],"subHeader":[1,"sub-header"],"translucent":[4],"animated":[4],"htmlAttributes":[16,"html-attributes"],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-alert",[[290,"ion-alert",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16,"enter-animation"],"leaveAnimation":[16,"leave-animation"],"cssClass":[1,"css-class"],"header":[1],"subHeader":[1,"sub-header"],"message":[1],"buttons":[16],"inputs":[1040],"backdropDismiss":[4,"backdrop-dismiss"],"translucent":[4],"animated":[4],"htmlAttributes":[16,"html-attributes"],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[4,"keydown","onKeydown"]],{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"],"buttons":["buttonsChanged"],"inputs":["inputsChanged"]}]]],["ion-modal",[[289,"ion-modal",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16,"enter-animation"],"leaveAnimation":[16,"leave-animation"],"breakpoints":[16],"expandToScroll":[4,"expand-to-scroll"],"initialBreakpoint":[2,"initial-breakpoint"],"backdropBreakpoint":[2,"backdrop-breakpoint"],"handle":[4],"handleBehavior":[1,"handle-behavior"],"component":[1],"componentProps":[16,"component-props"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"presentingElement":[16,"presenting-element"],"htmlAttributes":[16,"html-attributes"],"isOpen":[4,"is-open"],"trigger":[1],"keepContentsMounted":[4,"keep-contents-mounted"],"focusTrap":[4,"focus-trap"],"canDismiss":[4,"can-dismiss"],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"setCurrentBreakpoint":[64],"getCurrentBreakpoint":[64]},[[9,"resize","onWindowResize"]],{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-picker",[[289,"ion-picker",{"exitInputMode":[64]},[[1,"touchstart","preventTouchStartPropagation"]]]]],["ion-picker-column",[[257,"ion-picker-column",{"disabled":[4],"value":[1032],"color":[513],"numericInput":[4,"numeric-input"],"ariaLabel":[32],"isActive":[32],"scrollActiveItemIntoView":[64],"setValue":[64],"setFocus":[64]},null,{"aria-label":["ariaLabelChanged"],"value":["valueChange"]}]]],["ion-picker-column-option",[[289,"ion-picker-column-option",{"disabled":[4],"value":[8],"color":[513],"ariaLabel":[32]},null,{"aria-label":["onAriaLabelChange"]}]]],["ion-popover",[[289,"ion-popover",{"hasController":[4,"has-controller"],"delegate":[16],"overlayIndex":[2,"overlay-index"],"enterAnimation":[16,"enter-animation"],"leaveAnimation":[16,"leave-animation"],"component":[1],"componentProps":[16,"component-props"],"keyboardClose":[4,"keyboard-close"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"showBackdrop":[4,"show-backdrop"],"translucent":[4],"animated":[4],"htmlAttributes":[16,"html-attributes"],"triggerAction":[1,"trigger-action"],"trigger":[1],"size":[1],"dismissOnSelect":[4,"dismiss-on-select"],"reference":[1],"side":[1],"alignment":[1025],"arrow":[4],"isOpen":[4,"is-open"],"keyboardEvents":[4,"keyboard-events"],"focusTrap":[4,"focus-trap"],"keepContentsMounted":[4,"keep-contents-mounted"],"presented":[32],"presentFromTrigger":[64],"present":[64],"dismiss":[64],"getParentPopover":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"trigger":["onTriggerChange"],"triggerAction":["onTriggerChange"],"isOpen":["onIsOpenChange"]}]]],["ion-checkbox",[[289,"ion-checkbox",{"color":[513],"name":[1],"checked":[1028],"indeterminate":[1028],"disabled":[4],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"value":[8],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"required":[4],"setFocus":[64]}]]],["ion-item_8",[[289,"ion-item-divider",{"color":[513],"sticky":[4]}],[288,"ion-item-group"],[289,"ion-note",{"color":[513]}],[257,"ion-skeleton-text",{"animated":[4]}],[294,"ion-label",{"color":[513],"position":[1],"noAnimate":[32]},null,{"color":["colorChanged"],"position":["positionChanged"]}],[289,"ion-list-header",{"color":[513],"lines":[1]}],[289,"ion-item",{"color":[513],"button":[4],"detail":[4],"detailIcon":[1,"detail-icon"],"disabled":[516],"download":[1],"href":[1],"rel":[1],"lines":[1],"routerAnimation":[16,"router-animation"],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"multipleInputs":[32],"focusable":[32],"isInteractive":[32]},[[0,"ionColor","labelColorChanged"],[0,"ionStyle","itemStyle"]],{"button":["buttonChanged"]}],[288,"ion-list",{"lines":[1],"inset":[4],"closeSlidingItems":[64]}]]],["ion-app_8",[[256,"ion-app",{"setFocus":[64]}],[292,"ion-footer",{"collapse":[1],"translucent":[4],"keyboardVisible":[32]}],[257,"ion-router-outlet",{"mode":[1025],"delegate":[16],"animated":[4],"animation":[16],"swipeHandler":[16,"swipe-handler"],"commit":[64],"setRouteId":[64],"getRouteId":[64]},null,{"swipeHandler":["swipeHandlerChanged"]}],[257,"ion-content",{"color":[513],"fullscreen":[4],"fixedSlotPlacement":[1,"fixed-slot-placement"],"forceOverscroll":[1028,"force-overscroll"],"scrollX":[4,"scroll-x"],"scrollY":[4,"scroll-y"],"scrollEvents":[4,"scroll-events"],"getScrollElement":[64],"getBackgroundElement":[64],"scrollToTop":[64],"scrollToBottom":[64],"scrollByPoint":[64],"scrollToPoint":[64]},[[9,"resize","onResize"]]],[292,"ion-header",{"collapse":[1],"translucent":[4]}],[289,"ion-title",{"color":[513],"size":[1]},null,{"size":["sizeChanged"]}],[289,"ion-toolbar",{"color":[513]},[[0,"ionStyle","childrenStyle"]]],[294,"ion-buttons",{"collapse":[4]}]]],["ion-select_3",[[289,"ion-select",{"cancelText":[1,"cancel-text"],"color":[513],"compareWith":[1,"compare-with"],"disabled":[4],"fill":[1],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"interface":[1],"interfaceOptions":[8,"interface-options"],"justify":[1],"label":[1],"labelPlacement":[1,"label-placement"],"multiple":[4],"name":[1],"okText":[1,"ok-text"],"placeholder":[1],"selectedText":[1,"selected-text"],"toggleIcon":[1,"toggle-icon"],"expandedIcon":[1,"expanded-icon"],"shape":[1],"value":[1032],"required":[4],"isExpanded":[32],"hasFocus":[32],"open":[64]},null,{"disabled":["styleChanged"],"isExpanded":["styleChanged"],"placeholder":["styleChanged"],"value":["styleChanged"]}],[257,"ion-select-option",{"disabled":[4],"value":[8]}],[290,"ion-select-popover",{"header":[1],"subHeader":[1,"sub-header"],"message":[1],"multiple":[4],"options":[16]}]]],["ion-spinner",[[257,"ion-spinner",{"color":[513],"duration":[2],"name":[1],"paused":[4]}]]],["ion-radio_2",[[289,"ion-radio",{"color":[513],"name":[1],"disabled":[4],"value":[8],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"checked":[32],"buttonTabindex":[32],"setFocus":[64],"setButtonTabindex":[64]},null,{"value":["valueChanged"]}],[292,"ion-radio-group",{"allowEmptySelection":[4,"allow-empty-selection"],"compareWith":[1,"compare-with"],"name":[1],"value":[1032],"helperText":[1,"helper-text"],"errorText":[1,"error-text"],"setFocus":[64]},[[4,"keydown","onKeydown"]],{"value":["valueChanged"]}]]],["ion-ripple-effect",[[257,"ion-ripple-effect",{"type":[1],"addRipple":[64]}]]],["ion-button_2",[[289,"ion-button",{"color":[513],"buttonType":[1025,"button-type"],"disabled":[516],"expand":[513],"fill":[1537],"routerDirection":[1,"router-direction"],"routerAnimation":[16,"router-animation"],"download":[1],"href":[1],"rel":[1],"shape":[513],"size":[513],"strong":[4],"target":[1],"type":[1],"form":[1],"isCircle":[32]},null,{"disabled":["disabledChanged"],"aria-checked":["onAriaChanged"],"aria-label":["onAriaChanged"]}],[257,"ion-icon",{"mode":[1025],"color":[1],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[513],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32]},null,{"name":["loadIcon"],"src":["loadIcon"],"icon":["loadIcon"],"ios":["loadIcon"],"md":["loadIcon"]}]]]]'), options);
});

// node_modules/@ionic/core/loader/index.js
(function() {
  if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var a = HTMLElement;
    window.HTMLElement = function() {
      return Reflect.construct(a, [], this.constructor);
    };
    HTMLElement.prototype = a.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, a);
  }
})();

// node_modules/@ionic/angular/fesm2022/ionic-angular.mjs
var _c0 = ["*"];
var _c1 = ["outletContent"];
var _c2 = ["outlet"];
var _c3 = [[["", "slot", "top"]], "*", [["ion-tab"]]];
var _c4 = ["[slot=top]", "*", "ion-tab"];
function IonTabs_ion_router_outlet_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-router-outlet", 5, 1);
    \u0275\u0275listener("stackWillChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackWillChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStackWillChange($event));
    })("stackDidChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackDidChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStackDidChange($event));
    });
    \u0275\u0275elementEnd();
  }
}
function IonTabs_ng_content_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2, ["*ngIf", "tabs.length > 0"]);
  }
}
function IonModal_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275elementContainer(1, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template);
  }
}
function IonPopover_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template);
  }
}
var _BooleanValueAccessorDirective = class _BooleanValueAccessorDirective extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  writeValue(value) {
    this.elementRef.nativeElement.checked = this.lastValue = value;
    setIonicClasses(this.elementRef);
  }
  _handleIonChange(el) {
    this.handleValueChange(el, el.checked);
  }
};
/** @nocollapse */
__publicField(_BooleanValueAccessorDirective, "\u0275fac", function BooleanValueAccessorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BooleanValueAccessorDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ElementRef));
});
/** @nocollapse */
__publicField(_BooleanValueAccessorDirective, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BooleanValueAccessorDirective,
  selectors: [["ion-checkbox"], ["ion-toggle"]],
  hostBindings: function BooleanValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("ionChange", function BooleanValueAccessorDirective_ionChange_HostBindingHandler($event) {
        return ctx._handleIonChange($event.target);
      });
    }
  },
  standalone: false,
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: _BooleanValueAccessorDirective,
    multi: true
  }]), \u0275\u0275InheritDefinitionFeature]
}));
var BooleanValueAccessorDirective = _BooleanValueAccessorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BooleanValueAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "ion-checkbox,ion-toggle",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: BooleanValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleIonChange: [{
      type: HostListener,
      args: ["ionChange", ["$event.target"]]
    }]
  });
})();
var _NumericValueAccessorDirective = class _NumericValueAccessorDirective extends ValueAccessor {
  el;
  constructor(injector, el) {
    super(injector, el);
    this.el = el;
  }
  handleInputEvent(el) {
    this.handleValueChange(el, el.value);
  }
  registerOnChange(fn) {
    if (this.el.nativeElement.tagName === "ION-INPUT" || this.el.nativeElement.tagName === "ION-INPUT-OTP") {
      super.registerOnChange((value) => {
        fn(value === "" ? null : parseFloat(value));
      });
    } else {
      super.registerOnChange(fn);
    }
  }
};
/** @nocollapse */
__publicField(_NumericValueAccessorDirective, "\u0275fac", function NumericValueAccessorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NumericValueAccessorDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ElementRef));
});
/** @nocollapse */
__publicField(_NumericValueAccessorDirective, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NumericValueAccessorDirective,
  selectors: [["ion-input", "type", "number"], ["ion-input-otp", 3, "type", "text"], ["ion-range"]],
  hostBindings: function NumericValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("ionInput", function NumericValueAccessorDirective_ionInput_HostBindingHandler($event) {
        return ctx.handleInputEvent($event.target);
      });
    }
  },
  standalone: false,
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: _NumericValueAccessorDirective,
    multi: true
  }]), \u0275\u0275InheritDefinitionFeature]
}));
var NumericValueAccessorDirective = _NumericValueAccessorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericValueAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "ion-input[type=number],ion-input-otp:not([type=text]),ion-range",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NumericValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    handleInputEvent: [{
      type: HostListener,
      args: ["ionInput", ["$event.target"]]
    }]
  });
})();
var _SelectValueAccessorDirective = class _SelectValueAccessorDirective extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  _handleChangeEvent(el) {
    this.handleValueChange(el, el.value);
  }
};
/** @nocollapse */
__publicField(_SelectValueAccessorDirective, "\u0275fac", function SelectValueAccessorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectValueAccessorDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ElementRef));
});
/** @nocollapse */
__publicField(_SelectValueAccessorDirective, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _SelectValueAccessorDirective,
  selectors: [["ion-select"], ["ion-radio-group"], ["ion-segment"], ["ion-datetime"]],
  hostBindings: function SelectValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("ionChange", function SelectValueAccessorDirective_ionChange_HostBindingHandler($event) {
        return ctx._handleChangeEvent($event.target);
      });
    }
  },
  standalone: false,
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: _SelectValueAccessorDirective,
    multi: true
  }]), \u0275\u0275InheritDefinitionFeature]
}));
var SelectValueAccessorDirective = _SelectValueAccessorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectValueAccessorDirective, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "ion-select, ion-radio-group, ion-segment, ion-datetime",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: SelectValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleChangeEvent: [{
      type: HostListener,
      args: ["ionChange", ["$event.target"]]
    }]
  });
})();
var _TextValueAccessorDirective = class _TextValueAccessorDirective extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  _handleInputEvent(el) {
    this.handleValueChange(el, el.value);
  }
};
/** @nocollapse */
__publicField(_TextValueAccessorDirective, "\u0275fac", function TextValueAccessorDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TextValueAccessorDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ElementRef));
});
/** @nocollapse */
__publicField(_TextValueAccessorDirective, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _TextValueAccessorDirective,
  selectors: [["ion-input", 3, "type", "number"], ["ion-input-otp", "type", "text"], ["ion-textarea"], ["ion-searchbar"]],
  hostBindings: function TextValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("ionInput", function TextValueAccessorDirective_ionInput_HostBindingHandler($event) {
        return ctx._handleInputEvent($event.target);
      });
    }
  },
  standalone: false,
  features: [\u0275\u0275ProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: _TextValueAccessorDirective,
    multi: true
  }]), \u0275\u0275InheritDefinitionFeature]
}));
var TextValueAccessorDirective = _TextValueAccessorDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextValueAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "ion-input:not([type=number]),ion-input-otp[type=text],ion-textarea,ion-searchbar",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: TextValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleInputEvent: [{
      type: HostListener,
      args: ["ionInput", ["$event.target"]]
    }]
  });
})();
var proxyInputs = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach((item) => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => this.el[item] = val);
      },
      /**
       * In the event that proxyInputs is called
       * multiple times re-defining these inputs
       * will cause an error to be thrown. As a result
       * we set configurable: true to indicate these
       * properties can be changed.
       */
      configurable: true
    });
  });
};
var proxyMethods = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach((methodName) => {
    Prototype[methodName] = function() {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};
var proxyOutputs = (instance, el, events) => {
  events.forEach((eventName) => instance[eventName] = fromEvent(el, eventName));
};
function ProxyCmp(opts) {
  const decorator = function(cls) {
    const {
      defineCustomElementFn,
      inputs,
      methods
    } = opts;
    if (defineCustomElementFn !== void 0) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}
var _a;
var IonAccordion = (_a = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a, "\u0275fac", function IonAccordion_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a,
  selectors: [["ion-accordion"]],
  inputs: {
    disabled: "disabled",
    mode: "mode",
    readonly: "readonly",
    toggleIcon: "toggleIcon",
    toggleIconSlot: "toggleIconSlot",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonAccordion_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a);
IonAccordion = __decorate([ProxyCmp({
  inputs: ["disabled", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"]
})], IonAccordion);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAccordion, [{
    type: Component,
    args: [{
      selector: "ion-accordion",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a2;
var IonAccordionGroup = (_a2 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
}, /** @nocollapse */
__publicField(_a2, "\u0275fac", function IonAccordionGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a2, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a2,
  selectors: [["ion-accordion-group"]],
  inputs: {
    animated: "animated",
    disabled: "disabled",
    expand: "expand",
    mode: "mode",
    multiple: "multiple",
    readonly: "readonly",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonAccordionGroup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a2);
IonAccordionGroup = __decorate([ProxyCmp({
  inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"]
})], IonAccordionGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAccordionGroup, [{
    type: Component,
    args: [{
      selector: "ion-accordion-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a3;
var IonActionSheet = (_a3 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionActionSheetDidPresent", "ionActionSheetWillPresent", "ionActionSheetWillDismiss", "ionActionSheetDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
}, /** @nocollapse */
__publicField(_a3, "\u0275fac", function IonActionSheet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a3)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a3, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a3,
  selectors: [["ion-action-sheet"]],
  inputs: {
    animated: "animated",
    backdropDismiss: "backdropDismiss",
    buttons: "buttons",
    cssClass: "cssClass",
    enterAnimation: "enterAnimation",
    header: "header",
    htmlAttributes: "htmlAttributes",
    isOpen: "isOpen",
    keyboardClose: "keyboardClose",
    leaveAnimation: "leaveAnimation",
    mode: "mode",
    subHeader: "subHeader",
    translucent: "translucent",
    trigger: "trigger"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonActionSheet_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a3);
IonActionSheet = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "subHeader", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonActionSheet);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonActionSheet, [{
    type: Component,
    args: [{
      selector: "ion-action-sheet",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "subHeader", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a4;
var IonAlert = (_a4 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionAlertDidPresent", "ionAlertWillPresent", "ionAlertWillDismiss", "ionAlertDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
}, /** @nocollapse */
__publicField(_a4, "\u0275fac", function IonAlert_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a4)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a4, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a4,
  selectors: [["ion-alert"]],
  inputs: {
    animated: "animated",
    backdropDismiss: "backdropDismiss",
    buttons: "buttons",
    cssClass: "cssClass",
    enterAnimation: "enterAnimation",
    header: "header",
    htmlAttributes: "htmlAttributes",
    inputs: "inputs",
    isOpen: "isOpen",
    keyboardClose: "keyboardClose",
    leaveAnimation: "leaveAnimation",
    message: "message",
    mode: "mode",
    subHeader: "subHeader",
    translucent: "translucent",
    trigger: "trigger"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonAlert_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a4);
IonAlert = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "inputs", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "subHeader", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonAlert);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAlert, [{
    type: Component,
    args: [{
      selector: "ion-alert",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "inputs", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "subHeader", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a5;
var IonApp = (_a5 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a5, "\u0275fac", function IonApp_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a5)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a5, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a5,
  selectors: [["ion-app"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonApp_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a5);
IonApp = __decorate([ProxyCmp({
  methods: ["setFocus"]
})], IonApp);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonApp, [{
    type: Component,
    args: [{
      selector: "ion-app",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a6;
var IonAvatar = (_a6 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a6, "\u0275fac", function IonAvatar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a6)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a6, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a6,
  selectors: [["ion-avatar"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonAvatar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a6);
IonAvatar = __decorate([ProxyCmp({})], IonAvatar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAvatar, [{
    type: Component,
    args: [{
      selector: "ion-avatar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a7;
var IonBackdrop = (_a7 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionBackdropTap"]);
  }
}, /** @nocollapse */
__publicField(_a7, "\u0275fac", function IonBackdrop_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a7)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a7, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a7,
  selectors: [["ion-backdrop"]],
  inputs: {
    stopPropagation: "stopPropagation",
    tappable: "tappable",
    visible: "visible"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonBackdrop_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a7);
IonBackdrop = __decorate([ProxyCmp({
  inputs: ["stopPropagation", "tappable", "visible"]
})], IonBackdrop);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackdrop, [{
    type: Component,
    args: [{
      selector: "ion-backdrop",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["stopPropagation", "tappable", "visible"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a8;
var IonBadge = (_a8 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a8, "\u0275fac", function IonBadge_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a8)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a8, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a8,
  selectors: [["ion-badge"]],
  inputs: {
    color: "color",
    mode: "mode"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonBadge_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a8);
IonBadge = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonBadge);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBadge, [{
    type: Component,
    args: [{
      selector: "ion-badge",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a9;
var IonBreadcrumb = (_a9 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
}, /** @nocollapse */
__publicField(_a9, "\u0275fac", function IonBreadcrumb_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a9)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a9, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a9,
  selectors: [["ion-breadcrumb"]],
  inputs: {
    active: "active",
    color: "color",
    disabled: "disabled",
    download: "download",
    href: "href",
    mode: "mode",
    rel: "rel",
    routerAnimation: "routerAnimation",
    routerDirection: "routerDirection",
    separator: "separator",
    target: "target"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonBreadcrumb_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a9);
IonBreadcrumb = __decorate([ProxyCmp({
  inputs: ["active", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "separator", "target"]
})], IonBreadcrumb);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBreadcrumb, [{
    type: Component,
    args: [{
      selector: "ion-breadcrumb",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["active", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "separator", "target"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a10;
var IonBreadcrumbs = (_a10 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionCollapsedClick"]);
  }
}, /** @nocollapse */
__publicField(_a10, "\u0275fac", function IonBreadcrumbs_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a10)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a10, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a10,
  selectors: [["ion-breadcrumbs"]],
  inputs: {
    color: "color",
    itemsAfterCollapse: "itemsAfterCollapse",
    itemsBeforeCollapse: "itemsBeforeCollapse",
    maxItems: "maxItems",
    mode: "mode"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonBreadcrumbs_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a10);
IonBreadcrumbs = __decorate([ProxyCmp({
  inputs: ["color", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "mode"]
})], IonBreadcrumbs);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBreadcrumbs, [{
    type: Component,
    args: [{
      selector: "ion-breadcrumbs",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a11;
var IonButton = (_a11 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
}, /** @nocollapse */
__publicField(_a11, "\u0275fac", function IonButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a11)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a11, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a11,
  selectors: [["ion-button"]],
  inputs: {
    buttonType: "buttonType",
    color: "color",
    disabled: "disabled",
    download: "download",
    expand: "expand",
    fill: "fill",
    form: "form",
    href: "href",
    mode: "mode",
    rel: "rel",
    routerAnimation: "routerAnimation",
    routerDirection: "routerDirection",
    shape: "shape",
    size: "size",
    strong: "strong",
    target: "target",
    type: "type"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a11);
IonButton = __decorate([ProxyCmp({
  inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"]
})], IonButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonButton, [{
    type: Component,
    args: [{
      selector: "ion-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a12;
var IonButtons = (_a12 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a12, "\u0275fac", function IonButtons_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a12)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a12, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a12,
  selectors: [["ion-buttons"]],
  inputs: {
    collapse: "collapse"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonButtons_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a12);
IonButtons = __decorate([ProxyCmp({
  inputs: ["collapse"]
})], IonButtons);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonButtons, [{
    type: Component,
    args: [{
      selector: "ion-buttons",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a13;
var IonCard = (_a13 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a13, "\u0275fac", function IonCard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a13)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a13, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a13,
  selectors: [["ion-card"]],
  inputs: {
    button: "button",
    color: "color",
    disabled: "disabled",
    download: "download",
    href: "href",
    mode: "mode",
    rel: "rel",
    routerAnimation: "routerAnimation",
    routerDirection: "routerDirection",
    target: "target",
    type: "type"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a13);
IonCard = __decorate([ProxyCmp({
  inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
})], IonCard);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCard, [{
    type: Component,
    args: [{
      selector: "ion-card",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a14;
var IonCardContent = (_a14 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a14, "\u0275fac", function IonCardContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a14)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a14, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a14,
  selectors: [["ion-card-content"]],
  inputs: {
    mode: "mode"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonCardContent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a14);
IonCardContent = __decorate([ProxyCmp({
  inputs: ["mode"]
})], IonCardContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardContent, [{
    type: Component,
    args: [{
      selector: "ion-card-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a15;
var IonCardHeader = (_a15 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a15, "\u0275fac", function IonCardHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a15)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a15, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a15,
  selectors: [["ion-card-header"]],
  inputs: {
    color: "color",
    mode: "mode",
    translucent: "translucent"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonCardHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a15);
IonCardHeader = __decorate([ProxyCmp({
  inputs: ["color", "mode", "translucent"]
})], IonCardHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardHeader, [{
    type: Component,
    args: [{
      selector: "ion-card-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a16;
var IonCardSubtitle = (_a16 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a16, "\u0275fac", function IonCardSubtitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a16)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a16, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a16,
  selectors: [["ion-card-subtitle"]],
  inputs: {
    color: "color",
    mode: "mode"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonCardSubtitle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a16);
IonCardSubtitle = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonCardSubtitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardSubtitle, [{
    type: Component,
    args: [{
      selector: "ion-card-subtitle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a17;
var IonCardTitle = (_a17 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a17, "\u0275fac", function IonCardTitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a17)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a17, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a17,
  selectors: [["ion-card-title"]],
  inputs: {
    color: "color",
    mode: "mode"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonCardTitle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a17);
IonCardTitle = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonCardTitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardTitle, [{
    type: Component,
    args: [{
      selector: "ion-card-title",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a18;
var IonCheckbox = (_a18 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
}, /** @nocollapse */
__publicField(_a18, "\u0275fac", function IonCheckbox_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a18)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a18, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a18,
  selectors: [["ion-checkbox"]],
  inputs: {
    alignment: "alignment",
    checked: "checked",
    color: "color",
    disabled: "disabled",
    errorText: "errorText",
    helperText: "helperText",
    indeterminate: "indeterminate",
    justify: "justify",
    labelPlacement: "labelPlacement",
    mode: "mode",
    name: "name",
    required: "required",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a18);
IonCheckbox = __decorate([ProxyCmp({
  inputs: ["alignment", "checked", "color", "disabled", "errorText", "helperText", "indeterminate", "justify", "labelPlacement", "mode", "name", "required", "value"]
})], IonCheckbox);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCheckbox, [{
    type: Component,
    args: [{
      selector: "ion-checkbox",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "checked", "color", "disabled", "errorText", "helperText", "indeterminate", "justify", "labelPlacement", "mode", "name", "required", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a19;
var IonChip = (_a19 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a19, "\u0275fac", function IonChip_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a19)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a19, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a19,
  selectors: [["ion-chip"]],
  inputs: {
    color: "color",
    disabled: "disabled",
    mode: "mode",
    outline: "outline"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonChip_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a19);
IonChip = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "mode", "outline"]
})], IonChip);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonChip, [{
    type: Component,
    args: [{
      selector: "ion-chip",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "outline"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a20;
var IonCol = (_a20 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a20, "\u0275fac", function IonCol_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a20)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a20, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a20,
  selectors: [["ion-col"]],
  inputs: {
    offset: "offset",
    offsetLg: "offsetLg",
    offsetMd: "offsetMd",
    offsetSm: "offsetSm",
    offsetXl: "offsetXl",
    offsetXs: "offsetXs",
    pull: "pull",
    pullLg: "pullLg",
    pullMd: "pullMd",
    pullSm: "pullSm",
    pullXl: "pullXl",
    pullXs: "pullXs",
    push: "push",
    pushLg: "pushLg",
    pushMd: "pushMd",
    pushSm: "pushSm",
    pushXl: "pushXl",
    pushXs: "pushXs",
    size: "size",
    sizeLg: "sizeLg",
    sizeMd: "sizeMd",
    sizeSm: "sizeSm",
    sizeXl: "sizeXl",
    sizeXs: "sizeXs"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonCol_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a20);
IonCol = __decorate([ProxyCmp({
  inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"]
})], IonCol);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCol, [{
    type: Component,
    args: [{
      selector: "ion-col",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a21;
var IonContent = (_a21 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionScrollStart", "ionScroll", "ionScrollEnd"]);
  }
}, /** @nocollapse */
__publicField(_a21, "\u0275fac", function IonContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a21)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a21, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a21,
  selectors: [["ion-content"]],
  inputs: {
    color: "color",
    fixedSlotPlacement: "fixedSlotPlacement",
    forceOverscroll: "forceOverscroll",
    fullscreen: "fullscreen",
    scrollEvents: "scrollEvents",
    scrollX: "scrollX",
    scrollY: "scrollY"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonContent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a21);
IonContent = __decorate([ProxyCmp({
  inputs: ["color", "fixedSlotPlacement", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"],
  methods: ["getScrollElement", "scrollToTop", "scrollToBottom", "scrollByPoint", "scrollToPoint"]
})], IonContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonContent, [{
    type: Component,
    args: [{
      selector: "ion-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "fixedSlotPlacement", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a22;
var IonDatetime = (_a22 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionCancel", "ionChange", "ionFocus", "ionBlur"]);
  }
}, /** @nocollapse */
__publicField(_a22, "\u0275fac", function IonDatetime_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a22)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a22, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a22,
  selectors: [["ion-datetime"]],
  inputs: {
    cancelText: "cancelText",
    clearText: "clearText",
    color: "color",
    dayValues: "dayValues",
    disabled: "disabled",
    doneText: "doneText",
    firstDayOfWeek: "firstDayOfWeek",
    formatOptions: "formatOptions",
    highlightedDates: "highlightedDates",
    hourCycle: "hourCycle",
    hourValues: "hourValues",
    isDateEnabled: "isDateEnabled",
    locale: "locale",
    max: "max",
    min: "min",
    minuteValues: "minuteValues",
    mode: "mode",
    monthValues: "monthValues",
    multiple: "multiple",
    name: "name",
    preferWheel: "preferWheel",
    presentation: "presentation",
    readonly: "readonly",
    showAdjacentDays: "showAdjacentDays",
    showClearButton: "showClearButton",
    showDefaultButtons: "showDefaultButtons",
    showDefaultTimeLabel: "showDefaultTimeLabel",
    showDefaultTitle: "showDefaultTitle",
    size: "size",
    titleSelectedDatesFormatter: "titleSelectedDatesFormatter",
    value: "value",
    yearValues: "yearValues"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonDatetime_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a22);
IonDatetime = __decorate([ProxyCmp({
  inputs: ["cancelText", "clearText", "color", "dayValues", "disabled", "doneText", "firstDayOfWeek", "formatOptions", "highlightedDates", "hourCycle", "hourValues", "isDateEnabled", "locale", "max", "min", "minuteValues", "mode", "monthValues", "multiple", "name", "preferWheel", "presentation", "readonly", "showAdjacentDays", "showClearButton", "showDefaultButtons", "showDefaultTimeLabel", "showDefaultTitle", "size", "titleSelectedDatesFormatter", "value", "yearValues"],
  methods: ["confirm", "reset", "cancel"]
})], IonDatetime);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonDatetime, [{
    type: Component,
    args: [{
      selector: "ion-datetime",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cancelText", "clearText", "color", "dayValues", "disabled", "doneText", "firstDayOfWeek", "formatOptions", "highlightedDates", "hourCycle", "hourValues", "isDateEnabled", "locale", "max", "min", "minuteValues", "mode", "monthValues", "multiple", "name", "preferWheel", "presentation", "readonly", "showAdjacentDays", "showClearButton", "showDefaultButtons", "showDefaultTimeLabel", "showDefaultTitle", "size", "titleSelectedDatesFormatter", "value", "yearValues"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a23;
var IonDatetimeButton = (_a23 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a23, "\u0275fac", function IonDatetimeButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a23)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a23, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a23,
  selectors: [["ion-datetime-button"]],
  inputs: {
    color: "color",
    datetime: "datetime",
    disabled: "disabled",
    mode: "mode"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonDatetimeButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a23);
IonDatetimeButton = __decorate([ProxyCmp({
  inputs: ["color", "datetime", "disabled", "mode"]
})], IonDatetimeButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonDatetimeButton, [{
    type: Component,
    args: [{
      selector: "ion-datetime-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "datetime", "disabled", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a24;
var IonFab = (_a24 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a24, "\u0275fac", function IonFab_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a24)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a24, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a24,
  selectors: [["ion-fab"]],
  inputs: {
    activated: "activated",
    edge: "edge",
    horizontal: "horizontal",
    vertical: "vertical"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonFab_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a24);
IonFab = __decorate([ProxyCmp({
  inputs: ["activated", "edge", "horizontal", "vertical"],
  methods: ["close"]
})], IonFab);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFab, [{
    type: Component,
    args: [{
      selector: "ion-fab",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "edge", "horizontal", "vertical"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a25;
var IonFabButton = (_a25 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
}, /** @nocollapse */
__publicField(_a25, "\u0275fac", function IonFabButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a25)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a25, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a25,
  selectors: [["ion-fab-button"]],
  inputs: {
    activated: "activated",
    closeIcon: "closeIcon",
    color: "color",
    disabled: "disabled",
    download: "download",
    href: "href",
    mode: "mode",
    rel: "rel",
    routerAnimation: "routerAnimation",
    routerDirection: "routerDirection",
    show: "show",
    size: "size",
    target: "target",
    translucent: "translucent",
    type: "type"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonFabButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a25);
IonFabButton = __decorate([ProxyCmp({
  inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"]
})], IonFabButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFabButton, [{
    type: Component,
    args: [{
      selector: "ion-fab-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a26;
var IonFabList = (_a26 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a26, "\u0275fac", function IonFabList_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a26)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a26, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a26,
  selectors: [["ion-fab-list"]],
  inputs: {
    activated: "activated",
    side: "side"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonFabList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a26);
IonFabList = __decorate([ProxyCmp({
  inputs: ["activated", "side"]
})], IonFabList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFabList, [{
    type: Component,
    args: [{
      selector: "ion-fab-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "side"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a27;
var IonFooter = (_a27 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a27, "\u0275fac", function IonFooter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a27)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a27, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a27,
  selectors: [["ion-footer"]],
  inputs: {
    collapse: "collapse",
    mode: "mode",
    translucent: "translucent"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonFooter_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a27);
IonFooter = __decorate([ProxyCmp({
  inputs: ["collapse", "mode", "translucent"]
})], IonFooter);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFooter, [{
    type: Component,
    args: [{
      selector: "ion-footer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse", "mode", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a28;
var IonGrid = (_a28 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a28, "\u0275fac", function IonGrid_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a28)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a28, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a28,
  selectors: [["ion-grid"]],
  inputs: {
    fixed: "fixed"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonGrid_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a28);
IonGrid = __decorate([ProxyCmp({
  inputs: ["fixed"]
})], IonGrid);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonGrid, [{
    type: Component,
    args: [{
      selector: "ion-grid",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["fixed"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a29;
var IonHeader = (_a29 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a29, "\u0275fac", function IonHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a29)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a29, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a29,
  selectors: [["ion-header"]],
  inputs: {
    collapse: "collapse",
    mode: "mode",
    translucent: "translucent"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a29);
IonHeader = __decorate([ProxyCmp({
  inputs: ["collapse", "mode", "translucent"]
})], IonHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonHeader, [{
    type: Component,
    args: [{
      selector: "ion-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse", "mode", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a30;
var IonIcon = (_a30 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a30, "\u0275fac", function IonIcon_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a30)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a30, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a30,
  selectors: [["ion-icon"]],
  inputs: {
    color: "color",
    flipRtl: "flipRtl",
    icon: "icon",
    ios: "ios",
    lazy: "lazy",
    md: "md",
    mode: "mode",
    name: "name",
    sanitize: "sanitize",
    size: "size",
    src: "src"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonIcon_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a30);
IonIcon = __decorate([ProxyCmp({
  inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"]
})], IonIcon);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonIcon, [{
    type: Component,
    args: [{
      selector: "ion-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a31;
var IonImg = (_a31 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionImgWillLoad", "ionImgDidLoad", "ionError"]);
  }
}, /** @nocollapse */
__publicField(_a31, "\u0275fac", function IonImg_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a31)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a31, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a31,
  selectors: [["ion-img"]],
  inputs: {
    alt: "alt",
    src: "src"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonImg_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a31);
IonImg = __decorate([ProxyCmp({
  inputs: ["alt", "src"]
})], IonImg);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonImg, [{
    type: Component,
    args: [{
      selector: "ion-img",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alt", "src"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a32;
var IonInfiniteScroll = (_a32 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInfinite"]);
  }
}, /** @nocollapse */
__publicField(_a32, "\u0275fac", function IonInfiniteScroll_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a32)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a32, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a32,
  selectors: [["ion-infinite-scroll"]],
  inputs: {
    disabled: "disabled",
    position: "position",
    threshold: "threshold"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonInfiniteScroll_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a32);
IonInfiniteScroll = __decorate([ProxyCmp({
  inputs: ["disabled", "position", "threshold"],
  methods: ["complete"]
})], IonInfiniteScroll);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInfiniteScroll, [{
    type: Component,
    args: [{
      selector: "ion-infinite-scroll",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "position", "threshold"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a33;
var IonInfiniteScrollContent = (_a33 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a33, "\u0275fac", function IonInfiniteScrollContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a33)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a33, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a33,
  selectors: [["ion-infinite-scroll-content"]],
  inputs: {
    loadingSpinner: "loadingSpinner",
    loadingText: "loadingText"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonInfiniteScrollContent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a33);
IonInfiniteScrollContent = __decorate([ProxyCmp({
  inputs: ["loadingSpinner", "loadingText"]
})], IonInfiniteScrollContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInfiniteScrollContent, [{
    type: Component,
    args: [{
      selector: "ion-infinite-scroll-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["loadingSpinner", "loadingText"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a34;
var IonInput = (_a34 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionBlur", "ionFocus"]);
  }
}, /** @nocollapse */
__publicField(_a34, "\u0275fac", function IonInput_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a34)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a34, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a34,
  selectors: [["ion-input"]],
  inputs: {
    autocapitalize: "autocapitalize",
    autocomplete: "autocomplete",
    autocorrect: "autocorrect",
    autofocus: "autofocus",
    clearInput: "clearInput",
    clearInputIcon: "clearInputIcon",
    clearOnEdit: "clearOnEdit",
    color: "color",
    counter: "counter",
    counterFormatter: "counterFormatter",
    debounce: "debounce",
    disabled: "disabled",
    enterkeyhint: "enterkeyhint",
    errorText: "errorText",
    fill: "fill",
    helperText: "helperText",
    inputmode: "inputmode",
    label: "label",
    labelPlacement: "labelPlacement",
    max: "max",
    maxlength: "maxlength",
    min: "min",
    minlength: "minlength",
    mode: "mode",
    multiple: "multiple",
    name: "name",
    pattern: "pattern",
    placeholder: "placeholder",
    readonly: "readonly",
    required: "required",
    shape: "shape",
    spellcheck: "spellcheck",
    step: "step",
    type: "type",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonInput_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a34);
IonInput = __decorate([ProxyCmp({
  inputs: ["autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearInputIcon", "clearOnEdit", "color", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "shape", "spellcheck", "step", "type", "value"],
  methods: ["setFocus", "getInputElement"]
})], IonInput);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInput, [{
    type: Component,
    args: [{
      selector: "ion-input",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearInputIcon", "clearOnEdit", "color", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "shape", "spellcheck", "step", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a35;
var IonInputOtp = (_a35 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionComplete", "ionBlur", "ionFocus"]);
  }
}, /** @nocollapse */
__publicField(_a35, "\u0275fac", function IonInputOtp_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a35)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a35, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a35,
  selectors: [["ion-input-otp"]],
  inputs: {
    autocapitalize: "autocapitalize",
    color: "color",
    disabled: "disabled",
    fill: "fill",
    inputmode: "inputmode",
    length: "length",
    pattern: "pattern",
    readonly: "readonly",
    separators: "separators",
    shape: "shape",
    size: "size",
    type: "type",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonInputOtp_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a35);
IonInputOtp = __decorate([ProxyCmp({
  inputs: ["autocapitalize", "color", "disabled", "fill", "inputmode", "length", "pattern", "readonly", "separators", "shape", "size", "type", "value"],
  methods: ["setFocus"]
})], IonInputOtp);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInputOtp, [{
    type: Component,
    args: [{
      selector: "ion-input-otp",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autocapitalize", "color", "disabled", "fill", "inputmode", "length", "pattern", "readonly", "separators", "shape", "size", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a36;
var IonInputPasswordToggle = (_a36 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a36, "\u0275fac", function IonInputPasswordToggle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a36)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a36, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a36,
  selectors: [["ion-input-password-toggle"]],
  inputs: {
    color: "color",
    hideIcon: "hideIcon",
    mode: "mode",
    showIcon: "showIcon"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonInputPasswordToggle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a36);
IonInputPasswordToggle = __decorate([ProxyCmp({
  inputs: ["color", "hideIcon", "mode", "showIcon"]
})], IonInputPasswordToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInputPasswordToggle, [{
    type: Component,
    args: [{
      selector: "ion-input-password-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "hideIcon", "mode", "showIcon"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a37;
var IonItem = (_a37 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a37, "\u0275fac", function IonItem_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a37)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a37, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a37,
  selectors: [["ion-item"]],
  inputs: {
    button: "button",
    color: "color",
    detail: "detail",
    detailIcon: "detailIcon",
    disabled: "disabled",
    download: "download",
    href: "href",
    lines: "lines",
    mode: "mode",
    rel: "rel",
    routerAnimation: "routerAnimation",
    routerDirection: "routerDirection",
    target: "target",
    type: "type"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonItem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a37);
IonItem = __decorate([ProxyCmp({
  inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
})], IonItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItem, [{
    type: Component,
    args: [{
      selector: "ion-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a38;
var IonItemDivider = (_a38 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a38, "\u0275fac", function IonItemDivider_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a38)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a38, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a38,
  selectors: [["ion-item-divider"]],
  inputs: {
    color: "color",
    mode: "mode",
    sticky: "sticky"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonItemDivider_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a38);
IonItemDivider = __decorate([ProxyCmp({
  inputs: ["color", "mode", "sticky"]
})], IonItemDivider);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemDivider, [{
    type: Component,
    args: [{
      selector: "ion-item-divider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "sticky"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a39;
var IonItemGroup = (_a39 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a39, "\u0275fac", function IonItemGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a39)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a39, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a39,
  selectors: [["ion-item-group"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonItemGroup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a39);
IonItemGroup = __decorate([ProxyCmp({})], IonItemGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemGroup, [{
    type: Component,
    args: [{
      selector: "ion-item-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a40;
var IonItemOption = (_a40 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a40, "\u0275fac", function IonItemOption_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a40)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a40, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a40,
  selectors: [["ion-item-option"]],
  inputs: {
    color: "color",
    disabled: "disabled",
    download: "download",
    expandable: "expandable",
    href: "href",
    mode: "mode",
    rel: "rel",
    target: "target",
    type: "type"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonItemOption_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a40);
IonItemOption = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"]
})], IonItemOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemOption, [{
    type: Component,
    args: [{
      selector: "ion-item-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a41;
var IonItemOptions = (_a41 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSwipe"]);
  }
}, /** @nocollapse */
__publicField(_a41, "\u0275fac", function IonItemOptions_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a41)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a41, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a41,
  selectors: [["ion-item-options"]],
  inputs: {
    side: "side"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonItemOptions_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a41);
IonItemOptions = __decorate([ProxyCmp({
  inputs: ["side"]
})], IonItemOptions);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemOptions, [{
    type: Component,
    args: [{
      selector: "ion-item-options",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["side"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a42;
var IonItemSliding = (_a42 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionDrag"]);
  }
}, /** @nocollapse */
__publicField(_a42, "\u0275fac", function IonItemSliding_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a42)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a42, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a42,
  selectors: [["ion-item-sliding"]],
  inputs: {
    disabled: "disabled"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonItemSliding_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a42);
IonItemSliding = __decorate([ProxyCmp({
  inputs: ["disabled"],
  methods: ["getOpenAmount", "getSlidingRatio", "open", "close", "closeOpened"]
})], IonItemSliding);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemSliding, [{
    type: Component,
    args: [{
      selector: "ion-item-sliding",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a43;
var IonLabel = (_a43 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a43, "\u0275fac", function IonLabel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a43)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a43, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a43,
  selectors: [["ion-label"]],
  inputs: {
    color: "color",
    mode: "mode",
    position: "position"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonLabel_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a43);
IonLabel = __decorate([ProxyCmp({
  inputs: ["color", "mode", "position"]
})], IonLabel);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonLabel, [{
    type: Component,
    args: [{
      selector: "ion-label",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "position"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a44;
var IonList = (_a44 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a44, "\u0275fac", function IonList_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a44)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a44, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a44,
  selectors: [["ion-list"]],
  inputs: {
    inset: "inset",
    lines: "lines",
    mode: "mode"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a44);
IonList = __decorate([ProxyCmp({
  inputs: ["inset", "lines", "mode"],
  methods: ["closeSlidingItems"]
})], IonList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonList, [{
    type: Component,
    args: [{
      selector: "ion-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["inset", "lines", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a45;
var IonListHeader = (_a45 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a45, "\u0275fac", function IonListHeader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a45)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a45, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a45,
  selectors: [["ion-list-header"]],
  inputs: {
    color: "color",
    lines: "lines",
    mode: "mode"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonListHeader_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a45);
IonListHeader = __decorate([ProxyCmp({
  inputs: ["color", "lines", "mode"]
})], IonListHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonListHeader, [{
    type: Component,
    args: [{
      selector: "ion-list-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "lines", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a46;
var IonLoading = (_a46 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionLoadingDidPresent", "ionLoadingWillPresent", "ionLoadingWillDismiss", "ionLoadingDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
}, /** @nocollapse */
__publicField(_a46, "\u0275fac", function IonLoading_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a46)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a46, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a46,
  selectors: [["ion-loading"]],
  inputs: {
    animated: "animated",
    backdropDismiss: "backdropDismiss",
    cssClass: "cssClass",
    duration: "duration",
    enterAnimation: "enterAnimation",
    htmlAttributes: "htmlAttributes",
    isOpen: "isOpen",
    keyboardClose: "keyboardClose",
    leaveAnimation: "leaveAnimation",
    message: "message",
    mode: "mode",
    showBackdrop: "showBackdrop",
    spinner: "spinner",
    translucent: "translucent",
    trigger: "trigger"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonLoading_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a46);
IonLoading = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "showBackdrop", "spinner", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonLoading);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonLoading, [{
    type: Component,
    args: [{
      selector: "ion-loading",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "showBackdrop", "spinner", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a47;
var IonMenu = (_a47 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionWillOpen", "ionWillClose", "ionDidOpen", "ionDidClose"]);
  }
}, /** @nocollapse */
__publicField(_a47, "\u0275fac", function IonMenu_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a47)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a47, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a47,
  selectors: [["ion-menu"]],
  inputs: {
    contentId: "contentId",
    disabled: "disabled",
    maxEdgeStart: "maxEdgeStart",
    menuId: "menuId",
    side: "side",
    swipeGesture: "swipeGesture",
    type: "type"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonMenu_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a47);
IonMenu = __decorate([ProxyCmp({
  inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"],
  methods: ["isOpen", "isActive", "open", "close", "toggle", "setOpen"]
})], IonMenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenu, [{
    type: Component,
    args: [{
      selector: "ion-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a48;
var IonMenuButton = (_a48 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a48, "\u0275fac", function IonMenuButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a48)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a48, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a48,
  selectors: [["ion-menu-button"]],
  inputs: {
    autoHide: "autoHide",
    color: "color",
    disabled: "disabled",
    menu: "menu",
    mode: "mode",
    type: "type"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonMenuButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a48);
IonMenuButton = __decorate([ProxyCmp({
  inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"]
})], IonMenuButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenuButton, [{
    type: Component,
    args: [{
      selector: "ion-menu-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a49;
var IonMenuToggle = (_a49 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a49, "\u0275fac", function IonMenuToggle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a49)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a49, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a49,
  selectors: [["ion-menu-toggle"]],
  inputs: {
    autoHide: "autoHide",
    menu: "menu"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonMenuToggle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a49);
IonMenuToggle = __decorate([ProxyCmp({
  inputs: ["autoHide", "menu"]
})], IonMenuToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenuToggle, [{
    type: Component,
    args: [{
      selector: "ion-menu-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoHide", "menu"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a50;
var IonNavLink = (_a50 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a50, "\u0275fac", function IonNavLink_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a50)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a50, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a50,
  selectors: [["ion-nav-link"]],
  inputs: {
    component: "component",
    componentProps: "componentProps",
    routerAnimation: "routerAnimation",
    routerDirection: "routerDirection"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonNavLink_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a50);
IonNavLink = __decorate([ProxyCmp({
  inputs: ["component", "componentProps", "routerAnimation", "routerDirection"]
})], IonNavLink);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNavLink, [{
    type: Component,
    args: [{
      selector: "ion-nav-link",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["component", "componentProps", "routerAnimation", "routerDirection"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a51;
var IonNote = (_a51 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a51, "\u0275fac", function IonNote_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a51)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a51, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a51,
  selectors: [["ion-note"]],
  inputs: {
    color: "color",
    mode: "mode"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonNote_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a51);
IonNote = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonNote);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNote, [{
    type: Component,
    args: [{
      selector: "ion-note",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a52;
var IonPicker = (_a52 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a52, "\u0275fac", function IonPicker_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a52)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a52, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a52,
  selectors: [["ion-picker"]],
  inputs: {
    mode: "mode"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonPicker_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a52);
IonPicker = __decorate([ProxyCmp({
  inputs: ["mode"]
})], IonPicker);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPicker, [{
    type: Component,
    args: [{
      selector: "ion-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a53;
var IonPickerColumn = (_a53 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
}, /** @nocollapse */
__publicField(_a53, "\u0275fac", function IonPickerColumn_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a53)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a53, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a53,
  selectors: [["ion-picker-column"]],
  inputs: {
    color: "color",
    disabled: "disabled",
    mode: "mode",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonPickerColumn_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a53);
IonPickerColumn = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "mode", "value"],
  methods: ["setFocus"]
})], IonPickerColumn);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerColumn, [{
    type: Component,
    args: [{
      selector: "ion-picker-column",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a54;
var IonPickerColumnOption = (_a54 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a54, "\u0275fac", function IonPickerColumnOption_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a54)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a54, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a54,
  selectors: [["ion-picker-column-option"]],
  inputs: {
    color: "color",
    disabled: "disabled",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonPickerColumnOption_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a54);
IonPickerColumnOption = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "value"]
})], IonPickerColumnOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerColumnOption, [{
    type: Component,
    args: [{
      selector: "ion-picker-column-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a55;
var IonPickerLegacy = (_a55 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionPickerDidPresent", "ionPickerWillPresent", "ionPickerWillDismiss", "ionPickerDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
}, /** @nocollapse */
__publicField(_a55, "\u0275fac", function IonPickerLegacy_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a55)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a55, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a55,
  selectors: [["ion-picker-legacy"]],
  inputs: {
    animated: "animated",
    backdropDismiss: "backdropDismiss",
    buttons: "buttons",
    columns: "columns",
    cssClass: "cssClass",
    duration: "duration",
    enterAnimation: "enterAnimation",
    htmlAttributes: "htmlAttributes",
    isOpen: "isOpen",
    keyboardClose: "keyboardClose",
    leaveAnimation: "leaveAnimation",
    mode: "mode",
    showBackdrop: "showBackdrop",
    trigger: "trigger"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonPickerLegacy_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a55);
IonPickerLegacy = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "buttons", "columns", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss", "getColumn"]
})], IonPickerLegacy);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerLegacy, [{
    type: Component,
    args: [{
      selector: "ion-picker-legacy",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "columns", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a56;
var IonProgressBar = (_a56 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a56, "\u0275fac", function IonProgressBar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a56)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a56, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a56,
  selectors: [["ion-progress-bar"]],
  inputs: {
    buffer: "buffer",
    color: "color",
    mode: "mode",
    reversed: "reversed",
    type: "type",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonProgressBar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a56);
IonProgressBar = __decorate([ProxyCmp({
  inputs: ["buffer", "color", "mode", "reversed", "type", "value"]
})], IonProgressBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonProgressBar, [{
    type: Component,
    args: [{
      selector: "ion-progress-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["buffer", "color", "mode", "reversed", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a57;
var IonRadio = (_a57 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
}, /** @nocollapse */
__publicField(_a57, "\u0275fac", function IonRadio_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a57)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a57, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a57,
  selectors: [["ion-radio"]],
  inputs: {
    alignment: "alignment",
    color: "color",
    disabled: "disabled",
    justify: "justify",
    labelPlacement: "labelPlacement",
    mode: "mode",
    name: "name",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonRadio_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a57);
IonRadio = __decorate([ProxyCmp({
  inputs: ["alignment", "color", "disabled", "justify", "labelPlacement", "mode", "name", "value"]
})], IonRadio);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRadio, [{
    type: Component,
    args: [{
      selector: "ion-radio",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "color", "disabled", "justify", "labelPlacement", "mode", "name", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a58;
var IonRadioGroup = (_a58 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
}, /** @nocollapse */
__publicField(_a58, "\u0275fac", function IonRadioGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a58)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a58, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a58,
  selectors: [["ion-radio-group"]],
  inputs: {
    allowEmptySelection: "allowEmptySelection",
    compareWith: "compareWith",
    errorText: "errorText",
    helperText: "helperText",
    name: "name",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonRadioGroup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a58);
IonRadioGroup = __decorate([ProxyCmp({
  inputs: ["allowEmptySelection", "compareWith", "errorText", "helperText", "name", "value"]
})], IonRadioGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRadioGroup, [{
    type: Component,
    args: [{
      selector: "ion-radio-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["allowEmptySelection", "compareWith", "errorText", "helperText", "name", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a59;
var IonRange = (_a59 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionInput", "ionFocus", "ionBlur", "ionKnobMoveStart", "ionKnobMoveEnd"]);
  }
}, /** @nocollapse */
__publicField(_a59, "\u0275fac", function IonRange_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a59)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a59, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a59,
  selectors: [["ion-range"]],
  inputs: {
    activeBarStart: "activeBarStart",
    color: "color",
    debounce: "debounce",
    disabled: "disabled",
    dualKnobs: "dualKnobs",
    label: "label",
    labelPlacement: "labelPlacement",
    max: "max",
    min: "min",
    mode: "mode",
    name: "name",
    pin: "pin",
    pinFormatter: "pinFormatter",
    snaps: "snaps",
    step: "step",
    ticks: "ticks",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonRange_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a59);
IonRange = __decorate([ProxyCmp({
  inputs: ["activeBarStart", "color", "debounce", "disabled", "dualKnobs", "label", "labelPlacement", "max", "min", "mode", "name", "pin", "pinFormatter", "snaps", "step", "ticks", "value"]
})], IonRange);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRange, [{
    type: Component,
    args: [{
      selector: "ion-range",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activeBarStart", "color", "debounce", "disabled", "dualKnobs", "label", "labelPlacement", "max", "min", "mode", "name", "pin", "pinFormatter", "snaps", "step", "ticks", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a60;
var IonRefresher = (_a60 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionRefresh", "ionPull", "ionStart"]);
  }
}, /** @nocollapse */
__publicField(_a60, "\u0275fac", function IonRefresher_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a60)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a60, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a60,
  selectors: [["ion-refresher"]],
  inputs: {
    closeDuration: "closeDuration",
    disabled: "disabled",
    mode: "mode",
    pullFactor: "pullFactor",
    pullMax: "pullMax",
    pullMin: "pullMin",
    snapbackDuration: "snapbackDuration"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonRefresher_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a60);
IonRefresher = __decorate([ProxyCmp({
  inputs: ["closeDuration", "disabled", "mode", "pullFactor", "pullMax", "pullMin", "snapbackDuration"],
  methods: ["complete", "cancel", "getProgress"]
})], IonRefresher);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRefresher, [{
    type: Component,
    args: [{
      selector: "ion-refresher",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["closeDuration", "disabled", "mode", "pullFactor", "pullMax", "pullMin", "snapbackDuration"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a61;
var IonRefresherContent = (_a61 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a61, "\u0275fac", function IonRefresherContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a61)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a61, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a61,
  selectors: [["ion-refresher-content"]],
  inputs: {
    pullingIcon: "pullingIcon",
    pullingText: "pullingText",
    refreshingSpinner: "refreshingSpinner",
    refreshingText: "refreshingText"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonRefresherContent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a61);
IonRefresherContent = __decorate([ProxyCmp({
  inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"]
})], IonRefresherContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRefresherContent, [{
    type: Component,
    args: [{
      selector: "ion-refresher-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a62;
var IonReorder = (_a62 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a62, "\u0275fac", function IonReorder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a62)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a62, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a62,
  selectors: [["ion-reorder"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonReorder_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a62);
IonReorder = __decorate([ProxyCmp({})], IonReorder);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonReorder, [{
    type: Component,
    args: [{
      selector: "ion-reorder",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a63;
var IonReorderGroup = (_a63 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionItemReorder", "ionReorderStart", "ionReorderMove", "ionReorderEnd"]);
  }
}, /** @nocollapse */
__publicField(_a63, "\u0275fac", function IonReorderGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a63)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a63, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a63,
  selectors: [["ion-reorder-group"]],
  inputs: {
    disabled: "disabled"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonReorderGroup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a63);
IonReorderGroup = __decorate([ProxyCmp({
  inputs: ["disabled"],
  methods: ["complete"]
})], IonReorderGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonReorderGroup, [{
    type: Component,
    args: [{
      selector: "ion-reorder-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a64;
var IonRippleEffect = (_a64 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a64, "\u0275fac", function IonRippleEffect_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a64)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a64, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a64,
  selectors: [["ion-ripple-effect"]],
  inputs: {
    type: "type"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonRippleEffect_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a64);
IonRippleEffect = __decorate([ProxyCmp({
  inputs: ["type"],
  methods: ["addRipple"]
})], IonRippleEffect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRippleEffect, [{
    type: Component,
    args: [{
      selector: "ion-ripple-effect",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a65;
var IonRow = (_a65 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a65, "\u0275fac", function IonRow_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a65)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a65, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a65,
  selectors: [["ion-row"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonRow_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a65);
IonRow = __decorate([ProxyCmp({})], IonRow);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRow, [{
    type: Component,
    args: [{
      selector: "ion-row",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a66;
var IonSearchbar = (_a66 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionCancel", "ionClear", "ionBlur", "ionFocus"]);
  }
}, /** @nocollapse */
__publicField(_a66, "\u0275fac", function IonSearchbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a66)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a66, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a66,
  selectors: [["ion-searchbar"]],
  inputs: {
    animated: "animated",
    autocapitalize: "autocapitalize",
    autocomplete: "autocomplete",
    autocorrect: "autocorrect",
    cancelButtonIcon: "cancelButtonIcon",
    cancelButtonText: "cancelButtonText",
    clearIcon: "clearIcon",
    color: "color",
    debounce: "debounce",
    disabled: "disabled",
    enterkeyhint: "enterkeyhint",
    inputmode: "inputmode",
    maxlength: "maxlength",
    minlength: "minlength",
    mode: "mode",
    name: "name",
    placeholder: "placeholder",
    searchIcon: "searchIcon",
    showCancelButton: "showCancelButton",
    showClearButton: "showClearButton",
    spellcheck: "spellcheck",
    type: "type",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSearchbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a66);
IonSearchbar = __decorate([ProxyCmp({
  inputs: ["animated", "autocapitalize", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"],
  methods: ["setFocus", "getInputElement"]
})], IonSearchbar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSearchbar, [{
    type: Component,
    args: [{
      selector: "ion-searchbar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "autocapitalize", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a67;
var IonSegment = (_a67 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
}, /** @nocollapse */
__publicField(_a67, "\u0275fac", function IonSegment_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a67)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a67, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a67,
  selectors: [["ion-segment"]],
  inputs: {
    color: "color",
    disabled: "disabled",
    mode: "mode",
    scrollable: "scrollable",
    selectOnFocus: "selectOnFocus",
    swipeGesture: "swipeGesture",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSegment_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a67);
IonSegment = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "mode", "scrollable", "selectOnFocus", "swipeGesture", "value"]
})], IonSegment);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegment, [{
    type: Component,
    args: [{
      selector: "ion-segment",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "scrollable", "selectOnFocus", "swipeGesture", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a68;
var IonSegmentButton = (_a68 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a68, "\u0275fac", function IonSegmentButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a68)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a68, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a68,
  selectors: [["ion-segment-button"]],
  inputs: {
    contentId: "contentId",
    disabled: "disabled",
    layout: "layout",
    mode: "mode",
    type: "type",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSegmentButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a68);
IonSegmentButton = __decorate([ProxyCmp({
  inputs: ["contentId", "disabled", "layout", "mode", "type", "value"]
})], IonSegmentButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentButton, [{
    type: Component,
    args: [{
      selector: "ion-segment-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "layout", "mode", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a69;
var IonSegmentContent = (_a69 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a69, "\u0275fac", function IonSegmentContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a69)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a69, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a69,
  selectors: [["ion-segment-content"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSegmentContent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a69);
IonSegmentContent = __decorate([ProxyCmp({})], IonSegmentContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentContent, [{
    type: Component,
    args: [{
      selector: "ion-segment-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a70;
var IonSegmentView = (_a70 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSegmentViewScroll"]);
  }
}, /** @nocollapse */
__publicField(_a70, "\u0275fac", function IonSegmentView_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a70)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a70, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a70,
  selectors: [["ion-segment-view"]],
  inputs: {
    disabled: "disabled"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSegmentView_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a70);
IonSegmentView = __decorate([ProxyCmp({
  inputs: ["disabled"]
})], IonSegmentView);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentView, [{
    type: Component,
    args: [{
      selector: "ion-segment-view",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a71;
var IonSelect = (_a71 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionCancel", "ionDismiss", "ionFocus", "ionBlur"]);
  }
}, /** @nocollapse */
__publicField(_a71, "\u0275fac", function IonSelect_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a71)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a71, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a71,
  selectors: [["ion-select"]],
  inputs: {
    cancelText: "cancelText",
    color: "color",
    compareWith: "compareWith",
    disabled: "disabled",
    errorText: "errorText",
    expandedIcon: "expandedIcon",
    fill: "fill",
    helperText: "helperText",
    interface: "interface",
    interfaceOptions: "interfaceOptions",
    justify: "justify",
    label: "label",
    labelPlacement: "labelPlacement",
    mode: "mode",
    multiple: "multiple",
    name: "name",
    okText: "okText",
    placeholder: "placeholder",
    required: "required",
    selectedText: "selectedText",
    shape: "shape",
    toggleIcon: "toggleIcon",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSelect_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a71);
IonSelect = __decorate([ProxyCmp({
  inputs: ["cancelText", "color", "compareWith", "disabled", "errorText", "expandedIcon", "fill", "helperText", "interface", "interfaceOptions", "justify", "label", "labelPlacement", "mode", "multiple", "name", "okText", "placeholder", "required", "selectedText", "shape", "toggleIcon", "value"],
  methods: ["open"]
})], IonSelect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelect, [{
    type: Component,
    args: [{
      selector: "ion-select",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cancelText", "color", "compareWith", "disabled", "errorText", "expandedIcon", "fill", "helperText", "interface", "interfaceOptions", "justify", "label", "labelPlacement", "mode", "multiple", "name", "okText", "placeholder", "required", "selectedText", "shape", "toggleIcon", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a72;
var IonSelectModal = (_a72 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a72, "\u0275fac", function IonSelectModal_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a72)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a72, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a72,
  selectors: [["ion-select-modal"]],
  inputs: {
    header: "header",
    multiple: "multiple",
    options: "options"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSelectModal_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a72);
IonSelectModal = __decorate([ProxyCmp({
  inputs: ["header", "multiple", "options"]
})], IonSelectModal);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelectModal, [{
    type: Component,
    args: [{
      selector: "ion-select-modal",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["header", "multiple", "options"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a73;
var IonSelectOption = (_a73 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a73, "\u0275fac", function IonSelectOption_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a73)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a73, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a73,
  selectors: [["ion-select-option"]],
  inputs: {
    disabled: "disabled",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSelectOption_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a73);
IonSelectOption = __decorate([ProxyCmp({
  inputs: ["disabled", "value"]
})], IonSelectOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelectOption, [{
    type: Component,
    args: [{
      selector: "ion-select-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a74;
var IonSkeletonText = (_a74 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a74, "\u0275fac", function IonSkeletonText_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a74)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a74, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a74,
  selectors: [["ion-skeleton-text"]],
  inputs: {
    animated: "animated"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSkeletonText_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a74);
IonSkeletonText = __decorate([ProxyCmp({
  inputs: ["animated"]
})], IonSkeletonText);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSkeletonText, [{
    type: Component,
    args: [{
      selector: "ion-skeleton-text",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a75;
var IonSpinner = (_a75 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a75, "\u0275fac", function IonSpinner_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a75)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a75, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a75,
  selectors: [["ion-spinner"]],
  inputs: {
    color: "color",
    duration: "duration",
    name: "name",
    paused: "paused"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSpinner_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a75);
IonSpinner = __decorate([ProxyCmp({
  inputs: ["color", "duration", "name", "paused"]
})], IonSpinner);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSpinner, [{
    type: Component,
    args: [{
      selector: "ion-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "duration", "name", "paused"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a76;
var IonSplitPane = (_a76 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSplitPaneVisible"]);
  }
}, /** @nocollapse */
__publicField(_a76, "\u0275fac", function IonSplitPane_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a76)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a76, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a76,
  selectors: [["ion-split-pane"]],
  inputs: {
    contentId: "contentId",
    disabled: "disabled",
    when: "when"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSplitPane_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a76);
IonSplitPane = __decorate([ProxyCmp({
  inputs: ["contentId", "disabled", "when"]
})], IonSplitPane);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSplitPane, [{
    type: Component,
    args: [{
      selector: "ion-split-pane",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "when"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a77;
var IonTab = (_a77 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a77, "\u0275fac", function IonTab_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a77)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a77, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a77,
  selectors: [["ion-tab"]],
  inputs: {
    component: "component",
    tab: "tab"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonTab_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a77);
IonTab = __decorate([ProxyCmp({
  inputs: ["component", "tab"],
  methods: ["setActive"]
})], IonTab);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTab, [{
    type: Component,
    args: [{
      selector: "ion-tab",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["component", "tab"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a78;
var IonTabBar = (_a78 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a78, "\u0275fac", function IonTabBar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a78)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a78, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a78,
  selectors: [["ion-tab-bar"]],
  inputs: {
    color: "color",
    mode: "mode",
    selectedTab: "selectedTab",
    translucent: "translucent"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonTabBar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a78);
IonTabBar = __decorate([ProxyCmp({
  inputs: ["color", "mode", "selectedTab", "translucent"]
})], IonTabBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabBar, [{
    type: Component,
    args: [{
      selector: "ion-tab-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "selectedTab", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a79;
var IonTabButton = (_a79 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a79, "\u0275fac", function IonTabButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a79)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a79, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a79,
  selectors: [["ion-tab-button"]],
  inputs: {
    disabled: "disabled",
    download: "download",
    href: "href",
    layout: "layout",
    mode: "mode",
    rel: "rel",
    selected: "selected",
    tab: "tab",
    target: "target"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonTabButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a79);
IonTabButton = __decorate([ProxyCmp({
  inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"]
})], IonTabButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabButton, [{
    type: Component,
    args: [{
      selector: "ion-tab-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a80;
var IonText = (_a80 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a80, "\u0275fac", function IonText_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a80)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a80, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a80,
  selectors: [["ion-text"]],
  inputs: {
    color: "color",
    mode: "mode"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonText_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a80);
IonText = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonText);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonText, [{
    type: Component,
    args: [{
      selector: "ion-text",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a81;
var IonTextarea = (_a81 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionInput", "ionBlur", "ionFocus"]);
  }
}, /** @nocollapse */
__publicField(_a81, "\u0275fac", function IonTextarea_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a81)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a81, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a81,
  selectors: [["ion-textarea"]],
  inputs: {
    autoGrow: "autoGrow",
    autocapitalize: "autocapitalize",
    autofocus: "autofocus",
    clearOnEdit: "clearOnEdit",
    color: "color",
    cols: "cols",
    counter: "counter",
    counterFormatter: "counterFormatter",
    debounce: "debounce",
    disabled: "disabled",
    enterkeyhint: "enterkeyhint",
    errorText: "errorText",
    fill: "fill",
    helperText: "helperText",
    inputmode: "inputmode",
    label: "label",
    labelPlacement: "labelPlacement",
    maxlength: "maxlength",
    minlength: "minlength",
    mode: "mode",
    name: "name",
    placeholder: "placeholder",
    readonly: "readonly",
    required: "required",
    rows: "rows",
    shape: "shape",
    spellcheck: "spellcheck",
    value: "value",
    wrap: "wrap"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonTextarea_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a81);
IonTextarea = __decorate([ProxyCmp({
  inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "shape", "spellcheck", "value", "wrap"],
  methods: ["setFocus", "getInputElement"]
})], IonTextarea);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTextarea, [{
    type: Component,
    args: [{
      selector: "ion-textarea",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "shape", "spellcheck", "value", "wrap"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a82;
var IonThumbnail = (_a82 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a82, "\u0275fac", function IonThumbnail_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a82)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a82, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a82,
  selectors: [["ion-thumbnail"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonThumbnail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a82);
IonThumbnail = __decorate([ProxyCmp({})], IonThumbnail);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonThumbnail, [{
    type: Component,
    args: [{
      selector: "ion-thumbnail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a83;
var IonTitle = (_a83 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a83, "\u0275fac", function IonTitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a83)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a83, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a83,
  selectors: [["ion-title"]],
  inputs: {
    color: "color",
    size: "size"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonTitle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a83);
IonTitle = __decorate([ProxyCmp({
  inputs: ["color", "size"]
})], IonTitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTitle, [{
    type: Component,
    args: [{
      selector: "ion-title",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "size"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a84;
var IonToast = (_a84 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionToastDidPresent", "ionToastWillPresent", "ionToastWillDismiss", "ionToastDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
}, /** @nocollapse */
__publicField(_a84, "\u0275fac", function IonToast_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a84)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a84, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a84,
  selectors: [["ion-toast"]],
  inputs: {
    animated: "animated",
    buttons: "buttons",
    color: "color",
    cssClass: "cssClass",
    duration: "duration",
    enterAnimation: "enterAnimation",
    header: "header",
    htmlAttributes: "htmlAttributes",
    icon: "icon",
    isOpen: "isOpen",
    keyboardClose: "keyboardClose",
    layout: "layout",
    leaveAnimation: "leaveAnimation",
    message: "message",
    mode: "mode",
    position: "position",
    positionAnchor: "positionAnchor",
    swipeGesture: "swipeGesture",
    translucent: "translucent",
    trigger: "trigger"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonToast_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a84);
IonToast = __decorate([ProxyCmp({
  inputs: ["animated", "buttons", "color", "cssClass", "duration", "enterAnimation", "header", "htmlAttributes", "icon", "isOpen", "keyboardClose", "layout", "leaveAnimation", "message", "mode", "position", "positionAnchor", "swipeGesture", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonToast);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToast, [{
    type: Component,
    args: [{
      selector: "ion-toast",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "buttons", "color", "cssClass", "duration", "enterAnimation", "header", "htmlAttributes", "icon", "isOpen", "keyboardClose", "layout", "leaveAnimation", "message", "mode", "position", "positionAnchor", "swipeGesture", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a85;
var IonToggle = (_a85 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
}, /** @nocollapse */
__publicField(_a85, "\u0275fac", function IonToggle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a85)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a85, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a85,
  selectors: [["ion-toggle"]],
  inputs: {
    alignment: "alignment",
    checked: "checked",
    color: "color",
    disabled: "disabled",
    enableOnOffLabels: "enableOnOffLabels",
    errorText: "errorText",
    helperText: "helperText",
    justify: "justify",
    labelPlacement: "labelPlacement",
    mode: "mode",
    name: "name",
    required: "required",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonToggle_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a85);
IonToggle = __decorate([ProxyCmp({
  inputs: ["alignment", "checked", "color", "disabled", "enableOnOffLabels", "errorText", "helperText", "justify", "labelPlacement", "mode", "name", "required", "value"]
})], IonToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToggle, [{
    type: Component,
    args: [{
      selector: "ion-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "checked", "color", "disabled", "enableOnOffLabels", "errorText", "helperText", "justify", "labelPlacement", "mode", "name", "required", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _a86;
var IonToolbar = (_a86 = class {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
}, /** @nocollapse */
__publicField(_a86, "\u0275fac", function IonToolbar_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a86)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
}), /** @nocollapse */
__publicField(_a86, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _a86,
  selectors: [["ion-toolbar"]],
  inputs: {
    color: "color",
    mode: "mode"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonToolbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
})), _a86);
IonToolbar = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonToolbar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToolbar, [{
    type: Component,
    args: [{
      selector: "ion-toolbar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var _IonRouterOutlet = class _IonRouterOutlet extends IonRouterOutlet {
  parentOutlet;
  /**
   * `static: true` must be set so the query results are resolved
   * before change detection runs. Otherwise, the view container
   * ref will be ion-router-outlet instead of ng-container, and
   * the first view will be added as a sibling of ion-router-outlet
   * instead of a child.
   */
  outletContent;
  /**
   * We need to pass in the correct instance of IonRouterOutlet
   * otherwise parentOutlet will be null in a nested outlet context.
   * This results in APIs such as NavController.pop not working
   * in nested outlets because the parent outlet cannot be found.
   */
  constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
    super(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet);
    this.parentOutlet = parentOutlet;
  }
};
/** @nocollapse */
__publicField(_IonRouterOutlet, "\u0275fac", function IonRouterOutlet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IonRouterOutlet)(\u0275\u0275injectAttribute("name"), \u0275\u0275injectAttribute("tabs"), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(_IonRouterOutlet, 12));
});
/** @nocollapse */
__publicField(_IonRouterOutlet, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _IonRouterOutlet,
  selectors: [["ion-router-outlet"]],
  viewQuery: function IonRouterOutlet_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c1, 7, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.outletContent = _t.first);
    }
  },
  standalone: false,
  features: [\u0275\u0275InheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [["outletContent", ""]],
  template: function IonRouterOutlet_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementContainerStart(0, null, 0);
      \u0275\u0275projection(2);
      \u0275\u0275elementContainerEnd();
    }
  },
  encapsulation: 2
}));
var IonRouterOutlet2 = _IonRouterOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRouterOutlet2, [{
    type: Component,
    args: [{
      selector: "ion-router-outlet",
      template: "<ng-container #outletContent><ng-content></ng-content></ng-container>"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["name"]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Attribute,
        args: ["tabs"]
      }]
    }, {
      type: Location
    }, {
      type: ElementRef
    }, {
      type: Router
    }, {
      type: NgZone
    }, {
      type: ActivatedRoute
    }, {
      type: IonRouterOutlet2,
      decorators: [{
        type: SkipSelf
      }, {
        type: Optional
      }]
    }];
  }, {
    outletContent: [{
      type: ViewChild,
      args: ["outletContent", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();
var _IonTabs = class _IonTabs extends IonTabs {
  outlet;
  tabBar;
  tabBars;
  tabs;
};
/** @nocollapse */
__publicField(_IonTabs, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275IonTabs_BaseFactory;
  return function IonTabs_Factory(__ngFactoryType__) {
    return (\u0275IonTabs_BaseFactory || (\u0275IonTabs_BaseFactory = \u0275\u0275getInheritedFactory(_IonTabs)))(__ngFactoryType__ || _IonTabs);
  };
})());
/** @nocollapse */
__publicField(_IonTabs, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _IonTabs,
  selectors: [["ion-tabs"]],
  contentQueries: function IonTabs_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, IonTabBar, 5);
      \u0275\u0275contentQuery(dirIndex, IonTabBar, 4);
      \u0275\u0275contentQuery(dirIndex, IonTab, 4);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabBar = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabBars = _t);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabs = _t);
    }
  },
  viewQuery: function IonTabs_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c2, 5, IonRouterOutlet2);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.outlet = _t.first);
    }
  },
  standalone: false,
  features: [\u0275\u0275InheritDefinitionFeature],
  ngContentSelectors: _c4,
  decls: 6,
  vars: 2,
  consts: [["tabsInner", ""], ["outlet", ""], [1, "tabs-inner"], ["tabs", "true", 3, "stackWillChange", "stackDidChange", 4, "ngIf"], [4, "ngIf"], ["tabs", "true", 3, "stackWillChange", "stackDidChange"]],
  template: function IonTabs_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c3);
      \u0275\u0275projection(0);
      \u0275\u0275elementStart(1, "div", 2, 0);
      \u0275\u0275template(3, IonTabs_ion_router_outlet_3_Template, 2, 0, "ion-router-outlet", 3)(4, IonTabs_ng_content_4_Template, 1, 0, "ng-content", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275projection(5, 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.tabs.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tabs.length > 0);
    }
  },
  dependencies: [NgIf, IonRouterOutlet2],
  styles: ["[_nghost-%COMP%]{display:flex;position:absolute;inset:0;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner[_ngcontent-%COMP%]{position:relative;flex:1;contain:layout size style}"]
}));
var IonTabs2 = _IonTabs;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabs2, [{
    type: Component,
    args: [{
      selector: "ion-tabs",
      template: `
    <ng-content select="[slot=top]"></ng-content>
    <div class="tabs-inner" #tabsInner>
      <ion-router-outlet
        *ngIf="tabs.length === 0"
        #outlet
        tabs="true"
        (stackWillChange)="onStackWillChange($event)"
        (stackDidChange)="onStackDidChange($event)"
      ></ion-router-outlet>
      <ng-content *ngIf="tabs.length > 0" select="ion-tab"></ng-content>
    </div>
    <ng-content></ng-content>
  `,
      styles: [":host{display:flex;position:absolute;inset:0;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner{position:relative;flex:1;contain:layout size style}\n"]
    }]
  }], null, {
    outlet: [{
      type: ViewChild,
      args: ["outlet", {
        read: IonRouterOutlet2,
        static: false
      }]
    }],
    tabBar: [{
      type: ContentChild,
      args: [IonTabBar, {
        static: false
      }]
    }],
    tabBars: [{
      type: ContentChildren,
      args: [IonTabBar]
    }],
    tabs: [{
      type: ContentChildren,
      args: [IonTab]
    }]
  });
})();
var _IonBackButton = class _IonBackButton extends IonBackButton {
  constructor(routerOutlet, navCtrl, config, r, z, c) {
    super(routerOutlet, navCtrl, config, r, z, c);
  }
};
/** @nocollapse */
__publicField(_IonBackButton, "\u0275fac", function IonBackButton_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IonBackButton)(\u0275\u0275directiveInject(IonRouterOutlet2, 8), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(Config), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef));
});
/** @nocollapse */
__publicField(_IonBackButton, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _IonBackButton,
  selectors: [["ion-back-button"]],
  standalone: false,
  features: [\u0275\u0275InheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonBackButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
}));
var IonBackButton2 = _IonBackButton;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackButton2, [{
    type: Component,
    args: [{
      selector: "ion-back-button",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: IonRouterOutlet2,
      decorators: [{
        type: Optional
      }]
    }, {
      type: NavController
    }, {
      type: Config
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var _IonNav = class _IonNav extends IonNav {
  constructor(ref, environmentInjector, injector, angularDelegate, z, c) {
    super(ref, environmentInjector, injector, angularDelegate, z, c);
  }
};
/** @nocollapse */
__publicField(_IonNav, "\u0275fac", function IonNav_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IonNav)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(EnvironmentInjector), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(AngularDelegate), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef));
});
/** @nocollapse */
__publicField(_IonNav, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _IonNav,
  selectors: [["ion-nav"]],
  standalone: false,
  features: [\u0275\u0275InheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonNav_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
}));
var IonNav2 = _IonNav;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNav2, [{
    type: Component,
    args: [{
      selector: "ion-nav",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: EnvironmentInjector
    }, {
      type: Injector
    }, {
      type: AngularDelegate
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var _RouterLinkDelegateDirective = class _RouterLinkDelegateDirective extends RouterLinkDelegateDirective {
};
/** @nocollapse */
__publicField(_RouterLinkDelegateDirective, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275RouterLinkDelegateDirective_BaseFactory;
  return function RouterLinkDelegateDirective_Factory(__ngFactoryType__) {
    return (\u0275RouterLinkDelegateDirective_BaseFactory || (\u0275RouterLinkDelegateDirective_BaseFactory = \u0275\u0275getInheritedFactory(_RouterLinkDelegateDirective)))(__ngFactoryType__ || _RouterLinkDelegateDirective);
  };
})());
/** @nocollapse */
__publicField(_RouterLinkDelegateDirective, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RouterLinkDelegateDirective,
  selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
  standalone: false,
  features: [\u0275\u0275InheritDefinitionFeature]
}));
var RouterLinkDelegateDirective2 = _RouterLinkDelegateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkDelegateDirective2, [{
    type: Directive,
    args: [{
      selector: ":not(a):not(area)[routerLink]"
    }]
  }], null, null);
})();
var _RouterLinkWithHrefDelegateDirective = class _RouterLinkWithHrefDelegateDirective extends RouterLinkWithHrefDelegateDirective {
};
/** @nocollapse */
__publicField(_RouterLinkWithHrefDelegateDirective, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275RouterLinkWithHrefDelegateDirective_BaseFactory;
  return function RouterLinkWithHrefDelegateDirective_Factory(__ngFactoryType__) {
    return (\u0275RouterLinkWithHrefDelegateDirective_BaseFactory || (\u0275RouterLinkWithHrefDelegateDirective_BaseFactory = \u0275\u0275getInheritedFactory(_RouterLinkWithHrefDelegateDirective)))(__ngFactoryType__ || _RouterLinkWithHrefDelegateDirective);
  };
})());
/** @nocollapse */
__publicField(_RouterLinkWithHrefDelegateDirective, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RouterLinkWithHrefDelegateDirective,
  selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
  standalone: false,
  features: [\u0275\u0275InheritDefinitionFeature]
}));
var RouterLinkWithHrefDelegateDirective2 = _RouterLinkWithHrefDelegateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkWithHrefDelegateDirective2, [{
    type: Directive,
    args: [{
      selector: "a[routerLink],area[routerLink]"
    }]
  }], null, null);
})();
var _IonModal = class _IonModal extends IonModal {
};
/** @nocollapse */
__publicField(_IonModal, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275IonModal_BaseFactory;
  return function IonModal_Factory(__ngFactoryType__) {
    return (\u0275IonModal_BaseFactory || (\u0275IonModal_BaseFactory = \u0275\u0275getInheritedFactory(_IonModal)))(__ngFactoryType__ || _IonModal);
  };
})());
/** @nocollapse */
__publicField(_IonModal, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _IonModal,
  selectors: [["ion-modal"]],
  standalone: false,
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 1,
  vars: 1,
  consts: [["class", "ion-delegate-host ion-page", 4, "ngIf"], [1, "ion-delegate-host", "ion-page"], [3, "ngTemplateOutlet"]],
  template: function IonModal_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, IonModal_div_0_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
}));
var IonModal2 = _IonModal;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonModal2, [{
    type: Component,
    args: [{
      selector: "ion-modal",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="ion-delegate-host ion-page" *ngIf="isCmpOpen || keepContentsMounted">
    <ng-container [ngTemplateOutlet]="template"></ng-container>
  </div>`
    }]
  }], null, null);
})();
var _IonPopover = class _IonPopover extends IonPopover {
};
/** @nocollapse */
__publicField(_IonPopover, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275IonPopover_BaseFactory;
  return function IonPopover_Factory(__ngFactoryType__) {
    return (\u0275IonPopover_BaseFactory || (\u0275IonPopover_BaseFactory = \u0275\u0275getInheritedFactory(_IonPopover)))(__ngFactoryType__ || _IonPopover);
  };
})());
/** @nocollapse */
__publicField(_IonPopover, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _IonPopover,
  selectors: [["ion-popover"]],
  standalone: false,
  features: [\u0275\u0275InheritDefinitionFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"]],
  template: function IonPopover_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, IonPopover_ng_container_0_Template, 1, 1, "ng-container", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
}));
var IonPopover2 = _IonPopover;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPopover2, [{
    type: Component,
    args: [{
      selector: "ion-popover",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container [ngTemplateOutlet]="template" *ngIf="isCmpOpen || keepContentsMounted"></ng-container>`
    }]
  }], null, null);
})();
var ION_MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IonMaxValidator),
  multi: true
};
var _IonMaxValidator = class _IonMaxValidator extends MaxValidator {
};
/** @nocollapse */
__publicField(_IonMaxValidator, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275IonMaxValidator_BaseFactory;
  return function IonMaxValidator_Factory(__ngFactoryType__) {
    return (\u0275IonMaxValidator_BaseFactory || (\u0275IonMaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_IonMaxValidator)))(__ngFactoryType__ || _IonMaxValidator);
  };
})());
/** @nocollapse */
__publicField(_IonMaxValidator, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _IonMaxValidator,
  selectors: [["ion-input", "type", "number", "max", "", "formControlName", ""], ["ion-input", "type", "number", "max", "", "formControl", ""], ["ion-input", "type", "number", "max", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function IonMaxValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
    }
  },
  standalone: false,
  features: [\u0275\u0275ProvidersFeature([ION_MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
}));
var IonMaxValidator = _IonMaxValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMaxValidator, [{
    type: Directive,
    args: [{
      selector: "ion-input[type=number][max][formControlName],ion-input[type=number][max][formControl],ion-input[type=number][max][ngModel]",
      providers: [ION_MAX_VALIDATOR],
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, null);
})();
var ION_MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IonMinValidator),
  multi: true
};
var _IonMinValidator = class _IonMinValidator extends MinValidator {
};
/** @nocollapse */
__publicField(_IonMinValidator, "\u0275fac", /* @__PURE__ */ (() => {
  let \u0275IonMinValidator_BaseFactory;
  return function IonMinValidator_Factory(__ngFactoryType__) {
    return (\u0275IonMinValidator_BaseFactory || (\u0275IonMinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_IonMinValidator)))(__ngFactoryType__ || _IonMinValidator);
  };
})());
/** @nocollapse */
__publicField(_IonMinValidator, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _IonMinValidator,
  selectors: [["ion-input", "type", "number", "min", "", "formControlName", ""], ["ion-input", "type", "number", "min", "", "formControl", ""], ["ion-input", "type", "number", "min", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function IonMinValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
    }
  },
  standalone: false,
  features: [\u0275\u0275ProvidersFeature([ION_MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
}));
var IonMinValidator = _IonMinValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMinValidator, [{
    type: Directive,
    args: [{
      selector: "ion-input[type=number][min][formControlName],ion-input[type=number][min][formControl],ion-input[type=number][min][ngModel]",
      providers: [ION_MIN_VALIDATOR],
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, null);
})();
var _AlertController = class _AlertController extends OverlayBaseController {
  constructor() {
    super(alertController);
  }
};
/** @nocollapse */
__publicField(_AlertController, "\u0275fac", function AlertController_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AlertController)();
});
/** @nocollapse */
__publicField(_AlertController, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AlertController,
  factory: _AlertController.\u0275fac,
  providedIn: "root"
}));
var AlertController = _AlertController;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var _AnimationController = class _AnimationController {
  /**
   * Create a new animation
   */
  create(animationId) {
    return createAnimation(animationId);
  }
  /**
   * EXPERIMENTAL
   *
   * Given a progression and a cubic bezier function,
   * this utility returns the time value(s) at which the
   * cubic bezier reaches the given time progression.
   *
   * If the cubic bezier never reaches the progression
   * the result will be an empty array.
   *
   * This is most useful for switching between easing curves
   * when doing a gesture animation (i.e. going from linear easing
   * during a drag, to another easing when `progressEnd` is called)
   */
  easingTime(p0, p1, p2, p3, progression) {
    return getTimeGivenProgression(p0, p1, p2, p3, progression);
  }
};
/** @nocollapse */
__publicField(_AnimationController, "\u0275fac", function AnimationController_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnimationController)();
});
/** @nocollapse */
__publicField(_AnimationController, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AnimationController,
  factory: _AnimationController.\u0275fac,
  providedIn: "root"
}));
var AnimationController = _AnimationController;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ActionSheetController = class _ActionSheetController extends OverlayBaseController {
  constructor() {
    super(actionSheetController);
  }
};
/** @nocollapse */
__publicField(_ActionSheetController, "\u0275fac", function ActionSheetController_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ActionSheetController)();
});
/** @nocollapse */
__publicField(_ActionSheetController, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ActionSheetController,
  factory: _ActionSheetController.\u0275fac,
  providedIn: "root"
}));
var ActionSheetController = _ActionSheetController;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var _GestureController = class _GestureController {
  zone;
  constructor(zone) {
    this.zone = zone;
  }
  /**
   * Create a new gesture
   */
  create(opts, runInsideAngularZone = false) {
    if (runInsideAngularZone) {
      Object.getOwnPropertyNames(opts).forEach((key) => {
        if (typeof opts[key] === "function") {
          const fn = opts[key];
          opts[key] = (...props) => this.zone.run(() => fn(...props));
        }
      });
    }
    return createGesture(opts);
  }
};
/** @nocollapse */
__publicField(_GestureController, "\u0275fac", function GestureController_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GestureController)(\u0275\u0275inject(NgZone));
});
/** @nocollapse */
__publicField(_GestureController, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _GestureController,
  factory: _GestureController.\u0275fac,
  providedIn: "root"
}));
var GestureController = _GestureController;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GestureController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: NgZone
    }];
  }, null);
})();
var _LoadingController = class _LoadingController extends OverlayBaseController {
  constructor() {
    super(loadingController);
  }
};
/** @nocollapse */
__publicField(_LoadingController, "\u0275fac", function LoadingController_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoadingController)();
});
/** @nocollapse */
__publicField(_LoadingController, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _LoadingController,
  factory: _LoadingController.\u0275fac,
  providedIn: "root"
}));
var LoadingController = _LoadingController;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var _MenuController = class _MenuController extends MenuController {
  constructor() {
    super(menuController);
  }
};
/** @nocollapse */
__publicField(_MenuController, "\u0275fac", function MenuController_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MenuController)();
});
/** @nocollapse */
__publicField(_MenuController, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MenuController,
  factory: _MenuController.\u0275fac,
  providedIn: "root"
}));
var MenuController2 = _MenuController;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuController2, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var _ModalController = class _ModalController extends OverlayBaseController {
  angularDelegate = inject(AngularDelegate);
  injector = inject(Injector);
  environmentInjector = inject(EnvironmentInjector);
  constructor() {
    super(modalController);
  }
  create(opts) {
    return super.create(__spreadProps(__spreadValues({}, opts), {
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "modal")
    }));
  }
};
/** @nocollapse */
__publicField(_ModalController, "\u0275fac", function ModalController_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalController)();
});
/** @nocollapse */
__publicField(_ModalController, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ModalController,
  factory: _ModalController.\u0275fac
}));
var ModalController = _ModalController;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalController, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var _PickerController = class _PickerController extends OverlayBaseController {
  constructor() {
    super(pickerController);
  }
};
/** @nocollapse */
__publicField(_PickerController, "\u0275fac", function PickerController_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PickerController)();
});
/** @nocollapse */
__publicField(_PickerController, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _PickerController,
  factory: _PickerController.\u0275fac,
  providedIn: "root"
}));
var PickerController = _PickerController;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var PopoverController = class extends OverlayBaseController {
  angularDelegate = inject(AngularDelegate);
  injector = inject(Injector);
  environmentInjector = inject(EnvironmentInjector);
  constructor() {
    super(popoverController);
  }
  create(opts) {
    return super.create(__spreadProps(__spreadValues({}, opts), {
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "popover")
    }));
  }
};
var _ToastController = class _ToastController extends OverlayBaseController {
  constructor() {
    super(toastController);
  }
};
/** @nocollapse */
__publicField(_ToastController, "\u0275fac", function ToastController_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastController)();
});
/** @nocollapse */
__publicField(_ToastController, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ToastController,
  factory: _ToastController.\u0275fac,
  providedIn: "root"
}));
var ToastController = _ToastController;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var appInitialize = (config, doc, zone) => {
  return () => {
    const win = doc.defaultView;
    if (win && typeof window !== "undefined") {
      setupConfig(__spreadProps(__spreadValues({}, config), {
        _zoneGate: (h) => zone.run(h)
      }));
      const aelFn = "__zone_symbol__addEventListener" in doc.body ? "__zone_symbol__addEventListener" : "addEventListener";
      return defineCustomElements(win, {
        exclude: ["ion-tabs"],
        syncQueue: true,
        raf,
        jmp: (h) => zone.runOutsideAngular(h),
        ael(elm, eventName, cb, opts) {
          elm[aelFn](eventName, cb, opts);
        },
        rel(elm, eventName, cb, opts) {
          elm.removeEventListener(eventName, cb, opts);
        }
      });
    }
  };
};
var DIRECTIVES = [IonAccordion, IonAccordionGroup, IonActionSheet, IonAlert, IonApp, IonAvatar, IonBackdrop, IonBadge, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonInputOtp, IonInputPasswordToggle, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonLoading, IonMenu, IonMenuButton, IonMenuToggle, IonNavLink, IonNote, IonPicker, IonPickerColumn, IonPickerColumnOption, IonPickerLegacy, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonSelect, IonSelectModal, IonSelectOption, IonSkeletonText, IonSpinner, IonSplitPane, IonTab, IonTabBar, IonTabButton, IonText, IonTextarea, IonThumbnail, IonTitle, IonToast, IonToggle, IonToolbar];
var DECLARATIONS = [
  // generated proxies
  ...DIRECTIVES,
  // manual proxies
  IonModal2,
  IonPopover2,
  // ngModel accessors
  BooleanValueAccessorDirective,
  NumericValueAccessorDirective,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  // navigation
  IonTabs2,
  IonRouterOutlet2,
  IonBackButton2,
  IonNav2,
  RouterLinkDelegateDirective2,
  RouterLinkWithHrefDelegateDirective2,
  // validators
  IonMinValidator,
  IonMaxValidator
];
var _IonicModule = class _IonicModule {
  static forRoot(config = {}) {
    return {
      ngModule: _IonicModule,
      providers: [{
        provide: ConfigToken,
        useValue: config
      }, {
        provide: APP_INITIALIZER,
        useFactory: appInitialize,
        multi: true,
        deps: [ConfigToken, DOCUMENT, NgZone]
      }, AngularDelegate, provideComponentInputBinding()]
    };
  }
};
/** @nocollapse */
__publicField(_IonicModule, "\u0275fac", function IonicModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IonicModule)();
});
/** @nocollapse */
__publicField(_IonicModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _IonicModule,
  declarations: [
    IonAccordion,
    IonAccordionGroup,
    IonActionSheet,
    IonAlert,
    IonApp,
    IonAvatar,
    IonBackdrop,
    IonBadge,
    IonBreadcrumb,
    IonBreadcrumbs,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCheckbox,
    IonChip,
    IonCol,
    IonContent,
    IonDatetime,
    IonDatetimeButton,
    IonFab,
    IonFabButton,
    IonFabList,
    IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonInput,
    IonInputOtp,
    IonInputPasswordToggle,
    IonItem,
    IonItemDivider,
    IonItemGroup,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
    IonListHeader,
    IonLoading,
    IonMenu,
    IonMenuButton,
    IonMenuToggle,
    IonNavLink,
    IonNote,
    IonPicker,
    IonPickerColumn,
    IonPickerColumnOption,
    IonPickerLegacy,
    IonProgressBar,
    IonRadio,
    IonRadioGroup,
    IonRange,
    IonRefresher,
    IonRefresherContent,
    IonReorder,
    IonReorderGroup,
    IonRippleEffect,
    IonRow,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonSegmentContent,
    IonSegmentView,
    IonSelect,
    IonSelectModal,
    IonSelectOption,
    IonSkeletonText,
    IonSpinner,
    IonSplitPane,
    IonTab,
    IonTabBar,
    IonTabButton,
    IonText,
    IonTextarea,
    IonThumbnail,
    IonTitle,
    IonToast,
    IonToggle,
    IonToolbar,
    // manual proxies
    IonModal2,
    IonPopover2,
    // ngModel accessors
    BooleanValueAccessorDirective,
    NumericValueAccessorDirective,
    SelectValueAccessorDirective,
    TextValueAccessorDirective,
    // navigation
    IonTabs2,
    IonRouterOutlet2,
    IonBackButton2,
    IonNav2,
    RouterLinkDelegateDirective2,
    RouterLinkWithHrefDelegateDirective2,
    // validators
    IonMinValidator,
    IonMaxValidator
  ],
  imports: [CommonModule],
  exports: [
    IonAccordion,
    IonAccordionGroup,
    IonActionSheet,
    IonAlert,
    IonApp,
    IonAvatar,
    IonBackdrop,
    IonBadge,
    IonBreadcrumb,
    IonBreadcrumbs,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCheckbox,
    IonChip,
    IonCol,
    IonContent,
    IonDatetime,
    IonDatetimeButton,
    IonFab,
    IonFabButton,
    IonFabList,
    IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonInput,
    IonInputOtp,
    IonInputPasswordToggle,
    IonItem,
    IonItemDivider,
    IonItemGroup,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
    IonListHeader,
    IonLoading,
    IonMenu,
    IonMenuButton,
    IonMenuToggle,
    IonNavLink,
    IonNote,
    IonPicker,
    IonPickerColumn,
    IonPickerColumnOption,
    IonPickerLegacy,
    IonProgressBar,
    IonRadio,
    IonRadioGroup,
    IonRange,
    IonRefresher,
    IonRefresherContent,
    IonReorder,
    IonReorderGroup,
    IonRippleEffect,
    IonRow,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonSegmentContent,
    IonSegmentView,
    IonSelect,
    IonSelectModal,
    IonSelectOption,
    IonSkeletonText,
    IonSpinner,
    IonSplitPane,
    IonTab,
    IonTabBar,
    IonTabButton,
    IonText,
    IonTextarea,
    IonThumbnail,
    IonTitle,
    IonToast,
    IonToggle,
    IonToolbar,
    // manual proxies
    IonModal2,
    IonPopover2,
    // ngModel accessors
    BooleanValueAccessorDirective,
    NumericValueAccessorDirective,
    SelectValueAccessorDirective,
    TextValueAccessorDirective,
    // navigation
    IonTabs2,
    IonRouterOutlet2,
    IonBackButton2,
    IonNav2,
    RouterLinkDelegateDirective2,
    RouterLinkWithHrefDelegateDirective2,
    // validators
    IonMinValidator,
    IonMaxValidator
  ]
}));
/** @nocollapse */
__publicField(_IonicModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [ModalController, PopoverController],
  imports: [CommonModule]
}));
var IonicModule = _IonicModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonicModule, [{
    type: NgModule,
    args: [{
      declarations: DECLARATIONS,
      exports: DECLARATIONS,
      providers: [ModalController, PopoverController],
      imports: [CommonModule]
    }]
  }], null, null);
})();

export {
  BooleanValueAccessorDirective,
  TextValueAccessorDirective,
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCheckbox,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonProgressBar,
  IonRow,
  IonSkeletonText,
  IonSpinner,
  IonText,
  IonTitle,
  IonToolbar,
  RouterLinkDelegateDirective2 as RouterLinkDelegateDirective,
  AlertController,
  LoadingController,
  IonicModule
};
/*! Bundled license information:

@ionic/core/dist/esm/index.js:
@ionic/core/dist/esm/app-globals-CvLYUxE9.js:
@ionic/core/dist/esm/loader.js:
@ionic/core/loader/index.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9hcHAtZ2xvYmFscy1DdkxZVXhFOS5qcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9sb2FkZXIuanMiLCJub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvbG9hZGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Zlc20yMDIyL2lvbmljLWFuZ3VsYXIubWpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBpIGFzIGluaXRpYWxpemUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1DVFN5dWZoRi5qcyc7XG5jb25zdCBnbG9iYWxTY3JpcHRzID0gaW5pdGlhbGl6ZTtcbmV4cG9ydCB7IGdsb2JhbFNjcmlwdHMgYXMgZyB9OyIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBiIGFzIGJvb3RzdHJhcExhenkgfSBmcm9tICcuL2luZGV4LTREeFk2X2dHLmpzJztcbmV4cG9ydCB7IHMgYXMgc2V0Tm9uY2UgfSBmcm9tICcuL2luZGV4LTREeFk2X2dHLmpzJztcbmltcG9ydCB7IGcgYXMgZ2xvYmFsU2NyaXB0cyB9IGZyb20gJy4vYXBwLWdsb2JhbHMtQ3ZMWVV4RTkuanMnO1xuaW1wb3J0ICcuL2lvbmljLWdsb2JhbC1DVFN5dWZoRi5qcyc7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50cyA9IGFzeW5jICh3aW4sIG9wdGlvbnMpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdW5kZWZpbmVkO1xuICBhd2FpdCBnbG9iYWxTY3JpcHRzKCk7XG4gIHJldHVybiBib290c3RyYXBMYXp5KEpTT04ucGFyc2UoXCJbW1xcXCJpb24tbWVudV8zXFxcIixbWzI4OSxcXFwiaW9uLW1lbnUtYnV0dG9uXFxcIix7XFxcImNvbG9yXFxcIjpbNTEzXSxcXFwiZGlzYWJsZWRcXFwiOls0XSxcXFwibWVudVxcXCI6WzFdLFxcXCJhdXRvSGlkZVxcXCI6WzQsXFxcImF1dG8taGlkZVxcXCJdLFxcXCJ0eXBlXFxcIjpbMV0sXFxcInZpc2libGVcXFwiOlszMl19LFtbMTYsXFxcImlvbk1lbnVDaGFuZ2VcXFwiLFxcXCJ2aXNpYmlsaXR5Q2hhbmdlZFxcXCJdLFsxNixcXFwiaW9uU3BsaXRQYW5lVmlzaWJsZVxcXCIsXFxcInZpc2liaWxpdHlDaGFuZ2VkXFxcIl1dXSxbMjg5LFxcXCJpb24tbWVudVxcXCIse1xcXCJjb250ZW50SWRcXFwiOls1MTMsXFxcImNvbnRlbnQtaWRcXFwiXSxcXFwibWVudUlkXFxcIjpbNTEzLFxcXCJtZW51LWlkXFxcIl0sXFxcInR5cGVcXFwiOlsxMDI1XSxcXFwiZGlzYWJsZWRcXFwiOlsxMDI4XSxcXFwic2lkZVxcXCI6WzUxM10sXFxcInN3aXBlR2VzdHVyZVxcXCI6WzQsXFxcInN3aXBlLWdlc3R1cmVcXFwiXSxcXFwibWF4RWRnZVN0YXJ0XFxcIjpbMixcXFwibWF4LWVkZ2Utc3RhcnRcXFwiXSxcXFwiaXNQYW5lVmlzaWJsZVxcXCI6WzMyXSxcXFwiaXNFbmRTaWRlXFxcIjpbMzJdLFxcXCJpc09wZW5cXFwiOls2NF0sXFxcImlzQWN0aXZlXFxcIjpbNjRdLFxcXCJvcGVuXFxcIjpbNjRdLFxcXCJjbG9zZVxcXCI6WzY0XSxcXFwidG9nZ2xlXFxcIjpbNjRdLFxcXCJzZXRPcGVuXFxcIjpbNjRdfSxbWzE2LFxcXCJpb25TcGxpdFBhbmVWaXNpYmxlXFxcIixcXFwib25TcGxpdFBhbmVDaGFuZ2VkXFxcIl0sWzIsXFxcImNsaWNrXFxcIixcXFwib25CYWNrZHJvcENsaWNrXFxcIl1dLHtcXFwidHlwZVxcXCI6W1xcXCJ0eXBlQ2hhbmdlZFxcXCJdLFxcXCJkaXNhYmxlZFxcXCI6W1xcXCJkaXNhYmxlZENoYW5nZWRcXFwiXSxcXFwic2lkZVxcXCI6W1xcXCJzaWRlQ2hhbmdlZFxcXCJdLFxcXCJzd2lwZUdlc3R1cmVcXFwiOltcXFwic3dpcGVHZXN0dXJlQ2hhbmdlZFxcXCJdfV0sWzI1NyxcXFwiaW9uLW1lbnUtdG9nZ2xlXFxcIix7XFxcIm1lbnVcXFwiOlsxXSxcXFwiYXV0b0hpZGVcXFwiOls0LFxcXCJhdXRvLWhpZGVcXFwiXSxcXFwidmlzaWJsZVxcXCI6WzMyXX0sW1sxNixcXFwiaW9uTWVudUNoYW5nZVxcXCIsXFxcInZpc2liaWxpdHlDaGFuZ2VkXFxcIl0sWzE2LFxcXCJpb25TcGxpdFBhbmVWaXNpYmxlXFxcIixcXFwidmlzaWJpbGl0eUNoYW5nZWRcXFwiXV1dXV0sW1xcXCJpb24taW5wdXQtcGFzc3dvcmQtdG9nZ2xlXFxcIixbWzI4OSxcXFwiaW9uLWlucHV0LXBhc3N3b3JkLXRvZ2dsZVxcXCIse1xcXCJjb2xvclxcXCI6WzUxM10sXFxcInNob3dJY29uXFxcIjpbMSxcXFwic2hvdy1pY29uXFxcIl0sXFxcImhpZGVJY29uXFxcIjpbMSxcXFwiaGlkZS1pY29uXFxcIl0sXFxcInR5cGVcXFwiOlsxMDI1XX0sbnVsbCx7XFxcInR5cGVcXFwiOltcXFwib25UeXBlQ2hhbmdlXFxcIl19XV1dLFtcXFwiaW9uLWZhYl8zXFxcIixbWzI4OSxcXFwiaW9uLWZhYi1idXR0b25cXFwiLHtcXFwiY29sb3JcXFwiOls1MTNdLFxcXCJhY3RpdmF0ZWRcXFwiOls0XSxcXFwiZGlzYWJsZWRcXFwiOls0XSxcXFwiZG93bmxvYWRcXFwiOlsxXSxcXFwiaHJlZlxcXCI6WzFdLFxcXCJyZWxcXFwiOlsxXSxcXFwicm91dGVyRGlyZWN0aW9uXFxcIjpbMSxcXFwicm91dGVyLWRpcmVjdGlvblxcXCJdLFxcXCJyb3V0ZXJBbmltYXRpb25cXFwiOlsxNixcXFwicm91dGVyLWFuaW1hdGlvblxcXCJdLFxcXCJ0YXJnZXRcXFwiOlsxXSxcXFwic2hvd1xcXCI6WzRdLFxcXCJ0cmFuc2x1Y2VudFxcXCI6WzRdLFxcXCJ0eXBlXFxcIjpbMV0sXFxcInNpemVcXFwiOlsxXSxcXFwiY2xvc2VJY29uXFxcIjpbMSxcXFwiY2xvc2UtaWNvblxcXCJdfV0sWzI1NyxcXFwiaW9uLWZhYlxcXCIse1xcXCJob3Jpem9udGFsXFxcIjpbMV0sXFxcInZlcnRpY2FsXFxcIjpbMV0sXFxcImVkZ2VcXFwiOls0XSxcXFwiYWN0aXZhdGVkXFxcIjpbMTAyOF0sXFxcImNsb3NlXFxcIjpbNjRdLFxcXCJ0b2dnbGVcXFwiOls2NF19LG51bGwse1xcXCJhY3RpdmF0ZWRcXFwiOltcXFwiYWN0aXZhdGVkQ2hhbmdlZFxcXCJdfV0sWzI1NyxcXFwiaW9uLWZhYi1saXN0XFxcIix7XFxcImFjdGl2YXRlZFxcXCI6WzRdLFxcXCJzaWRlXFxcIjpbMV19LG51bGwse1xcXCJhY3RpdmF0ZWRcXFwiOltcXFwiYWN0aXZhdGVkQ2hhbmdlZFxcXCJdfV1dXSxbXFxcImlvbi1yZWZyZXNoZXJfMlxcXCIsW1syNTYsXFxcImlvbi1yZWZyZXNoZXItY29udGVudFxcXCIse1xcXCJwdWxsaW5nSWNvblxcXCI6WzEwMjUsXFxcInB1bGxpbmctaWNvblxcXCJdLFxcXCJwdWxsaW5nVGV4dFxcXCI6WzEsXFxcInB1bGxpbmctdGV4dFxcXCJdLFxcXCJyZWZyZXNoaW5nU3Bpbm5lclxcXCI6WzEwMjUsXFxcInJlZnJlc2hpbmctc3Bpbm5lclxcXCJdLFxcXCJyZWZyZXNoaW5nVGV4dFxcXCI6WzEsXFxcInJlZnJlc2hpbmctdGV4dFxcXCJdfV0sWzI4OCxcXFwiaW9uLXJlZnJlc2hlclxcXCIse1xcXCJwdWxsTWluXFxcIjpbMixcXFwicHVsbC1taW5cXFwiXSxcXFwicHVsbE1heFxcXCI6WzIsXFxcInB1bGwtbWF4XFxcIl0sXFxcImNsb3NlRHVyYXRpb25cXFwiOlsxLFxcXCJjbG9zZS1kdXJhdGlvblxcXCJdLFxcXCJzbmFwYmFja0R1cmF0aW9uXFxcIjpbMSxcXFwic25hcGJhY2stZHVyYXRpb25cXFwiXSxcXFwicHVsbEZhY3RvclxcXCI6WzIsXFxcInB1bGwtZmFjdG9yXFxcIl0sXFxcImRpc2FibGVkXFxcIjpbNF0sXFxcIm5hdGl2ZVJlZnJlc2hlclxcXCI6WzMyXSxcXFwic3RhdGVcXFwiOlszMl0sXFxcImNvbXBsZXRlXFxcIjpbNjRdLFxcXCJjYW5jZWxcXFwiOls2NF0sXFxcImdldFByb2dyZXNzXFxcIjpbNjRdfSxudWxsLHtcXFwiZGlzYWJsZWRcXFwiOltcXFwiZGlzYWJsZWRDaGFuZ2VkXFxcIl19XV1dLFtcXFwiaW9uLWJhY2stYnV0dG9uXFxcIixbWzI4OSxcXFwiaW9uLWJhY2stYnV0dG9uXFxcIix7XFxcImNvbG9yXFxcIjpbNTEzXSxcXFwiZGVmYXVsdEhyZWZcXFwiOlsxMDI1LFxcXCJkZWZhdWx0LWhyZWZcXFwiXSxcXFwiZGlzYWJsZWRcXFwiOls1MTZdLFxcXCJpY29uXFxcIjpbMV0sXFxcInRleHRcXFwiOlsxXSxcXFwidHlwZVxcXCI6WzFdLFxcXCJyb3V0ZXJBbmltYXRpb25cXFwiOlsxNixcXFwicm91dGVyLWFuaW1hdGlvblxcXCJdfV1dXSxbXFxcImlvbi10b2FzdFxcXCIsW1syODksXFxcImlvbi10b2FzdFxcXCIse1xcXCJvdmVybGF5SW5kZXhcXFwiOlsyLFxcXCJvdmVybGF5LWluZGV4XFxcIl0sXFxcImRlbGVnYXRlXFxcIjpbMTZdLFxcXCJoYXNDb250cm9sbGVyXFxcIjpbNCxcXFwiaGFzLWNvbnRyb2xsZXJcXFwiXSxcXFwiY29sb3JcXFwiOls1MTNdLFxcXCJlbnRlckFuaW1hdGlvblxcXCI6WzE2LFxcXCJlbnRlci1hbmltYXRpb25cXFwiXSxcXFwibGVhdmVBbmltYXRpb25cXFwiOlsxNixcXFwibGVhdmUtYW5pbWF0aW9uXFxcIl0sXFxcImNzc0NsYXNzXFxcIjpbMSxcXFwiY3NzLWNsYXNzXFxcIl0sXFxcImR1cmF0aW9uXFxcIjpbMl0sXFxcImhlYWRlclxcXCI6WzFdLFxcXCJsYXlvdXRcXFwiOlsxXSxcXFwibWVzc2FnZVxcXCI6WzFdLFxcXCJrZXlib2FyZENsb3NlXFxcIjpbNCxcXFwia2V5Ym9hcmQtY2xvc2VcXFwiXSxcXFwicG9zaXRpb25cXFwiOlsxXSxcXFwicG9zaXRpb25BbmNob3JcXFwiOlsxLFxcXCJwb3NpdGlvbi1hbmNob3JcXFwiXSxcXFwiYnV0dG9uc1xcXCI6WzE2XSxcXFwidHJhbnNsdWNlbnRcXFwiOls0XSxcXFwiYW5pbWF0ZWRcXFwiOls0XSxcXFwiaWNvblxcXCI6WzFdLFxcXCJodG1sQXR0cmlidXRlc1xcXCI6WzE2LFxcXCJodG1sLWF0dHJpYnV0ZXNcXFwiXSxcXFwic3dpcGVHZXN0dXJlXFxcIjpbMSxcXFwic3dpcGUtZ2VzdHVyZVxcXCJdLFxcXCJpc09wZW5cXFwiOls0LFxcXCJpcy1vcGVuXFxcIl0sXFxcInRyaWdnZXJcXFwiOlsxXSxcXFwicmV2ZWFsQ29udGVudFRvU2NyZWVuUmVhZGVyXFxcIjpbMzJdLFxcXCJwcmVzZW50XFxcIjpbNjRdLFxcXCJkaXNtaXNzXFxcIjpbNjRdLFxcXCJvbkRpZERpc21pc3NcXFwiOls2NF0sXFxcIm9uV2lsbERpc21pc3NcXFwiOls2NF19LG51bGwse1xcXCJzd2lwZUdlc3R1cmVcXFwiOltcXFwic3dpcGVHZXN0dXJlQ2hhbmdlZFxcXCJdLFxcXCJpc09wZW5cXFwiOltcXFwib25Jc09wZW5DaGFuZ2VcXFwiXSxcXFwidHJpZ2dlclxcXCI6W1xcXCJ0cmlnZ2VyQ2hhbmdlZFxcXCJdfV1dXSxbXFxcImlvbi1jYXJkXzVcXFwiLFtbMjg5LFxcXCJpb24tY2FyZFxcXCIse1xcXCJjb2xvclxcXCI6WzUxM10sXFxcImJ1dHRvblxcXCI6WzRdLFxcXCJ0eXBlXFxcIjpbMV0sXFxcImRpc2FibGVkXFxcIjpbNF0sXFxcImRvd25sb2FkXFxcIjpbMV0sXFxcImhyZWZcXFwiOlsxXSxcXFwicmVsXFxcIjpbMV0sXFxcInJvdXRlckRpcmVjdGlvblxcXCI6WzEsXFxcInJvdXRlci1kaXJlY3Rpb25cXFwiXSxcXFwicm91dGVyQW5pbWF0aW9uXFxcIjpbMTYsXFxcInJvdXRlci1hbmltYXRpb25cXFwiXSxcXFwidGFyZ2V0XFxcIjpbMV19XSxbMjg4LFxcXCJpb24tY2FyZC1jb250ZW50XFxcIl0sWzI4OSxcXFwiaW9uLWNhcmQtaGVhZGVyXFxcIix7XFxcImNvbG9yXFxcIjpbNTEzXSxcXFwidHJhbnNsdWNlbnRcXFwiOls0XX1dLFsyODksXFxcImlvbi1jYXJkLXN1YnRpdGxlXFxcIix7XFxcImNvbG9yXFxcIjpbNTEzXX1dLFsyODksXFxcImlvbi1jYXJkLXRpdGxlXFxcIix7XFxcImNvbG9yXFxcIjpbNTEzXX1dXV0sW1xcXCJpb24taXRlbS1vcHRpb25fM1xcXCIsW1syODksXFxcImlvbi1pdGVtLW9wdGlvblxcXCIse1xcXCJjb2xvclxcXCI6WzUxM10sXFxcImRpc2FibGVkXFxcIjpbNF0sXFxcImRvd25sb2FkXFxcIjpbMV0sXFxcImV4cGFuZGFibGVcXFwiOls0XSxcXFwiaHJlZlxcXCI6WzFdLFxcXCJyZWxcXFwiOlsxXSxcXFwidGFyZ2V0XFxcIjpbMV0sXFxcInR5cGVcXFwiOlsxXX1dLFsyODgsXFxcImlvbi1pdGVtLW9wdGlvbnNcXFwiLHtcXFwic2lkZVxcXCI6WzFdLFxcXCJmaXJlU3dpcGVFdmVudFxcXCI6WzY0XX1dLFsyNTYsXFxcImlvbi1pdGVtLXNsaWRpbmdcXFwiLHtcXFwiZGlzYWJsZWRcXFwiOls0XSxcXFwic3RhdGVcXFwiOlszMl0sXFxcImdldE9wZW5BbW91bnRcXFwiOls2NF0sXFxcImdldFNsaWRpbmdSYXRpb1xcXCI6WzY0XSxcXFwib3BlblxcXCI6WzY0XSxcXFwiY2xvc2VcXFwiOls2NF0sXFxcImNsb3NlT3BlbmVkXFxcIjpbNjRdfSxudWxsLHtcXFwiZGlzYWJsZWRcXFwiOltcXFwiZGlzYWJsZWRDaGFuZ2VkXFxcIl19XV1dLFtcXFwiaW9uLWFjY29yZGlvbl8yXFxcIixbWzMwNSxcXFwiaW9uLWFjY29yZGlvblxcXCIse1xcXCJ2YWx1ZVxcXCI6WzFdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJyZWFkb25seVxcXCI6WzRdLFxcXCJ0b2dnbGVJY29uXFxcIjpbMSxcXFwidG9nZ2xlLWljb25cXFwiXSxcXFwidG9nZ2xlSWNvblNsb3RcXFwiOlsxLFxcXCJ0b2dnbGUtaWNvbi1zbG90XFxcIl0sXFxcInN0YXRlXFxcIjpbMzJdLFxcXCJpc05leHRcXFwiOlszMl0sXFxcImlzUHJldmlvdXNcXFwiOlszMl19LG51bGwse1xcXCJ2YWx1ZVxcXCI6W1xcXCJ2YWx1ZUNoYW5nZWRcXFwiXX1dLFsyODksXFxcImlvbi1hY2NvcmRpb24tZ3JvdXBcXFwiLHtcXFwiYW5pbWF0ZWRcXFwiOls0XSxcXFwibXVsdGlwbGVcXFwiOls0XSxcXFwidmFsdWVcXFwiOlsxMDI1XSxcXFwiZGlzYWJsZWRcXFwiOls0XSxcXFwicmVhZG9ubHlcXFwiOls0XSxcXFwiZXhwYW5kXFxcIjpbMV0sXFxcInJlcXVlc3RBY2NvcmRpb25Ub2dnbGVcXFwiOls2NF0sXFxcImdldEFjY29yZGlvbnNcXFwiOls2NF19LFtbMCxcXFwia2V5ZG93blxcXCIsXFxcIm9uS2V5ZG93blxcXCJdXSx7XFxcInZhbHVlXFxcIjpbXFxcInZhbHVlQ2hhbmdlZFxcXCJdLFxcXCJkaXNhYmxlZFxcXCI6W1xcXCJkaXNhYmxlZENoYW5nZWRcXFwiXSxcXFwicmVhZG9ubHlcXFwiOltcXFwicmVhZG9ubHlDaGFuZ2VkXFxcIl19XV1dLFtcXFwiaW9uLWluZmluaXRlLXNjcm9sbF8yXFxcIixbWzI4OCxcXFwiaW9uLWluZmluaXRlLXNjcm9sbC1jb250ZW50XFxcIix7XFxcImxvYWRpbmdTcGlubmVyXFxcIjpbMTAyNSxcXFwibG9hZGluZy1zcGlubmVyXFxcIl0sXFxcImxvYWRpbmdUZXh0XFxcIjpbMSxcXFwibG9hZGluZy10ZXh0XFxcIl19XSxbMjU2LFxcXCJpb24taW5maW5pdGUtc2Nyb2xsXFxcIix7XFxcInRocmVzaG9sZFxcXCI6WzFdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJwb3NpdGlvblxcXCI6WzFdLFxcXCJpc0xvYWRpbmdcXFwiOlszMl0sXFxcImNvbXBsZXRlXFxcIjpbNjRdfSxudWxsLHtcXFwidGhyZXNob2xkXFxcIjpbXFxcInRocmVzaG9sZENoYW5nZWRcXFwiXSxcXFwiZGlzYWJsZWRcXFwiOltcXFwiZGlzYWJsZWRDaGFuZ2VkXFxcIl19XV1dLFtcXFwiaW9uLXJlb3JkZXJfMlxcXCIsW1syODksXFxcImlvbi1yZW9yZGVyXFxcIixudWxsLFtbMixcXFwiY2xpY2tcXFwiLFxcXCJvbkNsaWNrXFxcIl1dXSxbMjU2LFxcXCJpb24tcmVvcmRlci1ncm91cFxcXCIse1xcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJzdGF0ZVxcXCI6WzMyXSxcXFwiY29tcGxldGVcXFwiOls2NF19LG51bGwse1xcXCJkaXNhYmxlZFxcXCI6W1xcXCJkaXNhYmxlZENoYW5nZWRcXFwiXX1dXV0sW1xcXCJpb24tc2VnbWVudF8yXFxcIixbWzI4OSxcXFwiaW9uLXNlZ21lbnQtYnV0dG9uXFxcIix7XFxcImNvbnRlbnRJZFxcXCI6WzUxMyxcXFwiY29udGVudC1pZFxcXCJdLFxcXCJkaXNhYmxlZFxcXCI6WzEwMjhdLFxcXCJsYXlvdXRcXFwiOlsxXSxcXFwidHlwZVxcXCI6WzFdLFxcXCJ2YWx1ZVxcXCI6WzhdLFxcXCJjaGVja2VkXFxcIjpbMzJdLFxcXCJzZXRGb2N1c1xcXCI6WzY0XX0sbnVsbCx7XFxcInZhbHVlXFxcIjpbXFxcInZhbHVlQ2hhbmdlZFxcXCJdfV0sWzI4OSxcXFwiaW9uLXNlZ21lbnRcXFwiLHtcXFwiY29sb3JcXFwiOls1MTNdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJzY3JvbGxhYmxlXFxcIjpbNF0sXFxcInN3aXBlR2VzdHVyZVxcXCI6WzQsXFxcInN3aXBlLWdlc3R1cmVcXFwiXSxcXFwidmFsdWVcXFwiOlsxMDMyXSxcXFwic2VsZWN0T25Gb2N1c1xcXCI6WzQsXFxcInNlbGVjdC1vbi1mb2N1c1xcXCJdLFxcXCJhY3RpdmF0ZWRcXFwiOlszMl19LFtbMTYsXFxcImlvblNlZ21lbnRWaWV3U2Nyb2xsXFxcIixcXFwiaGFuZGxlU2VnbWVudFZpZXdTY3JvbGxcXFwiXSxbMCxcXFwia2V5ZG93blxcXCIsXFxcIm9uS2V5RG93blxcXCJdXSx7XFxcImNvbG9yXFxcIjpbXFxcImNvbG9yQ2hhbmdlZFxcXCJdLFxcXCJzd2lwZUdlc3R1cmVcXFwiOltcXFwic3dpcGVHZXN0dXJlQ2hhbmdlZFxcXCJdLFxcXCJ2YWx1ZVxcXCI6W1xcXCJ2YWx1ZUNoYW5nZWRcXFwiXSxcXFwiZGlzYWJsZWRcXFwiOltcXFwiZGlzYWJsZWRDaGFuZ2VkXFxcIl19XV1dLFtcXFwiaW9uLWNoaXBcXFwiLFtbMjg5LFxcXCJpb24tY2hpcFxcXCIse1xcXCJjb2xvclxcXCI6WzUxM10sXFxcIm91dGxpbmVcXFwiOls0XSxcXFwiZGlzYWJsZWRcXFwiOls0XX1dXV0sW1xcXCJpb24taW5wdXRcXFwiLFtbMjk0LFxcXCJpb24taW5wdXRcXFwiLHtcXFwiY29sb3JcXFwiOls1MTNdLFxcXCJhdXRvY2FwaXRhbGl6ZVxcXCI6WzFdLFxcXCJhdXRvY29tcGxldGVcXFwiOlsxXSxcXFwiYXV0b2NvcnJlY3RcXFwiOlsxXSxcXFwiYXV0b2ZvY3VzXFxcIjpbNF0sXFxcImNsZWFySW5wdXRcXFwiOls0LFxcXCJjbGVhci1pbnB1dFxcXCJdLFxcXCJjbGVhcklucHV0SWNvblxcXCI6WzEsXFxcImNsZWFyLWlucHV0LWljb25cXFwiXSxcXFwiY2xlYXJPbkVkaXRcXFwiOls0LFxcXCJjbGVhci1vbi1lZGl0XFxcIl0sXFxcImNvdW50ZXJcXFwiOls0XSxcXFwiY291bnRlckZvcm1hdHRlclxcXCI6WzE2LFxcXCJjb3VudGVyLWZvcm1hdHRlclxcXCJdLFxcXCJkZWJvdW5jZVxcXCI6WzJdLFxcXCJkaXNhYmxlZFxcXCI6WzUxNl0sXFxcImVudGVya2V5aGludFxcXCI6WzFdLFxcXCJlcnJvclRleHRcXFwiOlsxLFxcXCJlcnJvci10ZXh0XFxcIl0sXFxcImZpbGxcXFwiOlsxXSxcXFwiaW5wdXRtb2RlXFxcIjpbMV0sXFxcImhlbHBlclRleHRcXFwiOlsxLFxcXCJoZWxwZXItdGV4dFxcXCJdLFxcXCJsYWJlbFxcXCI6WzFdLFxcXCJsYWJlbFBsYWNlbWVudFxcXCI6WzEsXFxcImxhYmVsLXBsYWNlbWVudFxcXCJdLFxcXCJtYXhcXFwiOls4XSxcXFwibWF4bGVuZ3RoXFxcIjpbMl0sXFxcIm1pblxcXCI6WzhdLFxcXCJtaW5sZW5ndGhcXFwiOlsyXSxcXFwibXVsdGlwbGVcXFwiOls0XSxcXFwibmFtZVxcXCI6WzFdLFxcXCJwYXR0ZXJuXFxcIjpbMV0sXFxcInBsYWNlaG9sZGVyXFxcIjpbMV0sXFxcInJlYWRvbmx5XFxcIjpbNTE2XSxcXFwicmVxdWlyZWRcXFwiOls0XSxcXFwic2hhcGVcXFwiOlsxXSxcXFwic3BlbGxjaGVja1xcXCI6WzRdLFxcXCJzdGVwXFxcIjpbMV0sXFxcInR5cGVcXFwiOlsxXSxcXFwidmFsdWVcXFwiOlsxMDMyXSxcXFwiaGFzRm9jdXNcXFwiOlszMl0sXFxcInNldEZvY3VzXFxcIjpbNjRdLFxcXCJnZXRJbnB1dEVsZW1lbnRcXFwiOls2NF19LFtbMixcXFwiY2xpY2tcXFwiLFxcXCJvbkNsaWNrQ2FwdHVyZVxcXCJdXSx7XFxcImRlYm91bmNlXFxcIjpbXFxcImRlYm91bmNlQ2hhbmdlZFxcXCJdLFxcXCJ0eXBlXFxcIjpbXFxcIm9uVHlwZUNoYW5nZVxcXCJdLFxcXCJ2YWx1ZVxcXCI6W1xcXCJ2YWx1ZUNoYW5nZWRcXFwiXSxcXFwiZGlyXFxcIjpbXFxcIm9uRGlyQ2hhbmdlZFxcXCJdfV1dXSxbXFxcImlvbi1zZWFyY2hiYXJcXFwiLFtbMjkwLFxcXCJpb24tc2VhcmNoYmFyXFxcIix7XFxcImNvbG9yXFxcIjpbNTEzXSxcXFwiYW5pbWF0ZWRcXFwiOls0XSxcXFwiYXV0b2NhcGl0YWxpemVcXFwiOlsxXSxcXFwiYXV0b2NvbXBsZXRlXFxcIjpbMV0sXFxcImF1dG9jb3JyZWN0XFxcIjpbMV0sXFxcImNhbmNlbEJ1dHRvbkljb25cXFwiOlsxLFxcXCJjYW5jZWwtYnV0dG9uLWljb25cXFwiXSxcXFwiY2FuY2VsQnV0dG9uVGV4dFxcXCI6WzEsXFxcImNhbmNlbC1idXR0b24tdGV4dFxcXCJdLFxcXCJjbGVhckljb25cXFwiOlsxLFxcXCJjbGVhci1pY29uXFxcIl0sXFxcImRlYm91bmNlXFxcIjpbMl0sXFxcImRpc2FibGVkXFxcIjpbNF0sXFxcImlucHV0bW9kZVxcXCI6WzFdLFxcXCJlbnRlcmtleWhpbnRcXFwiOlsxXSxcXFwibWF4bGVuZ3RoXFxcIjpbMl0sXFxcIm1pbmxlbmd0aFxcXCI6WzJdLFxcXCJuYW1lXFxcIjpbMV0sXFxcInBsYWNlaG9sZGVyXFxcIjpbMV0sXFxcInNlYXJjaEljb25cXFwiOlsxLFxcXCJzZWFyY2gtaWNvblxcXCJdLFxcXCJzaG93Q2FuY2VsQnV0dG9uXFxcIjpbMSxcXFwic2hvdy1jYW5jZWwtYnV0dG9uXFxcIl0sXFxcInNob3dDbGVhckJ1dHRvblxcXCI6WzEsXFxcInNob3ctY2xlYXItYnV0dG9uXFxcIl0sXFxcInNwZWxsY2hlY2tcXFwiOls0XSxcXFwidHlwZVxcXCI6WzFdLFxcXCJ2YWx1ZVxcXCI6WzEwMjVdLFxcXCJmb2N1c2VkXFxcIjpbMzJdLFxcXCJub0FuaW1hdGVcXFwiOlszMl0sXFxcInNldEZvY3VzXFxcIjpbNjRdLFxcXCJnZXRJbnB1dEVsZW1lbnRcXFwiOls2NF19LG51bGwse1xcXCJsYW5nXFxcIjpbXFxcIm9uTGFuZ0NoYW5nZWRcXFwiXSxcXFwiZGlyXFxcIjpbXFxcIm9uRGlyQ2hhbmdlZFxcXCJdLFxcXCJkZWJvdW5jZVxcXCI6W1xcXCJkZWJvdW5jZUNoYW5nZWRcXFwiXSxcXFwidmFsdWVcXFwiOltcXFwidmFsdWVDaGFuZ2VkXFxcIl0sXFxcInNob3dDYW5jZWxCdXR0b25cXFwiOltcXFwic2hvd0NhbmNlbEJ1dHRvbkNoYW5nZWRcXFwiXX1dXV0sW1xcXCJpb24tdG9nZ2xlXFxcIixbWzI4OSxcXFwiaW9uLXRvZ2dsZVxcXCIse1xcXCJjb2xvclxcXCI6WzUxM10sXFxcIm5hbWVcXFwiOlsxXSxcXFwiY2hlY2tlZFxcXCI6WzEwMjhdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJlcnJvclRleHRcXFwiOlsxLFxcXCJlcnJvci10ZXh0XFxcIl0sXFxcImhlbHBlclRleHRcXFwiOlsxLFxcXCJoZWxwZXItdGV4dFxcXCJdLFxcXCJ2YWx1ZVxcXCI6WzFdLFxcXCJlbmFibGVPbk9mZkxhYmVsc1xcXCI6WzQsXFxcImVuYWJsZS1vbi1vZmYtbGFiZWxzXFxcIl0sXFxcImxhYmVsUGxhY2VtZW50XFxcIjpbMSxcXFwibGFiZWwtcGxhY2VtZW50XFxcIl0sXFxcImp1c3RpZnlcXFwiOlsxXSxcXFwiYWxpZ25tZW50XFxcIjpbMV0sXFxcInJlcXVpcmVkXFxcIjpbNF0sXFxcImFjdGl2YXRlZFxcXCI6WzMyXX0sbnVsbCx7XFxcImRpc2FibGVkXFxcIjpbXFxcImRpc2FibGVkQ2hhbmdlZFxcXCJdfV1dXSxbXFxcImlvbi1uYXZfMlxcXCIsW1syNTcsXFxcImlvbi1uYXZcXFwiLHtcXFwiZGVsZWdhdGVcXFwiOlsxNl0sXFxcInN3aXBlR2VzdHVyZVxcXCI6WzEwMjgsXFxcInN3aXBlLWdlc3R1cmVcXFwiXSxcXFwiYW5pbWF0ZWRcXFwiOls0XSxcXFwiYW5pbWF0aW9uXFxcIjpbMTZdLFxcXCJyb290UGFyYW1zXFxcIjpbMTYsXFxcInJvb3QtcGFyYW1zXFxcIl0sXFxcInJvb3RcXFwiOlsxXSxcXFwicHVzaFxcXCI6WzY0XSxcXFwiaW5zZXJ0XFxcIjpbNjRdLFxcXCJpbnNlcnRQYWdlc1xcXCI6WzY0XSxcXFwicG9wXFxcIjpbNjRdLFxcXCJwb3BUb1xcXCI6WzY0XSxcXFwicG9wVG9Sb290XFxcIjpbNjRdLFxcXCJyZW1vdmVJbmRleFxcXCI6WzY0XSxcXFwic2V0Um9vdFxcXCI6WzY0XSxcXFwic2V0UGFnZXNcXFwiOls2NF0sXFxcInNldFJvdXRlSWRcXFwiOls2NF0sXFxcImdldFJvdXRlSWRcXFwiOls2NF0sXFxcImdldEFjdGl2ZVxcXCI6WzY0XSxcXFwiZ2V0QnlJbmRleFxcXCI6WzY0XSxcXFwiY2FuR29CYWNrXFxcIjpbNjRdLFxcXCJnZXRQcmV2aW91c1xcXCI6WzY0XSxcXFwiZ2V0TGVuZ3RoXFxcIjpbNjRdfSxudWxsLHtcXFwic3dpcGVHZXN0dXJlXFxcIjpbXFxcInN3aXBlR2VzdHVyZUNoYW5nZWRcXFwiXSxcXFwicm9vdFxcXCI6W1xcXCJyb290Q2hhbmdlZFxcXCJdfV0sWzI1NixcXFwiaW9uLW5hdi1saW5rXFxcIix7XFxcImNvbXBvbmVudFxcXCI6WzFdLFxcXCJjb21wb25lbnRQcm9wc1xcXCI6WzE2LFxcXCJjb21wb25lbnQtcHJvcHNcXFwiXSxcXFwicm91dGVyRGlyZWN0aW9uXFxcIjpbMSxcXFwicm91dGVyLWRpcmVjdGlvblxcXCJdLFxcXCJyb3V0ZXJBbmltYXRpb25cXFwiOlsxNixcXFwicm91dGVyLWFuaW1hdGlvblxcXCJdfV1dXSxbXFxcImlvbi10YWJfMlxcXCIsW1syNTcsXFxcImlvbi10YWJcXFwiLHtcXFwiYWN0aXZlXFxcIjpbMTAyOF0sXFxcImRlbGVnYXRlXFxcIjpbMTZdLFxcXCJ0YWJcXFwiOlsxXSxcXFwiY29tcG9uZW50XFxcIjpbMV0sXFxcInNldEFjdGl2ZVxcXCI6WzY0XX0sbnVsbCx7XFxcImFjdGl2ZVxcXCI6W1xcXCJjaGFuZ2VBY3RpdmVcXFwiXX1dLFsyNTcsXFxcImlvbi10YWJzXFxcIix7XFxcInVzZVJvdXRlclxcXCI6WzEwMjgsXFxcInVzZS1yb3V0ZXJcXFwiXSxcXFwic2VsZWN0ZWRUYWJcXFwiOlszMl0sXFxcInNlbGVjdFxcXCI6WzY0XSxcXFwiZ2V0VGFiXFxcIjpbNjRdLFxcXCJnZXRTZWxlY3RlZFxcXCI6WzY0XSxcXFwic2V0Um91dGVJZFxcXCI6WzY0XSxcXFwiZ2V0Um91dGVJZFxcXCI6WzY0XX1dXV0sW1xcXCJpb24tdGV4dGFyZWFcXFwiLFtbMjk0LFxcXCJpb24tdGV4dGFyZWFcXFwiLHtcXFwiY29sb3JcXFwiOls1MTNdLFxcXCJhdXRvY2FwaXRhbGl6ZVxcXCI6WzFdLFxcXCJhdXRvZm9jdXNcXFwiOls0XSxcXFwiY2xlYXJPbkVkaXRcXFwiOls0LFxcXCJjbGVhci1vbi1lZGl0XFxcIl0sXFxcImRlYm91bmNlXFxcIjpbMl0sXFxcImRpc2FibGVkXFxcIjpbNF0sXFxcImZpbGxcXFwiOlsxXSxcXFwiaW5wdXRtb2RlXFxcIjpbMV0sXFxcImVudGVya2V5aGludFxcXCI6WzFdLFxcXCJtYXhsZW5ndGhcXFwiOlsyXSxcXFwibWlubGVuZ3RoXFxcIjpbMl0sXFxcIm5hbWVcXFwiOlsxXSxcXFwicGxhY2Vob2xkZXJcXFwiOlsxXSxcXFwicmVhZG9ubHlcXFwiOls0XSxcXFwicmVxdWlyZWRcXFwiOls0XSxcXFwic3BlbGxjaGVja1xcXCI6WzRdLFxcXCJjb2xzXFxcIjpbNTE0XSxcXFwicm93c1xcXCI6WzJdLFxcXCJ3cmFwXFxcIjpbMV0sXFxcImF1dG9Hcm93XFxcIjpbNTE2LFxcXCJhdXRvLWdyb3dcXFwiXSxcXFwidmFsdWVcXFwiOlsxMDI1XSxcXFwiY291bnRlclxcXCI6WzRdLFxcXCJjb3VudGVyRm9ybWF0dGVyXFxcIjpbMTYsXFxcImNvdW50ZXItZm9ybWF0dGVyXFxcIl0sXFxcImVycm9yVGV4dFxcXCI6WzEsXFxcImVycm9yLXRleHRcXFwiXSxcXFwiaGVscGVyVGV4dFxcXCI6WzEsXFxcImhlbHBlci10ZXh0XFxcIl0sXFxcImxhYmVsXFxcIjpbMV0sXFxcImxhYmVsUGxhY2VtZW50XFxcIjpbMSxcXFwibGFiZWwtcGxhY2VtZW50XFxcIl0sXFxcInNoYXBlXFxcIjpbMV0sXFxcImhhc0ZvY3VzXFxcIjpbMzJdLFxcXCJzZXRGb2N1c1xcXCI6WzY0XSxcXFwiZ2V0SW5wdXRFbGVtZW50XFxcIjpbNjRdfSxbWzIsXFxcImNsaWNrXFxcIixcXFwib25DbGlja0NhcHR1cmVcXFwiXV0se1xcXCJkZWJvdW5jZVxcXCI6W1xcXCJkZWJvdW5jZUNoYW5nZWRcXFwiXSxcXFwidmFsdWVcXFwiOltcXFwidmFsdWVDaGFuZ2VkXFxcIl0sXFxcImRpclxcXCI6W1xcXCJvbkRpckNoYW5nZWRcXFwiXX1dXV0sW1xcXCJpb24tYmFja2Ryb3BcXFwiLFtbMjg5LFxcXCJpb24tYmFja2Ryb3BcXFwiLHtcXFwidmlzaWJsZVxcXCI6WzRdLFxcXCJ0YXBwYWJsZVxcXCI6WzRdLFxcXCJzdG9wUHJvcGFnYXRpb25cXFwiOls0LFxcXCJzdG9wLXByb3BhZ2F0aW9uXFxcIl19LFtbMixcXFwiY2xpY2tcXFwiLFxcXCJvbk1vdXNlRG93blxcXCJdXV1dXSxbXFxcImlvbi1sb2FkaW5nXFxcIixbWzI5MCxcXFwiaW9uLWxvYWRpbmdcXFwiLHtcXFwib3ZlcmxheUluZGV4XFxcIjpbMixcXFwib3ZlcmxheS1pbmRleFxcXCJdLFxcXCJkZWxlZ2F0ZVxcXCI6WzE2XSxcXFwiaGFzQ29udHJvbGxlclxcXCI6WzQsXFxcImhhcy1jb250cm9sbGVyXFxcIl0sXFxcImtleWJvYXJkQ2xvc2VcXFwiOls0LFxcXCJrZXlib2FyZC1jbG9zZVxcXCJdLFxcXCJlbnRlckFuaW1hdGlvblxcXCI6WzE2LFxcXCJlbnRlci1hbmltYXRpb25cXFwiXSxcXFwibGVhdmVBbmltYXRpb25cXFwiOlsxNixcXFwibGVhdmUtYW5pbWF0aW9uXFxcIl0sXFxcIm1lc3NhZ2VcXFwiOlsxXSxcXFwiY3NzQ2xhc3NcXFwiOlsxLFxcXCJjc3MtY2xhc3NcXFwiXSxcXFwiZHVyYXRpb25cXFwiOlsyXSxcXFwiYmFja2Ryb3BEaXNtaXNzXFxcIjpbNCxcXFwiYmFja2Ryb3AtZGlzbWlzc1xcXCJdLFxcXCJzaG93QmFja2Ryb3BcXFwiOls0LFxcXCJzaG93LWJhY2tkcm9wXFxcIl0sXFxcInNwaW5uZXJcXFwiOlsxMDI1XSxcXFwidHJhbnNsdWNlbnRcXFwiOls0XSxcXFwiYW5pbWF0ZWRcXFwiOls0XSxcXFwiaHRtbEF0dHJpYnV0ZXNcXFwiOlsxNixcXFwiaHRtbC1hdHRyaWJ1dGVzXFxcIl0sXFxcImlzT3BlblxcXCI6WzQsXFxcImlzLW9wZW5cXFwiXSxcXFwidHJpZ2dlclxcXCI6WzFdLFxcXCJwcmVzZW50XFxcIjpbNjRdLFxcXCJkaXNtaXNzXFxcIjpbNjRdLFxcXCJvbkRpZERpc21pc3NcXFwiOls2NF0sXFxcIm9uV2lsbERpc21pc3NcXFwiOls2NF19LG51bGwse1xcXCJpc09wZW5cXFwiOltcXFwib25Jc09wZW5DaGFuZ2VcXFwiXSxcXFwidHJpZ2dlclxcXCI6W1xcXCJ0cmlnZ2VyQ2hhbmdlZFxcXCJdfV1dXSxbXFxcImlvbi1icmVhZGNydW1iXzJcXFwiLFtbMjg5LFxcXCJpb24tYnJlYWRjcnVtYlxcXCIse1xcXCJjb2xsYXBzZWRcXFwiOls0XSxcXFwibGFzdFxcXCI6WzRdLFxcXCJzaG93Q29sbGFwc2VkSW5kaWNhdG9yXFxcIjpbNCxcXFwic2hvdy1jb2xsYXBzZWQtaW5kaWNhdG9yXFxcIl0sXFxcImNvbG9yXFxcIjpbMV0sXFxcImFjdGl2ZVxcXCI6WzRdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJkb3dubG9hZFxcXCI6WzFdLFxcXCJocmVmXFxcIjpbMV0sXFxcInJlbFxcXCI6WzFdLFxcXCJzZXBhcmF0b3JcXFwiOls0XSxcXFwidGFyZ2V0XFxcIjpbMV0sXFxcInJvdXRlckRpcmVjdGlvblxcXCI6WzEsXFxcInJvdXRlci1kaXJlY3Rpb25cXFwiXSxcXFwicm91dGVyQW5pbWF0aW9uXFxcIjpbMTYsXFxcInJvdXRlci1hbmltYXRpb25cXFwiXX1dLFsyODksXFxcImlvbi1icmVhZGNydW1ic1xcXCIse1xcXCJjb2xvclxcXCI6WzUxM10sXFxcIm1heEl0ZW1zXFxcIjpbMixcXFwibWF4LWl0ZW1zXFxcIl0sXFxcIml0ZW1zQmVmb3JlQ29sbGFwc2VcXFwiOlsyLFxcXCJpdGVtcy1iZWZvcmUtY29sbGFwc2VcXFwiXSxcXFwiaXRlbXNBZnRlckNvbGxhcHNlXFxcIjpbMixcXFwiaXRlbXMtYWZ0ZXItY29sbGFwc2VcXFwiXSxcXFwiY29sbGFwc2VkXFxcIjpbMzJdLFxcXCJhY3RpdmVDaGFuZ2VkXFxcIjpbMzJdfSxbWzAsXFxcImNvbGxhcHNlZENsaWNrXFxcIixcXFwib25Db2xsYXBzZWRDbGlja1xcXCJdXSx7XFxcIm1heEl0ZW1zXFxcIjpbXFxcIm1heEl0ZW1zQ2hhbmdlZFxcXCJdLFxcXCJpdGVtc0JlZm9yZUNvbGxhcHNlXFxcIjpbXFxcIm1heEl0ZW1zQ2hhbmdlZFxcXCJdLFxcXCJpdGVtc0FmdGVyQ29sbGFwc2VcXFwiOltcXFwibWF4SXRlbXNDaGFuZ2VkXFxcIl19XV1dLFtcXFwiaW9uLXRhYi1iYXJfMlxcXCIsW1syODksXFxcImlvbi10YWItYnV0dG9uXFxcIix7XFxcImRpc2FibGVkXFxcIjpbNF0sXFxcImRvd25sb2FkXFxcIjpbMV0sXFxcImhyZWZcXFwiOlsxXSxcXFwicmVsXFxcIjpbMV0sXFxcImxheW91dFxcXCI6WzEwMjVdLFxcXCJzZWxlY3RlZFxcXCI6WzEwMjhdLFxcXCJ0YWJcXFwiOlsxXSxcXFwidGFyZ2V0XFxcIjpbMV19LFtbOCxcXFwiaW9uVGFiQmFyQ2hhbmdlZFxcXCIsXFxcIm9uVGFiQmFyQ2hhbmdlZFxcXCJdXV0sWzI4OSxcXFwiaW9uLXRhYi1iYXJcXFwiLHtcXFwiY29sb3JcXFwiOls1MTNdLFxcXCJzZWxlY3RlZFRhYlxcXCI6WzEsXFxcInNlbGVjdGVkLXRhYlxcXCJdLFxcXCJ0cmFuc2x1Y2VudFxcXCI6WzRdLFxcXCJrZXlib2FyZFZpc2libGVcXFwiOlszMl19LG51bGwse1xcXCJzZWxlY3RlZFRhYlxcXCI6W1xcXCJzZWxlY3RlZFRhYkNoYW5nZWRcXFwiXX1dXV0sW1xcXCJpb24tZGF0ZXRpbWUtYnV0dG9uXFxcIixbWzI4OSxcXFwiaW9uLWRhdGV0aW1lLWJ1dHRvblxcXCIse1xcXCJjb2xvclxcXCI6WzUxM10sXFxcImRpc2FibGVkXFxcIjpbNTE2XSxcXFwiZGF0ZXRpbWVcXFwiOlsxXSxcXFwiZGF0ZXRpbWVQcmVzZW50YXRpb25cXFwiOlszMl0sXFxcImRhdGVUZXh0XFxcIjpbMzJdLFxcXCJ0aW1lVGV4dFxcXCI6WzMyXSxcXFwiZGF0ZXRpbWVBY3RpdmVcXFwiOlszMl0sXFxcInNlbGVjdGVkQnV0dG9uXFxcIjpbMzJdfV1dXSxbXFxcImlvbi1yb3V0ZV80XFxcIixbWzAsXFxcImlvbi1yb3V0ZVxcXCIse1xcXCJ1cmxcXFwiOlsxXSxcXFwiY29tcG9uZW50XFxcIjpbMV0sXFxcImNvbXBvbmVudFByb3BzXFxcIjpbMTYsXFxcImNvbXBvbmVudC1wcm9wc1xcXCJdLFxcXCJiZWZvcmVMZWF2ZVxcXCI6WzE2LFxcXCJiZWZvcmUtbGVhdmVcXFwiXSxcXFwiYmVmb3JlRW50ZXJcXFwiOlsxNixcXFwiYmVmb3JlLWVudGVyXFxcIl19LG51bGwse1xcXCJ1cmxcXFwiOltcXFwib25VcGRhdGVcXFwiXSxcXFwiY29tcG9uZW50XFxcIjpbXFxcIm9uVXBkYXRlXFxcIl0sXFxcImNvbXBvbmVudFByb3BzXFxcIjpbXFxcIm9uQ29tcG9uZW50UHJvcHNcXFwiXX1dLFswLFxcXCJpb24tcm91dGUtcmVkaXJlY3RcXFwiLHtcXFwiZnJvbVxcXCI6WzFdLFxcXCJ0b1xcXCI6WzFdfSxudWxsLHtcXFwiZnJvbVxcXCI6W1xcXCJwcm9wRGlkQ2hhbmdlXFxcIl0sXFxcInRvXFxcIjpbXFxcInByb3BEaWRDaGFuZ2VcXFwiXX1dLFswLFxcXCJpb24tcm91dGVyXFxcIix7XFxcInJvb3RcXFwiOlsxXSxcXFwidXNlSGFzaFxcXCI6WzQsXFxcInVzZS1oYXNoXFxcIl0sXFxcImNhblRyYW5zaXRpb25cXFwiOls2NF0sXFxcInB1c2hcXFwiOls2NF0sXFxcImJhY2tcXFwiOls2NF0sXFxcInByaW50RGVidWdcXFwiOls2NF0sXFxcIm5hdkNoYW5nZWRcXFwiOls2NF19LFtbOCxcXFwicG9wc3RhdGVcXFwiLFxcXCJvblBvcFN0YXRlXFxcIl0sWzQsXFxcImlvbkJhY2tCdXR0b25cXFwiLFxcXCJvbkJhY2tCdXR0b25cXFwiXV1dLFsyNTcsXFxcImlvbi1yb3V0ZXItbGlua1xcXCIse1xcXCJjb2xvclxcXCI6WzUxM10sXFxcImhyZWZcXFwiOlsxXSxcXFwicmVsXFxcIjpbMV0sXFxcInJvdXRlckRpcmVjdGlvblxcXCI6WzEsXFxcInJvdXRlci1kaXJlY3Rpb25cXFwiXSxcXFwicm91dGVyQW5pbWF0aW9uXFxcIjpbMTYsXFxcInJvdXRlci1hbmltYXRpb25cXFwiXSxcXFwidGFyZ2V0XFxcIjpbMV19XV1dLFtcXFwiaW9uLWF2YXRhcl8zXFxcIixbWzI4OSxcXFwiaW9uLWF2YXRhclxcXCJdLFsyODksXFxcImlvbi1iYWRnZVxcXCIse1xcXCJjb2xvclxcXCI6WzUxM119XSxbMjU3LFxcXCJpb24tdGh1bWJuYWlsXFxcIl1dXSxbXFxcImlvbi1jb2xfM1xcXCIsW1syNTcsXFxcImlvbi1jb2xcXFwiLHtcXFwib2Zmc2V0XFxcIjpbMV0sXFxcIm9mZnNldFhzXFxcIjpbMSxcXFwib2Zmc2V0LXhzXFxcIl0sXFxcIm9mZnNldFNtXFxcIjpbMSxcXFwib2Zmc2V0LXNtXFxcIl0sXFxcIm9mZnNldE1kXFxcIjpbMSxcXFwib2Zmc2V0LW1kXFxcIl0sXFxcIm9mZnNldExnXFxcIjpbMSxcXFwib2Zmc2V0LWxnXFxcIl0sXFxcIm9mZnNldFhsXFxcIjpbMSxcXFwib2Zmc2V0LXhsXFxcIl0sXFxcInB1bGxcXFwiOlsxXSxcXFwicHVsbFhzXFxcIjpbMSxcXFwicHVsbC14c1xcXCJdLFxcXCJwdWxsU21cXFwiOlsxLFxcXCJwdWxsLXNtXFxcIl0sXFxcInB1bGxNZFxcXCI6WzEsXFxcInB1bGwtbWRcXFwiXSxcXFwicHVsbExnXFxcIjpbMSxcXFwicHVsbC1sZ1xcXCJdLFxcXCJwdWxsWGxcXFwiOlsxLFxcXCJwdWxsLXhsXFxcIl0sXFxcInB1c2hcXFwiOlsxXSxcXFwicHVzaFhzXFxcIjpbMSxcXFwicHVzaC14c1xcXCJdLFxcXCJwdXNoU21cXFwiOlsxLFxcXCJwdXNoLXNtXFxcIl0sXFxcInB1c2hNZFxcXCI6WzEsXFxcInB1c2gtbWRcXFwiXSxcXFwicHVzaExnXFxcIjpbMSxcXFwicHVzaC1sZ1xcXCJdLFxcXCJwdXNoWGxcXFwiOlsxLFxcXCJwdXNoLXhsXFxcIl0sXFxcInNpemVcXFwiOlsxXSxcXFwic2l6ZVhzXFxcIjpbMSxcXFwic2l6ZS14c1xcXCJdLFxcXCJzaXplU21cXFwiOlsxLFxcXCJzaXplLXNtXFxcIl0sXFxcInNpemVNZFxcXCI6WzEsXFxcInNpemUtbWRcXFwiXSxcXFwic2l6ZUxnXFxcIjpbMSxcXFwic2l6ZS1sZ1xcXCJdLFxcXCJzaXplWGxcXFwiOlsxLFxcXCJzaXplLXhsXFxcIl19LFtbOSxcXFwicmVzaXplXFxcIixcXFwib25SZXNpemVcXFwiXV1dLFsyNTcsXFxcImlvbi1ncmlkXFxcIix7XFxcImZpeGVkXFxcIjpbNF19XSxbMjU3LFxcXCJpb24tcm93XFxcIl1dXSxbXFxcImlvbi1pbWdcXFwiLFtbMjU3LFxcXCJpb24taW1nXFxcIix7XFxcImFsdFxcXCI6WzFdLFxcXCJzcmNcXFwiOlsxXSxcXFwibG9hZFNyY1xcXCI6WzMyXSxcXFwibG9hZEVycm9yXFxcIjpbMzJdfSxudWxsLHtcXFwic3JjXFxcIjpbXFxcInNyY0NoYW5nZWRcXFwiXX1dXV0sW1xcXCJpb24taW5wdXQtb3RwXFxcIixbWzI5NCxcXFwiaW9uLWlucHV0LW90cFxcXCIse1xcXCJhdXRvY2FwaXRhbGl6ZVxcXCI6WzFdLFxcXCJjb2xvclxcXCI6WzUxM10sXFxcImRpc2FibGVkXFxcIjpbNTE2XSxcXFwiZmlsbFxcXCI6WzFdLFxcXCJpbnB1dG1vZGVcXFwiOlsxXSxcXFwibGVuZ3RoXFxcIjpbMl0sXFxcInBhdHRlcm5cXFwiOlsxXSxcXFwicmVhZG9ubHlcXFwiOls1MTZdLFxcXCJzZXBhcmF0b3JzXFxcIjpbMV0sXFxcInNoYXBlXFxcIjpbMV0sXFxcInNpemVcXFwiOlsxXSxcXFwidHlwZVxcXCI6WzFdLFxcXCJ2YWx1ZVxcXCI6WzEwMzJdLFxcXCJpbnB1dFZhbHVlc1xcXCI6WzMyXSxcXFwiaGFzRm9jdXNcXFwiOlszMl0sXFxcInByZXZpb3VzSW5wdXRWYWx1ZXNcXFwiOlszMl0sXFxcInNldEZvY3VzXFxcIjpbNjRdfSxudWxsLHtcXFwidmFsdWVcXFwiOltcXFwidmFsdWVDaGFuZ2VkXFxcIl0sXFxcInNlcGFyYXRvcnNcXFwiOltcXFwicHJvY2Vzc1NlcGFyYXRvcnNcXFwiXSxcXFwibGVuZ3RoXFxcIjpbXFxcInByb2Nlc3NTZXBhcmF0b3JzXFxcIl19XV1dLFtcXFwiaW9uLXByb2dyZXNzLWJhclxcXCIsW1syODksXFxcImlvbi1wcm9ncmVzcy1iYXJcXFwiLHtcXFwidHlwZVxcXCI6WzFdLFxcXCJyZXZlcnNlZFxcXCI6WzRdLFxcXCJ2YWx1ZVxcXCI6WzJdLFxcXCJidWZmZXJcXFwiOlsyXSxcXFwiY29sb3JcXFwiOls1MTNdfV1dXSxbXFxcImlvbi1yYW5nZVxcXCIsW1syODksXFxcImlvbi1yYW5nZVxcXCIse1xcXCJjb2xvclxcXCI6WzUxM10sXFxcImRlYm91bmNlXFxcIjpbMl0sXFxcIm5hbWVcXFwiOlsxXSxcXFwibGFiZWxcXFwiOlsxXSxcXFwiZHVhbEtub2JzXFxcIjpbNCxcXFwiZHVhbC1rbm9ic1xcXCJdLFxcXCJtaW5cXFwiOlsyXSxcXFwibWF4XFxcIjpbMl0sXFxcInBpblxcXCI6WzRdLFxcXCJwaW5Gb3JtYXR0ZXJcXFwiOlsxNixcXFwicGluLWZvcm1hdHRlclxcXCJdLFxcXCJzbmFwc1xcXCI6WzRdLFxcXCJzdGVwXFxcIjpbMl0sXFxcInRpY2tzXFxcIjpbNF0sXFxcImFjdGl2ZUJhclN0YXJ0XFxcIjpbMTAyNixcXFwiYWN0aXZlLWJhci1zdGFydFxcXCJdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJ2YWx1ZVxcXCI6WzEwMjZdLFxcXCJsYWJlbFBsYWNlbWVudFxcXCI6WzEsXFxcImxhYmVsLXBsYWNlbWVudFxcXCJdLFxcXCJyYXRpb0FcXFwiOlszMl0sXFxcInJhdGlvQlxcXCI6WzMyXSxcXFwicHJlc3NlZEtub2JcXFwiOlszMl19LG51bGwse1xcXCJkZWJvdW5jZVxcXCI6W1xcXCJkZWJvdW5jZUNoYW5nZWRcXFwiXSxcXFwibWluXFxcIjpbXFxcIm1pbkNoYW5nZWRcXFwiXSxcXFwibWF4XFxcIjpbXFxcIm1heENoYW5nZWRcXFwiXSxcXFwic3RlcFxcXCI6W1xcXCJzdGVwQ2hhbmdlZFxcXCJdLFxcXCJhY3RpdmVCYXJTdGFydFxcXCI6W1xcXCJhY3RpdmVCYXJTdGFydENoYW5nZWRcXFwiXSxcXFwiZGlzYWJsZWRcXFwiOltcXFwiZGlzYWJsZWRDaGFuZ2VkXFxcIl0sXFxcInZhbHVlXFxcIjpbXFxcInZhbHVlQ2hhbmdlZFxcXCJdfV1dXSxbXFxcImlvbi1zZWdtZW50LWNvbnRlbnRcXFwiLFtbMjU3LFxcXCJpb24tc2VnbWVudC1jb250ZW50XFxcIl1dXSxbXFxcImlvbi1zZWdtZW50LXZpZXdcXFwiLFtbMjg5LFxcXCJpb24tc2VnbWVudC12aWV3XFxcIix7XFxcImRpc2FibGVkXFxcIjpbNF0sXFxcImlzTWFudWFsU2Nyb2xsXFxcIjpbMzJdLFxcXCJzZXRDb250ZW50XFxcIjpbNjRdfSxbWzEsXFxcInNjcm9sbFxcXCIsXFxcImhhbmRsZVNjcm9sbFxcXCJdLFsxLFxcXCJ0b3VjaHN0YXJ0XFxcIixcXFwiaGFuZGxlU2Nyb2xsU3RhcnRcXFwiXSxbMSxcXFwidG91Y2hlbmRcXFwiLFxcXCJoYW5kbGVUb3VjaEVuZFxcXCJdXV1dXSxbXFxcImlvbi1zcGxpdC1wYW5lXFxcIixbWzI4OSxcXFwiaW9uLXNwbGl0LXBhbmVcXFwiLHtcXFwiY29udGVudElkXFxcIjpbNTEzLFxcXCJjb250ZW50LWlkXFxcIl0sXFxcImRpc2FibGVkXFxcIjpbNF0sXFxcIndoZW5cXFwiOls4XSxcXFwidmlzaWJsZVxcXCI6WzMyXSxcXFwiaXNWaXNpYmxlXFxcIjpbNjRdfSxudWxsLHtcXFwidmlzaWJsZVxcXCI6W1xcXCJ2aXNpYmxlQ2hhbmdlZFxcXCJdLFxcXCJkaXNhYmxlZFxcXCI6W1xcXCJ1cGRhdGVTdGF0ZVxcXCJdLFxcXCJ3aGVuXFxcIjpbXFxcInVwZGF0ZVN0YXRlXFxcIl19XV1dLFtcXFwiaW9uLXRleHRcXFwiLFtbMjU3LFxcXCJpb24tdGV4dFxcXCIse1xcXCJjb2xvclxcXCI6WzUxM119XV1dLFtcXFwiaW9uLXNlbGVjdC1tb2RhbFxcXCIsW1syOTAsXFxcImlvbi1zZWxlY3QtbW9kYWxcXFwiLHtcXFwiaGVhZGVyXFxcIjpbMV0sXFxcIm11bHRpcGxlXFxcIjpbNF0sXFxcIm9wdGlvbnNcXFwiOlsxNl19XV1dLFtcXFwiaW9uLWRhdGV0aW1lXzNcXFwiLFtbMjg5LFxcXCJpb24tZGF0ZXRpbWVcXFwiLHtcXFwiY29sb3JcXFwiOlsxXSxcXFwibmFtZVxcXCI6WzFdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJmb3JtYXRPcHRpb25zXFxcIjpbMTYsXFxcImZvcm1hdC1vcHRpb25zXFxcIl0sXFxcInJlYWRvbmx5XFxcIjpbNF0sXFxcImlzRGF0ZUVuYWJsZWRcXFwiOlsxNixcXFwiaXMtZGF0ZS1lbmFibGVkXFxcIl0sXFxcInNob3dBZGphY2VudERheXNcXFwiOls0LFxcXCJzaG93LWFkamFjZW50LWRheXNcXFwiXSxcXFwibWluXFxcIjpbMTAyNV0sXFxcIm1heFxcXCI6WzEwMjVdLFxcXCJwcmVzZW50YXRpb25cXFwiOlsxXSxcXFwiY2FuY2VsVGV4dFxcXCI6WzEsXFxcImNhbmNlbC10ZXh0XFxcIl0sXFxcImRvbmVUZXh0XFxcIjpbMSxcXFwiZG9uZS10ZXh0XFxcIl0sXFxcImNsZWFyVGV4dFxcXCI6WzEsXFxcImNsZWFyLXRleHRcXFwiXSxcXFwieWVhclZhbHVlc1xcXCI6WzgsXFxcInllYXItdmFsdWVzXFxcIl0sXFxcIm1vbnRoVmFsdWVzXFxcIjpbOCxcXFwibW9udGgtdmFsdWVzXFxcIl0sXFxcImRheVZhbHVlc1xcXCI6WzgsXFxcImRheS12YWx1ZXNcXFwiXSxcXFwiaG91clZhbHVlc1xcXCI6WzgsXFxcImhvdXItdmFsdWVzXFxcIl0sXFxcIm1pbnV0ZVZhbHVlc1xcXCI6WzgsXFxcIm1pbnV0ZS12YWx1ZXNcXFwiXSxcXFwibG9jYWxlXFxcIjpbMV0sXFxcImZpcnN0RGF5T2ZXZWVrXFxcIjpbMixcXFwiZmlyc3QtZGF5LW9mLXdlZWtcXFwiXSxcXFwidGl0bGVTZWxlY3RlZERhdGVzRm9ybWF0dGVyXFxcIjpbMTYsXFxcInRpdGxlLXNlbGVjdGVkLWRhdGVzLWZvcm1hdHRlclxcXCJdLFxcXCJtdWx0aXBsZVxcXCI6WzRdLFxcXCJoaWdobGlnaHRlZERhdGVzXFxcIjpbMTYsXFxcImhpZ2hsaWdodGVkLWRhdGVzXFxcIl0sXFxcInZhbHVlXFxcIjpbMTAyNV0sXFxcInNob3dEZWZhdWx0VGl0bGVcXFwiOls0LFxcXCJzaG93LWRlZmF1bHQtdGl0bGVcXFwiXSxcXFwic2hvd0RlZmF1bHRCdXR0b25zXFxcIjpbNCxcXFwic2hvdy1kZWZhdWx0LWJ1dHRvbnNcXFwiXSxcXFwic2hvd0NsZWFyQnV0dG9uXFxcIjpbNCxcXFwic2hvdy1jbGVhci1idXR0b25cXFwiXSxcXFwic2hvd0RlZmF1bHRUaW1lTGFiZWxcXFwiOls0LFxcXCJzaG93LWRlZmF1bHQtdGltZS1sYWJlbFxcXCJdLFxcXCJob3VyQ3ljbGVcXFwiOlsxLFxcXCJob3VyLWN5Y2xlXFxcIl0sXFxcInNpemVcXFwiOlsxXSxcXFwicHJlZmVyV2hlZWxcXFwiOls0LFxcXCJwcmVmZXItd2hlZWxcXFwiXSxcXFwic2hvd01vbnRoQW5kWWVhclxcXCI6WzMyXSxcXFwiYWN0aXZlUGFydHNcXFwiOlszMl0sXFxcIndvcmtpbmdQYXJ0c1xcXCI6WzMyXSxcXFwiaXNUaW1lUG9wb3Zlck9wZW5cXFwiOlszMl0sXFxcImZvcmNlUmVuZGVyRGF0ZVxcXCI6WzMyXSxcXFwiY29uZmlybVxcXCI6WzY0XSxcXFwicmVzZXRcXFwiOls2NF0sXFxcImNhbmNlbFxcXCI6WzY0XX0sbnVsbCx7XFxcImZvcm1hdE9wdGlvbnNcXFwiOltcXFwiZm9ybWF0T3B0aW9uc0NoYW5nZWRcXFwiXSxcXFwiZGlzYWJsZWRcXFwiOltcXFwiZGlzYWJsZWRDaGFuZ2VkXFxcIl0sXFxcIm1pblxcXCI6W1xcXCJtaW5DaGFuZ2VkXFxcIl0sXFxcIm1heFxcXCI6W1xcXCJtYXhDaGFuZ2VkXFxcIl0sXFxcInByZXNlbnRhdGlvblxcXCI6W1xcXCJwcmVzZW50YXRpb25DaGFuZ2VkXFxcIl0sXFxcInllYXJWYWx1ZXNcXFwiOltcXFwieWVhclZhbHVlc0NoYW5nZWRcXFwiXSxcXFwibW9udGhWYWx1ZXNcXFwiOltcXFwibW9udGhWYWx1ZXNDaGFuZ2VkXFxcIl0sXFxcImRheVZhbHVlc1xcXCI6W1xcXCJkYXlWYWx1ZXNDaGFuZ2VkXFxcIl0sXFxcImhvdXJWYWx1ZXNcXFwiOltcXFwiaG91clZhbHVlc0NoYW5nZWRcXFwiXSxcXFwibWludXRlVmFsdWVzXFxcIjpbXFxcIm1pbnV0ZVZhbHVlc0NoYW5nZWRcXFwiXSxcXFwidmFsdWVcXFwiOltcXFwidmFsdWVDaGFuZ2VkXFxcIl19XSxbMjkwLFxcXCJpb24tcGlja2VyLWxlZ2FjeVxcXCIse1xcXCJvdmVybGF5SW5kZXhcXFwiOlsyLFxcXCJvdmVybGF5LWluZGV4XFxcIl0sXFxcImRlbGVnYXRlXFxcIjpbMTZdLFxcXCJoYXNDb250cm9sbGVyXFxcIjpbNCxcXFwiaGFzLWNvbnRyb2xsZXJcXFwiXSxcXFwia2V5Ym9hcmRDbG9zZVxcXCI6WzQsXFxcImtleWJvYXJkLWNsb3NlXFxcIl0sXFxcImVudGVyQW5pbWF0aW9uXFxcIjpbMTYsXFxcImVudGVyLWFuaW1hdGlvblxcXCJdLFxcXCJsZWF2ZUFuaW1hdGlvblxcXCI6WzE2LFxcXCJsZWF2ZS1hbmltYXRpb25cXFwiXSxcXFwiYnV0dG9uc1xcXCI6WzE2XSxcXFwiY29sdW1uc1xcXCI6WzE2XSxcXFwiY3NzQ2xhc3NcXFwiOlsxLFxcXCJjc3MtY2xhc3NcXFwiXSxcXFwiZHVyYXRpb25cXFwiOlsyXSxcXFwic2hvd0JhY2tkcm9wXFxcIjpbNCxcXFwic2hvdy1iYWNrZHJvcFxcXCJdLFxcXCJiYWNrZHJvcERpc21pc3NcXFwiOls0LFxcXCJiYWNrZHJvcC1kaXNtaXNzXFxcIl0sXFxcImFuaW1hdGVkXFxcIjpbNF0sXFxcImh0bWxBdHRyaWJ1dGVzXFxcIjpbMTYsXFxcImh0bWwtYXR0cmlidXRlc1xcXCJdLFxcXCJpc09wZW5cXFwiOls0LFxcXCJpcy1vcGVuXFxcIl0sXFxcInRyaWdnZXJcXFwiOlsxXSxcXFwicHJlc2VudGVkXFxcIjpbMzJdLFxcXCJwcmVzZW50XFxcIjpbNjRdLFxcXCJkaXNtaXNzXFxcIjpbNjRdLFxcXCJvbkRpZERpc21pc3NcXFwiOls2NF0sXFxcIm9uV2lsbERpc21pc3NcXFwiOls2NF0sXFxcImdldENvbHVtblxcXCI6WzY0XX0sbnVsbCx7XFxcImlzT3BlblxcXCI6W1xcXCJvbklzT3BlbkNoYW5nZVxcXCJdLFxcXCJ0cmlnZ2VyXFxcIjpbXFxcInRyaWdnZXJDaGFuZ2VkXFxcIl19XSxbMjg4LFxcXCJpb24tcGlja2VyLWxlZ2FjeS1jb2x1bW5cXFwiLHtcXFwiY29sXFxcIjpbMTZdfSxudWxsLHtcXFwiY29sXFxcIjpbXFxcImNvbENoYW5nZWRcXFwiXX1dXV0sW1xcXCJpb24tYWN0aW9uLXNoZWV0XFxcIixbWzI5MCxcXFwiaW9uLWFjdGlvbi1zaGVldFxcXCIse1xcXCJvdmVybGF5SW5kZXhcXFwiOlsyLFxcXCJvdmVybGF5LWluZGV4XFxcIl0sXFxcImRlbGVnYXRlXFxcIjpbMTZdLFxcXCJoYXNDb250cm9sbGVyXFxcIjpbNCxcXFwiaGFzLWNvbnRyb2xsZXJcXFwiXSxcXFwia2V5Ym9hcmRDbG9zZVxcXCI6WzQsXFxcImtleWJvYXJkLWNsb3NlXFxcIl0sXFxcImVudGVyQW5pbWF0aW9uXFxcIjpbMTYsXFxcImVudGVyLWFuaW1hdGlvblxcXCJdLFxcXCJsZWF2ZUFuaW1hdGlvblxcXCI6WzE2LFxcXCJsZWF2ZS1hbmltYXRpb25cXFwiXSxcXFwiYnV0dG9uc1xcXCI6WzE2XSxcXFwiY3NzQ2xhc3NcXFwiOlsxLFxcXCJjc3MtY2xhc3NcXFwiXSxcXFwiYmFja2Ryb3BEaXNtaXNzXFxcIjpbNCxcXFwiYmFja2Ryb3AtZGlzbWlzc1xcXCJdLFxcXCJoZWFkZXJcXFwiOlsxXSxcXFwic3ViSGVhZGVyXFxcIjpbMSxcXFwic3ViLWhlYWRlclxcXCJdLFxcXCJ0cmFuc2x1Y2VudFxcXCI6WzRdLFxcXCJhbmltYXRlZFxcXCI6WzRdLFxcXCJodG1sQXR0cmlidXRlc1xcXCI6WzE2LFxcXCJodG1sLWF0dHJpYnV0ZXNcXFwiXSxcXFwiaXNPcGVuXFxcIjpbNCxcXFwiaXMtb3BlblxcXCJdLFxcXCJ0cmlnZ2VyXFxcIjpbMV0sXFxcInByZXNlbnRcXFwiOls2NF0sXFxcImRpc21pc3NcXFwiOls2NF0sXFxcIm9uRGlkRGlzbWlzc1xcXCI6WzY0XSxcXFwib25XaWxsRGlzbWlzc1xcXCI6WzY0XX0sbnVsbCx7XFxcImlzT3BlblxcXCI6W1xcXCJvbklzT3BlbkNoYW5nZVxcXCJdLFxcXCJ0cmlnZ2VyXFxcIjpbXFxcInRyaWdnZXJDaGFuZ2VkXFxcIl19XV1dLFtcXFwiaW9uLWFsZXJ0XFxcIixbWzI5MCxcXFwiaW9uLWFsZXJ0XFxcIix7XFxcIm92ZXJsYXlJbmRleFxcXCI6WzIsXFxcIm92ZXJsYXktaW5kZXhcXFwiXSxcXFwiZGVsZWdhdGVcXFwiOlsxNl0sXFxcImhhc0NvbnRyb2xsZXJcXFwiOls0LFxcXCJoYXMtY29udHJvbGxlclxcXCJdLFxcXCJrZXlib2FyZENsb3NlXFxcIjpbNCxcXFwia2V5Ym9hcmQtY2xvc2VcXFwiXSxcXFwiZW50ZXJBbmltYXRpb25cXFwiOlsxNixcXFwiZW50ZXItYW5pbWF0aW9uXFxcIl0sXFxcImxlYXZlQW5pbWF0aW9uXFxcIjpbMTYsXFxcImxlYXZlLWFuaW1hdGlvblxcXCJdLFxcXCJjc3NDbGFzc1xcXCI6WzEsXFxcImNzcy1jbGFzc1xcXCJdLFxcXCJoZWFkZXJcXFwiOlsxXSxcXFwic3ViSGVhZGVyXFxcIjpbMSxcXFwic3ViLWhlYWRlclxcXCJdLFxcXCJtZXNzYWdlXFxcIjpbMV0sXFxcImJ1dHRvbnNcXFwiOlsxNl0sXFxcImlucHV0c1xcXCI6WzEwNDBdLFxcXCJiYWNrZHJvcERpc21pc3NcXFwiOls0LFxcXCJiYWNrZHJvcC1kaXNtaXNzXFxcIl0sXFxcInRyYW5zbHVjZW50XFxcIjpbNF0sXFxcImFuaW1hdGVkXFxcIjpbNF0sXFxcImh0bWxBdHRyaWJ1dGVzXFxcIjpbMTYsXFxcImh0bWwtYXR0cmlidXRlc1xcXCJdLFxcXCJpc09wZW5cXFwiOls0LFxcXCJpcy1vcGVuXFxcIl0sXFxcInRyaWdnZXJcXFwiOlsxXSxcXFwicHJlc2VudFxcXCI6WzY0XSxcXFwiZGlzbWlzc1xcXCI6WzY0XSxcXFwib25EaWREaXNtaXNzXFxcIjpbNjRdLFxcXCJvbldpbGxEaXNtaXNzXFxcIjpbNjRdfSxbWzQsXFxcImtleWRvd25cXFwiLFxcXCJvbktleWRvd25cXFwiXV0se1xcXCJpc09wZW5cXFwiOltcXFwib25Jc09wZW5DaGFuZ2VcXFwiXSxcXFwidHJpZ2dlclxcXCI6W1xcXCJ0cmlnZ2VyQ2hhbmdlZFxcXCJdLFxcXCJidXR0b25zXFxcIjpbXFxcImJ1dHRvbnNDaGFuZ2VkXFxcIl0sXFxcImlucHV0c1xcXCI6W1xcXCJpbnB1dHNDaGFuZ2VkXFxcIl19XV1dLFtcXFwiaW9uLW1vZGFsXFxcIixbWzI4OSxcXFwiaW9uLW1vZGFsXFxcIix7XFxcImhhc0NvbnRyb2xsZXJcXFwiOls0LFxcXCJoYXMtY29udHJvbGxlclxcXCJdLFxcXCJvdmVybGF5SW5kZXhcXFwiOlsyLFxcXCJvdmVybGF5LWluZGV4XFxcIl0sXFxcImRlbGVnYXRlXFxcIjpbMTZdLFxcXCJrZXlib2FyZENsb3NlXFxcIjpbNCxcXFwia2V5Ym9hcmQtY2xvc2VcXFwiXSxcXFwiZW50ZXJBbmltYXRpb25cXFwiOlsxNixcXFwiZW50ZXItYW5pbWF0aW9uXFxcIl0sXFxcImxlYXZlQW5pbWF0aW9uXFxcIjpbMTYsXFxcImxlYXZlLWFuaW1hdGlvblxcXCJdLFxcXCJicmVha3BvaW50c1xcXCI6WzE2XSxcXFwiZXhwYW5kVG9TY3JvbGxcXFwiOls0LFxcXCJleHBhbmQtdG8tc2Nyb2xsXFxcIl0sXFxcImluaXRpYWxCcmVha3BvaW50XFxcIjpbMixcXFwiaW5pdGlhbC1icmVha3BvaW50XFxcIl0sXFxcImJhY2tkcm9wQnJlYWtwb2ludFxcXCI6WzIsXFxcImJhY2tkcm9wLWJyZWFrcG9pbnRcXFwiXSxcXFwiaGFuZGxlXFxcIjpbNF0sXFxcImhhbmRsZUJlaGF2aW9yXFxcIjpbMSxcXFwiaGFuZGxlLWJlaGF2aW9yXFxcIl0sXFxcImNvbXBvbmVudFxcXCI6WzFdLFxcXCJjb21wb25lbnRQcm9wc1xcXCI6WzE2LFxcXCJjb21wb25lbnQtcHJvcHNcXFwiXSxcXFwiY3NzQ2xhc3NcXFwiOlsxLFxcXCJjc3MtY2xhc3NcXFwiXSxcXFwiYmFja2Ryb3BEaXNtaXNzXFxcIjpbNCxcXFwiYmFja2Ryb3AtZGlzbWlzc1xcXCJdLFxcXCJzaG93QmFja2Ryb3BcXFwiOls0LFxcXCJzaG93LWJhY2tkcm9wXFxcIl0sXFxcImFuaW1hdGVkXFxcIjpbNF0sXFxcInByZXNlbnRpbmdFbGVtZW50XFxcIjpbMTYsXFxcInByZXNlbnRpbmctZWxlbWVudFxcXCJdLFxcXCJodG1sQXR0cmlidXRlc1xcXCI6WzE2LFxcXCJodG1sLWF0dHJpYnV0ZXNcXFwiXSxcXFwiaXNPcGVuXFxcIjpbNCxcXFwiaXMtb3BlblxcXCJdLFxcXCJ0cmlnZ2VyXFxcIjpbMV0sXFxcImtlZXBDb250ZW50c01vdW50ZWRcXFwiOls0LFxcXCJrZWVwLWNvbnRlbnRzLW1vdW50ZWRcXFwiXSxcXFwiZm9jdXNUcmFwXFxcIjpbNCxcXFwiZm9jdXMtdHJhcFxcXCJdLFxcXCJjYW5EaXNtaXNzXFxcIjpbNCxcXFwiY2FuLWRpc21pc3NcXFwiXSxcXFwicHJlc2VudGVkXFxcIjpbMzJdLFxcXCJwcmVzZW50XFxcIjpbNjRdLFxcXCJkaXNtaXNzXFxcIjpbNjRdLFxcXCJvbkRpZERpc21pc3NcXFwiOls2NF0sXFxcIm9uV2lsbERpc21pc3NcXFwiOls2NF0sXFxcInNldEN1cnJlbnRCcmVha3BvaW50XFxcIjpbNjRdLFxcXCJnZXRDdXJyZW50QnJlYWtwb2ludFxcXCI6WzY0XX0sW1s5LFxcXCJyZXNpemVcXFwiLFxcXCJvbldpbmRvd1Jlc2l6ZVxcXCJdXSx7XFxcImlzT3BlblxcXCI6W1xcXCJvbklzT3BlbkNoYW5nZVxcXCJdLFxcXCJ0cmlnZ2VyXFxcIjpbXFxcInRyaWdnZXJDaGFuZ2VkXFxcIl19XV1dLFtcXFwiaW9uLXBpY2tlclxcXCIsW1syODksXFxcImlvbi1waWNrZXJcXFwiLHtcXFwiZXhpdElucHV0TW9kZVxcXCI6WzY0XX0sW1sxLFxcXCJ0b3VjaHN0YXJ0XFxcIixcXFwicHJldmVudFRvdWNoU3RhcnRQcm9wYWdhdGlvblxcXCJdXV1dXSxbXFxcImlvbi1waWNrZXItY29sdW1uXFxcIixbWzI1NyxcXFwiaW9uLXBpY2tlci1jb2x1bW5cXFwiLHtcXFwiZGlzYWJsZWRcXFwiOls0XSxcXFwidmFsdWVcXFwiOlsxMDMyXSxcXFwiY29sb3JcXFwiOls1MTNdLFxcXCJudW1lcmljSW5wdXRcXFwiOls0LFxcXCJudW1lcmljLWlucHV0XFxcIl0sXFxcImFyaWFMYWJlbFxcXCI6WzMyXSxcXFwiaXNBY3RpdmVcXFwiOlszMl0sXFxcInNjcm9sbEFjdGl2ZUl0ZW1JbnRvVmlld1xcXCI6WzY0XSxcXFwic2V0VmFsdWVcXFwiOls2NF0sXFxcInNldEZvY3VzXFxcIjpbNjRdfSxudWxsLHtcXFwiYXJpYS1sYWJlbFxcXCI6W1xcXCJhcmlhTGFiZWxDaGFuZ2VkXFxcIl0sXFxcInZhbHVlXFxcIjpbXFxcInZhbHVlQ2hhbmdlXFxcIl19XV1dLFtcXFwiaW9uLXBpY2tlci1jb2x1bW4tb3B0aW9uXFxcIixbWzI4OSxcXFwiaW9uLXBpY2tlci1jb2x1bW4tb3B0aW9uXFxcIix7XFxcImRpc2FibGVkXFxcIjpbNF0sXFxcInZhbHVlXFxcIjpbOF0sXFxcImNvbG9yXFxcIjpbNTEzXSxcXFwiYXJpYUxhYmVsXFxcIjpbMzJdfSxudWxsLHtcXFwiYXJpYS1sYWJlbFxcXCI6W1xcXCJvbkFyaWFMYWJlbENoYW5nZVxcXCJdfV1dXSxbXFxcImlvbi1wb3BvdmVyXFxcIixbWzI4OSxcXFwiaW9uLXBvcG92ZXJcXFwiLHtcXFwiaGFzQ29udHJvbGxlclxcXCI6WzQsXFxcImhhcy1jb250cm9sbGVyXFxcIl0sXFxcImRlbGVnYXRlXFxcIjpbMTZdLFxcXCJvdmVybGF5SW5kZXhcXFwiOlsyLFxcXCJvdmVybGF5LWluZGV4XFxcIl0sXFxcImVudGVyQW5pbWF0aW9uXFxcIjpbMTYsXFxcImVudGVyLWFuaW1hdGlvblxcXCJdLFxcXCJsZWF2ZUFuaW1hdGlvblxcXCI6WzE2LFxcXCJsZWF2ZS1hbmltYXRpb25cXFwiXSxcXFwiY29tcG9uZW50XFxcIjpbMV0sXFxcImNvbXBvbmVudFByb3BzXFxcIjpbMTYsXFxcImNvbXBvbmVudC1wcm9wc1xcXCJdLFxcXCJrZXlib2FyZENsb3NlXFxcIjpbNCxcXFwia2V5Ym9hcmQtY2xvc2VcXFwiXSxcXFwiY3NzQ2xhc3NcXFwiOlsxLFxcXCJjc3MtY2xhc3NcXFwiXSxcXFwiYmFja2Ryb3BEaXNtaXNzXFxcIjpbNCxcXFwiYmFja2Ryb3AtZGlzbWlzc1xcXCJdLFxcXCJldmVudFxcXCI6WzhdLFxcXCJzaG93QmFja2Ryb3BcXFwiOls0LFxcXCJzaG93LWJhY2tkcm9wXFxcIl0sXFxcInRyYW5zbHVjZW50XFxcIjpbNF0sXFxcImFuaW1hdGVkXFxcIjpbNF0sXFxcImh0bWxBdHRyaWJ1dGVzXFxcIjpbMTYsXFxcImh0bWwtYXR0cmlidXRlc1xcXCJdLFxcXCJ0cmlnZ2VyQWN0aW9uXFxcIjpbMSxcXFwidHJpZ2dlci1hY3Rpb25cXFwiXSxcXFwidHJpZ2dlclxcXCI6WzFdLFxcXCJzaXplXFxcIjpbMV0sXFxcImRpc21pc3NPblNlbGVjdFxcXCI6WzQsXFxcImRpc21pc3Mtb24tc2VsZWN0XFxcIl0sXFxcInJlZmVyZW5jZVxcXCI6WzFdLFxcXCJzaWRlXFxcIjpbMV0sXFxcImFsaWdubWVudFxcXCI6WzEwMjVdLFxcXCJhcnJvd1xcXCI6WzRdLFxcXCJpc09wZW5cXFwiOls0LFxcXCJpcy1vcGVuXFxcIl0sXFxcImtleWJvYXJkRXZlbnRzXFxcIjpbNCxcXFwia2V5Ym9hcmQtZXZlbnRzXFxcIl0sXFxcImZvY3VzVHJhcFxcXCI6WzQsXFxcImZvY3VzLXRyYXBcXFwiXSxcXFwia2VlcENvbnRlbnRzTW91bnRlZFxcXCI6WzQsXFxcImtlZXAtY29udGVudHMtbW91bnRlZFxcXCJdLFxcXCJwcmVzZW50ZWRcXFwiOlszMl0sXFxcInByZXNlbnRGcm9tVHJpZ2dlclxcXCI6WzY0XSxcXFwicHJlc2VudFxcXCI6WzY0XSxcXFwiZGlzbWlzc1xcXCI6WzY0XSxcXFwiZ2V0UGFyZW50UG9wb3ZlclxcXCI6WzY0XSxcXFwib25EaWREaXNtaXNzXFxcIjpbNjRdLFxcXCJvbldpbGxEaXNtaXNzXFxcIjpbNjRdfSxudWxsLHtcXFwidHJpZ2dlclxcXCI6W1xcXCJvblRyaWdnZXJDaGFuZ2VcXFwiXSxcXFwidHJpZ2dlckFjdGlvblxcXCI6W1xcXCJvblRyaWdnZXJDaGFuZ2VcXFwiXSxcXFwiaXNPcGVuXFxcIjpbXFxcIm9uSXNPcGVuQ2hhbmdlXFxcIl19XV1dLFtcXFwiaW9uLWNoZWNrYm94XFxcIixbWzI4OSxcXFwiaW9uLWNoZWNrYm94XFxcIix7XFxcImNvbG9yXFxcIjpbNTEzXSxcXFwibmFtZVxcXCI6WzFdLFxcXCJjaGVja2VkXFxcIjpbMTAyOF0sXFxcImluZGV0ZXJtaW5hdGVcXFwiOlsxMDI4XSxcXFwiZGlzYWJsZWRcXFwiOls0XSxcXFwiZXJyb3JUZXh0XFxcIjpbMSxcXFwiZXJyb3ItdGV4dFxcXCJdLFxcXCJoZWxwZXJUZXh0XFxcIjpbMSxcXFwiaGVscGVyLXRleHRcXFwiXSxcXFwidmFsdWVcXFwiOls4XSxcXFwibGFiZWxQbGFjZW1lbnRcXFwiOlsxLFxcXCJsYWJlbC1wbGFjZW1lbnRcXFwiXSxcXFwianVzdGlmeVxcXCI6WzFdLFxcXCJhbGlnbm1lbnRcXFwiOlsxXSxcXFwicmVxdWlyZWRcXFwiOls0XSxcXFwic2V0Rm9jdXNcXFwiOls2NF19XV1dLFtcXFwiaW9uLWl0ZW1fOFxcXCIsW1syODksXFxcImlvbi1pdGVtLWRpdmlkZXJcXFwiLHtcXFwiY29sb3JcXFwiOls1MTNdLFxcXCJzdGlja3lcXFwiOls0XX1dLFsyODgsXFxcImlvbi1pdGVtLWdyb3VwXFxcIl0sWzI4OSxcXFwiaW9uLW5vdGVcXFwiLHtcXFwiY29sb3JcXFwiOls1MTNdfV0sWzI1NyxcXFwiaW9uLXNrZWxldG9uLXRleHRcXFwiLHtcXFwiYW5pbWF0ZWRcXFwiOls0XX1dLFsyOTQsXFxcImlvbi1sYWJlbFxcXCIse1xcXCJjb2xvclxcXCI6WzUxM10sXFxcInBvc2l0aW9uXFxcIjpbMV0sXFxcIm5vQW5pbWF0ZVxcXCI6WzMyXX0sbnVsbCx7XFxcImNvbG9yXFxcIjpbXFxcImNvbG9yQ2hhbmdlZFxcXCJdLFxcXCJwb3NpdGlvblxcXCI6W1xcXCJwb3NpdGlvbkNoYW5nZWRcXFwiXX1dLFsyODksXFxcImlvbi1saXN0LWhlYWRlclxcXCIse1xcXCJjb2xvclxcXCI6WzUxM10sXFxcImxpbmVzXFxcIjpbMV19XSxbMjg5LFxcXCJpb24taXRlbVxcXCIse1xcXCJjb2xvclxcXCI6WzUxM10sXFxcImJ1dHRvblxcXCI6WzRdLFxcXCJkZXRhaWxcXFwiOls0XSxcXFwiZGV0YWlsSWNvblxcXCI6WzEsXFxcImRldGFpbC1pY29uXFxcIl0sXFxcImRpc2FibGVkXFxcIjpbNTE2XSxcXFwiZG93bmxvYWRcXFwiOlsxXSxcXFwiaHJlZlxcXCI6WzFdLFxcXCJyZWxcXFwiOlsxXSxcXFwibGluZXNcXFwiOlsxXSxcXFwicm91dGVyQW5pbWF0aW9uXFxcIjpbMTYsXFxcInJvdXRlci1hbmltYXRpb25cXFwiXSxcXFwicm91dGVyRGlyZWN0aW9uXFxcIjpbMSxcXFwicm91dGVyLWRpcmVjdGlvblxcXCJdLFxcXCJ0YXJnZXRcXFwiOlsxXSxcXFwidHlwZVxcXCI6WzFdLFxcXCJtdWx0aXBsZUlucHV0c1xcXCI6WzMyXSxcXFwiZm9jdXNhYmxlXFxcIjpbMzJdLFxcXCJpc0ludGVyYWN0aXZlXFxcIjpbMzJdfSxbWzAsXFxcImlvbkNvbG9yXFxcIixcXFwibGFiZWxDb2xvckNoYW5nZWRcXFwiXSxbMCxcXFwiaW9uU3R5bGVcXFwiLFxcXCJpdGVtU3R5bGVcXFwiXV0se1xcXCJidXR0b25cXFwiOltcXFwiYnV0dG9uQ2hhbmdlZFxcXCJdfV0sWzI4OCxcXFwiaW9uLWxpc3RcXFwiLHtcXFwibGluZXNcXFwiOlsxXSxcXFwiaW5zZXRcXFwiOls0XSxcXFwiY2xvc2VTbGlkaW5nSXRlbXNcXFwiOls2NF19XV1dLFtcXFwiaW9uLWFwcF84XFxcIixbWzI1NixcXFwiaW9uLWFwcFxcXCIse1xcXCJzZXRGb2N1c1xcXCI6WzY0XX1dLFsyOTIsXFxcImlvbi1mb290ZXJcXFwiLHtcXFwiY29sbGFwc2VcXFwiOlsxXSxcXFwidHJhbnNsdWNlbnRcXFwiOls0XSxcXFwia2V5Ym9hcmRWaXNpYmxlXFxcIjpbMzJdfV0sWzI1NyxcXFwiaW9uLXJvdXRlci1vdXRsZXRcXFwiLHtcXFwibW9kZVxcXCI6WzEwMjVdLFxcXCJkZWxlZ2F0ZVxcXCI6WzE2XSxcXFwiYW5pbWF0ZWRcXFwiOls0XSxcXFwiYW5pbWF0aW9uXFxcIjpbMTZdLFxcXCJzd2lwZUhhbmRsZXJcXFwiOlsxNixcXFwic3dpcGUtaGFuZGxlclxcXCJdLFxcXCJjb21taXRcXFwiOls2NF0sXFxcInNldFJvdXRlSWRcXFwiOls2NF0sXFxcImdldFJvdXRlSWRcXFwiOls2NF19LG51bGwse1xcXCJzd2lwZUhhbmRsZXJcXFwiOltcXFwic3dpcGVIYW5kbGVyQ2hhbmdlZFxcXCJdfV0sWzI1NyxcXFwiaW9uLWNvbnRlbnRcXFwiLHtcXFwiY29sb3JcXFwiOls1MTNdLFxcXCJmdWxsc2NyZWVuXFxcIjpbNF0sXFxcImZpeGVkU2xvdFBsYWNlbWVudFxcXCI6WzEsXFxcImZpeGVkLXNsb3QtcGxhY2VtZW50XFxcIl0sXFxcImZvcmNlT3ZlcnNjcm9sbFxcXCI6WzEwMjgsXFxcImZvcmNlLW92ZXJzY3JvbGxcXFwiXSxcXFwic2Nyb2xsWFxcXCI6WzQsXFxcInNjcm9sbC14XFxcIl0sXFxcInNjcm9sbFlcXFwiOls0LFxcXCJzY3JvbGwteVxcXCJdLFxcXCJzY3JvbGxFdmVudHNcXFwiOls0LFxcXCJzY3JvbGwtZXZlbnRzXFxcIl0sXFxcImdldFNjcm9sbEVsZW1lbnRcXFwiOls2NF0sXFxcImdldEJhY2tncm91bmRFbGVtZW50XFxcIjpbNjRdLFxcXCJzY3JvbGxUb1RvcFxcXCI6WzY0XSxcXFwic2Nyb2xsVG9Cb3R0b21cXFwiOls2NF0sXFxcInNjcm9sbEJ5UG9pbnRcXFwiOls2NF0sXFxcInNjcm9sbFRvUG9pbnRcXFwiOls2NF19LFtbOSxcXFwicmVzaXplXFxcIixcXFwib25SZXNpemVcXFwiXV1dLFsyOTIsXFxcImlvbi1oZWFkZXJcXFwiLHtcXFwiY29sbGFwc2VcXFwiOlsxXSxcXFwidHJhbnNsdWNlbnRcXFwiOls0XX1dLFsyODksXFxcImlvbi10aXRsZVxcXCIse1xcXCJjb2xvclxcXCI6WzUxM10sXFxcInNpemVcXFwiOlsxXX0sbnVsbCx7XFxcInNpemVcXFwiOltcXFwic2l6ZUNoYW5nZWRcXFwiXX1dLFsyODksXFxcImlvbi10b29sYmFyXFxcIix7XFxcImNvbG9yXFxcIjpbNTEzXX0sW1swLFxcXCJpb25TdHlsZVxcXCIsXFxcImNoaWxkcmVuU3R5bGVcXFwiXV1dLFsyOTQsXFxcImlvbi1idXR0b25zXFxcIix7XFxcImNvbGxhcHNlXFxcIjpbNF19XV1dLFtcXFwiaW9uLXNlbGVjdF8zXFxcIixbWzI4OSxcXFwiaW9uLXNlbGVjdFxcXCIse1xcXCJjYW5jZWxUZXh0XFxcIjpbMSxcXFwiY2FuY2VsLXRleHRcXFwiXSxcXFwiY29sb3JcXFwiOls1MTNdLFxcXCJjb21wYXJlV2l0aFxcXCI6WzEsXFxcImNvbXBhcmUtd2l0aFxcXCJdLFxcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJmaWxsXFxcIjpbMV0sXFxcImVycm9yVGV4dFxcXCI6WzEsXFxcImVycm9yLXRleHRcXFwiXSxcXFwiaGVscGVyVGV4dFxcXCI6WzEsXFxcImhlbHBlci10ZXh0XFxcIl0sXFxcImludGVyZmFjZVxcXCI6WzFdLFxcXCJpbnRlcmZhY2VPcHRpb25zXFxcIjpbOCxcXFwiaW50ZXJmYWNlLW9wdGlvbnNcXFwiXSxcXFwianVzdGlmeVxcXCI6WzFdLFxcXCJsYWJlbFxcXCI6WzFdLFxcXCJsYWJlbFBsYWNlbWVudFxcXCI6WzEsXFxcImxhYmVsLXBsYWNlbWVudFxcXCJdLFxcXCJtdWx0aXBsZVxcXCI6WzRdLFxcXCJuYW1lXFxcIjpbMV0sXFxcIm9rVGV4dFxcXCI6WzEsXFxcIm9rLXRleHRcXFwiXSxcXFwicGxhY2Vob2xkZXJcXFwiOlsxXSxcXFwic2VsZWN0ZWRUZXh0XFxcIjpbMSxcXFwic2VsZWN0ZWQtdGV4dFxcXCJdLFxcXCJ0b2dnbGVJY29uXFxcIjpbMSxcXFwidG9nZ2xlLWljb25cXFwiXSxcXFwiZXhwYW5kZWRJY29uXFxcIjpbMSxcXFwiZXhwYW5kZWQtaWNvblxcXCJdLFxcXCJzaGFwZVxcXCI6WzFdLFxcXCJ2YWx1ZVxcXCI6WzEwMzJdLFxcXCJyZXF1aXJlZFxcXCI6WzRdLFxcXCJpc0V4cGFuZGVkXFxcIjpbMzJdLFxcXCJoYXNGb2N1c1xcXCI6WzMyXSxcXFwib3BlblxcXCI6WzY0XX0sbnVsbCx7XFxcImRpc2FibGVkXFxcIjpbXFxcInN0eWxlQ2hhbmdlZFxcXCJdLFxcXCJpc0V4cGFuZGVkXFxcIjpbXFxcInN0eWxlQ2hhbmdlZFxcXCJdLFxcXCJwbGFjZWhvbGRlclxcXCI6W1xcXCJzdHlsZUNoYW5nZWRcXFwiXSxcXFwidmFsdWVcXFwiOltcXFwic3R5bGVDaGFuZ2VkXFxcIl19XSxbMjU3LFxcXCJpb24tc2VsZWN0LW9wdGlvblxcXCIse1xcXCJkaXNhYmxlZFxcXCI6WzRdLFxcXCJ2YWx1ZVxcXCI6WzhdfV0sWzI5MCxcXFwiaW9uLXNlbGVjdC1wb3BvdmVyXFxcIix7XFxcImhlYWRlclxcXCI6WzFdLFxcXCJzdWJIZWFkZXJcXFwiOlsxLFxcXCJzdWItaGVhZGVyXFxcIl0sXFxcIm1lc3NhZ2VcXFwiOlsxXSxcXFwibXVsdGlwbGVcXFwiOls0XSxcXFwib3B0aW9uc1xcXCI6WzE2XX1dXV0sW1xcXCJpb24tc3Bpbm5lclxcXCIsW1syNTcsXFxcImlvbi1zcGlubmVyXFxcIix7XFxcImNvbG9yXFxcIjpbNTEzXSxcXFwiZHVyYXRpb25cXFwiOlsyXSxcXFwibmFtZVxcXCI6WzFdLFxcXCJwYXVzZWRcXFwiOls0XX1dXV0sW1xcXCJpb24tcmFkaW9fMlxcXCIsW1syODksXFxcImlvbi1yYWRpb1xcXCIse1xcXCJjb2xvclxcXCI6WzUxM10sXFxcIm5hbWVcXFwiOlsxXSxcXFwiZGlzYWJsZWRcXFwiOls0XSxcXFwidmFsdWVcXFwiOls4XSxcXFwibGFiZWxQbGFjZW1lbnRcXFwiOlsxLFxcXCJsYWJlbC1wbGFjZW1lbnRcXFwiXSxcXFwianVzdGlmeVxcXCI6WzFdLFxcXCJhbGlnbm1lbnRcXFwiOlsxXSxcXFwiY2hlY2tlZFxcXCI6WzMyXSxcXFwiYnV0dG9uVGFiaW5kZXhcXFwiOlszMl0sXFxcInNldEZvY3VzXFxcIjpbNjRdLFxcXCJzZXRCdXR0b25UYWJpbmRleFxcXCI6WzY0XX0sbnVsbCx7XFxcInZhbHVlXFxcIjpbXFxcInZhbHVlQ2hhbmdlZFxcXCJdfV0sWzI5MixcXFwiaW9uLXJhZGlvLWdyb3VwXFxcIix7XFxcImFsbG93RW1wdHlTZWxlY3Rpb25cXFwiOls0LFxcXCJhbGxvdy1lbXB0eS1zZWxlY3Rpb25cXFwiXSxcXFwiY29tcGFyZVdpdGhcXFwiOlsxLFxcXCJjb21wYXJlLXdpdGhcXFwiXSxcXFwibmFtZVxcXCI6WzFdLFxcXCJ2YWx1ZVxcXCI6WzEwMzJdLFxcXCJoZWxwZXJUZXh0XFxcIjpbMSxcXFwiaGVscGVyLXRleHRcXFwiXSxcXFwiZXJyb3JUZXh0XFxcIjpbMSxcXFwiZXJyb3ItdGV4dFxcXCJdLFxcXCJzZXRGb2N1c1xcXCI6WzY0XX0sW1s0LFxcXCJrZXlkb3duXFxcIixcXFwib25LZXlkb3duXFxcIl1dLHtcXFwidmFsdWVcXFwiOltcXFwidmFsdWVDaGFuZ2VkXFxcIl19XV1dLFtcXFwiaW9uLXJpcHBsZS1lZmZlY3RcXFwiLFtbMjU3LFxcXCJpb24tcmlwcGxlLWVmZmVjdFxcXCIse1xcXCJ0eXBlXFxcIjpbMV0sXFxcImFkZFJpcHBsZVxcXCI6WzY0XX1dXV0sW1xcXCJpb24tYnV0dG9uXzJcXFwiLFtbMjg5LFxcXCJpb24tYnV0dG9uXFxcIix7XFxcImNvbG9yXFxcIjpbNTEzXSxcXFwiYnV0dG9uVHlwZVxcXCI6WzEwMjUsXFxcImJ1dHRvbi10eXBlXFxcIl0sXFxcImRpc2FibGVkXFxcIjpbNTE2XSxcXFwiZXhwYW5kXFxcIjpbNTEzXSxcXFwiZmlsbFxcXCI6WzE1MzddLFxcXCJyb3V0ZXJEaXJlY3Rpb25cXFwiOlsxLFxcXCJyb3V0ZXItZGlyZWN0aW9uXFxcIl0sXFxcInJvdXRlckFuaW1hdGlvblxcXCI6WzE2LFxcXCJyb3V0ZXItYW5pbWF0aW9uXFxcIl0sXFxcImRvd25sb2FkXFxcIjpbMV0sXFxcImhyZWZcXFwiOlsxXSxcXFwicmVsXFxcIjpbMV0sXFxcInNoYXBlXFxcIjpbNTEzXSxcXFwic2l6ZVxcXCI6WzUxM10sXFxcInN0cm9uZ1xcXCI6WzRdLFxcXCJ0YXJnZXRcXFwiOlsxXSxcXFwidHlwZVxcXCI6WzFdLFxcXCJmb3JtXFxcIjpbMV0sXFxcImlzQ2lyY2xlXFxcIjpbMzJdfSxudWxsLHtcXFwiZGlzYWJsZWRcXFwiOltcXFwiZGlzYWJsZWRDaGFuZ2VkXFxcIl0sXFxcImFyaWEtY2hlY2tlZFxcXCI6W1xcXCJvbkFyaWFDaGFuZ2VkXFxcIl0sXFxcImFyaWEtbGFiZWxcXFwiOltcXFwib25BcmlhQ2hhbmdlZFxcXCJdfV0sWzI1NyxcXFwiaW9uLWljb25cXFwiLHtcXFwibW9kZVxcXCI6WzEwMjVdLFxcXCJjb2xvclxcXCI6WzFdLFxcXCJpb3NcXFwiOlsxXSxcXFwibWRcXFwiOlsxXSxcXFwiZmxpcFJ0bFxcXCI6WzQsXFxcImZsaXAtcnRsXFxcIl0sXFxcIm5hbWVcXFwiOls1MTNdLFxcXCJzcmNcXFwiOlsxXSxcXFwiaWNvblxcXCI6WzhdLFxcXCJzaXplXFxcIjpbMV0sXFxcImxhenlcXFwiOls0XSxcXFwic2FuaXRpemVcXFwiOls0XSxcXFwic3ZnQ29udGVudFxcXCI6WzMyXSxcXFwiaXNWaXNpYmxlXFxcIjpbMzJdfSxudWxsLHtcXFwibmFtZVxcXCI6W1xcXCJsb2FkSWNvblxcXCJdLFxcXCJzcmNcXFwiOltcXFwibG9hZEljb25cXFwiXSxcXFwiaWNvblxcXCI6W1xcXCJsb2FkSWNvblxcXCJdLFxcXCJpb3NcXFwiOltcXFwibG9hZEljb25cXFwiXSxcXFwibWRcXFwiOltcXFwibG9hZEljb25cXFwiXX1dXV1dXCIpLCBvcHRpb25zKTtcbn07XG5leHBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50cyB9OyIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG4oZnVuY3Rpb24gKCkge1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHdpbmRvdyAmJiB2b2lkIDAgIT09IHdpbmRvdy5SZWZsZWN0ICYmIHZvaWQgMCAhPT0gd2luZG93LmN1c3RvbUVsZW1lbnRzKSB7XG4gICAgdmFyIGEgPSBIVE1MRWxlbWVudDtcbiAgICB3aW5kb3cuSFRNTEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gUmVmbGVjdC5jb25zdHJ1Y3QoYSwgW10sIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIH07XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlID0gYS5wcm90b3R5cGU7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSFRNTEVsZW1lbnQ7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKEhUTUxFbGVtZW50LCBhKTtcbiAgfVxufSkoKTtcbmV4cG9ydCAqIGZyb20gJy4uL2Rpc3QvZXNtL2xvYWRlci5qcyc7IiwiaW1wb3J0ICogYXMgaTAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0NvbnRhaW5lclJlZiwgQXR0cmlidXRlLCBPcHRpb25hbCwgU2tpcFNlbGYsIFZpZXdDaGlsZCwgQ29udGVudENoaWxkLCBDb250ZW50Q2hpbGRyZW4sIGZvcndhcmRSZWYsIEluamVjdGFibGUsIGluamVjdCwgSW5qZWN0b3IsIEVudmlyb25tZW50SW5qZWN0b3IsIEFQUF9JTklUSUFMSVpFUiwgTmdab25lLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIE5HX1ZBTElEQVRPUlMsIE1heFZhbGlkYXRvciwgTWluVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0ICogYXMgaTIkMSBmcm9tICdAaW9uaWMvYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVmFsdWVBY2Nlc3Nvciwgc2V0SW9uaWNDbGFzc2VzLCBJb25Sb3V0ZXJPdXRsZXQgYXMgSW9uUm91dGVyT3V0bGV0JDEsIElvblRhYnMgYXMgSW9uVGFicyQxLCBJb25CYWNrQnV0dG9uIGFzIElvbkJhY2tCdXR0b24kMSwgSW9uTmF2IGFzIElvbk5hdiQxLCBSb3V0ZXJMaW5rRGVsZWdhdGVEaXJlY3RpdmUgYXMgUm91dGVyTGlua0RlbGVnYXRlRGlyZWN0aXZlJDEsIFJvdXRlckxpbmtXaXRoSHJlZkRlbGVnYXRlRGlyZWN0aXZlIGFzIFJvdXRlckxpbmtXaXRoSHJlZkRlbGVnYXRlRGlyZWN0aXZlJDEsIElvbk1vZGFsIGFzIElvbk1vZGFsJDEsIElvblBvcG92ZXIgYXMgSW9uUG9wb3ZlciQxLCBPdmVybGF5QmFzZUNvbnRyb2xsZXIsIE1lbnVDb250cm9sbGVyIGFzIE1lbnVDb250cm9sbGVyJDEsIEFuZ3VsYXJEZWxlZ2F0ZSwgcmFmLCBDb25maWdUb2tlbiwgcHJvdmlkZUNvbXBvbmVudElucHV0QmluZGluZyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyL2NvbW1vbic7XG5jb25zdCBfYzAgPSBbXCIqXCJdO1xuY29uc3QgX2MxID0gW1wib3V0bGV0Q29udGVudFwiXTtcbmNvbnN0IF9jMiA9IFtcIm91dGxldFwiXTtcbmNvbnN0IF9jMyA9IFtbW1wiXCIsIFwic2xvdFwiLCBcInRvcFwiXV0sIFwiKlwiLCBbW1wiaW9uLXRhYlwiXV1dO1xuY29uc3QgX2M0ID0gW1wiW3Nsb3Q9dG9wXVwiLCBcIipcIiwgXCJpb24tdGFiXCJdO1xuZnVuY3Rpb24gSW9uVGFic19pb25fcm91dGVyX291dGxldF8zX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgaWYgKHJmICYgMSkge1xuICAgIGNvbnN0IF9yMSA9IGkwLsm1ybVnZXRDdXJyZW50VmlldygpO1xuICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJpb24tcm91dGVyLW91dGxldFwiLCA1LCAxKTtcbiAgICBpMC7Jtcm1bGlzdGVuZXIoXCJzdGFja1dpbGxDaGFuZ2VcIiwgZnVuY3Rpb24gSW9uVGFic19pb25fcm91dGVyX291dGxldF8zX1RlbXBsYXRlX2lvbl9yb3V0ZXJfb3V0bGV0X3N0YWNrV2lsbENoYW5nZV8wX2xpc3RlbmVyKCRldmVudCkge1xuICAgICAgaTAuybXJtXJlc3RvcmVWaWV3KF9yMSk7XG4gICAgICBjb25zdCBjdHhfcjEgPSBpMC7Jtcm1bmV4dENvbnRleHQoKTtcbiAgICAgIHJldHVybiBpMC7Jtcm1cmVzZXRWaWV3KGN0eF9yMS5vblN0YWNrV2lsbENoYW5nZSgkZXZlbnQpKTtcbiAgICB9KShcInN0YWNrRGlkQ2hhbmdlXCIsIGZ1bmN0aW9uIElvblRhYnNfaW9uX3JvdXRlcl9vdXRsZXRfM19UZW1wbGF0ZV9pb25fcm91dGVyX291dGxldF9zdGFja0RpZENoYW5nZV8wX2xpc3RlbmVyKCRldmVudCkge1xuICAgICAgaTAuybXJtXJlc3RvcmVWaWV3KF9yMSk7XG4gICAgICBjb25zdCBjdHhfcjEgPSBpMC7Jtcm1bmV4dENvbnRleHQoKTtcbiAgICAgIHJldHVybiBpMC7Jtcm1cmVzZXRWaWV3KGN0eF9yMS5vblN0YWNrRGlkQ2hhbmdlKCRldmVudCkpO1xuICAgIH0pO1xuICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIElvblRhYnNfbmdfY29udGVudF80X1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgaWYgKHJmICYgMSkge1xuICAgIGkwLsm1ybVwcm9qZWN0aW9uKDAsIDIsIFtcIipuZ0lmXCIsIFwidGFicy5sZW5ndGggPiAwXCJdKTtcbiAgfVxufVxuZnVuY3Rpb24gSW9uTW9kYWxfZGl2XzBfVGVtcGxhdGUocmYsIGN0eCkge1xuICBpZiAocmYgJiAxKSB7XG4gICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcImRpdlwiLCAxKTtcbiAgICBpMC7Jtcm1ZWxlbWVudENvbnRhaW5lcigxLCAyKTtcbiAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICB9XG4gIGlmIChyZiAmIDIpIHtcbiAgICBjb25zdCBjdHhfcjAgPSBpMC7Jtcm1bmV4dENvbnRleHQoKTtcbiAgICBpMC7Jtcm1YWR2YW5jZSgpO1xuICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nVGVtcGxhdGVPdXRsZXRcIiwgY3R4X3IwLnRlbXBsYXRlKTtcbiAgfVxufVxuZnVuY3Rpb24gSW9uUG9wb3Zlcl9uZ19jb250YWluZXJfMF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gIGlmIChyZiAmIDEpIHtcbiAgICBpMC7Jtcm1ZWxlbWVudENvbnRhaW5lcigwLCAxKTtcbiAgfVxuICBpZiAocmYgJiAyKSB7XG4gICAgY29uc3QgY3R4X3IwID0gaTAuybXJtW5leHRDb250ZXh0KCk7XG4gICAgaTAuybXJtXByb3BlcnR5KFwibmdUZW1wbGF0ZU91dGxldFwiLCBjdHhfcjAudGVtcGxhdGUpO1xuICB9XG59XG5leHBvcnQgeyBBbmd1bGFyRGVsZWdhdGUsIENvbmZpZywgRG9tQ29udHJvbGxlciwgSW9uTW9kYWxUb2tlbiwgSW9uaWNSb3V0ZVN0cmF0ZWd5LCBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IF9fZGVjb3JhdGUgfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIGkxIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBET0NVTUVOVCwgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCAqIGFzIGkyIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBhbGVydENvbnRyb2xsZXIsIGNyZWF0ZUFuaW1hdGlvbiwgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24sIGFjdGlvblNoZWV0Q29udHJvbGxlciwgY3JlYXRlR2VzdHVyZSwgbG9hZGluZ0NvbnRyb2xsZXIsIG1lbnVDb250cm9sbGVyLCBtb2RhbENvbnRyb2xsZXIsIHBpY2tlckNvbnRyb2xsZXIsIHBvcG92ZXJDb250cm9sbGVyLCB0b2FzdENvbnRyb2xsZXIsIHNldHVwQ29uZmlnIH0gZnJvbSAnQGlvbmljL2NvcmUnO1xuZXhwb3J0IHsgSW9uaWNTYWZlU3RyaW5nLCBJb25pY1NsaWRlcywgY3JlYXRlQW5pbWF0aW9uLCBjcmVhdGVHZXN0dXJlLCBnZXRJb25QYWdlRWxlbWVudCwgZ2V0UGxhdGZvcm1zLCBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbiwgaW9zVHJhbnNpdGlvbkFuaW1hdGlvbiwgaXNQbGF0Zm9ybSwgbWRUcmFuc2l0aW9uQW5pbWF0aW9uLCBvcGVuVVJMIH0gZnJvbSAnQGlvbmljL2NvcmUnO1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudHMgfSBmcm9tICdAaW9uaWMvY29yZS9sb2FkZXInO1xuY2xhc3MgQm9vbGVhblZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgZXh0ZW5kcyBWYWx1ZUFjY2Vzc29yIHtcbiAgY29uc3RydWN0b3IoaW5qZWN0b3IsIGVsKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIGVsKTtcbiAgfVxuICB3cml0ZVZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IHRoaXMubGFzdFZhbHVlID0gdmFsdWU7XG4gICAgc2V0SW9uaWNDbGFzc2VzKHRoaXMuZWxlbWVudFJlZik7XG4gIH1cbiAgX2hhbmRsZUlvbkNoYW5nZShlbCkge1xuICAgIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UoZWwsIGVsLmNoZWNrZWQpO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBCb29sZWFuVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZV9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgQm9vbGVhblZhbHVlQWNjZXNzb3JEaXJlY3RpdmUpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuSW5qZWN0b3IpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWRpciA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVEaXJlY3RpdmUoe1xuICAgIHR5cGU6IEJvb2xlYW5WYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1jaGVja2JveFwiXSwgW1wiaW9uLXRvZ2dsZVwiXV0sXG4gICAgaG9zdEJpbmRpbmdzOiBmdW5jdGlvbiBCb29sZWFuVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZV9Ib3N0QmluZGluZ3MocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1bGlzdGVuZXIoXCJpb25DaGFuZ2VcIiwgZnVuY3Rpb24gQm9vbGVhblZhbHVlQWNjZXNzb3JEaXJlY3RpdmVfaW9uQ2hhbmdlX0hvc3RCaW5kaW5nSGFuZGxlcigkZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gY3R4Ll9oYW5kbGVJb25DaGFuZ2UoJGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1UHJvdmlkZXJzRmVhdHVyZShbe1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogQm9vbGVhblZhbHVlQWNjZXNzb3JEaXJlY3RpdmUsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1dKSwgaTAuybXJtUluaGVyaXREZWZpbml0aW9uRmVhdHVyZV1cbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShCb29sZWFuVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSwgW3tcbiAgICB0eXBlOiBEaXJlY3RpdmUsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWNoZWNrYm94LGlvbi10b2dnbGUnLFxuICAgICAgcHJvdmlkZXJzOiBbe1xuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IEJvb2xlYW5WYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgfV1cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuSW5qZWN0b3JcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfV07XG4gIH0sIHtcbiAgICBfaGFuZGxlSW9uQ2hhbmdlOiBbe1xuICAgICAgdHlwZTogSG9zdExpc3RlbmVyLFxuICAgICAgYXJnczogWydpb25DaGFuZ2UnLCBbJyRldmVudC50YXJnZXQnXV1cbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBOdW1lcmljVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSBleHRlbmRzIFZhbHVlQWNjZXNzb3Ige1xuICBlbDtcbiAgY29uc3RydWN0b3IoaW5qZWN0b3IsIGVsKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIGVsKTtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cbiAgaGFuZGxlSW5wdXRFdmVudChlbCkge1xuICAgIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UoZWwsIGVsLnZhbHVlKTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC50YWdOYW1lID09PSAnSU9OLUlOUFVUJyB8fCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gJ0lPTi1JTlBVVC1PVFAnKSB7XG4gICAgICBzdXBlci5yZWdpc3Rlck9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgICAgZm4odmFsdWUgPT09ICcnID8gbnVsbCA6IHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdXBlci5yZWdpc3Rlck9uQ2hhbmdlKGZuKTtcbiAgICB9XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIE51bWVyaWNWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBOdW1lcmljVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5JbmplY3RvciksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZikpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZGlyID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZURpcmVjdGl2ZSh7XG4gICAgdHlwZTogTnVtZXJpY1ZhbHVlQWNjZXNzb3JEaXJlY3RpdmUsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWlucHV0XCIsIFwidHlwZVwiLCBcIm51bWJlclwiXSwgW1wiaW9uLWlucHV0LW90cFwiLCAzLCBcInR5cGVcIiwgXCJ0ZXh0XCJdLCBbXCJpb24tcmFuZ2VcIl1dLFxuICAgIGhvc3RCaW5kaW5nczogZnVuY3Rpb24gTnVtZXJpY1ZhbHVlQWNjZXNzb3JEaXJlY3RpdmVfSG9zdEJpbmRpbmdzKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwiaW9uSW5wdXRcIiwgZnVuY3Rpb24gTnVtZXJpY1ZhbHVlQWNjZXNzb3JEaXJlY3RpdmVfaW9uSW5wdXRfSG9zdEJpbmRpbmdIYW5kbGVyKCRldmVudCkge1xuICAgICAgICAgIHJldHVybiBjdHguaGFuZGxlSW5wdXRFdmVudCgkZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBmZWF0dXJlczogW2kwLsm1ybVQcm92aWRlcnNGZWF0dXJlKFt7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBOdW1lcmljVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfV0pLCBpMC7Jtcm1SW5oZXJpdERlZmluaXRpb25GZWF0dXJlXVxuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKE51bWVyaWNWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLCBbe1xuICAgIHR5cGU6IERpcmVjdGl2ZSxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24taW5wdXRbdHlwZT1udW1iZXJdLGlvbi1pbnB1dC1vdHA6bm90KFt0eXBlPXRleHRdKSxpb24tcmFuZ2UnLFxuICAgICAgcHJvdmlkZXJzOiBbe1xuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IE51bWVyaWNWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgfV1cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuSW5qZWN0b3JcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfV07XG4gIH0sIHtcbiAgICBoYW5kbGVJbnB1dEV2ZW50OiBbe1xuICAgICAgdHlwZTogSG9zdExpc3RlbmVyLFxuICAgICAgYXJnczogWydpb25JbnB1dCcsIFsnJGV2ZW50LnRhcmdldCddXVxuICAgIH1dXG4gIH0pO1xufSkoKTtcbmNsYXNzIFNlbGVjdFZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgZXh0ZW5kcyBWYWx1ZUFjY2Vzc29yIHtcbiAgY29uc3RydWN0b3IoaW5qZWN0b3IsIGVsKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIGVsKTtcbiAgfVxuICBfaGFuZGxlQ2hhbmdlRXZlbnQoZWwpIHtcbiAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKGVsLCBlbC52YWx1ZSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIFNlbGVjdFZhbHVlQWNjZXNzb3JEaXJlY3RpdmVfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IFNlbGVjdFZhbHVlQWNjZXNzb3JEaXJlY3RpdmUpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuSW5qZWN0b3IpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWRpciA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVEaXJlY3RpdmUoe1xuICAgIHR5cGU6IFNlbGVjdFZhbHVlQWNjZXNzb3JEaXJlY3RpdmUsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLXNlbGVjdFwiXSwgW1wiaW9uLXJhZGlvLWdyb3VwXCJdLCBbXCJpb24tc2VnbWVudFwiXSwgW1wiaW9uLWRhdGV0aW1lXCJdXSxcbiAgICBob3N0QmluZGluZ3M6IGZ1bmN0aW9uIFNlbGVjdFZhbHVlQWNjZXNzb3JEaXJlY3RpdmVfSG9zdEJpbmRpbmdzKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwiaW9uQ2hhbmdlXCIsIGZ1bmN0aW9uIFNlbGVjdFZhbHVlQWNjZXNzb3JEaXJlY3RpdmVfaW9uQ2hhbmdlX0hvc3RCaW5kaW5nSGFuZGxlcigkZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gY3R4Ll9oYW5kbGVDaGFuZ2VFdmVudCgkZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBmZWF0dXJlczogW2kwLsm1ybVQcm92aWRlcnNGZWF0dXJlKFt7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBTZWxlY3RWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XSksIGkwLsm1ybVJbmhlcml0RGVmaW5pdGlvbkZlYXR1cmVdXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoU2VsZWN0VmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSwgW3tcbiAgICB0eXBlOiBEaXJlY3RpdmUsXG4gICAgYXJnczogW3tcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3IgKi9cbiAgICAgIHNlbGVjdG9yOiAnaW9uLXNlbGVjdCwgaW9uLXJhZGlvLWdyb3VwLCBpb24tc2VnbWVudCwgaW9uLWRhdGV0aW1lJyxcbiAgICAgIHByb3ZpZGVyczogW3tcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBTZWxlY3RWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgfV1cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuSW5qZWN0b3JcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfV07XG4gIH0sIHtcbiAgICBfaGFuZGxlQ2hhbmdlRXZlbnQ6IFt7XG4gICAgICB0eXBlOiBIb3N0TGlzdGVuZXIsXG4gICAgICBhcmdzOiBbJ2lvbkNoYW5nZScsIFsnJGV2ZW50LnRhcmdldCddXVxuICAgIH1dXG4gIH0pO1xufSkoKTtcbmNsYXNzIFRleHRWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIGV4dGVuZHMgVmFsdWVBY2Nlc3NvciB7XG4gIGNvbnN0cnVjdG9yKGluamVjdG9yLCBlbCkge1xuICAgIHN1cGVyKGluamVjdG9yLCBlbCk7XG4gIH1cbiAgX2hhbmRsZUlucHV0RXZlbnQoZWwpIHtcbiAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKGVsLCBlbC52YWx1ZSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIFRleHRWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBUZXh0VmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5JbmplY3RvciksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZikpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZGlyID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZURpcmVjdGl2ZSh7XG4gICAgdHlwZTogVGV4dFZhbHVlQWNjZXNzb3JEaXJlY3RpdmUsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWlucHV0XCIsIDMsIFwidHlwZVwiLCBcIm51bWJlclwiXSwgW1wiaW9uLWlucHV0LW90cFwiLCBcInR5cGVcIiwgXCJ0ZXh0XCJdLCBbXCJpb24tdGV4dGFyZWFcIl0sIFtcImlvbi1zZWFyY2hiYXJcIl1dLFxuICAgIGhvc3RCaW5kaW5nczogZnVuY3Rpb24gVGV4dFZhbHVlQWNjZXNzb3JEaXJlY3RpdmVfSG9zdEJpbmRpbmdzKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWxpc3RlbmVyKFwiaW9uSW5wdXRcIiwgZnVuY3Rpb24gVGV4dFZhbHVlQWNjZXNzb3JEaXJlY3RpdmVfaW9uSW5wdXRfSG9zdEJpbmRpbmdIYW5kbGVyKCRldmVudCkge1xuICAgICAgICAgIHJldHVybiBjdHguX2hhbmRsZUlucHV0RXZlbnQoJGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1UHJvdmlkZXJzRmVhdHVyZShbe1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogVGV4dFZhbHVlQWNjZXNzb3JEaXJlY3RpdmUsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1dKSwgaTAuybXJtUluaGVyaXREZWZpbml0aW9uRmVhdHVyZV1cbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShUZXh0VmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSwgW3tcbiAgICB0eXBlOiBEaXJlY3RpdmUsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWlucHV0Om5vdChbdHlwZT1udW1iZXJdKSxpb24taW5wdXQtb3RwW3R5cGU9dGV4dF0saW9uLXRleHRhcmVhLGlvbi1zZWFyY2hiYXInLFxuICAgICAgcHJvdmlkZXJzOiBbe1xuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IFRleHRWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgfV1cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuSW5qZWN0b3JcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfV07XG4gIH0sIHtcbiAgICBfaGFuZGxlSW5wdXRFdmVudDogW3tcbiAgICAgIHR5cGU6IEhvc3RMaXN0ZW5lcixcbiAgICAgIGFyZ3M6IFsnaW9uSW5wdXQnLCBbJyRldmVudC50YXJnZXQnXV1cbiAgICB9XVxuICB9KTtcbn0pKCk7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuY29uc3QgcHJveHlJbnB1dHMgPSAoQ21wLCBpbnB1dHMpID0+IHtcbiAgY29uc3QgUHJvdG90eXBlID0gQ21wLnByb3RvdHlwZTtcbiAgaW5wdXRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFByb3RvdHlwZSwgaXRlbSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbFtpdGVtXTtcbiAgICAgIH0sXG4gICAgICBzZXQodmFsKSB7XG4gICAgICAgIHRoaXMuei5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmVsW2l0ZW1dID0gdmFsKTtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIEluIHRoZSBldmVudCB0aGF0IHByb3h5SW5wdXRzIGlzIGNhbGxlZFxuICAgICAgICogbXVsdGlwbGUgdGltZXMgcmUtZGVmaW5pbmcgdGhlc2UgaW5wdXRzXG4gICAgICAgKiB3aWxsIGNhdXNlIGFuIGVycm9yIHRvIGJlIHRocm93bi4gQXMgYSByZXN1bHRcbiAgICAgICAqIHdlIHNldCBjb25maWd1cmFibGU6IHRydWUgdG8gaW5kaWNhdGUgdGhlc2VcbiAgICAgICAqIHByb3BlcnRpZXMgY2FuIGJlIGNoYW5nZWQuXG4gICAgICAgKi9cbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9KTtcbn07XG5jb25zdCBwcm94eU1ldGhvZHMgPSAoQ21wLCBtZXRob2RzKSA9PiB7XG4gIGNvbnN0IFByb3RvdHlwZSA9IENtcC5wcm90b3R5cGU7XG4gIG1ldGhvZHMuZm9yRWFjaChtZXRob2ROYW1lID0+IHtcbiAgICBQcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgcmV0dXJuIHRoaXMuei5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmVsW21ldGhvZE5hbWVdLmFwcGx5KHRoaXMuZWwsIGFyZ3MpKTtcbiAgICB9O1xuICB9KTtcbn07XG5jb25zdCBwcm94eU91dHB1dHMgPSAoaW5zdGFuY2UsIGVsLCBldmVudHMpID0+IHtcbiAgZXZlbnRzLmZvckVhY2goZXZlbnROYW1lID0+IGluc3RhbmNlW2V2ZW50TmFtZV0gPSBmcm9tRXZlbnQoZWwsIGV2ZW50TmFtZSkpO1xufTtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSAodGFnTmFtZSwgY3VzdG9tRWxlbWVudCkgPT4ge1xuICBpZiAoY3VzdG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjdXN0b21FbGVtZW50cyAhPT0gJ3VuZGVmaW5lZCcgJiYgIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjdXN0b21FbGVtZW50KTtcbiAgfVxufTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogb25seS1hcnJvdy1mdW5jdGlvbnNcbmZ1bmN0aW9uIFByb3h5Q21wKG9wdHMpIHtcbiAgY29uc3QgZGVjb3JhdG9yID0gZnVuY3Rpb24gKGNscykge1xuICAgIGNvbnN0IHtcbiAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnRGbixcbiAgICAgIGlucHV0cyxcbiAgICAgIG1ldGhvZHNcbiAgICB9ID0gb3B0cztcbiAgICBpZiAoZGVmaW5lQ3VzdG9tRWxlbWVudEZuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlZmluZUN1c3RvbUVsZW1lbnRGbigpO1xuICAgIH1cbiAgICBpZiAoaW5wdXRzKSB7XG4gICAgICBwcm94eUlucHV0cyhjbHMsIGlucHV0cyk7XG4gICAgfVxuICAgIGlmIChtZXRob2RzKSB7XG4gICAgICBwcm94eU1ldGhvZHMoY2xzLCBtZXRob2RzKTtcbiAgICB9XG4gICAgcmV0dXJuIGNscztcbiAgfTtcbiAgcmV0dXJuIGRlY29yYXRvcjtcbn1cbmxldCBJb25BY2NvcmRpb24gPSBjbGFzcyBJb25BY2NvcmRpb24ge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25BY2NvcmRpb25fRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbkFjY29yZGlvbikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25BY2NvcmRpb24sXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWFjY29yZGlvblwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiLFxuICAgICAgbW9kZTogXCJtb2RlXCIsXG4gICAgICByZWFkb25seTogXCJyZWFkb25seVwiLFxuICAgICAgdG9nZ2xlSWNvbjogXCJ0b2dnbGVJY29uXCIsXG4gICAgICB0b2dnbGVJY29uU2xvdDogXCJ0b2dnbGVJY29uU2xvdFwiLFxuICAgICAgdmFsdWU6IFwidmFsdWVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uQWNjb3JkaW9uX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25BY2NvcmRpb24gPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydkaXNhYmxlZCcsICdtb2RlJywgJ3JlYWRvbmx5JywgJ3RvZ2dsZUljb24nLCAndG9nZ2xlSWNvblNsb3QnLCAndmFsdWUnXVxufSldLCBJb25BY2NvcmRpb24pO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uQWNjb3JkaW9uLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tYWNjb3JkaW9uJyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnbW9kZScsICdyZWFkb25seScsICd0b2dnbGVJY29uJywgJ3RvZ2dsZUljb25TbG90JywgJ3ZhbHVlJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25BY2NvcmRpb25Hcm91cCA9IGNsYXNzIElvbkFjY29yZGlvbkdyb3VwIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydpb25DaGFuZ2UnXSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbkFjY29yZGlvbkdyb3VwX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25BY2NvcmRpb25Hcm91cCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25BY2NvcmRpb25Hcm91cCxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tYWNjb3JkaW9uLWdyb3VwXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGFuaW1hdGVkOiBcImFuaW1hdGVkXCIsXG4gICAgICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiLFxuICAgICAgZXhwYW5kOiBcImV4cGFuZFwiLFxuICAgICAgbW9kZTogXCJtb2RlXCIsXG4gICAgICBtdWx0aXBsZTogXCJtdWx0aXBsZVwiLFxuICAgICAgcmVhZG9ubHk6IFwicmVhZG9ubHlcIixcbiAgICAgIHZhbHVlOiBcInZhbHVlXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvbkFjY29yZGlvbkdyb3VwX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25BY2NvcmRpb25Hcm91cCA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FuaW1hdGVkJywgJ2Rpc2FibGVkJywgJ2V4cGFuZCcsICdtb2RlJywgJ211bHRpcGxlJywgJ3JlYWRvbmx5JywgJ3ZhbHVlJ11cbn0pXSwgSW9uQWNjb3JkaW9uR3JvdXApO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uQWNjb3JkaW9uR3JvdXAsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1hY2NvcmRpb24tZ3JvdXAnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydhbmltYXRlZCcsICdkaXNhYmxlZCcsICdleHBhbmQnLCAnbW9kZScsICdtdWx0aXBsZScsICdyZWFkb25seScsICd2YWx1ZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uQWN0aW9uU2hlZXQgPSBjbGFzcyBJb25BY3Rpb25TaGVldCB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnaW9uQWN0aW9uU2hlZXREaWRQcmVzZW50JywgJ2lvbkFjdGlvblNoZWV0V2lsbFByZXNlbnQnLCAnaW9uQWN0aW9uU2hlZXRXaWxsRGlzbWlzcycsICdpb25BY3Rpb25TaGVldERpZERpc21pc3MnLCAnZGlkUHJlc2VudCcsICd3aWxsUHJlc2VudCcsICd3aWxsRGlzbWlzcycsICdkaWREaXNtaXNzJ10pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25BY3Rpb25TaGVldF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uQWN0aW9uU2hlZXQpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uQWN0aW9uU2hlZXQsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWFjdGlvbi1zaGVldFwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBhbmltYXRlZDogXCJhbmltYXRlZFwiLFxuICAgICAgYmFja2Ryb3BEaXNtaXNzOiBcImJhY2tkcm9wRGlzbWlzc1wiLFxuICAgICAgYnV0dG9uczogXCJidXR0b25zXCIsXG4gICAgICBjc3NDbGFzczogXCJjc3NDbGFzc1wiLFxuICAgICAgZW50ZXJBbmltYXRpb246IFwiZW50ZXJBbmltYXRpb25cIixcbiAgICAgIGhlYWRlcjogXCJoZWFkZXJcIixcbiAgICAgIGh0bWxBdHRyaWJ1dGVzOiBcImh0bWxBdHRyaWJ1dGVzXCIsXG4gICAgICBpc09wZW46IFwiaXNPcGVuXCIsXG4gICAgICBrZXlib2FyZENsb3NlOiBcImtleWJvYXJkQ2xvc2VcIixcbiAgICAgIGxlYXZlQW5pbWF0aW9uOiBcImxlYXZlQW5pbWF0aW9uXCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIixcbiAgICAgIHN1YkhlYWRlcjogXCJzdWJIZWFkZXJcIixcbiAgICAgIHRyYW5zbHVjZW50OiBcInRyYW5zbHVjZW50XCIsXG4gICAgICB0cmlnZ2VyOiBcInRyaWdnZXJcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uQWN0aW9uU2hlZXRfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbkFjdGlvblNoZWV0ID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYW5pbWF0ZWQnLCAnYmFja2Ryb3BEaXNtaXNzJywgJ2J1dHRvbnMnLCAnY3NzQ2xhc3MnLCAnZW50ZXJBbmltYXRpb24nLCAnaGVhZGVyJywgJ2h0bWxBdHRyaWJ1dGVzJywgJ2lzT3BlbicsICdrZXlib2FyZENsb3NlJywgJ2xlYXZlQW5pbWF0aW9uJywgJ21vZGUnLCAnc3ViSGVhZGVyJywgJ3RyYW5zbHVjZW50JywgJ3RyaWdnZXInXSxcbiAgbWV0aG9kczogWydwcmVzZW50JywgJ2Rpc21pc3MnLCAnb25EaWREaXNtaXNzJywgJ29uV2lsbERpc21pc3MnXVxufSldLCBJb25BY3Rpb25TaGVldCk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25BY3Rpb25TaGVldCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWFjdGlvbi1zaGVldCcsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2FuaW1hdGVkJywgJ2JhY2tkcm9wRGlzbWlzcycsICdidXR0b25zJywgJ2Nzc0NsYXNzJywgJ2VudGVyQW5pbWF0aW9uJywgJ2hlYWRlcicsICdodG1sQXR0cmlidXRlcycsICdpc09wZW4nLCAna2V5Ym9hcmRDbG9zZScsICdsZWF2ZUFuaW1hdGlvbicsICdtb2RlJywgJ3N1YkhlYWRlcicsICd0cmFuc2x1Y2VudCcsICd0cmlnZ2VyJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25BbGVydCA9IGNsYXNzIElvbkFsZXJ0IHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydpb25BbGVydERpZFByZXNlbnQnLCAnaW9uQWxlcnRXaWxsUHJlc2VudCcsICdpb25BbGVydFdpbGxEaXNtaXNzJywgJ2lvbkFsZXJ0RGlkRGlzbWlzcycsICdkaWRQcmVzZW50JywgJ3dpbGxQcmVzZW50JywgJ3dpbGxEaXNtaXNzJywgJ2RpZERpc21pc3MnXSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbkFsZXJ0X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25BbGVydCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25BbGVydCxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tYWxlcnRcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgYW5pbWF0ZWQ6IFwiYW5pbWF0ZWRcIixcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogXCJiYWNrZHJvcERpc21pc3NcIixcbiAgICAgIGJ1dHRvbnM6IFwiYnV0dG9uc1wiLFxuICAgICAgY3NzQ2xhc3M6IFwiY3NzQ2xhc3NcIixcbiAgICAgIGVudGVyQW5pbWF0aW9uOiBcImVudGVyQW5pbWF0aW9uXCIsXG4gICAgICBoZWFkZXI6IFwiaGVhZGVyXCIsXG4gICAgICBodG1sQXR0cmlidXRlczogXCJodG1sQXR0cmlidXRlc1wiLFxuICAgICAgaW5wdXRzOiBcImlucHV0c1wiLFxuICAgICAgaXNPcGVuOiBcImlzT3BlblwiLFxuICAgICAga2V5Ym9hcmRDbG9zZTogXCJrZXlib2FyZENsb3NlXCIsXG4gICAgICBsZWF2ZUFuaW1hdGlvbjogXCJsZWF2ZUFuaW1hdGlvblwiLFxuICAgICAgbWVzc2FnZTogXCJtZXNzYWdlXCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIixcbiAgICAgIHN1YkhlYWRlcjogXCJzdWJIZWFkZXJcIixcbiAgICAgIHRyYW5zbHVjZW50OiBcInRyYW5zbHVjZW50XCIsXG4gICAgICB0cmlnZ2VyOiBcInRyaWdnZXJcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uQWxlcnRfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbkFsZXJ0ID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYW5pbWF0ZWQnLCAnYmFja2Ryb3BEaXNtaXNzJywgJ2J1dHRvbnMnLCAnY3NzQ2xhc3MnLCAnZW50ZXJBbmltYXRpb24nLCAnaGVhZGVyJywgJ2h0bWxBdHRyaWJ1dGVzJywgJ2lucHV0cycsICdpc09wZW4nLCAna2V5Ym9hcmRDbG9zZScsICdsZWF2ZUFuaW1hdGlvbicsICdtZXNzYWdlJywgJ21vZGUnLCAnc3ViSGVhZGVyJywgJ3RyYW5zbHVjZW50JywgJ3RyaWdnZXInXSxcbiAgbWV0aG9kczogWydwcmVzZW50JywgJ2Rpc21pc3MnLCAnb25EaWREaXNtaXNzJywgJ29uV2lsbERpc21pc3MnXVxufSldLCBJb25BbGVydCk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25BbGVydCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWFsZXJ0JyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnYW5pbWF0ZWQnLCAnYmFja2Ryb3BEaXNtaXNzJywgJ2J1dHRvbnMnLCAnY3NzQ2xhc3MnLCAnZW50ZXJBbmltYXRpb24nLCAnaGVhZGVyJywgJ2h0bWxBdHRyaWJ1dGVzJywgJ2lucHV0cycsICdpc09wZW4nLCAna2V5Ym9hcmRDbG9zZScsICdsZWF2ZUFuaW1hdGlvbicsICdtZXNzYWdlJywgJ21vZGUnLCAnc3ViSGVhZGVyJywgJ3RyYW5zbHVjZW50JywgJ3RyaWdnZXInXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkFwcCA9IGNsYXNzIElvbkFwcCB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbkFwcF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uQXBwKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvbkFwcCxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tYXBwXCJdXSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25BcHBfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbkFwcCA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgbWV0aG9kczogWydzZXRGb2N1cyddXG59KV0sIElvbkFwcCk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25BcHAsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1hcHAnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogW11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25BdmF0YXIgPSBjbGFzcyBJb25BdmF0YXIge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25BdmF0YXJfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbkF2YXRhcikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25BdmF0YXIsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWF2YXRhclwiXV0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uQXZhdGFyX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25BdmF0YXIgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7fSldLCBJb25BdmF0YXIpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uQXZhdGFyLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tYXZhdGFyJyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFtdXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uQmFja2Ryb3AgPSBjbGFzcyBJb25CYWNrZHJvcCB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnaW9uQmFja2Ryb3BUYXAnXSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbkJhY2tkcm9wX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25CYWNrZHJvcCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25CYWNrZHJvcCxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tYmFja2Ryb3BcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgc3RvcFByb3BhZ2F0aW9uOiBcInN0b3BQcm9wYWdhdGlvblwiLFxuICAgICAgdGFwcGFibGU6IFwidGFwcGFibGVcIixcbiAgICAgIHZpc2libGU6IFwidmlzaWJsZVwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25CYWNrZHJvcF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uQmFja2Ryb3AgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydzdG9wUHJvcGFnYXRpb24nLCAndGFwcGFibGUnLCAndmlzaWJsZSddXG59KV0sIElvbkJhY2tkcm9wKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbkJhY2tkcm9wLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tYmFja2Ryb3AnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydzdG9wUHJvcGFnYXRpb24nLCAndGFwcGFibGUnLCAndmlzaWJsZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uQmFkZ2UgPSBjbGFzcyBJb25CYWRnZSB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbkJhZGdlX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25CYWRnZSkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25CYWRnZSxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tYmFkZ2VcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIG1vZGU6IFwibW9kZVwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25CYWRnZV9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uQmFkZ2UgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xvcicsICdtb2RlJ11cbn0pXSwgSW9uQmFkZ2UpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uQmFkZ2UsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1iYWRnZScsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2NvbG9yJywgJ21vZGUnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkJyZWFkY3J1bWIgPSBjbGFzcyBJb25CcmVhZGNydW1iIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydpb25Gb2N1cycsICdpb25CbHVyJ10pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25CcmVhZGNydW1iX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25CcmVhZGNydW1iKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvbkJyZWFkY3J1bWIsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWJyZWFkY3J1bWJcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgYWN0aXZlOiBcImFjdGl2ZVwiLFxuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIsXG4gICAgICBkb3dubG9hZDogXCJkb3dubG9hZFwiLFxuICAgICAgaHJlZjogXCJocmVmXCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIixcbiAgICAgIHJlbDogXCJyZWxcIixcbiAgICAgIHJvdXRlckFuaW1hdGlvbjogXCJyb3V0ZXJBbmltYXRpb25cIixcbiAgICAgIHJvdXRlckRpcmVjdGlvbjogXCJyb3V0ZXJEaXJlY3Rpb25cIixcbiAgICAgIHNlcGFyYXRvcjogXCJzZXBhcmF0b3JcIixcbiAgICAgIHRhcmdldDogXCJ0YXJnZXRcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uQnJlYWRjcnVtYl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uQnJlYWRjcnVtYiA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FjdGl2ZScsICdjb2xvcicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdocmVmJywgJ21vZGUnLCAncmVsJywgJ3JvdXRlckFuaW1hdGlvbicsICdyb3V0ZXJEaXJlY3Rpb24nLCAnc2VwYXJhdG9yJywgJ3RhcmdldCddXG59KV0sIElvbkJyZWFkY3J1bWIpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uQnJlYWRjcnVtYiwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWJyZWFkY3J1bWInLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydhY3RpdmUnLCAnY29sb3InLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnaHJlZicsICdtb2RlJywgJ3JlbCcsICdyb3V0ZXJBbmltYXRpb24nLCAncm91dGVyRGlyZWN0aW9uJywgJ3NlcGFyYXRvcicsICd0YXJnZXQnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkJyZWFkY3J1bWJzID0gY2xhc3MgSW9uQnJlYWRjcnVtYnMge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2lvbkNvbGxhcHNlZENsaWNrJ10pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25CcmVhZGNydW1ic19GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uQnJlYWRjcnVtYnMpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uQnJlYWRjcnVtYnMsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWJyZWFkY3J1bWJzXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBpdGVtc0FmdGVyQ29sbGFwc2U6IFwiaXRlbXNBZnRlckNvbGxhcHNlXCIsXG4gICAgICBpdGVtc0JlZm9yZUNvbGxhcHNlOiBcIml0ZW1zQmVmb3JlQ29sbGFwc2VcIixcbiAgICAgIG1heEl0ZW1zOiBcIm1heEl0ZW1zXCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uQnJlYWRjcnVtYnNfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbkJyZWFkY3J1bWJzID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sb3InLCAnaXRlbXNBZnRlckNvbGxhcHNlJywgJ2l0ZW1zQmVmb3JlQ29sbGFwc2UnLCAnbWF4SXRlbXMnLCAnbW9kZSddXG59KV0sIElvbkJyZWFkY3J1bWJzKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbkJyZWFkY3J1bWJzLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tYnJlYWRjcnVtYnMnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydjb2xvcicsICdpdGVtc0FmdGVyQ29sbGFwc2UnLCAnaXRlbXNCZWZvcmVDb2xsYXBzZScsICdtYXhJdGVtcycsICdtb2RlJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25CdXR0b24gPSBjbGFzcyBJb25CdXR0b24ge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2lvbkZvY3VzJywgJ2lvbkJsdXInXSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbkJ1dHRvbl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uQnV0dG9uKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvbkJ1dHRvbixcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tYnV0dG9uXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGJ1dHRvblR5cGU6IFwiYnV0dG9uVHlwZVwiLFxuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIsXG4gICAgICBkb3dubG9hZDogXCJkb3dubG9hZFwiLFxuICAgICAgZXhwYW5kOiBcImV4cGFuZFwiLFxuICAgICAgZmlsbDogXCJmaWxsXCIsXG4gICAgICBmb3JtOiBcImZvcm1cIixcbiAgICAgIGhyZWY6IFwiaHJlZlwiLFxuICAgICAgbW9kZTogXCJtb2RlXCIsXG4gICAgICByZWw6IFwicmVsXCIsXG4gICAgICByb3V0ZXJBbmltYXRpb246IFwicm91dGVyQW5pbWF0aW9uXCIsXG4gICAgICByb3V0ZXJEaXJlY3Rpb246IFwicm91dGVyRGlyZWN0aW9uXCIsXG4gICAgICBzaGFwZTogXCJzaGFwZVwiLFxuICAgICAgc2l6ZTogXCJzaXplXCIsXG4gICAgICBzdHJvbmc6IFwic3Ryb25nXCIsXG4gICAgICB0YXJnZXQ6IFwidGFyZ2V0XCIsXG4gICAgICB0eXBlOiBcInR5cGVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uQnV0dG9uX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25CdXR0b24gPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydidXR0b25UeXBlJywgJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2V4cGFuZCcsICdmaWxsJywgJ2Zvcm0nLCAnaHJlZicsICdtb2RlJywgJ3JlbCcsICdyb3V0ZXJBbmltYXRpb24nLCAncm91dGVyRGlyZWN0aW9uJywgJ3NoYXBlJywgJ3NpemUnLCAnc3Ryb25nJywgJ3RhcmdldCcsICd0eXBlJ11cbn0pXSwgSW9uQnV0dG9uKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbkJ1dHRvbiwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWJ1dHRvbicsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2J1dHRvblR5cGUnLCAnY29sb3InLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnZXhwYW5kJywgJ2ZpbGwnLCAnZm9ybScsICdocmVmJywgJ21vZGUnLCAncmVsJywgJ3JvdXRlckFuaW1hdGlvbicsICdyb3V0ZXJEaXJlY3Rpb24nLCAnc2hhcGUnLCAnc2l6ZScsICdzdHJvbmcnLCAndGFyZ2V0JywgJ3R5cGUnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkJ1dHRvbnMgPSBjbGFzcyBJb25CdXR0b25zIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uQnV0dG9uc19GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uQnV0dG9ucykoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25CdXR0b25zLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1idXR0b25zXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbGxhcHNlOiBcImNvbGxhcHNlXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvbkJ1dHRvbnNfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbkJ1dHRvbnMgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xsYXBzZSddXG59KV0sIElvbkJ1dHRvbnMpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uQnV0dG9ucywgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWJ1dHRvbnMnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydjb2xsYXBzZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uQ2FyZCA9IGNsYXNzIElvbkNhcmQge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25DYXJkX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25DYXJkKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvbkNhcmQsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWNhcmRcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgYnV0dG9uOiBcImJ1dHRvblwiLFxuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIsXG4gICAgICBkb3dubG9hZDogXCJkb3dubG9hZFwiLFxuICAgICAgaHJlZjogXCJocmVmXCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIixcbiAgICAgIHJlbDogXCJyZWxcIixcbiAgICAgIHJvdXRlckFuaW1hdGlvbjogXCJyb3V0ZXJBbmltYXRpb25cIixcbiAgICAgIHJvdXRlckRpcmVjdGlvbjogXCJyb3V0ZXJEaXJlY3Rpb25cIixcbiAgICAgIHRhcmdldDogXCJ0YXJnZXRcIixcbiAgICAgIHR5cGU6IFwidHlwZVwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25DYXJkX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25DYXJkID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYnV0dG9uJywgJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2hyZWYnLCAnbW9kZScsICdyZWwnLCAncm91dGVyQW5pbWF0aW9uJywgJ3JvdXRlckRpcmVjdGlvbicsICd0YXJnZXQnLCAndHlwZSddXG59KV0sIElvbkNhcmQpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uQ2FyZCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWNhcmQnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydidXR0b24nLCAnY29sb3InLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnaHJlZicsICdtb2RlJywgJ3JlbCcsICdyb3V0ZXJBbmltYXRpb24nLCAncm91dGVyRGlyZWN0aW9uJywgJ3RhcmdldCcsICd0eXBlJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25DYXJkQ29udGVudCA9IGNsYXNzIElvbkNhcmRDb250ZW50IHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uQ2FyZENvbnRlbnRfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbkNhcmRDb250ZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvbkNhcmRDb250ZW50LFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1jYXJkLWNvbnRlbnRcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgbW9kZTogXCJtb2RlXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvbkNhcmRDb250ZW50X1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25DYXJkQ29udGVudCA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ21vZGUnXVxufSldLCBJb25DYXJkQ29udGVudCk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25DYXJkQ29udGVudCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWNhcmQtY29udGVudCcsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ21vZGUnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkNhcmRIZWFkZXIgPSBjbGFzcyBJb25DYXJkSGVhZGVyIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uQ2FyZEhlYWRlcl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uQ2FyZEhlYWRlcikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25DYXJkSGVhZGVyLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1jYXJkLWhlYWRlclwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBjb2xvcjogXCJjb2xvclwiLFxuICAgICAgbW9kZTogXCJtb2RlXCIsXG4gICAgICB0cmFuc2x1Y2VudDogXCJ0cmFuc2x1Y2VudFwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25DYXJkSGVhZGVyX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25DYXJkSGVhZGVyID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sb3InLCAnbW9kZScsICd0cmFuc2x1Y2VudCddXG59KV0sIElvbkNhcmRIZWFkZXIpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uQ2FyZEhlYWRlciwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWNhcmQtaGVhZGVyJyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnY29sb3InLCAnbW9kZScsICd0cmFuc2x1Y2VudCddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uQ2FyZFN1YnRpdGxlID0gY2xhc3MgSW9uQ2FyZFN1YnRpdGxlIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uQ2FyZFN1YnRpdGxlX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25DYXJkU3VidGl0bGUpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uQ2FyZFN1YnRpdGxlLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1jYXJkLXN1YnRpdGxlXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uQ2FyZFN1YnRpdGxlX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25DYXJkU3VidGl0bGUgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xvcicsICdtb2RlJ11cbn0pXSwgSW9uQ2FyZFN1YnRpdGxlKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbkNhcmRTdWJ0aXRsZSwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWNhcmQtc3VidGl0bGUnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydjb2xvcicsICdtb2RlJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25DYXJkVGl0bGUgPSBjbGFzcyBJb25DYXJkVGl0bGUge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25DYXJkVGl0bGVfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbkNhcmRUaXRsZSkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25DYXJkVGl0bGUsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWNhcmQtdGl0bGVcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIG1vZGU6IFwibW9kZVwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25DYXJkVGl0bGVfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbkNhcmRUaXRsZSA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ21vZGUnXVxufSldLCBJb25DYXJkVGl0bGUpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uQ2FyZFRpdGxlLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tY2FyZC10aXRsZScsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2NvbG9yJywgJ21vZGUnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkNoZWNrYm94ID0gY2xhc3MgSW9uQ2hlY2tib3gge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2lvbkNoYW5nZScsICdpb25Gb2N1cycsICdpb25CbHVyJ10pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25DaGVja2JveF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uQ2hlY2tib3gpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uQ2hlY2tib3gsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWNoZWNrYm94XCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGFsaWdubWVudDogXCJhbGlnbm1lbnRcIixcbiAgICAgIGNoZWNrZWQ6IFwiY2hlY2tlZFwiLFxuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIsXG4gICAgICBlcnJvclRleHQ6IFwiZXJyb3JUZXh0XCIsXG4gICAgICBoZWxwZXJUZXh0OiBcImhlbHBlclRleHRcIixcbiAgICAgIGluZGV0ZXJtaW5hdGU6IFwiaW5kZXRlcm1pbmF0ZVwiLFxuICAgICAganVzdGlmeTogXCJqdXN0aWZ5XCIsXG4gICAgICBsYWJlbFBsYWNlbWVudDogXCJsYWJlbFBsYWNlbWVudFwiLFxuICAgICAgbW9kZTogXCJtb2RlXCIsXG4gICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgIHJlcXVpcmVkOiBcInJlcXVpcmVkXCIsXG4gICAgICB2YWx1ZTogXCJ2YWx1ZVwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25DaGVja2JveF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uQ2hlY2tib3ggPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydhbGlnbm1lbnQnLCAnY2hlY2tlZCcsICdjb2xvcicsICdkaXNhYmxlZCcsICdlcnJvclRleHQnLCAnaGVscGVyVGV4dCcsICdpbmRldGVybWluYXRlJywgJ2p1c3RpZnknLCAnbGFiZWxQbGFjZW1lbnQnLCAnbW9kZScsICduYW1lJywgJ3JlcXVpcmVkJywgJ3ZhbHVlJ11cbn0pXSwgSW9uQ2hlY2tib3gpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uQ2hlY2tib3gsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1jaGVja2JveCcsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2FsaWdubWVudCcsICdjaGVja2VkJywgJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2Vycm9yVGV4dCcsICdoZWxwZXJUZXh0JywgJ2luZGV0ZXJtaW5hdGUnLCAnanVzdGlmeScsICdsYWJlbFBsYWNlbWVudCcsICdtb2RlJywgJ25hbWUnLCAncmVxdWlyZWQnLCAndmFsdWUnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkNoaXAgPSBjbGFzcyBJb25DaGlwIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uQ2hpcF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uQ2hpcCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25DaGlwLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1jaGlwXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiLFxuICAgICAgbW9kZTogXCJtb2RlXCIsXG4gICAgICBvdXRsaW5lOiBcIm91dGxpbmVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uQ2hpcF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uQ2hpcCA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ21vZGUnLCAnb3V0bGluZSddXG59KV0sIElvbkNoaXApO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uQ2hpcCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWNoaXAnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydjb2xvcicsICdkaXNhYmxlZCcsICdtb2RlJywgJ291dGxpbmUnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkNvbCA9IGNsYXNzIElvbkNvbCB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbkNvbF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uQ29sKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvbkNvbCxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tY29sXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIG9mZnNldDogXCJvZmZzZXRcIixcbiAgICAgIG9mZnNldExnOiBcIm9mZnNldExnXCIsXG4gICAgICBvZmZzZXRNZDogXCJvZmZzZXRNZFwiLFxuICAgICAgb2Zmc2V0U206IFwib2Zmc2V0U21cIixcbiAgICAgIG9mZnNldFhsOiBcIm9mZnNldFhsXCIsXG4gICAgICBvZmZzZXRYczogXCJvZmZzZXRYc1wiLFxuICAgICAgcHVsbDogXCJwdWxsXCIsXG4gICAgICBwdWxsTGc6IFwicHVsbExnXCIsXG4gICAgICBwdWxsTWQ6IFwicHVsbE1kXCIsXG4gICAgICBwdWxsU206IFwicHVsbFNtXCIsXG4gICAgICBwdWxsWGw6IFwicHVsbFhsXCIsXG4gICAgICBwdWxsWHM6IFwicHVsbFhzXCIsXG4gICAgICBwdXNoOiBcInB1c2hcIixcbiAgICAgIHB1c2hMZzogXCJwdXNoTGdcIixcbiAgICAgIHB1c2hNZDogXCJwdXNoTWRcIixcbiAgICAgIHB1c2hTbTogXCJwdXNoU21cIixcbiAgICAgIHB1c2hYbDogXCJwdXNoWGxcIixcbiAgICAgIHB1c2hYczogXCJwdXNoWHNcIixcbiAgICAgIHNpemU6IFwic2l6ZVwiLFxuICAgICAgc2l6ZUxnOiBcInNpemVMZ1wiLFxuICAgICAgc2l6ZU1kOiBcInNpemVNZFwiLFxuICAgICAgc2l6ZVNtOiBcInNpemVTbVwiLFxuICAgICAgc2l6ZVhsOiBcInNpemVYbFwiLFxuICAgICAgc2l6ZVhzOiBcInNpemVYc1wiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25Db2xfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbkNvbCA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ29mZnNldCcsICdvZmZzZXRMZycsICdvZmZzZXRNZCcsICdvZmZzZXRTbScsICdvZmZzZXRYbCcsICdvZmZzZXRYcycsICdwdWxsJywgJ3B1bGxMZycsICdwdWxsTWQnLCAncHVsbFNtJywgJ3B1bGxYbCcsICdwdWxsWHMnLCAncHVzaCcsICdwdXNoTGcnLCAncHVzaE1kJywgJ3B1c2hTbScsICdwdXNoWGwnLCAncHVzaFhzJywgJ3NpemUnLCAnc2l6ZUxnJywgJ3NpemVNZCcsICdzaXplU20nLCAnc2l6ZVhsJywgJ3NpemVYcyddXG59KV0sIElvbkNvbCk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25Db2wsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1jb2wnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydvZmZzZXQnLCAnb2Zmc2V0TGcnLCAnb2Zmc2V0TWQnLCAnb2Zmc2V0U20nLCAnb2Zmc2V0WGwnLCAnb2Zmc2V0WHMnLCAncHVsbCcsICdwdWxsTGcnLCAncHVsbE1kJywgJ3B1bGxTbScsICdwdWxsWGwnLCAncHVsbFhzJywgJ3B1c2gnLCAncHVzaExnJywgJ3B1c2hNZCcsICdwdXNoU20nLCAncHVzaFhsJywgJ3B1c2hYcycsICdzaXplJywgJ3NpemVMZycsICdzaXplTWQnLCAnc2l6ZVNtJywgJ3NpemVYbCcsICdzaXplWHMnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkNvbnRlbnQgPSBjbGFzcyBJb25Db250ZW50IHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydpb25TY3JvbGxTdGFydCcsICdpb25TY3JvbGwnLCAnaW9uU2Nyb2xsRW5kJ10pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25Db250ZW50X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25Db250ZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvbkNvbnRlbnQsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWNvbnRlbnRcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGZpeGVkU2xvdFBsYWNlbWVudDogXCJmaXhlZFNsb3RQbGFjZW1lbnRcIixcbiAgICAgIGZvcmNlT3ZlcnNjcm9sbDogXCJmb3JjZU92ZXJzY3JvbGxcIixcbiAgICAgIGZ1bGxzY3JlZW46IFwiZnVsbHNjcmVlblwiLFxuICAgICAgc2Nyb2xsRXZlbnRzOiBcInNjcm9sbEV2ZW50c1wiLFxuICAgICAgc2Nyb2xsWDogXCJzY3JvbGxYXCIsXG4gICAgICBzY3JvbGxZOiBcInNjcm9sbFlcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uQ29udGVudF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uQ29udGVudCA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2ZpeGVkU2xvdFBsYWNlbWVudCcsICdmb3JjZU92ZXJzY3JvbGwnLCAnZnVsbHNjcmVlbicsICdzY3JvbGxFdmVudHMnLCAnc2Nyb2xsWCcsICdzY3JvbGxZJ10sXG4gIG1ldGhvZHM6IFsnZ2V0U2Nyb2xsRWxlbWVudCcsICdzY3JvbGxUb1RvcCcsICdzY3JvbGxUb0JvdHRvbScsICdzY3JvbGxCeVBvaW50JywgJ3Njcm9sbFRvUG9pbnQnXVxufSldLCBJb25Db250ZW50KTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbkNvbnRlbnQsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1jb250ZW50JyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnY29sb3InLCAnZml4ZWRTbG90UGxhY2VtZW50JywgJ2ZvcmNlT3ZlcnNjcm9sbCcsICdmdWxsc2NyZWVuJywgJ3Njcm9sbEV2ZW50cycsICdzY3JvbGxYJywgJ3Njcm9sbFknXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkRhdGV0aW1lID0gY2xhc3MgSW9uRGF0ZXRpbWUge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2lvbkNhbmNlbCcsICdpb25DaGFuZ2UnLCAnaW9uRm9jdXMnLCAnaW9uQmx1ciddKTtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uRGF0ZXRpbWVfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbkRhdGV0aW1lKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvbkRhdGV0aW1lLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1kYXRldGltZVwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBjYW5jZWxUZXh0OiBcImNhbmNlbFRleHRcIixcbiAgICAgIGNsZWFyVGV4dDogXCJjbGVhclRleHRcIixcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBkYXlWYWx1ZXM6IFwiZGF5VmFsdWVzXCIsXG4gICAgICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiLFxuICAgICAgZG9uZVRleHQ6IFwiZG9uZVRleHRcIixcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcImZpcnN0RGF5T2ZXZWVrXCIsXG4gICAgICBmb3JtYXRPcHRpb25zOiBcImZvcm1hdE9wdGlvbnNcIixcbiAgICAgIGhpZ2hsaWdodGVkRGF0ZXM6IFwiaGlnaGxpZ2h0ZWREYXRlc1wiLFxuICAgICAgaG91ckN5Y2xlOiBcImhvdXJDeWNsZVwiLFxuICAgICAgaG91clZhbHVlczogXCJob3VyVmFsdWVzXCIsXG4gICAgICBpc0RhdGVFbmFibGVkOiBcImlzRGF0ZUVuYWJsZWRcIixcbiAgICAgIGxvY2FsZTogXCJsb2NhbGVcIixcbiAgICAgIG1heDogXCJtYXhcIixcbiAgICAgIG1pbjogXCJtaW5cIixcbiAgICAgIG1pbnV0ZVZhbHVlczogXCJtaW51dGVWYWx1ZXNcIixcbiAgICAgIG1vZGU6IFwibW9kZVwiLFxuICAgICAgbW9udGhWYWx1ZXM6IFwibW9udGhWYWx1ZXNcIixcbiAgICAgIG11bHRpcGxlOiBcIm11bHRpcGxlXCIsXG4gICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgIHByZWZlcldoZWVsOiBcInByZWZlcldoZWVsXCIsXG4gICAgICBwcmVzZW50YXRpb246IFwicHJlc2VudGF0aW9uXCIsXG4gICAgICByZWFkb25seTogXCJyZWFkb25seVwiLFxuICAgICAgc2hvd0FkamFjZW50RGF5czogXCJzaG93QWRqYWNlbnREYXlzXCIsXG4gICAgICBzaG93Q2xlYXJCdXR0b246IFwic2hvd0NsZWFyQnV0dG9uXCIsXG4gICAgICBzaG93RGVmYXVsdEJ1dHRvbnM6IFwic2hvd0RlZmF1bHRCdXR0b25zXCIsXG4gICAgICBzaG93RGVmYXVsdFRpbWVMYWJlbDogXCJzaG93RGVmYXVsdFRpbWVMYWJlbFwiLFxuICAgICAgc2hvd0RlZmF1bHRUaXRsZTogXCJzaG93RGVmYXVsdFRpdGxlXCIsXG4gICAgICBzaXplOiBcInNpemVcIixcbiAgICAgIHRpdGxlU2VsZWN0ZWREYXRlc0Zvcm1hdHRlcjogXCJ0aXRsZVNlbGVjdGVkRGF0ZXNGb3JtYXR0ZXJcIixcbiAgICAgIHZhbHVlOiBcInZhbHVlXCIsXG4gICAgICB5ZWFyVmFsdWVzOiBcInllYXJWYWx1ZXNcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uRGF0ZXRpbWVfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbkRhdGV0aW1lID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY2FuY2VsVGV4dCcsICdjbGVhclRleHQnLCAnY29sb3InLCAnZGF5VmFsdWVzJywgJ2Rpc2FibGVkJywgJ2RvbmVUZXh0JywgJ2ZpcnN0RGF5T2ZXZWVrJywgJ2Zvcm1hdE9wdGlvbnMnLCAnaGlnaGxpZ2h0ZWREYXRlcycsICdob3VyQ3ljbGUnLCAnaG91clZhbHVlcycsICdpc0RhdGVFbmFibGVkJywgJ2xvY2FsZScsICdtYXgnLCAnbWluJywgJ21pbnV0ZVZhbHVlcycsICdtb2RlJywgJ21vbnRoVmFsdWVzJywgJ211bHRpcGxlJywgJ25hbWUnLCAncHJlZmVyV2hlZWwnLCAncHJlc2VudGF0aW9uJywgJ3JlYWRvbmx5JywgJ3Nob3dBZGphY2VudERheXMnLCAnc2hvd0NsZWFyQnV0dG9uJywgJ3Nob3dEZWZhdWx0QnV0dG9ucycsICdzaG93RGVmYXVsdFRpbWVMYWJlbCcsICdzaG93RGVmYXVsdFRpdGxlJywgJ3NpemUnLCAndGl0bGVTZWxlY3RlZERhdGVzRm9ybWF0dGVyJywgJ3ZhbHVlJywgJ3llYXJWYWx1ZXMnXSxcbiAgbWV0aG9kczogWydjb25maXJtJywgJ3Jlc2V0JywgJ2NhbmNlbCddXG59KV0sIElvbkRhdGV0aW1lKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbkRhdGV0aW1lLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tZGF0ZXRpbWUnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydjYW5jZWxUZXh0JywgJ2NsZWFyVGV4dCcsICdjb2xvcicsICdkYXlWYWx1ZXMnLCAnZGlzYWJsZWQnLCAnZG9uZVRleHQnLCAnZmlyc3REYXlPZldlZWsnLCAnZm9ybWF0T3B0aW9ucycsICdoaWdobGlnaHRlZERhdGVzJywgJ2hvdXJDeWNsZScsICdob3VyVmFsdWVzJywgJ2lzRGF0ZUVuYWJsZWQnLCAnbG9jYWxlJywgJ21heCcsICdtaW4nLCAnbWludXRlVmFsdWVzJywgJ21vZGUnLCAnbW9udGhWYWx1ZXMnLCAnbXVsdGlwbGUnLCAnbmFtZScsICdwcmVmZXJXaGVlbCcsICdwcmVzZW50YXRpb24nLCAncmVhZG9ubHknLCAnc2hvd0FkamFjZW50RGF5cycsICdzaG93Q2xlYXJCdXR0b24nLCAnc2hvd0RlZmF1bHRCdXR0b25zJywgJ3Nob3dEZWZhdWx0VGltZUxhYmVsJywgJ3Nob3dEZWZhdWx0VGl0bGUnLCAnc2l6ZScsICd0aXRsZVNlbGVjdGVkRGF0ZXNGb3JtYXR0ZXInLCAndmFsdWUnLCAneWVhclZhbHVlcyddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uRGF0ZXRpbWVCdXR0b24gPSBjbGFzcyBJb25EYXRldGltZUJ1dHRvbiB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbkRhdGV0aW1lQnV0dG9uX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25EYXRldGltZUJ1dHRvbikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25EYXRldGltZUJ1dHRvbixcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tZGF0ZXRpbWUtYnV0dG9uXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBkYXRldGltZTogXCJkYXRldGltZVwiLFxuICAgICAgZGlzYWJsZWQ6IFwiZGlzYWJsZWRcIixcbiAgICAgIG1vZGU6IFwibW9kZVwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25EYXRldGltZUJ1dHRvbl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uRGF0ZXRpbWVCdXR0b24gPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xvcicsICdkYXRldGltZScsICdkaXNhYmxlZCcsICdtb2RlJ11cbn0pXSwgSW9uRGF0ZXRpbWVCdXR0b24pO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uRGF0ZXRpbWVCdXR0b24sIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1kYXRldGltZS1idXR0b24nLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydjb2xvcicsICdkYXRldGltZScsICdkaXNhYmxlZCcsICdtb2RlJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25GYWIgPSBjbGFzcyBJb25GYWIge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25GYWJfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbkZhYikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25GYWIsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWZhYlwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBhY3RpdmF0ZWQ6IFwiYWN0aXZhdGVkXCIsXG4gICAgICBlZGdlOiBcImVkZ2VcIixcbiAgICAgIGhvcml6b250YWw6IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgdmVydGljYWw6IFwidmVydGljYWxcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uRmFiX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25GYWIgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydhY3RpdmF0ZWQnLCAnZWRnZScsICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ10sXG4gIG1ldGhvZHM6IFsnY2xvc2UnXVxufSldLCBJb25GYWIpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uRmFiLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tZmFiJyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnYWN0aXZhdGVkJywgJ2VkZ2UnLCAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uRmFiQnV0dG9uID0gY2xhc3MgSW9uRmFiQnV0dG9uIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydpb25Gb2N1cycsICdpb25CbHVyJ10pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25GYWJCdXR0b25fRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbkZhYkJ1dHRvbikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25GYWJCdXR0b24sXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWZhYi1idXR0b25cIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgYWN0aXZhdGVkOiBcImFjdGl2YXRlZFwiLFxuICAgICAgY2xvc2VJY29uOiBcImNsb3NlSWNvblwiLFxuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIsXG4gICAgICBkb3dubG9hZDogXCJkb3dubG9hZFwiLFxuICAgICAgaHJlZjogXCJocmVmXCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIixcbiAgICAgIHJlbDogXCJyZWxcIixcbiAgICAgIHJvdXRlckFuaW1hdGlvbjogXCJyb3V0ZXJBbmltYXRpb25cIixcbiAgICAgIHJvdXRlckRpcmVjdGlvbjogXCJyb3V0ZXJEaXJlY3Rpb25cIixcbiAgICAgIHNob3c6IFwic2hvd1wiLFxuICAgICAgc2l6ZTogXCJzaXplXCIsXG4gICAgICB0YXJnZXQ6IFwidGFyZ2V0XCIsXG4gICAgICB0cmFuc2x1Y2VudDogXCJ0cmFuc2x1Y2VudFwiLFxuICAgICAgdHlwZTogXCJ0eXBlXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvbkZhYkJ1dHRvbl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uRmFiQnV0dG9uID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYWN0aXZhdGVkJywgJ2Nsb3NlSWNvbicsICdjb2xvcicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdocmVmJywgJ21vZGUnLCAncmVsJywgJ3JvdXRlckFuaW1hdGlvbicsICdyb3V0ZXJEaXJlY3Rpb24nLCAnc2hvdycsICdzaXplJywgJ3RhcmdldCcsICd0cmFuc2x1Y2VudCcsICd0eXBlJ11cbn0pXSwgSW9uRmFiQnV0dG9uKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbkZhYkJ1dHRvbiwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWZhYi1idXR0b24nLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydhY3RpdmF0ZWQnLCAnY2xvc2VJY29uJywgJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2hyZWYnLCAnbW9kZScsICdyZWwnLCAncm91dGVyQW5pbWF0aW9uJywgJ3JvdXRlckRpcmVjdGlvbicsICdzaG93JywgJ3NpemUnLCAndGFyZ2V0JywgJ3RyYW5zbHVjZW50JywgJ3R5cGUnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkZhYkxpc3QgPSBjbGFzcyBJb25GYWJMaXN0IHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uRmFiTGlzdF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uRmFiTGlzdCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25GYWJMaXN0LFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1mYWItbGlzdFwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBhY3RpdmF0ZWQ6IFwiYWN0aXZhdGVkXCIsXG4gICAgICBzaWRlOiBcInNpZGVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uRmFiTGlzdF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uRmFiTGlzdCA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FjdGl2YXRlZCcsICdzaWRlJ11cbn0pXSwgSW9uRmFiTGlzdCk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25GYWJMaXN0LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tZmFiLWxpc3QnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydhY3RpdmF0ZWQnLCAnc2lkZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uRm9vdGVyID0gY2xhc3MgSW9uRm9vdGVyIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uRm9vdGVyX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25Gb290ZXIpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uRm9vdGVyLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1mb290ZXJcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgY29sbGFwc2U6IFwiY29sbGFwc2VcIixcbiAgICAgIG1vZGU6IFwibW9kZVwiLFxuICAgICAgdHJhbnNsdWNlbnQ6IFwidHJhbnNsdWNlbnRcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uRm9vdGVyX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25Gb290ZXIgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xsYXBzZScsICdtb2RlJywgJ3RyYW5zbHVjZW50J11cbn0pXSwgSW9uRm9vdGVyKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbkZvb3RlciwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWZvb3RlcicsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2NvbGxhcHNlJywgJ21vZGUnLCAndHJhbnNsdWNlbnQnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkdyaWQgPSBjbGFzcyBJb25HcmlkIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uR3JpZF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uR3JpZCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25HcmlkLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1ncmlkXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGZpeGVkOiBcImZpeGVkXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvbkdyaWRfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbkdyaWQgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydmaXhlZCddXG59KV0sIElvbkdyaWQpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uR3JpZCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWdyaWQnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydmaXhlZCddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uSGVhZGVyID0gY2xhc3MgSW9uSGVhZGVyIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uSGVhZGVyX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25IZWFkZXIpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uSGVhZGVyLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1oZWFkZXJcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgY29sbGFwc2U6IFwiY29sbGFwc2VcIixcbiAgICAgIG1vZGU6IFwibW9kZVwiLFxuICAgICAgdHJhbnNsdWNlbnQ6IFwidHJhbnNsdWNlbnRcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uSGVhZGVyX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25IZWFkZXIgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xsYXBzZScsICdtb2RlJywgJ3RyYW5zbHVjZW50J11cbn0pXSwgSW9uSGVhZGVyKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbkhlYWRlciwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWhlYWRlcicsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2NvbGxhcHNlJywgJ21vZGUnLCAndHJhbnNsdWNlbnQnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkljb24gPSBjbGFzcyBJb25JY29uIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uSWNvbl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uSWNvbikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25JY29uLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1pY29uXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBmbGlwUnRsOiBcImZsaXBSdGxcIixcbiAgICAgIGljb246IFwiaWNvblwiLFxuICAgICAgaW9zOiBcImlvc1wiLFxuICAgICAgbGF6eTogXCJsYXp5XCIsXG4gICAgICBtZDogXCJtZFwiLFxuICAgICAgbW9kZTogXCJtb2RlXCIsXG4gICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgIHNhbml0aXplOiBcInNhbml0aXplXCIsXG4gICAgICBzaXplOiBcInNpemVcIixcbiAgICAgIHNyYzogXCJzcmNcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uSWNvbl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uSWNvbiA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ2ZsaXBSdGwnLCAnaWNvbicsICdpb3MnLCAnbGF6eScsICdtZCcsICdtb2RlJywgJ25hbWUnLCAnc2FuaXRpemUnLCAnc2l6ZScsICdzcmMnXVxufSldLCBJb25JY29uKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbkljb24sIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1pY29uJyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnY29sb3InLCAnZmxpcFJ0bCcsICdpY29uJywgJ2lvcycsICdsYXp5JywgJ21kJywgJ21vZGUnLCAnbmFtZScsICdzYW5pdGl6ZScsICdzaXplJywgJ3NyYyddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uSW1nID0gY2xhc3MgSW9uSW1nIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydpb25JbWdXaWxsTG9hZCcsICdpb25JbWdEaWRMb2FkJywgJ2lvbkVycm9yJ10pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25JbWdfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbkltZykoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25JbWcsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWltZ1wiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBhbHQ6IFwiYWx0XCIsXG4gICAgICBzcmM6IFwic3JjXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvbkltZ19UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uSW1nID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYWx0JywgJ3NyYyddXG59KV0sIElvbkltZyk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25JbWcsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1pbWcnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydhbHQnLCAnc3JjJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25JbmZpbml0ZVNjcm9sbCA9IGNsYXNzIElvbkluZmluaXRlU2Nyb2xsIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydpb25JbmZpbml0ZSddKTtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uSW5maW5pdGVTY3JvbGxfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbkluZmluaXRlU2Nyb2xsKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvbkluZmluaXRlU2Nyb2xsLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1pbmZpbml0ZS1zY3JvbGxcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgZGlzYWJsZWQ6IFwiZGlzYWJsZWRcIixcbiAgICAgIHBvc2l0aW9uOiBcInBvc2l0aW9uXCIsXG4gICAgICB0aHJlc2hvbGQ6IFwidGhyZXNob2xkXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvbkluZmluaXRlU2Nyb2xsX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25JbmZpbml0ZVNjcm9sbCA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ3Bvc2l0aW9uJywgJ3RocmVzaG9sZCddLFxuICBtZXRob2RzOiBbJ2NvbXBsZXRlJ11cbn0pXSwgSW9uSW5maW5pdGVTY3JvbGwpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uSW5maW5pdGVTY3JvbGwsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1pbmZpbml0ZS1zY3JvbGwnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydkaXNhYmxlZCcsICdwb3NpdGlvbicsICd0aHJlc2hvbGQnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkluZmluaXRlU2Nyb2xsQ29udGVudCA9IGNsYXNzIElvbkluZmluaXRlU2Nyb2xsQ29udGVudCB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbkluZmluaXRlU2Nyb2xsQ29udGVudF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uSW5maW5pdGVTY3JvbGxDb250ZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvbkluZmluaXRlU2Nyb2xsQ29udGVudCxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnRcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgbG9hZGluZ1NwaW5uZXI6IFwibG9hZGluZ1NwaW5uZXJcIixcbiAgICAgIGxvYWRpbmdUZXh0OiBcImxvYWRpbmdUZXh0XCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvbkluZmluaXRlU2Nyb2xsQ29udGVudF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uSW5maW5pdGVTY3JvbGxDb250ZW50ID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnbG9hZGluZ1NwaW5uZXInLCAnbG9hZGluZ1RleHQnXVxufSldLCBJb25JbmZpbml0ZVNjcm9sbENvbnRlbnQpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uSW5maW5pdGVTY3JvbGxDb250ZW50LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydsb2FkaW5nU3Bpbm5lcicsICdsb2FkaW5nVGV4dCddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uSW5wdXQgPSBjbGFzcyBJb25JbnB1dCB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnaW9uSW5wdXQnLCAnaW9uQ2hhbmdlJywgJ2lvbkJsdXInLCAnaW9uRm9jdXMnXSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbklucHV0X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25JbnB1dCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25JbnB1dCxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24taW5wdXRcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgYXV0b2NhcGl0YWxpemU6IFwiYXV0b2NhcGl0YWxpemVcIixcbiAgICAgIGF1dG9jb21wbGV0ZTogXCJhdXRvY29tcGxldGVcIixcbiAgICAgIGF1dG9jb3JyZWN0OiBcImF1dG9jb3JyZWN0XCIsXG4gICAgICBhdXRvZm9jdXM6IFwiYXV0b2ZvY3VzXCIsXG4gICAgICBjbGVhcklucHV0OiBcImNsZWFySW5wdXRcIixcbiAgICAgIGNsZWFySW5wdXRJY29uOiBcImNsZWFySW5wdXRJY29uXCIsXG4gICAgICBjbGVhck9uRWRpdDogXCJjbGVhck9uRWRpdFwiLFxuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGNvdW50ZXI6IFwiY291bnRlclwiLFxuICAgICAgY291bnRlckZvcm1hdHRlcjogXCJjb3VudGVyRm9ybWF0dGVyXCIsXG4gICAgICBkZWJvdW5jZTogXCJkZWJvdW5jZVwiLFxuICAgICAgZGlzYWJsZWQ6IFwiZGlzYWJsZWRcIixcbiAgICAgIGVudGVya2V5aGludDogXCJlbnRlcmtleWhpbnRcIixcbiAgICAgIGVycm9yVGV4dDogXCJlcnJvclRleHRcIixcbiAgICAgIGZpbGw6IFwiZmlsbFwiLFxuICAgICAgaGVscGVyVGV4dDogXCJoZWxwZXJUZXh0XCIsXG4gICAgICBpbnB1dG1vZGU6IFwiaW5wdXRtb2RlXCIsXG4gICAgICBsYWJlbDogXCJsYWJlbFwiLFxuICAgICAgbGFiZWxQbGFjZW1lbnQ6IFwibGFiZWxQbGFjZW1lbnRcIixcbiAgICAgIG1heDogXCJtYXhcIixcbiAgICAgIG1heGxlbmd0aDogXCJtYXhsZW5ndGhcIixcbiAgICAgIG1pbjogXCJtaW5cIixcbiAgICAgIG1pbmxlbmd0aDogXCJtaW5sZW5ndGhcIixcbiAgICAgIG1vZGU6IFwibW9kZVwiLFxuICAgICAgbXVsdGlwbGU6IFwibXVsdGlwbGVcIixcbiAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgcGF0dGVybjogXCJwYXR0ZXJuXCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCJwbGFjZWhvbGRlclwiLFxuICAgICAgcmVhZG9ubHk6IFwicmVhZG9ubHlcIixcbiAgICAgIHJlcXVpcmVkOiBcInJlcXVpcmVkXCIsXG4gICAgICBzaGFwZTogXCJzaGFwZVwiLFxuICAgICAgc3BlbGxjaGVjazogXCJzcGVsbGNoZWNrXCIsXG4gICAgICBzdGVwOiBcInN0ZXBcIixcbiAgICAgIHR5cGU6IFwidHlwZVwiLFxuICAgICAgdmFsdWU6IFwidmFsdWVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uSW5wdXRfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbklucHV0ID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYXV0b2NhcGl0YWxpemUnLCAnYXV0b2NvbXBsZXRlJywgJ2F1dG9jb3JyZWN0JywgJ2F1dG9mb2N1cycsICdjbGVhcklucHV0JywgJ2NsZWFySW5wdXRJY29uJywgJ2NsZWFyT25FZGl0JywgJ2NvbG9yJywgJ2NvdW50ZXInLCAnY291bnRlckZvcm1hdHRlcicsICdkZWJvdW5jZScsICdkaXNhYmxlZCcsICdlbnRlcmtleWhpbnQnLCAnZXJyb3JUZXh0JywgJ2ZpbGwnLCAnaGVscGVyVGV4dCcsICdpbnB1dG1vZGUnLCAnbGFiZWwnLCAnbGFiZWxQbGFjZW1lbnQnLCAnbWF4JywgJ21heGxlbmd0aCcsICdtaW4nLCAnbWlubGVuZ3RoJywgJ21vZGUnLCAnbXVsdGlwbGUnLCAnbmFtZScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkJywgJ3NoYXBlJywgJ3NwZWxsY2hlY2snLCAnc3RlcCcsICd0eXBlJywgJ3ZhbHVlJ10sXG4gIG1ldGhvZHM6IFsnc2V0Rm9jdXMnLCAnZ2V0SW5wdXRFbGVtZW50J11cbn0pXSwgSW9uSW5wdXQpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uSW5wdXQsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1pbnB1dCcsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2F1dG9jYXBpdGFsaXplJywgJ2F1dG9jb21wbGV0ZScsICdhdXRvY29ycmVjdCcsICdhdXRvZm9jdXMnLCAnY2xlYXJJbnB1dCcsICdjbGVhcklucHV0SWNvbicsICdjbGVhck9uRWRpdCcsICdjb2xvcicsICdjb3VudGVyJywgJ2NvdW50ZXJGb3JtYXR0ZXInLCAnZGVib3VuY2UnLCAnZGlzYWJsZWQnLCAnZW50ZXJrZXloaW50JywgJ2Vycm9yVGV4dCcsICdmaWxsJywgJ2hlbHBlclRleHQnLCAnaW5wdXRtb2RlJywgJ2xhYmVsJywgJ2xhYmVsUGxhY2VtZW50JywgJ21heCcsICdtYXhsZW5ndGgnLCAnbWluJywgJ21pbmxlbmd0aCcsICdtb2RlJywgJ211bHRpcGxlJywgJ25hbWUnLCAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdyZWFkb25seScsICdyZXF1aXJlZCcsICdzaGFwZScsICdzcGVsbGNoZWNrJywgJ3N0ZXAnLCAndHlwZScsICd2YWx1ZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uSW5wdXRPdHAgPSBjbGFzcyBJb25JbnB1dE90cCB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnaW9uSW5wdXQnLCAnaW9uQ2hhbmdlJywgJ2lvbkNvbXBsZXRlJywgJ2lvbkJsdXInLCAnaW9uRm9jdXMnXSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbklucHV0T3RwX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25JbnB1dE90cCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25JbnB1dE90cCxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24taW5wdXQtb3RwXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGF1dG9jYXBpdGFsaXplOiBcImF1dG9jYXBpdGFsaXplXCIsXG4gICAgICBjb2xvcjogXCJjb2xvclwiLFxuICAgICAgZGlzYWJsZWQ6IFwiZGlzYWJsZWRcIixcbiAgICAgIGZpbGw6IFwiZmlsbFwiLFxuICAgICAgaW5wdXRtb2RlOiBcImlucHV0bW9kZVwiLFxuICAgICAgbGVuZ3RoOiBcImxlbmd0aFwiLFxuICAgICAgcGF0dGVybjogXCJwYXR0ZXJuXCIsXG4gICAgICByZWFkb25seTogXCJyZWFkb25seVwiLFxuICAgICAgc2VwYXJhdG9yczogXCJzZXBhcmF0b3JzXCIsXG4gICAgICBzaGFwZTogXCJzaGFwZVwiLFxuICAgICAgc2l6ZTogXCJzaXplXCIsXG4gICAgICB0eXBlOiBcInR5cGVcIixcbiAgICAgIHZhbHVlOiBcInZhbHVlXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvbklucHV0T3RwX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25JbnB1dE90cCA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2F1dG9jYXBpdGFsaXplJywgJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2ZpbGwnLCAnaW5wdXRtb2RlJywgJ2xlbmd0aCcsICdwYXR0ZXJuJywgJ3JlYWRvbmx5JywgJ3NlcGFyYXRvcnMnLCAnc2hhcGUnLCAnc2l6ZScsICd0eXBlJywgJ3ZhbHVlJ10sXG4gIG1ldGhvZHM6IFsnc2V0Rm9jdXMnXVxufSldLCBJb25JbnB1dE90cCk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25JbnB1dE90cCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWlucHV0LW90cCcsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2F1dG9jYXBpdGFsaXplJywgJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2ZpbGwnLCAnaW5wdXRtb2RlJywgJ2xlbmd0aCcsICdwYXR0ZXJuJywgJ3JlYWRvbmx5JywgJ3NlcGFyYXRvcnMnLCAnc2hhcGUnLCAnc2l6ZScsICd0eXBlJywgJ3ZhbHVlJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25JbnB1dFBhc3N3b3JkVG9nZ2xlID0gY2xhc3MgSW9uSW5wdXRQYXNzd29yZFRvZ2dsZSB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbklucHV0UGFzc3dvcmRUb2dnbGVfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbklucHV0UGFzc3dvcmRUb2dnbGUpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uSW5wdXRQYXNzd29yZFRvZ2dsZSxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24taW5wdXQtcGFzc3dvcmQtdG9nZ2xlXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBoaWRlSWNvbjogXCJoaWRlSWNvblwiLFxuICAgICAgbW9kZTogXCJtb2RlXCIsXG4gICAgICBzaG93SWNvbjogXCJzaG93SWNvblwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25JbnB1dFBhc3N3b3JkVG9nZ2xlX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25JbnB1dFBhc3N3b3JkVG9nZ2xlID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sb3InLCAnaGlkZUljb24nLCAnbW9kZScsICdzaG93SWNvbiddXG59KV0sIElvbklucHV0UGFzc3dvcmRUb2dnbGUpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uSW5wdXRQYXNzd29yZFRvZ2dsZSwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWlucHV0LXBhc3N3b3JkLXRvZ2dsZScsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2NvbG9yJywgJ2hpZGVJY29uJywgJ21vZGUnLCAnc2hvd0ljb24nXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkl0ZW0gPSBjbGFzcyBJb25JdGVtIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uSXRlbV9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uSXRlbSkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25JdGVtLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1pdGVtXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGJ1dHRvbjogXCJidXR0b25cIixcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBkZXRhaWw6IFwiZGV0YWlsXCIsXG4gICAgICBkZXRhaWxJY29uOiBcImRldGFpbEljb25cIixcbiAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIsXG4gICAgICBkb3dubG9hZDogXCJkb3dubG9hZFwiLFxuICAgICAgaHJlZjogXCJocmVmXCIsXG4gICAgICBsaW5lczogXCJsaW5lc1wiLFxuICAgICAgbW9kZTogXCJtb2RlXCIsXG4gICAgICByZWw6IFwicmVsXCIsXG4gICAgICByb3V0ZXJBbmltYXRpb246IFwicm91dGVyQW5pbWF0aW9uXCIsXG4gICAgICByb3V0ZXJEaXJlY3Rpb246IFwicm91dGVyRGlyZWN0aW9uXCIsXG4gICAgICB0YXJnZXQ6IFwidGFyZ2V0XCIsXG4gICAgICB0eXBlOiBcInR5cGVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uSXRlbV9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uSXRlbSA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2J1dHRvbicsICdjb2xvcicsICdkZXRhaWwnLCAnZGV0YWlsSWNvbicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdocmVmJywgJ2xpbmVzJywgJ21vZGUnLCAncmVsJywgJ3JvdXRlckFuaW1hdGlvbicsICdyb3V0ZXJEaXJlY3Rpb24nLCAndGFyZ2V0JywgJ3R5cGUnXVxufSldLCBJb25JdGVtKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbkl0ZW0sIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1pdGVtJyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnYnV0dG9uJywgJ2NvbG9yJywgJ2RldGFpbCcsICdkZXRhaWxJY29uJywgJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2hyZWYnLCAnbGluZXMnLCAnbW9kZScsICdyZWwnLCAncm91dGVyQW5pbWF0aW9uJywgJ3JvdXRlckRpcmVjdGlvbicsICd0YXJnZXQnLCAndHlwZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uSXRlbURpdmlkZXIgPSBjbGFzcyBJb25JdGVtRGl2aWRlciB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbkl0ZW1EaXZpZGVyX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25JdGVtRGl2aWRlcikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25JdGVtRGl2aWRlcixcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24taXRlbS1kaXZpZGVyXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIixcbiAgICAgIHN0aWNreTogXCJzdGlja3lcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uSXRlbURpdmlkZXJfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbkl0ZW1EaXZpZGVyID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sb3InLCAnbW9kZScsICdzdGlja3knXVxufSldLCBJb25JdGVtRGl2aWRlcik7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25JdGVtRGl2aWRlciwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWl0ZW0tZGl2aWRlcicsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2NvbG9yJywgJ21vZGUnLCAnc3RpY2t5J11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25JdGVtR3JvdXAgPSBjbGFzcyBJb25JdGVtR3JvdXAge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25JdGVtR3JvdXBfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbkl0ZW1Hcm91cCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25JdGVtR3JvdXAsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWl0ZW0tZ3JvdXBcIl1dLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvbkl0ZW1Hcm91cF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uSXRlbUdyb3VwID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe30pXSwgSW9uSXRlbUdyb3VwKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbkl0ZW1Hcm91cCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWl0ZW0tZ3JvdXAnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogW11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25JdGVtT3B0aW9uID0gY2xhc3MgSW9uSXRlbU9wdGlvbiB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbkl0ZW1PcHRpb25fRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbkl0ZW1PcHRpb24pKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uSXRlbU9wdGlvbixcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24taXRlbS1vcHRpb25cIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIsXG4gICAgICBkb3dubG9hZDogXCJkb3dubG9hZFwiLFxuICAgICAgZXhwYW5kYWJsZTogXCJleHBhbmRhYmxlXCIsXG4gICAgICBocmVmOiBcImhyZWZcIixcbiAgICAgIG1vZGU6IFwibW9kZVwiLFxuICAgICAgcmVsOiBcInJlbFwiLFxuICAgICAgdGFyZ2V0OiBcInRhcmdldFwiLFxuICAgICAgdHlwZTogXCJ0eXBlXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvbkl0ZW1PcHRpb25fVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbkl0ZW1PcHRpb24gPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xvcicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdleHBhbmRhYmxlJywgJ2hyZWYnLCAnbW9kZScsICdyZWwnLCAndGFyZ2V0JywgJ3R5cGUnXVxufSldLCBJb25JdGVtT3B0aW9uKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbkl0ZW1PcHRpb24sIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1pdGVtLW9wdGlvbicsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2V4cGFuZGFibGUnLCAnaHJlZicsICdtb2RlJywgJ3JlbCcsICd0YXJnZXQnLCAndHlwZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uSXRlbU9wdGlvbnMgPSBjbGFzcyBJb25JdGVtT3B0aW9ucyB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnaW9uU3dpcGUnXSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbkl0ZW1PcHRpb25zX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25JdGVtT3B0aW9ucykoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25JdGVtT3B0aW9ucyxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24taXRlbS1vcHRpb25zXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIHNpZGU6IFwic2lkZVwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25JdGVtT3B0aW9uc19UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uSXRlbU9wdGlvbnMgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydzaWRlJ11cbn0pXSwgSW9uSXRlbU9wdGlvbnMpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uSXRlbU9wdGlvbnMsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1pdGVtLW9wdGlvbnMnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydzaWRlJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25JdGVtU2xpZGluZyA9IGNsYXNzIElvbkl0ZW1TbGlkaW5nIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydpb25EcmFnJ10pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25JdGVtU2xpZGluZ19GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uSXRlbVNsaWRpbmcpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uSXRlbVNsaWRpbmcsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWl0ZW0tc2xpZGluZ1wiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25JdGVtU2xpZGluZ19UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uSXRlbVNsaWRpbmcgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydkaXNhYmxlZCddLFxuICBtZXRob2RzOiBbJ2dldE9wZW5BbW91bnQnLCAnZ2V0U2xpZGluZ1JhdGlvJywgJ29wZW4nLCAnY2xvc2UnLCAnY2xvc2VPcGVuZWQnXVxufSldLCBJb25JdGVtU2xpZGluZyk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25JdGVtU2xpZGluZywgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWl0ZW0tc2xpZGluZycsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2Rpc2FibGVkJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25MYWJlbCA9IGNsYXNzIElvbkxhYmVsIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uTGFiZWxfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbkxhYmVsKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvbkxhYmVsLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1sYWJlbFwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBjb2xvcjogXCJjb2xvclwiLFxuICAgICAgbW9kZTogXCJtb2RlXCIsXG4gICAgICBwb3NpdGlvbjogXCJwb3NpdGlvblwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25MYWJlbF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uTGFiZWwgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xvcicsICdtb2RlJywgJ3Bvc2l0aW9uJ11cbn0pXSwgSW9uTGFiZWwpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uTGFiZWwsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1sYWJlbCcsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2NvbG9yJywgJ21vZGUnLCAncG9zaXRpb24nXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbkxpc3QgPSBjbGFzcyBJb25MaXN0IHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uTGlzdF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uTGlzdCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25MaXN0LFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1saXN0XCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGluc2V0OiBcImluc2V0XCIsXG4gICAgICBsaW5lczogXCJsaW5lc1wiLFxuICAgICAgbW9kZTogXCJtb2RlXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvbkxpc3RfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbkxpc3QgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydpbnNldCcsICdsaW5lcycsICdtb2RlJ10sXG4gIG1ldGhvZHM6IFsnY2xvc2VTbGlkaW5nSXRlbXMnXVxufSldLCBJb25MaXN0KTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbkxpc3QsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1saXN0JyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnaW5zZXQnLCAnbGluZXMnLCAnbW9kZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uTGlzdEhlYWRlciA9IGNsYXNzIElvbkxpc3RIZWFkZXIge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25MaXN0SGVhZGVyX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25MaXN0SGVhZGVyKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvbkxpc3RIZWFkZXIsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLWxpc3QtaGVhZGVyXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBsaW5lczogXCJsaW5lc1wiLFxuICAgICAgbW9kZTogXCJtb2RlXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvbkxpc3RIZWFkZXJfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbkxpc3RIZWFkZXIgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xvcicsICdsaW5lcycsICdtb2RlJ11cbn0pXSwgSW9uTGlzdEhlYWRlcik7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25MaXN0SGVhZGVyLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tbGlzdC1oZWFkZXInLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydjb2xvcicsICdsaW5lcycsICdtb2RlJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25Mb2FkaW5nID0gY2xhc3MgSW9uTG9hZGluZyB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnaW9uTG9hZGluZ0RpZFByZXNlbnQnLCAnaW9uTG9hZGluZ1dpbGxQcmVzZW50JywgJ2lvbkxvYWRpbmdXaWxsRGlzbWlzcycsICdpb25Mb2FkaW5nRGlkRGlzbWlzcycsICdkaWRQcmVzZW50JywgJ3dpbGxQcmVzZW50JywgJ3dpbGxEaXNtaXNzJywgJ2RpZERpc21pc3MnXSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbkxvYWRpbmdfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbkxvYWRpbmcpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uTG9hZGluZyxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tbG9hZGluZ1wiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBhbmltYXRlZDogXCJhbmltYXRlZFwiLFxuICAgICAgYmFja2Ryb3BEaXNtaXNzOiBcImJhY2tkcm9wRGlzbWlzc1wiLFxuICAgICAgY3NzQ2xhc3M6IFwiY3NzQ2xhc3NcIixcbiAgICAgIGR1cmF0aW9uOiBcImR1cmF0aW9uXCIsXG4gICAgICBlbnRlckFuaW1hdGlvbjogXCJlbnRlckFuaW1hdGlvblwiLFxuICAgICAgaHRtbEF0dHJpYnV0ZXM6IFwiaHRtbEF0dHJpYnV0ZXNcIixcbiAgICAgIGlzT3BlbjogXCJpc09wZW5cIixcbiAgICAgIGtleWJvYXJkQ2xvc2U6IFwia2V5Ym9hcmRDbG9zZVwiLFxuICAgICAgbGVhdmVBbmltYXRpb246IFwibGVhdmVBbmltYXRpb25cIixcbiAgICAgIG1lc3NhZ2U6IFwibWVzc2FnZVwiLFxuICAgICAgbW9kZTogXCJtb2RlXCIsXG4gICAgICBzaG93QmFja2Ryb3A6IFwic2hvd0JhY2tkcm9wXCIsXG4gICAgICBzcGlubmVyOiBcInNwaW5uZXJcIixcbiAgICAgIHRyYW5zbHVjZW50OiBcInRyYW5zbHVjZW50XCIsXG4gICAgICB0cmlnZ2VyOiBcInRyaWdnZXJcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uTG9hZGluZ19UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uTG9hZGluZyA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FuaW1hdGVkJywgJ2JhY2tkcm9wRGlzbWlzcycsICdjc3NDbGFzcycsICdkdXJhdGlvbicsICdlbnRlckFuaW1hdGlvbicsICdodG1sQXR0cmlidXRlcycsICdpc09wZW4nLCAna2V5Ym9hcmRDbG9zZScsICdsZWF2ZUFuaW1hdGlvbicsICdtZXNzYWdlJywgJ21vZGUnLCAnc2hvd0JhY2tkcm9wJywgJ3NwaW5uZXInLCAndHJhbnNsdWNlbnQnLCAndHJpZ2dlciddLFxuICBtZXRob2RzOiBbJ3ByZXNlbnQnLCAnZGlzbWlzcycsICdvbkRpZERpc21pc3MnLCAnb25XaWxsRGlzbWlzcyddXG59KV0sIElvbkxvYWRpbmcpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uTG9hZGluZywgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLWxvYWRpbmcnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydhbmltYXRlZCcsICdiYWNrZHJvcERpc21pc3MnLCAnY3NzQ2xhc3MnLCAnZHVyYXRpb24nLCAnZW50ZXJBbmltYXRpb24nLCAnaHRtbEF0dHJpYnV0ZXMnLCAnaXNPcGVuJywgJ2tleWJvYXJkQ2xvc2UnLCAnbGVhdmVBbmltYXRpb24nLCAnbWVzc2FnZScsICdtb2RlJywgJ3Nob3dCYWNrZHJvcCcsICdzcGlubmVyJywgJ3RyYW5zbHVjZW50JywgJ3RyaWdnZXInXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbk1lbnUgPSBjbGFzcyBJb25NZW51IHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydpb25XaWxsT3BlbicsICdpb25XaWxsQ2xvc2UnLCAnaW9uRGlkT3BlbicsICdpb25EaWRDbG9zZSddKTtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uTWVudV9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uTWVudSkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25NZW51LFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1tZW51XCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbnRlbnRJZDogXCJjb250ZW50SWRcIixcbiAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIsXG4gICAgICBtYXhFZGdlU3RhcnQ6IFwibWF4RWRnZVN0YXJ0XCIsXG4gICAgICBtZW51SWQ6IFwibWVudUlkXCIsXG4gICAgICBzaWRlOiBcInNpZGVcIixcbiAgICAgIHN3aXBlR2VzdHVyZTogXCJzd2lwZUdlc3R1cmVcIixcbiAgICAgIHR5cGU6IFwidHlwZVwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25NZW51X1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25NZW51ID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29udGVudElkJywgJ2Rpc2FibGVkJywgJ21heEVkZ2VTdGFydCcsICdtZW51SWQnLCAnc2lkZScsICdzd2lwZUdlc3R1cmUnLCAndHlwZSddLFxuICBtZXRob2RzOiBbJ2lzT3BlbicsICdpc0FjdGl2ZScsICdvcGVuJywgJ2Nsb3NlJywgJ3RvZ2dsZScsICdzZXRPcGVuJ11cbn0pXSwgSW9uTWVudSk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25NZW51LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tbWVudScsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2NvbnRlbnRJZCcsICdkaXNhYmxlZCcsICdtYXhFZGdlU3RhcnQnLCAnbWVudUlkJywgJ3NpZGUnLCAnc3dpcGVHZXN0dXJlJywgJ3R5cGUnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbk1lbnVCdXR0b24gPSBjbGFzcyBJb25NZW51QnV0dG9uIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uTWVudUJ1dHRvbl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uTWVudUJ1dHRvbikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25NZW51QnV0dG9uLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1tZW51LWJ1dHRvblwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBhdXRvSGlkZTogXCJhdXRvSGlkZVwiLFxuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIsXG4gICAgICBtZW51OiBcIm1lbnVcIixcbiAgICAgIG1vZGU6IFwibW9kZVwiLFxuICAgICAgdHlwZTogXCJ0eXBlXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvbk1lbnVCdXR0b25fVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbk1lbnVCdXR0b24gPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydhdXRvSGlkZScsICdjb2xvcicsICdkaXNhYmxlZCcsICdtZW51JywgJ21vZGUnLCAndHlwZSddXG59KV0sIElvbk1lbnVCdXR0b24pO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uTWVudUJ1dHRvbiwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLW1lbnUtYnV0dG9uJyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnYXV0b0hpZGUnLCAnY29sb3InLCAnZGlzYWJsZWQnLCAnbWVudScsICdtb2RlJywgJ3R5cGUnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvbk1lbnVUb2dnbGUgPSBjbGFzcyBJb25NZW51VG9nZ2xlIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uTWVudVRvZ2dsZV9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uTWVudVRvZ2dsZSkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25NZW51VG9nZ2xlLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1tZW51LXRvZ2dsZVwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBhdXRvSGlkZTogXCJhdXRvSGlkZVwiLFxuICAgICAgbWVudTogXCJtZW51XCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvbk1lbnVUb2dnbGVfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvbk1lbnVUb2dnbGUgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydhdXRvSGlkZScsICdtZW51J11cbn0pXSwgSW9uTWVudVRvZ2dsZSk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25NZW51VG9nZ2xlLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tbWVudS10b2dnbGUnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydhdXRvSGlkZScsICdtZW51J11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25OYXZMaW5rID0gY2xhc3MgSW9uTmF2TGluayB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbk5hdkxpbmtfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbk5hdkxpbmspKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uTmF2TGluayxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tbmF2LWxpbmtcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgY29tcG9uZW50OiBcImNvbXBvbmVudFwiLFxuICAgICAgY29tcG9uZW50UHJvcHM6IFwiY29tcG9uZW50UHJvcHNcIixcbiAgICAgIHJvdXRlckFuaW1hdGlvbjogXCJyb3V0ZXJBbmltYXRpb25cIixcbiAgICAgIHJvdXRlckRpcmVjdGlvbjogXCJyb3V0ZXJEaXJlY3Rpb25cIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uTmF2TGlua19UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uTmF2TGluayA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbXBvbmVudCcsICdjb21wb25lbnRQcm9wcycsICdyb3V0ZXJBbmltYXRpb24nLCAncm91dGVyRGlyZWN0aW9uJ11cbn0pXSwgSW9uTmF2TGluayk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25OYXZMaW5rLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tbmF2LWxpbmsnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydjb21wb25lbnQnLCAnY29tcG9uZW50UHJvcHMnLCAncm91dGVyQW5pbWF0aW9uJywgJ3JvdXRlckRpcmVjdGlvbiddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uTm90ZSA9IGNsYXNzIElvbk5vdGUge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25Ob3RlX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25Ob3RlKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvbk5vdGUsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLW5vdGVcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIG1vZGU6IFwibW9kZVwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25Ob3RlX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25Ob3RlID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sb3InLCAnbW9kZSddXG59KV0sIElvbk5vdGUpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uTm90ZSwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLW5vdGUnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydjb2xvcicsICdtb2RlJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25QaWNrZXIgPSBjbGFzcyBJb25QaWNrZXIge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25QaWNrZXJfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvblBpY2tlcikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25QaWNrZXIsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLXBpY2tlclwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBtb2RlOiBcIm1vZGVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uUGlja2VyX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25QaWNrZXIgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydtb2RlJ11cbn0pXSwgSW9uUGlja2VyKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvblBpY2tlciwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLXBpY2tlcicsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ21vZGUnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvblBpY2tlckNvbHVtbiA9IGNsYXNzIElvblBpY2tlckNvbHVtbiB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnaW9uQ2hhbmdlJ10pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25QaWNrZXJDb2x1bW5fRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvblBpY2tlckNvbHVtbikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25QaWNrZXJDb2x1bW4sXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLXBpY2tlci1jb2x1bW5cIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIixcbiAgICAgIHZhbHVlOiBcInZhbHVlXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvblBpY2tlckNvbHVtbl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uUGlja2VyQ29sdW1uID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sb3InLCAnZGlzYWJsZWQnLCAnbW9kZScsICd2YWx1ZSddLFxuICBtZXRob2RzOiBbJ3NldEZvY3VzJ11cbn0pXSwgSW9uUGlja2VyQ29sdW1uKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvblBpY2tlckNvbHVtbiwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLXBpY2tlci1jb2x1bW4nLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydjb2xvcicsICdkaXNhYmxlZCcsICdtb2RlJywgJ3ZhbHVlJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25QaWNrZXJDb2x1bW5PcHRpb24gPSBjbGFzcyBJb25QaWNrZXJDb2x1bW5PcHRpb24ge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25QaWNrZXJDb2x1bW5PcHRpb25fRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvblBpY2tlckNvbHVtbk9wdGlvbikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25QaWNrZXJDb2x1bW5PcHRpb24sXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLXBpY2tlci1jb2x1bW4tb3B0aW9uXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiLFxuICAgICAgdmFsdWU6IFwidmFsdWVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uUGlja2VyQ29sdW1uT3B0aW9uX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25QaWNrZXJDb2x1bW5PcHRpb24gPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xvcicsICdkaXNhYmxlZCcsICd2YWx1ZSddXG59KV0sIElvblBpY2tlckNvbHVtbk9wdGlvbik7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25QaWNrZXJDb2x1bW5PcHRpb24sIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1waWNrZXItY29sdW1uLW9wdGlvbicsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ3ZhbHVlJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25QaWNrZXJMZWdhY3kgPSBjbGFzcyBJb25QaWNrZXJMZWdhY3kge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2lvblBpY2tlckRpZFByZXNlbnQnLCAnaW9uUGlja2VyV2lsbFByZXNlbnQnLCAnaW9uUGlja2VyV2lsbERpc21pc3MnLCAnaW9uUGlja2VyRGlkRGlzbWlzcycsICdkaWRQcmVzZW50JywgJ3dpbGxQcmVzZW50JywgJ3dpbGxEaXNtaXNzJywgJ2RpZERpc21pc3MnXSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvblBpY2tlckxlZ2FjeV9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uUGlja2VyTGVnYWN5KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvblBpY2tlckxlZ2FjeSxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tcGlja2VyLWxlZ2FjeVwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBhbmltYXRlZDogXCJhbmltYXRlZFwiLFxuICAgICAgYmFja2Ryb3BEaXNtaXNzOiBcImJhY2tkcm9wRGlzbWlzc1wiLFxuICAgICAgYnV0dG9uczogXCJidXR0b25zXCIsXG4gICAgICBjb2x1bW5zOiBcImNvbHVtbnNcIixcbiAgICAgIGNzc0NsYXNzOiBcImNzc0NsYXNzXCIsXG4gICAgICBkdXJhdGlvbjogXCJkdXJhdGlvblwiLFxuICAgICAgZW50ZXJBbmltYXRpb246IFwiZW50ZXJBbmltYXRpb25cIixcbiAgICAgIGh0bWxBdHRyaWJ1dGVzOiBcImh0bWxBdHRyaWJ1dGVzXCIsXG4gICAgICBpc09wZW46IFwiaXNPcGVuXCIsXG4gICAgICBrZXlib2FyZENsb3NlOiBcImtleWJvYXJkQ2xvc2VcIixcbiAgICAgIGxlYXZlQW5pbWF0aW9uOiBcImxlYXZlQW5pbWF0aW9uXCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIixcbiAgICAgIHNob3dCYWNrZHJvcDogXCJzaG93QmFja2Ryb3BcIixcbiAgICAgIHRyaWdnZXI6IFwidHJpZ2dlclwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25QaWNrZXJMZWdhY3lfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvblBpY2tlckxlZ2FjeSA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FuaW1hdGVkJywgJ2JhY2tkcm9wRGlzbWlzcycsICdidXR0b25zJywgJ2NvbHVtbnMnLCAnY3NzQ2xhc3MnLCAnZHVyYXRpb24nLCAnZW50ZXJBbmltYXRpb24nLCAnaHRtbEF0dHJpYnV0ZXMnLCAnaXNPcGVuJywgJ2tleWJvYXJkQ2xvc2UnLCAnbGVhdmVBbmltYXRpb24nLCAnbW9kZScsICdzaG93QmFja2Ryb3AnLCAndHJpZ2dlciddLFxuICBtZXRob2RzOiBbJ3ByZXNlbnQnLCAnZGlzbWlzcycsICdvbkRpZERpc21pc3MnLCAnb25XaWxsRGlzbWlzcycsICdnZXRDb2x1bW4nXVxufSldLCBJb25QaWNrZXJMZWdhY3kpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uUGlja2VyTGVnYWN5LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tcGlja2VyLWxlZ2FjeScsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2FuaW1hdGVkJywgJ2JhY2tkcm9wRGlzbWlzcycsICdidXR0b25zJywgJ2NvbHVtbnMnLCAnY3NzQ2xhc3MnLCAnZHVyYXRpb24nLCAnZW50ZXJBbmltYXRpb24nLCAnaHRtbEF0dHJpYnV0ZXMnLCAnaXNPcGVuJywgJ2tleWJvYXJkQ2xvc2UnLCAnbGVhdmVBbmltYXRpb24nLCAnbW9kZScsICdzaG93QmFja2Ryb3AnLCAndHJpZ2dlciddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uUHJvZ3Jlc3NCYXIgPSBjbGFzcyBJb25Qcm9ncmVzc0JhciB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvblByb2dyZXNzQmFyX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25Qcm9ncmVzc0JhcikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25Qcm9ncmVzc0JhcixcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tcHJvZ3Jlc3MtYmFyXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGJ1ZmZlcjogXCJidWZmZXJcIixcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIixcbiAgICAgIHJldmVyc2VkOiBcInJldmVyc2VkXCIsXG4gICAgICB0eXBlOiBcInR5cGVcIixcbiAgICAgIHZhbHVlOiBcInZhbHVlXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvblByb2dyZXNzQmFyX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25Qcm9ncmVzc0JhciA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2J1ZmZlcicsICdjb2xvcicsICdtb2RlJywgJ3JldmVyc2VkJywgJ3R5cGUnLCAndmFsdWUnXVxufSldLCBJb25Qcm9ncmVzc0Jhcik7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25Qcm9ncmVzc0JhciwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLXByb2dyZXNzLWJhcicsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2J1ZmZlcicsICdjb2xvcicsICdtb2RlJywgJ3JldmVyc2VkJywgJ3R5cGUnLCAndmFsdWUnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvblJhZGlvID0gY2xhc3MgSW9uUmFkaW8ge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2lvbkZvY3VzJywgJ2lvbkJsdXInXSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvblJhZGlvX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25SYWRpbykoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25SYWRpbyxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tcmFkaW9cIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgYWxpZ25tZW50OiBcImFsaWdubWVudFwiLFxuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIsXG4gICAgICBqdXN0aWZ5OiBcImp1c3RpZnlcIixcbiAgICAgIGxhYmVsUGxhY2VtZW50OiBcImxhYmVsUGxhY2VtZW50XCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIixcbiAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgdmFsdWU6IFwidmFsdWVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uUmFkaW9fVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvblJhZGlvID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYWxpZ25tZW50JywgJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ2p1c3RpZnknLCAnbGFiZWxQbGFjZW1lbnQnLCAnbW9kZScsICduYW1lJywgJ3ZhbHVlJ11cbn0pXSwgSW9uUmFkaW8pO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uUmFkaW8sIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1yYWRpbycsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2FsaWdubWVudCcsICdjb2xvcicsICdkaXNhYmxlZCcsICdqdXN0aWZ5JywgJ2xhYmVsUGxhY2VtZW50JywgJ21vZGUnLCAnbmFtZScsICd2YWx1ZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uUmFkaW9Hcm91cCA9IGNsYXNzIElvblJhZGlvR3JvdXAge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2lvbkNoYW5nZSddKTtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uUmFkaW9Hcm91cF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uUmFkaW9Hcm91cCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25SYWRpb0dyb3VwLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1yYWRpby1ncm91cFwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBhbGxvd0VtcHR5U2VsZWN0aW9uOiBcImFsbG93RW1wdHlTZWxlY3Rpb25cIixcbiAgICAgIGNvbXBhcmVXaXRoOiBcImNvbXBhcmVXaXRoXCIsXG4gICAgICBlcnJvclRleHQ6IFwiZXJyb3JUZXh0XCIsXG4gICAgICBoZWxwZXJUZXh0OiBcImhlbHBlclRleHRcIixcbiAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgdmFsdWU6IFwidmFsdWVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uUmFkaW9Hcm91cF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uUmFkaW9Hcm91cCA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FsbG93RW1wdHlTZWxlY3Rpb24nLCAnY29tcGFyZVdpdGgnLCAnZXJyb3JUZXh0JywgJ2hlbHBlclRleHQnLCAnbmFtZScsICd2YWx1ZSddXG59KV0sIElvblJhZGlvR3JvdXApO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uUmFkaW9Hcm91cCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLXJhZGlvLWdyb3VwJyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnYWxsb3dFbXB0eVNlbGVjdGlvbicsICdjb21wYXJlV2l0aCcsICdlcnJvclRleHQnLCAnaGVscGVyVGV4dCcsICduYW1lJywgJ3ZhbHVlJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25SYW5nZSA9IGNsYXNzIElvblJhbmdlIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydpb25DaGFuZ2UnLCAnaW9uSW5wdXQnLCAnaW9uRm9jdXMnLCAnaW9uQmx1cicsICdpb25Lbm9iTW92ZVN0YXJ0JywgJ2lvbktub2JNb3ZlRW5kJ10pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25SYW5nZV9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uUmFuZ2UpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uUmFuZ2UsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLXJhbmdlXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGFjdGl2ZUJhclN0YXJ0OiBcImFjdGl2ZUJhclN0YXJ0XCIsXG4gICAgICBjb2xvcjogXCJjb2xvclwiLFxuICAgICAgZGVib3VuY2U6IFwiZGVib3VuY2VcIixcbiAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIsXG4gICAgICBkdWFsS25vYnM6IFwiZHVhbEtub2JzXCIsXG4gICAgICBsYWJlbDogXCJsYWJlbFwiLFxuICAgICAgbGFiZWxQbGFjZW1lbnQ6IFwibGFiZWxQbGFjZW1lbnRcIixcbiAgICAgIG1heDogXCJtYXhcIixcbiAgICAgIG1pbjogXCJtaW5cIixcbiAgICAgIG1vZGU6IFwibW9kZVwiLFxuICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICBwaW46IFwicGluXCIsXG4gICAgICBwaW5Gb3JtYXR0ZXI6IFwicGluRm9ybWF0dGVyXCIsXG4gICAgICBzbmFwczogXCJzbmFwc1wiLFxuICAgICAgc3RlcDogXCJzdGVwXCIsXG4gICAgICB0aWNrczogXCJ0aWNrc1wiLFxuICAgICAgdmFsdWU6IFwidmFsdWVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uUmFuZ2VfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvblJhbmdlID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYWN0aXZlQmFyU3RhcnQnLCAnY29sb3InLCAnZGVib3VuY2UnLCAnZGlzYWJsZWQnLCAnZHVhbEtub2JzJywgJ2xhYmVsJywgJ2xhYmVsUGxhY2VtZW50JywgJ21heCcsICdtaW4nLCAnbW9kZScsICduYW1lJywgJ3BpbicsICdwaW5Gb3JtYXR0ZXInLCAnc25hcHMnLCAnc3RlcCcsICd0aWNrcycsICd2YWx1ZSddXG59KV0sIElvblJhbmdlKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvblJhbmdlLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tcmFuZ2UnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydhY3RpdmVCYXJTdGFydCcsICdjb2xvcicsICdkZWJvdW5jZScsICdkaXNhYmxlZCcsICdkdWFsS25vYnMnLCAnbGFiZWwnLCAnbGFiZWxQbGFjZW1lbnQnLCAnbWF4JywgJ21pbicsICdtb2RlJywgJ25hbWUnLCAncGluJywgJ3BpbkZvcm1hdHRlcicsICdzbmFwcycsICdzdGVwJywgJ3RpY2tzJywgJ3ZhbHVlJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25SZWZyZXNoZXIgPSBjbGFzcyBJb25SZWZyZXNoZXIge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2lvblJlZnJlc2gnLCAnaW9uUHVsbCcsICdpb25TdGFydCddKTtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uUmVmcmVzaGVyX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25SZWZyZXNoZXIpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uUmVmcmVzaGVyLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1yZWZyZXNoZXJcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgY2xvc2VEdXJhdGlvbjogXCJjbG9zZUR1cmF0aW9uXCIsXG4gICAgICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiLFxuICAgICAgbW9kZTogXCJtb2RlXCIsXG4gICAgICBwdWxsRmFjdG9yOiBcInB1bGxGYWN0b3JcIixcbiAgICAgIHB1bGxNYXg6IFwicHVsbE1heFwiLFxuICAgICAgcHVsbE1pbjogXCJwdWxsTWluXCIsXG4gICAgICBzbmFwYmFja0R1cmF0aW9uOiBcInNuYXBiYWNrRHVyYXRpb25cIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uUmVmcmVzaGVyX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25SZWZyZXNoZXIgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydjbG9zZUR1cmF0aW9uJywgJ2Rpc2FibGVkJywgJ21vZGUnLCAncHVsbEZhY3RvcicsICdwdWxsTWF4JywgJ3B1bGxNaW4nLCAnc25hcGJhY2tEdXJhdGlvbiddLFxuICBtZXRob2RzOiBbJ2NvbXBsZXRlJywgJ2NhbmNlbCcsICdnZXRQcm9ncmVzcyddXG59KV0sIElvblJlZnJlc2hlcik7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25SZWZyZXNoZXIsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1yZWZyZXNoZXInLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydjbG9zZUR1cmF0aW9uJywgJ2Rpc2FibGVkJywgJ21vZGUnLCAncHVsbEZhY3RvcicsICdwdWxsTWF4JywgJ3B1bGxNaW4nLCAnc25hcGJhY2tEdXJhdGlvbiddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uUmVmcmVzaGVyQ29udGVudCA9IGNsYXNzIElvblJlZnJlc2hlckNvbnRlbnQge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25SZWZyZXNoZXJDb250ZW50X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25SZWZyZXNoZXJDb250ZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvblJlZnJlc2hlckNvbnRlbnQsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLXJlZnJlc2hlci1jb250ZW50XCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIHB1bGxpbmdJY29uOiBcInB1bGxpbmdJY29uXCIsXG4gICAgICBwdWxsaW5nVGV4dDogXCJwdWxsaW5nVGV4dFwiLFxuICAgICAgcmVmcmVzaGluZ1NwaW5uZXI6IFwicmVmcmVzaGluZ1NwaW5uZXJcIixcbiAgICAgIHJlZnJlc2hpbmdUZXh0OiBcInJlZnJlc2hpbmdUZXh0XCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvblJlZnJlc2hlckNvbnRlbnRfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvblJlZnJlc2hlckNvbnRlbnQgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydwdWxsaW5nSWNvbicsICdwdWxsaW5nVGV4dCcsICdyZWZyZXNoaW5nU3Bpbm5lcicsICdyZWZyZXNoaW5nVGV4dCddXG59KV0sIElvblJlZnJlc2hlckNvbnRlbnQpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uUmVmcmVzaGVyQ29udGVudCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLXJlZnJlc2hlci1jb250ZW50JyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsncHVsbGluZ0ljb24nLCAncHVsbGluZ1RleHQnLCAncmVmcmVzaGluZ1NwaW5uZXInLCAncmVmcmVzaGluZ1RleHQnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvblJlb3JkZXIgPSBjbGFzcyBJb25SZW9yZGVyIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uUmVvcmRlcl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uUmVvcmRlcikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25SZW9yZGVyLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1yZW9yZGVyXCJdXSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25SZW9yZGVyX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25SZW9yZGVyID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe30pXSwgSW9uUmVvcmRlcik7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25SZW9yZGVyLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tcmVvcmRlcicsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvblJlb3JkZXJHcm91cCA9IGNsYXNzIElvblJlb3JkZXJHcm91cCB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnaW9uSXRlbVJlb3JkZXInLCAnaW9uUmVvcmRlclN0YXJ0JywgJ2lvblJlb3JkZXJNb3ZlJywgJ2lvblJlb3JkZXJFbmQnXSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvblJlb3JkZXJHcm91cF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uUmVvcmRlckdyb3VwKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvblJlb3JkZXJHcm91cCxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tcmVvcmRlci1ncm91cFwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25SZW9yZGVyR3JvdXBfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvblJlb3JkZXJHcm91cCA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJ10sXG4gIG1ldGhvZHM6IFsnY29tcGxldGUnXVxufSldLCBJb25SZW9yZGVyR3JvdXApO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uUmVvcmRlckdyb3VwLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tcmVvcmRlci1ncm91cCcsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2Rpc2FibGVkJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25SaXBwbGVFZmZlY3QgPSBjbGFzcyBJb25SaXBwbGVFZmZlY3Qge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25SaXBwbGVFZmZlY3RfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvblJpcHBsZUVmZmVjdCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25SaXBwbGVFZmZlY3QsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLXJpcHBsZS1lZmZlY3RcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgdHlwZTogXCJ0eXBlXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvblJpcHBsZUVmZmVjdF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uUmlwcGxlRWZmZWN0ID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsndHlwZSddLFxuICBtZXRob2RzOiBbJ2FkZFJpcHBsZSddXG59KV0sIElvblJpcHBsZUVmZmVjdCk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25SaXBwbGVFZmZlY3QsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1yaXBwbGUtZWZmZWN0JyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsndHlwZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uUm93ID0gY2xhc3MgSW9uUm93IHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uUm93X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25Sb3cpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uUm93LFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1yb3dcIl1dLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvblJvd19UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uUm93ID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe30pXSwgSW9uUm93KTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvblJvdywgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLXJvdycsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvblNlYXJjaGJhciA9IGNsYXNzIElvblNlYXJjaGJhciB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnaW9uSW5wdXQnLCAnaW9uQ2hhbmdlJywgJ2lvbkNhbmNlbCcsICdpb25DbGVhcicsICdpb25CbHVyJywgJ2lvbkZvY3VzJ10pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25TZWFyY2hiYXJfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvblNlYXJjaGJhcikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25TZWFyY2hiYXIsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLXNlYXJjaGJhclwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBhbmltYXRlZDogXCJhbmltYXRlZFwiLFxuICAgICAgYXV0b2NhcGl0YWxpemU6IFwiYXV0b2NhcGl0YWxpemVcIixcbiAgICAgIGF1dG9jb21wbGV0ZTogXCJhdXRvY29tcGxldGVcIixcbiAgICAgIGF1dG9jb3JyZWN0OiBcImF1dG9jb3JyZWN0XCIsXG4gICAgICBjYW5jZWxCdXR0b25JY29uOiBcImNhbmNlbEJ1dHRvbkljb25cIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiY2FuY2VsQnV0dG9uVGV4dFwiLFxuICAgICAgY2xlYXJJY29uOiBcImNsZWFySWNvblwiLFxuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGRlYm91bmNlOiBcImRlYm91bmNlXCIsXG4gICAgICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiLFxuICAgICAgZW50ZXJrZXloaW50OiBcImVudGVya2V5aGludFwiLFxuICAgICAgaW5wdXRtb2RlOiBcImlucHV0bW9kZVwiLFxuICAgICAgbWF4bGVuZ3RoOiBcIm1heGxlbmd0aFwiLFxuICAgICAgbWlubGVuZ3RoOiBcIm1pbmxlbmd0aFwiLFxuICAgICAgbW9kZTogXCJtb2RlXCIsXG4gICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcInBsYWNlaG9sZGVyXCIsXG4gICAgICBzZWFyY2hJY29uOiBcInNlYXJjaEljb25cIixcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IFwic2hvd0NhbmNlbEJ1dHRvblwiLFxuICAgICAgc2hvd0NsZWFyQnV0dG9uOiBcInNob3dDbGVhckJ1dHRvblwiLFxuICAgICAgc3BlbGxjaGVjazogXCJzcGVsbGNoZWNrXCIsXG4gICAgICB0eXBlOiBcInR5cGVcIixcbiAgICAgIHZhbHVlOiBcInZhbHVlXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvblNlYXJjaGJhcl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uU2VhcmNoYmFyID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYW5pbWF0ZWQnLCAnYXV0b2NhcGl0YWxpemUnLCAnYXV0b2NvbXBsZXRlJywgJ2F1dG9jb3JyZWN0JywgJ2NhbmNlbEJ1dHRvbkljb24nLCAnY2FuY2VsQnV0dG9uVGV4dCcsICdjbGVhckljb24nLCAnY29sb3InLCAnZGVib3VuY2UnLCAnZGlzYWJsZWQnLCAnZW50ZXJrZXloaW50JywgJ2lucHV0bW9kZScsICdtYXhsZW5ndGgnLCAnbWlubGVuZ3RoJywgJ21vZGUnLCAnbmFtZScsICdwbGFjZWhvbGRlcicsICdzZWFyY2hJY29uJywgJ3Nob3dDYW5jZWxCdXR0b24nLCAnc2hvd0NsZWFyQnV0dG9uJywgJ3NwZWxsY2hlY2snLCAndHlwZScsICd2YWx1ZSddLFxuICBtZXRob2RzOiBbJ3NldEZvY3VzJywgJ2dldElucHV0RWxlbWVudCddXG59KV0sIElvblNlYXJjaGJhcik7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25TZWFyY2hiYXIsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1zZWFyY2hiYXInLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydhbmltYXRlZCcsICdhdXRvY2FwaXRhbGl6ZScsICdhdXRvY29tcGxldGUnLCAnYXV0b2NvcnJlY3QnLCAnY2FuY2VsQnV0dG9uSWNvbicsICdjYW5jZWxCdXR0b25UZXh0JywgJ2NsZWFySWNvbicsICdjb2xvcicsICdkZWJvdW5jZScsICdkaXNhYmxlZCcsICdlbnRlcmtleWhpbnQnLCAnaW5wdXRtb2RlJywgJ21heGxlbmd0aCcsICdtaW5sZW5ndGgnLCAnbW9kZScsICduYW1lJywgJ3BsYWNlaG9sZGVyJywgJ3NlYXJjaEljb24nLCAnc2hvd0NhbmNlbEJ1dHRvbicsICdzaG93Q2xlYXJCdXR0b24nLCAnc3BlbGxjaGVjaycsICd0eXBlJywgJ3ZhbHVlJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25TZWdtZW50ID0gY2xhc3MgSW9uU2VnbWVudCB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnaW9uQ2hhbmdlJ10pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25TZWdtZW50X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25TZWdtZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvblNlZ21lbnQsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLXNlZ21lbnRcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIixcbiAgICAgIHNjcm9sbGFibGU6IFwic2Nyb2xsYWJsZVwiLFxuICAgICAgc2VsZWN0T25Gb2N1czogXCJzZWxlY3RPbkZvY3VzXCIsXG4gICAgICBzd2lwZUdlc3R1cmU6IFwic3dpcGVHZXN0dXJlXCIsXG4gICAgICB2YWx1ZTogXCJ2YWx1ZVwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25TZWdtZW50X1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25TZWdtZW50ID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnY29sb3InLCAnZGlzYWJsZWQnLCAnbW9kZScsICdzY3JvbGxhYmxlJywgJ3NlbGVjdE9uRm9jdXMnLCAnc3dpcGVHZXN0dXJlJywgJ3ZhbHVlJ11cbn0pXSwgSW9uU2VnbWVudCk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25TZWdtZW50LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tc2VnbWVudCcsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2NvbG9yJywgJ2Rpc2FibGVkJywgJ21vZGUnLCAnc2Nyb2xsYWJsZScsICdzZWxlY3RPbkZvY3VzJywgJ3N3aXBlR2VzdHVyZScsICd2YWx1ZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uU2VnbWVudEJ1dHRvbiA9IGNsYXNzIElvblNlZ21lbnRCdXR0b24ge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25TZWdtZW50QnV0dG9uX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25TZWdtZW50QnV0dG9uKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvblNlZ21lbnRCdXR0b24sXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLXNlZ21lbnQtYnV0dG9uXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbnRlbnRJZDogXCJjb250ZW50SWRcIixcbiAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIsXG4gICAgICBsYXlvdXQ6IFwibGF5b3V0XCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIixcbiAgICAgIHR5cGU6IFwidHlwZVwiLFxuICAgICAgdmFsdWU6IFwidmFsdWVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uU2VnbWVudEJ1dHRvbl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uU2VnbWVudEJ1dHRvbiA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbnRlbnRJZCcsICdkaXNhYmxlZCcsICdsYXlvdXQnLCAnbW9kZScsICd0eXBlJywgJ3ZhbHVlJ11cbn0pXSwgSW9uU2VnbWVudEJ1dHRvbik7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25TZWdtZW50QnV0dG9uLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tc2VnbWVudC1idXR0b24nLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydjb250ZW50SWQnLCAnZGlzYWJsZWQnLCAnbGF5b3V0JywgJ21vZGUnLCAndHlwZScsICd2YWx1ZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uU2VnbWVudENvbnRlbnQgPSBjbGFzcyBJb25TZWdtZW50Q29udGVudCB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvblNlZ21lbnRDb250ZW50X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25TZWdtZW50Q29udGVudCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25TZWdtZW50Q29udGVudCxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tc2VnbWVudC1jb250ZW50XCJdXSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25TZWdtZW50Q29udGVudF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uU2VnbWVudENvbnRlbnQgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7fSldLCBJb25TZWdtZW50Q29udGVudCk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25TZWdtZW50Q29udGVudCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLXNlZ21lbnQtY29udGVudCcsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvblNlZ21lbnRWaWV3ID0gY2xhc3MgSW9uU2VnbWVudFZpZXcge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbJ2lvblNlZ21lbnRWaWV3U2Nyb2xsJ10pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25TZWdtZW50Vmlld19GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uU2VnbWVudFZpZXcpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uU2VnbWVudFZpZXcsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLXNlZ21lbnQtdmlld1wiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25TZWdtZW50Vmlld19UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uU2VnbWVudFZpZXcgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydkaXNhYmxlZCddXG59KV0sIElvblNlZ21lbnRWaWV3KTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvblNlZ21lbnRWaWV3LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tc2VnbWVudC12aWV3JyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnZGlzYWJsZWQnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvblNlbGVjdCA9IGNsYXNzIElvblNlbGVjdCB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnaW9uQ2hhbmdlJywgJ2lvbkNhbmNlbCcsICdpb25EaXNtaXNzJywgJ2lvbkZvY3VzJywgJ2lvbkJsdXInXSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvblNlbGVjdF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uU2VsZWN0KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvblNlbGVjdCxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tc2VsZWN0XCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNhbmNlbFRleHQ6IFwiY2FuY2VsVGV4dFwiLFxuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGNvbXBhcmVXaXRoOiBcImNvbXBhcmVXaXRoXCIsXG4gICAgICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiLFxuICAgICAgZXJyb3JUZXh0OiBcImVycm9yVGV4dFwiLFxuICAgICAgZXhwYW5kZWRJY29uOiBcImV4cGFuZGVkSWNvblwiLFxuICAgICAgZmlsbDogXCJmaWxsXCIsXG4gICAgICBoZWxwZXJUZXh0OiBcImhlbHBlclRleHRcIixcbiAgICAgIGludGVyZmFjZTogXCJpbnRlcmZhY2VcIixcbiAgICAgIGludGVyZmFjZU9wdGlvbnM6IFwiaW50ZXJmYWNlT3B0aW9uc1wiLFxuICAgICAganVzdGlmeTogXCJqdXN0aWZ5XCIsXG4gICAgICBsYWJlbDogXCJsYWJlbFwiLFxuICAgICAgbGFiZWxQbGFjZW1lbnQ6IFwibGFiZWxQbGFjZW1lbnRcIixcbiAgICAgIG1vZGU6IFwibW9kZVwiLFxuICAgICAgbXVsdGlwbGU6IFwibXVsdGlwbGVcIixcbiAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgb2tUZXh0OiBcIm9rVGV4dFwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwicGxhY2Vob2xkZXJcIixcbiAgICAgIHJlcXVpcmVkOiBcInJlcXVpcmVkXCIsXG4gICAgICBzZWxlY3RlZFRleHQ6IFwic2VsZWN0ZWRUZXh0XCIsXG4gICAgICBzaGFwZTogXCJzaGFwZVwiLFxuICAgICAgdG9nZ2xlSWNvbjogXCJ0b2dnbGVJY29uXCIsXG4gICAgICB2YWx1ZTogXCJ2YWx1ZVwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25TZWxlY3RfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvblNlbGVjdCA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NhbmNlbFRleHQnLCAnY29sb3InLCAnY29tcGFyZVdpdGgnLCAnZGlzYWJsZWQnLCAnZXJyb3JUZXh0JywgJ2V4cGFuZGVkSWNvbicsICdmaWxsJywgJ2hlbHBlclRleHQnLCAnaW50ZXJmYWNlJywgJ2ludGVyZmFjZU9wdGlvbnMnLCAnanVzdGlmeScsICdsYWJlbCcsICdsYWJlbFBsYWNlbWVudCcsICdtb2RlJywgJ211bHRpcGxlJywgJ25hbWUnLCAnb2tUZXh0JywgJ3BsYWNlaG9sZGVyJywgJ3JlcXVpcmVkJywgJ3NlbGVjdGVkVGV4dCcsICdzaGFwZScsICd0b2dnbGVJY29uJywgJ3ZhbHVlJ10sXG4gIG1ldGhvZHM6IFsnb3BlbiddXG59KV0sIElvblNlbGVjdCk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25TZWxlY3QsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1zZWxlY3QnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydjYW5jZWxUZXh0JywgJ2NvbG9yJywgJ2NvbXBhcmVXaXRoJywgJ2Rpc2FibGVkJywgJ2Vycm9yVGV4dCcsICdleHBhbmRlZEljb24nLCAnZmlsbCcsICdoZWxwZXJUZXh0JywgJ2ludGVyZmFjZScsICdpbnRlcmZhY2VPcHRpb25zJywgJ2p1c3RpZnknLCAnbGFiZWwnLCAnbGFiZWxQbGFjZW1lbnQnLCAnbW9kZScsICdtdWx0aXBsZScsICduYW1lJywgJ29rVGV4dCcsICdwbGFjZWhvbGRlcicsICdyZXF1aXJlZCcsICdzZWxlY3RlZFRleHQnLCAnc2hhcGUnLCAndG9nZ2xlSWNvbicsICd2YWx1ZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uU2VsZWN0TW9kYWwgPSBjbGFzcyBJb25TZWxlY3RNb2RhbCB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvblNlbGVjdE1vZGFsX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25TZWxlY3RNb2RhbCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25TZWxlY3RNb2RhbCxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tc2VsZWN0LW1vZGFsXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGhlYWRlcjogXCJoZWFkZXJcIixcbiAgICAgIG11bHRpcGxlOiBcIm11bHRpcGxlXCIsXG4gICAgICBvcHRpb25zOiBcIm9wdGlvbnNcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uU2VsZWN0TW9kYWxfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvblNlbGVjdE1vZGFsID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnaGVhZGVyJywgJ211bHRpcGxlJywgJ29wdGlvbnMnXVxufSldLCBJb25TZWxlY3RNb2RhbCk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25TZWxlY3RNb2RhbCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLXNlbGVjdC1tb2RhbCcsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2hlYWRlcicsICdtdWx0aXBsZScsICdvcHRpb25zJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25TZWxlY3RPcHRpb24gPSBjbGFzcyBJb25TZWxlY3RPcHRpb24ge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25TZWxlY3RPcHRpb25fRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvblNlbGVjdE9wdGlvbikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25TZWxlY3RPcHRpb24sXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLXNlbGVjdC1vcHRpb25cIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgZGlzYWJsZWQ6IFwiZGlzYWJsZWRcIixcbiAgICAgIHZhbHVlOiBcInZhbHVlXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvblNlbGVjdE9wdGlvbl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uU2VsZWN0T3B0aW9uID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAndmFsdWUnXVxufSldLCBJb25TZWxlY3RPcHRpb24pO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uU2VsZWN0T3B0aW9uLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tc2VsZWN0LW9wdGlvbicsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ3ZhbHVlJ11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25Ta2VsZXRvblRleHQgPSBjbGFzcyBJb25Ta2VsZXRvblRleHQge1xuICB6O1xuICBlbDtcbiAgY29uc3RydWN0b3IoYywgciwgeikge1xuICAgIHRoaXMueiA9IHo7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25Ta2VsZXRvblRleHRfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvblNrZWxldG9uVGV4dCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25Ta2VsZXRvblRleHQsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLXNrZWxldG9uLXRleHRcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgYW5pbWF0ZWQ6IFwiYW5pbWF0ZWRcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uU2tlbGV0b25UZXh0X1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25Ta2VsZXRvblRleHQgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydhbmltYXRlZCddXG59KV0sIElvblNrZWxldG9uVGV4dCk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25Ta2VsZXRvblRleHQsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1za2VsZXRvbi10ZXh0JyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnYW5pbWF0ZWQnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvblNwaW5uZXIgPSBjbGFzcyBJb25TcGlubmVyIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uU3Bpbm5lcl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uU3Bpbm5lcikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25TcGlubmVyLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1zcGlubmVyXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBkdXJhdGlvbjogXCJkdXJhdGlvblwiLFxuICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICBwYXVzZWQ6IFwicGF1c2VkXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvblNwaW5uZXJfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvblNwaW5uZXIgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydjb2xvcicsICdkdXJhdGlvbicsICduYW1lJywgJ3BhdXNlZCddXG59KV0sIElvblNwaW5uZXIpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uU3Bpbm5lciwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLXNwaW5uZXInLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydjb2xvcicsICdkdXJhdGlvbicsICduYW1lJywgJ3BhdXNlZCddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uU3BsaXRQYW5lID0gY2xhc3MgSW9uU3BsaXRQYW5lIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydpb25TcGxpdFBhbmVWaXNpYmxlJ10pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25TcGxpdFBhbmVfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvblNwbGl0UGFuZSkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25TcGxpdFBhbmUsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLXNwbGl0LXBhbmVcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgY29udGVudElkOiBcImNvbnRlbnRJZFwiLFxuICAgICAgZGlzYWJsZWQ6IFwiZGlzYWJsZWRcIixcbiAgICAgIHdoZW46IFwid2hlblwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25TcGxpdFBhbmVfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvblNwbGl0UGFuZSA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbnRlbnRJZCcsICdkaXNhYmxlZCcsICd3aGVuJ11cbn0pXSwgSW9uU3BsaXRQYW5lKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvblNwbGl0UGFuZSwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLXNwbGl0LXBhbmUnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydjb250ZW50SWQnLCAnZGlzYWJsZWQnLCAnd2hlbiddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uVGFiID0gY2xhc3MgSW9uVGFiIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uVGFiX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25UYWIpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uVGFiLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi10YWJcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgY29tcG9uZW50OiBcImNvbXBvbmVudFwiLFxuICAgICAgdGFiOiBcInRhYlwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25UYWJfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvblRhYiA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbXBvbmVudCcsICd0YWInXSxcbiAgbWV0aG9kczogWydzZXRBY3RpdmUnXVxufSldLCBJb25UYWIpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uVGFiLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tdGFiJyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnY29tcG9uZW50JywgJ3RhYiddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uVGFiQmFyID0gY2xhc3MgSW9uVGFiQmFyIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uVGFiQmFyX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25UYWJCYXIpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uVGFiQmFyLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi10YWItYmFyXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIixcbiAgICAgIHNlbGVjdGVkVGFiOiBcInNlbGVjdGVkVGFiXCIsXG4gICAgICB0cmFuc2x1Y2VudDogXCJ0cmFuc2x1Y2VudFwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25UYWJCYXJfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvblRhYkJhciA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ21vZGUnLCAnc2VsZWN0ZWRUYWInLCAndHJhbnNsdWNlbnQnXVxufSldLCBJb25UYWJCYXIpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uVGFiQmFyLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tdGFiLWJhcicsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2NvbG9yJywgJ21vZGUnLCAnc2VsZWN0ZWRUYWInLCAndHJhbnNsdWNlbnQnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvblRhYkJ1dHRvbiA9IGNsYXNzIElvblRhYkJ1dHRvbiB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvblRhYkJ1dHRvbl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uVGFiQnV0dG9uKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvblRhYkJ1dHRvbixcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tdGFiLWJ1dHRvblwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiLFxuICAgICAgZG93bmxvYWQ6IFwiZG93bmxvYWRcIixcbiAgICAgIGhyZWY6IFwiaHJlZlwiLFxuICAgICAgbGF5b3V0OiBcImxheW91dFwiLFxuICAgICAgbW9kZTogXCJtb2RlXCIsXG4gICAgICByZWw6IFwicmVsXCIsXG4gICAgICBzZWxlY3RlZDogXCJzZWxlY3RlZFwiLFxuICAgICAgdGFiOiBcInRhYlwiLFxuICAgICAgdGFyZ2V0OiBcInRhcmdldFwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25UYWJCdXR0b25fVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvblRhYkJ1dHRvbiA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2hyZWYnLCAnbGF5b3V0JywgJ21vZGUnLCAncmVsJywgJ3NlbGVjdGVkJywgJ3RhYicsICd0YXJnZXQnXVxufSldLCBJb25UYWJCdXR0b24pO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uVGFiQnV0dG9uLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tdGFiLWJ1dHRvbicsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2hyZWYnLCAnbGF5b3V0JywgJ21vZGUnLCAncmVsJywgJ3NlbGVjdGVkJywgJ3RhYicsICd0YXJnZXQnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvblRleHQgPSBjbGFzcyBJb25UZXh0IHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uVGV4dF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uVGV4dCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25UZXh0LFxuICAgIHNlbGVjdG9yczogW1tcImlvbi10ZXh0XCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uVGV4dF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uVGV4dCA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ21vZGUnXVxufSldLCBJb25UZXh0KTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvblRleHQsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi10ZXh0JyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnY29sb3InLCAnbW9kZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uVGV4dGFyZWEgPSBjbGFzcyBJb25UZXh0YXJlYSB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnaW9uQ2hhbmdlJywgJ2lvbklucHV0JywgJ2lvbkJsdXInLCAnaW9uRm9jdXMnXSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvblRleHRhcmVhX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25UZXh0YXJlYSkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25UZXh0YXJlYSxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tdGV4dGFyZWFcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgYXV0b0dyb3c6IFwiYXV0b0dyb3dcIixcbiAgICAgIGF1dG9jYXBpdGFsaXplOiBcImF1dG9jYXBpdGFsaXplXCIsXG4gICAgICBhdXRvZm9jdXM6IFwiYXV0b2ZvY3VzXCIsXG4gICAgICBjbGVhck9uRWRpdDogXCJjbGVhck9uRWRpdFwiLFxuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGNvbHM6IFwiY29sc1wiLFxuICAgICAgY291bnRlcjogXCJjb3VudGVyXCIsXG4gICAgICBjb3VudGVyRm9ybWF0dGVyOiBcImNvdW50ZXJGb3JtYXR0ZXJcIixcbiAgICAgIGRlYm91bmNlOiBcImRlYm91bmNlXCIsXG4gICAgICBkaXNhYmxlZDogXCJkaXNhYmxlZFwiLFxuICAgICAgZW50ZXJrZXloaW50OiBcImVudGVya2V5aGludFwiLFxuICAgICAgZXJyb3JUZXh0OiBcImVycm9yVGV4dFwiLFxuICAgICAgZmlsbDogXCJmaWxsXCIsXG4gICAgICBoZWxwZXJUZXh0OiBcImhlbHBlclRleHRcIixcbiAgICAgIGlucHV0bW9kZTogXCJpbnB1dG1vZGVcIixcbiAgICAgIGxhYmVsOiBcImxhYmVsXCIsXG4gICAgICBsYWJlbFBsYWNlbWVudDogXCJsYWJlbFBsYWNlbWVudFwiLFxuICAgICAgbWF4bGVuZ3RoOiBcIm1heGxlbmd0aFwiLFxuICAgICAgbWlubGVuZ3RoOiBcIm1pbmxlbmd0aFwiLFxuICAgICAgbW9kZTogXCJtb2RlXCIsXG4gICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcInBsYWNlaG9sZGVyXCIsXG4gICAgICByZWFkb25seTogXCJyZWFkb25seVwiLFxuICAgICAgcmVxdWlyZWQ6IFwicmVxdWlyZWRcIixcbiAgICAgIHJvd3M6IFwicm93c1wiLFxuICAgICAgc2hhcGU6IFwic2hhcGVcIixcbiAgICAgIHNwZWxsY2hlY2s6IFwic3BlbGxjaGVja1wiLFxuICAgICAgdmFsdWU6IFwidmFsdWVcIixcbiAgICAgIHdyYXA6IFwid3JhcFwiXG4gICAgfSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25UZXh0YXJlYV9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uVGV4dGFyZWEgPSBfX2RlY29yYXRlKFtQcm94eUNtcCh7XG4gIGlucHV0czogWydhdXRvR3JvdycsICdhdXRvY2FwaXRhbGl6ZScsICdhdXRvZm9jdXMnLCAnY2xlYXJPbkVkaXQnLCAnY29sb3InLCAnY29scycsICdjb3VudGVyJywgJ2NvdW50ZXJGb3JtYXR0ZXInLCAnZGVib3VuY2UnLCAnZGlzYWJsZWQnLCAnZW50ZXJrZXloaW50JywgJ2Vycm9yVGV4dCcsICdmaWxsJywgJ2hlbHBlclRleHQnLCAnaW5wdXRtb2RlJywgJ2xhYmVsJywgJ2xhYmVsUGxhY2VtZW50JywgJ21heGxlbmd0aCcsICdtaW5sZW5ndGgnLCAnbW9kZScsICduYW1lJywgJ3BsYWNlaG9sZGVyJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkJywgJ3Jvd3MnLCAnc2hhcGUnLCAnc3BlbGxjaGVjaycsICd2YWx1ZScsICd3cmFwJ10sXG4gIG1ldGhvZHM6IFsnc2V0Rm9jdXMnLCAnZ2V0SW5wdXRFbGVtZW50J11cbn0pXSwgSW9uVGV4dGFyZWEpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uVGV4dGFyZWEsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi10ZXh0YXJlYScsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgICAgaW5wdXRzOiBbJ2F1dG9Hcm93JywgJ2F1dG9jYXBpdGFsaXplJywgJ2F1dG9mb2N1cycsICdjbGVhck9uRWRpdCcsICdjb2xvcicsICdjb2xzJywgJ2NvdW50ZXInLCAnY291bnRlckZvcm1hdHRlcicsICdkZWJvdW5jZScsICdkaXNhYmxlZCcsICdlbnRlcmtleWhpbnQnLCAnZXJyb3JUZXh0JywgJ2ZpbGwnLCAnaGVscGVyVGV4dCcsICdpbnB1dG1vZGUnLCAnbGFiZWwnLCAnbGFiZWxQbGFjZW1lbnQnLCAnbWF4bGVuZ3RoJywgJ21pbmxlbmd0aCcsICdtb2RlJywgJ25hbWUnLCAncGxhY2Vob2xkZXInLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAncm93cycsICdzaGFwZScsICdzcGVsbGNoZWNrJywgJ3ZhbHVlJywgJ3dyYXAnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvblRodW1ibmFpbCA9IGNsYXNzIElvblRodW1ibmFpbCB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvblRodW1ibmFpbF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uVGh1bWJuYWlsKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvblRodW1ibmFpbCxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tdGh1bWJuYWlsXCJdXSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25UaHVtYm5haWxfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufTtcbklvblRodW1ibmFpbCA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHt9KV0sIElvblRodW1ibmFpbCk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25UaHVtYm5haWwsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi10aHVtYm5haWwnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogW11cbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmxldCBJb25UaXRsZSA9IGNsYXNzIElvblRpdGxlIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uVGl0bGVfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvblRpdGxlKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvblRpdGxlLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi10aXRsZVwiXV0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBjb2xvcjogXCJjb2xvclwiLFxuICAgICAgc2l6ZTogXCJzaXplXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvblRpdGxlX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25UaXRsZSA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ3NpemUnXVxufSldLCBJb25UaXRsZSk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25UaXRsZSwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLXRpdGxlJyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnY29sb3InLCAnc2l6ZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5sZXQgSW9uVG9hc3QgPSBjbGFzcyBJb25Ub2FzdCB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnaW9uVG9hc3REaWRQcmVzZW50JywgJ2lvblRvYXN0V2lsbFByZXNlbnQnLCAnaW9uVG9hc3RXaWxsRGlzbWlzcycsICdpb25Ub2FzdERpZERpc21pc3MnLCAnZGlkUHJlc2VudCcsICd3aWxsUHJlc2VudCcsICd3aWxsRGlzbWlzcycsICdkaWREaXNtaXNzJ10pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBJb25Ub2FzdF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uVG9hc3QpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSkpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uVG9hc3QsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLXRvYXN0XCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGFuaW1hdGVkOiBcImFuaW1hdGVkXCIsXG4gICAgICBidXR0b25zOiBcImJ1dHRvbnNcIixcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBjc3NDbGFzczogXCJjc3NDbGFzc1wiLFxuICAgICAgZHVyYXRpb246IFwiZHVyYXRpb25cIixcbiAgICAgIGVudGVyQW5pbWF0aW9uOiBcImVudGVyQW5pbWF0aW9uXCIsXG4gICAgICBoZWFkZXI6IFwiaGVhZGVyXCIsXG4gICAgICBodG1sQXR0cmlidXRlczogXCJodG1sQXR0cmlidXRlc1wiLFxuICAgICAgaWNvbjogXCJpY29uXCIsXG4gICAgICBpc09wZW46IFwiaXNPcGVuXCIsXG4gICAgICBrZXlib2FyZENsb3NlOiBcImtleWJvYXJkQ2xvc2VcIixcbiAgICAgIGxheW91dDogXCJsYXlvdXRcIixcbiAgICAgIGxlYXZlQW5pbWF0aW9uOiBcImxlYXZlQW5pbWF0aW9uXCIsXG4gICAgICBtZXNzYWdlOiBcIm1lc3NhZ2VcIixcbiAgICAgIG1vZGU6IFwibW9kZVwiLFxuICAgICAgcG9zaXRpb246IFwicG9zaXRpb25cIixcbiAgICAgIHBvc2l0aW9uQW5jaG9yOiBcInBvc2l0aW9uQW5jaG9yXCIsXG4gICAgICBzd2lwZUdlc3R1cmU6IFwic3dpcGVHZXN0dXJlXCIsXG4gICAgICB0cmFuc2x1Y2VudDogXCJ0cmFuc2x1Y2VudFwiLFxuICAgICAgdHJpZ2dlcjogXCJ0cmlnZ2VyXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvblRvYXN0X1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn07XG5Jb25Ub2FzdCA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2FuaW1hdGVkJywgJ2J1dHRvbnMnLCAnY29sb3InLCAnY3NzQ2xhc3MnLCAnZHVyYXRpb24nLCAnZW50ZXJBbmltYXRpb24nLCAnaGVhZGVyJywgJ2h0bWxBdHRyaWJ1dGVzJywgJ2ljb24nLCAnaXNPcGVuJywgJ2tleWJvYXJkQ2xvc2UnLCAnbGF5b3V0JywgJ2xlYXZlQW5pbWF0aW9uJywgJ21lc3NhZ2UnLCAnbW9kZScsICdwb3NpdGlvbicsICdwb3NpdGlvbkFuY2hvcicsICdzd2lwZUdlc3R1cmUnLCAndHJhbnNsdWNlbnQnLCAndHJpZ2dlciddLFxuICBtZXRob2RzOiBbJ3ByZXNlbnQnLCAnZGlzbWlzcycsICdvbkRpZERpc21pc3MnLCAnb25XaWxsRGlzbWlzcyddXG59KV0sIElvblRvYXN0KTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvblRvYXN0LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tdG9hc3QnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dHMtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGlucHV0czogWydhbmltYXRlZCcsICdidXR0b25zJywgJ2NvbG9yJywgJ2Nzc0NsYXNzJywgJ2R1cmF0aW9uJywgJ2VudGVyQW5pbWF0aW9uJywgJ2hlYWRlcicsICdodG1sQXR0cmlidXRlcycsICdpY29uJywgJ2lzT3BlbicsICdrZXlib2FyZENsb3NlJywgJ2xheW91dCcsICdsZWF2ZUFuaW1hdGlvbicsICdtZXNzYWdlJywgJ21vZGUnLCAncG9zaXRpb24nLCAncG9zaXRpb25BbmNob3InLCAnc3dpcGVHZXN0dXJlJywgJ3RyYW5zbHVjZW50JywgJ3RyaWdnZXInXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvblRvZ2dsZSA9IGNsYXNzIElvblRvZ2dsZSB7XG4gIHo7XG4gIGVsO1xuICBjb25zdHJ1Y3RvcihjLCByLCB6KSB7XG4gICAgdGhpcy56ID0gejtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnaW9uQ2hhbmdlJywgJ2lvbkZvY3VzJywgJ2lvbkJsdXInXSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvblRvZ2dsZV9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uVG9nZ2xlKShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvblRvZ2dsZSxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tdG9nZ2xlXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGFsaWdubWVudDogXCJhbGlnbm1lbnRcIixcbiAgICAgIGNoZWNrZWQ6IFwiY2hlY2tlZFwiLFxuICAgICAgY29sb3I6IFwiY29sb3JcIixcbiAgICAgIGRpc2FibGVkOiBcImRpc2FibGVkXCIsXG4gICAgICBlbmFibGVPbk9mZkxhYmVsczogXCJlbmFibGVPbk9mZkxhYmVsc1wiLFxuICAgICAgZXJyb3JUZXh0OiBcImVycm9yVGV4dFwiLFxuICAgICAgaGVscGVyVGV4dDogXCJoZWxwZXJUZXh0XCIsXG4gICAgICBqdXN0aWZ5OiBcImp1c3RpZnlcIixcbiAgICAgIGxhYmVsUGxhY2VtZW50OiBcImxhYmVsUGxhY2VtZW50XCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIixcbiAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgcmVxdWlyZWQ6IFwicmVxdWlyZWRcIixcbiAgICAgIHZhbHVlOiBcInZhbHVlXCJcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIG5nQ29udGVudFNlbGVjdG9yczogX2MwLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvblRvZ2dsZV9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uVG9nZ2xlID0gX19kZWNvcmF0ZShbUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnYWxpZ25tZW50JywgJ2NoZWNrZWQnLCAnY29sb3InLCAnZGlzYWJsZWQnLCAnZW5hYmxlT25PZmZMYWJlbHMnLCAnZXJyb3JUZXh0JywgJ2hlbHBlclRleHQnLCAnanVzdGlmeScsICdsYWJlbFBsYWNlbWVudCcsICdtb2RlJywgJ25hbWUnLCAncmVxdWlyZWQnLCAndmFsdWUnXVxufSldLCBJb25Ub2dnbGUpO1xuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uVG9nZ2xlLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tdG9nZ2xlJyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnYWxpZ25tZW50JywgJ2NoZWNrZWQnLCAnY29sb3InLCAnZGlzYWJsZWQnLCAnZW5hYmxlT25PZmZMYWJlbHMnLCAnZXJyb3JUZXh0JywgJ2hlbHBlclRleHQnLCAnanVzdGlmeScsICdsYWJlbFBsYWNlbWVudCcsICdtb2RlJywgJ25hbWUnLCAncmVxdWlyZWQnLCAndmFsdWUnXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkVsZW1lbnRSZWZcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xubGV0IElvblRvb2xiYXIgPSBjbGFzcyBJb25Ub29sYmFyIHtcbiAgejtcbiAgZWw7XG4gIGNvbnN0cnVjdG9yKGMsIHIsIHopIHtcbiAgICB0aGlzLnogPSB6O1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uVG9vbGJhcl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgSW9uVG9vbGJhcikoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25Ub29sYmFyLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi10b29sYmFyXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbG9yOiBcImNvbG9yXCIsXG4gICAgICBtb2RlOiBcIm1vZGVcIlxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBfYzAsXG4gICAgZGVjbHM6IDEsXG4gICAgdmFyczogMCxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uVG9vbGJhcl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uRGVmKCk7XG4gICAgICAgIGkwLsm1ybVwcm9qZWN0aW9uKDApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5jYXBzdWxhdGlvbjogMixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IDBcbiAgfSk7XG59O1xuSW9uVG9vbGJhciA9IF9fZGVjb3JhdGUoW1Byb3h5Q21wKHtcbiAgaW5wdXRzOiBbJ2NvbG9yJywgJ21vZGUnXVxufSldLCBJb25Ub29sYmFyKTtcbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvblRvb2xiYXIsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi10b29sYmFyJyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gICAgICBpbnB1dHM6IFsnY29sb3InLCAnbW9kZSddXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRWxlbWVudFJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLk5nWm9uZVxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuY2xhc3MgSW9uUm91dGVyT3V0bGV0IGV4dGVuZHMgSW9uUm91dGVyT3V0bGV0JDEge1xuICBwYXJlbnRPdXRsZXQ7XG4gIC8qKlxuICAgKiBgc3RhdGljOiB0cnVlYCBtdXN0IGJlIHNldCBzbyB0aGUgcXVlcnkgcmVzdWx0cyBhcmUgcmVzb2x2ZWRcbiAgICogYmVmb3JlIGNoYW5nZSBkZXRlY3Rpb24gcnVucy4gT3RoZXJ3aXNlLCB0aGUgdmlldyBjb250YWluZXJcbiAgICogcmVmIHdpbGwgYmUgaW9uLXJvdXRlci1vdXRsZXQgaW5zdGVhZCBvZiBuZy1jb250YWluZXIsIGFuZFxuICAgKiB0aGUgZmlyc3QgdmlldyB3aWxsIGJlIGFkZGVkIGFzIGEgc2libGluZyBvZiBpb24tcm91dGVyLW91dGxldFxuICAgKiBpbnN0ZWFkIG9mIGEgY2hpbGQuXG4gICAqL1xuICBvdXRsZXRDb250ZW50O1xuICAvKipcbiAgICogV2UgbmVlZCB0byBwYXNzIGluIHRoZSBjb3JyZWN0IGluc3RhbmNlIG9mIElvblJvdXRlck91dGxldFxuICAgKiBvdGhlcndpc2UgcGFyZW50T3V0bGV0IHdpbGwgYmUgbnVsbCBpbiBhIG5lc3RlZCBvdXRsZXQgY29udGV4dC5cbiAgICogVGhpcyByZXN1bHRzIGluIEFQSXMgc3VjaCBhcyBOYXZDb250cm9sbGVyLnBvcCBub3Qgd29ya2luZ1xuICAgKiBpbiBuZXN0ZWQgb3V0bGV0cyBiZWNhdXNlIHRoZSBwYXJlbnQgb3V0bGV0IGNhbm5vdCBiZSBmb3VuZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHRhYnMsIGNvbW1vbkxvY2F0aW9uLCBlbGVtZW50UmVmLCByb3V0ZXIsIHpvbmUsIGFjdGl2YXRlZFJvdXRlLCBwYXJlbnRPdXRsZXQpIHtcbiAgICBzdXBlcihuYW1lLCB0YWJzLCBjb21tb25Mb2NhdGlvbiwgZWxlbWVudFJlZiwgcm91dGVyLCB6b25lLCBhY3RpdmF0ZWRSb3V0ZSwgcGFyZW50T3V0bGV0KTtcbiAgICB0aGlzLnBhcmVudE91dGxldCA9IHBhcmVudE91dGxldDtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uUm91dGVyT3V0bGV0X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25Sb3V0ZXJPdXRsZXQpKGkwLsm1ybVpbmplY3RBdHRyaWJ1dGUoJ25hbWUnKSwgaTAuybXJtWluamVjdEF0dHJpYnV0ZSgndGFicycpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkxLkxvY2F0aW9uKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMi5Sb3V0ZXIpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLk5nWm9uZSksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTIuQWN0aXZhdGVkUm91dGUpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KElvblJvdXRlck91dGxldCwgMTIpKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IElvblJvdXRlck91dGxldCxcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tcm91dGVyLW91dGxldFwiXV0sXG4gICAgdmlld1F1ZXJ5OiBmdW5jdGlvbiBJb25Sb3V0ZXJPdXRsZXRfUXVlcnkocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1dmlld1F1ZXJ5KF9jMSwgNywgVmlld0NvbnRhaW5lclJlZik7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5vdXRsZXRDb250ZW50ID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1SW5oZXJpdERlZmluaXRpb25GZWF0dXJlXSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMyxcbiAgICB2YXJzOiAwLFxuICAgIGNvbnN0czogW1tcIm91dGxldENvbnRlbnRcIiwgXCJcIl1dLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25Sb3V0ZXJPdXRsZXRfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudENvbnRhaW5lclN0YXJ0KDAsIG51bGwsIDApO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigyKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRDb250YWluZXJFbmQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDJcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25Sb3V0ZXJPdXRsZXQsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1yb3V0ZXItb3V0bGV0JyxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRhaW5lciAjb3V0bGV0Q29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy1jb250YWluZXI+J1xuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgICB0eXBlOiBBdHRyaWJ1dGUsXG4gICAgICAgIGFyZ3M6IFsnbmFtZSddXG4gICAgICB9XVxuICAgIH0sIHtcbiAgICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICAgIGRlY29yYXRvcnM6IFt7XG4gICAgICAgIHR5cGU6IE9wdGlvbmFsXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGU6IEF0dHJpYnV0ZSxcbiAgICAgICAgYXJnczogWyd0YWJzJ11cbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgdHlwZTogaTEuTG9jYXRpb25cbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTIuUm91dGVyXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfSwge1xuICAgICAgdHlwZTogaTIuQWN0aXZhdGVkUm91dGVcbiAgICB9LCB7XG4gICAgICB0eXBlOiBJb25Sb3V0ZXJPdXRsZXQsXG4gICAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgICB0eXBlOiBTa2lwU2VsZlxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiBPcHRpb25hbFxuICAgICAgfV1cbiAgICB9XTtcbiAgfSwge1xuICAgIG91dGxldENvbnRlbnQ6IFt7XG4gICAgICB0eXBlOiBWaWV3Q2hpbGQsXG4gICAgICBhcmdzOiBbJ291dGxldENvbnRlbnQnLCB7XG4gICAgICAgIHJlYWQ6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHN0YXRpYzogdHJ1ZVxuICAgICAgfV1cbiAgICB9XVxuICB9KTtcbn0pKCk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LWNsYXNzLXN1ZmZpeFxuY2xhc3MgSW9uVGFicyBleHRlbmRzIElvblRhYnMkMSB7XG4gIG91dGxldDtcbiAgdGFiQmFyO1xuICB0YWJCYXJzO1xuICB0YWJzO1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gLyogQF9fUFVSRV9fICovKCgpID0+IHtcbiAgICBsZXQgybVJb25UYWJzX0Jhc2VGYWN0b3J5O1xuICAgIHJldHVybiBmdW5jdGlvbiBJb25UYWJzX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICAgIHJldHVybiAoybVJb25UYWJzX0Jhc2VGYWN0b3J5IHx8ICjJtUlvblRhYnNfQmFzZUZhY3RvcnkgPSBpMC7Jtcm1Z2V0SW5oZXJpdGVkRmFjdG9yeShJb25UYWJzKSkpKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvblRhYnMpO1xuICAgIH07XG4gIH0pKCk7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25UYWJzLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi10YWJzXCJdXSxcbiAgICBjb250ZW50UXVlcmllczogZnVuY3Rpb24gSW9uVGFic19Db250ZW50UXVlcmllcyhyZiwgY3R4LCBkaXJJbmRleCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1Y29udGVudFF1ZXJ5KGRpckluZGV4LCBJb25UYWJCYXIsIDUpO1xuICAgICAgICBpMC7Jtcm1Y29udGVudFF1ZXJ5KGRpckluZGV4LCBJb25UYWJCYXIsIDQpO1xuICAgICAgICBpMC7Jtcm1Y29udGVudFF1ZXJ5KGRpckluZGV4LCBJb25UYWIsIDQpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBsZXQgX3Q7XG4gICAgICAgIGkwLsm1ybVxdWVyeVJlZnJlc2goX3QgPSBpMC7Jtcm1bG9hZFF1ZXJ5KCkpICYmIChjdHgudGFiQmFyID0gX3QuZmlyc3QpO1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LnRhYkJhcnMgPSBfdCk7XG4gICAgICAgIGkwLsm1ybVxdWVyeVJlZnJlc2goX3QgPSBpMC7Jtcm1bG9hZFF1ZXJ5KCkpICYmIChjdHgudGFicyA9IF90KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHZpZXdRdWVyeTogZnVuY3Rpb24gSW9uVGFic19RdWVyeShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybV2aWV3UXVlcnkoX2MyLCA1LCBJb25Sb3V0ZXJPdXRsZXQpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBsZXQgX3Q7XG4gICAgICAgIGkwLsm1ybVxdWVyeVJlZnJlc2goX3QgPSBpMC7Jtcm1bG9hZFF1ZXJ5KCkpICYmIChjdHgub3V0bGV0ID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1SW5oZXJpdERlZmluaXRpb25GZWF0dXJlXSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jNCxcbiAgICBkZWNsczogNixcbiAgICB2YXJzOiAyLFxuICAgIGNvbnN0czogW1tcInRhYnNJbm5lclwiLCBcIlwiXSwgW1wib3V0bGV0XCIsIFwiXCJdLCBbMSwgXCJ0YWJzLWlubmVyXCJdLCBbXCJ0YWJzXCIsIFwidHJ1ZVwiLCAzLCBcInN0YWNrV2lsbENoYW5nZVwiLCBcInN0YWNrRGlkQ2hhbmdlXCIsIDQsIFwibmdJZlwiXSwgWzQsIFwibmdJZlwiXSwgW1widGFic1wiLCBcInRydWVcIiwgMywgXCJzdGFja1dpbGxDaGFuZ2VcIiwgXCJzdGFja0RpZENoYW5nZVwiXV0sXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElvblRhYnNfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZihfYzMpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgxLCBcImRpdlwiLCAyLCAwKTtcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDMsIElvblRhYnNfaW9uX3JvdXRlcl9vdXRsZXRfM19UZW1wbGF0ZSwgMiwgMCwgXCJpb24tcm91dGVyLW91dGxldFwiLCAzKSg0LCBJb25UYWJzX25nX2NvbnRlbnRfNF9UZW1wbGF0ZSwgMSwgMCwgXCJuZy1jb250ZW50XCIsIDQpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbig1LCAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMyk7XG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nSWZcIiwgY3R4LnRhYnMubGVuZ3RoID09PSAwKTtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoKTtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwibmdJZlwiLCBjdHgudGFicy5sZW5ndGggPiAwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlcGVuZGVuY2llczogW2kxLk5nSWYsIElvblJvdXRlck91dGxldF0sXG4gICAgc3R5bGVzOiBbXCJbX25naG9zdC0lQ09NUCVde2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldDowO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGV9LnRhYnMtaW5uZXJbX25nY29udGVudC0lQ09NUCVde3Bvc2l0aW9uOnJlbGF0aXZlO2ZsZXg6MTtjb250YWluOmxheW91dCBzaXplIHN0eWxlfVwiXVxuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvblRhYnMsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi10YWJzJyxcbiAgICAgIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9dG9wXVwiPjwvbmctY29udGVudD5cbiAgICA8ZGl2IGNsYXNzPVwidGFicy1pbm5lclwiICN0YWJzSW5uZXI+XG4gICAgICA8aW9uLXJvdXRlci1vdXRsZXRcbiAgICAgICAgKm5nSWY9XCJ0YWJzLmxlbmd0aCA9PT0gMFwiXG4gICAgICAgICNvdXRsZXRcbiAgICAgICAgdGFicz1cInRydWVcIlxuICAgICAgICAoc3RhY2tXaWxsQ2hhbmdlKT1cIm9uU3RhY2tXaWxsQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAoc3RhY2tEaWRDaGFuZ2UpPVwib25TdGFja0RpZENoYW5nZSgkZXZlbnQpXCJcbiAgICAgID48L2lvbi1yb3V0ZXItb3V0bGV0PlxuICAgICAgPG5nLWNvbnRlbnQgKm5nSWY9XCJ0YWJzLmxlbmd0aCA+IDBcIiBzZWxlY3Q9XCJpb24tdGFiXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgICAgIHN0eWxlczogW1wiOmhvc3R7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjA7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Y29udGFpbjpsYXlvdXQgc2l6ZSBzdHlsZX0udGFicy1pbm5lcntwb3NpdGlvbjpyZWxhdGl2ZTtmbGV4OjE7Y29udGFpbjpsYXlvdXQgc2l6ZSBzdHlsZX1cXG5cIl1cbiAgICB9XVxuICB9XSwgbnVsbCwge1xuICAgIG91dGxldDogW3tcbiAgICAgIHR5cGU6IFZpZXdDaGlsZCxcbiAgICAgIGFyZ3M6IFsnb3V0bGV0Jywge1xuICAgICAgICByZWFkOiBJb25Sb3V0ZXJPdXRsZXQsXG4gICAgICAgIHN0YXRpYzogZmFsc2VcbiAgICAgIH1dXG4gICAgfV0sXG4gICAgdGFiQmFyOiBbe1xuICAgICAgdHlwZTogQ29udGVudENoaWxkLFxuICAgICAgYXJnczogW0lvblRhYkJhciwge1xuICAgICAgICBzdGF0aWM6IGZhbHNlXG4gICAgICB9XVxuICAgIH1dLFxuICAgIHRhYkJhcnM6IFt7XG4gICAgICB0eXBlOiBDb250ZW50Q2hpbGRyZW4sXG4gICAgICBhcmdzOiBbSW9uVGFiQmFyXVxuICAgIH1dLFxuICAgIHRhYnM6IFt7XG4gICAgICB0eXBlOiBDb250ZW50Q2hpbGRyZW4sXG4gICAgICBhcmdzOiBbSW9uVGFiXVxuICAgIH1dXG4gIH0pO1xufSkoKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5jbGFzcyBJb25CYWNrQnV0dG9uIGV4dGVuZHMgSW9uQmFja0J1dHRvbiQxIHtcbiAgY29uc3RydWN0b3Iocm91dGVyT3V0bGV0LCBuYXZDdHJsLCBjb25maWcsIHIsIHosIGMpIHtcbiAgICBzdXBlcihyb3V0ZXJPdXRsZXQsIG5hdkN0cmwsIGNvbmZpZywgciwgeiwgYyk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbkJhY2tCdXR0b25fRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbkJhY2tCdXR0b24pKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoSW9uUm91dGVyT3V0bGV0LCA4KSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMiQxLk5hdkNvbnRyb2xsZXIpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkyJDEuQ29uZmlnKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25CYWNrQnV0dG9uLFxuICAgIHNlbGVjdG9yczogW1tcImlvbi1iYWNrLWJ1dHRvblwiXV0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1SW5oZXJpdERlZmluaXRpb25GZWF0dXJlXSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25CYWNrQnV0dG9uX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb25EZWYoKTtcbiAgICAgICAgaTAuybXJtXByb2plY3Rpb24oMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbkJhY2tCdXR0b24sIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ2lvbi1iYWNrLWJ1dHRvbicsXG4gICAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogSW9uUm91dGVyT3V0bGV0LFxuICAgICAgZGVjb3JhdG9yczogW3tcbiAgICAgICAgdHlwZTogT3B0aW9uYWxcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgdHlwZTogaTIkMS5OYXZDb250cm9sbGVyXG4gICAgfSwge1xuICAgICAgdHlwZTogaTIkMS5Db25maWdcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICB9XTtcbiAgfSwgbnVsbCk7XG59KSgpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcbmNsYXNzIElvbk5hdiBleHRlbmRzIElvbk5hdiQxIHtcbiAgY29uc3RydWN0b3IocmVmLCBlbnZpcm9ubWVudEluamVjdG9yLCBpbmplY3RvciwgYW5ndWxhckRlbGVnYXRlLCB6LCBjKSB7XG4gICAgc3VwZXIocmVmLCBlbnZpcm9ubWVudEluamVjdG9yLCBpbmplY3RvciwgYW5ndWxhckRlbGVnYXRlLCB6LCBjKTtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gSW9uTmF2X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25OYXYpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRWxlbWVudFJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuRW52aXJvbm1lbnRJbmplY3RvciksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuSW5qZWN0b3IpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkyJDEuQW5ndWxhckRlbGVnYXRlKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5OZ1pvbmUpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBJb25OYXYsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLW5hdlwiXV0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1SW5oZXJpdERlZmluaXRpb25GZWF0dXJlXSxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IF9jMCxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAwLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25OYXZfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbkRlZigpO1xuICAgICAgICBpMC7Jtcm1cHJvamVjdGlvbigwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uTmF2LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tbmF2JyxcbiAgICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuRW52aXJvbm1lbnRJbmplY3RvclxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkluamVjdG9yXG4gICAgfSwge1xuICAgICAgdHlwZTogaTIkMS5Bbmd1bGFyRGVsZWdhdGVcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7XG5cbi8qKlxuICogQWRkcyBzdXBwb3J0IGZvciBJb25pYyByb3V0aW5nIGRpcmVjdGlvbnMgYW5kIGFuaW1hdGlvbnMgdG8gdGhlIGJhc2UgQW5ndWxhciByb3V0ZXIgbGluayBkaXJlY3RpdmUuXG4gKlxuICogV2hlbiB0aGUgcm91dGVyIGxpbmsgaXMgY2xpY2tlZCwgdGhlIGRpcmVjdGl2ZSB3aWxsIGFzc2lnbiB0aGUgZGlyZWN0aW9uIGFuZFxuICogYW5pbWF0aW9uIHNvIHRoYXQgdGhlIHJvdXRpbmcgaW50ZWdyYXRpb24gd2lsbCB0cmFuc2l0aW9uIGNvcnJlY3RseS5cbiAqL1xuY2xhc3MgUm91dGVyTGlua0RlbGVnYXRlRGlyZWN0aXZlIGV4dGVuZHMgUm91dGVyTGlua0RlbGVnYXRlRGlyZWN0aXZlJDEge1xuICAvKiogQG5vY29sbGFwc2UgKi9zdGF0aWMgybVmYWMgPSAvKiBAX19QVVJFX18gKi8oKCkgPT4ge1xuICAgIGxldCDJtVJvdXRlckxpbmtEZWxlZ2F0ZURpcmVjdGl2ZV9CYXNlRmFjdG9yeTtcbiAgICByZXR1cm4gZnVuY3Rpb24gUm91dGVyTGlua0RlbGVnYXRlRGlyZWN0aXZlX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICAgIHJldHVybiAoybVSb3V0ZXJMaW5rRGVsZWdhdGVEaXJlY3RpdmVfQmFzZUZhY3RvcnkgfHwgKMm1Um91dGVyTGlua0RlbGVnYXRlRGlyZWN0aXZlX0Jhc2VGYWN0b3J5ID0gaTAuybXJtWdldEluaGVyaXRlZEZhY3RvcnkoUm91dGVyTGlua0RlbGVnYXRlRGlyZWN0aXZlKSkpKF9fbmdGYWN0b3J5VHlwZV9fIHx8IFJvdXRlckxpbmtEZWxlZ2F0ZURpcmVjdGl2ZSk7XG4gICAgfTtcbiAgfSkoKTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWRpciA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVEaXJlY3RpdmUoe1xuICAgIHR5cGU6IFJvdXRlckxpbmtEZWxlZ2F0ZURpcmVjdGl2ZSxcbiAgICBzZWxlY3RvcnM6IFtbXCJcIiwgXCJyb3V0ZXJMaW5rXCIsIFwiXCIsIDUsIFwiYVwiLCA1LCBcImFyZWFcIl1dLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIGZlYXR1cmVzOiBbaTAuybXJtUluaGVyaXREZWZpbml0aW9uRmVhdHVyZV1cbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShSb3V0ZXJMaW5rRGVsZWdhdGVEaXJlY3RpdmUsIFt7XG4gICAgdHlwZTogRGlyZWN0aXZlLFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJzpub3QoYSk6bm90KGFyZWEpW3JvdXRlckxpbmtdJ1xuICAgIH1dXG4gIH1dLCBudWxsLCBudWxsKTtcbn0pKCk7XG5jbGFzcyBSb3V0ZXJMaW5rV2l0aEhyZWZEZWxlZ2F0ZURpcmVjdGl2ZSBleHRlbmRzIFJvdXRlckxpbmtXaXRoSHJlZkRlbGVnYXRlRGlyZWN0aXZlJDEge1xuICAvKiogQG5vY29sbGFwc2UgKi9zdGF0aWMgybVmYWMgPSAvKiBAX19QVVJFX18gKi8oKCkgPT4ge1xuICAgIGxldCDJtVJvdXRlckxpbmtXaXRoSHJlZkRlbGVnYXRlRGlyZWN0aXZlX0Jhc2VGYWN0b3J5O1xuICAgIHJldHVybiBmdW5jdGlvbiBSb3V0ZXJMaW5rV2l0aEhyZWZEZWxlZ2F0ZURpcmVjdGl2ZV9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgICByZXR1cm4gKMm1Um91dGVyTGlua1dpdGhIcmVmRGVsZWdhdGVEaXJlY3RpdmVfQmFzZUZhY3RvcnkgfHwgKMm1Um91dGVyTGlua1dpdGhIcmVmRGVsZWdhdGVEaXJlY3RpdmVfQmFzZUZhY3RvcnkgPSBpMC7Jtcm1Z2V0SW5oZXJpdGVkRmFjdG9yeShSb3V0ZXJMaW5rV2l0aEhyZWZEZWxlZ2F0ZURpcmVjdGl2ZSkpKShfX25nRmFjdG9yeVR5cGVfXyB8fCBSb3V0ZXJMaW5rV2l0aEhyZWZEZWxlZ2F0ZURpcmVjdGl2ZSk7XG4gICAgfTtcbiAgfSkoKTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWRpciA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVEaXJlY3RpdmUoe1xuICAgIHR5cGU6IFJvdXRlckxpbmtXaXRoSHJlZkRlbGVnYXRlRGlyZWN0aXZlLFxuICAgIHNlbGVjdG9yczogW1tcImFcIiwgXCJyb3V0ZXJMaW5rXCIsIFwiXCJdLCBbXCJhcmVhXCIsIFwicm91dGVyTGlua1wiLCBcIlwiXV0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1SW5oZXJpdERlZmluaXRpb25GZWF0dXJlXVxuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKFJvdXRlckxpbmtXaXRoSHJlZkRlbGVnYXRlRGlyZWN0aXZlLCBbe1xuICAgIHR5cGU6IERpcmVjdGl2ZSxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdhW3JvdXRlckxpbmtdLGFyZWFbcm91dGVyTGlua10nXG4gICAgfV1cbiAgfV0sIG51bGwsIG51bGwpO1xufSkoKTtcbmNsYXNzIElvbk1vZGFsIGV4dGVuZHMgSW9uTW9kYWwkMSB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL3N0YXRpYyDJtWZhYyA9IC8qIEBfX1BVUkVfXyAqLygoKSA9PiB7XG4gICAgbGV0IMm1SW9uTW9kYWxfQmFzZUZhY3Rvcnk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIElvbk1vZGFsX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICAgIHJldHVybiAoybVJb25Nb2RhbF9CYXNlRmFjdG9yeSB8fCAoybVJb25Nb2RhbF9CYXNlRmFjdG9yeSA9IGkwLsm1ybVnZXRJbmhlcml0ZWRGYWN0b3J5KElvbk1vZGFsKSkpKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbk1vZGFsKTtcbiAgICB9O1xuICB9KSgpO1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uTW9kYWwsXG4gICAgc2VsZWN0b3JzOiBbW1wiaW9uLW1vZGFsXCJdXSxcbiAgICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgICBmZWF0dXJlczogW2kwLsm1ybVJbmhlcml0RGVmaW5pdGlvbkZlYXR1cmVdLFxuICAgIGRlY2xzOiAxLFxuICAgIHZhcnM6IDEsXG4gICAgY29uc3RzOiBbW1wiY2xhc3NcIiwgXCJpb24tZGVsZWdhdGUtaG9zdCBpb24tcGFnZVwiLCA0LCBcIm5nSWZcIl0sIFsxLCBcImlvbi1kZWxlZ2F0ZS1ob3N0XCIsIFwiaW9uLXBhZ2VcIl0sIFszLCBcIm5nVGVtcGxhdGVPdXRsZXRcIl1dLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBJb25Nb2RhbF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgwLCBJb25Nb2RhbF9kaXZfMF9UZW1wbGF0ZSwgMiwgMSwgXCJkaXZcIiwgMCk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nSWZcIiwgY3R4LmlzQ21wT3BlbiB8fCBjdHgua2VlcENvbnRlbnRzTW91bnRlZCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXBlbmRlbmNpZXM6IFtpMS5OZ0lmLCBpMS5OZ1RlbXBsYXRlT3V0bGV0XSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElvbk1vZGFsLCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24tbW9kYWwnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJpb24tZGVsZWdhdGUtaG9zdCBpb24tcGFnZVwiICpuZ0lmPVwiaXNDbXBPcGVuIHx8IGtlZXBDb250ZW50c01vdW50ZWRcIj5cbiAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gIDwvZGl2PmBcbiAgICB9XVxuICB9XSwgbnVsbCwgbnVsbCk7XG59KSgpO1xuY2xhc3MgSW9uUG9wb3ZlciBleHRlbmRzIElvblBvcG92ZXIkMSB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL3N0YXRpYyDJtWZhYyA9IC8qIEBfX1BVUkVfXyAqLygoKSA9PiB7XG4gICAgbGV0IMm1SW9uUG9wb3Zlcl9CYXNlRmFjdG9yeTtcbiAgICByZXR1cm4gZnVuY3Rpb24gSW9uUG9wb3Zlcl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgICByZXR1cm4gKMm1SW9uUG9wb3Zlcl9CYXNlRmFjdG9yeSB8fCAoybVJb25Qb3BvdmVyX0Jhc2VGYWN0b3J5ID0gaTAuybXJtWdldEluaGVyaXRlZEZhY3RvcnkoSW9uUG9wb3ZlcikpKShfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25Qb3BvdmVyKTtcbiAgICB9O1xuICB9KSgpO1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW9uUG9wb3ZlcixcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24tcG9wb3ZlclwiXV0sXG4gICAgc3RhbmRhbG9uZTogZmFsc2UsXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1SW5oZXJpdERlZmluaXRpb25GZWF0dXJlXSxcbiAgICBkZWNsczogMSxcbiAgICB2YXJzOiAxLFxuICAgIGNvbnN0czogW1szLCBcIm5nVGVtcGxhdGVPdXRsZXRcIiwgNCwgXCJuZ0lmXCJdLCBbMywgXCJuZ1RlbXBsYXRlT3V0bGV0XCJdXSxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gSW9uUG9wb3Zlcl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgwLCBJb25Qb3BvdmVyX25nX2NvbnRhaW5lcl8wX1RlbXBsYXRlLCAxLCAxLCBcIm5nLWNvbnRhaW5lclwiLCAwKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgaTAuybXJtXByb3BlcnR5KFwibmdJZlwiLCBjdHguaXNDbXBPcGVuIHx8IGN0eC5rZWVwQ29udGVudHNNb3VudGVkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlcGVuZGVuY2llczogW2kxLk5nSWYsIGkxLk5nVGVtcGxhdGVPdXRsZXRdLFxuICAgIGVuY2Fwc3VsYXRpb246IDIsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uUG9wb3ZlciwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnaW9uLXBvcG92ZXInLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVcIiAqbmdJZj1cImlzQ21wT3BlbiB8fCBrZWVwQ29udGVudHNNb3VudGVkXCI+PC9uZy1jb250YWluZXI+YFxuICAgIH1dXG4gIH1dLCBudWxsLCBudWxsKTtcbn0pKCk7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQcm92aWRlciB3aGljaCBhZGRzIGBNYXhWYWxpZGF0b3JgIHRvIHRoZSBgTkdfVkFMSURBVE9SU2AgbXVsdGktcHJvdmlkZXIgbGlzdC5cbiAqL1xuY29uc3QgSU9OX01BWF9WQUxJREFUT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElvbk1heFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5jbGFzcyBJb25NYXhWYWxpZGF0b3IgZXh0ZW5kcyBNYXhWYWxpZGF0b3Ige1xuICAvKiogQG5vY29sbGFwc2UgKi9zdGF0aWMgybVmYWMgPSAvKiBAX19QVVJFX18gKi8oKCkgPT4ge1xuICAgIGxldCDJtUlvbk1heFZhbGlkYXRvcl9CYXNlRmFjdG9yeTtcbiAgICByZXR1cm4gZnVuY3Rpb24gSW9uTWF4VmFsaWRhdG9yX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICAgIHJldHVybiAoybVJb25NYXhWYWxpZGF0b3JfQmFzZUZhY3RvcnkgfHwgKMm1SW9uTWF4VmFsaWRhdG9yX0Jhc2VGYWN0b3J5ID0gaTAuybXJtWdldEluaGVyaXRlZEZhY3RvcnkoSW9uTWF4VmFsaWRhdG9yKSkpKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbk1heFZhbGlkYXRvcik7XG4gICAgfTtcbiAgfSkoKTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWRpciA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVEaXJlY3RpdmUoe1xuICAgIHR5cGU6IElvbk1heFZhbGlkYXRvcixcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24taW5wdXRcIiwgXCJ0eXBlXCIsIFwibnVtYmVyXCIsIFwibWF4XCIsIFwiXCIsIFwiZm9ybUNvbnRyb2xOYW1lXCIsIFwiXCJdLCBbXCJpb24taW5wdXRcIiwgXCJ0eXBlXCIsIFwibnVtYmVyXCIsIFwibWF4XCIsIFwiXCIsIFwiZm9ybUNvbnRyb2xcIiwgXCJcIl0sIFtcImlvbi1pbnB1dFwiLCBcInR5cGVcIiwgXCJudW1iZXJcIiwgXCJtYXhcIiwgXCJcIiwgXCJuZ01vZGVsXCIsIFwiXCJdXSxcbiAgICBob3N0VmFyczogMSxcbiAgICBob3N0QmluZGluZ3M6IGZ1bmN0aW9uIElvbk1heFZhbGlkYXRvcl9Ib3N0QmluZGluZ3MocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBpMC7Jtcm1YXR0cmlidXRlKFwibWF4XCIsIGN0eC5fZW5hYmxlZCA/IGN0eC5tYXggOiBudWxsKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIGZlYXR1cmVzOiBbaTAuybXJtVByb3ZpZGVyc0ZlYXR1cmUoW0lPTl9NQVhfVkFMSURBVE9SXSksIGkwLsm1ybVJbmhlcml0RGVmaW5pdGlvbkZlYXR1cmVdXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uTWF4VmFsaWRhdG9yLCBbe1xuICAgIHR5cGU6IERpcmVjdGl2ZSxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24taW5wdXRbdHlwZT1udW1iZXJdW21heF1bZm9ybUNvbnRyb2xOYW1lXSxpb24taW5wdXRbdHlwZT1udW1iZXJdW21heF1bZm9ybUNvbnRyb2xdLGlvbi1pbnB1dFt0eXBlPW51bWJlcl1bbWF4XVtuZ01vZGVsXScsXG4gICAgICBwcm92aWRlcnM6IFtJT05fTUFYX1ZBTElEQVRPUl0sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGhvc3Q6IHtcbiAgICAgICAgJ1thdHRyLm1heF0nOiAnX2VuYWJsZWQgPyBtYXggOiBudWxsJ1xuICAgICAgfVxuICAgIH1dXG4gIH1dLCBudWxsLCBudWxsKTtcbn0pKCk7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQcm92aWRlciB3aGljaCBhZGRzIGBNaW5WYWxpZGF0b3JgIHRvIHRoZSBgTkdfVkFMSURBVE9SU2AgbXVsdGktcHJvdmlkZXIgbGlzdC5cbiAqL1xuY29uc3QgSU9OX01JTl9WQUxJREFUT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElvbk1pblZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5jbGFzcyBJb25NaW5WYWxpZGF0b3IgZXh0ZW5kcyBNaW5WYWxpZGF0b3Ige1xuICAvKiogQG5vY29sbGFwc2UgKi9zdGF0aWMgybVmYWMgPSAvKiBAX19QVVJFX18gKi8oKCkgPT4ge1xuICAgIGxldCDJtUlvbk1pblZhbGlkYXRvcl9CYXNlRmFjdG9yeTtcbiAgICByZXR1cm4gZnVuY3Rpb24gSW9uTWluVmFsaWRhdG9yX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICAgIHJldHVybiAoybVJb25NaW5WYWxpZGF0b3JfQmFzZUZhY3RvcnkgfHwgKMm1SW9uTWluVmFsaWRhdG9yX0Jhc2VGYWN0b3J5ID0gaTAuybXJtWdldEluaGVyaXRlZEZhY3RvcnkoSW9uTWluVmFsaWRhdG9yKSkpKF9fbmdGYWN0b3J5VHlwZV9fIHx8IElvbk1pblZhbGlkYXRvcik7XG4gICAgfTtcbiAgfSkoKTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWRpciA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVEaXJlY3RpdmUoe1xuICAgIHR5cGU6IElvbk1pblZhbGlkYXRvcixcbiAgICBzZWxlY3RvcnM6IFtbXCJpb24taW5wdXRcIiwgXCJ0eXBlXCIsIFwibnVtYmVyXCIsIFwibWluXCIsIFwiXCIsIFwiZm9ybUNvbnRyb2xOYW1lXCIsIFwiXCJdLCBbXCJpb24taW5wdXRcIiwgXCJ0eXBlXCIsIFwibnVtYmVyXCIsIFwibWluXCIsIFwiXCIsIFwiZm9ybUNvbnRyb2xcIiwgXCJcIl0sIFtcImlvbi1pbnB1dFwiLCBcInR5cGVcIiwgXCJudW1iZXJcIiwgXCJtaW5cIiwgXCJcIiwgXCJuZ01vZGVsXCIsIFwiXCJdXSxcbiAgICBob3N0VmFyczogMSxcbiAgICBob3N0QmluZGluZ3M6IGZ1bmN0aW9uIElvbk1pblZhbGlkYXRvcl9Ib3N0QmluZGluZ3MocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBpMC7Jtcm1YXR0cmlidXRlKFwibWluXCIsIGN0eC5fZW5hYmxlZCA/IGN0eC5taW4gOiBudWxsKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlLFxuICAgIGZlYXR1cmVzOiBbaTAuybXJtVByb3ZpZGVyc0ZlYXR1cmUoW0lPTl9NSU5fVkFMSURBVE9SXSksIGkwLsm1ybVJbmhlcml0RGVmaW5pdGlvbkZlYXR1cmVdXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW9uTWluVmFsaWRhdG9yLCBbe1xuICAgIHR5cGU6IERpcmVjdGl2ZSxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpb24taW5wdXRbdHlwZT1udW1iZXJdW21pbl1bZm9ybUNvbnRyb2xOYW1lXSxpb24taW5wdXRbdHlwZT1udW1iZXJdW21pbl1bZm9ybUNvbnRyb2xdLGlvbi1pbnB1dFt0eXBlPW51bWJlcl1bbWluXVtuZ01vZGVsXScsXG4gICAgICBwcm92aWRlcnM6IFtJT05fTUlOX1ZBTElEQVRPUl0sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgICAgIGhvc3Q6IHtcbiAgICAgICAgJ1thdHRyLm1pbl0nOiAnX2VuYWJsZWQgPyBtaW4gOiBudWxsJ1xuICAgICAgfVxuICAgIH1dXG4gIH1dLCBudWxsLCBudWxsKTtcbn0pKCk7XG5jbGFzcyBBbGVydENvbnRyb2xsZXIgZXh0ZW5kcyBPdmVybGF5QmFzZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihhbGVydENvbnRyb2xsZXIpO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBBbGVydENvbnRyb2xsZXJfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IEFsZXJ0Q29udHJvbGxlcikoKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtXByb3YgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lSW5qZWN0YWJsZSh7XG4gICAgdG9rZW46IEFsZXJ0Q29udHJvbGxlcixcbiAgICBmYWN0b3J5OiBBbGVydENvbnRyb2xsZXIuybVmYWMsXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoQWxlcnRDb250cm9sbGVyLCBbe1xuICAgIHR5cGU6IEluamVjdGFibGUsXG4gICAgYXJnczogW3tcbiAgICAgIHByb3ZpZGVkSW46ICdyb290J1xuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9LCBudWxsKTtcbn0pKCk7XG5jbGFzcyBBbmltYXRpb25Db250cm9sbGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBhbmltYXRpb25cbiAgICovXG4gIGNyZWF0ZShhbmltYXRpb25JZCkge1xuICAgIHJldHVybiBjcmVhdGVBbmltYXRpb24oYW5pbWF0aW9uSWQpO1xuICB9XG4gIC8qKlxuICAgKiBFWFBFUklNRU5UQUxcbiAgICpcbiAgICogR2l2ZW4gYSBwcm9ncmVzc2lvbiBhbmQgYSBjdWJpYyBiZXppZXIgZnVuY3Rpb24sXG4gICAqIHRoaXMgdXRpbGl0eSByZXR1cm5zIHRoZSB0aW1lIHZhbHVlKHMpIGF0IHdoaWNoIHRoZVxuICAgKiBjdWJpYyBiZXppZXIgcmVhY2hlcyB0aGUgZ2l2ZW4gdGltZSBwcm9ncmVzc2lvbi5cbiAgICpcbiAgICogSWYgdGhlIGN1YmljIGJlemllciBuZXZlciByZWFjaGVzIHRoZSBwcm9ncmVzc2lvblxuICAgKiB0aGUgcmVzdWx0IHdpbGwgYmUgYW4gZW1wdHkgYXJyYXkuXG4gICAqXG4gICAqIFRoaXMgaXMgbW9zdCB1c2VmdWwgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIGVhc2luZyBjdXJ2ZXNcbiAgICogd2hlbiBkb2luZyBhIGdlc3R1cmUgYW5pbWF0aW9uIChpLmUuIGdvaW5nIGZyb20gbGluZWFyIGVhc2luZ1xuICAgKiBkdXJpbmcgYSBkcmFnLCB0byBhbm90aGVyIGVhc2luZyB3aGVuIGBwcm9ncmVzc0VuZGAgaXMgY2FsbGVkKVxuICAgKi9cbiAgZWFzaW5nVGltZShwMCwgcDEsIHAyLCBwMywgcHJvZ3Jlc3Npb24pIHtcbiAgICByZXR1cm4gZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24ocDAsIHAxLCBwMiwgcDMsIHByb2dyZXNzaW9uKTtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gQW5pbWF0aW9uQ29udHJvbGxlcl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgQW5pbWF0aW9uQ29udHJvbGxlcikoKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtXByb3YgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lSW5qZWN0YWJsZSh7XG4gICAgdG9rZW46IEFuaW1hdGlvbkNvbnRyb2xsZXIsXG4gICAgZmFjdG9yeTogQW5pbWF0aW9uQ29udHJvbGxlci7JtWZhYyxcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShBbmltYXRpb25Db250cm9sbGVyLCBbe1xuICAgIHR5cGU6IEluamVjdGFibGUsXG4gICAgYXJnczogW3tcbiAgICAgIHByb3ZpZGVkSW46ICdyb290J1xuICAgIH1dXG4gIH1dLCBudWxsLCBudWxsKTtcbn0pKCk7XG5jbGFzcyBBY3Rpb25TaGVldENvbnRyb2xsZXIgZXh0ZW5kcyBPdmVybGF5QmFzZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihhY3Rpb25TaGVldENvbnRyb2xsZXIpO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBBY3Rpb25TaGVldENvbnRyb2xsZXJfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IEFjdGlvblNoZWV0Q29udHJvbGxlcikoKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtXByb3YgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lSW5qZWN0YWJsZSh7XG4gICAgdG9rZW46IEFjdGlvblNoZWV0Q29udHJvbGxlcixcbiAgICBmYWN0b3J5OiBBY3Rpb25TaGVldENvbnRyb2xsZXIuybVmYWMsXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoQWN0aW9uU2hlZXRDb250cm9sbGVyLCBbe1xuICAgIHR5cGU6IEluamVjdGFibGUsXG4gICAgYXJnczogW3tcbiAgICAgIHByb3ZpZGVkSW46ICdyb290J1xuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9LCBudWxsKTtcbn0pKCk7XG5jbGFzcyBHZXN0dXJlQ29udHJvbGxlciB7XG4gIHpvbmU7XG4gIGNvbnN0cnVjdG9yKHpvbmUpIHtcbiAgICB0aGlzLnpvbmUgPSB6b25lO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZ2VzdHVyZVxuICAgKi9cbiAgY3JlYXRlKG9wdHMsIHJ1bkluc2lkZUFuZ3VsYXJab25lID0gZmFsc2UpIHtcbiAgICBpZiAocnVuSW5zaWRlQW5ndWxhclpvbmUpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9wdHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjb25zdCBmbiA9IG9wdHNba2V5XTtcbiAgICAgICAgICBvcHRzW2tleV0gPSAoLi4ucHJvcHMpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gZm4oLi4ucHJvcHMpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVHZXN0dXJlKG9wdHMpO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBHZXN0dXJlQ29udHJvbGxlcl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgR2VzdHVyZUNvbnRyb2xsZXIpKGkwLsm1ybVpbmplY3QoaTAuTmdab25lKSk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVwcm92ID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUluamVjdGFibGUoe1xuICAgIHRva2VuOiBHZXN0dXJlQ29udHJvbGxlcixcbiAgICBmYWN0b3J5OiBHZXN0dXJlQ29udHJvbGxlci7JtWZhYyxcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShHZXN0dXJlQ29udHJvbGxlciwgW3tcbiAgICB0eXBlOiBJbmplY3RhYmxlLFxuICAgIGFyZ3M6IFt7XG4gICAgICBwcm92aWRlZEluOiAncm9vdCdcbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogaTAuTmdab25lXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTtcbmNsYXNzIExvYWRpbmdDb250cm9sbGVyIGV4dGVuZHMgT3ZlcmxheUJhc2VDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIobG9hZGluZ0NvbnRyb2xsZXIpO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBMb2FkaW5nQ29udHJvbGxlcl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgTG9hZGluZ0NvbnRyb2xsZXIpKCk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVwcm92ID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUluamVjdGFibGUoe1xuICAgIHRva2VuOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgICBmYWN0b3J5OiBMb2FkaW5nQ29udHJvbGxlci7JtWZhYyxcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShMb2FkaW5nQ29udHJvbGxlciwgW3tcbiAgICB0eXBlOiBJbmplY3RhYmxlLFxuICAgIGFyZ3M6IFt7XG4gICAgICBwcm92aWRlZEluOiAncm9vdCdcbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbXTtcbiAgfSwgbnVsbCk7XG59KSgpO1xuY2xhc3MgTWVudUNvbnRyb2xsZXIgZXh0ZW5kcyBNZW51Q29udHJvbGxlciQxIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIobWVudUNvbnRyb2xsZXIpO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBNZW51Q29udHJvbGxlcl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgTWVudUNvbnRyb2xsZXIpKCk7XG4gIH07XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVwcm92ID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUluamVjdGFibGUoe1xuICAgIHRva2VuOiBNZW51Q29udHJvbGxlcixcbiAgICBmYWN0b3J5OiBNZW51Q29udHJvbGxlci7JtWZhYyxcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShNZW51Q29udHJvbGxlciwgW3tcbiAgICB0eXBlOiBJbmplY3RhYmxlLFxuICAgIGFyZ3M6IFt7XG4gICAgICBwcm92aWRlZEluOiAncm9vdCdcbiAgICB9XVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbXTtcbiAgfSwgbnVsbCk7XG59KSgpO1xuY2xhc3MgTW9kYWxDb250cm9sbGVyIGV4dGVuZHMgT3ZlcmxheUJhc2VDb250cm9sbGVyIHtcbiAgYW5ndWxhckRlbGVnYXRlID0gaW5qZWN0KEFuZ3VsYXJEZWxlZ2F0ZSk7XG4gIGluamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcbiAgZW52aXJvbm1lbnRJbmplY3RvciA9IGluamVjdChFbnZpcm9ubWVudEluamVjdG9yKTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIobW9kYWxDb250cm9sbGVyKTtcbiAgfVxuICBjcmVhdGUob3B0cykge1xuICAgIHJldHVybiBzdXBlci5jcmVhdGUoe1xuICAgICAgLi4ub3B0cyxcbiAgICAgIGRlbGVnYXRlOiB0aGlzLmFuZ3VsYXJEZWxlZ2F0ZS5jcmVhdGUodGhpcy5lbnZpcm9ubWVudEluamVjdG9yLCB0aGlzLmluamVjdG9yLCAnbW9kYWwnKVxuICAgIH0pO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBNb2RhbENvbnRyb2xsZXJfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IE1vZGFsQ29udHJvbGxlcikoKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtXByb3YgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lSW5qZWN0YWJsZSh7XG4gICAgdG9rZW46IE1vZGFsQ29udHJvbGxlcixcbiAgICBmYWN0b3J5OiBNb2RhbENvbnRyb2xsZXIuybVmYWNcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShNb2RhbENvbnRyb2xsZXIsIFt7XG4gICAgdHlwZTogSW5qZWN0YWJsZVxuICB9XSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbXTtcbiAgfSwgbnVsbCk7XG59KSgpO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB0aGUgaW5saW5lIGlvbi1waWNrZXIgY29tcG9uZW50IGluc3RlYWQuXG4gKi9cbmNsYXNzIFBpY2tlckNvbnRyb2xsZXIgZXh0ZW5kcyBPdmVybGF5QmFzZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihwaWNrZXJDb250cm9sbGVyKTtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gUGlja2VyQ29udHJvbGxlcl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgUGlja2VyQ29udHJvbGxlcikoKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtXByb3YgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lSW5qZWN0YWJsZSh7XG4gICAgdG9rZW46IFBpY2tlckNvbnRyb2xsZXIsXG4gICAgZmFjdG9yeTogUGlja2VyQ29udHJvbGxlci7JtWZhYyxcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShQaWNrZXJDb250cm9sbGVyLCBbe1xuICAgIHR5cGU6IEluamVjdGFibGUsXG4gICAgYXJnczogW3tcbiAgICAgIHByb3ZpZGVkSW46ICdyb290J1xuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9LCBudWxsKTtcbn0pKCk7XG5jbGFzcyBQb3BvdmVyQ29udHJvbGxlciBleHRlbmRzIE92ZXJsYXlCYXNlQ29udHJvbGxlciB7XG4gIGFuZ3VsYXJEZWxlZ2F0ZSA9IGluamVjdChBbmd1bGFyRGVsZWdhdGUpO1xuICBpbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG4gIGVudmlyb25tZW50SW5qZWN0b3IgPSBpbmplY3QoRW52aXJvbm1lbnRJbmplY3Rvcik7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHBvcG92ZXJDb250cm9sbGVyKTtcbiAgfVxuICBjcmVhdGUob3B0cykge1xuICAgIHJldHVybiBzdXBlci5jcmVhdGUoe1xuICAgICAgLi4ub3B0cyxcbiAgICAgIGRlbGVnYXRlOiB0aGlzLmFuZ3VsYXJEZWxlZ2F0ZS5jcmVhdGUodGhpcy5lbnZpcm9ubWVudEluamVjdG9yLCB0aGlzLmluamVjdG9yLCAncG9wb3ZlcicpXG4gICAgfSk7XG4gIH1cbn1cbmNsYXNzIFRvYXN0Q29udHJvbGxlciBleHRlbmRzIE92ZXJsYXlCYXNlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHRvYXN0Q29udHJvbGxlcik7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIFRvYXN0Q29udHJvbGxlcl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgVG9hc3RDb250cm9sbGVyKSgpO1xuICB9O1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1cHJvdiA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVJbmplY3RhYmxlKHtcbiAgICB0b2tlbjogVG9hc3RDb250cm9sbGVyLFxuICAgIGZhY3Rvcnk6IFRvYXN0Q29udHJvbGxlci7JtWZhYyxcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShUb2FzdENvbnRyb2xsZXIsIFt7XG4gICAgdHlwZTogSW5qZWN0YWJsZSxcbiAgICBhcmdzOiBbe1xuICAgICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW107XG4gIH0sIG51bGwpO1xufSkoKTtcblxuLy8gVE9ETyhGVy0yODI3KTogdHlwZXNcbmNvbnN0IGFwcEluaXRpYWxpemUgPSAoY29uZmlnLCBkb2MsIHpvbmUpID0+IHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCB3aW4gPSBkb2MuZGVmYXVsdFZpZXc7XG4gICAgaWYgKHdpbiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc2V0dXBDb25maWcoe1xuICAgICAgICAuLi5jb25maWcsXG4gICAgICAgIF96b25lR2F0ZTogaCA9PiB6b25lLnJ1bihoKVxuICAgICAgfSk7XG4gICAgICBjb25zdCBhZWxGbiA9ICdfX3pvbmVfc3ltYm9sX19hZGRFdmVudExpc3RlbmVyJyBpbiBkb2MuYm9keSA/ICdfX3pvbmVfc3ltYm9sX19hZGRFdmVudExpc3RlbmVyJyA6ICdhZGRFdmVudExpc3RlbmVyJztcbiAgICAgIHJldHVybiBkZWZpbmVDdXN0b21FbGVtZW50cyh3aW4sIHtcbiAgICAgICAgZXhjbHVkZTogWydpb24tdGFicyddLFxuICAgICAgICBzeW5jUXVldWU6IHRydWUsXG4gICAgICAgIHJhZixcbiAgICAgICAgam1wOiBoID0+IHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoaCksXG4gICAgICAgIGFlbChlbG0sIGV2ZW50TmFtZSwgY2IsIG9wdHMpIHtcbiAgICAgICAgICBlbG1bYWVsRm5dKGV2ZW50TmFtZSwgY2IsIG9wdHMpO1xuICAgICAgICB9LFxuICAgICAgICByZWwoZWxtLCBldmVudE5hbWUsIGNiLCBvcHRzKSB7XG4gICAgICAgICAgZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYiwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG5jb25zdCBESVJFQ1RJVkVTID0gW0lvbkFjY29yZGlvbiwgSW9uQWNjb3JkaW9uR3JvdXAsIElvbkFjdGlvblNoZWV0LCBJb25BbGVydCwgSW9uQXBwLCBJb25BdmF0YXIsIElvbkJhY2tkcm9wLCBJb25CYWRnZSwgSW9uQnJlYWRjcnVtYiwgSW9uQnJlYWRjcnVtYnMsIElvbkJ1dHRvbiwgSW9uQnV0dG9ucywgSW9uQ2FyZCwgSW9uQ2FyZENvbnRlbnQsIElvbkNhcmRIZWFkZXIsIElvbkNhcmRTdWJ0aXRsZSwgSW9uQ2FyZFRpdGxlLCBJb25DaGVja2JveCwgSW9uQ2hpcCwgSW9uQ29sLCBJb25Db250ZW50LCBJb25EYXRldGltZSwgSW9uRGF0ZXRpbWVCdXR0b24sIElvbkZhYiwgSW9uRmFiQnV0dG9uLCBJb25GYWJMaXN0LCBJb25Gb290ZXIsIElvbkdyaWQsIElvbkhlYWRlciwgSW9uSWNvbiwgSW9uSW1nLCBJb25JbmZpbml0ZVNjcm9sbCwgSW9uSW5maW5pdGVTY3JvbGxDb250ZW50LCBJb25JbnB1dCwgSW9uSW5wdXRPdHAsIElvbklucHV0UGFzc3dvcmRUb2dnbGUsIElvbkl0ZW0sIElvbkl0ZW1EaXZpZGVyLCBJb25JdGVtR3JvdXAsIElvbkl0ZW1PcHRpb24sIElvbkl0ZW1PcHRpb25zLCBJb25JdGVtU2xpZGluZywgSW9uTGFiZWwsIElvbkxpc3QsIElvbkxpc3RIZWFkZXIsIElvbkxvYWRpbmcsIElvbk1lbnUsIElvbk1lbnVCdXR0b24sIElvbk1lbnVUb2dnbGUsIElvbk5hdkxpbmssIElvbk5vdGUsIElvblBpY2tlciwgSW9uUGlja2VyQ29sdW1uLCBJb25QaWNrZXJDb2x1bW5PcHRpb24sIElvblBpY2tlckxlZ2FjeSwgSW9uUHJvZ3Jlc3NCYXIsIElvblJhZGlvLCBJb25SYWRpb0dyb3VwLCBJb25SYW5nZSwgSW9uUmVmcmVzaGVyLCBJb25SZWZyZXNoZXJDb250ZW50LCBJb25SZW9yZGVyLCBJb25SZW9yZGVyR3JvdXAsIElvblJpcHBsZUVmZmVjdCwgSW9uUm93LCBJb25TZWFyY2hiYXIsIElvblNlZ21lbnQsIElvblNlZ21lbnRCdXR0b24sIElvblNlZ21lbnRDb250ZW50LCBJb25TZWdtZW50VmlldywgSW9uU2VsZWN0LCBJb25TZWxlY3RNb2RhbCwgSW9uU2VsZWN0T3B0aW9uLCBJb25Ta2VsZXRvblRleHQsIElvblNwaW5uZXIsIElvblNwbGl0UGFuZSwgSW9uVGFiLCBJb25UYWJCYXIsIElvblRhYkJ1dHRvbiwgSW9uVGV4dCwgSW9uVGV4dGFyZWEsIElvblRodW1ibmFpbCwgSW9uVGl0bGUsIElvblRvYXN0LCBJb25Ub2dnbGUsIElvblRvb2xiYXJdO1xuY29uc3QgREVDTEFSQVRJT05TID0gW1xuLy8gZ2VuZXJhdGVkIHByb3hpZXNcbi4uLkRJUkVDVElWRVMsXG4vLyBtYW51YWwgcHJveGllc1xuSW9uTW9kYWwsIElvblBvcG92ZXIsXG4vLyBuZ01vZGVsIGFjY2Vzc29yc1xuQm9vbGVhblZhbHVlQWNjZXNzb3JEaXJlY3RpdmUsIE51bWVyaWNWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLCBTZWxlY3RWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLCBUZXh0VmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSxcbi8vIG5hdmlnYXRpb25cbklvblRhYnMsIElvblJvdXRlck91dGxldCwgSW9uQmFja0J1dHRvbiwgSW9uTmF2LCBSb3V0ZXJMaW5rRGVsZWdhdGVEaXJlY3RpdmUsIFJvdXRlckxpbmtXaXRoSHJlZkRlbGVnYXRlRGlyZWN0aXZlLFxuLy8gdmFsaWRhdG9yc1xuSW9uTWluVmFsaWRhdG9yLCBJb25NYXhWYWxpZGF0b3JdO1xuY2xhc3MgSW9uaWNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWcgPSB7fSkge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSW9uaWNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7XG4gICAgICAgIHByb3ZpZGU6IENvbmZpZ1Rva2VuLFxuICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICB9LCB7XG4gICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgdXNlRmFjdG9yeTogYXBwSW5pdGlhbGl6ZSxcbiAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIGRlcHM6IFtDb25maWdUb2tlbiwgRE9DVU1FTlQsIE5nWm9uZV1cbiAgICAgIH0sIEFuZ3VsYXJEZWxlZ2F0ZSwgcHJvdmlkZUNvbXBvbmVudElucHV0QmluZGluZygpXVxuICAgIH07XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIElvbmljTW9kdWxlX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25pY01vZHVsZSkoKTtcbiAgfTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtW1vZCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVOZ01vZHVsZSh7XG4gICAgdHlwZTogSW9uaWNNb2R1bGUsXG4gICAgZGVjbGFyYXRpb25zOiBbSW9uQWNjb3JkaW9uLCBJb25BY2NvcmRpb25Hcm91cCwgSW9uQWN0aW9uU2hlZXQsIElvbkFsZXJ0LCBJb25BcHAsIElvbkF2YXRhciwgSW9uQmFja2Ryb3AsIElvbkJhZGdlLCBJb25CcmVhZGNydW1iLCBJb25CcmVhZGNydW1icywgSW9uQnV0dG9uLCBJb25CdXR0b25zLCBJb25DYXJkLCBJb25DYXJkQ29udGVudCwgSW9uQ2FyZEhlYWRlciwgSW9uQ2FyZFN1YnRpdGxlLCBJb25DYXJkVGl0bGUsIElvbkNoZWNrYm94LCBJb25DaGlwLCBJb25Db2wsIElvbkNvbnRlbnQsIElvbkRhdGV0aW1lLCBJb25EYXRldGltZUJ1dHRvbiwgSW9uRmFiLCBJb25GYWJCdXR0b24sIElvbkZhYkxpc3QsIElvbkZvb3RlciwgSW9uR3JpZCwgSW9uSGVhZGVyLCBJb25JY29uLCBJb25JbWcsIElvbkluZmluaXRlU2Nyb2xsLCBJb25JbmZpbml0ZVNjcm9sbENvbnRlbnQsIElvbklucHV0LCBJb25JbnB1dE90cCwgSW9uSW5wdXRQYXNzd29yZFRvZ2dsZSwgSW9uSXRlbSwgSW9uSXRlbURpdmlkZXIsIElvbkl0ZW1Hcm91cCwgSW9uSXRlbU9wdGlvbiwgSW9uSXRlbU9wdGlvbnMsIElvbkl0ZW1TbGlkaW5nLCBJb25MYWJlbCwgSW9uTGlzdCwgSW9uTGlzdEhlYWRlciwgSW9uTG9hZGluZywgSW9uTWVudSwgSW9uTWVudUJ1dHRvbiwgSW9uTWVudVRvZ2dsZSwgSW9uTmF2TGluaywgSW9uTm90ZSwgSW9uUGlja2VyLCBJb25QaWNrZXJDb2x1bW4sIElvblBpY2tlckNvbHVtbk9wdGlvbiwgSW9uUGlja2VyTGVnYWN5LCBJb25Qcm9ncmVzc0JhciwgSW9uUmFkaW8sIElvblJhZGlvR3JvdXAsIElvblJhbmdlLCBJb25SZWZyZXNoZXIsIElvblJlZnJlc2hlckNvbnRlbnQsIElvblJlb3JkZXIsIElvblJlb3JkZXJHcm91cCwgSW9uUmlwcGxlRWZmZWN0LCBJb25Sb3csIElvblNlYXJjaGJhciwgSW9uU2VnbWVudCwgSW9uU2VnbWVudEJ1dHRvbiwgSW9uU2VnbWVudENvbnRlbnQsIElvblNlZ21lbnRWaWV3LCBJb25TZWxlY3QsIElvblNlbGVjdE1vZGFsLCBJb25TZWxlY3RPcHRpb24sIElvblNrZWxldG9uVGV4dCwgSW9uU3Bpbm5lciwgSW9uU3BsaXRQYW5lLCBJb25UYWIsIElvblRhYkJhciwgSW9uVGFiQnV0dG9uLCBJb25UZXh0LCBJb25UZXh0YXJlYSwgSW9uVGh1bWJuYWlsLCBJb25UaXRsZSwgSW9uVG9hc3QsIElvblRvZ2dsZSwgSW9uVG9vbGJhcixcbiAgICAvLyBtYW51YWwgcHJveGllc1xuICAgIElvbk1vZGFsLCBJb25Qb3BvdmVyLFxuICAgIC8vIG5nTW9kZWwgYWNjZXNzb3JzXG4gICAgQm9vbGVhblZhbHVlQWNjZXNzb3JEaXJlY3RpdmUsIE51bWVyaWNWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLCBTZWxlY3RWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLCBUZXh0VmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSxcbiAgICAvLyBuYXZpZ2F0aW9uXG4gICAgSW9uVGFicywgSW9uUm91dGVyT3V0bGV0LCBJb25CYWNrQnV0dG9uLCBJb25OYXYsIFJvdXRlckxpbmtEZWxlZ2F0ZURpcmVjdGl2ZSwgUm91dGVyTGlua1dpdGhIcmVmRGVsZWdhdGVEaXJlY3RpdmUsXG4gICAgLy8gdmFsaWRhdG9yc1xuICAgIElvbk1pblZhbGlkYXRvciwgSW9uTWF4VmFsaWRhdG9yXSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbSW9uQWNjb3JkaW9uLCBJb25BY2NvcmRpb25Hcm91cCwgSW9uQWN0aW9uU2hlZXQsIElvbkFsZXJ0LCBJb25BcHAsIElvbkF2YXRhciwgSW9uQmFja2Ryb3AsIElvbkJhZGdlLCBJb25CcmVhZGNydW1iLCBJb25CcmVhZGNydW1icywgSW9uQnV0dG9uLCBJb25CdXR0b25zLCBJb25DYXJkLCBJb25DYXJkQ29udGVudCwgSW9uQ2FyZEhlYWRlciwgSW9uQ2FyZFN1YnRpdGxlLCBJb25DYXJkVGl0bGUsIElvbkNoZWNrYm94LCBJb25DaGlwLCBJb25Db2wsIElvbkNvbnRlbnQsIElvbkRhdGV0aW1lLCBJb25EYXRldGltZUJ1dHRvbiwgSW9uRmFiLCBJb25GYWJCdXR0b24sIElvbkZhYkxpc3QsIElvbkZvb3RlciwgSW9uR3JpZCwgSW9uSGVhZGVyLCBJb25JY29uLCBJb25JbWcsIElvbkluZmluaXRlU2Nyb2xsLCBJb25JbmZpbml0ZVNjcm9sbENvbnRlbnQsIElvbklucHV0LCBJb25JbnB1dE90cCwgSW9uSW5wdXRQYXNzd29yZFRvZ2dsZSwgSW9uSXRlbSwgSW9uSXRlbURpdmlkZXIsIElvbkl0ZW1Hcm91cCwgSW9uSXRlbU9wdGlvbiwgSW9uSXRlbU9wdGlvbnMsIElvbkl0ZW1TbGlkaW5nLCBJb25MYWJlbCwgSW9uTGlzdCwgSW9uTGlzdEhlYWRlciwgSW9uTG9hZGluZywgSW9uTWVudSwgSW9uTWVudUJ1dHRvbiwgSW9uTWVudVRvZ2dsZSwgSW9uTmF2TGluaywgSW9uTm90ZSwgSW9uUGlja2VyLCBJb25QaWNrZXJDb2x1bW4sIElvblBpY2tlckNvbHVtbk9wdGlvbiwgSW9uUGlja2VyTGVnYWN5LCBJb25Qcm9ncmVzc0JhciwgSW9uUmFkaW8sIElvblJhZGlvR3JvdXAsIElvblJhbmdlLCBJb25SZWZyZXNoZXIsIElvblJlZnJlc2hlckNvbnRlbnQsIElvblJlb3JkZXIsIElvblJlb3JkZXJHcm91cCwgSW9uUmlwcGxlRWZmZWN0LCBJb25Sb3csIElvblNlYXJjaGJhciwgSW9uU2VnbWVudCwgSW9uU2VnbWVudEJ1dHRvbiwgSW9uU2VnbWVudENvbnRlbnQsIElvblNlZ21lbnRWaWV3LCBJb25TZWxlY3QsIElvblNlbGVjdE1vZGFsLCBJb25TZWxlY3RPcHRpb24sIElvblNrZWxldG9uVGV4dCwgSW9uU3Bpbm5lciwgSW9uU3BsaXRQYW5lLCBJb25UYWIsIElvblRhYkJhciwgSW9uVGFiQnV0dG9uLCBJb25UZXh0LCBJb25UZXh0YXJlYSwgSW9uVGh1bWJuYWlsLCBJb25UaXRsZSwgSW9uVG9hc3QsIElvblRvZ2dsZSwgSW9uVG9vbGJhcixcbiAgICAvLyBtYW51YWwgcHJveGllc1xuICAgIElvbk1vZGFsLCBJb25Qb3BvdmVyLFxuICAgIC8vIG5nTW9kZWwgYWNjZXNzb3JzXG4gICAgQm9vbGVhblZhbHVlQWNjZXNzb3JEaXJlY3RpdmUsIE51bWVyaWNWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLCBTZWxlY3RWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLCBUZXh0VmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSxcbiAgICAvLyBuYXZpZ2F0aW9uXG4gICAgSW9uVGFicywgSW9uUm91dGVyT3V0bGV0LCBJb25CYWNrQnV0dG9uLCBJb25OYXYsIFJvdXRlckxpbmtEZWxlZ2F0ZURpcmVjdGl2ZSwgUm91dGVyTGlua1dpdGhIcmVmRGVsZWdhdGVEaXJlY3RpdmUsXG4gICAgLy8gdmFsaWRhdG9yc1xuICAgIElvbk1pblZhbGlkYXRvciwgSW9uTWF4VmFsaWRhdG9yXVxuICB9KTtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtWluaiA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVJbmplY3Rvcih7XG4gICAgcHJvdmlkZXJzOiBbTW9kYWxDb250cm9sbGVyLCBQb3BvdmVyQ29udHJvbGxlcl0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25pY01vZHVsZSwgW3tcbiAgICB0eXBlOiBOZ01vZHVsZSxcbiAgICBhcmdzOiBbe1xuICAgICAgZGVjbGFyYXRpb25zOiBERUNMQVJBVElPTlMsXG4gICAgICBleHBvcnRzOiBERUNMQVJBVElPTlMsXG4gICAgICBwcm92aWRlcnM6IFtNb2RhbENvbnRyb2xsZXIsIFBvcG92ZXJDb250cm9sbGVyXSxcbiAgICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdXG4gICAgfV1cbiAgfV0sIG51bGwsIG51bGwpO1xufSkoKTtcblxuLy8gRElSRUNUSVZFU1xuXG4vKipcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxuICovXG5cbmV4cG9ydCB7IEFjdGlvblNoZWV0Q29udHJvbGxlciwgQWxlcnRDb250cm9sbGVyLCBBbmltYXRpb25Db250cm9sbGVyLCBCb29sZWFuVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSBhcyBCb29sZWFuVmFsdWVBY2Nlc3NvciwgR2VzdHVyZUNvbnRyb2xsZXIsIElPTl9NQVhfVkFMSURBVE9SLCBJT05fTUlOX1ZBTElEQVRPUiwgSW9uQWNjb3JkaW9uLCBJb25BY2NvcmRpb25Hcm91cCwgSW9uQWN0aW9uU2hlZXQsIElvbkFsZXJ0LCBJb25BcHAsIElvbkF2YXRhciwgSW9uQmFja0J1dHRvbiwgSW9uQmFja2Ryb3AsIElvbkJhZGdlLCBJb25CcmVhZGNydW1iLCBJb25CcmVhZGNydW1icywgSW9uQnV0dG9uLCBJb25CdXR0b25zLCBJb25DYXJkLCBJb25DYXJkQ29udGVudCwgSW9uQ2FyZEhlYWRlciwgSW9uQ2FyZFN1YnRpdGxlLCBJb25DYXJkVGl0bGUsIElvbkNoZWNrYm94LCBJb25DaGlwLCBJb25Db2wsIElvbkNvbnRlbnQsIElvbkRhdGV0aW1lLCBJb25EYXRldGltZUJ1dHRvbiwgSW9uRmFiLCBJb25GYWJCdXR0b24sIElvbkZhYkxpc3QsIElvbkZvb3RlciwgSW9uR3JpZCwgSW9uSGVhZGVyLCBJb25JY29uLCBJb25JbWcsIElvbkluZmluaXRlU2Nyb2xsLCBJb25JbmZpbml0ZVNjcm9sbENvbnRlbnQsIElvbklucHV0LCBJb25JbnB1dE90cCwgSW9uSW5wdXRQYXNzd29yZFRvZ2dsZSwgSW9uSXRlbSwgSW9uSXRlbURpdmlkZXIsIElvbkl0ZW1Hcm91cCwgSW9uSXRlbU9wdGlvbiwgSW9uSXRlbU9wdGlvbnMsIElvbkl0ZW1TbGlkaW5nLCBJb25MYWJlbCwgSW9uTGlzdCwgSW9uTGlzdEhlYWRlciwgSW9uTG9hZGluZywgSW9uTWF4VmFsaWRhdG9yLCBJb25NZW51LCBJb25NZW51QnV0dG9uLCBJb25NZW51VG9nZ2xlLCBJb25NaW5WYWxpZGF0b3IsIElvbk1vZGFsLCBJb25OYXYsIElvbk5hdkxpbmssIElvbk5vdGUsIElvblBpY2tlciwgSW9uUGlja2VyQ29sdW1uLCBJb25QaWNrZXJDb2x1bW5PcHRpb24sIElvblBpY2tlckxlZ2FjeSwgSW9uUG9wb3ZlciwgSW9uUHJvZ3Jlc3NCYXIsIElvblJhZGlvLCBJb25SYWRpb0dyb3VwLCBJb25SYW5nZSwgSW9uUmVmcmVzaGVyLCBJb25SZWZyZXNoZXJDb250ZW50LCBJb25SZW9yZGVyLCBJb25SZW9yZGVyR3JvdXAsIElvblJpcHBsZUVmZmVjdCwgSW9uUm91dGVyT3V0bGV0LCBJb25Sb3csIElvblNlYXJjaGJhciwgSW9uU2VnbWVudCwgSW9uU2VnbWVudEJ1dHRvbiwgSW9uU2VnbWVudENvbnRlbnQsIElvblNlZ21lbnRWaWV3LCBJb25TZWxlY3QsIElvblNlbGVjdE1vZGFsLCBJb25TZWxlY3RPcHRpb24sIElvblNrZWxldG9uVGV4dCwgSW9uU3Bpbm5lciwgSW9uU3BsaXRQYW5lLCBJb25UYWIsIElvblRhYkJhciwgSW9uVGFiQnV0dG9uLCBJb25UYWJzLCBJb25UZXh0LCBJb25UZXh0YXJlYSwgSW9uVGh1bWJuYWlsLCBJb25UaXRsZSwgSW9uVG9hc3QsIElvblRvZ2dsZSwgSW9uVG9vbGJhciwgSW9uaWNNb2R1bGUsIExvYWRpbmdDb250cm9sbGVyLCBNZW51Q29udHJvbGxlciwgTW9kYWxDb250cm9sbGVyLCBOdW1lcmljVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSBhcyBOdW1lcmljVmFsdWVBY2Nlc3NvciwgUGlja2VyQ29udHJvbGxlciwgUG9wb3ZlckNvbnRyb2xsZXIsIFJvdXRlckxpbmtEZWxlZ2F0ZURpcmVjdGl2ZSBhcyBSb3V0ZXJMaW5rRGVsZWdhdGUsIFJvdXRlckxpbmtXaXRoSHJlZkRlbGVnYXRlRGlyZWN0aXZlIGFzIFJvdXRlckxpbmtXaXRoSHJlZkRlbGVnYXRlLCBTZWxlY3RWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIGFzIFNlbGVjdFZhbHVlQWNjZXNzb3IsIFRleHRWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIGFzIFRleHRWYWx1ZUFjY2Vzc29yLCBUb2Fz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QUFBQSxJQUFVO0FBQUEsSUFBVTtBQUFBLElBQVc7QUFBQTtBQUFBLElBRTluQ0M7QUFBQSxJQUFVQztBQUFBO0FBQUEsSUFFVjtBQUFBLElBQStCO0FBQUEsSUFBK0I7QUFBQSxJQUE4QjtBQUFBO0FBQUEsSUFFNUZOO0FBQUEsSUFBU0Q7QUFBQSxJQUFpQkU7QUFBQSxJQUFlQztBQUFBLElBQVFDO0FBQUEsSUFBNkJDO0FBQUE7QUFBQSxJQUU5RTtBQUFBLElBQWlCO0FBQUEsRUFBZTtBQUNsQyxDQUFDO0FBQUE7QUFFRCxjQTNDSSxjQTJDRyxhQUFzQixnQkFBRywyQkFBaUI7QUFBQSxFQUMvQyxXQUFXLENBQUMsaUJBQWlCLGlCQUFpQjtBQUFBLEVBQzlDLFNBQVMsQ0FBQyxZQUFZO0FBQ3hCLENBQUM7QUE5Q0gsSUFBTSxjQUFOO0FBQUEsQ0FnREMsTUFBTTtBQUNMLEdBQUMsT0FBTyxjQUFjLGVBQWUsY0FBaUIsaUJBQWtCLGFBQWEsQ0FBQztBQUFBLElBQ3BGLE1BQU07QUFBQSxJQUNOLE1BQU0sQ0FBQztBQUFBLE1BQ0wsY0FBYztBQUFBLE1BQ2QsU0FBUztBQUFBLE1BQ1QsV0FBVyxDQUFDLGlCQUFpQixpQkFBaUI7QUFBQSxNQUM5QyxTQUFTLENBQUMsWUFBWTtBQUFBLElBQ3hCLENBQUM7QUFBQSxFQUNILENBQUMsR0FBRyxNQUFNLElBQUk7QUFDaEIsR0FBRzsiLCJuYW1lcyI6WyJfYSIsIklvblJvdXRlck91dGxldCIsIklvblRhYnMiLCJJb25CYWNrQnV0dG9uIiwiSW9uTmF2IiwiUm91dGVyTGlua0RlbGVnYXRlRGlyZWN0aXZlIiwiUm91dGVyTGlua1dpdGhIcmVmRGVsZWdhdGVEaXJlY3RpdmUiLCJJb25Nb2RhbCIsIklvblBvcG92ZXIiLCJNZW51Q29udHJvbGxlciJdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsM119
