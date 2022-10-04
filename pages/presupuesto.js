import Image from "next/image"
import { useState } from "react"
import Layout from "../components/Layout/Layout"
import Swal from "sweetalert2"
import { useRouter } from "next/router"

import { send } from "emailjs-com"

const Input = ({placeholder, name, label, foo}) => { 
  return (
    <>
        <label htmlFor={name}>{label}</label>
        <input required placeholder={placeholder} className="userInput" type="text" name={name} id={name} onChange={foo}></input>
    </>
  )
}


const Presupuesto = () => {

  const router = useRouter()

  const [user, setUser] = useState({
    nombre:"",
    apellido:"",
    telefono:"",
    email:"",
    soporte:"",
    medida:"",
    cantidadColores:"",
    cantidad:"",
    descripcion:"",
  }) 

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name] : event.target.value
    })
  }  

  const sendData = (e) => {
    e.preventDefault();  
    console.log(user);

    /* Swal.fire({
      html:'Formulario Enviado!',
      confirmButtonText: "VOLVER AL INICIO"
    })
      
      setTimeout(() => {
      router.push("/")              
    }, 900); */


    
    send(
      //los keys de emailJS https://www.emailjs.com/
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      user,
      process.env.NEXT_PUBLIC_USER_ID 
    )
     .then((response) => {
      
      Swal.fire({
      html:'Formulario Enviado!',
      confirmButtonText: "VOLVER AL INICIO"
    })
      
      setTimeout(() => {
      router.push("/")              
    }, 500);

      
    })
      .catch((err) => {
      
      console.log('FAILED...', err);
    });
  }    

  

  // Expresiones regulares para los campos del formulario
  const nombreRegex = /^[\s\S]{2,25}$/i
  const apellidoRegex = /^[\s\S]{2,25}$/i // eslint-disable-next-line
  const telefonoRegex = /^[\+]?[0-9]{3,20}$/im // eslint-disable-next-line
  const emailRegex = /^[\w_\.-]+@[\w\.-]+\.[a-z\.]{2,6}$/i 


  return (
    <Layout>
      <main className="formularioContainer">
        <h1>FORMULARIO DE PRESUPUESTO</h1>

        <div className='formularioP'>
          <div className="circleContainer"><Image src='/images/contact/circle.svg' layout='fill' objectFit='contain' alt='picante serigrafia'></Image></div>
          <p> Queres hacer un trabajo con nosotros? Dejanos tus datos asi podemos hacerte una cotización </p>
        </div>

        <form className="formulario" onSubmit={sendData}>
        {/* <legend>Formulario de Presupuesto</legend>    */}     
        <Input placeholder="NOMBRE" name="nombre" label="Nombre" foo={handleInputChange}/>        
        <Input placeholder="APELLIDO" name="apellido" label="Apellido" foo={handleInputChange}/>
        <Input placeholder="TELEFONO (sin guiones, sin 0 y sin 15)" name="telefono" label="Telefono" foo={handleInputChange}/>
        <Input placeholder="E-MAIL" name="email" label="Email" foo={handleInputChange}/> 
        <label htmlFor="soporte">Soporte de Trabajo</label>
            <select className="form-control mb-3" name="soporte" id="soporte" onChange={handleInputChange}>
            
            <option>Tela</option>
            <option>Papel</option>
            <option>Carton</option>
            <option>Chapa</option>
            <option>Plastico</option>
            <option>Otros</option>                                   
            </select>
        <Input placeholder="MEDIDA DEL TRABAJO EN cm" name="medida" label="Medida del Trabajo" foo={handleInputChange}/> 
        <Input placeholder="CANTIDAD DE COLORES (máximo 5)" name="cantidadColores" label="Cantidad de Colores" foo={handleInputChange}/> 
        <Input placeholder="CANTIDAD DE COPIAS A REALIZAR" name="cantidad" label="Cantidad de Copias" foo={handleInputChange}/> 
        <Input placeholder="DESCRIPCION DEL TRABAJO A REALIZAR" name="descripcion" label="Breve Descripción" foo={handleInputChange}/> 
        {/* <label htmlFor='descripcion'>Breve Descripción</label>
        <input required placeholder='DESCRIPCION DEL TRABAJO A REALIZAR' className="userInput lastInput" type="text" name='descripcion' id='descripcion' onChange={handleInputChange}></input> */}

        {nombreRegex.test(user.nombre) && apellidoRegex.test(user.apellido) && telefonoRegex.test(user.telefono) && emailRegex.test(user.email) && user.medida && user.cantidad && user.descripcion
          ?<button className="col-2 enviarBtn" type="submit">Enviar</button>        
          :<button className="col-2 enviarBtnDesabilitado" disabled type="submit">ENVIAR</button>
        }        
        
      </form>

      </main>
    </Layout>
  )
}

export default Presupuesto
