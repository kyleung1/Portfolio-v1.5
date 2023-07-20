import Landing from "./Landing"
import Project_Preview from "./Project_Preview"
import Spacing from "./Spacing"

export default function Home() {
  return (
    <div>
      <Landing/>
      <Spacing/>
      <Project_Preview/>
      <Spacing/>
      <div className="flex justify-center mt-20" data-aos="fade-right">
        <h1 className="text-5xl text-indigo-800">Skills</h1>
        </div>
    </div>
  )
}
