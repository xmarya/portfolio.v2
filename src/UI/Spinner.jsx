import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";


const rotate = keyframes`
    to {
        transform: rotate(1turn);
    }
`;

export const Spinner = styled(BiLoaderAlt)`
    width: 2rem;
    height: 2rem;
    animation: ${rotate} 1.5s infinite linear;
`;
