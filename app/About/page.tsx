import Image from "next/image"

export default function page() {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-5xl my-20 text-indigo-800">About Me</h1>
        <Image src="/shinji.png" alt="shinji"/>
      </div>
    )
  }
  