import {
  Section,
  NavContainer,
  NavLink,
  Logo,
  SocialsContainer,
  Registration,
} from "./styled";
import MaskedVideoLayer from "../../Components/MaskVideoLayer";
import BackgroundVideoLayer from "../../Components/VideoBackgroundLayer";
import { useState } from "react";

const navLinks = ["Anthem", "Metrotown", "Ethos", "Residencies", "Floor Plans"];

const Navigation = () => {
  const [isAltVideoActive, setIsAltVideoActive] = useState(false);

  return (
    <Section>
      <Registration>
        <a>Join Us</a>
        <img src="/static/icon-close.svg" alt="Close" />
      </Registration>
      <NavContainer>
        {navLinks.map((label) => (
          <NavLink
            onMouseEnter={() => setIsAltVideoActive(true)}
            onMouseLeave={() => setIsAltVideoActive(false)}
            key={label}
            href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {label}
            <img src="/static/active-underline.svg" alt="Underline" />
          </NavLink>
        ))}
      </NavContainer>

      <SocialsContainer>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.svg" alt="Twitter" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a>
      </SocialsContainer>

      <MaskedVideoLayer
        src="/motion/home_hero.webm"
        $isActive={!isAltVideoActive}
        top="6vh"
        left="6vw"
        width="20%"
        height="70%"
      />

      <MaskedVideoLayer
        src="/motion/residences_hero.webm"
        $isActive={isAltVideoActive}
        top="6vh"
        left="6vw"
        width="20%"
        height="70%"
      />
      <Logo src="/static/logo-ethos-full.svg" alt="Ethos Metrotown" href="/" />

      <BackgroundVideoLayer
        src="/motion/home_hero.webm"
        $isActive={!isAltVideoActive}
      />

      <BackgroundVideoLayer
        src="/motion/residences_hero.webm"
        $isActive={isAltVideoActive}
      />
    </Section>
  );
};

export default Navigation;
