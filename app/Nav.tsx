import Link from "next/link";

export default function Nav() {
    return (
      <div className="flex justify-center border-2 p-2 bg-opacity-0">
        
        <Link href='/' className="mx-6">Home</Link>
        
        <Link href='/About' className="mx-6">About</Link>
        
        <Link href='/Skills' className="mx-6">Skills</Link>
        
        <Link href='/Work' className="mx-6">Work</Link>
        
        <Link href='/Contact' className="mx-6">Contact</Link>
      </div>
    )
  }
  