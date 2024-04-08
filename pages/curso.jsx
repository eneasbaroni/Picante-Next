import Layout from "../components/Layout/Layout"

const Curso = () => {
  return (
    <Layout>
        <div id="curso">
            <div className="titlesContainer">
                <h2>SERIGRAFÍA CREATIVA</h2>
                <h3>Sección exclusiva para amantes del arte visual</h3>
            </div>

            <div className="init">
                <h2>HOLA :)</h2>
                <video autoPlay loop muted className="video">
                <source src="videos/Picante Stickers.mp4" type="video/mp4"/> 
            </video>
                <p>Bienvenid@s, mi nombre es Eve y te invito a explorar y a divertirte, con esta hermosa técnica de impresión manual.<br/>
                    Con la Serigrafía podrás crear varias reproducciones de un mismo diseño.<br/>
                    Basándote en el estarcido (técnica primitiva) donde pigmentos/tintas  se aplican en ciertas zonas de una plantilla pre-diseñada.
                </p>
            </div>
            <div className="herramientas">
                <h3>HERRAMIENTAS</h3>
                <h4>Kit básico para iniciar</h4>


                <div className="hGroupContainer">

                    <div className="hContainer">
                        <div className="imgContainer imgMobile">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/Images/curso/shablon2.svg" alt="shablon" />
                        </div>
                        <div className="imgContainer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/Images/curso/shablon2.svg" alt="shablon" />
                        </div>
                        <div className="infoContainer ">
                            <p className="tLeft">
                                <span>SHABLON / BASTIDOR / PLANTILLA</span><br/>
                                Marco de aluminio, caño o madera donde se tensa una tela/malla.<br/>
                                La tela que se tensa en el marco está compuesta por hilos de poliéster.<br/>
                                Existen muchos tipos de telas, la principal diferencia es la cantidad de hilos que la componen.<br/>
                                Ejemplo: En una tela de 90 hilos, en cada centímetro cuadrado hay una trama de 90 hilos muy finos.
                            </p>
                        </div>                        
                    </div>

                    <div className="hContainer">
                        <div className="imgContainer imgMobile">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/Images/curso/emul2.svg" alt="emulsion" />
                        </div>
                        <div className="infoContainer ">
                            <p className="tRight">
                                <span>EMULSÍON</span><br/>
                                Es una sustancia química fotosensible que se aplica al Shablon con una CUBETA/EMULSIONADOR (No es necesarias, podés utilizar otras herramientas).<br/>
                                Con la emulsión podemos crear la matriz o estarcido. La emulsión se endurece cuando se expone a una luz potente y solo se puede eliminar con productos especiales.
                            </p>
                        </div>
                        <div className="imgContainer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/Images/curso/emul2.svg" alt="emulsion" />
                        </div>
                    </div>

                    <div className="hContainer">
                        <div className="imgContainer imgMobile">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/Images/curso/emulsionador2.svg" alt="emulsionador" />
                        </div>
                        <div className="imgContainer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/Images/curso/emulsionador2.svg" alt="emulsionador" />
                        </div>
                        <div className="infoContainer ">
                            <p className="tLeft">
                                <span>EMULSIONADOR</span><br/>
                                Sirve para aplicar una capa fina de emulsión sobre la tela.<br/>
                                Posee un borde recto y liso que permite extender la emulsión de manera uniforme.
                            </p>
                        </div>
                    </div>

                    <div className="hContainer">
                        <div className="imgContainer imgMobile">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/Images/curso/espatula2.svg" alt="espatula" />
                        </div>
                        <div className="infoContainer ">
                            <p className="tRight">
                                <span>CINTA, ESPÁTULA</span><br/>
                                Aquí te muestro herramientas claves para el proceso de producción.<br/>
                                Las espátulas pueden reemplazarse por cucharas, palitos chinos, etc.<br/>
                                Mientras más elementos tengas, podrás trabajar más comod@.
                            </p>
                        </div>
                        <div className="imgContainer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/Images/curso/espatula2.svg" alt="espatula" />
                        </div>
                    </div>

                    <div className="hContainer ">
                        <div className="imgContainer imgMobile">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/Images/curso/tinta2.svg" alt="tinta" />
                        </div>
                        <div className="imgContainer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/Images/curso/tinta2.svg" alt="tinta" />
                        </div>
                        <div className="infoContainer ">
                            <p className="tLeft">
                                <span>TINTAS</span><br/>
                                Según el tipo de soporte/superficie a imprimir, debemos seleccionar la tinta indicada.<br/>
                                Existen opciones ecológicas, algunas que derivan del petróleo, otras que necesitan de 2 componentes para su correcto secado y endurecimiento.
                            </p>
                        </div>
                    </div>

                    <div className="hContainer">
                        <div className="imgContainer imgMobile">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/Images/curso/manigueta2.svg" alt="espatula" />
                        </div>
                        <div className="infoContainer ">
                            <p className="tRight">
                                <span>MANIGUETA</span><br/>
                                Con esta herramienta, hacemos pasar la tinta por la tela de nuestro SHABLON.<br/>
                                Consta de dos partes: Mango o cuerpo de aluminio o madera y una hoja de goma.<br/>
                                La goma puede tener diferentes ángulos y también diferentes grados de dureza.<br/>
                                *También se puede utilizar para colorar emulsión*
                            </p>
                        </div>
                        <div className="imgContainer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/Images/curso/manigueta2.svg" alt="espatula" />
                        </div>
                    </div>

                    <div className="hContainer">
                        <div className="imgContainer imgMobile">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/Images/curso/bisagra2.svg" alt="tinta" />
                        </div>
                        <div className="imgContainer">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/Images/curso/bisagra2.svg" alt="tinta" />
                        </div>
                        <div className="infoContainer ">
                            <p className="tLeft">
                                <span>BISAGRA</span><br/>
                                Existen diferentes formas y tamaños.<br/>
                                Para iniciar, recomiendo invertir primero en este tipo de herramientas, ya que su costo no es elevado y permite practicar sin limitaciones.<br/>
                                SI está dentro de tus posibilidades, también podrás invertir en una Calesita, o mesas lineales.
                            </p>
                        </div>
                    </div>
                </div>


            </div>

            <div className="action">
                <h3>PASAR A LA ACCIÓN</h3>
                <h4>Aula invertida</h4>
                <p>Ahora, ya conoces algunos de los materiales básicos para poder comenzar a trabajar, pero falta algo MUY IMPORTANTE: <br/><span>EL DISEÑO</span></p>
                
                <div className="example">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/Images/curso/ejemplo.svg" alt="ejemplo" />
                    <p>Ejemplo, de <span>DISEÑO DIGITAL</span> que contiene lineas y tramas de punto para crear efecto de sombra y volumen. </p>
                </div>

                <p>
                    Para la creación de los diseños en formato digital, es necesario tener en cuenta algunos detalles, ya que pasar una idea desde un formato virtual/digital a la realidad puede tener sus limitaciones a la hora de aplicarlo. A continuación, te dejo unos consejos para que puedas aplicar :) 
                </p>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="consejos">
                    <p>Usar máxima calidad, mínomo 300 dpi</p>
                    <p>Usar Formatos AI, PDF o PNG</p>
                    <p>Tamaño maximo 35x40cm, consultar por mayores medidas</p>
                    <p>Valor de línea: Superior a 1pt</p>
                    <p>Tipografías: superior a 8pt., convertidas a CURVAS</p>
                    <p>Enviar referencia de colores específicas</p>
                    <p>Archivos separados por color a estampar</p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/Images/curso/logo.svg" alt="ejemplo" />

                </div>
                <p>Trabajar con el paquete de ADOBE (Photoshop, Illustrator), permite tener mayores posibilidades, te aconsejo que siempre trabajes en CMYK, para lograr una impresión 100% negra modificando los valores del color de tu diseño. A continuación, te dejo unos consejos para que puedas aplicar :)</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/Images/curso/palette.png" alt="paleta" className="paleta" />

                <div className="digital">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/Images/curso/fibra2.svg" alt="fibra" />
                    <p>
                        <span>DISEÑO ANALOGICO/MANUAL</span><br/>
                        Esta es una opción más experimental, creativa. <br/>
                        Podés utilizar fibrones, estilógrafos, fibras.<br/>
                        <span>IMPORTANTE! </span><br/>
                        Tu dibujo, palabra, etc. deberá ser plasmado sobre papel vegetal o filmina.<br/>
                        El cual deberá ser NEGRO (Los colores plenos deberán ser bien trabajados, y las líneas no podrán ser muy finas).
                    </p>

                </div>
            </div>
        </div>

    </Layout>
  )
}

export default Curso