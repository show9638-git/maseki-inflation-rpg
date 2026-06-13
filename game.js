(() => {
"use strict";
const SAVE="maseki_tensei_survivor_v02";
const $=id=>document.getElementById(id);
const fmt=n=>Math.floor(n||0).toLocaleString("ja-JP");
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const d2=(a,b,c,d)=>{let x=a-c,y=b-d;return x*x+y*y};

const RACES=[
{id:"human",name:"人族",color:"#ffd76a",sub:"#70dcff",desc:"万能型。経験値・回収範囲・全スキル適性が高い。",bonus:{hp:1.08,atk:1.08,speed:1.12,magnet:1.12,growth:1.18},syn:["魔石弾","守護剣","万能"]},
{id:"beast",name:"獣族",color:"#74f5a3",sub:"#ffd76a",desc:"高速近接型。移動速度が高く、爪・突進・雷と相性が良い。",bonus:{hp:1.16,atk:1.22,speed:1.38,magnet:1.15,growth:1.0},syn:["獣爪","雷撃","突進"]},
{id:"dragon",name:"竜族",color:"#ff6b6b",sub:"#ffd76a",desc:"高HP高火力型。炎・ブレス・隕石と相性が良い。",bonus:{hp:1.35,atk:1.28,speed:1.02,magnet:1.0,growth:1.0},syn:["竜炎","ブレス","隕石"]}
];

const SKILLS=[
{id:"orb",name:"魔石弾",desc:"近い敵へ高速弾。人族と親和。",tag:"魔石弾",race:"human"},
{id:"blade",name:"守護剣",desc:"周囲を回る剣。人族と親和。",tag:"守護剣",race:"human"},
{id:"claw",name:"獣爪雷撃",desc:"近距離範囲攻撃。獣族と親和。",tag:"獣爪",race:"beast"},
{id:"dash",name:"突進波",desc:"移動方向へ衝撃波。獣族と親和。",tag:"突進",race:"beast"},
{id:"fire",name:"竜炎弾",desc:"高威力の炎弾。竜族と親和。",tag:"竜炎",race:"dragon"},
{id:"meteor",name:"竜星落下",desc:"敵の周辺に隕石。竜族と親和。",tag:"隕石",race:"dragon"}
];

const UPS=[
{id:"hp",name:"最大HP",desc:"最大HP +10%",base:8,max:25},
{id:"atk",name:"攻撃力",desc:"攻撃力 +8%",base:10,max:25},
{id:"speed",name:"移動速度",desc:"移動速度 +4%",base:12,max:20},
{id:"magnet",name:"回収範囲",desc:"経験値回収範囲 +10%",base:9,max:20},
{id:"growth",name:"成長力",desc:"獲得経験値 +6%",base:14,max:20},
{id:"choice",name:"選択肢",desc:"レベルアップ選択肢 +1",base:80,max:2}
];

let meta, selected="human", g=null, raf=null, last=0, paused=false, soundOn=true;
let input={active:false,x:0,y:0,tx:0,ty:0,dx:0,dy:0};
let keys={};
let audio=null, bgmTimer=null;

function safe(fn){try{fn()}catch(e){console.error(e);$("err").classList.remove("hidden");$("err").textContent="エラー: "+(e.message||e)}}
function load(){try{meta=JSON.parse(localStorage.getItem(SAVE))||{pts:0,spent:{},best:0,bestTime:0,bestKills:0,bestLv:1}}catch{meta={pts:0,spent:{},best:0,bestTime:0,bestKills:0,bestLv:1}}}
function save(){localStorage.setItem(SAVE,JSON.stringify(meta))}
function ulv(id){return meta.spent[id]||0}
function uval(id){let l=ulv(id); if(id==="hp")return 1+l*.10;if(id==="atk")return 1+l*.08;if(id==="speed")return 1+l*.04;if(id==="magnet")return 1+l*.10;if(id==="growth")return 1+l*.06;if(id==="choice")return l;return 1}
function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active");render()}

function initAudio(){
 if(audio || !soundOn) return;
 audio=new (window.AudioContext||window.webkitAudioContext)();
}
function beep(type="hit"){
 if(!soundOn) return;
 initAudio(); if(!audio) return;
 const o=audio.createOscillator(), gain=audio.createGain();
 o.connect(gain); gain.connect(audio.destination);
 const now=audio.currentTime;
 if(type==="shot"){o.type="square";o.frequency.setValueAtTime(620,now);gain.gain.setValueAtTime(.035,now);gain.gain.exponentialRampToValueAtTime(.001,now+.06)}
 if(type==="hit"){o.type="triangle";o.frequency.setValueAtTime(180,now);o.frequency.exponentialRampToValueAtTime(90,now+.08);gain.gain.setValueAtTime(.045,now);gain.gain.exponentialRampToValueAtTime(.001,now+.09)}
 if(type==="lv"){o.type="sawtooth";o.frequency.setValueAtTime(440,now);o.frequency.exponentialRampToValueAtTime(880,now+.18);gain.gain.setValueAtTime(.05,now);gain.gain.exponentialRampToValueAtTime(.001,now+.22)}
 if(type==="dead"){o.type="sine";o.frequency.setValueAtTime(220,now);o.frequency.exponentialRampToValueAtTime(55,now+.5);gain.gain.setValueAtTime(.08,now);gain.gain.exponentialRampToValueAtTime(.001,now+.55)}
 o.start(now); o.stop(now+.6);
}
function startBgm(){
 if(!soundOn) return;
 initAudio(); stopBgm();
 const notes=[220,277,330,440,392,330,277,247];
 let i=0;
 bgmTimer=setInterval(()=>{
   if(!audio || paused || !g || g.over) return;
   const now=audio.currentTime;
   const o=audio.createOscillator(), gain=audio.createGain(), filt=audio.createBiquadFilter();
   o.type="square"; o.frequency.setValueAtTime(notes[i%notes.length],now);
   filt.type="lowpass"; filt.frequency.setValueAtTime(900,now);
   o.connect(filt); filt.connect(gain); gain.connect(audio.destination);
   gain.gain.setValueAtTime(.018,now); gain.gain.exponentialRampToValueAtTime(.001,now+.28);
   o.start(now); o.stop(now+.32);
   if(i%4===0){
     const b=audio.createOscillator(), bg=audio.createGain();
     b.type="triangle"; b.frequency.setValueAtTime(notes[i%notes.length]/2,now);
     b.connect(bg); bg.connect(audio.destination);
     bg.gain.setValueAtTime(.025,now); bg.gain.exponentialRampToValueAtTime(.001,now+.35);
     b.start(now); b.stop(now+.4);
   }
   i++;
 }, 180);
}
function stopBgm(){ if(bgmTimer){clearInterval(bgmTimer);bgmTimer=null} }

function render(){
 $("metaPts").textContent=fmt(meta.pts);$("bestScore").textContent=fmt(meta.best);$("ptsText").textContent=fmt(meta.pts);
 $("raceCards").innerHTML=RACES.map(r=>`<button type="button" class="card ${selected===r.id?"selected":""}" data-race="${r.id}"><h3>${r.name}</h3><p>${r.desc}</p>${r.syn.map(s=>`<span class="tag">${s}</span>`).join("")}</button>`).join("");
 $("upgradeCards").innerHTML=UPS.map(u=>{let l=ulv(u.id),c=Math.floor(u.base*Math.pow(1.45,l)),m=l>=u.max;return `<div class="card"><h3>${u.name} Lv${l}/${u.max}</h3><p>${u.desc}</p><button type="button" data-up="${u.id}" ${m||meta.pts<c?"disabled":""}>${m?"最大":"強化 "+fmt(c)+"pt"}</button></div>`}).join("");
}

function startGame(){
 initAudio(); startBgm();
 const race=RACES.find(r=>r.id===selected)||RACES[0];
 const cv=$("cv"), ctx=cv.getContext("2d"), dpr=Math.max(1,Math.min(2,devicePixelRatio||1));
 cv.width=Math.floor(innerWidth*dpr); cv.height=Math.floor(innerHeight*dpr); cv.style.width=innerWidth+"px"; cv.style.height=innerHeight+"px"; ctx.setTransform(dpr,0,0,dpr,0,0);
 let baseHp=140*race.bonus.hp*uval("hp"), baseAtk=18*race.bonus.atk*uval("atk");
 let baseSpeed=285*race.bonus.speed*uval("speed"); // v0.2: 大幅アッパー
 let starter = selected==="human" ? ["orb","blade"] : selected==="beast" ? ["claw","dash"] : ["fire","meteor"];
 g={ctx,cv,w:innerWidth,h:innerHeight,race,time:0,score:0,kills:0,over:false,spawn:0,boss:45,
 player:{x:innerWidth/2,y:innerHeight/2,r:16,hp:baseHp,maxHp:baseHp,atk:baseAtk,speed:baseSpeed,magnet:115*race.bonus.magnet*uval("magnet"),lv:1,xp:0,next:18,phase:0,inv:0},
 enemies:[],gems:[],shots:[],fx:[],skills:Object.fromEntries(starter.map(id=>[id,{id,lv:1,cd:0,evo:false}]))};
 paused=false;$("pause").textContent="II";show("game");$("touchHint").style.opacity="1";setTimeout(()=>$("touchHint").style.opacity=".25",2000);
 last=performance.now(); if(raf)cancelAnimationFrame(raf); raf=requestAnimationFrame(loop);
}

function moveVec(){
 let x=0,y=0;if(keys.ArrowLeft||keys.KeyA)x--;if(keys.ArrowRight||keys.KeyD)x++;if(keys.ArrowUp||keys.KeyW)y--;if(keys.ArrowDown||keys.KeyS)y++;
 x+=input.dx;y+=input.dy;let l=Math.hypot(x,y);if(l>1){x/=l;y/=l}return{x,y};
}
function spawn(boss=false){
 let side=Math.floor(Math.random()*4),m=60,x=side===0?-m:side===1?g.w+m:Math.random()*g.w,y=side===2?-m:side===3?g.h+m:Math.random()*g.h;
 let sc=1+g.time/80, kind=boss?"boss":Math.random()<.12?"fast":Math.random()<.1?"tank":"normal";
 let hp=(boss?950:kind==="tank"?120:kind==="fast"?38:58)*sc, r=boss?46:kind==="tank"?22:kind==="fast"?12:16;
 g.enemies.push({x,y,r,kind,boss,hp,maxHp:hp,spd:(boss?48:kind==="fast"?132:kind==="tank"?50:82)*(1+g.time/260),dmg:boss?30:9+g.time/45,color:boss?"#ffd76a":kind==="fast"?"#70dcff":kind==="tank"?"#b56cff":"#ff6b6b"});
}
function effect(x,y,t,c="#ffd76a"){g.fx.push({x,y,t,c,life:.45,a:0})}
function xp(v){let p=g.player;p.xp+=v*raceGrowth();while(p.xp>=p.next){p.xp-=p.next;p.lv++;p.next=Math.floor(p.next*1.22+12);p.maxHp+=16;p.hp=Math.min(p.maxHp,p.hp+25);levelUp();}}
function raceGrowth(){return (g.race.bonus.growth||1)*uval("growth")}
function levelUp(){
 beep("lv");
 let p=g.player,n=p.lv>=45?4:p.lv>=28?3:p.lv>=14?2:p.lv>=6?1:0;if(n>p.phase){p.phase=n;effect(p.x,p.y,["第一進化","第二進化","第三進化","神化"][n-1],"#fff")}
 paused=true;let count=3+uval("choice"), list=[...SKILLS].sort(()=>Math.random()-.5).slice(0,count);
 $("choices").innerHTML=list.map(s=>{let cur=g.skills[s.id]?.lv||0, syn=s.race===g.race.id||g.race.id==="human";return `<button type="button" class="choice" data-skill="${s.id}"><h3>${s.name} ${cur?`Lv${cur}→${cur+1}`:"NEW"}</h3><p>${s.desc}</p>${syn?'<span class="tag">種族親和</span>':""}${cur>=5?'<span class="tag">進化候補</span>':""}</button>`}).join("");
 $("levelup").classList.add("active");
}
function chooseSkill(id){let s=g.skills[id]||{id,lv:0,cd:0,evo:false};s.lv++;let def=SKILLS.find(x=>x.id===id);if(s.lv>=6&&(def.race===g.race.id||g.race.id==="human")){s.evo=true;effect(g.player.x,g.player.y,"進化:"+def.name)}g.skills[id]=s;$("levelup").classList.remove("active");paused=false;last=performance.now()}
function shoot(sk,dt){
 let p=g.player;sk.cd-=dt;if(sk.cd>0)return;let lv=sk.lv,evo=sk.evo,atk=p.atk*(1+lv*.24)*(evo?1.55:1);
 let near=g.enemies.slice().sort((a,b)=>d2(p.x,p.y,a.x,a.y)-d2(p.x,p.y,b.x,b.y))[0];
 if(sk.id==="orb"){sk.cd=(.30-lv*.015)*(g.race.bonus.fireRate||1);let n=evo?3:1,a=near?Math.atan2(near.y-p.y,near.x-p.x):0;for(let i=0;i<n;i++){let aa=a+(i-(n-1)/2)*.22;g.shots.push({x:p.x,y:p.y,vx:Math.cos(aa)*430,vy:Math.sin(aa)*430,r:6,dmg:atk*1.25,life:1.4,p:2,c:"#ffd76a"})}beep("shot")}
 if(sk.id==="blade"){sk.cd=.18;let rad=50+lv*8+(evo?35:0);g.enemies.forEach(e=>{if(d2(p.x,p.y,e.x,e.y)<rad*rad){e.hp-=atk*.58; if(Math.random()<.08)effect(e.x,e.y,"斬","#70dcff")}})}
 if(sk.id==="claw"){sk.cd=.45-lv*.025;let rad=88+lv*14+(evo?75:0);g.enemies.forEach(e=>{if(d2(p.x,p.y,e.x,e.y)<rad*rad){e.hp-=atk*1.55;effect(e.x,e.y,"爪","#74f5a3")}});beep("hit")}
 if(sk.id==="dash"){sk.cd=.55-lv*.025;let mv=moveVec(),a=Math.atan2(mv.y||0.01,mv.x||1);g.shots.push({x:p.x,y:p.y,vx:Math.cos(a)*520,vy:Math.sin(a)*520,r:11+lv,dmg:atk*1.6,life:.55,p:evo?8:4,c:"#74f5a3"})}
 if(sk.id==="fire"){sk.cd=.42-lv*.018;let a=near?Math.atan2(near.y-p.y,near.x-p.x):0,n=evo?4:2;for(let i=0;i<n;i++){let aa=a+(i-(n-1)/2)*.18;g.shots.push({x:p.x,y:p.y,vx:Math.cos(aa)*360,vy:Math.sin(aa)*360,r:9,dmg:atk*1.65,life:1.7,p:evo?4:2,c:"#ff6b6b"})}beep("shot")}
 if(sk.id==="meteor"){sk.cd=1.05-lv*.045;let n=1+Math.floor(lv/2)+(evo?3:0);for(let i=0;i<n;i++){let e=g.enemies[Math.floor(Math.random()*g.enemies.length)];if(!e)continue;let rad=42+lv*5;g.fx.push({x:e.x,y:e.y,t:"爆",c:"#ffd76a",life:.25,a:rad,circle:true});g.enemies.forEach(o=>{if(d2(e.x,e.y,o.x,o.y)<rad*rad)o.hp-=atk*1.9})}beep("hit")}
}
function update(dt){
 if(paused||!g||g.over)return;let p=g.player;g.time+=dt;g.score+=dt*8+p.lv*dt*4;g.spawn-=dt;if(g.spawn<=0){g.spawn=Math.max(.055,.42-g.time/220);for(let i=0;i<1+Math.floor(g.time/42);i++)spawn(false)}
 g.boss-=dt;if(g.boss<=0){g.boss=55;spawn(true);effect(p.x,p.y-40,"ボス出現","#ffd76a")}
 let mv=moveVec();p.x=clamp(p.x+mv.x*p.speed*dt,18,g.w-18);p.y=clamp(p.y+mv.y*p.speed*dt,18,g.h-18);if(p.inv>0)p.inv-=dt;
 Object.values(g.skills).forEach(s=>shoot(s,dt));
 g.enemies.forEach(e=>{let a=Math.atan2(p.y-e.y,p.x-e.x);e.x+=Math.cos(a)*e.spd*dt;e.y+=Math.sin(a)*e.spd*dt;let rr=e.r+p.r;if(d2(e.x,e.y,p.x,p.y)<rr*rr&&p.inv<=0){p.hp-=e.dmg;p.inv=.32;effect(p.x,p.y,"-"+Math.floor(e.dmg),"#ff6b6b");beep("hit");if(p.hp<=0)die()}})
 g.shots.forEach(s=>{s.x+=s.vx*dt;s.y+=s.vy*dt;s.life-=dt;g.enemies.forEach(e=>{if(s.life<=0||s.p<=0)return;let rr=s.r+e.r;if(d2(s.x,s.y,e.x,e.y)<rr*rr){e.hp-=s.dmg;s.p--;effect(e.x,e.y,Math.floor(s.dmg),"#fff")}})});
 g.shots=g.shots.filter(s=>s.life>0&&s.p>0&&s.x>-80&&s.x<g.w+80&&s.y>-80&&s.y<g.h+80);
 let dead=g.enemies.filter(e=>e.hp<=0);dead.forEach(e=>{g.kills++;g.score+=e.boss?5000:80+g.time;let n=e.boss?20:1+(Math.random()<.2?1:0);for(let i=0;i<n;i++)g.gems.push({x:e.x+(Math.random()-.5)*36,y:e.y+(Math.random()-.5)*36,r:e.boss?6:4,v:e.boss?16:4})});g.enemies=g.enemies.filter(e=>e.hp>0);
 g.gems.forEach(m=>{let dd=Math.sqrt(d2(m.x,m.y,p.x,p.y));if(dd<p.magnet){m.x+=(p.x-m.x)*dt*10;m.y+=(p.y-m.y)*dt*10}if(dd<p.r+m.r+9){m.pick=true;xp(m.v)}});g.gems=g.gems.filter(m=>!m.pick);
 g.fx.forEach(f=>f.a+=dt);g.fx=g.fx.filter(f=>f.a<f.life);hud();
}
function draw(){
 if(!g)return;let c=g.ctx,p=g.player;c.clearRect(0,0,g.w,g.h);c.fillStyle="#050814";c.fillRect(0,0,g.w,g.h);
 c.strokeStyle="#1b2a46";c.globalAlpha=.28;for(let x=(-g.time*80)%60;x<g.w;x+=60){c.beginPath();c.moveTo(x,0);c.lineTo(x,g.h);c.stroke()}for(let y=(-g.time*80)%60;y<g.h;y+=60){c.beginPath();c.moveTo(0,y);c.lineTo(g.w,y);c.stroke()}c.globalAlpha=1;
 g.gems.forEach(m=>{c.fillStyle="#70dcff";c.beginPath();c.arc(m.x,m.y,m.r,0,7);c.fill()});
 g.shots.forEach(s=>{c.fillStyle=s.c;c.beginPath();c.arc(s.x,s.y,s.r,0,7);c.fill()});
 g.enemies.forEach(e=>{c.save();c.translate(e.x,e.y);c.fillStyle=e.color;if(e.boss){c.shadowColor="#ffd76a";c.shadowBlur=20;c.beginPath();for(let i=0;i<8;i++){let a=i*Math.PI/4+g.time,rr=e.r*(i%2?.75:1.15);c.lineTo(Math.cos(a)*rr,Math.sin(a)*rr)}c.closePath();c.fill()}else if(e.kind==="tank")c.fillRect(-e.r,-e.r,e.r*2,e.r*2);else{c.beginPath();c.arc(0,0,e.r,0,7);c.fill()}c.shadowBlur=0;c.fillStyle="#000a";c.fillRect(-e.r,-e.r-9,e.r*2,4);c.fillStyle="#74f5a3";c.fillRect(-e.r,-e.r-9,e.r*2*(e.hp/e.maxHp),4);c.restore()});
 drawPlayer(c,p,g.race);
 g.fx.forEach(f=>{c.save();c.globalAlpha=1-f.a/f.life;if(f.circle){c.strokeStyle=f.c;c.lineWidth=4;c.beginPath();c.arc(f.x,f.y,f.a/f.life*f.a+40,0,7);c.stroke()}else{c.fillStyle=f.c;c.font="bold 16px system-ui";c.textAlign="center";c.fillText(f.t,f.x,f.y-f.a*40)}c.restore()})
}
function drawPlayer(c,p,r){c.save();c.translate(p.x,p.y);let ph=p.phase;if(ph){c.globalAlpha=.42;c.strokeStyle=r.sub;c.lineWidth=3;c.beginPath();c.arc(0,0,28+ph*9,0,7);c.stroke();c.globalAlpha=1}
 if(r.id==="beast"&&ph){c.fillStyle=r.sub;c.beginPath();c.moveTo(-8,-10);c.lineTo(-18,-28-ph*4);c.lineTo(-2,-14);c.fill();c.beginPath();c.moveTo(8,-10);c.lineTo(18,-28-ph*4);c.lineTo(2,-14);c.fill()}
 if(r.id==="dragon"&&ph){c.fillStyle=r.sub;c.beginPath();c.moveTo(-10,0);c.lineTo(-36,-20-ph*6);c.lineTo(-20,14);c.fill();c.beginPath();c.moveTo(10,0);c.lineTo(36,-20-ph*6);c.lineTo(20,14);c.fill()}
 c.fillStyle=r.color;c.beginPath();c.arc(0,0,p.r+ph*2,0,7);c.fill();c.strokeStyle=r.sub;c.lineWidth=3;c.stroke();c.fillStyle="#07101e";c.fillRect(-6,-3,4,4);c.fillRect(4,-3,4,4);c.restore()}
function hud(){let p=g.player;$("time").textContent=Math.floor(g.time/60)+":"+String(Math.floor(g.time%60)).padStart(2,"0");$("lv").textContent=p.lv;$("kills").textContent=fmt(g.kills);$("score").textContent=fmt(g.score);$("hpbar").style.width=clamp(p.hp/p.maxHp*100,0,100)+"%";$("xpbar").style.width=clamp(p.xp/p.next*100,0,100)+"%";$("skills").innerHTML=Object.values(g.skills).map(s=>`<span>${SKILLS.find(x=>x.id===s.id).name} Lv${s.lv}${s.evo?"★":""}</span>`).join("")}
function loop(now){let dt=Math.min(.033,(now-last)/1000||0);last=now;safe(()=>{update(dt);draw()});if(g&&!g.over)raf=requestAnimationFrame(loop)}
function die(){if(!g||g.over)return;beep("dead");stopBgm();g.over=true;if(raf)cancelAnimationFrame(raf);let p=g.player,score=Math.floor(g.score+g.kills*15+p.lv*140+g.time*30),pts=Math.floor(Math.pow(score,.55)+g.time+p.lv*2);meta.pts+=pts;meta.best=Math.max(meta.best,score);meta.bestTime=Math.max(meta.bestTime,g.time);meta.bestKills=Math.max(meta.bestKills,g.kills);meta.bestLv=Math.max(meta.bestLv,p.lv);save();$("resultText").innerHTML=`<div class="stats"><div><b>スコア</b><span>${fmt(score)}</span></div><div><b>獲得pt</b><span>${fmt(pts)}</span></div><div><b>生存</b><span>${Math.floor(g.time)}秒</span></div><div><b>Lv</b><span>${p.lv}</span></div><div><b>撃破</b><span>${fmt(g.kills)}</span></div><div><b>所持pt</b><span>${fmt(meta.pts)}</span></div></div>`;$("result").classList.add("active")}
function spend(id){let u=UPS.find(x=>x.id===id),l=ulv(id),c=Math.floor(u.base*Math.pow(1.45,l));if(l>=u.max||meta.pts<c)return;meta.pts-=c;meta.spent[id]=l+1;save();render()}
function setup(){
 $("goRace").onclick=()=>show("race");$("goUpgrades").onclick=()=>show("upgrades");document.querySelectorAll(".back").forEach(b=>b.onclick=()=>show("title"));$("start").onclick=startGame;$("backTitle").onclick=()=>{$("result").classList.remove("active");g=null;show("title")};
 $("resetSave").onclick=()=>{if(confirm("保存を初期化しますか？")){localStorage.removeItem(SAVE);load();render()}};
 $("toggleSound").onclick=()=>{soundOn=!soundOn;if(!soundOn)stopBgm();else beep("lv")};
 $("pause").onclick=()=>{paused=!paused;$("pause").textContent=paused?"▶":"II";last=performance.now()};
 document.addEventListener("click",e=>{let r=e.target.closest("[data-race]");if(r){selected=r.dataset.race;render()}let u=e.target.closest("[data-up]");if(u)spend(u.dataset.up);let s=e.target.closest("[data-skill]");if(s)chooseSkill(s.dataset.skill)});
 addEventListener("keydown",e=>keys[e.code]=true);addEventListener("keyup",e=>keys[e.code]=false);
 const cv=$("cv");
 cv.addEventListener("pointerdown",e=>{input.active=true;input.x=e.clientX;input.y=e.clientY;input.tx=e.clientX;input.ty=e.clientY;cv.setPointerCapture(e.pointerId);$("touchHint").style.opacity=".15";e.preventDefault()});
 cv.addEventListener("pointermove",e=>{if(!input.active)return;input.tx=e.clientX;input.ty=e.clientY;let dx=input.tx-input.x,dy=input.ty-input.y,l=Math.hypot(dx,dy),max=38;input.dx=l?dx/Math.max(l,max):0;input.dy=l?dy/Math.max(l,max):0;e.preventDefault()});
 const end=e=>{input.active=false;input.dx=0;input.dy=0;e.preventDefault()};cv.addEventListener("pointerup",end);cv.addEventListener("pointercancel",end);
 addEventListener("resize",()=>{if(!g)return;let cv=$("cv"),dpr=Math.max(1,Math.min(2,devicePixelRatio||1));g.w=innerWidth;g.h=innerHeight;cv.width=Math.floor(g.w*dpr);cv.height=Math.floor(g.h*dpr);cv.style.width=g.w+"px";cv.style.height=g.h+"px";g.ctx.setTransform(dpr,0,0,dpr,0,0)})
}
document.addEventListener("DOMContentLoaded",()=>safe(()=>{load();setup();render()}));
})();
