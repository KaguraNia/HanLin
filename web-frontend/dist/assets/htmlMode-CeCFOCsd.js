var $e=Object.defineProperty;var qe=(e,n,i)=>n in e?$e(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i;var E=(e,n,i)=>(qe(e,typeof n!="symbol"?n+"":n,i),i);import{m as Qe}from"./editor.main-xDlwrMIh.js";import"./index-CGkUgb9x.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var Ge=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,Ye=Object.getOwnPropertyNames,Ze=Object.prototype.hasOwnProperty,Y=(e,n,i,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of Ye(n))!Ze.call(e,t)&&t!==i&&Ge(e,t,{get:()=>n[t],enumerable:!(r=Je(n,t))||r.enumerable});return e},Ke=(e,n,i)=>(Y(e,n,"default"),i&&Y(i,n,"default")),c={};Ke(c,Qe);var et=2*60*1e3,Me=class{constructor(e){E(this,"_defaults");E(this,"_idleCheckInterval");E(this,"_lastUsedTime");E(this,"_configChangeListener");E(this,"_worker");E(this,"_client");this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),30*1e3),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;Date.now()-this._lastUsedTime>et&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=c.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let n;return this._getClient().then(i=>{n=i}).then(i=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(i=>n)}},Z;(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647})(Z||(Z={}));var H;(function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647})(H||(H={}));var k;(function(e){function n(r,t){return r===Number.MAX_VALUE&&(r=H.MAX_VALUE),t===Number.MAX_VALUE&&(t=H.MAX_VALUE),{line:r,character:t}}e.create=n;function i(r){var t=r;return s.objectLiteral(t)&&s.uinteger(t.line)&&s.uinteger(t.character)}e.is=i})(k||(k={}));var p;(function(e){function n(r,t,a,o){if(s.uinteger(r)&&s.uinteger(t)&&s.uinteger(a)&&s.uinteger(o))return{start:k.create(r,t),end:k.create(a,o)};if(k.is(r)&&k.is(t))return{start:r,end:t};throw new Error("Range#create called with invalid arguments["+r+", "+t+", "+a+", "+o+"]")}e.create=n;function i(r){var t=r;return s.objectLiteral(t)&&k.is(t.start)&&k.is(t.end)}e.is=i})(p||(p={}));var X;(function(e){function n(r,t){return{uri:r,range:t}}e.create=n;function i(r){var t=r;return s.defined(t)&&p.is(t.range)&&(s.string(t.uri)||s.undefined(t.uri))}e.is=i})(X||(X={}));var K;(function(e){function n(r,t,a,o){return{targetUri:r,targetRange:t,targetSelectionRange:a,originSelectionRange:o}}e.create=n;function i(r){var t=r;return s.defined(t)&&p.is(t.targetRange)&&s.string(t.targetUri)&&(p.is(t.targetSelectionRange)||s.undefined(t.targetSelectionRange))&&(p.is(t.originSelectionRange)||s.undefined(t.originSelectionRange))}e.is=i})(K||(K={}));var B;(function(e){function n(r,t,a,o){return{red:r,green:t,blue:a,alpha:o}}e.create=n;function i(r){var t=r;return s.numberRange(t.red,0,1)&&s.numberRange(t.green,0,1)&&s.numberRange(t.blue,0,1)&&s.numberRange(t.alpha,0,1)}e.is=i})(B||(B={}));var ee;(function(e){function n(r,t){return{range:r,color:t}}e.create=n;function i(r){var t=r;return p.is(t.range)&&B.is(t.color)}e.is=i})(ee||(ee={}));var te;(function(e){function n(r,t,a){return{label:r,textEdit:t,additionalTextEdits:a}}e.create=n;function i(r){var t=r;return s.string(t.label)&&(s.undefined(t.textEdit)||C.is(t))&&(s.undefined(t.additionalTextEdits)||s.typedArray(t.additionalTextEdits,C.is))}e.is=i})(te||(te={}));var R;(function(e){e.Comment="comment",e.Imports="imports",e.Region="region"})(R||(R={}));var re;(function(e){function n(r,t,a,o,u){var f={startLine:r,endLine:t};return s.defined(a)&&(f.startCharacter=a),s.defined(o)&&(f.endCharacter=o),s.defined(u)&&(f.kind=u),f}e.create=n;function i(r){var t=r;return s.uinteger(t.startLine)&&s.uinteger(t.startLine)&&(s.undefined(t.startCharacter)||s.uinteger(t.startCharacter))&&(s.undefined(t.endCharacter)||s.uinteger(t.endCharacter))&&(s.undefined(t.kind)||s.string(t.kind))}e.is=i})(re||(re={}));var $;(function(e){function n(r,t){return{location:r,message:t}}e.create=n;function i(r){var t=r;return s.defined(t)&&X.is(t.location)&&s.string(t.message)}e.is=i})($||($={}));var I;(function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4})(I||(I={}));var ne;(function(e){e.Unnecessary=1,e.Deprecated=2})(ne||(ne={}));var ie;(function(e){function n(i){var r=i;return r!=null&&s.string(r.href)}e.is=n})(ie||(ie={}));var U;(function(e){function n(r,t,a,o,u,f){var d={range:r,message:t};return s.defined(a)&&(d.severity=a),s.defined(o)&&(d.code=o),s.defined(u)&&(d.source=u),s.defined(f)&&(d.relatedInformation=f),d}e.create=n;function i(r){var t,a=r;return s.defined(a)&&p.is(a.range)&&s.string(a.message)&&(s.number(a.severity)||s.undefined(a.severity))&&(s.integer(a.code)||s.string(a.code)||s.undefined(a.code))&&(s.undefined(a.codeDescription)||s.string((t=a.codeDescription)===null||t===void 0?void 0:t.href))&&(s.string(a.source)||s.undefined(a.source))&&(s.undefined(a.relatedInformation)||s.typedArray(a.relatedInformation,$.is))}e.is=i})(U||(U={}));var M;(function(e){function n(r,t){for(var a=[],o=2;o<arguments.length;o++)a[o-2]=arguments[o];var u={title:r,command:t};return s.defined(a)&&a.length>0&&(u.arguments=a),u}e.create=n;function i(r){var t=r;return s.defined(t)&&s.string(t.title)&&s.string(t.command)}e.is=i})(M||(M={}));var C;(function(e){function n(a,o){return{range:a,newText:o}}e.replace=n;function i(a,o){return{range:{start:a,end:a},newText:o}}e.insert=i;function r(a){return{range:a,newText:""}}e.del=r;function t(a){var o=a;return s.objectLiteral(o)&&s.string(o.newText)&&p.is(o.range)}e.is=t})(C||(C={}));var P;(function(e){function n(r,t,a){var o={label:r};return t!==void 0&&(o.needsConfirmation=t),a!==void 0&&(o.description=a),o}e.create=n;function i(r){var t=r;return t!==void 0&&s.objectLiteral(t)&&s.string(t.label)&&(s.boolean(t.needsConfirmation)||t.needsConfirmation===void 0)&&(s.string(t.description)||t.description===void 0)}e.is=i})(P||(P={}));var m;(function(e){function n(i){var r=i;return typeof r=="string"}e.is=n})(m||(m={}));var x;(function(e){function n(a,o,u){return{range:a,newText:o,annotationId:u}}e.replace=n;function i(a,o,u){return{range:{start:a,end:a},newText:o,annotationId:u}}e.insert=i;function r(a,o){return{range:a,newText:"",annotationId:o}}e.del=r;function t(a){var o=a;return C.is(o)&&(P.is(o.annotationId)||m.is(o.annotationId))}e.is=t})(x||(x={}));var O;(function(e){function n(r,t){return{textDocument:r,edits:t}}e.create=n;function i(r){var t=r;return s.defined(t)&&V.is(t.textDocument)&&Array.isArray(t.edits)}e.is=i})(O||(O={}));var S;(function(e){function n(r,t,a){var o={kind:"create",uri:r};return t!==void 0&&(t.overwrite!==void 0||t.ignoreIfExists!==void 0)&&(o.options=t),a!==void 0&&(o.annotationId=a),o}e.create=n;function i(r){var t=r;return t&&t.kind==="create"&&s.string(t.uri)&&(t.options===void 0||(t.options.overwrite===void 0||s.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||s.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||m.is(t.annotationId))}e.is=i})(S||(S={}));var T;(function(e){function n(r,t,a,o){var u={kind:"rename",oldUri:r,newUri:t};return a!==void 0&&(a.overwrite!==void 0||a.ignoreIfExists!==void 0)&&(u.options=a),o!==void 0&&(u.annotationId=o),u}e.create=n;function i(r){var t=r;return t&&t.kind==="rename"&&s.string(t.oldUri)&&s.string(t.newUri)&&(t.options===void 0||(t.options.overwrite===void 0||s.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||s.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||m.is(t.annotationId))}e.is=i})(T||(T={}));var F;(function(e){function n(r,t,a){var o={kind:"delete",uri:r};return t!==void 0&&(t.recursive!==void 0||t.ignoreIfNotExists!==void 0)&&(o.options=t),a!==void 0&&(o.annotationId=a),o}e.create=n;function i(r){var t=r;return t&&t.kind==="delete"&&s.string(t.uri)&&(t.options===void 0||(t.options.recursive===void 0||s.boolean(t.options.recursive))&&(t.options.ignoreIfNotExists===void 0||s.boolean(t.options.ignoreIfNotExists)))&&(t.annotationId===void 0||m.is(t.annotationId))}e.is=i})(F||(F={}));var q;(function(e){function n(i){var r=i;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(function(t){return s.string(t.kind)?S.is(t)||T.is(t)||F.is(t):O.is(t)}))}e.is=n})(q||(q={}));var W=function(){function e(n,i){this.edits=n,this.changeAnnotations=i}return e.prototype.insert=function(n,i,r){var t,a;if(r===void 0?t=C.insert(n,i):m.is(r)?(a=r,t=x.insert(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),t=x.insert(n,i,a)),this.edits.push(t),a!==void 0)return a},e.prototype.replace=function(n,i,r){var t,a;if(r===void 0?t=C.replace(n,i):m.is(r)?(a=r,t=x.replace(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),t=x.replace(n,i,a)),this.edits.push(t),a!==void 0)return a},e.prototype.delete=function(n,i){var r,t;if(i===void 0?r=C.del(n):m.is(i)?(t=i,r=x.del(n,i)):(this.assertChangeAnnotations(this.changeAnnotations),t=this.changeAnnotations.manage(i),r=x.del(n,t)),this.edits.push(r),t!==void 0)return t},e.prototype.add=function(n){this.edits.push(n)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(n){if(n===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),ae=function(){function e(n){this._annotations=n===void 0?Object.create(null):n,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(n,i){var r;if(m.is(n)?r=n:(r=this.nextId(),i=n),this._annotations[r]!==void 0)throw new Error("Id "+r+" is already in use.");if(i===void 0)throw new Error("No annotation provided for id "+r);return this._annotations[r]=i,this._size++,r},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();(function(){function e(n){var i=this;this._textEditChanges=Object.create(null),n!==void 0?(this._workspaceEdit=n,n.documentChanges?(this._changeAnnotations=new ae(n.changeAnnotations),n.changeAnnotations=this._changeAnnotations.all(),n.documentChanges.forEach(function(r){if(O.is(r)){var t=new W(r.edits,i._changeAnnotations);i._textEditChanges[r.textDocument.uri]=t}})):n.changes&&Object.keys(n.changes).forEach(function(r){var t=new W(n.changes[r]);i._textEditChanges[r]=t})):this._workspaceEdit={}}return Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(n){if(V.is(n)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i={uri:n.uri,version:n.version},r=this._textEditChanges[i.uri];if(!r){var t=[],a={textDocument:i,edits:t};this._workspaceEdit.documentChanges.push(a),r=new W(t,this._changeAnnotations),this._textEditChanges[i.uri]=r}return r}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var r=this._textEditChanges[n];if(!r){var t=[];this._workspaceEdit.changes[n]=t,r=new W(t),this._textEditChanges[n]=r}return r}},e.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new ae,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(n,i,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;P.is(i)||m.is(i)?t=i:r=i;var a,o;if(t===void 0?a=S.create(n,r):(o=m.is(t)?t:this._changeAnnotations.manage(t),a=S.create(n,r,o)),this._workspaceEdit.documentChanges.push(a),o!==void 0)return o},e.prototype.renameFile=function(n,i,r,t){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var a;P.is(r)||m.is(r)?a=r:t=r;var o,u;if(a===void 0?o=T.create(n,i,t):(u=m.is(a)?a:this._changeAnnotations.manage(a),o=T.create(n,i,t,u)),this._workspaceEdit.documentChanges.push(o),u!==void 0)return u},e.prototype.deleteFile=function(n,i,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;P.is(i)||m.is(i)?t=i:r=i;var a,o;if(t===void 0?a=F.create(n,r):(o=m.is(t)?t:this._changeAnnotations.manage(t),a=F.create(n,r,o)),this._workspaceEdit.documentChanges.push(a),o!==void 0)return o},e})();var oe;(function(e){function n(r){return{uri:r}}e.create=n;function i(r){var t=r;return s.defined(t)&&s.string(t.uri)}e.is=i})(oe||(oe={}));var se;(function(e){function n(r,t){return{uri:r,version:t}}e.create=n;function i(r){var t=r;return s.defined(t)&&s.string(t.uri)&&s.integer(t.version)}e.is=i})(se||(se={}));var V;(function(e){function n(r,t){return{uri:r,version:t}}e.create=n;function i(r){var t=r;return s.defined(t)&&s.string(t.uri)&&(t.version===null||s.integer(t.version))}e.is=i})(V||(V={}));var ue;(function(e){function n(r,t,a,o){return{uri:r,languageId:t,version:a,text:o}}e.create=n;function i(r){var t=r;return s.defined(t)&&s.string(t.uri)&&s.string(t.languageId)&&s.integer(t.version)&&s.string(t.text)}e.is=i})(ue||(ue={}));var L;(function(e){e.PlainText="plaintext",e.Markdown="markdown"})(L||(L={}));(function(e){function n(i){var r=i;return r===e.PlainText||r===e.Markdown}e.is=n})(L||(L={}));var Q;(function(e){function n(i){var r=i;return s.objectLiteral(i)&&L.is(r.kind)&&s.string(r.value)}e.is=n})(Q||(Q={}));var l;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(l||(l={}));var G;(function(e){e.PlainText=1,e.Snippet=2})(G||(G={}));var ce;(function(e){e.Deprecated=1})(ce||(ce={}));var de;(function(e){function n(r,t,a){return{newText:r,insert:t,replace:a}}e.create=n;function i(r){var t=r;return t&&s.string(t.newText)&&p.is(t.insert)&&p.is(t.replace)}e.is=i})(de||(de={}));var ge;(function(e){e.asIs=1,e.adjustIndentation=2})(ge||(ge={}));var fe;(function(e){function n(i){return{label:i}}e.create=n})(fe||(fe={}));var le;(function(e){function n(i,r){return{items:i||[],isIncomplete:!!r}}e.create=n})(le||(le={}));var z;(function(e){function n(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}e.fromPlainText=n;function i(r){var t=r;return s.string(t)||s.objectLiteral(t)&&s.string(t.language)&&s.string(t.value)}e.is=i})(z||(z={}));var he;(function(e){function n(i){var r=i;return!!r&&s.objectLiteral(r)&&(Q.is(r.contents)||z.is(r.contents)||s.typedArray(r.contents,z.is))&&(i.range===void 0||p.is(i.range))}e.is=n})(he||(he={}));var ve;(function(e){function n(i,r){return r?{label:i,documentation:r}:{label:i}}e.create=n})(ve||(ve={}));var pe;(function(e){function n(i,r){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var o={label:i};return s.defined(r)&&(o.documentation=r),s.defined(t)?o.parameters=t:o.parameters=[],o}e.create=n})(pe||(pe={}));var D;(function(e){e.Text=1,e.Read=2,e.Write=3})(D||(D={}));var me;(function(e){function n(i,r){var t={range:i};return s.number(r)&&(t.kind=r),t}e.create=n})(me||(me={}));var h;(function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26})(h||(h={}));var _e;(function(e){e.Deprecated=1})(_e||(_e={}));var we;(function(e){function n(i,r,t,a,o){var u={name:i,kind:r,location:{uri:a,range:t}};return o&&(u.containerName=o),u}e.create=n})(we||(we={}));var ke;(function(e){function n(r,t,a,o,u,f){var d={name:r,detail:t,kind:a,range:o,selectionRange:u};return f!==void 0&&(d.children=f),d}e.create=n;function i(r){var t=r;return t&&s.string(t.name)&&s.number(t.kind)&&p.is(t.range)&&p.is(t.selectionRange)&&(t.detail===void 0||s.string(t.detail))&&(t.deprecated===void 0||s.boolean(t.deprecated))&&(t.children===void 0||Array.isArray(t.children))&&(t.tags===void 0||Array.isArray(t.tags))}e.is=i})(ke||(ke={}));var be;(function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"})(be||(be={}));var Ee;(function(e){function n(r,t){var a={diagnostics:r};return t!=null&&(a.only=t),a}e.create=n;function i(r){var t=r;return s.defined(t)&&s.typedArray(t.diagnostics,U.is)&&(t.only===void 0||s.typedArray(t.only,s.string))}e.is=i})(Ee||(Ee={}));var xe;(function(e){function n(r,t,a){var o={title:r},u=!0;return typeof t=="string"?(u=!1,o.kind=t):M.is(t)?o.command=t:o.edit=t,u&&a!==void 0&&(o.kind=a),o}e.create=n;function i(r){var t=r;return t&&s.string(t.title)&&(t.diagnostics===void 0||s.typedArray(t.diagnostics,U.is))&&(t.kind===void 0||s.string(t.kind))&&(t.edit!==void 0||t.command!==void 0)&&(t.command===void 0||M.is(t.command))&&(t.isPreferred===void 0||s.boolean(t.isPreferred))&&(t.edit===void 0||q.is(t.edit))}e.is=i})(xe||(xe={}));var Ce;(function(e){function n(r,t){var a={range:r};return s.defined(t)&&(a.data=t),a}e.create=n;function i(r){var t=r;return s.defined(t)&&p.is(t.range)&&(s.undefined(t.command)||M.is(t.command))}e.is=i})(Ce||(Ce={}));var Ae;(function(e){function n(r,t){return{tabSize:r,insertSpaces:t}}e.create=n;function i(r){var t=r;return s.defined(t)&&s.uinteger(t.tabSize)&&s.boolean(t.insertSpaces)}e.is=i})(Ae||(Ae={}));var ye;(function(e){function n(r,t,a){return{range:r,target:t,data:a}}e.create=n;function i(r){var t=r;return s.defined(t)&&p.is(t.range)&&(s.undefined(t.target)||s.string(t.target))}e.is=i})(ye||(ye={}));var Ie;(function(e){function n(r,t){return{range:r,parent:t}}e.create=n;function i(r){var t=r;return t!==void 0&&p.is(t.range)&&(t.parent===void 0||e.is(t.parent))}e.is=i})(Ie||(Ie={}));var Pe;(function(e){function n(a,o,u,f){return new tt(a,o,u,f)}e.create=n;function i(a){var o=a;return!!(s.defined(o)&&s.string(o.uri)&&(s.undefined(o.languageId)||s.string(o.languageId))&&s.uinteger(o.lineCount)&&s.func(o.getText)&&s.func(o.positionAt)&&s.func(o.offsetAt))}e.is=i;function r(a,o){for(var u=a.getText(),f=t(o,function(y,N){var J=y.range.start.line-N.range.start.line;return J===0?y.range.start.character-N.range.start.character:J}),d=u.length,v=f.length-1;v>=0;v--){var w=f[v],b=a.offsetAt(w.range.start),g=a.offsetAt(w.range.end);if(g<=d)u=u.substring(0,b)+w.newText+u.substring(g,u.length);else throw new Error("Overlapping edit");d=b}return u}e.applyEdits=r;function t(a,o){if(a.length<=1)return a;var u=a.length/2|0,f=a.slice(0,u),d=a.slice(u);t(f,o),t(d,o);for(var v=0,w=0,b=0;v<f.length&&w<d.length;){var g=o(f[v],d[w]);g<=0?a[b++]=f[v++]:a[b++]=d[w++]}for(;v<f.length;)a[b++]=f[v++];for(;w<d.length;)a[b++]=d[w++];return a}})(Pe||(Pe={}));var tt=function(){function e(n,i,r,t){this._uri=n,this._languageId=i,this._version=r,this._content=t,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(n){if(n){var i=this.offsetAt(n.start),r=this.offsetAt(n.end);return this._content.substring(i,r)}return this._content},e.prototype.update=function(n,i){this._content=n.text,this._version=i,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var n=[],i=this._content,r=!0,t=0;t<i.length;t++){r&&(n.push(t),r=!1);var a=i.charAt(t);r=a==="\r"||a===`
`,a==="\r"&&t+1<i.length&&i.charAt(t+1)===`
`&&t++}r&&i.length>0&&n.push(i.length),this._lineOffsets=n}return this._lineOffsets},e.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var i=this.getLineOffsets(),r=0,t=i.length;if(t===0)return k.create(0,n);for(;r<t;){var a=Math.floor((r+t)/2);i[a]>n?t=a:r=a+1}var o=r-1;return k.create(o,n-i[o])},e.prototype.offsetAt=function(n){var i=this.getLineOffsets();if(n.line>=i.length)return this._content.length;if(n.line<0)return 0;var r=i[n.line],t=n.line+1<i.length?i[n.line+1]:this._content.length;return Math.max(Math.min(r+n.character,t),r)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}(),s;(function(e){var n=Object.prototype.toString;function i(g){return typeof g<"u"}e.defined=i;function r(g){return typeof g>"u"}e.undefined=r;function t(g){return g===!0||g===!1}e.boolean=t;function a(g){return n.call(g)==="[object String]"}e.string=a;function o(g){return n.call(g)==="[object Number]"}e.number=o;function u(g,y,N){return n.call(g)==="[object Number]"&&y<=g&&g<=N}e.numberRange=u;function f(g){return n.call(g)==="[object Number]"&&-2147483648<=g&&g<=2147483647}e.integer=f;function d(g){return n.call(g)==="[object Number]"&&0<=g&&g<=2147483647}e.uinteger=d;function v(g){return n.call(g)==="[object Function]"}e.func=v;function w(g){return g!==null&&typeof g=="object"}e.objectLiteral=w;function b(g,y){return Array.isArray(g)&&g.every(y)}e.typedArray=b})(s||(s={}));var mt=class{constructor(e,n,i){E(this,"_disposables",[]);E(this,"_listener",Object.create(null));this._languageId=e,this._worker=n;const r=a=>{let o=a.getLanguageId();if(o!==this._languageId)return;let u;this._listener[a.uri.toString()]=a.onDidChangeContent(()=>{window.clearTimeout(u),u=window.setTimeout(()=>this._doValidate(a.uri,o),500)}),this._doValidate(a.uri,o)},t=a=>{c.editor.setModelMarkers(a,this._languageId,[]);let o=a.uri.toString(),u=this._listener[o];u&&(u.dispose(),delete this._listener[o])};this._disposables.push(c.editor.onDidCreateModel(r)),this._disposables.push(c.editor.onWillDisposeModel(t)),this._disposables.push(c.editor.onDidChangeModelLanguage(a=>{t(a.model),r(a.model)})),this._disposables.push(i(a=>{c.editor.getModels().forEach(o=>{o.getLanguageId()===this._languageId&&(t(o),r(o))})})),this._disposables.push({dispose:()=>{c.editor.getModels().forEach(t);for(let a in this._listener)this._listener[a].dispose()}}),c.editor.getModels().forEach(r)}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables.length=0}_doValidate(e,n){this._worker(e).then(i=>i.doValidation(e.toString())).then(i=>{const r=i.map(a=>nt(e,a));let t=c.editor.getModel(e);t&&t.getLanguageId()===n&&c.editor.setModelMarkers(t,n,r)}).then(void 0,i=>{console.error(i)})}};function rt(e){switch(e){case I.Error:return c.MarkerSeverity.Error;case I.Warning:return c.MarkerSeverity.Warning;case I.Information:return c.MarkerSeverity.Info;case I.Hint:return c.MarkerSeverity.Hint;default:return c.MarkerSeverity.Info}}function nt(e,n){let i=typeof n.code=="number"?String(n.code):n.code;return{severity:rt(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:i,source:n.source}}var it=class{constructor(e,n){this._worker=e,this._triggerCharacters=n}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.doComplete(t.toString(),A(n))).then(a=>{if(!a)return;const o=e.getWordUntilPosition(n),u=new c.Range(n.lineNumber,o.startColumn,n.lineNumber,o.endColumn),f=a.items.map(d=>{const v={label:d.label,insertText:d.insertText||d.label,sortText:d.sortText,filterText:d.filterText,documentation:d.documentation,detail:d.detail,command:st(d.command),range:u,kind:ot(d.kind)};return d.textEdit&&(at(d.textEdit)?v.range={insert:_(d.textEdit.insert),replace:_(d.textEdit.replace)}:v.range=_(d.textEdit.range),v.insertText=d.textEdit.newText),d.additionalTextEdits&&(v.additionalTextEdits=d.additionalTextEdits.map(j)),d.insertTextFormat===G.Snippet&&(v.insertTextRules=c.languages.CompletionItemInsertTextRule.InsertAsSnippet),v});return{isIncomplete:a.isIncomplete,suggestions:f}})}};function A(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function Se(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function _(e){if(e)return new c.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function at(e){return typeof e.insert<"u"&&typeof e.replace<"u"}function ot(e){const n=c.languages.CompletionItemKind;switch(e){case l.Text:return n.Text;case l.Method:return n.Method;case l.Function:return n.Function;case l.Constructor:return n.Constructor;case l.Field:return n.Field;case l.Variable:return n.Variable;case l.Class:return n.Class;case l.Interface:return n.Interface;case l.Module:return n.Module;case l.Property:return n.Property;case l.Unit:return n.Unit;case l.Value:return n.Value;case l.Enum:return n.Enum;case l.Keyword:return n.Keyword;case l.Snippet:return n.Snippet;case l.Color:return n.Color;case l.File:return n.File;case l.Reference:return n.Reference}return n.Property}function j(e){if(e)return{range:_(e.range),text:e.newText}}function st(e){return e&&e.command==="editor.action.triggerSuggest"?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var Te=class{constructor(e){this._worker=e}provideHover(e,n,i){let r=e.uri;return this._worker(r).then(t=>t.doHover(r.toString(),A(n))).then(t=>{if(t)return{range:_(t.range),contents:ct(t.contents)}})}};function ut(e){return e&&typeof e=="object"&&typeof e.kind=="string"}function Re(e){return typeof e=="string"?{value:e}:ut(e)?e.kind==="plaintext"?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+`
`+e.value+"\n```\n"}}function ct(e){if(e)return Array.isArray(e)?e.map(Re):[Re(e)]}var Fe=class{constructor(e){this._worker=e}provideDocumentHighlights(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.findDocumentHighlights(r.toString(),A(n))).then(t=>{if(t)return t.map(a=>({range:_(a.range),kind:dt(a.kind)}))})}};function dt(e){switch(e){case D.Read:return c.languages.DocumentHighlightKind.Read;case D.Write:return c.languages.DocumentHighlightKind.Write;case D.Text:return c.languages.DocumentHighlightKind.Text}return c.languages.DocumentHighlightKind.Text}var _t=class{constructor(e){this._worker=e}provideDefinition(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.findDefinition(r.toString(),A(n))).then(t=>{if(t)return[Le(t)]})}};function Le(e){return{uri:c.Uri.parse(e.uri),range:_(e.range)}}var wt=class{constructor(e){this._worker=e}provideReferences(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.findReferences(t.toString(),A(n))).then(a=>{if(a)return a.map(Le)})}},je=class{constructor(e){this._worker=e}provideRenameEdits(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.doRename(t.toString(),A(n),i)).then(a=>gt(a))}};function gt(e){if(!e||!e.changes)return;let n=[];for(let i in e.changes){const r=c.Uri.parse(i);for(let t of e.changes[i])n.push({resource:r,versionId:void 0,textEdit:{range:_(t.range),text:t.newText}})}return{edits:n}}var Ne=class{constructor(e){this._worker=e}provideDocumentSymbols(e,n){const i=e.uri;return this._worker(i).then(r=>r.findDocumentSymbols(i.toString())).then(r=>{if(r)return r.map(t=>({name:t.name,detail:"",containerName:t.containerName,kind:ft(t.kind),range:_(t.location.range),selectionRange:_(t.location.range),tags:[]}))})}};function ft(e){let n=c.languages.SymbolKind;switch(e){case h.File:return n.Array;case h.Module:return n.Module;case h.Namespace:return n.Namespace;case h.Package:return n.Package;case h.Class:return n.Class;case h.Method:return n.Method;case h.Property:return n.Property;case h.Field:return n.Field;case h.Constructor:return n.Constructor;case h.Enum:return n.Enum;case h.Interface:return n.Interface;case h.Function:return n.Function;case h.Variable:return n.Variable;case h.Constant:return n.Constant;case h.String:return n.String;case h.Number:return n.Number;case h.Boolean:return n.Boolean;case h.Array:return n.Array}return n.Function}var We=class{constructor(e){this._worker=e}provideLinks(e,n){const i=e.uri;return this._worker(i).then(r=>r.findDocumentLinks(i.toString())).then(r=>{if(r)return{links:r.map(t=>({range:_(t.range),url:t.target}))}})}},He=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.format(r.toString(),null,Oe(n)).then(a=>{if(!(!a||a.length===0))return a.map(j)}))}},Ue=class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,n,i,r){const t=e.uri;return this._worker(t).then(a=>a.format(t.toString(),Se(n),Oe(i)).then(o=>{if(!(!o||o.length===0))return o.map(j)}))}};function Oe(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var kt=class{constructor(e){this._worker=e}provideDocumentColors(e,n){const i=e.uri;return this._worker(i).then(r=>r.findDocumentColors(i.toString())).then(r=>{if(r)return r.map(t=>({color:t.color,range:_(t.range)}))})}provideColorPresentations(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.getColorPresentations(r.toString(),n.color,Se(n.range))).then(t=>{if(t)return t.map(a=>{let o={label:a.label};return a.textEdit&&(o.textEdit=j(a.textEdit)),a.additionalTextEdits&&(o.additionalTextEdits=a.additionalTextEdits.map(j)),o})})}},Ve=class{constructor(e){this._worker=e}provideFoldingRanges(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.getFoldingRanges(r.toString(),n)).then(t=>{if(t)return t.map(a=>{const o={start:a.startLine+1,end:a.endLine+1};return typeof a.kind<"u"&&(o.kind=lt(a.kind)),o})})}};function lt(e){switch(e){case R.Comment:return c.languages.FoldingRangeKind.Comment;case R.Imports:return c.languages.FoldingRangeKind.Imports;case R.Region:return c.languages.FoldingRangeKind.Region}}var ze=class{constructor(e){this._worker=e}provideSelectionRanges(e,n,i){const r=e.uri;return this._worker(r).then(t=>t.getSelectionRanges(r.toString(),n.map(A))).then(t=>{if(t)return t.map(a=>{const o=[];for(;a;)o.push({range:_(a.range)}),a=a.parent;return o})})}},Xe=class extends it{constructor(e){super(e,[".",":","<",'"',"=","/"])}};function bt(e){const n=new Me(e),i=(...t)=>n.getLanguageServiceWorker(...t);let r=e.languageId;c.languages.registerCompletionItemProvider(r,new Xe(i)),c.languages.registerHoverProvider(r,new Te(i)),c.languages.registerDocumentHighlightProvider(r,new Fe(i)),c.languages.registerLinkProvider(r,new We(i)),c.languages.registerFoldingRangeProvider(r,new Ve(i)),c.languages.registerDocumentSymbolProvider(r,new Ne(i)),c.languages.registerSelectionRangeProvider(r,new ze(i)),c.languages.registerRenameProvider(r,new je(i)),r==="html"&&(c.languages.registerDocumentFormattingEditProvider(r,new He(i)),c.languages.registerDocumentRangeFormattingEditProvider(r,new Ue(i)))}function Et(e){const n=[],i=[],r=new Me(e);n.push(r);const t=(...o)=>r.getLanguageServiceWorker(...o);function a(){const{languageId:o,modeConfiguration:u}=e;Be(i),u.completionItems&&i.push(c.languages.registerCompletionItemProvider(o,new Xe(t))),u.hovers&&i.push(c.languages.registerHoverProvider(o,new Te(t))),u.documentHighlights&&i.push(c.languages.registerDocumentHighlightProvider(o,new Fe(t))),u.links&&i.push(c.languages.registerLinkProvider(o,new We(t))),u.documentSymbols&&i.push(c.languages.registerDocumentSymbolProvider(o,new Ne(t))),u.rename&&i.push(c.languages.registerRenameProvider(o,new je(t))),u.foldingRanges&&i.push(c.languages.registerFoldingRangeProvider(o,new Ve(t))),u.selectionRanges&&i.push(c.languages.registerSelectionRangeProvider(o,new ze(t))),u.documentFormattingEdits&&i.push(c.languages.registerDocumentFormattingEditProvider(o,new He(t))),u.documentRangeFormattingEdits&&i.push(c.languages.registerDocumentRangeFormattingEditProvider(o,new Ue(t)))}return a(),n.push(De(i)),De(n)}function De(e){return{dispose:()=>Be(e)}}function Be(e){for(;e.length;)e.pop().dispose()}export{it as CompletionAdapter,_t as DefinitionAdapter,mt as DiagnosticsAdapter,kt as DocumentColorAdapter,He as DocumentFormattingEditProvider,Fe as DocumentHighlightAdapter,We as DocumentLinkAdapter,Ue as DocumentRangeFormattingEditProvider,Ne as DocumentSymbolAdapter,Ve as FoldingRangeAdapter,Te as HoverAdapter,wt as ReferenceAdapter,je as RenameAdapter,ze as SelectionRangeAdapter,Me as WorkerManager,A as fromPosition,Se as fromRange,Et as setupMode,bt as setupMode1,_ as toRange,j as toTextEdit};
