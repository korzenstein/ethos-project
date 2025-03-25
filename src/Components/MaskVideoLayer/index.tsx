import { MaskedVideoContainer, MaskedVideo } from "./styled";

interface MaskedVideoLayerProps {
  src: string;
  $isActive: boolean;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
  zIndex?: number;
  $center?: boolean;
  preload?: "auto" | "metadata" | "none";
}

const MaskedVideoLayer = ({
  src,
  $isActive,
  preload = "auto",
  ...props
}: MaskedVideoLayerProps) => {
  return (
    <MaskedVideoContainer $isActive={$isActive} {...props}>
      <MaskedVideo autoPlay muted loop playsInline preload={preload}>
        <source src={src} type="video/webm" />
        Your browser does not support the video tag.
      </MaskedVideo>
    </MaskedVideoContainer>
  );
};

export default MaskedVideoLayer;
