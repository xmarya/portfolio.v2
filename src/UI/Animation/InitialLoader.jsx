import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const LoaderContainer = styled.ul`
    background-color: var(--colour-grey-900);;
    width: 100svw;
    height: 100svh;
    /* position: relative; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

`;

const LoadingNeon = styled(motion.li)`
    display: block;
    color: var(--colour-grey-300);
    font-size: var(--section-heading);
`;

const loadingVariants = {
    initial: {
        textShadow: "2px 0px 15px rgb(176, 123, 255),-2px 0px 15px rgb(176, 123, 255)",
        
    },

    animate: {
        textShadow: "1px 0px 5px rgb(176, 123, 255),-1px 0px 5px rgb(176, 123, 255)",
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeIn"

        },
    },

    exit: (index) => ({
        opacity:0,
        y: -75,
        transition: {
            deuration: 0.5,
            delay: 0.03 * index
        }})
}


export default function InitialLoader({isLoading}) {
    // let direction = "";
    const word = "LOADING".split("");

    // function handleDirection(index) {
    //     index % 2 === 0 ? direction = "top" : direction = "bottom";
    // }

    return (
        <LoaderContainer>
            {/* TODO: add AnimatePresence the options  */}
            <AnimatePresence 
            // Disable ani nitial animations on the children they are
            // present when the component is firest rendered
            // initial={false}
            // finish the exit animation before the rendering of the other components
            mode="wait"
            // fires when all the exiting nodes have completed animating out
            onExitComplete={() => null}
            >
                {
                isLoading &&
                word.map((letter,index) => 
                    { 
                    // handleDirection(index);
                    return (
                        <LoadingNeon key={index}  variants={loadingVariants} initial="initial" animate="animate" exit="exit" custom={index}>
                            {letter}
                        </LoadingNeon>
                    )
                 }   
                )}
            </AnimatePresence>
        </LoaderContainer>
    )
}

