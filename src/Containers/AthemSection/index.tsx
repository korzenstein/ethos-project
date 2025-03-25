import { useState } from "react";
import styled from "styled-components";
import AnthemButton from "../../Components/AnthemButton";
import ImageReveal from "../../Components/ImageReveal";

const Section = styled.section`
  display: flex;
  position: relative;
  width: 100vw;
  overflow: hidden;
  padding: 30vh 20vw;
  background: #041c2c;
  flex-direction: column;
`;

const FlexContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 40%;
  height: auto;
  object-fit: cover;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: #dad9d6;
  max-width: 40%;
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
