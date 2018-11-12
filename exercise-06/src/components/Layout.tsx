import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Header from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Layout.module.css';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className={styles.root}>
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={data => (
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang={data.site.siteMetadata.language} />
        </Helmet>
      )}
    />

    <Header className={styles.header} />

    <main className={styles.main}>{children}</main>

    <Footer />
  </div>
);

export default Layout;
