// src/context/ProfessorProvider.js
import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [studentGroup, setStudentGroup] = useState([]);

  const clearStudentData = () => {
    setStudentName('');
    setStudentId('');
    setStudentGroup([]);
  };

  return (
    <StudentContext.Provider value={{ studentName, setStudentName, 
        studentId, setStudentId, studentGroup, setStudentGroup, clearStudentData }}>
      {children}
    </StudentContext.Provider>
  );
};