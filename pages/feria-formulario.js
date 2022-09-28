import { useState } from "react"
import Layout from "../components/Layout/Layout"

const Input = ({placeholder, name, label, foo}) => { 
  return (
    <>
        <label htmlFor={name}>{label}</label>
        <input required placeholder={placeholder} className="userInput" type="text" name={name} id={name} onChange={foo}></input>
    </>
  )
}


const FeriaFormulario = () => {

  const [user, setUser] = useState({ 
    nombre:"",
    apellido:"",
    telefono:"",
    email:"",    
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
  }

  // Expresiones regulares para los campos del formulario
  const nombreRegex = /^[\s\S]{2,25}$/i
  const apellidoRegex = /^[\s\S]{2,25}$/i // eslint-disable-next-line
  const telefonoRegex = /^[\+]?[0-9]{3,20}$/im // eslint-disable-next-line
  const emailRegex = /^[\w_\.-]+@[\w\.-]+\.[a-z\.]{2,6}$/i 


  return (
    <Layout>
      <main className="formularioContainer">
        <h1>FORMULARIO ARTISTA</h1>

        <form className="formulario" onSubmit={sendData}>
        {/* <legend>Formulario de Presupuesto</legend>    */}     
        <Input placeholder="Nombre" name="nombre" label="Nombre" foo={handleInputChange}/>        
        <Input placeholder="Apellido" name="apellido" label="Apellido" foo={handleInputChange}/>
        <Input placeholder="Telefono (sin guiones, sin 0 y sin 15)" name="telefono" label="Telefono" foo={handleInputChange}/>
        <Input placeholder="E-mail" name="email" label="Email" foo={handleInputChange}/> 
        <Input placeholder="Agregá una breve descripción del trabajo a realizar" name="descripcion" label="Breve Descripción" foo={handleInputChange}/> 

        {nombreRegex.test(user.name) && apellidoRegex.test(user.apellido) && telefonoRegex.test(user.telefono) && emailRegex.test(user.email) && user.descripcion
          ?<button className="col-2 enviarBtn" type="submit">Enviar</button>        
          :<button className="col-2 enviarBtnDesabilitado" disabled type="submit">Enviar</button>
        }        
        
      </form>

      </main>
    </Layout>
  )
}

export default FeriaFormulario