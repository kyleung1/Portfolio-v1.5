import Skills from "../Skills";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Skills />
      <div className="flex flex-col justify-center items-center ms mt-20">
        <h1 className="text-5xl text-indigo-800" data-aos="fade-up">
          Resume
        </h1>
        <Link
          href="https://kyleung1.github.io/Resume/"
          target="_blank"
          className="hover:text-rose-500 my-10"
        >
          Click here to view my resume in a new window
        </Link>
        <iframe
          src="/Resume_Aug_2023.pdf"
          className="w-1/2 my-20 lg:h-[900px] h-[500px]"
          data-aos="fade-right"
        ></iframe>
      </div>
    </>
  );
}
