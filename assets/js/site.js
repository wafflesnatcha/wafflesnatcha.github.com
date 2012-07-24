String.prototype._template=function(a){var b,c=this;a=a||{};for(b in a)a.hasOwnProperty(b)&&(c=c.replace("<%"+b+"%>",a[b]));return c.replace(/<%.+?%>/ig,"")},function(a){function c(c){function h(){var a=new Date;return a.getDate()!=d.getDate()||a.getYear()!=d.getYear()||a.getMonth()!=d.getMonth()?" - "+b[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear():""}var d=new Date(c);a.browser.msie&&(d=Date.parse((""+c).replace(/( \+)/," UTC$1")));var e="",f=function(){var a=d.getHours();return a>0&&a<13?(e="am",a):a<1?(e="am",12):(e="pm",a-12)}(),g=d.getMinutes();return f+":"+g+e+h()}function d(b){var d=new Date,e=new Date(b);a.browser.msie&&(e=Date.parse((""+b).replace(/( \+)/," UTC$1")));var f=d-e,g=1e3,h=g*60,i=h*60,j=i*24;return isNaN(f)||f<0?"":f<g*2?"right now":f<h?Math.floor(f/g)+" seconds ago":f<h*2?"about 1 minute ago":f<i?Math.floor(f/h)+" minutes ago":f<i*2?"about 1 hour ago":f<j?Math.floor(f/i)+" hours ago":f>j&&f<j*2?"yesterday":f<j*365?Math.floor(f/j)+" days ago":c(b)}var b=["January","February","March","April","May","June","July","August","September","October","November","December"];a.extend({date:{absolute:c,relative:d}})}(jQuery),function(a){function b(a,b){return typeof a=="function"?a.call(b):a}function c(a){while(a=a.parentNode)if(a==document)return!0;return!1}function d(b,c){this.$element=a(b),this.options=c,this.enabled=!0,this.fixTitle()}d.prototype={show:function(){var c=this.getTitle();if(c&&this.enabled){var d=this.tip();d.find(".tipsy-inner")[this.options.html?"html":"text"](c),d[0].className="tipsy",d.remove().css({top:0,left:0,visibility:"hidden",display:"block",position:this.options.fixed?"fixed":"absolute"}).prependTo(document.body);var e=a.extend({},this.options.fixed?this.$element.position():this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight}),f=d[0].offsetWidth,g=d[0].offsetHeight,h=b(this.options.gravity,this.$element[0]),i;switch(h.charAt(0)){case"n":i={top:e.top+e.height+this.options.offset,left:e.left+e.width/2-f/2};break;case"s":i={top:e.top-g-this.options.offset,left:e.left+e.width/2-f/2};break;case"e":i={top:e.top+e.height/2-g/2,left:e.left-f-this.options.offset};break;case"w":i={top:e.top+e.height/2-g/2,left:e.left+e.width+this.options.offset}}h.length==2&&(h.charAt(1)=="w"?i.left=e.left+e.width/2-15:i.left=e.left+e.width/2-f+15),d.css(i).addClass("tipsy-"+h),d.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+h.charAt(0),this.options.className&&d.addClass(b(this.options.className,this.$element[0])),this.options.fade?d.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity}):d.css({visibility:"visible",opacity:this.options.opacity})}},hide:function(){this.options.fade?this.tip().stop().fadeOut(function(){a(this).remove()}):this.tip().remove()},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("original-title")!="string")&&a.attr("original-title",a.attr("title")||"").removeAttr("title")},getTitle:function(){var a,b=this.$element,c=this.options;this.fixTitle();var a,c=this.options;return typeof c.title=="string"?a=b.attr(c.title=="title"?"original-title":c.title):typeof c.title=="function"&&(a=c.title.call(b[0])),a=(""+a).replace(/(^\s*|\s*$)/,""),a||c.fallback},tip:function(){return this.$tip||(this.$tip=a('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'),this.$tip.data("tipsy-pointee",this.$element[0])),this.$tip},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled}},a.fn.tipsy=function(b){function e(c){var e=a.data(c,"tipsy");return e||(e=new d(c,a.fn.tipsy.elementOptions(c,b)),a.data(c,"tipsy",e)),e}function f(){var a=e(this);a.hoverState="in",b.delayIn==0?a.show():(a.fixTitle(),setTimeout(function(){a.hoverState=="in"&&a.show()},b.delayIn))}function g(){var a=e(this);a.hoverState="out",b.delayOut==0?a.hide():setTimeout(function(){a.hoverState=="out"&&a.hide()},b.delayOut)}if(b===!0)return this.data("tipsy");if(typeof b=="string"){var c=this.data("tipsy");return c&&c[b](),this}b=a.extend({},a.fn.tipsy.defaults,b),b.live||this.each(function(){e(this)});if(b.trigger!="manual"){var h=b.live?"live":"bind",i=b.trigger=="hover"?"mouseenter":"focus",j=b.trigger=="hover"?"mouseleave":"blur";this[h](i,f)[h](j,g)}return this},a.fn.tipsy.defaults={className:null,delayIn:0,delayOut:0,fade:!1,fallback:"",gravity:"n",html:!1,live:!1,offset:0,opacity:.8,title:"title",trigger:"hover"},a.fn.tipsy.revalidate=function(){a(".tipsy").each(function(){var b=a.data(this,"tipsy-pointee");(!b||!c(b))&&a(this).remove()})},a.fn.tipsy.elementOptions=function(b,c){return a.metadata?a.extend({},c,a(b).metadata()):c},a.fn.tipsy.autoNS=function(){return a(this).offset().top>a(document).scrollTop()+a(window).height()/2?"s":"n"},a.fn.tipsy.autoWE=function(){return a(this).offset().left>a(document).scrollLeft()+a(window).width()/2?"e":"w"},a.fn.tipsy.autoBounds=function(b,c){return function(){var d={ns:c[0],ew:c.length>1?c[1]:!1},e=a(document).scrollTop()+b,f=a(document).scrollLeft()+b,g=a(this);return g.offset().top<e&&(d.ns="n"),g.offset().left<f&&(d.ew="w"),a(window).width()+a(document).scrollLeft()-g.offset().left<b&&(d.ew="e"),a(window).height()+a(document).scrollTop()-g.offset().top<b&&(d.ns="s"),d.ns+(d.ew?d.ew:"")}}}(jQuery);var Site=function(){var a={animation:!0,content_anim_duration:300,index_page:"index.html",routing:!0,title:"",url:"",tracking:!0,layout:null,origin:location.protocol+"//"+location.host,template_error_page:['<article class="page-error">','<h1 class="page-title">','<span class="page-title"><%status%></span>',"</h1>",'<div class="page-body">',"<p><%text%></p>","</div>","</article>"].join("\n")};return{init:function(a){var b;if(typeof a=="object")for(b in a)a.hasOwnProperty(b)&&Site.config(b,a[b]);Site.UI.init(),Site.Links.init(),Site.Navigation.init(),Site.config("layout")||Site.Me.init()},config:function(b,c){return b?(arguments.length>1&&(a[b]=c),a[b]):a},loadEnd:function(){setTimeout(function(){window.scrollTo(0,0)},100)},navigate:function(a){return Site.Navigation.go(a)},setTitle:function(a){return a&&$(document).prop("title",a),$(document).prop("title")}}}();Site.Content=function(){var a,b=/<title>(.*)<\/title>/i,c="#content";return{load:function(d,e){a&&a.abort&&a.abort();if(!d||d=="/"||d=="/"+Site.config("index_page")){Site.Content.clear();return}this.loadStart(),this.expand(),a=$(c).load(d+" #content > *",function(a,c,d){c=="error"&&Site.Content.error(d.status,d.statusText);var f=b.exec(a);f&&f.length>1&&Site.setTitle(f[1]),Site.Content.loadEnd(),$(this).text()==""?Site.Content.clear():Site.Links.init(this),(e||$.noop).apply(this)})},error:function(a,b){var d=Site.config("template_error_page")||"";$(c).html(d._templatee({status:a,text:b}))},loadStart:function(){var a=$(c);a.addClass("loading"),Site.Links.disable(a)},loadEnd:function(){$(c).removeClass("loading"),Site.UI.refresh()},expand:function(a){var b=$("#layout"),c=function(){return b.addClass("expanded").removeClass("collapsed"),(a||$.noop).apply(this)};if(!b.hasClass("collapsed")||b.hasClass("expanded")||!Site.config("animation"))return c();b.stop(!0,!0).width(Site.config("layout_width_collapsed")).removeClass("collapsed").animate({width:Site.config("layout_width_expanded")},{duration:Site.config("content_anim_duration"),complete:c})},collapse:function(a){var b=$("#layout"),c=function(){return b.addClass("collapsed").removeClass("expanded"),(a||$.noop).apply(this)};if(!b.hasClass("expanded")||b.hasClass("collapsed")||!Site.config("animation"))return c();b.stop(!0,!0).width(Site.config("layout_width_expanded")).removeClass("expanded").animate({width:Site.config("layout_width_collapsed")},{duration:Site.config("content_anim_duration"),complete:c})},clear:function(a){a=a||$.noop,Site.Content.collapse(function(){$(c).empty(),Site.setTitle(Site.config("title")),Site.Content.loadEnd(),a.apply(this)})}}}(),Site.Links=function(){var a={all:"a",internal:'a[href^="/"]',external:['a[rel="external"]','a[href^="http://"]:not([href^="http://'+location.host+'"])"','a[href^="https://"]:not([href^="https://'+location.host+'"])'].join(",")};return{init:function(b){$(a.external,b||document.body).attr("target","_blank").addClass("link-external"),$(a.internal,b||document.body).addClass("link-internal"),Site.config("routing")&&this.startRouting(b)},startRouting:function(b){$(a.all,b||document.body).on("click",function(a){if(a.which&&a.which!=1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey)return;Site.navigate(this)&&a.preventDefault()})},stopRouting:function(b){$(a.internal,b||document.body).off("click")},disable:function(b){var c=$(a.all,b||document.body);c.off("click").on("click",function(a){a.preventDefault()}),c.each(function(a,b){$(b).removeAttr("href")})}}}(),Site.Navigation=function(){function b(a,b){Site.config("tracking")&&typeof _gaq!="undefined"&&(a||b?_gaq.push(["_trackEvent",a||"",b||""]):_gaq.push(["_trackPageview"]))}function c(c){return!a.history&&!a.hashchange?(location.href=c,!1):(Site.Content.load(c,function(){b()}),!0)}function d(a,c){var c=c||!1;b("Outbound Link",a),c&&setTimeout(function(){location.href=a},100)}function e(b,c){if(a.history){var d=[{url:b},"page",b];c||b==window.location.href||b==window.location.pathname?window.history.replaceState.apply(window.history,d):window.history.pushState.apply(window.history,d)}else a.hashchange&&(location.href="/#"+b)}var a={history:window.history&&window.history.pushState,hashchange:!1};return{init:function(){Site.Navigation.go(window.location.href,!1),a.history?window.onpopstate=function(a){a.state&&a.state.url?Site.Navigation.go(a.state.url,!0):e(window.location.pathname+window.location.hash,!0)}:a.hashchange&&(window.onhashchange=function(a){Site.Navigation.go(window.location,!0)})},go:function(a,b){var b=b||!1,f,g;typeof a=="object"&&(g=a,a=$(g).attr("href"),f=$(g).attr("target"));if(f&&f!="_self")return d(a,!1),!1;var h=Site.config("origin");a.substr(0,h.length)==h&&(a=a.substr(h.length));var i=a.split("/#/");return i.length==2&&i[0]==""&&(a="/"+i[i.length-1],b=!0),!!b||a!=window.location.href&&a!=window.location.pathname?(a.charAt(0)!="/"?d(a,!0):(c(a),e(a,b)),!0):a.indexOf("#")>=0?!1:!0}}}(),Site.UI=function(){return{init:function(){if(Modernizr.mq("only all and (max-device-width: 930px)"))Site.config("layout","mobile"),Site.config("animation",!1);else{var a=$(".layout-west").width(),b=$(".layout-center").width();Site.config("layout_width_collapsed",a),Site.config("layout_width_expanded",a+b)}Site.UI.refresh()},refresh:function(){Site.config("layout")=="mobile"&&setTimeout(function(){window.scrollTo(0,0)},200),jQuery().tipsy&&$("#content *[title]:not([original-title])").tipsy({gravity:$.fn.tipsy.autoNS,opacity:1})}}}(),Site.Me=function(){var a=!1,b=[];return{init:function(){if(b.length>0){var c;while(c=b.pop())c.init.call(this)}a=!0},register:function(c){a?c.init.call(this):b.indexOf(c)===-1&&b.push(c)}}}(),Site.Me.Github=function(){function g(a){var g=Site.config("github_user"),h=Site.config("github_limit")||3;$.getJSON(b._template({user:g,count:h}),function(b,i){if(i!="success")return c="";var j,k=b.data,l=k.length,m="";for(j=0;j<l&&j<h;j++){if(!f[k[j].type]){h++;continue}m+=e._template({date:$.date.relative(k[j].created_at),message:f[k[j].type]._template({type:k[j].type,repo:k[j].repo?k[j].repo.name:"",branch:k[j].payload?k[j].payload.ref.replace(/^.+?\/([^\/]+)$/,"$1"):""})})}c=d._template({user:g,items:m}),(a||$.noop).call(this,c)})}var a=".my-links a.github-link",b="https://api.github.com/users/<%user%>/events/public?callback=?",c="",d=["<h3>GitHub <span>Recent Activity</span></h3>","<ul>","<%items%>","</ul>"].join("\n"),e=["<li>","<p><%message%></p>",'<span class="event-date"><%date%></span>',"</li>"].join("\n"),f={PushEvent:"Pushed to <%branch%> at <b><%repo%></b>",ForkEvent:"Forked <b><%repo%></b>",WatchEvent:"Started watching <b><%repo%></b>"};return{init:function(){if(!jQuery().tipsy||!Site.config("github_user"))return;$(a).tipsy({className:"tipsy-list github-activity",fallback:"github",gravity:"nw",html:!0,opacity:1,fixed:!0,title:function(){return c}}),g(function(b){$(a).data("tipsy").tip().find(".tipsy-inner").html(b)})}}}(),Site.Me.register(Site.Me.Github),Site.Me.Lastfm=function(){function f(a,b){typeof b=="string"&&(b=[b]);if(a&&a.image){var c,d,e=a.image.length;while(b.length>0){c=b.shift();for(d=0;d<e;d++)if(a.image[d].size==c&&a.image[d]["#text"]!="")return'<img src="'+a.image[d]["#text"]+'">'}}return'<div class="missing-artwork"><span>?</span></div>'}function g(a){var g=Site.config("lastfm_user"),h=Site.config("lastfm_limit")||3,i=Site.config("lastfm_api_key");$.getJSON(b._template({user:g,limit:h,api_key:i}),function(b,i){if(i!="success")return c="";var j,k,l=b.recenttracks.track,m=l.length,n="";for(k=0;k<m&&k<h;k++)j=l[k],n+=e._template({date:j.date&&j.date.uts?$.date.relative(parseInt(j.date.uts)*1e3):'<span class="now-playing">Now playing</span>',artwork:f(j,["medium","small"]),track:j.name,artist:j.artist?j.artist["#text"]:"",album:j.album?j.album["#text"]:""});c=d._template({user:g,items:n}),(a||$.noop).call(this,c)})}var a=".my-links a.lastfm-link",b="http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=<%user%>&api_key=<%api_key%>&limit=<%limit%>&format=json&callback=?",c="",d=["<h3>Last.fm <span>Recent Tracks</span></h3>","<ul>","<%items%>","</ul>"].join("\n"),e=["<li>",'<div class="track-artwork"><%artwork%></div>','<div class="track-info">','<span class="track-name"><%track%></span>','<span class="track-artist"><span>by</span> <%artist%></span>',"</div>",'<span class="event-date"><%date%></span>',"</li>"].join("\n");return{init:function(){if(!jQuery().tipsy||!Site.config("lastfm_user"))return;$(a).tipsy({className:"tipsy-list lastfm-recent",fallback:"last.fm",gravity:"nw",html:!0,opacity:1,fixed:!0,title:function(){return c}}),g(function(b){$(a).data("tipsy").tip().find(".tipsy-inner").html(b)})}}}(),Site.Me.register(Site.Me.Lastfm),Site.Me.Twitter=function(){function f(a){var f=Site.config("lastfm_user"),g=Site.config("lastfm_limit")||3;$.getJSON(b._template({user:f,limit:g}),function(b,h){if(h!="success")return c="";var i,j=b.length,k="";for(i=0;i<j&&i<g;i++)k+=e._template({date:$.date.relative(b[i].created_at),text:b[i].text});c=d._template({user:f,items:k}),(a||$.noop).call(this,c)})}var a=".my-links a.twitter-link",b="http://api.twitter.com/1/statuses/user_timeline.json?screen_name=<%user%>&count=<%limit%>&callback=?",c="",d=["<h3>Twitter <span>@<%user%></span></h3>","<ul>","<%items%>","</ul>"].join("\n"),e=["<li>",'<p class="tweet-text"><%text%></p>','<span class="event-date"><%date%></span>',"</li>"].join("\n");return{init:function(){if(!jQuery().tipsy||!Site.config("twitter_user"))return;$(a).tipsy({className:"tipsy-list twitter-timeline",fallback:"twitter",gravity:"nw",html:!0,opacity:1,fixed:!0,title:function(){return c}}),f(function(b){$(a).data("tipsy").tip().find(".tipsy-inner").html(b)})}}}(),Site.Me.register(Site.Me.Twitter);