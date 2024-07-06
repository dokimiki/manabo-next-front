# manabo-next-front

## 環境構築

1. 必要なツールのインストール
    - bun

        インストール方法は[こちら](https://roboin.io/article/2024/04/13/how-to-install-bun-on-windows/)

    - git

        インストール方法は[こちら](https://prog-8.com/docs/git-env-win)

        _手順2までおこない、手順3以降は無視してください！_

    - Github Desktop

        インストール方法は[こちら](https://www.kagoya.jp/howto/it-glossary/develop/githubdesktop/)

    - Visual Studio Code

    - Google Chrome

1. リポジトリのクローン

    ```bash
    git clone https://github.com/dokimiki/manabo-next-front.git
    ```

1. パッケージのインストール

    ```bash
    bun i
    ```

## 開発に使うコマンド集

- 開発サーバーの起動

    ```bash
    bun run dev
    ```

## 導入されているライブラリ

- [Next.js](https://nextjs.org)

    ウェブサイトを簡単に作るためのフレームワークです。

    [ドキュメント](https://nextjs.org/docs)

- [radix-ui](https://www.radix-ui.com)

    ウェブサイトに、あらかじめ作られたデザインを使うためのライブラリです。

    [ドキュメント](https://www.radix-ui.com/themes/docs/theme/overview)

- [Iconify](https://iconify.design)

    ウェブサイトに、あらかじめ作られたアイコンや絵文字を使うためのライブラリです。

    [ドキュメント](https://iconify.design/docs/)

- [Chart.js](https://www.chartjs.org)

    ウェブサイトに、簡単にグラフを作るためのライブラリです。

    [ドキュメント](https://www.chartjs.org/docs/latest/samples/information.html)

- [notistack](https://notistack.com)

    ウェブサイトに、簡単に通知を表示するためのライブラリです。

    [ドキュメント](https://notistack.com/getting-started)

- [tailwindcss](https://tailwindcss.com/)

    ウェブサイトに、簡単にデザインを適用するためのライブラリです。

    [ドキュメント](https://tailwindcomponents.com/cheatsheet/)

- [supabase](https://supabase.com)

    データベースを扱うためのライブラリです。

    [ドキュメント](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)

- [unstorage](https://unstorage.unjs.io)

    ウェブサイトに、簡単にデータを保存するためのライブラリです。

    [ドキュメント](https://unstorage.unjs.io/guide)

- [NextAuth.js](https://next-auth.js.org)

    認証を行うためのライブラリです。

    [ドキュメント](https://next-auth.js.org/getting-started/introduction)

- [twemoji](https://github.com/twitter/twemoji)

    twitterの絵文字を使うためのライブラリです。

- [ufo](https://github.com/unjs/ufo#readme)

    urlなどのリンクを簡単に扱うためのライブラリです。

- [ohash](https://github.com/unjs/ohash#readme)

    オブジェクトをハッシュで比較するためのライブラリです。

- [consola](https://github.com/unjs/consola#readme)

    いい感じのコンソールにログを表示するためのライブラリです。

- [uqr](https://github.com/unjs/uqr#readme)

    qrコードを簡単に作成するためのライブラリです。

- [aspida](https://github.com/aspida/aspida/tree/main/packages/aspida/docs/ja#readme)

    aspidaは、APIクライアントを生成するためのライブラリです。

- [lint-staged](https://github.com/lint-staged/lint-staged#readme)

    コミット時に、コードを自動で整形するためのライブラリです。

- [validator](https://github.com/validatorjs/validator.js#readme)

    バリデーションを行うためのライブラリです。

- [jwt-decode](https://github.com/auth0/jwt-decode#readme)

    jwtトークンをデコードするためのライブラリです。
