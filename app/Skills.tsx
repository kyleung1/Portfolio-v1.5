export default function Skills() {
  return (
    <>
      <div className="flex flex-col justify-center items-center ms mt-20" data-aos="fade-right">
        <h1 className="text-5xl text-indigo-800">Skills</h1>
        <div className="flex flex-wrap justify-center gap-10 my-20 lg:w-5/6 lg:gap-2 md:w-5/6 md:gap-1 sm:w-2/3 sm:gap-1">
          
          <div className="h-[500px] w-64 border-2 border-indigo-800" data-aos="fade-right" data-aos-duration="2000">
            <h2 className="text-center p-3 text-2xl font-serif">Languages</h2>
            <div className="flex justify-center">
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex flex-col justify-center items-center my-0"><img className="w-10 h-10 mx-2" src="/techs/js.png" alt="javascript"/><p className="">JavaScript</p></li>
                <li className="flex flex-col justify-center items-center my-0"><img className="w-10 h-10 mx-2" src="/techs/ts.png" alt="typescript"/><p>TypeScript</p></li>
                <li className="flex flex-col justify-center items-center my-0"><img className="w-12 h-10 mx-2" src="/techs/python.jpg" alt="python"/><p>Python</p></li>
                <li className="flex flex-col justify-center items-center my-0"><img className="w-10 h-10 mx-2" src="/techs/java.png" alt="java"/><p>Java</p></li>
                <li className="flex flex-col justify-center items-center my-0"><img className="w-10 h-10 mx-2" src="/techs/r.png" alt="r"/><p>R</p></li>
                <li className="flex flex-col justify-center items-center my-0"><img className="w-10 h-10 mx-2" src="/techs/html.png" alt="html"/><p>HTML</p></li>
                <li className="flex flex-col justify-center items-center my-0"><img className="w-10 h-10 mx-2" src="/techs/css.png" alt="css"/><p>CSS</p></li>
                <li className="flex flex-col justify-center items-center my-0"><img className="w-16 h-10 mx-2" src="/techs/sql.png" alt="sql"/><p>SQL</p></li>
                <li className="flex flex-col justify-center items-center my-0"><img className="w-10 h-10 mx-2" src="/techs/bash.png" alt="bash"/><p>Bash</p></li>
                <li className="flex flex-col justify-center items-center my-0"><img className="w-10 h-10 mx-2" src="/techs/rust.png" alt="rust"/><p>Rust</p></li>
                <li className="flex flex-col justify-center items-center my-0"><img className="w-10 h-10 mx-2" src="/techs/markdown.png" alt="markdown"/><p>Markdown</p></li>
              </ul>
            </div>
          </div>

          <div className="h-[500px] w-64 border-2 border-indigo-800" data-aos="fade-right" data-aos-duration="1500">
            <h2 className="text-center p-3 font-serif xl:text-2xl lg:text-xl md:text-lg sm:text-base">Libraries/Frameworks</h2>
            <div className="flex justify-center">
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex flex-col justify-center items-center my-4"><img className="w-10 mx-2" src="/techs/react.png" alt="reactjs"/><p>React</p></li>
                <li className="flex flex-col justify-center items-center my-4"><img className="w-10 mx-2" src="/techs/next.png" alt="nextjs"/><p>Next.js</p></li>
                <li className="flex flex-col justify-center items-center my-4"><img className="w-10 mx-2" src="/techs/node.png" alt="nodejs"/><p>NodeJS</p></li>
                <li className="flex flex-col justify-center items-center my-4"><img className="w-10 mx-2" src="/techs/tailwind.png" alt="tailwindcss"/><p>Tailwind</p></li>
                <li className="flex flex-col justify-center items-center my-4"><img className="w-10 mx-2" src="/techs/svelte.png" alt="svelte"/><p>Svelte</p></li>
                <li className="flex flex-col justify-center items-center my-4"><img className="w-10 mx-2" src="/techs/express.png" alt="expressjs"/><p>Express</p></li>
                <li className="flex flex-col justify-center items-center my-4"><img className="w-10 mx-2" src="/techs/django.png" alt="django"/><p>Django</p></li>
                <li className="flex flex-col justify-center items-center my-4"><img className="w-10 mx-2" src="/techs/tauri.png" alt="tauri"/><p>Tauri</p></li>
              </ul>
            </div>
          </div>

          <div className="md:h-[500px] w-64 border-2 border-indigo-800" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-center p-3 text-2xl font-serif">Tools</h2>
            <div className="flex justify-center">
              <ul>
                <li className="flex flex-col justify-center items-center my-4"><img className="w-10 mx-2" src="/techs/git.png" alt="git"/><p>Git</p></li>
                <li className="flex flex-col justify-center items-center my-4"><img className="w-10 mx-2" src="/techs/supabase.png" alt="supabase"/><p>Supabase</p></li>
                <li className="flex flex-col justify-center items-center my-4"><img className="w-10 mx-2" src="/techs/azure.png" alt="azure"/><p>Azure</p></li>
              </ul>
            </div>
          </div>

          <div className="md:h-[500px] w-64 border-2 border-indigo-800" data-aos="fade-right" data-aos-duration="500">
            <h2 className="text-center p-3 text-2xl font-serif">Database</h2>
            <div className="flex justify-center">
              <ul>
                <li className="flex flex-col justify-center items-center my-4"><img className="w-10 mx-2" src="/techs/sqlite.png" alt="sqlite"/><p>SQLite</p></li>
                <li className="flex flex-col justify-center items-center my-4"><img className="w-10 mx-2" src="/techs/mongo.png" alt="mongodb"/><p>MongoDB</p></li>
                <li className="flex flex-col justify-center items-center my-4"><img className="w-10 mx-2" src="/techs/postgres.png" alt="postgressql"/><p>PostSQL</p></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}