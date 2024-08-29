import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";


const Container = styled.div`
    position: relative;
    width: ${(props) => props.width};
    overflow: hidden;
`;

const Warapper = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    top:4px;
    left: 0;
    right: 0;
    bottom: 4px;
    background: var(--neon-purple);
    z-index: 10;

`;


const childrenVariants = {
    initial:{
        opacity: 0,
        y:75
    },
    animateChildren:{
        opacity:1,
        y:0,
        transition: {
            ease: "easeIn",
            duration: 0.5,
            delay: 0.3
        }
    },
}

const wrapperVriants = {
    initial: {left: 0},
    animateWrapper: {
        left: "100%",
        transition: {
            duration: 0.5,
            ease: "easeIn"
        }
    }
}


export default function AnimatedWrapper({children, width ="fit-content"}) {
    const targetRef = useRef(null);

    const isInView = useInView(targetRef, {once: true});
    const controls = useAnimation();

    useEffect(() =>{
        if (isInView) {
            // await controls.start("animateWrapper");
            // await controls.start("animateChildren");
            controls.start("animateWrapper");
            controls.start("animateChildren");
        }
         
    }, [isInView]);

    return (
        <Container ref={targetRef} width={width}>
            <motion.div
                variants={childrenVariants}
                initial="initial"
                animate={controls}
                >
                {children}
            </motion.div>
            <Warapper variants={wrapperVriants} initial="initial" animate={controls}/>
        </Container>
    )
}

