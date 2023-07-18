import Link from "next/link";

export default function Nav() {
    return (
      <div className="flex justify-between p-2">
        <div className="float-left"><h1 className="">Kyle Leung</h1></div>
        <div className="float-right">
          <Link href='/' className="mx-6 hover:underline">Home</Link>
          <Link href='/Projects' className="mx-6 hover:underline">Projects</Link>
          <Link href='/ComingSoon' className="mx-6 hover:underline">Skills</Link>
          <Link href='/ComingSoon' className="mx-6 hover:underline">About</Link>
          <Link href='/ComingSoon' className="mx-6 hover:underline">Contact</Link>
        </div>
      </div>
    )
  }
  