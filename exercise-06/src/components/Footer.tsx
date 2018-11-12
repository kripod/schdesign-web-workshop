import * as React from 'react';
import { Container } from 'reactstrap';

const Footer = () => (
  <footer className="bg-light mt-3">
    <Container className="text-center py-3">
      Ez a <a href="https://getbootstrap.com/">Bootstrap</a> alapú blog{' '}
      <a href="https://twitter.com/mdo">@mdo</a>{' '}
      <a href="https://getbootstrap.com/docs/4.1/examples/blog/">sablonja</a>{' '}
      alapján készült.
    </Container>
  </footer>
);

export default Footer;
