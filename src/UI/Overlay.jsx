import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import styled from "styled-components";

const Backdrop = styled(motion.div)`
    visibility: ${(props) => props.visability};
    position: fixed;
    width: 100svw;
    height: 100svh;
    top: 0;
    left: 0;
    background-color: var(--backdrop-colour);
    backdrop-filter: blur(2px);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Overlay({visability = "hidden", children}) {
    return (
        <AnimatePresence>
            <Backdrop visability={visability}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}>
                {children}
            </Backdrop>
        </AnimatePresence>
    )
}

