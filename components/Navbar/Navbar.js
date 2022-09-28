import Link from "next/link"

const NavBar = ({opacity, foo}) => { 

  return (          
      
    <div className="navContainer" style={{opacity: opacity, transition:"all 0.5s ease-in-out"}}>
      <nav>
        <Link href="/"><button onClick={foo}>HOME</button></Link>
        <Link href="/#galerias"><button onClick={foo}>GALERIAS</button></Link>
        <Link href="/presupuesto"><button onClick={foo}>PRESUPUESTO</button></Link>
        <Link href="/nosotros"><button  onClick={foo}>NOSOTROS</button></Link>
        <Link href="/#contacto"><button  onClick={foo}>CONTACTO</button></Link>
      </nav>
    </div>    
   
  )
}

export default NavBar