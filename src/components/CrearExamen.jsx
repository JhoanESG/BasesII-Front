import React, { useContext, useEffect, useState } from 'react';
import '../components/CrearExamen.css'; // Archivo de estilos CSS para el componente
import { ProfessorContext } from './context/ProfessorProvider';
import Swal from "sweetalert2";

export const CrearExamen = () => {
  const { professorId, professorGrupo } = useContext(ProfessorContext);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipoExamen, setTipoExamen] = useState('');
  const [tiempoLimite, setTiempoLimite] = useState(0);
  const [cantidadPreguntas, setCantidadPreguntas] = useState(0);
  const [cantidadAlumno, setCantidadAlumno] = useState(0);
  const [porcentajeCurso, setPorcentajeCurso] = useState(0);
  const [umbralAprobado, setUmbralAprovado] = useState(0);
  const [estadoPublicacion, setEstadoPublicacion] = useState('');
  const [automatico, setautomatico] = useState('');
  const [idContenido, setIdContenido] = useState(0);
  const [contenidos, setContenidos] = useState([]); // Estado para almacenar los contenidos
  const id_profesor = professorId;
  const profesorGrupo = professorGrupo;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nombre: String(nombre),
      descripcion: String(descripcion),
      cantidadPreguntas: String(cantidadPreguntas),
      cantidadAlumno: String(cantidadAlumno),
      tiempoLimite: String(tiempoLimite),
      tipoExamen: String(tipoExamen),
      porcentajeCurso: String(porcentajeCurso),
      umbralAprobado: String(umbralAprobado),
      estadoPublicacion: String(estadoPublicacion),
      idContenido: String(idContenido),
      id_profesor: String(id_profesor),
      profesorGrupo: String(profesorGrupo),
      automatico: "true"
    };

    console.log(data);

    try {
      const response = await fetch('http://localhost:9009/examenes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: "Examen Creado",
          text: "El examen ha sido creado con éxito.",
          showConfirmButton: false,
          timer: 3000
      });

      setNombre('');
      setDescripcion('');
      setTipoExamen('');
      setTiempoLimite(0);
      setCantidadPreguntas(0);
      setCantidadAlumno(0);
      setPorcentajeCurso(0);
      setUmbralAprovado(0);
      setEstadoPublicacion('');
      setautomatico('');
      setIdContenido(0);
        
      }else{
        Swal.fire({
          icon: 'error',
          title: "Error creando el examen",
          text: "Ha habido un error creando el examen.",
          showConfirmButton: false,
          timer: 3000
      });
        throw new Error('Error en la solicitud: ' + response.statusText);
      }

      const result = await response.json();
      console.log('Examen enviado con éxito:', result);
    } catch (error) {
      console.error('Error al enviar el examen:', error);
    }
  };

  useEffect(() => {
    // Realiza la solicitud fetch a la URL proporcionada
    const fetchContenidos = async () => {
      try {
        const response = await fetch('http://localhost:9009/contenidos/listarContenidos');
        const data = await response.json();
        setContenidos(data);
        console.log(data);
        console.log(profesorGrupo)
        console.log(professorId)
      } catch (error) {
        console.error('Error fetching contenidos:', error);
      }
    };

    fetchContenidos();
  }, []);

  return (
    <div className="contenido">
      <h2 className='texto'>Crear Examen</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <label htmlFor="descripcion">Descripción:</label>
        <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />

        <label htmlFor="cantidadPreguntas">Cantidad de preguntas:</label>
        <input type="number" id="cantidadPreguntas" value={cantidadPreguntas} onChange={(e) => setCantidadPreguntas(e.target.value)} required />

        <label htmlFor="cantidadPreguntasEstudiante">Cantidad de preguntas estudiante:</label>
        <input type="number" id="cantidadPreguntasEstudiante" value={cantidadAlumno} onChange={(e) => setCantidadAlumno(e.target.value)} required />

        <label htmlFor="tiempoLimite">Tiempo límite (en minutos):</label>
        <input type="number" id="tiempoLimite" value={tiempoLimite} onChange={(e) => setTiempoLimite(e.target.value)} required />

        <label htmlFor="tipoExamen">Tipo de examen:</label>
        <textarea id="tipoExamen" value={tipoExamen} onChange={(e) => setTipoExamen(e.target.value)} required />

        <label htmlFor="porcentajeCurso">Porcentaje del curso:</label>
        <input type="number" id="porcentajeCurso" value={porcentajeCurso} onChange={(e) => setPorcentajeCurso(e.target.value)} required />

        <label htmlFor="porcentajeAprobado">Umbral para aprobar:</label>
        <input type="number" id="porcentajeAprobado" value={umbralAprobado} onChange={(e) => setUmbralAprovado(e.target.value)} required />

        <label htmlFor="estadoPublicacion">Estado de publicacion:</label>
        <select id="estadoPublicacion" value={estadoPublicacion} onChange={(e) => setEstadoPublicacion(e.target.value)} required>
          <option value="">Seleccione un estado</option>
          <option value="Borrador">Borrador</option>
          <option value="En curso">En curso</option>
          <option value="Listo">Listo</option>
        </select>

        <label htmlFor="idContenido">Contenido:</label>
        <select id="idContenido" value={idContenido} onChange={(e) => setIdContenido(Number(e.target.value))} required>
          <option value="">Seleccione un contenido</option>
          {contenidos.map(contenido => (
            <option key={contenido.id} value={contenido.id}>{contenido.nombre}</option>
          ))}
        </select>

        <button type="submit" className='button'>Crear Examen</button>
      </form>
    </div>
  );
};