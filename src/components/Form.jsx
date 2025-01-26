import { SendIcon } from "../assets/icons.jsx";
import { styled } from "styled-components";
import { useState } from "react";

export function Form({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    if (value === "") return

    onSubmit(parseInt(value))
    setValue("")
  }

  return (
    <FormStyled onSubmit={handleSubmit}>

      <LabelStyled>
        Ingresa un número
      </LabelStyled>

      <InputNumberStyled
        type="number"
        min={0}
        value={value}
        onChange={(e) => { setValue(e.target.value) }}
        placeholder={" "}
      />

      <ButtonSubmitStyled type="submit">
        <SendIcon />
      </ButtonSubmitStyled>

    </FormStyled>
  )
}


const FormStyled = styled.form`
  padding: 10px 0;
  width: 100%;
  max-width: 500px;
  position: relative;`

const LabelStyled = styled.label`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 10px;
  transform: translateY(22px);
  color: #888;
  padding: 0 3px;
  font-size: 15px;
  transition: transform 0.3s ease-out, font-size 0.3s ease-out, color 0.5s ease-out, 
  background-color 0.1s 0.2s ease-out;
  
  &:has(+ input:focus),
  &:has(+ input:not(:placeholder-shown)) {
    color: var(--color-600);
    background-color: var(--color-100);
    transform: translateY(0);
    font-size: 0.8rem;
    z-index: 2;
  }`

const InputNumberStyled = styled.input`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 50px;
  border: 2px solid var(--color-500);
  border-radius: 5px;
  background-color: transparent;
  padding: 0 10px;
  font-size: 1rem;

  &:focus,
  &:not(:placeholder-shown) {
    outline: none;
    border: 2px solid var(--color-700);
  }`

const ButtonSubmitStyled = styled.button`
  position: absolute;
  z-index: 2;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 50px;
  width: 50px;
  border: none;
  background-color: transparent;
  color: var(--color-700);
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: var(--color-800);
  }
  
  &:active {
    color: var(--color-900);
  }`