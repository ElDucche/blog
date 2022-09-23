import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" image="https://i.postimg.cc/13HMkxHT/hero.jpg">
      <section className='grid grid-rows-6 place-items-center min-h-screen'>
            <div className=' row-start-2 row-span-2'>
            <p className="w-96 m-auto">I'm making this by following the Gatsby Tutorial.</p>
            </div>
        </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title={"Home Page"} />