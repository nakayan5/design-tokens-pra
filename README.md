# design-tokens-pra

## Step

1. Figma Tokens から tokens.json をエクスポートする。
2. tokens.json を package.json と同階層に置く
3. `node token-transformer tokens.json output.json`
   path が通っていない場合は`./node_modules/.bin/token-transformer tokens.json output.json`
4. style-dictionary.config.json を package.json と同階層に作成する
5. `yarn style-dictionary build --config style-dictionary.config.json`を実行し指定したファイルを生成する

## Refefrence

- [【Figma Tokens × Style Dictionary】デザインシステムはじめの一歩](https://zenn.dev/kosukek/articles/c86b34b847a9f2)
- [Ubie Design Tokens を公開しました](https://zenn.dev/ubie/articles/7a6413af237eae)
- [デザイントークンとは？デザインシステムに関わる人が知っておきたいメリットや使い方まで](https://bagelee.com/design/basics-of-design-tokens/)
- [Figma Tokens で小さくはじめるデザインシステム](https://zenn.dev/mi_/articles/453f7594120c9a)
- [Style Dictionary](https://github.com/amzn/style-dictionary)

## Idea

- Figma をどうやって管理するか

  - Figma API
    - api 経由で style を取り出す
  - Figma Tokens
    - JSON ファイルを生成
      - style dictionary を使用して js と ts ファイルを生成する
      - theme object 形式にできるのかどうか
        - document 見る限り出来そうだけどサンプルが少ない
  - Design Tokens

- figma から github に push したい
  - Figma Tokens なら少し設定するだけで可能
  - Figma API
    - 可能だろうけど git が絡んでくるのでかなり厳しい
