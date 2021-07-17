import Head from "next/head";

import Header from "./Header";

export default function Page({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{`${title} | ${description}`}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <main className="px-6 sm:px-8 pt-16 max-w-screen-md mx-auto">
        <Header />
        {children}
      </main>
    </>
  );
}
