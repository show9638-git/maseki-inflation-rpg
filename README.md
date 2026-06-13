# 魔石インフレーションRPG Rebuild v2.5.1

## 変更内容

- 主人公と仲間1のベース画像を、今回指定された白黒虹の男性/女性画像に差し替え
- 同名ファイルで配置
  - `assets/hero-dot.png`
  - `assets/ally-dot.png`
- 新ベース画像から、動くドット用スプライトシートを再生成
  - `assets/hero-sprite-sheet.png`
  - `assets/ally-sprite-sheet.png`
- v2.5の待機/攻撃/特技/被弾アニメは維持

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
git commit -m "Update rebuild v2.5.1 base character sprites"
git push
```

古い表示が残る場合:

```text
?v=rebuild251
```
