export default function Skills() {
  return (
    <>
      <div className="flex flex-col justify-center items-center ms mt-20">
        <h1 className="text-5xl text-indigo-800" data-aos="fade-up">
          Skills
        </h1>
        <div className="flex flex-wrap justify-center xl:gap-10 lg:gap-2 gap-2 my-20 w-5/6">
          <div
            className="h-[500px] w-64 border-2 border-indigo-800 rounded-md shadow-2xl"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h2 className="text-center p-3 text-2xl font-serif">Languages</h2>
            <div className="flex justify-center">
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex flex-col justify-center items-center my-0">
                  <img
                    className="w-10 h-10 mx-2"
                    src="/techs/js.png"
                    alt="javascript"
                  />
                  <p className="font-sans">JavaScript</p>
                </li>
                <li className="flex flex-col justify-center items-center my-0">
                  <img
                    className="w-10 h-10 mx-2"
                    src="/techs/ts.png"
                    alt="typescript"
                  />
                  <p className="font-sans">TypeScript</p>
                </li>
                <li className="flex flex-col justify-center items-center my-0">
                  <img
                    className="w-12 h-10 mx-2"
                    src="/techs/python.jpg"
                    alt="python"
                  />
                  <p className="font-sans">Python</p>
                </li>
                <li className="flex flex-col justify-center items-center my-0">
                  <img
                    className="w-10 h-10 mx-2"
                    src="/techs/java.png"
                    alt="java"
                  />
                  <p className="font-sans">Java</p>
                </li>
                <li className="flex flex-col justify-center items-center my-0">
                  <img className="w-10 h-10 mx-2" src="/techs/r.png" alt="r" />
                  <p className="font-sans">R</p>
                </li>
                <li className="flex flex-col justify-center items-center my-0">
                  <img
                    className="w-10 h-10 mx-2"
                    src="/techs/html.png"
                    alt="html"
                  />
                  <p className="font-sans">HTML</p>
                </li>
                <li className="flex flex-col justify-center items-center my-0">
                  <img
                    className="w-10 h-10 mx-2"
                    src="/techs/css.png"
                    alt="css"
                  />
                  <p className="font-sans">CSS</p>
                </li>
                <li className="flex flex-col justify-center items-center my-0">
                  <img
                    className="w-16 h-10 mx-2"
                    src="/techs/sql.png"
                    alt="sql"
                  />
                  <p className="font-sans">SQL</p>
                </li>
                <li className="flex flex-col justify-center items-center my-0">
                  <img
                    className="w-10 h-10 mx-2"
                    src="/techs/bash.png"
                    alt="bash"
                  />
                  <p className="font-sans">Bash</p>
                </li>
                <li className="flex flex-col justify-center items-center my-0">
                  <img
                    className="w-10 h-10 mx-2"
                    src="/techs/rust.png"
                    alt="rust"
                  />
                  <p className="font-sans">Rust</p>
                </li>
                <li className="flex flex-col justify-center items-center my-0">
                  <img
                    className="w-10 h-10 mx-2"
                    src="/techs/markdown.png"
                    alt="markdown"
                  />
                  <p className="font-sans">Markdown</p>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="h-[500px] w-64 border-2 border-indigo-800 rounded-md shadow-2xl"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="text-center p-3 font-serif xl:text-xl lg:text-lg md:text-md sm:text-base">
              Libraries/Frameworks
            </h2>
            <div className="flex justify-center">
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex flex-col justify-center items-center my-4">
                  <img
                    className="w-10 mx-2"
                    src="/techs/react.png"
                    alt="reactjs"
                  />
                  <p className="font-sans">React</p>
                </li>
                <li className="flex flex-col justify-center items-center my-4">
                  <img
                    className="w-10 mx-2"
                    src="/techs/next.png"
                    alt="nextjs"
                  />
                  <p className="font-sans">Next.js</p>
                </li>
                <li className="flex flex-col justify-center items-center my-4">
                  <img
                    className="w-10 mx-2"
                    src="/techs/node.png"
                    alt="nodejs"
                  />
                  <p className="font-sans">NodeJS</p>
                </li>
                <li className="flex flex-col justify-center items-center my-4">
                  <img
                    className="w-10 mx-2"
                    src="/techs/tailwind.png"
                    alt="tailwindcss"
                  />
                  <p className="font-sans">Tailwind</p>
                </li>
                <li className="flex flex-col justify-center items-center my-4">
                  <img
                    className="w-10 mx-2"
                    src="/techs/svelte.png"
                    alt="svelte"
                  />
                  <p className="font-sans">Svelte</p>
                </li>
                <li className="flex flex-col justify-center items-center my-4">
                  <img
                    className="w-10 mx-2"
                    src="/techs/express.png"
                    alt="expressjs"
                  />
                  <p className="font-sans">Express</p>
                </li>
                <li className="flex flex-col justify-center items-center my-4">
                  <img
                    className="w-10 mx-2"
                    src="/techs/django.png"
                    alt="django"
                  />
                  <p className="font-sans">Django</p>
                </li>
                <li className="flex flex-col justify-center items-center my-4">
                  <img
                    className="w-10 mx-2"
                    src="/techs/tauri.png"
                    alt="tauri"
                  />
                  <p className="font-sans">Tauri</p>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="md:h-[500px] w-64 border-2 border-indigo-800 rounded-md shadow-2xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-center p-3 text-2xl font-serif">Tools</h2>
            <div className="flex justify-center">
              <ul>
                <li className="flex flex-col justify-center items-center my-4">
                  <img className="w-10 mx-2" src="/techs/git.png" alt="git" />
                  <p className="font-sans">Git</p>
                </li>
                <li className="flex flex-col justify-center items-center my-4">
                  <img
                    className="w-10 mx-2"
                    src="/techs/supabase.png"
                    alt="supabase"
                  />
                  <p className="font-sans">Supabase</p>
                </li>
                <li className="flex flex-col justify-center items-center my-4">
                  <img
                    className="w-10 mx-2"
                    src="/techs/azure.png"
                    alt="azure"
                  />
                  <p className="font-sans">Azure</p>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="md:h-[500px] w-64 border-2 border-indigo-800 rounded-md shadow-2xl"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h2 className="text-center p-3 text-2xl font-serif">Database</h2>
            <div className="flex justify-center">
              <ul>
                <li className="flex flex-col justify-center items-center my-4">
                  <img
                    className="w-10 mx-2"
                    src="/techs/sqlite.png"
                    alt="sqlite"
                  />
                  <p className="font-sans">SQLite</p>
                </li>
                <li className="flex flex-col justify-center items-center my-4">
                  <img
                    className="w-10 mx-2"
                    src="/techs/mongo.png"
                    alt="mongodb"
                  />
                  <p className="font-sans">MongoDB</p>
                </li>
                <li className="flex flex-col justify-center items-center my-4">
                  <img
                    className="w-10 mx-2"
                    src="/techs/postgres.png"
                    alt="postgressql"
                  />
                  <p className="font-sans">PostSQL</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
