import styled, { css } from "styled-components";
import { Global } from "../../styles/theme";
import { ButtonProps } from "./ContactFormTypes";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${Global.colors.text.primary};
  font-family: ${Global.fonts.fontFamily};
  font-size: 5rem;
  font-weight: 200;

  @media (max-width: ${Global.breakpoints.sm}px) {
    font-size: 2.5rem;
  }

  > span {
    color: transparent;
    -webkit-text-stroke: 1px ${Global.colors.text.primary};
  }

  & > svg {
    stroke-width: 10;
    fill: none;
    stroke: ${Global.colors.text.primary};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputLabel = styled.label`
  color: ${Global.colors.text.primary};
  font-family: ${Global.fonts.fontFamily};
  font-weight: 300;
  font-style: italic;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  font-family: ${Global.fonts.fontFamily};
  font-size: 1.5rem;
  font-weight: 300;
  color: ${Global.colors.text.primary};
  border-bottom: 1px solid ${Global.colors.text.primary};
`;

export const InputContainer = styled.div`
  margin-top: 2rem;
  width: 90%;
  min-width: 300px;
  display: flex;
  flex-direction: column-reverse;
`;

export const TextArea = styled.textarea`
  background: transparent;
  border: 1px solid ${Global.colors.text.primary};
  font-family: ${Global.fonts.fontFamily};
  font-size: 1.5rem;
  font-weight: 300;
  padding: 0.5rem;
  color: ${Global.colors.text.primary};
  resize: none;
`;

export const SubmitButton = styled.div<ButtonProps>`
  ${(props) =>
    !props.isSubmitting &&
    css`
      cursor: pointer;
    `}
  margin-top: 5px;
  transition: all 300ms ease;
  will-change: color, background-color;
  padding: 0.5rem;
  font-weight: 200;
  font-size: 2rem;
  font-family: ${Global.fonts.navigationItem?.fontFamily};

  color: ${Global.colors.text.primary};
  background-color: transparent;
  border: 1px solid ${Global.colors.text.primary};

  &:hover {
    ${(props) =>
      !props.isSubmitting &&
      css`
        color: ${Global.colors.background.primary};
        background-color: ${Global.colors.text.primary};
      `}
  }
`;
