import Image from "next/image"
import Contacto from "../Contacto/Contacto"

import Galerias from "../Galerias/Galerias"


const Inicio = () => {
  return (
    <div className="inicioContainer">
      <div className="homeImgA"><Image src='/images/home/bienvenidos.png' objectFit="contain" layout="fill" alt="Home Banner"></Image></div>
      <div className="homeImgB"><Image src='/images/home/a.png' objectFit="contain" layout="fill" alt="Home Banner"></Image></div>
      <div className="homeImgC"><Image src='/images/home/picante.png' objectFit="contain" layout="fill" alt="Home Banner"></Image></div>
      <div className="homeInfo">
        <h2>QUE ES PICANTE?</h2>
        <p>Picante, es un taller de serigrafía independiente/autogestivo fundado en 2016.<br/>
          Trabajamos con emprendedores, artistas y comerciantes de diferentes rubros; con nuestro oficio ayudamos a muchos a cumplir sus sueños, creando productos y obras únicas e irrepetibles.<br/>
          Te invitamos a conocer más sobre esta técnica de impresión manual, visitá nuestra galería y nuestra fanpage ♥.
        </p>
      </div>

      <div className="imagesContainer">
        <div className="imgA"><Image src='/images/home/home01.jpg' objectFit="cover" layout="fill" alt="Home Banner"></Image></div>
        <div className="imgB"><Image src='/images/home/home02.jpg' objectFit="cover" layout="fill" alt="Home Banner"></Image></div>
        <div className="imgA"><Image src='/images/home/home03.jpg' objectFit="cover" layout="fill" alt="Home Banner"></Image></div>
        {/* <div className="imgB"><Image src='/images/home/home04.jpg' objectFit="cover" layout="fill" alt="Home Banner"></Image></div> */}
        <div className="imgA imgMiddleA"><Image src='/images/home/home05.jpg' objectFit="cover" layout="fill" alt="Home Banner"></Image></div>
        <div className="imgB imgMiddleB"><Image src='/images/home/home04.jpg' objectFit="cover" layout="fill" alt="Home Banner"></Image></div>
      </div>
      
      <Galerias/> 

      <p className="inicioPresupuesto">
        <span>TENES ALGUN TRABAJO EN MENTE?</span><br/>
        COMPLETÁ EL FORMULARIO DE PRESUPUESTO. LUEGO DE QUE NOS ENVÍES EL MISMO NOS PONDREMOS EN CONTACTO PARA ACLARAR DUDAS Y ENVIARTE EL PRESUPUESTO
      </p>
      <button className="toFormularioBtn">
        IR A FORMULARIO
        <Image src='/images/arrow.svg' objectFit="contain" layout="fill" alt="Arrow" ></Image>
        <Image src='/images/arrow.svg' objectFit="contain" layout="fill" alt="Arrow" className="arrow2" ></Image>
        <Image src='/images/arrow.svg' objectFit="contain" layout="fill" alt="Arrow" className="arrow3" ></Image>
        </button>
     {/*  <p className="inicioPresupuesto">
        Tenes algun trabajo en mente y queres que te armemos un presupuesto?<br/>
        Para que podamos hacerte un correcto presupuesto, necesitamos que nos completes el formulario. Luego de que nos envíes el formulario nos pondremos en contacto para aclarar dudas y enviarte el presupuesto
      </p> */}



      <Contacto/>
      



    </div>
  )
}

export default Inicio