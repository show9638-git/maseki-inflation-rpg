(() => {
"use strict";

const DATA = {"areas": [{"id": "grass", "name": "はじまりの草原", "minLv": 1, "maxEnemies": 1, "bg": ["#295a37", "#8ac46f"]}, {"id": "forest", "name": "黒い森", "minLv": 4, "maxEnemies": 1, "bg": ["#152819", "#4f7d42"]}, {"id": "cave", "name": "魔石洞窟", "minLv": 8, "maxEnemies": 2, "bg": ["#172340", "#557ab2"]}, {"id": "ruins", "name": "古代廃墟", "minLv": 14, "maxEnemies": 2, "bg": ["#3c3528", "#8e7a54"]}, {"id": "dragon", "name": "竜の谷", "minLv": 24, "maxEnemies": 3, "bg": ["#47211b", "#b65f36"]}, {"id": "divine", "name": "白黒虹の神域", "minLv": 40, "maxEnemies": 3, "bg": ["#f2f2f2", "#202020"]}], "enemies": [{"id": "e1", "area": "grass", "name": "スライム", "rare": false, "icon": "🟦", "color": "#3bb8ff", "lv": 2, "hp": 42, "atk": 9, "def": 2, "exp": 12, "skill": "スラ技"}, {"id": "e2", "area": "grass", "name": "角ウサギ", "rare": false, "icon": "🐰", "color": "#e8e8ff", "lv": 3, "hp": 45, "atk": 10, "def": 2, "exp": 13, "skill": "角ウ技"}, {"id": "e3", "area": "grass", "name": "草原ラット", "rare": false, "icon": "🐀", "color": "#7bc45e", "lv": 4, "hp": 48, "atk": 10, "def": 3, "exp": 14, "skill": "草原技"}, {"id": "e4", "area": "grass", "name": "青羽スライム", "rare": false, "icon": "💧", "color": "#56d6ff", "lv": 1, "hp": 51, "atk": 11, "def": 3, "exp": 15, "skill": "青羽技"}, {"id": "e5", "area": "grass", "name": "葉っぱインプ", "rare": false, "icon": "🍃", "color": "#65c96b", "lv": 2, "hp": 54, "atk": 12, "def": 3, "exp": 16, "skill": "葉っ技"}, {"id": "e6", "area": "grass", "name": "石ころボア", "rare": false, "icon": "🐗", "color": "#a37c4a", "lv": 3, "hp": 56, "atk": 12, "def": 3, "exp": 17, "skill": "石こ技"}, {"id": "e7", "area": "grass", "name": "小牙コボルト", "rare": false, "icon": "👺", "color": "#57bb5c", "lv": 4, "hp": 59, "atk": 13, "def": 3, "exp": 17, "skill": "小牙技"}, {"id": "e8", "area": "grass", "name": "野良ミミック", "rare": false, "icon": "🎁", "color": "#b98a39", "lv": 1, "hp": 62, "atk": 14, "def": 3, "exp": 18, "skill": "野良技"}, {"id": "e9", "area": "grass", "name": "草角ビースト", "rare": false, "icon": "🦌", "color": "#79b96a", "lv": 2, "hp": 65, "atk": 14, "def": 4, "exp": 19, "skill": "草角技"}, {"id": "r10", "area": "grass", "name": "黄金スライム", "rare": true, "rank": 0, "icon": "💰", "color": "#e5bc31", "lv": 6, "hp": 390, "atk": 84, "def": 24, "exp": 270, "skill": "黄金奥義"}, {"id": "r11", "area": "grass", "name": "虹角ラビット", "rare": true, "rank": 1, "icon": "🌈", "color": "#ff72cf", "lv": 9, "hp": 585, "atk": 126, "def": 36, "exp": 405, "skill": "虹角奥義"}, {"id": "r12", "area": "grass", "name": "草原の小王", "rare": true, "rank": 2, "icon": "👑", "color": "#e8e8ff", "lv": 12, "hp": 780, "atk": 168, "def": 48, "exp": 540, "skill": "草原奥義"}, {"id": "e13", "area": "forest", "name": "影狼", "rare": false, "icon": "🦉", "color": "#435070", "lv": 5, "hp": 142, "atk": 32, "def": 8, "exp": 42, "skill": "影狼技"}, {"id": "e14", "area": "forest", "name": "毒蛾", "rare": false, "icon": "🌿", "color": "#2e4428", "lv": 6, "hp": 145, "atk": 32, "def": 9, "exp": 43, "skill": "毒蛾技"}, {"id": "e15", "area": "forest", "name": "マッシュビースト", "rare": false, "icon": "🍄", "color": "#3f385f", "lv": 7, "hp": 148, "atk": 33, "def": 9, "exp": 44, "skill": "マッ技"}, {"id": "e16", "area": "forest", "name": "夜目フクロウ", "rare": false, "icon": "🐺", "color": "#33233f", "lv": 4, "hp": 150, "atk": 33, "def": 9, "exp": 45, "skill": "夜目技"}, {"id": "e17", "area": "forest", "name": "黒蔦ワーム", "rare": false, "icon": "🦗", "color": "#456730", "lv": 5, "hp": 153, "atk": 34, "def": 9, "exp": 46, "skill": "黒蔦技"}, {"id": "e18", "area": "forest", "name": "影キノコ", "rare": false, "icon": "🦌", "color": "#6f9c8a", "lv": 6, "hp": 156, "atk": 35, "def": 9, "exp": 46, "skill": "影キ技"}, {"id": "e19", "area": "forest", "name": "月牙ジャッカル", "rare": false, "icon": "🗿", "color": "#51606e", "lv": 7, "hp": 159, "atk": 35, "def": 9, "exp": 47, "skill": "月牙技"}, {"id": "e20", "area": "forest", "name": "黒葉マンティス", "rare": false, "icon": "🦇", "color": "#526dc0", "lv": 4, "hp": 162, "atk": 36, "def": 10, "exp": 48, "skill": "黒葉技"}, {"id": "e21", "area": "forest", "name": "霧隠れ鹿", "rare": false, "icon": "👻", "color": "#5bd6ff", "lv": 5, "hp": 164, "atk": 37, "def": 10, "exp": 49, "skill": "霧隠技"}, {"id": "r22", "area": "forest", "name": "月影フェンリル", "rare": true, "rank": 0, "icon": "💰", "color": "#e5bc31", "lv": 9, "hp": 676, "atk": 145, "def": 41, "exp": 468, "skill": "月影奥義"}, {"id": "r23", "area": "forest", "name": "毒蝶女王", "rare": true, "rank": 1, "icon": "🌈", "color": "#ff72cf", "lv": 12, "hp": 871, "atk": 187, "def": 53, "exp": 603, "skill": "毒蝶奥義"}, {"id": "r24", "area": "forest", "name": "黒森の古霊", "rare": true, "rank": 2, "icon": "👑", "color": "#e8e8ff", "lv": 15, "hp": 1066, "atk": 229, "def": 65, "exp": 737, "skill": "黒森奥義"}, {"id": "e25", "area": "cave", "name": "魔石ゴーレム", "rare": false, "icon": "🕷️", "color": "#52345e", "lv": 9, "hp": 242, "atk": 54, "def": 15, "exp": 72, "skill": "魔石技"}, {"id": "e26", "area": "cave", "name": "水晶コウモリ", "rare": false, "icon": "🦇", "color": "#7a4b37", "lv": 10, "hp": 244, "atk": 55, "def": 15, "exp": 73, "skill": "水晶技"}, {"id": "e27", "area": "cave", "name": "ゴーストウィスプ", "rare": false, "icon": "🦎", "color": "#6e6950", "lv": 11, "hp": 247, "atk": 55, "def": 15, "exp": 74, "skill": "ゴー技"}, {"id": "e28", "area": "cave", "name": "鉱石クラブ", "rare": false, "icon": "🛡️", "color": "#3d465d", "lv": 8, "hp": 250, "atk": 56, "def": 15, "exp": 75, "skill": "鉱石技"}, {"id": "e29", "area": "cave", "name": "結晶スネーク", "rare": false, "icon": "🔮", "color": "#6d75ff", "lv": 9, "hp": 253, "atk": 56, "def": 15, "exp": 75, "skill": "結晶技"}, {"id": "e30", "area": "cave", "name": "洞窟オーガ", "rare": false, "icon": "💀", "color": "#d6d6d6", "lv": 10, "hp": 256, "atk": 57, "def": 16, "exp": 76, "skill": "洞窟技"}, {"id": "e31", "area": "cave", "name": "魔石スパイダー", "rare": false, "icon": "🗿", "color": "#777160", "lv": 11, "hp": 258, "atk": 58, "def": 16, "exp": 77, "skill": "魔石技"}, {"id": "e32", "area": "cave", "name": "硫黄バット", "rare": false, "icon": "🤖", "color": "#596474", "lv": 8, "hp": 261, "atk": 58, "def": 16, "exp": 78, "skill": "硫黄技"}, {"id": "e33", "area": "cave", "name": "地下リザード", "rare": false, "icon": "⚙️", "color": "#525970", "lv": 9, "hp": 264, "atk": 59, "def": 16, "exp": 79, "skill": "地下技"}, {"id": "r34", "area": "cave", "name": "純魔石ゴーレム", "rare": true, "rank": 0, "icon": "💰", "color": "#e5bc31", "lv": 13, "hp": 962, "atk": 207, "def": 59, "exp": 666, "skill": "純魔奥義"}, {"id": "r35", "area": "cave", "name": "星晶バット", "rare": true, "rank": 1, "icon": "🌈", "color": "#ff72cf", "lv": 16, "hp": 1157, "atk": 249, "def": 71, "exp": 801, "skill": "星晶奥義"}, {"id": "r36", "area": "cave", "name": "地底の宝王", "rare": true, "rank": 2, "icon": "👑", "color": "#e8e8ff", "lv": 19, "hp": 1352, "atk": 291, "def": 83, "exp": 936, "skill": "地底奥義"}, {"id": "e37", "area": "ruins", "name": "古代兵", "rare": false, "icon": "🐉", "color": "#5b36ad", "lv": 15, "hp": 341, "atk": 76, "def": 21, "exp": 102, "skill": "古代技"}, {"id": "e38", "area": "ruins", "name": "ルーンウィスプ", "rare": false, "icon": "🐲", "color": "#d5d0ff", "lv": 16, "hp": 344, "atk": 77, "def": 21, "exp": 103, "skill": "ルー技"}, {"id": "e39", "area": "ruins", "name": "骸骨剣士", "rare": false, "icon": "🦎", "color": "#d4543c", "lv": 17, "hp": 347, "atk": 78, "def": 21, "exp": 104, "skill": "骸骨技"}, {"id": "e40", "area": "ruins", "name": "碑文ゴーレム", "rare": false, "icon": "🦅", "color": "#354c8f", "lv": 14, "hp": 350, "atk": 78, "def": 21, "exp": 105, "skill": "碑文技"}, {"id": "e41", "area": "ruins", "name": "壊れた守護者", "rare": false, "icon": "🐕", "color": "#6a2525", "lv": 15, "hp": 352, "atk": 79, "def": 22, "exp": 105, "skill": "壊れ技"}, {"id": "e42", "area": "ruins", "name": "古代機兵", "rare": false, "icon": "🔥", "color": "#d4512e", "lv": 16, "hp": 355, "atk": 80, "def": 22, "exp": 106, "skill": "古代技"}, {"id": "e43", "area": "ruins", "name": "呪印スカル", "rare": false, "icon": "🐉", "color": "#806050", "lv": 17, "hp": 358, "atk": 80, "def": 22, "exp": 107, "skill": "呪印技"}, {"id": "e44", "area": "ruins", "name": "赤錆ナイト", "rare": false, "icon": "🪽", "color": "#315f78", "lv": 14, "hp": 361, "atk": 81, "def": 22, "exp": 108, "skill": "赤錆技"}, {"id": "e45", "area": "ruins", "name": "金眼ファントム", "rare": false, "icon": "💀", "color": "#e8e8e8", "lv": 15, "hp": 364, "atk": 81, "def": 22, "exp": 109, "skill": "金眼技"}, {"id": "r46", "area": "ruins", "name": "古代将軍", "rare": true, "rank": 0, "icon": "💰", "color": "#e5bc31", "lv": 19, "hp": 1248, "atk": 268, "def": 76, "exp": 864, "skill": "古代奥義"}, {"id": "r47", "area": "ruins", "name": "禁呪ウィスプ", "rare": true, "rank": 1, "icon": "🌈", "color": "#ff72cf", "lv": 22, "hp": 1443, "atk": 310, "def": 88, "exp": 999, "skill": "禁呪奥義"}, {"id": "r48", "area": "ruins", "name": "失われた王影", "rare": true, "rank": 2, "icon": "👑", "color": "#e8e8ff", "lv": 25, "hp": 1638, "atk": 352, "def": 100, "exp": 1134, "skill": "失わ奥義"}, {"id": "e49", "area": "dragon", "name": "レッサードラゴン", "rare": false, "icon": "🌳", "color": "#f3f3ff", "lv": 25, "hp": 441, "atk": 99, "def": 27, "exp": 132, "skill": "レッ技"}, {"id": "e50", "area": "dragon", "name": "虹鱗ドレイク", "rare": false, "icon": "✨", "color": "#1f1f22", "lv": 26, "hp": 444, "atk": 99, "def": 27, "exp": 133, "skill": "虹鱗技"}, {"id": "e51", "area": "dragon", "name": "炎尾リザード", "rare": false, "icon": "🪽", "color": "#baf3ff", "lv": 27, "hp": 446, "atk": 100, "def": 27, "exp": 134, "skill": "炎尾技"}, {"id": "e52", "area": "dragon", "name": "雷鳴ホーク", "rare": false, "icon": "🔷", "color": "#15192b", "lv": 24, "hp": 449, "atk": 101, "def": 28, "exp": 134, "skill": "雷鳴技"}, {"id": "e53", "area": "dragon", "name": "竜血ハウンド", "rare": false, "icon": "🌑", "color": "#e87233", "lv": 25, "hp": 452, "atk": 101, "def": 28, "exp": 135, "skill": "竜血技"}, {"id": "e54", "area": "dragon", "name": "火山サラマンダー", "rare": false, "icon": "🔥", "color": "#3bb8ff", "lv": 26, "hp": 455, "atk": 102, "def": 28, "exp": 136, "skill": "火山技"}, {"id": "e55", "area": "dragon", "name": "翼竜の幼体", "rare": false, "icon": "🟦", "color": "#e8e8ff", "lv": 27, "hp": 458, "atk": 103, "def": 28, "exp": 137, "skill": "翼竜技"}, {"id": "e56", "area": "dragon", "name": "風切りワイバーン", "rare": false, "icon": "🐰", "color": "#7bc45e", "lv": 24, "hp": 460, "atk": 103, "def": 28, "exp": 138, "skill": "風切技"}, {"id": "e57", "area": "dragon", "name": "竜骨スカル", "rare": false, "icon": "🐀", "color": "#56d6ff", "lv": 25, "hp": 463, "atk": 104, "def": 28, "exp": 139, "skill": "竜骨技"}, {"id": "r58", "area": "dragon", "name": "白竜の雛", "rare": true, "rank": 0, "icon": "💰", "color": "#e5bc31", "lv": 29, "hp": 1534, "atk": 330, "def": 94, "exp": 1062, "skill": "白竜奥義"}, {"id": "r59", "area": "dragon", "name": "虹炎ドレイク", "rare": true, "rank": 1, "icon": "🌈", "color": "#ff72cf", "lv": 32, "hp": 1729, "atk": 372, "def": 106, "exp": 1197, "skill": "虹炎奥義"}, {"id": "r60", "area": "dragon", "name": "竜谷の覇者", "rare": true, "rank": 2, "icon": "👑", "color": "#e8e8ff", "lv": 35, "hp": 1924, "atk": 414, "def": 118, "exp": 1332, "skill": "竜谷奥義"}, {"id": "e61", "area": "divine", "name": "虚無天使", "rare": false, "icon": "👺", "color": "#b98a39", "lv": 41, "hp": 540, "atk": 121, "def": 33, "exp": 162, "skill": "虚無技"}, {"id": "e62", "area": "divine", "name": "神の欠片", "rare": false, "icon": "🎁", "color": "#79b96a", "lv": 42, "hp": 543, "atk": 122, "def": 33, "exp": 163, "skill": "神の技"}, {"id": "e63", "area": "divine", "name": "氷晶精霊", "rare": false, "icon": "🦌", "color": "#2c2448", "lv": 43, "hp": 546, "atk": 122, "def": 34, "exp": 163, "skill": "氷晶技"}, {"id": "e64", "area": "divine", "name": "腐敗トレント", "rare": false, "icon": "🐺", "color": "#653682", "lv": 40, "hp": 549, "atk": 123, "def": 34, "exp": 164, "skill": "腐敗技"}, {"id": "e65", "area": "divine", "name": "白光の欠片", "rare": false, "icon": "🦋", "color": "#9c6745", "lv": 41, "hp": 552, "atk": 124, "def": 34, "exp": 165, "skill": "白光技"}, {"id": "e66", "area": "divine", "name": "黒翼の使徒", "rare": false, "icon": "🍄", "color": "#435070", "lv": 42, "hp": 554, "atk": 124, "def": 34, "exp": 166, "skill": "黒翼技"}, {"id": "e67", "area": "divine", "name": "虹晶スフィア", "rare": false, "icon": "🦉", "color": "#2e4428", "lv": 43, "hp": 557, "atk": 125, "def": 34, "exp": 167, "skill": "虹晶技"}, {"id": "e68", "area": "divine", "name": "終末の影", "rare": false, "icon": "🌿", "color": "#3f385f", "lv": 40, "hp": 560, "atk": 126, "def": 35, "exp": 168, "skill": "終末技"}, {"id": "e69", "area": "divine", "name": "原初の火種", "rare": false, "icon": "🍄", "color": "#33233f", "lv": 41, "hp": 563, "atk": 126, "def": 35, "exp": 168, "skill": "原初技"}, {"id": "r70", "area": "divine", "name": "白黒虹の幻影", "rare": true, "rank": 0, "icon": "💰", "color": "#e5bc31", "lv": 45, "hp": 1820, "atk": 392, "def": 112, "exp": 1260, "skill": "白黒奥義"}, {"id": "r71", "area": "divine", "name": "虚無熾天使", "rare": true, "rank": 1, "icon": "🌈", "color": "#ff72cf", "lv": 48, "hp": 2015, "atk": 434, "def": 124, "exp": 1395, "skill": "虚無奥義"}, {"id": "r72", "area": "divine", "name": "神域の観測者", "rare": true, "rank": 2, "icon": "👑", "color": "#e8e8ff", "lv": 51, "hp": 2210, "atk": 476, "def": 136, "exp": 1530, "skill": "神域奥義"}]};
const SAVE_KEY = "maseki_rebuild_v12";
const IMAGE_PREFIX = "maseki_rebuild_v12_image_";
const $ = (id) => document.getElementById(id);

const DEFAULT_STATE = () => ({
  area: "grass",
  target: 0,
  fever: 0,
  feverActive: false,
  sound: false,
  bgmMode: 0,
  activePanel: "battle",
  growthTarget: "hero",
  equipTarget: "hero",
  focus: "hero",
  spawnMult: { grass:1, forest:1, cave:1, ruins:1, dragon:1, divine:1 },
  hero: { name:"白黒虹の剣士", lv:1, exp:0, next:30, hp:120, maxHp:120, mp:40, maxMp:40, atk:18, def:5, stones:0, gold:0, absorbed:0, equip:{weapon:null, armor:null, acc:null}, skills:["虹斬り"] },
  ally: { joined:true, name:"白黒虹の女性", lv:1, exp:0, next:30, hp:95, maxHp:95, mp:55, maxMp:55, atk:13, def:4, equip:{weapon:null, armor:null, acc:null}, skills:["虹光弾"] },
  ally2: { joined:true, name:"白黒虹の女性2", lv:1, exp:0, next:30, hp:105, maxHp:105, mp:42, maxMp:42, atk:15, def:5, equip:{weapon:null, armor:null, acc:null}, skills:["白黒虹連撃"] },
  inventory: {},
  materials: {},
  kills: {},
  rareKills: 0,
  enemies: []
});

const BASE_ITEMS = [
  {id:"w1",name:"鉄の剣",slot:"weapon",price:100,stat:{atk:12},fx:{}},
  {id:"w2",name:"白黒虹の剣",slot:"weapon",price:900,stat:{atk:70,maxMp:20},fx:{damage:.15,learn:.04}},
  {id:"w3",name:"希少狩りの剣",slot:"weapon",price:2500,stat:{atk:135},fx:{rare:.05,damage:.08}},
  {id:"w4",name:"三連虹刃",slot:"weapon",price:7000,stat:{atk:380},fx:{multi:1,damage:.12}},
  {id:"a1",name:"旅人の服",slot:"armor",price:80,stat:{def:8,maxHp:40},fx:{}},
  {id:"a2",name:"経験のローブ",slot:"armor",price:1800,stat:{def:55,maxMp:120},fx:{exp:.5}},
  {id:"a3",name:"白黒虹の鎧",slot:"armor",price:6500,stat:{def:280,maxHp:2000},fx:{damage:.12,exp:.35}},
  {id:"c1",name:"魔石の護符",slot:"acc",price:500,stat:{atk:20,def:20},fx:{absorb:.2}},
  {id:"c2",name:"レア王の冠",slot:"acc",price:9000,stat:{atk:500,def:300},fx:{rare:.1,exp:.3}},
  {id:"c3",name:"経験倍増の宝珠",slot:"acc",price:14000,stat:{maxMp:900},fx:{exp:1.0}}
];

const EXTRA_ITEMS = [
  ["白刃ノ太刀","weapon",1200,{atk:95},{damage:.05}],["黒刃ノ太刀","weapon",1500,{atk:115,maxMp:30},{learn:.03}],["虹刃ノ太刀","weapon",2400,{atk:150,maxMp:60},{damage:.08,learn:.03}],["魔石槍","weapon",3200,{atk:220},{multi:1}],["星砕きの斧","weapon",4200,{atk:310},{damage:.18}],["月影ダガー","weapon",5200,{atk:360},{rare:.03,damage:.08}],["竜牙剣","weapon",7800,{atk:620,maxHp:600},{damage:.22}],["神域剣","weapon",15000,{atk:1350,maxMp:500},{damage:.28,learn:.08}],["虚無刀","weapon",28000,{atk:2600},{damage:.35,multi:1}],["原初虹剣","weapon",52000,{atk:5200,maxHp:8000},{damage:.45,multi:1,learn:.1}],
  ["革鎧","armor",500,{def:35,maxHp:160},{}],["魔石鎧","armor",1600,{def:85,maxHp:450},{absorb:.12}],["黒森外套","armor",2800,{def:120,maxMp:160},{rare:.02}],["水晶鎧","armor",3900,{def:180,maxHp:850},{exp:.18}],["古代装甲","armor",6400,{def:360,maxHp:1800},{damage:.08}],["竜鱗鎧","armor",12000,{def:900,maxHp:6000},{damage:.12,absorb:.15}],["虹翼ローブ","armor",18000,{def:750,maxMp:2800},{exp:.7,rare:.03}],["神域装束","armor",30000,{def:1800,maxHp:12000,maxMp:3500},{exp:.9,damage:.18}],["虚無外套","armor",48000,{def:2800,maxMp:9000},{rare:.06,learn:.1}],["原初の鎧","armor",85000,{def:6000,maxHp:42000},{exp:1.2,damage:.25}],
  ["小さな指輪","acc",300,{atk:8,def:8},{}],["戦士の腕輪","acc",900,{atk:55},{damage:.05}],["学びの耳飾り","acc",1300,{maxMp:80},{exp:.25}],["幸運の鈴","acc",2200,{def:40},{rare:.035}],["吸収の珠","acc",3000,{maxHp:300},{absorb:.25}],["連撃の紋章","acc",5000,{atk:180},{multi:1}],["虹の宝珠","acc",9500,{atk:400,maxMp:700},{exp:.45,learn:.05}],["竜核の首飾り","acc",16000,{atk:900,def:450},{damage:.2,absorb:.2}],["神眼の冠","acc",34000,{maxMp:5000},{rare:.12,exp:.6}],["原初核","acc",90000,{atk:6000,def:4000,maxHp:30000,maxMp:10000},{rare:.15,exp:1.5,damage:.3,multi:1,absorb:.3,learn:.12}]
].map((x,i)=>({id:"x"+(i+1),name:x[0],slot:x[1],price:x[2],stat:x[3],fx:x[4]}));

const ITEMS = [...BASE_ITEMS, ...EXTRA_ITEMS];

const SKILLS = {
  "虹斬り": { mp:5, power:1.8, targets:1 },
  "虹光弾": { mp:7, power:1.5, targets:2 },
  "白黒虹連撃": { mp:22, power:2.8, targets:3 }
};

const BGM_MODES = [
  {name:"冒険", notes:[220,247,262,330,294,262,247,196], speed:420},
  {name:"戦闘", notes:[330,392,440,392,330,294,330,494], speed:260},
  {name:"神域", notes:[196,262,330,392,523,392,330,262], speed:520}
];

let state = loadState();
let holdTimer = null;
let holdInterval = null;
let audioCtx = null;
let bgmTimer = null;
let feverTimer = null;

function loadState(){
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return DEFAULT_STATE();
    const data = JSON.parse(raw);
    return migrate(Object.assign(DEFAULT_STATE(), data));
  } catch {
    return DEFAULT_STATE();
  }
}

function migrate(s){
  if (!s.ally2) s.ally2 = DEFAULT_STATE().ally2;
  if (!s.spawnMult) s.spawnMult = DEFAULT_STATE().spawnMult;
  if (!s.focus) s.focus = "hero";
  if (s.hero && "potion" in s.hero) delete s.hero.potion;
  return s;
}

function save(){
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  log("保存しました。", "good");
  toast("保存しました");
}

function reset(){
  if (!confirm("初期化しますか？")) return;
  localStorage.removeItem(SAVE_KEY);
  ["hero","ally","ally2"].forEach(k => localStorage.removeItem(IMAGE_PREFIX + k));
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

function getChar(key){
  return key === "ally2" ? state.ally2 : key === "ally" ? state.ally : state.hero;
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
  [state.hero, state.ally, state.ally2].forEach(ch => {
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
  const base = state.hero.lv < 8 ? 1 : state.hero.lv < 18 ? Math.min(2, a.maxEnemies) : Math.min(3, a.maxEnemies);
  const mult = Number(state.spawnMult[state.area] || 1);
  return Math.max(1, Math.min(3, Math.ceil(base * mult)));
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
  sfx("spawn");
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
    allyActions();
    if (alive().length) enemyTurn();
  }
  sfx("attack");
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
    allyActions();
    if (alive().length) enemyTurn();
  }
  sfx("skill");
  render();
}

function allyActions(){
  allyAction("ally", "虹光弾");
  if (alive().length) allyAction("ally2", "白黒虹連撃");
}

function allyAction(key, skillName){
  const ch = getChar(key);
  const sk = SKILLS[skillName];
  if (!alive().length) return;
  if (ch.mp >= sk.mp) {
    ch.mp -= sk.mp;
    actorAnim(key, "skill");
    damage(pickTargets(Math.min(alive().length, sk.targets)), calcDamage(ch, sk.power), `${ch.name}の${skillName}`);
  } else {
    actorAnim(key, "attack");
    damage([target()], calcDamage(ch, 1), `${ch.name}の攻撃`);
  }
}

function enemyTurn(){
  alive().forEach(e => {
    const targets = [state.hero, state.ally, state.ally2];
    const tgt = targets[Math.floor(Math.random()*targets.length)];
    const tt = total(tgt);
    const d = Math.max(1, Math.floor(e.atk * (0.8 + Math.random()*0.35)) - Math.floor(tt.def*0.45));
    tgt.hp = Math.max(0, tgt.hp - d);
    log(`${e.name}の攻撃。${tgt.name}に${fmt(d)}ダメージ。`, "bad");
  });
  [state.hero, state.ally, state.ally2].forEach(ch => {
    if (ch.hp <= 0) {
      ch.hp = Math.floor(total(ch).maxHp * 0.5);
      if (ch === state.hero) state.hero.stones = Math.floor(state.hero.stones * 0.9);
      log(`${ch.name}が倒れたが復帰。`, "bad");
    }
  });
  sfx("hit");
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
  state.ally2.exp += Math.floor(exp * 0.65);
  state.hero.stones += stones;
  state.fever = Math.min(100, state.fever + 5 + defeated.length*2 + (defeated.some(e=>e.rare) ? 10 : 0));
  log(`撃破！ EXP${fmt(exp)} / 魔石${fmt(stones)}個 / フィーバー少し上昇。`, "good");
  levelUp(state.hero);
  levelUp(state.ally);
  levelUp(state.ally2);
  sfx("win");
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
    sfx("level");
  }
}

function learn(name){
  if (!name || SKILLS[name]) return;
  SKILLS[name] = { mp:10, power:1.8, targets: Math.random() < 0.35 ? 3 : (Math.random() < 0.55 ? 2 : 1) };
  if (!state.hero.skills.includes(name) && state.hero.skills.length < 9) state.hero.skills.push(name);
  log(`技「${name}」を習得！`, "rare");
  sfx("learn");
}

function absorbAll(){
  if (state.hero.stones <= 0) {
    log("魔石がない。", "bad");
    return;
  }
  const n = state.hero.stones;
  state.hero.stones = 0;
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
  // 一括吸収でも特技習得判定
  const candidates = DATA.enemies
    .filter(e => e.area === state.area)
    .map(e => e.skill)
    .filter(Boolean)
    .filter(s => !state.hero.skills.includes(s));
  const tries = Math.min(8, Math.max(1, Math.floor(n / 25)));
  for (let i=0; i<tries && candidates.length; i++) {
    if (Math.random() < 0.16 + effects().learn) {
      const skill = candidates.splice(Math.floor(Math.random()*candidates.length),1)[0];
      learn(skill);
    }
  }
  log(`魔石${fmt(n)}個を一括吸収。効率${Math.round(scale*100)}%。HP+${fmt(hp)} 攻撃+${fmt(atk)}。`, "rare");
  sfx("absorb");
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
  log("フィーバー発動！約1分間、高速で敵を倒しまくる！", "rare");
  toast("FEVER 60秒!");
  sfx("fever");
  let left = 60;
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
    state.ally2.exp += Math.floor(exp * 0.55);
    state.hero.stones += stones;
    defeated.forEach(e => {
      state.kills[e.id] = (state.kills[e.id] || 0) + 1;
      if (e.rare) state.rareKills += 1;
      addMat(e.name + "素材", 1);
      if (Math.random() < (0.04 + effects().learn)) learn(e.skill);
    });
    levelUp(state.hero);
    levelUp(state.ally);
    levelUp(state.ally2);
    state.enemies = [];
    render();
  }, 1000);
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
  state.inventory[id] = true;
  log(`${it.name}購入。`, "good");
  sfx("coin");
  render();
}

function equip(who,id){
  const it = item(id);
  if (!it || !it.slot) return;
  if (!state.inventory[id]) {
    log("未所持です。", "bad");
    return;
  }
  const ch = getChar(who);
  ch.equip[it.slot] = id;
  ch.hp = Math.min(ch.hp, total(ch).maxHp);
  ch.mp = Math.min(ch.mp, total(ch).maxMp);
  log(`${ch.name}：${it.name}を装備。`, "good");
  sfx("equip");
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
  sfx("coin");
  render();
}

function actorAnim(id, cls){
  const el = id === "ally2" ? $("ally2Sprite") : id === "ally" ? $("allySprite") : $("heroSprite");
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
  const a2t = total(state.ally2);

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
  $("ally2Name").textContent = `${state.ally2.name} Lv${state.ally2.lv}`;
  $("heroBars").innerHTML = bars(state.hero, ht);
  $("allyBars").innerHTML = bars(state.ally, at);
  $("ally2Bars").innerHTML = bars(state.ally2, a2t);
  $("heroMini").textContent = `攻撃 ${fmt(ht.atk)} / 防御 ${fmt(ht.def)}`;
  $("allyMini").textContent = `攻撃 ${fmt(at.atk)} / 防御 ${fmt(at.def)}`;
  $("ally2Mini").textContent = `攻撃 ${fmt(a2t.atk)} / 防御 ${fmt(a2t.def)}`;

  applyActorImages();
  document.querySelectorAll(".focusBtn").forEach(b => b.classList.toggle("active", b.dataset.focus === state.focus));
  document.querySelectorAll("[data-actor-card]").forEach(c => c.classList.toggle("focused", c.dataset.actorCard === state.focus));

  renderAreas();
  renderGrowth();
  renderEquip();
  renderAlly();
  renderImages();
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
    const mult = state.spawnMult[a.id] || 1;
    return `<div class="card">
      <h3>${a.name}</h3>
      <p>解放Lv ${a.minLv} / 基本最大敵数 ${a.maxEnemies} / 現在倍率 ${mult}倍</p>
      <div class="cardBtns">
        <button type="button" data-action="move" data-id="${a.id}" ${locked ? "disabled" : ""}>移動</button>
        <button type="button" data-action="spawnMult" data-id="${a.id}" data-value="1">1倍</button>
        <button type="button" data-action="spawnMult" data-id="${a.id}" data-value="2">2倍</button>
        <button type="button" data-action="spawnMult" data-id="${a.id}" data-value="3">3倍</button>
      </div>
    </div>`;
  }).join("");
}

