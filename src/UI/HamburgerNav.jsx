import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { useRef, useState } from "react";
import styled from "styled-components";
import { navLinks } from "../data/navLinks";
import { NavLink } from "./Navigation";

const BreadWrapper = styled.div`
  position: fixed;
  top: 3rem;
  right: 3rem;

  z-index: 500;
`;

const MobileNavigation = styled(motion.ol)`
  width: 100%;
  min-height: 70%;
  background-color: var(--colour-grey-800);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  border-bottom-left-radius: var(--lg-radius);
  border-bottom-right-radius: var(--lg-radius);
  box-shadow: var(--shadow-md);
  counter-reset: nav-item 0;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 299;
`;

const MobileNavItem = styled(motion.li)`
  font-size: var(--secondary-heading);
  counter-increment: nav-item 1;

  transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: var(--neon-purple);
  }

  ${NavLink} {

    &::before {
        font-size: var(--xl-text);
    }

  }
`;

export default function HamburgerNav({language}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <BreadWrapper ref={ref}>
        <Hamburger
          color="var(--neon-purple)"
          rounded
          distance="lg"
          hideOutline={true}
          toggled={isOpen}
          size={32}
          toggle={setIsOpen}
          role="button"
          aria-label="Navigation menu"
        />
      </BreadWrapper>
      <AnimatePresence>
        {isOpen && (
          <MobileNavigation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((nav, index) => (
              <MobileNavItem
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + index / 10,
                }}
              >
                <NavLink
                  onClick={() => setIsOpen((open) => !open)}
                  to={`/${nav.link}`}>
                  {nav.nav[language]}
                </NavLink>
              </MobileNavItem>
            ))}
          </MobileNavigation>
        )}
      </AnimatePresence>
    </>
  );
}

// {isOpen && (
//     <StyledNavigation>
//     {
//       navLinks.map((nav, index) =>
//         <NavItem key={index}>
//           <NavLink href={nav.link}>{nav.nav}</NavLink>
//         </NavItem>
//       )
//     }
//   </StyledNavigation>
// )}
