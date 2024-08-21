'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '@mui/material'
import { FaApple, FaBars, FaPlus } from 'react-icons/fa'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div>

            <div className='fixed w-full   z-10'>
                <div className='text-xs mx-auto flex justify-center  items-center backdrop-blur-xl backdrop-brightness-75 transform text-white'>
                    <Link className='' href='/'><FaApple className='text-5xl max-sm:hidden' /></Link>
                    <Link className='' href='/'><FaApple className='text-5xl md:hidden sm:hidden' /></Link>
                    <div className='max-sm:hidden text-xs flex justify-center items-center backdrop-blur-xl backdrop-brightness-75 transform text-white'>
                        <Link className='text-xs ml-20 mr-10' href="/appstore">App Store</Link>
                        <Link className='text-xs mr-10' href="/store">Store</Link>
                        <Link className='text-xs mr-10' href="/iphone">iPhone</Link>
                        <Link className='text-xs mr-10' href="/tv">Tv & Home</Link>
                        <Link className='text-xs mr-10' href="/support">Support</Link>
                        <Link className='text-xs mr-10' href="/accessories">Accessories</Link>
                        <Link className='text-xs mr-10' href="/relayzers">relayzers</Link>
                    </div>
                    <Link href="" onClick={toggleMenu} className='text-white md:hidden sm:hidden text-xl ml-60'><FaBars id='bars' /></Link>
                </div>
                <div className='text-white text-center mx-auto w-full  text-xs'>
                    {showMenu && <div className='border-y-2 transition-all md:hidden sm:hidden max-sm:text-xs'>
                        <Link className='py-0.5 hover:text-black hover:bg-white text-sm mr-3' href="/appstore">App Store</Link>
                        <Link className='py-0.5 hover:text-black hover:bg-white text-sm mr-3' href="/store">Store</Link>
                        <Link className='py-0.5 hover:text-black hover:bg-white text-sm mr-3' href="/iphone">iPhone</Link>
                        <Link className='py-0.5 hover:text-black hover:bg-white text-sm mr-3' href="/tv">Tv & Home</Link>
                        <Link className='py-0.5 hover:text-black hover:bg-white text-sm mr-3' href="/support">Support</Link>
                        <Link className='py-0.5 hover:text-black hover:bg-white text-sm mr-3' href="/accessories">Accessories</Link>

                    </div>}
                </div>
            </div>
            <script src="app.js"></script>
        </div>
    )
}

export default Navbar