import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import database from '../../db/database'

export const getStaticProps = async () => { 

  const obras = database
  const obrasFeria = obras.feria

  return {
    props: {
      obrasFeria
    },
    revalidate: 3600
  } 
}

const Feria = ({obrasFeria}) => {
  
  const [imgGrande, setImgGrande] = useState(false)
  const [imgGrandeSrc, setImgGrandeSrc] = useState("")
  const [visible, setVisible] = useState("0%")

  const handleClick = (e) => {    
    setImgGrandeSrc(e.target.name)    
    setImgGrande(true);
    setTimeout(() => {
    setVisible("100%")}, 1);
  }

  const offImgGrande = () => {
    setVisible("0%")
    setTimeout(() => {
    setImgGrande(false)}, 500);
  }

  const router = useRouter()

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  

  return (
    <Layout> 
      <main className="galeriaContainer">
        <h1>FERIA PICANTE</h1>

        <div className="imagesGalleryContainer">
          {obrasFeria.map((obra, i) => (            
            <div className="imageContainer" style={{transform: `rotate( ${ getRandom(-5, 10) }deg )`}} key={i} onClick={handleClick}>
              <Image src={`/images/feria/${obra.src}`} placeholder='blur' blurDataURL={`/images/feria/${obra.src}`} objectFit='cover' name={obra.src} height={800} width={600} alt={obra.title} />              
            </div>
          ))}
        </div>

        {imgGrande &&
          <div className="imgGrandeContainer" style={{opacity: visible}} onClick={offImgGrande}>
            <div className="imgGrande">
              <Image  layout="fill" objectFit="contain" src={`/images/feria/${imgGrandeSrc}`} alt="imgGrande"/>
            </div>
          </div> 
        }

        <p className="inicioPresupuesto">
          <span>QUERES PARTICIPAR DE LA FERIA?</span><br/>
          COMPLETÁ EL FORMULARIO DE PARTICIPACION PARA QUE NOS PODAMOS PONER EN CONTACTO CON VOS
        </p>
        <Link href="/feria-formulario">
          <button className="toFormularioBtn">
            IR A FORMULARIO
            <Image src='/images/arrow.svg' objectFit="contain" layout="fill" alt="Arrow" ></Image>
            <Image src='/images/arrow.svg' objectFit="contain" layout="fill" alt="Arrow" className="arrow2" ></Image>
            <Image src='/images/arrow.svg' objectFit="contain" layout="fill" alt="Arrow" className="arrow3" ></Image>
          </button>
        </Link>


        <button onClick={() => router.back()}>
          <Image src='/images/arrow.svg' objectFit="contain" layout="fill" alt="Arrow" ></Image>
          <Image src='/images/arrow.svg' objectFit="contain" layout="fill" alt="Arrow" className="arrow2" ></Image>
          <Image src='/images/arrow.svg' objectFit="contain" layout="fill" alt="Arrow" className="arrow3" ></Image>
          BACK TO HOME
        </button>
      </main>
    </Layout> 
  )
}

export default Feria
