import { FaFacebookMessenger, FaPhoneAlt,  } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div id="contact" className='w-full h-[110svh] scroll-smooth bg-home-white'>
        <div className="h-div-sizer-min font-popins text-5xl text-ultra-violet tracking-wide font-light flex items-center justify-center">Connect with Us</div>
        <div className="grid grid-cols-3 gap-2">
            <div>
            <div className="h-div-sizer-max pl-page-left">
                <div className="relative h-full w-full overflow-hidden flex justify-center items-center">
                    <img className='absolute inset-0 w-full h-full object-cover hover:scale-125 transition duration-500' src='/assets/images/con1.jpg' alt='' />
                    <div className="absolute text-center bg-black bg-opacity-50 p-6 rounded-lg">
                        <div className="inline-block"><FaFacebookMessenger className="text-3xl text-button-blue"/></div>
                        <div>
                            <p className="text-white font-popins text-xs pt-4 pb-min-pad">Messenger:</p>
                            <div className="h-1 w-line-width bg-home-white"></div>
                            <p className="text-white font-popins pt-1 text-sm">Aanand Washing Center</p>
                        </div>  
                    </div>
                </div>
            </div>
            </div>
            <div className="p-pad-top pt-0 pb-0">
            <div className="h-div-sizer">
                <div className='relative h-full w-full overflow-hidden flex justify-center items-center'>
                    <img className='absolute inset-0 w-full h-full object-cover object-bottom hover:scale-125 transition duration-500' src='/assets/images/con3.png' alt='' />
                    <div className="absolute text-center bg-black bg-opacity-50 p-6 rounded-lg">
                        <div className="inline-block"><FaPhoneAlt className="text-3xl text-phone-color"/></div>
                        <div>
                            <p className="text-white font-popins pt-4 text-xs pb-min-pad">Call us at:</p>
                            <div className="h-1 w-line-width bg-home-white"></div>
                            <p className="text-white font-popins pt-1 text-sm">+977 983123132</p>
                        </div> 
                    </div>
                </div>
            </div>
            </div>    
            <div>
            <div className="h-div-sizer-max pr-page-right">
                <div className='relative h-full w-full overflow-hidden flex justify-center items-center'>
                    <img className='absolute inset-0 w-full h-full object-cover hover:scale-125 transition duration-500' src='/assets/images/con4.png' alt='' />
                    <div className="absolute text-center bg-black bg-opacity-50 p-6 rounded-lg">
                        <div className="inline-block">
                            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=washingcentre70@gmail.com" target="_blank">
                                <MdOutlineMailOutline className="text-3xl text-gmail-color"/>
                            </Link>
                        </div>
                        <div>
                            <p className="text-white font-popins pt-4 text-xs pb-min-pad">Email us at:</p>
                            <div className="h-1 w-line-width bg-home-white"></div>
                            <p className="text-white font-popins pt-1 text-sm">washingcentre70@gmail.com</p>
                        </div>  
                    </div>
                </div>
            </div>
            </div>    
        </div>
        <div className="grid grid-cols-3 justify-center items-center h-[33.5svh] mt-5">
        <div className="text-grey font-bold text-right">
                <p className=" text-5xl font-abeezee">30<span className="text-xl font-abeezee">plus</span></p>
                <p className="text-sm font-abeezee">trusted partners</p>
            </div>
            <div className="text-phone-color font-abeezee font-bold text-center">
                <p className=" text-5xl font-abeezee">100+</p>
                <p className="text-sm font-abeezee">satisfied customers</p>
            </div>
            <div className="text-grey font-abeezee font-bold">
                <p className=" text-5xl font-abeezee">20<span className="text-xl font-abeezee">plus</span></p>
                <p className="text-sm font-abeezee">years of experience</p>
            </div>
        </div>
    </div>
  )
}

export default ContactPage