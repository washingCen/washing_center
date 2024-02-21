import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="home-img w-full h-page-size bg-no-repeat bg-cover bg-center bg-opacity-100 p-page-left pt-20">
      <div>
        <p className='text-white font-actor text-5xl tracking-wide'>Where <br/>Tradition Meets <br/> Excellence</p>
        <p className='text-white tracking-wide mt-5 text-opacity-90'>"Reviving the Splendor of <br/> Nepalese Carpets, <br/>One Thread at a Time."</p>
        <div className='rounded-btn pt-2 pb-2 pr-6 pl-6 mt-3'>
          <Link href="#service" className='text-sm font-roboto font-medium'>
            Check our services              
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage