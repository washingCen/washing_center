'use client';

import { MdNavigateNext, MdNavigateBefore  } from "react-icons/md";
import { useState } from "react";

const Testimonials = () => {

  const clientTestimonial = [
    {
    'client': 'Luke Nightangle',
    'position': 'General Manager',
    'review': 'My experience on this company was delightful. The quality that you can get over in this company can rarely be found in any other companies.',
    'image': 'https://i.ibb.co/0Y8jsLF/man2.webp'
    },
    {
      'client': 'Alice Wonderland',
      'position': 'Chief Consultant',
      'review': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      'image': 'https://i.ibb.co/G0NMkpW/woman2.webp'
    },
    {
      'client': 'Barbara Dorothy',
      'position': 'Sales Manager',
      'review': 'Wow! Can you even get anything better than here? Truly magnificient service. Fully recommended to anyone out there. The quality and the smothness speaks it all.',
      'image': 'https://i.ibb.co/tMQkrD4/testimonial.webp'
    }
  ]

  const [testimonialData, setTestimonialData] = useState({
    'client': clientTestimonial[0].client,
    'position': clientTestimonial[0].position,
    'review': clientTestimonial[0].review,
    'image': clientTestimonial[0].image,
    'dataPosition': 0,
  })

  const handleNextDataChange = (event) => {
    event.preventDefault();
    if(testimonialData.dataPosition === 2){
      return
    }
    else{
      setTestimonialData((prevVerdict) => {
        const val = prevVerdict.dataPosition + 1;
        return{
          'client': clientTestimonial[val].client,
          'position': clientTestimonial[val].position,
          'review': clientTestimonial[val].review,
          'image': clientTestimonial[val].image,
          'dataPosition': val
        }
      })
    }
  }

  const handleBeforeDataChange = (event) => {
    event.preventDefault();
    if(testimonialData.dataPosition === 0){
      return
    }
    else{
      setTestimonialData((prevVerdict) => {
        const val = prevVerdict.dataPosition - 1;
        return{
          'client': clientTestimonial[val].client,
          'position': clientTestimonial[val].position,
          'review': clientTestimonial[val].review,
          'image': clientTestimonial[val].image,
          'dataPosition': val
        }
      })
    }
  }

  return (
    <div id="review" className='w-full h-page-full bg-home-white flex justify-center items-center overflow-hidden'>
      <div>
        <div className="font-popins text-xl sm:text-5xl text-ultra-violet tracking-wide font-light flex justify-center items-center">What our clients say</div>
        <div className='flex justify-center pt-8'>
          <div className="flex justify-center items-center text-2xl sm:text-4xl lg:mr-20 mr-5">
            <MdNavigateBefore onClick={handleBeforeDataChange} className="rounded-full hover:bg-phone-color hover:text-home-white cursor-pointer"/>
          </div>
          <div className="relative bg-top bg-cover h-[22svh] w-[22svh] sm:h-circle-size sm:w-circle-width shrink-0 grow-0 rounded-full bg-white">
            <img className='absolute inset-0 w-full h-full object-cover rounded-full object-top' src={testimonialData.image} alt='' />
          </div>
          <div className="flex justify-center items-center text-2xl sm:text-4xl ml-5 lg:ml-20">
            <MdNavigateNext onClick={handleNextDataChange} className="rounded-full hover:bg-phone-color hover:text-home-white cursor-pointer"/>
          </div>
        </div>
        <div className='flex text-center items-center justify-center pt-4'>
          <p className='font-roboto_slab max-w-sm text-xs ms:text-sm pl-4 pr-4 sm:p-0'>{testimonialData.review}</p>
        </div>
        <p className='text-center font-semibold font-roboto_slab text-xl pt-3'>{testimonialData.position}</p>
        <p className='text-center font-semibold font-roboto_slab text-base text-text-blue pt-2'>{testimonialData.client}</p>
      </div>
    </div>
  )
}

export default Testimonials