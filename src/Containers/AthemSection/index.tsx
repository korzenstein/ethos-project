import styled from "styled-components";

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
  gap: 5vw;

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
  gap: 2rem;
  color: #dad9d6;
  max-width: 40%;
`;

const StackedTitle = styled.h4`
  font-size: 3rem;
  line-height: 1;
  letter-spacing: 0.1em;
  white-space: pre-wrap;

  span {
    display: block;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #dad9d6;
`;

const AnthemButton = styled.button`
  background: black;
  border: black;
  cursor: pointer;
  width: auto;
`;

const AnthemSection = () => {
  return (
    <Section>
      <FlexContent>
        <Image src="/static/home-1.webp" alt="Anthem Buildings" />

        <TextColumn>
          <StackedTitle>
            <span>Anthem's</span>
            <span>Metrotown</span>
            <span>Evolution</span>
          </StackedTitle>

          <Paragraph>
            Two decades of Metrotown placemaking. A trusted partner in a city’s
            dramatic growth. Our unwavering ethos for meaningful change.
          </Paragraph>

          <AnthemButton>ANTHEM</AnthemButton>
        </TextColumn>
      </FlexContent>
    </Section>
  );
};

export default AnthemSection;
