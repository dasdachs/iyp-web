import React from "react";
import { Typography } from "@iyp/components/Typography";

interface ButtonProps {
  size: "normal" | "small";
  onClick?: () => void;
  text?: string;
  icon?: React.ReactNode;
}

export function Button({ size, onClick, text, icon }: ButtonProps) {
  return (
    <button className="inline-flex flex-row outline outline-1 rounded-md p-2" onClick={onClick}>
      {icon}
      <Typography type={`button-link${size === "small" ? "-small" : ""}`}>{text}</Typography>
    </button>
  );
}
