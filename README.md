# 魔石転生サバイバー v0.11

## v0.11 修正内容

- 最新生成素材をゲーム内アセットとして組み込み
  - `assets/source_tileset_v011.png`
  - `assets/source_human_v011.png`
  - `assets/source_enemy_v011.png`
- 最新タイル素材からゲーム用 `tile_atlas.png` を再生成
- 最新主人公素材からゲーム用 `human_sheet.png` を再生成
- 最新敵素材からゲーム用 `enemy_sheet.png` を再生成
- マップが見づらくなる原因だった黒いマス目を除去
- 床 / 壁 / 建造物 / 柱 / 階段 / クリスタル床を見分けやすく修正
- アバター移動時に前後姿が交互に出る問題を修正
  - 移動中は同じ向きの歩行フレームだけを使用
- アバターを少し大きく、くっきり表示
- 敵ドットを最新素材に差し替え
- 敵ドットを大きく、くっきり表示
- 敵にも壁 / 建造物 / 柱 / 外周の当たり判定を適用
- 幽霊系の敵だけ壁抜け可能
- READMEを最新版に更新

## 反映コマンド

```powershell
git add .
git commit -m "Apply latest generated assets and fix map visibility v0.11"
git push
```

## キャッシュ回避

```text
?v=survivor011
```
