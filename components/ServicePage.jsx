import Link from "next/link"

const ServicePage = () => {

  return (
    <div id="service" className="h-service-page bg-home-white scoll scroll-smooth text-center">
      <div className="h-div-sizer-min font-popins text-5xl text-ultra-violet tracking-wide font-light flex justify-center items-center">Our Services</div>
      <div className='w-full grid grid-cols-3 gap-2 scroll-smooth'>
        <div>
          <div className="h-div-sizer-max pl-page-left">
            <div className='relative h-full w-full overflow-hidden'>
              <img className='absolute inset-0 w-full h-full object-cover hover:scale-125 transition duration-500' src='/assets/images/about.jpg' alt='' />
            </div>
          </div>
          <div className="h-text-sizer">
            <p className="pl-page-left text-ultra-violet pt-2 text-xl font-popins tracking-wider font-medium">Deep Washing</p>
          </div>
        </div>
        <div className="p-pad-top pt-0 pb-0">
          <div className="h-div-sizer">
            <div className='relative h-full w-full overflow-hidden'>
              <img className='absolute inset-0 w-full h-full object-cover object-bottom hover:scale-125 transition duration-500' src='/assets/images/cut1.png' alt='' />
            </div>
          </div>
          <div className="h-text-sizer">
            <p className="text-ultra-violet pt-2 text-xl font-popins tracking-wider font-medium">Clean Cutting</p>
          </div>
        </div>    
        <div>
          <div className="h-div-sizer-max pr-page-right">
            <div className='relative h-full w-full overflow-hidden'>
              <img className='absolute inset-0 w-full h-full object-cover hover:scale-125 transition duration-500' src='/assets/images/repair.png' alt='' />
            </div>
          </div>
          <div className="h-text-sizer">
            <p className="pr-page-left text-ultra-violet pt-2 text-xl font-popins tracking-wider font-medium">Quality Repairing</p>
          </div>
        </div>    
      </div>
      <div className="w-full grid grid-cols-3 gap-x-2">
        <div>
          <div className="h-div-sizer-max pl-page-left">
            <div className='relative h-full w-full overflow-hidden'>
              <img className='absolute inset-0 w-full h-full object-cover hover:scale-125 transition duration-500' src='/assets/images/bind1.png' alt='' />
            </div>
          </div>
          <div className="h-text-sizer">
            <p className="pl-page-left text-ultra-violet pt-2 text-xl font-popins tracking-wider font-medium">Seamless Banding</p>
          </div>
        </div>
        <div className="p-pad-top pt-0 pb-0">
          <div className="h-div-sizer">
            <div className='relative h-full w-full overflow-hidden'>
              <img className='absolute inset-0 w-full h-full object-cover hover:scale-125 transition duration-500' src='/assets/images/paint2.png' alt='' />
            </div>
          </div>
          <div className="h-text-sizer">
            <p className="text-ultra-violet pt-2 text-xl font-popins tracking-wider font-medium">A-one Painting</p>
          </div>
        </div>
        <div>
          <div className="h-div-sizer-max pr-page-right">
            <div className='relative h-full w-full overflow-hidden'>
              <img className='absolute inset-0 w-full h-full object-cover hover:scale-125 transition duration-500' src='/assets/images/stretch1.png' alt='' />
            </div>
          </div>
          <div className="h-text-sizer">
            <p className="pr-page-left text-ultra-violet pt-2 text-xl font-popins tracking-wider font-medium">Standard Stretching</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage