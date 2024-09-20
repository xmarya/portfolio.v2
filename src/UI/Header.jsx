import styled from "styled-components"
import Navigation from "./Navigation";
import Logo from "./Logo";
import Language from "./Language";
import { motion } from "framer-motion";

const StyledHeader = styled(motion.header)`
    height: 8rem;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    justify-content: center;
    /* margin: 0 5rem; */
`;

// const navigationVariants = {
//     initial: {
//         y: 75,
//         opacity: 0
//     },
//     animate: (stagger) => ({
//         y:0,
//         opacity: 1,
//         transition: {
//             ease: "easeIn",
//             delay: 1, // 1 is to delay until the hero animation completes,
//             /*
//             delayChildren: 0, // this will set a delay before the children start animating
//             staggerChildren: 0.3 // this will set the time inbetween children animation
//             */
//         }
//     })
    
// }

export default function Header() {
    return (
        <StyledHeader>
            {/* <Logo/>          */}
            <Navigation/>
            {/* <Language/> */}
        </StyledHeader>
    )
}

