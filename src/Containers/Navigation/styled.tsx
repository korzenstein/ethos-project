import styled from "styled-components";
import { device } from "../../styles/breakpoints";
interface SectionProps {
  $isVisible: boolean;
}

export const Section = styled.section<SectionProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  overflow: hidden;
  background: #041c2c;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateX(0)" : "translateX(-100%)"};
  transition: opacity 0.4s ease, transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
`;

export const NavContainer = styled.nav`
  position: absolute;
  display: flex;
  gap: 5%;
  left: 38vw;
  top: 43.4vh;
  z-index: 40;

  @media ${device.tablet} {
    flex-direction: column;
    left: 28vw;
    top: 30vh;
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: clamp(0.5rem, 1.2vw, 1.2rem);
  font-weight: 300;
  text-transform: uppercase;
  font-family: "Cirka";
  letter-spacing: 8%;
  transition: opacity 0.3s ease;
  white-space: nowrap;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    height: 2px;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.4s ease-in-out;
    margin-right: auto;
  }

  &:hover img {
    transform: scaleX(1);
  }

  @media ${device.tablet} {
    flex-direction: column;
    font-size: 2rem;
    color: #dad9d6;
    gap: 1.4rem;
  }
`;

export const Logo = styled.img`
  left: 18vw;
  top: 40vh;
  width: 15%;
  z-index: 40;
  display: block;
  height: auto;
  position: absolute;

  @media ${device.tablet} {
    display: none;
  }
`;

export const Registration = styled.div`
  right: 4rem;
  top: 3rem;
  z-index: 40;
  display: flex;
  height: auto;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  a {
    font-family: "Cirka";
    font-size: 1.2rem;
    font-weight: 300;
    text-transform: uppercase;
    text-decoration: underline;
    cursor: pointer;
  }

  img {
    cursor: pointer;
  }

  @media ${device.tablet} {
    right: 6vw;
    top: 1.75rem;
  }

  @media ${device.mobile} {
    right: 1.5rem;
    top: 1.5rem;
    a {
      display: none;
    }
  }
`;

export const SocialsContainer = styled.div`
  position: absolute;
  bottom: 7vh;
  right: 7vw;
  display: flex;
  gap: 1rem;
  z-index: 20;

  a {
    display: inline-block;
    transition: transform 0.3s ease;
    height: 2vh;
    width: 2vw;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  @media ${device.tablet} {
    gap: 2rem;
    a {
      height: 3vh;
      width: 3vw;
    }
  }

  @media ${device.mobile} {
    display: none;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 28px;
    height: 28px;
  }
`;
