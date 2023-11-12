import { Head,Main,Html,NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <meta name="description" content="Hello" />
        <meta property="og:title" content="Hello" />
        <meta property="og:description" content="Hello" />
        <meta property="og:type" content="website" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}