'use strict';
// The Last Train — original authored SVG. Pure deterministic SVG/SMIL, no external assets.
let a=[]; const p=s=>a.push(s); let seed=20261104;
const rnd=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
const n=v=>+v.toFixed(2);
const pick=xs=>xs[Math.floor(rnd()*xs.length)];
const dot=(x,y,r,c,o=1)=>p(`<circle cx="${n(x)}" cy="${n(y)}" r="${n(r)}" fill="${c}" opacity="${n(o)}"/>`);
const stroke=(d,c,w=1,o=1)=>p(`<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" opacity="${o}" stroke-linecap="round" stroke-linejoin="round"/>`);
const rect=(x,y,w,h,c,rx=0)=>p(`<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" rx="${rx}" fill="${c}"/>`);
const poly=(d,c)=>p(`<path d="${d}" fill="${c}"/>`);
const t=(x,y,txt,sz,col,opts='')=>p(`<text x="${x}" y="${y}" fill="${col}" font-family="sans-serif" font-size="${sz}" ${opts}>${txt}</text>`);
p(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 750" role="img" aria-label="The Last Train: a tranquil, detailed, moonlit Japanese countryside railway station with an arriving local train"><title>THE LAST TRAIN — 00:47 / 月見駅</title><desc>An original animated illustration of a quiet Japanese station after midnight. A local train arrives, opens its doors, and departs. No people appear.</desc><defs>
<linearGradient id="sky" x2="0" y2="1"><stop stop-color="#081426"/><stop offset=".45" stop-color="#172b47"/><stop offset=".78" stop-color="#355568"/><stop offset="1" stop-color="#56706e"/></linearGradient>
<radialGradient id="haze"><stop stop-color="#d9e9de" stop-opacity=".23"/><stop offset=".36" stop-color="#a3bcc1" stop-opacity=".105"/><stop offset="1" stop-color="#9cb9c9" stop-opacity="0"/></radialGradient>
<radialGradient id="moon"><stop stop-color="#fff8d9"/><stop offset=".8" stop-color="#e3e7d4"/><stop offset="1" stop-color="#a8c5c6"/></radialGradient>
<linearGradient id="mount1" x2="0" y2="1"><stop stop-color="#40596a"/><stop offset="1" stop-color="#294554"/></linearGradient>
<linearGradient id="mount2" x2="0" y2="1"><stop stop-color="#263f4f"/><stop offset="1" stop-color="#132f3c"/></linearGradient>
<linearGradient id="lake" x2="0" y2="1"><stop stop-color="#486e75"/><stop offset="1" stop-color="#152f3d"/></linearGradient>
<linearGradient id="wood" x2="0" y2="1"><stop stop-color="#5c6661"/><stop offset=".45" stop-color="#3d4d4e"/><stop offset="1" stop-color="#243a43"/></linearGradient>
<linearGradient id="roof" x2="0" y2="1"><stop stop-color="#455969"/><stop offset=".25" stop-color="#314857"/><stop offset="1" stop-color="#172d3c"/></linearGradient>
<linearGradient id="platform" x2="0" y2="1"><stop stop-color="#66757a"/><stop offset=".28" stop-color="#3c535b"/><stop offset="1" stop-color="#1a3340"/></linearGradient>
<linearGradient id="glass" x2="0" y2="1"><stop stop-color="#88afb9"/><stop offset=".48" stop-color="#4c7c89"/><stop offset="1" stop-color="#284e60"/></linearGradient>
<linearGradient id="trainBody" x2="0" y2="1"><stop stop-color="#eef0e6"/><stop offset=".16" stop-color="#b9d0cd"/><stop offset=".5" stop-color="#d5dfd7"/><stop offset="1" stop-color="#75969a"/></linearGradient>
<radialGradient id="warm"><stop stop-color="#ffdf99" stop-opacity=".67"/><stop offset=".32" stop-color="#f4ca86" stop-opacity=".22"/><stop offset="1" stop-color="#f9daaa" stop-opacity="0"/></radialGradient>
<radialGradient id="cyan"><stop stop-color="#c2fbec" stop-opacity=".5"/><stop offset=".4" stop-color="#76cfc9" stop-opacity=".15"/><stop offset="1" stop-color="#76cfc9" stop-opacity="0"/></radialGradient>
<radialGradient id="pool"><stop stop-color="#d8c99c" stop-opacity=".2"/><stop offset=".7" stop-color="#91bab5" stop-opacity=".1"/><stop offset="1" stop-color="#91bab5" stop-opacity="0"/></radialGradient>
<linearGradient id="poster" x2="1" y2="1"><stop stop-color="#c7d7c3"/><stop offset=".55" stop-color="#8cadad"/><stop offset="1" stop-color="#486d79"/></linearGradient>
<pattern id="timber" width="13" height="37" patternUnits="userSpaceOnUse"><path d="M1 0V37M9 0V37" stroke="#ced0b4" stroke-opacity=".09"/><path d="M4 6q-2 5 0 11m6-8q-3 5-1 9" fill="none" stroke="#a2baaa" stroke-opacity=".11"/></pattern>
<pattern id="tiles" width="23" height="11" patternUnits="userSpaceOnUse"><path d="M0 9q11-11 23 0M11 0v11" fill="none" stroke="#a3adb0" stroke-opacity=".24" stroke-width="1.5"/></pattern>
<pattern id="grain" width="17" height="11" patternUnits="userSpaceOnUse"><path d="M2 2h7m-6 5h13" stroke="#d3cfb2" stroke-opacity=".055" stroke-width="1"/></pattern>
<clipPath id="trainWindowClip"><rect x="15" y="438" width="1152" height="100" rx="3"/></clipPath>
<filter id="soft"><feGaussianBlur stdDeviation="12"/></filter>
<filter id="wide"><feGaussianBlur stdDeviation="25"/></filter>
</defs>`);
// I. Sky and moon: visual calm, layered atmosphere.
rect(0,0,1600,750,'url(#sky)');
p(`<ellipse cx="1195" cy="134" rx="365" ry="310" fill="url(#haze)"/>`);
dot(1187,123,54,'url(#moon)');
for(let i=0;i<13;i++){let an=rnd()*Math.PI*2,rd=10+rnd()*35;dot(1187+Math.cos(an)*rd,123+Math.sin(an)*rd,2+rnd()*8,'#a5bdbe',.05+rnd()*.16);}
for(let i=0;i<165;i++){const x=rnd()*1600,y=rnd()*315;const r=.35+rnd()*1.35;if(Math.hypot(x-1187,y-123)<70)continue;const o=n(.2+rnd()*.57);if(i%13===0)p(`<circle cx="${n(x)}" cy="${n(y)}" r="${n(r)}" fill="#f2f8ee" opacity="${o}"><animate attributeName="opacity" values="${n(o*.25)};${o};${n(o*.25)}" dur="${n(2+rnd()*4)}s" begin="-${n(rnd()*5)}s" repeatCount="indefinite"/></circle>`);else dot(x,y,r,pick(['#dce6db','#b9d0db','#c7d9d6']),o);}
p(`<g opacity=".22"><path d="M-170 115Q40 57 280 111T758 111Q595 146 320 148T-170 141Z" fill="#8cabb7"><animateTransform attributeName="transform" type="translate" values="-20 0;80 0;-20 0" dur="110s" repeatCount="indefinite"/></path><path d="M754 211Q900 164 1109 184T1680 194Q1390 221 1050 217T754 229Z" fill="#afc4bd" opacity=".62"><animateTransform attributeName="transform" type="translate" values="30 0;-90 0;30 0" dur="150s" repeatCount="indefinite"/></path></g>`);
p(`<path d="M673 150l-70 26" stroke="#f4eed9" stroke-width="2" opacity="0"><animate attributeName="opacity" values="0;0;.8;0;0" keyTimes="0;.45;.5;.55;1" dur="31s" repeatCount="indefinite"/></path>`);
// Foreground framing: Japanese cedar boughs silhouettes across upper corners.
p(`<g id="overhanging-boughs" fill="none" stroke-linecap="round">`);
stroke('M-20 2Q80 32 151 68T312 101','#122936',19,.82);
stroke('M-10 28Q108 65 189 102','#23404c',7,.73);
stroke('M70 40l-9 64M131 60l21 73M201 78l12 53M268 93l17 38','#1a3741',7,.85);
stroke('M1600 -3Q1491 30 1429 73T1345 111','#152f3b',13,.76);
stroke('M1555 9l-15 59M1476 37l-4 73M1394 91l-9 40','#25444a',6,.67);
for(let i=0;i<110;i++){let x=i<64?rnd()*305:1335+rnd()*265,y=25+rnd()*130;if(i<64&&x>250&&y>90)continue;let ang=n((rnd()-.5)*120),w=2+rnd()*4,h=6+rnd()*11;
p(`<path d="M${n(x)} ${n(y)}q${n(w*.6)} -${n(h*.5)} ${n(w)} -${n(h)}q${n(w*.45)} ${n(h*.78)} -${n(w)} ${n(h)}Z" fill="${pick(['#142f3e','#1b3b45','#2b4b4a'])}" opacity="${n(.27+rnd()*.34)}" transform="rotate(${ang} ${n(x)} ${n(y)})"/>`);
}
p(`</g>`);
// II. Mountains, distant glow and rice terraces.
poly('M0 383L73 318 155 335 242 266 319 337 387 311 488 351 601 235 682 320 745 282 856 349 963 273 1034 316 1131 247 1226 327 1349 270 1445 340 1540 289 1600 330V534H0Z','url(#mount1)');
stroke('M550 289L601 235 642 292M1087 298L1131 247 1176 294M1308 299L1349 270 1396 311','#9fb4ae',2,.26);
poly('M0 414L88 358 160 390 241 331 327 401 416 348 480 400 578 333 690 406 783 344 902 394 1039 326 1145 400 1241 348 1348 419 1470 346 1600 390V545H0Z','url(#mount2)');
poly('M0 427Q240 398 466 436T903 420T1600 424V548H0Z','#102f3b');
p(`<ellipse cx="1115" cy="407" rx="400" ry="55" fill="#9fbab0" opacity=".08" filter="url(#wide)"/>`);
// Treeline with silhouettes built from nested branches rather than a flat sawtooth.
p(`<g>`);
for(let i=0;i<152;i++){const x=i*11-20,y=407+rnd()*24,h=15+rnd()*49,w=6+h*.24;const color=pick(['#092834','#0e303a','#123643','#112d37']);poly(`M${n(x)} ${n(y)}l-${n(w*.95)} ${n(h*.53)}h${n(w*.47)}l-${n(w*.6)} ${n(h*.37)}h${n(w*2.16)}l-${n(w*.6)} -${n(h*.37)}h${n(w*.47)}Z`,color);stroke(`M${n(x)} ${n(y+h*.3)}v${n(h*.7)}`,'#35535a',.6,.25);}
p(`</g>`);
// Small sleepy village beyond the rails, individual roof styles and windows.
p(`<g opacity=".86">`);
for(let i=0;i<29;i++){let x=15+i*57+rnd()*16,y=432+rnd()*24,w=24+rnd()*37,h=14+rnd()*22;let lit=i%5===0||i%7===0;poly(`M${n(x-5)} ${n(y)}L${n(x+w*.5)} ${n(y-13-rnd()*13)}L${n(x+w+6)} ${n(y)}Z`,pick(['#0e2936','#173440','#1c3b46']));rect(x,y,w,h,pick(['#162f3b','#193640','#1b3940']));for(let j=0;j<Math.floor(w/14);j++){let wx=x+6+j*13;rect(wx,y+4,6,7,lit&&j===0?'#e3b982':'#5d8587');if(lit&&j===0)rect(wx-3,y+1,12,14,'#edbe83',0),p(`<rect x="${n(wx-5)}" y="${n(y-3)}" width="16" height="18" fill="#edbf84" opacity=".15" filter="url(#soft)"/>`);}}
p(`</g>`);
rect(0,463,1600,94,'url(#lake)');
for(let i=0;i<60;i++){let x=rnd()*1600,y=463+rnd()*88;stroke(`M${n(x)} ${n(y)}h${n(12+rnd()*75)}`,pick(['#91b8b0','#e7d2a2','#77a19f']),.8+rnd()*1.2,.08+rnd()*.18);}
poly('M0 483Q235 464 476 483T999 472T1600 479V500H0Z','#173742');
for(let i=0;i<28;i++){const x=i*64+15;stroke(`M${x} 464l${n(-11-rnd()*16)} 39`,'#40636a',1.1,.31);}
// Telegraph poles and elegant hanging wires at the horizon.
p(`<g stroke="#17343e" fill="none"><path d="M185 328V507M187 352H231M210 352V369M1477 320V521M1445 348H1508M1465 350V367" stroke-width="5"/><path d="M0 341Q335 384 805 346T1600 343M0 359Q335 404 805 362T1600 360M0 374Q335 421 805 379T1600 380" stroke-width="2" opacity=".61"/><path d="M173 344h27M1466 338h28" stroke-width="3"/></g>`);
// III. Architectural detail: a rural station of timber, plaster and ceramic roof tiles.
p(`<g id="architecture">`);
// Left building, strong large shapes with light inside.
rect(0,318,399,247,'url(#wood)');rect(0,318,399,247,'url(#timber)');
poly('M0 320L57 265H382L444 319Z','url(#roof)');poly('M0 320L57 265H382L444 319Z','url(#tiles)');stroke('M0 321H440','#8ba7a2',4,.78);stroke('M53 268L10 320M381 268l58 52','#b4c2b5',2,.34);
for(let x=19;x<405;x+=45){stroke(`M${x} 328v236`,'#71827a',2,.22);stroke(`M${x+3} 329v229`,'#0e2833',1,.38);}
rect(36,348,239,146,'#1e333e');rect(42,354,227,134,'#bca984');
for(let j=0;j<3;j++){let x=47+j*72;rect(x,358,67,126,'#d0c3a1');rect(x+6,365,56,110,'#d2c39b');rect(x+7,367,53,107,'url(#grain)');stroke(`M${x+34} 360v119M${x+7} 408H${x+62}M${x+8} 444H${x+61}`,'#6b7d77',3,.78);rect(x+6,365,56,43,'#c8b784');}
p(`<rect x="36" y="348" width="239" height="146" fill="#f8d399" opacity=".13"/>`);
stroke('M35 349H276M35 492H277','#1a303a',6,.75);
// Posters: old travel campaign and timetable on left wall.
rect(299,372,73,110,'#243943',3);rect(306,379,58,95,'#e3d9bc',1);rect(311,384,48,56,'url(#poster)');dot(335,400,14,'#e0d6ad',.87);poly('M311 437l12-21 10 12 9-21 17 30Z','#355e60');t(336,452,'旅の記憶',9,'#496969','text-anchor="middle"');stroke('M315 458h39M316 464h25','#84938b',1.5,.8);
// Station plaque at eaves.
rect(78,290,230,45,'#1b3440',3);rect(84,296,218,33,'#d4ddcf',2);t(193,322,'月　見　駅',27,'#294b54','text-anchor="middle" font-weight="600"');
// lantern and drainpipe.
rect(347,326,23,26,'#f3d4a6',4);rect(343,323,31,5,'#425f64',2);rect(344,351,29,4,'#425f64',1);p(`<ellipse cx="359" cy="352" rx="68" ry="91" fill="url(#warm)" opacity=".55"/>`);
stroke('M387 318v234q-1 10-10 10','#9eaaa0',4,.64);
// Right end building wood and shoji windows.
rect(1164,320,436,255,'url(#wood)');rect(1164,320,436,255,'url(#timber)');
poly('M1129 316L1214 263H1600V316Z','url(#roof)');poly('M1129 316L1214 263H1600V316Z','url(#tiles)');stroke('M1128 317H1600','#9fb6aa',4,.7);
for(let x=1190;x<=1600;x+=49){stroke(`M${x} 327v247`,'#77918a',2,.28);}
rect(1223,348,210,34,'#1d3641',3);rect(1228,353,200,25,'#e0ddca',1);t(1328,372,'月見 / TSUKIMI',16,'#2a4c52','text-anchor="middle" font-weight="600"');
// warm shoji doors and little sash windows
for(let j=0;j<3;j++){let x=1179+j*92;rect(x,397,85,134,'#213842',2);rect(x+6,402,73,120,'#caba93',2);rect(x+11,407,63,110,'#d1c39b',1);stroke(`M${x+41} 404v113M${x+11} 442h63M${x+11} 478h63`,'#557078',3,.75);}
rect(1477,395,103,90,'#243e4b',3);rect(1484,402,89,76,'#8daea6',2);for(let j=0;j<4;j++)stroke(`M1484 ${414+j*16}h89`,'#385867',2,.64);stroke('M1529 402v77','#385867',3,.6);
// paper calendar and stacked wooden crates
rect(1450,336,55,43,'#efe7ca',1);rect(1450,336,55,11,'#8c9e9a');t(1477,346,'NOV',8,'#f3e9d4','text-anchor="middle"');for(let y=354;y<379;y+=7)for(let x=1456;x<1505;x+=9)dot(x,y,1.35,'#879e93',.58);
for(let i=0;i<3;i++){let x=1164+i*29,y=531-i*8;rect(x,y,51,31,'#785f4c',2);stroke(`M${x+4} ${y+7}h43M${x+4} ${y+16}h43M${x+6} ${y+25}h40`,'#b19b7a',1.7,.53);}
// ivy across roof edge
for(let i=0;i<23;i++){let x=1156+i*18,y=317+rnd()*8;stroke(`M${x} ${n(y)}q${n(rnd()*7)} 8 ${n(rnd()*7)} ${n(11+rnd()*16)}`,'#567c6a',1.6,.53);if(i%2===0)poly(`M${x} ${n(y+13)}q-10-7-12-1q4 7 12 1`,'#638775');}
p(`</g>`);
// IV. Raised canopy: elaborately engineered underside, supports and lettering.
p(`<g id="canopy"><path d="M379 285L1137 287L1224 331H349Z" fill="url(#roof)"/><path d="M379 285L1137 287L1224 331H349Z" fill="url(#tiles)"/><path d="M348 330H1224" stroke="#a5b7aa" stroke-width="5"/><path d="M367 340H1193" stroke="#243b47" stroke-width="15"/><path d="M374 343H1180" stroke="#9cac9e" stroke-width="2" opacity=".7"/>`);
for(let i=0;i<11;i++){let x=402+i*72;stroke(`M${x} 295l34 39`,'#1e3744',5,.77);stroke(`M${x+3} 301l27 31`,'#8d9f9a',1.5,.38);}
for(const x of [419,1127]){stroke(`M${x} 338V565`,'#1a3542',13,1);stroke(`M${x+4} 339v225`,'#90a6a1',2,.54);stroke(`M${x} 355l40-32`,'#496776',7,.95);rect(x-12,552,29,13,'#203d49',2);}
// Hanging sign showing romanization and destination.
stroke('M496 338v28M739 338v28','#869e9a',3,.79);
rect(488,361,260,71,'#203c49',3);rect(496,368,244,58,'#e0dfd0',2);rect(496,369,244,8,'#5c9fa0');t(617,405,'つきみ',25,'#355b5e','text-anchor="middle" font-weight="700"');t(617,420,'TSUKIMI  ·  01',11,'#627b7a','text-anchor="middle" letter-spacing="2"');
// Wall clock, including animated second hand.
dot(885,360,36,'#1c3543');dot(885,360,29,'#dedfcd');for(let i=0;i<12;i++){let ang=Math.PI*2*i/12;stroke(`M${n(885+23*Math.sin(ang))} ${n(360-23*Math.cos(ang))}l${n(4*Math.sin(ang))} ${n(-4*Math.cos(ang))}`,'#486972',2,.9);}stroke('M885 360l-4-18M885 360l15 9','#274653',3,1);p(`<path d="M885 365V336" stroke="#a76b55" stroke-width="1.6"><animateTransform attributeName="transform" type="rotate" from="0 885 360" to="360 885 360" dur="60s" repeatCount="indefinite"/></path>`);dot(885,360,3,'#315563');
// Handcrafted platform lights and warm light pools.
for(const x of [466,816,1091]){stroke(`M${x} 341v22`,'#7d9493',2,.8);rect(x-23,360,46,21,'#b0afa0',5);rect(x-18,363,36,13,'#ffe8b5',4);p(`<ellipse cx="${x}" cy="391" rx="97" ry="95" fill="url(#warm)" opacity=".78"><animate attributeName="opacity" values=".78;.69;.79;.77;.78" dur="${10+x%7}s" repeatCount="indefinite"/></ellipse>`);}
// Station bell and hand-written destination board
stroke('M986 342V370','#8fa19a',2,.9);poly('M974 373q12-21 24 0Z','#c3ac83');dot(986,373,4,'#d8c59b');rect(1001,352,103,42,'#223d49',3);t(1053,369,'最終列車',13,'#e0ded0','text-anchor="middle"');t(1053,385,'00:47 →',12,'#e1bd86','text-anchor="middle"');
p(`</g>`);
// V. Rails, stones, ties, beneath animated train.
rect(0,544,1600,68,'#142d3a');
for(let i=0;i<205;i++){let x=rnd()*1600,y=548+rnd()*64;rect(x,y,2+rnd()*9,.6+rnd()*4,pick(['#3c545c','#677d7b','#293f49','#607778']),1);}
for(let i=0;i<76;i++){let x=i*23-9;poly(`M${x} 555l-17 53h15l17-53Z`,'#45565b');stroke(`M${x} 558l-16 45`,'#778184',2,.6);}
stroke('M0 562H1600','#869d9d',8,.9);stroke('M0 572H1600','#263943',4,.95);stroke('M0 600H1600','#8e9f9e',6,.86);stroke('M0 607H1600','#263a43',4,1);
// VI. The two-car train; restrained movement, believable doors and no silhouettes.
p(`<g id="train" transform="translate(-1350 0)"><animateTransform attributeName="transform" type="translate" values="-1350 0;-1350 0;135 0;135 0;1760 0;1760 0" keyTimes="0;.10;.35;.67;.88;1" calcMode="spline" keySplines="0 0 1 1; .18 0 .22 1; 0 0 1 1; .55 0 .9 1; 0 0 1 1" dur="52s" repeatCount="indefinite"/>
<ellipse cx="580" cy="574" rx="580" ry="12" fill="#071a24" opacity=".49"/>
<rect x="15" y="418" width="1158" height="143" rx="21" fill="url(#trainBody)" stroke="#55747c" stroke-width="3"/>
<path d="M16 423H1125" stroke="#f7fbeb" stroke-width="7" opacity=".6"/>
<path d="M15 529H1176" stroke="#428e92" stroke-width="15"/><path d="M15 545H1176" stroke="#245c6a" stroke-width="8"/>
<path d="M15 457H1171" stroke="#8caea8" stroke-width="3" opacity=".65"/>
<path d="M588 417v142" stroke="#718b91" stroke-width="7" opacity=".75"/>
<path d="M590 427v110" stroke="#e2efdf" stroke-width="2" opacity=".8"/>
<!-- train ventilation, conduit, pantograph silhouette and route numbering -->
<rect x="138" y="407" width="116" height="11" rx="4" fill="#3b6770"/><path d="M151 411h89" stroke="#9db9ac" stroke-width="1.5"/>
<path d="M403 419l32-34h21l32 34M424 396h44M417 417h79" fill="none" stroke="#43616b" stroke-width="3"/>
<rect x="754" y="407" width="134" height="11" rx="4" fill="#416670"/><path d="M760 410h121" stroke="#b4bcb0" stroke-width="1"/>
<rect x="47" y="424" width="77" height="16" rx="3" fill="#1c3645"/><text x="85" y="437" fill="#eadfae" font-family="sans-serif" font-size="12" text-anchor="middle">普通</text>
<rect x="1022" y="425" width="99" height="18" rx="3" fill="#193b49"/><text x="1071" y="439" fill="#efe1ad" font-family="sans-serif" font-size="11" text-anchor="middle">月見 ↔ 山里</text>
<g clip-path="url(#trainWindowClip)">`);
const windows=[44,115,186,326,397,468,603,674,745,882,953];
for(let i=0;i<windows.length;i++){let x=windows[i];p(`<rect x="${x}" y="450" width="59" height="59" rx="5" fill="#284b59" stroke="#547987" stroke-width="4"/><rect x="${x+5}" y="455" width="49" height="49" rx="3" fill="url(#glass)"/><path d="M${x+7} 491H${x+52}M${x+10} 468h40" stroke="#f9dba6" stroke-width="1.6" opacity=".54"/><path d="M${x+10} 498h41v7h-41z" fill="#315667" opacity=".71"/><path d="M${x+7} 461l17-6M${x+11} 500l22-45" stroke="#e9f2e3" stroke-width="3" opacity=".21"/>`);
 for(let j=0;j<3;j++)stroke(`M${x+11+j*16} 467v7`,'#d9d8b5',1.1,.67);
}
p(`</g>`);
// Inside the sliding doors, interior warmer than outside.
for(const x of [260,540,820]){
p(`<rect x="${x}" y="447" width="70" height="93" rx="3" fill="#c4c6b3" stroke="#456d78" stroke-width="3"/><rect x="${x+4}" y="451" width="62" height="85" fill="#c6bb96" opacity=".76"/><path d="M${x+9} 461v72M${x+23} 455v78M${x+40} 456v77M${x+57} 461v72" stroke="#f2e0a9" stroke-width="2" opacity=".5"/>`);
p(`<g><rect x="${x}" y="447" width="35" height="94" rx="2" fill="#b0c9c6" stroke="#537983" stroke-width="3"/><rect x="${x+5}" y="455" width="25" height="40" rx="2" fill="#52818c"/><path d="M${x+10} 459l12-1" stroke="#d0e5dc" opacity=".5"/><animateTransform attributeName="transform" type="translate" values="0 0;0 0;-30 0;-30 0;0 0;0 0" keyTimes="0;.37;.41;.62;.66;1" dur="52s" repeatCount="indefinite"/></g>
<g><rect x="${x+35}" y="447" width="35" height="94" rx="2" fill="#b0c9c6" stroke="#537983" stroke-width="3"/><rect x="${x+40}" y="455" width="25" height="40" rx="2" fill="#52818c"/><animateTransform attributeName="transform" type="translate" values="0 0;0 0;30 0;30 0;0 0;0 0" keyTimes="0;.37;.41;.62;.66;1" dur="52s" repeatCount="indefinite"/></g>`);
}
// Cab with curved glass and shining lamps.
poly('M1080 420Q1164 420 1183 457L1180 533Q1165 558 1131 559H1083Z','#c3d5d0');
poly('M1100 446Q1167 446 1170 480L1170 512L1100 510Z','#24485b');
poly('M1109 454Q1157 450 1161 474L1150 479L1106 456Z','#8cb7b6');
stroke('M1106 503h59','#a9c8bf',2,.55);dot(1155,531,10,'#fff6cd');dot(1155,531,22,'#f4deb6',.29);dot(25,530,6,'#eeb49b');rect(44,556,1067,8,'#1c3540',4);
for(const x of [126,201,467,536,723,795,1010,1070]){dot(x,571,15,'#172f3a');dot(x,571,11,'#637b7e');dot(x,571,6,'#233b45');}
p(`</g>`);
// Light sweep synced to arriving train, subtle pool not a theatrical spotlight.
p(`<ellipse cx="1203" cy="563" rx="280" ry="19" fill="#ffe0a5" opacity="0"><animate attributeName="opacity" values="0;0;.10;.16;.12;0;0" keyTimes="0;.10;.28;.35;.68;.88;1" dur="52s" repeatCount="indefinite"/></ellipse>`);
// VII. Foreground platform, surface textures and real physical objects.
p(`<g id="foreground"><path d="M0 571H1600V750H0Z" fill="url(#platform)"/><path d="M0 570H1600" stroke="#ead19b" stroke-width="10"/><path d="M0 579H1600" stroke="#b1aba1" stroke-width="2" opacity=".79"/><path d="M0 597H1600" stroke="#203e47" stroke-width="5" opacity=".55"/>`);
// perspective seams, irregular but restrained.
for(let x=-60;x<1650;x+=95)stroke(`M${x} 596l${n((x-800)*.11)} 154`,'#a9b6a8',1,.21);
for(let y of [620,663,720])stroke(`M0 ${y}H1600`,'#a3b3ad',1.2,.16);
// tactical strip: embossed tactile circles as actual physical pattern.
p(`<g fill="#dfc28a" opacity=".62">`);for(let x=10;x<1600;x+=18)for(let y of [584,591])dot(x+(y===591?5:0),y,2,'#e9c990',.72);p(`</g>`);
// puddles of varying shape with moon and lamp reflections.
for(const [x,y,rx,ry] of [[240,691,152,19],[565,728,150,13],[1082,665,160,29],[1436,727,123,14]]){p(`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="url(#pool)"/>`);stroke(`M${x-rx*.67} ${y}q${rx*.57} -3 ${rx*1.24} 0M${x-rx*.35} ${y+ry*.28}h${rx*.7}`,'#d2d3b5',1.4,.20);}
for(let i=0;i<230;i++){let x=rnd()*1600,y=605+rnd()*140;rect(x,y,.4+rnd()*2,.3+rnd()*1.8,pick(['#a3c0b2','#e1d0a6','#93b1aa','#253f49']),1);}
// leaf litter curated distribution, tiny long cracks.
for(let i=0;i<46;i++){let x=rnd()*1600,y=608+rnd()*134,l=3+rnd()*7,rot=rnd()*180;p(`<ellipse cx="${n(x)}" cy="${n(y)}" rx="${n(l)}" ry="${n(l*.33)}" transform="rotate(${n(rot)} ${n(x)} ${n(y)})" fill="${pick(['#c3a980','#847a62','#738f78','#aea58a'])}" opacity="${n(.25+rnd()*.36)}"/>`);}
for(let i=0;i<38;i++){let x=rnd()*1600,y=650+rnd()*90;stroke(`M${n(x)} ${n(y)}l${n(4+rnd()*13)} ${n(-1+rnd()*5)}l${n(4+rnd()*9)} ${n(rnd()*5)}`,'#172f39',.65,.32);}
// drainage grilles in the floor.
for(const x of [32,352,1027,1507]){rect(x,683,73,17,'#1a3341',2);for(let j=0;j<7;j++)stroke(`M${x+8+j*9} 685v12`,'#839c99',2,.43);}
// Weathered bench occupies visual foreground center-left.
p(`<g id="bench">`);
p(`<ellipse cx="643" cy="665" rx="190" ry="20" fill="#081e2b" opacity=".25"/>`);
for(const x of [524,742]){stroke(`M${x} 637v41`,'#1f3642',10,.9);stroke(`M${x-14} 681h32`,'#233b46',6,1);}
for(const y of [597,619,648]){rect(481,y,300,17,pick(['#8d6c54','#84644d','#735846']),4);stroke(`M489 ${y+3}h281M493 ${y+9}h277`,'#b99775',1.4,.45);}
for(const x of [498,768])for(const y of [601,624,653])dot(x,y,2,'#c7b294',.65);
// forgotten messenger bag, deliberately inanimate
poly('M668 577Q665 548 694 550Q723 553 722 581','#95846e');stroke('M668 580q-6-30 24-30q28 0 30 32','#b1a08a',4,.75);rect(664,576,76,46,'#90816d',7);poly('M670 593q31 17 65-1v23q-33 12-65 0Z','#6e6355');rect(698,593,9,11,'#c9b48b',2);stroke('M672 582h61','#c7b08a',2,.5);
// drink bottle and postcard left on the bench
rect(507,569,22,30,'#c8926e',4);rect(511,566,14,5,'#ded2b8',2);rect(511,578,13,12,'#b7c4b1',1);t(518,586,'茶',8,'#4d6b62','text-anchor="middle"');poly('M544 591l49-8 8 13-50 6Z','#ddd5bb');stroke('M552 593l37-6M555 598l33-5','#7f918b',1,.58);
p(`</g>`);
// Bent umbrella leaned on the canopy pillar.
p(`<g id="umbrella">`);stroke('M429 538l50 152','#82928c',5,.9);poly('M415 536Q426 472 449 499Q471 513 466 532Q443 548 415 536Z','#4b7580');stroke('M418 534Q444 510 463 531M440 503l7 36','#c5d1bc',2,.35);stroke('M477 688q12 13 21-2','#c8b49e',4,.85);p(`</g>`);
// cat nap by the bench. No humans.
p(`<g id="cat"><ellipse cx="844" cy="669" rx="44" ry="15" fill="#122936"/><ellipse cx="827" cy="660" rx="26" ry="15" fill="#263a43"/><circle cx="866" cy="652" r="17" fill="#263b45"/><path d="M854 643l-1-16 14 10 12-13 2 19Z" fill="#263a43"/><path d="M859 654q5 4 10 0m2 0q4 4 8 0" stroke="#d3d7bc" stroke-width="1.5" fill="none"/><path d="M818 662Q784 661 790 640Q800 618 814 638" fill="none" stroke="#263a43" stroke-width="9" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="-3 815 664;3 815 664;-3 815 664" dur="8s" repeatCount="indefinite"/></path><ellipse cx="827" cy="661" rx="26" ry="14" fill="#a5ada1" opacity=".1"><animate attributeName="ry" values="14;11.5;14" dur="4s" repeatCount="indefinite"/></ellipse></g>`);
// Waste bin and bottle crates near vintage vending machine, right side.
p(`<g id="objects">`);
rect(1113,609,63,94,'#2c4d55',5);rect(1107,604,75,13,'#6c9993',3);rect(1124,634,41,9,'#183640',3);stroke('M1137 649v31m16-31v31','#a2b8a2',2,.6);
// Vending machine strongly lit, an intentional visual focal point.
p(`<ellipse cx="1425" cy="624" rx="192" ry="169" fill="url(#cyan)"/><ellipse cx="1425" cy="685" rx="155" ry="22" fill="url(#cyan)"/>`);
rect(1334,423,189,247,'#d7e3d9',10);rect(1340,429,177,235,'#a3bbb8',7);rect(1347,434,163,222,'#f0eee3',4);rect(1349,436,159,25,'#3b949d',2);t(1428,453,'DRINKS   /   飲料',14,'#eff8eb','text-anchor="middle" font-weight="600"');rect(1360,473,134,127,'#2e5363',3);rect(1367,480,120,112,'#8fc5bd',2);rect(1368,481,118,110,'#264e5b',0);
for(let row=0;row<3;row++){stroke(`M1369 ${512+row*32}h116`,'#a5cdc0',2,.6);for(let j=0;j<8;j++){let x=1372+j*14.2,y=488+row*32;rect(x,y,10,22,pick(['#f2d5ab','#b5d6cd','#e4aba0','#bdcee6','#f4e6ba']),3);rect(x+1,y+4,8,11,pick(['#8db7b2','#fff0cb','#cf9991']),1);}}
rect(1364,608,93,35,'#294653',4);rect(1371,615,78,6,'#193844',2);rect(1464,606,27,34,'#708f93',3);dot(1477,615,4,'#f7d29a');rect(1471,626,15,4,'#254956',2);rect(1364,652,119,7,'#416a73',2);
// LED gentle pulse, no violent flicker.
p(`<rect x="1367" y="479" width="120" height="112" fill="#b0f1e8" opacity=".06"><animate attributeName="opacity" values=".06;.11;.06;.08;.06" dur="12s" repeatCount="indefinite"/></rect>`);
// Umbrella holder, smaller box of bottles and utility power meter.
rect(1551,625,41,46,'#496c74',3);stroke('M1556 635h31M1556 645h31','#acbbb1',2,.6);stroke('M1558 616l20 18m-7-28 10 29','#abbcb5',4,.8);
rect(1248,624,63,51,'#745e4e',3);stroke('M1251 635h58M1251 647h58M1251 661h58','#ae9675',2,.66);rect(1255,627,49,6,'#93a49a',1);rect(1234,535,37,50,'#55737b',2);rect(1240,543,25,29,'#dbd7bb',1);stroke('M1244 551h17M1244 558h17M1244 566h13','#547880',1.5,.9);
p(`</g>`);
// Small grass tufts along cracks, controlled sparse distribution.
p(`<g id="grass" stroke-linecap="round" fill="none">`);
for(let i=0;i<59;i++){let x=13+rnd()*1570,y=605+rnd()*140,h=3+rnd()*12;let col=pick(['#6b9884','#91a98d','#547f72']);stroke(`M${n(x)} ${n(y)}q-4-${n(h*.7)} -3-${n(h)}M${n(x)} ${n(y)}q4-${n(h*.7)} 8-${n(h*.85)}`,col,1.2,n(.22+rnd()*.32));}
p(`</g></g>`);
// VIII. Atmosphere on top of all layers, transparent, clipped to frame.
p(`<g opacity=".15" fill="#a4d6cb"><ellipse cx="310" cy="576" rx="330" ry="24"><animateTransform attributeName="transform" type="translate" values="-130 0;140 0;-130 0" dur="90s" repeatCount="indefinite"/></ellipse><ellipse cx="1220" cy="604" rx="300" ry="17"><animateTransform attributeName="transform" type="translate" values="100 0;-160 0;100 0" dur="111s" repeatCount="indefinite"/></ellipse></g>`);
// Floating fireflies. Each gets its own pace; none flicker in perfect synchronization.
for(let i=0;i<42;i++){let x=20+rnd()*1540,y=326+rnd()*310,dx=-23+rnd()*46,dy=-17+rnd()*34,d=3+rnd()*7;let o=n(.35+rnd()*.55);p(`<circle cx="${n(x)}" cy="${n(y)}" r="${n(.7+rnd()*2)}" fill="${pick(['#d8efb8','#e5dda9','#abdec4'])}" opacity="0"><animate attributeName="opacity" values="0;${o};${n(o*.1)};0" keyTimes="0;.3;.62;1" dur="${n(d)}s" begin="-${n(rnd()*d)}s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;${n(dx)} ${n(dy)};0 0" dur="${n(d*2.3)}s" repeatCount="indefinite"/></circle>`);}
// Restrained cinematic edge treatment and title typography.
p(`<path d="M0 0H1600V750H0Z" fill="none" stroke="#061421" stroke-width="30" opacity=".21"/><text x="49" y="51" fill="#e1e9d8" opacity=".75" font-family="monospace" font-size="14" letter-spacing="4">THE LAST TRAIN   —   終電</text><text x="1552" y="51" text-anchor="end" fill="#e6e7d2" opacity=".74" font-family="monospace" font-size="14" letter-spacing="4">00:47  ·  TSUKIMI</text></svg>`);
const svg=a.join('\n');
if(typeof require!=='undefined'&&require.main===module){const fs=require('fs'),path=require('path');const output=process.argv[2]||path.join(__dirname,'..','assets','last-train.svg');fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,svg,'utf8');console.log('Wrote',output,'bytes',Buffer.byteLength(svg),'elements',a.length,'animations',(svg.match(/<animate/g)||[]).length);}
// Deterministic SVG output. Run: node scripts/generate-last-train.js
