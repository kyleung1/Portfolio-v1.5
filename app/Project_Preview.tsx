'use client';

import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function Project_Preview() {
    AOS.init();

    return (
      <div className="flex justify-center mt-20" data-aos="fade-right">
        <h1 className="text-5xl text-indigo-800">Projects</h1>
      </div>
    )
  }
  