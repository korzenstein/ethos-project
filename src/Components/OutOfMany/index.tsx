import { useEffect, useState } from "react";
import { useSprings, animated, useSpring } from "@react-spring/web";
import { paths } from "./paths";
import styled from "styled-components";

export const CTA = styled.h3`
  font-size: 3.2rem;
  padding-top: 15%;
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  gap: 5%;
  align-items: center;
  justify-content: center;
`;
const OutOfMany = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setViewportHeight(window.innerHeight);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 'from many one' component
  const springs = useSprings(
    paths.length,
    paths.map((_, i) => {
      const offset = i * 20;
      const triggerStart = 400 + offset;
      const triggerEnd = triggerStart + viewportHeight * 0.5;

      const progress = Math.min(
        1,
        Math.max(0, (scrollY - triggerStart) / (triggerEnd - triggerStart))
      );

      const dark = [3, 21, 33];
      const light = [218, 217, 214];
      const lerped = dark.map((start, idx) =>
        Math.round(start + (light[idx] - start) * progress)
      );
      const fillColor = `rgb(${lerped[0]}, ${lerped[1]}, ${lerped[2]})`;

      return {
        to: { fill: fillColor },
        config: { mass: 1, tension: 120, friction: 20 },
      };
    })
  );

  // CTA component

  const ctaTriggerStart = 950;
  const ctaTriggerEnd = ctaTriggerStart + viewportHeight * 0.5;

  const ctaProgress = Math.min(
    1,
    Math.max(0, (scrollY - ctaTriggerStart) / (ctaTriggerEnd - ctaTriggerStart))
  );

  const dark = [3, 21, 33];
  const light = [218, 217, 214];
  const lerpedCTA = dark.map((start, idx) =>
    Math.round(start + (light[idx] - start) * ctaProgress)
  );
  const textColor = `rgb(${lerpedCTA[0]}, ${lerpedCTA[1]}, ${lerpedCTA[2]})`;

  const ctaSpring = useSpring({
    color: textColor,
    config: { mass: 1, tension: 120, friction: 20 },
  });

  const AnimatedCTA = animated(CTA);

  return (
    <>
      <svg
        width="auto"
        height="707"
        viewBox="0 0 969 707"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {springs.map((style, i) => (
          <animated.path key={i} {...{ d: paths[i] }} style={style} />
        ))}
      </svg>
      <AnimatedCTA style={ctaSpring}>
        <span>One Residence.</span>
        <span>One Life.</span>
        <span>One Ethos.</span>
      </AnimatedCTA>
    </>
  );
};

export default OutOfMany;
