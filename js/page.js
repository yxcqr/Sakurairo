/*! For license information please see page.js.LICENSE.txt */
(self.webpackChunksakurairo_scripts=self.webpackChunksakurairo_scripts||[]).push([[768],{4689:()=>{const e=[".bili",".menhera",".tieba"];window.motionSwitch=function(t){for(let t=0;t<e.length;t++)document.querySelector(e[t]+"-bar").classList.remove("on-hover"),document.querySelector(e[t]+"-container").style.display="none";document.querySelector(t+"-bar").classList.add("on-hover"),document.querySelector(t+"-container").style.display="block"},window.grin=function(e,t,n,o){let a;switch(t){case"custom":e=n+e+o;break;case"Img":e="[img]"+e+"[/img]";break;case"Math":e=" {{"+e+"}} ";break;case"tieba":e=" ::"+e+":: ";break;default:e=" :"+e+": "}if(!document.getElementById("comment")||"textarea"!=document.getElementById("comment").type)return!1;if(a=document.getElementById("comment"),document.selection)a.focus(),sel=document.selection.createRange(),sel.text=e,a.focus();else if(a.selectionStart||"0"==a.selectionStart){let t=a.selectionStart,n=a.selectionEnd,o=n;a.value=a.value.substring(0,t)+e+a.value.substring(n,a.value.length),o+=e.length,a.focus(),a.selectionStart=o,a.selectionEnd=o}else a.value+=e,a.focus()}},9608:(e,t,n)=>{var o=n(655),a=n(8487),r=n(6420);let i;function s(){!function(){const e=document.getElementsByClassName("collapseButton");if(e.length>0){const t=e=>{(0,r.wy)(e.target.parentNode.parentNode.parentNode.querySelector(".xContent"))};for(const n of e)n.addEventListener("click",t)}}(),function(){(0,o.mG)(this,void 0,void 0,(function*(){if(mashiro_option.baguetteBoxON){i||(i=(0,a.loadCSS)("https://cdn.jsdelivr.net/npm/baguettebox.js@1.11.1/dist/baguetteBox.min.css"));const{default:e}=yield n.e(731).then(n.t.bind(n,5731,23));e.run(".entry-content",{captions:function(e){return e.getElementsByTagName("img")[0].alt},ignoreClass:"fancybox"})}else if(mashiro_option.fancybox){if(i||(i=(0,a.loadCSS)("https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css")),!(window.jQuery instanceof Function||window.$ instanceof Function)){const e=yield n.e(755).then(n.t.bind(n,9755,23));window.jQuery=e.default,window.$=e.default}n.e(155).then(n.t.bind(n,4155,23))}}))}(),function(){(0,o.mG)(this,void 0,void 0,(function*(){document.getElementsByTagName("math").length>0&&("MathJax"in window||(window.MathJax={svg:{fontCache:"global"},startup:{typeset:!1},chtml:{fontURL:"https://cdn.jsdelivr.net/npm/mathjax/es5/output/chtml/fonts/woff-v2",mathmlSpacing:!0}}),yield n.e(490).then(n.t.bind(n,2490,23)),window.MathJax.typeset())}))}()}var l=n(7648),c=n(5469),u=(n(4689),n(2642)),m=n(2568),d=n.n(m);const g=(e,t=80)=>"https://"+Poi.gravatar_url+"/"+d()(e)+".jpg?s="+t+"&d=mm";function p(){let e=!1;const t=document.querySelector("input#author"),n=document.querySelector("input#qq"),o=document.querySelector("input#email"),a=document.querySelector("input#url"),r=document.querySelector(".qq-check"),i=document.querySelector(".gravatar-check"),s=document.querySelector("div.comment-user-avatar img");if(null==t)return;localStorage.getItem("user_qq")||localStorage.getItem("user_qq_email")||localStorage.getItem("user_author")||(n.value=t.value=o.value=a.value=""),localStorage.getItem("user_avatar")&&localStorage.getItem("user_qq")&&localStorage.getItem("user_qq_email")&&(s.setAttribute("src",localStorage.getItem("user_avatar")),t.value=localStorage.getItem("user_author"),o.value=localStorage.getItem("user_qq")+"@qq.com",n.value=localStorage.getItem("user_qq"),mashiro_option.qzone_autocomplete&&(a.value="https://user.qzone.qq.com/"+localStorage.getItem("user_qq")),n.value&&(r.style.display="block",i.style.display="none"));let l=o.value;t.addEventListener("blur",(()=>{const c=t.value;if(/^[1-9]\d{4,9}$/.test(c)){const m=()=>{n.value="",r.style.display="none",i.style.display="block",s.setAttribute("src",g(o.value,80)),localStorage.setItem("user_qq",""),localStorage.setItem("user_email",o.value),localStorage.setItem("user_avatar",g(o.value,80))};fetch((0,u.Z)(mashiro_option.qq_api_url,{qq:c})).then((async u=>{if(u.ok)try{const m=await u.json();t.value=m.name,o.value=c.trim()+"@qq.com",mashiro_option.qzone_autocomplete&&(a.value="https://user.qzone.qq.com/"+c.trim()),s.setAttribute("src","https://q2.qlogo.cn/headimg_dl?dst_uin="+c+"&spec=100"),e=!0,n.value=c.trim(),n.value&&(r.style.display="block",i.style.display="none"),localStorage.setItem("user_author",m.name),localStorage.setItem("user_qq",c),localStorage.setItem("is_user_qq","yes"),localStorage.setItem("user_qq_email",c+"@qq.com"),localStorage.setItem("user_email",c+"@qq.com"),l=o.value,s.setAttribute("src",m.avatar),localStorage.setItem("user_avatar",m.avatar)}catch(e){console.warn(e),m()}else m()}))}})),localStorage.getItem("user_avatar")&&localStorage.getItem("user_email")&&"no"==localStorage.getItem("is_user_qq")&&!localStorage.getItem("user_qq_email")&&(s.setAttribute("src",localStorage.getItem("user_avatar")),o.value=localStorage.getItem("user_mail"),n.value="",n.value||(r.style.display="none",i.style.display="block")),o.addEventListener("blur",(function(){let t=o.value;0!=e&&l==t||""==t||(s.setAttribute("src",g(t,80)),localStorage.setItem("user_avatar",g(t,80)),localStorage.setItem("user_email",t),localStorage.setItem("user_qq_email",""),localStorage.setItem("is_user_qq","no"),n.value="",n.value||(r.style.display="none",i.style.display="block"))})),localStorage.getItem("user_url")&&(a.value=localStorage.getItem("user_url")),a.addEventListener("blur",(function(){let e=a.value;a.value=e,localStorage.setItem("user_url",e)})),localStorage.getItem("user_author")&&(t.value=localStorage.getItem("user_author")),t.addEventListener("blur",(function(){let e=t.value;t.value=e,localStorage.setItem("user_author",e)}))}const f={respondId:"",moveForm:function(e,t,n){const o=document.getElementById(e),a=document.getElementById(n),r=document.getElementById("cancel-comment-reply-link"),i=document.getElementById("comment_parent");if(this.respondId=n,!document.getElementById("wp-temp-form-div")){let e;e=document.createElement("div"),e.id="wp-temp-form-div",e.style.display="none",a.parentNode.insertBefore(e,a)}if(o)o.parentNode.insertBefore(a,o.nextSibling);else{const e=document.getElementById("wp-temp-form-div");document.getElementById("comment_parent").value="0",e.parentNode.insertBefore(a,e),e.remove()}const s=document.getElementById("respond");window.scrollTo({top:s.getBoundingClientRect().top+window.pageYOffset-s.clientTop-100,behavior:"smooth"}),i.value=t,r.style.display="",r.onclick=function(e){var t=f,n=document.getElementById("wp-temp-form-div"),o=document.getElementById(t.respondId);return document.getElementById("comment_parent").value="0",n&&o&&(n.parentNode.insertBefore(o,n),n.remove()),this.style.display="none",this.onclick=null,!1};try{document.getElementById("comment").focus()}catch(e){}return!1}},h=f;var y,v,_=n(2045);function w(e,t){const n={autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",design:"by Mashiro"};if(!e.children[0])return;const o=e.children[0].className;let a=o.substr(0,o.indexOf(" ")).replace("language-","");"hljs"==a.toLowerCase()&&(a=t.className.replace("hljs","")?t.className.replace("hljs",""):"text"),e.classList.add("highlight-wrap");for(const t in n)e.setAttribute(t,n[t]);t.setAttribute("data-rel",a.toUpperCase())}async function b(e,t){try{await async function(){try{window.hljs||(window.hljs=await Promise.all([n.e(857),n.e(128),n.e(980),n.e(49),n.e(82),n.e(930),n.e(529),n.e(420),n.e(223),n.e(302),n.e(587)]).then(n.bind(n,637)),await n.e(241).then(n.t.bind(n,5241,23)))}catch(e){console.warn(e)}}();for(let e=0;e<t.length;e++)hljs.highlightBlock(t[e]);for(let n=0;n<e.length;n++)w(e[n],t[n]);hljs.initLineNumbersOnLoad();const o=document.querySelector(".entry-content");o&&o.addEventListener("click",(function(e){e.target.classList.contains("highlight-wrap")&&(e.target.classList.toggle("code-block-fullscreen"),document.documentElement.classList.toggle("code-block-fullscreen-html-scroll"))}))}catch(e){console.warn(e)}}const S=null!==(y=null===(v=mashiro_option.code_highlight_prism)||void 0===v?void 0:v.autoload_path)&&void 0!==y?y:"https://cdn.jsdelivr.net/npm/prismjs@1.23.0/";let q;const E=(()=>{var e,t;const{light:n,dark:o}=null!==(e=null===(t=mashiro_option.code_highlight_prism)||void 0===t?void 0:t.theme)&&void 0!==e?e:{},a={light:null!=n?n:"themes/prism.min.css",dark:null!=o?o:"themes/prism-tomorrow.min.css"};for(const e in a)a[e]=new URL(a[e],S).toString();return a})();function I(e){const t=e?E.dark:E.light;if(q){if(q.href!==t){const e=(0,a.loadCSS)(t);e.addEventListener("load",(()=>{q.remove(),q=e}))}}else q=(0,a.loadCSS)(t)}const B=e=>{I(e.detail)};async function L(e){try{await async function(){try{window.Prism||(I((0,_.N2)()),document.addEventListener("darkmode",B),(0,a.loadCSS)(new URL("plugins/toolbar/prism-toolbar.min.css",S).toString()),(0,a.loadCSS)(new URL("plugins/previewers/prism-previewers.min.css",S).toString()),await n.e(953).then(n.bind(n,3953)),Prism.plugins.autoloader.languages_path=new URL("components/",S).toString())}catch(e){console.warn(e)}}();let t=!1,o=!1;mashiro_option.code_highlight_prism.line_number_all&&(document.querySelector(".entry-content").classList.add("line-numbers"),t=!0);for(const n of e)if(n.parentElement.classList.contains("line-numbers")&&(t=!0),n.classList.contains("match-braces")&&(o=!0,1==t))break;await Promise.all([t&&((0,a.loadCSS)(new URL("plugins/line-numbers/prism-line-numbers.min.css",S).toString()),n.e(759).then(n.t.bind(n,8759,23))),o&&((0,a.loadCSS)(new URL("plugins/match-braces/prism-match-braces.min.css",S).toString()),n.e(873).then(n.t.bind(n,7873,23)))]);for(const t of e)Prism.highlightElement(t);Prism.plugins.fileHighlight&&Prism.plugins.fileHighlight.highlight()}catch(e){console.warn(e)}}var T=n(6996);async function k(){const e=document.getElementsByTagName("pre"),t=document.querySelectorAll("pre code");if(e.length){switch(mashiro_option.code_highlight){case"hljs":await b(e,t);break;case"prism":await L(t);break;case"custom":return;default:console.warn(`mashiro_option.code_highlight这咋填的是个${mashiro_option.code_highlight}啊🤔`)}if(t.length>0){for(let e=0;e<t.length;e++)t[e].setAttribute("id","code-block-"+e),t[e].insertAdjacentHTML("afterend",'<a class="copy-code" href="javascript:" data-clipboard-target="#code-block-'+e+'" title="'+(0,T.__)("拷贝代码")+'"><i class="fa fa-clipboard" aria-hidden="true"></i>');const{default:e}=await n.e(152).then(n.t.bind(n,2152,23));new e(".copy-code")}}}function x(){document.getElementsByClassName("comment_inline_img").length&&document.getElementsByClassName("comments-main")[0].addEventListener("click",(function(e){e.target.classList.contains("comment_inline_img")&&window.open(e.target.src)}))}function j(){document.getElementsByClassName("emoji-item").length&&document.querySelector(".menhera-container").addEventListener("click",(function(e){e.target.classList.contains("emoji-item")&&grin(e.target.innerText,"custom","`","` ")}))}function C(){const e="commentwrap",t=document.getElementById("commentform");if(t){let n=!1;t.addEventListener("submit",(function(t){if(t.stopPropagation(),t.preventDefault(),n)return;const o=(0,c.f)((0,T.__)("提交中...."),!0),a=new FormData(this);a.append("action","ajax_comment"),n=!0,fetch(Poi.ajaxurl,{method:this.attributes.method.value,body:a}).then((async t=>{const n=await t.text();if(t.ok){Array.from(document.getElementsByTagName("textarea")).forEach((e=>e.value=""));const t=document.getElementById("cancel-comment-reply-link"),o=document.getElementById("wp-temp-form-div"),a=document.getElementById(h.respondId);"0"!=document.getElementById("comment_parent").value?document.getElementById("respond").insertAdjacentHTML("beforebegin",'<ol class="children">'+n+"</ol>"):document.getElementsByClassName(e).length?"asc"==Poi.order?document.getElementsByClassName("commentwrap")[1].insertAdjacentHTML("beforeend",n):document.getElementsByClassName("commentwrap")[1].insertAdjacentHTML("afterbegin",n):"bottom"==Poi.formpostion?document.getElementById("respond").insertAdjacentHTML("beforebegin",'<ol class="'+e+'">'+n+"</ol>"):document.getElementById("respond").insertAdjacentHTML("afterend",'<ol class="'+e+'">'+n+"</ol>"),(0,c.f)((0,T.__)("提交成功")),document.dispatchEvent(new CustomEvent("ajax_comment_complete")),t.style.display="none",t.onclick=null,document.getElementById("comment_parent").value="0",o&&a&&(o.parentNode.insertBefore(a,o),o.remove())}else(0,c.f)(null!=n?n:"HTTP"+t.status+":"+t.statusText)})).catch((e=>{(0,c.f)(e)})).finally((()=>{o.remove(),n=!1}))}))}}function A(){let e=document.getElementsByClassName("sm"),t=document.querySelector(".comments-main");e.length&&("new"==Poi.reply_link_version&&t&&t.addEventListener("click",(function(e){if(e.target.classList.contains("comment-reply-link")){e.preventDefault(),e.stopPropagation();let t=e.target.getAttribute("data-commentid");h.moveForm("comment-"+t,t,"respond",this.getAttribute("data-postid"))}})),t&&t.addEventListener("click",(e=>{let t=e.target.parentNode;if(t.classList.contains("sm")){if(1==confirm("您真的要设为私密吗？")){if(t.classList.contains("private_now"))return alert("您之前已设过私密评论"),!1;{t.classList.add("private_now");let e=t.getAttribute("data-idp"),n=t.getAttribute("data-actionp"),o=t.getElementsByClassName("has_set_private")[0],a="action=siren_private&p_id="+e+"&p_action="+n,r=new XMLHttpRequest;return r.onreadystatechange=function(){4==this.readyState&&200==this.status&&(o.innerHTML=r.responseText)},r.open("POST","/wp-admin/admin-ajax.php",!0),r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.send(a),!1}}alert("已取消")}})))}function N(){const e=document.querySelector(".toc-container"),t=document.querySelector(".site-content");if(e&&t){const n=()=>{e.style.height=(0,r.VV)(t.getBoundingClientRect().height,document.documentElement.offsetHeight-e.offsetTop)+"px"};n(),window.addEventListener("resize",n,{passive:!0})}}function H(e){if(!(document.body.clientWidth<=1200))if(document.querySelector("div.have-toc")||document.querySelector("div.has-toc")){if(e&&document.getElementsByClassName("toc").length>0){let e=1,t="sakura"==mashiro_option.entry_content_theme?document.querySelector("article.type-post")?document.querySelector("div.pattern-attachment-img")?-75:200:375:window.innerHeight/2,o=document.querySelectorAll(".entry-content,.links");for(let t=0;t<o.length;t++){let n=o[t].querySelectorAll("h1,h2,h3,h4,h5");for(let t=0;t<n.length;t++)n[t].id="toc-head-"+e,e++}n.e(866).then(n.t.bind(n,2866,23)).then((({default:e})=>{e.init({tocSelector:".toc",contentSelector:[".entry-content",".links"],headingSelector:"h1, h2, h3, h4, h5",headingsOffset:t-window.innerHeight/2})}))}}else{let e=document.getElementsByClassName("toc-container")[0];e&&(e.remove(),e=null)}}function M(){let e=document.getElementById("emotion-toggle");e&&e.addEventListener("click",(function(){document.querySelector(".emotion-toggle-off").classList.toggle("emotion-hide"),document.querySelector(".emotion-toggle-on").classList.toggle("emotion-show"),document.querySelector(".emotion-box").classList.toggle("emotion-box-show")}))}function P(){const e=document.querySelector(".form-submit #submit");if(null==e)return;if(!mashiro_option.comment_upload_img)return void(e.style.width="100%");e.insertAdjacentHTML("afterend",'<div class="insert-image-tips popup"><i class="fa fa-picture-o" aria-hidden="true"></i><span class="insert-img-popuptext" id="uploadTipPopup">上传图片</span></div><input id="upload-img-file" type="file" accept="image/*" multiple="multiple" class="insert-image-button">'),function(){let e=document.getElementsByClassName("insert-image-tips")[0],t=document.getElementById("upload-img-file");t&&t.addEventListener("change",(function(){if(this.files.length>10)return(0,c.f)((0,T.__)("每次上传上限为10张")),0;for(let e=0;e<this.files.length;e++)if(this.files[e].size>=5242880)return void alert((0,T._$)("图片上传大小限制为5 MB\n\n「{0}」\n\n这张图太大啦~请重新上传噢！",this.files[e].name));for(let t=0;t<this.files.length;t++){let n=this.files[t],o=new FormData,a=new XMLHttpRequest;o.append("cmt_img_file",n),a.addEventListener("loadstart",(function(){e.innerHTML='<i class="fa fa-spinner rotating" aria-hidden="true"></i>',(0,c.f)((0,T.__)("上传中..."))})),a.open("POST",buildAPI(Poi.api+"sakura/v1/image/upload"),!0),a.send(o),a.onreadystatechange=function(){if(4!=a.readyState||200!=a.status&&304!=a.status)4==a.readyState&&(e.innerHTML='<i class="fa fa-times" aria-hidden="true" style="color:red"></i>',alert((0,T.__)("上传失败，请重试.")),setTimeout((function(){e.innerHTML='<i class="fa fa-picture-o" aria-hidden="true"></i>'}),1e3));else{e.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>',setTimeout((function(){e.innerHTML='<i class="fa fa-picture-o" aria-hidden="true"></i>'}),1e3);let t=JSON.parse(a.responseText);if(200==t.status){let e=t.proxy;document.getElementById("upload-img-show").insertAdjacentHTML("afterend",'<img class="lazyload upload-image-preview" src="https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/vision/theme/colorful/load/inload.svg" data-src="'+e+'" onclick="window.open(\''+e+'\')" onerror="imgError(this)" />'),(0,l.m)(),(0,c.f)((0,T.__)("图片上传成功~")),grin(e,type="Img")}else(0,c.f)((0,T._$)("上传失败！\n文件名: {0}\ncode: {1}\n{2}",n.name,t.status,t.message),3e3)}}}}))}();const t=document.getElementById("upload-img-file"),n=document.getElementsByClassName("insert-image-tips")[0],o=document.getElementById("uploadTipPopup");t&&(t.addEventListener("mouseenter",(function(){n.classList.toggle("insert-image-tips-hover"),o.classList.toggle("show")})),t.addEventListener("mouseleave",(function(){n.classList.toggle("insert-image-tips-hover"),o.classList.toggle("show")})))}function R(){(0,l.m)(),k(),x(),document.getElementById("upload-img-show").innerHTML=""}function O(){s(),A()}window.addEventListener("popstate",O),x(),k(),A(),j(),M(),H(!0),document.querySelectorAll(".comt-addsmilies").forEach((e=>{e.addEventListener("click",(()=>{"block"==e.stlye.display?e.style.display="none":e.style.display="block"}))})),document.querySelectorAll(".comt-smilies a").forEach((e=>{e.addEventListener("click",(()=>{e.parentNode.style.display="none"}))})),document.addEventListener("ajax_comment_complete",R),document.addEventListener("pjax:complete",(function(){try{P(),s(),H(!0),x(),p(),A(),j(),k(),M(),C(),N()}catch(e){console.warn(e)}})),(0,r.Cd)((function(){s(),C(),document.body.addEventListener("click",(function(e){if(e.target.parentNode==document.getElementById("comments-navi")&&"a"==e.target.nodeName.toLowerCase()){e.preventDefault(),e.stopPropagation();let t=e.target,n=t.pathname,o=new XMLHttpRequest;o.open("GET",t.getAttribute("href"),!0),o.responseType="document",o.onloadstart=()=>{let e=document.getElementById("comments-navi"),t=document.querySelector("ul.commentwrap"),n=document.getElementById("loading-comments"),o=document.getElementById("comments-list-title");e.remove(),t.remove(),n.style.display="block",(0,r.wy)(n,500,"show"),window.scrollTo({top:o.getBoundingClientRect().top+window.pageYOffset-o.clientTop-65,behavior:"smooth"})},o.onreadystatechange=function(){if(4==o.readyState&&200==o.status){let e=o.response,t=e.querySelector("ul.commentwrap"),a=e.getElementById("comments-navi"),i=document.getElementById("loading-comments");(0,r.wy)(i,200,"hide"),document.getElementById("loading-comments").insertAdjacentHTML("afterend",t.outerHTML),document.querySelector("ul.commentwrap").insertAdjacentHTML("afterend",a.outerHTML),(0,l.m)(),window.gtag&&gtag("config",Poi.google_analytics_id,{page_path:n}),k(),x();let s=document.querySelector("ul.commentwrap");window.scrollTo({top:s&&s.getBoundingClientRect().top+window.pageYOffset-s.clientTop-200,behavior:"smooth"})}},o.send()}})),p(),P(),N()}))},487:e=>{var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=t},1012:e=>{var t,n;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,o=0;n<e.length;n++,o+=8)t[o>>>5]|=e[n]<<24-o%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],o=0;o<e.length;o+=3)for(var a=e[o]<<16|e[o+1]<<8|e[o+2],r=0;r<4;r++)8*o+6*r<=8*e.length?n.push(t.charAt(a>>>6*(3-r)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],o=0,a=0;o<e.length;a=++o%4)0!=a&&n.push((t.indexOf(e.charAt(o-1))&Math.pow(2,-2*a+8)-1)<<2*a|t.indexOf(e.charAt(o))>>>6-2*a);return n}},e.exports=n},8738:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},2568:(e,t,n)=>{var o,a,r,i,s;o=n(1012),a=n(487).utf8,r=n(8738),i=n(487).bin,(s=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?i.stringToBytes(e):a.stringToBytes(e):r(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var n=o.bytesToWords(e),l=8*e.length,c=1732584193,u=-271733879,m=-1732584194,d=271733878,g=0;g<n.length;g++)n[g]=16711935&(n[g]<<8|n[g]>>>24)|4278255360&(n[g]<<24|n[g]>>>8);n[l>>>5]|=128<<l%32,n[14+(l+64>>>9<<4)]=l;var p=s._ff,f=s._gg,h=s._hh,y=s._ii;for(g=0;g<n.length;g+=16){var v=c,_=u,w=m,b=d;c=p(c,u,m,d,n[g+0],7,-680876936),d=p(d,c,u,m,n[g+1],12,-389564586),m=p(m,d,c,u,n[g+2],17,606105819),u=p(u,m,d,c,n[g+3],22,-1044525330),c=p(c,u,m,d,n[g+4],7,-176418897),d=p(d,c,u,m,n[g+5],12,1200080426),m=p(m,d,c,u,n[g+6],17,-1473231341),u=p(u,m,d,c,n[g+7],22,-45705983),c=p(c,u,m,d,n[g+8],7,1770035416),d=p(d,c,u,m,n[g+9],12,-1958414417),m=p(m,d,c,u,n[g+10],17,-42063),u=p(u,m,d,c,n[g+11],22,-1990404162),c=p(c,u,m,d,n[g+12],7,1804603682),d=p(d,c,u,m,n[g+13],12,-40341101),m=p(m,d,c,u,n[g+14],17,-1502002290),c=f(c,u=p(u,m,d,c,n[g+15],22,1236535329),m,d,n[g+1],5,-165796510),d=f(d,c,u,m,n[g+6],9,-1069501632),m=f(m,d,c,u,n[g+11],14,643717713),u=f(u,m,d,c,n[g+0],20,-373897302),c=f(c,u,m,d,n[g+5],5,-701558691),d=f(d,c,u,m,n[g+10],9,38016083),m=f(m,d,c,u,n[g+15],14,-660478335),u=f(u,m,d,c,n[g+4],20,-405537848),c=f(c,u,m,d,n[g+9],5,568446438),d=f(d,c,u,m,n[g+14],9,-1019803690),m=f(m,d,c,u,n[g+3],14,-187363961),u=f(u,m,d,c,n[g+8],20,1163531501),c=f(c,u,m,d,n[g+13],5,-1444681467),d=f(d,c,u,m,n[g+2],9,-51403784),m=f(m,d,c,u,n[g+7],14,1735328473),c=h(c,u=f(u,m,d,c,n[g+12],20,-1926607734),m,d,n[g+5],4,-378558),d=h(d,c,u,m,n[g+8],11,-2022574463),m=h(m,d,c,u,n[g+11],16,1839030562),u=h(u,m,d,c,n[g+14],23,-35309556),c=h(c,u,m,d,n[g+1],4,-1530992060),d=h(d,c,u,m,n[g+4],11,1272893353),m=h(m,d,c,u,n[g+7],16,-155497632),u=h(u,m,d,c,n[g+10],23,-1094730640),c=h(c,u,m,d,n[g+13],4,681279174),d=h(d,c,u,m,n[g+0],11,-358537222),m=h(m,d,c,u,n[g+3],16,-722521979),u=h(u,m,d,c,n[g+6],23,76029189),c=h(c,u,m,d,n[g+9],4,-640364487),d=h(d,c,u,m,n[g+12],11,-421815835),m=h(m,d,c,u,n[g+15],16,530742520),c=y(c,u=h(u,m,d,c,n[g+2],23,-995338651),m,d,n[g+0],6,-198630844),d=y(d,c,u,m,n[g+7],10,1126891415),m=y(m,d,c,u,n[g+14],15,-1416354905),u=y(u,m,d,c,n[g+5],21,-57434055),c=y(c,u,m,d,n[g+12],6,1700485571),d=y(d,c,u,m,n[g+3],10,-1894986606),m=y(m,d,c,u,n[g+10],15,-1051523),u=y(u,m,d,c,n[g+1],21,-2054922799),c=y(c,u,m,d,n[g+8],6,1873313359),d=y(d,c,u,m,n[g+15],10,-30611744),m=y(m,d,c,u,n[g+6],15,-1560198380),u=y(u,m,d,c,n[g+13],21,1309151649),c=y(c,u,m,d,n[g+4],6,-145523070),d=y(d,c,u,m,n[g+11],10,-1120210379),m=y(m,d,c,u,n[g+2],15,718787259),u=y(u,m,d,c,n[g+9],21,-343485551),c=c+v>>>0,u=u+_>>>0,m=m+w>>>0,d=d+b>>>0}return o.endian([c,u,m,d])})._ff=function(e,t,n,o,a,r,i){var s=e+(t&n|~t&o)+(a>>>0)+i;return(s<<r|s>>>32-r)+t},s._gg=function(e,t,n,o,a,r,i){var s=e+(t&o|n&~o)+(a>>>0)+i;return(s<<r|s>>>32-r)+t},s._hh=function(e,t,n,o,a,r,i){var s=e+(t^n^o)+(a>>>0)+i;return(s<<r|s>>>32-r)+t},s._ii=function(e,t,n,o,a,r,i){var s=e+(n^(t|~o))+(a>>>0)+i;return(s<<r|s>>>32-r)+t},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=o.wordsToBytes(s(e,t));return t&&t.asBytes?n:t&&t.asString?i.bytesToString(n):o.bytesToHex(n)}}},e=>{var t;t=9608,e(e.s=t)}]);
//# sourceMappingURL=page.js.map