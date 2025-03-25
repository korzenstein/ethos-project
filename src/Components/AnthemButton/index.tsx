import { SvgWrapper, AnimatedText, AnimatedArrow, Overlay } from "./styled";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const AnimatedPath = animated("path");

const AnthemButton = ({ onClick }) => {
  const [hovered, setHovered] = useState(false);

  const textSpring = useSpring({
    to: {
      transform: hovered ? "translateX(-6px)" : "translateX(0px)",
      color: hovered ? "#041C2C" : "#DAD9D6",
    },
    config: { tension: 200, friction: 20 },
  });

  const arrowSpring = useSpring({
    to: {
      opacity: hovered ? 1 : 0,
      transform: hovered ? "translateX(2px)" : "translateX(-5px)",
    },
    config: { tension: 170, friction: 18 },
    delay: hovered ? 150 : 0,
  });

  const bgSpring = useSpring({
    to: {
      fill: hovered ? "#DAD9D6" : "#041C2C",
    },
    config: { tension: 180, friction: 22 },
  });

  return (
    <SvgWrapper
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 174 42"
        preserveAspectRatio="xMidYMid meet"
      >
        <AnimatedPath d="M.5.5H156L173 15v26H1z" style={bgSpring} />
        <path
          fill="#DAD9D6"
          d="M1.853 1.85v37.93h169.589V15.97L155.335 1.85zM0 0h156.033l17.262 15.132V41.63H0z"
        />
      </svg>

      <Overlay>
        <AnimatedText style={textSpring}>Anthem</AnimatedText>
        <AnimatedArrow style={arrowSpring}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.75H0.25V7.25H1V5.75ZM12.5303 7.03033C12.8232 6.73744 12.8232 6.26256 12.5303 5.96967L7.75736 1.1967C7.46447 0.903806 6.98959 0.903806 6.6967 1.1967C6.40381 1.48959 6.40381 1.96447 6.6967 2.25736L10.9393 6.5L6.6967 10.7426C6.40381 11.0355 6.40381 11.5104 6.6967 11.8033C6.98959 12.0962 7.46447 12.0962 7.75736 11.8033L12.5303 7.03033ZM1 7.25H12V5.75H1V7.25Z"
              fill="#041C2C"
            />
          </svg>
        </AnimatedArrow>
      </Overlay>
    </SvgWrapper>
  );
};

export default AnthemButton;
