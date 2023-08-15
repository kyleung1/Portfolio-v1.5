"use client"

import { useEffect } from "react"
import { useState } from "react";
import { useRef } from "react";
import { RefObject } from "react";

interface ChatResponse {
    answer: string,
    session: number
}

interface requestBody {
  user_msg: string | undefined,
  session?: number
}

export default function Page() {
    const [hideSend, sethideSend] = useState(true); // toggles button hover effeect
    const [session, setSession] = useState(-1);

    const user_input: RefObject<HTMLInputElement> = useRef(null);

    async function getResponse() {

      let requestBody: requestBody = {
        user_msg: user_input.current?.value
      };

      if (session !== -1) {
        requestBody.session = session
      };

      let rawdata = await fetch(`${process.env.NEXT_PUBLIC_CHATBOT_API}`, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      let data = await rawdata.json();
      handleResponse(data);
    };

    function handleResponse(response: ChatResponse) {
      console.log(response)
      if (session !== response.session) {
        setSession(response.session);
      };
      const chatbotReply = response.answer;
    };

    function a () {
      console.log(user_input.current?.value)
    }

    return (
      <>
        <h1 className="text-indigo-800 text-5xl text-center my-10">Chat-KL1</h1>
        <div className="flex flex-col items-center">
            <div className="flex border-2 border-black rounded-md max-w-[1280px] w-3/4 h-[500px] my-10 relative">
                <div className="flex-grow">hi</div>
                <div className="absolute bottom-0 w-full bg-violet-300 p-2 flex justify-around border-t-2 border-black">
                  <input ref={user_input} placeholder="Type something" className="w-3/4 bg-violet-300"/>
                  <div className='w-10' onMouseEnter={() => {sethideSend(false)}} onMouseLeave={() => {sethideSend(true)}}>
                    {hideSend && (
                      <button><img src="/send-black.png" alt="newGithub" className='w-3/4'/></button>
                    )}
                    {hideSend === false && (
                      <button onClick={a}><img src="/send-rose.png" alt="send button" className="w-3/4"/></button>
                    )}
                  </div>
                </div>
            </div>
        </div>
      </>
    )
  }