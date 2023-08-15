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
    const [session, setSession] = useState <number> ();
    const [messages, setMessages] = useState<string[]>([])

    const chatWindow: RefObject<HTMLDivElement> = useRef(null);
    const user_input: RefObject<HTMLInputElement> = useRef(null);

    useEffect(() => {
      // scroll to the bottom when messages fill up
      if (chatWindow.current)
      chatWindow.current.scrollTop = chatWindow.current?.scrollHeight;
    }, [messages])

    async function getResponse() {
      let user_msg = user_input.current?.value;
      if (user_msg){
        addMessage(user_msg);
      }

      let requestBody: requestBody = {
        user_msg: user_msg
      };

      if (session !== null) {
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
      if (session !== response.session) {
        setSession(response.session);
      };
      const chatbotReply = response.answer;
      addMessage(chatbotReply);
      if (user_input.current){
        user_input.current.value = "";
      }
    };

    function addMessage(newMsg: string) {
      setMessages(prevMsgs => [...prevMsgs, newMsg]);
    };

    return (
      <>
        <h1 className="text-indigo-800 text-5xl text-center my-10">Chat-KL1</h1>
        <div className="flex flex-col items-center">
            <div className="flex flex-col border-2 border-black rounded-md max-w-[1280px] w-3/4 h-[500px] my-10 relative">
                <div ref={chatWindow} className="flex-grow overflow-scroll">
                  {messages.map((message, index) => (
                    <div key={index} className={`${index % 2 === 0 ? '' : 'text-indigo-500'} py-3 px-32 text-center border-b-2 border-neutral-300`}>{message}</div>
                  ))}
                </div>
                <div className="w-full bg-violet-300 p-2 flex justify-around border-t-2 border-black">
                  <input
                    ref={user_input}
                    placeholder="Type something"
                    className="w-3/4 bg-violet-300"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        getResponse()
                      }}}
                      />
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