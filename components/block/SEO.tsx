

import Head from 'next/head';
import { SEOProps } from '@/lib/types';


const SEO = ({ title, description, keywords, image, url }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default SEO;
