'use client';

import { useState } from 'react';
import 'aos/dist/aos.css';
import Link from 'next/link';


export default function Project_Preview() {
    const [hideGit1, sethideGit1] = useState(true); //true if replacement is hidden
    const [hideEx1, sethideEx1] = useState(true); 
    const [hideGit2, sethideGit2] = useState(true); 
    const [hideEx2, sethideEx2] = useState(true); 
    const [hideGit3, sethideGit3] = useState(true); 
    const [hideEx3, sethideEx3] = useState(true); 
    const [hideGit4, sethideGit4] = useState(true); 
    const [hideEx4, sethideEx4] = useState(true); 
    const [hideGit5, sethideGit5] = useState(true); 
    const [hideEx5, sethideEx5] = useState(true); //one for each project div box

    return (
      <div>
        <div className="flex justify-center mt-20" data-aos="fade-right">
          <h1 className="text-5xl text-indigo-800">Projects</h1>
        </div>
        <div className="flex justify-center">
          <div className='flex flex-wrap gap-10 justify-center my-20 w-3/4'>
            <div className='overflow-hidden border-2 border-black rounded-md bg-violet-300 shadow-2xl xl:w-[500px] lg:w-[400px] lg:h-[600px] p-5' data-aos="fade-right" data-aos-duration="1000">
              <h1 className='text-2xl text-black text-center my-3 font-serif'>Personal Website</h1>
              <img className="transform transition-all duration-300 hover:scale-110 my-3" src="/personal-site.PNG" alt="personal site"/>
              <p className='text-black my-3'>Next.js, Tailwind, Node.js, TypeScript</p>
              <p> A portfolio website to showcase my skills and projects. I am planning on regularly updating this site as I build more projects in the future. </p>
              <div className='flex justify-end'>
                <div className='w-10' onMouseEnter={() => {sethideGit1(false)}} onMouseLeave={() => {sethideGit1(true)}}>
                  {hideGit1 && (
                    <img src="/newGithub.png" alt="newGithub" className='my-3 '/>
                  )}
                  {hideGit1 === false && (
                  <Link href="https://github.com/kyleung1/portfolio-v1.5">
                    <img src="/redgithub.png" alt="newGithub" className='my-3 '/>
                  </Link>
                  )}
                </div>
                <div className='w-10' onMouseEnter={() => {sethideEx1(false)}} onMouseLeave={() => {sethideEx1(true)}}>
                  {hideEx1 && (
                    <img src="/external.png" alt="external link" className='my-3 '/>
                  )}
                  {hideEx1 === false && (
                  <Link href="https://portfolio-v1-5-kappa.vercel.app/">
                    <img src="/external-rose.png" alt="external link" className='my-3 '/>
                  </Link>
                  )}
                </div>
              </div>
              
            </div>
            <div className='overflow-hidden border-2 border-black rounded-md bg-violet-300 shadow-2xl xl:w-[500px] lg:w-[400px] lg:h-[600px] p-5' data-aos="fade-right" data-aos-duration="1000">
              <h1 className='text-2xl text-black text-center my-3 font-serif'>Package Tracker</h1>
              <Link href="https://packagetracker.tech/"><img className="transform transition-all duration-300 hover:scale-110 my-3" src="/package-tracker.PNG" alt="package tracker"/></Link>
              <p className='text-black my-3'>Next.js, Firebase, Node.js, TypeScript</p>
              <p> A web app that tracks locations of packages in real time and their status. This project was made for Transport Hacks and won first place. </p>
              <div className='flex justify-end'>
                <div className='w-10' onMouseEnter={() => {sethideGit2(false)}} onMouseLeave={() => {sethideGit2(true)}}>
                  {hideGit2 && (
                    <img src="/newGithub.png" alt="newGithub" className='my-3 '/>
                  )}
                  {hideGit2 === false && (
                  <Link href="https://github.com/Mistralton/Package-Tracker">
                    <img src="/redgithub.png" alt="newGithub" className='my-3 '/>
                  </Link>
                  )}
                </div>
                <div className='w-10' onMouseEnter={() => {sethideEx2(false)}} onMouseLeave={() => {sethideEx2(true)}}>
                  {hideEx2 && (
                    <img src="/external.png" alt="external link" className='my-3 '/>
                  )}
                  {hideEx2 === false && (
                  <Link href="https://packagetracker.tech/">
                    <img src="/external-rose.png" alt="external link" className='my-3 '/>
                  </Link>
                  )}
                </div>
              </div>
            </div>
            <div className='overflow-hidden border-2 border-black rounded-md bg-violet-300 shadow-2xl xl:w-[500px] lg:w-[400px] lg:h-[600px] p-5' data-aos="fade-right" data-aos-duration="1000">
              <h1 className='text-2xl text-black text-center my-3 font-serif'>Replayed</h1>
              <Link href="https://replayedgg.vercel.app/"><img className="transform transition-all duration-300 hover:scale-110 my-3" src="/replayed.PNG" alt="replayed"/></Link>
              <p className='text-black my-3'>Svelte, Tailwind, TypeScript, Chart.js</p>
              <p> A web game that challenges players to guess the rank of a player based on a short video. The game features videos of games such as League of Legends, Valorant, and Overwatch2. There are two game modes: traditional where the user guesses one video and duel where the user guesses between 2 videos who has the higher rank. </p>
              <div className='flex justify-end'>
                <div className='w-10' onMouseEnter={() => {sethideGit3(false)}} onMouseLeave={() => {sethideGit3(true)}}>
                  {hideGit3 && (
                    <img src="/newGithub.png" alt="newGithub" className='my-3 '/>
                  )}
                  {hideGit3 === false && (
                  <Link href="https://github.com/Mistralton/Replayed">
                    <img src="/redgithub.png" alt="newGithub" className='my-3 '/>
                  </Link>
                  )}
                </div>
                <div className='w-10' onMouseEnter={() => {sethideEx3(false)}} onMouseLeave={() => {sethideEx3(true)}}>
                  {hideEx3 && (
                    <img src="/external.png" alt="external link" className='my-3 '/>
                  )}
                  {hideEx3 === false && (
                  <Link href="https://replayedgg.vercel.app/">
                    <img src="/external-rose.png" alt="external link" className='my-3 '/>
                  </Link>
                  )}
                </div>
              </div>
            </div>
            <div className='overflow-hidden border-2 border-black rounded-md bg-violet-300 shadow-2xl xl:w-[500px] lg:w-[400px] lg:h-[600px] p-5' data-aos="fade-right" data-aos-duration="1000">
              <h1 className='text-2xl text-black text-center my-3 font-serif'>Web Dev Evaluator</h1>
              <Link href="https://webdev-evaluator.vercel.app/"><img className="transform transition-all duration-300 hover:scale-110 my-3" src="/webdeveval.PNG" alt="web dev evaluator"/></Link>
              <p className='text-black my-3'>Next.js, TypeScript, Tailwind, Rust, MongoDB</p>
              {/* <p> A website that provides sentiment and statistics about each web development technology in 2022. Gathered and analyzed a dataset of over 48,000 tweets. </p> */}
              <div className='flex justify-end'>
                <div className='w-10' onMouseEnter={() => {sethideGit4(false)}} onMouseLeave={() => {sethideGit4(true)}}>
                  {hideGit4 && (
                    <img src="/newGithub.png" alt="newGithub" className='my-3 '/>
                  )}
                  {hideGit4 === false && (
                  <Link href="https://github.com/kyleung1/WebdevEvaluator">
                    <img src="/redgithub.png" alt="newGithub" className='my-3 '/>
                  </Link>
                  )}
                </div>
                <div className='w-10' onMouseEnter={() => {sethideEx4(false)}} onMouseLeave={() => {sethideEx4(true)}}>
                  {hideEx4 && (
                    <img src="/external.png" alt="external link" className='my-3 '/>
                  )}
                  {hideEx4 === false && (
                  <Link href="https://webdev-evaluator.vercel.app/">
                    <img src="/external-rose.png" alt="external link" className='my-3 '/>
                  </Link>
                  )}
                </div>
              </div>
            </div>
            <div className='overflow-hidden border-2 border-black rounded-md bg-violet-300 shadow-2xl xl:w-[500px] lg:w-[400px] lg:h-[600px] p-5' data-aos="fade-right" data-aos-duration="1000">
              <h1 className='text-2xl text-black text-center my-3 font-serif'>Seattle Crime Locator</h1>
              <Link href="https://kyleung1.newGithub.io/SeattleCrimeLocator/"><img className="transform transition-all duration-300 hover:scale-110 my-3" src="/crimelocator.PNG" alt="seattle crime locator"/></Link>
              <p className='text-black my-3'>JavaScript, HTML, CSS, OpenLayers</p>
              {/* <p> A simple web application to locate the nearest crime from either the user's ip address or a given address. The web app sources it's data from the spd public dataset on the Seattle Open Data portal that is updated daily. This was my first ever web application built and I am proud of my progress since. </p> */}
              <div className='flex justify-end'>
                <div className='w-10' onMouseEnter={() => {sethideGit5(false)}} onMouseLeave={() => {sethideGit5(true)}}>
                  {hideGit5 && (
                    <img src="/newGithub.png" alt="newGithub" className='my-3 '/>
                  )}
                  {hideGit5 === false && (
                  <Link href="https://github.com/kyleung1/SeattleCrimeLocator">
                    <img src="/redgithub.png" alt="newGithub" className='my-3 '/>
                  </Link>
                  )}
                </div>
                <div className='w-10' onMouseEnter={() => {sethideEx5(false)}} onMouseLeave={() => {sethideEx5(true)}}>
                  {hideEx5 && (
                    <img src="/external.png" alt="external link" className='my-3 '/>
                  )}
                  {hideEx5 === false && (
                  <Link href="https://kyleung1.github.io/SeattleCrimeLocator/">
                    <img src="/external-rose.png" alt="external link" className='my-3 '/>
                  </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex flex-col items-center my-10'>
            <Link href="ComingSoon" className='hover:underline hover:text-rose-500'>Click here to view more projects.</Link>

        </div>

      </div>
      
    )
  }