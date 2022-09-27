import Link from "next/link"

const Galerias = () => {
  return (
    <section className="galeriasContainer" id="galerias">
      <h2>GALERIAS</h2>
      <p>Entrá a las galerías para ver los diferentes trabajos y la &quot;Feria Picante&quot;</p>
      <button className="galBtnA"><Link href={'/galeria/papel'} >TRABAJOS EN PAPEL</Link></button>
      <button className="galBtnB"><Link href={'/'} >TRABAJOS EN TELA</Link></button>
      <button className="galBtnC"><Link href={'/'} >FERIA PICANTE</Link></button>

    </section>
  )
}

export default Galerias