import Head from "next/head";

export default function PageWrapper({ children, title, description }) {
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
      {children}
    </>
  );
}
