import Link from "next/link"

const NavBar = ({opacity, foo}) => { 

  return (          
      
    <div className="navContainer" style={{opacity: opacity, transition:"all 0.5s ease-in-out"}}>
      <nav>
        <Link href="/"><button onClick={foo}>HOME</button></Link>
        <Link href="/#galerias"><button onClick={foo}>GALERIAS</button></Link>
        <button onClick={foo}>PRESUPUESTO</button>
        <button>NOSOTROS</button>
        <button>CONTACTO</button>
      </nav>
    </div>    
   
  )
}

export default NavBar