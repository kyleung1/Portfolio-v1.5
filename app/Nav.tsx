import Link from "next/link";

export default function Nav() {
    return (
      <div className="flex justify-between p-2">
        <div className="float-left"><h1 className="">Kyle Leung</h1></div>
        <div className="float-right">
          <Link href='/' className="mx-6">Home</Link>
          <Link href='/Projects' className="mx-6">Projects</Link>
          <Link href='/Skills' className="mx-6">Skills</Link>
          <Link href='/About' className="mx-6">About</Link>
          <Link href='/Contact' className="mx-6">Contact</Link>
        </div>
      </div>
    )
  }
  