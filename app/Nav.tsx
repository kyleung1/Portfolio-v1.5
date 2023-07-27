import Link from "next/link";

export default function Nav() {
    return (
      <div className="flex justify-end p-2">
        <div className="float-right">
          <Link href='/' className="sm:mx-6 mx-2 hover:underline hover:text-rose-500">Home</Link>
          <Link href='/Projects' className="sm:mx-6 mx-2 hover:underline hover:text-rose-500">Projects</Link>
          <Link href='/Skills' className="sm:mx-6 mx-2 hover:underline hover:text-rose-500">Skills</Link>
          <Link href='/About' className="sm:mx-6 mx-2 hover:underline hover:text-rose-500">About</Link>
          <Link href='/Contact' className="sm:mx-6 mx-2 hover:underline hover:text-rose-500">Contact</Link>
        </div>
      </div>
    )
  }
  