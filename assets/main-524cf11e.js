class L{constructor(e){this.properties=e??[]}get(e){const r=this.properties.filter(n=>n.name===e).map(n=>n.value);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,r){const n=this.get(e);if(n!==void 0){if(r!=="json"&&typeof n!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return n}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,r){const n=this.get(e);if(n===void 0)throw new Error('Property "'+e+'" is missing');if(r!=="json"&&typeof n!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return n}getType(e){const r=this.properties.filter(n=>n.name===e).map(n=>n.type);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}}const I="https://cdn.jsdelivr.net/npm/@workadventure/scripting-api-extra@1.6.0/dist";class oe{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new L(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function U(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(I+"/configuration.html"+e,!0)}async function se(t,e){const r=await WA.room.getTiledMap(),n=new Map;return J(r.layers,n,t,e),n}function J(t,e,r,n){for(const o of t)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(r&&o.name!==r||n&&!n.includes(s.name))continue;e.set(s.name,new oe(s))}}else o.type==="group"&&J(o.layers,e,r,n)}let V;async function T(){return V===void 0&&(V=ae()),V}async function ae(){return ie(await WA.room.getTiledMap())}function ie(t){const e=new Map;return Q(t.layers,"",e),e}function Q(t,e,r){for(const n of t)n.type==="group"?Q(n.layers,e+n.name+"/",r):(n.name=e+n.name,r.set(n.name,n))}async function F(){const t=await T(),e=[];for(const r of t.values())if(r.type==="objectgroup")for(const n of r.objects)(n.type==="area"||n.class==="area")&&e.push(n);return e}function ue(t){let e=1/0,r=1/0,n=0,o=0;const s=t.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let a=0;a<t.height;a++)for(let i=0;i<t.width;i++)s[i+a*t.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),r=Math.min(r,a),n=Math.max(n,a));return{top:r,left:e,right:o+1,bottom:n+1}}function Z(t){let e=1/0,r=1/0,n=0,o=0;for(const s of t){const a=ue(s);a.left<e&&(e=a.left),a.top<r&&(r=a.top),a.right>o&&(o=a.right),a.bottom>n&&(n=a.bottom)}return{top:r,left:e,right:o,bottom:n}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ce=Object.prototype.toString,P=Array.isArray||function(e){return ce.call(e)==="[object Array]"};function _(t){return typeof t=="function"}function le(t){return P(t)?"array":typeof t}function j(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function N(t,e){return t!=null&&typeof t=="object"&&e in t}function fe(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var pe=RegExp.prototype.test;function ge(t,e){return pe.call(t,e)}var he=/\S/;function ye(t){return!ge(he,t)}var de={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function me(t){return String(t).replace(/[&<>"'`=\/]/g,function(r){return de[r]})}var be=/\s*/,ve=/\s+/,q=/\s*=/,Ae=/\s*\}/,We=/#|\^|\/|>|\{|&|=|!/;function we(t,e){if(!t)return[];var r=!1,n=[],o=[],s=[],a=!1,i=!1,u="",l=0;function p(){if(a&&!i)for(;s.length;)delete o[s.pop()];else s=[];a=!1,i=!1}var y,m,B;function C(A){if(typeof A=="string"&&(A=A.split(ve,2)),!P(A)||A.length!==2)throw new Error("Invalid tags: "+A);y=new RegExp(j(A[0])+"\\s*"),m=new RegExp("\\s*"+j(A[1])),B=new RegExp("\\s*"+j("}"+A[1]))}C(e||h.tags);for(var f=new k(t),b,c,d,E,R,W;!f.eos();){if(b=f.pos,d=f.scanUntil(y),d)for(var x=0,ne=d.length;x<ne;++x)E=d.charAt(x),ye(E)?(s.push(o.length),u+=E):(i=!0,r=!0,u+=" "),o.push(["text",E,b,b+1]),b+=1,E===`
`&&(p(),u="",l=0,r=!1);if(!f.scan(y))break;if(a=!0,c=f.scan(We)||"name",f.scan(be),c==="="?(d=f.scanUntil(q),f.scan(q),f.scanUntil(m)):c==="{"?(d=f.scanUntil(B),f.scan(Ae),f.scanUntil(m),c="&"):d=f.scanUntil(m),!f.scan(m))throw new Error("Unclosed tag at "+f.pos);if(c==">"?R=[c,d,b,f.pos,u,l,r]:R=[c,d,b,f.pos],l++,o.push(R),c==="#"||c==="^")n.push(R);else if(c==="/"){if(W=n.pop(),!W)throw new Error('Unopened section "'+d+'" at '+b);if(W[1]!==d)throw new Error('Unclosed section "'+W[1]+'" at '+b)}else c==="name"||c==="{"||c==="&"?i=!0:c==="="&&C(d)}if(p(),W=n.pop(),W)throw new Error('Unclosed section "'+W[1]+'" at '+f.pos);return Se(Le(o))}function Le(t){for(var e=[],r,n,o=0,s=t.length;o<s;++o)r=t[o],r&&(r[0]==="text"&&n&&n[0]==="text"?(n[1]+=r[1],n[3]=r[3]):(e.push(r),n=r));return e}function Se(t){for(var e=[],r=e,n=[],o,s,a=0,i=t.length;a<i;++a)switch(o=t[a],o[0]){case"#":case"^":r.push(o),n.push(o),r=o[4]=[];break;case"/":s=n.pop(),s[5]=o[2],r=n.length>0?n[n.length-1][4]:e;break;default:r.push(o)}return e}function k(t){this.string=t,this.tail=t,this.pos=0}k.prototype.eos=function(){return this.tail===""};k.prototype.scan=function(e){var r=this.tail.match(e);if(!r||r.index!==0)return"";var n=r[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n};k.prototype.scanUntil=function(e){var r=this.tail.search(e),n;switch(r){case-1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=n.length,n};function S(t,e){this.view=t,this.cache={".":this.view},this.parent=e}S.prototype.push=function(e){return new S(e,this)};S.prototype.lookup=function(e){var r=this.cache,n;if(r.hasOwnProperty(e))n=r[e];else{for(var o=this,s,a,i,u=!1;o;){if(e.indexOf(".")>0)for(s=o.view,a=e.split("."),i=0;s!=null&&i<a.length;)i===a.length-1&&(u=N(s,a[i])||fe(s,a[i])),s=s[a[i++]];else s=o.view[e],u=N(o.view,e);if(u){n=s;break}o=o.parent}r[e]=n}return _(n)&&(n=n.call(this.view)),n};function g(){this.templateCache={_cache:{},set:function(e,r){this._cache[e]=r},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}g.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};g.prototype.parse=function(e,r){var n=this.templateCache,o=e+":"+(r||h.tags).join(":"),s=typeof n<"u",a=s?n.get(o):void 0;return a==null&&(a=we(e,r),s&&n.set(o,a)),a};g.prototype.render=function(e,r,n,o){var s=this.getConfigTags(o),a=this.parse(e,s),i=r instanceof S?r:new S(r,void 0);return this.renderTokens(a,i,n,e,o)};g.prototype.renderTokens=function(e,r,n,o,s){for(var a="",i,u,l,p=0,y=e.length;p<y;++p)l=void 0,i=e[p],u=i[0],u==="#"?l=this.renderSection(i,r,n,o,s):u==="^"?l=this.renderInverted(i,r,n,o,s):u===">"?l=this.renderPartial(i,r,n,s):u==="&"?l=this.unescapedValue(i,r):u==="name"?l=this.escapedValue(i,r,s):u==="text"&&(l=this.rawValue(i)),l!==void 0&&(a+=l);return a};g.prototype.renderSection=function(e,r,n,o,s){var a=this,i="",u=r.lookup(e[1]);function l(m){return a.render(m,r,n,s)}if(u){if(P(u))for(var p=0,y=u.length;p<y;++p)i+=this.renderTokens(e[4],r.push(u[p]),n,o,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")i+=this.renderTokens(e[4],r.push(u),n,o,s);else if(_(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(r.view,o.slice(e[3],e[5]),l),u!=null&&(i+=u)}else i+=this.renderTokens(e[4],r,n,o,s);return i}};g.prototype.renderInverted=function(e,r,n,o,s){var a=r.lookup(e[1]);if(!a||P(a)&&a.length===0)return this.renderTokens(e[4],r,n,o,s)};g.prototype.indentPartial=function(e,r,n){for(var o=r.replace(/[^ \t]/g,""),s=e.split(`
`),a=0;a<s.length;a++)s[a].length&&(a>0||!n)&&(s[a]=o+s[a]);return s.join(`
`)};g.prototype.renderPartial=function(e,r,n,o){if(n){var s=this.getConfigTags(o),a=_(n)?n(e[1]):n[e[1]];if(a!=null){var i=e[6],u=e[5],l=e[4],p=a;u==0&&l&&(p=this.indentPartial(a,l,i));var y=this.parse(p,s);return this.renderTokens(y,r,n,p,o)}}};g.prototype.unescapedValue=function(e,r){var n=r.lookup(e[1]);if(n!=null)return n};g.prototype.escapedValue=function(e,r,n){var o=this.getConfigEscape(n)||h.escape,s=r.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===h.escape?String(s):o(s)};g.prototype.rawValue=function(e){return e[1]};g.prototype.getConfigTags=function(e){return P(e)?e:e&&typeof e=="object"?e.tags:void 0};g.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!P(e))return e.escape};var h={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){M.templateCache=t},get templateCache(){return M.templateCache}},M=new g;h.clearCache=function(){return M.clearCache()};h.parse=function(e,r){return M.parse(e,r)};h.render=function(e,r,n,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+le(e)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(e,r,n,o)};h.escape=me;h.Scanner=k;h.Context=S;h.Writer=g;class ee{constructor(e,r){this.template=e,this.state=r,this.ast=h.parse(e)}getValue(){return this.value===void 0&&(this.value=h.render(this.template,this.state)),this.value}onChange(e){const r=[];for(const n of this.getUsedVariables().values())r.push(this.state.onVariableChange(n).subscribe(()=>{const o=h.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const n of r)n.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,r){for(const n of e){const o=n[0],s=n[1],a=n[4];["name","&","#","^"].includes(o)&&r.add(s),a!==void 0&&typeof a!="string"&&this.recursiveGetUsedVariables(a,r)}}}async function Pe(){var t;const e=await F();for(const r of e){const n=(t=r.properties)!==null&&t!==void 0?t:[];for(const o of n){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new ee(o.value,WA.state);if(s.isPureString())continue;const a=s.getValue();await K(r.name,o.name,a),s.onChange(async i=>{await K(r.name,o.name,i)})}}}async function Ce(){var t;const e=await T();for(const[r,n]of e.entries())if(n.type!=="objectgroup"){const o=(t=n.properties)!==null&&t!==void 0?t:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const a=new ee(s.value,WA.state);if(a.isPureString())continue;const i=a.getValue();$(r,s.name,i),a.onChange(u=>{$(r,s.name,u)})}}}async function K(t,e,r){console.log(t),(await WA.room.area.get(t)).setProperty(e,r)}function $(t,e,r){WA.room.setProperty(t,e,r),e==="visible"&&(r?WA.room.showLayer(t):WA.room.hideLayer(t))}let G,O=0,D=0;function H(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.showLayer(r);e=t.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.hideLayer(r)}else{let e=t.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.hideLayer(r);e=t.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.showLayer(r)}}function Ee(t){const e=t.properties.getString("openSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const o=re(t.properties.mustGetString("openLayer").split(`
`));if(o>r)return;n=1-o/r}e&&WA.sound.loadSound(e).play({volume:n})}function Me(t){const e=t.properties.getString("closeSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const o=re(t.properties.mustGetString("closeLayer").split(`
`));if(o>r)return;n=1-o/r}e&&WA.sound.loadSound(e).play({volume:n})}function te(t){return t.map(e=>G.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function re(t){const e=te(t),r=Z(e),n=((r.right-r.left)/2+r.left)*32,o=((r.bottom-r.top)/2+r.top)*32;return Math.sqrt(Math.pow(O-n,2)+Math.pow(D-o,2))}function Te(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Ee(t):Me(t),H(t)}),H(t)}function z(t,e,r,n){const o=t.name;let s,a,i=!1;const u=r.getString("tag");let l=!0;u&&!WA.player.tags.includes(u)&&(l=!1);const p=!!u;function y(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=r.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=r.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,y()}})}function B(){let c;if(t.type==="tilelayer")c=Z(te(e.properties.mustGetString("closeLayer").split(`
`)));else{if(t.x===void 0||t.y===void 0||t.width===void 0||t.height===void 0)throw new Error(`Doorstep zone "${t.name}" is missing x, y, width or height`);c={top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}a=WA.room.website.create({name:"doorKeypad"+o,url:n+"/keypad.html#"+encodeURIComponent(o),position:{x:c.right*32,y:c.top*32,width:32*3,height:32*4},allowApi:!0})}function C(){a&&(WA.room.website.delete(a.name),a=void 0)}function f(){if(i=!0,r.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(p&&!l||!p)&&(r.getString("code")||r.getString("codeVariable"))){B();return}l&&(WA.state[e.name]?y():m())}function b(){i=!1,r.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),C()}t.type==="tilelayer"?(WA.room.onEnterLayer(o).subscribe(f),WA.room.onLeaveLayer(o).subscribe(b)):(WA.room.area.onEnter(o).subscribe(f),WA.room.area.onLeave(o).subscribe(b)),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!r.getBoolean("autoClose")&&WA.state[e.name]===!0&&y(),a&&WA.state[e.name]===!0&&C(),!r.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function ke(t){const e=t.properties.mustGetString("bellSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const o=Math.sqrt(Math.pow(t.x-O,2)+Math.pow(t.y-D,2));if(o>r)return;n=1-o/r}WA.sound.loadSound(e).play({volume:n})}function Be(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&ke(t)})}function X(t,e,r){let n;const o=e.getString("bellPopup");if(r.type==="tilelayer"){const s=r.name;WA.room.onEnterLayer(s).subscribe(()=>{var a;o?n=WA.ui.openPopup(o,"",[{label:(a=e.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(s).subscribe(()=>{n&&(n.close(),n=void 0)})}else{const s=r.name;WA.room.area.onEnter(s).subscribe(()=>{var a;o?n=WA.ui.openPopup(o,"",[{label:(a=e.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.area.onLeave(s).subscribe(()=>{n&&(n.close(),n=void 0)})}}async function Re(t){t=t??I;const e=await se();G=await T();for(const r of e.values())r.properties.get("door")&&Te(r),r.properties.get("bell")&&Be(r);for(const r of G.values()){const n=new L(r.properties),o=n.getString("doorVariable");if(o&&r.type==="tilelayer"){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+r.name+'"');z(r,a,n,t)}const s=n.getString("bellVariable");s&&r.type==="tilelayer"&&X(s,n,r)}for(const r of await F()){const n=new L(r.properties),o=n.getString("doorVariable");if(o){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of object "'+r.name+'"');z(r,a,n,t)}const s=n.getString("bellVariable");s&&X(s,n,r)}WA.player.onPlayerMove(r=>{O=r.x,D=r.y})}function xe(t,e){const r=t.getString("bindVariable");if(r){const n=t.get("enterValue"),o=t.get("leaveValue"),s=t.getString("triggerMessage"),a=t.getString("tag");Ve(r,e,n,o,s,a)}}function Ve(t,e,r,n,o,s){s&&!WA.player.tags.includes(s)||(r!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=r)}),n!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=n}))}async function je(){const t=await T();for(const e of t.values()){const r=new L(e.properties);xe(r,e.name)}}let Y;async function Ge(t){const e=await WA.room.getTiledMap();t=t??I,Y=await T();const r=e.layers.find(n=>n.name==="configuration");if(r){const o=new L(r.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const s of Y.values()){const a=new L(s.properties),i=a.getString("openConfig");i&&s.type==="tilelayer"&&Ie(i.split(","),s.name,a)}}}function Ie(t,e,r){let n;const o=r.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function a(){var u;n&&n.remove(),n=WA.ui.displayActionMessage({message:(u=r.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>U(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=r.getString("openConfigTrigger");s&&(u&&u==="onaction"?a():U(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{n&&n.remove(),i()})}function _e(){return WA.onInit().then(()=>{Re().catch(t=>console.error(t)),je().catch(t=>console.error(t)),Ge().catch(t=>console.error(t)),Ce().catch(t=>console.error(t)),Pe().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");let v;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("floor").subscribe(()=>{WA.room.hideLayer("roof"),WA.room.hideLayer("walls-bg-front"),WA.room.hideLayer("sign")}),WA.room.onLeaveLayer("floor").subscribe(()=>{WA.room.showLayer("roof"),WA.room.showLayer("walls-bg-front"),WA.room.showLayer("facade-furniture-bg"),WA.room.showLayer("sign")}),WA.room.onEnterLayer("rooms_floor").subscribe(()=>{WA.room.hideLayer("facade-furniture-fg"),WA.room.hideLayer("facade"),WA.room.hideLayer("facade-furniture-bg")}),WA.room.onLeaveLayer("rooms_floor").subscribe(()=>{WA.room.showLayer("facade-furniture-fg"),WA.room.showLayer("facade"),WA.room.showLayer("facade-furniture-bg")}),WA.room.onEnterLayer("message-1").subscribe(()=>{v=WA.ui.openPopup("Addon1Pop","Library",[])}),WA.room.onLeaveLayer("message-1").subscribe(w),WA.room.onEnterLayer("message-3").subscribe(()=>{v=WA.ui.openPopup("Addon3Pop","Ocean",[])}),WA.room.onLeaveLayer("message-3").subscribe(w),WA.room.onEnterLayer("message-2").subscribe(()=>{v=WA.ui.openPopup("Addon2Pop","Playground",[])}),WA.room.onLeaveLayer("message-2").subscribe(w),WA.room.onEnterLayer("message-4").subscribe(()=>{v=WA.ui.openPopup("Addon4Pop","Amphitheater",[])}),WA.room.onLeaveLayer("message-4").subscribe(w),WA.room.onEnterLayer("message-5").subscribe(()=>{v=WA.ui.openPopup("Addon5Pop","Science Cluster",[])}),WA.room.onLeaveLayer("message-5").subscribe(w),WA.room.onEnterLayer("message-6").subscribe(()=>{v=WA.ui.openPopup("Addon6Pop","Club House",[])}),WA.room.onLeaveLayer("message-6").subscribe(w),WA.room.onEnterLayer("clockZone").subscribe(()=>{const t=new Date,e=t.getHours()+":"+t.getMinutes();v=WA.ui.openPopup("clockPopup","It's "+e,[])}),WA.room.onLeaveLayer("clockZone").subscribe(w),_e().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t))}).catch(t=>console.error(t));function w(){v!==void 0&&(v.close(),v=void 0)}
