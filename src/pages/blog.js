import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = () => {
    return(
        <Layout pageTitle={"My Blog Posts"} >
            <section className='grid content-center place-items-center min-h-screen'>
                <p>All my blog posts will go here ! </p>
            </section>
        </Layout>
    )
}

export const Head = () => <Seo title={"Blog"} />

export default BlogPage;