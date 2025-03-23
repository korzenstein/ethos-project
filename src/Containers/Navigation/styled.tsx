import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const NavContainer = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 5%;
  z-index: 30;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.4rem;
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
  left: 0;
  top: 43vh;
  width: 20%;
  z-index: 40;
  display: block;
  height: auto;
  position: absolute;
`;

export const Registration = styled.div`
  right: 7vw;
  top: 7vh;
  z-index: 40;
  display: flex;
  height: auto;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  a {
    font-family: "Cirka";
    font-size: 1.4rem;
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
