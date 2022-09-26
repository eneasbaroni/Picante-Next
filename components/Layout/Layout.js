import Head from 'next/head'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({children}) => {
  return (
    <>    
      <Head>
        <title>Picante Serigrafía </title>
        <meta name='description' content='Picante es un emprendimiento de serigrafía que ademas tambien funciona como marca de indumentaria con diseños personalizados, únicos, singulares y puros. Nos caracterizamos por la calidad y la creatividad' />
        <meta name="keywords"  content="serigrafía, estampado, indumentaria, emprendimiento, tela, textil, arte, galeria, calidad, creatividad, córdoba, argentina"/>           
      </Head>
      <>
        <Header/>        
        {children}
        {/* <Socials/> */}
        <Footer/>
      </>
    </>
  )
}

export default Layout