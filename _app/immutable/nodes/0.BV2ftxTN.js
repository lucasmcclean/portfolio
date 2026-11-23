import{B as be,b as we,a as y,f as K,c as M,d as $e}from"../chunks/Bc9e4o0Y.js";import{z as ue,E as ve,B as ke,R as Ne,A as Se,C as Me,T as Ce,D as Pe,F as ne,G as b,I as he,h as A,a as se,j as ee,J as Ee,b as Oe,K as Te,N as Ae,M as je,O as Fe,i as oe,e as te,P as Ie,p as P,v as B,l as w,n as j,w as R,o as E,g as u,y as ge,Q as We,s as L,m as U}from"../chunks/CmoJ9OpW.js";import{s as C}from"../chunks/DbOVcrw2.js";import{a as ze,b as Le,c as V,d as Be,i as D,e as X}from"../chunks/GEbISDHn.js";import{p as ie}from"../chunks/m83g02xp.js";import"../chunks/BFv4_n-G.js";import{o as Re}from"../chunks/DEkQ2KJb.js";import{i as Je}from"../chunks/FDTVplPT.js";import{p as H,r as T,s as I}from"../chunks/D9yYFf8S.js";import{e as qe,i as Ge}from"../chunks/gWJonycO.js";import{a as le}from"../chunks/Df9SnYla.js";const He=()=>performance.now(),F={tick:t=>requestAnimationFrame(t),now:()=>He(),tasks:new Set};function me(){const t=F.now();F.tasks.forEach(e=>{e.c(t)||(F.tasks.delete(e),e.f())}),F.tasks.size!==0&&F.tick(me)}function De(t){let e;return F.tasks.size===0&&F.tick(me),{promise:new Promise(r=>{F.tasks.add(e={c:t,f:r})}),abort(){F.tasks.delete(e)}}}function Y(t,e){he(()=>{t.dispatchEvent(new CustomEvent(e))})}function Ke(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function ce(t){const e={},r=t.split(";");for(const a of r){const[o,i]=a.split(":");if(!o||i===void 0)break;const s=Ke(o.trim());e[s]=i.trim()}return e}const Qe=t=>t;function Z(t,e,r,a){var N;var o=(t&Ce)!==0,i="both",s,n=e.inert,l=e.style.overflow,d,f;function v(){return he(()=>s??(s=r()(e,(a==null?void 0:a())??{},{direction:i})))}var x={is_global:o,in(){e.inert=n,d=re(e,v(),f,1,()=>{Y(e,"introstart")},()=>{Y(e,"introend"),d==null||d.abort(),d=s=void 0,e.style.overflow=l})},out(O){e.inert=!0,f=re(e,v(),d,0,()=>{Y(e,"outrostart")},()=>{Y(e,"outroend"),O==null||O()})},stop:()=>{d==null||d.abort(),f==null||f.abort()}},c=ue;if(((N=c.nodes).t??(N.t=[])).push(x),ze){var g=o;if(!g){for(var m=c.parent;m&&(m.f&ve)!==0;)for(;(m=m.parent)&&(m.f&ke)===0;);g=!m||(m.f&Ne)!==0}g&&Se(()=>{Me(()=>x.in())})}}function re(t,e,r,a,o,i){var s=a===1,n=!1;if(Pe(e)){var l;return ne(()=>{if(!n){var m=e({direction:s?"in":"out"});l=re(t,m,r,a,o,i)}}),{abort:()=>{n=!0,l==null||l.abort()},deactivate:()=>l.deactivate(),reset:()=>l.reset(),t:()=>l.t()}}if(r==null||r.deactivate(),!(e!=null&&e.duration)&&!(e!=null&&e.delay))return o(),i(),{abort:b,deactivate:b,reset:b,t:()=>a};const{delay:d=0,css:f,tick:v,easing:x=Qe}=e;var c,g=()=>1-a;return ne(()=>{if(!n){var m=[];if(s&&r===void 0&&(v&&v(0,1),f)){var N=ce(f(0,1));m.push(N,N)}c=t.animate(m,{duration:d,fill:"forwards"}),c.onfinish=()=>{c.cancel(),o();var O=(r==null?void 0:r.t())??1-a;r==null||r.abort();var J=a-O,q=e.duration*Math.abs(J),h=[];if(q>0){var _=!1;if(f)for(var p=Math.ceil(q/16.666666666666668),$=0;$<=p;$+=1){var S=O+J*x($/p),G=ce(f(S,1-S));h.push(G),_||(_=G.overflow==="hidden")}_&&(t.style.overflow="hidden"),g=()=>{var z=c.currentTime;return O+J*x(z/q)},v&&De(()=>{if(c.playState!=="running")return!1;var z=g();return v(z,1-z),!0})}c=t.animate(h,{duration:q,fill:"forwards"}),c.onfinish=()=>{g=()=>a,v==null||v(a,1-a),i()}}}}),{abort:()=>{n=!0,c&&(c.cancel(),c.effect=null,c.onfinish=b)},deactivate:()=>{i=b},reset:()=>{a===0&&(v==null||v(1,0))},t:()=>g()}}function Ue(t,e,r,a,o,i){let s=A;A&&se();var n=null;A&&ee.nodeType===Ee&&(n=ee,se());var l=A?ee:t,d=new be(l,!1);Oe(()=>{const f=e()||null;var v=Ae;if(f===null){d.ensure(null,null),V(!0);return}return d.ensure(f,x=>{if(f){if(n=A?n:Te(f,v),we(n,n),a){var c=null;A&&Le(f)&&n.append(c=document.createComment(""));var g=A?je(n):n.appendChild(Fe());A&&(g===null?oe(!1):te(g)),a(n,g),c==null||c.remove()}ue.nodes.end=n,x.before(n)}A&&te(x)}),V(!0),()=>{f&&V(!1)}},ve),Ie(()=>{V(!0)}),s&&(oe(!0),te(l))}var Ve=K('<footer class="xs:text-base mt-auto w-full space-y-2 pt-8 pb-16 text-sm opacity-80"><div class="flex flex-wrap justify-between"><p class=" tracking-wide italic">Lucas McClean</p> <nav class="mx-auto rangerverse w-fit flex gap-4"><a href="https://the.rangerver.se/prev?from=lucas">← prev</a> <a href="https://the.rangerver.se/random?from=lucas">✦ rangerverse</a> <a href="https://the.rangerver.se/next?from=lucas">next →</a></nav> <p class="font-display text-primary ms-auto">//</p></div></footer>');function Xe(t){var e=Ve();y(t,e)}/**
 * @license @lucide/svelte v0.546.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Ye={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Ze=new Set(["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]),et=$e("<svg><!><!></svg>");function W(t,e){P(e,!0);const r=H(e,"color",3,"currentColor"),a=H(e,"size",3,24),o=H(e,"strokeWidth",3,2),i=H(e,"absoluteStrokeWidth",3,!1),s=H(e,"iconNode",19,()=>[]),n=T(e,Ze);var l=et();le(l,v=>({...Ye,...n,width:a(),height:a(),stroke:r(),"stroke-width":v,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>i()?Number(o())*24/Number(a()):o()]);var d=B(l);qe(d,17,s,Ge,(v,x)=>{var c=ge(()=>We(u(x),2));let g=()=>u(c)[0],m=()=>u(c)[1];var N=M(),O=w(N);Ue(O,g,!0,(J,q)=>{le(J,()=>({...m()}))}),y(v,N)});var f=j(d);C(f,()=>e.children??b),R(l),y(t,l),E()}var tt=new Set(["$$slots","$$events","$$legacy"]);function at(t,e){P(e,!0);/**
 * @license @lucide/svelte v0.546.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=T(e,tt);const a=[["path",{d:"m6 9 6 6 6-6"}]];W(t,I({name:"chevron-down"},()=>r,{get iconNode(){return a},children:(o,i)=>{var s=M(),n=w(s);C(n,()=>e.children??b),y(o,s)},$$slots:{default:!0}})),E()}var rt=new Set(["$$slots","$$events","$$legacy"]);function nt(t,e){P(e,!0);/**
 * @license @lucide/svelte v0.546.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=T(e,rt);const a=[["path",{d:"m15 18-6-6 6-6"}]];W(t,I({name:"chevron-left"},()=>r,{get iconNode(){return a},children:(o,i)=>{var s=M(),n=w(s);C(n,()=>e.children??b),y(o,s)},$$slots:{default:!0}})),E()}var st=new Set(["$$slots","$$events","$$legacy"]);function ot(t,e){P(e,!0);/**
 * @license @lucide/svelte v0.546.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=T(e,st);const a=[["path",{d:"m9 18 6-6-6-6"}]];W(t,I({name:"chevron-right"},()=>r,{get iconNode(){return a},children:(o,i)=>{var s=M(),n=w(s);C(n,()=>e.children??b),y(o,s)},$$slots:{default:!0}})),E()}var it=new Set(["$$slots","$$events","$$legacy"]);function lt(t,e){P(e,!0);/**
 * @license @lucide/svelte v0.546.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=T(e,it);const a=[["path",{d:"m18 15-6-6-6 6"}]];W(t,I({name:"chevron-up"},()=>r,{get iconNode(){return a},children:(o,i)=>{var s=M(),n=w(s);C(n,()=>e.children??b),y(o,s)},$$slots:{default:!0}})),E()}var ct=new Set(["$$slots","$$events","$$legacy"]);function dt(t,e){P(e,!0);/**
 * @license @lucide/svelte v0.546.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=T(e,ct);const a=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];W(t,I({name:"moon"},()=>r,{get iconNode(){return a},children:(o,i)=>{var s=M(),n=w(s);C(n,()=>e.children??b),y(o,s)},$$slots:{default:!0}})),E()}var ft=new Set(["$$slots","$$events","$$legacy"]);function ut(t,e){P(e,!0);/**
 * @license @lucide/svelte v0.546.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=T(e,ft);const a=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];W(t,I({name:"palette"},()=>r,{get iconNode(){return a},children:(o,i)=>{var s=M(),n=w(s);C(n,()=>e.children??b),y(o,s)},$$slots:{default:!0}})),E()}var vt=new Set(["$$slots","$$events","$$legacy"]);function ht(t,e){P(e,!0);/**
 * @license @lucide/svelte v0.546.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=T(e,vt);const a=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];W(t,I({name:"sun"},()=>r,{get iconNode(){return a},children:(o,i)=>{var s=M(),n=w(s);C(n,()=>e.children??b),y(o,s)},$$slots:{default:!0}})),E()}var gt=new Set(["$$slots","$$events","$$legacy"]);function mt(t,e){P(e,!0);/**
 * @license @lucide/svelte v0.546.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=T(e,gt);const a=[["path",{d:"M3 5h18"}],["path",{d:"M3 12h18"}],["path",{d:"M3 19h18"}]];W(t,I({name:"text-align-justify"},()=>r,{get iconNode(){return a},children:(o,i)=>{var s=M(),n=w(s);C(n,()=>e.children??b),y(o,s)},$$slots:{default:!0}})),E()}var _t=new Set(["$$slots","$$events","$$legacy"]);function pt(t,e){P(e,!0);/**
 * @license @lucide/svelte v0.546.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=T(e,_t);const a=[["path",{d:"M21 5H3"}],["path",{d:"M15 12H3"}],["path",{d:"M17 19H3"}]];W(t,I({name:"text-align-start"},()=>r,{get iconNode(){return a},children:(o,i)=>{var s=M(),n=w(s);C(n,()=>e.children??b),y(o,s)},$$slots:{default:!0}})),E()}const yt=t=>t;function xt(t){const e=t-1;return e*e*e+1}function de(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}function bt(t,{delay:e=0,duration:r=400,easing:a=yt}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:r,easing:a,css:i=>`opacity: ${i*o}`}}function ae(t,{delay:e=0,duration:r=400,easing:a=xt,x:o=0,y:i=0,opacity:s=0}={}){const n=getComputedStyle(t),l=+n.opacity,d=n.transform==="none"?"":n.transform,f=l*(1-s),[v,x]=de(o),[c,g]=de(i);return{delay:e,duration:r,easing:a,css:(m,N)=>`
			transform: ${d} translate(${(1-m)*v}${x}, ${(1-m)*c}${g});
			opacity: ${l-f*N}`}}var fe=K("<!> <!>",1),wt=K('<div class="flex gap-3 lg:flex-col"><button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:bg-none" title="Cycle Palette"><!></button> <button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:bg-none" title="Toggle Alignment"><!></button> <button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:bg-none" title="Toggle Theme"><!></button></div>'),$t=K('<div class="fixed bottom-6 left-6 z-50 flex gap-3 lg:bottom-6 lg:left-[calc(50%+var(--container-site)/2+0.25rem)] lg:flex-col"><button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:order-last lg:bg-none" title="Menu"><!></button> <!></div>');function kt(t,e){P(e,!1);let r=U(!1),a=U(!1),o=U("light"),i="cyan",s=U("left");function n(){localStorage.setItem("site-options",JSON.stringify({theme:u(o),palette:i,align:u(s)}))}function l(){const h=document.documentElement;h.setAttribute("data-theme",u(o)),h.setAttribute("data-palette",i),h.setAttribute("data-align",u(s))}function d(){L(r,!u(r)),localStorage.setItem("site-state",JSON.stringify({menuOpen:u(r)}))}function f(){L(o,u(o)==="dark"?"light":"dark"),u(o)==="dark"&&(i==="cyan"||i==="purple")?i="green":u(o)==="light"&&(i==="green"||i==="blue")&&(i="cyan"),l(),n()}function v(){L(s,u(s)==="left"?"justify":"left"),l(),n()}function x(){const h=["green","blue"],_=["cyan","purple"],p=u(o)==="dark"?h:_,$=p.indexOf(i);i=p[($+1)%p.length],l(),n()}Re(()=>{const h=JSON.parse(localStorage.getItem("site-options")??"{}");L(o,h.theme??(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));const _=h.palette;_&&["green","blue","cyan","purple"].includes(_)?i=_:i=u(o)==="dark"?"green":"cyan",L(s,h.align??"left"),l();const $=JSON.parse(localStorage.getItem("site-state")??"{}");L(r,$.menuOpen);const S=window.matchMedia("(min-width: 1024px)");L(a,S.matches);const G=z=>L(a,z.matches);return S.addEventListener("change",G),()=>S.removeEventListener("change",G)}),Je();var c=$t(),g=B(c),m=B(g);{var N=h=>{var _=fe(),p=w(_);at(p,{class:"hidden lg:block"});var $=j(p,2);nt($,{class:"block lg:hidden"}),y(h,_)},O=h=>{var _=fe(),p=w(_);lt(p,{class:"hidden lg:block"});var $=j(p,2);ot($,{class:"block lg:hidden"}),y(h,_)};D(m,h=>{u(r)?h(N):h(O,-1)})}R(g);var J=j(g,2);{var q=h=>{var _=wt(),p=B(_),$=B(p);ut($,{}),R(p);var S=j(p,2),G=B(S);{var z=k=>{mt(k,{})},_e=k=>{pt(k,{})};D(G,k=>{u(s)==="left"?k(z):k(_e,-1)})}R(S);var Q=j(S,2),pe=B(Q);{var ye=k=>{ht(k,{})},xe=k=>{dt(k,{})};D(pe,k=>{u(o)==="dark"?k(ye):k(xe,-1)})}R(Q),R(_),X("click",p,x),Z(3,p,()=>ae,()=>({x:u(a)?0:-8,y:u(a)?8:0,duration:200})),X("click",S,v),Z(3,S,()=>ae,()=>({x:u(a)?0:-8,y:u(a)?8:0,duration:200})),X("click",Q,f),Z(3,Q,()=>ae,()=>({x:u(a)?0:-8,y:u(a)?8:0,duration:200})),Z(3,_,()=>bt,()=>({duration:150})),y(h,_)};D(J,h=>{u(r)&&h(q)})}R(c),X("click",g,d),y(t,c),E()}Be(["click"]);var Nt=K('<div class="xs:text-lg max-w-site mx-auto flex flex-col items-center px-8 [text-align:var(--site-alignment)] transition-colors"><a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a> <!> <!></div> <!>',1);function Wt(t,e){P(e,!0);const r=ge(()=>ie.url.pathname.startsWith("/chameleon")||ie.url.pathname.startsWith("/ool"));var a=M(),o=w(a);{var i=n=>{var l=M(),d=w(l);C(d,()=>e.children),y(n,l)},s=n=>{var l=Nt(),d=w(l),f=j(B(d),2);C(f,()=>e.children);var v=j(f,2);Xe(v),R(d);var x=j(d,2);kt(x,{}),y(n,l)};D(o,n=>{u(r)?n(i):n(s,-1)})}y(t,a),E()}export{Wt as component};
