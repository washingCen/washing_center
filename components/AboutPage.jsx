import React from 'react'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div id="about" className='w-full h-page-full scroll-smooth bg-home-white p-page-left pt-pad-sizer pb-pad-sizer'>
      <div className='grid grid-cols-2 gap-x-10 bg-gradient-to-b from-about-white-blue to-about-blue rounded-sm'>
        <div>
          <div className='relative h-height-sizer w-full overflow-hidden'>
            <img className='absolute inset-0 w-full h-full object-cover' src='/assets/images/about.jpg' alt='' />
          </div>
        </div>
        <div className='text-justify pt-about-pad pl-page-left'>
            <p className='font-abeezee text-3xl'>About Us</p>
            <p className='font-roboto_slab mt-3'>Bringing Joys together with our carpet <br/> related services. We are a carpet service <br/> based company that has been operating <br/> since 2007.</p>
            <div className='rounded-btn pt-2 pb-2 pr-6 pl-6 mt-4'>
              <Link href="#story" className='text-sm font-roboto font-medium'>
                Check our stories             
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage