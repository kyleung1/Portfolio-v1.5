export default function Skills() {
  return (
    <>
      <div className="flex flex-col justify-center items-center ms mt-20" data-aos="fade-right">
        <h1 className="text-5xl text-indigo-800">Skills</h1>
        <div className="h-96 flex justify-around gap-10 my-20">
          <div className="h-full w-72 border-2 border-indigo-800">
            <h2 className="text-center p-3 text-2xl font-serif">Languages</h2>
            <div>
              <ul>
                <li>
                  JavaScript, TypeScript, Python, Java, R, HTML, CSS, SQL, Bash, Rust
                </li>
              </ul>
            </div>
          </div>
          <div className="h-full w-72 border-2 border-indigo-800">
            <h2 className="text-center p-3 text-2xl font-serif">Libraries/Frameworks</h2>
            <div>
              <ul>
                <li>
                  React, Next.js, NodeJS, Markdown, Tailwind, Svelte, Express, Django, Tauri
                </li>
              </ul>
            </div>
          </div>
          <div className="h-full w-72 border-2 border-indigo-800">
            <h2 className="text-center p-3 text-2xl font-serif">Tools</h2>
            <div>
              <ul>
                <li>
                  Git, , Supabase, QGIS, Azure
                </li>
              </ul>
            </div>
          </div>
          <div className="h-full w-72 border-2 border-indigo-800">
            <h2 className="text-center p-3 text-2xl font-serif">Database</h2>
            <div>
              <ul>
                <li>
                  SQLite, MongoDB, PostSQL
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Languages, Libraries/Frameworks, Tools, Database */}
      </div>
    </>
  )
}