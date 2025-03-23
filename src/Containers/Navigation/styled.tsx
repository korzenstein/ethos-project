import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const VideoBackgroundContainer = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  filter: blur(10px);
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const MaskedVideoContainer = styled.div<{ isActive: boolean }>`
  max-height: 90%;
  height: 70%;
  z-index: 10;
  display: flex;
  position: absolute;
  width: 20%;
  left: 6vw;
  top: 3vw;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
`;

export const MaskedVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  mask-image: url("/static/hero-mask.svg");
  mask-repeat: no-repeat;
  mask-position: center center;
  mask-size: contain;
  transition: mask-image 0.4s ease-in-out;

  /* WebKit */
  -webkit-mask-image: url("/static/hero-mask.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center center;
  -webkit-mask-size: contain;
  -webkit-transition: -webkit-mask-image 0.4s ease-in-out;
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
