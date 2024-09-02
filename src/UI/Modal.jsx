import styled from "styled-components";
import ContactMe from "../sections/ContactMe";

const StyledModal = styled.div`
    visibility: ${(props) => props.visability};
    position: fixed;
    width: 80svw;
    height: fit-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: var(--lg-radius);
    box-shadow: var(--shadow-lg);
    padding: 3.2rem 4rem;
    /* padding: 2.4rem 4rem; */
    transition: all 0.5s;
`;

const Overlay = styled.div`
    visibility: ${(props) => props.visability};
    position: fixed;
    width: 100svw;
    height: 100svh;
    top: 0;
    left: 0;
    background-color: var(--backdrop-colour);
    backdrop-filter: blur(2px);
    z-index: 1000;
    transition: all 0.5s;
`;


export default function Modal({modaleState = "hidden"}) {
     //useState ?? or useRef ?

    return (
        <Overlay visability={modaleState}>
            <StyledModal visability={modaleState}>
                <ContactMe/>
            </StyledModal>
        </Overlay>
    )
}

