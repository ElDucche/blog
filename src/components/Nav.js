import * as React from 'react';
import { Link } from 'gatsby'
import ThemeToggle from './themeToggle'

const Nav = () => {
    return (
        <div className='fixed flex justify-around items-center w-full pt-3 bg-gray-50 dark:bg-gray-900 shadow h-20 z-50 font-medium'>
            <div className=''>
                <Link to='/' className="dark:block hidden w-10 h-10"><svg  version="1.1" viewBox="0.0 0.0 960.0 720.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><clipPath id="p.0"><path d="m0 0l960.0 0l0 720.0l-960.0 0l0 -720.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 720.0l-960.0 0z" fill-rule="evenodd"/><path fill="#f8fafc" d="m241.59521 360.0l0 0c0 -198.82251 160.8179 -360.0 359.19684 -360.0l0 0c95.26495 0 186.62805 37.928463 253.99054 105.44156c67.36249 67.51309 105.2063 159.0805 105.2063 254.55844l0 0c0 198.82251 -160.81787 360.0 -359.19684 360.0l0 0c-198.37894 0 -359.19684 -161.17749 -359.19684 -360.0z" fill-rule="evenodd"/><path fill="#f8fafc" d="m192.0 0l436.50397 0l0 720.0l-436.50397 0z" fill-rule="evenodd"/><path fill="#0f172a" d="m192.0 0l436.50397 0l0 180.0l-436.50397 0z" fill-rule="evenodd"/><path fill="#0f172a" d="m192.0 540.0l436.50397 0l0 180.0l-436.50397 0z" fill-rule="evenodd"/><path fill="#0f172a" d="m192.0 114.0l218.2362 0l0 523.49603l-218.2362 0z" fill-rule="evenodd"/><path fill="#0f172a" d="m261.7638 270.0l218.2362 0l0 180.0l-218.2362 0z" fill-rule="evenodd"/></g></svg></Link>
                <Link to='/' className="block dark:hidden w-10 h-10"><svg version="1.1" viewBox="0.0 0.0 960.0 720.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><clipPath id="p.0"><path d="m0 0l960.0 0l0 720.0l-960.0 0l0 -720.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 720.0l-960.0 0z" fill-rule="evenodd"/><path fill="#0f172a" d="m241.59521 360.0l0 0c0 -198.82251 160.8179 -360.0 359.19684 -360.0l0 0c95.26495 0 186.62805 37.928463 253.99054 105.44156c67.36249 67.51309 105.2063 159.0805 105.2063 254.55844l0 0c0 198.82251 -160.81787 360.0 -359.19684 360.0l0 0c-198.37894 0 -359.19684 -161.17749 -359.19684 -360.0z" fill-rule="evenodd"/><path fill="#0f172a" d="m192.0 0l436.50397 0l0 720.0l-436.50397 0z" fill-rule="evenodd"/><path fill="#f8fafc" d="m192.0 0l436.50397 0l0 180.0l-436.50397 0z" fill-rule="evenodd"/><path fill="#f8fafc" d="m192.0 540.0l436.50397 0l0 180.0l-436.50397 0z" fill-rule="evenodd"/><path fill="#f8fafc" d="m192.0 114.0l218.2362 0l0 523.49603l-218.2362 0z" fill-rule="evenodd"/><path fill="#f8fafc" d="m261.7638 270.0l218.2362 0l0 180.0l-218.2362 0z" fill-rule="evenodd"/></g></svg></Link>
            </div>
            <div className=''>
                <ul className='list-none text-lg flex justify-between'>
                    <li className=''><Link to="/" className="layout-link">Home</Link></li>
                    <li className=''><Link to="/about" className="layout-link">About</Link></li>
                    <li className=''><Link to="/blog" className="layout-link">Blog</Link></li>
                </ul>
            </div>
            <div className=''>
                <ThemeToggle className="layout-link"/>
            </div>
        </div>
    )
}

export default Nav;