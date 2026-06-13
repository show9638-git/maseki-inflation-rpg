# 魔石転生サバイバー v0.12.1

## v0.12.1 緊急修正

- `Can't find variable: update` により進行不能になる問題を修正
- v0.12生成時に欠落していた以下の関数を復旧
  - `update()`
  - `moveVec()`
  - `shoot()`
  - `draw()`
  - `drawMap()`
  - `drawPlayer()`
  - `drawSkillIcon()`
- 起動直後に真っ黒画面で止まる問題を修正
- 移動、敵移動、敵当たり判定、スキル、経験値、アイテム処理を復旧
- アバターは方向別スプライトを継続利用
  - 下移動：前向き
  - 上移動：後ろ向き
  - 左移動：左向き
  - 右移動：右向き
- 敵は壁 / 建造物 / 柱 / 外周の当たり判定を受ける
- 幽霊系の敵だけ壁抜け可能

## 反映コマンド

```powershell
git add .
git commit -m "Fix missing update loop v0.12.1"
git push
```

## キャッシュ回避

```text
?v=survivor0121
```
