(() => {
"use strict";

const DATA = {"areas": [{"id": "grass", "name": "はじまりの草原", "minLv": 1, "maxEnemies": 1, "bg": ["#295a37", "#8ac46f"]}, {"id": "forest", "name": "黒い森", "minLv": 4, "maxEnemies": 1, "bg": ["#152819", "#4f7d42"]}, {"id": "cave", "name": "魔石洞窟", "minLv": 8, "maxEnemies": 2, "bg": ["#172340", "#557ab2"]}, {"id": "ruins", "name": "古代廃墟", "minLv": 14, "maxEnemies": 2, "bg": ["#3c3528", "#8e7a54"]}, {"id": "dragon", "name": "竜の谷", "minLv": 24, "maxEnemies": 3, "bg": ["#47211b", "#b65f36"]}, {"id": "divine", "name": "白黒虹の神域", "minLv": 40, "maxEnemies": 3, "bg": ["#f2f2f2", "#202020"]}], "enemies": [{"id": "e1", "area": "grass", "name": "スライム", "rare": false, "icon": "🟦", "color": "#3bb8ff", "lv": 2, "hp": 42, "atk": 9, "def": 2, "exp": 12, "skill": "スラ技"}, {"id": "e2", "area": "grass", "name": "角ウサギ", "rare": false, "icon": "🐰", "color": "#e8e8ff", "lv": 3, "hp": 45, "atk": 10, "def": 2, "exp": 13, "skill": "角ウ技"}, {"id": "e3", "area": "grass", "name": "草原ラット", "rare": false, "icon": "🐀", "color": "#7bc45e", "lv": 4, "hp": 48, "atk": 10, "def": 3, "exp": 14, "skill": "草原技"}, {"id": "e4", "area": "grass", "name": "青羽スライム", "rare": false, "icon": "💧", "color": "#56d6ff", "lv": 1, "hp": 51, "atk": 11, "def": 3, "exp": 15, "skill": "青羽技"}, {"id": "e5", "area": "grass", "name": "葉っぱインプ", "rare": false, "icon": "🍃", "color": "#65c96b", "lv": 2, "hp": 54, "atk": 12, "def": 3, "exp": 16, "skill": "葉っ技"}, {"id": "e6", "area": "grass", "name": "石ころボア", "rare": false, "icon": "🐗", "color": "#a37c4a", "lv": 3, "hp": 56, "atk": 12, "def": 3, "exp": 17, "skill": "石こ技"}, {"id": "e7", "area": "grass", "name": "小牙コボルト", "rare": false, "icon": "👺", "color": "#57bb5c", "lv": 4, "hp": 59, "atk": 13, "def": 3, "exp": 17, "skill": "小牙技"}, {"id": "e8", "area": "grass", "name": "野良ミミック", "rare": false, "icon": "🎁", "color": "#b98a39", "lv": 1, "hp": 62, "atk": 14, "def": 3, "exp": 18, "skill": "野良技"}, {"id": "e9", "area": "grass", "name": "草角ビースト", "rare": false, "icon": "🦌", "color": "#79b96a", "lv": 2, "hp": 65, "atk": 14, "def": 4, "exp": 19, "skill": "草角技"}, {"id": "r10", "area": "grass", "name": "黄金スライム", "rare": true, "rank": 0, "icon": "💰", "color": "#e5bc31", "lv": 6, "hp": 390, "atk": 84, "def": 24, "exp": 270, "skill": "黄金奥義"}, {"id": "r11", "area": "grass", "name": "虹角ラビット", "rare": true, "rank": 1, "icon": "🌈", "color": "#ff72cf", "lv": 9, "hp": 585, "atk": 126, "def": 36, "exp": 405, "skill": "虹角奥義"}, {"id": "r12", "area": "grass", "name": "草原の小王", "rare": true, "rank": 2, "icon": "👑", "color": "#e8e8ff", "lv": 12, "hp": 780, "atk": 168, "def": 48, "exp": 540, "skill": "草原奥義"}, {"id": "e13", "area": "forest", "name": "影狼", "rare": false, "icon": "🦉", "color": "#435070", "lv": 5, "hp": 142, "atk": 32, "def": 8, "exp": 42, "skill": "影狼技"}, {"id": "e14", "area": "forest", "name": "毒蛾", "rare": false, "icon": "🌿", "color": "#2e4428", "lv": 6, "hp": 145, "atk": 32, "def": 9, "exp": 43, "skill": "毒蛾技"}, {"id": "e15", "area": "forest", "name": "マッシュビースト", "rare": false, "icon": "🍄", "color": "#3f385f", "lv": 7, "hp": 148, "atk": 33, "def": 9, "exp": 44, "skill": "マッ技"}, {"id": "e16", "area": "forest", "name": "夜目フクロウ", "rare": false, "icon": "🐺", "color": "#33233f", "lv": 4, "hp": 150, "atk": 33, "def": 9, "exp": 45, "skill": "夜目技"}, {"id": "e17", "area": "forest", "name": "黒蔦ワーム", "rare": false, "icon": "🦗", "color": "#456730", "lv": 5, "hp": 153, "atk": 34, "def": 9, "exp": 46, "skill": "黒蔦技"}, {"id": "e18", "area": "forest", "name": "影キノコ", "rare": false, "icon": "🦌", "color": "#6f9c8a", "lv": 6, "hp": 156, "atk": 35, "def": 9, "exp": 46, "skill": "影キ技"}, {"id": "e19", "area": "forest", "name": "月牙ジャッカル", "rare": false, "icon": "🗿", "color": "#51606e", "lv": 7, "hp": 159, "atk": 35, "def": 9, "exp": 47, "skill": "月牙技"}, {"id": "e20", "area": "forest", "name": "黒葉マンティス", "rare": false, "icon": "🦇", "color": "#526dc0", "lv": 4, "hp": 162, "atk": 36, "def": 10, "exp": 48, "skill": "黒葉技"}, {"id": "e21", "area": "forest", "name": "霧隠れ鹿", "rare": false, "icon": "👻", "color": "#5bd6ff", "lv": 5, "hp": 164, "atk": 37, "def": 10, "exp": 49, "skill": "霧隠技"}, {"id": "r22", "area": "forest", "name": "月影フェンリル", "rare": true, "rank": 0, "icon": "💰", "color": "#e5bc31", "lv": 9, "hp": 676, "atk": 145, "def": 41, "exp": 468, "skill": "月影奥義"}, {"id": "r23", "area": "forest", "name": "毒蝶女王", "rare": true, "rank": 1, "icon": "🌈", "color": "#ff72cf", "lv": 12, "hp": 871, "atk": 187, "def": 53, "exp": 603, "skill": "毒蝶奥義"}, {"id": "r24", "area": "forest", "name": "黒森の古霊", "rare": true, "rank": 2, "icon": "👑", "color": "#e8e8ff", "lv": 15, "hp": 1066, "atk": 229, "def": 65, "exp": 737, "skill": "黒森奥義"}, {"id": "e25", "area": "cave", "name": "魔石ゴーレム", "rare": false, "icon": "🕷️", "color": "#52345e", "lv": 9, "hp": 242, "atk": 54, "def": 15, "exp": 72, "skill": "魔石技"}, {"id": "e26", "area": "cave", "name": "水晶コウモリ", "rare": false, "icon": "🦇", "color": "#7a4b37", "lv": 10, "hp": 244, "atk": 55, "def": 15, "exp": 73, "skill": "水晶技"}, {"id": "e27", "area": "cave", "name": "ゴーストウィスプ", "rare": false, "icon": "🦎", "color": "#6e6950", "lv": 11, "hp": 247, "atk": 55, "def": 15, "exp": 74, "skill": "ゴー技"}, {"id": "e28", "area": "cave", "name": "鉱石クラブ", "rare": false, "icon": "🛡️", "color": "#3d465d", "lv": 8, "hp": 250, "atk": 56, "def": 15, "exp": 75, "skill": "鉱石技"}, {"id": "e29", "area": "cave", "name": "結晶スネーク", "rare": false, "icon": "🔮", "color": "#6d75ff", "lv": 9, "hp": 253, "atk": 56, "def": 15, "exp": 75, "skill": "結晶技"}, {"id": "e30", "area": "cave", "name": "洞窟オーガ", "rare": false, "icon": "💀", "color": "#d6d6d6", "lv": 10, "hp": 256, "atk": 57, "def": 16, "exp": 76, "skill": "洞窟技"}, {"id": "e31", "area": "cave", "name": "魔石スパイダー", "rare": false, "icon": "🗿", "color": "#777160", "lv": 11, "hp": 258, "atk": 58, "def": 16, "exp": 77, "skill": "魔石技"}, {"id": "e32", "area": "cave", "name": "硫黄バット", "rare": false, "icon": "🤖", "color": "#596474", "lv": 8, "hp": 261, "atk": 58, "def": 16, "exp": 78, "skill": "硫黄技"}, {"id": "e33", "area": "cave", "name": "地下リザード", "rare": false, "icon": "⚙️", "color": "#525970", "lv": 9, "hp": 264, "atk": 59, "def": 16, "exp": 79, "skill": "地下技"}, {"id": "r34", "area": "cave", "name": "純魔石ゴーレム", "rare": true, "rank": 0, "icon": "💰", "color": "#e5bc31", "lv": 13, "hp": 962, "atk": 207, "def": 59, "exp": 666, "skill": "純魔奥義"}, {"id": "r35", "area": "cave", "name": "星晶バット", "rare": true, "rank": 1, "icon": "🌈", "color": "#ff72cf", "lv": 16, "hp": 1157, "atk": 249, "def": 71, "exp": 801, "skill": "星晶奥義"}, {"id": "r36", "area": "cave", "name": "地底の宝王", "rare": true, "rank": 2, "icon": "👑", "color": "#e8e8ff", "lv": 19, "hp": 1352, "atk": 291, "def": 83, "exp": 936, "skill": "地底奥義"}, {"id": "e37", "area": "ruins", "name": "古代兵", "rare": false, "icon": "🐉", "color": "#5b36ad", "lv": 15, "hp": 341, "atk": 76, "def": 21, "exp": 102, "skill": "古代技"}, {"id": "e38", "area": "ruins", "name": "ルーンウィスプ", "rare": false, "icon": "🐲", "color": "#d5d0ff", "lv": 16, "hp": 344, "atk": 77, "def": 21, "exp": 103, "skill": "ルー技"}, {"id": "e39", "area": "ruins", "name": "骸骨剣士", "rare": false, "icon": "🦎", "color": "#d4543c", "lv": 17, "hp": 347, "atk": 78, "def": 21, "exp": 104, "skill": "骸骨技"}, {"id": "e40", "area": "ruins", "name": "碑文ゴーレム", "rare": false, "icon": "🦅", "color": "#354c8f", "lv": 14, "hp": 350, "atk": 78, "def": 21, "exp": 105, "skill": "碑文技"}, {"id": "e41", "area": "ruins", "name": "壊れた守護者", "rare": false, "icon": "🐕", "color": "#6a2525", "lv": 15, "hp": 352, "atk": 79, "def": 22, "exp": 105, "skill": "壊れ技"}, {"id": "e42", "area": "ruins", "name": "古代機兵", "rare": false, "icon": "🔥", "color": "#d4512e", "lv": 16, "hp": 355, "atk": 80, "def": 22, "exp": 106, "skill": "古代技"}, {"id": "e43", "area": "ruins", "name": "呪印スカル", "rare": false, "icon": "🐉", "color": "#806050", "lv": 17, "hp": 358, "atk": 80, "def": 22, "exp": 107, "skill": "呪印技"}, {"id": "e44", "area": "ruins", "name": "赤錆ナイト", "rare": false, "icon": "🪽", "color": "#315f78", "lv": 14, "hp": 361, "atk": 81, "def": 22, "exp": 108, "skill": "赤錆技"}, {"id": "e45", "area": "ruins", "name": "金眼ファントム", "rare": false, "icon": "💀", "color": "#e8e8e8", "lv": 15, "hp": 364, "atk": 81, "def": 22, "exp": 109, "skill": "金眼技"}, {"id": "r46", "area": "ruins", "name": "古代将軍", "rare": true, "rank": 0, "icon": "💰", "color": "#e5bc31", "lv": 19, "hp": 1248, "atk": 268, "def": 76, "exp": 864, "skill": "古代奥義"}, {"id": "r47", "area": "ruins", "name": "禁呪ウィスプ", "rare": true, "rank": 1, "icon": "🌈", "color": "#ff72cf", "lv": 22, "hp": 1443, "atk": 310, "def": 88, "exp": 999, "skill": "禁呪奥義"}, {"id": "r48", "area": "ruins", "name": "失われた王影", "rare": true, "rank": 2, "icon": "👑", "color": "#e8e8ff", "lv": 25, "hp": 1638, "atk": 352, "def": 100, "exp": 1134, "skill": "失わ奥義"}, {"id": "e49", "area": "dragon", "name": "レッサードラゴン", "rare": false, "icon": "🌳", "color": "#f3f3ff", "lv": 25, "hp": 441, "atk": 99, "def": 27, "exp": 132, "skill": "レッ技"}, {"id": "e50", "area": "dragon", "name": "虹鱗ドレイク", "rare": false, "icon": "✨", "color": "#1f1f22", "lv": 26, "hp": 444, "atk": 99, "def": 27, "exp": 133, "skill": "虹鱗技"}, {"id": "e51", "area": "dragon", "name": "炎尾リザード", "rare": false, "icon": "🪽", "color": "#baf3ff", "lv": 27, "hp": 446, "atk": 100, "def": 27, "exp": 134, "skill": "炎尾技"}, {"id": "e52", "area": "dragon", "name": "雷鳴ホーク", "rare": false, "icon": "🔷", "color": "#15192b", "lv": 24, "hp": 449, "atk": 101, "def": 28, "exp": 134, "skill": "雷鳴技"}, {"id": "e53", "area": "dragon", "name": "竜血ハウンド", "rare": false, "icon": "🌑", "color": "#e87233", "lv": 25, "hp": 452, "atk": 101, "def": 28, "exp": 135, "skill": "竜血技"}, {"id": "e54", "area": "dragon", "name": "火山サラマンダー", "rare": false, "icon": "🔥", "color": "#3bb8ff", "lv": 26, "hp": 455, "atk": 102, "def": 28, "exp": 136, "skill": "火山技"}, {"id": "e55", "area": "dragon", "name": "翼竜の幼体", "rare": false, "icon": "🟦", "color": "#e8e8ff", "lv": 27, "hp": 458, "atk": 103, "def": 28, "exp": 137, "skill": "翼竜技"}, {"id": "e56", "area": "dragon", "name": "風切りワイバーン", "rare": false, "icon": "🐰", "color": "#7bc45e", "lv": 24, "hp": 460, "atk": 103, "def": 28, "exp": 138, "skill": "風切技"}, {"id": "e57", "area": "dragon", "name": "竜骨スカル", "rare": false, "icon": "🐀", "color": "#56d6ff", "lv": 25, "hp": 463, "atk": 104, "def": 28, "exp": 139, "skill": "竜骨技"}, {"id": "r58", "area": "dragon", "name": "白竜の雛", "rare": true, "rank": 0, "icon": "💰", "color": "#e5bc31", "lv": 29, "hp": 1534, "atk": 330, "def": 94, "exp": 1062, "skill": "白竜奥義"}, {"id": "r59", "area": "dragon", "name": "虹炎ドレイク", "rare": true, "rank": 1, "icon": "🌈", "color": "#ff72cf", "lv": 32, "hp": 1729, "atk": 372, "def": 106, "exp": 1197, "skill": "虹炎奥義"}, {"id": "r60", "area": "dragon", "name": "竜谷の覇者", "rare": true, "rank": 2, "icon": "👑", "color": "#e8e8ff", "lv": 35, "hp": 1924, "atk": 414, "def": 118, "exp": 1332, "skill": "竜谷奥義"}, {"id": "e61", "area": "divine", "name": "虚無天使", "rare": false, "icon": "👺", "color": "#b98a39", "lv": 41, "hp": 540, "atk": 121, "def": 33, "exp": 162, "skill": "虚無技"}, {"id": "e62", "area": "divine", "name": "神の欠片", "rare": false, "icon": "🎁", "color": "#79b96a", "lv": 42, "hp": 543, "atk": 122, "def": 33, "exp": 163, "skill": "神の技"}, {"id": "e63", "area": "divine", "name": "氷晶精霊", "rare": false, "icon": "🦌", "color": "#2c2448", "lv": 43, "hp": 546, "atk": 122, "def": 34, "exp": 163, "skill": "氷晶技"}, {"id": "e64", "area": "divine", "name": "腐敗トレント", "rare": false, "icon": "🐺", "color": "#653682", "lv": 40, "hp": 549, "atk": 123, "def": 34, "exp": 164, "skill": "腐敗技"}, {"id": "e65", "area": "divine", "name": "白光の欠片", "rare": false, "icon": "🦋", "color": "#9c6745", "lv": 41, "hp": 552, "atk": 124, "def": 34, "exp": 165, "skill": "白光技"}, {"id": "e66", "area": "divine", "name": "黒翼の使徒", "rare": false, "icon": "🍄", "color": "#435070", "lv": 42, "hp": 554, "atk": 124, "def": 34, "exp": 166, "skill": "黒翼技"}, {"id": "e67", "area": "divine", "name": "虹晶スフィア", "rare": false, "icon": "🦉", "color": "#2e4428", "lv": 43, "hp": 557, "atk": 125, "def": 34, "exp": 167, "skill": "虹晶技"}, {"id": "e68", "area": "divine", "name": "終末の影", "rare": false, "icon": "🌿", "color": "#3f385f", "lv": 40, "hp": 560, "atk": 126, "def": 35, "exp": 168, "skill": "終末技"}, {"id": "e69", "area": "divine", "name": "原初の火種", "rare": false, "icon": "🍄", "color": "#33233f", "lv": 41, "hp": 563, "atk": 126, "def": 35, "exp": 168, "skill": "原初技"}, {"id": "r70", "area": "divine", "name": "白黒虹の幻影", "rare": true, "rank": 0, "icon": "💰", "color": "#e5bc31", "lv": 45, "hp": 1820, "atk": 392, "def": 112, "exp": 1260, "skill": "白黒奥義"}, {"id": "r71", "area": "divine", "name": "虚無熾天使", "rare": true, "rank": 1, "icon": "🌈", "color": "#ff72cf", "lv": 48, "hp": 2015, "atk": 434, "def": 124, "exp": 1395, "skill": "虚無奥義"}, {"id": "r72", "area": "divine", "name": "神域の観測者", "rare": true, "rank": 2, "icon": "👑", "color": "#e8e8ff", "lv": 51, "hp": 2210, "atk": 476, "def": 136, "exp": 1530, "skill": "神域奥義"}]};
const SAVE_KEY = "maseki_rebuild_v11";
const $ = (id) => document.getElementById(id);

const DEFAULT_STATE = () => ({
  area: "grass",
  target: 0,
  fever: 0,
  feverActive: false,
  sound: false,
  activePanel: "battle",
  growthTarget: "hero",
  equipTarget: "hero",
  hero: { name:"白黒虹の剣士", lv:1, exp:0, next:30, hp:120, maxHp:120, mp:40, maxMp:40, atk:18, def:5, stones:0, gold:0, potion:5, absorbed:0, equip:{weapon:null, armor:null, acc:null}, skills:["虹斬り"] },
  ally: { joined:true, name:"白黒虹の女性", lv:1, exp:0, next:30, hp:95, maxHp:95, mp:55, maxMp:55, atk:13, def:4, equip:{weapon:null, armor:null, acc:null}, skills:["虹光弾"] },
  inventory: {},
  materials: {},
  kills: {},
  rareKills: 0,
  enemies: []
});

const ITEMS = [
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

const SKILLS = {
  "虹斬り": { mp:5, power:1.8, targets:1 },
  "虹光弾": { mp:7, power:1.5, targets:2 },
  "白黒虹連撃": { mp:22, power:2.8, targets:3 }
};

let state = loadState();
let holdTimer = null;
let holdInterval = null;
let audioCtx = null;
let feverTimer = null;

function loadState(){
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return DEFAULT_STATE();
    return Object.assign(DEFAULT_STATE(), JSON.parse(raw));
  } catch {
    return DEFAULT_STATE();
  }
}

function save(){
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  log("保存しました。", "good");
  toast("保存しました");
}

function reset(){
  if (!confirm("初期化しますか？")) return;
  localStorage.removeItem(SAVE_KEY);
  state = DEFAULT_STATE();
  log("初期化しました。");
  spawnGroup();
  render();
}

function fmt(n){
  n = Math.floor(Number(n) || 0);
  if (n < 10000) return String(n);
  if (n < 100000000) return (n/10000).toFixed(1) + "万";
  return (n/100000000).toFixed(1) + "億";
}

function area(){
  return DATA.areas.find(a => a.id === state.area) || DATA.areas[0];
}

function listNormal(){
  return DATA.enemies.filter(e => e.area === state.area && !e.rare);
}

function listRare(){
  return DATA.enemies.filter(e => e.area === state.area && e.rare);
}

function pick(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function item(id){
  return ITEMS.find(i => i.id === id) || null;
}

function total(ch){
  const t = { maxHp:ch.maxHp, maxMp:ch.maxMp, atk:ch.atk, def:ch.def };
  ["weapon","armor","acc"].forEach(slot => {
    const it = item(ch.equip[slot]);
    if (!it || !it.stat) return;
    Object.entries(it.stat).forEach(([k,v]) => t[k] = (t[k] || 0) + v);
  });
  return t;
}

function effects(){
  const e = { rare:0, exp:0, damage:0, multi:0, absorb:0, learn:0 };
  [state.hero, state.ally].forEach(ch => {
    ["weapon","armor","acc"].forEach(slot => {
      const it = item(ch.equip[slot]);
      if (!it || !it.fx) return;
      Object.entries(it.fx).forEach(([k,v]) => e[k] = (e[k] || 0) + v);
    });
  });
  return e;
}

function enemyCount(){
  const a = area();
  if (state.hero.lv < 8) return 1;
  if (state.hero.lv < 18) return Math.min(2, a.maxEnemies);
  return Math.min(3, a.maxEnemies);
}

function pickRare(){
  const fx = effects();
  const rares = listRare();
  const probs = [0.10, 0.05, 0.03].map(p => Math.min(0.80, p + fx.rare));
  for (let i = 0; i < rares.length; i++) {
    if (Math.random() < probs[i]) return rares[i];
  }
  return null;
}

function cloneEnemy(base, idx){
  const a = area();
  const scale = 1 + Math.max(0, state.hero.lv - a.minLv) * 0.10 + idx * 0.08;
  return {
    ...base,
    uid: Date.now() + "_" + idx + "_" + Math.random(),
    hp: Math.floor(base.hp * scale),
    maxHp: Math.floor(base.hp * scale),
    atk: Math.floor(base.atk * scale),
    def: Math.floor(base.def * scale),
    exp: Math.floor(base.exp * scale)
  };
}

function spawnGroup(){
  const count = enemyCount();
  state.enemies = [];
  for (let i = 0; i < count; i++) {
    const rare = pickRare();
    const base = rare || pick(listNormal());
    state.enemies.push(cloneEnemy(base, i));
  }
  state.target = 0;
  log(`${area().name}：敵${state.enemies.length}体が現れた${state.enemies.some(e=>e.rare) ? "！レア出現！" : ""}`, state.enemies.some(e=>e.rare) ? "rare" : "");
  render();
}

function alive(){
  return state.enemies.filter(e => e.hp > 0);
}

function target(){
  const a = alive();
  if (!a.length) return null;
  return a[Math.min(state.target, a.length - 1)];
}

function calcDamage(ch, power){
  const t = total(ch);
  const fx = effects();
  return Math.max(1, Math.floor(t.atk * power * (1 + fx.damage) * (0.9 + Math.random()*0.25)));
}

function damage(list, amount, label){
  list.forEach(e => {
    if (!e || e.hp <= 0) return;
    const d = Math.max(1, amount - Math.floor(e.def * 0.35));
    e.hp = Math.max(0, e.hp - d);
    log(`${label}！ ${e.name}に${fmt(d)}ダメージ。`);
  });
  if (!alive().length) victory();
}

function pickTargets(count){
  const first = target();
  if (!first) return [];
  const rest = alive().filter(e => e !== first);
  return [first, ...rest].slice(0, count);
}

function doAttack(){
  if (state.feverActive) return;
  const e = target();
  if (!e) return spawnGroup();
  actorAnim("hero", "attack");
  damage([e], calcDamage(state.hero, 1), "攻撃");
  if (alive().length) {
    allyAction();
    if (alive().length) enemyTurn();
  }
  tone(220);
  render();
}

function doSkill(){
  if (state.feverActive) return;
  const sk = SKILLS["虹斬り"];
  if (state.hero.mp < sk.mp) {
    log("MP不足。", "bad");
    return render();
  }
  state.hero.mp -= sk.mp;
  actorAnim("hero", "skill");
  const count = Math.min(alive().length, sk.targets + (effects().multi || 0));
  damage(pickTargets(count), calcDamage(state.hero, sk.power), "虹斬り");
  if (alive().length) {
    allyAction();
    if (alive().length) enemyTurn();
  }
  tone(440);
  render();
}

function allyAction(){
  const sk = SKILLS["虹光弾"];
  if (!alive().length) return;
  if (state.ally.mp >= sk.mp) {
    state.ally.mp -= sk.mp;
    actorAnim("ally", "skill");
    damage(pickTargets(Math.min(2, alive().length)), calcDamage(state.ally, sk.power), "仲間の虹光弾");
  } else {
    actorAnim("ally", "attack");
    damage([target()], calcDamage(state.ally, 1), "仲間の攻撃");
  }
}

function enemyTurn(){
  const hTotal = total(state.hero);
  const aTotal = total(state.ally);
  alive().forEach(e => {
    const tgt = Math.random() < 0.7 ? state.hero : state.ally;
    const tt = tgt === state.hero ? hTotal : aTotal;
    const d = Math.max(1, Math.floor(e.atk * (0.8 + Math.random()*0.35)) - Math.floor(tt.def*0.45));
    tgt.hp = Math.max(0, tgt.hp - d);
    log(`${e.name}の攻撃。${tgt.name}に${fmt(d)}ダメージ。`, "bad");
  });
  if (state.hero.hp <= 0) {
    state.hero.hp = Math.floor(total(state.hero).maxHp * 0.5);
    state.hero.stones = Math.floor(state.hero.stones * 0.9);
    log("主人公が倒れた……魔石10%を失い復帰。", "bad");
  }
  if (state.ally.hp <= 0) {
    state.ally.hp = Math.floor(total(state.ally).maxHp * 0.5);
    log("仲間が倒れたが復帰。", "bad");
  }
}

function stoneDrop(isRare){
  let n = 1;
  if (Math.random() < 0.18) n += 1;
  if (Math.random() < 0.05) n += 1 + Math.floor(Math.random()*3);
  if (isRare) n += 3 + Math.floor(Math.random()*8);
  return n;
}

function victory(){
  const fx = effects();
  let exp = 0, stones = 0;
  const defeated = [...state.enemies];
  defeated.forEach(e => {
    state.kills[e.id] = (state.kills[e.id] || 0) + 1;
    if (e.rare) state.rareKills += 1;
    exp += Math.floor(e.exp * (1 + fx.exp));
    stones += stoneDrop(e.rare);
    addMat(e.name + "素材", e.rare ? 2 : 1);
    if (Math.random() < (0.10 + (fx.learn || 0))) learn(e.skill);
  });
  state.hero.exp += exp;
  state.ally.exp += Math.floor(exp * 0.75);
  state.hero.stones += stones;
  state.fever = Math.min(100, state.fever + 12 + defeated.length*4 + (defeated.some(e=>e.rare) ? 20 : 0));
  log(`撃破！ EXP${fmt(exp)} / 魔石${fmt(stones)}個 / フィーバー上昇。`, "good");
  levelUp(state.hero);
  levelUp(state.ally);
  setTimeout(() => {
    if (!state.feverActive) spawnGroup();
  }, 600);
}

function levelUp(ch){
  while (ch.exp >= ch.next) {
    ch.exp -= ch.next;
    ch.lv += 1;
    ch.next = Math.floor(ch.next * 1.35 + ch.lv * 16);
    ch.maxHp = Math.floor(ch.maxHp * 1.17 + 20);
    ch.maxMp = Math.floor(ch.maxMp * 1.12 + 8);
    ch.atk = Math.floor(ch.atk * 1.15 + 5);
    ch.def = Math.floor(ch.def * 1.12 + 3);
    ch.hp = total(ch).maxHp;
    ch.mp = total(ch).maxMp;
    log(`${ch.name} Lv${ch.lv}！`, "rare");
  }
}

function learn(name){
  if (!name || SKILLS[name]) return;
  SKILLS[name] = { mp:10, power:1.8, targets: Math.random() < 0.35 ? 3 : (Math.random() < 0.55 ? 2 : 1) };
  if (!state.hero.skills.includes(name) && state.hero.skills.length < 9) state.hero.skills.push(name);
  log(`技「${name}」を習得！`, "rare");
}

function heal(){
  if (state.hero.potion <= 0) {
    log("回復薬がない。", "bad");
    return;
  }
  state.hero.potion -= 1;
  [state.hero, state.ally].forEach(ch => {
    ch.hp = Math.min(total(ch).maxHp, ch.hp + Math.floor(total(ch).maxHp * 0.4));
  });
  log("回復薬で全員回復。", "good");
  render();
}

function absorb(all=false){
  if (state.hero.stones <= 0) {
    log("魔石がない。", "bad");
    return;
  }
  const n = all ? state.hero.stones : Math.max(1, Math.floor(state.hero.stones * 0.1));
  state.hero.stones -= n;
  const before = state.hero.absorbed || 0;
  const scale = absorbScale(before) * (1 + effects().absorb);
  state.hero.absorbed = before + n;
  const hp = Math.max(1, Math.floor(n * 3 * scale));
  const mp = Math.max(1, Math.floor(n * 0.8 * scale));
  const atk = Math.max(1, Math.floor(n * 0.35 * scale));
  const def = Math.max(1, Math.floor(n * 0.22 * scale));
  state.hero.maxHp += hp;
  state.hero.maxMp += mp;
  state.hero.atk += atk;
  state.hero.def += def;
  log(`魔石${fmt(n)}個吸収。効率${Math.round(scale*100)}%。HP+${fmt(hp)} 攻撃+${fmt(atk)}。`, "rare");
  render();
}

function absorbScale(t){
  if (t < 100) return 1;
  if (t < 1000) return 0.55;
  if (t < 10000) return 0.22;
  if (t < 100000) return 0.08;
  if (t < 1000000) return 0.025;
  return 0.008;
}

function fever(){
  if (state.fever < 100 || state.feverActive) return;
  state.fever = 0;
  state.feverActive = true;
  log("フィーバー発動！高速で敵を倒しまくる！", "rare");
  toast("FEVER!");
  let left = 18;
  clearInterval(feverTimer);
  feverTimer = setInterval(() => {
    if (left-- <= 0) {
      clearInterval(feverTimer);
      state.feverActive = false;
      log("フィーバー終了。", "good");
      spawnGroup();
      return;
    }
    spawnGroup();
    const defeated = [...state.enemies];
    const exp = defeated.reduce((s,e) => s + e.exp, 0);
    const stones = defeated.reduce((s,e) => s + stoneDrop(e.rare), 0);
    state.hero.exp += Math.floor(exp * (1 + effects().exp));
    state.ally.exp += Math.floor(exp * 0.6);
    state.hero.stones += stones;
    defeated.forEach(e => {
      state.kills[e.id] = (state.kills[e.id] || 0) + 1;
      if (e.rare) state.rareKills += 1;
      addMat(e.name + "素材", 1);
    });
    levelUp(state.hero);
    levelUp(state.ally);
    state.enemies = [];
    render();
  }, 260);
}

function addMat(n,a){
  state.materials[n] = (state.materials[n] || 0) + a;
}

function buy(id){
  const it = item(id);
  if (!it) return;
  if (state.hero.gold < it.price) {
    log("G不足。", "bad");
    return;
  }
  state.hero.gold -= it.price;
  if (it.type === "potion") {
    state.hero.potion += 3;
    log("回復薬+3。", "good");
  } else {
    state.inventory[id] = true;
    log(`${it.name}購入。`, "good");
  }
  render();
}

function equip(who,id){
  const it = item(id);
  if (!it || !it.slot) return;
  if (!state.inventory[id]) {
    log("未所持です。", "bad");
    return;
  }
  const ch = who === "ally" ? state.ally : state.hero;
  ch.equip[it.slot] = id;
  ch.hp = Math.min(ch.hp, total(ch).maxHp);
  ch.mp = Math.min(ch.mp, total(ch).maxMp);
  log(`${ch.name}：${it.name}を装備。`, "good");
  render();
}

function sellStones(){
  const n = Math.min(100, state.hero.stones);
  if (n <= 0) {
    log("売る魔石がない。", "bad");
    return;
  }
  state.hero.stones -= n;
  state.hero.gold += n * 8;
  log(`魔石${n}個売却。`, "good");
  render();
}

function actorAnim(id, cls){
  const el = id === "ally" ? $("allySprite") : $("heroSprite");
  if (!el) return;
  el.classList.remove("attack","skill");
  void el.offsetWidth;
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), 550);
}

function enemyHtml(e, gallery=false){
  const isTarget = !gallery && target() === e;
  return `<div class="enemyCard ${isTarget ? "target" : ""}" data-uid="${e.uid || e.id}">
    <div class="enemyName">${e.rare ? '<span class="enemyRare">レア!</span> ' : ""}${e.name} Lv${e.lv}</div>
    <div class="monsterArt" style="background:radial-gradient(circle at 50% 35%,rgba(255,255,255,.38),transparent 22%),linear-gradient(145deg,${e.color},#111827)">${e.icon}</div>
    <div class="hpText">HP ${fmt(e.hp)}/${fmt(e.maxHp || e.hp)}</div>
  </div>`;
}

function render(){
  const a = area();
  const ht = total(state.hero);
  const at = total(state.ally);
  const fx = effects();

  $("hudArea").textContent = a.name;
  $("hudLv").textContent = state.hero.lv;
  $("hudGold").textContent = fmt(state.hero.gold);
  $("hudStones").textContent = fmt(state.hero.stones);
  $("field").style.background = `linear-gradient(#20385c 0 38%, ${a.bg[1]} 39% 66%, ${a.bg[0]} 67%)`;

  $("feverLabel").textContent = `${Math.floor(state.fever)}/100`;
  $("feverFill").style.width = Math.min(100, state.fever) + "%";
  $("feverBtn").disabled = state.fever < 100 || state.feverActive;

  $("enemyLine").innerHTML = state.enemies.map(e => enemyHtml(e)).join("");
  $("targetSelect").innerHTML = alive().map((e,i) => `<option value="${i}" ${i===state.target ? "selected" : ""}>${i+1}: ${e.name}</option>`).join("");

  $("heroName").textContent = `${state.hero.name} Lv${state.hero.lv}`;
  $("allyName").textContent = `${state.ally.name} Lv${state.ally.lv}`;
  $("heroBars").innerHTML = bars(state.hero, ht);
  $("allyBars").innerHTML = bars(state.ally, at);
  $("heroMini").textContent = `攻撃 ${fmt(ht.atk)} / 防御 ${fmt(ht.def)} / 薬 ${state.hero.potion}`;
  $("allyMini").textContent = `攻撃 ${fmt(at.atk)} / 防御 ${fmt(at.def)} / 白黒虹の女性`;

  renderAreas();
  renderGrowth();
  renderEquip();
  renderAlly();
  renderGallery();
}

function bars(ch,t){
  return bar("HP", ch.hp, t.maxHp) + bar("MP", ch.mp, t.maxMp) + bar("EXP", ch.exp, ch.next);
}

function bar(n,v,m){
  const w = Math.max(0, Math.min(100, v / Math.max(1,m) * 100));
  return `<div class="barLabel">${n} ${fmt(v)}/${fmt(m)}</div><div class="bar"><div class="fill" style="width:${w}%"></div></div>`;
}

function renderAreas(){
  $("areaList").innerHTML = DATA.areas.map(a => {
    const locked = state.hero.lv < a.minLv;
    return `<div class="card">
      <h3>${a.name}</h3>
      <p>解放Lv ${a.minLv} / 最大敵数 ${a.maxEnemies}</p>
      <div class="cardBtns"><button type="button" data-action="move" data-id="${a.id}" ${locked ? "disabled" : ""}>移動</button></div>
    </div>`;
  }).join("");
}

function renderGrowth(){
  const ch = state.growthTarget === "ally" ? state.ally : state.hero;
  const t = total(ch);
  const fx = effects();
  $("growthPanel").innerHTML = `<div class="card">
    <h3>${ch.name}</h3>
    ${row("Lv", ch.lv)}
    ${row("HP", fmt(ch.hp)+"/"+fmt(t.maxHp))}
    ${row("MP", fmt(ch.mp)+"/"+fmt(t.maxMp))}
    ${row("攻撃", fmt(t.atk))}
    ${row("防御", fmt(t.def))}
    ${row("装備", equipText(ch))}
  </div>
  <div class="card">
    <h3>特殊効果合計</h3>
    ${row("レア率", Math.round(fx.rare*100)+"%")}
    ${row("経験値", Math.round(fx.exp*100)+"%")}
    ${row("ダメージ", Math.round(fx.damage*100)+"%")}
    ${row("複数攻撃", "+"+fx.multi+"体")}
    ${row("吸収効率", Math.round(fx.absorb*100)+"%")}
  </div>`;
}

function renderEquip(){
  const who = state.equipTarget;
  const top = `<div class="cardBtns"><button type="button" data-action="sellStones">魔石100個売却</button></div>`;
  $("equipPanel").innerHTML = top + ITEMS.map(it => {
    const owned = !!state.inventory[it.id];
    return `<div class="card">
      <h3>${it.name}${owned ? "【所持】" : ""}</h3>
      <p>${it.price}G<br>${desc(it)}</p>
      <div class="cardBtns">
        <button type="button" data-action="buy" data-id="${it.id}">購入</button>
        ${it.slot ? `<button type="button" data-action="equip" data-id="${it.id}" data-who="${who}" ${!owned ? "disabled" : ""}>装備</button>` : ""}
      </div>
    </div>`;
  }).join("");
}

function renderAlly(){
  $("allyPanel").innerHTML = `<div class="card">
    <h3>白黒虹の女性</h3>
    <p>初期加入。主人公と同様に、育成タブと装備タブで対象を切り替えできます。</p>
    ${row("役割", "2体攻撃の虹光弾で援護")}
    ${row("装備", equipText(state.ally))}
  </div>`;
}

function renderGallery(){
  $("gallery").innerHTML = DATA.enemies.map(e => enemyHtml({...e, uid:e.id, hp:e.hp, maxHp:e.hp}, true)).join("");
}

function row(a,b){
  return `<div class="row"><span>${a}</span><b>${b}</b></div>`;
}

function desc(it){
  const stat = it.stat ? Object.entries(it.stat).map(([k,v]) => `${label(k)}+${v}`).join(" / ") : "回復薬+3";
  const fx = it.fx ? Object.entries(it.fx).map(([k,v]) => `${fxLabel(k)}${k==="multi" ? "+"+v : "+"+Math.round(v*100)+"%"}`).join(" / ") : "";
  return stat + (fx ? `<br>特殊: ${fx}` : "");
}

function equipText(ch){
  return ["weapon","armor","acc"].map(slot => item(ch.equip[slot])?.name || "なし").join(" / ");
}

function label(k){
  return {maxHp:"HP", maxMp:"MP", atk:"攻撃", def:"防御"}[k] || k;
}

function fxLabel(k){
  return {rare:"レア率", exp:"経験値", damage:"ダメージ", multi:"攻撃数", absorb:"吸収効率", learn:"技習得"}[k] || k;
}

function log(t,c=""){
  const d = document.createElement("div");
  d.className = c;
  d.textContent = t;
  $("log").prepend(d);
  while ($("log").children.length > 120) $("log").removeChild($("log").lastChild);
}

function toast(t){
  $("toast").textContent = t;
  $("toast").classList.remove("hidden");
  setTimeout(() => $("toast").classList.add("hidden"), 1300);
}

function setupSound(){
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function tone(f,d=.08){
  if (!state.sound) return;
  setupSound();
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.frequency.value = f;
  g.gain.value = .04;
  o.connect(g);
  g.connect(audioCtx.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(.001, audioCtx.currentTime + d);
  o.stop(audioCtx.currentTime + d);
}

function bindHold(el, fn){
  if (!el) return;
  el.addEventListener("pointerdown", () => {
    clearTimeout(holdTimer);
    clearInterval(holdInterval);
    holdTimer = setTimeout(() => {
      holdInterval = setInterval(fn, 180);
    }, 420);
  });
  ["pointerup","pointerleave","pointercancel"].forEach(ev => {
    el.addEventListener(ev, () => {
      clearTimeout(holdTimer);
      clearInterval(holdInterval);
    });
  });
}

function switchPanel(name){
  state.activePanel = name;
  document.querySelectorAll(".tab").forEach(b => b.classList.toggle("active", b.dataset.panel === name));
  document.querySelectorAll(".panel").forEach(p => p.classList.toggle("active", p.id === "panel-" + name));
}

function bind(){
  $("attackBtn").addEventListener("click", doAttack);
  $("skillBtn").addEventListener("click", doSkill);
  $("healBtn").addEventListener("click", heal);
  $("absorbBtn").addEventListener("click", () => absorb(false));
  $("absorbAllBtn").addEventListener("click", () => absorb(true));
  $("nextBtn").addEventListener("click", spawnGroup);
  $("feverBtn").addEventListener("click", fever);
  $("saveBtn").addEventListener("click", save);
  $("loadBtn").addEventListener("click", () => { state = loadState(); render(); log("読み込みました。","good"); });
  $("resetBtn").addEventListener("click", reset);
  $("soundBtn").addEventListener("click", () => {
    state.sound = !state.sound;
    $("soundBtn").textContent = state.sound ? "音OFF" : "音ON";
    if (state.sound) { setupSound(); tone(660,.12); }
  });
  $("targetSelect").addEventListener("change", e => { state.target = Number(e.target.value); render(); });

  bindHold($("attackBtn"), doAttack);
  bindHold($("skillBtn"), doSkill);
  bindHold($("absorbAllBtn"), () => absorb(true));

  document.body.addEventListener("click", e => {
    const enemy = e.target.closest(".enemyCard");
    if (enemy && enemy.dataset.uid) {
      const idx = alive().findIndex(x => x.uid === enemy.dataset.uid);
      if (idx >= 0) { state.target = idx; render(); }
      return;
    }

    const tab = e.target.closest(".tab");
    if (tab && tab.dataset.panel) {
      switchPanel(tab.dataset.panel);
      render();
      return;
    }

    const mini = e.target.closest(".miniTab");
    if (mini && mini.dataset.growth) {
      state.growthTarget = mini.dataset.growth;
      document.querySelectorAll(".miniTab").forEach(x => x.classList.toggle("active", x.dataset.growth === state.growthTarget));
      renderGrowth();
      return;
    }

    const eqtab = e.target.closest(".equipTab");
    if (eqtab && eqtab.dataset.equiptarget) {
      state.equipTarget = eqtab.dataset.equiptarget;
      document.querySelectorAll(".equipTab").forEach(x => x.classList.toggle("active", x.dataset.equiptarget === state.equipTarget));
      renderEquip();
      return;
    }

    const action = e.target.closest("[data-action]");
    if (!action) return;
    const act = action.dataset.action;
    const id = action.dataset.id;
    if (act === "move") {
      const a = DATA.areas.find(x => x.id === id);
      if (!a || state.hero.lv < a.minLv) return;
      state.area = id;
      switchPanel("battle");
      spawnGroup();
    } else if (act === "buy") {
      buy(id);
    } else if (act === "equip") {
      equip(action.dataset.who || state.equipTarget, id);
    } else if (act === "sellStones") {
      sellStones();
    }
  });
}

function boot(){
  try {
    bind();
    log("Rebuild v1.1 起動。操作ボタンを安定化しました。");
    if (!state.enemies || !state.enemies.length) spawnGroup();
    render();
  } catch (err) {
    console.error(err);
    const msg = err && err.message ? err.message : String(err);
    document.body.insertAdjacentHTML("afterbegin", `<div style="padding:12px;background:#4a1111;color:white;position:sticky;top:0;z-index:9999">読み込みエラー: ${msg}</div>`);
  }
}

boot();
})();
