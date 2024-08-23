import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";

const CarouselContainer = styled.div`
    background-color: black;
    width: 350vh;
    position: sticky;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 4rem;
`;

const CarouselCard = styled.div`
    background-color: navy;
    
`;

export default function HorizontalScrollCarousel({targetRef}) {

    const {scrollYProgress} = useScroll({target: targetRef});
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"])
    return (
        <CarouselContainer>
            
        </CarouselContainer>
    )
}

