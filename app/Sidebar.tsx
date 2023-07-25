'use client';

import AOS from 'aos';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  useEffect(() => {
    AOS.init();
  }, [])

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if ((window.pageYOffset as number) > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="fixed top-1/2 flex flex-col gap-2 p-2 border-t-4 border-r-4 border-b-4 border-indigo-800 z-10 rounded-sm" data-aos="fade-right">
        <div className="group overflow-hidden">
          <Link href="https://github.com/kyleung1">
            <Image src="/github.png" alt="github" className="w-14 transform transition-all duration-300 group-hover:scale-110" />
          </Link>
        </div>
        <div className="group overflow-hidden">
          <Link href="https://www.linkedin.com/in/kyle-leung412/">
            <Image src="/linkedin.png" alt="linkedin" className="w-14 transform transition-all duration-300 group-hover:scale-100 scale-90" />
          </Link>
        </div>
        <div className="group overflow-hidden">
          <Link href="https://www.instagram.com/kylewl000/">
            <Image src="/insta.png" alt="instagram" className="w-14 transform transition-all duration-300 group-hover:scale-110" />
          </Link>
        </div>
        <div className="group overflow-hidden">
          <Link href = "mailto: leungkyle2@gmail.com" className="">
            <Image src="/mail.webp" alt="email" className="w-14 transform transition-all duration-300 group-hover:scale-125 scale-110"/>
          </Link>
        </div>
      </div>

      {isVisible && (
        <button
        className="fixed top-1/2 right-0 flex flex-col gap-2 p-2 border-t-4 border-l-4 border-b-4 border-indigo-800 hover:bg-indigo-800 hover:text-white transition duration-300 z-10 rounded-sm" data-aos="fade-left"
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      )}

    </div>
    
  )
}
