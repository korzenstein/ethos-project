import styled, { css } from "styled-components";

interface RevealImageProps {
  isRevealed: boolean;
  src: string;
  alt?: string;
}

const RevealContainer = styled.div<{ $isRevealed: boolean }>`
  width: 100%;
  height: auto;
  overflow: hidden;
  transition: clip-path 0.9s cubic-bezier(0.25, 1, 0.5, 1);
  clip-path: ${({ $isRevealed }) =>
    $isRevealed
      ? "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
      : "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"};
`;

const Image = styled.img<{ $isRevealed: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.9s cubic-bezier(0.25, 1, 0.5, 1);
  transform-origin: bottom;

  ${({ $isRevealed }) =>
    $isRevealed
      ? css`
          transform: scale(1) translateY(0);
        `
      : css`
          transform: scale(1.1) translateY(100px);
        `}
`;

const RevealImage = ({ isRevealed, src, alt }: RevealImageProps) => {
  return (
    <RevealContainer $isRevealed={isRevealed}>
      <Image src={src} alt={alt || "Revealed Image"} $isRevealed={isRevealed} />
    </RevealContainer>
  );
};

export default RevealImage;
