import Head from "next/head";

interface GenericMetaProps {
  title: string;
  description: string;
}

export default function GenericMeta({ title, description }: GenericMetaProps) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL
  ? `https://${process.env.NEXT_PUBLIC_BASE_URL}`
  : 'localhost:3000';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="profile" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:image" content={`${baseURL}/opengraph-image/${encodeURIComponent(title)}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseURL}/opengraph-image/${encodeURIComponent(title)}`} />
    </Head>
  );
}