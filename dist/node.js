module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var r=n(1),o=n(3);t.exports=function(t,e){return o(r,t,e)}},function(t,e,n){var r=n(2);if(r.randomFillSync){var o={};t.exports=function(t){var e=o[t];return e||(e=Buffer.allocUnsafe(t),t<=255&&(o[t]=e)),r.randomFillSync(e)}}else t.exports=r.randomBytes},function(t,e){t.exports=require("crypto")},function(t,e){t.exports=function(t,e,n){var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=Math.ceil(1.6*r*n/e.length);n=+n;for(var i="";;)for(var a=t(o),s=0;s<o;s++){var u=a[s]&r;if(e[u]&&(i+=e[u]).length===n)return i}}},function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"SPAN_KIND",function(){return y}),n.d(r,"SPAN_KIND_RPC_CLIENT",function(){return g}),n.d(r,"SPAN_KIND_RPC_SERVER",function(){return _}),n.d(r,"SPAN_KIND_MESSAGING_PRODUCER",function(){return v}),n.d(r,"SPAN_KIND_MESSAGING_CONSUMER",function(){return m}),n.d(r,"ERROR",function(){return T}),n.d(r,"COMPONENT",function(){return O}),n.d(r,"SAMPLING_PRIORITY",function(){return w}),n.d(r,"PEER_SERVICE",function(){return S}),n.d(r,"PEER_HOSTNAME",function(){return I}),n.d(r,"PEER_ADDRESS",function(){return b}),n.d(r,"PEER_HOST_IPV4",function(){return N}),n.d(r,"PEER_HOST_IPV6",function(){return E}),n.d(r,"PEER_PORT",function(){return R}),n.d(r,"HTTP_URL",function(){return x}),n.d(r,"HTTP_METHOD",function(){return C}),n.d(r,"HTTP_STATUS_CODE",function(){return P}),n.d(r,"MESSAGE_BUS_DESTINATION",function(){return L}),n.d(r,"DB_INSTANCE",function(){return j}),n.d(r,"DB_STATEMENT",function(){return B}),n.d(r,"DB_TYPE",function(){return A}),n.d(r,"DB_USER",function(){return U});var o={};n.r(o),n.d(o,"BinaryCarrier",function(){return d}),n.d(o,"Reference",function(){return q}),n.d(o,"SpanContext",function(){return M}),n.d(o,"Span",function(){return k}),n.d(o,"Tracer",function(){return Q}),n.d(o,"Tags",function(){return r}),n.d(o,"initGlobalTracer",function(){return ot}),n.d(o,"globalTracer",function(){return it}),n.d(o,"FORMAT_BINARY",function(){return D}),n.d(o,"FORMAT_TEXT_MAP",function(){return H}),n.d(o,"FORMAT_HTTP_HEADERS",function(){return G}),n.d(o,"REFERENCE_CHILD_OF",function(){return J}),n.d(o,"REFERENCE_FOLLOWS_FROM",function(){return V}),n.d(o,"childOf",function(){return Y}),n.d(o,"followsFrom",function(){return K});var i={};n.r(i),n.d(i,"I32",function(){return Wt}),n.d(i,"I64",function(){return Xt}),n.d(i,"List",function(){return zt}),n.d(i,"String",function(){return Zt}),n.d(i,"toUTF8Array",function(){return $t}),n.d(i,"Struct",function(){return ee}),n.d(i,"StructFieldType",function(){return te});var a={};n.r(a),n.d(a,"BaseReporter",function(){return It}),n.d(a,"DebugReporter",function(){return Et}),n.d(a,"WinstonReporter",function(){return xt}),n.d(a,"InMemoryReporter",function(){return Pt}),n.d(a,"SpanFilterProxyReporter",function(){return jt}),n.d(a,"LogFilterProxyReporter",function(){return Ut}),n.d(a,"SpanComponentTagFilterProxyReporter",function(){return Ht}),n.d(a,"LogLevelFilterProxyReporter",function(){return Vt}),n.d(a,"ZipkinReporter",function(){return Kt}),n.d(a,"toZipkinJSON",function(){return Qt}),n.d(a,"JaegerReporter",function(){return oe}),n.d(a,"toJaegerThriftStructure",function(){return ae}),n.d(a,"StalkCollectorHttpReporter",function(){return ue});var s={};n.r(s),n.d(s,"Tag",function(){return pe}),n.d(s,"default",function(){return fe}),n.d(s,"getTags",function(){return le}),n.d(s,"Component",function(){return he}),n.d(s,"getComponent",function(){return de});var u={};n.r(u),n.d(u,"Trace",function(){return ge}),n.d(u,"default",function(){return _e}),n.d(u,"TraceAsync",function(){return ve}),n.d(u,"ChildOfRelationHandler",function(){return me}),n.d(u,"FollowFromRelationHandler",function(){return Te}),n.d(u,"NewTraceRelationHandler",function(){return Oe});var c={};n.r(c),n.d(c,"Trace",function(){return u}),n.d(c,"Tag",function(){return s});var p={};n.r(p),n.d(p,"TextMapFormat",function(){return mt});var f={};n.r(f),n.d(f,"DebugNamespaceMatcher",function(){return kt}),n.d(f,"Thrift",function(){return i});var l={};n.r(l),n.d(l,"formats",function(){return p}),n.d(l,"reporters",function(){return a}),n.d(l,"decorators",function(){return c}),n.d(l,"utils",function(){return f}),n.d(l,"SpanContext",function(){return ct}),n.d(l,"Span",function(){return ht}),n.d(l,"Tracer",function(){return St});var h,d=function(){return function(t){this.buffer=t}}(),y="span.kind",g="client",_="server",v="producer",m="consumer",T="error",O="component",w="sampling.priority",S="peer.service",I="peer.hostname",b="peer.address",N="peer.ipv4",E="peer.ipv6",R="peer.port",x="http.url",C="http.method",P="http.status_code",L="message_bus.destination",j="db.instance",B="db.statement",A="db.type",U="db.user";!function(t){t.ERROR="error",t.WARN="warn",t.INFO="info",t.VERBOSE="verbose",t.DEBUG="debug",t.SILLY="silly"}(h||(h={}));var F=function(){function t(t){this._span=t}return t.prototype.error=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._span.log({level:h.ERROR,message:t,payload:e,event:"error"})},t.prototype.warn=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._span.log({level:h.WARN,message:t,payload:e})},t.prototype.info=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._span.log({level:h.INFO,message:t,payload:e})},t.prototype.debug=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._span.log({level:h.DEBUG,message:t,payload:e})},t.prototype.silly=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._span.log({level:h.SILLY,message:t,payload:e})},t}(),k=function(){function t(){this.logger=new F(this)}return t.prototype.context=function(){return this._context()},t.prototype.tracer=function(){return this._tracer()},t.prototype.setOperationName=function(t){return this._setOperationName(t),this},t.prototype.setBaggageItem=function(t,e){return this._setBaggageItem(t,e),this},t.prototype.getBaggageItem=function(t){return this._getBaggageItem(t)},t.prototype.setTag=function(t,e){var n;return this._addTags(((n={})[t]=e,n)),this},t.prototype.addTags=function(t){return this._addTags(t),this},t.prototype.log=function(t,e){return this._log(t,e),this},t.prototype.logEvent=function(t,e){return this._log({event:t,payload:e})},t.prototype.finish=function(t){this._finish(t)},t.prototype._context=function(){return z},t.prototype._tracer=function(){return X},t.prototype._setOperationName=function(t){},t.prototype._setBaggageItem=function(t,e){},t.prototype._getBaggageItem=function(t){},t.prototype._addTags=function(t){},t.prototype._log=function(t,e){},t.prototype._finish=function(t){},t}(),M=function(){function t(){}return t.prototype.toTraceId=function(){return""},t.prototype.toSpanId=function(){return""},t}(),D="binary",H="text_map",G="http_headers",J="child_of",V="follows_from",q=function(){function t(t,e){this._type=t,this._referencedContext=e instanceof k?e.context():e}return t.prototype.type=function(){return this._type},t.prototype.referencedContext=function(){return this._referencedContext},t}();function Y(t){return t instanceof k&&(t=t.context()),new q(J,t)}function K(t){return t instanceof k&&(t=t.context()),new q(V,t)}var Q=function(){function t(){}return t.prototype.startSpan=function(t,e){if(void 0===e&&(e={}),e.childOf){var n=Y(e.childOf);e.references?e.references.push(n):e.references=[n],delete e.childOf}return this._startSpan(t,e)},t.prototype.inject=function(t,e,n){return t instanceof k&&(t=t.context()),this._inject(t,e,n)},t.prototype.extract=function(t,e){return this._extract(t,e)},t.prototype._startSpan=function(t,e){return Z},t.prototype._inject=function(t,e,n){},t.prototype._extract=function(t,e){return z},t}(),W=Q,X=null,z=null,Z=null;var $,tt=($=function(t,e){return($=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}$(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),et=new W,nt=null,rt=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return tt(e,t),e.prototype.startSpan=function(){var t=nt||et;return t.startSpan.apply(t,arguments)},e.prototype.inject=function(){var t=nt||et;return t.inject.apply(t,arguments)},e.prototype.extract=function(){var t=nt||et;return t.extract.apply(t,arguments)},e}(W));function ot(t){nt=t}function it(){return rt}X=new W,Z=new k,z=new M;var at,st=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ut=function(){return(ut=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},ct=function(t){function e(e,n){var r=t.call(this)||this;return r._baggageItems={},r._traceId=e,r._spanId=n,r}return st(e,t),e.prototype.toTraceId=function(){return this._traceId},e.prototype.toSpanId=function(){return this._spanId},e.prototype.toJSON=function(){return{traceId:this._traceId,spanId:this._spanId,baggageItems:this._baggageItems}},e.prototype.addBaggageItems=function(t){this._baggageItems=ut({},this._baggageItems,t)},Object.defineProperty(e.prototype,"baggageItems",{get:function(){return this._baggageItems},enumerable:!0,configurable:!0}),e}(M),pt=ct,ft=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),lt=function(){return(lt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},ht=function(t){function e(e,n){var r=t.call(this)||this;return r._references=[],r._tags={},r._logs=[],r.__tracer=e,r.__context=n,r}return ft(e,t),e.prototype.tracer=function(){return t.prototype.tracer.call(this)},e.prototype.start=function(t){this._startTime=t||Date.now()},e.prototype.addReference=function(t){this._references.push(t)},e.prototype.getTag=function(t){return this._tags[t]},e.prototype.toJSON=function(){return{context:this.__context,operationName:this._operationName,startTime:this._startTime,finishTime:this._finishTime,references:this._references.map(function(t){return{type:t.type(),referencedContext:t.referencedContext()}}),tags:this._tags,logs:this._logs}},e.fromJSON=function(t){var n=new pt(t.context.traceId,t.context.spanId);n.addBaggageItems(t.context.baggageItems||{});var r=new e(null,n);return r._operationName=t.operationName,r._startTime=t.startTime,r._finishTime=t.finishTime,t.references&&t.references.length>0&&(r._references=t.references.map(function(t){var e=new pt(t.referencedContext.traceId,t.referencedContext.spanId);return e.addBaggageItems(t.referencedContext.baggageItems||{}),new q(t.type,e)})),r._tags=t.tags||{},r._logs=t.logs||[],r},e.prototype._context=function(){return this.__context},e.prototype._tracer=function(){return this.__tracer},e.prototype._setOperationName=function(t){this._operationName=t},e.prototype._addTags=function(t){this._tags=lt({},this._tags,t)},e.prototype._log=function(t,e){var n=this,r={fields:t,timestamp:e||Date.now()};this._logs.push(r),this.__tracer.reporters.forEach(function(t){t.accepts.spanLog&&t.recieveSpanLog(n,r)})},e.prototype._finish=function(t){var e=this;this._finishTime=t||Date.now(),this.__tracer.reporters.forEach(function(t){t.accepts.spanFinish&&t.recieveSpanFinish(e)})},e.prototype._setBaggageItem=function(t,e){var n;this.__context.addBaggageItems(((n={})[t]=e,n))},e.prototype._getBaggageItem=function(t){return this.__context.baggageItems[t]},e}(k),dt=ht,yt=n(0),gt="X-Stalk-TraceId",_t="X-Stalk-SpanId",vt="X-Stalk-BaggageItem-",mt={name:H,inject:function(t,e){if(e&&"object"==typeof e)for(var n in e[gt]=t.toTraceId(),e[_t]=t.toSpanId(),t.baggageItems){var r=t.baggageItems[n];e[vt+n]=r}else console.error("Could not inject context to plain object, carrier is not object.",e)},extract:function(t){if(!t||"object"!=typeof t)return console.error("Could not extract context from carrier",t),null;var e,n,r={};for(var o in t){if(0==o.indexOf(vt))r[o.replace(vt,"")]=t[o];else o==gt?e=t[o]:o==_t&&(n=t[o])}if(!e||!n)return null;var i=new ct(e,n);return i.addBaggageItems(r),i}},Tt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ot=function(){return(Ot=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},wt=yt.bind(null,"01234567890abcdef",16),St=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._tags={},e._reporters=[],e}return Tt(e,t),Object.defineProperty(e.prototype,"reporters",{get:function(){return this._reporters},enumerable:!0,configurable:!0}),e.prototype.addTags=function(t){this._tags=Ot({},this._tags,t)},e.prototype.addReporter=function(t){this._reporters.push(t)},e.prototype.removeReporter=function(t){var e=this._reporters.indexOf(t);if(e>-1){var n=this._reporters[e];return this._reporters.splice(e,1),n.close(),!0}return!1},e.prototype.startSpan=function(e,n){return void 0===n&&(n={}),t.prototype.startSpan.call(this,e,n)},e.prototype._startSpan=function(t,e){var n=e.references?e.references[0]:null,r=n?n.referencedContext():null,o=r?r.toTraceId():wt(),i=wt(),a=new pt(o,i);r&&r.baggageItems&&a.addBaggageItems(r.baggageItems);var s=new dt(this,a);if(s.setOperationName(t),s.addTags(this._tags),e.tags&&s.addTags(e.tags),e.references)for(var u=0,c=e.references;u<c.length;u++){var p=c[u];s.addReference(p)}return s.start(e.startTime),this._reporters.forEach(function(t){t.accepts.spanCreate&&t.recieveSpanCreate(s)}),s},e.prototype._inject=function(t,e,n){switch(e){case G:case H:return mt.inject(t,n);default:console.error('Could not inject context into carrier, unknown format "'+e+'"',n)}},e.prototype._extract=function(t,e){switch(t){case G:case H:return mt.extract(e);default:console.error('Could not extract context from carrier, unknown carrier format "'+t+'"',e)}},e}(Q),It=function(){function t(){this.accepts={spanCreate:!1,spanLog:!1,spanFinish:!1}}return t.prototype.recieveSpanCreate=function(t){},t.prototype.recieveSpanLog=function(t,e){},t.prototype.recieveSpanFinish=function(t){},t.prototype.close=function(){},t}(),bt=It,Nt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Et=function(t){function e(e){var n=t.call(this)||this;return n.accepts={spanCreate:!1,spanLog:!0,spanFinish:!1},n.debugInstances={},n.debugFactory=e,n}return Nt(e,t),e.prototype.recieveSpanLog=function(t,e){var n=t.getTag(r.COMPONENT)||"NO-COMPONENT",o=this.debugInstances[n];o||(o=this.debugInstances[n]=this.debugFactory(n));var i=e.fields.level||"NO-LEVEL",a=e.fields.message||"NO-MESSAGE";e.fields.payload?o.apply(void 0,["["+i+"] "+a].concat(e.fields.payload)):o("["+i+"] "+a)},e.prototype.close=function(){for(var t in this.debugInstances){this.debugInstances[t].destroy()}this.debugInstances={}},e}(bt),Rt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),xt=function(t){function e(e){var n=t.call(this)||this;return n.accepts={spanCreate:!1,spanLog:!0,spanFinish:!1},n.winstonLogger=e,n}return Rt(e,t),e.prototype.recieveSpanLog=function(t,e){var n=t.getTag(r.COMPONENT)||"NO-COMPONENT",o=e.fields.level||"NO-LEVEL",i=e.fields.message||"NO-MESSAGE";this.winstonLogger.log({component:n,level:o,message:i,payload:e.fields.payload})},e.prototype.close=function(){},e}(bt),Ct=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Pt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.accepts={spanCreate:!0,spanLog:!1,spanFinish:!1},e.spans=[],e}return Ct(e,t),e.prototype.recieveSpanCreate=function(t){this.spans.push(t)},e.prototype.close=function(){this.spans=[]},e}(bt),Lt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),jt=function(t){function e(e,n){var r=t.call(this)||this;return r._predicate=function(){return!0},r._target=e,"function"==typeof n&&(r._predicate=n),r.accepts.spanCreate=e.accepts.spanCreate,r.accepts.spanLog=e.accepts.spanLog,r.accepts.spanFinish=e.accepts.spanFinish,r}return Lt(e,t),e.prototype.recieveSpanCreate=function(t){return!!this.testSpan(t)&&this._target.recieveSpanCreate(t)},e.prototype.recieveSpanLog=function(t,e){return!!this.testSpan(t)&&this._target.recieveSpanLog(t,e)},e.prototype.recieveSpanFinish=function(t){return!!this.testSpan(t)&&this._target.recieveSpanFinish(t)},e.prototype.testSpan=function(t){return this._predicate(t)},e.prototype.close=function(){this._target.close(),this._target=null},e}(bt),Bt=jt,At=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ut=function(t){function e(e,n){var r=t.call(this)||this;return r._predicate=function(){return!0},r._target=e,"function"==typeof n&&(r._predicate=n),r.accepts.spanCreate=e.accepts.spanCreate,r.accepts.spanLog=e.accepts.spanLog,r.accepts.spanFinish=e.accepts.spanFinish,r}return At(e,t),e.prototype.recieveSpanCreate=function(t){return this._target.recieveSpanCreate(t)},e.prototype.recieveSpanLog=function(t,e){return!!this.testSpanLog(t,e)&&this._target.recieveSpanLog(t,e)},e.prototype.recieveSpanFinish=function(t){return this._target.recieveSpanFinish(t)},e.prototype.testSpanLog=function(t,e){return this._predicate(t,e)},e.prototype.close=function(){this._target.close(),this._target=null},e}(bt),Ft=Ut,kt=function(){function t(t){this.updateQuery(t)}return t.prototype.updateQuery=function(t){this._matchQuery=t,this.setupRegexes()},t.prototype.setupRegexes=function(){var t;this._regexes={names:[],skips:[]};var e=("string"==typeof this._matchQuery?this._matchQuery:"").split(/[\s,]+/),n=e.length;for(t=0;t<n;t++)if(e[t]){var r=e[t].replace(/\*/g,".*?");"-"===r[0]?this._regexes.skips.push(new RegExp("^"+r.substr(1)+"$")):this._regexes.names.push(new RegExp("^"+r+"$"))}},t.prototype.test=function(t){if("*"===t[t.length-1])return!0;var e,n;for(e=0,n=this._regexes.skips.length;e<n;e++)if(this._regexes.skips[e].test(t))return!1;for(e=0,n=this._regexes.names.length;e<n;e++)if(this._regexes.names[e].test(t))return!0;return!1},t}(),Mt=kt,Dt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ht=function(t){function e(e,n){var r=t.call(this,e)||this;return r.matcher=new Mt(n),r}return Dt(e,t),e.prototype.updateQuery=function(t){this.matcher.updateQuery(t)},e.prototype.testSpan=function(t){return this.matcher.test(t.getTag(r.COMPONENT))},e}(Bt),Gt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Jt=((at={})[h.ERROR]=0,at[h.WARN]=1,at[h.INFO]=2,at[h.DEBUG]=3,at[h.SILLY]=4,at),Vt=function(t){function e(e,n){var r=t.call(this,e)||this;return r._logLevel=n,r}return Gt(e,t),e.prototype.updateLevel=function(t){this._logLevel=t},e.prototype.testSpanLog=function(t,e){return Jt[e.fields.level]<=Jt[this._logLevel]},e}(Ft),qt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Yt=function(){return(Yt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},Kt=function(t){function e(e){var n=t.call(this)||this;return n._spans=[],n._zipkinBaseUrl="http://localhost:9411",n._requestHeaders={},n._shouldConvertLogsToAnnotations=!1,n.accepts={spanCreate:!1,spanLog:!1,spanFinish:!0},n._serviceName=e.serviceName,n._zipkinBaseUrl=e.zipkinBaseUrl,n._fetch=e.fetch,n._requestHeaders=e.requestHeaders||{},n._requestHeaders=e.requestHeaders||{},"boolean"==typeof e.convertLogsToAnnotations&&(n._shouldConvertLogsToAnnotations=e.convertLogsToAnnotations),n}return qt(e,t),e.prototype.recieveSpanFinish=function(t){var e=Qt(t,this._shouldConvertLogsToAnnotations);e.localEndpoint||(e.localEndpoint={}),e.localEndpoint.serviceName=this._serviceName,this._spans.push(e)},e.prototype.report=function(){var t=this,e=this._spans.slice();return this._fetch(this._zipkinBaseUrl+"/api/v2/spans",{method:"post",headers:Yt({"Content-Type":"application/json"},this._requestHeaders),body:JSON.stringify(e)}).then(function(n){return n.ok&&e.forEach(function(e){var n=t._spans.indexOf(e);n>-1&&t._spans.splice(n,1)}),n})},e}(It);function Qt(t,e){void 0===e&&(e=!1);var n=t.toJSON(),o={};for(var i in n.tags)o[i]=n.tags[i]+"";var a={traceId:n.context.toTraceId(),id:n.context.toSpanId(),name:n.operationName,timestamp:1e3*n.startTime,duration:1e3*(n.finishTime-n.startTime),tags:o};e&&(a.annotations=n.logs.map(function(t){var e="";return e=t.fields.level&&t.fields.message?"["+t.fields.level+"] "+t.fields.message:JSON.stringify(t.fields),{timestamp:1e3*(t.timestamp||0),value:e}}));var s=n.references.length>0?n.references[0].referencedContext.toSpanId():null;s&&(a.parentId=s);var u=n.tags[r.SPAN_KIND];return u&&(a.kind=u,delete a.tags[r.SPAN_KIND]),a}var Wt=function(){function t(t){if("number"!=typeof t)throw new Error('Unsupported number value "'+t+'"');this.value=t}return t.prototype.writeToBuffer=function(t,e){return new DataView(t,e,4).setUint32(0,this.value,!1),4},t.prototype.calculateByteLength=function(){return 4},t}(),Xt=function(){function t(t){if("number"==typeof t)this.value=BigInt(t);else if("bigint"==typeof t)this.value=t;else{if("string"!=typeof t)throw new Error('Unsupported i64 value "'+t+'"');this.value=BigInt("0x"+t)}}return t.prototype.writeToBuffer=function(t,e){var n=new DataView(t,e,8);n.setUint32(0,0,!1),n.setUint32(4,0,!1);var r=this.value.toString(16);r.length%2&&(r="0"+r);for(var o=r.length/2,i=0,a=0,s=8-o;i<o;)n.setUint8(s+i,parseInt(r.slice(a,a+2),16)),i+=1,a+=2;return 8},t.prototype.calculateByteLength=function(){return 8},t.prototype.toJSON=function(){return this.value.toString(16)},t}(),zt=function(){function t(t,e){this.elements=[],this.elements=t||[],this.elementType=e}return t.prototype.writeToBuffer=function(t,e){var n=new DataView(t,e);n.setUint8(0,this.elementType),n.setUint32(1,this.elements.length,!1);var r=5;return this.elements.forEach(function(n){if(!n.writeToBuffer)throw new Error('List elements must have "writeToBuffer" method');var o=n.writeToBuffer(t,e+r);r+=o}),r},t.prototype.calculateByteLength=function(){var t=0;return this.elements.forEach(function(e){t+=e.calculateByteLength()}),t+1+4},t}(),Zt=function(){function t(t){if("string"!=typeof t)throw new Error('Unsupported string value "'+t+'"');this.value=t}return t.prototype.writeToBuffer=function(t,e){var n=$t(this.value),r=new DataView(t,e,n.length+4);r.setUint32(0,n.length);for(var o=0;o<n.length;o++)r.setUint8(4+o,n[o]);return n.length+4},t.prototype.calculateByteLength=function(){return 4+$t(this.value).length},t}();function $t(t){for(var e=[],n=0;n<t.length;n++){var r=t.charCodeAt(n);r<128?e.push(r):r<2048?e.push(192|r>>6,128|63&r):r<55296||r>=57344?e.push(224|r>>12,128|r>>6&63,128|63&r):(n++,r=65536+((1023&r)<<10|1023&t.charCodeAt(n)),e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return e}var te,ee=function(){function t(t){this.fields=[],this.fields=t||[]}return t.prototype.writeToBuffer=function(t,e){var n=new DataView(t,e),r=0;return this.fields.forEach(function(o){if(n.setUint8(r,o.type),n.setInt16(r+1,o.id),o.value instanceof Uint8Array&&o.type==te.I64)o.value.forEach(function(t,e){n.setUint8(r+3+e,t)}),r+=3+o.value.length;else{if(!o.value.writeToBuffer)throw console.log(o.value),new Error('Not supported field value "'+o.value+'"');var i=o.value.writeToBuffer(t,e+3+r);r+=3+i}}),n.setUint8(r,0),r+1},t.prototype.calculateByteLength=function(){var t=0;return this.fields.forEach(function(e){e.value instanceof Uint8Array&&e.type==te.I64?t+=11:t+=3+e.value.calculateByteLength()}),1+t},t}();!function(t){t[t.BOOL=2]="BOOL",t[t.BYTE=3]="BYTE",t[t.DOUBLE=4]="DOUBLE",t[t.I16=6]="I16",t[t.I32=8]="I32",t[t.I64=10]="I64",t[t.STRING=11]="STRING",t[t.STRUCT=12]="STRUCT",t[t.MAP=13]="MAP",t[t.SET=14]="SET",t[t.LIST=15]="LIST"}(te||(te={}));var ne=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),re=function(){return(re=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},oe=function(t){function e(e){var n=t.call(this)||this;return n._spans=[],n._jaegerBaseUrl="http://localhost:14268",n._requestHeaders={},n.accepts={spanCreate:!1,spanLog:!1,spanFinish:!0},n._process=e.process,n._jaegerBaseUrl=e.jaegerBaseUrl,n._fetch=e.fetch,n._requestHeaders=e.requestHeaders||{},n}return ne(e,t),e.prototype.recieveSpanFinish=function(t){var e=ae(t);this._spans.push(e)},e.prototype.report=function(){var t=this,e=this._spans.slice(),n=new zt([],te.STRUCT);for(var r in this._process.tags){var o=new ee([{id:1,name:"key",type:te.STRING,value:new Zt(r)},{id:2,name:"vType",type:te.I32,value:new Wt(0)},{id:3,name:"vStr",type:te.STRING,value:new Zt(this._process.tags[r]+"")}]);n.elements.push(o)}var i=new ee([{id:1,name:"serviceName",type:te.STRING,value:new Zt(this._process.serviceName)},{id:2,name:"tags",type:te.LIST,value:n}]),a=new zt([],te.STRUCT);a.elements=this._spans;var s=new ee([{id:1,name:"process",type:te.STRUCT,value:i},{id:2,name:"spans",type:te.LIST,value:a}]),u=s.calculateByteLength(),c=new ArrayBuffer(u);return s.writeToBuffer(c,0),this._fetch(this._jaegerBaseUrl+"/api/traces",{method:"post",headers:re({"Content-Type":"application/x-thrift",Connection:"keep-alive"},this._requestHeaders),body:c}).then(function(n){return n.ok&&e.forEach(function(e){var n=t._spans.indexOf(e);n>-1&&t._spans.splice(n,1)}),n})},e}(It),ie=new Uint8Array([0,0,0,0,0,0,0,0]);function ae(t){var e=t.toJSON(),n=new zt([],te.STRUCT);e.references.forEach(function(t){if(t.type!=J&&t.type!=V)throw new Error('Unsupported reference type "'+t.type+'"');var e=void 0;t.type==J?(t.referencedContext.toSpanId(),e=0):t.type==V&&(e=1);var r=new ee([{id:1,name:"refType",type:te.I32,value:new Wt(e)},{id:2,name:"traceIdLow",type:te.I64,value:new Xt(t.referencedContext.toTraceId())},{id:3,name:"traceIdHigh",type:te.I64,value:ie},{id:4,name:"spanId",type:te.I64,value:new Xt(t.referencedContext.toSpanId())}]);n.elements.push(r)});var r=new zt([],te.STRUCT);for(var o in e.tags){var i=new ee([{id:1,name:"key",type:te.STRING,value:new Zt(o)},{id:2,name:"vType",type:te.I32,value:new Wt(0)},{id:3,name:"vStr",type:te.STRING,value:new Zt(e.tags[o]+"")}]);r.elements.push(i)}var a=new zt([],te.STRUCT);return e.logs.forEach(function(t){var e=new zt([],te.STRUCT);for(var n in t.fields){var r=new ee([{id:1,name:"key",type:te.STRING,value:new Zt(n)},{id:2,name:"vType",type:te.I32,value:new Wt(0)},{id:3,name:"vStr",type:te.STRING,value:new Zt(t.fields[n]+"")}]);e.elements.push(r)}var o=new ee([{id:1,name:"timestamp",type:te.I64,value:new Xt(BigInt(1e3*t.timestamp))},{id:2,name:"fields",type:te.LIST,value:e}]);a.elements.push(o)}),new ee([{id:1,name:"traceIdLow",type:te.I64,value:new Xt(e.context.toTraceId())},{id:2,name:"traceIdHigh",type:te.I64,value:ie},{id:3,name:"spanId",type:te.I64,value:new Xt(e.context.toSpanId())},{id:4,name:"parentSpanId",type:te.I64,value:ie},{id:5,name:"operationName",type:te.STRING,value:new Zt(e.operationName)},{id:6,name:"references",type:te.LIST,value:n},{id:7,name:"flags",type:te.I32,value:new Wt(0)},{id:8,name:"startTime",type:te.I64,value:new Xt(BigInt(1e3*e.startTime))},{id:9,name:"duration",type:te.I64,value:new Xt(1e3*(e.finishTime-e.startTime))},{id:10,name:"tags",type:te.LIST,value:r},{id:11,name:"logs",type:te.LIST,value:a}])}var se=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ue=function(t){function e(e){var n=t.call(this)||this;return n._tags={},n._spans=[],n._stalkCollectorApiRoot="http://localhost:7855",n.accepts={spanCreate:!1,spanLog:!1,spanFinish:!0},n._serviceName=e.serviceName,e.tags&&(n._tags=e.tags),n._stalkCollectorApiRoot=e.stalkCollectorApiRoot,n._fetch=e.fetch,n}return se(e,t),e.prototype.recieveSpanFinish=function(t){this._spans.push(t.toJSON())},e.prototype.report=function(){var t=this,e=this._spans.slice();return this._fetch(this._stalkCollectorApiRoot+"/batch",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({serviceName:this._serviceName,tags:this._tags,spans:e})}).then(function(n){return n.ok&&e.forEach(function(e){var n=t._spans.indexOf(e);n>-1&&t._spans.splice(n,1)}),n})},e}(It),ce="X-Stalk-Tags";function pe(t,e){return function(n){n.prototype[ce]||(n.prototype[ce]={}),n.prototype[ce][t]=e}}var fe=pe;function le(t){return t[ce]}function he(t){return pe(r.COMPONENT,t)}function de(t){return le(t)[r.COMPONENT]}var ye=function(){return(ye=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function ge(t){return function(e,n,i){var a=i.value;t.operationName=t.operationName||n;var s=t;if("custom"!=t.relation)switch(t.relation){case"childOf":s.handler=me;break;case"followsFrom":s.handler=Te;break;case"newTrace":s.handler=Oe;break;default:throw new Error('Unexpected relation type "'+t.relation+'"')}return i.value=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var i=e[0]instanceof k?e[0]:null,u=("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}).opentracing||o,c=i?i.tracer():u.globalTracer(),p={};try{var f=s.handler.apply(this,e);p=ye({},f)}catch(e){throw console.error('Unexpected error in traced method "'+t.operationName+'"s relation handler'),e}var l=le(this);l&&(p.tags=ye({},l,p.tags));var h=c.startSpan(t.operationName,p);e.splice(0,1,h);try{var d=a.apply(this,e);return t.autoFinish?"object"==typeof d&&d.then&&d.catch?d.then(function(t){return h.finish(),t}).catch(function(t){throw h.logger.error(t&&t.message||"Unknown error",t),h.setTag(r.ERROR,!0),h.finish(),t}):(h.finish(),d):d}catch(t){throw h.logger.error(t&&t.message||"Unknown error",t),h.setTag(r.ERROR,!0),h.finish(),t}},i}}var _e=ge;function ve(t){return ge(ye({},t,{autoFinish:!0}))}function me(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t)throw new Error("Traced method's first argument must be a span");return{childOf:t.context()}}function Te(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t)throw new Error("Traced method's first argument must be a span");return{references:[K(t.context())]}}function Oe(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return{}}n.d(e,"opentracing",function(){return o}),n.d(e,"stalk",function(){return l})}]);