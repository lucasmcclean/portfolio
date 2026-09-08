import{b as ye,B as xe,d as be,e as $e,g as Q,a as y,f as D,p as H,c as O,r as T,j as we,k as I,l as ke,i as U,n as V}from"../chunks/-JSbvjfa.js";import{z as ue,E as fe,B as Ne,R as Se,A as Me,C as Ce,T as Pe,D as Ee,F as ne,G as x,I as ve,h as A,a as se,j as ee,J as Oe,b as Te,K as Ae,N as je,M as Fe,O as Ie,i as oe,e as te,P as ze,p as C,v as B,l as k,n as j,w as R,o as P,g as d,y as Le,Q as We,s as W,m as X}from"../chunks/CC_IdHE3.js";import{a as ie,s as E}from"../chunks/BVg20RYh.js";import{o as Be}from"../chunks/D8ogHtxC.js";import{i as Re}from"../chunks/vHc4gr-H.js";import{e as Je,i as qe}from"../chunks/DzMkrZ57.js";const Ge=()=>performance.now(),F={tick:t=>requestAnimationFrame(t),now:()=>Ge(),tasks:new Set};function he(){const t=F.now();F.tasks.forEach(e=>{e.c(t)||(F.tasks.delete(e),e.f())}),F.tasks.size!==0&&F.tick(he)}function He(t){let e;return F.tasks.size===0&&F.tick(he),{promise:new Promise(a=>{F.tasks.add(e={c:t,f:a})}),abort(){F.tasks.delete(e)}}}function Y(t,e){ve(()=>{t.dispatchEvent(new CustomEvent(e))})}function De(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function le(t){const e={},a=t.split(";");for(const r of a){const[n,i]=r.split(":");if(!n||i===void 0)break;const s=De(n.trim());e[s]=i.trim()}return e}const Ke=t=>t;function Z(t,e,a,r){var N;var n=(t&Pe)!==0,i="both",s,o=e.inert,c=e.style.overflow,h,u;function f(){return ve(()=>s??(s=a()(e,(r==null?void 0:r())??{},{direction:i})))}var b={is_global:n,in(){e.inert=o,h=ae(e,f(),u,1,()=>{Y(e,"introstart")},()=>{Y(e,"introend"),h==null||h.abort(),h=s=void 0,e.style.overflow=c})},out(M){e.inert=!0,u=ae(e,f(),h,0,()=>{Y(e,"outrostart")},()=>{Y(e,"outroend"),M==null||M()})},stop:()=>{h==null||h.abort(),u==null||u.abort()}},l=ue;if(((N=l.nodes).t??(N.t=[])).push(b),ye){var g=n;if(!g){for(var m=l.parent;m&&(m.f&fe)!==0;)for(;(m=m.parent)&&(m.f&Ne)===0;);g=!m||(m.f&Se)!==0}g&&Me(()=>{Ce(()=>b.in())})}}function ae(t,e,a,r,n,i){var s=r===1,o=!1;if(Ee(e)){var c;return ne(()=>{if(!o){var m=e({direction:s?"in":"out"});c=ae(t,m,a,r,n,i)}}),{abort:()=>{o=!0,c==null||c.abort()},deactivate:()=>c.deactivate(),reset:()=>c.reset(),t:()=>c.t()}}if(a==null||a.deactivate(),!(e!=null&&e.duration)&&!(e!=null&&e.delay))return n(),i(),{abort:x,deactivate:x,reset:x,t:()=>r};const{delay:h=0,css:u,tick:f,easing:b=Ke}=e;var l,g=()=>1-r;return ne(()=>{if(!o){var m=[];if(s&&a===void 0&&(f&&f(0,1),u)){var N=le(u(0,1));m.push(N,N)}l=t.animate(m,{duration:h,fill:"forwards"}),l.onfinish=()=>{l.cancel(),n();var M=(a==null?void 0:a.t())??1-r;a==null||a.abort();var J=r-M,q=e.duration*Math.abs(J),v=[];if(q>0){var _=!1;if(u)for(var p=Math.ceil(q/16.666666666666668),$=0;$<=p;$+=1){var S=M+J*b($/p),G=le(u(S,1-S));v.push(G),_||(_=G.overflow==="hidden")}_&&(t.style.overflow="hidden"),g=()=>{var L=l.currentTime;return M+J*b(L/q)},f&&He(()=>{if(l.playState!=="running")return!1;var L=g();return f(L,1-L),!0})}l=t.animate(v,{duration:q,fill:"forwards"}),l.onfinish=()=>{g=()=>r,f==null||f(r,1-r),i()}}}}),{abort:()=>{o=!0,l&&(l.cancel(),l.effect=null,l.onfinish=x)},deactivate:()=>{i=x},reset:()=>{r===0&&(f==null||f(1,0))},t:()=>g()}}function Qe(t,e,a,r,n,i){let s=A;A&&se();var o=null;A&&ee.nodeType===Oe&&(o=ee,se());var c=A?ee:t,h=new xe(c,!1);Te(()=>{const u=e()||null;var f=je;if(u===null){h.ensure(null,null),Q(!0);return}return h.ensure(u,b=>{if(u){if(o=A?o:Ae(u,f),be(o,o),r){var l=null;A&&$e(u)&&o.append(l=document.createComment(""));var g=A?Fe(o):o.appendChild(Ie());A&&(g===null?oe(!1):te(g)),r(o,g),l==null||l.remove()}ue.nodes.end=o,b.before(o)}A&&te(b)}),Q(!0),()=>{u&&Q(!1)}},fe),ze(()=>{Q(!0)}),s&&(oe(!0),te(c))}var Ue=D('<footer class="xs:text-base mt-auto w-full space-y-2 pt-8 pb-16 text-sm opacity-80"><div class="flex flex-wrap justify-between"><p class=" tracking-wide italic">Lucas McClean</p> <nav class="mx-auto rangerverse w-fit flex gap-4"><a href="https://edirbcmessej.github.io/the.rangerver.se/prev?from=lucas">← prev</a> <a href="https://edirbcmessej.github.io/the.rangerver.se/random?from=lucas">✦ rangerverse</a> <a href="https://edirbcmessej.github.io/the.rangerver.se/next?from=lucas">next →</a></nav> <p class="font-display text-primary ms-auto">//</p></div></footer>');function Ve(t){var e=Ue();y(t,e)}/**
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
 */const Xe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Ye=new Set(["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]),Ze=we("<svg><!><!></svg>");function z(t,e){C(e,!0);const a=H(e,"color",3,"currentColor"),r=H(e,"size",3,24),n=H(e,"strokeWidth",3,2),i=H(e,"absoluteStrokeWidth",3,!1),s=H(e,"iconNode",19,()=>[]),o=T(e,Ye);var c=Ze();ie(c,f=>({...Xe,...o,width:r(),height:r(),stroke:a(),"stroke-width":f,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>i()?Number(n())*24/Number(r()):n()]);var h=B(c);Je(h,17,s,qe,(f,b)=>{var l=Le(()=>We(d(b),2));let g=()=>d(l)[0],m=()=>d(l)[1];var N=O(),M=k(N);Qe(M,g,!0,(J,q)=>{ie(J,()=>({...m()}))}),y(f,N)});var u=j(h);E(u,()=>e.children??x),R(c),y(t,c),P()}var et=new Set(["$$slots","$$events","$$legacy"]);function tt(t,e){C(e,!0);/**
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
 */let a=T(e,et);const r=[["path",{d:"m6 9 6 6 6-6"}]];z(t,I({name:"chevron-down"},()=>a,{get iconNode(){return r},children:(n,i)=>{var s=O(),o=k(s);E(o,()=>e.children??x),y(n,s)},$$slots:{default:!0}})),P()}var rt=new Set(["$$slots","$$events","$$legacy"]);function at(t,e){C(e,!0);/**
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
 */let a=T(e,rt);const r=[["path",{d:"m15 18-6-6 6-6"}]];z(t,I({name:"chevron-left"},()=>a,{get iconNode(){return r},children:(n,i)=>{var s=O(),o=k(s);E(o,()=>e.children??x),y(n,s)},$$slots:{default:!0}})),P()}var nt=new Set(["$$slots","$$events","$$legacy"]);function st(t,e){C(e,!0);/**
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
 */let a=T(e,nt);const r=[["path",{d:"m9 18 6-6-6-6"}]];z(t,I({name:"chevron-right"},()=>a,{get iconNode(){return r},children:(n,i)=>{var s=O(),o=k(s);E(o,()=>e.children??x),y(n,s)},$$slots:{default:!0}})),P()}var ot=new Set(["$$slots","$$events","$$legacy"]);function it(t,e){C(e,!0);/**
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
 */let a=T(e,ot);const r=[["path",{d:"m18 15-6-6-6 6"}]];z(t,I({name:"chevron-up"},()=>a,{get iconNode(){return r},children:(n,i)=>{var s=O(),o=k(s);E(o,()=>e.children??x),y(n,s)},$$slots:{default:!0}})),P()}var lt=new Set(["$$slots","$$events","$$legacy"]);function ct(t,e){C(e,!0);/**
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
 */let a=T(e,lt);const r=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];z(t,I({name:"moon"},()=>a,{get iconNode(){return r},children:(n,i)=>{var s=O(),o=k(s);E(o,()=>e.children??x),y(n,s)},$$slots:{default:!0}})),P()}var dt=new Set(["$$slots","$$events","$$legacy"]);function ut(t,e){C(e,!0);/**
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
 */let a=T(e,dt);const r=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];z(t,I({name:"palette"},()=>a,{get iconNode(){return r},children:(n,i)=>{var s=O(),o=k(s);E(o,()=>e.children??x),y(n,s)},$$slots:{default:!0}})),P()}var ft=new Set(["$$slots","$$events","$$legacy"]);function vt(t,e){C(e,!0);/**
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
 */let a=T(e,ft);const r=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];z(t,I({name:"sun"},()=>a,{get iconNode(){return r},children:(n,i)=>{var s=O(),o=k(s);E(o,()=>e.children??x),y(n,s)},$$slots:{default:!0}})),P()}var ht=new Set(["$$slots","$$events","$$legacy"]);function gt(t,e){C(e,!0);/**
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
 */let a=T(e,ht);const r=[["path",{d:"M3 5h18"}],["path",{d:"M3 12h18"}],["path",{d:"M3 19h18"}]];z(t,I({name:"text-align-justify"},()=>a,{get iconNode(){return r},children:(n,i)=>{var s=O(),o=k(s);E(o,()=>e.children??x),y(n,s)},$$slots:{default:!0}})),P()}var mt=new Set(["$$slots","$$events","$$legacy"]);function _t(t,e){C(e,!0);/**
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
 */let a=T(e,mt);const r=[["path",{d:"M21 5H3"}],["path",{d:"M15 12H3"}],["path",{d:"M17 19H3"}]];z(t,I({name:"text-align-start"},()=>a,{get iconNode(){return r},children:(n,i)=>{var s=O(),o=k(s);E(o,()=>e.children??x),y(n,s)},$$slots:{default:!0}})),P()}const pt=t=>t;function yt(t){const e=t-1;return e*e*e+1}function ce(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}function xt(t,{delay:e=0,duration:a=400,easing:r=pt}={}){const n=+getComputedStyle(t).opacity;return{delay:e,duration:a,easing:r,css:i=>`opacity: ${i*n}`}}function re(t,{delay:e=0,duration:a=400,easing:r=yt,x:n=0,y:i=0,opacity:s=0}={}){const o=getComputedStyle(t),c=+o.opacity,h=o.transform==="none"?"":o.transform,u=c*(1-s),[f,b]=ce(n),[l,g]=ce(i);return{delay:e,duration:a,easing:r,css:(m,N)=>`
			transform: ${h} translate(${(1-m)*f}${b}, ${(1-m)*l}${g});
			opacity: ${c-u*N}`}}var de=D("<!> <!>",1),bt=D('<div class="flex gap-3 lg:flex-col"><button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:bg-none" title="Cycle Palette"><!></button> <button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:bg-none" title="Toggle Alignment"><!></button> <button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:bg-none" title="Toggle Theme"><!></button></div>'),$t=D('<div class="fixed bottom-6 left-6 z-50 flex gap-3 lg:bottom-6 lg:left-[calc(50%+var(--container-site)/2+0.25rem)] lg:flex-col"><button class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:order-last lg:bg-none" title="Menu"><!></button> <!></div>');function wt(t,e){C(e,!1);let a=X(!1),r=X(!1),n=X("light"),i="cyan",s=X("left");function o(){localStorage.setItem("site-options",JSON.stringify({theme:d(n),palette:i,align:d(s)}))}function c(){const v=document.documentElement;v.setAttribute("data-theme",d(n)),v.setAttribute("data-palette",i),v.setAttribute("data-align",d(s))}function h(){W(a,!d(a)),localStorage.setItem("site-state",JSON.stringify({menuOpen:d(a)}))}function u(){W(n,d(n)==="dark"?"light":"dark"),d(n)==="dark"&&(i==="cyan"||i==="purple")?i="green":d(n)==="light"&&(i==="green"||i==="blue")&&(i="cyan"),c(),o()}function f(){W(s,d(s)==="left"?"justify":"left"),c(),o()}function b(){const v=["green","blue"],_=["cyan","purple"],p=d(n)==="dark"?v:_,$=p.indexOf(i);i=p[($+1)%p.length],c(),o()}Be(()=>{const v=JSON.parse(localStorage.getItem("site-options")??"{}");W(n,v.theme??(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));const _=v.palette;_&&["green","blue","cyan","purple"].includes(_)?i=_:i=d(n)==="dark"?"green":"cyan",W(s,v.align??"left"),c();const $=JSON.parse(localStorage.getItem("site-state")??"{}");W(a,$.menuOpen);const S=window.matchMedia("(min-width: 1024px)");W(r,S.matches);const G=L=>W(r,L.matches);return S.addEventListener("change",G),()=>S.removeEventListener("change",G)}),Re();var l=$t(),g=B(l),m=B(g);{var N=v=>{var _=de(),p=k(_);tt(p,{class:"hidden lg:block"});var $=j(p,2);at($,{class:"block lg:hidden"}),y(v,_)},M=v=>{var _=de(),p=k(_);it(p,{class:"hidden lg:block"});var $=j(p,2);st($,{class:"block lg:hidden"}),y(v,_)};U(m,v=>{d(a)?v(N):v(M,-1)})}R(g);var J=j(g,2);{var q=v=>{var _=bt(),p=B(_),$=B(p);ut($,{}),R(p);var S=j(p,2),G=B(S);{var L=w=>{gt(w,{})},ge=w=>{_t(w,{})};U(G,w=>{d(s)==="left"?w(L):w(ge,-1)})}R(S);var K=j(S,2),me=B(K);{var _e=w=>{vt(w,{})},pe=w=>{ct(w,{})};U(me,w=>{d(n)==="dark"?w(_e):w(pe,-1)})}R(K),R(_),V("click",p,b),Z(3,p,()=>re,()=>({x:d(r)?0:-8,y:d(r)?8:0,duration:200})),V("click",S,f),Z(3,S,()=>re,()=>({x:d(r)?0:-8,y:d(r)?8:0,duration:200})),V("click",K,u),Z(3,K,()=>re,()=>({x:d(r)?0:-8,y:d(r)?8:0,duration:200})),Z(3,_,()=>xt,()=>({duration:150})),y(v,_)};U(J,v=>{d(a)&&v(q)})}R(l),V("click",g,h),y(t,l),P()}ke(["click"]);var kt=D('<div class="xs:text-lg max-w-site mx-auto flex flex-col items-center px-8 [text-align:var(--site-alignment)] transition-colors"><a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a> <!> <!></div> <!>',1);function Ot(t,e){var a=kt(),r=k(a),n=j(B(r),2);E(n,()=>e.children);var i=j(n,2);Ve(i),R(r);var s=j(r,2);wt(s,{}),y(t,a)}export{Ot as component};
