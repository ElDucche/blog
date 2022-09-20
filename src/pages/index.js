import * as React from "react"

const IndexPage = () => {
  return (
    <main className="text-slate-900 bg-slate-50 dark:text-slate-50 dark:bg-slate-900">
      <section className="h-screen grid content-center place-items-center">
        <h1 className="text-5xl font-bold">
          My first Gatsby site
          <br />
          <span className="text-3xl italic capitalize">I'm making this by following the Gatsby Tuto !</span>
        </h1>
        <p className="">
          Edit to see this page
          update in real-time. 😎
        </p>
      </section>
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
