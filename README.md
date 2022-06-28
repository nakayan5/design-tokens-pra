# design-tokens-pra

## Step

1. Figma Tokensからtokens.jsonをエクスポートする。
2. tokens.jsonをpackage.jsonと同階層に置く
3. `node token-transformer tokens.json output.json`
    pathが通っていない場合は`./node_modules/.bin/token-transformer tokens.json output.json`
4. style-dictionary.config.jsonをpackage.jsonと同階層に作成する
5. `yarn style-dictionary build --config style-dictionary.config.json`を実行し指定したファイルを生成する

## Refefrence

- [【Figma Tokens × Style Dictionary】デザインシステムはじめの一歩](https://zenn.dev/kosukek/articles/c86b34b847a9f2)
- [Ubie Design Tokens を公開しました](https://zenn.dev/ubie/articles/7a6413af237eae)
- [デザイントークンとは？デザインシステムに関わる人が知っておきたいメリットや使い方まで](https://bagelee.com/design/basics-of-design-tokens/)
