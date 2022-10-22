import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'sucess';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secundary: 'orange',
  danger: 'red',
  sucess: 'green'
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 0;

  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme.white};
  font-size: 16px;

  /* ${props => {
    return css 
    `background-color: ${buttonVariants[props.variant]}`
  }} */
`