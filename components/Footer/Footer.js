import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <footer id="contacto"> 
      <div className="footerContainer"> 

        {/* <div  className="ubication">
          <p>Visitá nuestro taller en <br/> Augusto López 429, Córdoba AR</p>
        </div> */}
        
          <div className='ubication'>
          <a  href="https://g.page/picante-serigrafia?share" target="_blank" rel="noreferrer" >
          <Image src='/Images/contact/mapa.png' layout='fill' objectFit='cover' alt='mapa' />
          </a>
          </div>
         

        <div className='infoLinks'>
          <p>Visitá nuestro taller con cita previa en <br/> Augusto López 1067, Córdoba AR</p>
          <div className='linksContainer'>
            <Link href="https://wa.me/+5493516558094">+54 9 351-6558094</Link>
            <Link href="https://www.instagram.com/picante.serigrafia/">@picante.serigrafia</Link>
            <Link href="mailto:picante.cba.arg@gmail.com">picante.cba.arg@gmail.com</Link>
            <Link href="https://eneasbaroni.com.ar/">Diseño y Desarrollo x ENEAS</Link>
          </div>
        </div>   

        <div className='infoIcons'>          
          <div className="iconContainer"><Link href="https://wa.me/+5493516558094" className="iconsContainer"><Image src='/Images/whatsapp_icon.svg'  alt='whatsapp' layout="fill"/></Link></div>
          <div className="iconContainer"><Link href="https://www.instagram.com/picante.serigrafia/" className="iconsContainer"><Image src='/Images/instagram_icon2.svg'  alt='instagram' layout="fill"/></Link></div>
          <div className="iconContainer"><Link href="https://www.facebook.com/picante.serigrafia/" className="iconsContainer"><Image src='/Images/facebook_icon.svg'  alt='facebook' layout="fill"/></Link></div>
          <div className="iconContainer"><Link href="mailto:picante.cba.arg@gmail.com" className="iconsContainer"><Image src='/Images/mailIcon.svg'  alt='mail' layout="fill"/></Link>          </div>
        </div>        

      </div>    

      <div className="footerImgContainer">
        {/* <Image src='/Images/contact/footer.svg' width={1920} height={614} objectFit='cover' alt='equipo' /> */}
        <div className="image"></div>
      </div>

    </footer>
  )
}

export default Footer
