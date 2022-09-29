import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => {
    return(
        <Layout pageTitle={"My Blog Posts"} image="https://i.postimg.cc/DfCWs0QX/bgBlog.jpg" >
            <section className='grid content-center place-items-center min-h-screen'>
                <ul>
                    {
                        data.allMdx.nodes.map((node) => (
                        <article key={node.id} className="m-4 p-4 rounded border border-stone-900 dark:border-stone-50 dark:hover:shadow-[3px_3px_0_1px_rgba(250,250,249,0.2)] hover:shadow-[3px_3px_0_1px_rgba(0,0,0,0.2)] transition-all duration-200">
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