import Link from "next/link"
import { useEffect, useState } from "react";

const Ad = ({closeAd}) => {
  const [scale, setScale] = useState(0.01)

  useEffect(() => {
    setTimeout(() => {
      setScale(1)
    }, 10);
  }, [])

  return (
    <section id="adContainer" style={{transform: `scale(${scale})`}}>
      <div className="adCard">
        <button className="closeAd" onClick={closeAd}>X</button>
        <h2>EXPERIENCIA PICANTE</h2>
        <p>Nuevo Curso de stickers</p>
        <Link href="/cursos">VER INFO </Link>
      </div>
    </section>
  )
}

export default Ad