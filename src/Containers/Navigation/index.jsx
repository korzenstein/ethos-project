import {
  Section,
  MaskedVideoContainer,
  MaskedVideo,
  VideoBackgroundContainer,
  VideoBackground,
  NavContainer,
  NavLink,
  Logo
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

      <MaskedVideoContainer>
        <MaskedVideo autoPlay muted loop playsInline preload="auto">
          <source src="/motion/home_hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </MaskedVideo>
                <Logo src="/static/logo-ethos-full.svg" alt="Ethos Metrotown" href="/"/>

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
