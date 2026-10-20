import {useState} from 'react';
function Curso(props) {
  const [interesados, setInteresados] = useState(0);
  const [inscritos, setInscritos] = useState(0);


  function agregarInteresado() {
    setInteresados(interesados + 1);
  }
  function mostrarMensaje() {
    alert(`¡Bienvenido al curso de ${props.nombre}!`);
  }

  function inscribirme() {
  alert(`¡Te inscribiste a ${props.nombre}!`)
  setInscritos(inscritos + 1);
 }
  return (
    <article>
      <h2>{props.nombre}</h2>
      <p>{props.descripcion}</p>
      <button onClick={mostrarMensaje}>Mostrar mensaje</button>
      <p>   </p>
      <button onClick={inscribirme}>Inscribirme</button>
      <p> </p>
      <button onClick={agregarInteresado}>Me interesa</button>
      <p>Interesados: {interesados}</p>
      <p>Inscritos: {inscritos}</p>
    </article>
  );
}
export default Curso;

