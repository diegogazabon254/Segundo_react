import {useState} from 'react';



function RegistroAprendiz() {
const [nombre, setNombre] = useState('');
const[mensaje, setMensaje] = useState ("");


function ManejarEnvio(evento){
    evento.preventDefault();
if(nombre.trim() === ""){
            setMensaje("Por favor completa todos los campos");
            return;
        }

        setMensaje(`¡Hola, ${nombre}!`);
        setNombre("");
        
    }

return (
    <div>

    <h2>Registro de Aprendiz</h2>

    <form onSubmit={ManejarEnvio}>

    <label>Escribe tu nombre:</label>

    <input
    type="text"
    placeholder="Ingresa tu nombre"
    value={nombre}
    onChange={(evento) => setNombre(evento.target.value)}

        />
        <p></p>
        <button type='submit'>
            Enviar formulario
           </button>
</form>
{mensaje && <p>{mensaje}</p>}
</div>
)
}

export default RegistroAprendiz;