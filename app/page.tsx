import Landing from "./Landing"
import Project_Preview from "./Project_Preview"
import Skills from "./Skills"
import Spacing from "./Spacing"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Landing/>
      <Spacing/>
      <Skills/>
      <Spacing/>
      <Project_Preview/>
      <div className="flex justify-center my-20">
        <Link href="/About"><button className="w-24 border-2 border-violet-800 hover:bg-indigo-800 hover:text-white transition duration-300 rounded-md p-2">More About Me</button></Link>
      </div>
      <div className="flex justify-center my-20">
        <Link href="/Contact"><button className="w-24 border-2 border-violet-800 hover:bg-indigo-800 hover:text-white transition duration-300 rounded-md p-2">Contact Me</button></Link>
      </div>
      
    </div>
  )
}
