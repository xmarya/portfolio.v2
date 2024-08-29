import styled from "styled-components"
import Navigation from "./Navigation";
import Logo from "./Logo";
import Language from "./Language";
import { motion } from "framer-motion";
import { delay } from "framer-motion";

const StyledHeader = styled(motion.header)`
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 5rem;
`;

const navigationVariants = {
    initial: {
        y: 50,
        opacity: 0
    },
    animate: (stagger) => ({
        y:0,
        opacity: 1,
        transition: {
            delay: 1, // 1 is to delay until the hero animation completes,
            ease: "easeIn"
            /*
            delayChildren: 0, // this will set a delay before the children start animating
            staggerChildren: 0.3 // this will set the time inbetween children animation
            */
        }
    })
    
}

export default function Header() {
    // FIXME: the animation here is so stupid, fix it to be similar to the way the page animations are
    return (
        <StyledHeader variants={navigationVariants}>
            <Logo parentVariants={navigationVariants}/>         
            <Navigation parentVariants={navigationVariants}/>
            <Language parentVariants={navigationVariants}/>
        </StyledHeader>
    )
}

