
(() => {
"use strict";
const DATA = {"skills":[{"id":"orb","name":"魔石弾","group":"common","desc":"近い敵へ高速弾。","kind":"projectile","color":"#ffd76a"},{"id":"blade","name":"守護剣","group":"common","desc":"周囲を回る剣。","kind":"orbit","color":"#70dcff"},{"id":"aura","name":"魔力波動","group":"common","desc":"周囲へ定期攻撃。","kind":"pulse","color":"#ff72ce"},{"id":"laser","name":"星光レーザー","group":"common","desc":"直線貫通レーザー。","kind":"laser","color":"#ffe66d"},{"id":"bomb","name":"魔石爆弾","group":"common","desc":"近い敵周辺で爆発。","kind":"meteor","color":"#ff9f1c"},{"id":"needle","name":"貫通針","group":"common","desc":"細い貫通弾を連射。","kind":"projectile","color":"#b8f2e6"},{"id":"shield","name":"反撃障壁","group":"common","desc":"接触時に反撃しHP微回復。","kind":"pulse","color":"#9bf6ff"},{"id":"chain","name":"連鎖雷","group":"common","desc":"敵から敵へ連鎖。","kind":"chain","color":"#caffbf"},{"id":"mine","name":"魔石地雷","group":"common","desc":"周囲に地雷を置く。","kind":"mine","color":"#f6bd60"},{"id":"nova","name":"新星爆発","group":"common","desc":"広範囲を吹き飛ばす。","kind":"nova","color":"#f28482"},{"id":"slash","name":"人王斬","group":"human","desc":"前方へ斬撃。","kind":"projectile","color":"#ffffff"},{"id":"banner","name":"英雄旗","group":"human","desc":"回復と強化。","kind":"buff","color":"#ffd76a"},{"id":"star","name":"星導陣","group":"human","desc":"魔石を引き寄せる。","kind":"buff","color":"#70dcff"},{"id":"spear","name":"聖槍投げ","group":"human","desc":"高速貫通槍。","kind":"projectile","color":"#fefae0"},{"id":"guard","name":"王盾反射","group":"human","desc":"周囲反撃。","kind":"pulse","color":"#a8dadc"},{"id":"cross","name":"十字聖光","group":"human","desc":"十字方向攻撃。","kind":"cross","color":"#f1faee"},{"id":"judgement","name":"裁きの光","group":"human","desc":"近い敵へ落雷。","kind":"meteor","color":"#f4d35e"},{"id":"command","name":"号令","group":"human","desc":"全スキルの回転を短縮。","kind":"buff","color":"#ffc857"},{"id":"valor","name":"勇気の刃","group":"human","desc":"HPが高いほど火力増。","kind":"projectile","color":"#faf0ca"},{"id":"sanctuary","name":"聖域","group":"human","desc":"広い継続ダメージ。","kind":"nova","color":"#d8f3dc"},{"id":"claw","name":"獣爪雷撃","group":"beast","desc":"近距離範囲攻撃。","kind":"pulse","color":"#74f5a3"},{"id":"dash","name":"突進波","group":"beast","desc":"移動方向へ衝撃波。","kind":"projectile","color":"#95d5b2"},{"id":"howl","name":"獣王咆哮","group":"beast","desc":"全方位弾。","kind":"nova","color":"#52b788"},{"id":"fang","name":"裂牙","group":"beast","desc":"近い敵へ牙撃。","kind":"projectile","color":"#d8f3dc"},{"id":"pounce","name":"跳襲","group":"beast","desc":"ランダム敵へ突撃波。","kind":"projectile","color":"#b7e4c7"},{"id":"thunder","name":"雷爪嵐","group":"beast","desc":"周囲雷撃。","kind":"pulse","color":"#c7f9cc"},{"id":"wild","name":"野性解放","group":"beast","desc":"速度と攻撃強化。","kind":"buff","color":"#74c69d"},{"id":"pack","name":"群狼影","group":"beast","desc":"分身弾。","kind":"projectile","color":"#40916c"},{"id":"roar","name":"覇獣咆哮","group":"beast","desc":"敵を削る大咆哮。","kind":"nova","color":"#2d6a4f"},{"id":"hunt","name":"狩猟本能","group":"beast","desc":"撃破時Gold増加。","kind":"buff","color":"#95d5b2"},{"id":"fire","name":"竜炎弾","group":"dragon","desc":"高威力の炎弾。","kind":"projectile","color":"#ff6b6b"},{"id":"meteor","name":"竜星落下","group":"dragon","desc":"敵周辺に隕石。","kind":"meteor","color":"#f77f00"},{"id":"breath","name":"竜神ブレス","group":"dragon","desc":"前方貫通炎。","kind":"laser","color":"#e63946"},{"id":"scale","name":"竜鱗障壁","group":"dragon","desc":"防御と反撃。","kind":"pulse","color":"#f94144"},{"id":"tail","name":"竜尾旋風","group":"dragon","desc":"周囲薙ぎ払い。","kind":"orbit","color":"#f3722c"},{"id":"flare","name":"爆炎核","group":"dragon","desc":"巨大爆発。","kind":"nova","color":"#f8961e"},{"id":"storm","name":"雷竜嵐","group":"dragon","desc":"雷弾をばら撒く。","kind":"projectile","color":"#f9844a"},{"id":"ancient","name":"古竜詠唱","group":"dragon","desc":"全体火力強化。","kind":"buff","color":"#f9c74f"},{"id":"fangfire","name":"炎牙","group":"dragon","desc":"近距離炎撃。","kind":"pulse","color":"#f94144"},{"id":"apocalypse","name":"終焉竜星","group":"dragon","desc":"超広範囲隕石。","kind":"meteor","color":"#f3722c"}],"items":[{"id":"map","name":"地図","color":"#ffe066","desc":"ミニマップを右上に表示。アイテム位置も見える。"},{"id":"heal30","name":"回復薬","color":"#80ed99","desc":"HPを30%回復。"},{"id":"heal100","name":"秘薬","color":"#57cc99","desc":"HPを100%回復。"},{"id":"buff","name":"強化薬","color":"#ff922b","desc":"60秒間、攻撃・移動速度+30%。"},{"id":"book","name":"秘伝書","color":"#9b5de5","desc":"獲得可能なスキルをランダム取得。"},{"id":"growth","name":"成長薬","color":"#4cc9f0","desc":"60秒間、獲得経験値+20%。"},{"id":"magnet","name":"磁石","color":"#4895ef","desc":"散らばる魔石を一斉収集。"},{"id":"giant","name":"巨大化の種","color":"#ff4d6d","desc":"30秒間、サイズと攻撃サイズ2倍。"},{"id":"gold","name":"金貨袋","color":"#ffd166","desc":"Goldを獲得。"},{"id":"chest","name":"宝箱","color":"#c77dff","desc":"Gold大量獲得 + 低確率で追加アイテム。"},{"id":"xp","name":"経験の書","color":"#90e0ef","desc":"即座に経験値獲得。"},{"id":"shield","name":"守り札","color":"#caf0f8","desc":"10秒間、無敵。"},{"id":"speed","name":"俊足薬","color":"#06d6a0","desc":"45秒間、移動速度+50%。"},{"id":"bomb","name":"爆弾","color":"#ef476f","desc":"画面内の敵へ大ダメージ。"},{"id":"whistle","name":"召喚笛","color":"#ffbe0b","desc":"ランダムな追加アイテムをその場に呼ぶ。"},{"id":"luck","name":"幸運のコイン","color":"#ffe066","desc":"60秒間、Gold獲得量+50%。"},{"id":"revive","name":"復活の羽","color":"#f1faee","desc":"一度だけ自動復活。"},{"id":"freeze","name":"時の砂","color":"#a8dadc","desc":"8秒間、敵の動きを大きく鈍らせる。"},{"id":"harvest","name":"収穫の鎌","color":"#84a59d","desc":"60秒間、アイテム湧きが早くなる。"},{"id":"bless","name":"祝福石","color":"#e9c46a","desc":"30秒間、全ステータス上昇。"}]};
const SAVE = "maseki_tensei_survivor_v05";
const TILE = 24, MAP_W = 64, MAP_H = 64, WORLD_W = MAP_W*TILE, WORLD_H = MAP_H*TILE;
const $ = id => document.getElementById(id);
const fmt = n => Math.floor(n||0).toLocaleString("ja-JP");
const clamp = (v,a,b) => Math.max(a, Math.min(b, v));
const dist2 = (a,b,c,d) => { const x=a-c,y=b-d; return x*x+y*y; };
const rand = (a,b) => a + Math.random()*(b-a);
const pick = arr => arr[Math.floor(Math.random()*arr.length)];
const SKILLS = DATA.skills;
const ITEMS = DATA.items;
const GACHA = (() => {
  const items = [];
  const add = (count, rare, type, racePool, prefix, bonusBase) => {
    for(let i=1;i<=count;i++) {
      const race = racePool === "all" ? null : pick(racePool);
      const statKeys = ["atk","hp","speed","magnet","growth"];
      const k1 = pick(statKeys);
      const k2 = pick(statKeys.filter(k => k!==k1));
      const bonus = { [k1]: bonusBase };
      if(["SR","SSR","UR","SKIN"].includes(rare)) bonus[k2] = +(bonusBase*0.6).toFixed(4);
      items.push({
        id: "g"+String(items.length+1).padStart(3,"0"),
        type, rare, race,
        name: `${race ? ({human:"人族",beast:"獣族",dragon:"竜族"}[race]) : "共通"}${prefix}${i}`,
        bonus
      });
    }
  };
  add(330,"N","equip","all","量産装備",0.006);
  add(100,"R","equip","all","希少装備",0.014);
  add(50,"SR","equip",["human","beast","dragon"],"英雄装備",0.028);
  add(12,"SSR","equip",["human","beast","dragon"],"神話装備",0.05);
  add(5,"UR","equip",["human","beast","dragon"],"究極装備",0.085);
  add(3,"SKIN","skin",["human","beast","dragon"],"スキン",0.055);
  return items.slice(0,500);
})();

const RACES = [
  {id:"human",name:"人族",color:"#ffd76a",sub:"#70dcff",desc:"万能型。進化ドットは人間専用で丁寧に描画。",bonus:{hp:1.10,atk:1.08,speed:1.08,magnet:1.12,growth:1.18}},
  {id:"beast",name:"獣族",color:"#74f5a3",sub:"#caffbf",desc:"高速近接型。突進と爪で殲滅。",bonus:{hp:1.18,atk:1.22,speed:1.24,magnet:1.08,growth:1.02}},
  {id:"dragon",name:"竜族",color:"#ff6b6b",sub:"#ffd6a5",desc:"高火力高耐久型。ブレスと隕石で焼く。",bonus:{hp:1.34,atk:1.28,speed:1.0,magnet:1.0,growth:1.0}}
];

const UPS = [
  {id:"hp",name:"最大HP",desc:"最大HP +10%",base:8,max:25},
  {id:"atk",name:"攻撃力",desc:"攻撃力 +8%",base:10,max:25},
  {id:"speed",name:"移動速度",desc:"移動速度 +4%",base:12,max:20},
  {id:"magnet",name:"回収範囲",desc:"経験値回収範囲 +10%",base:9,max:20},
  {id:"growth",name:"成長力",desc:"獲得経験値 +6%",base:14,max:20},
  {id:"choice",name:"選択肢",desc:"レベルアップ選択肢 +1",base:80,max:2}
];

let meta, selected = "human", g = null, raf = null, last = 0, paused = false, soundOn = true;
let input = {active:false,x:0,y:0,dx:0,dy:0}, keys = {}, audio = null, bgmTimer = null, choiceTimer = null, choiceRemain = 0, currentChoices = [];

function safe(fn) { try { fn(); } catch (e) { console.error(e); $("err").classList.remove("hidden"); $("err").textContent = "エラー: " + (e.message || e); } }
function newMeta() { return { pts:0, gold:0, spent:{}, owned:{}, best:0, bestTime:0, bestKills:0, bestLv:1, sound:true }; }
function load() { try { meta = JSON.parse(localStorage.getItem(SAVE)) || newMeta(); } catch { meta = newMeta(); } if(meta.gold==null) meta.gold=0; if(!meta.owned) meta.owned={}; if(meta.sound==null) meta.sound=true; soundOn = meta.sound; }
function save() { localStorage.setItem(SAVE, JSON.stringify(meta)); }
function ulv(id) { return meta.spent[id] || 0; }
function uval(id) {
  const l = ulv(id);
  if(id==="hp") return 1+l*0.10;
  if(id==="atk") return 1+l*0.08;
  if(id==="speed") return 1+l*0.04;
  if(id==="magnet") return 1+l*0.10;
  if(id==="growth") return 1+l*0.06;
  if(id==="choice") return l;
  return 1;
}
function dupBonus(n) { if(n>=10000) return 5; if(n>=1000) return 3; if(n>=100) return 2; if(n>=10) return 1.5; return 1; }
function ownedBonus(raceId) {
  const b = {hp:1,atk:1,speed:1,magnet:1,growth:1};
  for(const [id,n] of Object.entries(meta.owned||{})) {
    const it = GACHA.find(x=>x.id===id); if(!it || !it.bonus) continue;
    if(it.race && it.race !== raceId) continue;
    const m = dupBonus(n);
    for(const [k,v] of Object.entries(it.bonus)) b[k] = (b[k] || 1) + v * m;
  }
  return b;
}
function show(id) { document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")); $(id).classList.add("active"); render(); }

function initAudio() { if(audio || !soundOn) return; audio = new (window.AudioContext || window.webkitAudioContext)(); }
function beep(type="hit") {
  if(!soundOn) return; initAudio(); if(!audio) return;
  const o = audio.createOscillator(), gain = audio.createGain(), now = audio.currentTime;
  o.connect(gain); gain.connect(audio.destination);
  let f = type==="gold" ? 880 : type==="lv" ? 440 : type==="dead" ? 220 : type==="shot" ? 660 : 180;
  o.type = type==="shot" ? "square" : type==="lv" ? "sawtooth" : "triangle";
  o.frequency.setValueAtTime(f, now);
  if(type==="dead") o.frequency.exponentialRampToValueAtTime(55, now+0.45);
  if(type==="lv") o.frequency.exponentialRampToValueAtTime(960, now+0.18);
  gain.gain.setValueAtTime(type==="dead" ? 0.06 : 0.03, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + (type==="dead"?0.45:0.12));
  o.start(now); o.stop(now + (type==="dead"?0.5:0.15));
}
function startBgm() {
  if(!soundOn) return; initAudio(); stopBgm();
  const notes = [220,277,330,392,440,392,330,277], bass = [110,110,138,98];
  let i = 0;
  bgmTimer = setInterval(() => {
    if(!audio || paused || !g || g.over) return;
    let now = audio.currentTime;
    let o1 = audio.createOscillator(), g1 = audio.createGain();
    let o2 = audio.createOscillator(), g2 = audio.createGain();
    o1.type = "square"; o2.type = "triangle";
    o1.frequency.setValueAtTime(notes[i % notes.length], now);
    o2.frequency.setValueAtTime(bass[i % bass.length], now);
    o1.connect(g1); o2.connect(g2); g1.connect(audio.destination); g2.connect(audio.destination);
    g1.gain.setValueAtTime(0.014, now); g2.gain.setValueAtTime(0.012, now);
    g1.gain.exponentialRampToValueAtTime(0.001, now+0.25); g2.gain.exponentialRampToValueAtTime(0.001, now+0.38);
    o1.start(now); o2.start(now); o1.stop(now+0.26); o2.stop(now+0.4); i++;
  }, 180);
}
function stopBgm() { if(bgmTimer) { clearInterval(bgmTimer); bgmTimer = null; } }

function render() {
  $("metaPts").textContent = fmt(meta.pts);
  $("bestScore").textContent = fmt(meta.best);
  $("ptsText").textContent = fmt(meta.pts);
  $("goldText").textContent = fmt(meta.gold);
  $("goldGacha").textContent = fmt(meta.gold);
  $("soundText").textContent = soundOn ? "ON" : "OFF";
  $("raceCards").innerHTML = RACES.map(r => `<button type="button" class="card ${selected===r.id?"selected":""}" data-race="${r.id}"><h3>${r.name}</h3><p>${r.desc}</p></button>`).join("");
  $("upgradeCards").innerHTML = UPS.map(u => {
    const l = ulv(u.id), c = Math.floor(u.base*Math.pow(1.45,l)), m = l>=u.max;
    return `<div class="card"><h3>${u.name} Lv${l}/${u.max}</h3><p>${u.desc}</p><button type="button" data-up="${u.id}" ${m||meta.pts<c?"disabled":""}>${m?"最大":"強化 "+fmt(c)+"pt"}</button></div>`;
  }).join("");
  renderInventory();
}
function renderInventory() {
  const owned = Object.entries(meta.owned||{}).filter(x=>x[1]>0).sort((a,b)=>b[1]-a[1]).slice(0,120);
  $("inventoryCards").innerHTML = owned.length ? owned.map(([id,n]) => {
    const it = GACHA.find(x=>x.id===id), step = n>=10000?"+10000":n>=1000?"+1000":n>=100?"+100":n>=10?"+10":"通常";
    return `<div class="card"><h3>${it.name} <span class="tag">${it.rare}</span></h3><p>${it.type==="skin"?"スキン":"装備"} / ${it.race ? RACES.find(r=>r.id===it.race).name : "全種族"}<br>所持：+${n}<br>強化段階：${step}</p></div>`;
  }).join("") : `<div class="card"><p>まだ所持アイテムがありません。</p></div>`;
}
function rarityRoll() {
  const r = Math.random();
  if(r < 0.001) return "SKIN";
  if(r < 0.006) return "UR";
  if(r < 0.016) return "SSR";
  if(r < 0.116) return "SR";
  if(r < 0.316) return "R";
  return "N";
}
function roll(n) {
  const cost = 100*n;
  if(meta.gold < cost) { $("gachaResult").textContent = "Gold不足"; return; }
  meta.gold -= cost;
  const got = [];
  for(let i=0;i<n;i++) {
    const rare = rarityRoll();
    const pool = GACHA.filter(x=>x.rare===rare);
    const it = pool[Math.floor(Math.random()*pool.length)] || GACHA[0];
    meta.owned[it.id] = (meta.owned[it.id] || 0) + 1;
    if(i < 30) got.push(`${it.rare}:${it.name}+${meta.owned[it.id]}`);
  }
  save();
  $("gachaResult").innerHTML = got.map(x=>`<span class="tag">${x}</span>`).join("") + (n>30?`<p>ほか${n-30}件</p>`:"");
  render(); beep("lv");
}

function buildMap() {
  const tiles = Array.from({length:MAP_H},()=>Array(MAP_W).fill(0));
  for(let y=0;y<MAP_H;y++) {
    for(let x=0;x<MAP_W;x++) {
      let edge = x===0||y===0||x===MAP_W-1||y===MAP_H-1;
      if(edge) tiles[y][x] = 2;
      else {
        let r = Math.random();
        tiles[y][x] = r < 0.04 ? 1 : r < 0.055 ? 3 : 0; // 0 grass,1 dirt,3 flowers
      }
    }
  }
  // paths
  for(let x=2;x<MAP_W-2;x++) tiles[Math.floor(MAP_H/2)][x] = 1;
  for(let y=2;y<MAP_H-2;y++) tiles[y][Math.floor(MAP_W/2)] = 1;
  const obstacles = [];
  for(let i=0;i<240;i++) {
    const x = Math.floor(rand(2, MAP_W-2)), y = Math.floor(rand(2, MAP_H-2));
    if(tiles[y][x]===1 && Math.random()<0.6) continue;
    const t = Math.random() < 0.5 ? "tree" : "rock";
    obstacles.push({x,y,w:1,h:1,type:t});
  }
  for(let i=0;i<30;i++) {
    const x = Math.floor(rand(3, MAP_W-5)), y = Math.floor(rand(3, MAP_H-5));
    obstacles.push({x,y,w:2,h:2,type:"ruin"});
  }
  return {tiles, obstacles};
}
function tileAt(px, py) {
  const tx = Math.floor(px / TILE), ty = Math.floor(py / TILE);
  if(tx<0||ty<0||tx>=MAP_W||ty>=MAP_H) return 2;
  return g.map.tiles[ty][tx];
}
function obstacleRect(ob) {
  return {x: ob.x*TILE, y: ob.y*TILE, w: ob.w*TILE, h: ob.h*TILE};
}
function isWalkable(px, py, r) {
  const points = [
    [px-r,py-r],[px+r,py-r],[px-r,py+r],[px+r,py+r],[px,py]
  ];
  for(const [x,y] of points) {
    const t = tileAt(x,y);
    if(t===2) return false;
  }
  for(const ob of g.map.obstacles) {
    const rc = obstacleRect(ob);
    if(px+r > rc.x && px-r < rc.x+rc.w && py+r > rc.y && py-r < rc.y+rc.h) return false;
  }
  return true;
}
function randomWalkablePos() {
  for(let i=0;i<500;i++) {
    const x = rand(2*TILE, WORLD_W-2*TILE), y = rand(2*TILE, WORLD_H-2*TILE);
    if(isWalkable(x,y,10)) return {x,y};
  }
  return {x:WORLD_W/2,y:WORLD_H/2};
}

function newGame() {
  const race = RACES.find(r=>r.id===selected) || RACES[0];
  const ob = ownedBonus(race.id);
  const map = buildMap();
  const pos = {x:WORLD_W/2, y:WORLD_H/2};
  const baseHp = 150*race.bonus.hp*uval("hp")*ob.hp, baseAtk = 18*race.bonus.atk*uval("atk")*ob.atk, baseSpeed = 238*race.bonus.speed*uval("speed")*ob.speed;
  const starter = selected==="human" ? ["orb","slash"] : selected==="beast" ? ["claw","dash"] : ["fire","breath"];
  return {
    map,
    race,
    time:0, score:0, kills:0, runGold:0, over:false, spawn:0, boss:35, itemSpawn:4,
    view:{x:0,y:0},
    player: {
      x: pos.x, y: pos.y, r: 12, hp:baseHp, maxHp:baseHp, atk:baseAtk, speed:baseSpeed, magnet:125*race.bonus.magnet*uval("magnet")*ob.magnet,
      lv:1, xp:0, next:18, phase:0, inv:0, sizeMul:1, atkMul:1, xpMul:1, goldMul:1, revive:false, minimap:false
    },
    buffs: [],
    enemies: [],
    gems: [],
    items: [],
    shots: [],
    fx: [],
    floater: [],
    freezeMul:1,
    skills: Object.fromEntries(starter.map(id=>[id,{id,lv:1,cd:0,evo:false}]))
  };
}
function startGame() {
  initAudio(); startBgm();
  const cv = $("cv"), ctx = cv.getContext("2d"), dpr = Math.max(1, Math.min(2, devicePixelRatio||1));
  cv.width = Math.floor(innerWidth*dpr); cv.height = Math.floor(innerHeight*dpr); cv.style.width = innerWidth+"px"; cv.style.height = innerHeight+"px"; ctx.setTransform(dpr,0,0,dpr,0,0);
  g = newGame(); g.ctx = ctx; g.cv = cv; g.w = innerWidth; g.h = innerHeight;
  paused=false; $("pause").textContent="II"; show("game"); $("touchHint").style.opacity="1"; setTimeout(() => $("touchHint").style.opacity=".25", 2000);
  last = performance.now(); if(raf) cancelAnimationFrame(raf); raf = requestAnimationFrame(loop);
}

function moveVec() {
  let x=0,y=0;
  if(keys.ArrowLeft||keys.KeyA) x--;
  if(keys.ArrowRight||keys.KeyD) x++;
  if(keys.ArrowUp||keys.KeyW) y--;
  if(keys.ArrowDown||keys.KeyS) y++;
  x += input.dx; y += input.dy;
  const l = Math.hypot(x,y); if(l>1) { x/=l; y/=l; }
  return {x,y};
}
function updateView() {
  g.view.x = clamp(g.player.x - g.w/2, 0, WORLD_W-g.w);
  g.view.y = clamp(g.player.y - g.h/2, 0, WORLD_H-g.h);
}
function spawnEnemy(boss=false) {
  let tries = 0, x, y;
  do {
    const angle = Math.random()*Math.PI*2, dist = Math.max(g.w,g.h)*0.6 + Math.random()*120;
    x = g.player.x + Math.cos(angle)*dist;
    y = g.player.y + Math.sin(angle)*dist;
    x = clamp(x, 20, WORLD_W-20); y = clamp(y,20,WORLD_H-20);
    tries++;
  } while(!isWalkable(x,y,16) && tries < 50);
  const sc = Math.pow(1.026,g.time) * Math.pow(1.12, Math.floor(g.time/28));
  const kind = boss ? "boss" : Math.random()<0.18 ? "fast" : Math.random()<0.16 ? "tank" : "normal";
  const hp = (boss?1600:kind==="tank"?180:kind==="fast"?55:80)*sc;
  const r = boss?22:kind==="tank"?18:kind==="fast"?10:13;
  g.enemies.push({
    x,y,r,kind,boss,hp,maxHp:hp,spd:(boss?54:kind==="fast"?158:kind==="tank"?66:92)*(1+g.time/220),dmg:(boss?34:10+g.time/40)*sc*0.18,
    color: boss ? "#ffd76a" : kind==="fast" ? "#74f5a3" : kind==="tank" ? "#ef476f" : "#9d4edd"
  });
}
function effect(x,y,t,c="#ffd76a") { g.fx.push({x,y,t,c,life:.45,a:0}); }
function floating(x,y,t,c="#ffd76a") { g.floater.push({x,y,t,c,life:.7,a:0}); }

function gainXp(v) {
  const p = g.player, ob = ownedBonus(g.race.id);
  p.xp += v * (g.race.bonus.growth||1) * uval("growth") * ob.growth * p.xpMul;
  while(p.xp >= p.next) {
    p.xp -= p.next; p.lv++; p.next = Math.floor(p.next*1.24 + 14); p.maxHp += 16; p.hp = Math.min(p.maxHp, p.hp+25);
    levelUp();
  }
}
function applyBuff(id, sec) {
  const old = g.buffs.find(b=>b.id===id);
  if(old) old.t = Math.max(old.t, sec);
  else g.buffs.push({id, t:sec});
  recalcBuffs();
}
function recalcBuffs() {
  const p = g.player;
  p.sizeMul = 1; p.atkMul = 1; p.xpMul = 1; p.goldMul = 1; g.freezeMul = 1;
  for(const b of g.buffs) {
    if(b.id==="buff") { p.atkMul *= 1.3; p.speedBuff = 1.3; }
    if(b.id==="growth") p.xpMul *= 1.2;
    if(b.id==="giant") { p.sizeMul *= 2; p.atkMul *= 1.25; }
    if(b.id==="speed") p.speedBuff = Math.max(p.speedBuff||1, 1.5);
    if(b.id==="luck") p.goldMul *= 1.5;
    if(b.id==="bless") { p.atkMul *= 1.2; p.xpMul *= 1.2; p.speedBuff = Math.max(p.speedBuff||1,1.2); }
    if(b.id==="freeze") g.freezeMul = 0.22;
  }
  p.speedBuff = p.speedBuff || 1;
}
function randomAllowedSkill() {
  const pool = SKILLS.filter(s=>s.group==="common" || s.group===g.race.id);
  return pick(pool);
}
function grantRandomSkill() {
  const s = randomAllowedSkill();
  if(s) chooseSkill(s.id, true);
}
function applyItem(item) {
  const p = g.player;
  switch(item.id) {
    case "map": p.minimap = true; break;
    case "heal30": p.hp = Math.min(p.maxHp, p.hp + p.maxHp*0.30); break;
    case "heal100": p.hp = p.maxHp; break;
    case "buff": applyBuff("buff", 60); break;
    case "book": grantRandomSkill(); break;
    case "growth": applyBuff("growth",60); break;
    case "magnet":
      g.gems.forEach(m => m.pull = true);
      break;
    case "giant": applyBuff("giant",30); break;
    case "gold": g.runGold += 25; meta.gold += 25; save(); break;
    case "chest":
      g.runGold += 120; meta.gold += 120; save();
      if(Math.random() < 0.35) spawnItemNearPlayer();
      break;
    case "xp": gainXp(28 + p.lv*2); break;
    case "shield": p.inv = Math.max(p.inv, 10); break;
    case "speed": applyBuff("speed",45); break;
    case "bomb":
      g.enemies.forEach(e => e.hp -= e.maxHp*0.45 + p.atk*2);
      effect(p.x,p.y,"爆","#ff4d6d");
      break;
    case "whistle":
      for(let i=0;i<2;i++) spawnItemNearPlayer();
      break;
    case "luck": applyBuff("luck",60); break;
    case "revive": p.revive = true; break;
    case "freeze": applyBuff("freeze",8); break;
    case "harvest": applyBuff("harvest",60); break;
    case "bless": applyBuff("bless",30); break;
  }
  floating(item.x, item.y, item.name, item.color);
  beep("gold");
}
function itemSpawnInterval() {
  return g.buffs.find(b=>b.id==="harvest") ? 2.5 : 5.5;
}
function spawnItem(kindId=null) {
  const kind = kindId ? ITEMS.find(i=>i.id===kindId) : pick(ITEMS);
  const pos = randomWalkablePos();
  g.items.push({...kind, x:pos.x, y:pos.y, r:10, ttl:50});
}
function spawnItemNearPlayer() {
  for(let i=0;i<20;i++) {
    const x = clamp(g.player.x + rand(-180,180), 20, WORLD_W-20);
    const y = clamp(g.player.y + rand(-180,180), 20, WORLD_H-20);
    if(isWalkable(x,y,10)) {
      const kind = pick(ITEMS);
      g.items.push({...kind, x,y,r:10,ttl:40});
      break;
    }
  }
}
function levelUp() {
  beep("lv");
  const p = g.player;
  const n = p.lv>=45 ? 4 : p.lv>=28 ? 3 : p.lv>=14 ? 2 : p.lv>=6 ? 1 : 0;
  if(n > p.phase) { p.phase = n; effect(p.x,p.y,["第一進化","第二進化","第三進化","神化"][n-1],"#fff"); }
  paused = true;
  const pool = SKILLS.filter(s=>s.group==="common" || s.group===g.race.id);
  const count = Math.min(pool.length, 3 + uval("choice"));
  currentChoices = pool.sort(()=>Math.random()-0.5).slice(0, count);
  $("choices").innerHTML = currentChoices.map(s => {
    const cur = g.skills[s.id]?.lv || 0;
    return `<button type="button" class="choice" data-skill="${s.id}"><h3>${s.name} ${cur?`Lv${cur}`:"NEW"}</h3><p>${s.desc}</p></button>`;
  }).join("");
  $("levelup").classList.add("active");
  startChoiceTimer();
}
function startChoiceTimer() {
  choiceRemain = 3.0; $("choiceTimer").textContent = choiceRemain.toFixed(1);
  if(choiceTimer) clearInterval(choiceTimer);
  choiceTimer = setInterval(() => {
    choiceRemain -= 0.1;
    $("choiceTimer").textContent = Math.max(0, choiceRemain).toFixed(1);
    if(choiceRemain <= 0) {
      clearInterval(choiceTimer); choiceTimer = null;
      const pickSkill = currentChoices[Math.floor(Math.random()*currentChoices.length)];
      if(pickSkill) chooseSkill(pickSkill.id, false);
    }
  }, 100);
}
function chooseSkill(id, viaItem=false) {
  if(choiceTimer) { clearInterval(choiceTimer); choiceTimer = null; }
  const s = g.skills[id] || {id,lv:0,cd:0,evo:false};
  s.lv++;
  const def = SKILLS.find(x=>x.id===id);
  if(s.lv >= 6 && (def.group==="common" || def.group===g.race.id)) { s.evo = true; effect(g.player.x,g.player.y, "進化:"+def.name, def.color||"#fff"); }
  g.skills[id] = s;
  if(!viaItem) {
    $("levelup").classList.remove("active");
    paused = false; last = performance.now();
  }
}

function fireShot(a, spd, r, dmg, life, p, c, sizeMul=1) {
  const pl = g.player;
  g.shots.push({x:pl.x,y:pl.y,vx:Math.cos(a)*spd,vy:Math.sin(a)*spd,r:r*pl.sizeMul*sizeMul,dmg,life,p,c});
}
function area(x,y,rad,dmg,label,c) {
  g.enemies.forEach(e => {
    if(dist2(x,y,e.x,e.y) < rad*rad) {
      e.hp -= dmg;
      if(Math.random() < 0.12) effect(e.x,e.y,label,c);
    }
  });
}
function shoot(sk, dt) {
  const p = g.player;
  sk.cd -= dt;
  if(sk.cd > 0) return;
  const lv = sk.lv, evo = sk.evo;
  let atk = p.atk * p.atkMul * (1 + lv*0.24) * (evo ? 1.65 : 1);
  if(sk.id==="valor" && p.hp/p.maxHp > 0.8) atk *= 1.25;
  const near = g.enemies.slice().sort((a,b)=>dist2(p.x,p.y,a.x,a.y)-dist2(p.x,p.y,b.x,b.y))[0];
  const a = near ? Math.atan2(near.y-p.y, near.x-p.x) : Math.random()*Math.PI*2;
  const def = SKILLS.find(x=>x.id===sk.id) || {kind:"projectile", color:"#fff"};
  const color = def.color || g.race.color;

  if(def.kind==="projectile") {
    sk.cd = Math.max(0.16, 0.42 - lv*0.018);
    const n = evo ? 3 : 1;
    for(let i=0;i<n;i++) fireShot(a+(i-(n-1)/2)*0.25, 380+lv*12, 6+lv*0.35, atk*1.35, 1.2, evo?4:2, color);
    beep("shot");
  }
  if(def.kind==="orbit") {
    sk.cd = 0.18;
    area(p.x,p.y,(56+lv*9+(evo?40:0))*p.sizeMul, atk*0.60, "斬", color);
  }
  if(def.kind==="pulse") {
    sk.cd = Math.max(0.25, 0.72-lv*0.025);
    area(p.x,p.y,(90+lv*13+(evo?70:0))*p.sizeMul, atk*1.4, "撃", color);
    beep("hit");
  }
  if(def.kind==="laser") {
    sk.cd = Math.max(0.35,0.9-lv*0.03);
    g.fx.push({laser:true,x:p.x,y:p.y,a2:a,c:color,life:0.18,a:0,w:22*p.sizeMul});
    g.enemies.forEach(e => {
      const dx=e.x-p.x, dy=e.y-p.y, along=dx*Math.cos(a)+dy*Math.sin(a), side=Math.abs(-dx*Math.sin(a)+dy*Math.cos(a));
      if(along>0 && along<420+lv*28 && side<(24+lv*4)*p.sizeMul) e.hp -= atk*2.1;
    });
  }
  if(def.kind==="meteor") {
    sk.cd = Math.max(0.45,1.05-lv*0.04);
    const n = 1+Math.floor(lv/2)+(evo?3:0);
    for(let i=0;i<n;i++) {
      const e = g.enemies[Math.floor(Math.random()*g.enemies.length)];
      if(!e) continue;
      const rad = (42+lv*5)*p.sizeMul;
      g.fx.push({x:e.x,y:e.y,t:"爆",c:color,life:0.25,a:0,circle:true,rr:rad});
      area(e.x,e.y,rad,atk*1.95,"爆",color);
    }
    beep("hit");
  }
  if(def.kind==="chain") {
    sk.cd = Math.max(0.38,0.85-lv*0.03);
    g.enemies.slice(0,Math.min(g.enemies.length,5+lv+(evo?8:0))).forEach(e=>{e.hp-=atk*1.25; effect(e.x,e.y,"雷",color);});
  }
  if(def.kind==="mine") {
    sk.cd = Math.max(0.3,0.75-lv*0.025);
    area(p.x+rand(-160,160), p.y+rand(-160,160), 52+lv*4, atk*1.55, "地雷", color);
  }
  if(def.kind==="nova") {
    sk.cd = Math.max(0.7,1.6-lv*0.05);
    area(p.x,p.y,(135+lv*14+(evo?90:0))*p.sizeMul, atk*2.0, "新星", color);
    beep("hit");
  }
  if(def.kind==="cross") {
    sk.cd = Math.max(0.35,0.78-lv*0.03);
    [0,Math.PI/2,Math.PI,Math.PI*1.5].forEach(aa=>fireShot(aa,420,8,atk*1.4,1.0,evo?4:2,color));
  }
  if(def.kind==="buff") {
    sk.cd = 1.5;
    p.hp = Math.min(p.maxHp, p.hp+3+lv);
    effect(p.x,p.y,"強化",color);
    if(sk.id==="command") {
      Object.values(g.skills).forEach(ss => ss.cd *= 0.85);
    }
    if(sk.id==="star") {
      g.gems.forEach(m => m.pull=true);
    }
    if(sk.id==="wild") applyBuff("speed", 3);
    if(sk.id==="hunt") applyBuff("luck", 3);
  }
}

function update(dt) {
  if(paused || !g || g.over) return;
  const p = g.player;
  // buffs
  g.buffs.forEach(b => b.t -= dt);
  g.buffs = g.buffs.filter(b => b.t > 0);
  recalcBuffs();

  g.time += dt;
  g.score += dt*12 + p.lv*dt*6;

  // spawn enemies
  g.spawn -= dt;
  if(g.spawn <= 0) {
    g.spawn = Math.max(0.035, 0.34 - g.time/260);
    for(let i=0;i<1+Math.floor(g.time/28);i++) spawnEnemy(false);
  }
  g.boss -= dt;
  if(g.boss <= 0) {
    g.boss = 45; spawnEnemy(true); effect(p.x,p.y-40,"ボス出現","#ffd76a");
  }

  // spawn items
  g.itemSpawn -= dt;
  if(g.itemSpawn <= 0) {
    g.itemSpawn = itemSpawnInterval();
    if(g.items.length < 12) spawnItem();
  }

  // movement with collision
  const mv = moveVec();
  const speed = p.speed * (p.speedBuff||1);
  let nx = p.x + mv.x * speed * dt, ny = p.y + mv.y * speed * dt;
  const pr = p.r * p.sizeMul;
  if(isWalkable(nx, p.y, pr)) p.x = nx;
  if(isWalkable(p.x, ny, pr)) p.y = ny;
  if(p.inv > 0) p.inv -= dt;

  Object.values(g.skills).forEach(s => shoot(s,dt));

  // enemy update
  g.enemies.forEach(e => {
    const a = Math.atan2(p.y-e.y, p.x-e.x);
    e.x += Math.cos(a)*e.spd*dt*g.freezeMul;
    e.y += Math.sin(a)*e.spd*dt*g.freezeMul;
    const rr = e.r + pr;
    if(dist2(e.x,e.y,p.x,p.y) < rr*rr && p.inv <= 0) {
      p.hp -= e.dmg;
      p.inv = 0.22;
      effect(p.x,p.y,"-"+Math.floor(e.dmg),"#ff6b6b");
      beep("hit");
      if(p.hp <= 0) {
        if(p.revive) {
          p.revive = false;
          p.hp = p.maxHp*0.5;
          p.inv = 3;
          floating(p.x,p.y,"復活!","#f1faee");
        } else die();
      }
    }
  });

  // shots
  g.shots.forEach(s => {
    s.x += s.vx*dt; s.y += s.vy*dt; s.life -= dt;
    g.enemies.forEach(e => {
      if(s.life<=0 || s.p<=0) return;
      const rr = s.r + e.r;
      if(dist2(s.x,s.y,e.x,e.y) < rr*rr) {
        e.hp -= s.dmg; s.p--; effect(e.x,e.y,Math.floor(s.dmg),"#fff");
      }
    });
  });
  g.shots = g.shots.filter(s=>s.life>0 && s.p>0 && s.x>-80 && s.x<WORLD_W+80 && s.y>-80 && s.y<WORLD_H+80);

  // dead enemies
  const dead = g.enemies.filter(e=>e.hp<=0);
  dead.forEach(e => {
    g.kills++;
    const gold = Math.floor((e.boss ? 80+g.time/3 : 4+Math.random()*5+g.time/45) * p.goldMul);
    g.runGold += gold; meta.gold += gold; save();
    if(Math.random()<0.2) beep("gold");
    g.score += e.boss ? 7000 : 100+g.time;
    const n = e.boss ? 22 : 1+(Math.random()<0.22?1:0);
    for(let i=0;i<n;i++) g.gems.push({x:e.x+rand(-18,18), y:e.y+rand(-18,18), r:e.boss?6:4, v:e.boss?18:4, pull:false});
    g.floater.push({x:e.x,y:e.y,t:"+"+gold+"G",c:"#ffd76a",life:0.7,a:0});
    // low chance item drop
    if(Math.random() < (e.boss ? 0.65 : 0.035)) spawnItemNearPlayer();
  });
  g.enemies = g.enemies.filter(e=>e.hp>0);

  // gems
  g.gems.forEach(m => {
    const dd = Math.sqrt(dist2(m.x,m.y,p.x,p.y));
    if(dd < p.magnet || m.pull) {
      m.x += (p.x-m.x)*dt*10;
      m.y += (p.y-m.y)*dt*10;
    }
    if(dd < pr+m.r+9) { m.pick = true; gainXp(m.v); }
  });
  g.gems = g.gems.filter(m=>!m.pick);

  // items
  g.items.forEach(it => {
    it.ttl -= dt;
    if(dist2(it.x,it.y,p.x,p.y) < Math.pow(pr+it.r+4,2)) {
      it.pick = true; applyItem(it);
    }
  });
  g.items = g.items.filter(it => !it.pick && it.ttl > 0);

  // effects
  g.fx.forEach(f=>f.a+=dt); g.fx = g.fx.filter(f=>f.a<f.life);
  g.floater.forEach(f=>f.a+=dt); g.floater = g.floater.filter(f=>f.a<f.life);

  updateView();
  hud();
}

function drawTile(c, t, x, y) {
  if(t===0) { c.fillStyle="#2f7d32"; c.fillRect(x,y,TILE,TILE); c.fillStyle="#39963d"; c.fillRect(x+2,y+2,4,4); c.fillStyle="#266c29"; c.fillRect(x+14,y+12,5,5); }
  if(t===1) { c.fillStyle="#8d6e63"; c.fillRect(x,y,TILE,TILE); c.fillStyle="#a1887f"; c.fillRect(x+5,y+5,3,3); c.fillRect(x+14,y+10,4,4); }
  if(t===2) { c.fillStyle="#1d3557"; c.fillRect(x,y,TILE,TILE); c.fillStyle="#457b9d"; c.fillRect(x+3,y+3,18,18); }
  if(t===3) { c.fillStyle="#2f7d32"; c.fillRect(x,y,TILE,TILE); c.fillStyle="#ff99c8"; c.fillRect(x+5,y+5,3,3); c.fillStyle="#bde0fe"; c.fillRect(x+15,y+10,3,3); c.fillStyle="#f1fa8c"; c.fillRect(x+10,y+16,3,3); }
}
function drawObstacle(c, ob, vx, vy) {
  const x = ob.x*TILE - vx, y = ob.y*TILE - vy;
  if(ob.type==="tree") {
    c.fillStyle="#5b3a29"; c.fillRect(x+9,y+12,6,12);
    c.fillStyle="#2d6a4f"; c.fillRect(x+4,y+2,16,12);
    c.fillStyle="#40916c"; c.fillRect(x+2,y+5,20,8);
  } else if(ob.type==="rock") {
    c.fillStyle="#6c757d"; c.fillRect(x+3,y+8,18,12);
    c.fillStyle="#adb5bd"; c.fillRect(x+7,y+6,10,6);
  } else {
    c.fillStyle="#6d6875"; c.fillRect(x,y,ob.w*TILE,ob.h*TILE);
    c.fillStyle="#b8c0c8"; c.fillRect(x+2,y+2,ob.w*TILE-4,ob.h*TILE-4);
    c.fillStyle="#8d99ae"; c.fillRect(x+6,y+6,ob.w*TILE-12,ob.h*TILE-12);
  }
}
function drawSkillIcon(c, def, x, y, size) {
  const s = size;
  c.fillStyle = "#0a0f1c"; c.fillRect(x,y,s,s);
  c.fillStyle = def.color || "#fff";
  // simple pixel-ish icon by kind
  if(def.kind==="projectile") { c.fillRect(x+s*0.18,y+s*0.42,s*0.55,s*0.14); c.fillRect(x+s*0.62,y+s*0.32,s*0.14,s*0.34); }
  else if(def.kind==="orbit") { c.strokeStyle=def.color; c.lineWidth=2; c.beginPath(); c.arc(x+s/2,y+s/2,s*0.26,0,Math.PI*2); c.stroke(); c.fillRect(x+s*0.75,y+s*0.45,4,4); }
  else if(def.kind==="pulse") { c.fillRect(x+s*0.4,y+s*0.2,s*0.2,s*0.6); c.fillRect(x+s*0.2,y+s*0.4,s*0.6,s*0.2); }
  else if(def.kind==="laser") { c.fillRect(x+s*0.12,y+s*0.46,s*0.76,s*0.08); }
  else if(def.kind==="meteor") { c.beginPath(); c.arc(x+s*0.35,y+s*0.35,s*0.16,0,Math.PI*2); c.fill(); c.fillRect(x+s*0.48,y+s*0.48,s*0.24,s*0.1); }
  else if(def.kind==="chain") { c.fillRect(x+s*0.2,y+s*0.25,s*0.12,s*0.12); c.fillRect(x+s*0.42,y+s*0.42,s*0.12,s*0.12); c.fillRect(x+s*0.64,y+s*0.58,s*0.12,s*0.12); }
  else if(def.kind==="mine") { c.fillRect(x+s*0.3,y+s*0.3,s*0.4,s*0.4); c.fillRect(x+s*0.44,y+s*0.12,s*0.12,s*0.18); }
  else if(def.kind==="nova") { c.beginPath(); c.arc(x+s*0.5,y+s*0.5,s*0.18,0,Math.PI*2); c.fill(); c.fillRect(x+s*0.48,y+s*0.12,s*0.04,s*0.76); c.fillRect(x+s*0.12,y+s*0.48,s*0.76,s*0.04); }
  else if(def.kind==="cross") { c.fillRect(x+s*0.44,y+s*0.16,s*0.12,s*0.68); c.fillRect(x+s*0.16,y+s*0.44,s*0.68,s*0.12); }
  else { c.fillRect(x+s*0.3,y+s*0.3,s*0.4,s*0.4); }
}
function drawItem(c, item, vx, vy) {
  const x = item.x - vx, y = item.y - vy;
  c.fillStyle = "#08131f"; c.fillRect(x-8,y-8,16,16);
  c.fillStyle = item.color; c.fillRect(x-6,y-6,12,12);
  c.fillStyle = "#fff"; c.fillRect(x-2,y-2,4,4);
}
function drawEnemy(c, e, vx, vy) {
  const x = e.x - vx, y = e.y - vy;
  c.save(); c.translate(x,y);
  c.fillStyle = e.color;
  if(e.boss) {
    c.beginPath();
    for(let i=0;i<8;i++) {
      let a=i*Math.PI/4 + g.time, rr=e.r*(i%2?0.75:1.15);
      if(i===0) c.moveTo(Math.cos(a)*rr,Math.sin(a)*rr); else c.lineTo(Math.cos(a)*rr,Math.sin(a)*rr);
    }
    c.closePath(); c.fill();
  } else if(e.kind==="tank") {
    c.fillRect(-e.r,-e.r,e.r*2,e.r*2);
  } else {
    c.beginPath(); c.arc(0,0,e.r,0,Math.PI*2); c.fill();
  }
  c.fillStyle = "#000a"; c.fillRect(-e.r,-e.r-8,e.r*2,4);
  c.fillStyle = "#74f5a3"; c.fillRect(-e.r,-e.r-8,e.r*2*(e.hp/e.maxHp),4);
  c.restore();
}
function drawHumanSprite(c, x, y, phase, scale=1) {
  const px = 4*scale;
  const skin = "#f1c27d", white = "#ffffff", black = "#1a1a1a", gold="#ffd76a", blue="#70dcff";
  // wings/auras per phase
  if(phase>=1) {
    c.fillStyle = phase>=3 ? blue : "#cfe8ff";
    c.fillRect(x-4*px,y+2*px,2*px,5*px); c.fillRect(x+6*px,y+2*px,2*px,5*px);
    c.fillStyle = phase>=4 ? "#ff72ce" : gold;
    c.fillRect(x-6*px,y+4*px,2*px,4*px); c.fillRect(x+8*px,y+4*px,2*px,4*px);
  }
  // body base
  c.fillStyle = skin; c.fillRect(x+2*px,y,2*px,2*px); // head
  c.fillStyle = black; c.fillRect(x+1*px,y,1*px,2*px); c.fillRect(x+4*px,y,1*px,2*px);
  c.fillStyle = white; c.fillRect(x+2*px,y+0.5*px,0.5*px,0.5*px); c.fillRect(x+3.5*px,y+0.5*px,0.5*px,0.5*px);
  c.fillStyle = phase>=2 ? gold : white; c.fillRect(x+2*px,y+2*px,2*px,1*px); // collar
  c.fillStyle = phase>=3 ? blue : white; c.fillRect(x+1*px,y+3*px,4*px,3*px); // torso
  c.fillStyle = phase>=4 ? "#ff72ce" : black; c.fillRect(x+1*px,y+6*px,1*px,3*px); c.fillRect(x+4*px,y+6*px,1*px,3*px); // legs
  c.fillStyle = skin; c.fillRect(x,y+3*px,1*px,3*px); c.fillRect(x+5*px,y+3*px,1*px,3*px); // arms
  c.fillStyle = phase>=2 ? gold : "#a8dadc"; c.fillRect(x+6*px,y+3.5*px,3*px,1*px); c.fillRect(x+8*px,y+2.5*px,1*px,3*px); // sword
  if(phase>=3) { c.fillStyle = "#ffffff"; c.fillRect(x+7*px,y+1*px,1*px,1*px); c.fillRect(x+8*px,y+1*px,1*px,1*px); }
  if(phase>=4) { c.fillStyle="#ffd76a"; c.fillRect(x-1*px,y-1*px,8*px,1*px); }
}
function drawBeastSprite(c, x, y, phase, scale=1) {
  const px=4*scale; c.fillStyle="#5c3d2e"; c.fillRect(x+1*px,y+2*px,4*px,4*px); c.fillStyle="#74f5a3"; c.fillRect(x+2*px,y+1*px,2*px,1*px); c.fillRect(x,y+2*px,1*px,2*px); c.fillRect(x+5*px,y+2*px,1*px,2*px); c.fillStyle="#fff"; c.fillRect(x+2*px,y+3*px,1*px,1*px); c.fillRect(x+3*px,y+3*px,1*px,1*px); if(phase>=2) {c.fillStyle="#caffbf"; c.fillRect(x+1*px,y+6*px,4*px,1*px);} }
function drawDragonSprite(c, x, y, phase, scale=1) {
  const px=4*scale; c.fillStyle="#ff6b6b"; c.fillRect(x+1*px,y+2*px,4*px,4*px); c.fillRect(x+5*px,y+3*px,2*px,1*px); c.fillStyle="#ffd6a5"; c.fillRect(x+2*px,y+1*px,1*px,1*px); c.fillRect(x+3*px,y+1*px,1*px,1*px); if(phase>=2) { c.fillStyle="#f77f00"; c.fillRect(x,y+2*px,1*px,3*px); c.fillRect(x+6*px,y+2*px,1*px,3*px); } if(phase>=4) { c.fillStyle="#fff"; c.fillRect(x+7*px,y+3*px,2*px,1*px); } }
function drawPlayer(c, p, vx, vy) {
  const x = p.x - vx, y = p.y - vy;
  c.save();
  if(p.inv > 0) { c.globalAlpha = 0.75 + Math.sin(g.time*15)*0.25; }
  // aura
  if(p.phase) {
    c.strokeStyle = g.race.sub; c.globalAlpha = 0.35; c.lineWidth = 3;
    c.beginPath(); c.arc(x,y,(24+p.phase*8)*p.sizeMul,0,Math.PI*2); c.stroke();
    c.globalAlpha = 1;
  }
  const pxsize = p.sizeMul;
  if(g.race.id==="human") drawHumanSprite(c, x-12*pxsize, y-18*pxsize, p.phase, pxsize);
  else if(g.race.id==="beast") drawBeastSprite(c, x-12*pxsize, y-18*pxsize, p.phase, pxsize);
  else drawDragonSprite(c, x-12*pxsize, y-18*pxsize, p.phase, pxsize);
  c.restore();
}
function drawMiniMap(c) {
  if(!g.player.minimap) return;
  const w = 120, h = 120, x = g.w - w - 10, y = 128;
  c.save();
  c.globalAlpha = 0.92;
  c.fillStyle = "#050814cc"; c.fillRect(x,y,w,h);
  c.strokeStyle = "#ffffff33"; c.strokeRect(x,y,w,h);
  // world base
  c.fillStyle = "#2f7d32"; c.fillRect(x+4,y+4,w-8,h-8);
  c.fillStyle = "#8d6e63";
  c.fillRect(x+4 + (MAP_W/2)*(w-8)/MAP_W - 1, y+4, 2, h-8);
  c.fillRect(x+4, y+4 + (MAP_H/2)*(h-8)/MAP_H - 1, w-8, 2);
  // obstacles
  c.fillStyle = "#6c757d";
  g.map.obstacles.slice(0,300).forEach(ob => {
    const ox = x+4 + ob.x*(w-8)/MAP_W, oy = y+4 + ob.y*(h-8)/MAP_H;
    c.fillRect(ox,oy,Math.max(1,ob.w),Math.max(1,ob.h));
  });
  // items
  c.fillStyle = "#ffe066";
  g.items.forEach(it => {
    const ix = x+4 + it.x*(w-8)/WORLD_W, iy = y+4 + it.y*(h-8)/WORLD_H;
    c.fillRect(ix-1, iy-1, 3, 3);
  });
  // player
  c.fillStyle = "#ff4d6d";
  const px = x+4 + g.player.x*(w-8)/WORLD_W, py = y+4 + g.player.y*(h-8)/WORLD_H;
  c.fillRect(px-2, py-2, 5, 5);
  c.restore();
}
function draw() {
  if(!g) return;
  const c = g.ctx, p = g.player, vx = g.view.x, vy = g.view.y;
  c.clearRect(0,0,g.w,g.h);
  // visible tile bounds
  const sx = Math.floor(vx/TILE), ex = Math.min(MAP_W-1, Math.ceil((vx+g.w)/TILE));
  const sy = Math.floor(vy/TILE), ey = Math.min(MAP_H-1, Math.ceil((vy+g.h)/TILE));
  for(let ty=sy; ty<=ey; ty++) {
    for(let tx=sx; tx<=ex; tx++) drawTile(c, g.map.tiles[ty][tx], tx*TILE-vx, ty*TILE-vy);
  }
  g.map.obstacles.forEach(ob => {
    const ox = ob.x*TILE, oy = ob.y*TILE;
    if(ox+ob.w*TILE < vx || oy+ob.h*TILE < vy || ox > vx+g.w || oy > vy+g.h) return;
    drawObstacle(c, ob, vx, vy);
  });
  // items
  g.items.forEach(it => drawItem(c,it,vx,vy));
  // gems
  g.gems.forEach(m => { c.fillStyle="#70dcff"; c.beginPath(); c.arc(m.x-vx,m.y-vy,m.r,0,Math.PI*2); c.fill(); });
  // shots
  g.shots.forEach(s => { c.fillStyle=s.c; c.beginPath(); c.arc(s.x-vx,s.y-vy,s.r,0,Math.PI*2); c.fill(); });
  // enemies
  g.enemies.forEach(e => drawEnemy(c,e,vx,vy));
  // player
  drawPlayer(c,p,vx,vy);

  // effects
  g.fx.forEach(f => {
    c.save(); c.globalAlpha = 1-f.a/f.life;
    if(f.laser) {
      c.translate(f.x-vx,f.y-vy); c.rotate(f.a2); c.strokeStyle=f.c; c.lineWidth=f.w||22; c.beginPath(); c.moveTo(0,0); c.lineTo(500,0); c.stroke();
    } else if(f.circle) {
      c.strokeStyle=f.c; c.lineWidth=4; c.beginPath(); c.arc(f.x-vx,f.y-vy,f.rr*(f.a/f.life),0,Math.PI*2); c.stroke();
    } else {
      c.fillStyle=f.c; c.font="bold 16px system-ui"; c.textAlign="center"; c.fillText(f.t, f.x-vx, f.y-vy-f.a*40);
    }
    c.restore();
  });
  g.floater.forEach(f => {
    c.save(); c.globalAlpha = 1-f.a/f.life; c.fillStyle=f.c; c.font="bold 14px system-ui"; c.textAlign="center"; c.fillText(f.t, f.x-vx, f.y-vy-f.a*36); c.restore();
  });

  // skill HUD with pixel icons
  const skillList = Object.values(g.skills);
  let bx = 10, by = g.h - 54;
  skillList.slice(0,8).forEach((s, idx) => {
    const def = SKILLS.find(x=>x.id===s.id);
    const x = bx + idx*44;
    c.fillStyle = "#050814cc"; c.fillRect(x,by,40,40); c.strokeStyle="#ffffff22"; c.strokeRect(x,by,40,40);
    drawSkillIcon(c, def, x+4, by+4, 22);
    c.fillStyle = "#fff"; c.font="10px system-ui"; c.textAlign="center"; c.fillText("Lv"+s.lv, x+20, by+34);
  });

  drawMiniMap(c);
}

function hud() {
  const p = g.player;
  $("time").textContent = Math.floor(g.time/60)+":"+String(Math.floor(g.time%60)).padStart(2,"0");
  $("lv").textContent = p.lv;
  $("kills").textContent = fmt(g.kills);
  $("score").textContent = fmt(g.score);
  $("runGold").textContent = fmt(g.runGold);
  $("hpbar").style.width = clamp(p.hp/p.maxHp*100,0,100)+"%";
  $("xpbar").style.width = clamp(p.xp/p.next*100,0,100)+"%";
  $("buffs").innerHTML = g.buffs.map(b => `<span>${ITEMS.find(i=>i.id===b.id)?.name || b.id} ${b.t.toFixed(0)}s</span>`).join("") + (p.revive ? `<span>復活待機</span>` : ``) + (p.minimap ? `<span>ミニマップ</span>` : ``);
}
function loop(now) {
  const dt = Math.min(0.033, (now-last)/1000 || 0);
  last = now;
  safe(() => { update(dt); draw(); });
  if(g && !g.over) raf = requestAnimationFrame(loop);
}
function die() {
  if(!g || g.over) return;
  beep("dead"); stopBgm(); g.over = true; if(raf) cancelAnimationFrame(raf); if(choiceTimer) clearInterval(choiceTimer);
  const p = g.player;
  const score = Math.floor(g.score + g.kills*15 + p.lv*140 + g.time*30 + g.runGold*4);
  const pts = Math.floor(Math.pow(score,0.55) + g.time + p.lv*2);
  meta.pts += pts; meta.best = Math.max(meta.best, score); meta.bestTime = Math.max(meta.bestTime, g.time); meta.bestKills = Math.max(meta.bestKills, g.kills); meta.bestLv = Math.max(meta.bestLv, p.lv); save();
  $("resultText").innerHTML = `<div class="stats"><div><b>スコア</b><span>${fmt(score)}</span></div><div><b>転生pt</b><span>+${fmt(pts)}</span></div><div><b>撃破数</b><span>${fmt(g.kills)}</span></div><div><b>到達Lv</b><span>${fmt(p.lv)}</span></div></div>`;
  $("result").classList.add("active");
}

function spend(id) {
  const u = UPS.find(x=>x.id===id), l = ulv(id), c = Math.floor(u.base*Math.pow(1.45,l));
  if(l>=u.max || meta.pts<c) return;
  meta.pts -= c; meta.spent[id] = l+1; save(); render();
}

function setup() {
  $("goRace").onclick = () => show("race");
  $("goUpgrades").onclick = () => show("upgrades");
  $("goGacha").onclick = () => show("gacha");
  document.querySelectorAll(".back").forEach(b=>b.onclick=()=>show("title"));
  $("start").onclick = startGame;
  $("backTitle").onclick = () => { $("result").classList.remove("active"); g = null; show("title"); };
  $("roll1").onclick = () => roll(1);
  $("roll10").onclick = () => roll(10);
  $("roll100").onclick = () => roll(100);
  $("resetSave").onclick = () => { if(confirm("保存を初期化しますか？")) { localStorage.removeItem(SAVE); load(); render(); } };
  $("toggleSound").onclick = () => { soundOn=!soundOn; meta.sound=soundOn; save(); if(!soundOn) stopBgm(); else beep("lv"); render(); };
  $("pause").onclick = () => { paused=!paused; $("pause").textContent = paused ? "▶" : "II"; last = performance.now(); };

  document.addEventListener("click", e => {
    const r = e.target.closest("[data-race]"); if(r) { selected = r.dataset.race; render(); }
    const u = e.target.closest("[data-up]"); if(u) spend(u.dataset.up);
    const s = e.target.closest("[data-skill]"); if(s) chooseSkill(s.dataset.skill, false);
  });

  addEventListener("keydown", e => keys[e.code] = true);
  addEventListener("keyup", e => keys[e.code] = false);

  const cv = $("cv");
  cv.addEventListener("pointerdown", e => {
    input.active = true; input.x = e.clientX; input.y = e.clientY; cv.setPointerCapture(e.pointerId); $("touchHint").style.opacity=".15"; e.preventDefault();
  });
  cv.addEventListener("pointermove", e => {
    if(!input.active) return;
    const dx = e.clientX-input.x, dy = e.clientY-input.y, l = Math.hypot(dx,dy), dead = 4, max = 54;
    if(l < dead) { input.dx = 0; input.dy = 0; }
    else { input.dx = dx/Math.max(l,max); input.dy = dy/Math.max(l,max); }
    e.preventDefault();
  });
  const end = e => { input.active=false; input.dx=0; input.dy=0; e.preventDefault(); };
  cv.addEventListener("pointerup", end);
  cv.addEventListener("pointercancel", end);

  addEventListener("resize", () => {
    if(!g) return;
    const cv = $("cv"), dpr = Math.max(1, Math.min(2, devicePixelRatio||1));
    g.w = innerWidth; g.h = innerHeight; cv.width = Math.floor(g.w*dpr); cv.height = Math.floor(g.h*dpr); cv.style.width = g.w+"px"; cv.style.height = g.h+"px"; g.ctx.setTransform(dpr,0,0,dpr,0,0); updateView();
  });
}

document.addEventListener("DOMContentLoaded", () => safe(() => { load(); setup(); render(); }));
})();
