import { useEffect } from "react";
import { animated } from "@react-spring/web";
import styled from "styled-components";
import OutOfMany from "../../Components/OutOfMany";
import CanvasSequence from "../../Components/CanvasSequence";
import useStore from "../../store/useStore";
import { device } from "../../styles/breakpoints";

const Section = styled.section`
  display: flex;
  position: relative;
  width: 100vw;
  overflow: hidden;
  background: #041c2c;
  flex-direction: column;
  height: 100vh;
  padding-top: 16vh;
  overflow: visible;

  @media ${device.mobile} {
    height: auto;
  }
`;

const BackgroundLayer = animated(styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 0;
  left: 0;
  height: auto;
  /* transform: translate(-50%, -50%); */
  /* width: 100vw; */
  height: 120vh;
  z-index: 0;
  overflow: hidden;
  /* padding: 10vh; */

  @media ${device.mobile} {
    padding: 2vh 1rem;
    height: 100vh;
  }
`);

const ForegroundLayer = animated(styled.div`
  position: relative;
  z-index: 20;
  padding: 2rem;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`);

const CTASection = () => {
  const { setScrollY, setViewportHeight } = useStore();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setViewportHeight(window.innerHeight);

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [setScrollY, setViewportHeight]);

  return (
    <Section>
      <BackgroundLayer>
        <CanvasSequence />
      </BackgroundLayer>

      <ForegroundLayer>
        <OutOfMany />
      </ForegroundLayer>
    </Section>
  );
};

export default CTASection;
