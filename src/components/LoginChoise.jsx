import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const LoginChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f4f3; /* Light greenish background */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  background-color: #6b8f71; /* Darker green for the header */
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  background-color: green; /* Soft green for the title */
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s;

  &.profesor {
    background-color: #83b587; /* Green for the professor button */
  }

  &.estudiante {
    background-color: #9fc89e; /* Lighter green for the student button */
  }

  &.profesor:hover {
    background-color: green; /* Darker green on hover for professor button */
  }

  &.estudiante:hover {
    background-color: green; /* Darker green on hover for student button */
  }
`;

const LoginChoice = () => {
  return (
    <LoginChoiceContainer>
      <Content>
        <Title>Ingresa como</Title>
        <Buttons>
          <Button to="/profesor" className="profesor">Profesor</Button>
          <Button to="/estudiante" className="estudiante">Estudiante</Button>
        </Buttons>
      </Content>
    </LoginChoiceContainer>
  );
};

export default LoginChoice;
