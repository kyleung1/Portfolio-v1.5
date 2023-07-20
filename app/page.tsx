import Landing from "./Landing"
import Project_Preview from "./Project_Preview"
import Skills from "./Skills"
import Spacing from "./Spacing"

export default function Home() {
  return (
    <div>
      <Landing/>
      <Spacing/>
      <Project_Preview/>
      <Spacing/>
      <Skills/>
    </div>
  )
}
