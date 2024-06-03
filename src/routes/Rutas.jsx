import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "../components/Home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CrearExamen } from "../components/CrearExamen"
import IngresoProfesor from "../components/IngresoProfesor";
import IngresoEstudiante from "../components/IngresoEstudiante";
import LoginChoice from "../components/LoginChoise";
import { Home2 } from "../components/Home2";
import { ProfessorProvider } from "../components/context/ProfessorProvider";
import ListarExamenes from "../components/ListarExamenes";
import { ResponderExamen } from "../components/ResponderExamen";
import { StudentProvider } from "../components/context/StudentProvider";
import ListarExamenes2 from "../components/ListarExamenes2";

export const Rutas = () => {
    return (
        <StudentProvider>
            <ProfessorProvider>
                <BrowserRouter>
                    {/* LAYOUT */}
                    <Header />
                    {/* CONTENIDO CENTRAL Y RUTAS */}
                    <Routes>
                        <Route path="/" element={<LoginChoice />} />
                        <Route path="/profesor" element={<IngresoProfesor />} />
                        <Route path="/estudiante" element={<IngresoEstudiante />} />
                        <Route path="/home_profesor/:id" element={<Home />} />
                        <Route path="/home_estudiante/:id" element={<Home2 />} />
                        <Route path="/crear_examen" element={<CrearExamen />} />
                        <Route path="/responder_examen" element={<ResponderExamen />} />
                        <Route path="/listarExamenes/:id" element={<ListarExamenes />} />
                        <Route path="/listarExamenesEstudiante/:id" element={<ListarExamenes2 />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </ProfessorProvider>
        </StudentProvider>
    );
}