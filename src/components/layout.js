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
    <div className='text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900'>
        <Nav />
        <div className='p-0 m-0'>
            <div className='relative top-24'>
                <h1 className='text-6xl font-bold w-full text-center'>{pageTitle}</h1>
                <div className=" h-64 w-full bg-fixed bg-cover" style={{backgroundImage: "url(" + image + ")"}}></div>
            </div>
                {children}
        </div>
    </div>
  )
}

export default Layout