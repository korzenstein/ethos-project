import { Main } from "./styled";
import NavigationSection from "../Navigation";
import HomeSection from "../HomeSection";
import CTASection from "../CTASection";
import AnthemSection from "../AthemSection";
import MenuBar from "../../Components/MenuBar";

const MainPage = () => {
  return (
    <Main>
      <MenuBar />
      <NavigationSection />
      <HomeSection />
      <CTASection />
      <AnthemSection />
    </Main>
  );
};

export default MainPage;
