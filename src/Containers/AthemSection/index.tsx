import { useState } from "react";
import styled from "styled-components";
import AnthemButton from "../../Components/AnthemButton";
import ImageReveal from "../../Components/ImageReveal";
import { device } from "../../styles/breakpoints";

const Section = styled.section`
  display: flex;
  position: relative;
  width: 100vw;
  overflow: hidden;
  padding: 0 6vw 14vh 6vw;
  background: #041c2c;
  flex-direction: column;

  @media ${device.tablet} {
    padding: 5vh 6vw 8vh 6vw;
  }

  @media ${device.mobile} {
    padding: 5vh 5vw 8vh 5vw;
  }
`;

const FlexContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6vw;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 4vh;
  color: #dad9d6;
  max-width: 30%;

  @media ${device.tablet} {
    max-width: 100%;
  }
`;

const StackedTitle = styled.h4`
  font-size: 3rem;
  letter-spacing: 0.1em;
  white-space: pre-wrap;
  font-family: "Cirka";
  letter-spacing: "4%";
  font-weight: 200;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: "OwnersText";
`;

const AnthemSection = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Section>
      <FlexContent>
        <ImageReveal
          isRevealed={isClicked}
          src="/static/home-1.webp"
          alt="Anthem Buildings"
        />
        <TextColumn>
          <StackedTitle>
            <span>Anthem's</span>
            <span>Metrotown</span>
            <span>Evolution</span>
            <span style={{ display: "inline-flex", paddingTop: "1rem" }}>
              <svg
                width="46"
                height="3"
                viewBox="0 0 46 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.5014 3L45.58 0L21.3775 0L5.07857 0L0 3H40.5014Z"
                  fill="#DAD9D6"
                />
              </svg>
            </span>
          </StackedTitle>

          <Paragraph>
            Two decades of Metrotown placemaking. A trusted partner in a city’s
            dramatic growth. Our unwavering ethos for meaningful change.
          </Paragraph>

          <AnthemButton onClick={() => setIsClicked(!isClicked)} />
        </TextColumn>
      </FlexContent>
    </Section>
  );
};

export default AnthemSection;
