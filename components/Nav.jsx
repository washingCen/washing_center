import Link from "next/link"
import Image from "next/image"

const Nav = () => {

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

        </nav>
    )
}

export default Nav