import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const VideoBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  filter: blur(10px);
`;


export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const MaskedVideoContainer = styled.div`
  max-height: 90%;
  height: 70%;
  z-index: 10;
  display: flex;
  position: absolute;
  width: 20%;
  left: 6vw;
  top: 3vw;
  
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
