import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

const contacto = () => {
  return (
    <Layout>
      <main className='contactoContainer'>
        <h1> SIGAMOS EN</h1>
        <h2> CONTACTO</h2>

        <div className='infoContainer'>          
          <p>Visitá nuestro taller en <br/> Augusto López 429, Córdoba AR</p>
          <div className='infoLinks'>
            <Link href="https://wa.me/+5493516558094">+54 9 351-6558094</Link>
            <Link href="https://www.instagram.com/picante.serigrafia/">@picante.serigrafia</Link>
            <Link href="mailto:picante.cba.arg@gmail.com">picante.cba.arg@gmail.com</Link>
          </div>
        </div>

        <div className='mapContainer'>
          <Image src='/images/contact/mapa.png' width={600} height={400} layout='fill' objectFit='contain' alt='mapa' />
        </div>  



      </main>
    </Layout>
  )
}

export default contacto