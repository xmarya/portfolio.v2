import styled from "styled-components";
import { useLanguageContext } from "../helpers/LanguageContext";

const Switcher = styled.div`
  direction: ltr !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.15rem solid var(--neon-purple);
  border-radius: var(--sm-radius);

  position: fixed;
  width: 6rem;
  top: 3rem;
  left: 3rem;

  z-index: 500;
`;

const Button = styled.button`
  font-family: "Almarai", sans-serif !important;

font-size: var(--md-text);
flex: 1;
  transition: all 0.15s ease-in;
  padding: 0.5rem;

  /* border: var(--check); */

  &[data-active ="true"] {
    background-color: var(--neon-purple);
    color: var(var(--colour-grey-200));
  }

  &:hover:not([data-active ="true"]) {
    color: var(--neon-purple);
  }
`;

export default function LanguagesButton() {
  const { language, switchLanguage } = useLanguageContext();

  return (
    <Switcher>
      <Button onClick={switchLanguage} disabled={language === "en" && true} data-active={language === "en" && true}>
        E
      </Button>
      {/* <span>|</span> */}
      <Button onClick={switchLanguage} disabled={language === "ar" && true} data-active={language === "ar" && true}>
        ع
      </Button>
    </Switcher>
  );
}
