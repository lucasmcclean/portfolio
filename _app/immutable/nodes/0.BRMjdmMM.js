import{p as I,r as P,s as F,i as Q}from"../chunks/DBIPah4s.js";import{R as W,T as Z,Y as K,b4 as vt,O as mt,au as st,$ as gt,b5 as ht,aq as _t,b6 as yt,S as pt,N as bt,X as tt,Q as et,aj as it,a9 as xt,a8 as $t,ad as wt,b7 as rt,b8 as kt,b9 as Nt,ba as Et,aM as Ct,e as Mt,bb as Pt,bc as lt,az as St,ac as Tt,bd as $,v as B,x as p,r as E,al as At,z as R,aQ as S,w as N,B as A,am as C,D as V,y as M,G as c,ak as jt,be as Ft,aY as zt,aP as q,aF as k}from"../chunks/D9Q_RrGI.js";import{b as at}from"../chunks/CjSdXuxl.js";import{o as Lt}from"../chunks/BhyDxz2u.js";import{e as Ot,i as Wt}from"../chunks/D56Yx67U.js";function Rt(e,t,r,a,o,l){let n=W;W&&Z();var s,u,i=null;W&&K.nodeType===vt&&(i=K,Z());var d=W?K:e,v;mt(()=>{const m=t()||null;var b=ht;m!==s&&(v&&(m===null?xt(v,()=>{v=null,u=null}):m===u?$t(v):(wt(v),rt(!1))),m&&m!==u&&(v=gt(()=>{if(i=W?i:document.createElementNS(b,m),_t(i,i),a){W&&yt(m)&&i.append(document.createComment(""));var _=W?pt(i):i.appendChild(bt());W&&(_===null?tt(!1):et(_)),a(i,_)}it.nodes_end=i,d.before(i)})),s=m,s&&(u=s),rt(!0))},st),n&&(tt(!0),et(d))}const Vt=()=>performance.now(),j={tick:e=>requestAnimationFrame(e),now:()=>Vt(),tasks:new Set};function ct(){const e=j.now();j.tasks.forEach(t=>{t.c(e)||(j.tasks.delete(t),t.f())}),j.tasks.size!==0&&j.tick(ct)}function qt(e){let t;return j.tasks.size===0&&j.tick(ct),{promise:new Promise(r=>{j.tasks.add(t={c:e,f:r})}),abort(){j.tasks.delete(t)}}}function Y(e,t){lt(()=>{e.dispatchEvent(new CustomEvent(t))})}function Bt(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function nt(e){const t={},r=e.split(";");for(const a of r){const[o,l]=a.split(":");if(!o||l===void 0)break;const n=Bt(o.trim());t[n]=l.trim()}return t}const Dt=e=>e;function J(e,t,r,a){var o=(e&Pt)!==0,l="both",n,s=t.inert,u=t.style.overflow,i,d;function v(){return lt(()=>n??(n=r()(t,(a==null?void 0:a())??{},{direction:l})))}var m={is_global:o,in(){t.inert=s,Y(t,"introstart"),i=X(t,v(),d,1,()=>{Y(t,"introend"),i==null||i.abort(),i=n=void 0,t.style.overflow=u})},out(x){t.inert=!0,Y(t,"outrostart"),d=X(t,v(),i,0,()=>{Y(t,"outroend"),x==null||x()})},stop:()=>{i==null||i.abort(),d==null||d.abort()}},b=it;if((b.transitions??(b.transitions=[])).push(m),kt){var _=o;if(!_){for(var f=b.parent;f&&(f.f&st)!==0;)for(;(f=f.parent)&&(f.f&Nt)===0;);_=!f||(f.f&Et)!==0}_&&Ct(()=>{Mt(()=>m.in())})}}function X(e,t,r,a,o){var l=a===1;if(St(t)){var n,s=!1;return Tt(()=>{if(!s){var x=t({direction:l?"in":"out"});n=X(e,x,r,a,o)}}),{abort:()=>{s=!0,n==null||n.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return o(),{abort:$,deactivate:$,reset:$,t:()=>a};const{delay:u=0,css:i,tick:d,easing:v=Dt}=t;var m=[];if(l&&r===void 0&&(d&&d(0,1),i)){var b=nt(i(0,1));m.push(b,b)}var _=()=>1-a,f=e.animate(m,{duration:u,fill:"forwards"});return f.onfinish=()=>{f.cancel();var x=(r==null?void 0:r.t())??1-a;r==null||r.abort();var g=a-x,h=t.duration*Math.abs(g),y=[];if(h>0){var L=!1;if(i)for(var O=Math.ceil(h/16.666666666666668),D=0;D<=O;D+=1){var G=x+g*v(D/O),H=nt(i(G,1-G));y.push(H),L||(L=H.overflow==="hidden")}L&&(e.style.overflow="hidden"),_=()=>{var T=f.currentTime;return x+g*v(T/h)},d&&qt(()=>{if(f.playState!=="running")return!1;var T=_();return d(T,1-T),!0})}f=e.animate(y,{duration:h,fill:"forwards"}),f.onfinish=()=>{_=()=>a,d==null||d(a,1-a),o()}},{abort:()=>{f&&(f.cancel(),f.effect=null,f.onfinish=$)},deactivate:()=>{o=$},reset:()=>{a===0&&(d==null||d(1,0))},t:()=>_()}}var It=B('<footer class="xs:text-base mt-auto w-full space-y-2 py-8 text-sm opacity-80"><div class="flex flex-wrap justify-between"><p>&copy; 2025 Lucas McClean. All rights reserved.</p> <p class="font-display text-primary ms-auto">//</p></div></footer>');function Gt(e){var t=It();p(e,t)}/**
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
 */const Ht={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Qt=At("<svg><!><!></svg>");function z(e,t){E(t,!0);const r=I(t,"color",3,"currentColor"),a=I(t,"size",3,24),o=I(t,"strokeWidth",3,2),l=I(t,"absoluteStrokeWidth",3,!1),n=I(t,"iconNode",19,()=>[]),s=P(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=Qt();at(u,v=>({...Ht,...s,width:a(),height:a(),stroke:r(),"stroke-width":v,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>l()?Number(o())*24/Number(a()):o()]);var i=R(u);Ot(i,17,n,Wt,(v,m)=>{var b=jt(()=>Ft(c(m),2));let _=()=>c(b)[0],f=()=>c(b)[1];var x=S(),g=N(x);Rt(g,_,!0,(h,y)=>{at(h,()=>({...f()}))}),p(v,x)});var d=A(i);C(d,()=>t.children??$),V(u),p(e,u),M()}function Yt(e,t){E(t,!0);/**
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
 */let r=P(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m6 9 6 6 6-6"}]];z(e,F({name:"chevron-down"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=S(),s=N(n);C(s,()=>t.children??$),p(o,n)},$$slots:{default:!0}})),M()}function Jt(e,t){E(t,!0);/**
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
 */let r=P(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m15 18-6-6 6-6"}]];z(e,F({name:"chevron-left"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=S(),s=N(n);C(s,()=>t.children??$),p(o,n)},$$slots:{default:!0}})),M()}function Kt(e,t){E(t,!0);/**
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
 */let r=P(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m9 18 6-6-6-6"}]];z(e,F({name:"chevron-right"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=S(),s=N(n);C(s,()=>t.children??$),p(o,n)},$$slots:{default:!0}})),M()}function Ut(e,t){E(t,!0);/**
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
 */let r=P(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m18 15-6-6-6 6"}]];z(e,F({name:"chevron-up"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=S(),s=N(n);C(s,()=>t.children??$),p(o,n)},$$slots:{default:!0}})),M()}function Xt(e,t){E(t,!0);/**
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
 */let r=P(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];z(e,F({name:"moon"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=S(),s=N(n);C(s,()=>t.children??$),p(o,n)},$$slots:{default:!0}})),M()}function Zt(e,t){E(t,!0);/**
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
 */let r=P(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];z(e,F({name:"palette"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=S(),s=N(n);C(s,()=>t.children??$),p(o,n)},$$slots:{default:!0}})),M()}function te(e,t){E(t,!0);/**
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
 */let r=P(t,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];z(e,F({name:"sun"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=S(),s=N(n);C(s,()=>t.children??$),p(o,n)},$$slots:{default:!0}})),M()}function ee(e,t){E(t,!0);/**
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
 */let r=P(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 5h18"}],["path",{d:"M3 12h18"}],["path",{d:"M3 19h18"}]];z(e,F({name:"text-align-justify"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=S(),s=N(n);C(s,()=>t.children??$),p(o,n)},$$slots:{default:!0}})),M()}function re(e,t){E(t,!0);/**
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
 */let r=P(t,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21 5H3"}],["path",{d:"M15 12H3"}],["path",{d:"M17 19H3"}]];z(e,F({name:"text-align-start"},()=>r,{get iconNode(){return a},children:(o,l)=>{var n=S(),s=N(n);C(s,()=>t.children??$),p(o,n)},$$slots:{default:!0}})),M()}const ae=e=>e;function ne(e){const t=e-1;return t*t*t+1}function ot(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function oe(e,{delay:t=0,duration:r=400,easing:a=ae}={}){const o=+getComputedStyle(e).opacity;return{delay:t,duration:r,easing:a,css:l=>`opacity: ${l*o}`}}function U(e,{delay:t=0,duration:r=400,easing:a=ne,x:o=0,y:l=0,opacity:n=0}={}){const s=getComputedStyle(e),u=+s.opacity,i=s.transform==="none"?"":s.transform,d=u*(1-n),[v,m]=ot(o),[b,_]=ot(l);return{delay:t,duration:r,easing:a,css:(f,x)=>`
			transform: ${i} translate(${(1-f)*v}${m}, ${(1-f)*b}${_});
			opacity: ${u-d*x}`}}function se(e,t){k(t,!c(t))}function ie(e,t,r){k(t,c(t)==="dark"?"light":"dark",!0),document.documentElement.setAttribute("data-theme",c(t)),r()}function le(e,t,r){k(t,c(t)==="left"?"justify":"left",!0),document.documentElement.style.setProperty("--site-alignment",c(t)),r()}function ce(e,t,r,a,o){k(t,c(t)==="var(--p)"?"var(--ap)":"var(--p)",!0),k(r,c(r)==="var(--a)"?"var(--aa)":"var(--a)",!0),k(a,c(a)==="var(--s)"?"var(--as)":"var(--s)",!0),document.documentElement.style.setProperty("--color-primary",c(t)),document.documentElement.style.setProperty("--color-alternate",c(r)),document.documentElement.style.setProperty("--color-secondary",c(a)),o()}var de=B("<!> <!>",1),ue=B("<!> <!>",1),fe=B('<div class="flex gap-3 lg:flex-col"><button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full p-2 lg:bg-none" title="Cycle Palette"><!></button> <button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full p-2 lg:bg-none" title="Toggle Alignment"><!></button> <button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full p-2 lg:bg-none" title="Toggle Dark Mode"><!></button></div>'),ve=B('<div class="fixed bottom-3 left-6 z-50 flex gap-3 lg:bottom-6 lg:left-[calc(50%+var(--container-site)/2+0.25rem)] lg:flex-col"><button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full p-2 lg:order-last lg:bg-none" title="Menu"><!></button> <!></div>');function me(e,t){E(t,!0);let r=q("dark"),a=q("left"),o=q("var(--p)"),l=q("var(--a)"),n=q("var(--s)"),s=q(!1),u=q(!1);function i(){localStorage.setItem("site-settings",JSON.stringify({mode:c(r),align:c(a),primary:c(o),alternate:c(l),secondary:c(n)}))}Lt(()=>{k(r,document.documentElement.getAttribute("data-theme")??"light",!0),k(a,getComputedStyle(document.documentElement).getPropertyValue("--site-alignment").trim(),!0),k(o,getComputedStyle(document.documentElement).getPropertyValue("--color-primary").trim(),!0),k(l,getComputedStyle(document.documentElement).getPropertyValue("--color-alternate").trim(),!0),k(n,getComputedStyle(document.documentElement).getPropertyValue("--color-secondary").trim(),!0);const g=window.matchMedia("(min-width: 1024px)");k(u,g.matches,!0);const h=y=>k(u,y.matches,!0);return g.addEventListener("change",h),()=>g.removeEventListener("change",h)});var d=ve(),v=R(d);v.__click=[se,s];var m=R(v);{var b=g=>{var h=de(),y=N(h);Yt(y,{class:"hidden lg:block"});var L=A(y,2);Jt(L,{class:"block lg:hidden"}),p(g,h)},_=g=>{var h=ue(),y=N(h);Ut(y,{class:"hidden lg:block"});var L=A(y,2);Kt(L,{class:"block lg:hidden"}),p(g,h)};Q(m,g=>{c(s)?g(b):g(_,!1)})}V(v);var f=A(v,2);{var x=g=>{var h=fe(),y=R(h);y.__click=[ce,o,l,n,i];var L=R(y);Zt(L,{}),V(y);var O=A(y,2);O.__click=[le,a,i];var D=R(O);{var G=w=>{ee(w,{})},H=w=>{re(w,{})};Q(D,w=>{c(a)==="left"?w(G):w(H,!1)})}V(O);var T=A(O,2);T.__click=[ie,r,i];var dt=R(T);{var ut=w=>{te(w,{})},ft=w=>{Xt(w,{})};Q(dt,w=>{c(r)==="dark"?w(ut):w(ft,!1)})}V(T),V(h),J(3,y,()=>U,()=>({x:c(u)?0:-8,y:c(u)?8:0,duration:200})),J(3,O,()=>U,()=>({x:c(u)?0:-8,y:c(u)?8:0,duration:200})),J(3,T,()=>U,()=>({x:c(u)?0:-8,y:c(u)?8:0,duration:200})),J(3,h,()=>oe,()=>({duration:150})),p(g,h)};Q(f,g=>{c(s)&&g(x)})}V(d),p(e,d),M()}zt(["click"]);var ge=B('<div class="xs:text-lg max-w-site mx-auto flex flex-col items-center px-8 [text-align:var(--site-alignment)] transition-colors"><a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a> <!> <!></div> <!>',1);function xe(e,t){var r=ge(),a=N(r),o=A(R(a),2);C(o,()=>t.children);var l=A(o,2);Gt(l),V(a);var n=A(a,2);me(n,{}),p(e,r)}export{xe as component};
