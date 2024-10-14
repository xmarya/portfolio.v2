import { FaInstagram, FaTiktok } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { dictionary } from "../data/dictionary";
import { useLanguageContext } from "../helpers/LanguageContext";
import { Divider } from "./Divider";
import { SectionSubHeading } from "./Headings";
import PeakToNow from "./PeakToNow";
import { WorkStateProvider } from "../helpers/WorkStateContext";
import en from "zod/locales/en.js";

export const StyledFooter = styled.footer`
  background-color: var(--colour-grey-800);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(45rem, 100%), 1fr));
  align-items: stretch;
  justify-content: stretch;
  row-gap: clamp(3.5rem, 6vw, 10rem);

  padding: 1.6rem;

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p.text-lg {
    direction: ltr !important;
    grid-column: 1 / -1;
    flex-direction: column;
  }
`;

export const Brief = styled.div`
  container-type: inline-size;
  flex-direction: column;
  text-align: center;
  padding-top: 1.5rem;

  ${SectionSubHeading} {
    margin-bottom: 1.5rem;
  }

  p {
    max-width: 100%;
    font-size: clamp(1.6rem, 2.5cqi, 2rem);
  }
`;

export const SocialIcons = styled.div`
  gap: 2.5rem;

  svg {
    width: clamp(1.5rem, 2.5rem, 3.5rem);
    height: clamp(1.5rem, 2.5rem, 3.5rem);

    &:hover {
      fill: var(--neon-purple);
      transition: fill 0.15s ease-in;
    }
  }
`;

export default function Footer() {
  const { language } = useLanguageContext();
  const { footer } = dictionary;

  return (
    <StyledFooter>
      <Brief>
        <SectionSubHeading>{footer.brief[language]}</SectionSubHeading>
        <p dangerouslySetInnerHTML={{
           __html: footer.paragraph[language]
        }}/>
      </Brief>

      <SocialIcons>
        <Link
          to="https://www.instagram.com/marya.webfullstack"
          target="_blank"
          aria-label="Instagram account"
        >
          <FaInstagram />
        </Link>

        <Link
          to="https://www.tiktok.com/@marya.webfullstack"
          target="_blank"
          aria-label="Tiktok account"
        >
          <FaTiktok />
        </Link>

        <Link
          to="https://github.com/xmarya/"
          target="_blank"
          aria-label="Github repository"
        >
          <TbBrandGithubFilled />
        </Link>
      </SocialIcons>

      <WorkStateProvider>
        <PeakToNow/>
      </WorkStateProvider>

      <p className="text-lg italic max-w-full">
        <Divider type="horizontal" />
        built with a cup of coffee and a sprinkle of passion.
        <span>&copy;2024</span>
      </p>

    </StyledFooter>
  );
}
