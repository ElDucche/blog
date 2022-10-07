import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404">
      <div className="grid place-items-center content-center min-h-screen">
        <h1 className="text-5xl scrollHidden">Page not found</h1>
        <p className="bg-slate-500 text-slate-50 my-4 scrollHidden p-3 rounded">
          Désolé, cette page n'existe pas encore. Peut-être n'existera-t-elle jamais...
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Home</Link>.
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
