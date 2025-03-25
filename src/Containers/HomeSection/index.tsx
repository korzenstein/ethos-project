import styled from "styled-components";
import BackgroundVideoLayer from "../../Components/VideoBackgroundLayer";
import MaskedVideoLayer from "../../Components/MaskVideoLayer";

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

  img {
    width: 35vw;
  }
`;

export const PlayContainer = styled.div`
  position: absolute;
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

  img {
    max-width: 40px;
  }

  p {
    font-size: 0.8rem;
  }
`;

const HomeSection = () => {
  return (
    <Section id="home">
      <MaskedVideoLayer
        src="/motion/home_hero.webm"
        $center={true}
        width="20%"
        height="50%"
        zIndex={1}
        $isActive={true}
      />

      <LogoWrapper>
        <img src="/static/logo-ethos-full.svg" alt="Ethos Metrotown" />
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
