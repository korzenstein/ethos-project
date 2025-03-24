import { Main } from "./styled";
import NavigationSection from "../Navigation";
import HomeSection from "../HomeSection";
import CTASection from "../CTASection";
import AnthemSection from "../AthemSection";

const MainPage = () => {
  return (
    <Main>
      {/* <NavigationSection /> */}
      <HomeSection />
      <CTASection />
      <AnthemSection />
    </Main>
  );
};

export default MainPage;
