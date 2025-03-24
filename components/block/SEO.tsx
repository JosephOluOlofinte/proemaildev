

import Head from 'next/head';
import { SEOProps } from '@/lib/types';
// import defaultSeoImage from '@/public/images/defaultSeoImage.png'


const SEO = ({ title, description, keywords, image, url }: SEOProps) => {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": title,
    "url": url,
    "image": image,
    "description": description
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={typeof image === 'string' ? image : image.src} />}
      {url && <meta property="og:url" content={url} />}
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  );
};

export default SEO;
