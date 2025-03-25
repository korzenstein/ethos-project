import { useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";
import OutOfMany from "../../Components/OutOfMany";
import CanvasSequence from "../../Components/CanvasSequence";
import useStore from "../../store/useStore";

const Section = styled.section`
  display: flex;
  position: relative;
  width: 100vw;
  overflow: hidden;
  background: #041c2c;
  flex-direction: column;
  padding: 20vh 20vw;
`;

const BackgroundLayer = animated(styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 140vh;
  z-index: 0;
  overflow: hidden;
  padding: 30vh;
`);

const ForegroundLayer = animated(styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
`);

const CTASection = () => {
  const { scrollY, setScrollY, setViewportHeight } = useStore();

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

  const foregroundSpring = useSpring({
    to: {
      transform: `translateY(${scrollY * 0.2}px)`,
    },
    config: { tension: 120, friction: 26 },
  });

  const backgroundSpring = useSpring({
    to: {
      transform: `translateY(${scrollY * 0.05}px)`,
    },
    config: { tension: 100, friction: 20 },
  });

  return (
    <Section>
      <BackgroundLayer style={backgroundSpring}>
        <CanvasSequence />
      </BackgroundLayer>

      <ForegroundLayer style={foregroundSpring}>
        <OutOfMany />
      </ForegroundLayer>
    </Section>
  );
};

export default CTASection;
