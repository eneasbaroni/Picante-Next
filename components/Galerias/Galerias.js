import Link from "next/link"

const Galerias = () => {
  return (
    <section className="galeriasContainer" id="galerias">
      <h2>GALERIAS</h2>
      <p>Entrá a las galerías para ver los diferentes trabajos y la &quot;Feria Picante&quot;</p>
      <Link href={'/galeria/papel'} ><button className="galBtnA">TRABAJOS EN PAPEL</button></Link>
      <Link href={'/'} ><button className="galBtnB">TRABAJOS EN TELA</button></Link>
      <Link href={'/'} ><button className="galBtnC">FERIA PICANTE</button></Link>
    </section>
  )
}

export default Galerias