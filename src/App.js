import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";
import logo from "./logo.svg";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

const Logo = styled.img`
  height: 230px;
  width: 230px;
`;

function App() {
  // state de frases
  const [frase, guardarFrase] = useState([
    
  ]);

  const consultarAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    guardarFrase(frase[0]);
  };

  // Cargar una frase
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Contenedor>
      <Logo src={logo} />
      <Frase frase={frase} />
      <Boton onClick={consultarAPI}>Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
