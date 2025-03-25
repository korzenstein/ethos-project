import { Main } from "./styled";
import NavigationSection from "../Navigation";
import HomeSection from "../HomeSection";
import CTASection from "../CTASection";
import AnthemSection from "../AthemSection";
import MenuBar from "../../Components/MenuBar";
import useStore from "../../store/useStore";

const MainPage = () => {
  const { isNavOpen } = useStore();

  return (
    <Main>
      <MenuBar />
      {isNavOpen && <NavigationSection />}
      <HomeSection />
      <CTASection />
      <AnthemSection />
    </Main>
  );
};

export default MainPage;
