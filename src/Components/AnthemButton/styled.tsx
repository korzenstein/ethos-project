import { animated } from "@react-spring/web";
import styled from "styled-components";

export const SvgWrapper = styled.div`
  width: clamp(7rem, 12vw, 17rem);
  position: relative;
  cursor: pointer;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const Overlay = styled.a`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnimatedText = animated(styled.p`
  font-size: clamp(0.5rem, 1.2vw, 1.2rem);
  text-transform: uppercase;
  font-family: "OwnersText";
  margin: 0;
  transition: color 0.4s;
`);

export const AnimatedArrow = animated(styled.div`
  /* margin-left: 0.3rem; */
  will-change: transform, opacity;
  display: flex;
  align-items: center;
`);
