import React from 'react'

const StoryPage = () => {
  return (
    <div id="story" className='w-full sm:h-page-full scroll-smooth bg-gradient-to-b from-about-white-blue to-about-blue'>
      <div className="h-div-sizer-min font-popins text-2xl sm:text-5xl text-ultra-violet tracking-wide font-light flex items-center justify-center">Be a part of our Story</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 pr-page-left pl-page-left gap-x-5'>
        <div>
          <div className='relative h-[40svh] sm:h-story-img-size overflow-hidden rounded-md'>
            <img className='absolute inset-0 w-full h-full object-cover hover:scale-125 transition duration-500' src='https://i.ibb.co/hc1vrYP/story.webp' alt='' />
          </div>
          <div className='text-center text-ultra-violet tracking-wide text-lg font-light font-popins p-6'>Group Carpet Cleaning</div>
        </div>
        <div>
          <div className='relative h-[40svh] sm:h-story-img-size overflow-hidden rounded-md'>
            <img className='absolute inset-0 w-full h-full object-cover hover:scale-125 transition duration-500' src='https://i.ibb.co/nCqNbz5/paint1.webp' alt='' />
          </div>
          <div className='text-center text-ultra-violet tracking-wide text-lg font-light font-popins p-6'>Quality Carpet Painting</div>
        </div>
      </div>
    </div>
  )
}

export default StoryPage