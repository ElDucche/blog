import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <div className="grid place-items-center content-center">
      <h1 className="text-5xl">Page not found</h1>
      <p className="bg-slate-500 texte-slate-50">
        Sorry <span aria-label="emoji sad">😔</span>, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </div>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
