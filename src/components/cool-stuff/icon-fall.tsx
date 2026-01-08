"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface MousePos {
  x: number;
  y: number;
}

const IconList = [
  "ꕤ",
  "✱",
  "✧",
  "✦",
  "✵",
  "✶",
  "✷",
  "✸",
  "✹",
  "✺",
  "✻",
  "✼",
  "✽",
  "✾",
  "✿",
  "❀",
  "❁",
  "❃",
  "❋",
  "❖",
];

const colorPalette = ["#a6c9a9", "#8da7ff"];

const IconFall = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const flairRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mousePosRef = useRef<MousePos>({ x: 0, y: 0 });
  const lastMousePosRef = useRef<MousePos>({ x: 0, y: 0 });
  const cachedMousePosRef = useRef<MousePos>({ x: 0, y: 0 });
  const indexRef = useRef(0);
  const gapRef = useRef(100);
  const isHoveringRef = useRef(false);
  const boundsRef = useRef({ left: 0, right: 0, top: 0, bottom: 0 });

  useEffect(() => {
    const wrapper = gsap.utils.wrap(0, IconList.length);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      mousePosRef.current = {
        x: e.clientX,
        y: e.clientY,
      };

      const rect = containerRef.current.getBoundingClientRect();
      boundsRef.current = {
        left: rect.left,
        right: rect.right,
        top: rect.top,
        bottom: rect.bottom,
      };

      const isInContainer =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      isHoveringRef.current = isInContainer;

      if (!isInContainer) {
        flairRefs.current.forEach((img) => {
          if (img) img.style.opacity = "0";
        });
      }
    };

    const playAnimation = (shape: HTMLDivElement) => {
      const tl = gsap.timeline();
      tl.from(shape, {
        opacity: 0,
        scale: 0,
        ease: "elastic.out(1,0.3)",
      })
        .to(
          shape,
          {
            rotation: gsap.utils.random(-360, 360),
          },
          "<"
        )
        .to(
          shape,
          {
            y: "120vh",
            ease: "back.in(0.4)",
            duration: 1,
          },
          0
        );
    };

    const animateImage = () => {
      if (!isHoveringRef.current) return;

      const wrappedIndex = wrapper(indexRef.current);
      const icon = flairRefs.current[wrappedIndex];

      if (!icon) return;

      gsap.killTweensOf(icon);

      // Get the color before clearing props
      const iconColor =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];

      gsap.set(icon, {
        clearProps: "all",
      });

      const bounds = boundsRef.current;
      const clampedX = Math.max(
        bounds.left,
        Math.min(mousePosRef.current.x, bounds.right)
      );
      const clampedY = Math.max(
        bounds.top,
        Math.min(mousePosRef.current.y, bounds.bottom)
      );

      gsap.set(icon, {
        opacity: 1,
        left: clampedX,
        top: clampedY,
        xPercent: -50,
        yPercent: -50,
        color: iconColor,
      });

      playAnimation(icon);
      indexRef.current++;
    };

    const imageTrail = () => {
      const travelDistance = Math.hypot(
        lastMousePosRef.current.x - mousePosRef.current.x,
        lastMousePosRef.current.y - mousePosRef.current.y
      );

      cachedMousePosRef.current.x = gsap.utils.interpolate(
        cachedMousePosRef.current.x || mousePosRef.current.x,
        mousePosRef.current.x,
        0.1
      );
      cachedMousePosRef.current.y = gsap.utils.interpolate(
        cachedMousePosRef.current.y || mousePosRef.current.y,
        mousePosRef.current.y,
        0.1
      );

      if (travelDistance > gapRef.current) {
        animateImage();
        lastMousePosRef.current = { ...mousePosRef.current };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    gsap.ticker.add(imageTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(imageTrail);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden fixed inset-0 h-full w-full flex items-center justify-center pointer-events-none "
    >
      <div className="fixed inset-0 pointer-events-none">
        {IconList.concat(IconList).map((icon, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) flairRefs.current[i] = el;
            }}
            className="fixed w-20 h-20 opacity-0 flex items-center justify-center text-6xl"
            style={{
              pointerEvents: "none",
              color:
                colorPalette[Math.floor(Math.random() * colorPalette.length)],
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconFall;
