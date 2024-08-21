import styled from "styled-components";

export const GradiantText = styled.span`
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      90deg,
      var(--neon-blue) 15%,
      var(--neon-green) 50%,
      var(--neon-pink) 85%
    );
    -webkit-background-clip: text;
    background-clip: text;
  }
`;
