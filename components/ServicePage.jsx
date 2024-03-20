import Link from "next/link"

const ServicePage = () => {

  return (
    <div id="service" className="lg:h-service-page bg-home-white scroll-smooth text-center">
      <div className="h-[15svh] sm:h-div-sizer-min font-popins text-3xl sm:text-5xl text-ultra-violet tracking-wide font-light flex justify-center items-center">Our Services</div>
      <div className='w-full grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-2 sm:gap-8 scroll-smooth grid-cols-1 sm:pr-[5vw] sm:pl-[5vw] lg:pr-0 lg:pl-0'>
        <div>
          <div className="h-div-sizer-max lg:pl-page-left pr-5 pl-5 sm:pr-0 sm:pl-0">
            <div className='relative h-full w-full overflow-hidden'>
              <img className='absolute inset-0 w-full h-full object-cover hover:scale-125 transition duration-500' src='/assets/images/cut1.webp' alt='' />
            </div>
          </div>
          <div className="h-[8svh] sm:h-text-sizer">
            <p className="pl-page-left text-ultra-violet pt-2 text-xl font-popins tracking-wider font-medium">Clean Cutting</p>
          </div>
        </div>
        <div className="lg:p-pad-top lg:pt-0 lg:pb-0">
          <div className="lg:h-div-sizer h-div-sizer-max pr-5 pl-5 sm:pr-0 sm:pl-0">
            <div className='relative h-full w-full overflow-hidden'>
              <img className='absolute inset-0 w-full h-full object-cover object-left hover:scale-125 transition duration-500' src='/assets/images/wash1.webp' alt='' />
            </div>
          </div>
          <div className="h-[8svh] sm:h-text-sizer">
            <p className="text-ultra-violet pt-2 text-xl font-popins tracking-wider font-medium">Deep Washing</p>
          </div>
        </div>    
        <div>
          <div className="h-div-sizer-max lg:pr-page-right pr-5 pl-5 sm:pr-0 sm:pl-0">
            <div className='relative h-full w-full overflow-hidden'>
              <img className='absolute inset-0 w-full h-full object-cover hover:scale-125 transition duration-500' src='/assets/images/repair.webp' alt='' />
            </div>
          </div>
          <div className="h-[8svh] sm:h-text-sizer">
            <p className="pr-page-left text-ultra-violet pt-2 text-xl font-popins tracking-wider font-medium">Quality Repairing</p>
          </div>
        </div>  
        <div>
          <div className="h-div-sizer-max lg:pl-page-left pr-5 pl-5 sm:pr-0 sm:pl-0">
            <div className='relative h-full w-full overflow-hidden'>
              <img className='absolute inset-0 w-full h-full object-cover hover:scale-125 transition duration-500' src='/assets/images/bind1.webp' alt='' />
            </div>
          </div>
          <div className="h-[8svh] sm:h-text-sizer">
            <p className="pl-page-left text-ultra-violet pt-2 text-xl font-popins tracking-wider font-medium">Seamless Banding</p>
          </div>
        </div>
        <div className="lg:p-pad-top lg:pt-0 lg:pb-0">
          <div className="lg:h-div-sizer h-div-sizer-max pr-5 pl-5 sm:pr-0 sm:pl-0">
            <div className='relative h-full w-full overflow-hidden'>
              <img className='absolute inset-0 w-full h-full object-cover hover:scale-125 transition duration-500' src='/assets/images/paint2.webp' alt='' />
            </div>
          </div>
          <div className="h-[8svh] sm:h-text-sizer">
            <p className="text-ultra-violet pt-2 text-xl font-popins tracking-wider font-medium">A-one Painting</p>
          </div>
        </div>
        <div>
          <div className="h-div-sizer-max lg:pr-page-right pr-5 pl-5 sm:pr-0 sm:pl-0">
            <div className='relative h-full w-full overflow-hidden'>
              <img className='absolute inset-0 w-full h-full object-cover hover:scale-125 transition duration-500' src='/assets/images/stretch1.webp' alt='' />
            </div>
          </div>
          <div className="h-[10svh] sm:h-text-sizer">
            <p className="pr-page-left text-ultra-violet pt-2 text-xl font-popins tracking-wider font-medium">Standard Stretching</p>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default ServicePage