function renderGrowth(){
  const ch = getChar(state.growthTarget);
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
    ${row("技習得", Math.round(fx.learn*100)+"%")}
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
        <button type="button" data-action="equip" data-id="${it.id}" data-who="${who}" ${!owned ? "disabled" : ""}>装備</button>
      </div>
    </div>`;
  }).join("");
}

function renderAlly(){
  $("allyPanel").innerHTML = `<div class="card">
    <h3>仲間1：白黒虹の女性</h3>
    <p>初期加入。育成/装備/戦闘画面から対象切替できます。</p>
    ${row("役割", "2体攻撃の虹光弾で援護")}
    ${row("装備", equipText(state.ally))}
  </div>
  <div class="card">
    <h3>仲間2：白黒虹の女性2</h3>
    <p>初期加入。3体攻撃の白黒虹連撃で援護します。</p>
    ${row("役割", "3体攻撃サポート")}
    ${row("装備", equipText(state.ally2))}
  </div>`;
}

function renderImages(){
  const rows = [
    ["hero","主人公"],
    ["ally","仲間1"],
    ["ally2","仲間2"]
  ].map(([key,label]) => `<div class="card">
    <h3>${label}イラスト</h3>
    <p>好きな画像に差し替えできます。</p>
    <div class="cardBtns">
      <label class="fileBtn">${label}画像を選ぶ<input type="file" accept="image/png,image/jpeg,image/webp" data-image-target="${key}"></label>
      <button type="button" data-action="resetImage" data-id="${key}">初期化</button>
    </div>
  </div>`);
  $("imagePanel").innerHTML = rows.join("");
}

function renderGallery(){
  $("gallery").innerHTML = DATA.enemies.map(e => enemyHtml({...e, uid:e.id, hp:e.hp, maxHp:e.hp}, true)).join("");
}

function row(a,b){
  return `<div class="row"><span>${a}</span><b>${b}</b></div>`;
}

function desc(it){
  const stat = it.stat ? Object.entries(it.stat).map(([k,v]) => `${label(k)}+${v}`).join(" / ") : "";
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
  while ($("log").children.length > 160) $("log").removeChild($("log").lastChild);
}

function toast(t){
  $("toast").textContent = t;
  $("toast").classList.remove("hidden");
  setTimeout(() => $("toast").classList.add("hidden"), 1300);
}

function setupSound(){
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function tone(f,d=.08,type="sine",gain=.04){
  if (!state.sound) return;
  setupSound();
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type;
  o.frequency.value = f;
  g.gain.value = gain;
  o.connect(g);
  g.connect(audioCtx.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(.001, audioCtx.currentTime + d);
  o.stop(audioCtx.currentTime + d);
}

function sfx(kind){
  const table = {
    attack:[220,.08,"sawtooth",.045],
    skill:[440,.16,"triangle",.055],
    hit:[90,.08,"square",.035],
    win:[660,.12,"sine",.05],
    level:[880,.22,"triangle",.055],
    coin:[1040,.07,"sine",.04],
    absorb:[330,.18,"triangle",.05],
    learn:[990,.28,"sine",.05],
    equip:[740,.09,"triangle",.04],
    spawn:[140,.12,"sawtooth",.03],
    fever:[1200,.35,"triangle",.06]
  };
  tone(...(table[kind] || table.attack));
}

function startBgm(){
  stopBgm();
  if (!state.sound) return;
  setupSound();
  const mode = BGM_MODES[state.bgmMode % BGM_MODES.length];
  let i = 0;
  bgmTimer = setInterval(() => {
    tone(mode.notes[i % mode.notes.length], .18, "triangle", .018);
    i++;
  }, mode.speed);
}

function stopBgm(){
  if (bgmTimer) clearInterval(bgmTimer);
  bgmTimer = null;
}

function cycleBgm(){
  state.bgmMode = (state.bgmMode + 1) % BGM_MODES.length;
  $("bgmBtn").textContent = "BGM:" + BGM_MODES[state.bgmMode].name;
  startBgm();
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

function setImage(key, file){
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem(IMAGE_PREFIX + key, reader.result);
    applyActorImages();
    toast("画像を変更しました");
  };
  reader.readAsDataURL(file);
}

function applyActorImages(){
  [["hero","heroSprite"],["ally","allySprite"],["ally2","ally2Sprite"]].forEach(([key,id]) => {
    const el = $(id);
    const data = localStorage.getItem(IMAGE_PREFIX + key);
    if (data) {
      el.style.backgroundImage = `url(${data})`;
      el.classList.add("hasImage");
    } else {
      el.style.backgroundImage = "";
      el.classList.remove("hasImage");
    }
  });
}

function bind(){
  $("attackBtn").addEventListener("click", doAttack);
  $("skillBtn").addEventListener("click", doSkill);
  $("nextBtn").addEventListener("click", spawnGroup);
  $("absorbAllBtn").addEventListener("click", absorbAll);
  $("sellBtn").addEventListener("click", sellStones);
  $("autoBtn").addEventListener("click", () => { doAttack(); });
  $("feverBtn").addEventListener("click", fever);
  $("saveBtn").addEventListener("click", save);
  $("loadBtn").addEventListener("click", () => { state = loadState(); render(); log("読み込みました。","good"); });
  $("resetBtn").addEventListener("click", reset);
  $("bgmBtn").addEventListener("click", cycleBgm);
  $("soundBtn").addEventListener("click", () => {
    state.sound = !state.sound;
    $("soundBtn").textContent = state.sound ? "音OFF" : "音ON";
    if (state.sound) { setupSound(); sfx("level"); startBgm(); }
    else stopBgm();
  });
  $("targetSelect").addEventListener("change", e => { state.target = Number(e.target.value); render(); });

  bindHold($("attackBtn"), doAttack);
  bindHold($("skillBtn"), doSkill);
  bindHold($("absorbAllBtn"), absorbAll);
  bindHold($("sellBtn"), sellStones);

  document.body.addEventListener("change", e => {
    const input = e.target.closest("[data-image-target]");
    if (input) setImage(input.dataset.imageTarget, input.files && input.files[0]);
  });

  document.body.addEventListener("click", e => {
    const enemy = e.target.closest(".enemyCard");
    if (enemy && enemy.dataset.uid) {
      const idx = alive().findIndex(x => x.uid === enemy.dataset.uid);
      if (idx >= 0) { state.target = idx; render(); }
      return;
    }

    const focus = e.target.closest(".focusBtn");
    if (focus && focus.dataset.focus) {
      state.focus = focus.dataset.focus;
      state.growthTarget = state.focus;
      state.equipTarget = state.focus;
      render();
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
      state.focus = state.growthTarget;
      document.querySelectorAll(".miniTab").forEach(x => x.classList.toggle("active", x.dataset.growth === state.growthTarget));
      renderGrowth();
      render();
      return;
    }

    const eqtab = e.target.closest(".equipTab");
    if (eqtab && eqtab.dataset.equiptarget) {
      state.equipTarget = eqtab.dataset.equiptarget;
      state.focus = state.equipTarget;
      document.querySelectorAll(".equipTab").forEach(x => x.classList.toggle("active", x.dataset.equiptarget === state.equipTarget));
      renderEquip();
      render();
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
    } else if (act === "spawnMult") {
      state.spawnMult[id] = Number(action.dataset.value || 1);
      log(`${DATA.areas.find(x=>x.id===id)?.name || id}の出現数倍率を${state.spawnMult[id]}倍に変更。`, "good");
      render();
    } else if (act === "buy") {
      buy(id);
    } else if (act === "equip") {
      equip(action.dataset.who || state.equipTarget, id);
    } else if (act === "sellStones") {
      sellStones();
    } else if (act === "resetImage") {
      localStorage.removeItem(IMAGE_PREFIX + id);
      applyActorImages();
      toast("画像を初期化しました");
    }
  });
}

function boot(){
  try {
    bind();
    $("bgmBtn").textContent = "BGM:" + BGM_MODES[state.bgmMode].name;
    log("Rebuild v1.2 起動。回復薬/10%吸収を削除し、装備と画像変更を追加しました。");
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
