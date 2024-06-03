import React from 'react';

const Historial = () => {
  return (
    <div style={{
      backgroundColor: '#e8f5e9',
      padding: '20px',
      borderRadius: '10px'
    }}>
      <h2>Historial de exámenes</h2>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
        <thead>
          <tr>
            <th style={{
              backgroundColor: '#28a745',
              color: 'white'
            }}>Nombre</th>
            <th style={{
              backgroundColor: '#28a745',
              color: 'white'
            }}>Fecha Creación</th>
            <th style={{
              backgroundColor: '#28a745',
              color: 'white'
            }}>Estado</th>
            <th style={{
              backgroundColor: '#28a745',
              color: 'white'
            }}>Tema</th>
            <th style={{
              backgroundColor: '#28a745',
              color: 'white'
            }}>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Consultas sql</td>
            <td>11/03/2024</td>
            <td>Finalizado</td>
            <td>Bases de datos</td>
            <td>
              <a href="#" className="btn-ver" style={{
                display: 'inline-block',
                padding: '5px 10px',
                backgroundColor: '#28a745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                marginRight: '5px'
              }}>Ver...</a>
              <a href="#" className="btn-eliminar" style={{
                display: 'inline-block',
                padding: '5px 10px',
                backgroundColor: '#dc3545',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px'
              }}>Eliminar</a>
            </td>
          </tr>
          <tr>
            <td>Consultas sql</td>
            <td>11/03/2024</td>
            <td>Finalizado</td>
            <td>Bases de datos</td>
            <td>
              <a href="#" className="btn-ver" style={{
                display: 'inline-block',
                padding: '5px 10px',
                backgroundColor: '#28a745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                marginRight: '5px'
              }}>Ver...</a>
              <a href="#" className="btn-eliminar" style={{
                display: 'inline-block',
                padding: '5px 10px',
                backgroundColor: '#dc3545',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px'
              }}>Eliminar</a>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn-regresar" style={{
        display: 'block',
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>Regresar</button>
    </div>
  );
};

export default Historial;
