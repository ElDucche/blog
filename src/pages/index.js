import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="ElDucche's Portfolio">
      <section className='grid place-items-center min-h-screen'>
            <div className='scrollHidden delay-500'>
              <h1 className="w-96 md:w-[32rem] lg:w-[42rem] m-auto font-black text-5xl text-gray-700 dark:text-gray-300 uppercase first-letter:text-7xl border-t border-b text-center py-2">Je suis le développeur dont vous avez besoin</h1>
              <p className="text-sm w-96 my-5 italic text-gray-600 md:w-[32rem] lg:w-[40rem] scrollHidden delay-1000">Passionné de developpement et amibitieux d'ouvrir aux autres le monde du web 3. Je me spécialise dans les créations d'applications décentralisées mais aussi disponible pour créer, sur mesure, le produit dont vous avez besoin !</p>
            </div>
        </section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title={"Home Page"} />