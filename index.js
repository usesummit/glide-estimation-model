(()=>{var x=Object.defineProperty,L=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var v=(t,e,a)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))N.call(e,a)&&v(t,a,e[a]);if(h)for(var a of h(e))S.call(e,a)&&v(t,a,e[a]);return t},C=(t,e)=>L(t,M(e));var m=(t,e,a)=>new Promise((l,n)=>{var i=r=>{try{o(a.next(r))}catch(u){n(u)}},s=r=>{try{o(a.throw(r))}catch(u){n(u)}},o=r=>r.done?l(r.value):Promise.resolve(r.value).then(i,s);o((a=a.apply(t,e)).next())});function P(t){return t instanceof Date?t.toISOString():Array.isArray(t)?t.map(P):t}function D(t,e){return m(this,null,function*(){var o;let{data:{key:a,params:l}}=t,n,i;try{n=yield e(...l)}catch(r){n=void 0;try{i=r.toString()}catch(u){i="Exception can't be stringified."}}let s={key:a};n!==void 0&&(n=P(n),s.result={type:"string",value:n}),i!==void 0&&(s.error=i),((o=t.source)==null?void 0:o.postMessage).call(o,s,"*")})}function T(t){return typeof window!="undefined"&&window.addEventListener("message",e=>D(e,t.run)),C(p({},t),{json:JSON.stringify(A(t),null,2)})}var I=`
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
    `,O=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function A(t){let{name:e,description:a,author:l,result:n,params:i,about:s,video:o}=t,{icon:r=O}=t;return r==="glide"&&(r=I),{name:e,description:a,author:l,result:n,about:s,icon:r,video:o,params:Object.entries(i).map(([u,c])=>p({name:u},c))}}var w={timeoutSeconds:10};function _(t){return(new Date().getTime()-t.getTime())/1e3}var y=class{constructor(e=w){this.cache=new Map;this.props=p(p({},e),w)}get(e){return m(this,null,function*(){var n;let{timestamp:a,item:l}=(n=this.cache.get(e))!=null?n:{timestamp:new Date(0)};if(_(a)<this.props.timeoutSeconds)return l;this.cache.delete(e)})}getWith(e,a){return m(this,null,function*(){var i;let{timestamp:l,item:n}=(i=this.cache.get(e))!=null?i:{timestamp:new Date(0)};if(_(l)<this.props.timeoutSeconds)return n;{let s=yield a(e);return this.set(e,s),s}})}set(e,a){return this.cache.set(e,{timestamp:new Date,item:a})}fetch(l){return m(this,arguments,function*(e,a=e){return yield this.getWith(a,()=>fetch(e).then(n=>n.json()))})}};var R=new y,E=T({name:"Mortgage Calculator",description:"Calculates total costs of refinancing based on market assumptions.",author:"Matt Wensing <matt@usesummit.com>",params:{summitApiKey:{displayName:"Summit API Key",type:"string"},purchasePrice:{displayName:"Purchase Price",type:"number"},loan:{displayName:"Loan Amount",type:"number"},rate:{displayName:"Interest Rate (%)",type:"number"},homePrice:{displayName:"Home Price",type:"number"},homeAppreciation:{displayName:"Home Appreciation Rate (%)",type:"number"},additionalMonthlyPayment:{displayName:"Additional Monthly Payment",type:"number"},years:{displayName:"Loan Term (Years)",type:"number"},propertyTaxRate:{displayName:"Property Tax Rate (%)",type:"number"},propTaxIncreaseRate:{displayName:"Property Tax Increase Rate (%)",type:"number"},taxDiscountRate:{displayName:"Tax Discount Rate (%)",type:"number"}},result:{type:"string"},run(t,e,a,l,n,i,s,o,r){return m(this,null,function*(){if(t.value===void 0)return JSON.stringify({parameters:{loan:loan.value,rate:e.value,home_price:a.value,home_appreciation:l.value,additional_monthly_payment:n.value,years:i.value,property_tax_rate:s.value,prop_tax_increase_rate:o.value,tax_discount_rate:r.value}});let u="https://api.usesummit.com/v1/free-calculators/b79052/the-home-mortgage-calculator/",c=yield R.fetch(u,{method:"POST",headers:{"Content-Type":"application/json","X-Api-Key":t.value},body:JSON.stringify({parameters:{loan:loan.value,rate:e.value,home_price:a.value,home_appreciation:l.value,additional_monthly_payment:n.value,years:i.value,property_tax_rate:s.value,prop_tax_increase_rate:o.value,tax_discount_rate:r.value}})}),g=c.results.filter(b=>b.values!==void 0),d=g[g.length-1],f;return d&&d.values?f=Math.round(d.values.total_accrued_interest):f=0,JSON.stringify(c)})}});})();
//# sourceMappingURL=index.js.map
