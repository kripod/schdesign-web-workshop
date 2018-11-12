import * as React from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Jumbotron,
  Row,
} from 'reactstrap';
import Layout from '../components/Layout';
import LaptopImageSrc from './posts/erdekessegek-a-reactrol/laptops.jpg';

import styles from './index.module.css';

const IndexPage = (props: any) => (
  <Layout {...props}>
    <Container>
      <Jumbotron className={`${styles.hero} text-light`}>
        <Col md={6}>
          <h2 className="display-4 font-italic">
            Egy hosszabb kiemelt hír címe
          </h2>
          <p className="lead mt-3 mb-0">
            Több sornyi szöveg, amely felhívja az olvasó figyelmét az ezen
            posztban rejlő érdekes tartalomra.
          </p>
        </Col>
      </Jumbotron>

      <Row>
        <Col md={4}>
          <Card>
            <CardImg top src={LaptopImageSrc} alt="Laptopok" />
            <CardBody>
              <CardTitle tag="h2">Poszt címe</CardTitle>
              <CardSubtitle tag="div">
                <Badge color="primary">Technológia</Badge>
              </CardSubtitle>
              <CardText className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat quam aspernatur quo quod illum deleniti!
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
