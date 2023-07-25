'use client';

import { useState } from 'react';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Image from 'next/image';

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
            <div className='overflow-hidden border-2 border-black rounded-md bg-violet-300 shadow-2xl xl:w-[500px] lg:w-[400px] xl:h-[800px] lg:h-[850px] p-5' data-aos="fade-right" data-aos-duration="1000">
              <h1 className='text-2xl text-black text-center my-3 font-serif'>Personal Website</h1>
              <Image className="transform transition-all duration-300 hover:scale-110 my-3" src="/personal-site.PNG" alt="personal site"/>
              <p className='text-black my-3'>Next.js, Tailwind, Node.js, TypeScript</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur augue quis quam semper, non cursus dui venenatis. Integer sit amet nulla eget metus hendrerit vehicula. In hac habitasse platea dictumst. Nulla facilisi. Sed auctor massa vitae augue aliquam, ut elementum lorem congue. Proin et diam id elit tincidunt cursus. Sed ullamcorper, metus ac euismod congue, lectus metus faucibus dolor, nec eleifend odio nisi ac risus. Cras vel ullamcorper nunc. Aenean venenat
                is quam eu nisl tempus, in auctor neque gravida. Praesent ut faucibus tellus. Ut in aliquet odio. Suspendisse potenti. Nunc finibus massa eu metus semper, eu tincidunt justo gravida. Pellentesque varius lectus nec ante commodo, nec pharetra lorem iaculis. Nam euismod orci eu est mollis, quis fermentum metus facilisis. Mauris eu venenatis nunc.</p>
              <div className='w-10' onMouseEnter={() => {sethideGit1(false)}} onMouseLeave={() => {sethideGit1(true)}}>
                {hideGit1 && (
                  <Image src="/newGithub.png" alt="newGithub" className=' '/>
                )}
                {hideGit1 === false && (
                <Link href="https://github.com/kyleung1/portfolio-v1.5">
                  <Image src="/redgithub.png" alt="newGithub" className=' '/>
                </Link>
                )}
              </div>
              <div className='w-10' onMouseEnter={() => {sethideEx1(false)}} onMouseLeave={() => {sethideEx1(true)}}>
                {hideEx1 && (
                  <Image src="/external.png" alt="external link" className=' '/>
                )}
                {hideEx1 === false && (
                <Link href="https://portfolio-v1-5-kappa.vercel.app/">
                  <Image src="/external-rose.png" alt="external link" className=' '/>
                </Link>
                )}
              </div>
            </div>
            <div className='overflow-hidden border-2 border-black rounded-md bg-violet-300 shadow-2xl xl:w-[500px] lg:w-[400px] xl:h-[800px] lg:h-[850px] p-5' data-aos="fade-right" data-aos-duration="1000">
              <h1 className='text-2xl text-black text-center my-3 font-serif'>Package Tracker</h1>
              <Link href="https://packagetracker.tech/"><Image className="transform transition-all duration-300 hover:scale-110 my-3" src="/package-tracker.PNG" alt="package tracker"/></Link>
              <p className='text-black my-3'>Next.js, Firebase, Node.js, TypeScript</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur augue quis quam semper, non cursus dui venenatis. Integer sit amet nulla eget metus hendrerit vehicula. In hac habitasse platea dictumst. Nulla facilisi. Sed auctor massa vitae augue aliquam, ut elementum lorem congue. Proin et diam id elit tincidunt cursus. Sed ullamcorper, metus ac euismod congue, lectus metus faucibus dolor, nec eleifend odio nisi ac risus. Cras vel ullamcorper nunc. Aenean venenat
                is quam eu nisl tempus, in auctor neque gravida. Praesent ut faucibus tellus. Ut in aliquet odio. Suspendisse potenti. Nunc finibus massa eu metus semper, eu tincidunt justo gravida. Pellentesque varius lectus nec ante commodo, nec pharetra lorem iaculis. Nam euismod orci eu est mollis, quis fermentum metus facilisis. Mauris eu venenatis nunc.</p>
              <div className='w-10' onMouseEnter={() => {sethideGit2(false)}} onMouseLeave={() => {sethideGit2(true)}}>
                {hideGit2 && (
                  <Image src="/newGithub.png" alt="newGithub" className=' '/>
                )}
                {hideGit2 === false && (
                <Link href="https://github.com/Mistralton/Package-Tracker">
                  <Image src="/redgithub.png" alt="newGithub" className=' '/>
                </Link>
                )}
              </div>
              <div className='w-10' onMouseEnter={() => {sethideEx2(false)}} onMouseLeave={() => {sethideEx2(true)}}>
                {hideEx2 && (
                  <Image src="/external.png" alt="external link" className=' '/>
                )}
                {hideEx2 === false && (
                <Link href="https://packagetracker.tech/">
                  <Image src="/external-rose.png" alt="external link" className=' '/>
                </Link>
                )}
              </div>
            </div>
            <div className='overflow-hidden border-2 border-black rounded-md bg-violet-300 shadow-2xl xl:w-[500px] lg:w-[400px] xl:h-[800px] lg:h-[850px] p-5' data-aos="fade-right" data-aos-duration="1000">
              <h1 className='text-2xl text-black text-center my-3 font-serif'>Replayed</h1>
              <Link href="https://replayedgg.vercel.app/"><Image className="transform transition-all duration-300 hover:scale-110 my-3" src="/replayed.PNG" alt="replayed"/></Link>
              <p className='text-black my-3'>Svelte, Tailwind, TypeScript, Chart.js</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur augue quis quam semper, non cursus dui venenatis. Integer sit amet nulla eget metus hendrerit vehicula. In hac habitasse platea dictumst. Nulla facilisi. Sed auctor massa vitae augue aliquam, ut elementum lorem congue. Proin et diam id elit tincidunt cursus. Sed ullamcorper, metus ac euismod congue, lectus metus faucibus dolor, nec eleifend odio nisi ac risus. Cras vel ullamcorper nunc. Aenean venenat
                is quam eu nisl tempus, in auctor neque gravida. Praesent ut faucibus tellus. Ut in aliquet odio. Suspendisse potenti. Nunc finibus massa eu metus semper, eu tincidunt justo gravida. Pellentesque varius lectus nec ante commodo, nec pharetra lorem iaculis. Nam euismod orci eu est mollis, quis fermentum metus facilisis. Mauris eu venenatis nunc.</p>
              <div className='w-10' onMouseEnter={() => {sethideGit3(false)}} onMouseLeave={() => {sethideGit3(true)}}>
                {hideGit3 && (
                  <Image src="/newGithub.png" alt="newGithub" className=' '/>
                )}
                {hideGit3 === false && (
                <Link href="https://github.com/Mistralton/Replayed">
                  <Image src="/redgithub.png" alt="newGithub" className=' '/>
                </Link>
                )}
              </div>
              <div className='w-10' onMouseEnter={() => {sethideEx3(false)}} onMouseLeave={() => {sethideEx3(true)}}>
                {hideEx3 && (
                  <Image src="/external.png" alt="external link" className=' '/>
                )}
                {hideEx3 === false && (
                <Link href="https://replayedgg.vercel.app/">
                  <Image src="/external-rose.png" alt="external link" className=' '/>
                </Link>
                )}
              </div>
            </div>
            <div className='overflow-hidden border-2 border-black rounded-md bg-violet-300 shadow-2xl xl:w-[500px] lg:w-[400px] xl:h-[800px] lg:h-[850px] p-5' data-aos="fade-right" data-aos-duration="1000">
              <h1 className='text-2xl text-black text-center my-3 font-serif'>Web Dev Evaluator</h1>
              <Link href="https://webdev-evaluator.vercel.app/"><Image className="transform transition-all duration-300 hover:scale-110 my-3" src="/webdeveval.PNG" alt="web dev evaluator"/></Link>
              <p className='text-black my-3'>Next.js, TypeScript, Tailwind, Rust, MongoDB</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur augue quis quam semper, non cursus dui venenatis. Integer sit amet nulla eget metus hendrerit vehicula. In hac habitasse platea dictumst. Nulla facilisi. Sed auctor massa vitae augue aliquam, ut elementum lorem congue. Proin et diam id elit tincidunt cursus. Sed ullamcorper, metus ac euismod congue, lectus metus faucibus dolor, nec eleifend odio nisi ac risus. Cras vel ullamcorper nunc. Aenean venenat
                is quam eu nisl tempus, in auctor neque gravida. Praesent ut faucibus tellus. Ut in aliquet odio. Suspendisse potenti. Nunc finibus massa eu metus semper, eu tincidunt justo gravida. Pellentesque varius lectus nec ante commodo, nec pharetra lorem iaculis. Nam euismod orci eu est mollis, quis fermentum metus facilisis. Mauris eu venenatis nunc.</p>
              <div className='w-10' onMouseEnter={() => {sethideGit4(false)}} onMouseLeave={() => {sethideGit4(true)}}>
                {hideGit4 && (
                  <Image src="/newGithub.png" alt="newGithub" className=' '/>
                )}
                {hideGit4 === false && (
                <Link href="https://github.com/kyleung1/WebdevEvaluator">
                  <Image src="/redgithub.png" alt="newGithub" className=' '/>
                </Link>
                )}
              </div>
              <div className='w-10' onMouseEnter={() => {sethideEx4(false)}} onMouseLeave={() => {sethideEx4(true)}}>
                {hideEx4 && (
                  <Image src="/external.png" alt="external link" className=' '/>
                )}
                {hideEx4 === false && (
                <Link href="https://webdev-evaluator.vercel.app/">
                  <Image src="/external-rose.png" alt="external link" className=' '/>
                </Link>
                )}
              </div>
            </div>
            <div className='overflow-hidden border-2 border-black rounded-md bg-violet-300 shadow-2xl xl:w-[500px] lg:w-[400px] xl:h-[800px] lg:h-[850px] p-5' data-aos="fade-right" data-aos-duration="1000">
              <h1 className='text-2xl text-black text-center my-3 font-serif'>Seattle Crime Locator</h1>
              <Link href="https://kyleung1.newGithub.io/SeattleCrimeLocator/"><Image className="transform transition-all duration-300 hover:scale-110 my-3" src="/crimelocator.PNG" alt="seattle crime locator"/></Link>
              <p className='text-black my-3'>JavaScript, HTML, CSS, OpenLayers</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur augue quis quam semper, non cursus dui venenatis. Integer sit amet nulla eget metus hendrerit vehicula. In hac habitasse platea dictumst. Nulla facilisi. Sed auctor massa vitae augue aliquam, ut elementum lorem congue. Proin et diam id elit tincidunt cursus. Sed ullamcorper, metus ac euismod congue, lectus metus faucibus dolor, nec eleifend odio nisi ac risus. Cras vel ullamcorper nunc. Aenean venenat
                is quam eu nisl tempus, in auctor neque gravida. Praesent ut faucibus tellus. Ut in aliquet odio. Suspendisse potenti. Nunc finibus massa eu metus semper, eu tincidunt justo gravida. Pellentesque varius lectus nec ante commodo, nec pharetra lorem iaculis. Nam euismod orci eu est mollis, quis fermentum metus facilisis. Mauris eu venenatis nunc.</p>
              <div className='w-10' onMouseEnter={() => {sethideGit5(false)}} onMouseLeave={() => {sethideGit5(true)}}>
                {hideGit5 && (
                  <Image src="/newGithub.png" alt="newGithub" className=' '/>
                )}
                {hideGit5 === false && (
                <Link href="https://github.com/kyleung1/SeattleCrimeLocator">
                  <Image src="/redgithub.png" alt="newGithub" className=' '/>
                </Link>
                )}
              </div>
              <div className='w-10' onMouseEnter={() => {sethideEx5(false)}} onMouseLeave={() => {sethideEx5(true)}}>
                {hideEx5 && (
                  <Image src="/external.png" alt="external link" className=' '/>
                )}
                {hideEx5 === false && (
                <Link href="https://kyleung1.github.io/SeattleCrimeLocator/">
                  <Image src="/external-rose.png" alt="external link" className=' '/>
                </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
      
    )
  }