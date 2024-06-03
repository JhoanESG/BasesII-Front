import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StudentContext } from './context/StudentProvider';

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #4CAF50;
  color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 16px;
`;

const UserName = styled.span`
  padding-top: 30px;
  font-size: 18px;
`;

const Title = styled.h2`
  margin-top: 50px;
  text-align: center;
  color: #333;
`;

const ExamHistory = styled.div`
  padding: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableHeader = styled.th`
  background-color: #e0f7fa;
  color: #00796b;
  padding: 8px;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`;

const ActionButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 12px;
  margin: 4px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const BackButton = styled.button`
  background-color: #00796b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  margin: 0 auto 16px;

  &:hover {
    background-color: #004d40;
  }
`;

const ListarExamenes2 = () => {
  const { studentGroup, studentId } = useContext(StudentContext);
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const examPromises = studentGroup.map(groupId => 
          fetch(`http://localhost:9009/examenes/listarExamenesPorGrupo/${groupId}`)
            .then(response => response.json())
        );
        const examsArray = await Promise.all(examPromises);
        const allExams = examsArray.flat(); // Combina los arrays de exámenes
        setExams(allExams);
      } catch (error) {
        console.error('Error fetching exams:', error);
      }
    };

    if (studentGroup.length > 0) {
      fetchExams();
      console.log(exams);
    }
  }, [studentGroup]);

  return (
    <Container>
      <Title>Estructura Diurno 01</Title>
      <ExamHistory>
        <h3>Historial De Exámenes</h3>
        <Table>
          <thead>
            <tr>
              <TableHeader>Nombre Examen</TableHeader>
              <TableHeader>Tipo</TableHeader>
              <TableHeader>Duración</TableHeader>
              <TableHeader>Estado</TableHeader>
              <TableHeader>Contenido Nombre</TableHeader>
              <TableHeader>Grupo Nombre</TableHeader>
              <TableHeader>Acciones</TableHeader>
            </tr>
          </thead>
          <tbody>
            {exams.map(exam => (
              <TableRow key={exam.id}>
                <TableCell>{exam.nombre}</TableCell>
                <TableCell>{exam.tipoExamen}</TableCell>
                <TableCell>{exam.duracion}</TableCell>
                <TableCell>{exam.estadoPublicacion}</TableCell>
                <TableCell>{exam.idContenido.nombre}</TableCell>
                <TableCell>{exam.gruposIdGrupo.nombreGrupo}</TableCell>
                <TableCell>
                  <ActionButton>Ver</ActionButton>
                  <ActionButton>Eliminar</ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
        <Link to={`/home_estudiante/${studentId}`} style={{
          color: "white",
          textAlign: "center",
          textDecoration: "none",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          display: "block",
          margin: "0 auto 16px",
          background: "#00796b",
        }}>
          Regresar
        </Link>
      </ExamHistory>
    </Container>
  );
};

export default ListarExamenes2;
