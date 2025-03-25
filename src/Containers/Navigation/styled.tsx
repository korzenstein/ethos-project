import styled from "styled-components";
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
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
  transition: opacity 0.4s ease;
  background: #041c2c;
`;

export const NavContainer = styled.nav`
  position: absolute;
  display: flex;
  gap: 5%;
  left: 38vw;
  top: 43.4vh;
  z-index: 40;
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
`;

export const Logo = styled.img`
  left: 18vw;
  top: 40vh;
  width: 15%;
  z-index: 40;
  display: block;
  height: auto;
  position: absolute;
`;

export const Registration = styled.div`
  right: 2rem;
  top: 1.8rem;
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
