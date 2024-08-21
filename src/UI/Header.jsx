import styled from "styled-components"
import Navigation from "./Navigation";
import Logo from "./Logo";
import Language from "./Language";

const StyledHeader = styled.header`
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 5rem;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Logo/>         
            <Navigation/>
            <Language/>
        </StyledHeader>
    )
}

