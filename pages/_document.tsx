import { Head, Html, Main, NextScript } from 'next/document'

export const revalidate = 60 // revalidate this page every 60 seconds

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
