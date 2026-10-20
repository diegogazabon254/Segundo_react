import './App.css';
import Curso from './components/Curso';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RegistroAprendiz from './components/RegistroAprendiz';
function App() {
 
  function saludar() {
  alert('Bienvenido a nuestro centro Nacional Colombo aleman');
 }

 

return (
  <div>
    
    <Header />
    <Navbar />

    <main id ='Inicio'>
      <h2>Bienvenido a nuestro centro de formación</h2>
      <section id='Cursos'>
      <h2>Nuestros Cursos</h2>
      <button onClick={saludar}> Haz click aqui</button>
      <Curso 
        nombre='Desarollo web'
        descripcion='Ofrecemos una gran variedad de cursos de desarollo web, desde HTML y CSS hasta JavaScript y frameworks modernos como React y Angular'
    />
      <Curso 
        nombre='Bases de datos'
        descripcion='Aprende a diseñar, implementar y administrar bases de datos relacionales y no relacionales, utilizando herramientas como MySQL, PostgreSQL y MongoDB'
        />

      <Curso 
      nombre='Inteligencia artificial'
      descripcion='Explora el fascinante mundo de la inteligencia artificial y aprende a desarrollar modelos de aprendizaje automático, redes neuronales y procesamiento de lenguaje natural'

      />

      <Curso 
        nombre='Programación en Python'
        descripcion='Domina el lenguaje de programación Python y aplica tus conocimientos en proyectos reales, desde programación básica hasta desarrollo de aplicaciones web y análisis de datos'
      />

      <Curso 
      nombre='Programación en Java'
      descripcion='Aprende a programar en Java, uno de los lenguajes más populares y versátiles, y desarrolla aplicaciones de escritorio, móviles y web'
      />

      </section>

      <section id='Nosotros'>
      <h2>Sobre nosotros</h2>
      <p> Somo un centro un centro de formación comprometido con el desarollo de nuestros estudiantes y la excelencia educativa</p>


      </section>

      <section id='Contacto'>
      <h2>Contacto</h2>
      <p> Puedes contactarnos atravez de nuestro correo electronico o número de teléfono para más información sobre nuestros cursos</p>
      <p>  </p>
      </section>
      
      
      <RegistroAprendiz/>

    </main>
    <h2>Otros cursos</h2>    
    <p>Explora más opciones de aprendizaje en nuestra plataforma</p>

    <Footer/>
  </div>
  );
}
export default App