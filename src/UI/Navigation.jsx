import { motion } from "framer-motion";
import styled from "styled-components";

const StyledNavigation = styled.ol`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  counter-reset: nav-item 0;
`;

const NavItem = styled(motion.li)`
  font-size: var(--sm-text);
  counter-increment: nav-item 1;

  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: var(--neon-purple);
  }
`;

const NavLink = styled.a`
  padding: 1rem;

  &::before {
    content: "0" counter(nav-item) ".";
    font-size: 1.2rem;
    color: var(--neon-purple);
    margin-right: 0.5rem;
  }
`;

export default function Navigation({}) {
  return (
    <StyledNavigation>
      <NavItem>
        <NavLink href="#who-i-am">who I am ?</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#what-i-offer">what I offer ?</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#works">works</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#contact-me">contact</NavLink>
      </NavItem>
    </StyledNavigation>
  );
}
