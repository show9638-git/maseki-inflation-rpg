# 魔石インフレーションRPG Rebuild v2.5

## 追加内容

- v2.4を土台に、ゲーム内へ「動くドット」を実装
- 主人公と仲間1にスプライトシートを追加
  - `assets/hero-sprite-sheet.png`
  - `assets/ally-sprite-sheet.png`
- 待機アニメーション追加
- 攻撃時アニメーション追加
- 特技使用時アニメーション追加
- 敵の待機アニメーション追加
- 敵被弾時の簡易アニメーション追加
- ユーザーが画像を設定した場合は、従来通りカスタム画像を優先
- カスタム画像未設定時のみ、動くドットを表示

## 重要

GitHub Pagesへ反映する時は、`assets` フォルダごと上書きしてください。

```text
assets/
  hero-dot.png
  ally-dot.png
  hero-sprite-sheet.png
  ally-sprite-sheet.png
```

## 反映

```powershell
git add .
git commit -m "Update rebuild v2.5 animated sprites"
git push
```

古い表示が残る場合:

```text
?v=rebuild25
```
