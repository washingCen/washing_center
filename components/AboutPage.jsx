import React from 'react'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div id="about" className='w-full h-page-full scroll-smooth bg-home-white sm:p-page-left sm:pt-pad-sizer sm:pb-pad-sizer'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:gap-x-10 bg-gradient-to-b from-about-white-blue to-about-blue rounded-sm'>
        <div className='p-page-left pt-10 pb-0 sm:p-0'>
          <div className='relative h-[30svh] sm:h-height-sizer w-full overflow-hidden'>
            <img className='absolute inset-0 w-full h-full object-cover' src='/assets/images/about.jpg' alt='' />
          </div>
        </div>
        <div className='text-justify pt-4 sm:pt-about-pad pl-page-left pr-page-right sm:pr-0'>
            <p className='font-abeezee text-xl sm:text-3xl'>About Us</p>
            <p className='hidden sm:block font-roboto_slab mt-3 text-base'>Bringing Joys together with our carpet <br/> related services. We are a carpet service <br/> based company that has been operating <br/> since 2007.</p>
            <p className='sm:hidden font-roboto_slab mt-3 text-sm sm:text-base'>Bringing Joys together with our carpet related services. We are a carpet service based company that has been operating since 2007.</p>
            <div className='rounded-btn pt-2 pb-2 pr-2 pl-2 sm:pr-6 sm:pl-6 mt-4 mb-10 sm:mb-0'>
              <Link href="#story" className='text-xs sm:text-sm font-roboto font-medium'>
                Check our stories             
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage