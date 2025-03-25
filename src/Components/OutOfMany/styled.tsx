import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Wrapper = styled.div`
  position: relative;
  height: auto;
`;

export const CTA = styled.h3`
  font-size: 3.2rem;
  padding-top: 5%;
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  gap: 1%;
  align-items: center;
  justify-content: center;
  font-family: "OwnersText";
  text-transform: uppercase;
  font-size: clamp(1rem, 4vw, 4.5rem);
  font-weight: 200;
  overflow: visible;

  @media ${device.tablet} {
    flex-direction: column;
    font-size: 3.4rem;
    margin-top: 5rem;
  }

  @media ${device.mobile} {
    font-size: 2.4rem;
  }
`;

export const StyledSVG = styled.svg`
  width: 100%;
  height: 707px;
  padding: 10vh;
  overflow: visible;

  @media ${device.mobile} {
    padding: 0vh;
    height: auto;
  }
`;
