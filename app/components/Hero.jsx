import Image from 'next/image'
import HeroImage from '/public/hero.jpg'

export default function Hero() {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100vh', zIndex: 0 }}>
      <Image
        src={HeroImage}
        alt="Hero Image"
        fill
        style={{
          objectFit: 'cover',
        }}
      />
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        background: "black",
        zIndex: 10,
        color: 'white',
        width: '100%',
        height: '100%',
        opacity: '0.5'
      }}>
      </div>
      <div className='relative z-20'>
        <div className='h-screen flex justify-center'>
          <div className='flex-col content-center'>
            <h1 className='text-6xl text-white font-bebas uppercase'>Train with Purpose, Fight with Passion: flip muay thai</h1>
            <h2 className='flex justify-center text-3xl text-white font-roboto pt-4'>Discover the art of eight limbs in Savannah, GA</h2>
            <div className='flex gap-4 justify-center pt-4'>
            <button className="border border-solid border-[#D4AF37] px-4 py-2 text-2xl text-white font-bebas hover:bg-[#D4AF37]">Learn More</button>
            <button className="border border-solid border-[#D4AF37] px-4 py-2 text-2xl text-white font-bebas hover:bg-[#D4AF37]">Sign-up</button>
            </div>
          </div>          
        </div>
      </div>
    </div>
  )
}
