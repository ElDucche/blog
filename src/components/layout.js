import * as React from 'react'
import Nav from './Nav'


const Layout = ({ pageTitle, children }) => {
    /*const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }`)*/
  return (
    <div className='text-slate-900 dark:text-slate-50 bg-slate-50 dark:bg-slate-900'>
        <Nav />
        <div className='p-0 m-0'>
            <div className='relative top-20'>
                <h1 className='text-6xl font-bold w-full text-center'>{pageTitle}</h1>
            </div>
                {children}
        </div>
    </div>
  )
}

export default Layout