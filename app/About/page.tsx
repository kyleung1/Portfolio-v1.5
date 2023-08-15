import Link from "next/link";

export default function page() {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-5xl my-20 text-indigo-800">About Me</h1>
        <img src="/shinji.png" alt="shinji"/>
        <Link href="/Chatbot" className="hover:text-rose-500 my-10">Learn more about me through my Chatbot</Link>
      </div>
    )
  }
  