import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Post">
      {data.allMdx.nodes.map((node) => {
        return (
          <article key={node.id}>
            <Link to={node.slug}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p> {node.frontmatter.date}</p>
          </article>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
