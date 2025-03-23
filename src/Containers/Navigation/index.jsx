import { Section, MaskedVideoContainer, MaskedVideo, VideoBackgroundContainer, VideoBackground } from "./styled";

const Navigation = () => {
  return (
    <Section>
      <MaskedVideoContainer>
        <MaskedVideo autoPlay muted loop playsInline preload="auto">
          <source src="/motion/home_hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </MaskedVideo>
      </MaskedVideoContainer>

    <VideoBackgroundContainer>
        <VideoBackground autoPlay muted loop playsInline preload="auto">
        <source src="/motion/home_hero.webm" type="video/webm" />
        Your browser does not support the video tag.
      </VideoBackground>
    </VideoBackgroundContainer>
      
    </Section>
  );
}

export default Navigation