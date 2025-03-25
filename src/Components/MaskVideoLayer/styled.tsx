import styled from "styled-components";
import { device } from "../../styles/breakpoints";

interface MaskedVideoContainerProps {
  $isActive: boolean;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
  zIndex?: number;
  $center?: boolean;
}

export const MaskedVideoContainer = styled.div<MaskedVideoContainerProps>`
  display: flex;
  position: absolute;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
  z-index: 20;

  ${({ top }) => top !== undefined && `top: ${top};`}
  ${({ left }) => left !== undefined && `left: ${left};`}
  ${({ right }) => right !== undefined && `right: ${right};`}
  ${({ bottom }) => bottom !== undefined && `bottom: ${bottom};`}
  ${({ width }) => width !== undefined && `width: ${width};`}
  ${({ height }) => height !== undefined && `height: ${height};`}
  

   ${({ $center }) =>
    $center &&
    `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

export const MaskedVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  mask-image: url("/static/hero-mask.svg");
  mask-repeat: no-repeat;
  mask-position: center center;
  mask-size: contain;
  transition: mask-image 0.4s ease-in-out;

  /* WebKit */
  -webkit-mask-image: url("/static/hero-mask.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center center;
  -webkit-mask-size: contain;
  -webkit-transition: -webkit-mask-image 0.4s ease-in-out;
`;
