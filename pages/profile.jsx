
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

  return (
    <Layout>      
        <div id="profile" className="divContainer">
          {status === "authenticated" ?
              <>
                <h1>BIENVENIDO</h1>
                <h2>{session.user.name}</h2>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={session.user.image} alt="profile img" />
                <p>role: {session.user.role}</p>
                <button onClick={() => signOut()}>Cerrar sesión</button>
              </>:
              <>
              <h1>BIENVENIDO</h1>
              <h2>Aun no has iniciado sesión</h2> 
              <p>Para acceder a esta sección y poder disfrutar de contenido exclusivo debes iniciar sesión con tu cuenta de Google</p> 
              {/* <button className="googleBtn" onClick={() => signIn()}>Iniciar sesion <img src="https://www.svgrepo.com/show/2778/google.svg" alt="google icon" /></button> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <button className="googleBtn" onClick={() => signIn('google')}>Iniciar sesion <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="google icon" /></button>
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
