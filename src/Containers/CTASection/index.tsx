import styled from "styled-components";
import OutOfMany from "../../Components/OutOfMany";

const Section = styled.section`
  display: flex;
  position: relative;
  width: 100vw;
  overflow: hidden;
  padding: 30vh 20vw;
  background: #041c2c;
`;

const CTASection = () => {
  return (
    <Section>
      <OutOfMany />
    </Section>
  );
};

export default CTASection;
