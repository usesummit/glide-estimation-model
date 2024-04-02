(()=>{var w=Object.defineProperty,P=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var g=(t,e,n)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))L.call(e,n)&&g(t,n,e[n]);if(d)for(var n of d(e))b.call(e,n)&&g(t,n,e[n]);return t},y=(t,e)=>P(t,S(e));var u=(t,e,n)=>new Promise((o,r)=>{var m=i=>{try{s(n.next(i))}catch(l){r(l)}},a=i=>{try{s(n.throw(i))}catch(l){r(l)}},s=i=>i.done?o(i.value):Promise.resolve(i.value).then(m,a);s((n=n.apply(t,e)).next())});function f(t){return t instanceof Date?t.toISOString():Array.isArray(t)?t.map(f):t}function M(t,e){return u(this,null,function*(){var s;let{data:{key:n,params:o}}=t,r,m;try{r=yield e(...o)}catch(i){r=void 0;try{m=i.toString()}catch(l){m="Exception can't be stringified."}}let a={key:n};r!==void 0&&(r=f(r),a.result={type:"string",value:r}),m!==void 0&&(a.error=m),((s=t.source)==null?void 0:s.postMessage).call(s,a,"*")})}function h(t){return typeof window!="undefined"&&window.addEventListener("message",e=>M(e,t.run)),y(p({},t),{json:JSON.stringify(O(t),null,2)})}var x=`
        <svg
          width="48"
          height="48"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.85L14.3 0V7.29C14.3 11.4653 11.0406 14.85 7.02 14.85H0Z"
            fill="currentColor"
          />
          <path
            d="M11.7 19.71C11.7 15.5347 14.9594 12.15 18.98 12.15H26L11.7 27V19.71Z"
            fill="currentColor"
          />
        </svg>
    `,N=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function O(t){let{name:e,description:n,author:o,result:r,params:m,about:a,video:s}=t,{icon:i=N}=t;return i==="glide"&&(i=x),{name:e,description:n,author:o,result:r,about:a,icon:i,video:s,params:Object.entries(m).map(([l,T])=>p({name:l},T))}}var C={timeoutSeconds:10};function v(t){return(new Date().getTime()-t.getTime())/1e3}var c=class{constructor(e=C){this.cache=new Map;this.props=p(p({},e),C)}get(e){return u(this,null,function*(){var r;let{timestamp:n,item:o}=(r=this.cache.get(e))!=null?r:{timestamp:new Date(0)};if(v(n)<this.props.timeoutSeconds)return o;this.cache.delete(e)})}getWith(e,n){return u(this,null,function*(){var m;let{timestamp:o,item:r}=(m=this.cache.get(e))!=null?m:{timestamp:new Date(0)};if(v(o)<this.props.timeoutSeconds)return r;{let a=yield n(e);return this.set(e,a),a}})}set(e,n){return this.cache.set(e,{timestamp:new Date,item:n})}fetch(r,m){return u(this,arguments,function*(e,n,o=e){return yield this.getWith(o,()=>fetch(e,n).then(a=>a.json()))})}};var D=new c,j=h({name:"Estimated Completion",description:"Returns a completion date based on provided schedule and task duration.",author:"Matt Wensing <matt@usesummit.com>",params:{summitApiKey:{displayName:"Summit API Key",type:"string"},submittedAt:{displayName:"Submitted At",type:"string"},operationalStatus:{displayName:"Operational Status",type:"number"},averageTtc:{displayName:"Average Time to Complete",type:"number"},operationalSchedule:{displayName:"Operational Schedule",type:"string"},timezone:{displayName:"Timezone (Olson)",type:"string"}},result:{type:"string"},run(t,e,n,o,r,m){return u(this,null,function*(){let a;try{let i="https://api.usesummit.com/v1/zapier-partner-test-account/38b4dc/estimated-resolution-time/";a=yield D.fetch(i,{method:"POST",headers:{"Content-Type":"application/json","X-Api-Key":t.value},body:JSON.stringify({options:{start:"2024-04-01T00:00:00Z",end:"2025-04-30T00:00:00Z"},parameters:{ticket_submitted_at:e.value,is_open:n.value,average_ttc:o.value,operational_schedule:r.value,timezone:m.value}})})}catch(i){return JSON.stringify({error:i})}let s;for(let i=a.results.length-1;i>=0&&(s=a.results[i],!(s.values&&"completion_at"in s.values));i--);return JSON.stringify({data:s})})}});})();
//# sourceMappingURL=index.js.map
