import Layout from '../components/Layout/Layout'

const cursos = () => {

  return (
    <Layout>
        <main className='cursosContainer'>
            <h1> CURSOS</h1>
            <video autoPlay loop muted>
                <source src="videos/Picante Stickers.mp4" type="video/mp4"/> 
            </video>
        </main>
    </Layout>
  )
} 

export default cursos