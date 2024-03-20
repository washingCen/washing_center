import { FaFacebook, FaInstagram, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { RiPhoneFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const QuickLink = () => {
  return (
    <div className='w-full pl-page-left sm:h-link-size scroll-smooth bg-linker overflow-hidden'>
        <div className='font-popins text-grey font-medium pt-6'>
            <Image 
                src="/assets/images/logo.webp"
                alt="Logo Picture"
                height={50}
                width={70}
                className="rounded mb-4"
            />
            <p className='text-sm sm:text-base'>Giving You What You Need!</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 text-home-white font-extralight text-[10px] sm:text-xs tracking-wider pt-8'>
            <div>
                <h3 className="text-grey font-normal text-sm sm:text-base mb-2">Quick Links</h3>
                <p className="font-popins pb-1"><Link href="#home">Home</Link></p>
                <p className="font-popins pb-1"><Link href="#service">Our Services</Link></p>
                <p className="font-popins pb-1"><Link href="#contact">Contact Us</Link></p>
            </div>
            <div>
                <h3 className="text-grey font-popins font-normal text-sm sm:text-base mb-2">Company</h3>
                <p className="font-popins pb-1"><Link href="#about">About Company</Link></p>
                <p className="font-popins pb-1"><Link href="#review">Customer reviews</Link></p>
                <p className="font-popins pb-1"><Link href="#story">Our recent activities</Link></p>
            </div>
            <div>
                <h3 className="text-grey font-popins font-normal text-sm sm:text-base mb-2">Business Hours</h3>
                <p className="font-popins pb-1">Sun-Fri: 9:00-17:00</p>
                <p className="font-popins pb-1">Sat: 10:00-14:00</p>
            </div>
            <div>
                <h3 className="text-grey font-popins font-normal text-sm sm:text-base mb-2">Connect with Us</h3>
                <p className="font-popins pb-1">washing@gmail.com</p>
            </div>
        </div>
        <div>
            <div className="text-white pt-12 flex justify-center items-center sm:text-2xl text-xl">
                <div className="sm:pr-8 sm:pl-8 pr-4 pl-4">
                    <Link href="https://www.facebook.com/roywashing"  target="_blank">
                        <FaFacebook className="hover:text-button-blue"/>
                    </Link>
                </div>
                <div className="sm:pr-8 sm:pl-8 pr-4 pl-4">
                    <Link href="https://www.facebook.com/messages/t/100960365770471" target="_blank">
                        <FaFacebookMessenger className="hover:text-button-blue"/>
                    </Link>
                </div>
                <div className="sm:pr-8 sm:pl-8 pr-4 pl-4">
                    <FaInstagram/>
                </div>
                <div className="sm:pr-8 sm:pl-8 pr-4 pl-4">
                    <FaXTwitter/>
                </div>
                <div className="sm:pr-8 sm:pl-8 pr-4 pl-4">
                    <FaWhatsapp/>
                </div>
            </div>
            <div className="flex justify-center items-center pt-8 pb-6">
                <p className="text-xs sm:text-base text-grey font-popins font-medium">Copyright © 2023 Washing™</p>
            </div>
            
        </div>
    </div>
  )
}

export default QuickLink