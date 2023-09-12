import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl my-20 text-indigo-800" data-aos="fade-up">
        About Me
      </h1>
      <img src="/shinji.png" alt="shinji" />
      <div className="flex flex-col items-center w-1/2 my-20">
        <p className="text-xl">
          Around June of 2022 was when I started seriously coding and producing
          personal projects. Since then, I have been mostly self teaching myself
          new web development technologies and have built many full stack web
          applications.
        </p>
        <p className="text-xl my-5">
          In my free time I like to play video games, workout in the gym, listen
          to music, and watch movies.
        </p>
      </div>
      <div className="flex flex-col items-center w-1/2 mb-20">
        <h2 className="text-3xl text-indigo-800">Video Games</h2>
        <p className="text-xl my-5">
          I tend to play competitive video games and get really into them for an
          extended period. Single player games seem interesting but I would like
          to own a controller before I actually start getting into them. These
          are some that I have played recently.
        </p>
        <div className="w-3/4">
          <img src="valorant.webp" alt="valorant" />
          <img src="fortnite.jpg" alt="fortnite" />
          <img src="tft.jpg" alt="tft" />
        </div>
      </div>
      <div className="flex flex-col items-center w-1/2">
        <h2 className="text-3xl text-indigo-800">Music</h2>
        <p className="text-xl my-5">
          I am really into rock, indie, and alternative music. Here is one of my
          playlists. Some artists I am currently into are Galileo Galilei,
          Public Library Commute, and Pearl Jam.
        </p>
        <iframe
          className="max-w-4xl"
          src="https://open.spotify.com/embed/playlist/3I0C838AVgfdZkcQ5ogPZO?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <Link href="/Chatbot" className="hover:text-rose-500 my-10 text-xl w-1/2">
        Learn more about me through my Chatbot here
      </Link>
    </div>
  );
}
