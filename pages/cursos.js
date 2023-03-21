import Layout from '../components/Layout/Layout'
import Script from 'next/script'
import { useEffect, useState } from 'react';

const Cursos = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.async = true;
    script.setAttribute("data-preference-id", "178809126-e10e745c-a9a2-40ae-827c-38019ab39fad");
    script.setAttribute("data-source", "button");
    script.setAttribute("data-button-label", "PAGAR");
    document.getElementById("mpDiv").appendChild(script); 

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);


  return (
    <Layout>
        <main className='cursosContainer'>
            <h1>EXPERIENCIA</h1>
            <h2>PICANTE</h2>
            <video autoPlay loop muted>
                <source src="videos/Picante Stickers.mp4" type="video/mp4"/> 
            </video>
            <div className='cursosInfo'>
                <h3>APRENDE A IMPRIMIR TUS PROPIOS STICKERS</h3>
                <p>
                  Bienvenid@ a esta experiencia.<br/>
                  Te invito a conectar con tu creatividad y expresión, mediante la serigrafía.<br/>
                  Aprenderás a crear una Matriz Serigráfica con tu propio diseño (o uno de los diseños que tenemos disponilbles) <br/>
                  Luego, vamos a imprimir sobre papel adhesivo con Tintas Vinilicas y crear fabulosos Stikers.<br/>
                  Además, vas a aprender a lavar y reacondicionar la matriz para futuros trabajos que quieras realizar. <br/>
                  Trabajaremos con Tintas al Agua, sobre Papel Obra, con un diseño predeterminado que te llevarás de recuerdo.
                </p>
                <h4>QUERES SABER MAS SOBRE ESTE CURSO?</h4>
                <a href="./documents/EXPERIENCIA_PICANTE-23.pdf" className='donwloadBtn' download>DESCARGA EL PDF</a>
                <p>                
                  Para inscribirte podés hacerlo mediante transferencia bancaria (Brubank Alias: picante.arte)<br/>
                  O bien, con tarjeta, mediante Mercado Pago en el siguiente botón:
                </p>

                <div id="mpDiv"> </div> 
                {/* <a href="https://mpago.la/1MNCLhU" rel='noreferrer' target="_blank" className='mpButton'><p>MERCADO PAGO</p></a> */}

                <p>
                  Una vez realizado el pago, completá el siguiente formulario con tus datos, fecha y horario elegido y el comprobante de pago.<br/>
                  Cuando recibamos tu inscripción, te enviaremos un mail de confirmación.
                </p>
                <a href="https://forms.gle/t5K73mf8mXTyhNDz7" rel='noreferrer' target="_blank" className='cursoFormularioBtn'>FORMULARIO DE INSCRIPCIÓN</a>
                
            </div>
        </main>
    </Layout>
  )
} 

export default Cursos