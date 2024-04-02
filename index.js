(()=>{var T=Object.defineProperty,w=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var d=(t,e,n)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,l=(t,e)=>{for(var n in e||(e={}))L.call(e,n)&&d(t,n,e[n]);if(y)for(var n of y(e))b.call(e,n)&&d(t,n,e[n]);return t},g=(t,e)=>w(t,x(e));var u=(t,e,n)=>new Promise((m,a)=>{var i=r=>{try{o(n.next(r))}catch(p){a(p)}},s=r=>{try{o(n.throw(r))}catch(p){a(p)}},o=r=>r.done?m(r.value):Promise.resolve(r.value).then(i,s);o((n=n.apply(t,e)).next())});function f(t){return t instanceof Date?t.toISOString():Array.isArray(t)?t.map(f):t}function M(t,e){return u(this,null,function*(){var o;let{data:{key:n,params:m}}=t,a,i;try{a=yield e(...m)}catch(r){a=void 0;try{i=r.toString()}catch(p){i="Exception can't be stringified."}}let s={key:n};a!==void 0&&(a=f(a),s.result={type:"string",value:a}),i!==void 0&&(s.error=i),((o=t.source)==null?void 0:o.postMessage).call(o,s,"*")})}function h(t){return typeof window!="undefined"&&window.addEventListener("message",e=>M(e,t.run)),g(l({},t),{json:JSON.stringify(D(t),null,2)})}var N=`
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
</svg>`;function D(t){let{name:e,description:n,author:m,result:a,params:i,about:s,video:o}=t,{icon:r=S}=t;return r==="glide"&&(r=N),{name:e,description:n,author:m,result:a,about:s,icon:r,video:o,params:Object.entries(i).map(([p,P])=>l({name:p},P))}}var C={timeoutSeconds:10};function v(t){return(new Date().getTime()-t.getTime())/1e3}var c=class{constructor(e=C){this.cache=new Map;this.props=l(l({},e),C)}get(e){return u(this,null,function*(){var a;let{timestamp:n,item:m}=(a=this.cache.get(e))!=null?a:{timestamp:new Date(0)};if(v(n)<this.props.timeoutSeconds)return m;this.cache.delete(e)})}getWith(e,n){return u(this,null,function*(){var i;let{timestamp:m,item:a}=(i=this.cache.get(e))!=null?i:{timestamp:new Date(0)};if(v(m)<this.props.timeoutSeconds)return a;{let s=yield n(e);return this.set(e,s),s}})}set(e,n){return this.cache.set(e,{timestamp:new Date,item:n})}fetch(m){return u(this,arguments,function*(e,n=e){return yield this.getWith(n,()=>fetch(e).then(a=>a.json()))})}};var V=new c,Z=h({name:"Mortgage Calculator",description:"Calculates total costs of refinancing based on market assumptions.",author:"Matt Wensing <matt@usesummit.com>",params:{summitApiKey:{displayName:"Summit API Key",type:"string"},purchasePrice:{displayName:"Purchase Price",type:"number"},loan:{displayName:"Loan Amount",type:"number"},rate:{displayName:"Interest Rate (%)",type:"number"},homePrice:{displayName:"Home Price",type:"number"},homeAppreciation:{displayName:"Home Appreciation Rate (%)",type:"number"},additionalMonthlyPayment:{displayName:"Additional Monthly Payment",type:"number"},years:{displayName:"Loan Term (Years)",type:"number"},propertyTaxRate:{displayName:"Property Tax Rate (%)",type:"number"},propTaxIncreaseRate:{displayName:"Property Tax Increase Rate (%)",type:"number"},taxDiscountRate:{displayName:"Tax Discount Rate (%)",type:"number"}},result:{type:"string"},run(t,e,n,m,a,i,s,o,r,p){return u(this,null,function*(){if(t.value!==void 0)return JSON.stringify({parameters:{loan:t.value,rate:e.value,home_price:n.value,home_appreciation:m.value,additional_monthly_payment:a.value,years:i.value,property_tax_rate:s.value,prop_tax_increase_rate:o.value,tax_discount_rate:r.value}})})}});})();
//# sourceMappingURL=index.js.map
