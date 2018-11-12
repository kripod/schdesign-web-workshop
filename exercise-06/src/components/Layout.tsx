import { graphql, StaticQuery, withPrefix } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';
import { Container, Form, Input, Nav, NavItem } from 'reactstrap';
import GatsbyNavLink from './GatsbyNavLink';
import Footer from './Footer';
import Header from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-playfair-display';
import styles from './Layout.module.css';

interface Props {
  location: {
    pathname: string;
  };
  children: React.ReactNode;
}

const Layout = ({ location, children }: Props) => (
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

    <Header className={styles.header}>
      <Nav className="mr-auto" navbar>
        {/* TODO: Normalize `location.pathname` (add trailing slash if needed) */}
        {/* TODO: Load menu items from a YAML file */}
        <NavItem active={location.pathname === withPrefix('/')}>
          <GatsbyNavLink to="/">Kezdőlap</GatsbyNavLink>
        </NavItem>
        <NavItem active={location.pathname === withPrefix('/technology/')}>
          <GatsbyNavLink to="/technology/">Technológia</GatsbyNavLink>
        </NavItem>
        <NavItem active={location.pathname === withPrefix('/design/')}>
          <GatsbyNavLink to="/design/">Design</GatsbyNavLink>
        </NavItem>
        <NavItem active={location.pathname === withPrefix('/economy/')}>
          <GatsbyNavLink to="/economy/">Gazdaság</GatsbyNavLink>
        </NavItem>
      </Nav>

      <Form inline className="my-2 my-lg-0">
        <Input type="search" placeholder="Keresés…" />
      </Form>
    </Header>

    <main className={styles.main}>{children}</main>

    <Footer>
      <Container>
        Ez a <a href="https://getbootstrap.com/">Bootstrap</a> alapú blog{' '}
        <a href="https://twitter.com/mdo">@mdo</a>{' '}
        <a href="https://getbootstrap.com/docs/4.1/examples/blog/">sablonja</a>{' '}
        alapján készült.
      </Container>
    </Footer>
  </div>
);

export default Layout;
