import { useEffect, useRef, useState } from "react";
import { useSprings, animated, useSpring } from "@react-spring/web";
import useStore from "../../store/useStore";
import { paths } from "./paths";
import { Wrapper, CTA, StyledSVG } from "./styled";
const OutOfMany = () => {
  const { scrollY, viewportHeight } = useStore();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    const updateTop = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionTop(rect.top + window.scrollY);
      }
    };

    updateTop();
    window.addEventListener("resize", updateTop);
    return () => window.removeEventListener("resize", updateTop);
  }, []);

  const baseStart = sectionTop - viewportHeight;
  const baseEnd = sectionTop - viewportHeight * 0.44;

  const riseStrengths = [
    13.6, 15.8, 13.6, 15.6, 15.2, 14.0, 11.5, 15.3, 11, 12.4, 8.1, 12.1, 7.0,
  ];

  const baseRise = 100;

  const springs = useSprings(
    paths.length,
    paths.map((_, i) => {
      const strength = riseStrengths[i] ?? 1;

      const progress = Math.min(
        1,
        Math.max(0, (scrollY - baseStart) / (baseEnd - baseStart))
      );

      const translateY = (1 - progress) * baseRise * strength;

      const dark = [3, 21, 33];
      const light = [218, 217, 214];
      const lerped = dark.map((start, idx) =>
        Math.round(start + (light[idx] - start) * progress)
      );
      const fillColor = `rgb(${lerped[0]}, ${lerped[1]}, ${lerped[2]})`;

      return {
        to: {
          fill: fillColor,
          transform: `translateY(${translateY}px)`,
        },
        config: { mass: 1, tension: 170, friction: 24 },
      };
    })
  );

  const ctaTriggerStart = sectionTop - viewportHeight * 0.1;
  const ctaTriggerEnd = sectionTop + viewportHeight * 0.2;

  const rawProgress =
    (scrollY - ctaTriggerStart) / (ctaTriggerEnd - ctaTriggerStart);
  const ctaProgress = Math.min(1, Math.max(0, rawProgress));

  const translateY = (1 - ctaProgress) * 220;

  const dark = [3, 21, 33];
  const light = [218, 217, 214];
  const lerpedCTA = dark.map((start, idx) =>
    Math.round(start + (light[idx] - start) * ctaProgress)
  );
  const textColor = `rgb(${lerpedCTA[0]}, ${lerpedCTA[1]}, ${lerpedCTA[2]})`;

  const ctaSpring = useSpring({
    opacity: ctaProgress,
    transform: `translateY(${translateY}px)`,
    color: textColor,
    config: { mass: 1, tension: 120, friction: 20 },
  });

  const AnimatedCTA = animated(CTA);
  const AnimatedGroup = animated("g");
  const AnimatedPath = animated("path") as any;

  return (
    <Wrapper ref={sectionRef}>
      <StyledSVG viewBox="0 0 969 707" fill="none">
        {springs.map((style, i) => (
          <AnimatedGroup key={i} style={{ transform: style.transform }}>
            <AnimatedPath d={paths[i]} style={{ fill: style.fill }} />
          </AnimatedGroup>
        ))}
      </StyledSVG>

      <AnimatedCTA style={ctaSpring}>
        <span>One Residence.</span>
        <span>One Life.</span>
        <span>One Ethos.</span>
      </AnimatedCTA>
    </Wrapper>
  );
};

export default OutOfMany;
