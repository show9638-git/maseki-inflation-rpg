
(()=>{"use strict";
const DATA={"skills":[{"id":"c0","name":"魔石弾","group":"common","kind":"projectile","color":"#ffd76a"},{"id":"c1","name":"守護剣","group":"common","kind":"orbit","color":"#70dcff"},{"id":"c2","name":"魔力波動","group":"common","kind":"pulse","color":"#ff72ce"},{"id":"c3","name":"星光レーザー","group":"common","kind":"laser","color":"#ffe66d"},{"id":"c4","name":"魔石爆弾","group":"common","kind":"meteor","color":"#ff9f1c"},{"id":"c5","name":"貫通針","group":"common","kind":"projectile","color":"#ffd76a"},{"id":"c6","name":"反撃障壁","group":"common","kind":"pulse","color":"#70dcff"},{"id":"c7","name":"連鎖雷","group":"common","kind":"chain","color":"#ff72ce"},{"id":"c8","name":"魔石地雷","group":"common","kind":"mine","color":"#ffe66d"},{"id":"c9","name":"新星爆発","group":"common","kind":"nova","color":"#ff9f1c"},{"id":"h0","name":"人王斬","group":"human","kind":"projectile","color":"#fefae0"},{"id":"h1","name":"英雄旗","group":"human","kind":"buff","color":"#fefae0"},{"id":"h2","name":"星導陣","group":"human","kind":"buff","color":"#fefae0"},{"id":"h3","name":"聖槍投げ","group":"human","kind":"projectile","color":"#fefae0"},{"id":"h4","name":"王盾反射","group":"human","kind":"pulse","color":"#fefae0"},{"id":"h5","name":"十字聖光","group":"human","kind":"cross","color":"#fefae0"},{"id":"h6","name":"裁きの光","group":"human","kind":"meteor","color":"#fefae0"},{"id":"h7","name":"号令","group":"human","kind":"buff","color":"#fefae0"},{"id":"h8","name":"勇気の刃","group":"human","kind":"projectile","color":"#fefae0"},{"id":"h9","name":"聖域","group":"human","kind":"nova","color":"#fefae0"}],"items":[{"id":"map","name":"地図","color":"#ffe066"},{"id":"heal30","name":"回復薬","color":"#80ed99"},{"id":"heal100","name":"秘薬","color":"#57cc99"},{"id":"buff","name":"強化薬","color":"#ff922b"},{"id":"book","name":"秘伝書","color":"#9b5de5"},{"id":"growth","name":"成長薬","color":"#4cc9f0"},{"id":"magnet","name":"磁石","color":"#4895ef"},{"id":"giant","name":"巨大化の種","color":"#ff4d6d"},{"id":"gold","name":"金貨袋","color":"#ffd166"},{"id":"chest","name":"宝箱","color":"#c77dff"},{"id":"xp","name":"経験の書","color":"#90e0ef"},{"id":"shield","name":"守り札","color":"#caf0f8"},{"id":"speed","name":"俊足薬","color":"#06d6a0"},{"id":"bomb","name":"爆弾","color":"#ef476f"},{"id":"whistle","name":"召喚笛","color":"#ffbe0b"},{"id":"luck","name":"幸運のコイン","color":"#ffe066"},{"id":"revive","name":"復活の羽","color":"#f1faee"},{"id":"freeze","name":"時の砂","color":"#a8dadc"},{"id":"harvest","name":"収穫の鎌","color":"#84a59d"},{"id":"bless","name":"祝福石","color":"#e9c46a"}]};
const TILE=32, MAP_W=48, MAP_H=32, WORLD_W=1536, WORLD_H=1024;
const SAVE="maseki_tensei_survivor_v013";
const ASSET={tiles:"assets/tile_atlas.png",stage:"assets/stage_sky_palace_v013.png",human:"assets/human_sheet.png",skill:"assets/skill_fx_sheet.png",enemy:"assets/enemy_sheet.png"};
const IMG={}; const $=id=>document.getElementById(id), fmt=n=>Math.floor(n||0).toLocaleString("ja-JP"), clamp=(v,a,b)=>Math.max(a,Math.min(b,v)), d2=(a,b,c,d)=>{let x=a-c,y=b-d;return x*x+y*y}, rand=(a,b)=>a+Math.random()*(b-a), pick=a=>a[Math.floor(Math.random()*a.length)];
const SKILLS=DATA.skills, ITEMS=DATA.items;
function loadImg(s){let im=new Image();im.src=s;return im}function preload(){if(!IMG.tiles)IMG.tiles=loadImg(ASSET.tiles);if(!IMG.stage)IMG.stage=loadImg(ASSET.stage);if(!IMG.human)IMG.human=loadImg(ASSET.human);if(!IMG.skill)IMG.skill=loadImg(ASSET.skill);if(!IMG.enemy)IMG.enemy=loadImg(ASSET.enemy)}
const UPS=[["hp","最大HP",8],["atk","攻撃力",10],["speed","移動速度",12],["magnet","回収範囲",9],["growth","成長力",14],["goldRate","Gold取得率",16],["choice","選択肢",80]].map(x=>({id:x[0],name:x[1],base:x[2],max:x[0]=="choice"?10:1000}));
let meta,g=null,raf=0,last=0,input={active:false,x:0,y:0,dx:0,dy:0},keys={},paused=false,soundOn=true,choiceTimer=0,choiceRemain=0,currentChoices=[],audio=null;
function safe(fn){try{fn()}catch(e){console.error(e);$("err").classList.remove("hidden");$("err").textContent="エラー:"+e.message}}
function newMeta(){return{pts:0,gold:0,best:0,spent:{},owned:{},sound:true}}function load(){try{meta=JSON.parse(localStorage.getItem(SAVE))||newMeta()}catch{meta=newMeta()}if(!meta.spent)meta.spent={};if(!meta.owned)meta.owned={};soundOn=meta.sound!==false}function save(){localStorage.setItem(SAVE,JSON.stringify(meta))}
function ulv(id){return meta.spent[id]||0}function ucost(u){let l=ulv(u.id);return Math.floor(u.base*(1+l*.18+Math.pow(l,1.35)*.025))}function uval(id){let l=ulv(id),s=Math.pow(l,1.18);if(id=="hp")return 1+s*.018;if(id=="atk")return 1+s*.016;if(id=="speed")return 1+s*.006;if(id=="magnet")return 1+s*.018;if(id=="growth")return 1+s*.012;if(id=="goldRate")return 1+s*.018;if(id=="choice")return Math.min(10,l);return 1}
function rarity(){let r=Math.random();return r<.001?"SKIN":r<.006?"UR":r<.016?"SSR":r<.116?"SR":r<.316?"R":"N"}function dup(n){let m=1+Math.log10(Math.max(1,n))*.18;if(n>=10)m+=1;if(n>=100)m+=3;if(n>=1000)m+=8;if(n>=10000)m+=24;return m}
function makeGacha(){let arr=[],stats=["atk","hp","speed","magnet","growth","goldRate"];let add=(cnt,rare,base)=>{for(let i=0;i<cnt;i++){let k=pick(stats),k2=pick(stats.filter(x=>x!=k));let b={[k]:base};if(rare!="N")b[k2]=base*.65;arr.push({id:"g"+String(arr.length+1).padStart(3,"0"),rare,name:rare+"装備"+(i+1),bonus:b})}};add(330,"N",.004);add(100,"R",.013);add(50,"SR",.033);add(12,"SSR",.06);add(5,"UR",.115);add(3,"SKIN",.06);return arr.slice(0,500)}const GACHA=makeGacha();
function obonus(){let b={hp:1,atk:1,speed:1,magnet:1,growth:1,goldRate:1,cdr:1,power:1,barrier:0,itemRate:1};for(let [id,n] of Object.entries(meta.owned)){let it=GACHA.find(x=>x.id==id);if(!it)continue;let m=dup(n);for(let [k,v] of Object.entries(it.bonus))b[k]=(b[k]||1)+v*m;if(it.rare=="SSR"){b.cdr*=Math.max(.72,1-.012*m);b.power+=.035*m;b.itemRate+=.035*m}if(it.rare=="UR"){b.cdr*=Math.max(.55,1-.025*m);b.power+=.09*m;b.itemRate+=.08*m;b.barrier+=.01*m}}return b}
function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active");render()}
function render(){$("pts").textContent=fmt(meta.pts);$("pts2").textContent=fmt(meta.pts);$("gold").textContent=fmt(meta.gold);$("gold2").textContent=fmt(meta.gold);$("best").textContent=fmt(meta.best);$("sound").textContent=soundOn?"ON":"OFF";$("upList").innerHTML=UPS.map(u=>{let l=ulv(u.id),c=ucost(u),m=l>=u.max;return `<div class=card><h3>${u.name} Lv${l}/${u.max}</h3><p>上限1000。レベルが上がるほど上昇量も増加。</p><button data-up=${u.id} ${m||meta.pts<c?"disabled":""}>${m?"最大":"強化 "+fmt(c)+"pt"}</button></div>`}).join("");let owned=Object.entries(meta.owned).filter(x=>x[1]>0).slice(0,80);$("inv").innerHTML=owned.length?owned.map(([id,n])=>{let it=GACHA.find(x=>x.id==id);return `<div class=card><h3>${it.name}<span class=tag>${it.rare}</span></h3><p>+${n} / 強化倍率 ${dup(n).toFixed(1)}</p></div>`}).join(""):"<div class=card>所持なし</div>"}
function beep(t="hit"){if(!soundOn)return;if(!audio)audio=new(AudioContext||webkitAudioContext)();let o=audio.createOscillator(),ga=audio.createGain(),now=audio.currentTime;o.connect(ga);ga.connect(audio.destination);o.type=t=="shot"?"square":"triangle";o.frequency.value=t=="lv"?650:t=="gold"?880:t=="dead"?160:320;ga.gain.setValueAtTime(.035,now);ga.gain.exponentialRampToValueAtTime(.001,now+.13);o.start(now);o.stop(now+.15)}
function rectFill(a,x1,y1,x2,y2,v){for(let y=y1;y<=y2;y++)for(let x=x1;x<=x2;x++)if(x>=0&&y>=0&&x<MAP_W&&y<MAP_H)a[y][x]=v}
function border(a,x1,y1,x2,y2){rectFill(a,x1,y1,x2,y2,1);for(let x=x1;x<=x2;x++){a[y1][x]=2;a[y2][x]=2}for(let y=y1;y<=y2;y++){a[y][x1]=2;a[y][x2]=2}}
function buildMap(){
  // v0.13: 生成済みの完成マップ画像を背景に使うため、タイル描画用の配列は使わない。
  return {tiles:[]}
}
function tileAt(px,py){return 1}
function block(t){return false}

function inRect(x,y,x1,y1,x2,y2){return x>=x1&&x<=x2&&y>=y1&&y<=y2}
function inEllipse(x,y,cx,cy,rx,ry){
  let dx=(x-cx)/rx,dy=(y-cy)/ry;
  return dx*dx+dy*dy<=1;
}

// 生成マップの床形状に合わせた当たり判定。
// 床・通路は歩行可。神殿外周と大型建造物は不可。
function walk(px,py,r){
  let x=px,y=py;
  if(x<55||y<60||x>WORLD_W-55||y>WORLD_H-55)return false;

  let floor=false;
  // 中央大広場
  floor = floor || inRect(x,y,360,230,1175,830);
  floor = floor || inEllipse(x,y,768,530,455,315);

  // 上下広場
  floor = floor || inRect(x,y,555,70,980,300);
  floor = floor || inRect(x,y,555,735,980,970);

  // 左右エリア
  floor = floor || inRect(x,y,80,165,420,415);
  floor = floor || inRect(x,y,1110,165,1455,415);
  floor = floor || inRect(x,y,95,610,430,900);
  floor = floor || inRect(x,y,1105,610,1445,900);

  // 通路
  floor = floor || inRect(x,y,180,430,1360,610);
  floor = floor || inRect(x,y,700,90,840,950);
  floor = floor || inRect(x,y,280,230,1260,330);
  floor = floor || inRect(x,y,270,720,1260,830);

  if(!floor)return false;

  // 建造物・柱・祭壇の当たり判定
  const blocks=[
    [640,75,895,185],     // 上部大神殿
    [640,835,895,1010],   // 下部階段/外周
    [70,80,190,185],
    [1345,80,1490,185],
    [95,720,245,905],
    [1295,720,1465,905],
    [390,300,500,430],
    [1035,300,1145,430],
    [385,650,500,780],
    [1030,650,1145,780],
    [210,170,325,270],
    [1210,170,1325,270],
    [205,720,330,820],
    [1205,720,1330,820],
    [720,480,820,575],    // 中央クリスタル台座
  ];

  for(const b of blocks){
    if(inRect(x,y,b[0]-r,b[1]-r,b[2]+r,b[3]+r))return false;
  }

  return true;
}

function randPos(){
  for(let i=0;i<500;i++){
    let x=rand(140,WORLD_W-140),y=rand(130,WORLD_H-130);
    if(walk(x,y,10))return{x,y};
  }
  return{x:768,y:585};
}

function startGame(){preload();let cv=$("cv"),ctx=cv.getContext("2d"),dpr=Math.max(1,Math.min(2,devicePixelRatio||1));cv.width=innerWidth*dpr;cv.height=innerHeight*dpr;cv.style.width=innerWidth+"px";cv.style.height=innerHeight+"px";ctx.setTransform(dpr,0,0,dpr,0,0);let ob=obonus(),hp=220*uval("hp")*ob.hp;g={ctx,cv,w:innerWidth,h:innerHeight,map:buildMap(),view:{x:0,y:0},time:0,score:0,kills:0,runGold:0,spawn:0,boss:30,itemSpawn:8,over:false,freeze:1,buffs:[],enemies:[],gems:[],items:[],shots:[],fx:[],float:[],skills:{c0:{id:"c0",lv:1,cd:0},h0:{id:"h0",lv:1,cd:0}},p:{x:768,y:585,r:13,hp,maxHp:hp,atk:28*uval("atk")*ob.atk,spd:250*uval("speed")*ob.speed,magnet:125*uval("magnet")*ob.magnet,lv:1,xp:0,next:18,phase:0,inv:0,walk:0,frame:0,dir:0,size:1,atkMul:1,xpMul:1,goldMul:1,cdr:ob.cdr,power:ob.power,barrier:ob.barrier,minimap:false,revive:false}};paused=false;$("pause").textContent="II";show("game");last=performance.now();if(raf)cancelAnimationFrame(raf);raf=requestAnimationFrame(loop)}
function spawnEnemy(boss=false){
  let p=g.p,pos=randPos();
  if(Math.random()<.8){
    let a=Math.random()*7,d=Math.max(g.w,g.h)*.55;
    pos={x:clamp(p.x+Math.cos(a)*d,80,WORLD_W-80),y:clamp(p.y+Math.sin(a)*d,80,WORLD_H-80)};
    if(!walk(pos.x,pos.y,12))pos=randPos();
  }

  // 序盤は弱く、1分以降から強烈にインフレ
  let early=Math.min(1,g.time/60);
  let sc=Math.pow(1.018,g.time)*Math.pow(1.22,Math.floor(Math.max(0,g.time-45)/20));
  let kind=boss?"boss":Math.random()<.18?"fast":Math.random()<.16?"tank":"normal";
  let ghost=!boss&&Math.random()<.12;
  let spriteType=boss?9:ghost?1:kind=="tank"?7:kind=="fast"?5:Math.floor(Math.random()*6);

  let baseHp=boss?1200:kind=="tank"?95:kind=="fast"?32:45;
  let baseDmg=boss?28:kind=="tank"?8:kind=="fast"?5:6;
  let baseSpd=boss?70:kind=="tank"?70:kind=="fast"?145:100;

  g.enemies.push({
    x:pos.x,y:pos.y,
    r:boss?24:kind=="tank"?18:kind=="fast"?10:13,
    kind,boss,ghost,spriteType,
    hp:baseHp*sc,
    max:baseHp*sc,
    spd:baseSpd*(1+g.time/180),
    dmg:baseDmg*(1+early*0.8)*sc*.38,
    col:ghost?"#c8e7ff":boss?"#ffd76a":kind=="fast"?"#74f5a3":kind=="tank"?"#ef476f":"#9d4edd"
  });
}
function effect(x,y,t,c="#fff"){g.fx.push({x,y,t,c,a:0,life:.45})}function float(x,y,t,c="#ffd76a"){g.float.push({x,y,t,c,a:0,life:.7})}
function gainXp(v){let p=g.p;p.xp+=v*uval("growth")*p.xpMul;while(p.xp>=p.next){p.xp-=p.next;p.lv++;p.next=Math.floor(p.next*1.24+14);p.maxHp+=16;p.hp=Math.min(p.maxHp,p.hp+25);levelUp()}}
function applyBuff(id,sec){let b=g.buffs.find(x=>x.id==id);if(b)b.t=Math.max(b.t,sec);else g.buffs.push({id,t:sec})}function buffs(){let p=g.p;p.size=1;p.atkMul=1;p.xpMul=1;p.goldMul=1;p.speedMul=1;g.freeze=1;for(let b of g.buffs){if(b.id=="buff"){p.atkMul*=1.3;p.speedMul*=1.3}if(b.id=="growth")p.xpMul*=1.2;if(b.id=="giant"){p.size=2;p.atkMul*=1.25}if(b.id=="speed")p.speedMul=Math.max(p.speedMul,1.5);if(b.id=="luck")p.goldMul*=1.5;if(b.id=="freeze")g.freeze=.22;if(b.id=="bless"){p.atkMul*=1.2;p.xpMul*=1.2;p.speedMul=Math.max(p.speedMul,1.2)}}}
function spawnItem(){let pos=randPos(),it=pick(ITEMS);g.items.push({...it,x:pos.x,y:pos.y,r:10,ttl:50})}function applyItem(it){let p=g.p;if(it.id=="map")p.minimap=true;if(it.id=="heal30")p.hp=Math.min(p.maxHp,p.hp+p.maxHp*.3);if(it.id=="heal100")p.hp=p.maxHp;if(it.id=="buff")applyBuff("buff",60);if(it.id=="book")grantSkill(true);if(it.id=="growth")applyBuff("growth",60);if(it.id=="magnet")g.gems.forEach(m=>m.pull=true);if(it.id=="giant")applyBuff("giant",30);if(it.id=="gold"){g.runGold+=8;meta.gold+=8;save()}if(it.id=="xp")gainXp(30+p.lv*2);if(it.id=="shield")p.inv=Math.max(p.inv,10);if(it.id=="speed")applyBuff("speed",45);if(it.id=="bomb"){g.enemies.forEach(e=>e.hp-=e.max*.5)}if(it.id=="luck")applyBuff("luck",60);if(it.id=="revive")p.revive=true;if(it.id=="freeze")applyBuff("freeze",8);if(it.id=="harvest")applyBuff("harvest",60);if(it.id=="bless")applyBuff("bless",30);float(it.x,it.y,it.name,it.color);beep("gold")}
function grantSkill(via){let pool=SKILLS.filter(s=>s.group=="common"||s.group=="human"),s=pick(pool);chooseSkill(s.id,via)}
function levelUp(){beep("lv");let p=g.p,n=p.lv>=45?4:p.lv>=28?3:p.lv>=14?2:p.lv>=6?1:0;if(n>p.phase){p.phase=n;effect(p.x,p.y,["第一進化","第二進化","第三進化","神化"][n-1],"#fff")}paused=true;let pool=SKILLS.filter(s=>s.group=="common"||s.group=="human"),count=Math.min(pool.length,3+uval("choice"));currentChoices=pool.sort(()=>Math.random()-.5).slice(0,count);$("choices").innerHTML=currentChoices.map(s=>`<button class=choice data-skill=${s.id}><h3>${s.name} ${g.skills[s.id]?"Lv"+g.skills[s.id].lv:"NEW"}</h3><p>${s.kind}</p></button>`).join("");$("levelup").classList.add("active");choiceRemain=3;if(choiceTimer)clearInterval(choiceTimer);choiceTimer=setInterval(()=>{choiceRemain-=.1;$("timer").textContent=Math.max(0,choiceRemain).toFixed(1);if(choiceRemain<=0){clearInterval(choiceTimer);choiceTimer=0;chooseSkill(pick(currentChoices).id,false)}},100)}
function chooseSkill(id,via=false){if(choiceTimer){clearInterval(choiceTimer);choiceTimer=0}let s=g.skills[id]||{id,lv:0,cd:0};s.lv++;if(s.lv>=6)s.evo=true;g.skills[id]=s;if(!via){$("levelup").classList.remove("active");paused=false;last=performance.now()}}
function shot(a,spd,r,dmg,life,pen,c){let p=g.p;g.shots.push({x:p.x,y:p.y,vx:Math.cos(a)*spd,vy:Math.sin(a)*spd,r:r*p.size,dmg,life,pen,c})}
function area(x,y,rad,dmg){g.enemies.forEach(e=>{
  const ex=e.x-vx,ey=e.y-vy;
  if(IMG.enemy?.complete){
    const cell=96,anim=Math.floor(g.time*7)%3,type=Math.max(0,Math.min(9,e.spriteType||0));
    const size=(e.boss?104:e.kind=="tank"?76:e.kind=="fast"?48:62);
    c.save(); if(e.ghost)c.globalAlpha=.72;
    c.shadowColor="#000";c.shadowBlur=4;c.imageSmoothingEnabled=false;
    c.drawImage(IMG.enemy,anim*cell,type*cell,cell,cell,ex-size/2,ey-size*.78,size,size);
    c.imageSmoothingEnabled=true;c.shadowBlur=0;c.restore();
  }else{c.fillStyle=e.col;c.beginPath();c.arc(ex,ey,e.r,0,7);c.fill();}
  c.fillStyle="#000a";c.fillRect(ex-e.r,ey-e.r-8,e.r*2,4);
  c.fillStyle=e.ghost?"#c8e7ff":"#74f5a3";c.fillRect(ex-e.r,ey-e.r-8,e.r*2*(e.hp/e.max),4);
});drawPlayer(c,p,vx,vy);g.fx.forEach(f=>{c.save();c.globalAlpha=1-f.a/f.life;if(f.laser){c.translate(f.x-vx,f.y-vy);c.rotate(f.a2);c.strokeStyle=f.c;c.lineWidth=f.w;c.beginPath();c.moveTo(0,0);c.lineTo(520,0);c.stroke()}else if(f.circle){c.strokeStyle=f.c;c.lineWidth=4;c.beginPath();c.arc(f.x-vx,f.y-vy,f.rr*(f.a/f.life),0,7);c.stroke()}else{c.fillStyle=f.c;c.font="bold 16px system-ui";c.textAlign="center";c.fillText(f.t,f.x-vx,f.y-vy-f.a*40)}c.restore()});g.float.forEach(f=>{c.save();c.globalAlpha=1-f.a/f.life;c.fillStyle=f.c;c.font="bold 14px system-ui";c.textAlign="center";c.fillText(f.t,f.x-vx,f.y-vy-f.a*36);c.restore()});Object.values(g.skills).slice(0,8).forEach((s,i)=>{let def=SKILLS.find(x=>x.id==s.id),x=10+i*44,y=g.h-54;c.fillStyle="#050814cc";c.fillRect(x,y,40,40);drawSkillIcon(c,def,x+4,y+4,24);c.fillStyle="#fff";c.font="10px system-ui";c.textAlign="center";c.fillText("Lv"+s.lv,x+20,y+35)});if(p.minimap)drawMini(c)}
function drawMini(c){let w=120,h=120,x=g.w-w-10,y=128;c.fillStyle="#050814dd";c.fillRect(x,y,w,h);c.strokeStyle="#ffffff55";c.strokeRect(x,y,w,h);for(let ty=0;ty<MAP_H;ty+=2)for(let tx=0;tx<MAP_W;tx+=2){let t=g.map.tiles[ty][tx];if(!block(t)){c.fillStyle=t==3?"#d4b66a":"#8e815e";c.fillRect(x+tx*w/MAP_W,y+ty*h/MAP_H,2,2)}}c.fillStyle="#ffe066";g.items.forEach(it=>c.fillRect(x+it.x*w/WORLD_W-1,y+it.y*h/WORLD_H-1,3,3));c.fillStyle="#ff4d6d";c.fillRect(x+g.p.x*w/WORLD_W-2,y+g.p.y*h/WORLD_H-2,5,5)}

function moveVec(){
  let x=0,y=0;
  if(keys.ArrowLeft||keys.KeyA)x--;
  if(keys.ArrowRight||keys.KeyD)x++;
  if(keys.ArrowUp||keys.KeyW)y--;
  if(keys.ArrowDown||keys.KeyS)y++;
  x+=input.dx;y+=input.dy;
  let l=Math.hypot(x,y);
  if(l>1){x/=l;y/=l}
  return{x,y}
}

function shoot(s,dt){
  if(!g||!g.p)return;
  let p=g.p;
  let def=SKILLS.find(x=>x.id==s.id)||SKILLS[0];
  s.cd-=dt;
  if(s.cd>0)return;
  let lv=s.lv||1;
  let atk=p.atk*(p.atkMul||1)*(p.power||1)*(1+lv*.25)*(s.evo?1.7:1);
  let near=g.enemies.slice().sort((a,b)=>d2(p.x,p.y,a.x,a.y)-d2(p.x,p.y,b.x,b.y))[0];
  let a=near?Math.atan2(near.y-p.y,near.x-p.x):Math.random()*7;
  let c=def.color||"#fff";
  if(def.kind=="projectile"){
    s.cd=Math.max(.13,.38-lv*.018)*(p.cdr||1);
    for(let i=0;i<(s.evo?3:1);i++)shot(a+(i-1)*.22,430,7+lv*.4,atk*1.3,1.1,s.evo?4:2,c);
    beep("shot");
  }else if(def.kind=="pulse"||def.kind=="orbit"){
    s.cd=Math.max(.18,.62-lv*.02)*(p.cdr||1);
    area(p.x,p.y,(80+lv*10+(s.evo?55:0))*(p.size||1),atk*1.35);
    effect(p.x,p.y,"撃",c);
  }else if(def.kind=="laser"){
    s.cd=Math.max(.3,.8-lv*.03)*(p.cdr||1);
    g.fx.push({laser:true,x:p.x,y:p.y,a2:a,c,life:.2,a:0,w:26*(p.size||1)});
    g.enemies.forEach(e=>{
      let dx=e.x-p.x,dy=e.y-p.y,al=dx*Math.cos(a)+dy*Math.sin(a),si=Math.abs(-dx*Math.sin(a)+dy*Math.cos(a));
      if(al>0&&al<520&&si<30*(p.size||1))e.hp-=atk*2.3;
    });
  }else if(def.kind=="meteor"||def.kind=="mine"){
    s.cd=Math.max(.36,.95-lv*.04)*(p.cdr||1);
    for(let i=0;i<1+Math.floor(lv/2)+(s.evo?3:0);i++){
      let e=pick(g.enemies);
      if(e){
        area(e.x,e.y,(46+lv*5)*(p.size||1),atk*2);
        g.fx.push({circle:true,x:e.x,y:e.y,rr:(46+lv*5)*(p.size||1),c,life:.28,a:0});
      }
    }
  }else if(def.kind=="nova"||def.kind=="cross"){
    s.cd=Math.max(.55,1.3-lv*.04)*(p.cdr||1);
    area(p.x,p.y,(140+lv*12+(s.evo?90:0))*(p.size||1),atk*2.1);
    effect(p.x,p.y,"新星",c);
  }else if(def.kind=="chain"){
    s.cd=Math.max(.3,.72-lv*.03)*(p.cdr||1);
    g.enemies.slice(0,6+lv).forEach(e=>{e.hp-=atk*1.2;effect(e.x,e.y,"雷",c)});
  }else{
    s.cd=1.4*(p.cdr||1);
    p.hp=Math.min(p.maxHp,p.hp+4+lv);
    effect(p.x,p.y,"強化",c);
  }
}

function update(dt){
  if(paused||!g||g.over)return;
  let p=g.p;
  g.buffs.forEach(b=>b.t-=dt);
  g.buffs=g.buffs.filter(b=>b.t>0);
  buffs();
  g.time+=dt;
  g.score+=dt*12+p.lv*dt*6;

  g.spawn-=dt;
  if(g.spawn<=0){
    g.spawn=Math.max(.035,.55-g.time/240);
    for(let i=0;i<1+Math.floor(Math.max(0,g.time-35)/22);i++)spawnEnemy(false);
  }
  g.boss-=dt;
  if(g.boss<=0){g.boss=55;spawnEnemy(true)}

  g.itemSpawn-=dt;
  if(g.itemSpawn<=0){
    g.itemSpawn=g.buffs.find(b=>b.id=="harvest")?6:13;
    if(g.items.length<5)spawnItem();
  }

  let mv=moveVec(),spd=p.spd*(p.speedMul||1),pr=p.r*(p.size||1);
  let nx=p.x+mv.x*spd*dt,ny=p.y+mv.y*spd*dt;
  if(walk(nx,p.y,pr))p.x=nx;
  if(walk(p.x,ny,pr))p.y=ny;

  if(Math.abs(mv.x)+Math.abs(mv.y)>.05){
    if(Math.abs(mv.x)>Math.abs(mv.y))p.dir=mv.x<0?1:2;
    else p.dir=mv.y<0?3:0;
    p.walk=(p.walk||0)+dt*9;
    p.frame=Math.floor(p.walk)%4;
  }else p.frame=0;

  if(p.inv>0)p.inv-=dt;
  Object.values(g.skills).forEach(s=>shoot(s,dt));

  g.enemies.forEach(e=>{
    let a=Math.atan2(p.y-e.y,p.x-e.x);
    let ex=e.x+Math.cos(a)*e.spd*dt*(g.freeze||1);
    let ey=e.y+Math.sin(a)*e.spd*dt*(g.freeze||1);
    if(e.ghost||walk(ex,e.y,e.r*.75))e.x=ex;
    if(e.ghost||walk(e.x,ey,e.r*.75))e.y=ey;
    if(d2(e.x,e.y,p.x,p.y)<(e.r+pr)**2&&p.inv<=0){
      p.hp-=Math.max(1,e.dmg*(1-Math.min(.45,p.barrier||0)));
      p.inv=.22;
      effect(p.x,p.y,"-"+Math.floor(e.dmg),"#ff6b6b");
      if(p.hp<=0){
        if(p.revive){p.revive=false;p.hp=p.maxHp*.5;p.inv=3}
        else die();
      }
    }
  });

  g.shots.forEach(s=>{
    s.x+=s.vx*dt;s.y+=s.vy*dt;s.life-=dt;
    g.enemies.forEach(e=>{
      if(s.life>0&&s.pen>0&&d2(s.x,s.y,e.x,e.y)<(s.r+e.r)**2){
        e.hp-=s.dmg;s.pen--;effect(e.x,e.y,Math.floor(s.dmg),"#fff");
      }
    });
  });
  g.shots=g.shots.filter(s=>s.life>0&&s.pen>0&&s.x>-80&&s.x<WORLD_W+80&&s.y>-80&&s.y<WORLD_H+80);

  let dead=g.enemies.filter(e=>e.hp<=0);
  dead.forEach(e=>{
    g.kills++;
    let gold=Math.max(1,Math.floor((e.boss?25+g.time/10:1+Math.random()*2+g.time/180)*(p.goldMul||1)*uval("goldRate")*obonus().goldRate));
    g.runGold+=gold;meta.gold+=gold;save();
    g.score+=e.boss?7000:100+g.time;
    let n=e.boss?22:1+(Math.random()<.2?1:0);
    for(let i=0;i<n;i++)g.gems.push({x:e.x+rand(-18,18),y:e.y+rand(-18,18),r:e.boss?6:4,v:e.boss?18:4});
    if(Math.random()<(e.boss?.65:.025*obonus().itemRate))spawnItem();
    float(e.x,e.y,"+"+gold+"G","#ffd76a");
  });
  g.enemies=g.enemies.filter(e=>e.hp>0);

  g.gems.forEach(m=>{
    let dd=Math.sqrt(d2(m.x,m.y,p.x,p.y));
    if(dd<p.magnet||m.pull){m.x+=(p.x-m.x)*dt*10;m.y+=(p.y-m.y)*dt*10}
    if(dd<pr+m.r+9){m.pick=true;gainXp(m.v)}
  });
  g.gems=g.gems.filter(m=>!m.pick);

  g.items.forEach(it=>{
    it.ttl-=dt;
    if(d2(it.x,it.y,p.x,p.y)<(pr+it.r+4)**2){it.pick=true;applyItem(it)}
  });
  g.items=g.items.filter(it=>!it.pick&&it.ttl>0);

  g.fx.forEach(f=>f.a+=dt);g.fx=g.fx.filter(f=>f.a<f.life);
  g.float.forEach(f=>f.a+=dt);g.float=g.float.filter(f=>f.a<f.life);

  g.view.x=clamp(p.x-g.w/2,0,Math.max(0,WORLD_W-g.w));
  g.view.y=clamp(p.y-g.h/2,0,Math.max(0,WORLD_H-g.h));
  hud();
}

function drawTile(c,t,x,y){
  if(IMG.tiles&&IMG.tiles.complete)c.drawImage(IMG.tiles,t*64,0,64,64,x,y,TILE,TILE);
  else{c.fillStyle=["#1b2449","#dad4bf","#9aa5c6","#ddd3b6","#6e789d","#c8bfa8","#62d5ff","#ddd7c4"][t]||"#000";c.fillRect(x,y,TILE,TILE)}
}
function drawMap(c,vx,vy){
  c.fillStyle="#8ec7ff";
  c.fillRect(0,0,g.w,g.h);

  if(IMG.stage&&IMG.stage.complete){
    c.imageSmoothingEnabled=false;
    c.drawImage(IMG.stage,-vx,-vy,WORLD_W,WORLD_H);
    c.imageSmoothingEnabled=true;
  }else{
    c.fillStyle="#d9d2bd";
    c.fillRect(-vx,-vy,WORLD_W,WORLD_H);
  }
}
function drawSkillIcon(c,def,x,y,s){
  let idx=Math.abs((def.id||"").split("").reduce((a,ch)=>a+ch.charCodeAt(0),0))%40;
  let sx=(idx%8)*64,sy=Math.floor(idx/8)*64;
  if(IMG.skill&&IMG.skill.complete)c.drawImage(IMG.skill,sx,sy,64,64,x,y,s,s);
  else{c.fillStyle=def.color||"#fff";c.fillRect(x,y,s,s)}
}
function drawPlayer(c,p,vx,vy){
  let x=p.x-vx,y=p.y-vy,size=76*(p.size||1)*(p.phase>=4?1.16:1);
  if(p.inv>0)c.globalAlpha=.75+Math.sin(g.time*15)*.25;

  if(p.phase){
    c.strokeStyle="#70dcff";c.globalAlpha=.30;c.lineWidth=3;
    c.beginPath();c.arc(x,y,(25+p.phase*8)*(p.size||1),0,7);c.stroke();c.globalAlpha=1;
  }

  if(IMG.human&&IMG.human.complete){
    let row=(Math.min(4,p.phase||0)*4+(p.dir||0));
    c.save();
    c.shadowColor="#000";c.shadowBlur=5;
    c.imageSmoothingEnabled=false;
    c.drawImage(IMG.human,(p.frame||0)*112,row*112,112,112,x-size/2,y-size*.78,size,size);
    c.imageSmoothingEnabled=true;
    c.restore();
  }else{
    c.fillStyle="#ffd76a";c.fillRect(x-12,y-30,24,38);
  }
  c.globalAlpha=1;
}
function draw(){
  if(!g)return;
  let c=g.ctx,p=g.p,vx=g.view.x,vy=g.view.y;
  c.clearRect(0,0,g.w,g.h);
  drawMap(c,vx,vy);

  g.items.forEach(it=>{
    c.fillStyle="#08131f";c.fillRect(it.x-vx-8,it.y-vy-8,16,16);
    c.fillStyle=it.color;c.fillRect(it.x-vx-6,it.y-vy-6,12,12);
    c.fillStyle="#fff";c.fillRect(it.x-vx-2,it.y-vy-2,4,4);
  });
  g.gems.forEach(m=>{c.fillStyle="#70dcff";c.beginPath();c.arc(m.x-vx,m.y-vy,m.r,0,7);c.fill()});
  g.shots.forEach(s=>{
    c.fillStyle=s.c;c.beginPath();c.arc(s.x-vx,s.y-vy,s.r,0,7);c.fill();
    c.strokeStyle="#ffffffaa";c.lineWidth=2;c.beginPath();c.arc(s.x-vx,s.y-vy,s.r*1.7,0,7);c.stroke();
  });
  g.enemies.forEach(e=>{
    let ex=e.x-vx,ey=e.y-vy;
    if(IMG.enemy&&IMG.enemy.complete){
      let cell=96,anim=Math.floor(g.time*7)%3,type=Math.max(0,Math.min(9,e.spriteType||0));
      let size=e.boss?104:e.kind=="tank"?76:e.kind=="fast"?48:62;
      c.save();if(e.ghost)c.globalAlpha=.72;
      c.shadowColor="#000";c.shadowBlur=4;c.imageSmoothingEnabled=false;
      c.drawImage(IMG.enemy,anim*cell,type*cell,cell,cell,ex-size/2,ey-size*.78,size,size);
      c.imageSmoothingEnabled=true;c.restore();
    }else{c.fillStyle=e.col;c.beginPath();c.arc(ex,ey,e.r,0,7);c.fill()}
    c.fillStyle="#000a";c.fillRect(ex-e.r,ey-e.r-8,e.r*2,4);
    c.fillStyle=e.ghost?"#c8e7ff":"#74f5a3";c.fillRect(ex-e.r,ey-e.r-8,e.r*2*(e.hp/e.max),4);
  });

  drawPlayer(c,p,vx,vy);

  g.fx.forEach(f=>{
    c.save();c.globalAlpha=1-f.a/f.life;
    if(f.laser){c.translate(f.x-vx,f.y-vy);c.rotate(f.a2);c.strokeStyle=f.c;c.lineWidth=f.w;c.beginPath();c.moveTo(0,0);c.lineTo(520,0);c.stroke()}
    else if(f.circle){c.strokeStyle=f.c;c.lineWidth=4;c.beginPath();c.arc(f.x-vx,f.y-vy,f.rr*(f.a/f.life),0,7);c.stroke()}
    else{c.fillStyle=f.c;c.font="bold 16px system-ui";c.textAlign="center";c.fillText(f.t,f.x-vx,f.y-vy-f.a*40)}
    c.restore();
  });
  g.float.forEach(f=>{c.save();c.globalAlpha=1-f.a/f.life;c.fillStyle=f.c;c.font="bold 14px system-ui";c.textAlign="center";c.fillText(f.t,f.x-vx,f.y-vy-f.a*36);c.restore()});

  Object.values(g.skills).slice(0,8).forEach((s,i)=>{
    let def=SKILLS.find(x=>x.id==s.id)||SKILLS[0],x=10+i*44,y=g.h-54;
    c.fillStyle="#050814cc";c.fillRect(x,y,40,40);
    drawSkillIcon(c,def,x+4,y+4,24);
    c.fillStyle="#fff";c.font="10px system-ui";c.textAlign="center";c.fillText("Lv"+s.lv,x+20,y+35);
  });
  if(p.minimap)drawMini(c);
}


function hud(){let p=g.p;$("time").textContent=Math.floor(g.time/60)+":"+String(Math.floor(g.time%60)).padStart(2,"0");$("lv").textContent=p.lv;$("kills").textContent=fmt(g.kills);$("score").textContent=fmt(g.score);$("runGold").textContent=fmt(g.runGold);$("hpbar").style.width=clamp(p.hp/p.maxHp*100,0,100)+"%";$("xpbar").style.width=clamp(p.xp/p.next*100,0,100)+"%";$("buffs").innerHTML=g.buffs.map(b=>`<span>${ITEMS.find(i=>i.id==b.id)?.name||b.id} ${b.t.toFixed(0)}s</span>`).join("")+(p.revive?"<span>復活待機</span>":"")+(p.minimap?"<span>ミニマップ</span>":"")}
function loop(now){let dt=Math.min(.033,(now-last)/1000||0);last=now;safe(()=>{update(dt);draw()});if(g&&!g.over)raf=requestAnimationFrame(loop)}
function die(){if(!g||g.over)return;beep("dead");g.over=true;if(raf)cancelAnimationFrame(raf);let p=g.p,score=Math.floor(g.score+g.kills*15+p.lv*140+g.time*30+g.runGold*4),pts=Math.floor(Math.pow(score,.55)+g.time+p.lv*2);meta.pts+=pts;meta.best=Math.max(meta.best,score);save();$("resultText").innerHTML=`<div class=stats><div><b>スコア</b><span>${fmt(score)}</span></div><div><b>転生pt</b><span>+${fmt(pts)}</span></div><div><b>撃破</b><span>${fmt(g.kills)}</span></div><div><b>Lv</b><span>${p.lv}</span></div></div>`;$("result").classList.add("active")}
function roll(n){let cost=n*100;if(meta.gold<cost){$("gachaLog").textContent="Gold不足";return}meta.gold-=cost;let got=[];for(let i=0;i<n;i++){let rare=rarity(),pool=GACHA.filter(x=>x.rare==rare),it=pick(pool);meta.owned[it.id]=(meta.owned[it.id]||0)+1;if(i<30)got.push(`${it.rare}:${it.name}+${meta.owned[it.id]}`)}save();$("gachaLog").innerHTML=got.map(x=>`<span class=tag>${x}</span>`).join("");render()}
function setup(){$("startBtn").onclick=startGame;$("gachaBtn").onclick=()=>show("gacha");$("upBtn").onclick=()=>show("upgrades");document.querySelectorAll(".back").forEach(b=>b.onclick=()=>show("title"));$("roll1").onclick=()=>roll(1);$("roll10").onclick=()=>roll(10);$("roll100").onclick=()=>roll(100);$("soundBtn").onclick=()=>{soundOn=!soundOn;meta.sound=soundOn;save();render()};$("resetBtn").onclick=()=>{if(confirm("保存を初期化しますか？")){localStorage.removeItem(SAVE);load();render()}};$("pause").onclick=()=>{paused=!paused;$("pause").textContent=paused?"▶":"II";last=performance.now()};$("titleBack").onclick=()=>{$("result").classList.remove("active");g=null;show("title")};document.addEventListener("click",e=>{let u=e.target.closest("[data-up]");if(u){let up=UPS.find(x=>x.id==u.dataset.up),c=ucost(up);if(meta.pts>=c&&ulv(up.id)<up.max){meta.pts-=c;meta.spent[up.id]=ulv(up.id)+1;save();render()}}let s=e.target.closest("[data-skill]");if(s)chooseSkill(s.dataset.skill,false)});addEventListener("keydown",e=>keys[e.code]=true);addEventListener("keyup",e=>keys[e.code]=false);let cv=$("cv");cv.addEventListener("pointerdown",e=>{input.active=true;input.x=e.clientX;input.y=e.clientY;cv.setPointerCapture(e.pointerId);e.preventDefault()});cv.addEventListener("pointermove",e=>{if(!input.active)return;let dx=e.clientX-input.x,dy=e.clientY-input.y,l=Math.hypot(dx,dy);if(l<4){input.dx=0;input.dy=0}else{input.dx=dx/Math.max(l,54);input.dy=dy/Math.max(l,54)}e.preventDefault()});let end=e=>{input.active=false;input.dx=0;input.dy=0;e.preventDefault()};cv.addEventListener("pointerup",end);cv.addEventListener("pointercancel",end);addEventListener("resize",()=>{if(!g)return;let cv=$("cv"),dpr=Math.max(1,Math.min(2,devicePixelRatio||1));g.w=innerWidth;g.h=innerHeight;cv.width=g.w*dpr;cv.height=g.h*dpr;cv.style.width=g.w+"px";cv.style.height=g.h+"px";g.ctx.setTransform(dpr,0,0,dpr,0,0)})}
document.addEventListener("DOMContentLoaded",()=>safe(()=>{load();preload();setup();render()}));
})();
