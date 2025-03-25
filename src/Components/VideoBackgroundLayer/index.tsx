import { VideoBackground, VideoBackgroundContainer } from "./styled";
interface BackgroundVideoLayerProps {
  src: string;
  $isActive: boolean;
  preload?: "auto" | "metadata" | "none";
}

const BackgroundVideoLayer = ({
  src,
  $isActive,
  preload = "auto",
}: BackgroundVideoLayerProps) => {
  return (
    <VideoBackgroundContainer $isActive={$isActive}>
      <VideoBackground autoPlay muted loop playsInline preload={preload}>
        <source src={src} type="video/webm" />
        Your browser does not support the video tag.
      </VideoBackground>
    </VideoBackgroundContainer>
  );
};

export default BackgroundVideoLayer;
