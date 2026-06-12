# 魔石インフレーションRPG Rebuild v1.1

## 修正内容

- 各ファイルを確認し、操作不能になりやすい箇所を修正
- JavaScriptの通常構文チェックを実施
- 画面操作を inline onclick 依存から event delegation 方式に変更
- 攻撃、特技、回復薬、吸収、敵入替、フィーバー、保存、読込、初期化を安定化
- タブ切替、育成対象切替、装備対象切替を安定化
- 敵カードクリックによる対象選択を安定化
- ドラクエ風正面バトル、最大3体表示、レア敵、フィーバー、高速撃破を維持
- 仲間「白黒虹の女性」も育成/装備切替対応

## GitHub Pagesへ反映

このフォルダの中身を既存リポジトリへ上書きしてから:

```powershell
git add .
git commit -m "Fix rebuild v1.1 controls"
git push
```

iPhoneで古い表示が残る場合:

```text
?v=rebuild11
```
