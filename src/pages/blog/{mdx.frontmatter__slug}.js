import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = ({data, children}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className=''>
        <p className='text-lg text-gray-400 dark:text-gray-500 w-full text-center my-2'>{data.mdx.frontmatter.date}</p>
        <div className='blogContent'>
          {children}
        </div>
        <div className='w-80 mx-auto mt-1 mb-3'>
          <Link to="/blog" className="p-2 outline flex justify-center rounded my-2 hover:bg-gray-900 hover:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-900 transition-all duration-200 group"><p className='hidden group-hover:block mr-2 transition-all duration-150'>← </p> Retour</Link>
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