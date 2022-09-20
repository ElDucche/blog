import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className='text-slate-900 dark:text-slate-50 bg-slate-50 dark:bg-slate-900'>
      <nav className='fixed mt-2'>
        <ul className='list-none text-lg flex justify-evenly'>
          <li className=''><Link to="/" className="layout-link">Home</Link></li>
          <li className=''><Link to="/about" className="layout-link">About</Link></li>
        </ul>
      </nav>
      <main className='p-0 m-0'>
        <section className='grid content-center place-items-center h-screen'>
            <h1 className='text-7xl font-bold'>{pageTitle}</h1>
            {children}
        </section>
      </main>
    </div>
  )
}

export default Layout