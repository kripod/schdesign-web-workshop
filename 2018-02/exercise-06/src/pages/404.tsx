import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';
import Layout from '../components/Layout';

const NotFoundPage = (props: any) => (
  <Layout {...props}>
    <Container>
      <Helmet>
        <title>404</title>
      </Helmet>

      <h2>Az oldal nem található</h2>
      <p>A kért oldal nem érhető el.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
