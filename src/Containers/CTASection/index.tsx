import styled from "styled-components";
import OutOfMany from "../../Components/OutOfMany";
import CanvasSequence from "../../Components/CanvasSequence";

const Section = styled.section`
  display: flex;
  position: relative;
  width: 100vw;
  overflow: hidden;
  padding: 30vh 20vw;
  background: #041c2c;
  flex-direction: column;
`;

const CTASection = () => {
  return (
    <Section>
      <OutOfMany />
      <CanvasSequence />
    </Section>
  );
};

export default CTASection;
