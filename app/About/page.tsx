import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl my-20 text-indigo-800">About Me</h1>
      <div className="flex flex-col items-center w-1/2">
        <p className="text-xl">
          Around June of 2022 was when I started seriously coding and producing
          personal projects. Since then, I have been mostly self teaching myself
          new web development technologies and have built many full stack web
          applications.
        </p>
        <p className="text-xl my-20">
          In my free time I like to play video games, workout in the gym, listen
          to music, and watch movies. Recently, I have mostly been trying to
          hone my
        </p>
      </div>
      {/* <img src="/shinji.png" alt="shinji"/> */}
      <Link href="/Chatbot" className="hover:text-rose-500 my-10">
        Learn more about me through my Chatbot
      </Link>
    </div>
  );
}
