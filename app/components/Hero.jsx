import Image from 'next/image'
import HeroImage from '/public/hero.jpg'

export default function Hero() {
  return (
    <main className="h-screen">
      <Image 
      src={HeroImage}
      alt="Hero Image"
      quality={100}
      layout='cover'
      className='h-screen z-0'
      />
    </main>
  )
}
