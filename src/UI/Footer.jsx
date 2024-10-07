import { FaInstagram, FaTiktok } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import styled from "styled-components";

import { Link } from "react-router-dom";

const SocialIcons = styled.ul`
  height: 10rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  svg {
    width: clamp(1.5rem, 3rem, 3.5rem);
    height: clamp(1.5rem, 3rem, 3.5rem);

    &:hover {
      fill: var(--neon-purple);
      transition: fill 0.15s ease-in;
    }
  }
`;

export default function Footer() {
  return (
    <footer className="bg-gray-800 flex flex-col items-center">
      <SocialIcons>
        <Link to="https://www.instagram.com/marya.webfullstack" target="_blank">
          <FaInstagram />
        </Link>

        <Link to="https://www.tiktok.com/@marya.webfullstack" target="_blank">
          <FaTiktok />
        </Link>

        <Link to="https://github.com/xmarya/" target="_blank">
          <TbBrandGithubFilled />
        </Link>
      </SocialIcons>
      <p className="text-lg italic">made with ☕ and a sprinkle of passion ✨</p>
    </footer>
  );
}
