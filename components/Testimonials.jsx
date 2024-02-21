'use client';

import { MdNavigateNext, MdNavigateBefore  } from "react-icons/md";
import { useState } from "react";

const Testimonials = () => {

  const clientTestimonial = [
    {
    'client': 'Luke Nightangle',
    'position': 'General Manager',
    'review': 'My experience on this company was delightful. The quality that you can get over in this company can rarely be found in any other companies.',
    'image': 'man2.png'
    },
    {
      'client': 'Alice Wonderland',
      'position': 'Chief Consultant',
      'review': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      'image': 'woman2.png'
    },
    {
      'client': 'Barbara Dorothy',
      'position': 'Sales Manager',
      'review': 'Wow! Can you even get anything better than here? Truly magnificient service. Fully recommended to anyone out there. The quality and the smothness speaks it all.',
      'image': 'testimonial.jpg'
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

  const source = '/assets/images/' + testimonialData.image;

  return (
    <div id="review" className='w-fulll h-page-full bg-home-white flex justify-center items-center'>
      <div>
      <div className="font-popins text-5xl text-ultra-violet tracking-wide font-light flex justify-center items-center">What our clients say</div>
        <div className=' flex justify-center pt-8'>
          <div className="flex justify-center items-center text-4xl mr-20">
            <MdNavigateBefore onClick={handleBeforeDataChange} className="rounded-full hover:bg-phone-color hover:text-home-white cursor-pointer"/>
          </div>
          <div className="relative bg-top bg-cover h-circle-size w-circle-width shrink-0 grow-0 rounded-full bg-white">
            <img className='absolute inset-0 w-full h-full object-cover rounded-full object-top' src={source} alt='' />
          </div>
          <div className="flex justify-center items-center text-4xl ml-20">
            <MdNavigateNext onClick={handleNextDataChange} className="rounded-full hover:bg-phone-color hover:text-home-white cursor-pointer"/>
          </div>
        </div>
        <div className='flex text-center items-center justify-center pt-4'>
          <p className='font-roboto_slab max-w-sm text-sm'>{testimonialData.review}</p>
        </div>
        <p className='text-center font-semibold font-roboto_slab text-xl pt-3'>{testimonialData.position}</p>
        <p className='text-center font-semibold font-roboto_slab text-base text-text-blue pt-2'>{testimonialData.client}</p>
      </div>
    </div>
  )
}

export default Testimonials