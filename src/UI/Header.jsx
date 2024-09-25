import styled from "styled-components"
import Navigation from "./Navigation";
import Logo from "./Logo";
import Language from "./Language";
import { motion } from "framer-motion";
import useWindowSize from "../helpers/useWindowSize";
import HamburgerNav from "./HamburgerNav";

const StyledHeader = styled(motion.header)`
    height: 8rem;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    justify-content: center;
    /* margin: 0 5rem; */
`;


export default function Header() {
    const {width} = useWindowSize();
    return (
        <StyledHeader>
            {/* <Logo/>          */}
            {
                width > 600 ? <Navigation/> : <HamburgerNav/>
            }
            {/* <Language/> */}
        </StyledHeader>
    )
}

