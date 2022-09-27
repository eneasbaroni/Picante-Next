import Link from "next/link"

const NavBar = ({opacity, foo}) => { 

  return (          
      
    <div className="navContainer" style={{opacity: opacity, transition:"all 0.5s ease-in-out"}}>
      <nav>
        <button onClick={foo}><Link href="/">HOME</Link></button>        
        <button onClick={foo}><Link href="/#galerias">GALERIAS</Link></button>
        <button onClick={foo}>PRESUPUESTO</button>
        <button>NOSOTROS</button>
        <button>CONTACTO</button>
      </nav>
    </div>    
   
  )
}

export default NavBar