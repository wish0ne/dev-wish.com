import React, { ReactNode } from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  keywords?: string[];
  image?: string;
  children?: ReactNode;
  publishDate?: string;
}

export const SEO = ({
  title,
  description,
  pathname,
  keywords,
  image,
  children,
  publishDate,
}: SEOProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
    keywords: defaultKeywords,
  } = useSiteMetadata();

  const seo = {
    title: title && `${title} - ` + defaultTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image}` : defaultImage,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta charSet="UTF - 8" />
      <meta name="description" content={seo.description} />
      <meta name="author" content="wish.jang" />
      <meta
        name="keywords"
        content={[...defaultKeywords, ...(keywords || [])].join(", ")}
      />
      <meta name="robots" content="index, follow" />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="dev-wish.com" />
      <meta property="og:type" content="website" />
      {publishDate && (
        <meta property="article:published_time" content={publishDate} />
      )}
      {keywords && (
        <>
          <meta name="twitter:label1" content="Category" />
          <meta name="twitter:data1" content={keywords.join(", ")} />
        </>
      )}
      <meta property="og:image" content={image} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={image} />
      <link rel="canonical" href={seo.url} />
      <link rel="icon" href={defaultImage} type="image/png" />
      {children}
    </>
  );
};
