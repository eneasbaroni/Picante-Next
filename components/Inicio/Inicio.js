import Image from "next/image"
import Link from "next/link"
import Galerias from "../Galerias/Galerias"
import {Link as Linko} from 'react-scroll/modules'
import Ad from "../Ad/Ad"
import { useEffect, useState } from "react"


const Inicio = () => {
  /* const [aciveAd, setAciveAd] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAciveAd(true)
    }, 3000);    
  }, [])

  const closeAd = () => {
    setAciveAd(false)
  } */
  


  return (
    <div className="inicioContainer">

      {/* {aciveAd && <Ad closeAd={closeAd}/>} */}



      {/* <div className="homeImgA"><Image src='/Images/home/bienvenidos.png' objectFit="contain" layout="fill" alt="Home Banner"></Image></div>
      <div className="homeImgB"><Image src='/Images/home/a.png' objectFit="contain" layout="fill" alt="Home Banner"></Image></div> */}

      <div className="homeContainer">
        <div className="homeImgC"><Image src='/Images/home/picante.svg' objectFit="contain" layout="fill" alt="Home Banner"></Image></div>
        <button className="clickme"><Linko smooth='true' offset={50} duration={500} to="homeInfo">CLICK<br/>ME</Linko></button>
      </div>
      
      
      <div className="homeInfo" id="homeInfo">
        <div className="homeInfoText">
          <h2>QUE ES PICANTE?</h2>
          <p>Picante, es un taller de serigrafía independiente/autogestivo fundado en 2016.<br/>
            Trabajamos con emprendedores, artistas y comerciantes de diferentes rubros; con nuestro oficio ayudamos a muchos a cumplir sus sueños, creando productos y obras únicas e irrepetibles.<br/>
            Te invitamos a conocer más sobre esta técnica de impresión manual, visitá nuestra galería y nuestra fanpage ♥.
          </p>
        </div>

        <div className="imgA"><Image src='/Images/home/home01.jpg' objectFit="cover" height={400} width={600}  alt="Home Banner"></Image></div>
        <div className="imgB"><Image src='/Images/home/home02.jpg' objectFit="cover"  height={400} width={600} alt="Home Banner"></Image></div>
        <div className="imgA imgC"><Image src='/Images/home/home03.jpg' objectFit="cover"  height={400} width={600} alt="Home Banner"></Image></div>        
        <div className="imgA imgMiddleA"><Image src='/Images/home/home05.jpg' objectFit="cover" height={400} width={600} alt="Home Banner"></Image></div>
        <div className="imgB imgMiddleB"><Image src='/Images/home/home04.jpg' objectFit="cover" height={400} width={600}  alt="Home Banner"></Image></div>
      </div>      
      
      <Galerias/> 

      <p className="inicioPresupuesto">
        <span>TENES ALGUN TRABAJO EN MENTE?</span><br/>
        COMPLETÁ EL FOMRULARIO DE PRESUPUESTO.<br/>EVALUAREMOS TU PROYECTO, Y TE ENVIAREMOS LA COTIZACIÓN.<br/>GRACIAS POR CONFIAR EN NUESTRO TRABAJO :)
      </p>
      <Link href="/presupuesto">
        <button className="toFormularioBtn">
          IR A FORMULARIO
          <Image src='/Images/arrow.svg' objectFit="contain" layout="fill" alt="Arrow" ></Image>
          <Image src='/Images/arrow.svg' objectFit="contain" layout="fill" alt="Arrow" className="arrow2" ></Image>
          <Image src='/Images/arrow.svg' objectFit="contain" layout="fill" alt="Arrow" className="arrow3" ></Image>
        </button>
      </Link>
     {/*  <p className="inicioPresupuesto">
        Tenes algun trabajo en mente y queres que te armemos un presupuesto?<br/>
        Para que podamos hacerte un correcto presupuesto, necesitamos que nos completes el formulario. Luego de que nos envíes el formulario nos pondremos en contacto para aclarar dudas y enviarte el presupuesto
      </p> */}



      {/* <Contacto/> */}
      



    </div>
  )
}

export default Inicio
