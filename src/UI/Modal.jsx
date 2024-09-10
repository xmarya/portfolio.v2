import styled from "styled-components";
import ContactMe from "../sections/ContactMe";
import Overlay from "./Overlay";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const StyledModal = styled(motion.div)`
    /* visibility: ${(props) => props.visability}; */
    position: fixed;
    width: clamp(80svh, 70rem, 50svw);
    height: fit-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: var(--lg-radius);
    box-shadow: var(--shadow-lg);
    padding: 3.2rem 4rem;
    /* padding: 2.4rem 4rem; */
    /* transition: all 0.5s; */
`;

const modalVariants = {
    initial:{
        y: "-100vh",
        opacity:0,
    },
    animate: {
        y:0,
        opacity: 1,
        transition: {
            duration: 0.3,
            type: "spring",
            damping: 250,
            stiffness: 50
        }
    },
    exit: {
        y: "100vh",
        opacity:0,
    }
}

export default function Modal({children, onClose}) {
     //useState ?? or useRef ?

    return (
        <Overlay onClick={onClose}>
            <AnimatePresence>
                <StyledModal variants={modalVariants} initial="initial" animate="animate" exit="exit" onClick={event => event.stopPropagation()}> {/* prevent the browser default behaviour of BUBBLING the event, so we can avoid closing the Modal whenever any element inside it was clicked */}
                    {children}
                </StyledModal>
            </AnimatePresence>
        </Overlay>
    )
}

