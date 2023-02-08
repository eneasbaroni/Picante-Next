import Layout from '../components/Layout/Layout'


const cursos = () => {

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
                  Aprenderás a crear una Matriz Serigráfica con tu propio diseño. <br/>
                  Luego, vamos a imprimir sobre papel adhesivo con Tintas Vinilicas y crear fabulosos Stikers.<br/>
                  Además, vas a aprender a lavar y reacondicionar la matriz para futuros trabajos que quieras realizar. <br/>
                  También, trabajaremos con Tintas al Agua, sobre Papel Obra, con un diseño predeterminado que te llevarás de recuerdo.
                </p>
                <h4>QUERES SABER MAS SOBRE ESTE CURSO?</h4>
                <button className='donwloadBtn'>Descargá el PDF</button>
                
                <button className='donwloadBtn'>QUIERO INSCRIBIRME</button>
                
            </div>
        </main>
    </Layout>
  )
} 

export default cursos