import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => {
    return(
        <Layout pageTitle={"My Blog Posts"} >
            <section className='grid content-center place-items-center min-h-screen'>
                <ul className='mt-4'>
                    {
                        data.allMdx.nodes.map((node) => (
                        <article key={node.id} className="m-4 p-4 md:w-96 w-80 mx-auto bg-stone-100 dark:bg-stone-700 rounded border border-stone-900 dark:border-stone-50 dark:hover:shadow-[3px_3px_0_1px_rgba(255,255,255,0.3)] hover:shadow-[3px_3px_0_1px_rgba(0,0,0,0.2)] transition-all duration-200">
                            <h2 className='text-3xl font-semibold'>{node.frontmatter.title}</h2>
                            <p className='text-stone-400 font-light text-xs'>Posted: {node.frontmatter.date}</p>
                            <p>{node.excerpt}</p>
                        </article>
                        ))
                    }
                </ul>
            </section>
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
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title={"Blog"} />

export default BlogPage;