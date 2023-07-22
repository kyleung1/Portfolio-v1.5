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
      <Project_Preview/>
      <Spacing/>
      <Skills/>
      <div className="flex justify-center my-20">
        <Link href="/ComingSoon"><button className="w-24 border-2">More About Me</button></Link>
      </div>
      <div className="flex justify-center my-20">
        <Link href="/Contact"><button className="w-24 border-2">Contact Me</button></Link>
      </div>
      
    </div>
  )
}
