!function(e){var t={};function s(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){s(1),e.exports=s(2)},function(e,t){var s=function(e){this.props={selector:e,options:{navPrev:'<img src="img/P_arrow_left.png" alt="image">',navNext:'<img src="img/P_arrow_right.png" alt="image">'},classes:{slider:"sliderAdvertising",list:"sliderAdvertising_list",slide:"sliderAdvertising_slide",nav:{wrapper:"sliderAdvertising_nav",prev:"sliderAdvertising_nav__prev",next:"sliderAdvertising_nav__next",event:"navEvent"},dots:{wrapper:"sliderAdvertising_dots",dot:"sliderAdvertising_dots__dot",event:"dotEvent"}},state:{pos:0,active:0,posDots:0},elements:{}}};s.prototype.create=function(){for(var e=this.props.options,t=this.props.classes,s=this.props.elements;document.querySelectorAll("".concat(this.props.selector,":not(.").concat(t.slider,")")).length>0;){s.sliderWrap=document.querySelector("".concat(this.props.selector,":not(.").concat(t.slider,")")),s.sliderWrap.classList.add(t.slider),s.sliderList=document.createElement("div"),s.sliderList.classList.add(t.list);var r=!0,i=!1,n=void 0;try{for(var a,o=s.sliderWrap.children[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){a.value.classList.add(t.slide)}}catch(e){i=!0,n=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw n}}if(s.sliderSlides=s.sliderWrap.innerHTML,s.sliderList.innerHTML=s.sliderSlides,s.sliderWrap.innerHTML=null,s.sliderWrap.append(s.sliderList),"true"===s.sliderWrap.dataset.nav&&(s.sliderNav=document.createElement("div"),s.sliderNav.classList.add(t.nav.wrapper),s.sliderWrap.append(s.sliderNav),s.sliderNavPrev=document.createElement("span"),s.sliderNavPrev.classList.add(t.nav.prev),s.sliderNavPrev.classList.add(t.nav.event),s.sliderNavPrev.innerHTML=e.navPrev,s.sliderNav.append(s.sliderNavPrev),s.sliderNavNext=document.createElement("span"),s.sliderNavNext.classList.add(t.nav.next),s.sliderNavNext.classList.add(t.nav.event),s.sliderNavNext.innerHTML=e.navNext,s.sliderNav.append(s.sliderNavNext)),"true"===s.sliderWrap.dataset.dots){s.sliderDots=document.createElement("div"),s.sliderDots.classList.add(t.dots.wrapper),s.sliderDots.classList.add(t.dots.event),s.sliderWrap.append(s.sliderDots);for(var c=0;c<s.sliderList.children.length;c++){var l=document.createElement("span");l.dataset.number=c,l.classList.add(t.dots.dot),0===c&&l.classList.add("active");var d=document.createElement("img");d.src=s.sliderList.children[c].dataset.preview,l.append(d),s.sliderDots.append(l)}}}},s.prototype.moveSlideNavPrev=function(){this.props.state.active--,-1===this.props.state.active&&(this.props.state.active=document.querySelector(".".concat(this.props.classes.list)).children.length-1),this.props.state.pos=-100*this.props.state.active,document.querySelector(".".concat(this.props.classes.list)).style.transform="translateX(".concat(this.props.state.pos,"%)")},s.prototype.moveSlideNavNext=function(){this.props.state.active++,this.props.state.active===document.querySelector(".".concat(this.props.classes.list)).children.length&&(this.props.state.active=0),this.props.state.pos=-100*this.props.state.active,document.querySelector(".".concat(this.props.classes.list)).style.transform="translateX(".concat(this.props.state.pos,"%)")},s.prototype.moveSlideDots=function(e){if(e){var t=e.closest(".".concat(this.props.classes.dots.dot)),s=t.closest(".".concat(this.props.classes.dots.wrapper)).querySelectorAll(".".concat(this.props.classes.dots.dot)),r=!0,i=!1,n=void 0;try{for(var a,o=s[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){a.value.classList.remove("active")}}catch(e){i=!0,n=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw n}}t.classList.add("active"),this.props.state.posDots=-100*parseInt(t.dataset.number),e.closest(".".concat(this.props.classes.slider)).querySelector(".".concat(this.props.classes.list)).style.transform="translateX(".concat(this.props.state.posDots,"%)")}},s.prototype.events=function(){var e=this;document.querySelectorAll(".".concat(e.props.classes.nav.event)).forEach(function(t){t.addEventListener("click",function(t){t.target.classList.contains(e.props.classes.nav.prev)?e.moveSlideNavPrev():e.moveSlideNavNext()})}),document.querySelectorAll(".".concat(e.props.classes.dots.event)).forEach(function(t){t.addEventListener("click",function(t){var s=t.target;e.moveSlideDots(s)})})},s.prototype.touch=function(){var e=this,t=0,s=0;document.addEventListener("touchstart",function(e){t=e.changedTouches[0].screenX},!1),document.addEventListener("touchend",function(r){s=r.changedTouches[0].screenX,function(){s<=t&&e.moveSlideNavNext();s>=t&&e.moveSlideNavPrev()}()},!1)},s.prototype.init=function(){this.create(),this.events(),this.touch()},new s(".slider").init(),window.addEventListener("orientationchange",function(){90===screen.orientation.angle?document.querySelector(".wrapper").classList.add("landscape"):document.querySelector(".wrapper").classList.remove("landscape")}),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".preview_left ").classList.add("visible"),document.querySelector(".preview_center").classList.add("visible"),document.querySelector(".preview_right ").classList.add("visible"),document.querySelector(".preview_wrap_img ").classList.add("visible"),setTimeout(function(){document.querySelector(".content ").classList.remove("hidden"),document.querySelector(".preview ").classList.add("hidden")},3e3)})},function(e,t,s){}]);
//# sourceMappingURL=bundle.js.map