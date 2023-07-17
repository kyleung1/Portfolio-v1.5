'use client';

import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function Sidebar() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="fixed top-1/2 flex flex-col gap-2 p-2 border-t-4 border-r-4 border-b-4 border-indigo-800" data-aos="fade-right">
      <div className="group overflow-hidden">
        <Link href="https://github.com/kyleung1">
          <img src="/github.png" alt="github" className="w-14 transform transition-all duration-300 group-hover:scale-110" />
        </Link>
      </div>
      <div className="group overflow-hidden">
        <Link href="https://www.linkedin.com/in/kyle-leung412/">
          <img src="/linkedin.png" alt="linkedin" className="w-14 transform transition-all duration-300 group-hover:scale-100 scale-90" />
        </Link>
      </div>
      <div className="group overflow-hidden">
        <Link href="https://www.instagram.com/kylewl000/">
          <img src="/insta.png" alt="instagram" className="w-14 transform transition-all duration-300 group-hover:scale-110" />
        </Link>
      </div>
    </div>
  )
}
