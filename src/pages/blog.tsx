import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import BlogLayout from "../layouts/blog"
import Seo from "../components/seo"
import { List, ListItem, ListItemText, Typography } from '@mui/material'


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <BlogLayout>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </BlogLayout>
    )
  }

  return (
    <BlogLayout>
      <List>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug;

          return (
            <ListItem key={post.fields.slug}>
              <ListItemText>
                <article
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <Typography variant="h2">
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </Typography>
                    <Typography variant="subtitle1">{post.frontmatter.date}</Typography>
                  </header>
                  <section>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 2
                      }}
                      dangerouslySetInnerHTML={{ __html: post.frontmatter.description || post.excerpt }}>
                    </Typography>
                  </section>
                </article>
              </ListItemText>
            </ListItem>
          )
        })}
      </List>
    </BlogLayout >
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" description="All blog posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
