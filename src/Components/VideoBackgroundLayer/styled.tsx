import styled from "styled-components";

export const VideoBackgroundContainer = styled.div<{ $isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  /* filter: blur(10px); */
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
  background: #041c2c;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 0;
  filter: blur(16px);
  transform: scale(1.05);
`;
