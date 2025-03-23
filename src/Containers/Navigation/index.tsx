import {
  Section,
  MaskedVideoContainer,
  MaskedVideo,
  VideoBackgroundContainer,
  VideoBackground,
  NavContainer,
  NavLink,
  Logo,
  SocialsContainer,
  Registration,
} from "./styled";
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

      <MaskedVideoContainer isActive={!isAltVideoActive}>
        <MaskedVideo 
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/motion/home_hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </MaskedVideo>
      </MaskedVideoContainer>

      <MaskedVideoContainer  isActive={isAltVideoActive}>
        <MaskedVideo
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/motion/residences_hero.webm" type="video/webm" />
        </MaskedVideo>
      </MaskedVideoContainer>
      <Logo src="/static/logo-ethos-full.svg" alt="Ethos Metrotown" href="/" />

      <VideoBackgroundContainer isActive={!isAltVideoActive}>
        <VideoBackground autoPlay muted loop playsInline preload="auto">
          <source src="/motion/home_hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </VideoBackground>
      </VideoBackgroundContainer>
      <VideoBackgroundContainer isActive={isAltVideoActive}>
        <VideoBackground autoPlay muted loop playsInline preload="auto">
          <source src="/motion/residences_hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </VideoBackground>
      </VideoBackgroundContainer>
    </Section>
  );
};

export default Navigation;
