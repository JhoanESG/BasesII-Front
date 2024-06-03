import React from 'react';

const Opciones = () => {
  return (
    <div style={{
      backgroundColor: '#e8f5e9',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center'
    }}>
      <h2>CURSO</h2>
      <ul style={{
        listStyle: 'none',
        padding: 0
      }}>
        <li className="opcion" style={{
          marginBottom: '15px'
        }}>
          <a href="#" style={{
            display: 'block',
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease'
          }}>Ver exámenes en curso</a>
        </li>
        <li className="opcion" style={{
          marginBottom: '15px'
        }}>
          <a href="#" style={{
            display: 'block',
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease'
          }}>Ver historial de exámenes</a>
        </li>
        <li className="opcion" style={{
          marginBottom: '15px'
        }}>
          <a href="#" style={{
            display: 'block',
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease'
          }}>Crear examen</a>
        </li>
      </ul>
    </div>
  );
};

export default Opciones;
