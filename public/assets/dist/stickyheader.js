(()=>{function t(s){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(s)}function s(t,s,i){return(s=e(s))in t?Object.defineProperty(t,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[s]=i,t}function i(t,s){for(var i=0;i<s.length;i++){var o=s[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,e(o.key),o)}}function e(s){var i=function(s,i){if("object"!==t(s)||null===s)return s;var e=s[Symbol.toPrimitive];if(void 0!==e){var o=e.call(s,i||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(s)}(s,"string");return"symbol"===t(i)?i:String(i)}function o(){var t={},s=!1,i=0,e=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(s=arguments[0],i++);for(var h=function(i){for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(s&&"[object Object]"===Object.prototype.toString.call(i[e])?t[e]=o(!0,t[e],i[e]):t[e]=i[e])};i<e;i++){var l=arguments[i];h(l)}return t}var h=function(){"use strict";function t(){var i;!function(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}(this,t);var e=window.getComputedStyle(document.body),o=parseInt(e.getPropertyValue("--hdr-0"),10),h=parseInt(e.getPropertyValue("--hdr-xs"),10),l=parseInt(e.getPropertyValue("--hdr-s"),10),r=parseInt(e.getPropertyValue("--hdr-m"),10),n=parseInt(e.getPropertyValue("--hdr-l"),10),a=parseInt(e.getPropertyValue("--hdr-xl"),10),p=parseInt(e.getPropertyValue("--bp-xs"),10),u=parseInt(e.getPropertyValue("--bp-s"),10),c=parseInt(e.getPropertyValue("--bp-m"),10),d=parseInt(e.getPropertyValue("--bp-l"),10),y=parseInt(e.getPropertyValue("--bp-xl"),10);this.o2={s3:"header",ls3:"header .mod_navigation .level_1 > li > a, header .mod_navigation .level_1 > li > strong, header .mod_toggle",sc4:{sh4:o||60,th4:o||60,sp4:400,bp4:600},cl5:{uc5:!0,io5:"sh-open",os5:"sh-stop"},l6:{as6:!0,s3:"header .mod_logo",mh6:null,mn6:null},rp7:(i={},s(i,p||600,{sh4:h||60,th4:o||60}),s(i,u||768,{sh4:l||60,th4:o||60}),s(i,c||1024,{sh4:r||100,th4:o||80}),s(i,d||1264,{sh4:n||100,th4:o||80}),s(i,y||1921,{sh4:a||100,th4:o||80}),i),onInit:function(){},onPlay:function(){},onPause:function(){},onUpdate:function(){}},(this.el=document.querySelector(this.o2.s3))&&(this.o2.ls3&&(this.l7l=this.el.querySelectorAll(this.o2.ls3)),this.o2.l6.s3&&(this.l6=document.querySelector(this.o2.l6.s3)),this.ls8=null,this.d8="",this.ld8="",this.bs8=!1,this.p8=!1,this.sd8=!1,this.st9={op:1,hd:2},this._crb(),this._sds(),this._uha(),this._us(),this._re(),this.o2.onInit.call(this))}var e,h,l;return e=t,h=[{key:"_crb",value:function(){if(this.rp7=this.o2.sc4,!this.o2.l6.as6&&this.o2.l6.s3&&(this.rp7=o(!0,this.rp7,{l6:{mh6:this.o2.l6.mh6,mn6:this.o2.l6.mn6}})),this.o2.rp7)for(var t in this.o2.rp7)window.innerWidth>=t&&(this.rp7=o(!0,this.rp7,this.o2.rp7[t]))}},{key:"_re",value:function(){var t=this;window.addEventListener("scroll",(function(){t.p8||(t._cls(),t._us(),t._sds())}),{passive:!0}),window.addEventListener("resize",(function(){t._crb(),t._uha(),t.p8||t._us()}),{passive:!0})}},{key:"_cls",value:function(){this.ls8-window.scrollY>=this.rp7.th4?(this._set(this.st9.op),this._uha(),this.d8="up"):-1*(this.ls8-window.scrollY)>=this.rp7.th4&&(this._set(this.st9.hd),this._uha(),this.d8="down")}},{key:"_sds",value:function(){this.ld8=this.d8,this.ls8&&this.ls8!==window.scrollY?this.ls8<window.scrollY?this.d8="down":this.ls8>window.scrollY&&(this.d8="up"):this.d8="",this.ls8=window.scrollY}},{key:"_gpo",value:function(){return this.el.offsetTop+(this.ls8-window.scrollY)}},{key:"_uha",value:function(){var t=window.scrollY/this.rp7.sp4,s=-t+"s";if(window.scrollY<=this.rp7.sp4){if(this.el.style.height=this.rp7.sh4-(this.rp7.sh4-this.rp7.th4)*(window.scrollY/this.rp7.sp4)+"px",this.el.style.animationDelay=s,this.o2.ls3)for(var i=0;i<this.l7l.length;i++)this.l7l[i].style.animationDelay=s;this.o2.cl5.uc5&&this.el.classList.remove(this.o2.cl5.os5)}else{if(this.el.style.height=this.rp7.th4+"px",this.el.style.animationDelay="-1s",this.o2.ls3)for(var e=0;e<this.l7l.length;e++)this.l7l[e].style.animationDelay="-1s";this.o2.cl5.uc5&&this.el.classList.add(this.o2.cl5.os5)}this.o2.l6.s3&&this.l6&&this._ulhe(),this.o2.onUpdate.call(this,t)}},{key:"_ulhe",value:function(){var t=100*window.scrollY/this.rp7.sp4,s=this.o2.l6.as6?this.rp7.th4/this.rp7.sh4:this.rp7.l6.mn6/this.rp7.l6.mh6,i=1-s;window.scrollY<=this.rp7.sp4?this.l6.style.transform="scale("+(1-i*t/100).toFixed(3)+")":this.l6.style.transform="scale("+s.toFixed(3)+")"}},{key:"_set",value:function(t){switch(t){case this.st9.op:this.el.style.top=0;break;case this.st9.hd:this.el.style.top=-this.rp7.th4+"px"}this._scls(t)}},{key:"_scls",value:function(t){if(this.o2.cl5.uc5)switch(t){case this.st9.op:this.el.classList.add(this.o2.cl5.io5);break;case this.st9.hd:this.el.classList.remove(this.o2.cl5.io5)}}},{key:"_us",value:function(){this.bs8?this._bs8h():window.scrollY<this.rp7.bp4?(this._uha(),this._set(this.st9.op)):window.scrollY>=this.rp7.bp4&&window.scrollY<this.rp7.bp4+this.rp7.th4||this.ld8!==this.d8&&this.ld8?this.bs8=!0:"down"===this.d8?this._set(this.st9.hd):"up"===this.d8?this._set(this.st9.op):this.d8||(this._set(this.st9.hd),this.d8="down")}},{key:"_bs8h",value:function(){var t=this._gpo();switch(this.d8){case"up":t<0?this.el.style.top=t+"px":(this._set(this.st9.op),this.bs8=!1);break;case"down":t<=0&&t>-this.rp7.th4?this.el.style.top=t+"px":(this._set(this.st9.hd),this.bs8=!1)}}},{key:"play",value:function(){this.sd8&&(document.body.style.overflowY="",this.sd8=!1),this.p8=!1,this._uha(),this.o2.onPlay.call(this)}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t&&(this._set(this.st9.op),this.d8="up"),s&&(document.body.style.overflowY="hidden",this.sd8=s),this.p8=!0,this.o2.onPause.call(this)}},{key:"isPaused",value:function(){return this.p8}}],h&&i(e.prototype,h),l&&i(e,l),Object.defineProperty(e,"prototype",{writable:!1}),t}();document.addEventListener("DOMContentLoaded",(function(){window.sh=new h}))})();