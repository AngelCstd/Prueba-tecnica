import { CalculoSerie } from "../Utils/CalculoSerie.js";
import { Resultado } from "../components/Resultado.jsx";
import { Form } from "../components/Form.jsx";
import { styled } from "styled-components";
import { useState } from "react";

export function SerieContainer() {
  const [resultado, setResultado] = useState(0)

  const calcularValor = (value) => {
    setResultado(CalculoSerie.serie(value))
  }

  return (
    <SerieContainerStyled>
      <Resultado
        resultado={resultado} />
      <Form
        onSubmit={calcularValor} />
    </SerieContainerStyled>
  )
}

const SerieContainerStyled = styled.div`
  width: 100%;
  max-width: 500px;
  height: fit-content;
  background-color: var(--color-100);
  box-shadow:  0 2px 40px var(--color-950);
  margin: 0 auto;
  border: 1px solid var(--color-500);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 12px;
`