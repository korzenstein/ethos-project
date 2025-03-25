import { Main, LoadingOverlay } from "./styled";
import NavigationSection from "../Navigation";
import HomeSection from "../HomeSection";
import CTASection from "../CTASection";
import AnthemSection from "../AthemSection";
import MenuBar from "../../Components/MenuBar";
import useStore from "../../store/useStore";
import { useEffect } from "react";
import styled from "styled-components";
import { animated, useSpring } from "@react-spring/web";

const MainPage = () => {
  const { allVideosReady, setTotalVideos } = useStore();

  useEffect(() => {
    setTotalVideos(6);
  }, []);

  return (
    <Main>
      <LoadingOverlay $visible={!allVideosReady} />
      <MenuBar />
      <NavigationSection />
      <CTAParallaxWrapper>
        <HomeSection />
      </CTAParallaxWrapper>
      <CTAParallaxWrapper>
        <CTASection />
      </CTAParallaxWrapper>
      <AnthemSection />
    </Main>
  );
};

export default MainPage;

const ParallaxWrapper = animated(styled.div`
  will-change: transform;
`);

export const CTAParallaxWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { scrollY } = useStore();

  const spring = useSpring({
    transform: `translateY(${scrollY * -0.3}px)`,
    config: { mass: 1, tension: 100, friction: 20 },
  });

  return <ParallaxWrapper style={spring}>{children}</ParallaxWrapper>;
};
