import Head from 'next/head';
import React, { Fragment, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
//
import Footer from 'components/common/Footer';
import Navbar from 'components/common/Navbar';

interface ILayoutProps extends PropsWithChildren {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  children: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    description: `I like to craft solid and scalable Open-source products with great user experiences.`,
    image: 'https://swapneellayek.netlify.app/meta/meta-pariola.jpg',
    type: 'website',
    ...customMeta,
  };
  return (
    <Fragment>
      <Head>
        <title>
          {meta.title
            ? `${meta.title} • Swapneel | Software Engineer`
            : 'Swapneel | Software Engineer'}
        </title>
        <meta name="robots" content="follow, index" />
        <meta
          name="keyword"
          content="Swapneel Layek, swapneellayek.netlify.app, Swapneel, swapneel, Portfolio, Software Engineer"
        />
        <meta name="author" content="Swapneel - Software Engineer" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://swapneellayek.netlify.app${router.asPath}`}
        />
        <link rel="canonical" href={`https://swapneellayek.netlify.app${router.asPath}`} />
        {/*  */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Pariola" />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:title"
          content={
            meta.title
              ? `${meta.title} • Swapneel | Software Engineer`
              : 'Swapneel | Software Engineer'
          }
        />
        <meta property="og:image" content={meta.image} />
        {/*  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ipariola" />
        <meta
          name="twitter:title"
          content={
            meta.title
              ? `${meta.title} • Swapneel | Software Engineer`
              : 'Swapneel | Software Engineer'
          }
        />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/*  */}
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="32x32"
          href="/favicon.svg"
        />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
