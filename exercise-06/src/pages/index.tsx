import { graphql, Link, StaticQuery } from 'gatsby';
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
        <StaticQuery
          query={graphql`
            {
              allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/posts/" } }
              ) {
                edges {
                  node {
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      category
                      featuredImage {
                        publicURL
                      }
                    }
                    excerpt
                  }
                }
              }
            }
          `}
          render={data =>
            data.allMarkdownRemark.edges.map(({ node }: any) => (
              <Col key={node.fields.slug} md={4}>
                <Card>
                  <Link to={node.fields.slug}>
                    <CardImg
                      top
                      src={node.frontmatter.featuredImage.publicURL}
                    />
                  </Link>

                  <CardBody>
                    <CardTitle tag="h2">
                      <Link
                        to={node.fields.slug}
                        className={styles.postTitleLink}
                      >
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                    <CardSubtitle tag="div">
                      <Badge color="primary">{node.frontmatter.category}</Badge>
                    </CardSubtitle>
                    <CardText className="mt-3">{node.excerpt}</CardText>
                  </CardBody>
                </Card>
              </Col>
            ))
          }
        />
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
