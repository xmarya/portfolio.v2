import styled from "styled-components";
import { useLanguageContext } from "../helpers/LanguageContext";

const Switcher = styled.div`
  direction: ltr !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.15rem solid var(--neon-purple);
  border-radius: var(--sm-radius);

  position: absolute;
  width: 6rem;
  top: 3rem;
  left: 3rem;

  z-index: 500;
  
  /* Elegant shadow and hover effect */
  box-shadow: 0 0 0.75rem rgba(136, 0, 255, 0.3);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 1.5rem rgba(136, 0, 255, 0.6);
  }
`;

const Button = styled.button`
  font-family: "Almarai", sans-serif !important;
  font-size: var(--md-text);
  font-weight: 500;
  flex: 1;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--colour-grey-200);
  position: relative;
  
  /* Gradient border animation on hover */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--sm-radius);
    border: 0.15rem solid transparent;
    background: linear-gradient(to right, var(--neon-purple), var(--neon-blue));
    background-clip: padding-box;
    transition: background 0.3s ease;
  }

  /* Active state styling */
  &[data-active="true"] {
    background: var(--neon-purple);
    color: var(--colour-grey-900);
    box-shadow: 0 0 1rem rgba(136, 0, 255, 0.5);
  }

  &:hover:not([data-active="true"]) {
    color: var(--neon-purple);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function LanguagesButton() {
  const { language, switchLanguage } = useLanguageContext();

  return (
    <Switcher>
      <Button onClick={switchLanguage} disabled={language === "en" && true} data-active={language === "en" && true}>
        E
      </Button>
      <Button onClick={switchLanguage} disabled={language === "ar" && true} data-active={language === "ar" && true}>
        ع
      </Button>
    </Switcher>
  );
}
