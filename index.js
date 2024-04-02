(()=>{var T=Object.defineProperty,w=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var d=(t,e,n)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,l=(t,e)=>{for(var n in e||(e={}))L.call(e,n)&&d(t,n,e[n]);if(y)for(var n of y(e))M.call(e,n)&&d(t,n,e[n]);return t},g=(t,e)=>w(t,x(e));var p=(t,e,n)=>new Promise((m,a)=>{var i=r=>{try{s(n.next(r))}catch(u){a(u)}},o=r=>{try{s(n.throw(r))}catch(u){a(u)}},s=r=>r.done?m(r.value):Promise.resolve(r.value).then(i,o);s((n=n.apply(t,e)).next())});function f(t){return t instanceof Date?t.toISOString():Array.isArray(t)?t.map(f):t}function b(t,e){return p(this,null,function*(){var s;let{data:{key:n,params:m}}=t,a,i;try{a=yield e(...m)}catch(r){a=void 0;try{i=r.toString()}catch(u){i="Exception can't be stringified."}}let o={key:n};a!==void 0&&(a=f(a),o.result={type:"string",value:a}),i!==void 0&&(o.error=i),((s=t.source)==null?void 0:s.postMessage).call(s,o,"*")})}function h(t){return typeof window!="undefined"&&window.addEventListener("message",e=>b(e,t.run)),g(l({},t),{json:JSON.stringify(D(t),null,2)})}var N=`
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
    `,S=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function D(t){let{name:e,description:n,author:m,result:a,params:i,about:o,video:s}=t,{icon:r=S}=t;return r==="glide"&&(r=N),{name:e,description:n,author:m,result:a,about:o,icon:r,video:s,params:Object.entries(i).map(([u,P])=>l({name:u},P))}}var C={timeoutSeconds:10};function v(t){return(new Date().getTime()-t.getTime())/1e3}var c=class{constructor(e=C){this.cache=new Map;this.props=l(l({},e),C)}get(e){return p(this,null,function*(){var a;let{timestamp:n,item:m}=(a=this.cache.get(e))!=null?a:{timestamp:new Date(0)};if(v(n)<this.props.timeoutSeconds)return m;this.cache.delete(e)})}getWith(e,n){return p(this,null,function*(){var i;let{timestamp:m,item:a}=(i=this.cache.get(e))!=null?i:{timestamp:new Date(0)};if(v(m)<this.props.timeoutSeconds)return a;{let o=yield n(e);return this.set(e,o),o}})}set(e,n){return this.cache.set(e,{timestamp:new Date,item:n})}fetch(m){return p(this,arguments,function*(e,n=e){return yield this.getWith(n,()=>fetch(e).then(a=>a.json()))})}};var Z=new c,j=h({name:"Mortgage Calculator",description:"Calculates total costs of refinancing based on market assumptions.",author:"Matt Wensing <matt@usesummit.com>",params:{summitApiKey:{displayName:"Summit API Key",type:"string"},loan:{displayName:"Loan Amount",type:"number"},rate:{displayName:"Interest Rate (%)",type:"number"},homePrice:{displayName:"Home Price",type:"number"},homeAppreciation:{displayName:"Home Appreciation Rate (%)",type:"number"},additionalMonthlyPayment:{displayName:"Additional Monthly Payment",type:"number"},years:{displayName:"Loan Term (Years)",type:"number"},propertyTaxRate:{displayName:"Property Tax Rate (%)",type:"number"},propTaxIncreaseRate:{displayName:"Property Tax Increase Rate (%)",type:"number"},taxDiscountRate:{displayName:"Tax Discount Rate (%)",type:"number"}},result:{type:"string"},run(t,e,n,m,a,i,o,s,r,u){return p(this,null,function*(){if(t.value)return JSON.stringify({args:{summitApiKey:t.value,loan:e.value,rate:n.value,homePrice:m.value,homeAppreciation:a.value,additionalMonthlyPayment:i.value,years:o.value,propertyTaxRate:s.value,propTaxIncreaseRate:r.value,taxDiscountRate:u.value}})})}});})();
//# sourceMappingURL=index.js.map
