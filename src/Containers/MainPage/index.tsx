import { Main, LoadingOverlay } from "./styled";
import NavigationSection from "../Navigation";
import HomeSection from "../HomeSection";
import CTASection from "../CTASection";
import AnthemSection from "../AthemSection";
import MenuBar from "../../Components/MenuBar";
import useStore from "../../store/useStore";
import { useEffect } from "react";

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
      <HomeSection />
      <CTASection />
      <AnthemSection />
    </Main>
  );
};

export default MainPage;
