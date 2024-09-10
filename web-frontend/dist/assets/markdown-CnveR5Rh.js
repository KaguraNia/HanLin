import{g as ce}from"./index-CGkUgb9x.js";import{r as ne}from"./codemirror-CChpq4pQ.js";function de(P,R){for(var u=0;u<R.length;u++){const F=R[u];if(typeof F!="string"&&!Array.isArray(F)){for(const r in F)if(r!=="default"&&!(r in P)){const c=Object.getOwnPropertyDescriptor(F,r);c&&Object.defineProperty(P,r,c.get?c:{enumerable:!0,get:()=>F[r]})}}}return Object.freeze(Object.defineProperty(P,Symbol.toStringTag,{value:"Module"}))}var he={exports:{}},le={exports:{}},me;function pe(){return me||(me=1,function(P,R){(function(u){u(ne())})(function(u){var F={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},r={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};u.defineMode("xml",function(c,p){var d=c.indentUnit,l={},y=p.htmlMode?F:r;for(var L in y)l[L]=y[L];for(var L in p)l[L]=p[L];var A,s;function w(t,m){function n(B){return m.tokenize=B,B(t,m)}var x=t.next();if(x=="<")return t.eat("!")?t.eat("[")?t.match("CDATA[")?n(_("atom","]]>")):null:t.match("--")?n(_("comment","-->")):t.match("DOCTYPE",!0,!0)?(t.eatWhile(/[\w\._\-]/),n(G(1))):null:t.eat("?")?(t.eatWhile(/[\w\._\-]/),m.tokenize=_("meta","?>"),"meta"):(A=t.eat("/")?"closeTag":"openTag",m.tokenize=$,"tag bracket");if(x=="&"){var D;return t.eat("#")?t.eat("x")?D=t.eatWhile(/[a-fA-F\d]/)&&t.eat(";"):D=t.eatWhile(/[\d]/)&&t.eat(";"):D=t.eatWhile(/[\w\.\-:]/)&&t.eat(";"),D?"atom":"error"}else return t.eatWhile(/[^&<]/),null}w.isInText=!0;function $(t,m){var n=t.next();if(n==">"||n=="/"&&t.eat(">"))return m.tokenize=w,A=n==">"?"endTag":"selfcloseTag","tag bracket";if(n=="=")return A="equals",null;if(n=="<"){m.tokenize=w,m.state=j,m.tagName=m.tagStart=null;var x=m.tokenize(t,m);return x?x+" tag error":"tag error"}else return/[\'\"]/.test(n)?(m.tokenize=ee(n),m.stringStartCol=t.column(),m.tokenize(t,m)):(t.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function ee(t){var m=function(n,x){for(;!n.eol();)if(n.next()==t){x.tokenize=$;break}return"string"};return m.isInAttribute=!0,m}function _(t,m){return function(n,x){for(;!n.eol();){if(n.match(m)){x.tokenize=w;break}n.next()}return t}}function G(t){return function(m,n){for(var x;(x=m.next())!=null;){if(x=="<")return n.tokenize=G(t+1),n.tokenize(m,n);if(x==">")if(t==1){n.tokenize=w;break}else return n.tokenize=G(t-1),n.tokenize(m,n)}return"meta"}}function k(t){return t&&t.toLowerCase()}function ie(t,m,n){this.prev=t.context,this.tagName=m||"",this.indent=t.indented,this.startOfLine=n,(l.doNotIndent.hasOwnProperty(m)||t.context&&t.context.noIndent)&&(this.noIndent=!0)}function T(t){t.context&&(t.context=t.context.prev)}function U(t,m){for(var n;;){if(!t.context||(n=t.context.tagName,!l.contextGrabbers.hasOwnProperty(k(n))||!l.contextGrabbers[k(n)].hasOwnProperty(k(m))))return;T(t)}}function j(t,m,n){return t=="openTag"?(n.tagStart=m.column(),W):t=="closeTag"?q:j}function W(t,m,n){return t=="word"?(n.tagName=m.current(),s="tag",a):l.allowMissingTagName&&t=="endTag"?(s="tag bracket",a(t,m,n)):(s="error",W)}function q(t,m,n){if(t=="word"){var x=m.current();return n.context&&n.context.tagName!=x&&l.implicitlyClosed.hasOwnProperty(k(n.context.tagName))&&T(n),n.context&&n.context.tagName==x||l.matchClosing===!1?(s="tag",E):(s="tag error",X)}else return l.allowMissingTagName&&t=="endTag"?(s="tag bracket",E(t,m,n)):(s="error",X)}function E(t,m,n){return t!="endTag"?(s="error",E):(T(n),j)}function X(t,m,n){return s="error",E(t,m,n)}function a(t,m,n){if(t=="word")return s="attribute",te;if(t=="endTag"||t=="selfcloseTag"){var x=n.tagName,D=n.tagStart;return n.tagName=n.tagStart=null,t=="selfcloseTag"||l.autoSelfClosers.hasOwnProperty(k(x))?U(n,x):(U(n,x),n.context=new ie(n,x,D==n.indented)),j}return s="error",a}function te(t,m,n){return t=="equals"?S:(l.allowMissing||(s="error"),a(t,m,n))}function S(t,m,n){return t=="string"?J:t=="word"&&l.allowUnquoted?(s="string",a):(s="error",a(t,m,n))}function J(t,m,n){return t=="string"?J:a(t,m,n)}return{startState:function(t){var m={tokenize:w,state:j,indented:t||0,tagName:null,tagStart:null,context:null};return t!=null&&(m.baseIndent=t),m},token:function(t,m){if(!m.tagName&&t.sol()&&(m.indented=t.indentation()),t.eatSpace())return null;A=null;var n=m.tokenize(t,m);return(n||A)&&n!="comment"&&(s=null,m.state=m.state(A||n,t,m),s&&(n=s=="error"?n+" error":s)),n},indent:function(t,m,n){var x=t.context;if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+d;if(x&&x.noIndent)return u.Pass;if(t.tokenize!=$&&t.tokenize!=w)return n?n.match(/^(\s*)/)[0].length:0;if(t.tagName)return l.multilineTagIndentPastTag!==!1?t.tagStart+t.tagName.length+2:t.tagStart+d*(l.multilineTagIndentFactor||1);if(l.alignCDATA&&/<!\[CDATA\[/.test(m))return 0;var D=m&&/^<(\/)?([\w_:\.-]*)/.exec(m);if(D&&D[1])for(;x;)if(x.tagName==D[2]){x=x.prev;break}else if(l.implicitlyClosed.hasOwnProperty(k(x.tagName)))x=x.prev;else break;else if(D)for(;x;){var B=l.contextGrabbers[k(x.tagName)];if(B&&B.hasOwnProperty(k(D[2])))x=x.prev;else break}for(;x&&x.prev&&!x.startOfLine;)x=x.prev;return x?x.indent+d:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:l.htmlMode?"html":"xml",helperType:l.htmlMode?"html":"xml",skipAttribute:function(t){t.state==S&&(t.state=a)},xmlCurrentTag:function(t){return t.tagName?{name:t.tagName,close:t.type=="closeTag"}:null},xmlCurrentContext:function(t){for(var m=[],n=t.context;n;n=n.prev)m.push(n.tagName);return m.reverse()}}}),u.defineMIME("text/xml","xml"),u.defineMIME("application/xml","xml"),u.mimeModes.hasOwnProperty("text/html")||u.defineMIME("text/html",{name:"xml",htmlMode:!0})})}()),le.exports}var oe={exports:{}},ue;function se(){return ue||(ue=1,function(P,R){(function(u){u(ne())})(function(u){u.modeInfo=[{name:"APL",mime:"text/apl",mode:"apl",ext:["dyalog","apl"]},{name:"PGP",mimes:["application/pgp","application/pgp-encrypted","application/pgp-keys","application/pgp-signature"],mode:"asciiarmor",ext:["asc","pgp","sig"]},{name:"ASN.1",mime:"text/x-ttcn-asn",mode:"asn.1",ext:["asn","asn1"]},{name:"Asterisk",mime:"text/x-asterisk",mode:"asterisk",file:/^extensions\.conf$/i},{name:"Brainfuck",mime:"text/x-brainfuck",mode:"brainfuck",ext:["b","bf"]},{name:"C",mime:"text/x-csrc",mode:"clike",ext:["c","h","ino"]},{name:"C++",mime:"text/x-c++src",mode:"clike",ext:["cpp","c++","cc","cxx","hpp","h++","hh","hxx"],alias:["cpp"]},{name:"Cobol",mime:"text/x-cobol",mode:"cobol",ext:["cob","cpy","cbl"]},{name:"C#",mime:"text/x-csharp",mode:"clike",ext:["cs"],alias:["csharp","cs"]},{name:"Clojure",mime:"text/x-clojure",mode:"clojure",ext:["clj","cljc","cljx"]},{name:"ClojureScript",mime:"text/x-clojurescript",mode:"clojure",ext:["cljs"]},{name:"Closure Stylesheets (GSS)",mime:"text/x-gss",mode:"css",ext:["gss"]},{name:"CMake",mime:"text/x-cmake",mode:"cmake",ext:["cmake","cmake.in"],file:/^CMakeLists\.txt$/},{name:"CoffeeScript",mimes:["application/vnd.coffeescript","text/coffeescript","text/x-coffeescript"],mode:"coffeescript",ext:["coffee"],alias:["coffee","coffee-script"]},{name:"Common Lisp",mime:"text/x-common-lisp",mode:"commonlisp",ext:["cl","lisp","el"],alias:["lisp"]},{name:"Cypher",mime:"application/x-cypher-query",mode:"cypher",ext:["cyp","cypher"]},{name:"Cython",mime:"text/x-cython",mode:"python",ext:["pyx","pxd","pxi"]},{name:"Crystal",mime:"text/x-crystal",mode:"crystal",ext:["cr"]},{name:"CSS",mime:"text/css",mode:"css",ext:["css"]},{name:"CQL",mime:"text/x-cassandra",mode:"sql",ext:["cql"]},{name:"D",mime:"text/x-d",mode:"d",ext:["d"]},{name:"Dart",mimes:["application/dart","text/x-dart"],mode:"dart",ext:["dart"]},{name:"diff",mime:"text/x-diff",mode:"diff",ext:["diff","patch"]},{name:"Django",mime:"text/x-django",mode:"django"},{name:"Dockerfile",mime:"text/x-dockerfile",mode:"dockerfile",file:/^Dockerfile$/},{name:"DTD",mime:"application/xml-dtd",mode:"dtd",ext:["dtd"]},{name:"Dylan",mime:"text/x-dylan",mode:"dylan",ext:["dylan","dyl","intr"]},{name:"EBNF",mime:"text/x-ebnf",mode:"ebnf"},{name:"ECL",mime:"text/x-ecl",mode:"ecl",ext:["ecl"]},{name:"edn",mime:"application/edn",mode:"clojure",ext:["edn"]},{name:"Eiffel",mime:"text/x-eiffel",mode:"eiffel",ext:["e"]},{name:"Elm",mime:"text/x-elm",mode:"elm",ext:["elm"]},{name:"Embedded JavaScript",mime:"application/x-ejs",mode:"htmlembedded",ext:["ejs"]},{name:"Embedded Ruby",mime:"application/x-erb",mode:"htmlembedded",ext:["erb"]},{name:"Erlang",mime:"text/x-erlang",mode:"erlang",ext:["erl"]},{name:"Esper",mime:"text/x-esper",mode:"sql"},{name:"Factor",mime:"text/x-factor",mode:"factor",ext:["factor"]},{name:"FCL",mime:"text/x-fcl",mode:"fcl"},{name:"Forth",mime:"text/x-forth",mode:"forth",ext:["forth","fth","4th"]},{name:"Fortran",mime:"text/x-fortran",mode:"fortran",ext:["f","for","f77","f90","f95"]},{name:"F#",mime:"text/x-fsharp",mode:"mllike",ext:["fs"],alias:["fsharp"]},{name:"Gas",mime:"text/x-gas",mode:"gas",ext:["s"]},{name:"Gherkin",mime:"text/x-feature",mode:"gherkin",ext:["feature"]},{name:"GitHub Flavored Markdown",mime:"text/x-gfm",mode:"gfm",file:/^(readme|contributing|history)\.md$/i},{name:"Go",mime:"text/x-go",mode:"go",ext:["go"]},{name:"Groovy",mime:"text/x-groovy",mode:"groovy",ext:["groovy","gradle"],file:/^Jenkinsfile$/},{name:"HAML",mime:"text/x-haml",mode:"haml",ext:["haml"]},{name:"Haskell",mime:"text/x-haskell",mode:"haskell",ext:["hs"]},{name:"Haskell (Literate)",mime:"text/x-literate-haskell",mode:"haskell-literate",ext:["lhs"]},{name:"Haxe",mime:"text/x-haxe",mode:"haxe",ext:["hx"]},{name:"HXML",mime:"text/x-hxml",mode:"haxe",ext:["hxml"]},{name:"ASP.NET",mime:"application/x-aspx",mode:"htmlembedded",ext:["aspx"],alias:["asp","aspx"]},{name:"HTML",mime:"text/html",mode:"htmlmixed",ext:["html","htm","handlebars","hbs"],alias:["xhtml"]},{name:"HTTP",mime:"message/http",mode:"http"},{name:"IDL",mime:"text/x-idl",mode:"idl",ext:["pro"]},{name:"Pug",mime:"text/x-pug",mode:"pug",ext:["jade","pug"],alias:["jade"]},{name:"Java",mime:"text/x-java",mode:"clike",ext:["java"]},{name:"Java Server Pages",mime:"application/x-jsp",mode:"htmlembedded",ext:["jsp"],alias:["jsp"]},{name:"JavaScript",mimes:["text/javascript","text/ecmascript","application/javascript","application/x-javascript","application/ecmascript"],mode:"javascript",ext:["js"],alias:["ecmascript","js","node"]},{name:"JSON",mimes:["application/json","application/x-json"],mode:"javascript",ext:["json","map"],alias:["json5"]},{name:"JSON-LD",mime:"application/ld+json",mode:"javascript",ext:["jsonld"],alias:["jsonld"]},{name:"JSX",mime:"text/jsx",mode:"jsx",ext:["jsx"]},{name:"Jinja2",mime:"text/jinja2",mode:"jinja2",ext:["j2","jinja","jinja2"]},{name:"Julia",mime:"text/x-julia",mode:"julia",ext:["jl"],alias:["jl"]},{name:"Kotlin",mime:"text/x-kotlin",mode:"clike",ext:["kt"]},{name:"LESS",mime:"text/x-less",mode:"css",ext:["less"]},{name:"LiveScript",mime:"text/x-livescript",mode:"livescript",ext:["ls"],alias:["ls"]},{name:"Lua",mime:"text/x-lua",mode:"lua",ext:["lua"]},{name:"Markdown",mime:"text/x-markdown",mode:"markdown",ext:["markdown","md","mkd"]},{name:"mIRC",mime:"text/mirc",mode:"mirc"},{name:"MariaDB SQL",mime:"text/x-mariadb",mode:"sql"},{name:"Mathematica",mime:"text/x-mathematica",mode:"mathematica",ext:["m","nb","wl","wls"]},{name:"Modelica",mime:"text/x-modelica",mode:"modelica",ext:["mo"]},{name:"MUMPS",mime:"text/x-mumps",mode:"mumps",ext:["mps"]},{name:"MS SQL",mime:"text/x-mssql",mode:"sql"},{name:"mbox",mime:"application/mbox",mode:"mbox",ext:["mbox"]},{name:"MySQL",mime:"text/x-mysql",mode:"sql"},{name:"Nginx",mime:"text/x-nginx-conf",mode:"nginx",file:/nginx.*\.conf$/i},{name:"NSIS",mime:"text/x-nsis",mode:"nsis",ext:["nsh","nsi"]},{name:"NTriples",mimes:["application/n-triples","application/n-quads","text/n-triples"],mode:"ntriples",ext:["nt","nq"]},{name:"Objective-C",mime:"text/x-objectivec",mode:"clike",ext:["m"],alias:["objective-c","objc"]},{name:"Objective-C++",mime:"text/x-objectivec++",mode:"clike",ext:["mm"],alias:["objective-c++","objc++"]},{name:"OCaml",mime:"text/x-ocaml",mode:"mllike",ext:["ml","mli","mll","mly"]},{name:"Octave",mime:"text/x-octave",mode:"octave",ext:["m"]},{name:"Oz",mime:"text/x-oz",mode:"oz",ext:["oz"]},{name:"Pascal",mime:"text/x-pascal",mode:"pascal",ext:["p","pas"]},{name:"PEG.js",mime:"null",mode:"pegjs",ext:["jsonld"]},{name:"Perl",mime:"text/x-perl",mode:"perl",ext:["pl","pm"]},{name:"PHP",mimes:["text/x-php","application/x-httpd-php","application/x-httpd-php-open"],mode:"php",ext:["php","php3","php4","php5","php7","phtml"]},{name:"Pig",mime:"text/x-pig",mode:"pig",ext:["pig"]},{name:"Plain Text",mime:"text/plain",mode:"null",ext:["txt","text","conf","def","list","log"]},{name:"PLSQL",mime:"text/x-plsql",mode:"sql",ext:["pls"]},{name:"PostgreSQL",mime:"text/x-pgsql",mode:"sql"},{name:"PowerShell",mime:"application/x-powershell",mode:"powershell",ext:["ps1","psd1","psm1"]},{name:"Properties files",mime:"text/x-properties",mode:"properties",ext:["properties","ini","in"],alias:["ini","properties"]},{name:"ProtoBuf",mime:"text/x-protobuf",mode:"protobuf",ext:["proto"]},{name:"Python",mime:"text/x-python",mode:"python",ext:["BUILD","bzl","py","pyw"],file:/^(BUCK|BUILD)$/},{name:"Puppet",mime:"text/x-puppet",mode:"puppet",ext:["pp"]},{name:"Q",mime:"text/x-q",mode:"q",ext:["q"]},{name:"R",mime:"text/x-rsrc",mode:"r",ext:["r","R"],alias:["rscript"]},{name:"reStructuredText",mime:"text/x-rst",mode:"rst",ext:["rst"],alias:["rst"]},{name:"RPM Changes",mime:"text/x-rpm-changes",mode:"rpm"},{name:"RPM Spec",mime:"text/x-rpm-spec",mode:"rpm",ext:["spec"]},{name:"Ruby",mime:"text/x-ruby",mode:"ruby",ext:["rb"],alias:["jruby","macruby","rake","rb","rbx"]},{name:"Rust",mime:"text/x-rustsrc",mode:"rust",ext:["rs"]},{name:"SAS",mime:"text/x-sas",mode:"sas",ext:["sas"]},{name:"Sass",mime:"text/x-sass",mode:"sass",ext:["sass"]},{name:"Scala",mime:"text/x-scala",mode:"clike",ext:["scala"]},{name:"Scheme",mime:"text/x-scheme",mode:"scheme",ext:["scm","ss"]},{name:"SCSS",mime:"text/x-scss",mode:"css",ext:["scss"]},{name:"Shell",mimes:["text/x-sh","application/x-sh"],mode:"shell",ext:["sh","ksh","bash"],alias:["bash","sh","zsh"],file:/^PKGBUILD$/},{name:"Sieve",mime:"application/sieve",mode:"sieve",ext:["siv","sieve"]},{name:"Slim",mimes:["text/x-slim","application/x-slim"],mode:"slim",ext:["slim"]},{name:"Smalltalk",mime:"text/x-stsrc",mode:"smalltalk",ext:["st"]},{name:"Smarty",mime:"text/x-smarty",mode:"smarty",ext:["tpl"]},{name:"Solr",mime:"text/x-solr",mode:"solr"},{name:"SML",mime:"text/x-sml",mode:"mllike",ext:["sml","sig","fun","smackspec"]},{name:"Soy",mime:"text/x-soy",mode:"soy",ext:["soy"],alias:["closure template"]},{name:"SPARQL",mime:"application/sparql-query",mode:"sparql",ext:["rq","sparql"],alias:["sparul"]},{name:"Spreadsheet",mime:"text/x-spreadsheet",mode:"spreadsheet",alias:["excel","formula"]},{name:"SQL",mime:"text/x-sql",mode:"sql",ext:["sql"]},{name:"SQLite",mime:"text/x-sqlite",mode:"sql"},{name:"Squirrel",mime:"text/x-squirrel",mode:"clike",ext:["nut"]},{name:"Stylus",mime:"text/x-styl",mode:"stylus",ext:["styl"]},{name:"Swift",mime:"text/x-swift",mode:"swift",ext:["swift"]},{name:"sTeX",mime:"text/x-stex",mode:"stex"},{name:"LaTeX",mime:"text/x-latex",mode:"stex",ext:["text","ltx","tex"],alias:["tex"]},{name:"SystemVerilog",mime:"text/x-systemverilog",mode:"verilog",ext:["v","sv","svh"]},{name:"Tcl",mime:"text/x-tcl",mode:"tcl",ext:["tcl"]},{name:"Textile",mime:"text/x-textile",mode:"textile",ext:["textile"]},{name:"TiddlyWiki",mime:"text/x-tiddlywiki",mode:"tiddlywiki"},{name:"Tiki wiki",mime:"text/tiki",mode:"tiki"},{name:"TOML",mime:"text/x-toml",mode:"toml",ext:["toml"]},{name:"Tornado",mime:"text/x-tornado",mode:"tornado"},{name:"troff",mime:"text/troff",mode:"troff",ext:["1","2","3","4","5","6","7","8","9"]},{name:"TTCN",mime:"text/x-ttcn",mode:"ttcn",ext:["ttcn","ttcn3","ttcnpp"]},{name:"TTCN_CFG",mime:"text/x-ttcn-cfg",mode:"ttcn-cfg",ext:["cfg"]},{name:"Turtle",mime:"text/turtle",mode:"turtle",ext:["ttl"]},{name:"TypeScript",mime:"application/typescript",mode:"javascript",ext:["ts"],alias:["ts"]},{name:"TypeScript-JSX",mime:"text/typescript-jsx",mode:"jsx",ext:["tsx"],alias:["tsx"]},{name:"Twig",mime:"text/x-twig",mode:"twig"},{name:"Web IDL",mime:"text/x-webidl",mode:"webidl",ext:["webidl"]},{name:"VB.NET",mime:"text/x-vb",mode:"vb",ext:["vb"]},{name:"VBScript",mime:"text/vbscript",mode:"vbscript",ext:["vbs"]},{name:"Velocity",mime:"text/velocity",mode:"velocity",ext:["vtl"]},{name:"Verilog",mime:"text/x-verilog",mode:"verilog",ext:["v"]},{name:"VHDL",mime:"text/x-vhdl",mode:"vhdl",ext:["vhd","vhdl"]},{name:"Vue.js Component",mimes:["script/x-vue","text/x-vue"],mode:"vue",ext:["vue"]},{name:"XML",mimes:["application/xml","text/xml"],mode:"xml",ext:["xml","xsl","xsd","svg"],alias:["rss","wsdl","xsd"]},{name:"XQuery",mime:"application/xquery",mode:"xquery",ext:["xy","xquery"]},{name:"Yacas",mime:"text/x-yacas",mode:"yacas",ext:["ys"]},{name:"YAML",mimes:["text/x-yaml","text/yaml"],mode:"yaml",ext:["yaml","yml"],alias:["yml"]},{name:"Z80",mime:"text/x-z80",mode:"z80",ext:["z80"]},{name:"mscgen",mime:"text/x-mscgen",mode:"mscgen",ext:["mscgen","mscin","msc"]},{name:"xu",mime:"text/x-xu",mode:"mscgen",ext:["xu"]},{name:"msgenny",mime:"text/x-msgenny",mode:"mscgen",ext:["msgenny"]},{name:"WebAssembly",mime:"text/webassembly",mode:"wast",ext:["wat","wast"]}];for(var F=0;F<u.modeInfo.length;F++){var r=u.modeInfo[F];r.mimes&&(r.mime=r.mimes[0])}u.findModeByMIME=function(c){c=c.toLowerCase();for(var p=0;p<u.modeInfo.length;p++){var d=u.modeInfo[p];if(d.mime==c)return d;if(d.mimes){for(var l=0;l<d.mimes.length;l++)if(d.mimes[l]==c)return d}}if(/\+xml$/.test(c))return u.findModeByMIME("application/xml");if(/\+json$/.test(c))return u.findModeByMIME("application/json")},u.findModeByExtension=function(c){c=c.toLowerCase();for(var p=0;p<u.modeInfo.length;p++){var d=u.modeInfo[p];if(d.ext){for(var l=0;l<d.ext.length;l++)if(d.ext[l]==c)return d}}},u.findModeByFileName=function(c){for(var p=0;p<u.modeInfo.length;p++){var d=u.modeInfo[p];if(d.file&&d.file.test(c))return d}var l=c.lastIndexOf("."),y=l>-1&&c.substring(l+1,c.length);if(y)return u.findModeByExtension(y)},u.findModeByName=function(c){c=c.toLowerCase();for(var p=0;p<u.modeInfo.length;p++){var d=u.modeInfo[p];if(d.name.toLowerCase()==c)return d;if(d.alias){for(var l=0;l<d.alias.length;l++)if(d.alias[l].toLowerCase()==c)return d}}}})}()),oe.exports}(function(P,R){(function(u){u(ne(),pe(),se())})(function(u){u.defineMode("markdown",function(F,r){var c=u.getMode(F,"text/html"),p=c.name=="null";function d(i){if(u.findModeByName){var e=u.findModeByName(i);e&&(i=e.mime||e.mimes[0])}var o=u.getMode(F,i);return o.name=="null"?null:o}r.highlightFormatting===void 0&&(r.highlightFormatting=!1),r.maxBlockquoteDepth===void 0&&(r.maxBlockquoteDepth=0),r.taskLists===void 0&&(r.taskLists=!1),r.strikethrough===void 0&&(r.strikethrough=!1),r.emoji===void 0&&(r.emoji=!1),r.fencedCodeBlockHighlighting===void 0&&(r.fencedCodeBlockHighlighting=!0),r.fencedCodeBlockDefaultMode===void 0&&(r.fencedCodeBlockDefaultMode="text/plain"),r.xml===void 0&&(r.xml=!0),r.tokenTypeOverrides===void 0&&(r.tokenTypeOverrides={});var l={header:"header",code:"comment",quote:"quote",list1:"variable-2",list2:"variable-3",list3:"keyword",hr:"hr",image:"image",imageAltText:"image-alt-text",imageMarker:"image-marker",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough",emoji:"builtin"};for(var y in l)l.hasOwnProperty(y)&&r.tokenTypeOverrides[y]&&(l[y]=r.tokenTypeOverrides[y]);var L=/^([*\-_])(?:\s*\1){2,}\s*$/,A=/^(?:[*\-+]|^[0-9]+([.)]))\s+/,s=/^\[(x| )\](?=\s)/i,w=r.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,$=/^ {0,3}(?:\={1,}|-{2,})\s*$/,ee=/^[^#!\[\]*_\\<>` "'(~:]+/,_=/^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,G=/^\s*\[[^\]]+?\]:.*$/,k=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,ie="    ";function T(i,e,o){return e.f=e.inline=o,o(i,e)}function U(i,e,o){return e.f=e.block=o,o(i,e)}function j(i){return!i||!/\S/.test(i.string)}function W(i){if(i.linkTitle=!1,i.linkHref=!1,i.linkText=!1,i.em=!1,i.strong=!1,i.strikethrough=!1,i.quote=0,i.indentedCode=!1,i.f==E){var e=p;if(!e){var o=u.innerMode(c,i.htmlState);e=o.mode.name=="xml"&&o.state.tagStart===null&&!o.state.context&&o.state.tokenize.isInText}e&&(i.f=S,i.block=q,i.htmlState=null)}return i.trailingSpace=0,i.trailingSpaceNewLine=!1,i.prevLine=i.thisLine,i.thisLine={stream:null},null}function q(i,e){var o=i.column()===e.indentation,h=j(e.prevLine.stream),f=e.indentedCode,b=e.prevLine.hr,Q=e.list!==!1,I=(e.listStack[e.listStack.length-1]||0)+3;e.indentedCode=!1;var M=e.indentation;if(e.indentationDiff===null&&(e.indentationDiff=e.indentation,Q)){for(e.list=null;M<e.listStack[e.listStack.length-1];)e.listStack.pop(),e.listStack.length?e.indentation=e.listStack[e.listStack.length-1]:e.list=!1;e.list!==!1&&(e.indentationDiff=M-e.listStack[e.listStack.length-1])}var N=!h&&!b&&!e.prevLine.header&&(!Q||!f)&&!e.prevLine.fencedCodeEnd,g=(e.list===!1||b||h)&&e.indentation<=I&&i.match(L),v=null;if(e.indentationDiff>=4&&(f||e.prevLine.fencedCodeEnd||e.prevLine.header||h))return i.skipToEnd(),e.indentedCode=!0,l.code;if(i.eatSpace())return null;if(o&&e.indentation<=I&&(v=i.match(w))&&v[1].length<=6)return e.quote=0,e.header=v[1].length,e.thisLine.header=!0,r.highlightFormatting&&(e.formatting="header"),e.f=e.inline,a(e);if(e.indentation<=I&&i.eat(">"))return e.quote=o?1:e.quote+1,r.highlightFormatting&&(e.formatting="quote"),i.eatSpace(),a(e);if(!g&&!e.setext&&o&&e.indentation<=I&&(v=i.match(A))){var V=v[1]?"ol":"ul";return e.indentation=M+i.current().length,e.list=!0,e.quote=0,e.listStack.push(e.indentation),e.em=!1,e.strong=!1,e.code=!1,e.strikethrough=!1,r.taskLists&&i.match(s,!1)&&(e.taskList=!0),e.f=e.inline,r.highlightFormatting&&(e.formatting=["list","list-"+V]),a(e)}else{if(o&&e.indentation<=I&&(v=i.match(_,!0)))return e.quote=0,e.fencedEndRE=new RegExp(v[1]+"+ *$"),e.localMode=r.fencedCodeBlockHighlighting&&d(v[2]||r.fencedCodeBlockDefaultMode),e.localMode&&(e.localState=u.startState(e.localMode)),e.f=e.block=X,r.highlightFormatting&&(e.formatting="code-block"),e.code=-1,a(e);if(e.setext||(!N||!Q)&&!e.quote&&e.list===!1&&!e.code&&!g&&!G.test(i.string)&&(v=i.lookAhead(1))&&(v=v.match($)))return e.setext?(e.header=e.setext,e.setext=0,i.skipToEnd(),r.highlightFormatting&&(e.formatting="header")):(e.header=v[0].charAt(0)=="="?1:2,e.setext=e.header),e.thisLine.header=!0,e.f=e.inline,a(e);if(g)return i.skipToEnd(),e.hr=!0,e.thisLine.hr=!0,l.hr;if(i.peek()==="[")return T(i,e,x)}return T(i,e,e.inline)}function E(i,e){var o=c.token(i,e.htmlState);if(!p){var h=u.innerMode(c,e.htmlState);(h.mode.name=="xml"&&h.state.tagStart===null&&!h.state.context&&h.state.tokenize.isInText||e.md_inside&&i.current().indexOf(">")>-1)&&(e.f=S,e.block=q,e.htmlState=null)}return o}function X(i,e){var o=e.listStack[e.listStack.length-1]||0,h=e.indentation<o,f=o+3;if(e.fencedEndRE&&e.indentation<=f&&(h||i.match(e.fencedEndRE))){r.highlightFormatting&&(e.formatting="code-block");var b;return h||(b=a(e)),e.localMode=e.localState=null,e.block=q,e.f=S,e.fencedEndRE=null,e.code=0,e.thisLine.fencedCodeEnd=!0,h?U(i,e,e.block):b}else return e.localMode?e.localMode.token(i,e.localState):(i.skipToEnd(),l.code)}function a(i){var e=[];if(i.formatting){e.push(l.formatting),typeof i.formatting=="string"&&(i.formatting=[i.formatting]);for(var o=0;o<i.formatting.length;o++)e.push(l.formatting+"-"+i.formatting[o]),i.formatting[o]==="header"&&e.push(l.formatting+"-"+i.formatting[o]+"-"+i.header),i.formatting[o]==="quote"&&(!r.maxBlockquoteDepth||r.maxBlockquoteDepth>=i.quote?e.push(l.formatting+"-"+i.formatting[o]+"-"+i.quote):e.push("error"))}if(i.taskOpen)return e.push("meta"),e.length?e.join(" "):null;if(i.taskClosed)return e.push("property"),e.length?e.join(" "):null;if(i.linkHref?e.push(l.linkHref,"url"):(i.strong&&e.push(l.strong),i.em&&e.push(l.em),i.strikethrough&&e.push(l.strikethrough),i.emoji&&e.push(l.emoji),i.linkText&&e.push(l.linkText),i.code&&e.push(l.code),i.image&&e.push(l.image),i.imageAltText&&e.push(l.imageAltText,"link"),i.imageMarker&&e.push(l.imageMarker)),i.header&&e.push(l.header,l.header+"-"+i.header),i.quote&&(e.push(l.quote),!r.maxBlockquoteDepth||r.maxBlockquoteDepth>=i.quote?e.push(l.quote+"-"+i.quote):e.push(l.quote+"-"+r.maxBlockquoteDepth)),i.list!==!1){var h=(i.listStack.length-1)%3;h?h===1?e.push(l.list2):e.push(l.list3):e.push(l.list1)}return i.trailingSpaceNewLine?e.push("trailing-space-new-line"):i.trailingSpace&&e.push("trailing-space-"+(i.trailingSpace%2?"a":"b")),e.length?e.join(" "):null}function te(i,e){if(i.match(ee,!0))return a(e)}function S(i,e){var o=e.text(i,e);if(typeof o<"u")return o;if(e.list)return e.list=null,a(e);if(e.taskList){var h=i.match(s,!0)[1]===" ";return h?e.taskOpen=!0:e.taskClosed=!0,r.highlightFormatting&&(e.formatting="task"),e.taskList=!1,a(e)}if(e.taskOpen=!1,e.taskClosed=!1,e.header&&i.match(/^#+$/,!0))return r.highlightFormatting&&(e.formatting="header"),a(e);var f=i.next();if(e.linkTitle){e.linkTitle=!1;var b=f;f==="("&&(b=")"),b=(b+"").replace(/([.?*+^\[\]\\(){}|-])/g,"\\$1");var Q="^\\s*(?:[^"+b+"\\\\]+|\\\\\\\\|\\\\.)"+b;if(i.match(new RegExp(Q),!0))return l.linkHref}if(f==="`"){var I=e.formatting;r.highlightFormatting&&(e.formatting="code"),i.eatWhile("`");var M=i.current().length;if(e.code==0&&(!e.quote||M==1))return e.code=M,a(e);if(M==e.code){var N=a(e);return e.code=0,N}else return e.formatting=I,a(e)}else if(e.code)return a(e);if(f==="\\"&&(i.next(),r.highlightFormatting)){var g=a(e),v=l.formatting+"-escape";return g?g+" "+v:v}if(f==="!"&&i.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return e.imageMarker=!0,e.image=!0,r.highlightFormatting&&(e.formatting="image"),a(e);if(f==="["&&e.imageMarker&&i.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/,!1))return e.imageMarker=!1,e.imageAltText=!0,r.highlightFormatting&&(e.formatting="image"),a(e);if(f==="]"&&e.imageAltText){r.highlightFormatting&&(e.formatting="image");var g=a(e);return e.imageAltText=!1,e.image=!1,e.inline=e.f=t,g}if(f==="["&&!e.image)return e.linkText&&i.match(/^.*?\]/)||(e.linkText=!0,r.highlightFormatting&&(e.formatting="link")),a(e);if(f==="]"&&e.linkText){r.highlightFormatting&&(e.formatting="link");var g=a(e);return e.linkText=!1,e.inline=e.f=i.match(/\(.*?\)| ?\[.*?\]/,!1)?t:S,g}if(f==="<"&&i.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1)){e.f=e.inline=J,r.highlightFormatting&&(e.formatting="link");var g=a(e);return g?g+=" ":g="",g+l.linkInline}if(f==="<"&&i.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1)){e.f=e.inline=J,r.highlightFormatting&&(e.formatting="link");var g=a(e);return g?g+=" ":g="",g+l.linkEmail}if(r.xml&&f==="<"&&i.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,!1)){var V=i.string.indexOf(">",i.pos);if(V!=-1){var xe=i.string.substring(i.start,V);/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(xe)&&(e.md_inside=!0)}return i.backUp(1),e.htmlState=u.startState(c),U(i,e,E)}if(r.xml&&f==="<"&&i.match(/^\/\w*?>/))return e.md_inside=!1,"tag";if(f==="*"||f==="_"){for(var K=1,z=i.pos==1?" ":i.string.charAt(i.pos-2);K<3&&i.eat(f);)K++;var C=i.peek()||" ",Y=!/\s/.test(C)&&(!k.test(C)||/\s/.test(z)||k.test(z)),Z=!/\s/.test(z)&&(!k.test(z)||/\s/.test(C)||k.test(C)),O=null,H=null;if(K%2&&(!e.em&&Y&&(f==="*"||!Z||k.test(z))?O=!0:e.em==f&&Z&&(f==="*"||!Y||k.test(C))&&(O=!1)),K>1&&(!e.strong&&Y&&(f==="*"||!Z||k.test(z))?H=!0:e.strong==f&&Z&&(f==="*"||!Y||k.test(C))&&(H=!1)),H!=null||O!=null){r.highlightFormatting&&(e.formatting=O==null?"strong":H==null?"em":"strong em"),O===!0&&(e.em=f),H===!0&&(e.strong=f);var N=a(e);return O===!1&&(e.em=!1),H===!1&&(e.strong=!1),N}}else if(f===" "&&(i.eat("*")||i.eat("_"))){if(i.peek()===" ")return a(e);i.backUp(1)}if(r.strikethrough){if(f==="~"&&i.eatWhile(f)){if(e.strikethrough){r.highlightFormatting&&(e.formatting="strikethrough");var N=a(e);return e.strikethrough=!1,N}else if(i.match(/^[^\s]/,!1))return e.strikethrough=!0,r.highlightFormatting&&(e.formatting="strikethrough"),a(e)}else if(f===" "&&i.match("~~",!0)){if(i.peek()===" ")return a(e);i.backUp(2)}}if(r.emoji&&f===":"&&i.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)){e.emoji=!0,r.highlightFormatting&&(e.formatting="emoji");var fe=a(e);return e.emoji=!1,fe}return f===" "&&(i.match(/^ +$/,!1)?e.trailingSpace++:e.trailingSpace&&(e.trailingSpaceNewLine=!0)),a(e)}function J(i,e){var o=i.next();if(o===">"){e.f=e.inline=S,r.highlightFormatting&&(e.formatting="link");var h=a(e);return h?h+=" ":h="",h+l.linkInline}return i.match(/^[^>]+/,!0),l.linkInline}function t(i,e){if(i.eatSpace())return null;var o=i.next();return o==="("||o==="["?(e.f=e.inline=n(o==="("?")":"]"),r.highlightFormatting&&(e.formatting="link-string"),e.linkHref=!0,a(e)):"error"}var m={")":/^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,"]":/^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/};function n(i){return function(e,o){var h=e.next();if(h===i){o.f=o.inline=S,r.highlightFormatting&&(o.formatting="link-string");var f=a(o);return o.linkHref=!1,f}return e.match(m[i]),o.linkHref=!0,a(o)}}function x(i,e){return i.match(/^([^\]\\]|\\.)*\]:/,!1)?(e.f=D,i.next(),r.highlightFormatting&&(e.formatting="link"),e.linkText=!0,a(e)):T(i,e,S)}function D(i,e){if(i.match("]:",!0)){e.f=e.inline=B,r.highlightFormatting&&(e.formatting="link");var o=a(e);return e.linkText=!1,o}return i.match(/^([^\]\\]|\\.)+/,!0),l.linkText}function B(i,e){return i.eatSpace()?null:(i.match(/^[^\s]+/,!0),i.peek()===void 0?e.linkTitle=!0:i.match(/^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/,!0),e.f=e.inline=S,l.linkHref+" url")}var re={startState:function(){return{f:q,prevLine:{stream:null},thisLine:{stream:null},block:q,htmlState:null,indentation:0,inline:S,text:te,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,code:0,em:!1,strong:!1,header:0,setext:0,hr:!1,taskList:!1,list:!1,listStack:[],quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1,emoji:!1,fencedEndRE:null}},copyState:function(i){return{f:i.f,prevLine:i.prevLine,thisLine:i.thisLine,block:i.block,htmlState:i.htmlState&&u.copyState(c,i.htmlState),indentation:i.indentation,localMode:i.localMode,localState:i.localMode?u.copyState(i.localMode,i.localState):null,inline:i.inline,text:i.text,formatting:!1,linkText:i.linkText,linkTitle:i.linkTitle,linkHref:i.linkHref,code:i.code,em:i.em,strong:i.strong,strikethrough:i.strikethrough,emoji:i.emoji,header:i.header,setext:i.setext,hr:i.hr,taskList:i.taskList,list:i.list,listStack:i.listStack.slice(0),quote:i.quote,indentedCode:i.indentedCode,trailingSpace:i.trailingSpace,trailingSpaceNewLine:i.trailingSpaceNewLine,md_inside:i.md_inside,fencedEndRE:i.fencedEndRE}},token:function(i,e){if(e.formatting=!1,i!=e.thisLine.stream){if(e.header=0,e.hr=!1,i.match(/^\s*$/,!0))return W(e),null;if(e.prevLine=e.thisLine,e.thisLine={stream:i},e.taskList=!1,e.trailingSpace=0,e.trailingSpaceNewLine=!1,!e.localState&&(e.f=e.block,e.f!=E)){var o=i.match(/^\s*/,!0)[0].replace(/\t/g,ie).length;if(e.indentation=o,e.indentationDiff=null,o>0)return null}}return e.f(i,e)},innerMode:function(i){return i.block==E?{state:i.htmlState,mode:c}:i.localState?{state:i.localState,mode:i.localMode}:{state:i,mode:re}},indent:function(i,e,o){return i.block==E&&c.indent?c.indent(i.htmlState,e,o):i.localState&&i.localMode.indent?i.localMode.indent(i.localState,e,o):u.Pass},blankLine:W,getType:a,blockCommentStart:"<!--",blockCommentEnd:"-->",closeBrackets:"()[]{}''\"\"``",fold:"markdown"};return re},"xml"),u.defineMIME("text/markdown","markdown"),u.defineMIME("text/x-markdown","markdown")})})();var ae=he.exports;const ge=ce(ae),Fe=de({__proto__:null,default:ge},[ae]);export{Fe as m};
