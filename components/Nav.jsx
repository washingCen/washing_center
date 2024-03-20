'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import Image from "next/image"
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai';

const Nav = () => {

    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };

    const navigationLink = (linker) => {
        toggleMenu();
        router.push(linker);
    };

    return (
        <nav id="home" className="flex-between w-full pt-3 pb-3 pr-page-right pl-page-left h-20 bg-home-white">
            <Link href="/" className="flex gap-2 flex-center">
                <p className="logo_text">Aanand Washing</p>
            </Link>

            {/*Desktop Navigation*/}
            <div className="sm:flex hidden">
                <div className="flex gap-3 md:gap-5 tracking-tight text-base">
                    <Link href="#" className="black_btn mr-5 hover:underline hover:decoration-linker underline-offset-4">
                        Home
                    </Link>
                    <Link href="#service" className="black_btn mr-5 hover:underline hover:decoration-linker underline-offset-4">
                        Services
                    </Link>
                    <Link href="#about" className="black_btn mr-5 hover:underline hover:decoration-linker underline-offset-4">
                        About Us
                    </Link>
                    <Link href="#contact" className="black_btn hover:underline hover:decoration-linker underline-offset-4">
                        Contact Us
                    </Link>
                </div>
            </div>

            {/*Mobile Navigation*/}
            <div className={`sm:hidden fixed inset-y-0 right-0 w-[50vw] bg-black bg-opacity-75 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-white text-3xl p-2"><AiOutlineCloseCircle/></button>
                </div>
            <div className="flex flex-col items-end pr-6 h-full">
                <button onClick={() => navigationLink('/#home')} className="text-white text-base py-2">Home</button>
                <button onClick={() => navigationLink('/#about')} className="text-white text-base py-2">About</button>
                <button onClick={() => navigationLink('/#contact')} className="text-white text-base py-2">Contact</button>
                <button onClick={() => navigationLink('/#service')} className="text-white text-base py-2">Services</button>
            </div>
        </div>

        <div className="sm:hidden flex">
            <button onClick={toggleMenu} className="text-black text-3xl pr-2">{!isMenuOpen && <AiOutlineMenu/>}</button>
        </div>
        </nav>
    )
}

export default Nav