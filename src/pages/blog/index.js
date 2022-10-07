import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const BlogPage = ({data}) => {

    return(
        <Layout pageTitle={"My Blog Posts"} >
                <ul className='mt-4'>
                    {
                        data.allMdx.nodes.map((node) => (
                        <Link to={`/blog/${node.frontmatter.slug}`} className="scrollHidden">
                          <article key={node.id} className="m-4 p-4 md:w-[28rem] w-80 lg:w-[32rem] mx-auto bg-gray-100 dark:bg-gray-700 rounded border border-gray-900 dark:border-gray-50 dark:hover:shadow-[3px_3px_0_1px_rgba(255,255,255,0.3)] hover:shadow-[3px_3px_0_1px_rgba(0,0,0,0.2)] hover:scale-105 transition-all">
                              <h2 className='text-3xl font-semibold'>{node.frontmatter.title}</h2>
                              <p className='text-gray-400 font-light text-xs'>Posted: {node.frontmatter.date}</p>
                              <p>{node.excerpt}</p>
                          </article>
                        </Link>
                        ))
                    }
                </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title={"Blog"} />

export default BlogPage;