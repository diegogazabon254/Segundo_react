import {useState} from 'react';



function RegistroAprendiz() {
const [nombre, setNombre] = useState('');
return (
<div>

    <h2>Registro de Aprendiz</h2>

    <label>Escribe tu nombre:</label>
<input
type="text"
placeholder="Ingresa tu nombre"
value={nombre}
onChange={(lex) => setNombre(lex.target.value)}

/>


<p> Bienvendio,{nombre}</p>
</div>
)
}

export default RegistroAprendiz;