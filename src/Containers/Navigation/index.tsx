import {
  Section,
  NavContainer,
  NavLink,
  Logo,
  SocialsContainer,
  Registration,
  IconButton,
} from "./styled";
import MaskedVideoLayer from "../../Components/MaskVideoLayer";
import BackgroundVideoLayer from "../../Components/VideoBackgroundLayer";
import { useState, useEffect } from "react";
import useStore from "../../store/useStore";

const navLinks = ["Anthem", "Metrotown", "Ethos", "Residencies", "Floor Plans"];
const socialLinks = [
  {
    href: "https://x.com",
    icon: "/icons/twitter.svg",
    alt: "Twitter",
  },
  {
    href: "https://linkedin.com",
    icon: "/icons/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://instagram.com",
    icon: "/icons/instagram.svg",
    alt: "Instagram",
  },
];

const Navigation = () => {
  const [isAltVideoActive, setIsAltVideoActive] = useState(false);
  const { isNavOpen, setIsNavOpen } = useStore();

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  return (
    <Section $isVisible={isNavOpen}>
      <Registration>
        <a>Join Us</a>
        <IconButton onClick={toggleMenu}>
          <img src="/static/icon-close.svg" alt="Close" />
        </IconButton>
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
        {socialLinks.map(({ href, icon, alt }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt={alt} />
          </a>
        ))}
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
