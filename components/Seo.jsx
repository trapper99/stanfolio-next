import { seoData } from '@/portfolio'
import Head from 'next/head'
import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';

function Seo() {
  return (
    <Head>
        <title>{seoData.title}</title>
        <meta name='title' content={seoData.title} /> 
        <meta name='author' content= "Stanley Kariuki"/>
        <meta name='description' content={seoData.description} />
        <meta name='keywords' content={seoData.keywords.join(",")} />
        <link rel='canonical' href={seoData.url} />
        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={seoData.url} />
        <meta property='og:title' content={seoData.title} />
        <meta property='og:description' content={seoData.description} />
        <meta property='og:site_name' content={seoData.title} />
        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={seoData.url} />
        <meta property='twitter:title' content={seoData.title} />
        <meta property='twitter:description' content={seoData.description} />
        <meta name='robots' content='Index' />
        <link rel='manifest' href='/public/manifest.json' />
        {/* Favicon */}

    </Head>
  );
}

Seo.prototype = {
    data: propTypes.shape({
        title: propTypes.string.isRequired,
        author: propTypes.string,
        description: propTypes.string,
        url: propTypes.string,
        keywords: propTypes.arrayOf(propTypes.string),
    }).isRequired,
};

export default Seo
