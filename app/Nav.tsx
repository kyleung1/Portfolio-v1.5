import Link from "next/link";

export default function Nav() {
    return (
      <div className="flex justify-between p-2">
        <div className="float-left"><p className="mx-6">Kyle Leung</p></div>
        <div className="float-right">
          <Link href='/' className="mx-6 hover:underline hover:text-rose-500">Home</Link>
          <Link href='/Projects' className="mx-6 hover:underline hover:text-rose-500">Projects</Link>
          <Link href='/Skills' className="mx-6 hover:underline hover:text-rose-500">Skills</Link>
          <Link href='/About' className="mx-6 hover:underline hover:text-rose-500">About</Link>
          <Link href='/Contact' className="mx-6 hover:underline hover:text-rose-500">Contact</Link>
        </div>
      </div>
    )
  }
  