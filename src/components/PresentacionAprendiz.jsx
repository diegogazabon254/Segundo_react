import { useState } from "react";
function PresentacionAprendiz (){
    const [nombre, setNombre] = useState("");
    const [curso, setCurso] = useState ("");
    const[mensaje, setMensaje] = useState ("");

    function ManejarEnvio(evento){
        evento.preventDefault();

        if(nombre.trim() === "" || curso.trim() === ""){
            setMensaje("Por favor completa todos los campos");
            return;
        }

        setMensaje(`¡Hola, ${nombre}! te interesa aprender ${curso}.`);
        setNombre("");
        setCurso("");
    }
    return(
        <div>
            <h2>Mi presentacion</h2>
            <form onSubmit={ManejarEnvio}>
            <label htmlFor = "nombrePresentacion">Escribe tu nombre: </label>
            <input
              id = "NombrePresentacion"
              type = "text"
              value = {nombre}
              onChange = {(evento) => setNombre (evento.target.value)}
              placeholder = "Ejemplo: LEX"
            />
            <br/>
            <br/>

            <label htmlFor="cursoPresentacion">¿que curso te interesa?</label>

            <input
             id = "NombrePresentacion"
              type = "text"
              value = {curso}
              onChange = {(evento)=>setCurso(evento.target.value)}
              placeholder = "Ejemplo: React"
            />
            <div> </div>
            <div> </div>
           <button type='submit'>
            Enviar formulario
           </button>
           </form>
           {mensaje && <p>{mensaje}</p>}
        </div>
    );
}
export default PresentacionAprendiz;