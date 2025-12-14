"use client";
import { useTheme } from "next-themes";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { SunIcon } from "../ui/sun";
import { MoonIcon } from "../ui/moon";

import type { SunIconHandle } from "../ui/sun";
import type { MoonIconHandle } from "../ui/moon";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const sunIconRef = useRef<SunIconHandle>(null);
  const moonIconRef = useRef<MoonIconHandle>(null);

  const handleMouseEnter = () => {
    if (theme === "dark") {
      moonIconRef.current?.startAnimation();
    } else {
      sunIconRef.current?.startAnimation();
    }
  };

  const handleMouseLeave = () => {
    sunIconRef.current?.stopAnimation();
    moonIconRef.current?.stopAnimation();
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SunIcon ref={sunIconRef} className="dark:hidden block" />
      <MoonIcon ref={moonIconRef} className=" dark:block hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
