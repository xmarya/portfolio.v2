import styled from "styled-components";
import Overlay from "./Overlay";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { HiXMark } from "react-icons/hi2";

const StyledModal = styled(motion.div)`
    
`;

const Button = styled.button`
    position: absolute;
    top: 1.2rem;
    left: 1.9rem;

    &:hover {
        background-color: var(--neon-grey-200);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        color: var(--colour-grey-600);
    }

`;


export default function Modal({showModal = "visible", ref, children, onClose}) {
    return (
        <Overlay visability={showModal}>
            <AnimatePresence>
                <StyledModal visability={showModal} onClick={onClose}> {/* prevent the browser default behaviour of BUBBLING the event, so we can avoid closing the Modal whenever any element inside it was clicked */}
                    <Button onClick={onClose}>
                        <HiXMark/>
                    </Button>
                    <div>
                    {children || ref}
                    </div>
                </StyledModal>
            </AnimatePresence>
        </Overlay>
    )
}

