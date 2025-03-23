import {
  Section,
  MaskedVideoContainer,
  MaskedVideo,
  VideoBackgroundContainer,
  VideoBackground,
  NavContainer,
  NavLink,
  Logo,
  SocialsContainer
} from "./styled";

const navLinks = ["Anthem", "Metrotown", "Ethos", "Residencies", "Floor Plans"];

const Navigation = () => {
  return (
    <Section>
      <NavContainer>
        {navLinks.map((label) => (
          <NavLink
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

      <MaskedVideoContainer>
        <MaskedVideo autoPlay muted loop playsInline preload="auto">
          <source src="/motion/home_hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </MaskedVideo>
        <Logo
          src="/static/logo-ethos-full.svg"
          alt="Ethos Metrotown"
          href="/"
        />
      </MaskedVideoContainer>

      <VideoBackgroundContainer>
        <VideoBackground autoPlay muted loop playsInline preload="auto">
          <source src="/motion/home_hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </VideoBackground>
      </VideoBackgroundContainer>
    </Section>
  );
};

export default Navigation;
