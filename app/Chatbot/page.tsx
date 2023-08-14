"use client"

import { useEffect } from "react"
import { useState } from "react";

interface ChatResponse {

}

export default function page() {
    const [hideSend, sethideSend] = useState(true); // toggles button hover effeect
    const [session, setSession] = useState()

    
    useEffect(() => {
      async function getResponse() {
        let rawdata = await fetch(`${process.env.NEXT_PUBLIC_CHATBOT_API}`);
        let data = await rawdata.json()
        handleResponse(data)
      }
    })

    function handleResponse(response: any) {
      console.log(response)
    }

    return (
      <>
        <h1 className="text-indigo-800 text-5xl text-center my-10">Chat-KL1</h1>
        <div className="flex flex-col items-center">
            <div className="flex border-2 border-black rounded-md max-w-[1280px] w-3/4 h-[500px] my-10 relative">
                <div className="flex-grow">hi</div>
                <div className="absolute bottom-0 w-full bg-violet-300 p-2 flex justify-around border-t-2 border-black">
                  <input placeholder="Type something" className="w-3/4 bg-violet-300"/>
                  <div className='w-10' onMouseEnter={() => {sethideSend(false)}} onMouseLeave={() => {sethideSend(true)}}>
                    {hideSend && (
                      <button><img src="/send-black.png" alt="newGithub" className='w-3/4'/></button>
                    )}
                    {hideSend === false && (
                      <button onClick={getResponse}><img src="/send-rose.png" alt="send button" className="w-3/4"/></button>
                    )}
                  </div>
                </div>
            </div>
        </div>
      </>
    )
  }