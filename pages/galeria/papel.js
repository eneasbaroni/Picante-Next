import Image from "next/image";
import { useRouter } from "next/router";
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
            <div className="imageContainer" style={{transform: `rotate( ${ getRandom(-5, 10) }deg )`}} key={i}>
              <Image src={`/images/papel/${obra.src}`} objectFit='cover' layout='fill' alt={obra.title} />              
            </div>
          ))}
        </div>
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
