import styled from "styled-components";
import { navLinks } from "../data/navLinks";

const StyledNavigation = styled.ol`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  counter-reset: nav-item 0;
`;

const NavItem = styled.li`
  font-size: var(--md-text);
  counter-increment: nav-item 1;

  transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: var(--neon-purple);
  }
`;

export const NavLink = styled.a`
  padding: 1rem;

  &::before {
    content: "0" counter(nav-item) ".";
    font-size: 1.2rem;
    color: var(--neon-purple);
    margin-right: 0.5rem;
  }
`;

function handleNavigation(link) {
  let home = window.location.origin;
  window.location.replace(home + link)
}

export default function Navigation() {
  return (
    <StyledNavigation>
      {
        navLinks.map((nav, index) =>
          <NavItem key={index}>
            <NavLink onClick={() => handleNavigation(nav.link)} href={nav.link}>{nav.nav}</NavLink>
          </NavItem>
        )
      }
    </StyledNavigation>
  );
}
