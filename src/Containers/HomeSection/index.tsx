import styled from "styled-components";
import BackgroundVideoLayer from "../../Components/VideoBackgroundLayer";
import MaskedVideoLayer from "../../Components/MaskVideoLayer";

export const Section = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 2rem 0 6rem 0;

  img:nth-child(1) {
    width: 100px;
  }

  img:nth-child(2) {
    width: 300px;
  }

  img:nth-child(3) {
    width: 60px;
  }
`;

export const PlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

      <TitleContainer>
        <img src="/static/logo-ethos-collapsed.svg" alt="Ethos" />
        <img src="/static/logo-ethos-full.svg" alt="Ethos Metrotown" />

        <PlayContainer>
          <img src="/icons/play.svg" alt="Ethos Metrotown" />
          <p>Watch Video</p>
        </PlayContainer>
      </TitleContainer>
      <BackgroundVideoLayer src="/motion/home_hero.webm" $isActive={true} />
    </Section>
  );
};
export default HomeSection;
