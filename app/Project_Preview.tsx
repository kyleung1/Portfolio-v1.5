'use client';

import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Link from 'next/link';

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
            <div className='bg-indigo-300  xl:w-[500px] lg:w-[280px] md:w-[200px] xl:h-[500px] lg:h-[280px] md:h-[200px] p-5' data-aos="fade-right" data-aos-duration="1500">
              <h1 className='text-2xl text-neutral-700 text-center my-3'>Personal Website</h1>
              <img src="/personal-site.PNG" alt="personal site"/>
              <p className='text-neutral-700'>Next.js, Tailwind, Node.js, TypeScript</p>
            </div>
            <div className='bg-indigo-300  xl:w-[500px] lg:w-[280px] md:w-[200px] xl:h-[500px] lg:h-[280px] md:h-[200px] p-5' data-aos="fade-right" data-aos-duration="1000">
              <h1 className='text-2xl text-neutral-700 text-center my-3'>Package Tracker</h1>
              <Link href="https://packagetracker.tech/"><img src="/package-tracker.PNG" alt="package tracker"/></Link>
              <p className='text-neutral-700'>Next.js, Firebase, Node.js, TypeScript</p>
            </div>
            <div className='bg-indigo-300  xl:w-[500px] lg:w-[280px] md:w-[200px] xl:h-[500px] lg:h-[280px] md:h-[200px] p-5' data-aos="fade-right" data-aos-duration="500">
              <h1 className='text-2xl text-neutral-700 text-center my-3'>Replayed</h1>
              <Link href="https://replayedgg.vercel.app/"><img src="/replayed.PNG" alt="replayed"/></Link>
              <p className='text-neutral-700'>Svelte, Tailwind, TypeScript, Chart.js</p>
            </div>
            <div className='bg-indigo-300  xl:w-[500px] lg:w-[280px] md:w-[200px] xl:h-[500px] lg:h-[280px] md:h-[200px] p-5' data-aos="fade-right" data-aos-duration="1500">
              <h1 className='text-2xl text-neutral-700 text-center my-3'>Web Dev Evaluator</h1>
              <Link href="https://webdev-evaluator.vercel.app/"><img src="/webdeveval.PNG" alt="web dev evaluator"/></Link>
              <p className='text-neutral-700'>Next.js, TypeScript, Tailwind, Rust, MongoDB</p>
            </div>
            <div className='bg-indigo-300  xl:w-[500px] lg:w-[280px] md:w-[200px] xl:h-[500px] lg:h-[280px] md:h-[200px] p-5' data-aos="fade-right" data-aos-duration="1000">
              <h1 className='text-2xl text-neutral-700 text-center my-3'>Seattle Crime Locator</h1>
              <Link href="https://kyleung1.github.io/SeattleCrimeLocator/"><img src="/crimelocator.PNG" alt="seattle crime locator"/></Link>
              <p className='text-neutral-700'>JavaScript, HTML, CSS, OpenLayers</p>
            </div>
          </div>
        </div>
        
        
      </div>
      
    )
  }