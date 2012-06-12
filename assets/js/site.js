/**!
 * JavaScript for wafflesnatcha.github.com
 *
 * @author Scott Buchanan <buchanan.sc@gmail.com>
 * @link http://wafflesnatcha.github.com
 *//** @namespace */var Site=function(){var e={animation:!0,content_anim_duration:300,index_page:"index.html",routing:!0,title:"",url:"",tracking:!0,layout_width_collapsed:null,layout_width_expanded:null,layout:"default",origin:location.protocol+"//"+location.host,selector_links_all:"a",selector_links_external:['a[rel="external"]','a[href^="http://"]:not([href^="http://'+location.host+'"])"','a[href^="https://"]:not([href^="https://'+location.host+'"])'].join(","),selector_links_internal:'a[href^="/"]',template_error_page:'<div id="layout-error"><h1 class="page-title"><%status%></h1><div class="page-body"><%text%></div></div>'};return{init:function(e){if(typeof e=="object")for(var t in e)Site.config(t,e[t]);Site.UI.init(),Site.Links.init(),Site.Navigation.init()},config:function(t,n){return t?(n&&(e[t]=n),e[t]):e},loadEnd:function(){setTimeout(function(){window.scrollTo(0,0)},100)},navigate:function(e){return Site.Navigation.go(e)},setTitle:function(e){return e&&$(document).prop("title",e),$(document).prop("title")}}}();Site.Content=function(){var e,t=/<title>(.*)<\/title>/i,n="#content";return{load:function(r){e&&e.abort&&e.abort();if(!r||r=="/"||r=="/"+Site.config("index_page")){Site.Content.clear();return}this.loadStart(),this.expand(),e=$(n).load(r+" #content > *",function(e,n,r){n=="error"&&Site.Content.error(r.status,r.statusText);var i=t.exec(e);i&&i.length>1&&Site.setTitle(i[1]),Site.Content.loadEnd(),$(this).text()==""?Site.Content.clear():Site.Links.init(this)})},error:function(e,t){$(n).html(Site.UI.template(Site.config("template_error_page"),{status:e,text:t}))},loadStart:function(){var e=$(n);e.addClass("loading"),Site.Links.disable(e)},loadEnd:function(){$(n).removeClass("loading"),Site.UI.refresh()},expand:function(e){e=e||$.noop;var t=$("#layout"),n=Site.config("layout_width_collapsed"),r=Site.config("layout_width_expanded");if(!n||!r||!t.hasClass("collapsed")||t.hasClass("expanded")||!Site.config("animation"))return t.removeClass("collapsed").addClass("expanded"),e.apply(this);t.stop(!0,!0).width(n).removeClass("collapsed").animate({width:r},{duration:Site.config("content_anim_duration"),complete:function(){$(this).removeClass("collapsed").addClass("expanded"),e.apply(this)}})},collapse:function(e){e=e||$.noop;var t=$("#layout");if(!t.hasClass("expanded")||t.hasClass("collapsed")||!Site.config("animation"))return t.removeClass("expanded").addClass("collapsed"),e.apply(t);t.stop(!0,!0).animate({width:"-="+$(n).parent().outerWidth()},{duration:Site.config("content_anim_duration"),complete:function(){$(this).removeClass("expanded").addClass("collapsed"),e.apply(this)}})},clear:function(e){e=e||$.noop,Site.Content.collapse(function(){$(n).empty(),Site.setTitle(Site.config("title")),Site.Content.loadEnd(),e.apply(this)})}}}(),Site.Links=function(){var e={all:Site.config("selector_links_all"),external:Site.config("selector_links_external"),internal:Site.config("selector_links_internal")};return{init:function(t){$(e.external,t||document.body).attr("target","_blank").addClass("link-external"),$(e.internal,t||document.body).addClass("link-internal"),Site.config("routing")&&this.startRouting(t)},startRouting:function(t){$(e.all,t||document.body).on("click",function(e){if(e.which&&e.which!=1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;Site.navigate(this)&&e.preventDefault()})},stopRouting:function(t){$(e.internal,t||document.body).off("click")},disable:function(t){var n=$(e.all,t||document.body);n.off("click").on("click",function(e){e.preventDefault()}),n.each(function(e,t){$(t).removeAttr("href")})}}}(),Site.Navigation=function(){function t(e,t){if(!Site.config("tracking")||typeof _gaq=="undefined")return!1;e||t?_gaq.push(["_trackEvent",e||"",t||""]):_gaq.push(["_trackPageview"])}function n(t){return!e.history&&!e.hashchange?(location.href=t,!1):(Site.Content.load(t),!0)}function r(e,n){var n=n||!1;t("Outbound Link",e),n&&setTimeout(function(){location.href=e},100)}function i(t,n){if(e.history){var r=[{url:t},"page",t];n||t==window.location.href||t==window.location.pathname?window.history.replaceState.apply(window.history,r):window.history.pushState.apply(window.history,r)}else e.hashchange&&(location.href="/#"+t)}var e={history:window.history&&window.history.pushState,hashchange:!1};return{init:function(){Site.Navigation.go(window.location.href,!1),e.history?window.onpopstate=function(e){e.state&&e.state.url?Site.Navigation.go(e.state.url,!0):i(window.location.pathname+window.location.hash,!0)}:e.hashchange&&(window.onhashchange=function(e){Site.Navigation.go(window.location,!0)})},go:function(e,s){var s=s||!1,o,u;typeof e=="object"&&(u=e,e=$(u).attr("href"),o=$(u).attr("target"));if(o&&o!="_self")return r(e,!1),!1;var a=Site.config("origin");e.substr(0,a.length)==a&&(e=e.substr(a.length));var f=e.split("/#/");return f.length==2&&f[0]==""&&(e="/"+f[f.length-1],s=!0),!!s||e!=window.location.href&&e!=window.location.pathname?(e.charAt(0)!="/"?r(e,!0):(n(e),i(e,s),t()),!0):e.indexOf("#")>=0?!1:!0}}}(),Site.UI=function(){return{init:function(){if(Modernizr.mq("only all and (max-device-width: 930px)"))Site.config("layout","narrow"),Site.config("animation",!1);else{var e=$(".layout-west").width(),t=$(".layout-center").width();Site.config("layout_width_collapsed",e),Site.config("layout_width_expanded",e+t)}jQuery().tipsy&&$("#navigation .my-links a").tipsy({delayIn:0,delayOut:0,fade:!1,fallback:"",gravity:"n",html:!1,live:!1,offset:2,opacity:1,title:"title",trigger:"hover"}),Site.UI.refresh()},refresh:function(){setTimeout(function(){window.scrollTo(0,0)},200)},template:function(e,t){var n,r=e,t=t||{};for(n in t)r=r.replace("<%"+n+"%>",t[n]);return r.replace(/<%[a-z_\-0-9]+%>/ig,"")}}}();