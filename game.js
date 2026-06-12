(() => {
"use strict";
const DATA = {"areas": [{"id": "grass", "name": "はじまりの草原", "minLv": 1, "maxEnemies": 1}, {"id": "forest", "name": "黒い森", "minLv": 4, "maxEnemies": 1}, {"id": "cave", "name": "魔石洞窟", "minLv": 8, "maxEnemies": 2}, {"id": "ruins", "name": "古代廃墟", "minLv": 14, "maxEnemies": 2}, {"id": "dragon", "name": "竜の谷", "minLv": 24, "maxEnemies": 3}, {"id": "divine", "name": "白黒虹の神域", "minLv": 40, "maxEnemies": 3}], "enemies": [{"id": "e1", "area": "grass", "name": "スライム", "rare": false, "icon": "🟦", "color": "#43b9ff", "lv": 2, "hp": 37, "atk": 8, "def": 2, "exp": 10, "skill": "スラ技"}, {"id": "e2", "area": "grass", "name": "角ウサギ", "rare": false, "icon": "🐰", "color": "#efe8ff", "lv": 3, "hp": 40, "atk": 9, "def": 2, "exp": 11, "skill": "角ウ技"}, {"id": "e3", "area": "grass", "name": "草原ラット", "rare": false, "icon": "🐀", "color": "#8bd66e", "lv": 4, "hp": 43, "atk": 9, "def": 2, "exp": 12, "skill": "草原技"}, {"id": "e4", "area": "grass", "name": "青羽スライム", "rare": false, "icon": "💧", "color": "#5ad7ff", "lv": 1, "hp": 46, "atk": 10, "def": 2, "exp": 13, "skill": "青羽技"}, {"id": "e5", "area": "grass", "name": "葉っぱインプ", "rare": false, "icon": "🍃", "color": "#74d67a", "lv": 2, "hp": 49, "atk": 11, "def": 2, "exp": 14, "skill": "葉っ技"}, {"id": "e6", "area": "grass", "name": "石ころボア", "rare": false, "icon": "🐗", "color": "#9e805d", "lv": 3, "hp": 51, "atk": 11, "def": 2, "exp": 14, "skill": "石こ技"}, {"id": "e7", "area": "grass", "name": "小牙コボルト", "rare": false, "icon": "👺", "color": "#6ec753", "lv": 4, "hp": 54, "atk": 12, "def": 3, "exp": 15, "skill": "小牙技"}, {"id": "e8", "area": "grass", "name": "野良ミミック", "rare": false, "icon": "🎁", "color": "#b77b4b", "lv": 1, "hp": 57, "atk": 13, "def": 3, "exp": 16, "skill": "野良技"}, {"id": "r9", "area": "grass", "name": "黄金スライム", "rare": true, "rareRank": 0, "icon": "💰", "color": "#e4bc32", "lv": 6, "hp": 360, "atk": 75, "def": 24, "exp": 240, "skill": "黄金奥義"}, {"id": "r10", "area": "grass", "name": "虹角ラビット", "rare": true, "rareRank": 1, "icon": "🌈", "color": "#ff75d1", "lv": 9, "hp": 528, "atk": 110, "def": 35, "exp": 352, "skill": "虹角奥義"}, {"id": "r11", "area": "grass", "name": "草原の小王", "rare": true, "rareRank": 2, "icon": "👑", "color": "#e6e6ff", "lv": 12, "hp": 696, "atk": 145, "def": 46, "exp": 464, "skill": "草原奥義"}, {"id": "e12", "area": "forest", "name": "影狼", "rare": false, "icon": "🦉", "color": "#374264", "lv": 4, "hp": 124, "atk": 28, "def": 7, "exp": 35, "skill": "影狼技"}, {"id": "e13", "area": "forest", "name": "毒蛾", "rare": false, "icon": "🪱", "color": "#314c25", "lv": 5, "hp": 127, "atk": 29, "def": 7, "exp": 36, "skill": "毒蛾技"}, {"id": "e14", "area": "forest", "name": "マッシュビースト", "rare": false, "icon": "🍄", "color": "#3d335a", "lv": 6, "hp": 130, "atk": 29, "def": 7, "exp": 37, "skill": "マッ技"}, {"id": "e15", "area": "forest", "name": "夜目フクロウ", "rare": false, "icon": "🐺", "color": "#2e203c", "lv": 7, "hp": 133, "atk": 30, "def": 7, "exp": 38, "skill": "夜目技"}, {"id": "e16", "area": "forest", "name": "黒蔦ワーム", "rare": false, "icon": "🦗", "color": "#315829", "lv": 4, "hp": 135, "atk": 31, "def": 7, "exp": 38, "skill": "黒蔦技"}, {"id": "e17", "area": "forest", "name": "影キノコ", "rare": false, "icon": "🗿", "color": "#45606a", "lv": 5, "hp": 138, "atk": 31, "def": 7, "exp": 39, "skill": "影キ技"}, {"id": "e18", "area": "forest", "name": "月牙ジャッカル", "rare": false, "icon": "🦇", "color": "#4868a8", "lv": 6, "hp": 141, "atk": 32, "def": 8, "exp": 40, "skill": "月牙技"}, {"id": "e19", "area": "forest", "name": "黒葉マンティス", "rare": false, "icon": "👻", "color": "#4cc8ff", "lv": 7, "hp": 144, "atk": 32, "def": 8, "exp": 41, "skill": "黒葉技"}, {"id": "r20", "area": "forest", "name": "月影フェンリル", "rare": true, "rareRank": 0, "icon": "💰", "color": "#e4bc32", "lv": 9, "hp": 624, "atk": 130, "def": 41, "exp": 416, "skill": "月影奥義"}, {"id": "r21", "area": "forest", "name": "毒蝶女王", "rare": true, "rareRank": 1, "icon": "🌈", "color": "#ff75d1", "lv": 12, "hp": 792, "atk": 165, "def": 52, "exp": 528, "skill": "毒蝶奥義"}, {"id": "r22", "area": "forest", "name": "黒森の古霊", "rare": true, "rareRank": 2, "icon": "👑", "color": "#e6e6ff", "lv": 15, "hp": 960, "atk": 200, "def": 64, "exp": 640, "skill": "黒森奥義"}, {"id": "e23", "area": "cave", "name": "魔石ゴーレム", "rare": false, "icon": "🕷️", "color": "#4b3155", "lv": 11, "hp": 211, "atk": 48, "def": 12, "exp": 60, "skill": "魔石技"}, {"id": "e24", "area": "cave", "name": "水晶コウモリ", "rare": false, "icon": "🦇", "color": "#624232", "lv": 8, "hp": 214, "atk": 48, "def": 12, "exp": 61, "skill": "水晶技"}, {"id": "e25", "area": "cave", "name": "ゴーストウィスプ", "rare": false, "icon": "🛡️", "color": "#3c465c", "lv": 9, "hp": 217, "atk": 49, "def": 12, "exp": 62, "skill": "ゴー技"}, {"id": "e26", "area": "cave", "name": "鉱石クラブ", "rare": false, "icon": "🔮", "color": "#6a78ff", "lv": 10, "hp": 219, "atk": 50, "def": 12, "exp": 62, "skill": "鉱石技"}, {"id": "e27", "area": "cave", "name": "結晶スネーク", "rare": false, "icon": "💀", "color": "#d6d6d6", "lv": 11, "hp": 222, "atk": 50, "def": 12, "exp": 63, "skill": "結晶技"}, {"id": "e28", "area": "cave", "name": "洞窟オーガ", "rare": false, "icon": "🗿", "color": "#6a675b", "lv": 8, "hp": 225, "atk": 51, "def": 12, "exp": 64, "skill": "洞窟技"}, {"id": "e29", "area": "cave", "name": "魔石スパイダー", "rare": false, "icon": "🤖", "color": "#536274", "lv": 9, "hp": 228, "atk": 52, "def": 13, "exp": 65, "skill": "魔石技"}, {"id": "e30", "area": "cave", "name": "硫黄バット", "rare": false, "icon": "⚙️", "color": "#4b5570", "lv": 10, "hp": 231, "atk": 52, "def": 13, "exp": 66, "skill": "硫黄技"}, {"id": "r31", "area": "cave", "name": "純魔石ゴーレム", "rare": true, "rareRank": 0, "icon": "💰", "color": "#e4bc32", "lv": 13, "hp": 888, "atk": 185, "def": 59, "exp": 592, "skill": "純魔奥義"}, {"id": "r32", "area": "cave", "name": "星晶バット", "rare": true, "rareRank": 1, "icon": "🌈", "color": "#ff75d1", "lv": 16, "hp": 1056, "atk": 220, "def": 70, "exp": 704, "skill": "星晶奥義"}, {"id": "r33", "area": "cave", "name": "地底の宝王", "rare": true, "rareRank": 2, "icon": "👑", "color": "#e6e6ff", "lv": 19, "hp": 1224, "atk": 254, "def": 81, "exp": 816, "skill": "地底奥義"}, {"id": "e34", "area": "ruins", "name": "古代兵", "rare": false, "icon": "🐲", "color": "#b5aaff", "lv": 16, "hp": 298, "atk": 68, "def": 17, "exp": 85, "skill": "古代技"}, {"id": "e35", "area": "ruins", "name": "ルーンウィスプ", "rare": false, "icon": "🦎", "color": "#ce533a", "lv": 17, "hp": 301, "atk": 68, "def": 17, "exp": 86, "skill": "ルー技"}, {"id": "e36", "area": "ruins", "name": "骸骨剣士", "rare": false, "icon": "🦅", "color": "#384e8f", "lv": 14, "hp": 303, "atk": 69, "def": 17, "exp": 86, "skill": "骸骨技"}, {"id": "e37", "area": "ruins", "name": "碑文ゴーレム", "rare": false, "icon": "🐕", "color": "#5d2424", "lv": 15, "hp": 306, "atk": 70, "def": 17, "exp": 87, "skill": "碑文技"}, {"id": "e38", "area": "ruins", "name": "壊れた守護者", "rare": false, "icon": "🔥", "color": "#d04b2f", "lv": 16, "hp": 309, "atk": 70, "def": 17, "exp": 88, "skill": "壊れ技"}, {"id": "e39", "area": "ruins", "name": "古代機兵", "rare": false, "icon": "🐉", "color": "#7b5d52", "lv": 17, "hp": 312, "atk": 71, "def": 17, "exp": 89, "skill": "古代技"}, {"id": "e40", "area": "ruins", "name": "呪印スカル", "rare": false, "icon": "🪽", "color": "#2e5f70", "lv": 14, "hp": 315, "atk": 72, "def": 18, "exp": 90, "skill": "呪印技"}, {"id": "e41", "area": "ruins", "name": "赤錆ナイト", "rare": false, "icon": "👼", "color": "#f5f5ff", "lv": 15, "hp": 317, "atk": 72, "def": 18, "exp": 90, "skill": "赤錆技"}, {"id": "r42", "area": "ruins", "name": "古代将軍", "rare": true, "rareRank": 0, "icon": "💰", "color": "#e4bc32", "lv": 19, "hp": 1152, "atk": 240, "def": 76, "exp": 768, "skill": "古代奥義"}, {"id": "r43", "area": "ruins", "name": "禁呪ウィスプ", "rare": true, "rareRank": 1, "icon": "🌈", "color": "#ff75d1", "lv": 22, "hp": 1320, "atk": 275, "def": 88, "exp": 880, "skill": "禁呪奥義"}, {"id": "r44", "area": "ruins", "name": "失われた王影", "rare": true, "rareRank": 2, "icon": "👑", "color": "#e6e6ff", "lv": 25, "hp": 1488, "atk": 310, "def": 99, "exp": 992, "skill": "失わ奥義"}, {"id": "e45", "area": "dragon", "name": "レッサードラゴン", "rare": false, "icon": "✨", "color": "#f8f8ff", "lv": 25, "hp": 385, "atk": 88, "def": 22, "exp": 110, "skill": "レッ技"}, {"id": "e46", "area": "dragon", "name": "虹鱗ドレイク", "rare": false, "icon": "🪽", "color": "#222", "lv": 26, "hp": 387, "atk": 88, "def": 22, "exp": 110, "skill": "虹鱗技"}, {"id": "e47", "area": "dragon", "name": "炎尾リザード", "rare": false, "icon": "🔷", "color": "#b5f4ff", "lv": 27, "hp": 390, "atk": 89, "def": 22, "exp": 111, "skill": "炎尾技"}, {"id": "e48", "area": "dragon", "name": "雷鳴ホーク", "rare": false, "icon": "🌑", "color": "#1c1a30", "lv": 24, "hp": 393, "atk": 89, "def": 22, "exp": 112, "skill": "雷鳴技"}, {"id": "e49", "area": "dragon", "name": "竜血ハウンド", "rare": false, "icon": "🟦", "color": "#43b9ff", "lv": 25, "hp": 396, "atk": 90, "def": 22, "exp": 113, "skill": "竜血技"}, {"id": "e50", "area": "dragon", "name": "火山サラマンダー", "rare": false, "icon": "🐰", "color": "#efe8ff", "lv": 26, "hp": 399, "atk": 91, "def": 22, "exp": 114, "skill": "火山技"}, {"id": "e51", "area": "dragon", "name": "翼竜の幼体", "rare": false, "icon": "🐀", "color": "#8bd66e", "lv": 27, "hp": 401, "atk": 91, "def": 22, "exp": 114, "skill": "翼竜技"}, {"id": "e52", "area": "dragon", "name": "風切りワイバーン", "rare": false, "icon": "💧", "color": "#5ad7ff", "lv": 24, "hp": 404, "atk": 92, "def": 23, "exp": 115, "skill": "風切技"}, {"id": "r53", "area": "dragon", "name": "白竜の雛", "rare": true, "rareRank": 0, "icon": "💰", "color": "#e4bc32", "lv": 29, "hp": 1416, "atk": 295, "def": 94, "exp": 944, "skill": "白竜奥義"}, {"id": "r54", "area": "dragon", "name": "虹炎ドレイク", "rare": true, "rareRank": 1, "icon": "🌈", "color": "#ff75d1", "lv": 32, "hp": 1584, "atk": 330, "def": 105, "exp": 1056, "skill": "虹炎奥義"}, {"id": "r55", "area": "dragon", "name": "竜谷の覇者", "rare": true, "rareRank": 2, "icon": "👑", "color": "#e6e6ff", "lv": 35, "hp": 1752, "atk": 365, "def": 116, "exp": 1168, "skill": "竜谷奥義"}, {"id": "e56", "area": "divine", "name": "虚無天使", "rare": false, "icon": "🎁", "color": "#b77b4b", "lv": 40, "hp": 471, "atk": 107, "def": 26, "exp": 134, "skill": "虚無技"}, {"id": "e57", "area": "divine", "name": "神の欠片", "rare": false, "icon": "🐺", "color": "#30204f", "lv": 41, "hp": 474, "atk": 108, "def": 27, "exp": 135, "skill": "神の技"}, {"id": "e58", "area": "divine", "name": "氷晶精霊", "rare": false, "icon": "🦋", "color": "#54327a", "lv": 42, "hp": 477, "atk": 109, "def": 27, "exp": 136, "skill": "氷晶技"}, {"id": "e59", "area": "divine", "name": "腐敗トレント", "rare": false, "icon": "🍄", "color": "#a66048", "lv": 43, "hp": 480, "atk": 109, "def": 27, "exp": 137, "skill": "腐敗技"}, {"id": "e60", "area": "divine", "name": "白光の欠片", "rare": false, "icon": "🦉", "color": "#374264", "lv": 40, "hp": 483, "atk": 110, "def": 27, "exp": 138, "skill": "白光技"}, {"id": "e61", "area": "divine", "name": "黒翼の使徒", "rare": false, "icon": "🪱", "color": "#314c25", "lv": 41, "hp": 485, "atk": 111, "def": 27, "exp": 138, "skill": "黒翼技"}, {"id": "e62", "area": "divine", "name": "虹晶スフィア", "rare": false, "icon": "🍄", "color": "#3d335a", "lv": 42, "hp": 488, "atk": 111, "def": 27, "exp": 139, "skill": "虹晶技"}, {"id": "e63", "area": "divine", "name": "終末の影", "rare": false, "icon": "🐺", "color": "#2e203c", "lv": 43, "hp": 491, "atk": 112, "def": 28, "exp": 140, "skill": "終末技"}, {"id": "r64", "area": "divine", "name": "白黒虹の幻影", "rare": true, "rareRank": 0, "icon": "💰", "color": "#e4bc32", "lv": 45, "hp": 1680, "atk": 350, "def": 112, "exp": 1120, "skill": "白黒奥義"}, {"id": "r65", "area": "divine", "name": "虚無熾天使", "rare": true, "rareRank": 1, "icon": "🌈", "color": "#ff75d1", "lv": 48, "hp": 1848, "atk": 385, "def": 123, "exp": 1232, "skill": "虚無奥義"}, {"id": "r66", "area": "divine", "name": "神域の観測者", "rare": true, "rareRank": 2, "icon": "👑", "color": "#e6e6ff", "lv": 51, "hp": 2016, "atk": 420, "def": 134, "exp": 1344, "skill": "神域奥義"}]};
const SAVE_KEY="maseki_rebuild_v1";
const $=id=>document.getElementById(id);

const state = loadState() || {
  area:"grass", target:0, fever:0, feverActive:false, sound:false,
  hero:{name:"白黒虹の剣士",lv:1,exp:0,next:30,hp:120,maxHp:120,mp:40,maxMp:40,atk:18,def:5,stones:0,gold:0,potion:5,equip:{weapon:null,armor:null,acc:null},skills:["虹斬り"]},
  ally:{joined:true,name:"白黒虹の女性",lv:1,exp:0,next:30,hp:95,maxHp:95,mp:55,maxMp:55,atk:13,def:4,equip:{weapon:null,armor:null,acc:null},skills:["虹光弾"]},
  inventory:{}, materials:{}, kills:{}, rareKills:0, enemies:[]
};

const ITEMS=[
{id:"w1",name:"鉄の剣",slot:"weapon",price:100,stat:{atk:12},fx:{}},
{id:"w2",name:"白黒虹の剣",slot:"weapon",price:900,stat:{atk:70,maxMp:20},fx:{damage:.15,learn:.04}},
{id:"w3",name:"希少狩りの剣",slot:"weapon",price:2500,stat:{atk:135},fx:{rare:.05,damage:.08}},
{id:"w4",name:"三連虹刃",slot:"weapon",price:7000,stat:{atk:380},fx:{multi:1,damage:.12}},
{id:"a1",name:"旅人の服",slot:"armor",price:80,stat:{def:8,maxHp:40},fx:{}},
{id:"a2",name:"経験のローブ",slot:"armor",price:1800,stat:{def:55,maxMp:120},fx:{exp:.5}},
{id:"a3",name:"白黒虹の鎧",slot:"armor",price:6500,stat:{def:280,maxHp:2000},fx:{damage:.12,exp:.35}},
{id:"c1",name:"魔石の護符",slot:"acc",price:500,stat:{atk:20,def:20},fx:{absorb:.2}},
{id:"c2",name:"レア王の冠",slot:"acc",price:9000,stat:{atk:500,def:300},fx:{rare:.1,exp:.3}},
{id:"c3",name:"経験倍増の宝珠",slot:"acc",price:14000,stat:{maxMp:900},fx:{exp:1.0}},
{id:"potion",name:"回復薬セット",price:150,type:"potion"}
];

const SKILLS={
"虹斬り":{mp:5,power:1.8,targets:1},
"虹光弾":{mp:7,power:1.5,targets:2},
"白黒虹連撃":{mp:22,power:2.8,targets:3}
};

let audioCtx=null, feverTimer=null, holdTimer=null, holdInterval=null;

function loadState(){try{return JSON.parse(localStorage.getItem(SAVE_KEY)||"null")}catch{return null}}
function save(){localStorage.setItem(SAVE_KEY,JSON.stringify(state));toast("保存しました");log("保存しました","good")}
function reset(){if(confirm("最初からやり直しますか？")){localStorage.removeItem(SAVE_KEY);location.reload()}}
function fmt(n){n=Math.floor(n||0); if(n<10000)return String(n); if(n<1e8)return (n/1e4).toFixed(1)+"万"; return (n/1e8).toFixed(1)+"億"}
function area(){return DATA.areas.find(a=>a.id===state.area)||DATA.areas[0]}
function areaEnemies(){return DATA.enemies.filter(e=>e.area===state.area&&!e.rare)}
function areaRares(){return DATA.enemies.filter(e=>e.area===state.area&&e.rare)}
function total(ch){let t={maxHp:ch.maxHp,maxMp:ch.maxMp,atk:ch.atk,def:ch.def};["weapon","armor","acc"].forEach(s=>{const it=item(ch.equip[s]); if(it&&it.stat)Object.entries(it.stat).forEach(([k,v])=>t[k]=(t[k]||0)+v)});return t}
function effects(){const e={rare:0,exp:0,damage:0,multi:0,absorb:0,learn:0};[state.hero,state.ally].forEach(ch=>["weapon","armor","acc"].forEach(s=>{const it=item(ch.equip[s]);if(it&&it.fx)Object.entries(it.fx).forEach(([k,v])=>e[k]=(e[k]||0)+v)}));return e}
function item(id){return ITEMS.find(i=>i.id===id)}
function spawnGroup(){
  const a=area(), count = state.hero.lv<8?1:state.hero.lv<18?Math.min(2,a.maxEnemies):Math.min(3,a.maxEnemies);
  state.enemies=[];
  for(let i=0;i<count;i++){
    const rare=pickRare();
    const base=rare||pick(areaEnemies());
    const scale=1+Math.max(0,state.hero.lv-a.minLv)*.10+i*.08;
    state.enemies.push({...base,uid:Date.now()+"_"+i+"_"+Math.random(),hp:Math.floor(base.hp*scale),maxHp:Math.floor(base.hp*scale),atk:Math.floor(base.atk*scale),def:Math.floor(base.def*scale),exp:Math.floor(base.exp*scale)});
  }
  state.target=0;
  log(`${a.name}：敵${state.enemies.length}体が現れた${state.enemies.some(e=>e.rare)?"！レア出現！":""}`,state.enemies.some(e=>e.rare)?"rare":"");
  render();
}
function pickRare(){
  const rares=areaRares(), fx=effects(), probs=[.10,.05,.03].map(p=>Math.min(.8,p+fx.rare));
  for(let i=0;i<rares.length;i++){if(Math.random()<probs[i])return rares[i]}
  return null;
}
function pick(arr){return arr[Math.floor(Math.random()*arr.length)]}
function alive(){return state.enemies.filter(e=>e.hp>0)}
function target(){const a=alive(); return a[Math.min(state.target,Math.max(0,a.length-1))]}
function doAttack(){if(state.feverActive)return; const e=target(); if(!e)return spawnGroup(); actorAnim("hero","attack"); damage([e],calcDamage(state.hero,1),"攻撃"); if(alive().length) enemyTurn(); render()}
function doSkill(){if(state.feverActive)return; const sk=SKILLS["虹斬り"], fx=effects(); if(state.hero.mp<sk.mp)return log("MP不足","bad"); state.hero.mp-=sk.mp; actorAnim("hero","skill"); const cnt=Math.min(alive().length,sk.targets+(fx.multi||0)); damage(pickTargets(cnt),calcDamage(state.hero,sk.power),"虹斬り"); if(alive().length) enemyTurn(); render()}
function allyAction(){
  if(!alive().length)return;
  const sk=SKILLS["虹光弾"];
  if(state.ally.mp>=sk.mp){state.ally.mp-=sk.mp; actorAnim("ally","skill"); damage(pickTargets(2),calcDamage(state.ally,sk.power),"仲間の虹光弾")}
  else {actorAnim("ally","attack"); damage([target()],calcDamage(state.ally,1),"仲間の攻撃")}
}
function pickTargets(n){const t=target(); const rest=alive().filter(e=>e!==t); return [t,...rest].slice(0,n)}
function calcDamage(ch,power){const fx=effects(), t=total(ch); return Math.max(1,Math.floor((t.atk*power)*(1+fx.damage)*(0.9+Math.random()*0.25)))}
function damage(list,amount,label){
  list.forEach(e=>{if(!e)return; const d=Math.max(1,amount-Math.floor(e.def*.35)); e.hp=Math.max(0,e.hp-d); log(`${label}！ ${e.name}に${fmt(d)}ダメージ`);});
  if(!alive().length) victory();
}
function enemyTurn(){
  alive().forEach(e=>{
    const tgt=Math.random()<.7?state.hero:state.ally, tt=total(tgt);
    const d=Math.max(1,Math.floor(e.atk*(.8+Math.random()*.35))-Math.floor(tt.def*.45));
    tgt.hp=Math.max(0,tgt.hp-d);
    log(`${e.name}の攻撃。${tgt.name}に${fmt(d)}ダメージ`,"bad");
  });
  if(state.hero.hp<=0){state.hero.hp=Math.floor(total(state.hero).maxHp*.5); state.hero.stones=Math.floor(state.hero.stones*.9); log("主人公が倒れた……魔石10%を失い復帰","bad")}
  if(state.ally.hp<=0){state.ally.hp=Math.floor(total(state.ally).maxHp*.5); log("仲間が倒れたが復帰","bad")}
}
function victory(){
  const fx=effects(); let exp=0, stones=0;
  state.enemies.forEach(e=>{
    state.kills[e.id]=(state.kills[e.id]||0)+1; if(e.rare)state.rareKills++;
    exp+=Math.floor(e.exp*(1+fx.exp)); stones+=stoneDrop(e.rare);
    addMat(e.name+"素材",e.rare?2:1);
    if(Math.random()<(.10+(fx.learn||0))) learn(e.skill);
  });
  state.hero.exp+=exp; state.ally.exp+=Math.floor(exp*.75); state.hero.stones+=stones; state.fever=Math.min(100,state.fever+12+state.enemies.length*4+(state.enemies.some(e=>e.rare)?20:0));
  log(`撃破！ EXP${fmt(exp)} / 魔石${fmt(stones)}個 / フィーバー上昇`,"good");
  levelUp(state.hero); levelUp(state.ally);
  setTimeout(()=>{ if(!state.feverActive) spawnGroup(); },600);
}
function stoneDrop(rare){let n=1; if(Math.random()<.18)n++; if(Math.random()<.05)n+=Math.floor(Math.random()*3)+1; if(rare)n+=3+Math.floor(Math.random()*8); return n}
function levelUp(ch){while(ch.exp>=ch.next){ch.exp-=ch.next; ch.lv++; ch.next=Math.floor(ch.next*1.35+ch.lv*16); ch.maxHp=Math.floor(ch.maxHp*1.17+20); ch.maxMp=Math.floor(ch.maxMp*1.12+8); ch.atk=Math.floor(ch.atk*1.15+5); ch.def=Math.floor(ch.def*1.12+3); ch.hp=total(ch).maxHp; ch.mp=total(ch).maxMp; log(`${ch.name} Lv${ch.lv}！`,"rare")}}
function learn(name){if(!name||SKILLS[name])return; SKILLS[name]={mp:10,power:1.8,targets:Math.random()<.35?3:Math.random()<.55?2:1}; if(!state.hero.skills.includes(name)&&state.hero.skills.length<9)state.hero.skills.push(name); log(`技「${name}」を習得！`,"rare")}
function heal(){if(state.hero.potion<=0)return log("回復薬がない","bad"); state.hero.potion--; [state.hero,state.ally].forEach(ch=>{ch.hp=Math.min(total(ch).maxHp,ch.hp+Math.floor(total(ch).maxHp*.4))}); log("回復薬で全員回復","good"); render()}
function absorb(all=false){if(state.hero.stones<=0)return log("魔石がない","bad"); const n=all?state.hero.stones:Math.max(1,Math.floor(state.hero.stones*.1)); state.hero.stones-=n; const scale=absorbScale(state.hero.absorbed||0)*(1+effects().absorb); state.hero.absorbed=(state.hero.absorbed||0)+n; const hp=Math.max(1,Math.floor(n*3*scale)), mp=Math.max(1,Math.floor(n*.8*scale)), atk=Math.max(1,Math.floor(n*.35*scale)), def=Math.max(1,Math.floor(n*.22*scale)); state.hero.maxHp+=hp; state.hero.maxMp+=mp; state.hero.atk+=atk; state.hero.def+=def; log(`魔石${fmt(n)}個吸収。効率${Math.round(scale*100)}% HP+${fmt(hp)} 攻撃+${fmt(atk)}`,"rare"); render()}
function absorbScale(t){if(t<100)return 1;if(t<1000)return .55;if(t<10000)return .22;if(t<100000)return .08;if(t<1000000)return .025;return .008}
function fever(){
  if(state.fever<100||state.feverActive)return;
  state.fever=0; state.feverActive=true; log("フィーバー発動！一定時間、高速で敵を倒しまくる！","rare"); toast("FEVER!");
  let left=18;
  feverTimer=setInterval(()=>{
    if(left--<=0){clearInterval(feverTimer); state.feverActive=false; log("フィーバー終了","good"); spawnGroup(); return;}
    spawnGroup();
    const reward=alive().reduce((s,e)=>s+e.exp,0);
    const stones=alive().reduce((s,e)=>s+stoneDrop(e.rare),0);
    state.hero.exp+=Math.floor(reward*(1+effects().exp)); state.ally.exp+=Math.floor(reward*.6); state.hero.stones+=stones;
    state.enemies.forEach(e=>{state.kills[e.id]=(state.kills[e.id]||0)+1;if(e.rare)state.rareKills++;addMat(e.name+"素材",1)});
    levelUp(state.hero); levelUp(state.ally);
    state.enemies=[];
    render();
  },260);
}
function addMat(n,a){state.materials[n]=(state.materials[n]||0)+a}
function buy(id){const it=item(id); if(!it)return; if(it.type==="potion"){if(state.hero.gold<it.price)return log("G不足","bad"); state.hero.gold-=it.price; state.hero.potion+=3; log("回復薬+3","good"); render(); return;} if(state.hero.gold<it.price)return log("G不足","bad"); state.hero.gold-=it.price; state.inventory[id]=true; log(`${it.name}購入`,"good"); render()}
function equip(who,id){const ch=who==="ally"?state.ally:state.hero, it=item(id); if(!it||!it.slot)return; if(!state.inventory[id])state.inventory[id]=true; ch.equip[it.slot]=id; ch.hp=Math.min(ch.hp,total(ch).maxHp); ch.mp=Math.min(ch.mp,total(ch).maxMp); log(`${ch.name}：${it.name}を装備`,"good"); render()}
function sellStones(){const n=Math.min(100,state.hero.stones); if(n<=0)return; state.hero.stones-=n; state.hero.gold+=n*8; log(`魔石${n}個売却`,"good"); render()}
function actorAnim(id,cls){const el=$(id==="ally"?"allySprite":"heroSprite"); el.classList.remove("attack","skill"); void el.offsetWidth; el.classList.add(cls); setTimeout(()=>el.classList.remove(cls),550)}
function art(e){return `<div class="enemy ${e.hp>0&&alive()[state.target]===e?"target":""}" data-uid="${e.uid}"><div class="enemyName">${e.rare?'<span class="enemyRare">レア!</span> ':''}${e.name} Lv${e.lv}</div><div class="monsterArt" style="background:radial-gradient(circle at 50% 35%,rgba(255,255,255,.38),transparent 22%),linear-gradient(145deg,${e.color},#111827)">${e.icon}</div><div class="hpText">HP ${fmt(e.hp)}/${fmt(e.maxHp)}</div></div>`}
function render(){
  const a=area(), ht=total(state.hero), at=total(state.ally), fx=effects();
  $("hudArea").textContent=a.name; $("hudLv").textContent=state.hero.lv; $("hudGold").textContent=fmt(state.hero.gold); $("hudStones").textContent=fmt(state.hero.stones);
  $("feverLabel").textContent=`${Math.floor(state.fever)}/100`; $("feverFill").style.width=Math.min(100,state.fever)+"%"; $("feverBtn").disabled=state.fever<100||state.feverActive;
  $("enemyLine").innerHTML=state.enemies.map(art).join("");
  document.querySelectorAll(".enemy").forEach(el=>el.onclick=()=>{const uid=el.dataset.uid; const idx=alive().findIndex(e=>e.uid===uid); if(idx>=0){state.target=idx; render();}});
  $("targetSelect").innerHTML=alive().map((e,i)=>`<option value="${i}" ${i===state.target?"selected":""}>${i+1}: ${e.name}</option>`).join("");
  $("heroName").textContent=`${state.hero.name} Lv${state.hero.lv}`; $("allyName").textContent=`${state.ally.name} Lv${state.ally.lv}`;
  $("heroBars").innerHTML=bars(state.hero,ht); $("allyBars").innerHTML=bars(state.ally,at);
  $("heroMini").innerHTML=`攻撃 ${fmt(ht.atk)} / 防御 ${fmt(ht.def)} / 薬 ${state.hero.potion}`;
  $("allyMini").innerHTML=`攻撃 ${fmt(at.atk)} / 防御 ${fmt(at.def)} / 白黒虹の女性`;
  renderAreas(); renderGrowth(); renderEquip(); renderAlly(); renderGallery();
}
function bars(ch,t){return bar("HP",ch.hp,t.maxHp)+bar("MP",ch.mp,t.maxMp)+bar("EXP",ch.exp,ch.next)}
function bar(n,v,m){return `<div class="barLabel">${n} ${fmt(v)}/${fmt(m)}</div><div class="bar"><div class="fill" style="width:${Math.max(0,Math.min(100,v/Math.max(1,m)*100))}%"></div></div>`}
function renderAreas(){$("areaList").innerHTML=DATA.areas.map(a=>`<div class="card"><h3>${a.name}</h3><p>解放Lv ${a.minLv} / 最大敵数 ${a.maxEnemies}</p><button ${state.hero.lv<a.minLv?"disabled":""} onclick="GAME.move('${a.id}')">移動</button></div>`).join("")}
function renderGrowth(){const who=document.querySelector(".miniTab.active")?.dataset.growth||"hero", ch=who==="ally"?state.ally:state.hero, t=total(ch);$("growthPanel").innerHTML=`<div class="card"><h3>${ch.name}</h3>${row("Lv",ch.lv)}${row("HP",fmt(ch.hp)+"/"+fmt(t.maxHp))}${row("MP",fmt(ch.mp)+"/"+fmt(t.maxMp))}${row("攻撃",fmt(t.atk))}${row("防御",fmt(t.def))}${row("装備",equipText(ch))}</div><div class="card"><h3>特殊効果合計</h3>${row("レア率",Math.round(effects().rare*100)+"%")}${row("経験値",Math.round(effects().exp*100)+"%")}${row("ダメージ",Math.round(effects().damage*100)+"%")}${row("複数攻撃","+"+effects().multi+"体")}${row("吸収効率",Math.round(effects().absorb*100)+"%")}</div>`}
function renderEquip(){const who=document.querySelector(".equipTab.active")?.dataset.equiptarget||"hero";$("equipPanel").innerHTML=`<div class="cardBtns"><button onclick="GAME.sellStones()">魔石100個売却</button></div>`+ITEMS.map(it=>{const owned=!!state.inventory[it.id]; return `<div class="card"><h3>${it.name}${owned?"【所持】":""}</h3><p>${it.price}G<br>${desc(it)}</p><div class="cardBtns"><button onclick="GAME.buy('${it.id}')">購入</button>${it.slot?`<button ${!owned?"disabled":""} onclick="GAME.equip('${who}','${it.id}')">装備</button>`:""}</div></div>`}).join("")}
function renderAlly(){$("allyPanel").innerHTML=`<div class="card"><h3>白黒虹の女性</h3><p>初期加入。主人公と同様に装備・育成対象を切り替え可能。</p>${row("役割","2体攻撃の虹光弾で援護")}${row("装備",equipText(state.ally))}</div>`}
function renderGallery(){$("gallery").innerHTML=DATA.enemies.map(e=>art({...e,uid:e.id,hp:e.hp,maxHp:e.hp})).join("")}
function row(a,b){return `<div class="row"><span>${a}</span><b>${b}</b></div>`}
function desc(it){const stat=it.stat?Object.entries(it.stat).map(([k,v])=>`${label(k)}+${v}`).join(" / "):"回復薬+3"; const fx=it.fx?Object.entries(it.fx).map(([k,v])=>`${fxLabel(k)}${k==="multi"?"+"+v:"+"+Math.round(v*100)+"%"}`).join(" / "):""; return stat+(fx?`<br>特殊: ${fx}`:"")}
function equipText(ch){return ["weapon","armor","acc"].map(s=>item(ch.equip[s])?.name||"なし").join(" / ")}
function label(k){return {maxHp:"HP",maxMp:"MP",atk:"攻撃",def:"防御"}[k]||k}
function fxLabel(k){return {rare:"レア率",exp:"経験値",damage:"ダメージ",multi:"攻撃数",absorb:"吸収効率",learn:"技習得"}[k]||k}
function log(t,c=""){const d=document.createElement("div");d.className=c;d.textContent=t;$("log").prepend(d);while($("log").children.length>120)$("log").removeChild($("log").lastChild)}
function toast(t){$("toast").textContent=t;$("toast").classList.remove("hidden");setTimeout(()=>$("toast").classList.add("hidden"),1300)}
function setupSound(){if(!audioCtx)audioCtx=new (window.AudioContext||window.webkitAudioContext)()}
function tone(f,d=.08){if(!state.sound)return;setupSound();const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.frequency.value=f;g.gain.value=.04;o.connect(g);g.connect(audioCtx.destination);o.start();g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+d);o.stop(audioCtx.currentTime+d)}
function bindHold(el,fn){el.addEventListener("pointerdown",()=>{clearTimeout(holdTimer);clearInterval(holdInterval);holdTimer=setTimeout(()=>holdInterval=setInterval(fn,180),420)});["pointerup","pointerleave","pointercancel"].forEach(ev=>el.addEventListener(ev,()=>{clearTimeout(holdTimer);clearInterval(holdInterval)}))}
function bind(){
  $("attackBtn").onclick=()=>{doAttack(); allyAction(); tone(220)}; bindHold($("attackBtn"),()=>{doAttack(); allyAction()});
  $("skillBtn").onclick=()=>{doSkill(); allyAction(); tone(440)}; bindHold($("skillBtn"),()=>{doSkill(); allyAction()});
  $("healBtn").onclick=heal; $("absorbBtn").onclick=()=>absorb(false); $("absorbAllBtn").onclick=()=>absorb(true); bindHold($("absorbAllBtn"),()=>absorb(true));
  $("nextBtn").onclick=spawnGroup; $("feverBtn").onclick=fever; $("saveBtn").onclick=save; $("loadBtn").onclick=()=>location.reload(); $("resetBtn").onclick=reset;
  $("soundBtn").onclick=()=>{state.sound=!state.sound;$("soundBtn").textContent=state.sound?"音OFF":"音ON"; if(state.sound){setupSound();tone(660,.12)}};
  $("targetSelect").onchange=e=>{state.target=Number(e.target.value);render()};
  document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));document.querySelectorAll(".panel").forEach(x=>x.classList.remove("active"));b.classList.add("active");$("panel-"+b.dataset.tab).classList.add("active");render()});
  document.querySelectorAll(".miniTab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".miniTab").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderGrowth()});
  document.querySelectorAll(".equipTab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".equipTab").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderEquip()});
}
window.GAME={move:id=>{const a=DATA.areas.find(x=>x.id===id);if(state.hero.lv<a.minLv)return;state.area=id;spawnGroup()},buy,equip,sellStones};
bind(); log("作り直し版開始。敵は1体ずつ表示、複数時は3体まで同時表示。"); spawnGroup(); render();
})();
