"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

type ButtonSize = "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";

interface ThreedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
}

const ThreedButton = React.forwardRef<HTMLButtonElement, ThreedButtonProps>(
  ({ className, disabled = false, children, ...props }, ref) => {
    const [isPressed, setIsPressed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
      position: "relative" as const,
      display: "inline-block",
      cursor: "pointer",
      outline: "none",
      border: "2px solid #8da7ff",
      verticalAlign: "middle",
      fontSize: "0.875rem",
      fontWeight: 600,
      color: "#1e3a8a",
      textTransform: "uppercase" as const,
      padding: "0.4em 0.8em",
      borderRadius: "0.75em",
      transformStyle: "preserve-3d" as const,
      transition:
        "transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1)",
      background: isPressed ? "#d4e0ff" : isHovered ? "#d4e0ff" : "#e6edff",
      transform: isPressed
        ? "translate(0em, 0.75em)"
        : isHovered
        ? "translate(0, 0.25em)"
        : "translate(0, 0)",
    };

    const shadowStyle = {
      position: "absolute" as const,
      content: '""',
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "#a8c5ff",
      borderRadius: "0.75em",
      boxShadow: isPressed
        ? "0 0 0 2px #8da7ff, 0 0 #c4d6ff"
        : isHovered
        ? "0 0 0 2px #8da7ff, 0 0.5em 0 0 #c4d6ff"
        : "0 0 0 2px #8da7ff, 0 0.625em 0 0 #c4d6ff",
      transform: isPressed
        ? "translate3d(0, 0, -1em)"
        : isHovered
        ? "translate3d(0, 0.5em, -1em)"
        : "translate3d(0, 0.75em, -1em)",
      transition:
        "transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1)",
      pointerEvents: "none" as const,
      zIndex: -1,
    };

    return (
      <button
        ref={ref}
        style={buttonStyle}
        className={cn("relative", className)}
        disabled={disabled}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        {...props}
      >
        <div style={shadowStyle} />
        <span className="relative z-10">{children ?? "Hover Me"}</span>
      </button>
    );
  }
);

ThreedButton.displayName = "ThreedButton";

export default ThreedButton;
