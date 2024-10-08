import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript } from "@mantine/core";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta property="og:title" content="MEGA BIG シミュレーター" />
        <meta property="og:description" content="確変した第1476回 MEGA BIG のシミュレーターです" />
        <meta property="og:image" content="https://megabig.nwnwn.com/ogp.PNG" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://megabig.nwnwn.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <ColorSchemeScript />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
