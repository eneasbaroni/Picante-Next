import '../styles/globals.css'
import '../styles/header.css'
import '../styles/navbar.css'
import '../styles/home.css'
import '../styles/galerias.css'
import '../styles/galeria.css'
import '../styles/formulario.css'
import '../styles/nosotros.css'
import '../styles/footer.css'
import '../styles/cursos.css'
import '../styles/ad.css'
import '../styles/Loader.css'
import '../styles/profile.css'
import '../styles/curso.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps, session }) {  
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
