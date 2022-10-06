import * as React from 'react'
import Nav from './Nav'
import {AiFillGithub, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';
import { useEffect } from 'react';


const Layout = ({ pageTitle, children }) => {
   // const [scrollShow, setScrollShow] = useAnimateScroll();
    useEffect(() => {
    // On crée un 'observer" qui prend en arguments tous les objets qu'il va croiser et les appeler 'entries'
        const observer = new IntersectionObserver((entries) => {
            // Pour chacune d'elle on va voir si elle est a l'intersection du point de vue ou non :
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    // Dans ce cas on lui applique la classe show.
                    entry.target.classList.add('show');
                }
            });
        });

        // on selectionne tous les objets ayant la classe hidden.
        const hiddenElements = document.querySelectorAll(".scrollHidden");
        // On applique notre observer a tous les hidden elements et on observe chacun d'entre eux.
        hiddenElements.forEach((el) => observer.observe(el));
    });
    return (
        <div className='min-h-screen'>
            <Nav />
            <div className='p-0 m-0'>
                <p className='invisible'>.</p>
                <div className="p-0 mt-24 scrollHidden">
                        <div className=''>
                            <h1 className='text-6xl font-bold w-full text-center underline decoration-2 underline-offset-8 px-2 md:px-0'>{pageTitle}</h1>
                        </div>
                        <div className='scrollHidden'>
                            {children}
                        </div>
                        <div className='md:w-1/2 w-full mx-auto border-t dark:border-gray-50/10 border-gray-900/10 scrollHidden'>
                            <div  className='flex justify-around items-center py-2 scrollHidden footer'> 
                                <p className='font-extralight'>ElDucche's Portfolio.</p>
                                <a href='https://github.com/ElDucche' className='hover:scale-105 scrollHidden delay-200'><AiFillGithub aria-label='GitHub' size={30}/></a>
                                <a href='https://twitter.com/ElDucche' className='hover:scale-105 scrollHidden delay-500'><AiOutlineTwitter aria-label='Twitter' size={30}/></a>
                                <a href='https://www.linkedin.com/in/guillaume-leduc-731a10b4/' className='hover:scale-105 scrollHidden delay-700'><AiFillLinkedin aria-label='Linkedin'size={30}/></a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Layout