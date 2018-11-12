import { graphql } from 'gatsby';
import * as React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import Layout from '../components/Layout';

import styles from './blog-post.module.css';

const BlogPostTemplate = ({ data, ...props }: any) => {
  const post = data.markdownRemark;

  return (
    <Layout {...props}>
      <Container>
        <Jumbotron
          className={styles.hero}
          style={{
            background: `url('${
              post.frontmatter.featuredImage.publicURL
            }') bottom center / cover fixed`,
          }}
        />
        <h1>{post.frontmatter.title}</h1>

        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Container>
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featuredImage {
          publicURL
        }
      }
      html
    }
  }
`;
