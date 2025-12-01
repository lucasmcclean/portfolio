import{p as H,r as E,s as j,i as K}from"../chunks/DbqXEwLo.js";import{V as z,X as tt,a0 as X,b6 as gt,R as ht,aA as it,a3 as mt,b7 as _t,aw as pt,b8 as yt,W as bt,Q as xt,$ as et,U as at,am as lt,ad as $t,ac as wt,ag as kt,b9 as nt,ba as Nt,bb as Ct,bc as Mt,I as St,e as Pt,bd as Et,be as ct,aN as Tt,K as At,bf as $,v as G,x as y,r as M,ao as Ot,z as I,aS as T,w as N,B as A,ap as S,D as L,y as P,G as u,an as jt,bg as Ft,a_ as zt,a9 as U,as as W}from"../chunks/Byb_Un06.js";import{b as rt}from"../chunks/CbmpheVW.js";import{o as It}from"../chunks/5hqNKn79.js";import{i as Lt}from"../chunks/eUMQ6P5X.js";import{e as Wt,i as Rt}from"../chunks/CWWBBSMu.js";function Bt(e,t,n,a,o,s){let r=z;z&&tt();var i,h,l=null;z&&X.nodeType===gt&&(l=X,tt());var d=z?X:e,g;ht(()=>{const v=t()||null;var b=_t;v!==i&&(g&&(v===null?$t(g,()=>{g=null,h=null}):v===h?wt(g):(kt(g),nt(!1))),v&&v!==h&&(g=mt(()=>{if(l=z?l:document.createElementNS(b,v),pt(l,l),a){z&&yt(v)&&l.append(document.createComment(""));var p=z?bt(l):l.appendChild(xt());z&&(p===null?et(!1):at(p)),a(l,p)}lt.nodes_end=l,d.before(l)})),i=v,i&&(h=i),nt(!0))},it),r&&(et(!0),at(d))}const Jt=()=>performance.now(),O={tick:e=>requestAnimationFrame(e),now:()=>Jt(),tasks:new Set};function dt(){const e=O.now();O.tasks.forEach(t=>{t.c(e)||(O.tasks.delete(t),t.f())}),O.tasks.size!==0&&O.tick(dt)}function qt(e){let t;return O.tasks.size===0&&O.tick(dt),{promise:new Promise(n=>{O.tasks.add(t={c:e,f:n})}),abort(){O.tasks.delete(t)}}}function V(e,t){ct(()=>{e.dispatchEvent(new CustomEvent(t))})}function Gt(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function ot(e){const t={},n=e.split(";");for(const a of n){const[o,s]=a.split(":");if(!o||s===void 0)break;const r=Gt(o.trim());t[r]=s.trim()}return t}const Ht=e=>e;function Q(e,t,n,a){var o=(e&Et)!==0,s="both",r,i=t.inert,h=t.style.overflow,l,d;function g(){return ct(()=>r??(r=n()(t,(a==null?void 0:a())??{},{direction:s})))}var v={is_global:o,in(){t.inert=i,V(t,"introstart"),l=Z(t,g(),d,1,()=>{V(t,"introend"),l==null||l.abort(),l=r=void 0,t.style.overflow=h})},out(x){t.inert=!0,V(t,"outrostart"),d=Z(t,g(),l,0,()=>{V(t,"outroend"),x==null||x()})},stop:()=>{l==null||l.abort(),d==null||d.abort()}},b=lt;if((b.transitions??(b.transitions=[])).push(v),Nt){var p=o;if(!p){for(var f=b.parent;f&&(f.f&it)!==0;)for(;(f=f.parent)&&(f.f&Ct)===0;);p=!f||(f.f&Mt)!==0}p&&St(()=>{Pt(()=>v.in())})}}function Z(e,t,n,a,o){var s=a===1;if(Tt(t)){var r,i=!1;return At(()=>{if(!i){var x=t({direction:s?"in":"out"});r=Z(e,x,n,a,o)}}),{abort:()=>{i=!0,r==null||r.abort()},deactivate:()=>r.deactivate(),reset:()=>r.reset(),t:()=>r.t()}}if(n==null||n.deactivate(),!(t!=null&&t.duration))return o(),{abort:$,deactivate:$,reset:$,t:()=>a};const{delay:h=0,css:l,tick:d,easing:g=Ht}=t;var v=[];if(s&&n===void 0&&(d&&d(0,1),l)){var b=ot(l(0,1));v.push(b,b)}var p=()=>1-a,f=e.animate(v,{duration:h,fill:"forwards"});return f.onfinish=()=>{f.cancel();var x=(n==null?void 0:n.t())??1-a;n==null||n.abort();var R=a-x,c=t.duration*Math.abs(R),m=[];if(c>0){var _=!1;if(l)for(var C=Math.ceil(c/16.666666666666668),w=0;w<=C;w+=1){var B=x+R*g(w/C),J=ot(l(B,1-B));m.push(J),_||(_=J.overflow==="hidden")}_&&(e.style.overflow="hidden"),p=()=>{var q=f.currentTime;return x+R*g(q/c)},d&&qt(()=>{if(f.playState!=="running")return!1;var q=p();return d(q,1-q),!0})}f=e.animate(m,{duration:c,fill:"forwards"}),f.onfinish=()=>{p=()=>a,d==null||d(a,1-a),o()}},{abort:()=>{f&&(f.cancel(),f.effect=null,f.onfinish=$)},deactivate:()=>{o=$},reset:()=>{a===0&&(d==null||d(1,0))},t:()=>p()}}var Dt=G('<footer class="xs:text-base mt-auto w-full space-y-2 pt-8 pb-16 text-sm opacity-80"><div class="flex flex-wrap justify-between"><p class=" tracking-wide italic">Lucas McClean</p> <p class="font-display text-primary ms-auto">//</p></div></footer>');function Kt(e){var t=Dt();y(e,t)}/**
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
 */const Ut={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Vt=Ot("<svg><!><!></svg>");function F(e,t){M(t,!0);const n=H(t,"color",3,"currentColor"),a=H(t,"size",3,24),o=H(t,"strokeWidth",3,2),s=H(t,"absoluteStrokeWidth",3,!1),r=H(t,"iconNode",19,()=>[]),i=E(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var h=Vt();rt(h,g=>({...Ut,...i,width:a(),height:a(),stroke:n(),"stroke-width":g,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>s()?Number(o())*24/Number(a()):o()]);var l=I(h);Wt(l,17,r,Rt,(g,v)=>{var b=jt(()=>Ft(u(v),2));let p=()=>u(b)[0],f=()=>u(b)[1];var x=T(),R=N(x);Bt(R,p,!0,(c,m)=>{rt(c,()=>({...f()}))}),y(g,x)});var d=A(l);S(d,()=>t.children??$),L(h),y(e,h),P()}function Qt(e,t){M(t,!0);/**
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
 */let n=E(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m6 9 6 6 6-6"}]];F(e,j({name:"chevron-down"},()=>n,{get iconNode(){return a},children:(o,s)=>{var r=T(),i=N(r);S(i,()=>t.children??$),y(o,r)},$$slots:{default:!0}})),P()}function Xt(e,t){M(t,!0);/**
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
 */let n=E(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m15 18-6-6 6-6"}]];F(e,j({name:"chevron-left"},()=>n,{get iconNode(){return a},children:(o,s)=>{var r=T(),i=N(r);S(i,()=>t.children??$),y(o,r)},$$slots:{default:!0}})),P()}function Yt(e,t){M(t,!0);/**
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
 */let n=E(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m9 18 6-6-6-6"}]];F(e,j({name:"chevron-right"},()=>n,{get iconNode(){return a},children:(o,s)=>{var r=T(),i=N(r);S(i,()=>t.children??$),y(o,r)},$$slots:{default:!0}})),P()}function Zt(e,t){M(t,!0);/**
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
 */let n=E(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m18 15-6-6-6 6"}]];F(e,j({name:"chevron-up"},()=>n,{get iconNode(){return a},children:(o,s)=>{var r=T(),i=N(r);S(i,()=>t.children??$),y(o,r)},$$slots:{default:!0}})),P()}function te(e,t){M(t,!0);/**
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
 */let n=E(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];F(e,j({name:"moon"},()=>n,{get iconNode(){return a},children:(o,s)=>{var r=T(),i=N(r);S(i,()=>t.children??$),y(o,r)},$$slots:{default:!0}})),P()}function ee(e,t){M(t,!0);/**
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
 */let n=E(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];F(e,j({name:"palette"},()=>n,{get iconNode(){return a},children:(o,s)=>{var r=T(),i=N(r);S(i,()=>t.children??$),y(o,r)},$$slots:{default:!0}})),P()}function ae(e,t){M(t,!0);/**
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
 */let n=E(t,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];F(e,j({name:"sun"},()=>n,{get iconNode(){return a},children:(o,s)=>{var r=T(),i=N(r);S(i,()=>t.children??$),y(o,r)},$$slots:{default:!0}})),P()}function ne(e,t){M(t,!0);/**
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
 */let n=E(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 5h18"}],["path",{d:"M3 12h18"}],["path",{d:"M3 19h18"}]];F(e,j({name:"text-align-justify"},()=>n,{get iconNode(){return a},children:(o,s)=>{var r=T(),i=N(r);S(i,()=>t.children??$),y(o,r)},$$slots:{default:!0}})),P()}function re(e,t){M(t,!0);/**
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
 */let n=E(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21 5H3"}],["path",{d:"M15 12H3"}],["path",{d:"M17 19H3"}]];F(e,j({name:"text-align-start"},()=>n,{get iconNode(){return a},children:(o,s)=>{var r=T(),i=N(r);S(i,()=>t.children??$),y(o,r)},$$slots:{default:!0}})),P()}const oe=e=>e;function se(e){const t=e-1;return t*t*t+1}function st(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function ie(e,{delay:t=0,duration:n=400,easing:a=oe}={}){const o=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:a,css:s=>`opacity: ${s*o}`}}function Y(e,{delay:t=0,duration:n=400,easing:a=se,x:o=0,y:s=0,opacity:r=0}={}){const i=getComputedStyle(e),h=+i.opacity,l=i.transform==="none"?"":i.transform,d=h*(1-r),[g,v]=st(o),[b,p]=st(s);return{delay:t,duration:n,easing:a,css:(f,x)=>`
			transform: ${l} translate(${(1-f)*g}${v}, ${(1-f)*b}${p});
			opacity: ${h-d*x}`}}function le(e,t){W(t,!u(t)),localStorage.setItem("site-state",JSON.stringify({menuOpen:u(t)}))}function ce(e,t,n,a){W(t,u(t)==="left"?"justify":"left"),n(),a()}var de=G("<!> <!>",1),fe=G("<!> <!>",1),ue=G('<div class="flex gap-3 lg:flex-col"><button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:bg-none" title="Cycle Palette"><!></button> <button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:bg-none" title="Toggle Alignment"><!></button> <button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:bg-none" title="Toggle Theme"><!></button></div>'),ve=G('<div class="fixed bottom-6 left-6 z-50 flex gap-3 lg:bottom-6 lg:left-[calc(50%+var(--container-site)/2+0.25rem)] lg:flex-col"><button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:order-last lg:bg-none" title="Menu"><!></button> <!></div>');function ge(e,t){M(t,!1);let n=U(!1),a=U(!1),o=U("light"),s="cyan",r=U("left");function i(){localStorage.setItem("site-options",JSON.stringify({theme:u(o),palette:s,align:u(r)}))}function h(){const c=document.documentElement;c.setAttribute("data-theme",u(o)),c.setAttribute("data-palette",s),c.setAttribute("data-align",u(r))}function l(){W(o,u(o)==="dark"?"light":"dark"),u(o)==="dark"&&(s==="cyan"||s==="purple")?s="green":u(o)==="light"&&(s==="green"||s==="blue")&&(s="cyan"),h(),i()}function d(){const c=["green","blue"],m=["cyan","purple"],_=u(o)==="dark"?c:m,C=_.indexOf(s);s=_[(C+1)%_.length],h(),i()}It(()=>{const c=JSON.parse(localStorage.getItem("site-options")??"{}");W(o,c.theme??(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));const m=c.palette;m&&["green","blue","cyan","purple"].includes(m)?s=m:s=u(o)==="dark"?"green":"cyan",W(r,c.align??"left"),h();const C=JSON.parse(localStorage.getItem("site-state")??"{}");W(n,C.menuOpen);const w=window.matchMedia("(min-width: 1024px)");W(a,w.matches);const B=J=>W(a,J.matches);return w.addEventListener("change",B),()=>w.removeEventListener("change",B)}),Lt();var g=ve(),v=I(g);v.__click=[le,n];var b=I(v);{var p=c=>{var m=de(),_=N(m);Qt(_,{class:"hidden lg:block"});var C=A(_,2);Xt(C,{class:"block lg:hidden"}),y(c,m)},f=c=>{var m=fe(),_=N(m);Zt(_,{class:"hidden lg:block"});var C=A(_,2);Yt(C,{class:"block lg:hidden"}),y(c,m)};K(b,c=>{u(n)?c(p):c(f,!1)})}L(v);var x=A(v,2);{var R=c=>{var m=ue(),_=I(m);_.__click=d;var C=I(_);ee(C,{}),L(_);var w=A(_,2);w.__click=[ce,r,h,i];var B=I(w);{var J=k=>{ne(k,{})},q=k=>{re(k,{})};K(B,k=>{u(r)==="left"?k(J):k(q,!1)})}L(w);var D=A(w,2);D.__click=l;var ft=I(D);{var ut=k=>{ae(k,{})},vt=k=>{te(k,{})};K(ft,k=>{u(o)==="dark"?k(ut):k(vt,!1)})}L(D),L(m),Q(3,_,()=>Y,()=>({x:u(a)?0:-8,y:u(a)?8:0,duration:200})),Q(3,w,()=>Y,()=>({x:u(a)?0:-8,y:u(a)?8:0,duration:200})),Q(3,D,()=>Y,()=>({x:u(a)?0:-8,y:u(a)?8:0,duration:200})),Q(3,m,()=>ie,()=>({duration:150})),y(c,m)};K(x,c=>{u(n)&&c(R)})}L(g),y(e,g),P()}zt(["click"]);var he=G('<div class="xs:text-lg max-w-site mx-auto flex flex-col items-center px-8 [text-align:var(--site-alignment)] transition-colors"><a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a> <!> <!></div> <!>',1);function $e(e,t){var n=he(),a=N(n),o=A(I(a),2);S(o,()=>t.children);var s=A(o,2);Kt(s),L(a);var r=A(a,2);ge(r,{}),y(e,n)}export{$e as component};
