import Image from "next/image"
import Link from "next/link"
import Galerias from "../Galerias/Galerias"
import {Link as Linko} from 'react-scroll/modules'
import Ad from "../Ad/Ad"
import { useEffect, useState } from "react"


const Inicio = () => {
  const [aciveAd, setAciveAd] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAciveAd(true)
    }, 3000);    
  }, [])

  const closeAd = () => {
    setAciveAd(false)
  }
  


  return (
    <div className="inicioContainer">

      {aciveAd && <Ad closeAd={closeAd}/>}



      {/* <div className="homeImgA"><Image src='/images/home/bienvenidos.png' objectFit="contain" layout="fill" alt="Home Banner"></Image></div>
      <div className="homeImgB"><Image src='/images/home/a.png' objectFit="contain" layout="fill" alt="Home Banner"></Image></div> */}

      <div className="homeContainer">
        <div className="homeImgC"><Image src='/images/home/picante.svg' objectFit="contain" layout="fill" alt="Home Banner"></Image></div>
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

        <div className="imgA"><Image src='/images/home/home01.jpg' objectFit="cover" height={400} width={600} placeholder='blur' blurDataURL='/images/home/home01.jpg'/* layout="fill" */ alt="Home Banner"></Image></div>
        <div className="imgB"><Image src='/images/home/home02.jpg' objectFit="cover"  height={400} width={600} placeholder='blur' blurDataURL='/images/home/home02.jpg'  /* layout="fill" */ alt="Home Banner"></Image></div>
        <div className="imgA imgC"><Image src='/images/home/home03.jpg' objectFit="cover"  height={400} width={600} placeholder='blur' blurDataURL='/images/home/home03.jpg' /* layout="fill" */ alt="Home Banner"></Image></div>        
        <div className="imgA imgMiddleA"><Image src='/images/home/home05.jpg' objectFit="cover" height={400} width={600} placeholder='blur' blurDataURL='/images/home/home05.jpg' /* layout="fill" */ alt="Home Banner"></Image></div>
        <div className="imgB imgMiddleB"><Image src='/images/home/home04.jpg' objectFit="cover" height={400} width={600} placeholder='blur' blurDataURL='/images/home/home04.jpg'/* layout="fill" */ alt="Home Banner"></Image></div>
      </div>      
      
      <Galerias/> 

      <p className="inicioPresupuesto">
        <span>TENES ALGUN TRABAJO EN MENTE?</span><br/>
        COMPLETÁ EL FORMULARIO DE PRESUPUESTO. LUEGO DE QUE NOS ENVÍES EL MISMO NOS PONDREMOS EN CONTACTO PARA ACLARAR DUDAS Y ENVIARTE EL PRESUPUESTO
      </p>
      <Link href="/presupuesto">
        <button className="toFormularioBtn">
          IR A FORMULARIO
          <Image src='/images/arrow.svg' objectFit="contain" layout="fill" alt="Arrow" ></Image>
          <Image src='/images/arrow.svg' objectFit="contain" layout="fill" alt="Arrow" className="arrow2" ></Image>
          <Image src='/images/arrow.svg' objectFit="contain" layout="fill" alt="Arrow" className="arrow3" ></Image>
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