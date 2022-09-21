import * as React from 'react'
import Nav from './Nav'
import {useStaticQuery, graphql } from 'gatsby'


const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }`)
  return (
    <div className='text-slate-900 dark:text-slate-50 bg-slate-50 dark:bg-slate-900'>
        <Nav />
      <main className='p-0 m-0'>
        <section className='grid grid-rows-6 place-items-center min-h-screen'>
            <div className=' row-start-2 row-span-4'>
                <h1 className='text-7xl font-bold'>{pageTitle}</h1>
                {children}
            </div>
        </section>
      </main>
    </div>
  )
}

export default Layout