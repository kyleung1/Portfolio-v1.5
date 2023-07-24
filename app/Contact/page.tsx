'use client'

import Link from "next/link"
import emailjs from '@emailjs/browser'
import { useRef } from "react";

export default function ContactPage() {
    const Email = useRef<HTMLInputElement>(null);
    const Message = useRef<HTMLTextAreaElement>(null);

    const sendEmail:React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault();
      
      if (Email.current && Message.current) {
        emailjs.send("service_fbx5mdw","template_unw48ng",{
        email_id: Email.current.value,
        message: Message.current.value,
        }, process.env.NEXT_PUBLIC_EMAILJS_PUB_KEY);

        Email.current.value = '';
        Message.current.value = '';
      }
    }


    return (
      <>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl text-indigo-800">Contact</h1>
          
          <input ref={Email} className="w-2/5 my-10 border-2 border-indigo-800" placeholder="Email:" type="email" required/>
          <textarea ref={Message} className="w-2/5 h-52 my-10 border-2 border-indigo-800" required/>
          <button onClick={sendEmail}>Send</button>
          
        </div>
      </>
    )
  }
  