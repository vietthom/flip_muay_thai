import Link from 'next/link'
import Image from 'next/image'
import Logo from '/public/logo.png'

export default function Navbar() {
  return (
    <nav className=" mx-auto h-16 px-20 flex items-center justify-between font-bebas uppercase">
      <Image 
        src={Logo}
        alt="Logo"
        width={205}
      />
      <ul className='flex items-center justify-center gap-4 font-bold text-2xl'>
        <li className="text-[#D4AF37]"><Link href="/">Home</Link></li>
        <li><Link href="/schedule">Schedule</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <button className="border border-solid border-[#D4AF37] px-4 text-2xl">Sign-up</button>
    </nav>
  )
}
