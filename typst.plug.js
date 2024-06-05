var c=typeof window>"u"&&typeof globalThis.WebSocketPair>"u";typeof Deno>"u"&&(self.Deno={args:[],build:{arch:"x86_64"},env:{get(){}}});var d=new Map,a=0;function i(t){self.postMessage(t)}c&&(globalThis.syscall=async(t,...s)=>await new Promise((n,e)=>{a++,d.set(a,{resolve:n,reject:e}),i({type:"sys",id:a,name:t,args:s})}));function l(t,s){c&&(self.addEventListener("message",n=>{(async()=>{let e=n.data;switch(e.type){case"inv":{let r=t[e.name];if(!r)throw new Error(`Function not loaded: ${e.name}`);try{let o=await Promise.resolve(r(...e.args||[]));i({type:"invr",id:e.id,result:o})}catch(o){console.error("An exception was thrown as a result of invoking function",e.name,"error:",o.message),i({type:"invr",id:e.id,error:o.message})}}break;case"sysr":{let r=e.id,o=d.get(r);if(!o)throw Error("Invalid request id");d.delete(r),e.error?o.reject(new Error(e.error)):o.resolve(e.result)}break}})().catch(console.error)}),i({type:"manifest",manifest:s}))}function h(t){let s=atob(t),n=s.length,e=new Uint8Array(n);for(let r=0;r<n;r++)e[r]=s.charCodeAt(r);return e}function y(t){typeof t=="string"&&(t=new TextEncoder().encode(t));let s="",n=t.byteLength;for(let e=0;e<n;e++)s+=String.fromCharCode(t[e]);return btoa(s)}async function f(t,s){if(typeof t!="string"){let n=new Uint8Array(await t.arrayBuffer()),e=n.length>0?y(n):void 0;s={method:t.method,headers:Object.fromEntries(t.headers.entries()),base64Body:e},t=t.url}return syscall("sandboxFetch.fetch",t,s)}globalThis.nativeFetch=globalThis.fetch;function m(){globalThis.fetch=async function(t,s){let n=s&&s.body?y(new Uint8Array(await new Response(s.body).arrayBuffer())):void 0,e=await f(t,s&&{method:s.method,headers:s.headers,base64Body:n});return new Response(e.base64Body?h(e.base64Body):null,{status:e.status,headers:e.headers})}}c&&m();function p(t){return{html:`
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/wypst@0.0.8/dist/wypst.min.css" crossorigin="anonymous">
        <div id="typst"></div>
        <div id="formula" style="display: none;">${t.replaceAll("<","&lt;")}</div>`,script:`
        loadJsByUrl("https://cdn.jsdelivr.net/npm/wypst@0.0.8/dist/wypst.min.js").then(() => {
            wypst.initialize().then(() => {
                wypst.render(document.getElementById("formula").innerText, document.getElementById("typst"));
                updateHeight();
            });
        });
        document.addEventListener("click", () => {
            api({type: "blur"});
        });
        `}}var g={typstWidget:p},u={name:"typst",functions:{typstWidget:{path:"./typst.ts:widget",codeWidget:"typst"}},assets:{}},R={manifest:u,functionMapping:g};l(g,u);export{R as plug};
