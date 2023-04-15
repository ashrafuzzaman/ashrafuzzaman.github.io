import * as React from "react"
import { graphql } from "gatsby"

import BlogLayout from '../layouts/blog';
import Seo from "../components/seo"
import { Box, BoxProps, Link, Typography, styled } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import colors from "../colors/blog";


const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = `Back to home`;

  const Article = styled((props: BoxProps) => (
    <Box
      {...props}
      component="article"
    />
  ))({
    '& header h1': {
      fontSize: "2rem",
      fontWeight: "bold",
    },
  });

  return (
    <BlogLayout>
      <Article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <Typography variant="h1" color={colors.typography.title}>{post.frontmatter.title}</Typography>
          <Typography variant="subtitle1" color={colors.typography.subtitle}>{post.frontmatter.date}</Typography>
        </header>
        <section itemProp="articleBody">
          <Typography
            sx={{
              color: colors.typography.text,
              "& h1": {
                color: colors.typography.header,
              },
              "& h2": {
                color: colors.typography.header,
              },
              "& a": {
                color: colors.typography.link,
                textDecoration: "none"
              },
            }}
            dangerouslySetInnerHTML={{ __html: post.html }}>
          </Typography>
        </section>
        <hr />
      </Article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link href={previous.fields.slug} rel="prev" sx={{ display: "flex", alignItems: "center", color: colors.typography.link }}>
                <ArrowBackIcon />{previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link href={next.fields.slug} rel="next" sx={{ display: "flex", alignItems: "center", color: colors.typography.link }}>
                {next.frontmatter.title} <ArrowForwardIcon />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </BlogLayout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
