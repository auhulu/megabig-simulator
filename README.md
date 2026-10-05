# MEGA BIG シミュレーター

React + Vite + Mantine で実装した、第1476回 MEGA BIG のシミュレーターです。
Cloudflare Workers Static Assets で配信します。抽選はブラウザー内で実行します。

## 開発

Node.js 24 と npm を使用します。

```sh
npm ci
npm run dev
```

## 検証

```sh
npm run lint
npm run build
npm run preview
```

`npm run build` は型検査後に `dist/` を生成します。
`npm run preview` はビルド後、Wrangler で Cloudflare の配信環境をローカル再現します。
トップページ `/` のみを提供し、不明なパスは 404 を返します。

## Cloudflare へのデプロイ

```sh
npx wrangler login
npm run deploy
```

`wrangler.jsonc` の Worker 名 `megabig-simulator` に `dist/` をアップロードします。
CI では `CLOUDFLARE_API_TOKEN` と `CLOUDFLARE_ACCOUNT_ID` をシークレットとして設定してください。
Workers Builds と連携する場合は、ビルドコマンドを `npm run build`、デプロイコマンドを
`npx wrangler deploy` に設定します。

独自ドメイン `megabig.nwnwn.com` は `wrangler.jsonc` の Custom Domain 設定で管理し、
デプロイ時に Worker へ割り当てます。
OGP と X 投稿の URL は既存の `https://megabig.nwnwn.com` を維持しています。
別のドメインで運用する場合は `index.html` の OGP URL と `pages/index.tsx` の投稿 URL を更新してください。

配信方式の詳細は [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) を参照してください。
