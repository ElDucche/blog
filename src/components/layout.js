import * as React from 'react'
import Nav from './Nav'
import {AiFillGithub, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';


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
    <div className='min-h-screen'>
        <Nav />
        <div className='p-0 m-0'>
            <p className='invisible'>.</p>
            <div className='p-0 mt-24 '>
                    <div className=''>
                        <h1 className='text-6xl font-bold w-full text-center underline decoration-2 underline-offset-8'>{pageTitle}</h1>
                    </div>
                    <div className=''>
                        {children}
                    </div>
                    <div className='md:w-1/2 w-full mx-auto row-start-3 border-t dark:border-zinc-50/10 border-zinc-900/10'>
                        <div  className='flex justify-around items-center py-2'> 
                            <p className='font-extralight'>ElDucche's Portfolio.</p>
                            <a href='https://github.com/ElDucche' className='hover:scale-105'><AiFillGithub aria-label='GitHub' size={30}/></a>
                            <a href='https://twitter.com/ElDucche' className='hover:scale-105'><AiOutlineTwitter aria-label='Twitter' size={30}/></a>
                            <a href='https://www.linkedin.com/in/guillaume-leduc-731a10b4/' className='hover:scale-105'><AiFillLinkedin aria-label='Linkedin'size={30}/></a>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Layout