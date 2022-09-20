import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <main className="text-slate-900 bg-slate-50 dark:text-slate-50 dark:bg-slate-900">
      <section className="h-screen grid content-center place-items-center">
        <h1 className="text-5xl font-bold">
          My first Gatsby site
          <br />
          <span className="text-3xl italic capitalize">I'm making this by following the Gatsby Tuto !</span>
        </h1>
        <Link to="/about" className="text-2xl mt-4 p-2 rounded hover:bg-slate-900 hover:text-slate-50">About</Link>
      </section>
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>