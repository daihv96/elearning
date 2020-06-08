(function(){var t,s,e,n,a,i=function(t,s){return function(){return t.apply(s,arguments)}};t=window.jQuery,s=window,n=function(){function s(s){var e;this.element=s,this._clickEvent=i(this._clickEvent,this),this.element=t(this.element),this.nav=this.element.closest(".nav"),this.dropdown=this.element.parent().find(".dropdown-menu"),this.element.on("click",this._clickEvent),this.nav.closest(".navbar-offcanvas").on("click",(e=this,function(){if(e.dropdown.is(".shown"))return e.dropdown.removeClass("shown").closest(".open").removeClass("open")}))}return s.prototype._clickEvent=function(s){return this.dropdown.hasClass("shown")||s.preventDefault(),s.stopPropagation(),t(".dropdown-toggle").not(this.element).closest(".open").removeClass("open").find(".dropdown-menu").removeClass("shown"),this.dropdown.toggleClass("shown"),this.element.parent().toggleClass("open")},s}(),a=function(){function e(s,e,n,a){this.button=s,this.element=e,this.location=n,this.offcanvas=a,this._getFade=i(this._getFade,this),this._getCss=i(this._getCss,this),this._touchEnd=i(this._touchEnd,this),this._touchMove=i(this._touchMove,this),this._touchStart=i(this._touchStart,this),this.endThreshold=130,this.startThreshold=this.element.hasClass("navbar-offcanvas-right")?t("body").outerWidth()-60:20,this.maxStartThreshold=this.element.hasClass("navbar-offcanvas-right")?t("body").outerWidth()-20:60,this.currentX=0,this.fade=!!this.element.hasClass("navbar-offcanvas-fade"),t(document).on("touchstart",this._touchStart),t(document).on("touchmove",this._touchMove),t(document).on("touchend",this._touchEnd)}return e.prototype._touchStart=function(e){if(this.startX=e.originalEvent.touches[0].pageX,this.element.is(".in"))return this.element.height(t(s).outerHeight())},e.prototype._touchMove=function(s){var e;if(t(s.target).parents(".navbar-offcanvas").length>0)return!0;if(this.startX>this.startThreshold&&this.startX<this.maxStartThreshold){if(s.preventDefault(),e=s.originalEvent.touches[0].pageX-this.startX,e=this.element.hasClass("navbar-offcanvas-right")?-e:e,Math.abs(e)<this.element.outerWidth())return this.element.css(this._getCss(e)),this.element.css(this._getFade(e))}else if(this.element.hasClass("in")&&(s.preventDefault(),e=s.originalEvent.touches[0].pageX+(this.currentX-this.startX),e=this.element.hasClass("navbar-offcanvas-right")?-e:e,Math.abs(e)<this.element.outerWidth()))return this.element.css(this._getCss(e)),this.element.css(this._getFade(e))},e.prototype._touchEnd=function(s){var e,n,a;return t(s.target).parents(".navbar-offcanvas").length>0||(n=!1,a=s.originalEvent.changedTouches[0].pageX,Math.abs(a)!==this.startX?(e=this.element.hasClass("navbar-offcanvas-right")?Math.abs(a)>this.endThreshold+50:a<this.endThreshold+50,this.element.hasClass("in")&&e?(this.currentX=0,this.element.removeClass("in").css(this._clearCss()),this.button.removeClass("is-open"),n=!0):Math.abs(a-this.startX)>this.endThreshold&&this.startX>this.startThreshold&&this.startX<this.maxStartThreshold?(this.currentX=this.element.hasClass("navbar-offcanvas-right")?-this.element.outerWidth():this.element.outerWidth(),this.element.toggleClass("in").css(this._clearCss()),this.button.toggleClass("is-open"),n=!0):this.element.css(this._clearCss()),this.offcanvas.bodyOverflow(n)):void 0)},e.prototype._getCss=function(t){return{"-webkit-transform":"translate3d("+(t=this.element.hasClass("navbar-offcanvas-right")?-t:t)+"px, 0px, 0px)","-webkit-transition-duration":"0s","-moz-transform":"translate3d("+t+"px, 0px, 0px)","-moz-transition":"0s","-o-transform":"translate3d("+t+"px, 0px, 0px)","-o-transition":"0s",transform:"translate3d("+t+"px, 0px, 0px)",transition:"0s"}},e.prototype._getFade=function(t){return this.fade?{opacity:t/this.element.outerWidth()}:{}},e.prototype._clearCss=function(){return{"-webkit-transform":"","-webkit-transition-duration":"","-moz-transform":"","-moz-transition":"","-o-transform":"","-o-transition":"",transform:"",transition:"",opacity:""}},e}(),s.Offcanvas=e=function(){function e(s){var e,o,r,h,l;this.element=s,this.bodyOverflow=i(this.bodyOverflow,this),this._sendEventsAfter=i(this._sendEventsAfter,this),this._sendEventsBefore=i(this._sendEventsBefore,this),this._documentClicked=i(this._documentClicked,this),this._close=i(this._close,this),this._open=i(this._open,this),this._clicked=i(this._clicked,this),this._navbarHeight=i(this._navbarHeight,this),(e=!!this.element.attr("data-target")&&this.element.attr("data-target"))?(this.target=t(e),this.target.length&&!this.target.hasClass("js-offcanvas-done")&&(this.element.addClass("js-offcanvas-has-events"),this.location=this.target.hasClass("navbar-offcanvas-right")?"right":"left",this.target.addClass(this._transformSupported()?"offcanvas-transform js-offcanvas-done":"offcanvas-position js-offcanvas-done"),this.target.data("offcanvas",this),this.element.on("click",this._clicked),this.target.on("transitionend",(l=this,function(){if(l.target.is(":not(.in)"))return l.target.height("")})),t(document).on("click",this._documentClicked),this.target.hasClass("navbar-offcanvas-touch")&&new a(this.element,this.target,this.location,this),this.target.find(".dropdown-toggle").each(function(){return new n(this)}),this.target.on("offcanvas.toggle",(h=this,function(t){return h._clicked(t)})),this.target.on("offcanvas.close",(r=this,function(t){return r._close(t)})),this.target.on("offcanvas.open",(o=this,function(t){return o._open(t)})))):console.warn("Offcanvas: `data-target` attribute must be present.")}return e.prototype._navbarHeight=function(){if(this.target.is(".in"))return this.target.height(t(s).outerHeight())},e.prototype._clicked=function(s){return s.preventDefault(),this._sendEventsBefore(),t(".navbar-offcanvas").not(this.target).trigger("offcanvas.close"),this.target.toggleClass("in"),this.element.toggleClass("is-open"),this._navbarHeight(),this.bodyOverflow()},e.prototype._open=function(t){if(t.preventDefault(),!this.target.is(".in"))return this._sendEventsBefore(),this.target.addClass("in"),this.element.addClass("is-open"),this._navbarHeight(),this.bodyOverflow()},e.prototype._close=function(t){if(t.preventDefault(),!this.target.is(":not(.in)"))return this._sendEventsBefore(),this.target.removeClass("in"),this.element.removeClass("is-open"),this._navbarHeight(),this.bodyOverflow()},e.prototype._documentClicked=function(s){var e;if(!(e=t(s.target)).hasClass("offcanvas-toggle")&&0===e.parents(".offcanvas-toggle").length&&0===e.parents(".navbar-offcanvas").length&&!e.hasClass("navbar-offcanvas")&&this.target.hasClass("in"))return s.preventDefault(),this._sendEventsBefore(),this.target.removeClass("in"),this.element.removeClass("is-open"),this._navbarHeight(),this.bodyOverflow()},e.prototype._sendEventsBefore=function(){return this.target.hasClass("in")?this.target.trigger("hide.bs.offcanvas"):this.target.trigger("show.bs.offcanvas")},e.prototype._sendEventsAfter=function(){return this.target.hasClass("in")?this.target.trigger("shown.bs.offcanvas"):this.target.trigger("hidden.bs.offcanvas")},e.prototype.bodyOverflow=function(s){if(null==s&&(s=!0),this.target.is(".in")?t("body").addClass("offcanvas-stop-scrolling"):t("body").removeClass("offcanvas-stop-scrolling"),s)return this._sendEventsAfter()},e.prototype._transformSupported=function(){var t,s,e;return e="translate3d(0px, 0px, 0px)",s=/translate3d\(0px, 0px, 0px\)/g,(t=document.createElement("div")).style.cssText="-webkit-transform: "+e+"; -moz-transform: "+e+"; -o-transform: "+e+"; transform: "+e,null!=t.style.cssText.match(s).length},e}(),t.fn.bsOffcanvas=function(){return this.each(function(){return new e(t(this))})},t(function(){return t('[data-toggle="offcanvas"]').each(function(){return t(this).bsOffcanvas()}),t(s).on("resize",function(){return t(".navbar-offcanvas.in").each(function(){return t(this).height("").removeClass("in")}),t(".offcanvas-toggle").removeClass("is-open"),t("body").removeClass("offcanvas-stop-scrolling")}),t(".offcanvas-toggle").each(function(){return t(this).on("click",function(s){var e,n;if(!t(this).hasClass("js-offcanvas-has-events")&&(n=t(this).attr("data-target"),e=t(n)))return e.height(""),e.removeClass("in"),t("body").css({overflow:"",position:""})})})})}).call(this);