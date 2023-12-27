# ディレクトリ構成サンプル

```
src/
├ components/ # 共通パーツ
│ └ digiral-agency/ # デジタル庁提供パーツ
├
├ features/ # 機能毎のuiやロジックを入れる
│ ├ login/
│ │ ├ components/
│ │ ├ libs/
│ │ └ index.ts # パブリックapiを設置
│ ├
│ ├ add-project/
│ └ request-api/
├ hooks/
├ libs/
└ ...
```

以下の React プロジェクトを参考にしています。

https://github.com/alan2207/bulletproof-react
