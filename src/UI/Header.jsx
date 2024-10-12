import styled from "styled-components"
import Navigation from "./Navigation";
import useWindowSize from "../helpers/useWindowSize";
import HamburgerNav from "./HamburgerNav";
import LanguagesButton from "./LanguagesButton";
import { useLanguageSwitcher } from "../helpers/LanguageSwitcher";

const StyledHeader = styled.header`
    height: 8rem;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    justify-content: center;
    /* margin: 0 5rem; */
`;


export default function Header() {
    const {language} = useLanguageSwitcher();
    const {width} = useWindowSize();

    return (
        <StyledHeader>
            {
                width > 600 ? <Navigation language={language}/> : <HamburgerNav language={language}/>
            }
            <LanguagesButton/>
        </StyledHeader>
    )
}

