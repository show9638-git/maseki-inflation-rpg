# 魔石転生サバイバー v0.15

## v0.15 基盤整理版の目的

v0.14までの「素材を貼るだけ」の状態から、ゲーム内で安定して扱える描画・判定基盤へ整理しました。
派手な機能追加ではなく、マップ、主人公、敵、当たり判定、デバッグ確認を優先しています。

## 主な修正内容

### マップ
- `assets/stage_sky_palace.png` を一枚絵背景として固定
- ワールド座標を 1024×768 に固定
- 背景画像と通行判定を分離
- `MAP_COLLISION.walkAreas` と `MAP_COLLISION.blockAreas` に通行可能/不可エリアをデータ化

### 主人公
- `PLAYER_DEF` を追加
- セルサイズ 128×128、4方向、4フレーム前提に整理
- 描画基準を画像中心ではなく足元中央に変更
- 当たり判定を足元中心の円に統一

### 敵
- `ENEMY_DEFS` を追加
- 敵タイプごとに以下を定義
  - `row`
  - `frames`
  - `drawW / drawH`
  - `anchorX / anchorY`
  - `hitRadius`
  - `ghost`
- 敵描画を足元基準に変更
- 見た目と当たり判定のズレを確認しやすく整理

### デバッグ表示
- `DBG` ボタン、Dキー、F3キーでON/OFF
- 表示内容
  - 通行可能エリア
  - 通行不可エリア
  - 主人公の足元点
  - 主人公の当たり判定円
  - 敵の足元点
  - 敵の当たり判定円
  - スポーン位置

### バグ修正
- v0.14の `area()` 内で未定義の `vx / vy / c / p` を参照していた実行時バグを修正
- ミニマップが旧タイル配列を参照して落ちる可能性を修正
- 敵・弾・アイテム・宝石の一部描画に画面外カリングを追加

### 難易度調整
- 0〜30秒を検証しやすいチュートリアル帯として弱めに調整
- ボス初回出現を90秒に変更
- 敵の出現数と強化を30秒以降から段階的に上げる方式へ整理

## ファイル構成

```text
index.html
style.css
game.js
README.md
assets/
  stage_sky_palace.png
  human_sheet.png
  enemy_sheet.png
  skill_fx_sheet.png
```

## 反映コマンド

```powershell
git add .
git commit -m "Stabilize rendering collision and debug basis v0.15"
git push
```

## キャッシュ回避

```text
?v=survivor015
```

## ZIP作成前チェック結果

```text
node --check game.js: OK
index.html 主要ID存在チェック: OK
必須関数存在チェック: OK
主要アセット存在チェック: OK
human_sheet.png 寸法チェック: 512×2560 / OK
敵シート寸法チェック: 288×960 / OK
開始位置 walk(512,470,13): OK
README更新: OK
```

## 次の予定

v0.16では、敵種類とスキル演出の整理を行います。
このv0.15では、まず描画基準・判定基準・デバッグ確認を固定します。
