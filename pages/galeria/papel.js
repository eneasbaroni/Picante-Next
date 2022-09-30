import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import database from '../../db/database'

export const getStaticProps = async () => { 

  const obras = database
  const obrasPapel = obras.papel

  return {
    props: {
      obrasPapel
    },
    revalidate: 3600
  } 
}

const Papel = ({obrasPapel}) => {

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
        <h1>TRABAJOS EN PAPEL</h1>

        <div className="imagesGalleryContainer">
          {obrasPapel.map((obra, i) => (            
            <div className="imageContainer" style={{transform: `rotate( ${ getRandom(-5, 10) }deg )`}} key={i} onClick={handleClick}>
              <Image src={`/images/papel/${obra.src}`} placeholder='blur' blurDataURL={`/images/papel/${obra.src}`} objectFit='cover' name={obra.src} height={800} width={600} alt={obra.title} />              
            </div>
          ))}
        </div>

        {imgGrande &&
          <div className="imgGrandeContainer" style={{opacity: visible}} onClick={offImgGrande}>
            <div className="imgGrande">
              <Image  layout="fill" objectFit="contain" placeholder='blur' blurDataURL={`/images/papel/${imgGrandeSrc}`} src={`/images/papel/${imgGrandeSrc}`} alt="imgGrande"/>
            </div>
          </div> 
        }

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

export default Papel
