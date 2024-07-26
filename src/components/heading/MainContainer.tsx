import React from "react";
import { className } from "postcss-selector-parser";

interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function MainContainer({ children, className }: MainContainerProps) {
  return <header className={`bg-beigeLight ${className}`}>{children}</header>;
}
