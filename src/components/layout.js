import * as React from 'react'
import Nav from './Nav'


const Layout = ({ pageTitle, children, image }) => {
    /*const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }`)*/
  return (
    <div className='text-stone-900 dark:text-stone-50 bg-gradient-to-bl from-stone-50 to-stone-300 dark:from-stone-900 dark:to-stone-600'>
        <Nav />
        <div className='p-0 m-0'>
            <div className='relative top-24'>
                <h1 className='text-6xl font-bold w-full text-center underline underline-offset-8'>{pageTitle}</h1>
            </div>
            <div className='mt-6'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout