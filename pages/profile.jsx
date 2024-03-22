
import { useEffect } from "react"
import Layout from "../components/Layout/Layout"
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import Image from "next/image"


const Profile = () => {  

    //const {data: session} = useSession({required: true})
    const {data: session, status} = useSession()

    useEffect(() => {
      console.log('el estado de la sesion cambio', session);
    }, [session])   

    const popupCenter = (url, title) => {
      const dualScreenLeft = window.screenLeft ?? window.screenX;
      const dualScreenTop = window.screenTop ?? window.screenY;
  
      const width =
        window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
  
      const height =
        window.innerHeight ??
        document.documentElement.clientHeight ??
        screen.height;
  
      const systemZoom = width / window.screen.availWidth;
  
      const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
      const top = (height - 550) / 2 / systemZoom + dualScreenTop;
  
      const newWindow = window.open(
        url,
        title,
        `width=${500 / systemZoom},height=${550 / systemZoom
        },top=${top},left=${left}`
      );
  
      newWindow?.focus();
    };
    
 
    

  return (
    <Layout>      
        <div id="profile" className="divContainer">
          {status === "authenticated" ?
              <>
                <h1>BIENVENIDO</h1>
                <h2>{session.user.name}</h2>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={session.user.image} alt="profile img" />
                <button onClick={() => signOut()}>Cerrar sesión</button>
              </>:
              <>
              <h1>BIENVENIDO</h1>
              <h2>Aun no has iniciado sesión</h2> 
              <p>Para acceder a esta sección y poder disfrutar de contenido exclusivo debes iniciar sesión con tu cuenta de Google</p> 
              {/* <button className="googleBtn" onClick={() => signIn()}>Iniciar sesion <img src="https://www.svgrepo.com/show/2778/google.svg" alt="google icon" /></button> */}
              {/* <button className="googleBtn" onClick={() => signIn('google')}>Iniciar sesion <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="google icon" /></button> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <button className="googleBtn" onClick={() => popupCenter("/google-signin", "Sample Sign In")} >Iniciar sesion <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="google icon" /></button>
            </>
          }
        </div>
    </Layout>
  )
}

export default Profile

//funcion para obtener la sesion
/* export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  return {
    props: {
      session
    }
  }
} */
