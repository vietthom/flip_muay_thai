import Image from 'next/image'
import HeroImage from '/public/hero.jpg'

export default function Hero() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>

      <Image
        src={HeroImage}
        alt="Picture of the author"
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
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}>Hello World</div>
      </div>
    </div>
  )
}
