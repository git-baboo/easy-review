# Docker Template

チームで React アプリを開発する際に使用するテンプレートです。

# アプリケーションの起動

### VSCode を用いる場合

VSCode を用いる場合は Remote Container を使用して起動すると便利です。

### VSCode を用いない場合

以下のコマンドを順に実行してください。

```shell
make i
make up

# make コマンドを使用しない場合は以下のコマンドを実行してください
docker compose run --rm app yarn install
docker compose up
```

# 確認

コンテナが立ち上がったら以下のリンクにアクセスしてください。`App`の文字列が確認できれば問題なく起動しています。

http://localhost:3000

# その他便利コマンド

### ESLint

```shell
make lint

# make コマンドを使用しない場合
docker compose exec app yarn lint
```

### Prettier

```shell
make format

# make コマンドを使用しない場合
docker compose exec app yarn format
```
