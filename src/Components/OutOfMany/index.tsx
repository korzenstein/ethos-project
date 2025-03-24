import { useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";
import { paths } from "./paths";

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

  return (
    <svg
      width="969"
      height="707"
      viewBox="0 0 969 707"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {springs.map((style, i) => (
        <animated.path key={i} {...{ d: paths[i] }} style={style} />
      ))}
    </svg>
  );
};

export default OutOfMany;
