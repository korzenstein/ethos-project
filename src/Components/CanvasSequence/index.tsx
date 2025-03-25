import { useEffect, useRef, useState } from "react";
import useStore from "../../store/useStore";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const TOTAL_FRAMES = 44;

const CanvasWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 0 40vw 10vh 40vw;

  @media ${device.tablet} {
    padding: 0 40vw;
  }
  @media ${device.mobile} {
    padding: 0 15vw 30vh 15vw;
  }
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;

const CanvasSequence = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollY, viewportHeight } = useStore();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Preload all images
  useEffect(() => {
    const preload = async () => {
      const imgs: HTMLImageElement[] = [];
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const padded = String(i).padStart(2, "0");
        const img = new Image();
        img.src = `/static/face_frames/Face${padded}.webp`;
        try {
          await img.decode();
        } catch (e) {
          console.warn("Image failed to decode:", img.src);
        }
        imgs.push(img);
      }
      setImages(imgs);
    };
    preload();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.005,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!images.length || !canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const image = images[0];
    canvasRef.current.width = image.width;
    canvasRef.current.height = image.height;
    ctx.clearRect(0, 0, image.width, image.height);
    ctx.drawImage(image, 0, 0);
  }, [images]);

  useEffect(() => {
    if (!isVisible || !images.length || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = sectionRef.current?.getBoundingClientRect();
    const topOffset = (rect?.top ?? 0) + window.scrollY;
    const offsetStart = topOffset - viewportHeight * 0.9;
    const animationHeight = viewportHeight * 0.6;

    const progress = Math.min(
      1,
      Math.max(0, (scrollY - offsetStart) / animationHeight)
    );

    const frameIndex = Math.floor(progress * (TOTAL_FRAMES - 1));
    const image = images[frameIndex];

    canvas.width = image.width;
    canvas.height = image.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);
  }, [scrollY, isVisible, images, viewportHeight]);

  return (
    <CanvasWrapper ref={sectionRef}>
      <Canvas ref={canvasRef} />
    </CanvasWrapper>
  );
};

export default CanvasSequence;
