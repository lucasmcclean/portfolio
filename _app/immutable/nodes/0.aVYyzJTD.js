import{p as J,r as T,s as F,i as D}from"../chunks/DBIPah4s.js";import{R as L,T as Z,Y as U,b4 as vt,O as ht,au as st,$ as gt,b5 as mt,aq as _t,b6 as pt,S as yt,N as bt,X as tt,Q as et,aj as it,a9 as xt,a8 as $t,ad as wt,b7 as at,b8 as kt,b9 as Nt,ba as Mt,aM as Ct,e as St,bb as Et,bc as lt,az as Tt,ac as Pt,bd as $,v as q,x as y,r as M,al as At,z as I,aQ as P,w as k,B as O,am as C,D as W,y as S,G as h,ak as Ot,be as jt,aY as Ft,a5 as Q,aF as R}from"../chunks/D9Q_RrGI.js";import{b as rt}from"../chunks/CjSdXuxl.js";import{o as zt}from"../chunks/BhyDxz2u.js";import{i as Lt}from"../chunks/Bn0KDxNK.js";import{e as It,i as Wt}from"../chunks/D56Yx67U.js";function Rt(e,t,r,a,o,l){let n=L;L&&Z();var s,v,i=null;L&&U.nodeType===vt&&(i=U,Z());var c=L?U:e,u;ht(()=>{const g=t()||null;var b=mt;g!==s&&(u&&(g===null?xt(u,()=>{u=null,v=null}):g===v?$t(u):(wt(u),at(!1))),g&&g!==v&&(u=gt(()=>{if(i=L?i:document.createElementNS(b,g),_t(i,i),a){L&&pt(g)&&i.append(document.createComment(""));var p=L?yt(i):i.appendChild(bt());L&&(p===null?tt(!1):et(p)),a(i,p)}it.nodes_end=i,c.before(i)})),s=g,s&&(v=s),at(!0))},st),n&&(tt(!0),et(c))}const qt=()=>performance.now(),j={tick:e=>requestAnimationFrame(e),now:()=>qt(),tasks:new Set};function ct(){const e=j.now();j.tasks.forEach(t=>{t.c(e)||(j.tasks.delete(t),t.f())}),j.tasks.size!==0&&j.tick(ct)}function Bt(e){let t;return j.tasks.size===0&&j.tick(ct),{promise:new Promise(r=>{j.tasks.add(t={c:e,f:r})}),abort(){j.tasks.delete(t)}}}function Y(e,t){lt(()=>{e.dispatchEvent(new CustomEvent(t))})}function Jt(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function nt(e){const t={},r=e.split(";");for(const a of r){const[o,l]=a.split(":");if(!o||l===void 0)break;const n=Jt(o.trim());t[n]=l.trim()}return t}const Gt=e=>e;function K(e,t,r,a){var o=(e&Et)!==0,l="both",n,s=t.inert,v=t.style.overflow,i,c;function u(){return lt(()=>n??(n=r()(t,(a==null?void 0:a())??{},{direction:l})))}var g={is_global:o,in(){t.inert=s,Y(t,"introstart"),i=X(t,u(),c,1,()=>{Y(t,"introend"),i==null||i.abort(),i=n=void 0,t.style.overflow=v})},out(x){t.inert=!0,Y(t,"outrostart"),c=X(t,u(),i,0,()=>{Y(t,"outroend"),x==null||x()})},stop:()=>{i==null||i.abort(),c==null||c.abort()}},b=it;if((b.transitions??(b.transitions=[])).push(g),kt){var p=o;if(!p){for(var d=b.parent;d&&(d.f&st)!==0;)for(;(d=d.parent)&&(d.f&Nt)===0;);p=!d||(d.f&Mt)!==0}p&&Ct(()=>{St(()=>g.in())})}}function X(e,t,r,a,o){var l=a===1;if(Tt(t)){var n,s=!1;return Pt(()=>{if(!s){var x=t({direction:l?"in":"out"});n=X(e,x,r,a,o)}}),{abort:()=>{s=!0,n==null||n.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return o(),{abort:$,deactivate:$,reset:$,t:()=>a};const{delay:v=0,css:i,tick:c,easing:u=Gt}=t;var g=[];if(l&&r===void 0&&(c&&c(0,1),i)){var b=nt(i(0,1));g.push(b,b)}var p=()=>1-a,d=e.animate(g,{duration:v,fill:"forwards"});return d.onfinish=()=>{d.cancel();var x=(r==null?void 0:r.t())??1-a;r==null||r.abort();var f=a-x,m=t.duration*Math.abs(f),_=[];if(m>0){var N=!1;if(i)for(var E=Math.ceil(m/16.666666666666668),B=0;B<=E;B+=1){var G=x+f*u(B/E),H=nt(i(G,1-G));_.push(H),N||(N=H.overflow==="hidden")}N&&(e.style.overflow="hidden"),p=()=>{var A=d.currentTime;return x+f*u(A/m)},c&&Bt(()=>{if(d.playState!=="running")return!1;var A=p();return c(A,1-A),!0})}d=e.animate(_,{duration:m,fill:"forwards"}),d.onfinish=()=>{p=()=>a,c==null||c(a,1-a),o()}},{abort:()=>{d&&(d.cancel(),d.effect=null,d.onfinish=$)},deactivate:()=>{o=$},reset:()=>{a===0&&(c==null||c(1,0))},t:()=>p()}}var Ht=q('<footer class="xs:text-base mt-auto w-full space-y-2 pt-8 pb-16 text-sm opacity-80"><div class="flex flex-wrap justify-between"><p>&copy; 2025 Lucas McClean. All rights reserved.</p> <p class="font-display text-primary ms-auto">//</p></div></footer>');function Dt(e){var t=Ht();y(e,t)}/**
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
 */const Qt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Yt=At("<svg><!><!></svg>");function z(e,t){M(t,!0);const r=J(t,"color",3,"currentColor"),a=J(t,"size",3,24),o=J(t,"strokeWidth",3,2),l=J(t,"absoluteStrokeWidth",3,!1),n=J(t,"iconNode",19,()=>[]),s=T(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var v=Yt();rt(v,u=>({...Qt,...s,width:a(),height:a(),stroke:r(),"stroke-width":u,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>l()?Number(o())*24/Number(a()):o()]);var i=I(v);It(i,17,n,Wt,(u,g)=>{var b=Ot(()=>jt(h(g),2));let p=()=>h(b)[0],d=()=>h(b)[1];var x=P(),f=k(x);Rt(f,p,!0,(m,_)=>{rt(m,()=>({...d()}))}),y(u,x)});var c=O(i);C(c,()=>t.children??$),W(v),y(e,v),S()}function Kt(e,t){M(t,!0);/**
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
 */let r=T(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m6 9 6 6 6-6"}]];z(e,F({name:"chevron-down"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=P(),s=k(n);C(s,()=>t.children??$),y(o,n)},$$slots:{default:!0}})),S()}function Ut(e,t){M(t,!0);/**
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
 */let r=T(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m15 18-6-6 6-6"}]];z(e,F({name:"chevron-left"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=P(),s=k(n);C(s,()=>t.children??$),y(o,n)},$$slots:{default:!0}})),S()}function Vt(e,t){M(t,!0);/**
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
 */let r=T(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m9 18 6-6-6-6"}]];z(e,F({name:"chevron-right"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=P(),s=k(n);C(s,()=>t.children??$),y(o,n)},$$slots:{default:!0}})),S()}function Xt(e,t){M(t,!0);/**
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
 */let r=T(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m18 15-6-6-6 6"}]];z(e,F({name:"chevron-up"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=P(),s=k(n);C(s,()=>t.children??$),y(o,n)},$$slots:{default:!0}})),S()}function Zt(e,t){M(t,!0);/**
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
 */let r=T(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];z(e,F({name:"moon"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=P(),s=k(n);C(s,()=>t.children??$),y(o,n)},$$slots:{default:!0}})),S()}function te(e,t){M(t,!0);/**
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
 */let r=T(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];z(e,F({name:"palette"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=P(),s=k(n);C(s,()=>t.children??$),y(o,n)},$$slots:{default:!0}})),S()}function ee(e,t){M(t,!0);/**
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
 */let r=T(t,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];z(e,F({name:"sun"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=P(),s=k(n);C(s,()=>t.children??$),y(o,n)},$$slots:{default:!0}})),S()}function ae(e,t){M(t,!0);/**
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
 */let r=T(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 5h18"}],["path",{d:"M3 12h18"}],["path",{d:"M3 19h18"}]];z(e,F({name:"text-align-justify"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=P(),s=k(n);C(s,()=>t.children??$),y(o,n)},$$slots:{default:!0}})),S()}function re(e,t){M(t,!0);/**
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
 */let r=T(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21 5H3"}],["path",{d:"M15 12H3"}],["path",{d:"M17 19H3"}]];z(e,F({name:"text-align-start"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=P(),s=k(n);C(s,()=>t.children??$),y(o,n)},$$slots:{default:!0}})),S()}const ne=e=>e;function oe(e){const t=e-1;return t*t*t+1}function ot(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function se(e,{delay:t=0,duration:r=400,easing:a=ne}={}){const o=+getComputedStyle(e).opacity;return{delay:t,duration:r,easing:a,css:l=>`opacity: ${l*o}`}}function V(e,{delay:t=0,duration:r=400,easing:a=oe,x:o=0,y:l=0,opacity:n=0}={}){const s=getComputedStyle(e),v=+s.opacity,i=s.transform==="none"?"":s.transform,c=v*(1-n),[u,g]=ot(o),[b,p]=ot(l);return{delay:t,duration:r,easing:a,css:(d,x)=>`
			transform: ${i} translate(${(1-d)*u}${g}, ${(1-d)*b}${p});
			opacity: ${v-c*x}`}}function ie(e,t){R(t,!h(t)),localStorage.setItem("site-state",JSON.stringify({menuOpen:h(t)}))}function le(e,t,r,a){R(t,h(t)==="dark"?"light":"dark"),r(),a()}function ce(e,t,r,a){R(t,h(t)==="left"?"justify":"left"),r(),a()}var de=q("<!> <!>",1),fe=q("<!> <!>",1),ue=q('<div class="flex gap-3 lg:flex-col"><button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:bg-none" title="Cycle Palette"><!></button> <button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:bg-none" title="Toggle Alignment"><!></button> <button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:bg-none" title="Toggle Theme"><!></button></div>'),ve=q('<div class="fixed bottom-6 left-6 z-50 flex gap-3 lg:bottom-6 lg:left-[calc(50%+var(--container-site)/2+0.25rem)] lg:flex-col"><button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:order-last lg:bg-none" title="Menu"><!></button> <!></div>');function he(e,t){M(t,!1);let r=Q(!1),a=Q(!1),o=Q("light"),l="default",n=Q("left");function s(){localStorage.setItem("site-options",JSON.stringify({theme:h(o),palette:l,align:h(n)}))}function v(){const f=document.documentElement;f.setAttribute("data-theme",h(o)),f.setAttribute("data-palette",l),f.setAttribute("data-align",h(n))}function i(){l=l==="default"?"alt":"default",v(),s()}zt(()=>{const f=JSON.parse(localStorage.getItem("site-options")??"{}");R(o,f.theme??(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")),l=f.palette??"default",R(n,f.align??"left"),v();const m=JSON.parse(localStorage.getItem("site-state")??"{}");R(r,m.menuOpen);const _=window.matchMedia("(min-width: 1024px)");R(a,_.matches);const N=E=>R(a,E.matches);return _.addEventListener("change",N),()=>_.removeEventListener("change",N)}),Lt();var c=ve(),u=I(c);u.__click=[ie,r];var g=I(u);{var b=f=>{var m=de(),_=k(m);Kt(_,{class:"hidden lg:block"});var N=O(_,2);Ut(N,{class:"block lg:hidden"}),y(f,m)},p=f=>{var m=fe(),_=k(m);Xt(_,{class:"hidden lg:block"});var N=O(_,2);Vt(N,{class:"block lg:hidden"}),y(f,m)};D(g,f=>{h(r)?f(b):f(p,!1)})}W(u);var d=O(u,2);{var x=f=>{var m=ue(),_=I(m);_.__click=i;var N=I(_);te(N,{}),W(_);var E=O(_,2);E.__click=[ce,n,v,s];var B=I(E);{var G=w=>{ae(w,{})},H=w=>{re(w,{})};D(B,w=>{h(n)==="left"?w(G):w(H,!1)})}W(E);var A=O(E,2);A.__click=[le,o,v,s];var dt=I(A);{var ft=w=>{ee(w,{})},ut=w=>{Zt(w,{})};D(dt,w=>{h(o)==="dark"?w(ft):w(ut,!1)})}W(A),W(m),K(3,_,()=>V,()=>({x:h(a)?0:-8,y:h(a)?8:0,duration:200})),K(3,E,()=>V,()=>({x:h(a)?0:-8,y:h(a)?8:0,duration:200})),K(3,A,()=>V,()=>({x:h(a)?0:-8,y:h(a)?8:0,duration:200})),K(3,m,()=>se,()=>({duration:150})),y(f,m)};D(d,f=>{h(r)&&f(x)})}W(c),y(e,c),S()}Ft(["click"]);var ge=q('<div class="xs:text-lg max-w-site mx-auto flex flex-col items-center px-8 [text-align:var(--site-alignment)] transition-colors"><a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a> <!> <!></div> <!>',1);function $e(e,t){var r=ge(),a=k(r),o=O(I(a),2);C(o,()=>t.children);var l=O(o,2);Dt(l),W(a);var n=O(a,2);he(n,{}),y(e,r)}export{$e as component};
