import { styled } from "styled-components";

export function Resultado({ resultado }) {
  return (
    <ContainerResultadoStyled>
      <ResultadoTextStyled>{resultado}</ResultadoTextStyled>
    </ContainerResultadoStyled>
  )
}

const ContainerResultadoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10rem;
  background-color: var(--color-700);
  color: var(--color-100);
  font-size: 1.7rem;
  border-radius: 8px;
  border: 2px solid var(--color-50);
  width: 100%;
  padding: 1rem;
  max-width: 500px;`

const ResultadoTextStyled = styled.h2`
  width: 100%;
  text-align: center;
  word-wrap: break-word;
`