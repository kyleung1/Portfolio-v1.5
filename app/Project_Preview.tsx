'use client';

import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function Project_Preview() {
    useEffect(() => {
      AOS.init();
    }, [])

    return (
      <div>
        <div className="flex justify-center mt-20" data-aos="fade-right">
        <h1 className="text-5xl text-indigo-800">Projects</h1>
        </div>
        <div className="flex justify-center">
          <div className='flex flex-wrap gap-10 justify-center my-20 w-3/4'>
            <div className='bg-indigo-800 w-1/4 h-56' data-aos="fade-right" data-aos-duration="1500"></div>
            <div className='bg-indigo-800 w-1/4 h-56' data-aos="fade-right" data-aos-duration="1000"></div>
            <div className='bg-indigo-800 w-1/4 h-56' data-aos="fade-right" data-aos-duration="500"></div>
            <div className='bg-indigo-800 w-1/4 h-56' data-aos="fade-right" data-aos-duration="1500"></div>
            <div className='bg-indigo-800 w-1/4 h-56' data-aos="fade-right" data-aos-duration="1000"></div>
            <div className='bg-indigo-800 w-1/4 h-56' data-aos="fade-right" data-aos-duration="500"></div>
            <div className='bg-indigo-800 w-1/4 h-56' data-aos="fade-right" data-aos-duration="1500"></div>
            <div className='bg-indigo-800 w-1/4 h-56' data-aos="fade-right" data-aos-duration="1000"></div>
            <div className='bg-indigo-800 w-1/4 h-56' data-aos="fade-right" data-aos-duration="500"></div>
          </div>
        </div>
        
        
      </div>
      
    )
  }
  