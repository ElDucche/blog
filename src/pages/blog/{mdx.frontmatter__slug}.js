import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = ({data, children}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className=''>
        <p className='text-lg text-stone-400 dark:text-stone-500 ml-2'>{data.mdx.frontmatter.date}</p>
        <div className='blogContent'>
          {children}
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "D MMMM, YYYY")
    }
  }
}
`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost