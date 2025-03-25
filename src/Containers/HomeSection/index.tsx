import styled from "styled-components";
import BackgroundVideoLayer from "../../Components/VideoBackgroundLayer";
import MaskedVideoLayer from "../../Components/MaskVideoLayer";
import { device } from "../../styles/breakpoints";
export const Section = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  margin-top: 1rem;

  img {
    width: 48vw;
  }

  @media ${device.tablet} {
    img {
      width: 70vw;
    }
  }

  @media ${device.mobile} {
    img {
      width: 80vw;
    }
  }
`;

export const PlayContainer = styled.button`
  position: absolute;
  background: none;
  border: none;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "OwnersText";
  text-transform: uppercase;
  gap: 1rem;
  margin-top: 1rem;

  img {
    max-width: 40px;
  }

  p {
    font-size: 0.8rem;
    color: #dad9d6;
  }
`;

const HomeSection = () => {
  return (
    <Section id="home">
      <MaskedVideoLayer
        src="/motion/home_hero.webm"
        $center={true}
        width="28%"
        height="68%"
        zIndex={1}
        $isActive={true}
      />

      <LogoWrapper>
        <a href="/">
          <img src="/static/logo-ethos-full.svg" alt="Ethos Metrotown" />
        </a>
      </LogoWrapper>

      <PlayContainer>
        <img src="/icons/play.svg" alt="Play Video" />
        <p>Watch Video</p>
      </PlayContainer>

      <BackgroundVideoLayer src="/motion/home_hero.webm" $isActive={true} />
    </Section>
  );
};

export default HomeSection;
