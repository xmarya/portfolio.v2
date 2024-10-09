import styled, { css } from "styled-components";

export const Divider = styled.span`
display: block;
background-color: var(--colour-grey-500);
opacity: 0.6;

    ${props => {
        switch (props.type) {
            case "vertical":
                return css`
                width: 1px;
                height: 80%;
                `;
                    
            default:
                return css`
                width: 80%;
                height: 1px;
                margin-block: 2rem;

                `;
        }
    }}
`;