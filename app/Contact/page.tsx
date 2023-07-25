'use client'

import Link from "next/link"
import emailjs from '@emailjs/browser'
import { useRef, useState } from "react";

export default function ContactPage() {
    const Email = useRef<HTMLInputElement>(null);
    const Message = useRef<HTMLTextAreaElement>(null);

    const [isVisible, setIsVisible] = useState(false);

    const sendEmail:React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault();

      if (Email.current && Message.current) {
        if (isEmailValid(Email.current.value)) {
          emailjs.send("service_fbx5mdw","template_unw48ng",{
          email_id: Email.current.value,
          message: Message.current.value,
          }, process.env.NEXT_PUBLIC_EMAILJS_PUB_KEY);

          Email.current.value = '';
          Message.current.value = '';
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        
      }
    }

    function isEmailValid(email: string) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }


    return (
      <>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl text-indigo-800 my-20">Contact</h1>
          
          <input ref={Email} className="w-2/5 border-2 border-indigo-800" placeholder="Email:" type="email" required/>
          {isVisible && (<p>Email is not valid</p>)}
          <textarea ref={Message} className="w-2/5 h-52 my-10 border-2 border-indigo-800" required/>
          <button onClick={sendEmail} className="border-2 hover:border-indigo-300 p-2">Send</button>
          
          <p className="my-10">Alternatively my email is leungkyle2@gmail.com</p>
        </div>
      </>
    )
  }
  