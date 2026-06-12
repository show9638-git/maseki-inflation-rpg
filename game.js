(() => {
"use strict";

const SAVE_KEY="maseki_inflation_rpg_v03";
const HERO_IMAGE_KEY="maseki_rpg_hero_image_v03";
const $=id=>document.getElementById(id);

const LOCATIONS=[
{id:"grass",name:"はじまりの草原",text:"弱い魔物が出る。育成の起点。",minLevel:1,maxEnemies:1,color:["#163824","#141a30"],enemies:["slime","hornRabbit","goblinRaider","extra1","extra2","extra3","extra4","extra5","extra6","extra7","extra8"],rareEnemies:["rare_grass_1","rare_grass_2","rare_grass_3"]},
{id:"forest",name:"黒い森",text:"影の魔物が棲む森。技経験値を稼ぎやすい。",minLevel:4,maxEnemies:1,color:["#13251a","#251429"],enemies:["shadowWolf","poisonMoth","mushroomBeast","stoneTurtle","extra9","extra10","extra11","extra12","extra13","extra14","extra15","extra16"],rareEnemies:["rare_forest_1","rare_forest_2","rare_forest_3"]},
{id:"cave",name:"魔石洞窟",text:"魔石を多く落とす敵がいる。装備資金稼ぎ向け。",minLevel:8,maxEnemies:2,color:["#20304a","#151525"],enemies:["masekiGolem","crystalBat","ghostWisp","extra17","extra18","extra19","extra20","extra21","extra22","extra23","extra24"],rareEnemies:["rare_cave_1","rare_cave_2","rare_cave_3"]},
{id:"ruins",name:"古代廃墟",text:"素材が優秀。仲間解放の条件素材も落ちる。",minLevel:14,maxEnemies:2,color:["#3a3324","#151522"],enemies:["ancientSoldier","runeWisp","skeletonSwordsman","extra25","extra26","extra27","extra28","extra29","extra30","extra31","extra32"],rareEnemies:["rare_ruins_1","rare_ruins_2","rare_ruins_3"]},
{id:"dragonValley",name:"竜の谷",text:"強敵地帯。強力な竜素材と技を狙える。",minLevel:24,maxEnemies:3,color:["#49211d","#1a1324"],enemies:["lesserDragon","rainbowDrake","fireLizard","thunderHawk","extra33","extra34","extra35","extra36","extra37","extra38","extra39","extra40","extra41"],rareEnemies:["rare_dragonValley_1","rare_dragonValley_2","rare_dragonValley_3"]},
{id:"divine",name:"白黒虹の神域",text:"インフレの先。桁が跳ね上がる終盤地帯。",minLevel:40,maxEnemies:3,color:["#e8e8e8","#050505"],enemies:["voidAngel","godFragment","iceSpirit","corruptedTreant","extra42","extra43","extra44","extra45","extra46","extra47","extra48","extra49","extra50"],rareEnemies:["rare_divine_1","rare_divine_2","rare_divine_3"]}
];

const ENEMIES={
slime:{id:"slime",name:"スライム",portrait:"粘液",maxHp:35,atk:7,def:1,exp:7,materials:[["スライム素材",1,.58],["強化片",1,.18]],learnSkill:"粘液弾",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
hornRabbit:{id:"hornRabbit",name:"角ウサギ",portrait:"角兎",maxHp:55,atk:10,def:2,exp:11,materials:[["角ウサギ素材",1,.58],["強化片",1,.18]],learnSkill:"突進",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
goblinRaider:{id:"goblinRaider",name:"ゴブリンレイダー",portrait:"小鬼",maxHp:75,atk:16,def:4,exp:20,materials:[["ゴブリンレイダー素材",1,.58],["強化片",1,.18]],learnSkill:"乱れ斬り",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
shadowWolf:{id:"shadowWolf",name:"影狼",portrait:"影狼",maxHp:120,atk:22,def:5,exp:30,materials:[["影狼素材",1,.58],["強化片",1,.18]],learnSkill:"シャドウバイト",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
poisonMoth:{id:"poisonMoth",name:"毒蛾",portrait:"毒蛾",maxHp:95,atk:18,def:3,exp:26,materials:[["毒蛾素材",1,.58],["強化片",1,.18]],learnSkill:"毒鱗粉",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
mushroomBeast:{id:"mushroomBeast",name:"マッシュビースト",portrait:"茸獣",maxHp:210,atk:36,def:18,exp:80,materials:[["マッシュビースト素材",1,.58],["強化片",1,.18]],learnSkill:"胞子爆発",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
stoneTurtle:{id:"stoneTurtle",name:"ストーンタートル",portrait:"石亀",maxHp:240,atk:26,def:35,exp:95,materials:[["ストーンタートル素材",1,.58],["強化片",1,.18]],learnSkill:"甲羅砕き",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
masekiGolem:{id:"masekiGolem",name:"魔石ゴーレム",portrait:"魔像",maxHp:260,atk:40,def:16,exp:85,materials:[["魔石ゴーレム素材",1,.58],["強化片",1,.18]],learnSkill:"ストーンブレイク",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
crystalBat:{id:"crystalBat",name:"水晶コウモリ",portrait:"晶蝙",maxHp:190,atk:45,def:8,exp:76,materials:[["水晶コウモリ素材",1,.58],["強化片",1,.18]],learnSkill:"クリスタルエッジ",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
ghostWisp:{id:"ghostWisp",name:"ゴーストウィスプ",portrait:"霊火",maxHp:150,atk:48,def:7,exp:72,materials:[["ゴーストウィスプ素材",1,.58],["強化片",1,.18]],learnSkill:"霊火弾",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
ancientSoldier:{id:"ancientSoldier",name:"古代兵",portrait:"古兵",maxHp:520,atk:88,def:28,exp:210,materials:[["古代兵素材",1,.58],["強化片",1,.18]],learnSkill:"古代剣技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
runeWisp:{id:"runeWisp",name:"ルーンウィスプ",portrait:"術光",maxHp:430,atk:105,def:18,exp:240,materials:[["ルーンウィスプ素材",1,.58],["強化片",1,.18]],learnSkill:"ルーンバースト",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
skeletonSwordsman:{id:"skeletonSwordsman",name:"骸骨剣士",portrait:"骸剣",maxHp:180,atk:42,def:12,exp:65,materials:[["骸骨剣士素材",1,.58],["強化片",1,.18]],learnSkill:"ボーンスラッシュ",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
lesserDragon:{id:"lesserDragon",name:"レッサードラゴン",portrait:"竜",maxHp:1600,atk:280,def:80,exp:980,materials:[["レッサードラゴン素材",1,.58],["強化片",1,.18]],learnSkill:"竜爪撃",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
rainbowDrake:{id:"rainbowDrake",name:"虹鱗ドレイク",portrait:"虹竜",maxHp:2400,atk:380,def:110,exp:1500,materials:[["虹鱗ドレイク素材",1,.58],["強化片",1,.18]],learnSkill:"虹鱗閃",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
fireLizard:{id:"fireLizard",name:"炎尾リザード",portrait:"炎蜥",maxHp:1800,atk:420,def:95,exp:1200,materials:[["炎尾リザード素材",1,.58],["強化片",1,.18]],learnSkill:"フレイムテイル",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
thunderHawk:{id:"thunderHawk",name:"雷鳴ホーク",portrait:"雷鷹",maxHp:2600,atk:720,def:160,exp:2400,materials:[["雷鳴ホーク素材",1,.58],["強化片",1,.18]],learnSkill:"サンダーダイブ",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
voidAngel:{id:"voidAngel",name:"虚無天使",portrait:"虚天",maxHp:12000,atk:2200,def:800,exp:9000,materials:[["虚無天使素材",1,.58],["強化片",1,.18]],learnSkill:"虚無光",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
godFragment:{id:"godFragment",name:"神の欠片",portrait:"神片",maxHp:28000,atk:4800,def:1600,exp:24000,materials:[["神の欠片素材",1,.58],["強化片",1,.18]],learnSkill:"神片解放",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
iceSpirit:{id:"iceSpirit",name:"氷晶精霊",portrait:"氷精",maxHp:5200,atk:980,def:360,exp:4200,materials:[["氷晶精霊素材",1,.58],["強化片",1,.18]],learnSkill:"アイスプリズム",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
corruptedTreant:{id:"corruptedTreant",name:"腐敗トレント",portrait:"腐樹",maxHp:3200,atk:520,def:220,exp:2100,materials:[["腐敗トレント素材",1,.58],["強化片",1,.18]],learnSkill:"樹縛り",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra1:{id:"extra1",name:"草原ラット",portrait:"草原",maxHp:70,atk:14,def:3,exp:17,materials:[["草原ラット素材",1,.58],["強化片",1,.18]],learnSkill:"草原技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra2:{id:"extra2",name:"青羽スライム",portrait:"青羽",maxHp:81,atk:16,def:4,exp:20,materials:[["青羽スライム素材",1,.58],["強化片",1,.18]],learnSkill:"青羽技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra3:{id:"extra3",name:"葉っぱインプ",portrait:"葉っ",maxHp:92,atk:18,def:4,exp:23,materials:[["葉っぱインプ素材",1,.58],["強化片",1,.18]],learnSkill:"葉っ技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra4:{id:"extra4",name:"石ころボア",portrait:"石こ",maxHp:103,atk:20,def:5,exp:25,materials:[["石ころボア素材",1,.58],["強化片",1,.18]],learnSkill:"石こ技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra5:{id:"extra5",name:"微光フェアリー",portrait:"微光",maxHp:114,atk:22,def:5,exp:28,materials:[["微光フェアリー素材",1,.58],["強化片",1,.18]],learnSkill:"微光技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra6:{id:"extra6",name:"野良ミミック",portrait:"野良",maxHp:124,atk:24,def:6,exp:31,materials:[["野良ミミック素材",1,.58],["強化片",1,.18]],learnSkill:"野良技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra7:{id:"extra7",name:"草角ビースト",portrait:"草角",maxHp:135,atk:27,def:6,exp:33,materials:[["草角ビースト素材",1,.58],["強化片",1,.18]],learnSkill:"草角技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra8:{id:"extra8",name:"小牙コボルト",portrait:"小牙",maxHp:146,atk:29,def:7,exp:36,materials:[["小牙コボルト素材",1,.58],["強化片",1,.18]],learnSkill:"小牙技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra9:{id:"extra9",name:"夜目フクロウ",portrait:"夜目",maxHp:157,atk:31,def:7,exp:39,materials:[["夜目フクロウ素材",1,.58],["強化片",1,.18]],learnSkill:"夜目技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra10:{id:"extra10",name:"黒蔦ワーム",portrait:"黒蔦",maxHp:168,atk:33,def:8,exp:42,materials:[["黒蔦ワーム素材",1,.58],["強化片",1,.18]],learnSkill:"黒蔦技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra11:{id:"extra11",name:"影キノコ",portrait:"影キ",maxHp:178,atk:35,def:8,exp:44,materials:[["影キノコ素材",1,.58],["強化片",1,.18]],learnSkill:"影キ技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra12:{id:"extra12",name:"月牙ジャッカル",portrait:"月牙",maxHp:189,atk:37,def:9,exp:47,materials:[["月牙ジャッカル素材",1,.58],["強化片",1,.18]],learnSkill:"月牙技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra13:{id:"extra13",name:"毒花スピリット",portrait:"毒花",maxHp:200,atk:40,def:10,exp:50,materials:[["毒花スピリット素材",1,.58],["強化片",1,.18]],learnSkill:"毒花技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra14:{id:"extra14",name:"霧隠れ鹿",portrait:"霧隠",maxHp:211,atk:42,def:10,exp:52,materials:[["霧隠れ鹿素材",1,.58],["強化片",1,.18]],learnSkill:"霧隠技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra15:{id:"extra15",name:"古枝ゴブリン",portrait:"古枝",maxHp:221,atk:44,def:11,exp:55,materials:[["古枝ゴブリン素材",1,.58],["強化片",1,.18]],learnSkill:"古枝技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra16:{id:"extra16",name:"黒葉マンティス",portrait:"黒葉",maxHp:232,atk:46,def:11,exp:58,materials:[["黒葉マンティス素材",1,.58],["強化片",1,.18]],learnSkill:"黒葉技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra17:{id:"extra17",name:"鉱石クラブ",portrait:"鉱石",maxHp:243,atk:48,def:12,exp:60,materials:[["鉱石クラブ素材",1,.58],["強化片",1,.18]],learnSkill:"鉱石技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra18:{id:"extra18",name:"結晶スネーク",portrait:"結晶",maxHp:254,atk:50,def:12,exp:63,materials:[["結晶スネーク素材",1,.58],["強化片",1,.18]],learnSkill:"結晶技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra19:{id:"extra19",name:"洞窟オーガ",portrait:"洞窟",maxHp:265,atk:53,def:13,exp:66,materials:[["洞窟オーガ素材",1,.58],["強化片",1,.18]],learnSkill:"洞窟技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra20:{id:"extra20",name:"魔石スパイダー",portrait:"魔石",maxHp:276,atk:55,def:13,exp:69,materials:[["魔石スパイダー素材",1,.58],["強化片",1,.18]],learnSkill:"魔石技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra21:{id:"extra21",name:"地下リザード",portrait:"地下",maxHp:286,atk:57,def:14,exp:71,materials:[["地下リザード素材",1,.58],["強化片",1,.18]],learnSkill:"地下技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra22:{id:"extra22",name:"青岩ナイト",portrait:"青岩",maxHp:297,atk:59,def:14,exp:74,materials:[["青岩ナイト素材",1,.58],["強化片",1,.18]],learnSkill:"青岩技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra23:{id:"extra23",name:"水晶スライム",portrait:"水晶",maxHp:308,atk:61,def:15,exp:77,materials:[["水晶スライム素材",1,.58],["強化片",1,.18]],learnSkill:"水晶技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra24:{id:"extra24",name:"硫黄バット",portrait:"硫黄",maxHp:319,atk:63,def:15,exp:79,materials:[["硫黄バット素材",1,.58],["強化片",1,.18]],learnSkill:"硫黄技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra25:{id:"extra25",name:"碑文ゴーレム",portrait:"碑文",maxHp:330,atk:66,def:16,exp:82,materials:[["碑文ゴーレム素材",1,.58],["強化片",1,.18]],learnSkill:"碑文技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra26:{id:"extra26",name:"壊れた守護者",portrait:"壊れ",maxHp:340,atk:68,def:17,exp:85,materials:[["壊れた守護者素材",1,.58],["強化片",1,.18]],learnSkill:"壊れ技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra27:{id:"extra27",name:"古代機兵",portrait:"古代",maxHp:351,atk:70,def:17,exp:87,materials:[["古代機兵素材",1,.58],["強化片",1,.18]],learnSkill:"古代技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra28:{id:"extra28",name:"呪印スカル",portrait:"呪印",maxHp:362,atk:72,def:18,exp:90,materials:[["呪印スカル素材",1,.58],["強化片",1,.18]],learnSkill:"呪印技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra29:{id:"extra29",name:"金眼ファントム",portrait:"金眼",maxHp:373,atk:74,def:18,exp:93,materials:[["金眼ファントム素材",1,.58],["強化片",1,.18]],learnSkill:"金眼技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra30:{id:"extra30",name:"時計仕掛けの獣",portrait:"時計",maxHp:383,atk:76,def:19,exp:95,materials:[["時計仕掛けの獣素材",1,.58],["強化片",1,.18]],learnSkill:"時計技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra31:{id:"extra31",name:"古布ミイラ",portrait:"古布",maxHp:394,atk:78,def:19,exp:98,materials:[["古布ミイラ素材",1,.58],["強化片",1,.18]],learnSkill:"古布技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra32:{id:"extra32",name:"赤錆ナイト",portrait:"赤錆",maxHp:405,atk:81,def:20,exp:101,materials:[["赤錆ナイト素材",1,.58],["強化片",1,.18]],learnSkill:"赤錆技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra33:{id:"extra33",name:"竜血ハウンド",portrait:"竜血",maxHp:416,atk:83,def:20,exp:104,materials:[["竜血ハウンド素材",1,.58],["強化片",1,.18]],learnSkill:"竜血技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra34:{id:"extra34",name:"火山サラマンダー",portrait:"火山",maxHp:427,atk:85,def:21,exp:106,materials:[["火山サラマンダー素材",1,.58],["強化片",1,.18]],learnSkill:"火山技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra35:{id:"extra35",name:"翼竜の幼体",portrait:"翼竜",maxHp:438,atk:87,def:21,exp:109,materials:[["翼竜の幼体素材",1,.58],["強化片",1,.18]],learnSkill:"翼竜技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra36:{id:"extra36",name:"燃える鱗獣",portrait:"燃え",maxHp:448,atk:89,def:22,exp:112,materials:[["燃える鱗獣素材",1,.58],["強化片",1,.18]],learnSkill:"燃え技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra37:{id:"extra37",name:"雷爪ラプター",portrait:"雷爪",maxHp:459,atk:91,def:22,exp:114,materials:[["雷爪ラプター素材",1,.58],["強化片",1,.18]],learnSkill:"雷爪技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra38:{id:"extra38",name:"溶岩ゴーレム",portrait:"溶岩",maxHp:470,atk:94,def:23,exp:117,materials:[["溶岩ゴーレム素材",1,.58],["強化片",1,.18]],learnSkill:"溶岩技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra39:{id:"extra39",name:"竜骨スカル",portrait:"竜骨",maxHp:481,atk:96,def:24,exp:120,materials:[["竜骨スカル素材",1,.58],["強化片",1,.18]],learnSkill:"竜骨技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra40:{id:"extra40",name:"風切りワイバーン",portrait:"風切",maxHp:491,atk:98,def:24,exp:122,materials:[["風切りワイバーン素材",1,.58],["強化片",1,.18]],learnSkill:"風切技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra41:{id:"extra41",name:"竜巫女の影",portrait:"竜巫",maxHp:502,atk:100,def:25,exp:125,materials:[["竜巫女の影素材",1,.58],["強化片",1,.18]],learnSkill:"竜巫技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra42:{id:"extra42",name:"白光の欠片",portrait:"白光",maxHp:513,atk:102,def:25,exp:128,materials:[["白光の欠片素材",1,.58],["強化片",1,.18]],learnSkill:"白光技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra43:{id:"extra43",name:"黒翼の使徒",portrait:"黒翼",maxHp:524,atk:104,def:26,exp:131,materials:[["黒翼の使徒素材",1,.58],["強化片",1,.18]],learnSkill:"黒翼技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra44:{id:"extra44",name:"虹晶スフィア",portrait:"虹晶",maxHp:535,atk:107,def:26,exp:133,materials:[["虹晶スフィア素材",1,.58],["強化片",1,.18]],learnSkill:"虹晶技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra45:{id:"extra45",name:"神域ゴーレム",portrait:"神域",maxHp:546,atk:109,def:27,exp:136,materials:[["神域ゴーレム素材",1,.58],["強化片",1,.18]],learnSkill:"神域技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra46:{id:"extra46",name:"虚空スライム",portrait:"虚空",maxHp:556,atk:111,def:27,exp:139,materials:[["虚空スライム素材",1,.58],["強化片",1,.18]],learnSkill:"虚空技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra47:{id:"extra47",name:"天罰の鳥",portrait:"天罰",maxHp:567,atk:113,def:28,exp:141,materials:[["天罰の鳥素材",1,.58],["強化片",1,.18]],learnSkill:"天罰技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra48:{id:"extra48",name:"終末の影",portrait:"終末",maxHp:578,atk:115,def:28,exp:144,materials:[["終末の影素材",1,.58],["強化片",1,.18]],learnSkill:"終末技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
extra49:{id:"extra49",name:"調律の残響",portrait:"調律",maxHp:589,atk:117,def:29,exp:147,materials:[["調律の残響素材",1,.58],["強化片",1,.18]],learnSkill:"調律技",learnRate:.075,img:"./assets/enemy-sheet-2.png"},
extra50:{id:"extra50",name:"原初の火種",portrait:"原初",maxHp:600,atk:120,def:30,exp:150,materials:[["原初の火種素材",1,.58],["強化片",1,.18]],learnSkill:"原初技",learnRate:.075,img:"./assets/enemy-sheet-1.png"},
rare_grass_1:{id:"rare_grass_1",name:"黄金スライム",portrait:"黄金",maxHp:540,atk:100,def:38,exp:225,materials:[["黄金スライム核",1,.8],["レア結晶",1,.45]],learnSkill:"黄金奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_grass_2:{id:"rare_grass_2",name:"虹角ラビット",portrait:"虹角",maxHp:979,atk:173,def:64,exp:420,materials:[["虹角ラビット核",1,.8],["レア結晶",1,.45]],learnSkill:"虹角奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_grass_3:{id:"rare_grass_3",name:"草原の小王",portrait:"草原",maxHp:1680,atk:285,def:104,exp:735,materials:[["草原の小王核",1,.8],["レア結晶",1,.45]],learnSkill:"草原奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_forest_1:{id:"rare_forest_1",name:"月影フェンリル",portrait:"月影",maxHp:810,atk:133,def:47,exp:360,materials:[["月影フェンリル核",1,.8],["レア結晶",1,.45]],learnSkill:"月影奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_forest_2:{id:"rare_forest_2",name:"毒蝶女王",portrait:"毒蝶",maxHp:1400,atk:224,def:78,exp:630,materials:[["毒蝶女王核",1,.8],["レア結晶",1,.45]],learnSkill:"毒蝶奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_forest_3:{id:"rare_forest_3",name:"黒森の古霊",portrait:"黒森",maxHp:2310,atk:361,def:124,exp:1050,materials:[["黒森の古霊核",1,.8],["レア結晶",1,.45]],learnSkill:"黒森奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_cave_1:{id:"rare_cave_1",name:"純魔石ゴーレム",portrait:"純魔",maxHp:1080,atk:165,def:56,exp:495,materials:[["純魔石ゴーレム核",1,.8],["レア結晶",1,.45]],learnSkill:"純魔奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_cave_2:{id:"rare_cave_2",name:"星晶バット",portrait:"星晶",maxHp:1820,atk:274,def:91,exp:840,materials:[["星晶バット核",1,.8],["レア結晶",1,.45]],learnSkill:"星晶奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_cave_3:{id:"rare_cave_3",name:"地底の宝王",portrait:"地底",maxHp:2940,atk:436,def:144,exp:1365,materials:[["地底の宝王核",1,.8],["レア結晶",1,.45]],learnSkill:"地底奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_ruins_1:{id:"rare_ruins_1",name:"古代将軍",portrait:"古代",maxHp:1350,atk:198,def:64,exp:630,materials:[["古代将軍核",1,.8],["レア結晶",1,.45]],learnSkill:"古代奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_ruins_2:{id:"rare_ruins_2",name:"禁呪ウィスプ",portrait:"禁呪",maxHp:2240,atk:324,def:105,exp:1050,materials:[["禁呪ウィスプ核",1,.8],["レア結晶",1,.45]],learnSkill:"禁呪奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_ruins_3:{id:"rare_ruins_3",name:"失われた王影",portrait:"失わ",maxHp:3570,atk:512,def:164,exp:1680,materials:[["失われた王影核",1,.8],["レア結晶",1,.45]],learnSkill:"失わ奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_dragonValley_1:{id:"rare_dragonValley_1",name:"白竜の雛",portrait:"白竜",maxHp:1620,atk:230,def:73,exp:765,materials:[["白竜の雛核",1,.8],["レア結晶",1,.45]],learnSkill:"白竜奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_dragonValley_2:{id:"rare_dragonValley_2",name:"虹炎ドレイク",portrait:"虹炎",maxHp:2660,atk:375,def:118,exp:1260,materials:[["虹炎ドレイク核",1,.8],["レア結晶",1,.45]],learnSkill:"虹炎奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_dragonValley_3:{id:"rare_dragonValley_3",name:"竜谷の覇者",portrait:"竜谷",maxHp:4200,atk:588,def:184,exp:1995,materials:[["竜谷の覇者核",1,.8],["レア結晶",1,.45]],learnSkill:"竜谷奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_divine_1:{id:"rare_divine_1",name:"白黒虹の幻影",portrait:"白黒",maxHp:1890,atk:262,def:82,exp:900,materials:[["白黒虹の幻影核",1,.8],["レア結晶",1,.45]],learnSkill:"白黒奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_divine_2:{id:"rare_divine_2",name:"虚無熾天使",portrait:"虚無",maxHp:3080,atk:425,def:132,exp:1470,materials:[["虚無熾天使核",1,.8],["レア結晶",1,.45]],learnSkill:"虚無奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true},
rare_divine_3:{id:"rare_divine_3",name:"神域の観測者",portrait:"神域",maxHp:4830,atk:663,def:204,exp:2310,materials:[["神域の観測者核",1,.8],["レア結晶",1,.45]],learnSkill:"神域奥義",learnRate:.12,img:"./assets/enemy-sheet-2.png",rare:true}
};

const SKILL_LIBRARY={
"アイスプリズム":{mp:4,power:1.2,base:8,targets:3},
"クリスタルエッジ":{mp:7,power:1.55,base:13,targets:1},
"サンダーダイブ":{mp:10,power:1.9,base:18,targets:2},
"シャドウバイト":{mp:13,power:2.25,base:23,targets:2},
"ストーンブレイク":{mp:16,power:2.6,base:28,targets:2},
"フレイムテイル":{mp:19,power:2.95,base:33,targets:1},
"ボーンスラッシュ":{mp:22,power:3.3,base:38,targets:2},
"ルーンバースト":{mp:25,power:3.65,base:43,targets:3},
"乱れ斬り":{mp:28,power:4.0,base:48,targets:2},
"原初技":{mp:31,power:4.35,base:53,targets:2},
"古代剣技":{mp:34,power:4.7,base:58,targets:1},
"古代奥義":{mp:37,power:5.05,base:63,targets:3},
"古代技":{mp:4,power:5.4,base:68,targets:2},
"古布技":{mp:7,power:5.75,base:73,targets:1},
"古枝技":{mp:10,power:6.1,base:78,targets:1},
"呪印技":{mp:13,power:6.45,base:83,targets:2},
"地下技":{mp:16,power:6.8,base:88,targets:1},
"地底奥義":{mp:19,power:7.15,base:93,targets:3},
"壊れ技":{mp:22,power:1.2,base:98,targets:2},
"夜目技":{mp:25,power:1.55,base:103,targets:1},
"天罰技":{mp:28,power:1.9,base:108,targets:1},
"失わ奥義":{mp:31,power:2.25,base:113,targets:3},
"小牙技":{mp:34,power:2.6,base:118,targets:1},
"影キ技":{mp:37,power:2.95,base:123,targets:1},
"微光技":{mp:4,power:3.3,base:128,targets:2},
"星晶奥義":{mp:7,power:3.65,base:133,targets:3},
"時計技":{mp:10,power:4.0,base:138,targets:1},
"月影奥義":{mp:13,power:4.35,base:143,targets:3},
"月牙技":{mp:16,power:4.7,base:148,targets:1},
"樹縛り":{mp:19,power:5.05,base:153,targets:1},
"毒花技":{mp:22,power:5.4,base:158,targets:2},
"毒蝶奥義":{mp:25,power:5.75,base:163,targets:3},
"毒鱗粉":{mp:28,power:6.1,base:168,targets:1},
"水晶技":{mp:31,power:6.45,base:173,targets:2},
"洞窟技":{mp:34,power:6.8,base:178,targets:1},
"溶岩技":{mp:37,power:7.15,base:183,targets:1},
"火山技":{mp:4,power:1.2,base:188,targets:2},
"燃え技":{mp:7,power:1.55,base:193,targets:1},
"甲羅砕き":{mp:10,power:1.9,base:198,targets:1},
"白光技":{mp:13,power:2.25,base:203,targets:2},
"白竜奥義":{mp:16,power:2.6,base:208,targets:3},
"白黒奥義":{mp:19,power:2.95,base:213,targets:3},
"石こ技":{mp:22,power:3.3,base:218,targets:2},
"硫黄技":{mp:25,power:3.65,base:223,targets:1},
"碑文技":{mp:28,power:4.0,base:228,targets:1},
"神域奥義":{mp:31,power:4.35,base:233,targets:3},
"神域技":{mp:34,power:4.7,base:238,targets:3},
"神片解放":{mp:37,power:5.05,base:243,targets:3},
"禁呪奥義":{mp:4,power:5.4,base:248,targets:3},
"突進":{mp:7,power:5.75,base:253,targets:1},
"竜巫技":{mp:10,power:6.1,base:258,targets:1},
"竜爪撃":{mp:13,power:6.45,base:263,targets:2},
"竜血技":{mp:16,power:6.8,base:268,targets:1},
"竜谷奥義":{mp:19,power:7.15,base:273,targets:3},
"竜骨技":{mp:22,power:1.2,base:278,targets:2},
"粘液弾":{mp:25,power:1.55,base:283,targets:2},
"純魔奥義":{mp:28,power:1.9,base:288,targets:3},
"終末技":{mp:31,power:2.25,base:293,targets:2},
"結晶技":{mp:34,power:2.6,base:298,targets:1},
"翼竜技":{mp:37,power:2.95,base:303,targets:1},
"胞子爆発":{mp:4,power:3.3,base:308,targets:3},
"草原奥義":{mp:7,power:3.65,base:313,targets:3},
"草原技":{mp:10,power:4.0,base:318,targets:1},
"草角技":{mp:13,power:4.35,base:323,targets:2},
"葉っ技":{mp:16,power:4.7,base:328,targets:1},
"虚無光":{mp:19,power:5.05,base:333,targets:1},
"虚無奥義":{mp:22,power:5.4,base:338,targets:3},
"虚空技":{mp:25,power:5.75,base:343,targets:1},
"虹斬り":{mp:5,power:1.8,base:12,targets:1},
"虹晶技":{mp:31,power:6.45,base:353,targets:2},
"虹炎奥義":{mp:34,power:6.8,base:358,targets:3},
"虹角奥義":{mp:37,power:7.15,base:363,targets:3},
"虹鱗閃":{mp:4,power:1.2,base:368,targets:2},
"調律技":{mp:7,power:1.55,base:373,targets:1},
"赤錆技":{mp:10,power:1.9,base:378,targets:1},
"野良技":{mp:13,power:2.25,base:383,targets:2},
"金眼技":{mp:16,power:2.6,base:388,targets:1},
"鉱石技":{mp:19,power:2.95,base:393,targets:1},
"雷爪技":{mp:22,power:3.3,base:398,targets:2},
"霊火弾":{mp:25,power:3.65,base:403,targets:2},
"霧隠技":{mp:28,power:4.0,base:408,targets:1},
"青岩技":{mp:31,power:4.35,base:413,targets:2},
"青羽技":{mp:34,power:4.7,base:418,targets:1},
"風切技":{mp:37,power:5.05,base:423,targets:1},
"魔石技":{mp:4,power:5.4,base:428,targets:2},
"黄金奥義":{mp:7,power:5.75,base:433,targets:3},
"黒森奥義":{mp:10,power:6.1,base:438,targets:3},
"黒翼技":{mp:13,power:6.45,base:443,targets:2},
"黒葉技":{mp:16,power:6.8,base:448,targets:1},
"黒蔦技":{mp:19,power:7.15,base:453,targets:1}
};

const SHOP_ITEMS=[
{id:"ironSword",name:"鉄の剣",slot:"weapon",price:80,stats:{atk:8},effects:{}},
{id:"masekiBlade",name:"魔石刀",slot:"weapon",price:600,stats:{atk:55,maxMp:10},effects:{skillLearnRate:0.02}},
{id:"rainbowEdge",name:"虹刃の剣",slot:"weapon",price:4200,stats:{atk:360,maxMp:120},effects:{damageRate:0.15,skillLearnRate:0.04}},
{id:"rareHunterBlade",name:"希少狩りの刃",slot:"weapon",price:7000,stats:{atk:520},effects:{rareRate:0.04,damageRate:0.08}},
{id:"multiEdge",name:"連撃の双剣",slot:"weapon",price:11000,stats:{atk:760},effects:{extraTargets:1,damageRate:0.05}},
{id:"clothArmor",name:"旅人の服",slot:"armor",price:50,stats:{def:4,maxHp:20},effects:{}},
{id:"blackCoat",name:"黒虹の外套",slot:"armor",price:900,stats:{def:60,maxHp:280},effects:{rareRate:0.015}},
{id:"sageRobe",name:"経験の法衣",slot:"armor",price:3500,stats:{def:120,maxMp:180},effects:{expRate:0.35}},
{id:"divineArmor",name:"神域装束",slot:"armor",price:12000,stats:{def:900,maxHp:5000,maxMp:500},effects:{expRate:0.5,damageRate:0.12}},
{id:"stoneCharm",name:"魔石の護符",slot:"accessory",price:300,stats:{atk:10,def:10,maxMp:30},effects:{absorbRate:0.15}},
{id:"rainbowCharm",name:"白黒虹の環",slot:"accessory",price:9000,stats:{atk:700,def:500,maxHp:4000,maxMp:1000},effects:{rareRate:0.03,expRate:0.25,damageRate:0.1}},
{id:"doubleExpOrb",name:"経験倍増の宝珠",slot:"accessory",price:18000,stats:{maxMp:1200},effects:{expRate:1.0}},
{id:"potionPack",name:"回復薬セット",type:"consumable",price:120,amount:3}
];

const CRAFT_RECIPES=[
{id:"wolfBlade",name:"影狼牙の短剣",slot:"weapon",stats:{atk:95},effects:{damageRate:0.04},costMoney:250,materials:{"影狼素材":4,"強化片":2}},
{id:"golemArmor",name:"魔石岩盤鎧",slot:"armor",stats:{def:150,maxHp:600},effects:{absorbRate:0.1},costMoney:700,materials:{"魔石ゴーレム素材":4,"魔石粉":6}},
{id:"ancientSword",name:"古代紋章剣",slot:"weapon",stats:{atk:620,maxMp:140},effects:{expRate:0.2,damageRate:0.08},costMoney:2500,materials:{"古代兵素材":4,"ルーンウィスプ素材":4}},
{id:"dragonBlade",name:"竜牙虹刀",slot:"weapon",stats:{atk:2200,maxHp:1500},effects:{damageRate:0.25,extraTargets:1},costMoney:9000,materials:{"レッサードラゴン素材":5,"虹鱗ドレイク素材":5,"レア結晶":2}},
{id:"rareCrown",name:"レア王の冠",slot:"accessory",stats:{atk:900,def:600,maxHp:3000},effects:{rareRate:0.08,expRate:0.25},costMoney:22000,materials:{"レア結晶":10}},
{id:"godRing",name:"白黒虹核の指輪",slot:"accessory",stats:{atk:5000,def:3500,maxHp:20000,maxMp:5000},effects:{rareRate:0.08,expRate:1.0,damageRate:0.3,extraTargets:1,absorbRate:0.25},costMoney:50000,materials:{"神の欠片素材":8,"レア結晶":12}}
];

const ALLIES=[
{id:"white",name:"白虹の剣姫",requirementText:"Lv8以上 / 500G / 魔石刀を所持",canJoin:()=>state.player.level>=8&&state.player.money>=500&&hasEquipment("masekiBlade"),cost:()=>{state.player.money-=500},bonus:{atk:35,maxHp:150}},
{id:"black",name:"黒虹の魔女",requirementText:"Lv16以上 / 3000G / 黒虹の外套を所持",canJoin:()=>state.player.level>=16&&state.player.money>=3000&&hasEquipment("blackCoat"),cost:()=>{state.player.money-=3000},bonus:{atk:120,maxMp:500}},
{id:"dragon",name:"虹龍",requirementText:"Lv30以上 / 15000G / 竜牙虹刀を所持",canJoin:()=>state.player.level>=30&&state.player.money>=15000&&hasEquipment("dragonBlade"),cost:()=>{state.player.money-=15000},bonus:{atk:1200,def:800,maxHp:9000}}
];

const QUESTS=[
{id:"slimeHunter",name:"草原の掃討",description:"草原の敵を10体倒す。報酬：500G、回復薬×5",done:()=>areaKills("grass")>=10,reward:()=>{state.player.money+=500;state.player.items.potion+=5}},
{id:"rareFirst",name:"初めての希少種",description:"レアエネミーを1体倒す。報酬：3000G、レア結晶×2",done:()=>state.rareKills>=1,reward:()=>{state.player.money+=3000;addMaterial("レア結晶",2)}},
{id:"dragonProof",name:"竜の谷の証明",description:"竜の谷の敵を15体倒す。報酬：12000G",done:()=>areaKills("dragonValley")>=15,reward:()=>{state.player.money+=12000}}
];

const audio={enabled:false,ctx:null,bgmTimer:null};
const longPress={timer:null,interval:null};
let state=init();

function init(){return{currentLocation:"grass",enemies:[],battleOver:false,kills:{},areaKillMap:{},rareKills:0,claimedQuests:{},unlockedAllies:{},selectedTarget:0,player:{name:"白黒虹の主人公",level:1,exp:0,nextExp:25,hp:100,maxHp:100,mp:30,maxMp:30,atk:12,def:3,money:0,stones:0,totalAbsorbed:0,items:{potion:5},materials:{},inventory:{},equipment:{weapon:null,armor:null,accessory:null},skills:{"虹斬り":{name:"虹斬り",level:1,exp:0,nextExp:10}},skillSlots:["虹斬り",null,null,null,null,null,null,null,null]}}}
function migrate(){if(!state.enemies&&state.enemy)state.enemies=state.enemy?[state.enemy]:[];if(!state.enemies)state.enemies=[];if(!state.areaKillMap)state.areaKillMap={};if(!state.rareKills)state.rareKills=0;if(!state.player.skillSlots)state.player.skillSlots=["虹斬り",null,null,null,null,null,null,null,null];if(state.player.skills&&state.player.skills["虹斬り"]&&!state.player.skillSlots.includes("虹斬り"))state.player.skillSlots[0]="虹斬り";}
function format(n){n=Math.floor(Number(n)||0);if(n<1e4)return String(n);if(n>=1e12)return(n/1e12).toFixed(2).replace(/\.00$/,"")+"兆";if(n>=1e8)return(n/1e8).toFixed(2).replace(/\.00$/,"")+"億";return(n/1e4).toFixed(2).replace(/\.00$/,"")+"万"}
function rand(a,b){return Math.floor(Math.random()*(b-a+1))+a}function choice(a){return a[Math.floor(Math.random()*a.length)]}function loc(){return LOCATIONS.find(l=>l.id===state.currentLocation)||LOCATIONS[0]}
function equipEffects(){const e={rareRate:0,expRate:0,damageRate:0,extraTargets:0,absorbRate:0,skillLearnRate:0};["weapon","armor","accessory"].forEach(s=>{const it=findItem(state.player.equipment[s]);if(it&&it.effects)Object.entries(it.effects).forEach(([k,v])=>e[k]=(e[k]||0)+v)});return e}
function totals(){const p=state.player,b={maxHp:0,maxMp:0,atk:0,def:0};["weapon","armor","accessory"].forEach(s=>{const it=findItem(p.equipment[s]);if(it&&it.stats)Object.entries(it.stats).forEach(([k,v])=>b[k]=(b[k]||0)+v)});ALLIES.forEach(a=>{if(state.unlockedAllies[a.id])Object.entries(a.bonus).forEach(([k,v])=>b[k]=(b[k]||0)+v)});return{maxHp:p.maxHp+b.maxHp,maxMp:p.maxMp+b.maxMp,atk:p.atk+b.atk,def:p.def+b.def}}
function enemyCountForLocation(l){if(state.player.level<8)return 1;if(state.player.level<18)return Math.min(2,l.maxEnemies);return Math.min(3,l.maxEnemies)}
function rarePick(l){const eff=equipEffects();const probs=[0.10,0.05,0.03].map(p=>Math.min(0.75,p+eff.rareRate));for(let i=0;i<l.rareEnemies.length;i++){if(Math.random()<probs[i])return l.rareEnemies[i]}return null}
function spawnEnemyGroup(){const l=loc();const count=enemyCountForLocation(l);state.enemies=[];for(let i=0;i<count;i++){const rid=rarePick(l);const id=rid||choice(l.enemies);state.enemies.push(makeEnemy(id,l,i));}state.battleOver=false;state.selectedTarget=0;const rares=state.enemies.filter(e=>e.rare).length;log(`${l.name}：敵${state.enemies.length}体が出現。${rares?`レア${rares}体！`:""}`,rares?"rare2":"");sfx("spawn");render();toast(`敵${state.enemies.length}体 出現`)}
function makeEnemy(id,l,i){const e=ENEMIES[id],scale=1+Math.max(0,state.player.level-l.minLevel)*.11+(i*.08);return{uid:Date.now()+"_"+i+"_"+Math.random(),id,name:e.name,portrait:e.portrait,img:e.img||"",maxHp:Math.floor(e.maxHp*scale),hp:Math.floor(e.maxHp*scale),atk:Math.floor(e.atk*scale),def:Math.floor(e.def*scale),exp:Math.floor(e.exp*scale),stones:stoneDrop(e.rare),materials:e.materials,learnSkill:e.learnSkill,learnRate:e.learnRate,rare:!!e.rare}}
function stoneDrop(isRare){let amount=1;if(Math.random()<0.18)amount++;if(Math.random()<0.05)amount+=rand(1,3);if(isRare)amount+=rand(2,8);return amount}
function aliveEnemies(){return state.enemies.filter(e=>e.hp>0)}
function selectedEnemy(){const alive=aliveEnemies();return alive[Math.min(state.selectedTarget,Math.max(0,alive.length-1))]}
function canAct(req=true){if(req&&aliveEnemies().length===0){log("敵がいない。次の敵を待とう。","bad");return false}return true}
function attack(){if(!canAct())return;const e=selectedEnemy();applyDamageTo([e],basicDamage(),"攻撃",false);sfx("attack");heroMotion("attack");if(aliveEnemies().length>0)enemyTurn();render()}
function basicDamage(){const t=totals(),eff=equipEffects();return Math.max(1,Math.floor((rand(Math.floor(t.atk*.85),Math.floor(t.atk*1.15)))*(1+eff.damageRate)))}
function useSkill(name){if(!canAct())return;const s=state.player.skills[name],lib=SKILL_LIBRARY[name];if(!s||!lib)return log("その技はまだ使えない。","bad");if(state.player.mp<lib.mp)return log(`MP不足。${name}はMP${lib.mp}必要。`,"bad");state.player.mp-=lib.mp;const t=totals(),eff=equipEffects(),bonus=1+(s.level-1)*.22;let dmg=Math.max(1,Math.floor((t.atk*lib.power+lib.base)*bonus*(rand(90,115)/100)*(1+eff.damageRate)));const count=lib.targets>=99?aliveEnemies().length:Math.min(aliveEnemies().length,lib.targets+(eff.extraTargets||0));const targets=pickTargets(count);skillExp(name,5+s.level);applyDamageTo(targets,dmg,`${name} Lv${s.level}`,true);sfx("skill");heroMotion("skill");if(aliveEnemies().length>0)enemyTurn();render()}
function pickTargets(count){const alive=aliveEnemies();const first=selectedEnemy()||alive[0];const rest=alive.filter(e=>e!==first);return [first,...rest].slice(0,count)}
function applyDamageTo(targets,dmg,label,isSkill){targets.forEach(e=>{const final=Math.max(1,dmg-Math.floor(e.def*(isSkill?.2:.35)));e.hp=Math.max(0,e.hp-final);log(`${label}！ ${e.name}に${format(final)}ダメージ。`);});checkVictory()}
function enemyTurn(){const t=totals();aliveEnemies().forEach(e=>{const d=Math.max(1,rand(Math.floor(e.atk*.82),Math.floor(e.atk*1.12))-Math.floor(t.def*.45));state.player.hp=Math.max(0,state.player.hp-d);log(`${e.name}の攻撃。${format(d)}ダメージ。`,"bad")});sfx("hit");if(state.player.hp<=0){state.battleOver=true;state.player.stones=Math.max(0,Math.floor(state.player.stones*.9));const t2=totals();state.player.hp=Math.floor(t2.maxHp*.5);state.player.mp=Math.floor(t2.maxMp*.5);log("倒れた……所持魔石の10%を失い、HP/MP半分で復帰。","bad");sfx("down")}}
function checkVictory(){if(aliveEnemies().length>0)return;victoryGroup()}
function victoryGroup(){const defeated=state.enemies;state.battleOver=true;const eff=equipEffects();let totalExp=0,totalStones=0;defeated.forEach(e=>{state.kills[e.id]=(state.kills[e.id]||0)+1;state.areaKillMap[state.currentLocation]=(state.areaKillMap[state.currentLocation]||0)+1;if(e.rare)state.rareKills++;totalExp+=Math.floor(e.exp*(1+eff.expRate));totalStones+=e.stones;e.materials.forEach(([m,a,r])=>{if(Math.random()<=r){const q=a+(Math.random()<.15?1:0);addMaterial(m,q);log(`素材「${m}」×${q}入手。`,"rare")}});tryLearnFrom(e)});state.player.exp+=totalExp;state.player.stones+=totalStones;log(`敵グループ撃破！ EXP${format(totalExp)} / 魔石${format(totalStones)}個獲得。`,"good");sfx("win");levelUp();questCheck();render();setTimeout(()=>{if(state.battleOver)spawnEnemyGroup()},750)}
function tryLearnFrom(e){if(!e.learnSkill||state.player.skills[e.learnSkill])return;const rate=Math.min(.55,e.learnRate+equipEffects().skillLearnRate);if(Math.random()<rate)learnSkill(e.learnSkill);}
function levelUp(){while(state.player.exp>=state.player.nextExp){state.player.exp-=state.player.nextExp;state.player.level++;state.player.nextExp=Math.floor(state.player.nextExp*1.35+state.player.level*12);state.player.maxHp=Math.floor(state.player.maxHp*1.18+18);state.player.maxMp=Math.floor(state.player.maxMp*1.14+6);state.player.atk=Math.floor(state.player.atk*1.16+5);state.player.def=Math.floor(state.player.def*1.13+3);const t=totals();state.player.hp=t.maxHp;state.player.mp=t.maxMp;log(`レベルアップ！ Lv${state.player.level}`,"rare");sfx("level");toast(`Lv${state.player.level} 到達`)}}
function skillExp(n,a){const s=state.player.skills[n];s.exp+=a;while(s.exp>=s.nextExp){s.exp-=s.nextExp;s.level++;s.nextExp=Math.floor(s.nextExp*1.45+s.level*8);log(`技「${n}」がLv${s.level}に上昇！`,"rare");sfx("level")}}
function absorb(mode="some"){if(state.player.stones<=0)return log("吸収できる魔石がない。","bad");const amount=mode==="all"?state.player.stones:Math.max(1,Math.floor(state.player.stones*.1));state.player.stones-=amount;state.player.totalAbsorbed+=amount;const eff=equipEffects();const gainScale=absorbScale(state.player.totalAbsorbed)*(1+(eff.absorbRate||0));const hp=Math.max(1,Math.floor(amount*3*gainScale)),mp=Math.max(0,Math.floor(amount*.8*gainScale)),atk=Math.max(1,Math.floor(amount*.35*gainScale)),def=Math.max(1,Math.floor(amount*.22*gainScale));state.player.maxHp+=hp;state.player.maxMp+=mp;state.player.atk+=atk;state.player.def+=def;const t=totals();state.player.hp=Math.min(t.maxHp,state.player.hp+hp);state.player.mp=Math.min(t.maxMp,state.player.mp+mp);log(`魔石${format(amount)}個吸収。効率${Math.round(gainScale*100)}%。HP+${format(hp)} MP+${format(mp)} 攻撃+${format(atk)} 防御+${format(def)}。`,"rare");sfx("absorb");render()}
function absorbScale(total){if(total<100)return 1;if(total<1000)return .55;if(total<10000)return .22;if(total<100000)return .08;if(total<1000000)return .025;return .008}
function learnSkill(name){state.player.skills[name]={name,level:1,exp:0,nextExp:14};const empty=state.player.skillSlots.findIndex(x=>!x);if(empty>=0)state.player.skillSlots[empty]=name;log(`技「${name}」を習得！${empty>=0?" 技セットに自動装備。":""}`,"rare2");sfx("learn");toast(`新技：${name}`)}
function potion(){if((state.player.items.potion||0)<=0)return log("回復薬がない。","bad");const t=totals(),h=Math.floor(t.maxHp*.35);state.player.items.potion--;state.player.hp=Math.min(t.maxHp,state.player.hp+h);log(`回復薬使用。HP${format(h)}回復。`,"good");sfx("heal");render()}
function sell(v){const a=v==="all"?state.player.stones:Math.min(Number(v),state.player.stones);if(a<=0)return log("売れる魔石がない。","bad");state.player.stones-=a;state.player.money+=a*8;log(`魔石${format(a)}個を売却。${format(a*8)}G獲得。`,"good");sfx("coin");render()}
function buy(id){const it=SHOP_ITEMS.find(i=>i.id===id);if(!it||state.player.money<it.price)return log("お金が足りない。","bad");state.player.money-=it.price;if(it.type==="consumable"){state.player.items.potion+=it.amount;log(`${it.name}購入。回復薬+${it.amount}`,"good")}else{state.player.inventory[it.id]=true;log(`${it.name}購入。`,"good")}sfx("coin");render()}
function equip(id){const it=findItem(id);if(!it||!it.slot)return;if(!state.player.inventory[id])state.player.inventory[id]=true;state.player.equipment[it.slot]=id;normalize();log(`${it.name}を装備。`,"good");sfx("equip");render()}
function craft(id){const r=CRAFT_RECIPES.find(x=>x.id===id);if(!r||state.player.money<r.costMoney)return log("作成条件を満たしていない。","bad");for(const [m,a] of Object.entries(r.materials)){if(mat(m)<a)return log(`素材「${m}」不足。`,"bad")}state.player.money-=r.costMoney;Object.entries(r.materials).forEach(([m,a])=>removeMaterial(m,a));state.player.inventory[r.id]=true;log(`${r.name}を作成。`,"rare");sfx("craft");render()}
function join(id){const a=ALLIES.find(x=>x.id===id);if(!a||state.unlockedAllies[id])return;if(!a.canJoin())return log("加入条件を満たしていない。","bad");a.cost();state.unlockedAllies[id]=true;normalize();log(`${a.name}が加入！`,"rare");sfx("level");toast(`${a.name} 加入`);render()}
function questCheck(){QUESTS.forEach(q=>{if(!state.claimedQuests[q.id]&&q.done()){state.claimedQuests[q.id]=true;q.reward();log(`クエスト達成「${q.name}」！`,"rare");sfx("level")}})}
function move(id){const l=LOCATIONS.find(x=>x.id===id);if(!l)return;if(state.player.level<l.minLevel)return log(`${l.name}はLv${l.minLevel}から。`,"bad");state.currentLocation=id;state.enemies=[];state.battleOver=true;log(`${l.name}へ移動。`);sfx("move");tab("battle");spawnEnemyGroup()}
function addMaterial(n,a){state.player.materials[n]=(state.player.materials[n]||0)+a}function removeMaterial(n,a){state.player.materials[n]=Math.max(0,(state.player.materials[n]||0)-a)}function mat(n){return state.player.materials[n]||0}
function findItem(id){return SHOP_ITEMS.find(i=>i.id===id)||CRAFT_RECIPES.find(i=>i.id===id)}function hasEquipment(id){return !!state.player.inventory[id]||Object.values(state.player.equipment).includes(id)}
function normalize(){const t=totals();state.player.hp=Math.min(state.player.hp,t.maxHp);state.player.mp=Math.min(state.player.mp,t.maxMp)}
function areaKills(area){return state.areaKillMap[area]||0}
function save(){localStorage.setItem(SAVE_KEY,JSON.stringify(state));log("保存しました。","good");toast("保存しました");sfx("coin")}
function load(){const raw=localStorage.getItem(SAVE_KEY);if(!raw)return log("保存データがありません。","bad");try{const data=JSON.parse(raw);state=data;migrate();log("読み込みました。","good");render()}catch{log("読み込み失敗。","bad")}}
function reset(){if(!confirm("初期化しますか？保存データも削除します。"))return;localStorage.removeItem(SAVE_KEY);state=init();log("初期化しました。");spawnEnemyGroup();render()}
function tab(n){document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===n));document.querySelectorAll(".tab-page").forEach(p=>p.classList.remove("active"));$(n+"Tab").classList.add("active")}
function setSkillSlot(i,name){if(name&&state.player.skillSlots.includes(name)){const old=state.player.skillSlots.indexOf(name);state.player.skillSlots[old]=null}state.player.skillSlots[i]=name||null;render()}
function unequipSkill(name){state.player.skillSlots=state.player.skillSlots.map(x=>x===name?null:x);render()}
function render(){migrate();const l=loc();$("scene").style.background=`linear-gradient(135deg,${l.color[0]},${l.color[1]})`;$("sceneName").textContent=l.name;$("sceneText").textContent=l.text;$("stripLevel").textContent=state.player.level;$("stripMoney").textContent=format(state.player.money);$("stripStones").textContent=format(state.player.stones);$("stripLocation").textContent=l.name;renderBattle();renderCommands();renderLocations();renderStats();renderSkills();renderMaterials();renderShop();renderCraft();renderEquipment();renderParty();renderQuests();renderImages()}
function renderBattle(){const t=totals();$("heroName").textContent=`${state.player.name} Lv${state.player.level}`;$("heroBars").innerHTML=bar("HP",state.player.hp,t.maxHp)+bar("MP",state.player.mp,t.maxMp)+bar("EXP",state.player.exp,state.player.nextExp);$("heroStats").innerHTML=row("攻撃",format(t.atk))+row("防御",format(t.def))+row("回復薬",state.player.items.potion||0);const alive=aliveEnemies();$("enemyGroup").innerHTML=state.enemies.map((e,i)=>`<div class="enemy-card ${e.rare?"rare":""} ${e.hp<=0?"dead":""} ${alive[state.selectedTarget]===e?"targeted":""}" data-target="${i}">${e.rare?'<span class="rare-label">RARE</span>':""}${e.img?`<img src="${e.img}" alt="${e.name}">`:`<div class="fallback">${e.portrait}</div>`}<h4>${e.name}</h4>${bar("HP",e.hp,e.maxHp)}</div>`).join("");document.querySelectorAll("[data-target]").forEach(b=>b.onclick=()=>{const idx=Number(b.dataset.target);const aliveIdx=alive.findIndex(e=>e===state.enemies[idx]);if(aliveIdx>=0){state.selectedTarget=aliveIdx;renderBattle();renderTargetSelect()}});$("enemySummary").innerHTML=row("生存数",alive.length)+row("最大同時出現",enemyCountForLocation(l))+row("レア撃破",state.rareKills||0);renderTargetSelect()}
function renderTargetSelect(){const alive=aliveEnemies();$("targetSelect").innerHTML=alive.map((e,i)=>`<option value="${i}" ${i===state.selectedTarget?"selected":""}>${i+1}: ${e.name}</option>`).join("");$("targetSelect").onchange=()=>{state.selectedTarget=Number($("targetSelect").value);renderBattle()}}
function renderCommands(){
  const pad=$("commandPad");
  if(!pad)return;
  const has=aliveEnemies().length>0;
  const slots=(state.player&&state.player.skillSlots?state.player.skillSlots:[]).filter(Boolean);
  const skillButtons=slots.map(name=>`<button type="button" data-use-skill="${name}" ${!has?"disabled":""}>${name}</button>`).join("");
  pad.innerHTML=`<button id="attackBtn" type="button" ${!has?"disabled":""}>攻撃</button>${skillButtons}<button id="healBtn" type="button">回復薬</button><button id="absorbBtn" type="button">10%吸収</button><button id="nextBtn" type="button">敵再抽選</button>`;
  const attackBtn=$("attackBtn");
  if(attackBtn){attackBtn.onclick=attack;bindHold(attackBtn,attack);}
  const healBtn=$("healBtn");
  if(healBtn)healBtn.onclick=potion;
  const absorbBtn=$("absorbBtn");
  if(absorbBtn)absorbBtn.onclick=()=>absorb("some");
  const nextBtn=$("nextBtn");
  if(nextBtn)nextBtn.onclick=spawnEnemyGroup;
  document.querySelectorAll("[data-use-skill]").forEach(b=>{
    const skillName=b.dataset.useSkill;
    b.onclick=()=>useSkill(skillName);
    bindHold(b,()=>useSkill(skillName));
  });
}
function renderLocations(){$("locationList").innerHTML=LOCATIONS.map(l=>{const locked=state.player.level<l.minLevel;return `<article class="card"><h3>${l.name}</h3><p>${l.text}<br>${locked?`解放条件：Lv${l.minLevel}`:`移動可能 / 最大${l.maxEnemies}体`}</p><button data-location="${l.id}" ${locked?"disabled":""}>ここへ行く</button></article>`}).join("");document.querySelectorAll("[data-location]").forEach(b=>b.onclick=()=>move(b.dataset.location))}
function renderStats(){const t=totals(),eff=equipEffects();$("stats").innerHTML=row("Lv",state.player.level)+row("経験値",`${format(state.player.exp)} / ${format(state.player.nextExp)}`)+row("HP",`${format(state.player.hp)} / ${format(t.maxHp)}`)+row("MP",`${format(state.player.mp)} / ${format(t.maxMp)}`)+row("攻撃",format(t.atk))+row("防御",format(t.def))+row("ダメージ補正",`${Math.round((eff.damageRate||0)*100)}%`)+row("経験値補正",`${Math.round((eff.expRate||0)*100)}%`)+row("レア補正",`${Math.round((eff.rareRate||0)*100)}%`)+row("複数攻撃補正",`+${eff.extraTargets||0}体`)+row("撃破数",format(Object.values(state.kills).reduce((a,b)=>a+b,0)))+row("吸収総量",format(state.player.totalAbsorbed));$("equippedInGrowth").innerHTML=equipmentRows()}
function renderSkills(){const learned=Object.keys(state.player.skills);$("skillSlots").innerHTML=state.player.skillSlots.map((name,i)=>`<div class="skill-slot"><strong>${i+1}枠</strong><select data-slot="${i}"><option value="">未セット</option>${learned.map(s=>`<option value="${s}" ${s===name?"selected":""}>${s}</option>`).join("")}</select></div>`).join("");document.querySelectorAll("[data-slot]").forEach(sel=>sel.onchange=()=>setSkillSlot(Number(sel.dataset.slot),sel.value));$("learnedSkills").innerHTML=learned.map(n=>{const s=state.player.skills[n],set=state.player.skillSlots.includes(n),lib=SKILL_LIBRARY[n]||{};return `<article class="card"><h3>${n} Lv${s.level}${set?"【セット中】":""}</h3><p>技経験値：${format(s.exp)} / ${format(s.nextExp)}<br>消費MP：${lib.mp??"-"} / 対象：${lib.targets>=99?"全体":(lib.targets||1)+"体"}</p><div class="card-actions"><button data-unskill="${n}" ${!set?"disabled":""}>外す</button></div></article>`}).join("");document.querySelectorAll("[data-unskill]").forEach(b=>b.onclick=()=>unequipSkill(b.dataset.unskill))}
function renderMaterials(){const e=Object.entries(state.player.materials).filter(([,v])=>v>0);$("materials").innerHTML=e.length?e.map(([k,v])=>row(k,format(v))).join(""):row("素材","なし")}
function itemDesc(it){const stats=it.stats?Object.entries(it.stats).map(([k,v])=>`${label(k)}+${format(v)}`).join(" / "):`回復薬+${it.amount}`;const eff=it.effects?Object.entries(it.effects).map(([k,v])=>`${effectLabel(k)}${k==="extraTargets"?"+"+v:"+"+Math.round(v*100)+"%"}`).join(" / "):"";return stats+(eff?`<br>特殊：${eff}`:"")}
function renderShop(){$("shopItems").innerHTML=SHOP_ITEMS.map(it=>{const owned=it.type!=="consumable"&&state.player.inventory[it.id];return `<article class="card"><h3>${it.name}${owned?"【所持】":""}</h3><p>${format(it.price)}G<br>${itemDesc(it)}</p><div class="card-actions"><button data-buy="${it.id}" ${state.player.money<it.price?"disabled":""}>購入</button>${it.slot&&owned?`<button data-equip="${it.id}">装備</button>`:""}</div></article>`}).join("");document.querySelectorAll("[data-buy]").forEach(b=>b.onclick=()=>buy(b.dataset.buy));document.querySelectorAll("[data-equip]").forEach(b=>b.onclick=()=>equip(b.dataset.equip))}
function renderCraft(){$("craftItems").innerHTML=CRAFT_RECIPES.map(r=>{const mats=Object.entries(r.materials).map(([m,a])=>`${m} ${mat(m)}/${a}`).join(" / "),can=state.player.money>=r.costMoney&&Object.entries(r.materials).every(([m,a])=>mat(m)>=a),owned=state.player.inventory[r.id];return `<article class="card"><h3>${r.name}${owned?"【所持】":""}</h3><p>費用：${format(r.costMoney)}G<br>素材：${mats}<br>${itemDesc(r)}</p><div class="card-actions"><button data-craft="${r.id}" ${!can?"disabled":""}>作成</button>${owned?`<button data-equip="${r.id}">装備</button>`:""}</div></article>`}).join("");document.querySelectorAll("[data-craft]").forEach(b=>b.onclick=()=>craft(b.dataset.craft));document.querySelectorAll("[data-equip]").forEach(b=>b.onclick=()=>equip(b.dataset.equip))}
function equipmentRows(){const names={weapon:"武器",armor:"防具",accessory:"装飾"};return Object.entries(state.player.equipment).map(([s,id])=>{const it=findItem(id);return row(names[s],it?`${it.name} / ${itemDescPlain(it)}`:"なし")}).join("")}
function renderEquipment(){$("equipment").innerHTML=equipmentRows()}
function renderParty(){$("partyList").innerHTML=ALLIES.map(a=>{const joined=state.unlockedAllies[a.id],can=a.canJoin(),bonus=Object.entries(a.bonus).map(([k,v])=>`${label(k)}+${format(v)}`).join(" / ");return `<article class="card"><h3>${a.name}${joined?"【加入済】":""}</h3><p>条件：${a.requirementText}<br>効果：${bonus}</p><button data-join="${a.id}" ${joined||!can?"disabled":""}>仲間にする</button></article>`}).join("");document.querySelectorAll("[data-join]").forEach(b=>b.onclick=()=>join(b.dataset.join))}
function renderQuests(){$("quests").innerHTML=QUESTS.map(q=>{const claimed=state.claimedQuests[q.id],done=q.done();return `<article class="card"><h3>${q.name}${claimed?"【達成済】":done?"【達成可能】":""}</h3><p>${q.description}</p><button data-quest="${q.id}" ${claimed||!done?"disabled":""}>報酬受取</button></article>`}).join("");document.querySelectorAll("[data-quest]").forEach(b=>b.onclick=()=>{const q=QUESTS.find(x=>x.id===b.dataset.quest);if(!q||state.claimedQuests[q.id]||!q.done())return;state.claimedQuests[q.id]=true;q.reward();log(`クエスト達成「${q.name}」！`,"rare");render()})}
function renderImages(){const saved=localStorage.getItem(HERO_IMAGE_KEY);$("heroImage").src=saved||"./assets/hero-sprite-sheet.png";$("heroImage").classList.add("show")}
function row(a,b){return `<div class="row"><span>${a}</span><strong>${b}</strong></div>`}function bar(a,v,m){const p=Math.max(0,Math.min(100,(v/Math.max(1,m))*100));return `<div class="bar-label">${a}: ${format(v)} / ${format(m)}</div><div class="bar"><div class="bar-fill" style="width:${p}%"></div></div>`}function label(k){return{maxHp:"HP",maxMp:"MP",atk:"攻撃",def:"防御"}[k]||k}function effectLabel(k){return{rareRate:"レア率",expRate:"経験値",damageRate:"ダメージ",extraTargets:"攻撃対象",absorbRate:"吸収効率",skillLearnRate:"技習得率"}[k]||k}function itemDescPlain(it){const eff=it.effects?Object.entries(it.effects).map(([k,v])=>`${effectLabel(k)}${k==="extraTargets"?"+"+v:"+"+Math.round(v*100)+"%"}`).join(" / "):"";return eff||"特殊なし"}
function log(text,type=""){const d=document.createElement("div");d.className=`log-entry ${type}`;d.textContent=text;$("log").prepend(d);while($("log").children.length>160)$("log").removeChild($("log").lastChild)}
function anim(el,cls){if(!el)return;el.classList.remove(cls);void el.offsetWidth;el.classList.add(cls)}function heroMotion(type){const el=$("heroImage");anim(el,type==="skill"?"skill":"attack");$("slashEffect").classList.remove("hidden");anim($("slashEffect"),"slash-effect");setTimeout(()=>$("slashEffect").classList.add("hidden"),380)}
let toastTimer=null;function toast(t){clearTimeout(toastTimer);$("toast").textContent=t;$("toast").classList.remove("hidden");toastTimer=setTimeout(()=>$("toast").classList.add("hidden"),1600)}
function setupAudio(){if(audio.ctx)return;audio.ctx=new (window.AudioContext||window.webkitAudioContext)()}function tone(freq,dur,type="sine",gain=.05){if(!audio.enabled)return;setupAudio();const ctx=audio.ctx,o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.value=freq;g.gain.value=gain;o.connect(g);g.connect(ctx.destination);o.start();g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+dur);o.stop(ctx.currentTime+dur)}function sfx(kind){if(!audio.enabled)return;const map={attack:[220,.08,"sawtooth",.045],skill:[440,.16,"triangle",.055],hit:[90,.08,"square",.035],win:[660,.12,"sine",.05],level:[880,.22,"triangle",.055],coin:[1040,.07,"sine",.04],heal:[520,.14,"sine",.04],absorb:[330,.18,"triangle",.05],learn:[990,.28,"sine",.05],equip:[740,.09,"triangle",.04],craft:[600,.16,"triangle",.05],move:[260,.08,"sine",.035],spawn:[140,.12,"sawtooth",.03],down:[70,.22,"sawtooth",.045]};tone(...(map[kind]||map.coin))}function startBgm(){if(!audio.enabled)return;setupAudio();stopBgm();const notes=[220,247,262,330,294,262,247,196];let i=0;audio.bgmTimer=setInterval(()=>{tone(notes[i%notes.length],.18,"triangle",.018);i++},420)}function stopBgm(){if(audio.bgmTimer){clearInterval(audio.bgmTimer);audio.bgmTimer=null}}function toggleAudio(){audio.enabled=!audio.enabled;$("audioBtn").textContent=audio.enabled?"音OFF":"音ON";if(audio.enabled){setupAudio();audio.ctx.resume();startBgm();toast("BGM/効果音ON")}else{stopBgm();toast("BGM/効果音OFF")}}
function bindHold(el,fn){if(!el)return;el.onpointerdown=()=>{clearTimeout(longPress.timer);clearInterval(longPress.interval);longPress.timer=setTimeout(()=>{longPress.interval=setInterval(fn,180)},450)};["pointerup","pointerleave","pointercancel"].forEach(ev=>el.addEventListener(ev,()=>{clearTimeout(longPress.timer);clearInterval(longPress.interval)}))}
function bind(){document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>tab(b.dataset.tab));$("targetSelect").onchange=()=>{state.selectedTarget=Number($("targetSelect").value);renderBattle()};$("audioBtn").onclick=toggleAudio;$("saveBtn").onclick=save;$("loadBtn").onclick=load;$("resetBtn").onclick=reset;$("absorbSomeBtn").onclick=()=>absorb("some");$("absorbAllBtn").onclick=()=>absorb("all");bindHold($("absorbAllBtn"),()=>absorb("all"));document.querySelectorAll("[data-sell]").forEach(b=>{b.onclick=()=>sell(b.dataset.sell);bindHold(b,()=>sell(b.dataset.sell))});$("heroUpload").onchange=e=>{const file=e.target.files&&e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{localStorage.setItem(HERO_IMAGE_KEY,reader.result);renderImages();toast("主人公画像を変更")};reader.readAsDataURL(file)};$("resetHeroImageBtn").onclick=()=>{localStorage.removeItem(HERO_IMAGE_KEY);renderImages();toast("主人公画像を初期化")}}
try{
  bind();
  migrate();
  renderCommands();
  log("v0.3.1開始。コマンドボタン表示を修正。");
  spawnEnemyGroup();
  render();
}catch(err){
  console.error(err);
  const pad=document.getElementById("commandPad");
  if(pad){
    pad.innerHTML='<button type="button" onclick="location.reload()">再読み込み</button><button type="button" disabled>読み込みエラー</button>';
  }
  const logEl=document.getElementById("log");
  if(logEl){
    const div=document.createElement("div");
    div.className="log-entry bad";
    div.textContent="読み込みエラー: "+(err&&err.message?err.message:err);
    logEl.prepend(div);
  }
}
})();
