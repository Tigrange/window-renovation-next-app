import Head from 'next/head';

function SeoHead({ title = 'Window Renovation app' }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default SeoHead;
